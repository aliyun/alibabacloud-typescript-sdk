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
    this._endpoint = this.getEndpoint("pailangstudio", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建知识库
   * 
   * @param request - CreateKnowledgeBaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKnowledgeBaseResponse
   */
  async createKnowledgeBaseWithOptions(request: $_model.CreateKnowledgeBaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKnowledgeBaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.chunkConfig)) {
      body["ChunkConfig"] = request.chunkConfig;
    }

    if (!$dara.isNull(request.dataSources)) {
      body["DataSources"] = request.dataSources;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.embeddingConfig)) {
      body["EmbeddingConfig"] = request.embeddingConfig;
    }

    if (!$dara.isNull(request.indexColumnConfig)) {
      body["IndexColumnConfig"] = request.indexColumnConfig;
    }

    if (!$dara.isNull(request.knowledgeBaseType)) {
      body["KnowledgeBaseType"] = request.knowledgeBaseType;
    }

    if (!$dara.isNull(request.metaDataConfig)) {
      body["MetaDataConfig"] = request.metaDataConfig;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.outputDir)) {
      body["OutputDir"] = request.outputDir;
    }

    if (!$dara.isNull(request.runtimeId)) {
      body["RuntimeId"] = request.runtimeId;
    }

    if (!$dara.isNull(request.vectorDBConfig)) {
      body["VectorDBConfig"] = request.vectorDBConfig;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKnowledgeBase",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.CreateKnowledgeBaseResponse({}));
  }

  /**
   * 创建知识库
   * 
   * @param request - CreateKnowledgeBaseRequest
   * @returns CreateKnowledgeBaseResponse
   */
  async createKnowledgeBase(request: $_model.CreateKnowledgeBaseRequest): Promise<$_model.CreateKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKnowledgeBaseWithOptions(request, headers, runtime);
  }

  /**
   * 创建知识库任务
   * 
   * @param request - CreateKnowledgeBaseJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateKnowledgeBaseJobResponse
   */
  async createKnowledgeBaseJobWithOptions(KnowledgeBaseId: string, request: $_model.CreateKnowledgeBaseJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateKnowledgeBaseJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.ecsSpecs)) {
      body["EcsSpecs"] = request.ecsSpecs;
    }

    if (!$dara.isNull(request.embeddingConfig)) {
      body["EmbeddingConfig"] = request.embeddingConfig;
    }

    if (!$dara.isNull(request.jobAction)) {
      body["JobAction"] = request.jobAction;
    }

    if (!$dara.isNull(request.maxRunningTimeInSeconds)) {
      body["MaxRunningTimeInSeconds"] = request.maxRunningTimeInSeconds;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateKnowledgeBaseJob",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases/${$dara.URL.percentEncode(KnowledgeBaseId)}/knowledgebasejobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateKnowledgeBaseJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateKnowledgeBaseJobResponse({}));
  }

  /**
   * 创建知识库任务
   * 
   * @param request - CreateKnowledgeBaseJobRequest
   * @returns CreateKnowledgeBaseJobResponse
   */
  async createKnowledgeBaseJob(KnowledgeBaseId: string, request: $_model.CreateKnowledgeBaseJobRequest): Promise<$_model.CreateKnowledgeBaseJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createKnowledgeBaseJobWithOptions(KnowledgeBaseId, request, headers, runtime);
  }

  /**
   * 删除知识库
   * 
   * @param request - DeleteKnowledgeBaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKnowledgeBaseResponse
   */
  async deleteKnowledgeBaseWithOptions(KnowledgeBaseId: string, request: $_model.DeleteKnowledgeBaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKnowledgeBaseResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKnowledgeBase",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases/${$dara.URL.percentEncode(KnowledgeBaseId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKnowledgeBaseResponse({}));
  }

  /**
   * 删除知识库
   * 
   * @param request - DeleteKnowledgeBaseRequest
   * @returns DeleteKnowledgeBaseResponse
   */
  async deleteKnowledgeBase(KnowledgeBaseId: string, request: $_model.DeleteKnowledgeBaseRequest): Promise<$_model.DeleteKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteKnowledgeBaseWithOptions(KnowledgeBaseId, request, headers, runtime);
  }

  /**
   * 删除知识库任务
   * 
   * @param request - DeleteKnowledgeBaseJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKnowledgeBaseJobResponse
   */
  async deleteKnowledgeBaseJobWithOptions(KnowledgeBaseId: string, KnowledgeBaseJobId: string, request: $_model.DeleteKnowledgeBaseJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKnowledgeBaseJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKnowledgeBaseJob",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases/${$dara.URL.percentEncode(KnowledgeBaseId)}/knowledgebasejobs/${$dara.URL.percentEncode(KnowledgeBaseJobId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKnowledgeBaseJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKnowledgeBaseJobResponse({}));
  }

  /**
   * 删除知识库任务
   * 
   * @param request - DeleteKnowledgeBaseJobRequest
   * @returns DeleteKnowledgeBaseJobResponse
   */
  async deleteKnowledgeBaseJob(KnowledgeBaseId: string, KnowledgeBaseJobId: string, request: $_model.DeleteKnowledgeBaseJobRequest): Promise<$_model.DeleteKnowledgeBaseJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteKnowledgeBaseJobWithOptions(KnowledgeBaseId, KnowledgeBaseJobId, request, headers, runtime);
  }

  /**
   * 查看知识库
   * 
   * @param request - GetKnowledgeBaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKnowledgeBaseResponse
   */
  async getKnowledgeBaseWithOptions(KnowledgeBaseId: string, request: $_model.GetKnowledgeBaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetKnowledgeBaseResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKnowledgeBase",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases/${$dara.URL.percentEncode(KnowledgeBaseId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.GetKnowledgeBaseResponse({}));
  }

  /**
   * 查看知识库
   * 
   * @param request - GetKnowledgeBaseRequest
   * @returns GetKnowledgeBaseResponse
   */
  async getKnowledgeBase(KnowledgeBaseId: string, request: $_model.GetKnowledgeBaseRequest): Promise<$_model.GetKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKnowledgeBaseWithOptions(KnowledgeBaseId, request, headers, runtime);
  }

  /**
   * 查看知识库任务
   * 
   * @param request - GetKnowledgeBaseJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKnowledgeBaseJobResponse
   */
  async getKnowledgeBaseJobWithOptions(KnowledgeBaseId: string, KnowledgeBaseJobId: string, request: $_model.GetKnowledgeBaseJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetKnowledgeBaseJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKnowledgeBaseJob",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases/${$dara.URL.percentEncode(KnowledgeBaseId)}/knowledgebasejobs/${$dara.URL.percentEncode(KnowledgeBaseJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKnowledgeBaseJobResponse>(await this.callApi(params, req, runtime), new $_model.GetKnowledgeBaseJobResponse({}));
  }

  /**
   * 查看知识库任务
   * 
   * @param request - GetKnowledgeBaseJobRequest
   * @returns GetKnowledgeBaseJobResponse
   */
  async getKnowledgeBaseJob(KnowledgeBaseId: string, KnowledgeBaseJobId: string, request: $_model.GetKnowledgeBaseJobRequest): Promise<$_model.GetKnowledgeBaseJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKnowledgeBaseJobWithOptions(KnowledgeBaseId, KnowledgeBaseJobId, request, headers, runtime);
  }

  /**
   * 获取知识库切片列表
   * 
   * @param request - ListKnowledgeBaseChunksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKnowledgeBaseChunksResponse
   */
  async listKnowledgeBaseChunksWithOptions(KnowledgeBaseId: string, request: $_model.ListKnowledgeBaseChunksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListKnowledgeBaseChunksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunkStatus)) {
      query["ChunkStatus"] = request.chunkStatus;
    }

    if (!$dara.isNull(request.metaData)) {
      query["MetaData"] = request.metaData;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKnowledgeBaseChunks",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases/${$dara.URL.percentEncode(KnowledgeBaseId)}/knowledgebasechunks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKnowledgeBaseChunksResponse>(await this.callApi(params, req, runtime), new $_model.ListKnowledgeBaseChunksResponse({}));
  }

  /**
   * 获取知识库切片列表
   * 
   * @param request - ListKnowledgeBaseChunksRequest
   * @returns ListKnowledgeBaseChunksResponse
   */
  async listKnowledgeBaseChunks(KnowledgeBaseId: string, request: $_model.ListKnowledgeBaseChunksRequest): Promise<$_model.ListKnowledgeBaseChunksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKnowledgeBaseChunksWithOptions(KnowledgeBaseId, request, headers, runtime);
  }

  /**
   * 获取知识库任务列表
   * 
   * @param request - ListKnowledgeBaseJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKnowledgeBaseJobsResponse
   */
  async listKnowledgeBaseJobsWithOptions(KnowledgeBaseId: string, request: $_model.ListKnowledgeBaseJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListKnowledgeBaseJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobAction)) {
      query["JobAction"] = request.jobAction;
    }

    if (!$dara.isNull(request.knowledgeBaseJobId)) {
      query["KnowledgeBaseJobId"] = request.knowledgeBaseJobId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
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

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKnowledgeBaseJobs",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases/${$dara.URL.percentEncode(KnowledgeBaseId)}/knowledgebasejobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKnowledgeBaseJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListKnowledgeBaseJobsResponse({}));
  }

  /**
   * 获取知识库任务列表
   * 
   * @param request - ListKnowledgeBaseJobsRequest
   * @returns ListKnowledgeBaseJobsResponse
   */
  async listKnowledgeBaseJobs(KnowledgeBaseId: string, request: $_model.ListKnowledgeBaseJobsRequest): Promise<$_model.ListKnowledgeBaseJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKnowledgeBaseJobsWithOptions(KnowledgeBaseId, request, headers, runtime);
  }

  /**
   * 获取知识库列表
   * 
   * @param request - ListKnowledgeBasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKnowledgeBasesResponse
   */
  async listKnowledgeBasesWithOptions(request: $_model.ListKnowledgeBasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListKnowledgeBasesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.knowledgeBaseId)) {
      query["KnowledgeBaseId"] = request.knowledgeBaseId;
    }

    if (!$dara.isNull(request.knowledgeBaseType)) {
      query["KnowledgeBaseType"] = request.knowledgeBaseType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
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

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKnowledgeBases",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKnowledgeBasesResponse>(await this.callApi(params, req, runtime), new $_model.ListKnowledgeBasesResponse({}));
  }

  /**
   * 获取知识库列表
   * 
   * @param request - ListKnowledgeBasesRequest
   * @returns ListKnowledgeBasesResponse
   */
  async listKnowledgeBases(request: $_model.ListKnowledgeBasesRequest): Promise<$_model.ListKnowledgeBasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKnowledgeBasesWithOptions(request, headers, runtime);
  }

  /**
   * 搜索知识库
   * 
   * @param request - RetrieveKnowledgeBaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetrieveKnowledgeBaseResponse
   */
  async retrieveKnowledgeBaseWithOptions(KnowledgeBaseId: string, request: $_model.RetrieveKnowledgeBaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetrieveKnowledgeBaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hybridStrategyConfig)) {
      body["HybridStrategyConfig"] = request.hybridStrategyConfig;
    }

    if (!$dara.isNull(request.metaDataFilterConditions)) {
      body["MetaDataFilterConditions"] = request.metaDataFilterConditions;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.queryMode)) {
      body["QueryMode"] = request.queryMode;
    }

    if (!$dara.isNull(request.rerankConfig)) {
      body["RerankConfig"] = request.rerankConfig;
    }

    if (!$dara.isNull(request.rewriteConfig)) {
      body["RewriteConfig"] = request.rewriteConfig;
    }

    if (!$dara.isNull(request.scoreThreshold)) {
      body["ScoreThreshold"] = request.scoreThreshold;
    }

    if (!$dara.isNull(request.topK)) {
      body["TopK"] = request.topK;
    }

    if (!$dara.isNull(request.versionName)) {
      body["VersionName"] = request.versionName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RetrieveKnowledgeBase",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases/${$dara.URL.percentEncode(KnowledgeBaseId)}/action/retrieve`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetrieveKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.RetrieveKnowledgeBaseResponse({}));
  }

  /**
   * 搜索知识库
   * 
   * @param request - RetrieveKnowledgeBaseRequest
   * @returns RetrieveKnowledgeBaseResponse
   */
  async retrieveKnowledgeBase(KnowledgeBaseId: string, request: $_model.RetrieveKnowledgeBaseRequest): Promise<$_model.RetrieveKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retrieveKnowledgeBaseWithOptions(KnowledgeBaseId, request, headers, runtime);
  }

  /**
   * 更新知识库
   * 
   * @param request - UpdateKnowledgeBaseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKnowledgeBaseResponse
   */
  async updateKnowledgeBaseWithOptions(KnowledgeBaseId: string, request: $_model.UpdateKnowledgeBaseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKnowledgeBaseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoUpdateConfig)) {
      body["AutoUpdateConfig"] = request.autoUpdateConfig;
    }

    if (!$dara.isNull(request.bindRuntime)) {
      body["BindRuntime"] = request.bindRuntime;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.metaDataConfig)) {
      body["MetaDataConfig"] = request.metaDataConfig;
    }

    if (!$dara.isNull(request.runtimeId)) {
      body["RuntimeId"] = request.runtimeId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKnowledgeBase",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases/${$dara.URL.percentEncode(KnowledgeBaseId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKnowledgeBaseResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKnowledgeBaseResponse({}));
  }

  /**
   * 更新知识库
   * 
   * @param request - UpdateKnowledgeBaseRequest
   * @returns UpdateKnowledgeBaseResponse
   */
  async updateKnowledgeBase(KnowledgeBaseId: string, request: $_model.UpdateKnowledgeBaseRequest): Promise<$_model.UpdateKnowledgeBaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKnowledgeBaseWithOptions(KnowledgeBaseId, request, headers, runtime);
  }

  /**
   * 更新知识库切片
   * 
   * @param request - UpdateKnowledgeBaseChunkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKnowledgeBaseChunkResponse
   */
  async updateKnowledgeBaseChunkWithOptions(KnowledgeBaseId: string, KnowledgeBaseChunkId: string, request: $_model.UpdateKnowledgeBaseChunkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKnowledgeBaseChunkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chunkContent)) {
      body["ChunkContent"] = request.chunkContent;
    }

    if (!$dara.isNull(request.chunkStatus)) {
      body["ChunkStatus"] = request.chunkStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKnowledgeBaseChunk",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases/${$dara.URL.percentEncode(KnowledgeBaseId)}/knowledgebasechunks/${$dara.URL.percentEncode(KnowledgeBaseChunkId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKnowledgeBaseChunkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKnowledgeBaseChunkResponse({}));
  }

  /**
   * 更新知识库切片
   * 
   * @param request - UpdateKnowledgeBaseChunkRequest
   * @returns UpdateKnowledgeBaseChunkResponse
   */
  async updateKnowledgeBaseChunk(KnowledgeBaseId: string, KnowledgeBaseChunkId: string, request: $_model.UpdateKnowledgeBaseChunkRequest): Promise<$_model.UpdateKnowledgeBaseChunkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKnowledgeBaseChunkWithOptions(KnowledgeBaseId, KnowledgeBaseChunkId, request, headers, runtime);
  }

  /**
   * 更新知识库任务
   * 
   * @param request - UpdateKnowledgeBaseJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKnowledgeBaseJobResponse
   */
  async updateKnowledgeBaseJobWithOptions(KnowledgeBaseId: string, KnowledgeBaseJobId: string, request: $_model.UpdateKnowledgeBaseJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKnowledgeBaseJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKnowledgeBaseJob",
      version: "2024-07-10",
      protocol: "HTTPS",
      pathname: `/api/v1/langstudio/knowledgebases/${$dara.URL.percentEncode(KnowledgeBaseId)}/knowledgebasejobs/${$dara.URL.percentEncode(KnowledgeBaseJobId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKnowledgeBaseJobResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKnowledgeBaseJobResponse({}));
  }

  /**
   * 更新知识库任务
   * 
   * @param request - UpdateKnowledgeBaseJobRequest
   * @returns UpdateKnowledgeBaseJobResponse
   */
  async updateKnowledgeBaseJob(KnowledgeBaseId: string, KnowledgeBaseJobId: string, request: $_model.UpdateKnowledgeBaseJobRequest): Promise<$_model.UpdateKnowledgeBaseJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKnowledgeBaseJobWithOptions(KnowledgeBaseId, KnowledgeBaseJobId, request, headers, runtime);
  }

}
