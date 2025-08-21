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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("elasticsearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Restores nodes in disabled zones. This operation is available only for multi-zone Elasticsearch clusters.
   * 
   * @param request - ActivateZonesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateZonesResponse
   */
  async activateZonesWithOptions(InstanceId: string, request: $_model.ActivateZonesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateZonesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateZones",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/recover-zones`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateZonesResponse>(await this.callApi(params, req, runtime), new $_model.ActivateZonesResponse({}));
  }

  /**
   * Restores nodes in disabled zones. This operation is available only for multi-zone Elasticsearch clusters.
   * 
   * @param request - ActivateZonesRequest
   * @returns ActivateZonesResponse
   */
  async activateZones(InstanceId: string, request: $_model.ActivateZonesRequest): Promise<$_model.ActivateZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.activateZonesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Connects Elasticsearch clusters.
   * 
   * @param request - AddConnectableClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddConnectableClusterResponse
   */
  async addConnectableClusterWithOptions(InstanceId: string, request: $_model.AddConnectableClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddConnectableClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "AddConnectableCluster",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/connected-clusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddConnectableClusterResponse>(await this.callApi(params, req, runtime), new $_model.AddConnectableClusterResponse({}));
  }

  /**
   * Connects Elasticsearch clusters.
   * 
   * @param request - AddConnectableClusterRequest
   * @returns AddConnectableClusterResponse
   */
  async addConnectableCluster(InstanceId: string, request: $_model.AddConnectableClusterRequest): Promise<$_model.AddConnectableClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addConnectableClusterWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call the AddSnapshotRepo to create a reference repository when configuring a cross-cluster OSS repository.
   * 
   * @param request - AddSnapshotRepoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSnapshotRepoResponse
   */
  async addSnapshotRepoWithOptions(InstanceId: string, request: $_model.AddSnapshotRepoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddSnapshotRepoResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSnapshotRepo",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/snapshot-repos`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSnapshotRepoResponse>(await this.callApi(params, req, runtime), new $_model.AddSnapshotRepoResponse({}));
  }

  /**
   * Call the AddSnapshotRepo to create a reference repository when configuring a cross-cluster OSS repository.
   * 
   * @param request - AddSnapshotRepoRequest
   * @returns AddSnapshotRepoResponse
   */
  async addSnapshotRepo(InstanceId: string, request: $_model.AddSnapshotRepoRequest): Promise<$_model.AddSnapshotRepoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addSnapshotRepoWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Restores an Elasticsearch cluster that is frozen after it is released.
   * 
   * @param request - CancelDeletionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelDeletionResponse
   */
  async cancelDeletionWithOptions(InstanceId: string, request: $_model.CancelDeletionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelDeletionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelDeletion",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/cancel-deletion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelDeletionResponse>(await this.callApi(params, req, runtime), new $_model.CancelDeletionResponse({}));
  }

  /**
   * Restores an Elasticsearch cluster that is frozen after it is released.
   * 
   * @param request - CancelDeletionRequest
   * @returns CancelDeletionResponse
   */
  async cancelDeletion(InstanceId: string, request: $_model.CancelDeletionRequest): Promise<$_model.CancelDeletionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelDeletionWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Restores a Logstash cluster that is frozen after it is released.
   * 
   * @param request - CancelLogstashDeletionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelLogstashDeletionResponse
   */
  async cancelLogstashDeletionWithOptions(InstanceId: string, request: $_model.CancelLogstashDeletionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelLogstashDeletionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelLogstashDeletion",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/actions/cancel-deletion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelLogstashDeletionResponse>(await this.callApi(params, req, runtime), new $_model.CancelLogstashDeletionResponse({}));
  }

  /**
   * Restores a Logstash cluster that is frozen after it is released.
   * 
   * @param request - CancelLogstashDeletionRequest
   * @returns CancelLogstashDeletionResponse
   */
  async cancelLogstashDeletion(InstanceId: string, request: $_model.CancelLogstashDeletionRequest): Promise<$_model.CancelLogstashDeletionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelLogstashDeletionWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - CancelTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTaskResponse
   */
  async cancelTaskWithOptions(InstanceId: string, request: $_model.CancelTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelTask",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/cancel-task`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelTaskResponse({}));
  }

  /**
   * @param request - CancelTaskRequest
   * @returns CancelTaskResponse
   */
  async cancelTask(InstanceId: string, request: $_model.CancelTaskRequest): Promise<$_model.CancelTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Capacity Planning
   * 
   * @param request - CapacityPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CapacityPlanResponse
   */
  async capacityPlanWithOptions(request: $_model.CapacityPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CapacityPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.complexQueryAvailable)) {
      body["complexQueryAvailable"] = request.complexQueryAvailable;
    }

    if (!$dara.isNull(request.dataInfo)) {
      body["dataInfo"] = request.dataInfo;
    }

    if (!$dara.isNull(request.metric)) {
      body["metric"] = request.metric;
    }

    if (!$dara.isNull(request.usageScenario)) {
      body["usageScenario"] = request.usageScenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CapacityPlan",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/assist/actions/capacity-plan`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CapacityPlanResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.CapacityPlanResponse({}));
  }

  /**
   * Capacity Planning
   * 
   * @param request - CapacityPlanRequest
   * @returns CapacityPlanResponse
   */
  async capacityPlan(request: $_model.CapacityPlanRequest): Promise<$_model.CapacityPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.capacityPlanWithOptions(request, headers, runtime);
  }

  /**
   * 关闭实例的智能运维功能
   * 
   * @param request - CloseDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseDiagnosisResponse
   */
  async closeDiagnosisWithOptions(InstanceId: string, request: $_model.CloseDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloseDiagnosisResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseDiagnosis",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/diagnosis/instances/${$dara.URL.percentEncode(InstanceId)}/actions/close-diagnosis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.CloseDiagnosisResponse({}));
  }

  /**
   * 关闭实例的智能运维功能
   * 
   * @param request - CloseDiagnosisRequest
   * @returns CloseDiagnosisResponse
   */
  async closeDiagnosis(InstanceId: string, request: $_model.CloseDiagnosisRequest): Promise<$_model.CloseDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeDiagnosisWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - CloseHttpsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseHttpsResponse
   */
  async closeHttpsWithOptions(InstanceId: string, request: $_model.CloseHttpsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloseHttpsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseHttps",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/close-https`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseHttpsResponse>(await this.callApi(params, req, runtime), new $_model.CloseHttpsResponse({}));
  }

  /**
   * @param request - CloseHttpsRequest
   * @returns CloseHttpsResponse
   */
  async closeHttps(InstanceId: string, request: $_model.CloseHttpsRequest): Promise<$_model.CloseHttpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeHttpsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Disable Managed Index
   * 
   * @param request - CloseManagedIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloseManagedIndexResponse
   */
  async closeManagedIndexWithOptions(InstanceId: string, Index: string, request: $_model.CloseManagedIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CloseManagedIndexResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CloseManagedIndex",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/indices/${$dara.URL.percentEncode(Index)}/close-managed`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CloseManagedIndexResponse>(await this.callApi(params, req, runtime), new $_model.CloseManagedIndexResponse({}));
  }

  /**
   * Disable Managed Index
   * 
   * @param request - CloseManagedIndexRequest
   * @returns CloseManagedIndexResponse
   */
  async closeManagedIndex(InstanceId: string, Index: string, request: $_model.CloseManagedIndexRequest): Promise<$_model.CloseManagedIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeManagedIndexWithOptions(InstanceId, Index, request, headers, runtime);
  }

  /**
   * 创建收集器
   * 
   * @param request - CreateCollectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCollectorResponse
   */
  async createCollectorWithOptions(request: $_model.CreateCollectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCollectorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collectorPaths)) {
      body["collectorPaths"] = request.collectorPaths;
    }

    if (!$dara.isNull(request.configs)) {
      body["configs"] = request.configs;
    }

    if (!$dara.isNull(request.dryRun)) {
      body["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.extendConfigs)) {
      body["extendConfigs"] = request.extendConfigs;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.resType)) {
      body["resType"] = request.resType;
    }

    if (!$dara.isNull(request.resVersion)) {
      body["resVersion"] = request.resVersion;
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
      action: "CreateCollector",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/collectors`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCollectorResponse>(await this.callApi(params, req, runtime), new $_model.CreateCollectorResponse({}));
  }

  /**
   * 创建收集器
   * 
   * @param request - CreateCollectorRequest
   * @returns CreateCollectorResponse
   */
  async createCollector(request: $_model.CreateCollectorRequest): Promise<$_model.CreateCollectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCollectorWithOptions(request, headers, runtime);
  }

  /**
   * 创建Elasticsearch组合模板
   * 
   * @param request - CreateComponentIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateComponentIndexResponse
   */
  async createComponentIndexWithOptions(InstanceId: string, name: string, request: $_model.CreateComponentIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateComponentIndexResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.meta)) {
      body["_meta"] = request.meta;
    }

    if (!$dara.isNull(request.template)) {
      body["template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateComponentIndex",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/component-index/${$dara.URL.percentEncode(name)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateComponentIndexResponse>(await this.callApi(params, req, runtime), new $_model.CreateComponentIndexResponse({}));
  }

  /**
   * 创建Elasticsearch组合模板
   * 
   * @param request - CreateComponentIndexRequest
   * @returns CreateComponentIndexResponse
   */
  async createComponentIndex(InstanceId: string, name: string, request: $_model.CreateComponentIndexRequest): Promise<$_model.CreateComponentIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createComponentIndexWithOptions(InstanceId, name, request, headers, runtime);
  }

  /**
   * 创建数据流
   * 
   * @param request - CreateDataStreamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDataStreamResponse
   */
  async createDataStreamWithOptions(InstanceId: string, request: $_model.CreateDataStreamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDataStreamResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataStream",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/data-streams`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDataStreamResponse>(await this.callApi(params, req, runtime), new $_model.CreateDataStreamResponse({}));
  }

  /**
   * 创建数据流
   * 
   * @param request - CreateDataStreamRequest
   * @returns CreateDataStreamResponse
   */
  async createDataStream(InstanceId: string, request: $_model.CreateDataStreamRequest): Promise<$_model.CreateDataStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataStreamWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建索引生命周期策略
   * 
   * @param request - CreateILMPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateILMPolicyResponse
   */
  async createILMPolicyWithOptions(InstanceId: string, request: $_model.CreateILMPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateILMPolicyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateILMPolicy",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/ilm-policies`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateILMPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateILMPolicyResponse({}));
  }

  /**
   * 创建索引生命周期策略
   * 
   * @param request - CreateILMPolicyRequest
   * @returns CreateILMPolicyResponse
   */
  async createILMPolicy(InstanceId: string, request: $_model.CreateILMPolicyRequest): Promise<$_model.CreateILMPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createILMPolicyWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建索引模版
   * 
   * @param request - CreateIndexTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIndexTemplateResponse
   */
  async createIndexTemplateWithOptions(InstanceId: string, request: $_model.CreateIndexTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIndexTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataStream)) {
      body["dataStream"] = request.dataStream;
    }

    if (!$dara.isNull(request.ilmPolicy)) {
      body["ilmPolicy"] = request.ilmPolicy;
    }

    if (!$dara.isNull(request.indexPatterns)) {
      body["indexPatterns"] = request.indexPatterns;
    }

    if (!$dara.isNull(request.indexTemplate)) {
      body["indexTemplate"] = request.indexTemplate;
    }

    if (!$dara.isNull(request.priority)) {
      body["priority"] = request.priority;
    }

    if (!$dara.isNull(request.template)) {
      body["template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIndexTemplate",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/index-templates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIndexTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateIndexTemplateResponse({}));
  }

  /**
   * 创建索引模版
   * 
   * @param request - CreateIndexTemplateRequest
   * @returns CreateIndexTemplateResponse
   */
  async createIndexTemplate(InstanceId: string, request: $_model.CreateIndexTemplateRequest): Promise<$_model.CreateIndexTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndexTemplateWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建logstash实例
   * 
   * @param request - CreateLogstashRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLogstashResponse
   */
  async createLogstashWithOptions(request: $_model.CreateLogstashRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateLogstashResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.networkConfig)) {
      body["networkConfig"] = request.networkConfig;
    }

    if (!$dara.isNull(request.nodeAmount)) {
      body["nodeAmount"] = request.nodeAmount;
    }

    if (!$dara.isNull(request.nodeSpec)) {
      body["nodeSpec"] = request.nodeSpec;
    }

    if (!$dara.isNull(request.paymentInfo)) {
      body["paymentInfo"] = request.paymentInfo;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
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
      action: "CreateLogstash",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateLogstashResponse>(await this.callApi(params, req, runtime), new $_model.CreateLogstashResponse({}));
  }

  /**
   * 创建logstash实例
   * 
   * @param request - CreateLogstashRequest
   * @returns CreateLogstashResponse
   */
  async createLogstash(request: $_model.CreateLogstashRequest): Promise<$_model.CreateLogstashResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLogstashWithOptions(request, headers, runtime);
  }

  /**
   * 创建Logstash管道任务
   * 
   * @param request - CreatePipelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePipelinesResponse
   */
  async createPipelinesWithOptions(InstanceId: string, request: $_model.CreatePipelinesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePipelinesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.trigger)) {
      query["trigger"] = request.trigger;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePipelines",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/pipelines`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePipelinesResponse>(await this.callApi(params, req, runtime), new $_model.CreatePipelinesResponse({}));
  }

  /**
   * 创建Logstash管道任务
   * 
   * @param request - CreatePipelinesRequest
   * @returns CreatePipelinesResponse
   */
  async createPipelines(InstanceId: string, request: $_model.CreatePipelinesRequest): Promise<$_model.CreatePipelinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelinesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - CreateSnapshotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSnapshotResponse
   */
  async createSnapshotWithOptions(InstanceId: string, request: $_model.CreateSnapshotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSnapshotResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSnapshot",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/snapshots`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.CreateSnapshotResponse({}));
  }

  /**
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(InstanceId: string, request: $_model.CreateSnapshotRequest): Promise<$_model.CreateSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSnapshotWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建私网链接VPC终端节点
   * 
   * @remarks
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D\\*\\*\\*
   * 
   * @param request - CreateVpcEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcEndpointResponse
   */
  async createVpcEndpointWithOptions(InstanceId: string, request: $_model.CreateVpcEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVpcEndpointResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceId)) {
      body["serviceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.zoneId)) {
      body["zoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpcEndpoint",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/vpc-endpoints`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVpcEndpointResponse>(await this.callApi(params, req, runtime), new $_model.CreateVpcEndpointResponse({}));
  }

  /**
   * 创建私网链接VPC终端节点
   * 
   * @remarks
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D\\*\\*\\*
   * 
   * @param request - CreateVpcEndpointRequest
   * @returns CreateVpcEndpointResponse
   */
  async createVpcEndpoint(InstanceId: string, request: $_model.CreateVpcEndpointRequest): Promise<$_model.CreateVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVpcEndpointWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Invoke DeactivateZones to offline certain zones when there are multiple availability zones, and migrate nodes in the offline zones to other availability zones.
   * 
   * @param request - DeactivateZonesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeactivateZonesResponse
   */
  async deactivateZonesWithOptions(InstanceId: string, request: $_model.DeactivateZonesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeactivateZonesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeactivateZones",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/down-zones`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeactivateZonesResponse>(await this.callApi(params, req, runtime), new $_model.DeactivateZonesResponse({}));
  }

  /**
   * Invoke DeactivateZones to offline certain zones when there are multiple availability zones, and migrate nodes in the offline zones to other availability zones.
   * 
   * @param request - DeactivateZonesRequest
   * @returns DeactivateZonesResponse
   */
  async deactivateZones(InstanceId: string, request: $_model.DeactivateZonesRequest): Promise<$_model.DeactivateZonesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deactivateZonesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Deletes a shipper.
   * 
   * @param request - DeleteCollectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCollectorResponse
   */
  async deleteCollectorWithOptions(ResId: string, request: $_model.DeleteCollectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCollectorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCollector",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/collectors/${$dara.URL.percentEncode(ResId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCollectorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCollectorResponse({}));
  }

  /**
   * Deletes a shipper.
   * 
   * @param request - DeleteCollectorRequest
   * @returns DeleteCollectorResponse
   */
  async deleteCollector(ResId: string, request: $_model.DeleteCollectorRequest): Promise<$_model.DeleteCollectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCollectorWithOptions(ResId, request, headers, runtime);
  }

  /**
   * 删除组合索引模板
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteComponentIndexResponse
   */
  async deleteComponentIndexWithOptions(InstanceId: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteComponentIndexResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteComponentIndex",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/component-index/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteComponentIndexResponse>(await this.callApi(params, req, runtime), new $_model.DeleteComponentIndexResponse({}));
  }

  /**
   * 删除组合索引模板
   * @returns DeleteComponentIndexResponse
   */
  async deleteComponentIndex(InstanceId: string, name: string): Promise<$_model.DeleteComponentIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteComponentIndexWithOptions(InstanceId, name, headers, runtime);
  }

  /**
   * @param request - DeleteConnectedClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConnectedClusterResponse
   */
  async deleteConnectedClusterWithOptions(InstanceId: string, request: $_model.DeleteConnectedClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConnectedClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.connectedInstanceId)) {
      query["connectedInstanceId"] = request.connectedInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConnectedCluster",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/connected-clusters`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConnectedClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConnectedClusterResponse({}));
  }

  /**
   * @param request - DeleteConnectedClusterRequest
   * @returns DeleteConnectedClusterResponse
   */
  async deleteConnectedCluster(InstanceId: string, request: $_model.DeleteConnectedClusterRequest): Promise<$_model.DeleteConnectedClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConnectedClusterWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 删除数据流
   * 
   * @param request - DeleteDataStreamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataStreamResponse
   */
  async deleteDataStreamWithOptions(InstanceId: string, DataStream: string, request: $_model.DeleteDataStreamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataStreamResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataStream",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/data-streams/${$dara.URL.percentEncode(DataStream)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataStreamResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataStreamResponse({}));
  }

  /**
   * 删除数据流
   * 
   * @param request - DeleteDataStreamRequest
   * @returns DeleteDataStreamResponse
   */
  async deleteDataStream(InstanceId: string, DataStream: string, request: $_model.DeleteDataStreamRequest): Promise<$_model.DeleteDataStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataStreamWithOptions(InstanceId, DataStream, request, headers, runtime);
  }

  /**
   * @param request - DeleteDataTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDataTaskResponse
   */
  async deleteDataTaskWithOptions(InstanceId: string, request: $_model.DeleteDataTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDataTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataTask",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/data-task`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDataTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDataTaskResponse({}));
  }

  /**
   * @param request - DeleteDataTaskRequest
   * @returns DeleteDataTaskResponse
   */
  async deleteDataTask(InstanceId: string, request: $_model.DeleteDataTaskRequest): Promise<$_model.DeleteDataTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataTaskWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 删除历史索引模板
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeprecatedTemplateResponse
   */
  async deleteDeprecatedTemplateWithOptions(InstanceId: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDeprecatedTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeprecatedTemplate",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/deprecated-templates/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDeprecatedTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDeprecatedTemplateResponse({}));
  }

  /**
   * 删除历史索引模板
   * @returns DeleteDeprecatedTemplateResponse
   */
  async deleteDeprecatedTemplate(InstanceId: string, name: string): Promise<$_model.DeleteDeprecatedTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDeprecatedTemplateWithOptions(InstanceId, name, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteILMPolicyResponse
   */
  async deleteILMPolicyWithOptions(InstanceId: string, PolicyName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteILMPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteILMPolicy",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/ilm-policies/${$dara.URL.percentEncode(PolicyName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteILMPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteILMPolicyResponse({}));
  }

  /**
   * @returns DeleteILMPolicyResponse
   */
  async deleteILMPolicy(InstanceId: string, PolicyName: string): Promise<$_model.DeleteILMPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteILMPolicyWithOptions(InstanceId, PolicyName, headers, runtime);
  }

  /**
   * 删除ES集群索引模版
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIndexTemplateResponse
   */
  async deleteIndexTemplateWithOptions(InstanceId: string, IndexTemplate: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIndexTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIndexTemplate",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/index-templates/${$dara.URL.percentEncode(IndexTemplate)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIndexTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIndexTemplateResponse({}));
  }

  /**
   * 删除ES集群索引模版
   * @returns DeleteIndexTemplateResponse
   */
  async deleteIndexTemplate(InstanceId: string, IndexTemplate: string): Promise<$_model.DeleteIndexTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexTemplateWithOptions(InstanceId, IndexTemplate, headers, runtime);
  }

  /**
   * @param request - DeleteInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(InstanceId: string, request: $_model.DeleteInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deleteType)) {
      query["deleteType"] = request.deleteType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(InstanceId: string, request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Releases a Logstash cluster.
   * 
   * @remarks
   * Before you call this operation, take note of the following information: After the cluster is released, the physical resources used by the cluster are reclaimed. The data stored in the cluster is deleted and cannot be recovered. The disks attached to the nodes in the cluster and the snapshots created for the cluster are released.
   * 
   * @param request - DeleteLogstashRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLogstashResponse
   */
  async deleteLogstashWithOptions(InstanceId: string, request: $_model.DeleteLogstashRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteLogstashResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.deleteType)) {
      query["deleteType"] = request.deleteType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLogstash",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteLogstashResponse>(await this.callApi(params, req, runtime), new $_model.DeleteLogstashResponse({}));
  }

  /**
   * Releases a Logstash cluster.
   * 
   * @remarks
   * Before you call this operation, take note of the following information: After the cluster is released, the physical resources used by the cluster are reclaimed. The data stored in the cluster is deleted and cannot be recovered. The disks attached to the nodes in the cluster and the snapshots created for the cluster are released.
   * 
   * @param request - DeleteLogstashRequest
   * @returns DeleteLogstashResponse
   */
  async deleteLogstash(InstanceId: string, request: $_model.DeleteLogstashRequest): Promise<$_model.DeleteLogstashResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLogstashWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Deletes a pipeline that is configured for a Logstash cluster.
   * 
   * @param request - DeletePipelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePipelinesResponse
   */
  async deletePipelinesWithOptions(InstanceId: string, request: $_model.DeletePipelinesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePipelinesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.pipelineIds)) {
      query["pipelineIds"] = request.pipelineIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePipelines",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/pipelines`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePipelinesResponse>(await this.callApi(params, req, runtime), new $_model.DeletePipelinesResponse({}));
  }

  /**
   * Deletes a pipeline that is configured for a Logstash cluster.
   * 
   * @param request - DeletePipelinesRequest
   * @returns DeletePipelinesResponse
   */
  async deletePipelines(InstanceId: string, request: $_model.DeletePipelinesRequest): Promise<$_model.DeletePipelinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelinesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - DeleteSnapshotRepoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSnapshotRepoResponse
   */
  async deleteSnapshotRepoWithOptions(InstanceId: string, request: $_model.DeleteSnapshotRepoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSnapshotRepoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.repoPath)) {
      query["repoPath"] = request.repoPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSnapshotRepo",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/snapshot-repos`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSnapshotRepoResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSnapshotRepoResponse({}));
  }

  /**
   * @param request - DeleteSnapshotRepoRequest
   * @returns DeleteSnapshotRepoResponse
   */
  async deleteSnapshotRepo(InstanceId: string, request: $_model.DeleteSnapshotRepoRequest): Promise<$_model.DeleteSnapshotRepoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSnapshotRepoWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 删除服务账号vpc下的终端节点
   * 
   * @param request - DeleteVpcEndpointRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcEndpointResponse
   */
  async deleteVpcEndpointWithOptions(InstanceId: string, EndpointId: string, request: $_model.DeleteVpcEndpointRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVpcEndpointResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpcEndpoint",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/vpc-endpoints/${$dara.URL.percentEncode(EndpointId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVpcEndpointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVpcEndpointResponse({}));
  }

  /**
   * 删除服务账号vpc下的终端节点
   * 
   * @param request - DeleteVpcEndpointRequest
   * @returns DeleteVpcEndpointResponse
   */
  async deleteVpcEndpoint(InstanceId: string, EndpointId: string, request: $_model.DeleteVpcEndpointRequest): Promise<$_model.DeleteVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVpcEndpointWithOptions(InstanceId, EndpointId, request, headers, runtime);
  }

  /**
   * Queries the information of ES-operator that is installed for a specified Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * > Before you install a shipper on an ACK cluster, you can call this operation to query the installation status of ES-operator for the ACK cluster.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAckOperatorResponse
   */
  async describeAckOperatorWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeAckOperatorResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeAckOperator",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/ack-clusters/${$dara.URL.percentEncode(ClusterId)}/operator`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeAckOperatorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeAckOperatorResponse({}));
  }

  /**
   * Queries the information of ES-operator that is installed for a specified Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * > Before you install a shipper on an ACK cluster, you can call this operation to query the installation status of ES-operator for the ACK cluster.
   * @returns DescribeAckOperatorResponse
   */
  async describeAckOperator(ClusterId: string): Promise<$_model.DescribeAckOperatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAckOperatorWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Describe APM
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApmResponse
   */
  async describeApmWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApmResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApm",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/apm/${$dara.URL.percentEncode(instanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApmResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApmResponse({}));
  }

  /**
   * Describe APM
   * @returns DescribeApmResponse
   */
  async describeApm(instanceId: string): Promise<$_model.DescribeApmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApmWithOptions(instanceId, headers, runtime);
  }

  /**
   * Queries the details of a shipper.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCollectorResponse
   */
  async describeCollectorWithOptions(ResId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCollectorResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCollector",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/collectors/${$dara.URL.percentEncode(ResId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCollectorResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCollectorResponse({}));
  }

  /**
   * Queries the details of a shipper.
   * @returns DescribeCollectorResponse
   */
  async describeCollector(ResId: string): Promise<$_model.DescribeCollectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCollectorWithOptions(ResId, headers, runtime);
  }

  /**
   * 查看组合索引模板详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeComponentIndexResponse
   */
  async describeComponentIndexWithOptions(InstanceId: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeComponentIndexResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeComponentIndex",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/component-index/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeComponentIndexResponse>(await this.callApi(params, req, runtime), new $_model.DescribeComponentIndexResponse({}));
  }

  /**
   * 查看组合索引模板详情
   * @returns DescribeComponentIndexResponse
   */
  async describeComponentIndex(InstanceId: string, name: string): Promise<$_model.DescribeComponentIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeComponentIndexWithOptions(InstanceId, name, headers, runtime);
  }

  /**
   * @param request - DescribeConnectableClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeConnectableClustersResponse
   */
  async describeConnectableClustersWithOptions(InstanceId: string, request: $_model.DescribeConnectableClustersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeConnectableClustersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alreadySetItems)) {
      query["alreadySetItems"] = request.alreadySetItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeConnectableClusters",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/connectable-clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeConnectableClustersResponse>(await this.callApi(params, req, runtime), new $_model.DescribeConnectableClustersResponse({}));
  }

  /**
   * @param request - DescribeConnectableClustersRequest
   * @returns DescribeConnectableClustersResponse
   */
  async describeConnectableClusters(InstanceId: string, request: $_model.DescribeConnectableClustersRequest): Promise<$_model.DescribeConnectableClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConnectableClustersWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * DescribeDeprecatedTemplate
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeprecatedTemplateResponse
   */
  async describeDeprecatedTemplateWithOptions(InstanceId: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDeprecatedTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDeprecatedTemplate",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/deprecated-templates/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDeprecatedTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDeprecatedTemplateResponse({}));
  }

  /**
   * DescribeDeprecatedTemplate
   * @returns DescribeDeprecatedTemplateResponse
   */
  async describeDeprecatedTemplate(InstanceId: string, name: string): Promise<$_model.DescribeDeprecatedTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDeprecatedTemplateWithOptions(InstanceId, name, headers, runtime);
  }

  /**
   * @param request - DescribeDiagnoseReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnoseReportResponse
   */
  async describeDiagnoseReportWithOptions(InstanceId: string, ReportId: string, request: $_model.DescribeDiagnoseReportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnoseReportResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnoseReport",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/diagnosis/instances/${$dara.URL.percentEncode(InstanceId)}/reports/${$dara.URL.percentEncode(ReportId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnoseReportResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnoseReportResponse({}));
  }

  /**
   * @param request - DescribeDiagnoseReportRequest
   * @returns DescribeDiagnoseReportResponse
   */
  async describeDiagnoseReport(InstanceId: string, ReportId: string, request: $_model.DescribeDiagnoseReportRequest): Promise<$_model.DescribeDiagnoseReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDiagnoseReportWithOptions(InstanceId, ReportId, request, headers, runtime);
  }

  /**
   * @param request - DescribeDiagnosisSettingsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDiagnosisSettingsResponse
   */
  async describeDiagnosisSettingsWithOptions(InstanceId: string, request: $_model.DescribeDiagnosisSettingsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDiagnosisSettingsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDiagnosisSettings",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/diagnosis/instances/${$dara.URL.percentEncode(InstanceId)}/settings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDiagnosisSettingsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDiagnosisSettingsResponse({}));
  }

  /**
   * @param request - DescribeDiagnosisSettingsRequest
   * @returns DescribeDiagnosisSettingsResponse
   */
  async describeDiagnosisSettings(InstanceId: string, request: $_model.DescribeDiagnosisSettingsRequest): Promise<$_model.DescribeDiagnosisSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDiagnosisSettingsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取集群动态指标
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDynamicSettingsResponse
   */
  async describeDynamicSettingsWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeDynamicSettingsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDynamicSettings",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/dynamic-settings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeDynamicSettingsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeDynamicSettingsResponse({}));
  }

  /**
   * 获取集群动态指标
   * @returns DescribeDynamicSettingsResponse
   */
  async describeDynamicSettings(InstanceId: string): Promise<$_model.DescribeDynamicSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDynamicSettingsWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Queries the health status of an Elasticsearch cluster.
   * 
   * @remarks
   * An Elasticsearch cluster can be in a health state indicated by one of the following colors:
   * *   GREEN: Primary shards and replica shards for the primary shards are normally allocated.
   * *   YELLOW: Primary shards are normally allocated, but replica shards for the primary shards are not normally allocated.
   * *   RED: Primary shards are not normally allocated.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeElasticsearchHealthResponse
   */
  async describeElasticsearchHealthWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeElasticsearchHealthResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeElasticsearchHealth",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/elasticsearch-health`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeElasticsearchHealthResponse>(await this.callApi(params, req, runtime), new $_model.DescribeElasticsearchHealthResponse({}));
  }

  /**
   * Queries the health status of an Elasticsearch cluster.
   * 
   * @remarks
   * An Elasticsearch cluster can be in a health state indicated by one of the following colors:
   * *   GREEN: Primary shards and replica shards for the primary shards are normally allocated.
   * *   YELLOW: Primary shards are normally allocated, but replica shards for the primary shards are not normally allocated.
   * *   RED: Primary shards are not normally allocated.
   * @returns DescribeElasticsearchHealthResponse
   */
  async describeElasticsearchHealth(InstanceId: string): Promise<$_model.DescribeElasticsearchHealthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeElasticsearchHealthWithOptions(InstanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeILMPolicyResponse
   */
  async describeILMPolicyWithOptions(InstanceId: string, PolicyName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeILMPolicyResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeILMPolicy",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/ilm-policies/${$dara.URL.percentEncode(PolicyName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeILMPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DescribeILMPolicyResponse({}));
  }

  /**
   * @returns DescribeILMPolicyResponse
   */
  async describeILMPolicy(InstanceId: string, PolicyName: string): Promise<$_model.DescribeILMPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeILMPolicyWithOptions(InstanceId, PolicyName, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIndexTemplateResponse
   */
  async describeIndexTemplateWithOptions(InstanceId: string, IndexTemplate: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIndexTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeIndexTemplate",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/index-templates/${$dara.URL.percentEncode(IndexTemplate)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIndexTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIndexTemplateResponse({}));
  }

  /**
   * @returns DescribeIndexTemplateResponse
   */
  async describeIndexTemplate(InstanceId: string, IndexTemplate: string): Promise<$_model.DescribeIndexTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeIndexTemplateWithOptions(InstanceId, IndexTemplate, headers, runtime);
  }

  /**
   * The name of the dictionary file.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstance",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeInstanceResponse({}));
  }

  /**
   * The name of the dictionary file.
   * @returns DescribeInstanceResponse
   */
  async describeInstance(InstanceId: string): Promise<$_model.DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 获取Elasticsearch集群Kibana节点settings配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeKibanaSettingsResponse
   */
  async describeKibanaSettingsWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeKibanaSettingsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeKibanaSettings",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/kibana-settings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeKibanaSettingsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeKibanaSettingsResponse({}));
  }

  /**
   * 获取Elasticsearch集群Kibana节点settings配置
   * @returns DescribeKibanaSettingsResponse
   */
  async describeKibanaSettings(InstanceId: string): Promise<$_model.DescribeKibanaSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeKibanaSettingsWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 查看Logstash实例详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLogstashResponse
   */
  async describeLogstashWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeLogstashResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLogstash",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeLogstashResponse>(await this.callApi(params, req, runtime), new $_model.DescribeLogstashResponse({}));
  }

  /**
   * 查看Logstash实例详情
   * @returns DescribeLogstashResponse
   */
  async describeLogstash(InstanceId: string): Promise<$_model.DescribeLogstashResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeLogstashWithOptions(InstanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePipelineResponse
   */
  async describePipelineWithOptions(InstanceId: string, PipelineId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePipelineResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePipeline",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/pipelines/${$dara.URL.percentEncode(PipelineId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePipelineResponse>(await this.callApi(params, req, runtime), new $_model.DescribePipelineResponse({}));
  }

  /**
   * @returns DescribePipelineResponse
   */
  async describePipeline(InstanceId: string, PipelineId: string): Promise<$_model.DescribePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePipelineWithOptions(InstanceId, PipelineId, headers, runtime);
  }

  /**
   * Queries the management configurations of pipelines in a Logstash cluster.
   * 
   * @param request - DescribePipelineManagementConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePipelineManagementConfigResponse
   */
  async describePipelineManagementConfigWithOptions(InstanceId: string, request: $_model.DescribePipelineManagementConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribePipelineManagementConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePipelineManagementConfig",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/pipeline-management-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribePipelineManagementConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribePipelineManagementConfigResponse({}));
  }

  /**
   * Queries the management configurations of pipelines in a Logstash cluster.
   * 
   * @param request - DescribePipelineManagementConfigRequest
   * @returns DescribePipelineManagementConfigResponse
   */
  async describePipelineManagementConfig(InstanceId: string, request: $_model.DescribePipelineManagementConfigRequest): Promise<$_model.DescribePipelineManagementConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePipelineManagementConfigWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  /**
   * 查看备份设置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSnapshotSettingResponse
   */
  async describeSnapshotSettingWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeSnapshotSettingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSnapshotSetting",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/snapshot-setting`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeSnapshotSettingResponse>(await this.callApi(params, req, runtime), new $_model.DescribeSnapshotSettingResponse({}));
  }

  /**
   * 查看备份设置
   * @returns DescribeSnapshotSettingResponse
   */
  async describeSnapshotSetting(InstanceId: string): Promise<$_model.DescribeSnapshotSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSnapshotSettingWithOptions(InstanceId, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTemplatesResponse
   */
  async describeTemplatesWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTemplatesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTemplates",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTemplatesResponse({}));
  }

  /**
   * @returns DescribeTemplatesResponse
   */
  async describeTemplates(InstanceId: string): Promise<$_model.DescribeTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplatesWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Queries the configurations of the X-Pack Monitoring feature of a Logstash cluster.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeXpackMonitorConfigResponse
   */
  async describeXpackMonitorConfigWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeXpackMonitorConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeXpackMonitorConfig",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/xpack-monitor-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeXpackMonitorConfigResponse>(await this.callApi(params, req, runtime), new $_model.DescribeXpackMonitorConfigResponse({}));
  }

  /**
   * Queries the configurations of the X-Pack Monitoring feature of a Logstash cluster.
   * @returns DescribeXpackMonitorConfigResponse
   */
  async describeXpackMonitorConfig(InstanceId: string): Promise<$_model.DescribeXpackMonitorConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeXpackMonitorConfigWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 触发ES实例智能诊断
   * 
   * @param request - DiagnoseInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DiagnoseInstanceResponse
   */
  async diagnoseInstanceWithOptions(InstanceId: string, request: $_model.DiagnoseInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DiagnoseInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.diagnoseItems)) {
      body["diagnoseItems"] = request.diagnoseItems;
    }

    if (!$dara.isNull(request.indices)) {
      body["indices"] = request.indices;
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
      action: "DiagnoseInstance",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/diagnosis/instances/${$dara.URL.percentEncode(InstanceId)}/actions/diagnose`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DiagnoseInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DiagnoseInstanceResponse({}));
  }

  /**
   * 触发ES实例智能诊断
   * 
   * @param request - DiagnoseInstanceRequest
   * @returns DiagnoseInstanceResponse
   */
  async diagnoseInstance(InstanceId: string, request: $_model.DiagnoseInstanceRequest): Promise<$_model.DiagnoseInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.diagnoseInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 关闭kibana私网
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableKibanaPvlNetworkResponse
   */
  async disableKibanaPvlNetworkWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DisableKibanaPvlNetworkResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DisableKibanaPvlNetwork",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/disable-kibana-private`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DisableKibanaPvlNetworkResponse>(await this.callApi(params, req, runtime), new $_model.DisableKibanaPvlNetworkResponse({}));
  }

  /**
   * 关闭kibana私网
   * @returns DisableKibanaPvlNetworkResponse
   */
  async disableKibanaPvlNetwork(InstanceId: string): Promise<$_model.DisableKibanaPvlNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableKibanaPvlNetworkWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 开启v3 kibana私网
   * 
   * @param request - EnableKibanaPvlNetworkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableKibanaPvlNetworkResponse
   */
  async enableKibanaPvlNetworkWithOptions(InstanceId: string, request: $_model.EnableKibanaPvlNetworkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableKibanaPvlNetworkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endpointName)) {
      body["endpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.securityGroups)) {
      body["securityGroups"] = request.securityGroups;
    }

    if (!$dara.isNull(request.vSwitchIdsZone)) {
      body["vSwitchIdsZone"] = request.vSwitchIdsZone;
    }

    if (!$dara.isNull(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EnableKibanaPvlNetwork",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/enable-kibana-private`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnableKibanaPvlNetworkResponse>(await this.callApi(params, req, runtime), new $_model.EnableKibanaPvlNetworkResponse({}));
  }

  /**
   * 开启v3 kibana私网
   * 
   * @param request - EnableKibanaPvlNetworkRequest
   * @returns EnableKibanaPvlNetworkResponse
   */
  async enableKibanaPvlNetwork(InstanceId: string, request: $_model.EnableKibanaPvlNetworkRequest): Promise<$_model.EnableKibanaPvlNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.enableKibanaPvlNetworkWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries the estimated time that is required to restart a Logstash cluster.
   * 
   * @param request - EstimatedLogstashRestartTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EstimatedLogstashRestartTimeResponse
   */
  async estimatedLogstashRestartTimeWithOptions(InstanceId: string, request: $_model.EstimatedLogstashRestartTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EstimatedLogstashRestartTimeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "EstimatedLogstashRestartTime",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/estimated-time/restart-time`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EstimatedLogstashRestartTimeResponse>(await this.callApi(params, req, runtime), new $_model.EstimatedLogstashRestartTimeResponse({}));
  }

  /**
   * Queries the estimated time that is required to restart a Logstash cluster.
   * 
   * @param request - EstimatedLogstashRestartTimeRequest
   * @returns EstimatedLogstashRestartTimeResponse
   */
  async estimatedLogstashRestartTime(InstanceId: string, request: $_model.EstimatedLogstashRestartTimeRequest): Promise<$_model.EstimatedLogstashRestartTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.estimatedLogstashRestartTimeWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries the estimated time that is required to restart an Elasticsearch cluster.
   * 
   * @param request - EstimatedRestartTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EstimatedRestartTimeResponse
   */
  async estimatedRestartTimeWithOptions(InstanceId: string, request: $_model.EstimatedRestartTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EstimatedRestartTimeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "EstimatedRestartTime",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/estimated-time/restart-time`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EstimatedRestartTimeResponse>(await this.callApi(params, req, runtime), new $_model.EstimatedRestartTimeResponse({}));
  }

  /**
   * Queries the estimated time that is required to restart an Elasticsearch cluster.
   * 
   * @param request - EstimatedRestartTimeRequest
   * @returns EstimatedRestartTimeResponse
   */
  async estimatedRestartTime(InstanceId: string, request: $_model.EstimatedRestartTimeRequest): Promise<$_model.EstimatedRestartTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.estimatedRestartTimeWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call GetClusterDataInformation to obtain the data information about the cluster.
   * 
   * @param request - GetClusterDataInformationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterDataInformationResponse
   */
  async getClusterDataInformationWithOptions(request: $_model.GetClusterDataInformationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetClusterDataInformationResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetClusterDataInformation",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/cluster/data-information`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetClusterDataInformationResponse>(await this.callApi(params, req, runtime), new $_model.GetClusterDataInformationResponse({}));
  }

  /**
   * Call GetClusterDataInformation to obtain the data information about the cluster.
   * 
   * @param request - GetClusterDataInformationRequest
   * @returns GetClusterDataInformationResponse
   */
  async getClusterDataInformation(request: $_model.GetClusterDataInformationRequest): Promise<$_model.GetClusterDataInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterDataInformationWithOptions(request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetElastictaskResponse
   */
  async getElastictaskWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetElastictaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetElastictask",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/elastic-task`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetElastictaskResponse>(await this.callApi(params, req, runtime), new $_model.GetElastictaskResponse({}));
  }

  /**
   * @returns GetElastictaskResponse
   */
  async getElastictask(InstanceId: string): Promise<$_model.GetElastictaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getElastictaskWithOptions(InstanceId, headers, runtime);
  }

  /**
   * GetEmonAlarmRecordStatisticsDistribute
   * 
   * @param request - GetEmonAlarmRecordStatisticsDistributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEmonAlarmRecordStatisticsDistributeResponse
   */
  async getEmonAlarmRecordStatisticsDistributeWithOptions(request: $_model.GetEmonAlarmRecordStatisticsDistributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEmonAlarmRecordStatisticsDistributeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      query["body"] = request.body;
    }

    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.timeEnd)) {
      query["timeEnd"] = request.timeEnd;
    }

    if (!$dara.isNull(request.timeStart)) {
      query["timeStart"] = request.timeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEmonAlarmRecordStatisticsDistribute",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/emon/alarm-record-statistics/distribute`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEmonAlarmRecordStatisticsDistributeResponse>(await this.callApi(params, req, runtime), new $_model.GetEmonAlarmRecordStatisticsDistributeResponse({}));
  }

  /**
   * GetEmonAlarmRecordStatisticsDistribute
   * 
   * @param request - GetEmonAlarmRecordStatisticsDistributeRequest
   * @returns GetEmonAlarmRecordStatisticsDistributeResponse
   */
  async getEmonAlarmRecordStatisticsDistribute(request: $_model.GetEmonAlarmRecordStatisticsDistributeRequest): Promise<$_model.GetEmonAlarmRecordStatisticsDistributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmonAlarmRecordStatisticsDistributeWithOptions(request, headers, runtime);
  }

  /**
   * 获取高级监控报警自定义Grafana监控报警项
   * 
   * @param request - GetEmonGrafanaAlertsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEmonGrafanaAlertsResponse
   */
  async getEmonGrafanaAlertsWithOptions(ProjectId: string, request: $_model.GetEmonGrafanaAlertsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEmonGrafanaAlertsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      query["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEmonGrafanaAlerts",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/emon/projects/${$dara.URL.percentEncode(ProjectId)}/grafana/proxy/api/alerts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEmonGrafanaAlertsResponse>(await this.callApi(params, req, runtime), new $_model.GetEmonGrafanaAlertsResponse({}));
  }

  /**
   * 获取高级监控报警自定义Grafana监控报警项
   * 
   * @param request - GetEmonGrafanaAlertsRequest
   * @returns GetEmonGrafanaAlertsResponse
   */
  async getEmonGrafanaAlerts(ProjectId: string, request: $_model.GetEmonGrafanaAlertsRequest): Promise<$_model.GetEmonGrafanaAlertsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmonGrafanaAlertsWithOptions(ProjectId, request, headers, runtime);
  }

  /**
   * 获取高级监控报警自定义Grafana监控大盘列表
   * 
   * @param request - GetEmonGrafanaDashboardsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEmonGrafanaDashboardsResponse
   */
  async getEmonGrafanaDashboardsWithOptions(ProjectId: string, request: $_model.GetEmonGrafanaDashboardsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEmonGrafanaDashboardsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      query["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEmonGrafanaDashboards",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/emon/projects/${$dara.URL.percentEncode(ProjectId)}/grafana/proxy/api/search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEmonGrafanaDashboardsResponse>(await this.callApi(params, req, runtime), new $_model.GetEmonGrafanaDashboardsResponse({}));
  }

  /**
   * 获取高级监控报警自定义Grafana监控大盘列表
   * 
   * @param request - GetEmonGrafanaDashboardsRequest
   * @returns GetEmonGrafanaDashboardsResponse
   */
  async getEmonGrafanaDashboards(ProjectId: string, request: $_model.GetEmonGrafanaDashboardsRequest): Promise<$_model.GetEmonGrafanaDashboardsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmonGrafanaDashboardsWithOptions(ProjectId, request, headers, runtime);
  }

  /**
   * GetEmonMonitorData
   * 
   * @param request - GetEmonMonitorDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEmonMonitorDataResponse
   */
  async getEmonMonitorDataWithOptions(ProjectId: string, request: $_model.GetEmonMonitorDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEmonMonitorDataResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      query["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEmonMonitorData",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/emon/projects/${$dara.URL.percentEncode(ProjectId)}/metrics/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEmonMonitorDataResponse>(await this.callApi(params, req, runtime), new $_model.GetEmonMonitorDataResponse({}));
  }

  /**
   * GetEmonMonitorData
   * 
   * @param request - GetEmonMonitorDataRequest
   * @returns GetEmonMonitorDataResponse
   */
  async getEmonMonitorData(ProjectId: string, request: $_model.GetEmonMonitorDataRequest): Promise<$_model.GetEmonMonitorDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmonMonitorDataWithOptions(ProjectId, request, headers, runtime);
  }

  /**
   * 统计OpenStore实例的存储容量和使用情况
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOpenStoreUsageResponse
   */
  async getOpenStoreUsageWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOpenStoreUsageResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOpenStoreUsage",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/openstore/usage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOpenStoreUsageResponse>(await this.callApi(params, req, runtime), new $_model.GetOpenStoreUsageResponse({}));
  }

  /**
   * 统计OpenStore实例的存储容量和使用情况
   * @returns GetOpenStoreUsageResponse
   */
  async getOpenStoreUsage(InstanceId: string): Promise<$_model.GetOpenStoreUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOpenStoreUsageWithOptions(InstanceId, headers, runtime);
  }

  /**
   * The maximum number of nodes.
   * 
   * @param request - GetRegionConfigurationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegionConfigurationResponse
   */
  async getRegionConfigurationWithOptions(request: $_model.GetRegionConfigurationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegionConfigurationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.zoneId)) {
      query["zoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegionConfiguration",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/region`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegionConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.GetRegionConfigurationResponse({}));
  }

  /**
   * The maximum number of nodes.
   * 
   * @param request - GetRegionConfigurationRequest
   * @returns GetRegionConfigurationResponse
   */
  async getRegionConfiguration(request: $_model.GetRegionConfigurationRequest): Promise<$_model.GetRegionConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegionConfigurationWithOptions(request, headers, runtime);
  }

  /**
   * 实例区域商品化配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegionalInstanceConfigResponse
   */
  async getRegionalInstanceConfigWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegionalInstanceConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegionalInstanceConfig",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/regions/instance-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegionalInstanceConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetRegionalInstanceConfigResponse({}));
  }

  /**
   * 实例区域商品化配置
   * @returns GetRegionalInstanceConfigResponse
   */
  async getRegionalInstanceConfig(): Promise<$_model.GetRegionalInstanceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegionalInstanceConfigWithOptions(headers, runtime);
  }

  /**
   * ES集群可缩容节点
   * 
   * @param request - GetSuggestShrinkableNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSuggestShrinkableNodesResponse
   */
  async getSuggestShrinkableNodesWithOptions(InstanceId: string, request: $_model.GetSuggestShrinkableNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSuggestShrinkableNodesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.count)) {
      query["count"] = request.count;
    }

    if (!$dara.isNull(request.ignoreStatus)) {
      query["ignoreStatus"] = request.ignoreStatus;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSuggestShrinkableNodes",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/suggest-shrinkable-nodes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSuggestShrinkableNodesResponse>(await this.callApi(params, req, runtime), new $_model.GetSuggestShrinkableNodesResponse({}));
  }

  /**
   * ES集群可缩容节点
   * 
   * @param request - GetSuggestShrinkableNodesRequest
   * @returns GetSuggestShrinkableNodesResponse
   */
  async getSuggestShrinkableNodes(InstanceId: string, request: $_model.GetSuggestShrinkableNodesRequest): Promise<$_model.GetSuggestShrinkableNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSuggestShrinkableNodesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取可数据迁移节点
   * 
   * @param request - GetTransferableNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTransferableNodesResponse
   */
  async getTransferableNodesWithOptions(InstanceId: string, request: $_model.GetTransferableNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTransferableNodesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.count)) {
      query["count"] = request.count;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTransferableNodes",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/transferable-nodes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTransferableNodesResponse>(await this.callApi(params, req, runtime), new $_model.GetTransferableNodesResponse({}));
  }

  /**
   * 获取可数据迁移节点
   * 
   * @param request - GetTransferableNodesRequest
   * @returns GetTransferableNodesResponse
   */
  async getTransferableNodes(InstanceId: string, request: $_model.GetTransferableNodesRequest): Promise<$_model.GetTransferableNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTransferableNodesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Creates a service-linked role.
   * 
   * @remarks
   * > Before you perform auto scaling for a cluster at the China site (aliyun.com) or you use shippers to collect logs, you must create a service-linked role.
   * 
   * @param request - InitializeOperationRoleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitializeOperationRoleResponse
   */
  async initializeOperationRoleWithOptions(request: $_model.InitializeOperationRoleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InitializeOperationRoleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "InitializeOperationRole",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/user/slr`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitializeOperationRoleResponse>(await this.callApi(params, req, runtime), new $_model.InitializeOperationRoleResponse({}));
  }

  /**
   * Creates a service-linked role.
   * 
   * @remarks
   * > Before you perform auto scaling for a cluster at the China site (aliyun.com) or you use shippers to collect logs, you must create a service-linked role.
   * 
   * @param request - InitializeOperationRoleRequest
   * @returns InitializeOperationRoleResponse
   */
  async initializeOperationRole(request: $_model.InitializeOperationRoleRequest): Promise<$_model.InitializeOperationRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.initializeOperationRoleWithOptions(request, headers, runtime);
  }

  /**
   * Installs ES-operator for a Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * > Before you install a shipper for an ACK cluster, you must call this operation to install ES-operator for the cluster.
   * 
   * @param request - InstallAckOperatorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAckOperatorResponse
   */
  async installAckOperatorWithOptions(ClusterId: string, request: $_model.InstallAckOperatorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallAckOperatorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallAckOperator",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/ack-clusters/${$dara.URL.percentEncode(ClusterId)}/operator`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallAckOperatorResponse>(await this.callApi(params, req, runtime), new $_model.InstallAckOperatorResponse({}));
  }

  /**
   * Installs ES-operator for a Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * > Before you install a shipper for an ACK cluster, you must call this operation to install ES-operator for the cluster.
   * 
   * @param request - InstallAckOperatorRequest
   * @returns InstallAckOperatorResponse
   */
  async installAckOperator(ClusterId: string, request: $_model.InstallAckOperatorRequest): Promise<$_model.InstallAckOperatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installAckOperatorWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * Call InstallKibanaSystemPlugin to install the Kibana plug-in. The Kibana specification must be 2-Core 4 GB or higher.
   * 
   * @param request - InstallKibanaSystemPluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallKibanaSystemPluginResponse
   */
  async installKibanaSystemPluginWithOptions(InstanceId: string, request: $_model.InstallKibanaSystemPluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallKibanaSystemPluginResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallKibanaSystemPlugin",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/kibana-plugins/system/actions/install`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallKibanaSystemPluginResponse>(await this.callApi(params, req, runtime), new $_model.InstallKibanaSystemPluginResponse({}));
  }

  /**
   * Call InstallKibanaSystemPlugin to install the Kibana plug-in. The Kibana specification must be 2-Core 4 GB or higher.
   * 
   * @param request - InstallKibanaSystemPluginRequest
   * @returns InstallKibanaSystemPluginResponse
   */
  async installKibanaSystemPlugin(InstanceId: string, request: $_model.InstallKibanaSystemPluginRequest): Promise<$_model.InstallKibanaSystemPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installKibanaSystemPluginWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * The returned data also contains **Headers** parameters, indicating that header information is returned.
   * 
   * @remarks
   * ls-cn-oew1qbgl\\*\\*\\*\\*
   * 
   * @param request - InstallLogstashSystemPluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallLogstashSystemPluginResponse
   */
  async installLogstashSystemPluginWithOptions(InstanceId: string, request: $_model.InstallLogstashSystemPluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallLogstashSystemPluginResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallLogstashSystemPlugin",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/plugins/system/actions/install`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallLogstashSystemPluginResponse>(await this.callApi(params, req, runtime), new $_model.InstallLogstashSystemPluginResponse({}));
  }

  /**
   * The returned data also contains **Headers** parameters, indicating that header information is returned.
   * 
   * @remarks
   * ls-cn-oew1qbgl\\*\\*\\*\\*
   * 
   * @param request - InstallLogstashSystemPluginRequest
   * @returns InstallLogstashSystemPluginResponse
   */
  async installLogstashSystemPlugin(InstanceId: string, request: $_model.InstallLogstashSystemPluginRequest): Promise<$_model.InstallLogstashSystemPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installLogstashSystemPluginWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call InstallSystemPlugin to install a system preset plug-in.
   * 
   * @param request - InstallSystemPluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallSystemPluginResponse
   */
  async installSystemPluginWithOptions(InstanceId: string, request: $_model.InstallSystemPluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallSystemPluginResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallSystemPlugin",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/plugins/system/actions/install`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallSystemPluginResponse>(await this.callApi(params, req, runtime), new $_model.InstallSystemPluginResponse({}));
  }

  /**
   * Call InstallSystemPlugin to install a system preset plug-in.
   * 
   * @param request - InstallSystemPluginRequest
   * @returns InstallSystemPluginResponse
   */
  async installSystemPlugin(InstanceId: string, request: $_model.InstallSystemPluginRequest): Promise<$_model.InstallSystemPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installSystemPluginWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Installs custom plug-ins that are uploaded to the Elasticsearch console.
   * 
   * @param request - InstallUserPluginsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallUserPluginsResponse
   */
  async installUserPluginsWithOptions(InstanceId: string, request: $_model.InstallUserPluginsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InstallUserPluginsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallUserPlugins",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/plugins/user/actions/install`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InstallUserPluginsResponse>(await this.callApi(params, req, runtime), new $_model.InstallUserPluginsResponse({}));
  }

  /**
   * Installs custom plug-ins that are uploaded to the Elasticsearch console.
   * 
   * @param request - InstallUserPluginsRequest
   * @returns InstallUserPluginsResponse
   */
  async installUserPlugins(InstanceId: string, request: $_model.InstallUserPluginsRequest): Promise<$_model.InstallUserPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installUserPluginsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - InterruptElasticsearchTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InterruptElasticsearchTaskResponse
   */
  async interruptElasticsearchTaskWithOptions(InstanceId: string, request: $_model.InterruptElasticsearchTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InterruptElasticsearchTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InterruptElasticsearchTask",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/interrupt`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InterruptElasticsearchTaskResponse>(await this.callApi(params, req, runtime), new $_model.InterruptElasticsearchTaskResponse({}));
  }

  /**
   * @param request - InterruptElasticsearchTaskRequest
   * @returns InterruptElasticsearchTaskResponse
   */
  async interruptElasticsearchTask(InstanceId: string, request: $_model.InterruptElasticsearchTaskRequest): Promise<$_model.InterruptElasticsearchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.interruptElasticsearchTaskWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * After the task is suspended, the Logstash cluster is in the suspended state.
   * 
   * @param request - InterruptLogstashTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InterruptLogstashTaskResponse
   */
  async interruptLogstashTaskWithOptions(InstanceId: string, request: $_model.InterruptLogstashTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InterruptLogstashTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InterruptLogstashTask",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/actions/interrupt`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InterruptLogstashTaskResponse>(await this.callApi(params, req, runtime), new $_model.InterruptLogstashTaskResponse({}));
  }

  /**
   * After the task is suspended, the Logstash cluster is in the suspended state.
   * 
   * @param request - InterruptLogstashTaskRequest
   * @returns InterruptLogstashTaskResponse
   */
  async interruptLogstashTask(InstanceId: string, request: $_model.InterruptLogstashTaskRequest): Promise<$_model.InterruptLogstashTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.interruptLogstashTaskWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries a list of Container Service for Kubernetes (ACK) clusters.
   * 
   * @param request - ListAckClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAckClustersResponse
   */
  async listAckClustersWithOptions(request: $_model.ListAckClustersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAckClustersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["vpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAckClusters",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/ack-clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAckClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListAckClustersResponse({}));
  }

  /**
   * Queries a list of Container Service for Kubernetes (ACK) clusters.
   * 
   * @param request - ListAckClustersRequest
   * @returns ListAckClustersResponse
   */
  async listAckClusters(request: $_model.ListAckClustersRequest): Promise<$_model.ListAckClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAckClustersWithOptions(request, headers, runtime);
  }

  /**
   * Queries all namespaces in a specified Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * > When you install a shipper on an ACK cluster, you must specify a namespace. You can call this operation to query all namespaces in the ACK cluster, and select a namespace based on your business requirements.
   * 
   * @param request - ListAckNamespacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAckNamespacesResponse
   */
  async listAckNamespacesWithOptions(ClusterId: string, request: $_model.ListAckNamespacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAckNamespacesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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
      action: "ListAckNamespaces",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/ack-clusters/${$dara.URL.percentEncode(ClusterId)}/namespaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAckNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.ListAckNamespacesResponse({}));
  }

  /**
   * Queries all namespaces in a specified Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * > When you install a shipper on an ACK cluster, you must specify a namespace. You can call this operation to query all namespaces in the ACK cluster, and select a namespace based on your business requirements.
   * 
   * @param request - ListAckNamespacesRequest
   * @returns ListAckNamespacesResponse
   */
  async listAckNamespaces(ClusterId: string, request: $_model.ListAckNamespacesRequest): Promise<$_model.ListAckNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAckNamespacesWithOptions(ClusterId, request, headers, runtime);
  }

  /**
   * 变更记录 变更详情
   * 
   * @param request - ListActionRecordsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListActionRecordsResponse
   */
  async listActionRecordsWithOptions(InstanceId: string, request: $_model.ListActionRecordsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListActionRecordsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actionNames)) {
      query["actionNames"] = request.actionNames;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.filter)) {
      query["filter"] = request.filter;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.requestId)) {
      query["requestId"] = request.requestId;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.userId)) {
      query["userId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListActionRecords",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/action-records`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListActionRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListActionRecordsResponse({}));
  }

  /**
   * 变更记录 变更详情
   * 
   * @param request - ListActionRecordsRequest
   * @returns ListActionRecordsResponse
   */
  async listActionRecords(InstanceId: string, request: $_model.ListActionRecordsRequest): Promise<$_model.ListActionRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listActionRecordsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * es-cn-tl32cpgwa002l\\*\\*\\*\\*
   * 
   * @param request - ListAllNodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAllNodeResponse
   */
  async listAllNodeWithOptions(InstanceId: string, request: $_model.ListAllNodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAllNodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.extended)) {
      query["extended"] = request.extended;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAllNode",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/nodes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAllNodeResponse>(await this.callApi(params, req, runtime), new $_model.ListAllNodeResponse({}));
  }

  /**
   * es-cn-tl32cpgwa002l\\*\\*\\*\\*
   * 
   * @param request - ListAllNodeRequest
   * @returns ListAllNodeResponse
   */
  async listAllNode(InstanceId: string, request: $_model.ListAllNodeRequest): Promise<$_model.ListAllNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAllNodeWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 实例可添加的OSS引用仓库
   * 
   * @param request - ListAlternativeSnapshotReposRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlternativeSnapshotReposResponse
   */
  async listAlternativeSnapshotReposWithOptions(InstanceId: string, request: $_model.ListAlternativeSnapshotReposRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlternativeSnapshotReposResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alreadySetItems)) {
      query["alreadySetItems"] = request.alreadySetItems;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlternativeSnapshotRepos",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/alternative-snapshot-repos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlternativeSnapshotReposResponse>(await this.callApi(params, req, runtime), new $_model.ListAlternativeSnapshotReposResponse({}));
  }

  /**
   * 实例可添加的OSS引用仓库
   * 
   * @param request - ListAlternativeSnapshotReposRequest
   * @returns ListAlternativeSnapshotReposResponse
   */
  async listAlternativeSnapshotRepos(InstanceId: string, request: $_model.ListAlternativeSnapshotReposRequest): Promise<$_model.ListAlternativeSnapshotReposResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlternativeSnapshotReposWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * ListApm
   * 
   * @param request - ListApmRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApmResponse
   */
  async listApmWithOptions(request: $_model.ListApmRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApmResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.output)) {
      query["output"] = request.output;
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
      action: "ListApm",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/apm`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApmResponse>(await this.callApi(params, req, runtime), new $_model.ListApmResponse({}));
  }

  /**
   * ListApm
   * 
   * @param request - ListApmRequest
   * @returns ListApmResponse
   */
  async listApm(request: $_model.ListApmRequest): Promise<$_model.ListApmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApmWithOptions(request, headers, runtime);
  }

  /**
   * Queries the Elasticsearch clusters that can be associated with a Logstash cluster when you configure the X-Pack Monitoring feature for the Logstash cluster.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableEsInstanceIdsResponse
   */
  async listAvailableEsInstanceIdsWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAvailableEsInstanceIdsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAvailableEsInstanceIds",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/available-elasticsearch-for-centralized-management`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAvailableEsInstanceIdsResponse>(await this.callApi(params, req, runtime), new $_model.ListAvailableEsInstanceIdsResponse({}));
  }

  /**
   * Queries the Elasticsearch clusters that can be associated with a Logstash cluster when you configure the X-Pack Monitoring feature for the Logstash cluster.
   * @returns ListAvailableEsInstanceIdsResponse
   */
  async listAvailableEsInstanceIds(InstanceId: string): Promise<$_model.ListAvailableEsInstanceIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAvailableEsInstanceIdsWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Queries shippers.
   * 
   * @param request - ListCollectorsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCollectorsResponse
   */
  async listCollectorsWithOptions(request: $_model.ListCollectorsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCollectorsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.resId)) {
      query["resId"] = request.resId;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCollectors",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/collectors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCollectorsResponse>(await this.callApi(params, req, runtime), new $_model.ListCollectorsResponse({}));
  }

  /**
   * Queries shippers.
   * 
   * @param request - ListCollectorsRequest
   * @returns ListCollectorsResponse
   */
  async listCollectors(request: $_model.ListCollectorsRequest): Promise<$_model.ListCollectorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCollectorsWithOptions(request, headers, runtime);
  }

  /**
   * ES集群组合索引列表
   * 
   * @param request - ListComponentIndicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListComponentIndicesResponse
   */
  async listComponentIndicesWithOptions(InstanceId: string, request: $_model.ListComponentIndicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListComponentIndicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
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
      action: "ListComponentIndices",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/component-index`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListComponentIndicesResponse>(await this.callApi(params, req, runtime), new $_model.ListComponentIndicesResponse({}));
  }

  /**
   * ES集群组合索引列表
   * 
   * @param request - ListComponentIndicesRequest
   * @returns ListComponentIndicesResponse
   */
  async listComponentIndices(InstanceId: string, request: $_model.ListComponentIndicesRequest): Promise<$_model.ListComponentIndicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComponentIndicesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取与当前实例进行网络互通的实例列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnectedClustersResponse
   */
  async listConnectedClustersWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConnectedClustersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConnectedClusters",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/connected-clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConnectedClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListConnectedClustersResponse({}));
  }

  /**
   * 获取与当前实例进行网络互通的实例列表
   * @returns ListConnectedClustersResponse
   */
  async listConnectedClusters(InstanceId: string): Promise<$_model.ListConnectedClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConnectedClustersWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 查询数据流
   * 
   * @param request - ListDataStreamsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataStreamsResponse
   */
  async listDataStreamsWithOptions(InstanceId: string, request: $_model.ListDataStreamsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataStreamsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isManaged)) {
      query["isManaged"] = request.isManaged;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataStreams",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/data-streams`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataStreamsResponse>(await this.callApi(params, req, runtime), new $_model.ListDataStreamsResponse({}));
  }

  /**
   * 查询数据流
   * 
   * @param request - ListDataStreamsRequest
   * @returns ListDataStreamsResponse
   */
  async listDataStreams(InstanceId: string, request: $_model.ListDataStreamsRequest): Promise<$_model.ListDataStreamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataStreamsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDataTasksResponse
   */
  async listDataTasksWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDataTasksResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDataTasks",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/data-task`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDataTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListDataTasksResponse({}));
  }

  /**
   * @returns ListDataTasksResponse
   */
  async listDataTasks(InstanceId: string): Promise<$_model.ListDataTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataTasksWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Queries the default configuration files of shippers.
   * 
   * @param request - ListDefaultCollectorConfigurationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDefaultCollectorConfigurationsResponse
   */
  async listDefaultCollectorConfigurationsWithOptions(request: $_model.ListDefaultCollectorConfigurationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDefaultCollectorConfigurationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resType)) {
      query["resType"] = request.resType;
    }

    if (!$dara.isNull(request.resVersion)) {
      query["resVersion"] = request.resVersion;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDefaultCollectorConfigurations",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/beats/default-configurations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDefaultCollectorConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.ListDefaultCollectorConfigurationsResponse({}));
  }

  /**
   * Queries the default configuration files of shippers.
   * 
   * @param request - ListDefaultCollectorConfigurationsRequest
   * @returns ListDefaultCollectorConfigurationsResponse
   */
  async listDefaultCollectorConfigurations(request: $_model.ListDefaultCollectorConfigurationsRequest): Promise<$_model.ListDefaultCollectorConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDefaultCollectorConfigurationsWithOptions(request, headers, runtime);
  }

  /**
   * ListDeprecatedTemplates
   * 
   * @param request - ListDeprecatedTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeprecatedTemplatesResponse
   */
  async listDeprecatedTemplatesWithOptions(InstanceId: string, request: $_model.ListDeprecatedTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeprecatedTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
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
      action: "ListDeprecatedTemplates",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/deprecated-templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeprecatedTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListDeprecatedTemplatesResponse({}));
  }

  /**
   * ListDeprecatedTemplates
   * 
   * @param request - ListDeprecatedTemplatesRequest
   * @returns ListDeprecatedTemplatesResponse
   */
  async listDeprecatedTemplates(InstanceId: string, request: $_model.ListDeprecatedTemplatesRequest): Promise<$_model.ListDeprecatedTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeprecatedTemplatesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries the indexes for health diagnosis performed on an Elasticsearch cluster.
   * 
   * @param request - ListDiagnoseIndicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDiagnoseIndicesResponse
   */
  async listDiagnoseIndicesWithOptions(InstanceId: string, request: $_model.ListDiagnoseIndicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDiagnoseIndicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDiagnoseIndices",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/diagnosis/instances/${$dara.URL.percentEncode(InstanceId)}/indices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDiagnoseIndicesResponse>(await this.callApi(params, req, runtime), new $_model.ListDiagnoseIndicesResponse({}));
  }

  /**
   * Queries the indexes for health diagnosis performed on an Elasticsearch cluster.
   * 
   * @param request - ListDiagnoseIndicesRequest
   * @returns ListDiagnoseIndicesResponse
   */
  async listDiagnoseIndices(InstanceId: string, request: $_model.ListDiagnoseIndicesRequest): Promise<$_model.ListDiagnoseIndicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDiagnoseIndicesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取集群诊断报告列表
   * 
   * @param request - ListDiagnoseReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDiagnoseReportResponse
   */
  async listDiagnoseReportWithOptions(InstanceId: string, request: $_model.ListDiagnoseReportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDiagnoseReportResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.detail)) {
      query["detail"] = request.detail;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.trigger)) {
      query["trigger"] = request.trigger;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDiagnoseReport",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/diagnosis/instances/${$dara.URL.percentEncode(InstanceId)}/reports`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDiagnoseReportResponse>(await this.callApi(params, req, runtime), new $_model.ListDiagnoseReportResponse({}));
  }

  /**
   * 获取集群诊断报告列表
   * 
   * @param request - ListDiagnoseReportRequest
   * @returns ListDiagnoseReportResponse
   */
  async listDiagnoseReport(InstanceId: string, request: $_model.ListDiagnoseReportRequest): Promise<$_model.ListDiagnoseReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDiagnoseReportWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries the IDs of the historical intelligent O&M reports of an Elasticsearch cluster.
   * 
   * @param request - ListDiagnoseReportIdsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDiagnoseReportIdsResponse
   */
  async listDiagnoseReportIdsWithOptions(InstanceId: string, request: $_model.ListDiagnoseReportIdsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDiagnoseReportIdsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.trigger)) {
      query["trigger"] = request.trigger;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDiagnoseReportIds",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/diagnosis/instances/${$dara.URL.percentEncode(InstanceId)}/report-ids`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDiagnoseReportIdsResponse>(await this.callApi(params, req, runtime), new $_model.ListDiagnoseReportIdsResponse({}));
  }

  /**
   * Queries the IDs of the historical intelligent O&M reports of an Elasticsearch cluster.
   * 
   * @param request - ListDiagnoseReportIdsRequest
   * @returns ListDiagnoseReportIdsResponse
   */
  async listDiagnoseReportIds(InstanceId: string, request: $_model.ListDiagnoseReportIdsRequest): Promise<$_model.ListDiagnoseReportIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDiagnoseReportIdsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * The diagnostic item is used to check whether data write requests of a cluster are accumulated. If data write requests are accumulated, a bulk rejection occurs. This may cause data loss and severely consume system resources.
   * 
   * @param request - ListDiagnosisItemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDiagnosisItemsResponse
   */
  async listDiagnosisItemsWithOptions(request: $_model.ListDiagnosisItemsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDiagnosisItemsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDiagnosisItems",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/diagnosis/items`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDiagnosisItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListDiagnosisItemsResponse({}));
  }

  /**
   * The diagnostic item is used to check whether data write requests of a cluster are accumulated. If data write requests are accumulated, a bulk rejection occurs. This may cause data loss and severely consume system resources.
   * 
   * @param request - ListDiagnosisItemsRequest
   * @returns ListDiagnosisItemsResponse
   */
  async listDiagnosisItems(request: $_model.ListDiagnosisItemsRequest): Promise<$_model.ListDiagnosisItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDiagnosisItemsWithOptions(request, headers, runtime);
  }

  /**
   * @param request - ListDictInformationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDictInformationResponse
   */
  async listDictInformationWithOptions(InstanceId: string, request: $_model.ListDictInformationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDictInformationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analyzerType)) {
      query["analyzerType"] = request.analyzerType;
    }

    if (!$dara.isNull(request.bucketName)) {
      query["bucketName"] = request.bucketName;
    }

    if (!$dara.isNull(request.key)) {
      query["key"] = request.key;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDictInformation",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/dict/_info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDictInformationResponse>(await this.callApi(params, req, runtime), new $_model.ListDictInformationResponse({}));
  }

  /**
   * @param request - ListDictInformationRequest
   * @returns ListDictInformationResponse
   */
  async listDictInformation(InstanceId: string, request: $_model.ListDictInformationRequest): Promise<$_model.ListDictInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDictInformationWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries the details of a specified type of dictionary.
   * 
   * @param request - ListDictsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDictsResponse
   */
  async listDictsWithOptions(InstanceId: string, request: $_model.ListDictsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDictsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analyzerType)) {
      query["analyzerType"] = request.analyzerType;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDicts",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/dicts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDictsResponse>(await this.callApi(params, req, runtime), new $_model.ListDictsResponse({}));
  }

  /**
   * Queries the details of a specified type of dictionary.
   * 
   * @param request - ListDictsRequest
   * @returns ListDictsResponse
   */
  async listDicts(InstanceId: string, request: $_model.ListDictsRequest): Promise<$_model.ListDictsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDictsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 查询ecs实例
   * 
   * @remarks
   * *Important** To call this operation, you must create the Aliyun Elasticsearch AccessingOOSRole and the system service role AliyunOOSAccessingECS 4ESRole to Elasticsearch the service account to obtain the ECS access permissions of the primary account. For more information, see [Collect ECS service logs](https://help.aliyun.com/document_detail/146446.html).
   * 
   * @param request - ListEcsInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEcsInstancesResponse
   */
  async listEcsInstancesWithOptions(request: $_model.ListEcsInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEcsInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ecsInstanceIds)) {
      query["ecsInstanceIds"] = request.ecsInstanceIds;
    }

    if (!$dara.isNull(request.ecsInstanceName)) {
      query["ecsInstanceName"] = request.ecsInstanceName;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.tags)) {
      query["tags"] = request.tags;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["vpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEcsInstances",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/ecs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEcsInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListEcsInstancesResponse({}));
  }

  /**
   * 查询ecs实例
   * 
   * @remarks
   * *Important** To call this operation, you must create the Aliyun Elasticsearch AccessingOOSRole and the system service role AliyunOOSAccessingECS 4ESRole to Elasticsearch the service account to obtain the ECS access permissions of the primary account. For more information, see [Collect ECS service logs](https://help.aliyun.com/document_detail/146446.html).
   * 
   * @param request - ListEcsInstancesRequest
   * @returns ListEcsInstancesResponse
   */
  async listEcsInstances(request: $_model.ListEcsInstancesRequest): Promise<$_model.ListEcsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the driver files of a Logstash cluster.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExtendfilesResponse
   */
  async listExtendfilesWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExtendfilesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExtendfiles",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/extendfiles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExtendfilesResponse>(await this.callApi(params, req, runtime), new $_model.ListExtendfilesResponse({}));
  }

  /**
   * Queries the driver files of a Logstash cluster.
   * @returns ListExtendfilesResponse
   */
  async listExtendfiles(InstanceId: string): Promise<$_model.ListExtendfilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExtendfilesWithOptions(InstanceId, headers, runtime);
  }

  /**
   * @param request - ListILMPoliciesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListILMPoliciesResponse
   */
  async listILMPoliciesWithOptions(InstanceId: string, request: $_model.ListILMPoliciesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListILMPoliciesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.policyName)) {
      query["policyName"] = request.policyName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListILMPolicies",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/ilm-policies`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListILMPoliciesResponse>(await this.callApi(params, req, runtime), new $_model.ListILMPoliciesResponse({}));
  }

  /**
   * @param request - ListILMPoliciesRequest
   * @returns ListILMPoliciesResponse
   */
  async listILMPolicies(InstanceId: string, request: $_model.ListILMPoliciesRequest): Promise<$_model.ListILMPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listILMPoliciesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - ListIndexTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListIndexTemplatesResponse
   */
  async listIndexTemplatesWithOptions(InstanceId: string, request: $_model.ListIndexTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListIndexTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.indexTemplate)) {
      query["indexTemplate"] = request.indexTemplate;
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
      action: "ListIndexTemplates",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/index-templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListIndexTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListIndexTemplatesResponse({}));
  }

  /**
   * @param request - ListIndexTemplatesRequest
   * @returns ListIndexTemplatesResponse
   */
  async listIndexTemplates(InstanceId: string, request: $_model.ListIndexTemplatesRequest): Promise<$_model.ListIndexTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexTemplatesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 查询Elasticsearch实例列表
   * 
   * @param request - ListInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResponse
   */
  async listInstanceWithOptions(request: $_model.ListInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.esVersion)) {
      query["esVersion"] = request.esVersion;
    }

    if (!$dara.isNull(request.instanceCategory)) {
      query["instanceCategory"] = request.instanceCategory;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.tags)) {
      query["tags"] = request.tags;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["vpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.zoneId)) {
      query["zoneId"] = request.zoneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstance",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceResponse({}));
  }

  /**
   * 查询Elasticsearch实例列表
   * 
   * @param request - ListInstanceRequest
   * @returns ListInstanceResponse
   */
  async listInstance(request: $_model.ListInstanceRequest): Promise<$_model.ListInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 集群触发的硬件运维事件列表
   * 
   * @param tmpReq - ListInstanceHistoryEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceHistoryEventsResponse
   */
  async listInstanceHistoryEventsWithOptions(tmpReq: $_model.ListInstanceHistoryEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceHistoryEventsResponse> {
    tmpReq.validate();
    let request = new $_model.ListInstanceHistoryEventsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.eventCycleStatus)) {
      request.eventCycleStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventCycleStatus, "eventCycleStatus", "simple");
    }

    if (!$dara.isNull(tmpReq.eventLevel)) {
      request.eventLevelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventLevel, "eventLevel", "simple");
    }

    if (!$dara.isNull(tmpReq.eventType)) {
      request.eventTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.eventType, "eventType", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventCreateEndTime)) {
      query["eventCreateEndTime"] = request.eventCreateEndTime;
    }

    if (!$dara.isNull(request.eventCreateStartTime)) {
      query["eventCreateStartTime"] = request.eventCreateStartTime;
    }

    if (!$dara.isNull(request.eventCycleStatusShrink)) {
      query["eventCycleStatus"] = request.eventCycleStatusShrink;
    }

    if (!$dara.isNull(request.eventExecuteEndTime)) {
      query["eventExecuteEndTime"] = request.eventExecuteEndTime;
    }

    if (!$dara.isNull(request.eventExecuteStartTime)) {
      query["eventExecuteStartTime"] = request.eventExecuteStartTime;
    }

    if (!$dara.isNull(request.eventFinashEndTime)) {
      query["eventFinashEndTime"] = request.eventFinashEndTime;
    }

    if (!$dara.isNull(request.eventFinashStartTime)) {
      query["eventFinashStartTime"] = request.eventFinashStartTime;
    }

    if (!$dara.isNull(request.eventLevelShrink)) {
      query["eventLevel"] = request.eventLevelShrink;
    }

    if (!$dara.isNull(request.eventTypeShrink)) {
      query["eventType"] = request.eventTypeShrink;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeIP)) {
      query["nodeIP"] = request.nodeIP;
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
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceHistoryEvents",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/events`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceHistoryEventsResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceHistoryEventsResponse({}));
  }

  /**
   * 集群触发的硬件运维事件列表
   * 
   * @param request - ListInstanceHistoryEventsRequest
   * @returns ListInstanceHistoryEventsResponse
   */
  async listInstanceHistoryEvents(request: $_model.ListInstanceHistoryEventsRequest): Promise<$_model.ListInstanceHistoryEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceHistoryEventsWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前实例先特定的索引列表
   * 
   * @param request - ListInstanceIndicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceIndicesResponse
   */
  async listInstanceIndicesWithOptions(InstanceId: string, request: $_model.ListInstanceIndicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceIndicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["all"] = request.all;
    }

    if (!$dara.isNull(request.isManaged)) {
      query["isManaged"] = request.isManaged;
    }

    if (!$dara.isNull(request.isOpenstore)) {
      query["isOpenstore"] = request.isOpenstore;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
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
      action: "ListInstanceIndices",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/indices`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceIndicesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceIndicesResponse({}));
  }

  /**
   * 获取当前实例先特定的索引列表
   * 
   * @param request - ListInstanceIndicesRequest
   * @returns ListInstanceIndicesResponse
   */
  async listInstanceIndices(InstanceId: string, request: $_model.ListInstanceIndicesRequest): Promise<$_model.ListInstanceIndicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceIndicesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries a list of Kibana plug-ins.
   * 
   * @param request - ListKibanaPluginsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKibanaPluginsResponse
   */
  async listKibanaPluginsWithOptions(InstanceId: string, request: $_model.ListKibanaPluginsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListKibanaPluginsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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
      action: "ListKibanaPlugins",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/kibana-plugins`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKibanaPluginsResponse>(await this.callApi(params, req, runtime), new $_model.ListKibanaPluginsResponse({}));
  }

  /**
   * Queries a list of Kibana plug-ins.
   * 
   * @param request - ListKibanaPluginsRequest
   * @returns ListKibanaPluginsResponse
   */
  async listKibanaPlugins(InstanceId: string, request: $_model.ListKibanaPluginsRequest): Promise<$_model.ListKibanaPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKibanaPluginsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 查询kibana私网连接信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKibanaPvlNetworkResponse
   */
  async listKibanaPvlNetworkWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListKibanaPvlNetworkResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKibanaPvlNetwork",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/get-kibana-private`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKibanaPvlNetworkResponse>(await this.callApi(params, req, runtime), new $_model.ListKibanaPvlNetworkResponse({}));
  }

  /**
   * 查询kibana私网连接信息
   * @returns ListKibanaPvlNetworkResponse
   */
  async listKibanaPvlNetwork(InstanceId: string): Promise<$_model.ListKibanaPvlNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKibanaPvlNetworkWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Logstash集群列表
   * 
   * @param request - ListLogstashRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogstashResponse
   */
  async listLogstashWithOptions(request: $_model.ListLogstashRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogstashResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.tags)) {
      query["tags"] = request.tags;
    }

    if (!$dara.isNull(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogstash",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogstashResponse>(await this.callApi(params, req, runtime), new $_model.ListLogstashResponse({}));
  }

  /**
   * Logstash集群列表
   * 
   * @param request - ListLogstashRequest
   * @returns ListLogstashResponse
   */
  async listLogstash(request: $_model.ListLogstashRequest): Promise<$_model.ListLogstashResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogstashWithOptions(request, headers, runtime);
  }

  /**
   * 获取Logstash日志
   * 
   * @param request - ListLogstashLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogstashLogResponse
   */
  async listLogstashLogWithOptions(InstanceId: string, request: $_model.ListLogstashLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogstashLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogstashLog",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/search-log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogstashLogResponse>(await this.callApi(params, req, runtime), new $_model.ListLogstashLogResponse({}));
  }

  /**
   * 获取Logstash日志
   * 
   * @param request - ListLogstashLogRequest
   * @returns ListLogstashLogResponse
   */
  async listLogstashLog(InstanceId: string, request: $_model.ListLogstashLogRequest): Promise<$_model.ListLogstashLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogstashLogWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Logstash插件列表
   * 
   * @param request - ListLogstashPluginsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogstashPluginsResponse
   */
  async listLogstashPluginsWithOptions(InstanceId: string, request: $_model.ListLogstashPluginsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogstashPluginsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogstashPlugins",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/plugins`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogstashPluginsResponse>(await this.callApi(params, req, runtime), new $_model.ListLogstashPluginsResponse({}));
  }

  /**
   * Logstash插件列表
   * 
   * @param request - ListLogstashPluginsRequest
   * @returns ListLogstashPluginsResponse
   */
  async listLogstashPlugins(InstanceId: string, request: $_model.ListLogstashPluginsRequest): Promise<$_model.ListLogstashPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogstashPluginsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries the statuses of Elastic Compute Service (ECS) instances on which a shipper is installed.
   * 
   * @param request - ListNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(ResId: string, request: $_model.ListNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListNodesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ecsInstanceIds)) {
      query["ecsInstanceIds"] = request.ecsInstanceIds;
    }

    if (!$dara.isNull(request.ecsInstanceName)) {
      query["ecsInstanceName"] = request.ecsInstanceName;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.tags)) {
      query["tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodes",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/collectors/${$dara.URL.percentEncode(ResId)}/nodes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNodesResponse>(await this.callApi(params, req, runtime), new $_model.ListNodesResponse({}));
  }

  /**
   * Queries the statuses of Elastic Compute Service (ECS) instances on which a shipper is installed.
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(ResId: string, request: $_model.ListNodesRequest): Promise<$_model.ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNodesWithOptions(ResId, request, headers, runtime);
  }

  /**
   * ListPipeline
   * 
   * @param request - ListPipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelineResponse
   */
  async listPipelineWithOptions(InstanceId: string, request: $_model.ListPipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelineResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pipelineId)) {
      query["pipelineId"] = request.pipelineId;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipeline",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/pipelines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelineResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelineResponse({}));
  }

  /**
   * ListPipeline
   * 
   * @param request - ListPipelineRequest
   * @returns ListPipelineResponse
   */
  async listPipeline(InstanceId: string, request: $_model.ListPipelineRequest): Promise<$_model.ListPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * The error message returned.
   * 
   * @param request - ListPipelineIdsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelineIdsResponse
   */
  async listPipelineIdsWithOptions(InstanceId: string, request: $_model.ListPipelineIdsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelineIdsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelineIds",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/pipeline-ids`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPipelineIdsResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelineIdsResponse({}));
  }

  /**
   * The error message returned.
   * 
   * @param request - ListPipelineIdsRequest
   * @returns ListPipelineIdsResponse
   */
  async listPipelineIds(InstanceId: string, request: $_model.ListPipelineIdsRequest): Promise<$_model.ListPipelineIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineIdsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * ES系统插件列表
   * 
   * @param request - ListPluginsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPluginsResponse
   */
  async listPluginsWithOptions(InstanceId: string, request: $_model.ListPluginsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPluginsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPlugins",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/plugins`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPluginsResponse>(await this.callApi(params, req, runtime), new $_model.ListPluginsResponse({}));
  }

  /**
   * ES系统插件列表
   * 
   * @param request - ListPluginsRequest
   * @returns ListPluginsResponse
   */
  async listPlugins(InstanceId: string, request: $_model.ListPluginsRequest): Promise<$_model.ListPluginsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPluginsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 查看Elasticsearch集群各种类型的日志
   * 
   * @param request - ListSearchLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSearchLogResponse
   */
  async listSearchLogWithOptions(InstanceId: string, request: $_model.ListSearchLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSearchLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSearchLog",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/search-log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSearchLogResponse>(await this.callApi(params, req, runtime), new $_model.ListSearchLogResponse({}));
  }

  /**
   * 查看Elasticsearch集群各种类型的日志
   * 
   * @param request - ListSearchLogRequest
   * @returns ListSearchLogResponse
   */
  async listSearchLog(InstanceId: string, request: $_model.ListSearchLogRequest): Promise<$_model.ListSearchLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSearchLogWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries the information about shards that are being restored or shards that are restored. By default, this operation returns only the information about shards that are being restored after you call this operation.
   * 
   * @remarks
   * > The restoration of a shard is a process of synchronizing data from a primary shard to a replica shard. After the restoration is complete, the replica shard is available for data searches.
   * 
   * @param request - ListShardRecoveriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListShardRecoveriesResponse
   */
  async listShardRecoveriesWithOptions(InstanceId: string, request: $_model.ListShardRecoveriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListShardRecoveriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.activeOnly)) {
      query["activeOnly"] = request.activeOnly;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListShardRecoveries",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/cat-recovery`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListShardRecoveriesResponse>(await this.callApi(params, req, runtime), new $_model.ListShardRecoveriesResponse({}));
  }

  /**
   * Queries the information about shards that are being restored or shards that are restored. By default, this operation returns only the information about shards that are being restored after you call this operation.
   * 
   * @remarks
   * > The restoration of a shard is a process of synchronizing data from a primary shard to a replica shard. After the restoration is complete, the replica shard is available for data searches.
   * 
   * @param request - ListShardRecoveriesRequest
   * @returns ListShardRecoveriesResponse
   */
  async listShardRecoveries(InstanceId: string, request: $_model.ListShardRecoveriesRequest): Promise<$_model.ListShardRecoveriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listShardRecoveriesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取跨集群索引仓库列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSnapshotReposByInstanceIdResponse
   */
  async listSnapshotReposByInstanceIdWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSnapshotReposByInstanceIdResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSnapshotReposByInstanceId",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/snapshot-repos`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSnapshotReposByInstanceIdResponse>(await this.callApi(params, req, runtime), new $_model.ListSnapshotReposByInstanceIdResponse({}));
  }

  /**
   * 获取跨集群索引仓库列表
   * @returns ListSnapshotReposByInstanceIdResponse
   */
  async listSnapshotReposByInstanceId(InstanceId: string): Promise<$_model.ListSnapshotReposByInstanceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSnapshotReposByInstanceIdWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 查看资源和标签关系
   * 
   * @param request - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.page)) {
      query["Page"] = request.page;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.size)) {
      query["Size"] = request.size;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * 查看资源和标签关系
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
   * 查看所有已常见的标签
   * 
   * @param request - ListTagsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagsResponse
   */
  async listTagsWithOptions(request: $_model.ListTagsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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
      action: "ListTags",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/tags/all-tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagsResponse>(await this.callApi(params, req, runtime), new $_model.ListTagsResponse({}));
  }

  /**
   * 查看所有已常见的标签
   * 
   * @param request - ListTagsRequest
   * @returns ListTagsResponse
   */
  async listTags(request: $_model.ListTagsRequest): Promise<$_model.ListTagsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the statuses of endpoints in the virtual private cloud (VPC) within the Elasticsearch service account.
   * 
   * @param request - ListVpcEndpointsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcEndpointsResponse
   */
  async listVpcEndpointsWithOptions(InstanceId: string, request: $_model.ListVpcEndpointsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListVpcEndpointsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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
      action: "ListVpcEndpoints",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/vpc-endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVpcEndpointsResponse>(await this.callApi(params, req, runtime), new $_model.ListVpcEndpointsResponse({}));
  }

  /**
   * Queries the statuses of endpoints in the virtual private cloud (VPC) within the Elasticsearch service account.
   * 
   * @param request - ListVpcEndpointsRequest
   * @returns ListVpcEndpointsResponse
   */
  async listVpcEndpoints(InstanceId: string, request: $_model.ListVpcEndpointsRequest): Promise<$_model.ListVpcEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVpcEndpointsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call the MigrateToOtherZone to migrate the nodes in the specified zone to the destination zone.
   * 
   * @remarks
   * If the specifications in your zone are insufficient, you can upgrade your instance to nodes in another zone. Before calling this interface, you must ensure that:
   * *   The error message returned because the current account is in a zone that has sufficient resources.
   *     After migrating nodes with current specifications to another zone, you need to manually [upgrade cluster](https://help.aliyun.com/document_detail/96650.html) because the cluster will not be upgraded during the migration process. Therefore, select a zone with sufficient resources to avoid cluster upgrade failure. We recommend that you choose new zones that are in lower alphabetical order. For example, for cn-hangzhou-e and cn-hangzhou-h zones, choose cn-hangzhou-h first.
   * *   The cluster is in the healthy state.
   *     Can be passed`  GET _cat/health?v  `command to view the health status of the cluster.
   * 
   * @param request - MigrateToOtherZoneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MigrateToOtherZoneResponse
   */
  async migrateToOtherZoneWithOptions(InstanceId: string, request: $_model.MigrateToOtherZoneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MigrateToOtherZoneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "MigrateToOtherZone",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/migrate-zones`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MigrateToOtherZoneResponse>(await this.callApi(params, req, runtime), new $_model.MigrateToOtherZoneResponse({}));
  }

  /**
   * Call the MigrateToOtherZone to migrate the nodes in the specified zone to the destination zone.
   * 
   * @remarks
   * If the specifications in your zone are insufficient, you can upgrade your instance to nodes in another zone. Before calling this interface, you must ensure that:
   * *   The error message returned because the current account is in a zone that has sufficient resources.
   *     After migrating nodes with current specifications to another zone, you need to manually [upgrade cluster](https://help.aliyun.com/document_detail/96650.html) because the cluster will not be upgraded during the migration process. Therefore, select a zone with sufficient resources to avoid cluster upgrade failure. We recommend that you choose new zones that are in lower alphabetical order. For example, for cn-hangzhou-e and cn-hangzhou-h zones, choose cn-hangzhou-h first.
   * *   The cluster is in the healthy state.
   *     Can be passed`  GET _cat/health?v  `command to view the health status of the cluster.
   * 
   * @param request - MigrateToOtherZoneRequest
   * @returns MigrateToOtherZoneResponse
   */
  async migrateToOtherZone(InstanceId: string, request: $_model.MigrateToOtherZoneRequest): Promise<$_model.MigrateToOtherZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.migrateToOtherZoneWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Changes the Elastic Compute Service (ECS) instances on which a shipper is installed.
   * 
   * @param request - ModifyDeployMachineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDeployMachineResponse
   */
  async modifyDeployMachineWithOptions(ResId: string, request: $_model.ModifyDeployMachineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyDeployMachineResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyDeployMachine",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/collectors/${$dara.URL.percentEncode(ResId)}/actions/modify-deploy-machines`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyDeployMachineResponse>(await this.callApi(params, req, runtime), new $_model.ModifyDeployMachineResponse({}));
  }

  /**
   * Changes the Elastic Compute Service (ECS) instances on which a shipper is installed.
   * 
   * @param request - ModifyDeployMachineRequest
   * @returns ModifyDeployMachineResponse
   */
  async modifyDeployMachine(ResId: string, request: $_model.ModifyDeployMachineRequest): Promise<$_model.ModifyDeployMachineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDeployMachineWithOptions(ResId, request, headers, runtime);
  }

  /**
   * @param request - ModifyElastictaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyElastictaskResponse
   */
  async modifyElastictaskWithOptions(InstanceId: string, request: $_model.ModifyElastictaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyElastictaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyElastictask",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/elastic-task`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyElastictaskResponse>(await this.callApi(params, req, runtime), new $_model.ModifyElastictaskResponse({}));
  }

  /**
   * @param request - ModifyElastictaskRequest
   * @returns ModifyElastictaskResponse
   */
  async modifyElastictask(InstanceId: string, request: $_model.ModifyElastictaskRequest): Promise<$_model.ModifyElastictaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyElastictaskWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * ## RequestBody
   * You must also specify the following parameters in the RequestBody parameter to specify the maintenance window information.  
   * | Parameter | Type | Required | Example | Description |
   * | --------- | ---- | -------- | ------- | ----------- |
   * | maintainStartTime | String | No | 02:00Z | The start time of the maintenance window. Specify the time in the HH:mmZ format. The time must be in UTC. |
   * | maintainEndTime | String | No | 06:00Z | The end time of the maintenance window. Specify the time in the HH:mmZ format. The time must be displayed in UTC. |
   * | openMaintainTime | boolean | Yes | true | Specifies whether to enable the maintenance window feature. Only **true** is supported, indicating that the feature is enabled. |
   * Examples: 
   * ```
   * {
   *     "openMaintainTime": true,
   *     "maintainStartTime": "03:00Z",
   *     "maintainEndTime": "04:00Z"
   * }
   * ```
   * 
   * @remarks
   * es-cn-n6w1o1x0w001c\\*\\*\\*\\*
   * 
   * @param request - ModifyInstanceMaintainTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyInstanceMaintainTimeResponse
   */
  async modifyInstanceMaintainTimeWithOptions(InstanceId: string, request: $_model.ModifyInstanceMaintainTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyInstanceMaintainTimeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyInstanceMaintainTime",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/modify-maintaintime`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyInstanceMaintainTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyInstanceMaintainTimeResponse({}));
  }

  /**
   * ## RequestBody
   * You must also specify the following parameters in the RequestBody parameter to specify the maintenance window information.  
   * | Parameter | Type | Required | Example | Description |
   * | --------- | ---- | -------- | ------- | ----------- |
   * | maintainStartTime | String | No | 02:00Z | The start time of the maintenance window. Specify the time in the HH:mmZ format. The time must be in UTC. |
   * | maintainEndTime | String | No | 06:00Z | The end time of the maintenance window. Specify the time in the HH:mmZ format. The time must be displayed in UTC. |
   * | openMaintainTime | boolean | Yes | true | Specifies whether to enable the maintenance window feature. Only **true** is supported, indicating that the feature is enabled. |
   * Examples: 
   * ```
   * {
   *     "openMaintainTime": true,
   *     "maintainStartTime": "03:00Z",
   *     "maintainEndTime": "04:00Z"
   * }
   * ```
   * 
   * @remarks
   * es-cn-n6w1o1x0w001c\\*\\*\\*\\*
   * 
   * @param request - ModifyInstanceMaintainTimeRequest
   * @returns ModifyInstanceMaintainTimeResponse
   */
  async modifyInstanceMaintainTime(InstanceId: string, request: $_model.ModifyInstanceMaintainTimeRequest): Promise<$_model.ModifyInstanceMaintainTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyInstanceMaintainTimeWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * >  If you want to add an IP address whitelist, you can set the modifyMode parameter only to Cover. If you set this parameter to Delete or Append, you can only update an IP address whitelist.
   * *   If you set the modifyMode parameter to Cover and leave the ips parameter empty, the system deletes the specified whitelist. If the whitelist specified by using the groupName parameter does not exist, the system creates such a whitelist.
   * *   If you set the modifyMode parameter to Delete, at least one IP address must be retained for the specified whitelist.
   * *   If you set the modifyMode parameter to Append, you must make sure that the specified whitelist exists. Otherwise, the system reports the NotFound error.
   * 
   * @remarks
   * The ID of the cluster.
   * 
   * @param request - ModifyWhiteIpsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyWhiteIpsResponse
   */
  async modifyWhiteIpsWithOptions(InstanceId: string, request: $_model.ModifyWhiteIpsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyWhiteIpsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.modifyMode)) {
      body["modifyMode"] = request.modifyMode;
    }

    if (!$dara.isNull(request.networkType)) {
      body["networkType"] = request.networkType;
    }

    if (!$dara.isNull(request.nodeType)) {
      body["nodeType"] = request.nodeType;
    }

    if (!$dara.isNull(request.whiteIpGroup)) {
      body["whiteIpGroup"] = request.whiteIpGroup;
    }

    if (!$dara.isNull(request.whiteIpList)) {
      body["whiteIpList"] = request.whiteIpList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyWhiteIps",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/modify-white-ips`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyWhiteIpsResponse>(await this.callApi(params, req, runtime), new $_model.ModifyWhiteIpsResponse({}));
  }

  /**
   * >  If you want to add an IP address whitelist, you can set the modifyMode parameter only to Cover. If you set this parameter to Delete or Append, you can only update an IP address whitelist.
   * *   If you set the modifyMode parameter to Cover and leave the ips parameter empty, the system deletes the specified whitelist. If the whitelist specified by using the groupName parameter does not exist, the system creates such a whitelist.
   * *   If you set the modifyMode parameter to Delete, at least one IP address must be retained for the specified whitelist.
   * *   If you set the modifyMode parameter to Append, you must make sure that the specified whitelist exists. Otherwise, the system reports the NotFound error.
   * 
   * @remarks
   * The ID of the cluster.
   * 
   * @param request - ModifyWhiteIpsRequest
   * @returns ModifyWhiteIpsResponse
   */
  async modifyWhiteIps(InstanceId: string, request: $_model.ModifyWhiteIpsRequest): Promise<$_model.ModifyWhiteIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyWhiteIpsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Migrates an Elasticsearch cluster to a specified resource group.
   * 
   * @param request - MoveResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(InstanceId: string, request: $_model.MoveResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MoveResourceGroupResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "MoveResourceGroup",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/resourcegroup`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.MoveResourceGroupResponse({}));
  }

  /**
   * Migrates an Elasticsearch cluster to a specified resource group.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(InstanceId: string, request: $_model.MoveResourceGroupRequest): Promise<$_model.MoveResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.moveResourceGroupWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - OpenDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenDiagnosisResponse
   */
  async openDiagnosisWithOptions(InstanceId: string, request: $_model.OpenDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OpenDiagnosisResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenDiagnosis",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/diagnosis/instances/${$dara.URL.percentEncode(InstanceId)}/actions/open-diagnosis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.OpenDiagnosisResponse({}));
  }

  /**
   * @param request - OpenDiagnosisRequest
   * @returns OpenDiagnosisResponse
   */
  async openDiagnosis(InstanceId: string, request: $_model.OpenDiagnosisRequest): Promise<$_model.OpenDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openDiagnosisWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @remarks
   * >  To ensure data security, we recommend that you enable HTTPS.
   * 
   * @param request - OpenHttpsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenHttpsResponse
   */
  async openHttpsWithOptions(InstanceId: string, request: $_model.OpenHttpsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OpenHttpsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenHttps",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/open-https`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenHttpsResponse>(await this.callApi(params, req, runtime), new $_model.OpenHttpsResponse({}));
  }

  /**
   * @remarks
   * >  To ensure data security, we recommend that you enable HTTPS.
   * 
   * @param request - OpenHttpsRequest
   * @returns OpenHttpsResponse
   */
  async openHttps(InstanceId: string, request: $_model.OpenHttpsRequest): Promise<$_model.OpenHttpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openHttpsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * PostEmonTryAlarmRule
   * 
   * @param request - PostEmonTryAlarmRuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PostEmonTryAlarmRuleResponse
   */
  async postEmonTryAlarmRuleWithOptions(ProjectId: string, AlarmGroupId: string, request: $_model.PostEmonTryAlarmRuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PostEmonTryAlarmRuleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.body)) {
      query["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PostEmonTryAlarmRule",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/emon/projects/${$dara.URL.percentEncode(ProjectId)}/alarm-groups/${$dara.URL.percentEncode(AlarmGroupId)}/alarm-rules/_test`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PostEmonTryAlarmRuleResponse>(await this.callApi(params, req, runtime), new $_model.PostEmonTryAlarmRuleResponse({}));
  }

  /**
   * PostEmonTryAlarmRule
   * 
   * @param request - PostEmonTryAlarmRuleRequest
   * @returns PostEmonTryAlarmRuleResponse
   */
  async postEmonTryAlarmRule(ProjectId: string, AlarmGroupId: string, request: $_model.PostEmonTryAlarmRuleRequest): Promise<$_model.PostEmonTryAlarmRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.postEmonTryAlarmRuleWithOptions(ProjectId, AlarmGroupId, request, headers, runtime);
  }

  /**
   * @param request - RecommendTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecommendTemplatesResponse
   */
  async recommendTemplatesWithOptions(InstanceId: string, request: $_model.RecommendTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RecommendTemplatesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.usageScenario)) {
      query["usageScenario"] = request.usageScenario;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecommendTemplates",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/recommended-templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecommendTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.RecommendTemplatesResponse({}));
  }

  /**
   * @param request - RecommendTemplatesRequest
   * @returns RecommendTemplatesResponse
   */
  async recommendTemplates(InstanceId: string, request: $_model.RecommendTemplatesRequest): Promise<$_model.RecommendTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recommendTemplatesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Installs a shipper that failed to be installed when you create the shipper.
   * 
   * @param request - ReinstallCollectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReinstallCollectorResponse
   */
  async reinstallCollectorWithOptions(ResId: string, request: $_model.ReinstallCollectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReinstallCollectorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "ReinstallCollector",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/collectors/${$dara.URL.percentEncode(ResId)}/actions/reinstall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReinstallCollectorResponse>(await this.callApi(params, req, runtime), new $_model.ReinstallCollectorResponse({}));
  }

  /**
   * Installs a shipper that failed to be installed when you create the shipper.
   * 
   * @param request - ReinstallCollectorRequest
   * @returns ReinstallCollectorResponse
   */
  async reinstallCollector(ResId: string, request: $_model.ReinstallCollectorRequest): Promise<$_model.ReinstallCollectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reinstallCollectorWithOptions(ResId, request, headers, runtime);
  }

  /**
   * RemoveApm
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveApmResponse
   */
  async removeApmWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveApmResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveApm",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/apm/${$dara.URL.percentEncode(instanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveApmResponse>(await this.callApi(params, req, runtime), new $_model.RemoveApmResponse({}));
  }

  /**
   * RemoveApm
   * @returns RemoveApmResponse
   */
  async removeApm(instanceId: string): Promise<$_model.RemoveApmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeApmWithOptions(instanceId, headers, runtime);
  }

  /**
   * Call RenewInstance to renew a subscription instance.
   * 
   * @param request - RenewInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewInstanceResponse
   */
  async renewInstanceWithOptions(InstanceId: string, request: $_model.RenewInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenewInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewInstance",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/renew`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RenewInstanceResponse({}));
  }

  /**
   * Call RenewInstance to renew a subscription instance.
   * 
   * @param request - RenewInstanceRequest
   * @returns RenewInstanceResponse
   */
  async renewInstance(InstanceId: string, request: $_model.RenewInstanceRequest): Promise<$_model.RenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Renews a Logstash cluster.
   * 
   * @param request - RenewLogstashRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenewLogstashResponse
   */
  async renewLogstashWithOptions(InstanceId: string, request: $_model.RenewLogstashRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenewLogstashResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RenewLogstash",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/actions/renew`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenewLogstashResponse>(await this.callApi(params, req, runtime), new $_model.RenewLogstashResponse({}));
  }

  /**
   * Renews a Logstash cluster.
   * 
   * @param request - RenewLogstashRequest
   * @returns RenewLogstashResponse
   */
  async renewLogstash(InstanceId: string, request: $_model.RenewLogstashRequest): Promise<$_model.RenewLogstashResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewLogstashWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Restarts a shipper.
   * 
   * @param request - RestartCollectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartCollectorResponse
   */
  async restartCollectorWithOptions(ResId: string, request: $_model.RestartCollectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartCollectorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartCollector",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/collectors/${$dara.URL.percentEncode(ResId)}/actions/restart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartCollectorResponse>(await this.callApi(params, req, runtime), new $_model.RestartCollectorResponse({}));
  }

  /**
   * Restarts a shipper.
   * 
   * @param request - RestartCollectorRequest
   * @returns RestartCollectorResponse
   */
  async restartCollector(ResId: string, request: $_model.RestartCollectorRequest): Promise<$_model.RestartCollectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartCollectorWithOptions(ResId, request, headers, runtime);
  }

  /**
   * You can call this operation to restart a specified Elasticsearch instance.
   * 
   * @remarks
   * >  After the instance is restarted, the instance enters the activating state. After the instance is restarted, its status changes to active. Alibaba Cloud Elasticsearch supports restarting a single node. Restarting a node can be divided into normal restart and blue-green restart.
   * 
   * @param request - RestartInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartInstanceResponse
   */
  async restartInstanceWithOptions(InstanceId: string, request: $_model.RestartInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartInstance",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/restart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.RestartInstanceResponse({}));
  }

  /**
   * You can call this operation to restart a specified Elasticsearch instance.
   * 
   * @remarks
   * >  After the instance is restarted, the instance enters the activating state. After the instance is restarted, its status changes to active. Alibaba Cloud Elasticsearch supports restarting a single node. Restarting a node can be divided into normal restart and blue-green restart.
   * 
   * @param request - RestartInstanceRequest
   * @returns RestartInstanceResponse
   */
  async restartInstance(InstanceId: string, request: $_model.RestartInstanceRequest): Promise<$_model.RestartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 重启Logstash集群
   * 
   * @param request - RestartLogstashRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartLogstashResponse
   */
  async restartLogstashWithOptions(InstanceId: string, request: $_model.RestartLogstashRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RestartLogstashResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.batchCount)) {
      body["batchCount"] = request.batchCount;
    }

    if (!$dara.isNull(request.blueGreenDep)) {
      body["blueGreenDep"] = request.blueGreenDep;
    }

    if (!$dara.isNull(request.nodeTypes)) {
      body["nodeTypes"] = request.nodeTypes;
    }

    if (!$dara.isNull(request.nodes)) {
      body["nodes"] = request.nodes;
    }

    if (!$dara.isNull(request.restartType)) {
      body["restartType"] = request.restartType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartLogstash",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/actions/restart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RestartLogstashResponse>(await this.callApi(params, req, runtime), new $_model.RestartLogstashResponse({}));
  }

  /**
   * 重启Logstash集群
   * 
   * @param request - RestartLogstashRequest
   * @returns RestartLogstashResponse
   */
  async restartLogstash(InstanceId: string, request: $_model.RestartLogstashRequest): Promise<$_model.RestartLogstashResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartLogstashWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - ResumeElasticsearchTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeElasticsearchTaskResponse
   */
  async resumeElasticsearchTaskWithOptions(InstanceId: string, request: $_model.ResumeElasticsearchTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeElasticsearchTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeElasticsearchTask",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/resume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeElasticsearchTaskResponse>(await this.callApi(params, req, runtime), new $_model.ResumeElasticsearchTaskResponse({}));
  }

  /**
   * @param request - ResumeElasticsearchTaskRequest
   * @returns ResumeElasticsearchTaskResponse
   */
  async resumeElasticsearchTask(InstanceId: string, request: $_model.ResumeElasticsearchTaskRequest): Promise<$_model.ResumeElasticsearchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeElasticsearchTaskWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Resumes a change task of a Logstash cluster. After the task is resumed, the Logstash cluster is in the activating state.
   * 
   * @param request - ResumeLogstashTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeLogstashTaskResponse
   */
  async resumeLogstashTaskWithOptions(InstanceId: string, request: $_model.ResumeLogstashTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeLogstashTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeLogstashTask",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/actions/resume`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeLogstashTaskResponse>(await this.callApi(params, req, runtime), new $_model.ResumeLogstashTaskResponse({}));
  }

  /**
   * Resumes a change task of a Logstash cluster. After the task is resumed, the Logstash cluster is in the activating state.
   * 
   * @param request - ResumeLogstashTaskRequest
   * @returns ResumeLogstashTaskResponse
   */
  async resumeLogstashTask(InstanceId: string, request: $_model.ResumeLogstashTaskRequest): Promise<$_model.ResumeLogstashTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeLogstashTaskWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 滚动数据流，生成新索引
   * 
   * @param request - RolloverDataStreamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RolloverDataStreamResponse
   */
  async rolloverDataStreamWithOptions(InstanceId: string, DataStream: string, request: $_model.RolloverDataStreamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RolloverDataStreamResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RolloverDataStream",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/data-streams/${$dara.URL.percentEncode(DataStream)}/rollover`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RolloverDataStreamResponse>(await this.callApi(params, req, runtime), new $_model.RolloverDataStreamResponse({}));
  }

  /**
   * 滚动数据流，生成新索引
   * 
   * @param request - RolloverDataStreamRequest
   * @returns RolloverDataStreamResponse
   */
  async rolloverDataStream(InstanceId: string, DataStream: string, request: $_model.RolloverDataStreamRequest): Promise<$_model.RolloverDataStreamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rolloverDataStreamWithOptions(InstanceId, DataStream, request, headers, runtime);
  }

  /**
   * Runs pipelines in a Logstash cluster.
   * 
   * @param request - RunPipelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunPipelinesResponse
   */
  async runPipelinesWithOptions(InstanceId: string, request: $_model.RunPipelinesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunPipelinesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RunPipelines",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/pipelines/action/run`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunPipelinesResponse>(await this.callApi(params, req, runtime), new $_model.RunPipelinesResponse({}));
  }

  /**
   * Runs pipelines in a Logstash cluster.
   * 
   * @param request - RunPipelinesRequest
   * @returns RunPipelinesResponse
   */
  async runPipelines(InstanceId: string, request: $_model.RunPipelinesRequest): Promise<$_model.RunPipelinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runPipelinesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * ES集群缩节点
   * 
   * @param request - ShrinkNodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ShrinkNodeResponse
   */
  async shrinkNodeWithOptions(InstanceId: string, request: $_model.ShrinkNodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ShrinkNodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.count)) {
      query["count"] = request.count;
    }

    if (!$dara.isNull(request.ignoreStatus)) {
      query["ignoreStatus"] = request.ignoreStatus;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ShrinkNode",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/shrink`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ShrinkNodeResponse>(await this.callApi(params, req, runtime), new $_model.ShrinkNodeResponse({}));
  }

  /**
   * ES集群缩节点
   * 
   * @param request - ShrinkNodeRequest
   * @returns ShrinkNodeResponse
   */
  async shrinkNode(InstanceId: string, request: $_model.ShrinkNodeRequest): Promise<$_model.ShrinkNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.shrinkNodeWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * StartApm
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartApmResponse
   */
  async startApmWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartApmResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartApm",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/apm/${$dara.URL.percentEncode(instanceId)}/actions/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartApmResponse>(await this.callApi(params, req, runtime), new $_model.StartApmResponse({}));
  }

  /**
   * StartApm
   * @returns StartApmResponse
   */
  async startApm(instanceId: string): Promise<$_model.StartApmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startApmWithOptions(instanceId, headers, runtime);
  }

  /**
   * Starts a collector to collect data.
   * 
   * @param request - StartCollectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartCollectorResponse
   */
  async startCollectorWithOptions(ResId: string, request: $_model.StartCollectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartCollectorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartCollector",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/collectors/${$dara.URL.percentEncode(ResId)}/actions/start`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartCollectorResponse>(await this.callApi(params, req, runtime), new $_model.StartCollectorResponse({}));
  }

  /**
   * Starts a collector to collect data.
   * 
   * @param request - StartCollectorRequest
   * @returns StartCollectorResponse
   */
  async startCollector(ResId: string, request: $_model.StartCollectorRequest): Promise<$_model.StartCollectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startCollectorWithOptions(ResId, request, headers, runtime);
  }

  /**
   * StopApm
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopApmResponse
   */
  async stopApmWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopApmResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopApm",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/apm/${$dara.URL.percentEncode(instanceId)}/actions/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopApmResponse>(await this.callApi(params, req, runtime), new $_model.StopApmResponse({}));
  }

  /**
   * StopApm
   * @returns StopApmResponse
   */
  async stopApm(instanceId: string): Promise<$_model.StopApmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopApmWithOptions(instanceId, headers, runtime);
  }

  /**
   * Stops a shipper.
   * 
   * @param request - StopCollectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopCollectorResponse
   */
  async stopCollectorWithOptions(ResId: string, request: $_model.StopCollectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopCollectorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopCollector",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/collectors/${$dara.URL.percentEncode(ResId)}/actions/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopCollectorResponse>(await this.callApi(params, req, runtime), new $_model.StopCollectorResponse({}));
  }

  /**
   * Stops a shipper.
   * 
   * @param request - StopCollectorRequest
   * @returns StopCollectorResponse
   */
  async stopCollector(ResId: string, request: $_model.StopCollectorRequest): Promise<$_model.StopCollectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopCollectorWithOptions(ResId, request, headers, runtime);
  }

  /**
   * Stops pipelines in a Logstash cluster.
   * 
   * @param request - StopPipelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopPipelinesResponse
   */
  async stopPipelinesWithOptions(InstanceId: string, request: $_model.StopPipelinesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopPipelinesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopPipelines",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/pipelines/action/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopPipelinesResponse>(await this.callApi(params, req, runtime), new $_model.StopPipelinesResponse({}));
  }

  /**
   * Stops pipelines in a Logstash cluster.
   * 
   * @param request - StopPipelinesRequest
   * @returns StopPipelinesResponse
   */
  async stopPipelines(InstanceId: string, request: $_model.StopPipelinesRequest): Promise<$_model.StopPipelinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopPipelinesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * The information about the clusters and tags.
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tags)) {
      body["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/tags`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * The information about the clusters and tags.
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
   * 缩节点，数据迁移
   * 
   * @param request - TransferNodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransferNodeResponse
   */
  async transferNodeWithOptions(InstanceId: string, request: $_model.TransferNodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TransferNodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransferNode",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/transfer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransferNodeResponse>(await this.callApi(params, req, runtime), new $_model.TransferNodeResponse({}));
  }

  /**
   * 缩节点，数据迁移
   * 
   * @param request - TransferNodeRequest
   * @returns TransferNodeResponse
   */
  async transferNode(InstanceId: string, request: $_model.TransferNodeRequest): Promise<$_model.TransferNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.transferNodeWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 开关ES集群及Kibana节点公私网访问
   * 
   * @param request - TriggerNetworkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerNetworkResponse
   */
  async triggerNetworkWithOptions(InstanceId: string, request: $_model.TriggerNetworkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerNetworkResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.actionType)) {
      body["actionType"] = request.actionType;
    }

    if (!$dara.isNull(request.networkType)) {
      body["networkType"] = request.networkType;
    }

    if (!$dara.isNull(request.nodeType)) {
      body["nodeType"] = request.nodeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerNetwork",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/network-trigger`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerNetworkResponse>(await this.callApi(params, req, runtime), new $_model.TriggerNetworkResponse({}));
  }

  /**
   * 开关ES集群及Kibana节点公私网访问
   * 
   * @param request - TriggerNetworkRequest
   * @returns TriggerNetworkResponse
   */
  async triggerNetwork(InstanceId: string, request: $_model.TriggerNetworkRequest): Promise<$_model.TriggerNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.triggerNetworkWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call the UninstallKibanaPlugin to uninstall the Kibana plug-in.
   * 
   * @param request - UninstallKibanaPluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallKibanaPluginResponse
   */
  async uninstallKibanaPluginWithOptions(InstanceId: string, request: $_model.UninstallKibanaPluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallKibanaPluginResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallKibanaPlugin",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/kibana-plugins/actions/uninstall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallKibanaPluginResponse>(await this.callApi(params, req, runtime), new $_model.UninstallKibanaPluginResponse({}));
  }

  /**
   * Call the UninstallKibanaPlugin to uninstall the Kibana plug-in.
   * 
   * @param request - UninstallKibanaPluginRequest
   * @returns UninstallKibanaPluginResponse
   */
  async uninstallKibanaPlugin(InstanceId: string, request: $_model.UninstallKibanaPluginRequest): Promise<$_model.UninstallKibanaPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uninstallKibanaPluginWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 卸载Logstash实例已安装的插件
   * 
   * @param request - UninstallLogstashPluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallLogstashPluginResponse
   */
  async uninstallLogstashPluginWithOptions(InstanceId: string, request: $_model.UninstallLogstashPluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallLogstashPluginResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallLogstashPlugin",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/plugins/actions/uninstall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallLogstashPluginResponse>(await this.callApi(params, req, runtime), new $_model.UninstallLogstashPluginResponse({}));
  }

  /**
   * 卸载Logstash实例已安装的插件
   * 
   * @param request - UninstallLogstashPluginRequest
   * @returns UninstallLogstashPluginResponse
   */
  async uninstallLogstashPlugin(InstanceId: string, request: $_model.UninstallLogstashPluginRequest): Promise<$_model.UninstallLogstashPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uninstallLogstashPluginWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call UninstallPlugin to uninstall the preset plug-in.
   * 
   * @param request - UninstallPluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallPluginResponse
   */
  async uninstallPluginWithOptions(InstanceId: string, request: $_model.UninstallPluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UninstallPluginResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallPlugin",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/plugins/actions/uninstall`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UninstallPluginResponse>(await this.callApi(params, req, runtime), new $_model.UninstallPluginResponse({}));
  }

  /**
   * Call UninstallPlugin to uninstall the preset plug-in.
   * 
   * @param request - UninstallPluginRequest
   * @returns UninstallPluginResponse
   */
  async uninstallPlugin(InstanceId: string, request: $_model.UninstallPluginRequest): Promise<$_model.UninstallPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uninstallPluginWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 删除ES集群实例的用户可见标签
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   You can only delete user tags.
   * > User labels are manually added to instances by users. A system Tag is a tag that Alibaba Cloud services add to instances. System labels are divided into visible labels and invisible labels.
   * *   If you delete a resource tag relationship that is not associated with any resources, you must delete the tags.
   * 
   * @param request - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    if (!$dara.isNull(request.body)) {
      query["body"] = request.body;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/tags`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * 删除ES集群实例的用户可见标签
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * *   You can only delete user tags.
   * > User labels are manually added to instances by users. A system Tag is a tag that Alibaba Cloud services add to instances. System labels are divided into visible labels and invisible labels.
   * *   If you delete a resource tag relationship that is not associated with any resources, you must delete the tags.
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
   * 修改ES集群密码
   * 
   * @remarks
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF\\*\\*\\*\\*
   * 
   * @param request - UpdateAdminPasswordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAdminPasswordResponse
   */
  async updateAdminPasswordWithOptions(InstanceId: string, request: $_model.UpdateAdminPasswordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAdminPasswordResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.esAdminPassword)) {
      body["esAdminPassword"] = request.esAdminPassword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAdminPassword",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/admin-pwd`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAdminPasswordResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAdminPasswordResponse({}));
  }

  /**
   * 修改ES集群密码
   * 
   * @remarks
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF\\*\\*\\*\\*
   * 
   * @param request - UpdateAdminPasswordRequest
   * @returns UpdateAdminPasswordResponse
   */
  async updateAdminPassword(InstanceId: string, request: $_model.UpdateAdminPasswordRequest): Promise<$_model.UpdateAdminPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAdminPasswordWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call UpdateAdvancedSetting to change the garbage collector configuration for the specified instance.
   * 
   * @param request - UpdateAdvancedSettingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAdvancedSettingResponse
   */
  async updateAdvancedSettingWithOptions(InstanceId: string, request: $_model.UpdateAdvancedSettingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAdvancedSettingResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAdvancedSetting",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/update-advanced-setting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAdvancedSettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAdvancedSettingResponse({}));
  }

  /**
   * Call UpdateAdvancedSetting to change the garbage collector configuration for the specified instance.
   * 
   * @param request - UpdateAdvancedSettingRequest
   * @returns UpdateAdvancedSettingResponse
   */
  async updateAdvancedSetting(InstanceId: string, request: $_model.UpdateAdvancedSettingRequest): Promise<$_model.UpdateAdvancedSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAdvancedSettingWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates the dictionary file of the analysis-aliws plug-in.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   Elasticsearch V5.X clusters do not support the analysis-aliws plug-in.
   * *   If the dictionary file is stored in an Object Storage Service (OSS) bucket, you must make sure that the access control list (ACL) of the bucket is public read.
   * *   If you do not set sourceType to ORIGIN for an uploaded dictionary file, the file will be deleted after you call this operation.
   * 
   * @param request - UpdateAliwsDictRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAliwsDictResponse
   */
  async updateAliwsDictWithOptions(InstanceId: string, request: $_model.UpdateAliwsDictRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAliwsDictResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAliwsDict",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/aliws-dict`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAliwsDictResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAliwsDictResponse({}));
  }

  /**
   * Updates the dictionary file of the analysis-aliws plug-in.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   Elasticsearch V5.X clusters do not support the analysis-aliws plug-in.
   * *   If the dictionary file is stored in an Object Storage Service (OSS) bucket, you must make sure that the access control list (ACL) of the bucket is public read.
   * *   If you do not set sourceType to ORIGIN for an uploaded dictionary file, the file will be deleted after you call this operation.
   * 
   * @param request - UpdateAliwsDictRequest
   * @returns UpdateAliwsDictResponse
   */
  async updateAliwsDict(InstanceId: string, request: $_model.UpdateAliwsDictRequest): Promise<$_model.UpdateAliwsDictResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAliwsDictWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 修改APM实规格配置
   * 
   * @param request - UpdateApmRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApmResponse
   */
  async updateApmWithOptions(instanceId: string, request: $_model.UpdateApmRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.outputES)) {
      body["outputES"] = request.outputES;
    }

    if (!$dara.isNull(request.outputESPassword)) {
      body["outputESPassword"] = request.outputESPassword;
    }

    if (!$dara.isNull(request.outputESUserName)) {
      body["outputESUserName"] = request.outputESUserName;
    }

    if (!$dara.isNull(request.token)) {
      body["token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApm",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/apm/${$dara.URL.percentEncode(instanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApmResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApmResponse({}));
  }

  /**
   * 修改APM实规格配置
   * 
   * @param request - UpdateApmRequest
   * @returns UpdateApmResponse
   */
  async updateApm(instanceId: string, request: $_model.UpdateApmRequest): Promise<$_model.UpdateApmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApmWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * 修改ES实例访问黑名单，已废弃
   * 
   * @deprecated OpenAPI UpdateBlackIps is deprecated
   * 
   * @param request - UpdateBlackIpsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBlackIpsResponse
   */
  async updateBlackIpsWithOptions(InstanceId: string, request: $_model.UpdateBlackIpsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBlackIpsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBlackIps",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/black-ips`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBlackIpsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBlackIpsResponse({}));
  }

  /**
   * 修改ES实例访问黑名单，已废弃
   * 
   * @deprecated OpenAPI UpdateBlackIps is deprecated
   * 
   * @param request - UpdateBlackIpsRequest
   * @returns UpdateBlackIpsResponse
   */
  // Deprecated
  async updateBlackIps(InstanceId: string, request: $_model.UpdateBlackIpsRequest): Promise<$_model.UpdateBlackIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateBlackIpsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates the configurations of a shipper.
   * 
   * @param request - UpdateCollectorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCollectorResponse
   */
  async updateCollectorWithOptions(ResId: string, request: $_model.UpdateCollectorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCollectorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCollector",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/collectors/${$dara.URL.percentEncode(ResId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCollectorResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCollectorResponse({}));
  }

  /**
   * Updates the configurations of a shipper.
   * 
   * @param request - UpdateCollectorRequest
   * @returns UpdateCollectorResponse
   */
  async updateCollector(ResId: string, request: $_model.UpdateCollectorRequest): Promise<$_model.UpdateCollectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCollectorWithOptions(ResId, request, headers, runtime);
  }

  /**
   * Changes the name of a shipper.
   * 
   * @param request - UpdateCollectorNameRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCollectorNameResponse
   */
  async updateCollectorNameWithOptions(ResId: string, request: $_model.UpdateCollectorNameRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateCollectorNameResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCollectorName",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/collectors/${$dara.URL.percentEncode(ResId)}/actions/rename`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateCollectorNameResponse>(await this.callApi(params, req, runtime), new $_model.UpdateCollectorNameResponse({}));
  }

  /**
   * Changes the name of a shipper.
   * 
   * @param request - UpdateCollectorNameRequest
   * @returns UpdateCollectorNameResponse
   */
  async updateCollectorName(ResId: string, request: $_model.UpdateCollectorNameRequest): Promise<$_model.UpdateCollectorNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCollectorNameWithOptions(ResId, request, headers, runtime);
  }

  /**
   * 修改ES集群动态索引
   * 
   * @param request - UpdateComponentIndexRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateComponentIndexResponse
   */
  async updateComponentIndexWithOptions(InstanceId: string, name: string, request: $_model.UpdateComponentIndexRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateComponentIndexResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.meta)) {
      body["_meta"] = request.meta;
    }

    if (!$dara.isNull(request.template)) {
      body["template"] = request.template;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateComponentIndex",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/component-index/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateComponentIndexResponse>(await this.callApi(params, req, runtime), new $_model.UpdateComponentIndexResponse({}));
  }

  /**
   * 修改ES集群动态索引
   * 
   * @param request - UpdateComponentIndexRequest
   * @returns UpdateComponentIndexResponse
   */
  async updateComponentIndex(InstanceId: string, name: string, request: $_model.UpdateComponentIndexRequest): Promise<$_model.UpdateComponentIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateComponentIndexWithOptions(InstanceId, name, request, headers, runtime);
  }

  /**
   * 修改elasticsearch实例名称名称
   * 
   * @param request - UpdateDescriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDescriptionResponse
   */
  async updateDescriptionWithOptions(InstanceId: string, request: $_model.UpdateDescriptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDescriptionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDescription",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/description`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDescriptionResponse({}));
  }

  /**
   * 修改elasticsearch实例名称名称
   * 
   * @param request - UpdateDescriptionRequest
   * @returns UpdateDescriptionResponse
   */
  async updateDescription(InstanceId: string, request: $_model.UpdateDescriptionRequest): Promise<$_model.UpdateDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDescriptionWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call UpdateDiagnosisSettings to update the instance of intelligent operation&maintenance (O&M) scene settings.
   * 
   * @param request - UpdateDiagnosisSettingsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDiagnosisSettingsResponse
   */
  async updateDiagnosisSettingsWithOptions(InstanceId: string, request: $_model.UpdateDiagnosisSettingsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDiagnosisSettingsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDiagnosisSettings",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/diagnosis/instances/${$dara.URL.percentEncode(InstanceId)}/settings`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDiagnosisSettingsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDiagnosisSettingsResponse({}));
  }

  /**
   * Call UpdateDiagnosisSettings to update the instance of intelligent operation&maintenance (O&M) scene settings.
   * 
   * @param request - UpdateDiagnosisSettingsRequest
   * @returns UpdateDiagnosisSettingsResponse
   */
  async updateDiagnosisSettings(InstanceId: string, request: $_model.UpdateDiagnosisSettingsRequest): Promise<$_model.UpdateDiagnosisSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDiagnosisSettingsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates a dictionary of an Elasticsearch cluster.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If the dictionary file is stored in an Object Storage Service (OSS) bucket, you must make sure that the access control list (ACL) of the bucket is public read.
   * *   If you do not set sourceType to ORIGIN for an uploaded dictionary file, the file will be deleted after you call this operation.
   * 
   * @param request - UpdateDictRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDictResponse
   */
  async updateDictWithOptions(InstanceId: string, request: $_model.UpdateDictRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDictResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDict",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/dict`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDictResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDictResponse({}));
  }

  /**
   * Updates a dictionary of an Elasticsearch cluster.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If the dictionary file is stored in an Object Storage Service (OSS) bucket, you must make sure that the access control list (ACL) of the bucket is public read.
   * *   If you do not set sourceType to ORIGIN for an uploaded dictionary file, the file will be deleted after you call this operation.
   * 
   * @param request - UpdateDictRequest
   * @returns UpdateDictResponse
   */
  async updateDict(InstanceId: string, request: $_model.UpdateDictRequest): Promise<$_model.UpdateDictResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDictWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 修改集群动态配置
   * 
   * @param request - UpdateDynamicSettingsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDynamicSettingsResponse
   */
  async updateDynamicSettingsWithOptions(InstanceId: string, request: $_model.UpdateDynamicSettingsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDynamicSettingsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.mode)) {
      query["mode"] = request.mode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDynamicSettings",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/dynamic-settings`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDynamicSettingsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDynamicSettingsResponse({}));
  }

  /**
   * 修改集群动态配置
   * 
   * @param request - UpdateDynamicSettingsRequest
   * @returns UpdateDynamicSettingsResponse
   */
  async updateDynamicSettings(InstanceId: string, request: $_model.UpdateDynamicSettingsRequest): Promise<$_model.UpdateDynamicSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDynamicSettingsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - UpdateExtendConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExtendConfigResponse
   */
  async updateExtendConfigWithOptions(InstanceId: string, request: $_model.UpdateExtendConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExtendConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExtendConfig",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/extend-configs/actions/update`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExtendConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExtendConfigResponse({}));
  }

  /**
   * @param request - UpdateExtendConfigRequest
   * @returns UpdateExtendConfigResponse
   */
  async updateExtendConfig(InstanceId: string, request: $_model.UpdateExtendConfigRequest): Promise<$_model.UpdateExtendConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExtendConfigWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates the driver files of a Logstash cluster.
   * 
   * @remarks
   * When you call this operation, take note of the following items: You can call this operation only to delete the driver files that are uploaded to a Logstash cluster in the Alibaba Cloud Management Console. You can add or modify driver files only in the Alibaba Cloud Management Console.
   * 
   * @param request - UpdateExtendfilesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExtendfilesResponse
   */
  async updateExtendfilesWithOptions(InstanceId: string, request: $_model.UpdateExtendfilesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExtendfilesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExtendfiles",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/extendfiles`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExtendfilesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExtendfilesResponse({}));
  }

  /**
   * Updates the driver files of a Logstash cluster.
   * 
   * @remarks
   * When you call this operation, take note of the following items: You can call this operation only to delete the driver files that are uploaded to a Logstash cluster in the Alibaba Cloud Management Console. You can add or modify driver files only in the Alibaba Cloud Management Console.
   * 
   * @param request - UpdateExtendfilesRequest
   * @returns UpdateExtendfilesResponse
   */
  async updateExtendfiles(InstanceId: string, request: $_model.UpdateExtendfilesRequest): Promise<$_model.UpdateExtendfilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExtendfilesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Performs a rolling update for the IK dictionaries of an Elasticsearch cluster.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If the dictionary file is stored in an Object Storage Service (OSS) bucket, you must make sure that the access control list (ACL) of the bucket is public read.
   * *   If you do not set sourceType to ORIGIN for an uploaded dictionary file, the file will be deleted after you call this operation.
   * 
   * @param request - UpdateHotIkDictsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateHotIkDictsResponse
   */
  async updateHotIkDictsWithOptions(InstanceId: string, request: $_model.UpdateHotIkDictsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateHotIkDictsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateHotIkDicts",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/ik-hot-dict`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateHotIkDictsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateHotIkDictsResponse({}));
  }

  /**
   * Performs a rolling update for the IK dictionaries of an Elasticsearch cluster.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If the dictionary file is stored in an Object Storage Service (OSS) bucket, you must make sure that the access control list (ACL) of the bucket is public read.
   * *   If you do not set sourceType to ORIGIN for an uploaded dictionary file, the file will be deleted after you call this operation.
   * 
   * @param request - UpdateHotIkDictsRequest
   * @returns UpdateHotIkDictsResponse
   */
  async updateHotIkDicts(InstanceId: string, request: $_model.UpdateHotIkDictsRequest): Promise<$_model.UpdateHotIkDictsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHotIkDictsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 修改ES集群索引生命周期策略
   * 
   * @param request - UpdateILMPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateILMPolicyResponse
   */
  async updateILMPolicyWithOptions(InstanceId: string, PolicyName: string, request: $_model.UpdateILMPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateILMPolicyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateILMPolicy",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/ilm-policies/${$dara.URL.percentEncode(PolicyName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateILMPolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateILMPolicyResponse({}));
  }

  /**
   * 修改ES集群索引生命周期策略
   * 
   * @param request - UpdateILMPolicyRequest
   * @returns UpdateILMPolicyResponse
   */
  async updateILMPolicy(InstanceId: string, PolicyName: string, request: $_model.UpdateILMPolicyRequest): Promise<$_model.UpdateILMPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateILMPolicyWithOptions(InstanceId, PolicyName, request, headers, runtime);
  }

  /**
   * 修改ES集群索引模版配置
   * 
   * @param request - UpdateIndexTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateIndexTemplateResponse
   */
  async updateIndexTemplateWithOptions(InstanceId: string, IndexTemplate: string, request: $_model.UpdateIndexTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateIndexTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateIndexTemplate",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/index-templates/${$dara.URL.percentEncode(IndexTemplate)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateIndexTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateIndexTemplateResponse({}));
  }

  /**
   * 修改ES集群索引模版配置
   * 
   * @param request - UpdateIndexTemplateRequest
   * @returns UpdateIndexTemplateResponse
   */
  async updateIndexTemplate(InstanceId: string, IndexTemplate: string, request: $_model.UpdateIndexTemplateRequest): Promise<$_model.UpdateIndexTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIndexTemplateWithOptions(InstanceId, IndexTemplate, request, headers, runtime);
  }

  /**
   * 修改ES集群节点配置
   * 
   * @remarks
   * es-cn-n6w1ptcb30009\\*\\*\\*\\*
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(InstanceId: string, request: $_model.UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    if (!$dara.isNull(request.orderActionType)) {
      query["orderActionType"] = request.orderActionType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientNodeConfiguration)) {
      body["clientNodeConfiguration"] = request.clientNodeConfiguration;
    }

    if (!$dara.isNull(request.elasticDataNodeConfiguration)) {
      body["elasticDataNodeConfiguration"] = request.elasticDataNodeConfiguration;
    }

    if (!$dara.isNull(request.instanceCategory)) {
      body["instanceCategory"] = request.instanceCategory;
    }

    if (!$dara.isNull(request.kibanaConfiguration)) {
      body["kibanaConfiguration"] = request.kibanaConfiguration;
    }

    if (!$dara.isNull(request.masterConfiguration)) {
      body["masterConfiguration"] = request.masterConfiguration;
    }

    if (!$dara.isNull(request.nodeAmount)) {
      body["nodeAmount"] = request.nodeAmount;
    }

    if (!$dara.isNull(request.nodeSpec)) {
      body["nodeSpec"] = request.nodeSpec;
    }

    if (!$dara.isNull(request.warmNodeConfiguration)) {
      body["warmNodeConfiguration"] = request.warmNodeConfiguration;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * 修改ES集群节点配置
   * 
   * @remarks
   * es-cn-n6w1ptcb30009\\*\\*\\*\\*
   * 
   * @param request - UpdateInstanceRequest
   * @returns UpdateInstanceResponse
   */
  async updateInstance(InstanceId: string, request: $_model.UpdateInstanceRequest): Promise<$_model.UpdateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call UpdateInstanceChargeType to change the billing method of a pay-as-you-go instance to subscription.
   * 
   * @param request - UpdateInstanceChargeTypeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceChargeTypeResponse
   */
  async updateInstanceChargeTypeWithOptions(InstanceId: string, request: $_model.UpdateInstanceChargeTypeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceChargeTypeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceChargeType",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/convert-pay-type`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceChargeTypeResponse({}));
  }

  /**
   * Call UpdateInstanceChargeType to change the billing method of a pay-as-you-go instance to subscription.
   * 
   * @param request - UpdateInstanceChargeTypeRequest
   * @returns UpdateInstanceChargeTypeResponse
   */
  async updateInstanceChargeType(InstanceId: string, request: $_model.UpdateInstanceChargeTypeRequest): Promise<$_model.UpdateInstanceChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceChargeTypeWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call UpdateInstanceSettings to update the YML configuration of a specified instance.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * When the instance is in the activating, invalid, or inactive state, you cannot update the configuration.
   * 
   * @param request - UpdateInstanceSettingsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceSettingsResponse
   */
  async updateInstanceSettingsWithOptions(InstanceId: string, request: $_model.UpdateInstanceSettingsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceSettingsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    if (!$dara.isNull(request.updateStrategy)) {
      query["updateStrategy"] = request.updateStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceSettings",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/instance-settings`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceSettingsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceSettingsResponse({}));
  }

  /**
   * Call UpdateInstanceSettings to update the YML configuration of a specified instance.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * When the instance is in the activating, invalid, or inactive state, you cannot update the configuration.
   * 
   * @param request - UpdateInstanceSettingsRequest
   * @returns UpdateInstanceSettingsResponse
   */
  async updateInstanceSettings(InstanceId: string, request: $_model.UpdateInstanceSettingsRequest): Promise<$_model.UpdateInstanceSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceSettingsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 更新kibana私网链接
   * 
   * @param request - UpdateKibanaPvlNetworkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKibanaPvlNetworkResponse
   */
  async updateKibanaPvlNetworkWithOptions(InstanceId: string, request: $_model.UpdateKibanaPvlNetworkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKibanaPvlNetworkResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pvlId)) {
      query["pvlId"] = request.pvlId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endpointName)) {
      body["endpointName"] = request.endpointName;
    }

    if (!$dara.isNull(request.securityGroups)) {
      body["securityGroups"] = request.securityGroups;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKibanaPvlNetwork",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/update-kibana-private`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKibanaPvlNetworkResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKibanaPvlNetworkResponse({}));
  }

  /**
   * 更新kibana私网链接
   * 
   * @param request - UpdateKibanaPvlNetworkRequest
   * @returns UpdateKibanaPvlNetworkResponse
   */
  async updateKibanaPvlNetwork(InstanceId: string, request: $_model.UpdateKibanaPvlNetworkRequest): Promise<$_model.UpdateKibanaPvlNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKibanaPvlNetworkWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call UpdateKibanaSettings to modify the Kibana configuration. Currently, you can only modify the Kibana language configuration.
   * 
   * @param request - UpdateKibanaSettingsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKibanaSettingsResponse
   */
  async updateKibanaSettingsWithOptions(InstanceId: string, request: $_model.UpdateKibanaSettingsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKibanaSettingsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKibanaSettings",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/update-kibana-settings`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKibanaSettingsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKibanaSettingsResponse({}));
  }

  /**
   * Call UpdateKibanaSettings to modify the Kibana configuration. Currently, you can only modify the Kibana language configuration.
   * 
   * @param request - UpdateKibanaSettingsRequest
   * @returns UpdateKibanaSettingsResponse
   */
  async updateKibanaSettings(InstanceId: string, request: $_model.UpdateKibanaSettingsRequest): Promise<$_model.UpdateKibanaSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKibanaSettingsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates an IP address whitelist for access to the Kibana console of a specified Elasticsearch cluster.
   * 
   * @remarks
   *   Before you call this operation, you must make sure that the cluster is not in the activating, invalid, or inactive state.
   * *   You can update an IP address whitelist by using the following parameters:
   *     *   kibanaIPWhitelist
   *     *   modifyMode and whiteIpGroup
   * *   You cannot specify private IP addresses for public IP address whitelists and cannot specify public IP addresses for private IP address whitelists.
   * 
   * @param request - UpdateKibanaWhiteIpsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKibanaWhiteIpsResponse
   */
  async updateKibanaWhiteIpsWithOptions(InstanceId: string, request: $_model.UpdateKibanaWhiteIpsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKibanaWhiteIpsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["modifyMode"] = request.modifyMode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.kibanaIPWhitelist)) {
      body["kibanaIPWhitelist"] = request.kibanaIPWhitelist;
    }

    if (!$dara.isNull(request.whiteIpGroup)) {
      body["whiteIpGroup"] = request.whiteIpGroup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKibanaWhiteIps",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/kibana-white-ips`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKibanaWhiteIpsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKibanaWhiteIpsResponse({}));
  }

  /**
   * Updates an IP address whitelist for access to the Kibana console of a specified Elasticsearch cluster.
   * 
   * @remarks
   *   Before you call this operation, you must make sure that the cluster is not in the activating, invalid, or inactive state.
   * *   You can update an IP address whitelist by using the following parameters:
   *     *   kibanaIPWhitelist
   *     *   modifyMode and whiteIpGroup
   * *   You cannot specify private IP addresses for public IP address whitelists and cannot specify public IP addresses for private IP address whitelists.
   * 
   * @param request - UpdateKibanaWhiteIpsRequest
   * @returns UpdateKibanaWhiteIpsResponse
   */
  async updateKibanaWhiteIps(InstanceId: string, request: $_model.UpdateKibanaWhiteIpsRequest): Promise<$_model.UpdateKibanaWhiteIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKibanaWhiteIpsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 修改Logstash节点规格磁盘配置
   * 
   * @param request - UpdateLogstashRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogstashResponse
   */
  async updateLogstashWithOptions(InstanceId: string, request: $_model.UpdateLogstashRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLogstashResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeAmount)) {
      body["nodeAmount"] = request.nodeAmount;
    }

    if (!$dara.isNull(request.nodeSpec)) {
      body["nodeSpec"] = request.nodeSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLogstash",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLogstashResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLogstashResponse({}));
  }

  /**
   * 修改Logstash节点规格磁盘配置
   * 
   * @param request - UpdateLogstashRequest
   * @returns UpdateLogstashResponse
   */
  async updateLogstash(InstanceId: string, request: $_model.UpdateLogstashRequest): Promise<$_model.UpdateLogstashResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogstashWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Switches the billing method of a Logstash cluster from pay-as-you-go to subscription.
   * 
   * @param request - UpdateLogstashChargeTypeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogstashChargeTypeResponse
   */
  async updateLogstashChargeTypeWithOptions(InstanceId: string, request: $_model.UpdateLogstashChargeTypeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLogstashChargeTypeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLogstashChargeType",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/actions/convert-pay-type`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLogstashChargeTypeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLogstashChargeTypeResponse({}));
  }

  /**
   * Switches the billing method of a Logstash cluster from pay-as-you-go to subscription.
   * 
   * @param request - UpdateLogstashChargeTypeRequest
   * @returns UpdateLogstashChargeTypeResponse
   */
  async updateLogstashChargeType(InstanceId: string, request: $_model.UpdateLogstashChargeTypeRequest): Promise<$_model.UpdateLogstashChargeTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogstashChargeTypeWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Changes the name of a specified Logstash cluster.
   * 
   * @remarks
   * When you call this operation, take note of the following items: You cannot change the name of a cluster that is in the activating, invalid, or inactive state.
   * 
   * @param request - UpdateLogstashDescriptionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogstashDescriptionResponse
   */
  async updateLogstashDescriptionWithOptions(InstanceId: string, request: $_model.UpdateLogstashDescriptionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLogstashDescriptionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLogstashDescription",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/description`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLogstashDescriptionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLogstashDescriptionResponse({}));
  }

  /**
   * Changes the name of a specified Logstash cluster.
   * 
   * @remarks
   * When you call this operation, take note of the following items: You cannot change the name of a cluster that is in the activating, invalid, or inactive state.
   * 
   * @param request - UpdateLogstashDescriptionRequest
   * @returns UpdateLogstashDescriptionResponse
   */
  async updateLogstashDescription(InstanceId: string, request: $_model.UpdateLogstashDescriptionRequest): Promise<$_model.UpdateLogstashDescriptionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogstashDescriptionWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates the configuration of a specified Logstash cluster.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * If the instance is in the Active (activating), Invalid (invalid), and Inactive (inactive) state, the information cannot be updated.
   * 
   * @param request - UpdateLogstashSettingsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLogstashSettingsResponse
   */
  async updateLogstashSettingsWithOptions(InstanceId: string, request: $_model.UpdateLogstashSettingsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateLogstashSettingsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateLogstashSettings",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/instance-settings`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateLogstashSettingsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateLogstashSettingsResponse({}));
  }

  /**
   * Updates the configuration of a specified Logstash cluster.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * If the instance is in the Active (activating), Invalid (invalid), and Inactive (inactive) state, the information cannot be updated.
   * 
   * @param request - UpdateLogstashSettingsRequest
   * @returns UpdateLogstashSettingsResponse
   */
  async updateLogstashSettings(InstanceId: string, request: $_model.UpdateLogstashSettingsRequest): Promise<$_model.UpdateLogstashSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogstashSettingsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 修改Logstash管道配置
   * 
   * @param request - UpdatePipelineManagementConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePipelineManagementConfigResponse
   */
  async updatePipelineManagementConfigWithOptions(InstanceId: string, request: $_model.UpdatePipelineManagementConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePipelineManagementConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endpoints)) {
      body["endpoints"] = request.endpoints;
    }

    if (!$dara.isNull(request.esInstanceId)) {
      body["esInstanceId"] = request.esInstanceId;
    }

    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    if (!$dara.isNull(request.pipelineIds)) {
      body["pipelineIds"] = request.pipelineIds;
    }

    if (!$dara.isNull(request.pipelineManagementType)) {
      body["pipelineManagementType"] = request.pipelineManagementType;
    }

    if (!$dara.isNull(request.userName)) {
      body["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePipelineManagementConfig",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/pipeline-management-config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePipelineManagementConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePipelineManagementConfigResponse({}));
  }

  /**
   * 修改Logstash管道配置
   * 
   * @param request - UpdatePipelineManagementConfigRequest
   * @returns UpdatePipelineManagementConfigResponse
   */
  async updatePipelineManagementConfig(InstanceId: string, request: $_model.UpdatePipelineManagementConfigRequest): Promise<$_model.UpdatePipelineManagementConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelineManagementConfigWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates a pipeline of a Logstash cluster.
   * 
   * @param request - UpdatePipelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePipelinesResponse
   */
  async updatePipelinesWithOptions(InstanceId: string, request: $_model.UpdatePipelinesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePipelinesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.trigger)) {
      query["trigger"] = request.trigger;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePipelines",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/pipelines`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePipelinesResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePipelinesResponse({}));
  }

  /**
   * Updates a pipeline of a Logstash cluster.
   * 
   * @param request - UpdatePipelinesRequest
   * @returns UpdatePipelinesResponse
   */
  async updatePipelines(InstanceId: string, request: $_model.UpdatePipelinesRequest): Promise<$_model.UpdatePipelinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelinesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * ## RequestBody
   * | Property | Type | Required | Example | Description |
   * | -------- | ---- | -------- | ------- | ----------- |
   * | privateNetworkIpWhiteList | List<String> | No | ["0.0.XX.XX","10.2.XX.XX","192.168.XX.XX/25"] | The list of IP address whitelists. This parameter is available if whiteIpGroup is left empty. The value of this parameter updates the IP address whitelist configurations in the Default whitelist group.  
   * You cannot configure both privateNetworkIpWhiteList and whiteIpGroup. |
   * | whiteIpGroup | Object | No |  | You can update the whitelist configurations of an instance by using a whitelist group. You can update only one whitelist group.  
   * You cannot configure both privateNetworkIpWhiteList and whiteIpGroup. |
   * | └ groupName | String | No | test_group_name | The group name of the whitelist group. This parameter is required if the whiteIpGroup parameter is optional. |
   * | └ ips | List<String> | No | ["0.0.0.0", "10.2.XX.XX"] | The list of IP addresses in the whitelist group. This parameter is required if the whiteIpGroup parameter is optional. |
   * > **Notice**  The addition and deletion of whitelist groups are implemented by calling modifyMode to Cover. Delete and Append cannot add or delete whitelist groups at the same time. You can only modify the IP address list in the whitelist group. Take note of the following items: - If the modifyMode parameter is set to Cover, the whitelist group is deleted if ips is empty. If groupName is not in the list of existing whitelist group names, a whitelist group is created.
   * - If the modifyMode parameter is set to Delete, you must retain at least one IP address for the deleted ips.
   * - If the modifyMode parameter is set to Append, make sure that the whitelist group name has been created. Otherwise, the NotFound error message appears.
   * 
   * @remarks
   * >  In the following returned example, only the parameters in the returned data list are guaranteed to be included, and the parameters not mentioned are for reference only. For more information about the parameters, see [ListInstance](https://help.aliyun.com/document_detail/142230.html). You cannot force a dependency in a program to get these parameters.
   * 
   * @param request - UpdatePrivateNetworkWhiteIpsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePrivateNetworkWhiteIpsResponse
   */
  async updatePrivateNetworkWhiteIpsWithOptions(InstanceId: string, request: $_model.UpdatePrivateNetworkWhiteIpsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePrivateNetworkWhiteIpsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["modifyMode"] = request.modifyMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePrivateNetworkWhiteIps",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/private-network-white-ips`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePrivateNetworkWhiteIpsResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePrivateNetworkWhiteIpsResponse({}));
  }

  /**
   * ## RequestBody
   * | Property | Type | Required | Example | Description |
   * | -------- | ---- | -------- | ------- | ----------- |
   * | privateNetworkIpWhiteList | List<String> | No | ["0.0.XX.XX","10.2.XX.XX","192.168.XX.XX/25"] | The list of IP address whitelists. This parameter is available if whiteIpGroup is left empty. The value of this parameter updates the IP address whitelist configurations in the Default whitelist group.  
   * You cannot configure both privateNetworkIpWhiteList and whiteIpGroup. |
   * | whiteIpGroup | Object | No |  | You can update the whitelist configurations of an instance by using a whitelist group. You can update only one whitelist group.  
   * You cannot configure both privateNetworkIpWhiteList and whiteIpGroup. |
   * | └ groupName | String | No | test_group_name | The group name of the whitelist group. This parameter is required if the whiteIpGroup parameter is optional. |
   * | └ ips | List<String> | No | ["0.0.0.0", "10.2.XX.XX"] | The list of IP addresses in the whitelist group. This parameter is required if the whiteIpGroup parameter is optional. |
   * > **Notice**  The addition and deletion of whitelist groups are implemented by calling modifyMode to Cover. Delete and Append cannot add or delete whitelist groups at the same time. You can only modify the IP address list in the whitelist group. Take note of the following items: - If the modifyMode parameter is set to Cover, the whitelist group is deleted if ips is empty. If groupName is not in the list of existing whitelist group names, a whitelist group is created.
   * - If the modifyMode parameter is set to Delete, you must retain at least one IP address for the deleted ips.
   * - If the modifyMode parameter is set to Append, make sure that the whitelist group name has been created. Otherwise, the NotFound error message appears.
   * 
   * @remarks
   * >  In the following returned example, only the parameters in the returned data list are guaranteed to be included, and the parameters not mentioned are for reference only. For more information about the parameters, see [ListInstance](https://help.aliyun.com/document_detail/142230.html). You cannot force a dependency in a program to get these parameters.
   * 
   * @param request - UpdatePrivateNetworkWhiteIpsRequest
   * @returns UpdatePrivateNetworkWhiteIpsResponse
   */
  async updatePrivateNetworkWhiteIps(InstanceId: string, request: $_model.UpdatePrivateNetworkWhiteIpsRequest): Promise<$_model.UpdatePrivateNetworkWhiteIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePrivateNetworkWhiteIpsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call UpdatePublicNetwork to open or close the public network address of the specified elasticsearch instance.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * When the instance is in the activating, invalid, or inactive state, its configuration cannot be updated.
   * 
   * @param request - UpdatePublicNetworkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePublicNetworkResponse
   */
  async updatePublicNetworkWithOptions(InstanceId: string, request: $_model.UpdatePublicNetworkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePublicNetworkResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePublicNetwork",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/public-network`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePublicNetworkResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePublicNetworkResponse({}));
  }

  /**
   * Call UpdatePublicNetwork to open or close the public network address of the specified elasticsearch instance.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * When the instance is in the activating, invalid, or inactive state, its configuration cannot be updated.
   * 
   * @param request - UpdatePublicNetworkRequest
   * @returns UpdatePublicNetworkResponse
   */
  async updatePublicNetwork(InstanceId: string, request: $_model.UpdatePublicNetworkRequest): Promise<$_model.UpdatePublicNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePublicNetworkWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * ## RequestBody
   * | Property | Type | Required | Example | Description |
   * | -------- | ---- | -------- | ------- | ----------- |
   * | publicIpWhitelist | List<String> | Yes | ["0.0.0.0/0","0.0.0.0/1"] | The list of IP address whitelists. This parameter is available if whiteIpGroup is left empty. The value of this parameter updates the IP address whitelist configurations in the Default whitelist group.  
   * You cannot configure both publicIpWhitelist and whiteIpGroup. |
   * | whiteIpGroup | Object | No |  | You can update the whitelist configurations of an instance by using a whitelist group. You can update only one whitelist group.  
   * You cannot configure both publicIpWhitelist and whiteIpGroup. |
   * | └ groupName | String | No | test_group_name | The group name of the whitelist group. This parameter is required if the whiteIpGroup parameter is optional. |
   * | └ ips | List<String> | No | ["0.0.0.0", "10.2.XX.XX"] | The list of IP addresses in the whitelist group. This parameter is required if the whiteIpGroup parameter is optional. |
   * > **Notice**  The addition and deletion of whitelist groups are implemented by calling modifyMode to Cover. Delete and Append cannot add or delete whitelist groups at the same time. You can only modify the IP address list in the whitelist group. Take note of the following items: - If the modifyMode parameter is set to Cover, the whitelist group is deleted if ips is empty. If groupName is not in the list of existing whitelist group names, a whitelist group is created.
   * - If the modifyMode parameter is set to Delete, you must retain at least one IP address for the deleted ips.
   * - If the modifyMode parameter is set to Append, make sure that the whitelist group name has been created. Otherwise, the NotFound error message appears.
   * 
   * @remarks
   * >  In the following example, only the parameters in the returned data list are guaranteed to be included. The parameters that are not mentioned are for reference only. For more information about the parameters, see [ListInstance](https://help.aliyun.com/document_detail/142230.html). You cannot force a dependency in a program to get these parameters.
   * 
   * @param request - UpdatePublicWhiteIpsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePublicWhiteIpsResponse
   */
  async updatePublicWhiteIpsWithOptions(InstanceId: string, request: $_model.UpdatePublicWhiteIpsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePublicWhiteIpsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["modifyMode"] = request.modifyMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePublicWhiteIps",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/public-white-ips`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePublicWhiteIpsResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePublicWhiteIpsResponse({}));
  }

  /**
   * ## RequestBody
   * | Property | Type | Required | Example | Description |
   * | -------- | ---- | -------- | ------- | ----------- |
   * | publicIpWhitelist | List<String> | Yes | ["0.0.0.0/0","0.0.0.0/1"] | The list of IP address whitelists. This parameter is available if whiteIpGroup is left empty. The value of this parameter updates the IP address whitelist configurations in the Default whitelist group.  
   * You cannot configure both publicIpWhitelist and whiteIpGroup. |
   * | whiteIpGroup | Object | No |  | You can update the whitelist configurations of an instance by using a whitelist group. You can update only one whitelist group.  
   * You cannot configure both publicIpWhitelist and whiteIpGroup. |
   * | └ groupName | String | No | test_group_name | The group name of the whitelist group. This parameter is required if the whiteIpGroup parameter is optional. |
   * | └ ips | List<String> | No | ["0.0.0.0", "10.2.XX.XX"] | The list of IP addresses in the whitelist group. This parameter is required if the whiteIpGroup parameter is optional. |
   * > **Notice**  The addition and deletion of whitelist groups are implemented by calling modifyMode to Cover. Delete and Append cannot add or delete whitelist groups at the same time. You can only modify the IP address list in the whitelist group. Take note of the following items: - If the modifyMode parameter is set to Cover, the whitelist group is deleted if ips is empty. If groupName is not in the list of existing whitelist group names, a whitelist group is created.
   * - If the modifyMode parameter is set to Delete, you must retain at least one IP address for the deleted ips.
   * - If the modifyMode parameter is set to Append, make sure that the whitelist group name has been created. Otherwise, the NotFound error message appears.
   * 
   * @remarks
   * >  In the following example, only the parameters in the returned data list are guaranteed to be included. The parameters that are not mentioned are for reference only. For more information about the parameters, see [ListInstance](https://help.aliyun.com/document_detail/142230.html). You cannot force a dependency in a program to get these parameters.
   * 
   * @param request - UpdatePublicWhiteIpsRequest
   * @returns UpdatePublicWhiteIpsResponse
   */
  async updatePublicWhiteIps(InstanceId: string, request: $_model.UpdatePublicWhiteIpsRequest): Promise<$_model.UpdatePublicWhiteIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePublicWhiteIpsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 更改ES集群高可用策略
   * 
   * @param request - UpdateReadWritePolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateReadWritePolicyResponse
   */
  async updateReadWritePolicyWithOptions(InstanceId: string, request: $_model.UpdateReadWritePolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateReadWritePolicyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateReadWritePolicy",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/update-read-write-policy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateReadWritePolicyResponse>(await this.callApi(params, req, runtime), new $_model.UpdateReadWritePolicyResponse({}));
  }

  /**
   * 更改ES集群高可用策略
   * 
   * @param request - UpdateReadWritePolicyRequest
   * @returns UpdateReadWritePolicyResponse
   */
  async updateReadWritePolicy(InstanceId: string, request: $_model.UpdateReadWritePolicyRequest): Promise<$_model.UpdateReadWritePolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateReadWritePolicyWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Call UpdateSnapshotSetting to update the data backup configuration of the specified instance.
   * 
   * @param request - UpdateSnapshotSettingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSnapshotSettingResponse
   */
  async updateSnapshotSettingWithOptions(InstanceId: string, request: $_model.UpdateSnapshotSettingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSnapshotSettingResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSnapshotSetting",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/snapshot-setting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSnapshotSettingResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSnapshotSettingResponse({}));
  }

  /**
   * Call UpdateSnapshotSetting to update the data backup configuration of the specified instance.
   * 
   * @param request - UpdateSnapshotSettingRequest
   * @returns UpdateSnapshotSettingResponse
   */
  async updateSnapshotSetting(InstanceId: string, request: $_model.UpdateSnapshotSettingRequest): Promise<$_model.UpdateSnapshotSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSnapshotSettingWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates the synonym dictionaries of an Elasticsearch cluster.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If the dictionary file is stored in an Object Storage Service (OSS) bucket, you must make sure that the access control list (ACL) of the bucket is public read.
   * *   If you do not set sourceType to ORIGIN for an uploaded dictionary file, the file will be deleted after you call this operation.
   * 
   * @param request - UpdateSynonymsDictsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSynonymsDictsResponse
   */
  async updateSynonymsDictsWithOptions(InstanceId: string, request: $_model.UpdateSynonymsDictsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSynonymsDictsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSynonymsDicts",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/synonymsDict`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSynonymsDictsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSynonymsDictsResponse({}));
  }

  /**
   * Updates the synonym dictionaries of an Elasticsearch cluster.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   If the dictionary file is stored in an Object Storage Service (OSS) bucket, you must make sure that the access control list (ACL) of the bucket is public read.
   * *   If you do not set sourceType to ORIGIN for an uploaded dictionary file, the file will be deleted after you call this operation.
   * 
   * @param request - UpdateSynonymsDictsRequest
   * @returns UpdateSynonymsDictsResponse
   */
  async updateSynonymsDicts(InstanceId: string, request: $_model.UpdateSynonymsDictsRequest): Promise<$_model.UpdateSynonymsDictsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSynonymsDictsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - UpdateTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
  async updateTemplateWithOptions(InstanceId: string, TemplateName: string, request: $_model.UpdateTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTemplate",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/templates/${$dara.URL.percentEncode(TemplateName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTemplateResponse({}));
  }

  /**
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(InstanceId: string, TemplateName: string, request: $_model.UpdateTemplateRequest): Promise<$_model.UpdateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(InstanceId, TemplateName, request, headers, runtime);
  }

  /**
   * >  If you want to add an IP address whitelist, you can set the modifyMode parameter only to Cover. If you set this parameter to Delete or Append, you can only update an IP address whitelist.
   * *   If you set the modifyMode parameter to Cover and leave the ips parameter empty, the system deletes the specified whitelist. If the whitelist specified by using the groupName parameter does not exist, the system creates such a whitelist.
   * *   If you set the modifyMode parameter to Delete, at least one IP address must be retained for the specified whitelist.
   * *   If you set the modifyMode parameter to Append, you must make sure that the specified whitelist exists. Otherwise, the system reports the NotFound error.
   * 
   * @remarks
   * > For more information about the parameters displayed in the following sample code but not provided in the preceding tables, see [ListInstance](https://help.aliyun.com/document_detail/142230.html). You cannot force your program to obtain these parameters.
   * 
   * @param request - UpdateWhiteIpsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWhiteIpsResponse
   */
  async updateWhiteIpsWithOptions(InstanceId: string, request: $_model.UpdateWhiteIpsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWhiteIpsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.modifyMode)) {
      query["modifyMode"] = request.modifyMode;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.esIPWhitelist)) {
      body["esIPWhitelist"] = request.esIPWhitelist;
    }

    if (!$dara.isNull(request.whiteIpGroup)) {
      body["whiteIpGroup"] = request.whiteIpGroup;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWhiteIps",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/white-ips`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWhiteIpsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWhiteIpsResponse({}));
  }

  /**
   * >  If you want to add an IP address whitelist, you can set the modifyMode parameter only to Cover. If you set this parameter to Delete or Append, you can only update an IP address whitelist.
   * *   If you set the modifyMode parameter to Cover and leave the ips parameter empty, the system deletes the specified whitelist. If the whitelist specified by using the groupName parameter does not exist, the system creates such a whitelist.
   * *   If you set the modifyMode parameter to Delete, at least one IP address must be retained for the specified whitelist.
   * *   If you set the modifyMode parameter to Append, you must make sure that the specified whitelist exists. Otherwise, the system reports the NotFound error.
   * 
   * @remarks
   * > For more information about the parameters displayed in the following sample code but not provided in the preceding tables, see [ListInstance](https://help.aliyun.com/document_detail/142230.html). You cannot force your program to obtain these parameters.
   * 
   * @param request - UpdateWhiteIpsRequest
   * @returns UpdateWhiteIpsResponse
   */
  async updateWhiteIps(InstanceId: string, request: $_model.UpdateWhiteIpsRequest): Promise<$_model.UpdateWhiteIpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWhiteIpsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 修改Logstash实例的X-Pack监控报警配置。
   * 
   * @param request - UpdateXpackMonitorConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateXpackMonitorConfigResponse
   */
  async updateXpackMonitorConfigWithOptions(InstanceId: string, request: $_model.UpdateXpackMonitorConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateXpackMonitorConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enable)) {
      body["enable"] = request.enable;
    }

    if (!$dara.isNull(request.endpoints)) {
      body["endpoints"] = request.endpoints;
    }

    if (!$dara.isNull(request.password)) {
      body["password"] = request.password;
    }

    if (!$dara.isNull(request.userName)) {
      body["userName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateXpackMonitorConfig",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/xpack-monitor-config`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateXpackMonitorConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateXpackMonitorConfigResponse({}));
  }

  /**
   * 修改Logstash实例的X-Pack监控报警配置。
   * 
   * @param request - UpdateXpackMonitorConfigRequest
   * @returns UpdateXpackMonitorConfigResponse
   */
  async updateXpackMonitorConfig(InstanceId: string, request: $_model.UpdateXpackMonitorConfigRequest): Promise<$_model.UpdateXpackMonitorConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateXpackMonitorConfigWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * ES集群版本升级
   * 
   * @remarks
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF\\*\\*\\*\\*
   * 
   * @param request - UpgradeEngineVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeEngineVersionResponse
   */
  async upgradeEngineVersionWithOptions(InstanceId: string, request: $_model.UpgradeEngineVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeEngineVersionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.updateStrategy)) {
      query["updateStrategy"] = request.updateStrategy;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.plugins)) {
      body["plugins"] = request.plugins;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
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
      action: "UpgradeEngineVersion",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/upgrade-version`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeEngineVersionResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeEngineVersionResponse({}));
  }

  /**
   * ES集群版本升级
   * 
   * @remarks
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF\\*\\*\\*\\*
   * 
   * @param request - UpgradeEngineVersionRequest
   * @returns UpgradeEngineVersionResponse
   */
  async upgradeEngineVersion(InstanceId: string, request: $_model.UpgradeEngineVersionRequest): Promise<$_model.UpgradeEngineVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeEngineVersionWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Tests the connectivity between a Logstash cluster and its associated Elasticsearch cluster when you configure the X-Pack Monitoring feature for the Logstash cluster.
   * 
   * @remarks
   * > Before you enable the X-Pack Monitoring feature for a Logstash cluster, you must associate the Logstash cluster with an Elasticsearch cluster. This way, you can view the monitoring data of the Logstash cluster in the Kibana console of the Elasticsearch cluster.
   * 
   * @param request - ValidateConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateConnectionResponse
   */
  async validateConnectionWithOptions(InstanceId: string, request: $_model.ValidateConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateConnectionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateConnection",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/logstashes/${$dara.URL.percentEncode(InstanceId)}/validate-connection`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ValidateConnectionResponse({}));
  }

  /**
   * Tests the connectivity between a Logstash cluster and its associated Elasticsearch cluster when you configure the X-Pack Monitoring feature for the Logstash cluster.
   * 
   * @remarks
   * > Before you enable the X-Pack Monitoring feature for a Logstash cluster, you must associate the Logstash cluster with an Elasticsearch cluster. This way, you can view the monitoring data of the Logstash cluster in the Kibana console of the Elasticsearch cluster.
   * 
   * @param request - ValidateConnectionRequest
   * @returns ValidateConnectionResponse
   */
  async validateConnection(InstanceId: string, request: $_model.ValidateConnectionRequest): Promise<$_model.ValidateConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateConnectionWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 校验缩节点合法性
   * 
   * @param request - ValidateShrinkNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateShrinkNodesResponse
   */
  async validateShrinkNodesWithOptions(InstanceId: string, request: $_model.ValidateShrinkNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateShrinkNodesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.count)) {
      query["count"] = request.count;
    }

    if (!$dara.isNull(request.ignoreStatus)) {
      query["ignoreStatus"] = request.ignoreStatus;
    }

    if (!$dara.isNull(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateShrinkNodes",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/validate-shrink-nodes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateShrinkNodesResponse>(await this.callApi(params, req, runtime), new $_model.ValidateShrinkNodesResponse({}));
  }

  /**
   * 校验缩节点合法性
   * 
   * @param request - ValidateShrinkNodesRequest
   * @returns ValidateShrinkNodesResponse
   */
  async validateShrinkNodes(InstanceId: string, request: $_model.ValidateShrinkNodesRequest): Promise<$_model.ValidateShrinkNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateShrinkNodesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * @param request - ValidateSlrPermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateSlrPermissionResponse
   */
  async validateSlrPermissionWithOptions(request: $_model.ValidateSlrPermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateSlrPermissionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.rolename)) {
      query["rolename"] = request.rolename;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateSlrPermission",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/user/servicerolepermission`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateSlrPermissionResponse>(await this.callApi(params, req, runtime), new $_model.ValidateSlrPermissionResponse({}));
  }

  /**
   * @param request - ValidateSlrPermissionRequest
   * @returns ValidateSlrPermissionResponse
   */
  async validateSlrPermission(request: $_model.ValidateSlrPermissionRequest): Promise<$_model.ValidateSlrPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateSlrPermissionWithOptions(request, headers, runtime);
  }

  /**
   * 缩节点校验数据迁移合法性
   * 
   * @param request - ValidateTransferableNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateTransferableNodesResponse
   */
  async validateTransferableNodesWithOptions(InstanceId: string, request: $_model.ValidateTransferableNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateTransferableNodesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.toArray(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateTransferableNodes",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/validate-transfer-nodes`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateTransferableNodesResponse>(await this.callApi(params, req, runtime), new $_model.ValidateTransferableNodesResponse({}));
  }

  /**
   * 缩节点校验数据迁移合法性
   * 
   * @param request - ValidateTransferableNodesRequest
   * @returns ValidateTransferableNodesResponse
   */
  async validateTransferableNodes(InstanceId: string, request: $_model.ValidateTransferableNodesRequest): Promise<$_model.ValidateTransferableNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateTransferableNodesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * The configurations of dedicated master nodes.
   * 
   * @remarks
   * The configurations of warm nodes.
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientNodeConfiguration)) {
      body["clientNodeConfiguration"] = request.clientNodeConfiguration;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.elasticDataNodeConfiguration)) {
      body["elasticDataNodeConfiguration"] = request.elasticDataNodeConfiguration;
    }

    if (!$dara.isNull(request.esAdminPassword)) {
      body["esAdminPassword"] = request.esAdminPassword;
    }

    if (!$dara.isNull(request.esVersion)) {
      body["esVersion"] = request.esVersion;
    }

    if (!$dara.isNull(request.instanceCategory)) {
      body["instanceCategory"] = request.instanceCategory;
    }

    if (!$dara.isNull(request.kibanaConfiguration)) {
      body["kibanaConfiguration"] = request.kibanaConfiguration;
    }

    if (!$dara.isNull(request.masterConfiguration)) {
      body["masterConfiguration"] = request.masterConfiguration;
    }

    if (!$dara.isNull(request.networkConfig)) {
      body["networkConfig"] = request.networkConfig;
    }

    if (!$dara.isNull(request.nodeAmount)) {
      body["nodeAmount"] = request.nodeAmount;
    }

    if (!$dara.isNull(request.nodeSpec)) {
      body["nodeSpec"] = request.nodeSpec;
    }

    if (!$dara.isNull(request.paymentInfo)) {
      body["paymentInfo"] = request.paymentInfo;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.warmNodeConfiguration)) {
      body["warmNodeConfiguration"] = request.warmNodeConfiguration;
    }

    if (!$dara.isNull(request.zoneCount)) {
      body["zoneCount"] = request.zoneCount;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "createInstance",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * The configurations of dedicated master nodes.
   * 
   * @remarks
   * The configurations of warm nodes.
   * 
   * @param request - CreateInstanceRequest
   * @returns CreateInstanceResponse
   */
  async createInstance(request: $_model.CreateInstanceRequest): Promise<$_model.CreateInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

}
