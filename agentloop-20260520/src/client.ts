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
      'cn-shanghai': "agentloop.cn-shanghai.aliyuncs.com",
      'cn-hongkong': "agentloop.cn-hongkong.aliyuncs.com",
      'cn-hangzhou': "agentloop.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "agentloop.cn-beijing.aliyuncs.com",
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
   * 向指定 Dataset 追加结构化数据行，避免客户端拼接 SQL。
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
   * 向指定 Dataset 追加结构化数据行，避免客户端拼接 SQL。
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
   * 创建AgentSpace
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
   * 创建AgentSpace
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
   * 创建上下文库
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
   * 创建上下文库
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
   * 创建 API Key
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
   * 创建 API Key
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
   * 创建数据集
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
   * 创建数据集
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
   * 删除AgentSpace
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
   * 删除AgentSpace
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
   * 删除上下文库
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
   * 删除上下文库
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
   * 删除 API Key
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
   * 删除 API Key
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
   * 删除数据集
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
   * 删除数据集
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
   * 删除流水线
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
   * 删除流水线
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
   * 查询Regions
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
   * 查询Regions
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
   * 执行查询语句
   * 
   * @param request - ExecuteQueryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteQueryResponse
   */
  async executeQueryWithOptions(agentSpace: string, datasetName: string, request: $_model.ExecuteQueryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteQueryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
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
   * 执行查询语句
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
   * 查询AgentSpace
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
   * 查询AgentSpace
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
   * 查询上下文库
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
   * 查询上下文库
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
   * 获取 API Key
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
   * 获取 API Key
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
   * 查询数据集
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
   * 查询数据集
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
   * 查询流水线
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
   * 查询流水线
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
   * 查询AgentSpace列表
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
   * 查询AgentSpace列表
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
   * 获取 API Key 列表
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
   * 获取 API Key 列表
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
   * 查询上下文库列表
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
   * 查询上下文库列表
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
   * 查询数据集列表
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
   * 查询数据集列表
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
   * 查询流水线列表
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
   * 查询流水线列表
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
   * 搜索上下文
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
   * 搜索上下文
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
   * 更新AgentSpace
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
   * 更新AgentSpace
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
   * 修改上下文库配置
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
   * 修改上下文库配置
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
   * 更新数据集
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
   * 更新数据集
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
   * 更新流水线
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
   * 更新流水线
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
