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
    this._endpoint = this.getEndpoint("cms", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建EntityStore相关存储
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEntityStoreResponse
   */
  async createEntityStoreWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEntityStoreResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEntityStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}/entitystore`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEntityStoreResponse>(await this.callApi(params, req, runtime), new $_model.CreateEntityStoreResponse({}));
  }

  /**
   * 创建EntityStore相关存储
   * @returns CreateEntityStoreResponse
   */
  async createEntityStore(workspaceName: string): Promise<$_model.CreateEntityStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEntityStoreWithOptions(workspaceName, headers, runtime);
  }

  /**
   * 创建Prometheus监控实例
   * 
   * @param request - CreatePrometheusInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePrometheusInstanceResponse
   */
  async createPrometheusInstanceWithOptions(request: $_model.CreatePrometheusInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePrometheusInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.archiveDuration)) {
      body["archiveDuration"] = request.archiveDuration;
    }

    if (!$dara.isNull(request.authFreeReadPolicy)) {
      body["authFreeReadPolicy"] = request.authFreeReadPolicy;
    }

    if (!$dara.isNull(request.authFreeWritePolicy)) {
      body["authFreeWritePolicy"] = request.authFreeWritePolicy;
    }

    if (!$dara.isNull(request.enableAuthFreeRead)) {
      body["enableAuthFreeRead"] = request.enableAuthFreeRead;
    }

    if (!$dara.isNull(request.enableAuthFreeWrite)) {
      body["enableAuthFreeWrite"] = request.enableAuthFreeWrite;
    }

    if (!$dara.isNull(request.enableAuthToken)) {
      body["enableAuthToken"] = request.enableAuthToken;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.prometheusInstanceName)) {
      body["prometheusInstanceName"] = request.prometheusInstanceName;
    }

    if (!$dara.isNull(request.status)) {
      body["status"] = request.status;
    }

    if (!$dara.isNull(request.storageDuration)) {
      body["storageDuration"] = request.storageDuration;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePrometheusInstance",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/prometheus-instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePrometheusInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreatePrometheusInstanceResponse({}));
  }

  /**
   * 创建Prometheus监控实例
   * 
   * @param request - CreatePrometheusInstanceRequest
   * @returns CreatePrometheusInstanceResponse
   */
  async createPrometheusInstance(request: $_model.CreatePrometheusInstanceRequest): Promise<$_model.CreatePrometheusInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPrometheusInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 创建Umodel配置
   * 
   * @param request - CreateUmodelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUmodelResponse
   */
  async createUmodelWithOptions(workspace: string, request: $_model.CreateUmodelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUmodelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commonSchemaRef)) {
      body["commonSchemaRef"] = request.commonSchemaRef;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUmodel",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUmodelResponse>(await this.callApi(params, req, runtime), new $_model.CreateUmodelResponse({}));
  }

  /**
   * 创建Umodel配置
   * 
   * @param request - CreateUmodelRequest
   * @returns CreateUmodelResponse
   */
  async createUmodel(workspace: string, request: $_model.CreateUmodelRequest): Promise<$_model.CreateUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUmodelWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 删除EntityStore相关存储
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEntityStoreResponse
   */
  async deleteEntityStoreWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEntityStoreResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEntityStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}/entitystore`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEntityStoreResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEntityStoreResponse({}));
  }

  /**
   * 删除EntityStore相关存储
   * @returns DeleteEntityStoreResponse
   */
  async deleteEntityStore(workspaceName: string): Promise<$_model.DeleteEntityStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEntityStoreWithOptions(workspaceName, headers, runtime);
  }

  /**
   * 删除Umodel配置信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUmodelResponse
   */
  async deleteUmodelWithOptions(workspace: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUmodelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUmodel",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUmodelResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUmodelResponse({}));
  }

  /**
   * 删除Umodel配置信息
   * @returns DeleteUmodelResponse
   */
  async deleteUmodel(workspace: string): Promise<$_model.DeleteUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUmodelWithOptions(workspace, headers, runtime);
  }

  /**
   * 删除 Umodel Elements
   * 
   * @param request - DeleteUmodelDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUmodelDataResponse
   */
  async deleteUmodelDataWithOptions(workspace: string, request: $_model.DeleteUmodelDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUmodelDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domain)) {
      query["domain"] = request.domain;
    }

    if (!$dara.isNull(request.kind)) {
      query["kind"] = request.kind;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUmodelData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel/data`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUmodelDataResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUmodelDataResponse({}));
  }

  /**
   * 删除 Umodel Elements
   * 
   * @param request - DeleteUmodelDataRequest
   * @returns DeleteUmodelDataResponse
   */
  async deleteUmodelData(workspace: string, request: $_model.DeleteUmodelDataRequest): Promise<$_model.DeleteUmodelDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUmodelDataWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 删除工作空间
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspaceWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkspaceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkspaceResponse({}));
  }

  /**
   * 删除工作空间
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(workspaceName: string): Promise<$_model.DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(workspaceName, headers, runtime);
  }

  /**
   * 获取EntityStore相关存储信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEntityStoreResponse
   */
  async getEntityStoreWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEntityStoreResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEntityStore",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}/entitystore`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEntityStoreResponse>(await this.callApi(params, req, runtime), new $_model.GetEntityStoreResponse({}));
  }

  /**
   * 获取EntityStore相关存储信息
   * @returns GetEntityStoreResponse
   */
  async getEntityStore(workspaceName: string): Promise<$_model.GetEntityStoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEntityStoreWithOptions(workspaceName, headers, runtime);
  }

  /**
   * 查询指定Workspace下的实体和关系数据，返回结果显示某时间区间中的实体数据（返回结果压缩后传输）。
   * 
   * @param request - GetEntityStoreDataRequest
   * @param headers - GetEntityStoreDataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEntityStoreDataResponse
   */
  async getEntityStoreDataWithOptions(workspace: string, request: $_model.GetEntityStoreDataRequest, headers: $_model.GetEntityStoreDataHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetEntityStoreDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.from)) {
      body["from"] = request.from;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.to)) {
      body["to"] = request.to;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.acceptEncoding)) {
      realHeaders["acceptEncoding"] = String(headers.acceptEncoding);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEntityStoreData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/entitiesAndRelations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEntityStoreDataResponse>(await this.callApi(params, req, runtime), new $_model.GetEntityStoreDataResponse({}));
  }

  /**
   * 查询指定Workspace下的实体和关系数据，返回结果显示某时间区间中的实体数据（返回结果压缩后传输）。
   * 
   * @param request - GetEntityStoreDataRequest
   * @returns GetEntityStoreDataResponse
   */
  async getEntityStoreData(workspace: string, request: $_model.GetEntityStoreDataRequest): Promise<$_model.GetEntityStoreDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetEntityStoreDataHeaders({ });
    return await this.getEntityStoreDataWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 获取应用可观测实例
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceObservabilityResponse
   */
  async getServiceObservabilityWithOptions(workspace: string, type: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceObservabilityResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceObservability",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/service-observability/${$dara.URL.percentEncode(type)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceObservabilityResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceObservabilityResponse({}));
  }

  /**
   * 获取应用可观测实例
   * @returns GetServiceObservabilityResponse
   */
  async getServiceObservability(workspace: string, type: string): Promise<$_model.GetServiceObservabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceObservabilityWithOptions(workspace, type, headers, runtime);
  }

  /**
   * 获取Umodel配置信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUmodelResponse
   */
  async getUmodelWithOptions(workspace: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUmodelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUmodel",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUmodelResponse>(await this.callApi(params, req, runtime), new $_model.GetUmodelResponse({}));
  }

  /**
   * 获取Umodel配置信息
   * @returns GetUmodelResponse
   */
  async getUmodel(workspace: string): Promise<$_model.GetUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUmodelWithOptions(workspace, headers, runtime);
  }

  /**
   * 获取相关联的 Umodel 图数据
   * 
   * @param request - GetUmodelDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUmodelDataResponse
   */
  async getUmodelDataWithOptions(workspace: string, request: $_model.GetUmodelDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUmodelDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.method)) {
      query["method"] = request.method;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUmodelData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel/graph`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUmodelDataResponse>(await this.callApi(params, req, runtime), new $_model.GetUmodelDataResponse({}));
  }

  /**
   * 获取相关联的 Umodel 图数据
   * 
   * @param request - GetUmodelDataRequest
   * @returns GetUmodelDataResponse
   */
  async getUmodelData(workspace: string, request: $_model.GetUmodelDataRequest): Promise<$_model.GetUmodelDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUmodelDataWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 获取工作空间
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceResponse
   */
  async getWorkspaceWithOptions(workspaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWorkspaceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.GetWorkspaceResponse({}));
  }

  /**
   * 获取工作空间
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(workspaceName: string): Promise<$_model.GetWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceWithOptions(workspaceName, headers, runtime);
  }

  /**
   * 查询告警动作
   * 
   * @param tmpReq - ListAlertActionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertActionsResponse
   */
  async listAlertActionsWithOptions(tmpReq: $_model.ListAlertActionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertActionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListAlertActionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alertActionIds)) {
      request.alertActionIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alertActionIds, "alertActionIds", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertActionIdsShrink)) {
      query["alertActionIds"] = request.alertActionIdsShrink;
    }

    if (!$dara.isNull(request.alertActionName)) {
      query["alertActionName"] = request.alertActionName;
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
      action: "ListAlertActions",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/alertActions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertActionsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertActionsResponse({}));
  }

  /**
   * 查询告警动作
   * 
   * @param request - ListAlertActionsRequest
   * @returns ListAlertActionsResponse
   */
  async listAlertActions(request: $_model.ListAlertActionsRequest): Promise<$_model.ListAlertActionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertActionsWithOptions(request, headers, runtime);
  }

  /**
   * 获取工作空间列表
   * 
   * @param tmpReq - ListWorkspacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(tmpReq: $_model.ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspacesResponse> {
    tmpReq.validate();
    let request = new $_model.ListWorkspacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.workspaceNameList)) {
      request.workspaceNameListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.workspaceNameList, "workspaceNameList", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["workspaceName"] = request.workspaceName;
    }

    if (!$dara.isNull(request.workspaceNameListShrink)) {
      query["workspaceNameList"] = request.workspaceNameListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * 获取工作空间列表
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
   * 创建工作空间
   * 
   * @param request - PutWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutWorkspaceResponse
   */
  async putWorkspaceWithOptions(workspaceName: string, request: $_model.PutWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutWorkspaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["displayName"] = request.displayName;
    }

    if (!$dara.isNull(request.slsProject)) {
      body["slsProject"] = request.slsProject;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutWorkspace",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspaceName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.PutWorkspaceResponse({}));
  }

  /**
   * 创建工作空间
   * 
   * @param request - PutWorkspaceRequest
   * @returns PutWorkspaceResponse
   */
  async putWorkspace(workspaceName: string, request: $_model.PutWorkspaceRequest): Promise<$_model.PutWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putWorkspaceWithOptions(workspaceName, request, headers, runtime);
  }

  /**
   * 更新Umodel配置信息
   * 
   * @param request - UpdateUmodelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUmodelResponse
   */
  async updateUmodelWithOptions(workspace: string, request: $_model.UpdateUmodelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUmodelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commonSchemaRef)) {
      body["commonSchemaRef"] = request.commonSchemaRef;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUmodel",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUmodelResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUmodelResponse({}));
  }

  /**
   * 更新Umodel配置信息
   * 
   * @param request - UpdateUmodelRequest
   * @returns UpdateUmodelResponse
   */
  async updateUmodel(workspace: string, request: $_model.UpdateUmodelRequest): Promise<$_model.UpdateUmodelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUmodelWithOptions(workspace, request, headers, runtime);
  }

  /**
   * 写入 Umodel Elements
   * 
   * @param request - UpsertUmodelDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpsertUmodelDataResponse
   */
  async upsertUmodelDataWithOptions(workspace: string, request: $_model.UpsertUmodelDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpsertUmodelDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.method)) {
      query["method"] = request.method;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.elements)) {
      body["elements"] = request.elements;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpsertUmodelData",
      version: "2024-03-30",
      protocol: "HTTPS",
      pathname: `/workspace/${$dara.URL.percentEncode(workspace)}/umodel/data`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpsertUmodelDataResponse>(await this.callApi(params, req, runtime), new $_model.UpsertUmodelDataResponse({}));
  }

  /**
   * 写入 Umodel Elements
   * 
   * @param request - UpsertUmodelDataRequest
   * @returns UpsertUmodelDataResponse
   */
  async upsertUmodelData(workspace: string, request: $_model.UpsertUmodelDataRequest): Promise<$_model.UpsertUmodelDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upsertUmodelDataWithOptions(workspace, request, headers, runtime);
  }

}
