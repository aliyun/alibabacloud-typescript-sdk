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
    this._endpoint = this.getEndpoint("searchengine", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Triggers reindexing.
   * 
   * @remarks
   * ## Method
   *     POST
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/actions/build-index
   * 
   * @param request - BuildIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BuildIndexResponse
   */
  async buildIndexWithOptions(instanceId: string, request: $_model.BuildIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BuildIndexResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.buildMode)) {
      body["buildMode"] = request.buildMode;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["dataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.dataTimeSec)) {
      body["dataTimeSec"] = request.dataTimeSec;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.generation)) {
      body["generation"] = request.generation;
    }

    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    if (!$dara.isNull(request.tag)) {
      body["tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BuildIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/actions/build-index`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.BuildIndexResponse>(await this.callApi(params, req, runtime), new $_model.BuildIndexResponse({}));
  }

  /**
   * Triggers reindexing.
   * 
   * @remarks
   * ## Method
   *     POST
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/actions/build-index
   * 
   * @param request - BuildIndexRequest
   * @returns BuildIndexResponse
   */
  async buildIndex(instanceId: string, request: $_model.BuildIndexRequest): Promise<$_model.BuildIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.buildIndexWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 更换实例资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(instanceId: string, request: $_model.ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      body["newResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/actions/change-resource-group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * 更换实例资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(instanceId: string, request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - CloneSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneSqlInstanceResponse
   */
  async cloneSqlInstanceWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: $_model.CloneSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloneSqlInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.targetFolderId)) {
      body["targetFolderId"] = request.targetFolderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}/actions/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloneSqlInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CloneSqlInstanceResponse({}));
  }

  /**
   * @param request - CloneSqlInstanceRequest
   * @returns CloneSqlInstanceResponse
   */
  async cloneSqlInstance(instanceId: string, database: string, sqlInstanceId: string, request: $_model.CloneSqlInstanceRequest): Promise<$_model.CloneSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneSqlInstanceWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @param request - CreateAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAliasResponse
   */
  async createAliasWithOptions(instanceId: string, request: $_model.CreateAliasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAliasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newMode)) {
      query["newMode"] = request.newMode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!$dara.isNull(request.index)) {
      body["index"] = request.index;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlias",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/aliases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAliasResponse>(await this.callApi(params, req, runtime), new $_model.CreateAliasResponse({}));
  }

  /**
   * @param request - CreateAliasRequest
   * @returns CreateAliasResponse
   */
  async createAlias(instanceId: string, request: $_model.CreateAliasRequest): Promise<$_model.CreateAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAliasWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates a cluster.
   * 
   * @remarks
   * ### [](#method)Method
   * `POST`
   * ### [](#uri)URI
   * `/openapi/ha3/instances/{instanceId}/clusters`
   * 
   * @param request - CreateClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(instanceId: string, request: $_model.CreateClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoLoad)) {
      body["autoLoad"] = request.autoLoad;
    }

    if (!$dara.isNull(request.dataNode)) {
      body["dataNode"] = request.dataNode;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.queryNode)) {
      body["queryNode"] = request.queryNode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCluster",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateClusterResponse({}));
  }

  /**
   * Creates a cluster.
   * 
   * @remarks
   * ### [](#method)Method
   * `POST`
   * ### [](#uri)URI
   * `/openapi/ha3/instances/{instanceId}/clusters`
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(instanceId: string, request: $_model.CreateClusterRequest): Promise<$_model.CreateClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createClusterWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - CreateConfigDirRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigDirResponse
   */
  async createConfigDirWithOptions(instanceId: string, configName: string, request: $_model.CreateConfigDirRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConfigDirResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dirName)) {
      body["dirName"] = request.dirName;
    }

    if (!$dara.isNull(request.parentFullPath)) {
      body["parentFullPath"] = request.parentFullPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConfigDir",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/dir`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConfigDirResponse>(await this.callApi(params, req, runtime), new $_model.CreateConfigDirResponse({}));
  }

  /**
   * @param request - CreateConfigDirRequest
   * @returns CreateConfigDirResponse
   */
  async createConfigDir(instanceId: string, configName: string, request: $_model.CreateConfigDirRequest): Promise<$_model.CreateConfigDirResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigDirWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @param request - CreateConfigFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateConfigFileResponse
   */
  async createConfigFileWithOptions(instanceId: string, configName: string, request: $_model.CreateConfigFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateConfigFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      body["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.ossPath)) {
      body["ossPath"] = request.ossPath;
    }

    if (!$dara.isNull(request.parentFullPath)) {
      body["parentFullPath"] = request.parentFullPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateConfigFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/file`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateConfigFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateConfigFileResponse({}));
  }

  /**
   * @param request - CreateConfigFileRequest
   * @returns CreateConfigFileResponse
   */
  async createConfigFile(instanceId: string, configName: string, request: $_model.CreateConfigFileRequest): Promise<$_model.CreateConfigFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Creates data sources.
   * 
   * @param request - CreateDataSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataSourceResponse
   */
  async createDataSourceWithOptions(instanceId: string, request: $_model.CreateDataSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataSourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoBuildIndex)) {
      body["autoBuildIndex"] = request.autoBuildIndex;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.saroConfig)) {
      body["saroConfig"] = request.saroConfig;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataSource",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataSourceResponse({}));
  }

  /**
   * Creates data sources.
   * 
   * @param request - CreateDataSourceRequest
   * @returns CreateDataSourceResponse
   */
  async createDataSource(instanceId: string, request: $_model.CreateDataSourceRequest): Promise<$_model.CreateDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataSourceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - CreateFolderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFolderResponse
   */
  async createFolderWithOptions(instanceId: string, database: string, request: $_model.CreateFolderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parent)) {
      body["parent"] = request.parent;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFolder",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/folders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFolderResponse>(await this.callApi(params, req, runtime), new $_model.CreateFolderResponse({}));
  }

  /**
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(instanceId: string, database: string, request: $_model.CreateFolderRequest): Promise<$_model.CreateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFolderWithOptions(instanceId, database, request, headers, runtime);
  }

  /**
   * Creates an index.
   * 
   * @remarks
   * ### Method
   * ```java
   * POST
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/indexes
   * ```
   * 
   * @param request - CreateIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndexResponse
   */
  async createIndexWithOptions(instanceId: string, request: $_model.CreateIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIndexResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.buildParallelNum)) {
      body["buildParallelNum"] = request.buildParallelNum;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.dataSource)) {
      body["dataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.dataSourceInfo)) {
      body["dataSourceInfo"] = request.dataSourceInfo;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.extend)) {
      body["extend"] = request.extend;
    }

    if (!$dara.isNull(request.mergeParallelNum)) {
      body["mergeParallelNum"] = request.mergeParallelNum;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIndexResponse>(await this.callApi(params, req, runtime), new $_model.CreateIndexResponse({}));
  }

  /**
   * Creates an index.
   * 
   * @remarks
   * ### Method
   * ```java
   * POST
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/indexes
   * ```
   * 
   * @param request - CreateIndexRequest
   * @returns CreateIndexResponse
   */
  async createIndex(instanceId: string, request: $_model.CreateIndexRequest): Promise<$_model.CreateIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndexWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates a Havenask instance.
   * 
   * @remarks
   * ### [](#)Method
   * `POST`
   * ### [](#uri)URI
   * `/api/instances?dryRun=false`
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.components)) {
      body["components"] = request.components;
    }

    if (!$dara.isNull(request.order)) {
      body["order"] = request.order;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates a Havenask instance.
   * 
   * @remarks
   * ### [](#)Method
   * `POST`
   * ### [](#uri)URI
   * `/api/instances?dryRun=false`
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 创建模型信息
   * 
   * @param request - CreateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelResponse
   */
  async createModelWithOptions(instanceId: string, request: $_model.CreateModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModel",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/models`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModelResponse>(await this.callApi(params, req, runtime), new $_model.CreateModelResponse({}));
  }

  /**
   * 创建模型信息
   * 
   * @param request - CreateModelRequest
   * @returns CreateModelResponse
   */
  async createModel(instanceId: string, request: $_model.CreateModelRequest): Promise<$_model.CreateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Creates a public endpoint.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePublicUrlResponse
   */
  async createPublicUrlWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePublicUrlResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePublicUrl",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/public-url`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePublicUrlResponse>(await this.callApi(params, req, runtime), new $_model.CreatePublicUrlResponse({}));
  }

  /**
   * Creates a public endpoint.
   * @returns CreatePublicUrlResponse
   */
  async createPublicUrl(instanceId: string): Promise<$_model.CreatePublicUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPublicUrlWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param request - CreateSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSqlInstanceResponse
   */
  async createSqlInstanceWithOptions(instanceId: string, database: string, request: $_model.CreateSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSqlInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.parent)) {
      body["parent"] = request.parent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSqlInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateSqlInstanceResponse({}));
  }

  /**
   * @param request - CreateSqlInstanceRequest
   * @returns CreateSqlInstanceResponse
   */
  async createSqlInstance(instanceId: string, database: string, request: $_model.CreateSqlInstanceRequest): Promise<$_model.CreateSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSqlInstanceWithOptions(instanceId, database, request, headers, runtime);
  }

  /**
   * Creates an index table.
   * 
   * @param request - CreateTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTableResponse
   */
  async createTableWithOptions(instanceId: string, request: $_model.CreateTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTableResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataProcessConfig)) {
      body["dataProcessConfig"] = request.dataProcessConfig;
    }

    if (!$dara.isNull(request.dataProcessorCount)) {
      body["dataProcessorCount"] = request.dataProcessorCount;
    }

    if (!$dara.isNull(request.dataSource)) {
      body["dataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.fieldSchema)) {
      body["fieldSchema"] = request.fieldSchema;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.partitionCount)) {
      body["partitionCount"] = request.partitionCount;
    }

    if (!$dara.isNull(request.primaryKey)) {
      body["primaryKey"] = request.primaryKey;
    }

    if (!$dara.isNull(request.rawSchema)) {
      body["rawSchema"] = request.rawSchema;
    }

    if (!$dara.isNull(request.scene)) {
      body["scene"] = request.scene;
    }

    if (!$dara.isNull(request.vectorIndex)) {
      body["vectorIndex"] = request.vectorIndex;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTable",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTableResponse>(await this.callApi(params, req, runtime), new $_model.CreateTableResponse({}));
  }

  /**
   * Creates an index table.
   * 
   * @param request - CreateTableRequest
   * @returns CreateTableResponse
   */
  async createTable(instanceId: string, request: $_model.CreateTableRequest): Promise<$_model.CreateTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTableWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 调试模型
   * 
   * @param request - DebugModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DebugModelResponse
   */
  async debugModelWithOptions(instanceId: string, modelName: string, request: $_model.DebugModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DebugModelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isOnline)) {
      query["isOnline"] = request.isOnline;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.input)) {
      body["input"] = request.input;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DebugModel",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/models/${$dara.URL.percentEncode(modelName)}/actions/debug`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DebugModelResponse>(await this.callApi(params, req, runtime), new $_model.DebugModelResponse({}));
  }

  /**
   * 调试模型
   * 
   * @param request - DebugModelRequest
   * @returns DebugModelResponse
   */
  async debugModel(instanceId: string, modelName: string, request: $_model.DebugModelRequest): Promise<$_model.DebugModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.debugModelWithOptions(instanceId, modelName, request, headers, runtime);
  }

  /**
   * Deletes the details about advanced configurations.
   * 
   * @remarks
   * ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAdvanceConfigResponse
   */
  async deleteAdvanceConfigWithOptions(instanceId: string, configName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAdvanceConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAdvanceConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAdvanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAdvanceConfigResponse({}));
  }

  /**
   * Deletes the details about advanced configurations.
   * 
   * @remarks
   * ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}
   * @returns DeleteAdvanceConfigResponse
   */
  async deleteAdvanceConfig(instanceId: string, configName: string): Promise<$_model.DeleteAdvanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAdvanceConfigWithOptions(instanceId, configName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAliasResponse
   */
  async deleteAliasWithOptions(instanceId: string, alias: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAliasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlias",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/aliases/${$dara.URL.percentEncode(alias)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAliasResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAliasResponse({}));
  }

  /**
   * @returns DeleteAliasResponse
   */
  async deleteAlias(instanceId: string, alias: string): Promise<$_model.DeleteAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAliasWithOptions(instanceId, alias, headers, runtime);
  }

  /**
   * @param request - DeleteConfigDirRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigDirResponse
   */
  async deleteConfigDirWithOptions(instanceId: string, configName: string, request: $_model.DeleteConfigDirRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConfigDirResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dirName)) {
      query["dirName"] = request.dirName;
    }

    if (!$dara.isNull(request.parentFullPath)) {
      query["parentFullPath"] = request.parentFullPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfigDir",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/dir`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConfigDirResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConfigDirResponse({}));
  }

  /**
   * @param request - DeleteConfigDirRequest
   * @returns DeleteConfigDirResponse
   */
  async deleteConfigDir(instanceId: string, configName: string, request: $_model.DeleteConfigDirRequest): Promise<$_model.DeleteConfigDirResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigDirWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @param request - DeleteConfigFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigFileResponse
   */
  async deleteConfigFileWithOptions(instanceId: string, configName: string, request: $_model.DeleteConfigFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConfigFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.parentFullPath)) {
      query["parentFullPath"] = request.parentFullPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfigFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/file`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConfigFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConfigFileResponse({}));
  }

  /**
   * @param request - DeleteConfigFileRequest
   * @returns DeleteConfigFileResponse
   */
  async deleteConfigFile(instanceId: string, configName: string, request: $_model.DeleteConfigFileRequest): Promise<$_model.DeleteConfigFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Deletes a specified data source.
   * 
   * @remarks
   * ## Method
   * `DELETE`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSourceWithOptions(instanceId: string, dataSourceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataSourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataSource",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataSourceResponse({}));
  }

  /**
   * Deletes a specified data source.
   * 
   * @remarks
   * ## Method
   * `DELETE`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}`
   * @returns DeleteDataSourceResponse
   */
  async deleteDataSource(instanceId: string, dataSourceName: string): Promise<$_model.DeleteDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataSourceWithOptions(instanceId, dataSourceName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFolderResponse
   */
  async deleteFolderWithOptions(instanceId: string, database: string, folderId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFolderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFolder",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/folders/${$dara.URL.percentEncode(folderId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFolderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFolderResponse({}));
  }

  /**
   * @returns DeleteFolderResponse
   */
  async deleteFolder(instanceId: string, database: string, folderId: string): Promise<$_model.DeleteFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFolderWithOptions(instanceId, database, folderId, headers, runtime);
  }

  /**
   * Deletes an index.
   * 
   * @remarks
   * ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}?dataSource=xxx
   * 
   * @param request - DeleteIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexResponse
   */
  async deleteIndexWithOptions(instanceId: string, indexName: string, request: $_model.DeleteIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIndexResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSource)) {
      query["dataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.deleteDataSource)) {
      query["deleteDataSource"] = request.deleteDataSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIndexResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIndexResponse({}));
  }

  /**
   * Deletes an index.
   * 
   * @remarks
   * ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}?dataSource=xxx
   * 
   * @param request - DeleteIndexRequest
   * @returns DeleteIndexResponse
   */
  async deleteIndex(instanceId: string, indexName: string, request: $_model.DeleteIndexRequest): Promise<$_model.DeleteIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexWithOptions(instanceId, indexName, request, headers, runtime);
  }

  /**
   * Deletes the version of an index.
   * 
   * @remarks
   * ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexVersionResponse
   */
  async deleteIndexVersionWithOptions(instanceId: string, indexName: string, versionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIndexVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndexVersion",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/versions/${$dara.URL.percentEncode(versionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIndexVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIndexVersionResponse({}));
  }

  /**
   * Deletes the version of an index.
   * 
   * @remarks
   * ## Method
   *     DELETE
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}
   * @returns DeleteIndexVersionResponse
   */
  async deleteIndexVersion(instanceId: string, indexName: string, versionName: string): Promise<$_model.DeleteIndexVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexVersionWithOptions(instanceId, indexName, versionName, headers, runtime);
  }

  /**
   * Deletes a specified instance.
   * 
   * @remarks
   * ### Method
   * `DELETE`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Deletes a specified instance.
   * 
   * @remarks
   * ### Method
   * `DELETE`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(instanceId: string): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * 删除模型
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelResponse
   */
  async deleteModelWithOptions(instanceId: string, modelName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModel",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/models/${$dara.URL.percentEncode(modelName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModelResponse({}));
  }

  /**
   * 删除模型
   * @returns DeleteModelResponse
   */
  async deleteModel(instanceId: string, modelName: string): Promise<$_model.DeleteModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelWithOptions(instanceId, modelName, headers, runtime);
  }

  /**
   * 删除公网域名
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePublicUrlResponse
   */
  async deletePublicUrlWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePublicUrlResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePublicUrl",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/public-url`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePublicUrlResponse>(await this.callApi(params, req, runtime), new $_model.DeletePublicUrlResponse({}));
  }

  /**
   * 删除公网域名
   * @returns DeletePublicUrlResponse
   */
  async deletePublicUrl(instanceId: string): Promise<$_model.DeletePublicUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePublicUrlWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSqlInstanceResponse
   */
  async deleteSqlInstanceWithOptions(instanceId: string, database: string, sqlInstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSqlInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSqlInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSqlInstanceResponse({}));
  }

  /**
   * @returns DeleteSqlInstanceResponse
   */
  async deleteSqlInstance(instanceId: string, database: string, sqlInstanceId: string): Promise<$_model.DeleteSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSqlInstanceWithOptions(instanceId, database, sqlInstanceId, headers, runtime);
  }

  /**
   * Deletes an index table.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTableResponse
   */
  async deleteTableWithOptions(instanceId: string, tableName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTable",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables/${$dara.URL.percentEncode(tableName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTableResponse({}));
  }

  /**
   * Deletes an index table.
   * @returns DeleteTableResponse
   */
  async deleteTable(instanceId: string, tableName: string): Promise<$_model.DeleteTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTableWithOptions(instanceId, tableName, headers, runtime);
  }

  /**
   * Queries available regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries available regions.
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
   * @param request - ExecuteSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSqlInstanceResponse
   */
  async executeSqlInstanceWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: $_model.ExecuteSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteSqlInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.combineParam)) {
      body["combineParam"] = request.combineParam;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.dynamicParam)) {
      body["dynamicParam"] = request.dynamicParam;
    }

    if (!$dara.isNull(request.kvpair)) {
      body["kvpair"] = request.kvpair;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    if (!$dara.isNull(request.staticParam)) {
      body["staticParam"] = request.staticParam;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}/actions/execution`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteSqlInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteSqlInstanceResponse({}));
  }

  /**
   * @param request - ExecuteSqlInstanceRequest
   * @returns ExecuteSqlInstanceResponse
   */
  async executeSqlInstance(instanceId: string, database: string, sqlInstanceId: string, request: $_model.ExecuteSqlInstanceRequest): Promise<$_model.ExecuteSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeSqlInstanceWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * Performs a forced switchover.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * PUT
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/force-switch/{fsmId}
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ForceSwitchResponse
   */
  async forceSwitchWithOptions(instanceId: string, fsmId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ForceSwitchResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ForceSwitch",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/force-switch/${$dara.URL.percentEncode(fsmId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ForceSwitchResponse>(await this.callApi(params, req, runtime), new $_model.ForceSwitchResponse({}));
  }

  /**
   * Performs a forced switchover.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * PUT
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/force-switch/{fsmId}
   * ```
   * @returns ForceSwitchResponse
   */
  async forceSwitch(instanceId: string, fsmId: string): Promise<$_model.ForceSwitchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.forceSwitchWithOptions(instanceId, fsmId, headers, runtime);
  }

  /**
   * Queries the information about an advanced configuration.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}
   * 
   * @param request - GetAdvanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdvanceConfigResponse
   */
  async getAdvanceConfigWithOptions(instanceId: string, configName: string, request: $_model.GetAdvanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAdvanceConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAdvanceConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAdvanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetAdvanceConfigResponse({}));
  }

  /**
   * Queries the information about an advanced configuration.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}
   * 
   * @param request - GetAdvanceConfigRequest
   * @returns GetAdvanceConfigResponse
   */
  async getAdvanceConfig(instanceId: string, configName: string, request: $_model.GetAdvanceConfigRequest): Promise<$_model.GetAdvanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAdvanceConfigWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Queries the information about an advanced configuration file.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/file?fileName={fileName}
   * 
   * @param request - GetAdvanceConfigFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAdvanceConfigFileResponse
   */
  async getAdvanceConfigFileWithOptions(instanceId: string, configName: string, request: $_model.GetAdvanceConfigFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAdvanceConfigFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAdvanceConfigFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/file`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAdvanceConfigFileResponse>(await this.callApi(params, req, runtime), new $_model.GetAdvanceConfigFileResponse({}));
  }

  /**
   * Queries the information about an advanced configuration file.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/file?fileName={fileName}
   * 
   * @param request - GetAdvanceConfigFileRequest
   * @returns GetAdvanceConfigFileResponse
   */
  async getAdvanceConfigFile(instanceId: string, configName: string, request: $_model.GetAdvanceConfigFileRequest): Promise<$_model.GetAdvanceConfigFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAdvanceConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Queries the details of a cluster.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instance/{instanceId}/clusters/{clusterName}`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterResponse
   */
  async getClusterWithOptions(instanceId: string, clusterName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCluster",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters/${$dara.URL.percentEncode(clusterName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterResponse({}));
  }

  /**
   * Queries the details of a cluster.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instance/{instanceId}/clusters/{clusterName}`
   * @returns GetClusterResponse
   */
  async getCluster(instanceId: string, clusterName: string): Promise<$_model.GetClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterWithOptions(instanceId, clusterName, headers, runtime);
  }

  /**
   * Queries the runtime information about a specified cluster.
   * 
   * @remarks
   * ### Method
   * GET
   * ### URI
   * /openapi/ha3/instances/{instanceId}/cluster-run-time-info
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterRunTimeInfoResponse
   */
  async getClusterRunTimeInfoWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterRunTimeInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClusterRunTimeInfo",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/cluster-run-time-info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterRunTimeInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterRunTimeInfoResponse({}));
  }

  /**
   * Queries the runtime information about a specified cluster.
   * 
   * @remarks
   * ### Method
   * GET
   * ### URI
   * /openapi/ha3/instances/{instanceId}/cluster-run-time-info
   * @returns GetClusterRunTimeInfoResponse
   */
  async getClusterRunTimeInfo(instanceId: string): Promise<$_model.GetClusterRunTimeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterRunTimeInfoWithOptions(instanceId, headers, runtime);
  }

  /**
   * Obtains a data source.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceResponse
   */
  async getDataSourceWithOptions(instanceId: string, dataSourceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataSourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataSource",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataSourceResponse>(await this.callApi(params, req, runtime), new $_model.GetDataSourceResponse({}));
  }

  /**
   * Obtains a data source.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}`
   * @returns GetDataSourceResponse
   */
  async getDataSource(instanceId: string, dataSourceName: string): Promise<$_model.GetDataSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataSourceWithOptions(instanceId, dataSourceName, headers, runtime);
  }

  /**
   * 获取数据源部署信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDataSourceDeployResponse
   */
  async getDataSourceDeployWithOptions(instanceId: string, deployName: string, dataSourceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDataSourceDeployResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataSourceDeploy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/deploys/${$dara.URL.percentEncode(deployName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDataSourceDeployResponse>(await this.callApi(params, req, runtime), new $_model.GetDataSourceDeployResponse({}));
  }

  /**
   * 获取数据源部署信息
   * @returns GetDataSourceDeployResponse
   */
  async getDataSourceDeploy(instanceId: string, deployName: string, dataSourceName: string): Promise<$_model.GetDataSourceDeployResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataSourceDeployWithOptions(instanceId, deployName, dataSourceName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabaseSchemaResponse
   */
  async getDatabaseSchemaWithOptions(instanceId: string, database: string, tableName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatabaseSchemaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatabaseSchema",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/tables/${$dara.URL.percentEncode(tableName)}/schema`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatabaseSchemaResponse>(await this.callApi(params, req, runtime), new $_model.GetDatabaseSchemaResponse({}));
  }

  /**
   * @returns GetDatabaseSchemaResponse
   */
  async getDatabaseSchema(instanceId: string, database: string, tableName: string): Promise<$_model.GetDatabaseSchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatabaseSchemaWithOptions(instanceId, database, tableName, headers, runtime);
  }

  /**
   * Displays the overview of the deployment.
   * 
   * @remarks
   * ## Method
   * GET
   * ## URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/deploy-graph
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeployGraphResponse
   */
  async getDeployGraphWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeployGraphResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeployGraph",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/deploy-graph`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeployGraphResponse>(await this.callApi(params, req, runtime), new $_model.GetDeployGraphResponse({}));
  }

  /**
   * Displays the overview of the deployment.
   * 
   * @remarks
   * ## Method
   * GET
   * ## URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/deploy-graph
   * ```
   * @returns GetDeployGraphResponse
   */
  async getDeployGraph(instanceId: string): Promise<$_model.GetDeployGraphResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDeployGraphWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries the details of an index table version.
   * 
   * @remarks
   * ## [](#)Method
   *     GET
   * ## [](#uri)URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file
   * 
   * @param request - GetFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileResponse
   */
  async getFileWithOptions(instanceId: string, indexName: string, versionName: string, request: $_model.GetFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/versions/${$dara.URL.percentEncode(versionName)}/file`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFileResponse>(await this.callApi(params, req, runtime), new $_model.GetFileResponse({}));
  }

  /**
   * Queries the details of an index table version.
   * 
   * @remarks
   * ## [](#)Method
   *     GET
   * ## [](#uri)URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file
   * 
   * @param request - GetFileRequest
   * @returns GetFileResponse
   */
  async getFile(instanceId: string, indexName: string, versionName: string, request: $_model.GetFileRequest): Promise<$_model.GetFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFileWithOptions(instanceId, indexName, versionName, request, headers, runtime);
  }

  /**
   * Queries the information about an index version.
   * 
   * @remarks
   * ## [](#)Method
   *     GET
   * ## [](#uri)URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexResponse
   */
  async getIndexWithOptions(instanceId: string, indexName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIndexResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIndexResponse>(await this.callApi(params, req, runtime), new $_model.GetIndexResponse({}));
  }

  /**
   * Queries the information about an index version.
   * 
   * @remarks
   * ## [](#)Method
   *     GET
   * ## [](#uri)URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}
   * @returns GetIndexResponse
   */
  async getIndex(instanceId: string, indexName: string): Promise<$_model.GetIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexWithOptions(instanceId, indexName, headers, runtime);
  }

  /**
   * Queries the online effective policy of an index.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexOnlineStrategyResponse
   */
  async getIndexOnlineStrategyWithOptions(instanceId: string, dataSourceName: string, deployName: string, indexName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIndexOnlineStrategyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIndexOnlineStrategy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/deploys/${$dara.URL.percentEncode(deployName)}/indexes/${$dara.URL.percentEncode(indexName)}/online-strategy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIndexOnlineStrategyResponse>(await this.callApi(params, req, runtime), new $_model.GetIndexOnlineStrategyResponse({}));
  }

  /**
   * Queries the online effective policy of an index.
   * @returns GetIndexOnlineStrategyResponse
   */
  async getIndexOnlineStrategy(instanceId: string, dataSourceName: string, deployName: string, indexName: string): Promise<$_model.GetIndexOnlineStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexOnlineStrategyWithOptions(instanceId, dataSourceName, deployName, indexName, headers, runtime);
  }

  /**
   * Queries the information about index versions that the current index version can be rolled back to.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/clusters/{clusterName}/index-version
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIndexVersionResponse
   */
  async getIndexVersionWithOptions(instanceId: string, clusterName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIndexVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIndexVersion",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters/${$dara.URL.percentEncode(clusterName)}/index-version`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIndexVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetIndexVersionResponse({}));
  }

  /**
   * Queries the information about index versions that the current index version can be rolled back to.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/clusters/{clusterName}/index-version
   * @returns GetIndexVersionResponse
   */
  async getIndexVersion(instanceId: string, clusterName: string): Promise<$_model.GetIndexVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIndexVersionWithOptions(instanceId, clusterName, headers, runtime);
  }

  /**
   * Queries the details of an instance based on the instance ID.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * GET
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Queries the details of an instance based on the instance ID.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * GET
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}
   * ```
   * @returns GetInstanceResponse
   */
  async getInstance(instanceId: string): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
   * 通过实例ID和模型名称查询特定模型的详细配置信息。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于获取指定实例下的特定模型的详细信息，包括模型类型、URL、状态等。
   * - 确保提供的`instanceId`和`modelName`是有效的，否则可能返回错误或找不到资源。
   * - 返回的数据结构中包含了模型的内容（如请求头、参数等）以及创建和更新时间，有助于了解模型的具体配置及其最新状态。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelResponse
   */
  async getModelWithOptions(instanceId: string, modelName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModel",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/models/${$dara.URL.percentEncode(modelName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModelResponse>(await this.callApi(params, req, runtime), new $_model.GetModelResponse({}));
  }

  /**
   * 通过实例ID和模型名称查询特定模型的详细配置信息。
   * 
   * @remarks
   * ## 请求说明
   * - 该API用于获取指定实例下的特定模型的详细信息，包括模型类型、URL、状态等。
   * - 确保提供的`instanceId`和`modelName`是有效的，否则可能返回错误或找不到资源。
   * - 返回的数据结构中包含了模型的内容（如请求头、参数等）以及创建和更新时间，有助于了解模型的具体配置及其最新状态。
   * @returns GetModelResponse
   */
  async getModel(instanceId: string, modelName: string): Promise<$_model.GetModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelWithOptions(instanceId, modelName, headers, runtime);
  }

  /**
   * Gets the configuration information of a node.
   * 
   * @param request - GetNodeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeConfigResponse
   */
  async getNodeConfigWithOptions(instanceId: string, request: $_model.GetNodeConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetNodeConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterName)) {
      query["clusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/node-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNodeConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetNodeConfigResponse({}));
  }

  /**
   * Gets the configuration information of a node.
   * 
   * @param request - GetNodeConfigRequest
   * @returns GetNodeConfigResponse
   */
  async getNodeConfig(instanceId: string, request: $_model.GetNodeConfigRequest): Promise<$_model.GetNodeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - GetSqlInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlInstanceResponse
   */
  async getSqlInstanceWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: $_model.GetSqlInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSqlInstanceResponse> {
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
      action: "GetSqlInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSqlInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetSqlInstanceResponse({}));
  }

  /**
   * @param request - GetSqlInstanceRequest
   * @returns GetSqlInstanceResponse
   */
  async getSqlInstance(instanceId: string, database: string, sqlInstanceId: string, request: $_model.GetSqlInstanceRequest): Promise<$_model.GetSqlInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSqlInstanceWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * Queries the information about an index table.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableResponse
   */
  async getTableWithOptions(instanceId: string, tableName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTable",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables/${$dara.URL.percentEncode(tableName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableResponse>(await this.callApi(params, req, runtime), new $_model.GetTableResponse({}));
  }

  /**
   * Queries the information about an index table.
   * @returns GetTableResponse
   */
  async getTable(instanceId: string, tableName: string): Promise<$_model.GetTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableWithOptions(instanceId, tableName, headers, runtime);
  }

  /**
   * Queries the status of an index version based on the ID of the full index version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTableGenerationResponse
   */
  async getTableGenerationWithOptions(instanceId: string, tableName: string, generationId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTableGenerationResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTableGeneration",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables/${$dara.URL.percentEncode(tableName)}/index_versions/${$dara.URL.percentEncode(generationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTableGenerationResponse>(await this.callApi(params, req, runtime), new $_model.GetTableGenerationResponse({}));
  }

  /**
   * Queries the status of an index version based on the ID of the full index version.
   * @returns GetTableGenerationResponse
   */
  async getTableGeneration(instanceId: string, tableName: string, generationId: string): Promise<$_model.GetTableGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTableGenerationWithOptions(instanceId, tableName, generationId, headers, runtime);
  }

  /**
   * Queries the files in an advanced configuration directory.
   * 
   * @remarks
   * ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/dir?dirName={dirName}`
   * 
   * @param request - ListAdvanceConfigDirRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAdvanceConfigDirResponse
   */
  async listAdvanceConfigDirWithOptions(instanceId: string, configName: string, request: $_model.ListAdvanceConfigDirRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAdvanceConfigDirResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dirName)) {
      query["dirName"] = request.dirName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAdvanceConfigDir",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/dir`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAdvanceConfigDirResponse>(await this.callApi(params, req, runtime), new $_model.ListAdvanceConfigDirResponse({}));
  }

  /**
   * Queries the files in an advanced configuration directory.
   * 
   * @remarks
   * ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/dir?dirName={dirName}`
   * 
   * @param request - ListAdvanceConfigDirRequest
   * @returns ListAdvanceConfigDirResponse
   */
  async listAdvanceConfigDir(instanceId: string, configName: string, request: $_model.ListAdvanceConfigDirRequest): Promise<$_model.ListAdvanceConfigDirResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAdvanceConfigDirWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Obtains a list of advanced configurations.
   * 
   * @remarks
   * ## Sample requests
   * `GET /openapi/ha3/instances/ose-test1/advanced-configs`
   * 
   * @param request - ListAdvanceConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAdvanceConfigsResponse
   */
  async listAdvanceConfigsWithOptions(instanceId: string, request: $_model.ListAdvanceConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAdvanceConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceName)) {
      query["dataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.indexName)) {
      query["indexName"] = request.indexName;
    }

    if (!$dara.isNull(request.newMode)) {
      query["newMode"] = request.newMode;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
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
      action: "ListAdvanceConfigs",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAdvanceConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListAdvanceConfigsResponse({}));
  }

  /**
   * Obtains a list of advanced configurations.
   * 
   * @remarks
   * ## Sample requests
   * `GET /openapi/ha3/instances/ose-test1/advanced-configs`
   * 
   * @param request - ListAdvanceConfigsRequest
   * @returns ListAdvanceConfigsResponse
   */
  async listAdvanceConfigs(instanceId: string, request: $_model.ListAdvanceConfigsRequest): Promise<$_model.ListAdvanceConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAdvanceConfigsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAliasesResponse
   */
  async listAliasesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAliasesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAliases",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/aliases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAliasesResponse>(await this.callApi(params, req, runtime), new $_model.ListAliasesResponse({}));
  }

  /**
   * @returns ListAliasesResponse
   */
  async listAliases(instanceId: string): Promise<$_model.ListAliasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAliasesWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries cluster names.
   * 
   * @remarks
   * ### Method
   * GET
   * ### URI
   * /openapi/ha3/instances/{instanceId}/cluster-names
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterNamesResponse
   */
  async listClusterNamesWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterNamesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterNames",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/cluster-names`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterNamesResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterNamesResponse({}));
  }

  /**
   * Queries cluster names.
   * 
   * @remarks
   * ### Method
   * GET
   * ### URI
   * /openapi/ha3/instances/{instanceId}/cluster-names
   * @returns ListClusterNamesResponse
   */
  async listClusterNames(): Promise<$_model.ListClusterNamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterNamesWithOptions(headers, runtime);
  }

  /**
   * Queries cluster tasks.
   * 
   * @remarks
   * ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/cluster-tasks
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterTasksResponse
   */
  async listClusterTasksWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClusterTasksResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterTasks",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/cluster-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClusterTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListClusterTasksResponse({}));
  }

  /**
   * Queries cluster tasks.
   * 
   * @remarks
   * ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/cluster-tasks
   * ```
   * @returns ListClusterTasksResponse
   */
  async listClusterTasks(instanceId: string): Promise<$_model.ListClusterTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterTasksWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries clusters.
   * 
   * @remarks
   * ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/clusters
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListClustersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListClustersResponse({}));
  }

  /**
   * Queries clusters.
   * 
   * @remarks
   * ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/clusters
   * ```
   * @returns ListClustersResponse
   */
  async listClusters(instanceId: string): Promise<$_model.ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClustersWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries the schema information about a data source.
   * 
   * @remarks
   * ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}/schemas`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceSchemasResponse
   */
  async listDataSourceSchemasWithOptions(instanceId: string, dataSourceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourceSchemasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSourceSchemas",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/schemas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourceSchemasResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourceSchemasResponse({}));
  }

  /**
   * Queries the schema information about a data source.
   * 
   * @remarks
   * ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}/schemas`
   * @returns ListDataSourceSchemasResponse
   */
  async listDataSourceSchemas(instanceId: string, dataSourceName: string): Promise<$_model.ListDataSourceSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceSchemasWithOptions(instanceId, dataSourceName, headers, runtime);
  }

  /**
   * Displays data source tasks.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * GET
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/data-source-tasks
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourceTasksResponse
   */
  async listDataSourceTasksWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourceTasksResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSourceTasks",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-source-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourceTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourceTasksResponse({}));
  }

  /**
   * Displays data source tasks.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * GET
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/data-source-tasks
   * ```
   * @returns ListDataSourceTasksResponse
   */
  async listDataSourceTasks(instanceId: string): Promise<$_model.ListDataSourceTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourceTasksWithOptions(instanceId, headers, runtime);
  }

  /**
   * Obtains the list of data sources.
   * 
   * @remarks
   * ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources`
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataSourcesResponse
   */
  async listDataSourcesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataSourcesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataSources",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataSourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListDataSourcesResponse({}));
  }

  /**
   * Obtains the list of data sources.
   * 
   * @remarks
   * ## Method
   * `GET`
   * ## URI
   * `/openapi/ha3/instances/{instanceId}/data-sources`
   * @returns ListDataSourcesResponse
   */
  async listDataSources(instanceId: string): Promise<$_model.ListDataSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourcesWithOptions(instanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatabasesResponse
   */
  async listDatabasesWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDatabasesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatabases",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.ListDatabasesResponse({}));
  }

  /**
   * @returns ListDatabasesResponse
   */
  async listDatabases(instanceId: string): Promise<$_model.ListDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatabasesWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries the historical index versions of a data source.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}/generations?domainName={domainName}`
   * 
   * @param request - ListDateSourceGenerationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDateSourceGenerationsResponse
   */
  async listDateSourceGenerationsWithOptions(instanceId: string, dataSourceName: string, request: $_model.ListDateSourceGenerationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDateSourceGenerationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      query["domainName"] = request.domainName;
    }

    if (!$dara.isNull(request.validStatus)) {
      query["validStatus"] = request.validStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDateSourceGenerations",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/generations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDateSourceGenerationsResponse>(await this.callApi(params, req, runtime), new $_model.ListDateSourceGenerationsResponse({}));
  }

  /**
   * Queries the historical index versions of a data source.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/data-sources/{dataSourceName}/generations?domainName={domainName}`
   * 
   * @param request - ListDateSourceGenerationsRequest
   * @returns ListDateSourceGenerationsResponse
   */
  async listDateSourceGenerations(instanceId: string, dataSourceName: string, request: $_model.ListDateSourceGenerationsRequest): Promise<$_model.ListDateSourceGenerationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDateSourceGenerationsWithOptions(instanceId, dataSourceName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndexRecoverRecordsResponse
   */
  async listIndexRecoverRecordsWithOptions(indexName: string, instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIndexRecoverRecordsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndexRecoverRecords",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/actions/list-recover-records`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIndexRecoverRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListIndexRecoverRecordsResponse({}));
  }

  /**
   * @returns ListIndexRecoverRecordsResponse
   */
  async listIndexRecoverRecords(indexName: string, instanceId: string): Promise<$_model.ListIndexRecoverRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexRecoverRecordsWithOptions(indexName, instanceId, headers, runtime);
  }

  /**
   * Obtains the index list.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes
   * 
   * @param request - ListIndexesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndexesResponse
   */
  async listIndexesWithOptions(instanceId: string, request: $_model.ListIndexesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIndexesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.catalog)) {
      query["catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.database)) {
      query["database"] = request.database;
    }

    if (!$dara.isNull(request.newMode)) {
      query["newMode"] = request.newMode;
    }

    if (!$dara.isNull(request.table)) {
      query["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndexes",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIndexesResponse>(await this.callApi(params, req, runtime), new $_model.ListIndexesResponse({}));
  }

  /**
   * Obtains the index list.
   * 
   * @remarks
   * ## Method
   *     GET
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes
   * 
   * @param request - ListIndexesRequest
   * @returns ListIndexesResponse
   */
  async listIndexes(instanceId: string, request: $_model.ListIndexesRequest): Promise<$_model.ListIndexesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the specifications of an instance.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/specs?type=qrs`
   * 
   * @param request - ListInstanceSpecsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceSpecsResponse
   */
  async listInstanceSpecsWithOptions(instanceId: string, request: $_model.ListInstanceSpecsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceSpecsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceSpecs",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/specs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceSpecsResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceSpecsResponse({}));
  }

  /**
   * Queries the specifications of an instance.
   * 
   * @remarks
   * ### Method
   * `GET`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/specs?type=qrs`
   * 
   * @param request - ListInstanceSpecsRequest
   * @returns ListInstanceSpecsResponse
   */
  async listInstanceSpecs(instanceId: string, request: $_model.ListInstanceSpecsRequest): Promise<$_model.ListInstanceSpecsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceSpecsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries a list of instances.
   * 
   * @remarks
   * ### [](#)Method
   * `GET`
   * ### [](#uri)URI
   * `/openapi/ha3/instances`
   * 
   * @param tmpReq - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(tmpReq: $_model.ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancesResponse> {
    tmpReq.validate();
    let request = new $_model.ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.catalog)) {
      query["catalog"] = request.catalog;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      query["dataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.database)) {
      query["database"] = request.database;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.edition)) {
      query["edition"] = request.edition;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
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

    if (!$dara.isNull(request.table)) {
      query["table"] = request.table;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Queries a list of instances.
   * 
   * @remarks
   * ### [](#)Method
   * `GET`
   * ### [](#uri)URI
   * `/openapi/ha3/instances`
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: $_model.ListInstancesRequest): Promise<$_model.ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * @param request - ListLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogsResponse
   */
  async listLogsWithOptions(instanceId: string, request: $_model.ListLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogsResponse> {
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

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogs",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListLogsResponse({}));
  }

  /**
   * @param request - ListLogsRequest
   * @returns ListLogsResponse
   */
  async listLogs(instanceId: string, request: $_model.ListLogsRequest): Promise<$_model.ListLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 通过实例ID查询指定条件下的模型列表。
   * 
   * @remarks
   * ## 请求说明
   * 本API用于从指定实例中获取模型列表，支持通过模型名称、类型以及分页参数进行筛选。请求时需提供实例ID作为路径参数，其他筛选条件为可选的查询参数。
   * 
   * @param request - ListModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelsResponse
   */
  async listModelsWithOptions(instanceId: string, request: $_model.ListModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModelsResponse> {
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

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModels",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModelsResponse>(await this.callApi(params, req, runtime), new $_model.ListModelsResponse({}));
  }

  /**
   * 通过实例ID查询指定条件下的模型列表。
   * 
   * @remarks
   * ## 请求说明
   * 本API用于从指定实例中获取模型列表，支持通过模型名称、类型以及分页参数进行筛选。请求时需提供实例ID作为路径参数，其他筛选条件为可选的查询参数。
   * 
   * @param request - ListModelsRequest
   * @returns ListModelsResponse
   */
  async listModels(instanceId: string, request: $_model.ListModelsRequest): Promise<$_model.ListModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelsWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the details of an online configuration.
   * 
   * @remarks
   * ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node/{nodeName}/online-configs?domain={domain}
   * ```
   * 
   * @param request - ListOnlineConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOnlineConfigsResponse
   */
  async listOnlineConfigsWithOptions(instanceId: string, nodeName: string, request: $_model.ListOnlineConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListOnlineConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domain)) {
      query["domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOnlineConfigs",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/node/${$dara.URL.percentEncode(nodeName)}/online-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOnlineConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListOnlineConfigsResponse({}));
  }

  /**
   * Queries the details of an online configuration.
   * 
   * @remarks
   * ### Method
   * ```java
   * GET
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node/{nodeName}/online-configs?domain={domain}
   * ```
   * 
   * @param request - ListOnlineConfigsRequest
   * @returns ListOnlineConfigsResponse
   */
  async listOnlineConfigs(instanceId: string, nodeName: string, request: $_model.ListOnlineConfigsRequest): Promise<$_model.ListOnlineConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOnlineConfigsWithOptions(instanceId, nodeName, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPausePolicysResponse
   */
  async listPausePolicysWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPausePolicysResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPausePolicys",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/pause-policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPausePolicysResponse>(await this.callApi(params, req, runtime), new $_model.ListPausePolicysResponse({}));
  }

  /**
   * @returns ListPausePolicysResponse
   */
  async listPausePolicys(instanceId: string): Promise<$_model.ListPausePolicysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPausePolicysWithOptions(instanceId, headers, runtime);
  }

  /**
   * 召回引擎版使用POST请求获取搜索测试结果
   * 
   * @param request - ListPostQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPostQueryResultResponse
   */
  async listPostQueryResultWithOptions(instanceId: string, request: $_model.ListPostQueryResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPostQueryResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPostQueryResult",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPostQueryResultResponse>(await this.callApi(params, req, runtime), new $_model.ListPostQueryResultResponse({}));
  }

  /**
   * 召回引擎版使用POST请求获取搜索测试结果
   * 
   * @param request - ListPostQueryResultRequest
   * @returns ListPostQueryResultResponse
   */
  async listPostQueryResult(instanceId: string, request: $_model.ListPostQueryResultRequest): Promise<$_model.ListPostQueryResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPostQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the query result.
   * 
   * @remarks
   * ### [](#)Method
   * `GET`
   * ### [](#uri)URI
   * `/openapi/ha3/instances/{instanceId}/query?query=xxxx`
   * 
   * @param request - ListQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueryResultResponse
   */
  async listQueryResultWithOptions(instanceId: string, request: $_model.ListQueryResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListQueryResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.sql)) {
      query["sql"] = request.sql;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQueryResult",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/query`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListQueryResultResponse>(await this.callApi(params, req, runtime), new $_model.ListQueryResultResponse({}));
  }

  /**
   * Queries the query result.
   * 
   * @remarks
   * ### [](#)Method
   * `GET`
   * ### [](#uri)URI
   * `/openapi/ha3/instances/{instanceId}/query?query=xxxx`
   * 
   * @param request - ListQueryResultRequest
   * @returns ListQueryResultResponse
   */
  async listQueryResult(instanceId: string, request: $_model.ListQueryResultRequest): Promise<$_model.ListQueryResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 召回引擎版获取rest查询搜索测试结果
   * 
   * @param request - ListRestQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRestQueryResultResponse
   */
  async listRestQueryResultWithOptions(instanceId: string, request: $_model.ListRestQueryResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRestQueryResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indexName)) {
      body["indexName"] = request.indexName;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRestQueryResult",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/rest-query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRestQueryResultResponse>(await this.callApi(params, req, runtime), new $_model.ListRestQueryResultResponse({}));
  }

  /**
   * 召回引擎版获取rest查询搜索测试结果
   * 
   * @param request - ListRestQueryResultRequest
   * @returns ListRestQueryResultResponse
   */
  async listRestQueryResult(instanceId: string, request: $_model.ListRestQueryResultRequest): Promise<$_model.ListRestQueryResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRestQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 通过数据源配置获取schema信息
   * 
   * @param request - ListSchemasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSchemasResponse
   */
  async listSchemasWithOptions(instanceId: string, request: $_model.ListSchemasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSchemasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessKey)) {
      query["accessKey"] = request.accessKey;
    }

    if (!$dara.isNull(request.accessSecret)) {
      query["accessSecret"] = request.accessSecret;
    }

    if (!$dara.isNull(request.endpoint)) {
      query["endpoint"] = request.endpoint;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.partition)) {
      query["partition"] = request.partition;
    }

    if (!$dara.isNull(request.project)) {
      query["project"] = request.project;
    }

    if (!$dara.isNull(request.table)) {
      query["table"] = request.table;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSchemas",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/schemas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSchemasResponse>(await this.callApi(params, req, runtime), new $_model.ListSchemasResponse({}));
  }

  /**
   * 通过数据源配置获取schema信息
   * 
   * @param request - ListSchemasRequest
   * @returns ListSchemasResponse
   */
  async listSchemas(instanceId: string, request: $_model.ListSchemasRequest): Promise<$_model.ListSchemasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSchemasWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries a list of index versions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTableGenerationsResponse
   */
  async listTableGenerationsWithOptions(instanceId: string, tableName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTableGenerationsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTableGenerations",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables/${$dara.URL.percentEncode(tableName)}/index_versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTableGenerationsResponse>(await this.callApi(params, req, runtime), new $_model.ListTableGenerationsResponse({}));
  }

  /**
   * Queries a list of index versions.
   * @returns ListTableGenerationsResponse
   */
  async listTableGenerations(instanceId: string, tableName: string): Promise<$_model.ListTableGenerationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTableGenerationsWithOptions(instanceId, tableName, headers, runtime);
  }

  /**
   * Queries a list of index tables.
   * 
   * @param request - ListTablesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTablesResponse
   */
  async listTablesWithOptions(instanceId: string, request: $_model.ListTablesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newMode)) {
      query["newMode"] = request.newMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTables",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTablesResponse>(await this.callApi(params, req, runtime), new $_model.ListTablesResponse({}));
  }

  /**
   * Queries a list of index tables.
   * 
   * @param request - ListTablesRequest
   * @returns ListTablesResponse
   */
  async listTables(instanceId: string, request: $_model.ListTablesRequest): Promise<$_model.ListTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTablesWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 查标签接口
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: $_model.ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/resource-tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * 查标签接口
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 获取集群任务列表（数据源+集群）
   * 
   * @param request - ListTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(instanceId: string, request: $_model.ListTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTasksResponse({}));
  }

  /**
   * 获取集群任务列表（数据源+集群）
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(instanceId: string, request: $_model.ListTasksRequest): Promise<$_model.ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 向量检索版获取向量查询搜索测试结果
   * 
   * @param request - ListVectorQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVectorQueryResultResponse
   */
  async listVectorQueryResultWithOptions(instanceId: string, request: $_model.ListVectorQueryResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVectorQueryResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.path)) {
      query["path"] = request.path;
    }

    if (!$dara.isNull(request.queryType)) {
      query["queryType"] = request.queryType;
    }

    if (!$dara.isNull(request.vectorQueryType)) {
      query["vectorQueryType"] = request.vectorQueryType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVectorQueryResult",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/vector-query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVectorQueryResultResponse>(await this.callApi(params, req, runtime), new $_model.ListVectorQueryResultResponse({}));
  }

  /**
   * 向量检索版获取向量查询搜索测试结果
   * 
   * @param request - ListVectorQueryResultRequest
   * @returns ListVectorQueryResultResponse
   */
  async listVectorQueryResult(instanceId: string, request: $_model.ListVectorQueryResultRequest): Promise<$_model.ListVectorQueryResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVectorQueryResultWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ModifyAdvanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAdvanceConfigResponse
   */
  async modifyAdvanceConfigWithOptions(instanceId: string, configName: string, request: $_model.ModifyAdvanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAdvanceConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.contentType)) {
      body["contentType"] = request.contentType;
    }

    if (!$dara.isNull(request.desc)) {
      body["desc"] = request.desc;
    }

    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.updateTime)) {
      body["updateTime"] = request.updateTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAdvanceConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAdvanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAdvanceConfigResponse({}));
  }

  /**
   * @param request - ModifyAdvanceConfigRequest
   * @returns ModifyAdvanceConfigResponse
   */
  async modifyAdvanceConfig(instanceId: string, configName: string, request: $_model.ModifyAdvanceConfigRequest): Promise<$_model.ModifyAdvanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAdvanceConfigWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Modifies the advanced configurations.
   * 
   * @remarks
   * ## Method
   *     put
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/file?fileName={fileName}
   * 
   * @param request - ModifyAdvanceConfigFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAdvanceConfigFileResponse
   */
  async modifyAdvanceConfigFileWithOptions(instanceId: string, configName: string, request: $_model.ModifyAdvanceConfigFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAdvanceConfigFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAdvanceConfigFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/file`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAdvanceConfigFileResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAdvanceConfigFileResponse({}));
  }

  /**
   * Modifies the advanced configurations.
   * 
   * @remarks
   * ## Method
   *     put
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/file?fileName={fileName}
   * 
   * @param request - ModifyAdvanceConfigFileRequest
   * @returns ModifyAdvanceConfigFileResponse
   */
  async modifyAdvanceConfigFile(instanceId: string, configName: string, request: $_model.ModifyAdvanceConfigFileRequest): Promise<$_model.ModifyAdvanceConfigFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAdvanceConfigFileWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * @param request - ModifyAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAliasResponse
   */
  async modifyAliasWithOptions(instanceId: string, alias: string, request: $_model.ModifyAliasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAliasResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alias)) {
      body["alias"] = request.alias;
    }

    if (!$dara.isNull(request.index)) {
      body["index"] = request.index;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAlias",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/aliases/${$dara.URL.percentEncode(alias)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAliasResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAliasResponse({}));
  }

  /**
   * @param request - ModifyAliasRequest
   * @returns ModifyAliasResponse
   */
  async modifyAlias(instanceId: string, alias: string, request: $_model.ModifyAliasRequest): Promise<$_model.ModifyAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyAliasWithOptions(instanceId, alias, request, headers, runtime);
  }

  /**
   * Modifies the description of a specified cluster.
   * 
   * @remarks
   * ### [](#)Method
   * `PUT`
   * ### [](#uri)URI
   * `/openapi/ha3/instances/{instanceId}/clusters/{clusterName}/desc`
   * 
   * @param request - ModifyClusterDescRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterDescResponse
   */
  async modifyClusterDescWithOptions(instanceId: string, clusterName: string, request: $_model.ModifyClusterDescRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterDescResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterDesc",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters/${$dara.URL.percentEncode(clusterName)}/desc`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterDescResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterDescResponse({}));
  }

  /**
   * Modifies the description of a specified cluster.
   * 
   * @remarks
   * ### [](#)Method
   * `PUT`
   * ### [](#uri)URI
   * `/openapi/ha3/instances/{instanceId}/clusters/{clusterName}/desc`
   * 
   * @param request - ModifyClusterDescRequest
   * @returns ModifyClusterDescResponse
   */
  async modifyClusterDesc(instanceId: string, clusterName: string, request: $_model.ModifyClusterDescRequest): Promise<$_model.ModifyClusterDescResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterDescWithOptions(instanceId, clusterName, request, headers, runtime);
  }

  /**
   * Modifies the configuration information of a cluster.
   * 
   * @remarks
   * ## Request syntax
   *     PUT /openapi/ha3/instances/{instanceId}/cluster-offline-config
   * 
   * @param request - ModifyClusterOfflineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterOfflineConfigResponse
   */
  async modifyClusterOfflineConfigWithOptions(instanceId: string, request: $_model.ModifyClusterOfflineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterOfflineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.buildMode)) {
      body["buildMode"] = request.buildMode;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["dataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.dataTimeSec)) {
      body["dataTimeSec"] = request.dataTimeSec;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.generation)) {
      body["generation"] = request.generation;
    }

    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    if (!$dara.isNull(request.pushMode)) {
      body["pushMode"] = request.pushMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterOfflineConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/cluster-offline-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterOfflineConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterOfflineConfigResponse({}));
  }

  /**
   * Modifies the configuration information of a cluster.
   * 
   * @remarks
   * ## Request syntax
   *     PUT /openapi/ha3/instances/{instanceId}/cluster-offline-config
   * 
   * @param request - ModifyClusterOfflineConfigRequest
   * @returns ModifyClusterOfflineConfigResponse
   */
  async modifyClusterOfflineConfig(instanceId: string, request: $_model.ModifyClusterOfflineConfigRequest): Promise<$_model.ModifyClusterOfflineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterOfflineConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies the online configuration of a cluster.
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/cluster-online-config`
   * 
   * @param request - ModifyClusterOnlineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyClusterOnlineConfigResponse
   */
  async modifyClusterOnlineConfigWithOptions(instanceId: string, request: $_model.ModifyClusterOnlineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyClusterOnlineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusters)) {
      body["clusters"] = request.clusters;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyClusterOnlineConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/cluster-online-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyClusterOnlineConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyClusterOnlineConfigResponse({}));
  }

  /**
   * Modifies the online configuration of a cluster.
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/cluster-online-config`
   * 
   * @param request - ModifyClusterOnlineConfigRequest
   * @returns ModifyClusterOnlineConfigResponse
   */
  async modifyClusterOnlineConfig(instanceId: string, request: $_model.ModifyClusterOnlineConfigRequest): Promise<$_model.ModifyClusterOnlineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyClusterOnlineConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 修改数据源部署信息
   * 
   * @param request - ModifyDataSourceDeployRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDataSourceDeployResponse
   */
  async modifyDataSourceDeployWithOptions(instanceId: string, deployName: string, dataSourceName: string, request: $_model.ModifyDataSourceDeployRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDataSourceDeployResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.generationId)) {
      query["generationId"] = request.generationId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoBuildIndex)) {
      body["autoBuildIndex"] = request.autoBuildIndex;
    }

    if (!$dara.isNull(request.extend)) {
      body["extend"] = request.extend;
    }

    if (!$dara.isNull(request.processor)) {
      body["processor"] = request.processor;
    }

    if (!$dara.isNull(request.storage)) {
      body["storage"] = request.storage;
    }

    if (!$dara.isNull(request.swift)) {
      body["swift"] = request.swift;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDataSourceDeploy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/deploys/${$dara.URL.percentEncode(deployName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDataSourceDeployResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDataSourceDeployResponse({}));
  }

  /**
   * 修改数据源部署信息
   * 
   * @param request - ModifyDataSourceDeployRequest
   * @returns ModifyDataSourceDeployResponse
   */
  async modifyDataSourceDeploy(instanceId: string, deployName: string, dataSourceName: string, request: $_model.ModifyDataSourceDeployRequest): Promise<$_model.ModifyDataSourceDeployResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDataSourceDeployWithOptions(instanceId, deployName, dataSourceName, request, headers, runtime);
  }

  /**
   * Modifies a file.
   * 
   * @remarks
   * ## Method
   *     PUT
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file?fileName=/root/test.txt
   * 
   * @param request - ModifyFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFileResponse
   */
  async modifyFileWithOptions(instanceId: string, indexName: string, versionName: string, request: $_model.ModifyFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFile",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/versions/${$dara.URL.percentEncode(versionName)}/file`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFileResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFileResponse({}));
  }

  /**
   * Modifies a file.
   * 
   * @remarks
   * ## Method
   *     PUT
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/versions/{versionName}/file?fileName=/root/test.txt
   * 
   * @param request - ModifyFileRequest
   * @returns ModifyFileResponse
   */
  async modifyFile(instanceId: string, indexName: string, versionName: string, request: $_model.ModifyFileRequest): Promise<$_model.ModifyFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyFileWithOptions(instanceId, indexName, versionName, request, headers, runtime);
  }

  /**
   * @param request - ModifyIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIndexResponse
   */
  async modifyIndexWithOptions(instanceId: string, indexName: string, request: $_model.ModifyIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyIndexResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.buildParallelNum)) {
      body["buildParallelNum"] = request.buildParallelNum;
    }

    if (!$dara.isNull(request.cluster)) {
      body["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.clusterConfigName)) {
      body["clusterConfigName"] = request.clusterConfigName;
    }

    if (!$dara.isNull(request.config)) {
      body["config"] = request.config;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.dataSource)) {
      body["dataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.dataSourceInfo)) {
      body["dataSourceInfo"] = request.dataSourceInfo;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.domain)) {
      body["domain"] = request.domain;
    }

    if (!$dara.isNull(request.extend)) {
      body["extend"] = request.extend;
    }

    if (!$dara.isNull(request.mergeParallelNum)) {
      body["mergeParallelNum"] = request.mergeParallelNum;
    }

    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    if (!$dara.isNull(request.pushMode)) {
      body["pushMode"] = request.pushMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyIndexResponse>(await this.callApi(params, req, runtime), new $_model.ModifyIndexResponse({}));
  }

  /**
   * @param request - ModifyIndexRequest
   * @returns ModifyIndexResponse
   */
  async modifyIndex(instanceId: string, indexName: string, request: $_model.ModifyIndexRequest): Promise<$_model.ModifyIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexWithOptions(instanceId, indexName, request, headers, runtime);
  }

  /**
   * Modifies the online policy of an index.
   * 
   * @param request - ModifyIndexOnlineStrategyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIndexOnlineStrategyResponse
   */
  async modifyIndexOnlineStrategyWithOptions(instanceId: string, dataSourceName: string, deployName: string, indexName: string, request: $_model.ModifyIndexOnlineStrategyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyIndexOnlineStrategyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeRate)) {
      body["changeRate"] = request.changeRate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIndexOnlineStrategy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/deploys/${$dara.URL.percentEncode(deployName)}/indexes/${$dara.URL.percentEncode(indexName)}/online-strategy`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyIndexOnlineStrategyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyIndexOnlineStrategyResponse({}));
  }

  /**
   * Modifies the online policy of an index.
   * 
   * @param request - ModifyIndexOnlineStrategyRequest
   * @returns ModifyIndexOnlineStrategyResponse
   */
  async modifyIndexOnlineStrategy(instanceId: string, dataSourceName: string, deployName: string, indexName: string, request: $_model.ModifyIndexOnlineStrategyRequest): Promise<$_model.ModifyIndexOnlineStrategyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexOnlineStrategyWithOptions(instanceId, dataSourceName, deployName, indexName, request, headers, runtime);
  }

  /**
   * Modifies the information about index partitions.
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/index-partition`
   * 
   * @param request - ModifyIndexPartitionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIndexPartitionResponse
   */
  async modifyIndexPartitionWithOptions(instanceId: string, request: $_model.ModifyIndexPartitionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyIndexPartitionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.domainName)) {
      body["domainName"] = request.domainName;
    }

    if (!$dara.isNull(request.generation)) {
      body["generation"] = request.generation;
    }

    if (!$dara.isNull(request.indexInfos)) {
      body["indexInfos"] = request.indexInfos;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIndexPartition",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/index-partition`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyIndexPartitionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyIndexPartitionResponse({}));
  }

  /**
   * Modifies the information about index partitions.
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/index-partition`
   * 
   * @param request - ModifyIndexPartitionRequest
   * @returns ModifyIndexPartitionResponse
   */
  async modifyIndexPartition(instanceId: string, request: $_model.ModifyIndexPartitionRequest): Promise<$_model.ModifyIndexPartitionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexPartitionWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies the index version of a cluster (an index version rollback).
   * 
   * @remarks
   * ## [](#)Method
   *     PUT
   * ## [](#uri)URI
   *     /openapi/ha3/instances/{instanceId}/clusters/{clusterName}/index-version
   * 
   * @param request - ModifyIndexVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyIndexVersionResponse
   */
  async modifyIndexVersionWithOptions(instanceId: string, clusterName: string, request: $_model.ModifyIndexVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyIndexVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyIndexVersion",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters/${$dara.URL.percentEncode(clusterName)}/index-version`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyIndexVersionResponse>(await this.callApi(params, req, runtime), new $_model.ModifyIndexVersionResponse({}));
  }

  /**
   * Modifies the index version of a cluster (an index version rollback).
   * 
   * @remarks
   * ## [](#)Method
   *     PUT
   * ## [](#uri)URI
   *     /openapi/ha3/instances/{instanceId}/clusters/{clusterName}/index-version
   * 
   * @param request - ModifyIndexVersionRequest
   * @returns ModifyIndexVersionResponse
   */
  async modifyIndexVersion(instanceId: string, clusterName: string, request: $_model.ModifyIndexVersionRequest): Promise<$_model.ModifyIndexVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyIndexVersionWithOptions(instanceId, clusterName, request, headers, runtime);
  }

  /**
   * 修改模型详情，修改模型状态
   * 
   * @param request - ModifyModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyModelResponse
   */
  async modifyModelWithOptions(instanceId: string, modelName: string, request: $_model.ModifyModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyModelResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
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
      action: "ModifyModel",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/models/${$dara.URL.percentEncode(modelName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyModelResponse>(await this.callApi(params, req, runtime), new $_model.ModifyModelResponse({}));
  }

  /**
   * 修改模型详情，修改模型状态
   * 
   * @param request - ModifyModelRequest
   * @returns ModifyModelResponse
   */
  async modifyModel(instanceId: string, modelName: string, request: $_model.ModifyModelRequest): Promise<$_model.ModifyModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyModelWithOptions(instanceId, modelName, request, headers, runtime);
  }

  /**
   * Modifies the configurations of a node.
   * 
   * @remarks
   * ### Method
   * ```java
   * PUT
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node-config?type=qrs&name=test
   * ```
   * 
   * @param request - ModifyNodeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyNodeConfigResponse
   */
  async modifyNodeConfigWithOptions(instanceId: string, request: $_model.ModifyNodeConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyNodeConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterName)) {
      query["clusterName"] = request.clusterName;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      query["dataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.active)) {
      body["active"] = request.active;
    }

    if (!$dara.isNull(request.dataDuplicateNumber)) {
      body["dataDuplicateNumber"] = request.dataDuplicateNumber;
    }

    if (!$dara.isNull(request.dataFragmentNumber)) {
      body["dataFragmentNumber"] = request.dataFragmentNumber;
    }

    if (!$dara.isNull(request.flowRatio)) {
      body["flowRatio"] = request.flowRatio;
    }

    if (!$dara.isNull(request.minServicePercent)) {
      body["minServicePercent"] = request.minServicePercent;
    }

    if (!$dara.isNull(request.published)) {
      body["published"] = request.published;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyNodeConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/node-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyNodeConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyNodeConfigResponse({}));
  }

  /**
   * Modifies the configurations of a node.
   * 
   * @remarks
   * ### Method
   * ```java
   * PUT
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node-config?type=qrs&name=test
   * ```
   * 
   * @param request - ModifyNodeConfigRequest
   * @returns ModifyNodeConfigResponse
   */
  async modifyNodeConfig(instanceId: string, request: $_model.ModifyNodeConfigRequest): Promise<$_model.ModifyNodeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyNodeConfigWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies online configurations.
   * 
   * @remarks
   * ### Method
   * ```java
   * put
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node/{nodeName}/online-configs/{indexName}
   * ```
   * 
   * @param request - ModifyOnlineConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyOnlineConfigResponse
   */
  async modifyOnlineConfigWithOptions(instanceId: string, nodeName: string, indexName: string, request: $_model.ModifyOnlineConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyOnlineConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyOnlineConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/node/${$dara.URL.percentEncode(nodeName)}/online-configs/${$dara.URL.percentEncode(indexName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyOnlineConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyOnlineConfigResponse({}));
  }

  /**
   * Modifies online configurations.
   * 
   * @remarks
   * ### Method
   * ```java
   * put
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/node/{nodeName}/online-configs/{indexName}
   * ```
   * 
   * @param request - ModifyOnlineConfigRequest
   * @returns ModifyOnlineConfigResponse
   */
  async modifyOnlineConfig(instanceId: string, nodeName: string, indexName: string, request: $_model.ModifyOnlineConfigRequest): Promise<$_model.ModifyOnlineConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyOnlineConfigWithOptions(instanceId, nodeName, indexName, request, headers, runtime);
  }

  /**
   * 修改实例的密码
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/password`
   * 
   * @param request - ModifyPasswordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPasswordResponse
   */
  async modifyPasswordWithOptions(instanceId: string, request: $_model.ModifyPasswordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPasswordResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    if (!$dara.isNull(request.username)) {
      body["username"] = request.username;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPassword",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/password`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPasswordResponse({}));
  }

  /**
   * 修改实例的密码
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/password`
   * 
   * @param request - ModifyPasswordRequest
   * @returns ModifyPasswordResponse
   */
  async modifyPassword(instanceId: string, request: $_model.ModifyPasswordRequest): Promise<$_model.ModifyPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPasswordWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - ModifyPausePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPausePolicyResponse
   */
  async modifyPausePolicyWithOptions(instanceId: string, request: $_model.ModifyPausePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPausePolicyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPausePolicy",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/pause-policies`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPausePolicyResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPausePolicyResponse({}));
  }

  /**
   * @param request - ModifyPausePolicyRequest
   * @returns ModifyPausePolicyResponse
   */
  async modifyPausePolicy(instanceId: string, request: $_model.ModifyPausePolicyRequest): Promise<$_model.ModifyPausePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPausePolicyWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 修改公网域名访问白名单
   * 
   * @param request - ModifyPublicUrlIpListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyPublicUrlIpListResponse
   */
  async modifyPublicUrlIpListWithOptions(instanceId: string, request: $_model.ModifyPublicUrlIpListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyPublicUrlIpListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyPublicUrlIpList",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/public-url-ip-list`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyPublicUrlIpListResponse>(await this.callApi(params, req, runtime), new $_model.ModifyPublicUrlIpListResponse({}));
  }

  /**
   * 修改公网域名访问白名单
   * 
   * @param request - ModifyPublicUrlIpListRequest
   * @returns ModifyPublicUrlIpListResponse
   */
  async modifyPublicUrlIpList(instanceId: string, request: $_model.ModifyPublicUrlIpListRequest): Promise<$_model.ModifyPublicUrlIpListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyPublicUrlIpListWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 通过指定实例ID来修改数据节点的副本或分片数量。
   * 
   * @remarks
   * ## 请求说明
   * 本API允许用户修改特定实例下的数据节点副本数或分片数。请求时，需提供实例ID，并在请求体中指定要修改的`replica`（副本数）或`partition`（分片数）。请注意，这两个参数都是可选的，但至少需要提供其中一个以执行更新操作。
   * 
   * @param request - ModifySearcherReplicaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifySearcherReplicaResponse
   */
  async modifySearcherReplicaWithOptions(instanceId: string, request: $_model.ModifySearcherReplicaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifySearcherReplicaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    if (!$dara.isNull(request.replica)) {
      body["replica"] = request.replica;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifySearcherReplica",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/replica`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifySearcherReplicaResponse>(await this.callApi(params, req, runtime), new $_model.ModifySearcherReplicaResponse({}));
  }

  /**
   * 通过指定实例ID来修改数据节点的副本或分片数量。
   * 
   * @remarks
   * ## 请求说明
   * 本API允许用户修改特定实例下的数据节点副本数或分片数。请求时，需提供实例ID，并在请求体中指定要修改的`replica`（副本数）或`partition`（分片数）。请注意，这两个参数都是可选的，但至少需要提供其中一个以执行更新操作。
   * 
   * @param request - ModifySearcherReplicaRequest
   * @returns ModifySearcherReplicaResponse
   */
  async modifySearcherReplica(instanceId: string, request: $_model.ModifySearcherReplicaRequest): Promise<$_model.ModifySearcherReplicaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifySearcherReplicaWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Modifies an index table.
   * 
   * @param request - ModifyTableRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyTableResponse
   */
  async modifyTableWithOptions(instanceId: string, tableName: string, request: $_model.ModifyTableRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyTableResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataProcessConfig)) {
      body["dataProcessConfig"] = request.dataProcessConfig;
    }

    if (!$dara.isNull(request.dataSource)) {
      body["dataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.fieldSchema)) {
      body["fieldSchema"] = request.fieldSchema;
    }

    if (!$dara.isNull(request.partitionCount)) {
      body["partitionCount"] = request.partitionCount;
    }

    if (!$dara.isNull(request.primaryKey)) {
      body["primaryKey"] = request.primaryKey;
    }

    if (!$dara.isNull(request.rawSchema)) {
      body["rawSchema"] = request.rawSchema;
    }

    if (!$dara.isNull(request.vectorIndex)) {
      body["vectorIndex"] = request.vectorIndex;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyTable",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables/${$dara.URL.percentEncode(tableName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyTableResponse>(await this.callApi(params, req, runtime), new $_model.ModifyTableResponse({}));
  }

  /**
   * Modifies an index table.
   * 
   * @param request - ModifyTableRequest
   * @returns ModifyTableResponse
   */
  async modifyTable(instanceId: string, tableName: string, request: $_model.ModifyTableRequest): Promise<$_model.ModifyTableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyTableWithOptions(instanceId, tableName, request, headers, runtime);
  }

  /**
   * Publishes a version of advanced configurations.
   * 
   * @remarks
   * ## Method
   * ~~~
   * POST
   * ~~~
   * ## URI
   * ~~~
   * /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/actions/publish
   * ~~~
   * 
   * @param request - PublishAdvanceConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishAdvanceConfigResponse
   */
  async publishAdvanceConfigWithOptions(instanceId: string, configName: string, request: $_model.PublishAdvanceConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishAdvanceConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.desc)) {
      body["desc"] = request.desc;
    }

    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishAdvanceConfig",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/advanced-configs/${$dara.URL.percentEncode(configName)}/actions/publish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishAdvanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.PublishAdvanceConfigResponse({}));
  }

  /**
   * Publishes a version of advanced configurations.
   * 
   * @remarks
   * ## Method
   * ~~~
   * POST
   * ~~~
   * ## URI
   * ~~~
   * /openapi/ha3/instances/{instanceId}/advanced-configs/{configName}/actions/publish
   * ~~~
   * 
   * @param request - PublishAdvanceConfigRequest
   * @returns PublishAdvanceConfigResponse
   */
  async publishAdvanceConfig(instanceId: string, configName: string, request: $_model.PublishAdvanceConfigRequest): Promise<$_model.PublishAdvanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishAdvanceConfigWithOptions(instanceId, configName, request, headers, runtime);
  }

  /**
   * Publishes a specified index version.
   * 
   * @remarks
   * ## Method
   *     POST
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/actions/publish
   * 
   * @param request - PublishIndexVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishIndexVersionResponse
   */
  async publishIndexVersionWithOptions(instanceId: string, indexName: string, request: $_model.PublishIndexVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishIndexVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      body["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishIndexVersion",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/actions/publish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishIndexVersionResponse>(await this.callApi(params, req, runtime), new $_model.PublishIndexVersionResponse({}));
  }

  /**
   * Publishes a specified index version.
   * 
   * @remarks
   * ## Method
   *     POST
   * ## URI
   *     /openapi/ha3/instances/{instanceId}/indexes/{indexName}/actions/publish
   * 
   * @param request - PublishIndexVersionRequest
   * @returns PublishIndexVersionResponse
   */
  async publishIndexVersion(instanceId: string, indexName: string, request: $_model.PublishIndexVersionRequest): Promise<$_model.PublishIndexVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishIndexVersionWithOptions(instanceId, indexName, request, headers, runtime);
  }

  /**
   * @param request - PushDocumentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushDocumentsResponse
   */
  async pushDocumentsWithOptions(instanceId: string, dataSourceName: string, request: $_model.PushDocumentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PushDocumentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pkField)) {
      query["pkField"] = request.pkField;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "PushDocuments",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/data-sources/${$dara.URL.percentEncode(dataSourceName)}/actions/bulk`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PushDocumentsResponse>(await this.callApi(params, req, runtime), new $_model.PushDocumentsResponse({}));
  }

  /**
   * @param request - PushDocumentsRequest
   * @returns PushDocumentsResponse
   */
  async pushDocuments(instanceId: string, dataSourceName: string, request: $_model.PushDocumentsRequest): Promise<$_model.PushDocumentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pushDocumentsWithOptions(instanceId, dataSourceName, request, headers, runtime);
  }

  /**
   * Restores data from an index.
   * 
   * @remarks
   * ### Method
   * `POST`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/recover-index`
   * 
   * @param request - RecoverIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverIndexResponse
   */
  async recoverIndexWithOptions(instanceId: string, request: $_model.RecoverIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RecoverIndexResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.buildDeployId)) {
      body["buildDeployId"] = request.buildDeployId;
    }

    if (!$dara.isNull(request.dataSourceName)) {
      body["dataSourceName"] = request.dataSourceName;
    }

    if (!$dara.isNull(request.generation)) {
      body["generation"] = request.generation;
    }

    if (!$dara.isNull(request.indexName)) {
      body["indexName"] = request.indexName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecoverIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/recover-index`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecoverIndexResponse>(await this.callApi(params, req, runtime), new $_model.RecoverIndexResponse({}));
  }

  /**
   * Restores data from an index.
   * 
   * @remarks
   * ### Method
   * `POST`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}/recover-index`
   * 
   * @param request - RecoverIndexRequest
   * @returns RecoverIndexResponse
   */
  async recoverIndex(instanceId: string, request: $_model.RecoverIndexRequest): Promise<$_model.RecoverIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recoverIndexWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Rebuilds an index.
   * 
   * @param request - ReindexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReindexResponse
   */
  async reindexWithOptions(instanceId: string, tableName: string, request: $_model.ReindexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReindexResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataTimeSec)) {
      body["dataTimeSec"] = request.dataTimeSec;
    }

    if (!$dara.isNull(request.ossDataPath)) {
      body["ossDataPath"] = request.ossDataPath;
    }

    if (!$dara.isNull(request.partition)) {
      body["partition"] = request.partition;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Reindex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/tables/${$dara.URL.percentEncode(tableName)}/reindex`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReindexResponse>(await this.callApi(params, req, runtime), new $_model.ReindexResponse({}));
  }

  /**
   * Rebuilds an index.
   * 
   * @param request - ReindexRequest
   * @returns ReindexResponse
   */
  async reindex(instanceId: string, tableName: string, request: $_model.ReindexRequest): Promise<$_model.ReindexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reindexWithOptions(instanceId, tableName, request, headers, runtime);
  }

  /**
   * Deletes a cluster.
   * 
   * @remarks
   * ### Method
   * ```java
   * DELETE
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/clusters/{clusterName}
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveClusterResponse
   */
  async removeClusterWithOptions(instanceId: string, clusterName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveClusterResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveCluster",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/clusters/${$dara.URL.percentEncode(clusterName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveClusterResponse>(await this.callApi(params, req, runtime), new $_model.RemoveClusterResponse({}));
  }

  /**
   * Deletes a cluster.
   * 
   * @remarks
   * ### Method
   * ```java
   * DELETE
   * ```
   * ### URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/clusters/{clusterName}
   * ```
   * @returns RemoveClusterResponse
   */
  async removeCluster(instanceId: string, clusterName: string): Promise<$_model.RemoveClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeClusterWithOptions(instanceId, clusterName, headers, runtime);
  }

  /**
   * @param request - RenameFolderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameFolderResponse
   */
  async renameFolderWithOptions(instanceId: string, database: string, folderId: string, request: $_model.RenameFolderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenameFolderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenameFolder",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/folders/${$dara.URL.percentEncode(folderId)}/name`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenameFolderResponse>(await this.callApi(params, req, runtime), new $_model.RenameFolderResponse({}));
  }

  /**
   * @param request - RenameFolderRequest
   * @returns RenameFolderResponse
   */
  async renameFolder(instanceId: string, database: string, folderId: string, request: $_model.RenameFolderRequest): Promise<$_model.RenameFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renameFolderWithOptions(instanceId, database, folderId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartIndexResponse
   */
  async startIndexWithOptions(instanceId: string, indexName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartIndexResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/startIndex`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartIndexResponse>(await this.callApi(params, req, runtime), new $_model.StartIndexResponse({}));
  }

  /**
   * @returns StartIndexResponse
   */
  async startIndex(instanceId: string, indexName: string): Promise<$_model.StartIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startIndexWithOptions(instanceId, indexName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopIndexResponse
   */
  async stopIndexWithOptions(instanceId: string, indexName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopIndexResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopIndex",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/indexes/${$dara.URL.percentEncode(indexName)}/stopIndex`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopIndexResponse>(await this.callApi(params, req, runtime), new $_model.StopIndexResponse({}));
  }

  /**
   * @returns StopIndexResponse
   */
  async stopIndex(instanceId: string, indexName: string): Promise<$_model.StopIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopIndexWithOptions(instanceId, indexName, headers, runtime);
  }

  /**
   * Stops an FSM task.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * PUT
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/stop-task/{fsmId}
   * ```
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTaskResponse
   */
  async stopTaskWithOptions(instanceId: string, fsmId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTask",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/stop-task/${$dara.URL.percentEncode(fsmId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopTaskResponse>(await this.callApi(params, req, runtime), new $_model.StopTaskResponse({}));
  }

  /**
   * Stops an FSM task.
   * 
   * @remarks
   * ### [](#)Method
   * ```java
   * PUT
   * ```
   * ### [](#uri)URI
   * ```java
   * /openapi/ha3/instances/{instanceId}/stop-task/{fsmId}
   * ```
   * @returns StopTaskResponse
   */
  async stopTask(instanceId: string, fsmId: string): Promise<$_model.StopTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTaskWithOptions(instanceId, fsmId, headers, runtime);
  }

  /**
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      body["tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/resource-tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * 打标签接口
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 删标签接口
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: $_model.UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "resourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tagKey)) {
      request.tagKeyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKey, "tagKey", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["all"] = request.all;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["resourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeyShrink)) {
      query["tagKey"] = request.tagKeyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/resource-tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * 删标签接口
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Modifies the configuration of a specified instance.
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(instanceId: string, request: $_model.UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.components)) {
      body["components"] = request.components;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.orderType)) {
      body["orderType"] = request.orderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * Modifies the configuration of a specified instance.
   * 
   * @remarks
   * ### Method
   * `PUT`
   * ### URI
   * `/openapi/ha3/instances/{instanceId}`
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(instanceId: string, request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * @param request - UpdateSqlInstanceContentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSqlInstanceContentResponse
   */
  async updateSqlInstanceContentWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: $_model.UpdateSqlInstanceContentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSqlInstanceContentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSqlInstanceContent",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}/content`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSqlInstanceContentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSqlInstanceContentResponse({}));
  }

  /**
   * @param request - UpdateSqlInstanceContentRequest
   * @returns UpdateSqlInstanceContentResponse
   */
  async updateSqlInstanceContent(instanceId: string, database: string, sqlInstanceId: string, request: $_model.UpdateSqlInstanceContentRequest): Promise<$_model.UpdateSqlInstanceContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceContentWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @param request - UpdateSqlInstanceNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSqlInstanceNameResponse
   */
  async updateSqlInstanceNameWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: $_model.UpdateSqlInstanceNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSqlInstanceNameResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSqlInstanceName",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}/name`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSqlInstanceNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSqlInstanceNameResponse({}));
  }

  /**
   * @param request - UpdateSqlInstanceNameRequest
   * @returns UpdateSqlInstanceNameResponse
   */
  async updateSqlInstanceName(instanceId: string, database: string, sqlInstanceId: string, request: $_model.UpdateSqlInstanceNameRequest): Promise<$_model.UpdateSqlInstanceNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceNameWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

  /**
   * @param request - UpdateSqlInstanceParamsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSqlInstanceParamsResponse
   */
  async updateSqlInstanceParamsWithOptions(instanceId: string, database: string, sqlInstanceId: string, request: $_model.UpdateSqlInstanceParamsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSqlInstanceParamsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.combineParam)) {
      body["combineParam"] = request.combineParam;
    }

    if (!$dara.isNull(request.dynamicParam)) {
      body["dynamicParam"] = request.dynamicParam;
    }

    if (!$dara.isNull(request.kvpair)) {
      body["kvpair"] = request.kvpair;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    if (!$dara.isNull(request.staticParam)) {
      body["staticParam"] = request.staticParam;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSqlInstanceParams",
      version: "2021-10-25",
      protocol: "HTTPS",
      pathname: `/openapi/ha3/instances/${$dara.URL.percentEncode(instanceId)}/sql-studio/databases/${$dara.URL.percentEncode(database)}/sql-instances/${$dara.URL.percentEncode(sqlInstanceId)}/params`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSqlInstanceParamsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSqlInstanceParamsResponse({}));
  }

  /**
   * @param request - UpdateSqlInstanceParamsRequest
   * @returns UpdateSqlInstanceParamsResponse
   */
  async updateSqlInstanceParams(instanceId: string, database: string, sqlInstanceId: string, request: $_model.UpdateSqlInstanceParamsRequest): Promise<$_model.UpdateSqlInstanceParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSqlInstanceParamsWithOptions(instanceId, database, sqlInstanceId, request, headers, runtime);
  }

}
