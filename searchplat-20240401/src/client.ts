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
      'eu-central-1': "searchplat.eu-central-1.aliyuncs.com",
      'cn-shanghai': "searchplat.cn-shanghai.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("searchplat", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Stops a service.
   * 
   * @param request - CeaseFunctionInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CeaseFunctionInstanceResponse
   */
  async ceaseFunctionInstanceWithOptions(workspaceName: string, functionName: string, instanceName: string, request: $_model.CeaseFunctionInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CeaseFunctionInstanceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CeaseFunctionInstance",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}/actions/cease`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CeaseFunctionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CeaseFunctionInstanceResponse({}));
  }

  /**
   * Stops a service.
   * 
   * @param request - CeaseFunctionInstanceRequest
   * @returns CeaseFunctionInstanceResponse
   */
  async ceaseFunctionInstance(workspaceName: string, functionName: string, instanceName: string, request: $_model.CeaseFunctionInstanceRequest): Promise<$_model.CeaseFunctionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.ceaseFunctionInstanceWithOptions(workspaceName, functionName, instanceName, request, headers, runtime);
  }

  /**
   * Creates an asynchronous task.
   * 
   * @param request - CreateAsyncTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAsyncTaskResponse
   */
  async createAsyncTaskWithOptions(workspaceName: string, request: $_model.CreateAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAsyncTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataId)) {
      body["dataId"] = request.dataId;
    }

    if (!$dara.isNull(request.id)) {
      body["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.serviceId)) {
      body["serviceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceType)) {
      body["serviceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAsyncTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/async-tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateAsyncTaskResponse({}));
  }

  /**
   * Creates an asynchronous task.
   * 
   * @param request - CreateAsyncTaskRequest
   * @returns CreateAsyncTaskResponse
   */
  async createAsyncTask(workspaceName: string, request: $_model.CreateAsyncTaskRequest): Promise<$_model.CreateAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAsyncTaskWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * Creates a knowledge base-related configuration.
   * 
   * @param request - CreateCapabilityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCapabilityResponse
   */
  async createCapabilityWithOptions(workspaceName: string, itemCategory: string, request: $_model.CreateCapabilityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCapabilityResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.itemDesc)) {
      body["itemDesc"] = request.itemDesc;
    }

    if (!$dara.isNull(request.itemName)) {
      body["itemName"] = request.itemName;
    }

    if (!$dara.isNull(request.itemValue)) {
      body["itemValue"] = request.itemValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCapability",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/capabilities/${$dara.URL.percentEncode(itemCategory)}/items`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCapabilityResponse>(await this.callApi(params, req, runtime), new $_model.CreateCapabilityResponse({}));
  }

  /**
   * Creates a knowledge base-related configuration.
   * 
   * @param request - CreateCapabilityRequest
   * @returns CreateCapabilityResponse
   */
  async createCapability(workspaceName: string, itemCategory: string, request: $_model.CreateCapabilityRequest): Promise<$_model.CreateCapabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCapabilityWithOptions(workspaceName, itemCategory, request, headers, runtime);
  }

  /**
   * Creates a configuration item in a specified workspace. The prompt and lark types are supported.
   * 
   * @remarks
   * ## Operation description
   * - This API operation allows you to create a configuration for a specific workspace.
   * - The `configType` parameter specifies the type of configuration to create. Valid values: `prompt` and `lark`.
   * - When `dryRun` is set to `true`, the API operation only validates the request without actually performing the creation.
   * - The `configData` field varies depending on the value of `configType`. Refer to the examples for the specific structure to construct the request body.
   * 
   * @param request - CreateConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigResponse
   */
  async createConfigWithOptions(workspaceName: string, configType: string, request: $_model.CreateConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configData)) {
      body["configData"] = request.configData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConfig",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/configs/${$dara.URL.percentEncode(configType)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateConfigResponse({}));
  }

  /**
   * Creates a configuration item in a specified workspace. The prompt and lark types are supported.
   * 
   * @remarks
   * ## Operation description
   * - This API operation allows you to create a configuration for a specific workspace.
   * - The `configType` parameter specifies the type of configuration to create. Valid values: `prompt` and `lark`.
   * - When `dryRun` is set to `true`, the API operation only validates the request without actually performing the creation.
   * - The `configData` field varies depending on the value of `configType`. Refer to the examples for the specific structure to construct the request body.
   * 
   * @param request - CreateConfigRequest
   * @returns CreateConfigResponse
   */
  async createConfig(workspaceName: string, configType: string, request: $_model.CreateConfigRequest): Promise<$_model.CreateConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigWithOptions(workspaceName, configType, request, headers, runtime);
  }

  /**
   * Creates access credentials.
   * 
   * @param request - CreateCredentialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCredentialsResponse
   */
  async createCredentialsWithOptions(workspaceName: string, request: $_model.CreateCredentialsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCredentialsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCredentials",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/credentials`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.CreateCredentialsResponse({}));
  }

  /**
   * Creates access credentials.
   * 
   * @param request - CreateCredentialsRequest
   * @returns CreateCredentialsResponse
   */
  async createCredentials(workspaceName: string, request: $_model.CreateCredentialsRequest): Promise<$_model.CreateCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCredentialsWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * Creates experience data.
   * 
   * @param request - CreateExperienceDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExperienceDataResponse
   */
  async createExperienceDataWithOptions(workspaceName: string, request: $_model.CreateExperienceDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateExperienceDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentType)) {
      body["contentType"] = request.contentType;
    }

    if (!$dara.isNull(request.dataSize)) {
      body["dataSize"] = request.dataSize;
    }

    if (!$dara.isNull(request.dataType)) {
      body["dataType"] = request.dataType;
    }

    if (!$dara.isNull(request.dataValue)) {
      body["dataValue"] = request.dataValue;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.serviceType)) {
      body["serviceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExperienceData",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/experience-data`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateExperienceDataResponse>(await this.callApi(params, req, runtime), new $_model.CreateExperienceDataResponse({}));
  }

  /**
   * Creates experience data.
   * 
   * @param request - CreateExperienceDataRequest
   * @returns CreateExperienceDataResponse
   */
  async createExperienceData(workspaceName: string, request: $_model.CreateExperienceDataRequest): Promise<$_model.CreateExperienceDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperienceDataWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * Creates a service configuration.
   * 
   * @param request - CreateFunctionInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionInstanceResponse
   */
  async createFunctionInstanceWithOptions(workspaceName: string, functionName: string, request: $_model.CreateFunctionInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFunctionInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createParameters)) {
      body["createParameters"] = request.createParameters;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.functionType)) {
      body["functionType"] = request.functionType;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["instanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.modelType)) {
      body["modelType"] = request.modelType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFunctionInstance",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/functions/${$dara.URL.percentEncode(functionName)}/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFunctionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateFunctionInstanceResponse({}));
  }

  /**
   * Creates a service configuration.
   * 
   * @param request - CreateFunctionInstanceRequest
   * @returns CreateFunctionInstanceResponse
   */
  async createFunctionInstance(workspaceName: string, functionName: string, request: $_model.CreateFunctionInstanceRequest): Promise<$_model.CreateFunctionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionInstanceWithOptions(workspaceName, functionName, request, headers, runtime);
  }

  /**
   * Creates a service configuration task.
   * 
   * @param request - CreateFunctionTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionTaskResponse
   */
  async createFunctionTaskWithOptions(workspaceName: string, functionName: string, instanceName: string, request: $_model.CreateFunctionTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFunctionTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFunctionTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFunctionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateFunctionTaskResponse({}));
  }

  /**
   * Creates a service configuration task.
   * 
   * @param request - CreateFunctionTaskRequest
   * @returns CreateFunctionTaskResponse
   */
  async createFunctionTask(workspaceName: string, functionName: string, instanceName: string, request: $_model.CreateFunctionTaskRequest): Promise<$_model.CreateFunctionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionTaskWithOptions(workspaceName, functionName, instanceName, request, headers, runtime);
  }

  /**
   * Creates an offline processing task for video retrieval. You can configure the data source, processing parameters, and output destination.
   * 
   * @remarks
   * ## Operation description.
   * 
   * @param request - CreateOfflineTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOfflineTaskResponse
   */
  async createOfflineTaskWithOptions(workspaceName: string, type: string, request: $_model.CreateOfflineTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOfflineTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.draft)) {
      query["draft"] = request.draft;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.meta)) {
      body["meta"] = request.meta;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.processors)) {
      body["processors"] = request.processors;
    }

    if (!$dara.isNull(request.sink)) {
      body["sink"] = request.sink;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOfflineTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/offline-tasks/${$dara.URL.percentEncode(type)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOfflineTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateOfflineTaskResponse({}));
  }

  /**
   * Creates an offline processing task for video retrieval. You can configure the data source, processing parameters, and output destination.
   * 
   * @remarks
   * ## Operation description.
   * 
   * @param request - CreateOfflineTaskRequest
   * @returns CreateOfflineTaskResponse
   */
  async createOfflineTask(workspaceName: string, type: string, request: $_model.CreateOfflineTaskRequest): Promise<$_model.CreateOfflineTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOfflineTaskWithOptions(workspaceName, type, request, headers, runtime);
  }

  /**
   * Creates an evaluation task for the RAG edition.
   * 
   * @param request - CreateRagEvaluatorTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRagEvaluatorTaskResponse
   */
  async createRagEvaluatorTaskWithOptions(workspaceName: string, request: $_model.CreateRagEvaluatorTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRagEvaluatorTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["app_name"] = request.appName;
    }

    if (!$dara.isNull(request.data)) {
      body["data"] = request.data;
    }

    if (!$dara.isNull(request.dataSourceConfig)) {
      body["data_source_config"] = request.dataSourceConfig;
    }

    if (!$dara.isNull(request.emails)) {
      body["emails"] = request.emails;
    }

    if (!$dara.isNull(request.evaluateConfig)) {
      body["evaluate_config"] = request.evaluateConfig;
    }

    if (!$dara.isNull(request.hasDataSource)) {
      body["has_data_source"] = request.hasDataSource;
    }

    if (!$dara.isNull(request.metrics)) {
      body["metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.taskName)) {
      body["task_name"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRagEvaluatorTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/rag-evaluator/v1/api/task`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRagEvaluatorTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateRagEvaluatorTaskResponse({}));
  }

  /**
   * Creates an evaluation task for the RAG edition.
   * 
   * @param request - CreateRagEvaluatorTaskRequest
   * @returns CreateRagEvaluatorTaskResponse
   */
  async createRagEvaluatorTask(workspaceName: string, request: $_model.CreateRagEvaluatorTaskRequest): Promise<$_model.CreateRagEvaluatorTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRagEvaluatorTaskWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * Create Workspace
   * 
   * @param request - CreateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(request: $_model.CreateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.engineType)) {
      body["engineType"] = request.engineType;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.quota)) {
      body["quota"] = request.quota;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspace",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
  }

  /**
   * Create Workspace
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: $_model.CreateWorkspaceRequest): Promise<$_model.CreateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes a specific configuration item from a specified workspace.
   * 
   * @remarks
   * ## Operation description
   * This API operation allows you to delete a specific configuration item by specifying the workspace name, configuration category, and configuration name. Before calling this operation, ensure that you have sufficient permissions (such as the `DeleteCapability` action in a RAM policy). After a configuration item is deleted, all related data and services may be affected.
   * 
   * @param request - DeleteCapabilityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCapabilityResponse
   */
  async deleteCapabilityWithOptions(workspaceName: string, itemCategory: string, itemName: string, request: $_model.DeleteCapabilityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCapabilityResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCapability",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/capabilities/${$dara.URL.percentEncode(itemCategory)}/items/${$dara.URL.percentEncode(itemName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCapabilityResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCapabilityResponse({}));
  }

  /**
   * Deletes a specific configuration item from a specified workspace.
   * 
   * @remarks
   * ## Operation description
   * This API operation allows you to delete a specific configuration item by specifying the workspace name, configuration category, and configuration name. Before calling this operation, ensure that you have sufficient permissions (such as the `DeleteCapability` action in a RAM policy). After a configuration item is deleted, all related data and services may be affected.
   * 
   * @param request - DeleteCapabilityRequest
   * @returns DeleteCapabilityResponse
   */
  async deleteCapability(workspaceName: string, itemCategory: string, itemName: string, request: $_model.DeleteCapabilityRequest): Promise<$_model.DeleteCapabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCapabilityWithOptions(workspaceName, itemCategory, itemName, request, headers, runtime);
  }

  /**
   * Deletes a specific type of configuration from a specified workspace.
   * 
   * @remarks
   * ## Request description.
   * 
   * @param request - DeleteConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigResponse
   */
  async deleteConfigWithOptions(workspaceName: string, configType: string, id: string, request: $_model.DeleteConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfig",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/configs/${$dara.URL.percentEncode(configType)}/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConfigResponse({}));
  }

  /**
   * Deletes a specific type of configuration from a specified workspace.
   * 
   * @remarks
   * ## Request description.
   * 
   * @param request - DeleteConfigRequest
   * @returns DeleteConfigResponse
   */
  async deleteConfig(workspaceName: string, configType: string, id: string, request: $_model.DeleteConfigRequest): Promise<$_model.DeleteConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigWithOptions(workspaceName, configType, id, request, headers, runtime);
  }

  /**
   * Deletes an access credential.
   * 
   * @param request - DeleteCredentialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCredentialsResponse
   */
  async deleteCredentialsWithOptions(token: string, workspaceName: string, request: $_model.DeleteCredentialsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCredentialsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCredentials",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/credentials/${$dara.URL.percentEncode(token)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCredentialsResponse({}));
  }

  /**
   * Deletes an access credential.
   * 
   * @param request - DeleteCredentialsRequest
   * @returns DeleteCredentialsResponse
   */
  async deleteCredentials(token: string, workspaceName: string, request: $_model.DeleteCredentialsRequest): Promise<$_model.DeleteCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCredentialsWithOptions(token, workspaceName, request, headers, runtime);
  }

  /**
   * Delete experience data
   * 
   * @param request - DeleteExperienceDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperienceDataResponse
   */
  async deleteExperienceDataWithOptions(id: string, workspaceName: string, request: $_model.DeleteExperienceDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExperienceDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExperienceData",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/experience-data/${$dara.URL.percentEncode(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExperienceDataResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExperienceDataResponse({}));
  }

  /**
   * Delete experience data
   * 
   * @param request - DeleteExperienceDataRequest
   * @returns DeleteExperienceDataResponse
   */
  async deleteExperienceData(id: string, workspaceName: string, request: $_model.DeleteExperienceDataRequest): Promise<$_model.DeleteExperienceDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperienceDataWithOptions(id, workspaceName, request, headers, runtime);
  }

  /**
   * Deletes a service configuration.
   * 
   * @param request - DeleteFunctionInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionInstanceResponse
   */
  async deleteFunctionInstanceWithOptions(workspaceName: string, functionName: string, instanceName: string, request: $_model.DeleteFunctionInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFunctionInstanceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFunctionInstance",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFunctionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFunctionInstanceResponse({}));
  }

  /**
   * Deletes a service configuration.
   * 
   * @param request - DeleteFunctionInstanceRequest
   * @returns DeleteFunctionInstanceResponse
   */
  async deleteFunctionInstance(workspaceName: string, functionName: string, instanceName: string, request: $_model.DeleteFunctionInstanceRequest): Promise<$_model.DeleteFunctionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionInstanceWithOptions(workspaceName, functionName, instanceName, request, headers, runtime);
  }

  /**
   * Deletes a batch task.
   * 
   * @param request - DeleteOfflineTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOfflineTaskResponse
   */
  async deleteOfflineTaskWithOptions(workspaceName: string, type: string, taskName: string, request: $_model.DeleteOfflineTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOfflineTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOfflineTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/offline-tasks/${$dara.URL.percentEncode(type)}/${$dara.URL.percentEncode(taskName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOfflineTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOfflineTaskResponse({}));
  }

  /**
   * Deletes a batch task.
   * 
   * @param request - DeleteOfflineTaskRequest
   * @returns DeleteOfflineTaskResponse
   */
  async deleteOfflineTask(workspaceName: string, type: string, taskName: string, request: $_model.DeleteOfflineTaskRequest): Promise<$_model.DeleteOfflineTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOfflineTaskWithOptions(workspaceName, type, taskName, request, headers, runtime);
  }

  /**
   * Deletes a RAG evaluation task.
   * 
   * @param request - DeleteRagEvaluatorTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRagEvaluatorTaskResponse
   */
  async deleteRagEvaluatorTaskWithOptions(workspaceName: string, taskId: string, request: $_model.DeleteRagEvaluatorTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRagEvaluatorTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRagEvaluatorTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/rag-evaluator/v1/api/task/${$dara.URL.percentEncode(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRagEvaluatorTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRagEvaluatorTaskResponse({}));
  }

  /**
   * Deletes a RAG evaluation task.
   * 
   * @param request - DeleteRagEvaluatorTaskRequest
   * @returns DeleteRagEvaluatorTaskResponse
   */
  async deleteRagEvaluatorTask(workspaceName: string, taskId: string, request: $_model.DeleteRagEvaluatorTaskRequest): Promise<$_model.DeleteRagEvaluatorTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRagEvaluatorTaskWithOptions(workspaceName, taskId, request, headers, runtime);
  }

  /**
   * Deletes a workspace.
   * 
   * @param request - DeleteWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspaceWithOptions(workspaceName: string, request: $_model.DeleteWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspace",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}`,
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
   * 
   * @param request - DeleteWorkspaceRequest
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(workspaceName: string, request: $_model.DeleteWorkspaceRequest): Promise<$_model.DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * Query the details of a configuration item of a specific category within a specified workspace.
   * 
   * @remarks
   * ## Request Description
   * This API is used to retrieve specific configuration information based on the provided workspace name, configuration category, and configuration name. Please ensure the parameters in the request path are accurate, especially the three required fields: `workspaceName`, `itemCategory`, and `itemName`. Additionally, please note that `itemCategory` currently only supports the `ai_search_agent` category.
   * 
   * @param request - DescribeCapabilityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCapabilityResponse
   */
  async describeCapabilityWithOptions(workspaceName: string, itemCategory: string, itemName: string, request: $_model.DescribeCapabilityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCapabilityResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCapability",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/capabilities/${$dara.URL.percentEncode(itemCategory)}/items/${$dara.URL.percentEncode(itemName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCapabilityResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCapabilityResponse({}));
  }

  /**
   * Query the details of a configuration item of a specific category within a specified workspace.
   * 
   * @remarks
   * ## Request Description
   * This API is used to retrieve specific configuration information based on the provided workspace name, configuration category, and configuration name. Please ensure the parameters in the request path are accurate, especially the three required fields: `workspaceName`, `itemCategory`, and `itemName`. Additionally, please note that `itemCategory` currently only supports the `ai_search_agent` category.
   * 
   * @param request - DescribeCapabilityRequest
   * @returns DescribeCapabilityResponse
   */
  async describeCapability(workspaceName: string, itemCategory: string, itemName: string, request: $_model.DescribeCapabilityRequest): Promise<$_model.DescribeCapabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCapabilityWithOptions(workspaceName, itemCategory, itemName, request, headers, runtime);
  }

  /**
   * DescribeRegions.
   * 
   * @param request - DescribeRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * DescribeRegions.
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
   * Retrieves the details of an asynchronous task.
   * 
   * @param request - GetAsyncTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTaskWithOptions(workspaceName: string, id: string, request: $_model.GetAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAsyncTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/async-tasks/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetAsyncTaskResponse({}));
  }

  /**
   * Retrieves the details of an asynchronous task.
   * 
   * @param request - GetAsyncTaskRequest
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTask(workspaceName: string, id: string, request: $_model.GetAsyncTaskRequest): Promise<$_model.GetAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAsyncTaskWithOptions(workspaceName, id, request, headers, runtime);
  }

  /**
   * Queries a specific type of configuration from a specified workspace.
   * 
   * @remarks
   * ## Request description.
   * 
   * @param request - GetConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigResponse
   */
  async getConfigWithOptions(workspaceName: string, configType: string, id: string, request: $_model.GetConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConfig",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/configs/${$dara.URL.percentEncode(configType)}/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetConfigResponse({}));
  }

  /**
   * Queries a specific type of configuration from a specified workspace.
   * 
   * @remarks
   * ## Request description.
   * 
   * @param request - GetConfigRequest
   * @returns GetConfigResponse
   */
  async getConfig(workspaceName: string, configType: string, id: string, request: $_model.GetConfigRequest): Promise<$_model.GetConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConfigWithOptions(workspaceName, configType, id, request, headers, runtime);
  }

  /**
   * Retrieves the details of an access credential.
   * 
   * @param request - GetCredentialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCredentialsResponse
   */
  async getCredentialsWithOptions(token: string, workspaceName: string, request: $_model.GetCredentialsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCredentialsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCredentials",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/credentials/${$dara.URL.percentEncode(token)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.GetCredentialsResponse({}));
  }

  /**
   * Retrieves the details of an access credential.
   * 
   * @param request - GetCredentialsRequest
   * @returns GetCredentialsResponse
   */
  async getCredentials(token: string, workspaceName: string, request: $_model.GetCredentialsRequest): Promise<$_model.GetCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCredentialsWithOptions(token, workspaceName, request, headers, runtime);
  }

  /**
   * Retrieves the details of experience data.
   * 
   * @param request - GetExperienceDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperienceDataResponse
   */
  async getExperienceDataWithOptions(workspaceName: string, id: string, request: $_model.GetExperienceDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetExperienceDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExperienceData",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/experience-data/${$dara.URL.percentEncode(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExperienceDataResponse>(await this.callApi(params, req, runtime), new $_model.GetExperienceDataResponse({}));
  }

  /**
   * Retrieves the details of experience data.
   * 
   * @param request - GetExperienceDataRequest
   * @returns GetExperienceDataResponse
   */
  async getExperienceData(workspaceName: string, id: string, request: $_model.GetExperienceDataRequest): Promise<$_model.GetExperienceDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperienceDataWithOptions(workspaceName, id, request, headers, runtime);
  }

  /**
   * Queries the details of a specific feature instance in a specified workspace.
   * 
   * @param request - GetFunctionInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionInstanceResponse
   */
  async getFunctionInstanceWithOptions(workspaceName: string, functionName: string, instanceName: string, request: $_model.GetFunctionInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFunctionInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.output)) {
      query["output"] = request.output;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFunctionInstance",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFunctionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetFunctionInstanceResponse({}));
  }

  /**
   * Queries the details of a specific feature instance in a specified workspace.
   * 
   * @param request - GetFunctionInstanceRequest
   * @returns GetFunctionInstanceResponse
   */
  async getFunctionInstance(workspaceName: string, functionName: string, instanceName: string, request: $_model.GetFunctionInstanceRequest): Promise<$_model.GetFunctionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionInstanceWithOptions(workspaceName, functionName, instanceName, request, headers, runtime);
  }

  /**
   * Retrieves information about an offline node.
   * 
   * @param request - GetOfflineTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOfflineTaskResponse
   */
  async getOfflineTaskWithOptions(workspaceName: string, type: string, taskName: string, request: $_model.GetOfflineTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOfflineTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOfflineTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/offline-tasks/${$dara.URL.percentEncode(type)}/${$dara.URL.percentEncode(taskName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOfflineTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetOfflineTaskResponse({}));
  }

  /**
   * Retrieves information about an offline node.
   * 
   * @param request - GetOfflineTaskRequest
   * @returns GetOfflineTaskResponse
   */
  async getOfflineTask(workspaceName: string, type: string, taskName: string, request: $_model.GetOfflineTaskRequest): Promise<$_model.GetOfflineTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOfflineTaskWithOptions(workspaceName, type, taskName, request, headers, runtime);
  }

  /**
   * Queries the details of offline task logs in a specified workspace.
   * 
   * @remarks
   * ## Operation description
   * - This operation allows you to retrieve offline task logs information by specifying the workspace name, node type, and node name.
   * - Provide a valid `regionId` as one of the query parameters to specify the area for the request.
   * - The returned information includes but is not limited to network configurations (private ES and public ES) and their enabling status, domain names, and IP whitelist groups.
   * - Note: Ensure that you have sufficient permissions (such as the `GetLog` action in the RAM policy) to invoke this operation.
   * 
   * @param request - GetOfflineTaskLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOfflineTaskLogResponse
   */
  async getOfflineTaskLogWithOptions(workspaceName: string, type: string, taskName: string, request: $_model.GetOfflineTaskLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOfflineTaskLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOfflineTaskLog",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/offline-tasks/${$dara.URL.percentEncode(type)}/${$dara.URL.percentEncode(taskName)}/log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOfflineTaskLogResponse>(await this.callApi(params, req, runtime), new $_model.GetOfflineTaskLogResponse({}));
  }

  /**
   * Queries the details of offline task logs in a specified workspace.
   * 
   * @remarks
   * ## Operation description
   * - This operation allows you to retrieve offline task logs information by specifying the workspace name, node type, and node name.
   * - Provide a valid `regionId` as one of the query parameters to specify the area for the request.
   * - The returned information includes but is not limited to network configurations (private ES and public ES) and their enabling status, domain names, and IP whitelist groups.
   * - Note: Ensure that you have sufficient permissions (such as the `GetLog` action in the RAM policy) to invoke this operation.
   * 
   * @param request - GetOfflineTaskLogRequest
   * @returns GetOfflineTaskLogResponse
   */
  async getOfflineTaskLog(workspaceName: string, type: string, taskName: string, request: $_model.GetOfflineTaskLogRequest): Promise<$_model.GetOfflineTaskLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOfflineTaskLogWithOptions(workspaceName, type, taskName, request, headers, runtime);
  }

  /**
   * Retrieves a RAG evaluation task.
   * 
   * @param request - GetRagEvaluatorTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRagEvaluatorTaskResponse
   */
  async getRagEvaluatorTaskWithOptions(workspaceName: string, taskId: string, request: $_model.GetRagEvaluatorTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRagEvaluatorTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRagEvaluatorTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/rag-evaluator/v1/api/task/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRagEvaluatorTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetRagEvaluatorTaskResponse({}));
  }

  /**
   * Retrieves a RAG evaluation task.
   * 
   * @param request - GetRagEvaluatorTaskRequest
   * @returns GetRagEvaluatorTaskResponse
   */
  async getRagEvaluatorTask(workspaceName: string, taskId: string, request: $_model.GetRagEvaluatorTaskRequest): Promise<$_model.GetRagEvaluatorTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRagEvaluatorTaskWithOptions(workspaceName, taskId, request, headers, runtime);
  }

  /**
   * Retrieves data table field information.
   * 
   * @param request - GetTableColumnsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableColumnsResponse
   */
  async getTableColumnsWithOptions(workspaceName: string, dataSourceType: string, request: $_model.GetTableColumnsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableColumnsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.params)) {
      query["params"] = request.params;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableColumns",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/data-sources/${$dara.URL.percentEncode(dataSourceType)}/columns`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableColumnsResponse>(await this.callApi(params, req, runtime), new $_model.GetTableColumnsResponse({}));
  }

  /**
   * Retrieves data table field information.
   * 
   * @param request - GetTableColumnsRequest
   * @returns GetTableColumnsResponse
   */
  async getTableColumns(workspaceName: string, dataSourceType: string, request: $_model.GetTableColumnsRequest): Promise<$_model.GetTableColumnsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableColumnsWithOptions(workspaceName, dataSourceType, request, headers, runtime);
  }

  /**
   * @param request - GetTableFieldsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableFieldsResponse
   */
  async getTableFieldsWithOptions(workspaceName: string, dataSourceType: string, request: $_model.GetTableFieldsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableFieldsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.params)) {
      query["params"] = request.params;
    }

    if (!$dara.isNull(request.rawType)) {
      query["rawType"] = request.rawType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableFields",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/data-sources/${$dara.URL.percentEncode(dataSourceType)}/fields`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableFieldsResponse>(await this.callApi(params, req, runtime), new $_model.GetTableFieldsResponse({}));
  }

  /**
   * @param request - GetTableFieldsRequest
   * @returns GetTableFieldsResponse
   */
  async getTableFields(workspaceName: string, dataSourceType: string, request: $_model.GetTableFieldsRequest): Promise<$_model.GetTableFieldsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableFieldsWithOptions(workspaceName, dataSourceType, request, headers, runtime);
  }

  /**
   * Retrieves data tables.
   * 
   * @param request - GetTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTablesResponse
   */
  async getTablesWithOptions(workspaceName: string, dataSourceType: string, request: $_model.GetTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.params)) {
      query["params"] = request.params;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTables",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/data-sources/${$dara.URL.percentEncode(dataSourceType)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTablesResponse>(await this.callApi(params, req, runtime), new $_model.GetTablesResponse({}));
  }

  /**
   * Retrieves data tables.
   * 
   * @param request - GetTablesRequest
   * @returns GetTablesResponse
   */
  async getTables(workspaceName: string, dataSourceType: string, request: $_model.GetTablesRequest): Promise<$_model.GetTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTablesWithOptions(workspaceName, dataSourceType, request, headers, runtime);
  }

  /**
   * Retrieves a workspace.
   * 
   * @param request - GetWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceResponse
   */
  async getWorkspaceWithOptions(workspaceName: string, request: $_model.GetWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspace",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}`,
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
   * 
   * @param request - GetWorkspaceRequest
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(workspaceName: string, request: $_model.GetWorkspaceRequest): Promise<$_model.GetWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * Retrieves a list of asynchronous tasks.
   * 
   * @param request - ListAsyncTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsyncTasksResponse
   */
  async listAsyncTasksWithOptions(workspaceName: string, request: $_model.ListAsyncTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAsyncTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataId)) {
      query["dataId"] = request.dataId;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAsyncTasks",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/async-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAsyncTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListAsyncTasksResponse({}));
  }

  /**
   * Retrieves a list of asynchronous tasks.
   * 
   * @param request - ListAsyncTasksRequest
   * @returns ListAsyncTasksResponse
   */
  async listAsyncTasks(workspaceName: string, request: $_model.ListAsyncTasksRequest): Promise<$_model.ListAsyncTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAsyncTasksWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * Queries the list of configuration items of a specific category in a specified workspace.
   * 
   * @remarks
   * ## Operation description
   * You can use this API operation to retrieve the list of configuration items based on the specified workspace name and configuration category. Paged query is supported. Use the `pageNumber` and `pageSize` parameters to control the number of results and the page number. The `nextToken` and `maxResults` parameters are also provided for paged query when handling large amounts of data.
   * 
   * @param request - ListCapabilitiesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCapabilitiesResponse
   */
  async listCapabilitiesWithOptions(workspaceName: string, itemCategory: string, request: $_model.ListCapabilitiesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCapabilitiesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
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
      action: "ListCapabilities",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/capabilities/${$dara.URL.percentEncode(itemCategory)}/items`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCapabilitiesResponse>(await this.callApi(params, req, runtime), new $_model.ListCapabilitiesResponse({}));
  }

  /**
   * Queries the list of configuration items of a specific category in a specified workspace.
   * 
   * @remarks
   * ## Operation description
   * You can use this API operation to retrieve the list of configuration items based on the specified workspace name and configuration category. Paged query is supported. Use the `pageNumber` and `pageSize` parameters to control the number of results and the page number. The `nextToken` and `maxResults` parameters are also provided for paged query when handling large amounts of data.
   * 
   * @param request - ListCapabilitiesRequest
   * @returns ListCapabilitiesResponse
   */
  async listCapabilities(workspaceName: string, itemCategory: string, request: $_model.ListCapabilitiesRequest): Promise<$_model.ListCapabilitiesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCapabilitiesWithOptions(workspaceName, itemCategory, request, headers, runtime);
  }

  /**
   * Queries the list of configurations of a specific type in a specified workspace.
   * 
   * @remarks
   * ## Request description.
   * 
   * @param request - ListConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigsResponse
   */
  async listConfigsWithOptions(workspaceName: string, configType: string, request: $_model.ListConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
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
      action: "ListConfigs",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/configs/${$dara.URL.percentEncode(configType)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListConfigsResponse({}));
  }

  /**
   * Queries the list of configurations of a specific type in a specified workspace.
   * 
   * @remarks
   * ## Request description.
   * 
   * @param request - ListConfigsRequest
   * @returns ListConfigsResponse
   */
  async listConfigs(workspaceName: string, configType: string, request: $_model.ListConfigsRequest): Promise<$_model.ListConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigsWithOptions(workspaceName, configType, request, headers, runtime);
  }

  /**
   * Retrieves a list of access credentials.
   * 
   * @param request - ListCredentialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCredentialsResponse
   */
  async listCredentialsWithOptions(workspaceName: string, request: $_model.ListCredentialsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCredentialsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
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
      action: "ListCredentials",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/credentials`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.ListCredentialsResponse({}));
  }

  /**
   * Retrieves a list of access credentials.
   * 
   * @param request - ListCredentialsRequest
   * @returns ListCredentialsResponse
   */
  async listCredentials(workspaceName: string, request: $_model.ListCredentialsRequest): Promise<$_model.ListCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCredentialsWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * Retrieves all experience data in a specified workspace, with support for filtering by service type and data type.
   * 
   * @remarks
   * ## Operation description
   * - This API operation queries all experience data of a user in a specific workspace. The results are sorted by creation time in descending order by default.
   * - Pagination is not supported. However, you can filter data by using the serviceType and dataType parameters.
   * - workspaceName is a path parameter and must be specified to indicate the workspace to query.
   * 
   * @param request - ListExperienceDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperienceDataResponse
   */
  async listExperienceDataWithOptions(workspaceName: string, request: $_model.ListExperienceDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExperienceDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataType)) {
      query["dataType"] = request.dataType;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExperienceData",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/experience-data`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExperienceDataResponse>(await this.callApi(params, req, runtime), new $_model.ListExperienceDataResponse({}));
  }

  /**
   * Retrieves all experience data in a specified workspace, with support for filtering by service type and data type.
   * 
   * @remarks
   * ## Operation description
   * - This API operation queries all experience data of a user in a specific workspace. The results are sorted by creation time in descending order by default.
   * - Pagination is not supported. However, you can filter data by using the serviceType and dataType parameters.
   * - workspaceName is a path parameter and must be specified to indicate the workspace to query.
   * 
   * @param request - ListExperienceDataRequest
   * @returns ListExperienceDataResponse
   */
  async listExperienceData(workspaceName: string, request: $_model.ListExperienceDataRequest): Promise<$_model.ListExperienceDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperienceDataWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * Retrieves a list of service configurations.
   * 
   * @param request - ListFunctionInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionInstancesResponse
   */
  async listFunctionInstancesWithOptions(workspaceName: string, functionName: string, request: $_model.ListFunctionInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFunctionInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionType)) {
      query["functionType"] = request.functionType;
    }

    if (!$dara.isNull(request.modelType)) {
      query["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.output)) {
      query["output"] = request.output;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFunctionInstances",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/functions/${$dara.URL.percentEncode(functionName)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFunctionInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListFunctionInstancesResponse({}));
  }

  /**
   * Retrieves a list of service configurations.
   * 
   * @param request - ListFunctionInstancesRequest
   * @returns ListFunctionInstancesResponse
   */
  async listFunctionInstances(workspaceName: string, functionName: string, request: $_model.ListFunctionInstancesRequest): Promise<$_model.ListFunctionInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionInstancesWithOptions(workspaceName, functionName, request, headers, runtime);
  }

  /**
   * Retrieves the restriction items of a feature.
   * 
   * @param request - ListFunctionRestrictionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionRestrictionsResponse
   */
  async listFunctionRestrictionsWithOptions(workspaceName: string, functionName: string, restrictionName: string, request: $_model.ListFunctionRestrictionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListFunctionRestrictionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelType)) {
      query["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFunctionRestrictions",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/functions/${$dara.URL.percentEncode(functionName)}/restrictions/${$dara.URL.percentEncode(restrictionName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListFunctionRestrictionsResponse>(await this.callApi(params, req, runtime), new $_model.ListFunctionRestrictionsResponse({}));
  }

  /**
   * Retrieves the restriction items of a feature.
   * 
   * @param request - ListFunctionRestrictionsRequest
   * @returns ListFunctionRestrictionsResponse
   */
  async listFunctionRestrictions(workspaceName: string, functionName: string, restrictionName: string, request: $_model.ListFunctionRestrictionsRequest): Promise<$_model.ListFunctionRestrictionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionRestrictionsWithOptions(workspaceName, functionName, restrictionName, request, headers, runtime);
  }

  /**
   * Get Offline Task Information List
   * 
   * @param tmpReq - ListOfflineTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOfflineTaskResponse
   */
  async listOfflineTaskWithOptions(workspaceName: string, type: string, tmpReq: $_model.ListOfflineTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOfflineTaskResponse> {
    tmpReq.validate();
    let request = new $_model.ListOfflineTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "labels", "json");
    }

    if (!$dara.isNull(tmpReq.taskStatus)) {
      request.taskStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskStatus, "taskStatus", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelsShrink)) {
      query["labels"] = request.labelsShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["taskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskStatusShrink)) {
      query["taskStatus"] = request.taskStatusShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOfflineTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/offline-tasks/${$dara.URL.percentEncode(type)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOfflineTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListOfflineTaskResponse({}));
  }

  /**
   * Get Offline Task Information List
   * 
   * @param request - ListOfflineTaskRequest
   * @returns ListOfflineTaskResponse
   */
  async listOfflineTask(workspaceName: string, type: string, request: $_model.ListOfflineTaskRequest): Promise<$_model.ListOfflineTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOfflineTaskWithOptions(workspaceName, type, request, headers, runtime);
  }

  /**
   * Queries the error log list of batch tasks in a specified workspace.
   * 
   * @remarks
   * ## Operation description
   * - This API operation retrieves error logs for a specific workspace, node type, and node name.
   * - The `startTime` and `endTime` parameters allow you to define a custom query time range. If not provided, data from the past hour is queried by default.
   * - The paging parameters `pageNum` and `pageSize` help control the number of returned results and page navigation. They represent the requested page number and the number of log entries per page, with default values of 1 and 10 respectively.
   * - Note: Ensure that you have obtained the required RAM permissions (Action: ListErrorLogs) before you invoke this operation.
   * 
   * @param request - ListOfflineTaskErrorLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOfflineTaskErrorLogsResponse
   */
  async listOfflineTaskErrorLogsWithOptions(workspaceName: string, type: string, taskName: string, request: $_model.ListOfflineTaskErrorLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOfflineTaskErrorLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["pageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOfflineTaskErrorLogs",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/offline-tasks/${$dara.URL.percentEncode(type)}/${$dara.URL.percentEncode(taskName)}/error-logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOfflineTaskErrorLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListOfflineTaskErrorLogsResponse({}));
  }

  /**
   * Queries the error log list of batch tasks in a specified workspace.
   * 
   * @remarks
   * ## Operation description
   * - This API operation retrieves error logs for a specific workspace, node type, and node name.
   * - The `startTime` and `endTime` parameters allow you to define a custom query time range. If not provided, data from the past hour is queried by default.
   * - The paging parameters `pageNum` and `pageSize` help control the number of returned results and page navigation. They represent the requested page number and the number of log entries per page, with default values of 1 and 10 respectively.
   * - Note: Ensure that you have obtained the required RAM permissions (Action: ListErrorLogs) before you invoke this operation.
   * 
   * @param request - ListOfflineTaskErrorLogsRequest
   * @returns ListOfflineTaskErrorLogsResponse
   */
  async listOfflineTaskErrorLogs(workspaceName: string, type: string, taskName: string, request: $_model.ListOfflineTaskErrorLogsRequest): Promise<$_model.ListOfflineTaskErrorLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOfflineTaskErrorLogsWithOptions(workspaceName, type, taskName, request, headers, runtime);
  }

  /**
   * Retrieves the list of RAG evaluation tasks.
   * 
   * @param request - ListRagEvaluatorTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRagEvaluatorTasksResponse
   */
  async listRagEvaluatorTasksWithOptions(workspaceName: string, request: $_model.ListRagEvaluatorTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRagEvaluatorTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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
      action: "ListRagEvaluatorTasks",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/rag-evaluator/v1/api/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRagEvaluatorTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListRagEvaluatorTasksResponse({}));
  }

  /**
   * Retrieves the list of RAG evaluation tasks.
   * 
   * @param request - ListRagEvaluatorTasksRequest
   * @returns ListRagEvaluatorTasksResponse
   */
  async listRagEvaluatorTasks(workspaceName: string, request: $_model.ListRagEvaluatorTasksRequest): Promise<$_model.ListRagEvaluatorTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRagEvaluatorTasksWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * Retrieves the list of services.
   * 
   * @param request - ListServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(workspaceName: string, request: $_model.ListServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modelType)) {
      query["modelType"] = request.modelType;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["serviceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["serviceType"] = request.serviceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServices",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServicesResponse>(await this.callApi(params, req, runtime), new $_model.ListServicesResponse({}));
  }

  /**
   * Retrieves the list of services.
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(workspaceName: string, request: $_model.ListServicesRequest): Promise<$_model.ListServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * Retrieves a list of workspaces.
   * 
   * @param request - ListWorkspacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(request: $_model.ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["sortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces`,
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
   * Updates a batch task.
   * 
   * @param request - ModifyOfflineTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOfflineTaskResponse
   */
  async modifyOfflineTaskWithOptions(workspaceName: string, type: string, taskName: string, request: $_model.ModifyOfflineTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyOfflineTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.meta)) {
      body["meta"] = request.meta;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.processors)) {
      body["processors"] = request.processors;
    }

    if (!$dara.isNull(request.sink)) {
      body["sink"] = request.sink;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyOfflineTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/offline-tasks/${$dara.URL.percentEncode(type)}/${$dara.URL.percentEncode(taskName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyOfflineTaskResponse>(await this.callApi(params, req, runtime), new $_model.ModifyOfflineTaskResponse({}));
  }

  /**
   * Updates a batch task.
   * 
   * @param request - ModifyOfflineTaskRequest
   * @returns ModifyOfflineTaskResponse
   */
  async modifyOfflineTask(workspaceName: string, type: string, taskName: string, request: $_model.ModifyOfflineTaskRequest): Promise<$_model.ModifyOfflineTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyOfflineTaskWithOptions(workspaceName, type, taskName, request, headers, runtime);
  }

  /**
   * Modifies the network configuration for batch task log scenarios, including enabling or disabling public and private network access and setting IP whitelists.
   * 
   * @remarks
   * ## Operation description
   * - This API allows you to adjust network-related configurations for a specific type of batch node within a specified workspace.
   * - Use this operation to control public or private network access permissions for the ES service and set the corresponding IP whitelists.
   * - When you need to change any network settings (such as enabling or shutting down public network access or updating IP whitelists), ensure that the `network` object contains the correct parameters.
   * - Note: Executing this operation may affect currently running nodes. Proceed with caution.
   * 
   * @param request - ModifyOfflineTaskLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOfflineTaskLogResponse
   */
  async modifyOfflineTaskLogWithOptions(workspaceName: string, type: string, taskName: string, request: $_model.ModifyOfflineTaskLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyOfflineTaskLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.network)) {
      body["network"] = request.network;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyOfflineTaskLog",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/offline-tasks/${$dara.URL.percentEncode(type)}/${$dara.URL.percentEncode(taskName)}/log`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyOfflineTaskLogResponse>(await this.callApi(params, req, runtime), new $_model.ModifyOfflineTaskLogResponse({}));
  }

  /**
   * Modifies the network configuration for batch task log scenarios, including enabling or disabling public and private network access and setting IP whitelists.
   * 
   * @remarks
   * ## Operation description
   * - This API allows you to adjust network-related configurations for a specific type of batch node within a specified workspace.
   * - Use this operation to control public or private network access permissions for the ES service and set the corresponding IP whitelists.
   * - When you need to change any network settings (such as enabling or shutting down public network access or updating IP whitelists), ensure that the `network` object contains the correct parameters.
   * - Note: Executing this operation may affect currently running nodes. Proceed with caution.
   * 
   * @param request - ModifyOfflineTaskLogRequest
   * @returns ModifyOfflineTaskLogResponse
   */
  async modifyOfflineTaskLog(workspaceName: string, type: string, taskName: string, request: $_model.ModifyOfflineTaskLogRequest): Promise<$_model.ModifyOfflineTaskLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyOfflineTaskLogWithOptions(workspaceName, type, taskName, request, headers, runtime);
  }

  /**
   * Restarts the service.
   * 
   * @param request - ResumeFunctionInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeFunctionInstanceResponse
   */
  async resumeFunctionInstanceWithOptions(workspaceName: string, functionName: string, instanceName: string, request: $_model.ResumeFunctionInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeFunctionInstanceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeFunctionInstance",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}/actions/resume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeFunctionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ResumeFunctionInstanceResponse({}));
  }

  /**
   * Restarts the service.
   * 
   * @param request - ResumeFunctionInstanceRequest
   * @returns ResumeFunctionInstanceResponse
   */
  async resumeFunctionInstance(workspaceName: string, functionName: string, instanceName: string, request: $_model.ResumeFunctionInstanceRequest): Promise<$_model.ResumeFunctionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeFunctionInstanceWithOptions(workspaceName, functionName, instanceName, request, headers, runtime);
  }

  /**
   * Starts a batch task.
   * 
   * @remarks
   * ## Operation description.
   * 
   * @param request - StartOfflineTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartOfflineTaskResponse
   */
  async startOfflineTaskWithOptions(workspaceName: string, type: string, taskName: string, request: $_model.StartOfflineTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartOfflineTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parallelism)) {
      body["parallelism"] = request.parallelism;
    }

    if (!$dara.isNull(request.timestamp)) {
      body["timestamp"] = request.timestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartOfflineTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/offline-tasks/${$dara.URL.percentEncode(type)}/${$dara.URL.percentEncode(taskName)}/actions/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartOfflineTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartOfflineTaskResponse({}));
  }

  /**
   * Starts a batch task.
   * 
   * @remarks
   * ## Operation description.
   * 
   * @param request - StartOfflineTaskRequest
   * @returns StartOfflineTaskResponse
   */
  async startOfflineTask(workspaceName: string, type: string, taskName: string, request: $_model.StartOfflineTaskRequest): Promise<$_model.StartOfflineTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startOfflineTaskWithOptions(workspaceName, type, taskName, request, headers, runtime);
  }

  /**
   * Stops a batch task.
   * 
   * @param request - StopOfflineTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopOfflineTaskResponse
   */
  async stopOfflineTaskWithOptions(workspaceName: string, type: string, taskName: string, request: $_model.StopOfflineTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopOfflineTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parallelism)) {
      body["parallelism"] = request.parallelism;
    }

    if (!$dara.isNull(request.timestamp)) {
      body["timestamp"] = request.timestamp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopOfflineTask",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/offline-tasks/${$dara.URL.percentEncode(type)}/${$dara.URL.percentEncode(taskName)}/actions/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopOfflineTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopOfflineTaskResponse({}));
  }

  /**
   * Stops a batch task.
   * 
   * @param request - StopOfflineTaskRequest
   * @returns StopOfflineTaskResponse
   */
  async stopOfflineTask(workspaceName: string, type: string, taskName: string, request: $_model.StopOfflineTaskRequest): Promise<$_model.StopOfflineTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOfflineTaskWithOptions(workspaceName, type, taskName, request, headers, runtime);
  }

  /**
   * Updates a specific configuration item in a specified workspace.
   * 
   * @remarks
   * ## Request description
   * This API operation allows you to update a specific configuration item (`itemName`) under a category (`itemCategory`) in a specified workspace (`workspaceName`). By setting the `dryRun` parameter, you can preview changes without actually applying them. The request body can contain a new configuration description (`itemDesc`) and configuration content (`itemValue`). The structure of `itemValue` must conform to the requirements of the target configuration item.
   * 
   * @param request - UpdateCapabilityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCapabilityResponse
   */
  async updateCapabilityWithOptions(workspaceName: string, itemCategory: string, itemName: string, request: $_model.UpdateCapabilityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCapabilityResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.itemDesc)) {
      body["itemDesc"] = request.itemDesc;
    }

    if (!$dara.isNull(request.itemValue)) {
      body["itemValue"] = request.itemValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCapability",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/capabilities/${$dara.URL.percentEncode(itemCategory)}/items/${$dara.URL.percentEncode(itemName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCapabilityResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCapabilityResponse({}));
  }

  /**
   * Updates a specific configuration item in a specified workspace.
   * 
   * @remarks
   * ## Request description
   * This API operation allows you to update a specific configuration item (`itemName`) under a category (`itemCategory`) in a specified workspace (`workspaceName`). By setting the `dryRun` parameter, you can preview changes without actually applying them. The request body can contain a new configuration description (`itemDesc`) and configuration content (`itemValue`). The structure of `itemValue` must conform to the requirements of the target configuration item.
   * 
   * @param request - UpdateCapabilityRequest
   * @returns UpdateCapabilityResponse
   */
  async updateCapability(workspaceName: string, itemCategory: string, itemName: string, request: $_model.UpdateCapabilityRequest): Promise<$_model.UpdateCapabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCapabilityWithOptions(workspaceName, itemCategory, itemName, request, headers, runtime);
  }

  /**
   * Updates the configuration of a specific type in a specified workspace.
   * 
   * @remarks
   * ## Request description.
   * 
   * @param request - UpdateConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigResponse
   */
  async updateConfigWithOptions(workspaceName: string, configType: string, request: $_model.UpdateConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configData)) {
      body["configData"] = request.configData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConfig",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/configs/${$dara.URL.percentEncode(configType)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateConfigResponse({}));
  }

  /**
   * Updates the configuration of a specific type in a specified workspace.
   * 
   * @remarks
   * ## Request description.
   * 
   * @param request - UpdateConfigRequest
   * @returns UpdateConfigResponse
   */
  async updateConfig(workspaceName: string, configType: string, request: $_model.UpdateConfigRequest): Promise<$_model.UpdateConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigWithOptions(workspaceName, configType, request, headers, runtime);
  }

  /**
   * Modifies an access credential.
   * 
   * @param request - UpdateCredentialsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCredentialsResponse
   */
  async updateCredentialsWithOptions(token: string, workspaceName: string, request: $_model.UpdateCredentialsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCredentialsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enabled)) {
      body["enabled"] = request.enabled;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCredentials",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/credentials/${$dara.URL.percentEncode(token)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCredentialsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCredentialsResponse({}));
  }

  /**
   * Modifies an access credential.
   * 
   * @param request - UpdateCredentialsRequest
   * @returns UpdateCredentialsResponse
   */
  async updateCredentials(token: string, workspaceName: string, request: $_model.UpdateCredentialsRequest): Promise<$_model.UpdateCredentialsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCredentialsWithOptions(token, workspaceName, request, headers, runtime);
  }

  /**
   * Updates the service configuration.
   * 
   * @param request - UpdateFunctionInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionInstanceResponse
   */
  async updateFunctionInstanceWithOptions(workspaceName: string, functionName: string, instanceName: string, request: $_model.UpdateFunctionInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFunctionInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.createParameters)) {
      body["createParameters"] = request.createParameters;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFunctionInstance",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}/functions/${$dara.URL.percentEncode(functionName)}/instances/${$dara.URL.percentEncode(instanceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFunctionInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFunctionInstanceResponse({}));
  }

  /**
   * Updates the service configuration.
   * 
   * @param request - UpdateFunctionInstanceRequest
   * @returns UpdateFunctionInstanceResponse
   */
  async updateFunctionInstance(workspaceName: string, functionName: string, instanceName: string, request: $_model.UpdateFunctionInstanceRequest): Promise<$_model.UpdateFunctionInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFunctionInstanceWithOptions(workspaceName, functionName, instanceName, request, headers, runtime);
  }

  /**
   * Updates a workspace.
   * 
   * @param request - UpdateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspaceWithOptions(workspaceName: string, request: $_model.UpdateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkspaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspace",
      version: "2024-04-01",
      protocol: "HTTPS",
      pathname: `/openapi/platform/workspaces/${$dara.URL.percentEncode(workspaceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkspaceResponse({}));
  }

  /**
   * Updates a workspace.
   * 
   * @param request - UpdateWorkspaceRequest
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspace(workspaceName: string, request: $_model.UpdateWorkspaceRequest): Promise<$_model.UpdateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceWithOptions(workspaceName, request, headers, runtime);
  }

}
