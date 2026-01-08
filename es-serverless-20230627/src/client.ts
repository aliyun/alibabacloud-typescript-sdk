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
    this._endpoint = this.getEndpoint("es-serverless", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 撤销规格审批
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSpecReviewTaskResponse
   */
  async cancelSpecReviewTaskWithOptions(appName: string, taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelSpecReviewTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelSpecReviewTask",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/spec-review-tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelSpecReviewTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelSpecReviewTaskResponse({}));
  }

  /**
   * 撤销规格审批
   * @returns CancelSpecReviewTaskResponse
   */
  async cancelSpecReviewTask(appName: string, taskId: string): Promise<$_model.CancelSpecReviewTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelSpecReviewTaskWithOptions(appName, taskId, headers, runtime);
  }

  /**
   * 创建Serverless应用
   * 
   * @param request - CreateAppRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppResponse
   */
  async createAppWithOptions(request: $_model.CreateAppRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["appName"] = request.appName;
    }

    if (!$dara.isNull(request.authentication)) {
      body["authentication"] = request.authentication;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["chargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.network)) {
      body["network"] = request.network;
    }

    if (!$dara.isNull(request.privateNetwork)) {
      body["privateNetwork"] = request.privateNetwork;
    }

    if (!$dara.isNull(request.quotaInfo)) {
      body["quotaInfo"] = request.quotaInfo;
    }

    if (!$dara.isNull(request.regionId)) {
      body["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scenario)) {
      body["scenario"] = request.scenario;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApp",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppResponse({}));
  }

  /**
   * 创建Serverless应用
   * 
   * @param request - CreateAppRequest
   * @returns CreateAppResponse
   */
  async createApp(request: $_model.CreateAppRequest): Promise<$_model.CreateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppWithOptions(request, headers, runtime);
  }

  /**
   * 创建端点
   * 
   * @param request - CreateEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEndpointResponse
   */
  async createEndpointWithOptions(request: $_model.CreateEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEndpointResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endpointZones)) {
      body["endpointZones"] = request.endpointZones;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEndpoint",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/endpoints`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateEndpointResponse({}));
  }

  /**
   * 创建端点
   * 
   * @param request - CreateEndpointRequest
   * @returns CreateEndpointResponse
   */
  async createEndpoint(request: $_model.CreateEndpointRequest): Promise<$_model.CreateEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEndpointWithOptions(request, headers, runtime);
  }

  /**
   * 创建快照
   * 
   * @param request - CreateSnapshotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSnapshotResponse
   */
  async createSnapshotWithOptions(appName: string, repository: string, request: $_model.CreateSnapshotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSnapshotResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indices)) {
      body["indices"] = request.indices;
    }

    if (!$dara.isNull(request.snapshot)) {
      body["snapshot"] = request.snapshot;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSnapshot",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/snapshot-repositories/${$dara.URL.percentEncode(repository)}/snapshots`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.CreateSnapshotResponse({}));
  }

  /**
   * 创建快照
   * 
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(appName: string, repository: string, request: $_model.CreateSnapshotRequest): Promise<$_model.CreateSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSnapshotWithOptions(appName, repository, request, headers, runtime);
  }

  /**
   * 删除Serverless应用。
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppResponse
   */
  async deleteAppWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApp",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppResponse({}));
  }

  /**
   * 删除Serverless应用。
   * @returns DeleteAppResponse
   */
  async deleteApp(appName: string): Promise<$_model.DeleteAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAppWithOptions(appName, headers, runtime);
  }

  /**
   * 删除词典
   * 
   * @param request - DeleteDictRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDictResponse
   */
  async deleteDictWithOptions(appName: string, request: $_model.DeleteDictRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDictResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDict",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/dicts/actions/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDictResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDictResponse({}));
  }

  /**
   * 删除词典
   * 
   * @param request - DeleteDictRequest
   * @returns DeleteDictResponse
   */
  async deleteDict(appName: string, request: $_model.DeleteDictRequest): Promise<$_model.DeleteDictResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDictWithOptions(appName, request, headers, runtime);
  }

  /**
   * 删除端点
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEndpointResponse
   */
  async deleteEndpointWithOptions(endpointId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEndpointResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEndpoint",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/endpoints/${$dara.URL.percentEncode(endpointId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEndpointResponse({}));
  }

  /**
   * 删除端点
   * @returns DeleteEndpointResponse
   */
  async deleteEndpoint(endpointId: string): Promise<$_model.DeleteEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEndpointWithOptions(endpointId, headers, runtime);
  }

  /**
   * 删除快照
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshotWithOptions(appName: string, repository: string, snapshot: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnapshotResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshot",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/snapshot-repositories/${$dara.URL.percentEncode(repository)}/snapshots/${$dara.URL.percentEncode(snapshot)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSnapshotResponse({}));
  }

  /**
   * 删除快照
   * @returns DeleteSnapshotResponse
   */
  async deleteSnapshot(appName: string, repository: string, snapshot: string): Promise<$_model.DeleteSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSnapshotWithOptions(appName, repository, snapshot, headers, runtime);
  }

  /**
   * 获取Serverless应用详情
   * 
   * @param request - GetAppRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppResponse
   */
  async getAppWithOptions(appName: string, request: $_model.GetAppRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.detailed)) {
      query["detailed"] = request.detailed;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApp",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppResponse>(await this.callApi(params, req, runtime), new $_model.GetAppResponse({}));
  }

  /**
   * 获取Serverless应用详情
   * 
   * @param request - GetAppRequest
   * @returns GetAppResponse
   */
  async getApp(appName: string, request: $_model.GetAppRequest): Promise<$_model.GetAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppWithOptions(appName, request, headers, runtime);
  }

  /**
   * 获取Serverless应用配额详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppQuotaResponse
   */
  async getAppQuotaWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppQuotaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppQuota",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/quota`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppQuotaResponse>(await this.callApi(params, req, runtime), new $_model.GetAppQuotaResponse({}));
  }

  /**
   * 获取Serverless应用配额详情
   * @returns GetAppQuotaResponse
   */
  async getAppQuota(appName: string): Promise<$_model.GetAppQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAppQuotaWithOptions(appName, headers, runtime);
  }

  /**
   * 获取监控数据
   * 
   * @param request - GetMonitorDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonitorDataResponse
   */
  async getMonitorDataWithOptions(request: $_model.GetMonitorDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMonitorDataResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMonitorData",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/emon/metrics/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMonitorDataResponse>(await this.callApi(params, req, runtime), new $_model.GetMonitorDataResponse({}));
  }

  /**
   * 获取监控数据
   * 
   * @param request - GetMonitorDataRequest
   * @returns GetMonitorDataResponse
   */
  async getMonitorData(request: $_model.GetMonitorDataRequest): Promise<$_model.GetMonitorDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMonitorDataWithOptions(request, headers, runtime);
  }

  /**
   * 获取自动备份配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSnapshotSettingResponse
   */
  async getSnapshotSettingWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSnapshotSettingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSnapshotSetting",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/auto-snapshot-setting`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSnapshotSettingResponse>(await this.callApi(params, req, runtime), new $_model.GetSnapshotSettingResponse({}));
  }

  /**
   * 获取自动备份配置
   * @returns GetSnapshotSettingResponse
   */
  async getSnapshotSetting(appName: string): Promise<$_model.GetSnapshotSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSnapshotSettingWithOptions(appName, headers, runtime);
  }

  /**
   * 获取配额审批详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSpecReviewTaskResponse
   */
  async getSpecReviewTaskWithOptions(appName: string, taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSpecReviewTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSpecReviewTask",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/spec-review-tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSpecReviewTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetSpecReviewTaskResponse({}));
  }

  /**
   * 获取配额审批详情
   * @returns GetSpecReviewTaskResponse
   */
  async getSpecReviewTask(appName: string, taskId: string): Promise<$_model.GetSpecReviewTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSpecReviewTaskWithOptions(appName, taskId, headers, runtime);
  }

  /**
   * 查看Serverless应用列表
   * 
   * @param request - ListAppsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppsResponse
   */
  async listAppsWithOptions(request: $_model.ListAppsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      query["appName"] = request.appName;
    }

    if (!$dara.isNull(request.createTime)) {
      query["createTime"] = request.createTime;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.orderType)) {
      query["orderType"] = request.orderType;
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

    if (!$dara.isNull(request.tags)) {
      query["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApps",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppsResponse({}));
  }

  /**
   * 查看Serverless应用列表
   * 
   * @param request - ListAppsRequest
   * @returns ListAppsResponse
   */
  async listApps(request: $_model.ListAppsRequest): Promise<$_model.ListAppsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAppsWithOptions(request, headers, runtime);
  }

  /**
   * 获取词典列表
   * 
   * @param request - ListDictsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDictsResponse
   */
  async listDictsWithOptions(appName: string, request: $_model.ListDictsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDictsResponse> {
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
      action: "ListDicts",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/dicts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDictsResponse>(await this.callApi(params, req, runtime), new $_model.ListDictsResponse({}));
  }

  /**
   * 获取词典列表
   * 
   * @param request - ListDictsRequest
   * @returns ListDictsResponse
   */
  async listDicts(appName: string, request: $_model.ListDictsRequest): Promise<$_model.ListDictsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDictsWithOptions(appName, request, headers, runtime);
  }

  /**
   * 获取端点信息列表
   * 
   * @param request - ListEndpointsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEndpointsResponse
   */
  async listEndpointsWithOptions(request: $_model.ListEndpointsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEndpointsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["vpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEndpoints",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListEndpointsResponse({}));
  }

  /**
   * 获取端点信息列表
   * 
   * @param request - ListEndpointsRequest
   * @returns ListEndpointsResponse
   */
  async listEndpoints(request: $_model.ListEndpointsRequest): Promise<$_model.ListEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEndpointsWithOptions(request, headers, runtime);
  }

  /**
   * 查看索引列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndicesResponse
   */
  async listIndicesWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIndicesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListIndices",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/indices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIndicesResponse>(await this.callApi(params, req, runtime), new $_model.ListIndicesResponse({}));
  }

  /**
   * 查看索引列表
   * @returns ListIndicesResponse
   */
  async listIndices(appName: string): Promise<$_model.ListIndicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndicesWithOptions(appName, headers, runtime);
  }

  /**
   * 获取快照仓库列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotRepositoriesResponse
   */
  async listSnapshotRepositoriesWithOptions(appName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSnapshotRepositoriesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSnapshotRepositories",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/snapshot-repositories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSnapshotRepositoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListSnapshotRepositoriesResponse({}));
  }

  /**
   * 获取快照仓库列表
   * @returns ListSnapshotRepositoriesResponse
   */
  async listSnapshotRepositories(appName: string): Promise<$_model.ListSnapshotRepositoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSnapshotRepositoriesWithOptions(appName, headers, runtime);
  }

  /**
   * 获取仓库的快照列表
   * 
   * @param request - ListSnapshotsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotsResponse
   */
  async listSnapshotsWithOptions(appName: string, request: $_model.ListSnapshotsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSnapshotsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repository)) {
      query["repository"] = request.repository;
    }

    if (!$dara.isNull(request.snapshot)) {
      query["snapshot"] = request.snapshot;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSnapshots",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/snapshots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSnapshotsResponse>(await this.callApi(params, req, runtime), new $_model.ListSnapshotsResponse({}));
  }

  /**
   * 获取仓库的快照列表
   * 
   * @param request - ListSnapshotsRequest
   * @returns ListSnapshotsResponse
   */
  async listSnapshots(appName: string, request: $_model.ListSnapshotsRequest): Promise<$_model.ListSnapshotsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSnapshotsWithOptions(appName, request, headers, runtime);
  }

  /**
   * 获取规格审批列表
   * 
   * @param request - ListSpecReviewTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSpecReviewTasksResponse
   */
  async listSpecReviewTasksWithOptions(appName: string, request: $_model.ListSpecReviewTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSpecReviewTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
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
      action: "ListSpecReviewTasks",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/spec-review-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSpecReviewTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListSpecReviewTasksResponse({}));
  }

  /**
   * 获取规格审批列表
   * 
   * @param request - ListSpecReviewTasksRequest
   * @returns ListSpecReviewTasksResponse
   */
  async listSpecReviewTasks(appName: string, request: $_model.ListSpecReviewTasksRequest): Promise<$_model.ListSpecReviewTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSpecReviewTasksWithOptions(appName, request, headers, runtime);
  }

  /**
   * 编辑Serverless应用
   * 
   * @param request - UpdateAppRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppResponse
   */
  async updateAppWithOptions(appName: string, request: $_model.UpdateAppRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAppResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applyReason)) {
      body["applyReason"] = request.applyReason;
    }

    if (!$dara.isNull(request.authentication)) {
      body["authentication"] = request.authentication;
    }

    if (!$dara.isNull(request.contactInfo)) {
      body["contactInfo"] = request.contactInfo;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.limiterInfo)) {
      body["limiterInfo"] = request.limiterInfo;
    }

    if (!$dara.isNull(request.network)) {
      body["network"] = request.network;
    }

    if (!$dara.isNull(request.privateNetwork)) {
      body["privateNetwork"] = request.privateNetwork;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApp",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAppResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAppResponse({}));
  }

  /**
   * 编辑Serverless应用
   * 
   * @param request - UpdateAppRequest
   * @returns UpdateAppResponse
   */
  async updateApp(appName: string, request: $_model.UpdateAppRequest): Promise<$_model.UpdateAppResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppWithOptions(appName, request, headers, runtime);
  }

  /**
   * 创建或更新词典
   * 
   * @param request - UpdateDictRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDictResponse
   */
  async updateDictWithOptions(appName: string, request: $_model.UpdateDictRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDictResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allowCover)) {
      query["allowCover"] = request.allowCover;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.files)) {
      body["files"] = request.files;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["sourceType"] = request.sourceType;
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
      action: "UpdateDict",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/dicts`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDictResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDictResponse({}));
  }

  /**
   * 创建或更新词典
   * 
   * @param request - UpdateDictRequest
   * @returns UpdateDictResponse
   */
  async updateDict(appName: string, request: $_model.UpdateDictRequest): Promise<$_model.UpdateDictResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDictWithOptions(appName, request, headers, runtime);
  }

  /**
   * 修改端点信息
   * 
   * @param request - UpdateEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEndpointResponse
   */
  async updateEndpointWithOptions(endpointId: string, request: $_model.UpdateEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEndpointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endpointZones)) {
      body["endpointZones"] = request.endpointZones;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEndpoint",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/endpoints/${$dara.URL.percentEncode(endpointId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEndpointResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEndpointResponse({}));
  }

  /**
   * 修改端点信息
   * 
   * @param request - UpdateEndpointRequest
   * @returns UpdateEndpointResponse
   */
  async updateEndpoint(endpointId: string, request: $_model.UpdateEndpointRequest): Promise<$_model.UpdateEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEndpointWithOptions(endpointId, request, headers, runtime);
  }

  /**
   * 修改应用公网配置。
   * 
   * @param request - UpdateNetworkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNetworkResponse
   */
  async updateNetworkWithOptions(appName: string, request: $_model.UpdateNetworkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNetworkResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNetwork",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/networks`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNetworkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNetworkResponse({}));
  }

  /**
   * 修改应用公网配置。
   * 
   * @param request - UpdateNetworkRequest
   * @returns UpdateNetworkResponse
   */
  async updateNetwork(appName: string, request: $_model.UpdateNetworkRequest): Promise<$_model.UpdateNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateNetworkWithOptions(appName, request, headers, runtime);
  }

  /**
   * 修改应用公网信息。
   * 
   * @param request - UpdatePrivateNetwrokRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrivateNetwrokResponse
   */
  async updatePrivateNetwrokWithOptions(appName: string, request: $_model.UpdatePrivateNetwrokRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrivateNetwrokResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrivateNetwrok",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/private-networks`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrivateNetwrokResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrivateNetwrokResponse({}));
  }

  /**
   * 修改应用公网信息。
   * 
   * @param request - UpdatePrivateNetwrokRequest
   * @returns UpdatePrivateNetwrokResponse
   */
  async updatePrivateNetwrok(appName: string, request: $_model.UpdatePrivateNetwrokRequest): Promise<$_model.UpdatePrivateNetwrokResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePrivateNetwrokWithOptions(appName, request, headers, runtime);
  }

  /**
   * 修改自动备份配置
   * 
   * @param request - UpdateSnapshotSettingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSnapshotSettingResponse
   */
  async updateSnapshotSettingWithOptions(appName: string, request: $_model.UpdateSnapshotSettingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSnapshotSettingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.quartzRegex)) {
      body["quartzRegex"] = request.quartzRegex;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSnapshotSetting",
      version: "2023-06-27",
      protocol: "HTTPS",
      pathname: `/openapi/es-serverless/instances/${$dara.URL.percentEncode(appName)}/auto-snapshot-setting`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSnapshotSettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSnapshotSettingResponse({}));
  }

  /**
   * 修改自动备份配置
   * 
   * @param request - UpdateSnapshotSettingRequest
   * @returns UpdateSnapshotSettingResponse
   */
  async updateSnapshotSetting(appName: string, request: $_model.UpdateSnapshotSettingRequest): Promise<$_model.UpdateSnapshotSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSnapshotSettingWithOptions(appName, request, headers, runtime);
  }

}
