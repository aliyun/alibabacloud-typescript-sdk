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
      'us-west-1': "elasticsearch.us-west-1.aliyuncs.com",
      'us-east-1': "elasticsearch.us-east-1.aliyuncs.com",
      'eu-west-1': "elasticsearch.eu-west-1.aliyuncs.com",
      'eu-central-1': "elasticsearch.eu-central-1.aliyuncs.com",
      'cn-zhangjiakou': "elasticsearch.cn-zhangjiakou.aliyuncs.com",
      'cn-wulanchabu': "elasticsearch.cn-wulanchabu.aliyuncs.com",
      'cn-shenzhen': "elasticsearch.cn-shenzhen.aliyuncs.com",
      'cn-shanghai-finance-1': "elasticsearch.cn-shanghai-finance-1.aliyuncs.com",
      'cn-shanghai': "elasticsearch.cn-shanghai.aliyuncs.com",
      'cn-qingdao': "elasticsearch.cn-qingdao.aliyuncs.com",
      'cn-north-2-gov-1': "elasticsearch.cn-north-2-gov-1.aliyuncs.com",
      'cn-hongkong': "elasticsearch.cn-hongkong.aliyuncs.com",
      'cn-hangzhou-finance': "elasticsearch.cn-hangzhou-finance.aliyuncs.com",
      'cn-hangzhou': "elasticsearch.cn-hangzhou.aliyuncs.com",
      'cn-guangzhou': "elasticsearch.cn-guangzhou.aliyuncs.com",
      'cn-chengdu': "elasticsearch.cn-chengdu.aliyuncs.com",
      'cn-beijing': "elasticsearch.cn-beijing.aliyuncs.com",
      'ap-southeast-5': "elasticsearch.ap-southeast-5.aliyuncs.com",
      'ap-southeast-3': "elasticsearch.ap-southeast-3.aliyuncs.com",
      'ap-southeast-2': "elasticsearch.ap-southeast-2.aliyuncs.com",
      'ap-southeast-1': "elasticsearch.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "elasticsearch.ap-south-1.aliyuncs.com",
      'ap-northeast-1': "elasticsearch.ap-northeast-1.aliyuncs.com",
    };
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
   * Resumes an offline zone. This operation is valid only for multi-zone instances.
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
   * Resumes an offline zone. This operation is valid only for multi-zone instances.
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
   * Configures network connectivity to establish a connection between different instances.
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
   * Configures network connectivity to establish a connection between different instances.
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
   * Creates a reference repository when setting up a cross-cluster OSS repository.
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
   * Creates a reference repository when setting up a cross-cluster OSS repository.
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
   * Recovers a frozen Elasticsearch instance that was released.
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
   * Recovers a frozen Elasticsearch instance that was released.
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
   * Resumes a frozen Logstash instance that was frozen after release.
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
   * Resumes a frozen Logstash instance that was frozen after release.
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
   * Cancels a running data migration task.
   * 
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
   * Cancels a running data migration task.
   * 
   * @param request - CancelTaskRequest
   * @returns CancelTaskResponse
   */
  async cancelTask(InstanceId: string, request: $_model.CancelTaskRequest): Promise<$_model.CancelTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Recommends optimal cluster capacity planning configurations based on business scenarios, QPS, and log generation volume.
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
   * Recommends optimal cluster capacity planning configurations based on business scenarios, QPS, and log generation volume.
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
   * Disables the intelligent O&M feature for an instance.
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
   * Disables the intelligent O&M feature for an instance.
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
   * Disables the HTTPS protocol for a cluster.
   * 
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
   * Disables the HTTPS protocol for a cluster.
   * 
   * @param request - CloseHttpsRequest
   * @returns CloseHttpsResponse
   */
  async closeHttps(InstanceId: string, request: $_model.CloseHttpsRequest): Promise<$_model.CloseHttpsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeHttpsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Disables the cloud managed feature for a specified index in an Indexing Service cluster. This operation is irreversible. After the feature is disabled, it cannot be enabled again.
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
   * Disables the cloud managed feature for a specified index in an Indexing Service cluster. This operation is irreversible. After the feature is disabled, it cannot be enabled again.
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
   * Creates a collector to collect data from a specified service.
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
   * Creates a collector to collect data from a specified service.
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
   * Creates an Elasticsearch composable template.
   * 
   * @remarks
   * For more information, see [Store large volumes of data by using OpenStore](https://help.aliyun.com/document_detail/317694.html).
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
   * Creates an Elasticsearch composable template.
   * 
   * @remarks
   * For more information, see [Store large volumes of data by using OpenStore](https://help.aliyun.com/document_detail/317694.html).
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
   * Creates a data stream to manage a set of indexes.
   * 
   * @remarks
   * > The data stream name you create must have a one-to-one correspondence with the index pattern in the index template, and the index template must have the data stream feature enabled. For example, if the index pattern in the index template is ds-\\*, the corresponding data stream name should be ds-.
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
   * Creates a data stream to manage a set of indexes.
   * 
   * @remarks
   * > The data stream name you create must have a one-to-one correspondence with the index pattern in the index template, and the index template must have the data stream feature enabled. For example, if the index pattern in the index template is ds-\\*, the corresponding data stream name should be ds-.
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
   * Creates an index lifecycle policy. If a policy with the specified name already exists, the existing policy is replaced and its version is incremented.
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
   * Creates an index lifecycle policy. If a policy with the specified name already exists, the existing policy is replaced and its version is incremented.
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
   * Creates a cluster index template that can be used for component-based index template settings.
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
   * Creates a cluster index template that can be used for component-based index template settings.
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
   * Creates a Logstash instance by calling CreateLogstash.
   * 
   * @remarks
   * Before calling this operation, note the following:
   * - Make sure that you are familiar with the billing method and pricing of Logstash. <props="china"><ph>For more information, see [Billing](https://help.aliyun.com/document_detail/260882.html).</ph>
   * - To create an instance, complete real-name verification. <props="china"><ph>For more information, see [Real-name verification](https://help.aliyun.com/document_detail/37175.html).</ph>.
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
   * Creates a Logstash instance by calling CreateLogstash.
   * 
   * @remarks
   * Before calling this operation, note the following:
   * - Make sure that you are familiar with the billing method and pricing of Logstash. <props="china"><ph>For more information, see [Billing](https://help.aliyun.com/document_detail/260882.html).</ph>
   * - To create an instance, complete real-name verification. <props="china"><ph>For more information, see [Real-name verification](https://help.aliyun.com/document_detail/37175.html).</ph>.
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
   * Creates a Logstash pipeline to collect data.
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
   * Creates a Logstash pipeline to collect data.
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
   * Calls CreateSnapshot to manually create a snapshot backup of a cluster.
   * 
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
   * Calls CreateSnapshot to manually create a snapshot backup of a cluster.
   * 
   * @param request - CreateSnapshotRequest
   * @returns CreateSnapshotResponse
   */
  async createSnapshot(InstanceId: string, request: $_model.CreateSnapshotRequest): Promise<$_model.CreateSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSnapshotWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Creates a PrivateLink VPC endpoint to connect to an endpoint service created in a user VPC.
   * 
   * @remarks
   * For more information about this API operation, see [Configure private connectivity for an instance](https://help.aliyun.com/document_detail/279559.html).
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
   * Creates a PrivateLink VPC endpoint to connect to an endpoint service created in a user VPC.
   * 
   * @remarks
   * For more information about this API operation, see [Configure private connectivity for an instance](https://help.aliyun.com/document_detail/279559.html).
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
   * Takes part of the zones offline when multiple zones are available, and migrates the nodes in the offline zones to other zones.
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
   * Takes part of the zones offline when multiple zones are available, and migrates the nodes in the offline zones to other zones.
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
   * Deletes a specified collector.
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
   * Deletes a specified collector.
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
   * Deletes a component index template of Elasticsearch.
   * 
   * @remarks
   * For more information, see [Store massive amounts of data by using OpenStore](https://help.aliyun.com/document_detail/317694.html).
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
   * Deletes a component index template of Elasticsearch.
   * 
   * @remarks
   * For more information, see [Store massive amounts of data by using OpenStore](https://help.aliyun.com/document_detail/317694.html).
   * @returns DeleteComponentIndexResponse
   */
  async deleteComponentIndex(InstanceId: string, name: string): Promise<$_model.DeleteComponentIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteComponentIndexWithOptions(InstanceId, name, headers, runtime);
  }

  /**
   * Deletes the network connectivity between two instances.
   * 
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
   * Deletes the network connectivity between two instances.
   * 
   * @param request - DeleteConnectedClusterRequest
   * @returns DeleteConnectedClusterResponse
   */
  async deleteConnectedCluster(InstanceId: string, request: $_model.DeleteConnectedClusterRequest): Promise<$_model.DeleteConnectedClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConnectedClusterWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Deletes a specified cluster data stream.
   * 
   * @remarks
   * > - Deleting a data stream also deletes its backing indexes. Proceed with caution.- When an index template has associated data streams, you must delete the data streams associated with the index template before you can delete the index template. On the data stream list page, view the data stream details to find the index template that matches the data stream.
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
   * Deletes a specified cluster data stream.
   * 
   * @remarks
   * > - Deleting a data stream also deletes its backing indexes. Proceed with caution.- When an index template has associated data streams, you must delete the data streams associated with the index template before you can delete the index template. On the data stream list page, view the data stream details to find the index template that matches the data stream.
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
   * Deletes an Elasticsearch index migration task.
   * 
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
   * Deletes an Elasticsearch index migration task.
   * 
   * @param request - DeleteDataTaskRequest
   * @returns DeleteDataTaskResponse
   */
  async deleteDataTask(InstanceId: string, request: $_model.DeleteDataTaskRequest): Promise<$_model.DeleteDataTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataTaskWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Deletes a historical index template.
   * 
   * @remarks
   * For more information, see [Store massive amounts of data through OpenStore](https://help.aliyun.com/document_detail/317694.html).
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
   * Deletes a historical index template.
   * 
   * @remarks
   * For more information, see [Store massive amounts of data through OpenStore](https://help.aliyun.com/document_detail/317694.html).
   * @returns DeleteDeprecatedTemplateResponse
   */
  async deleteDeprecatedTemplate(InstanceId: string, name: string): Promise<$_model.DeleteDeprecatedTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDeprecatedTemplateWithOptions(InstanceId, name, headers, runtime);
  }

  /**
   * Deletes a specified index lifecycle policy.
   * 
   * @remarks
   * > You cannot delete a policy that is currently in use. If the policy is being used to manage any index, the request fails and returns an error.
   * 
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
   * Deletes a specified index lifecycle policy.
   * 
   * @remarks
   * > You cannot delete a policy that is currently in use. If the policy is being used to manage any index, the request fails and returns an error.
   * @returns DeleteILMPolicyResponse
   */
  async deleteILMPolicy(InstanceId: string, PolicyName: string): Promise<$_model.DeleteILMPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteILMPolicyWithOptions(InstanceId, PolicyName, headers, runtime);
  }

  /**
   * Deletes a specified index template.
   * 
   * @remarks
   * > Before deleting an index template, delete the data streams associated with the index template. Otherwise, the index template cannot be deleted.
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
   * Deletes a specified index template.
   * 
   * @remarks
   * > Before deleting an index template, delete the data streams associated with the index template. Otherwise, the index template cannot be deleted.
   * @returns DeleteIndexTemplateResponse
   */
  async deleteIndexTemplate(InstanceId: string, IndexTemplate: string): Promise<$_model.DeleteIndexTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexTemplateWithOptions(InstanceId, IndexTemplate, headers, runtime);
  }

  /**
   * All physical resources used by the instance are reclaimed, all related data is permanently lost and cannot be recovered, and the cloud disks mounted to the instance nodes along with their corresponding snapshots are released.
   * 
   * @remarks
   * Before you invoke this operation, note the following:
   * Data cannot be recovered after the instance is released. Back up your data before releasing the instance. For more information, see [Snapshot backup and recovery commands](https://help.aliyun.com/document_detail/65675.html).
   * 
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
   * All physical resources used by the instance are reclaimed, all related data is permanently lost and cannot be recovered, and the cloud disks mounted to the instance nodes along with their corresponding snapshots are released.
   * 
   * @remarks
   * Before you invoke this operation, note the following:
   * Data cannot be recovered after the instance is released. Back up your data before releasing the instance. For more information, see [Snapshot backup and recovery commands](https://help.aliyun.com/document_detail/65675.html).
   * 
   * @param request - DeleteInstanceRequest
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(InstanceId: string, request: $_model.DeleteInstanceRequest): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Proactively releases a Logstash instance.
   * 
   * @remarks
   * Before calling this operation, note the following:
   * After the instance is released, all physical resources used by the instance are reclaimed, all related data is permanently lost and cannot be recovered, cloud disks mounted to the instance nodes are also released, and the corresponding snapshots are deleted.
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
   * Proactively releases a Logstash instance.
   * 
   * @remarks
   * Before calling this operation, note the following:
   * After the instance is released, all physical resources used by the instance are reclaimed, all related data is permanently lost and cannot be recovered, cloud disks mounted to the instance nodes are also released, and the corresponding snapshots are deleted.
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
   * Deletes pipelines configured for a Logstash instance.
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
   * Deletes pipelines configured for a Logstash instance.
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
   * Deletes a cross-cluster OSS reference repository from an instance.
   * 
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
   * Deletes a cross-cluster OSS reference repository from an instance.
   * 
   * @param request - DeleteSnapshotRepoRequest
   * @returns DeleteSnapshotRepoResponse
   */
  async deleteSnapshotRepo(InstanceId: string, request: $_model.DeleteSnapshotRepoRequest): Promise<$_model.DeleteSnapshotRepoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSnapshotRepoWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Calls DeleteVpcEndpoint to delete a VPC endpoint under a service account.
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
   * Calls DeleteVpcEndpoint to delete a VPC endpoint under a service account.
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
   * Calls the DescribeAckOperator operation to query the Elasticsearch Operator information installed on a specified Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * > Before installing a collector on an ACK cluster, you can call this operation to check the installation status of the Elasticsearch Operator on the target cluster.
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
   * Calls the DescribeAckOperator operation to query the Elasticsearch Operator information installed on a specified Container Service for Kubernetes (ACK) cluster.
   * 
   * @remarks
   * > Before installing a collector on an ACK cluster, you can call this operation to check the installation status of the Elasticsearch Operator on the target cluster.
   * @returns DescribeAckOperatorResponse
   */
  async describeAckOperator(ClusterId: string): Promise<$_model.DescribeAckOperatorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAckOperatorWithOptions(ClusterId, headers, runtime);
  }

  /**
   * Retrieves the details of a collector instance.
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
   * Retrieves the details of a collector instance.
   * @returns DescribeCollectorResponse
   */
  async describeCollector(ResId: string): Promise<$_model.DescribeCollectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCollectorWithOptions(ResId, headers, runtime);
  }

  /**
   * Queries the details of a composable index template in Elasticsearch.
   * 
   * @remarks
   * For more information, see [Use OpenStore to store massive amounts of data](https://help.aliyun.com/document_detail/317694.html).
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
   * Queries the details of a composable index template in Elasticsearch.
   * 
   * @remarks
   * For more information, see [Use OpenStore to store massive amounts of data](https://help.aliyun.com/document_detail/317694.html).
   * @returns DescribeComponentIndexResponse
   */
  async describeComponentIndex(InstanceId: string, name: string): Promise<$_model.DescribeComponentIndexResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeComponentIndexWithOptions(InstanceId, name, headers, runtime);
  }

  /**
   * Retrieves a list of instances that can establish private network peering with the current instance. Instances that are already connected are not included.
   * 
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
   * Retrieves a list of instances that can establish private network peering with the current instance. Instances that are already connected are not included.
   * 
   * @param request - DescribeConnectableClustersRequest
   * @returns DescribeConnectableClustersResponse
   */
  async describeConnectableClusters(InstanceId: string, request: $_model.DescribeConnectableClustersRequest): Promise<$_model.DescribeConnectableClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConnectableClustersWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries the details of a historical index template.
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
   * Queries the details of a historical index template.
   * @returns DescribeDeprecatedTemplateResponse
   */
  async describeDeprecatedTemplate(InstanceId: string, name: string): Promise<$_model.DescribeDeprecatedTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDeprecatedTemplateWithOptions(InstanceId, name, headers, runtime);
  }

  /**
   * Calls the DescribeDiagnoseReport operation to view historical reports of intelligent O&M.
   * 
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
   * Calls the DescribeDiagnoseReport operation to view historical reports of intelligent O&M.
   * 
   * @param request - DescribeDiagnoseReportRequest
   * @returns DescribeDiagnoseReportResponse
   */
  async describeDiagnoseReport(InstanceId: string, ReportId: string, request: $_model.DescribeDiagnoseReportRequest): Promise<$_model.DescribeDiagnoseReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDiagnoseReportWithOptions(InstanceId, ReportId, request, headers, runtime);
  }

  /**
   * Calls the DescribeDiagnosisSettings operation to obtain the scenario settings of intelligent O&M.
   * 
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
   * Calls the DescribeDiagnosisSettings operation to obtain the scenario settings of intelligent O&M.
   * 
   * @param request - DescribeDiagnosisSettingsRequest
   * @returns DescribeDiagnosisSettingsResponse
   */
  async describeDiagnosisSettings(InstanceId: string, request: $_model.DescribeDiagnosisSettingsRequest): Promise<$_model.DescribeDiagnosisSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDiagnosisSettingsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Retrieves dynamic metrics of a cluster.
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
   * Retrieves dynamic metrics of a cluster.
   * @returns DescribeDynamicSettingsResponse
   */
  async describeDynamicSettings(InstanceId: string): Promise<$_model.DescribeDynamicSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDynamicSettingsWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Queries the health status of a cluster to check whether it is running properly.
   * 
   * @remarks
   * The instance health status. The following three states are supported:
   * - GREEN: Primary and replica shards are allocated properly.
   * - YELLOW: Primary shards are allocated properly, but replica shards are not allocated properly.
   * - RED: Primary shards are not allocated properly.
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
   * Queries the health status of a cluster to check whether it is running properly.
   * 
   * @remarks
   * The instance health status. The following three states are supported:
   * - GREEN: Primary and replica shards are allocated properly.
   * - YELLOW: Primary shards are allocated properly, but replica shards are not allocated properly.
   * - RED: Primary shards are not allocated properly.
   * @returns DescribeElasticsearchHealthResponse
   */
  async describeElasticsearchHealth(InstanceId: string): Promise<$_model.DescribeElasticsearchHealthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeElasticsearchHealthWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Queries the details of a specified index lifecycle policy.
   * 
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
   * Queries the details of a specified index lifecycle policy.
   * @returns DescribeILMPolicyResponse
   */
  async describeILMPolicy(InstanceId: string, PolicyName: string): Promise<$_model.DescribeILMPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeILMPolicyWithOptions(InstanceId, PolicyName, headers, runtime);
  }

  /**
   * Returns information about an index template.
   * 
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
   * Returns information about an index template.
   * @returns DescribeIndexTemplateResponse
   */
  async describeIndexTemplate(InstanceId: string, IndexTemplate: string): Promise<$_model.DescribeIndexTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeIndexTemplateWithOptions(InstanceId, IndexTemplate, headers, runtime);
  }

  /**
   * Queries the details of a specified instance.
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
   * Queries the details of a specified instance.
   * @returns DescribeInstanceResponse
   */
  async describeInstance(InstanceId: string): Promise<$_model.DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Retrieves the Kibana node configuration of an Elasticsearch instance.
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
   * Retrieves the Kibana node configuration of an Elasticsearch instance.
   * @returns DescribeKibanaSettingsResponse
   */
  async describeKibanaSettings(InstanceId: string): Promise<$_model.DescribeKibanaSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeKibanaSettingsWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Queries the details of a Logstash instance.
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
   * Queries the details of a Logstash instance.
   * @returns DescribeLogstashResponse
   */
  async describeLogstash(InstanceId: string): Promise<$_model.DescribeLogstashResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeLogstashWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Retrieves the pipeline information of a Logstash instance.
   * 
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
   * Retrieves the pipeline information of a Logstash instance.
   * @returns DescribePipelineResponse
   */
  async describePipeline(InstanceId: string, PipelineId: string): Promise<$_model.DescribePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePipelineWithOptions(InstanceId, PipelineId, headers, runtime);
  }

  /**
   * Calls DescribePipelineManagementConfig to retrieve the pipeline management configuration of a Logstash instance.
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
   * Calls DescribePipelineManagementConfig to retrieve the pipeline management configuration of a Logstash instance.
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
   * Retrieves the region information of Alibaba Cloud Elasticsearch.
   * 
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
   * Retrieves the region information of Alibaba Cloud Elasticsearch.
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  /**
   * Retrieves the snapshot backup settings and backup cycle of a cluster.
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
   * Retrieves the snapshot backup settings and backup cycle of a cluster.
   * @returns DescribeSnapshotSettingResponse
   */
  async describeSnapshotSetting(InstanceId: string): Promise<$_model.DescribeSnapshotSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSnapshotSettingWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Retrieves the scenario-specific template configuration and cluster settings of an instance.
   * 
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
   * Retrieves the scenario-specific template configuration and cluster settings of an instance.
   * @returns DescribeTemplatesResponse
   */
  async describeTemplates(InstanceId: string): Promise<$_model.DescribeTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplatesWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Retrieves the X-Pack monitoring configuration of a Logstash instance.
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
   * Retrieves the X-Pack monitoring configuration of a Logstash instance.
   * @returns DescribeXpackMonitorConfigResponse
   */
  async describeXpackMonitorConfig(InstanceId: string): Promise<$_model.DescribeXpackMonitorConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeXpackMonitorConfigWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Calls DiagnoseInstance to immediately diagnose an instance.
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
   * Calls DiagnoseInstance to immediately diagnose an instance.
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
   * Disables Kibana private network access.
   * 
   * @remarks
   * This API operation supports only cloud-native instances. For legacy architecture instances, use the TriggerNetwork method.
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
   * Disables Kibana private network access.
   * 
   * @remarks
   * This API operation supports only cloud-native instances. For legacy architecture instances, use the TriggerNetwork method.
   * @returns DisableKibanaPvlNetworkResponse
   */
  async disableKibanaPvlNetwork(InstanceId: string): Promise<$_model.DisableKibanaPvlNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.disableKibanaPvlNetworkWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Invokes the EnableKibanaPvlNetwork operation to enable private network access for Kibana.
   * 
   * @remarks
   * 1. This API operation is supported only for cloud-native instances. For legacy architecture instances, use the TriggerNetwork method.
   * 2. The Kibana specification must be greater than 1 vCPU and 2 GB of memory.
   * 
   * @param request - EnableKibanaPvlNetworkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableKibanaPvlNetworkResponse
   */
  async enableKibanaPvlNetworkWithOptions(InstanceId: string, request: $_model.EnableKibanaPvlNetworkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EnableKibanaPvlNetworkResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

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
      query: OpenApiUtil.query(query),
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
   * Invokes the EnableKibanaPvlNetwork operation to enable private network access for Kibana.
   * 
   * @remarks
   * 1. This API operation is supported only for cloud-native instances. For legacy architecture instances, use the TriggerNetwork method.
   * 2. The Kibana specification must be greater than 1 vCPU and 2 GB of memory.
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
   * Retrieves the estimated restart time of a Logstash instance.
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
   * Retrieves the estimated restart time of a Logstash instance.
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
   * Retrieves the estimated restart time for an instance.
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
   * Retrieves the estimated restart time for an instance.
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
   * Retrieves index migration data information.
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
   * Retrieves index migration data information.
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
   * Retrieves the elastic scaling rules of a cluster. Elastic nodes must be purchased when the instance is created.
   * 
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
   * Retrieves the elastic scaling rules of a cluster. Elastic nodes must be purchased when the instance is created.
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
   * Calls GetEmonGrafanaAlerts to retrieve the Grafana alert list.
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
   * Calls GetEmonGrafanaAlerts to retrieve the Grafana alert list.
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
   * Calls GetEmonGrafanaDashboards to retrieve the list of Grafana dashboards.
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
   * Calls GetEmonGrafanaDashboards to retrieve the list of Grafana dashboards.
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
   * Queries the Grafana metric monitoring data of an Elasticsearch instance.
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
   * Queries the Grafana metric monitoring data of an Elasticsearch instance.
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
   * Retrieve keystore information
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKeystoresResponse
   */
  async getKeystoresWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetKeystoresResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKeystores",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/keystores`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKeystoresResponse>(await this.callApi(params, req, runtime), new $_model.GetKeystoresResponse({}));
  }

  /**
   * Retrieve keystore information
   * @returns GetKeystoresResponse
   */
  async getKeystores(InstanceId: string): Promise<$_model.GetKeystoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getKeystoresWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Queries the storage capacity and usage of an OpenStore instance.
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
   * Queries the storage capacity and usage of an OpenStore instance.
   * @returns GetOpenStoreUsageResponse
   */
  async getOpenStoreUsage(InstanceId: string): Promise<$_model.GetOpenStoreUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOpenStoreUsageWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Retrieves the current region information.
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
   * Retrieves the current region information.
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
   * Retrieves the nodes that can be removed based on the specified node type and quantity.
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
   * Retrieves the nodes that can be removed based on the specified node type and quantity.
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
   * Retrieves the nodes available for data migration based on the specified node type and count.
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
   * Retrieves the nodes available for data migration based on the specified node type and count.
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
   * Continue restarting the remaining edge zones of the Elasticsearch instance after the phased release is completed.
   * 
   * @param request - GrayPublishRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrayPublishResponse
   */
  async grayPublishWithOptions(InstanceId: string, request: $_model.GrayPublishRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GrayPublishResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.xRequestChangeId)) {
      query["X-Request-ChangeId"] = request.xRequestChangeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrayPublish",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/grayPublish`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrayPublishResponse>(await this.callApi(params, req, runtime), new $_model.GrayPublishResponse({}));
  }

  /**
   * Continue restarting the remaining edge zones of the Elasticsearch instance after the phased release is completed.
   * 
   * @param request - GrayPublishRequest
   * @returns GrayPublishResponse
   */
  async grayPublish(InstanceId: string, request: $_model.GrayPublishRequest): Promise<$_model.GrayPublishResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grayPublishWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Initialize AI model
   * 
   * @param request - InitModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitModelResponse
   */
  async initModelWithOptions(InstanceId: string, request: $_model.InitModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.InitModelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["api_key"] = request.apiKey;
    }

    if (!$dara.isNull(request.host)) {
      body["host"] = request.host;
    }

    if (!$dara.isNull(request.httpSchema)) {
      body["http_schema"] = request.httpSchema;
    }

    if (!$dara.isNull(request.models)) {
      body["models"] = request.models;
    }

    if (!$dara.isNull(request.workspace)) {
      body["workspace"] = request.workspace;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitModel",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/initModel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.InitModelResponse>(await this.callApi(params, req, runtime), new $_model.InitModelResponse({}));
  }

  /**
   * Initialize AI model
   * 
   * @param request - InitModelRequest
   * @returns InitModelResponse
   */
  async initModel(InstanceId: string, request: $_model.InitModelRequest): Promise<$_model.InitModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.initModelWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Calls the InitializeOperationRole operation to create a service-linked role.
   * 
   * @remarks
   * > Before you use a collector to collect logs from different data sources or perform elastic scaling tasks for a cluster (applicable only to the China site), you must create a service-linked role.
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
   * Calls the InitializeOperationRole operation to create a service-linked role.
   * 
   * @remarks
   * > Before you use a collector to collect logs from different data sources or perform elastic scaling tasks for a cluster (applicable only to the China site), you must create a service-linked role.
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
   * Installs the ACK Operator on a specified Container Service cluster.
   * 
   * @remarks
   * > Before installing a collector on an ACK cluster, call this operation to install the Elasticsearch Operator on the target cluster.
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
   * Installs the ACK Operator on a specified Container Service cluster.
   * 
   * @remarks
   * > Before installing a collector on an ACK cluster, call this operation to install the Elasticsearch Operator on the target cluster.
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
   * Installs preset plug-ins for Kibana. The Kibana instance must have specifications of 2 vCPUs and 4 GB of memory or higher.
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
   * Installs preset plug-ins for Kibana. The Kibana instance must have specifications of 2 vCPUs and 4 GB of memory or higher.
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
   * Installs system plugins for a specified Logstash instance.
   * 
   * @remarks
   * Before calling this operation, note the following:
   * The plugins to be installed must be included in the Alibaba Cloud Logstash [default system plugin list](https://help.aliyun.com/document_detail/139626.html). External open source plugins are not supported.
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
   * Installs system plugins for a specified Logstash instance.
   * 
   * @remarks
   * Before calling this operation, note the following:
   * The plugins to be installed must be included in the Alibaba Cloud Logstash [default system plugin list](https://help.aliyun.com/document_detail/139626.html). External open source plugins are not supported.
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
   * Installs system plug-ins on an Elasticsearch instance.
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
   * Installs system plug-ins on an Elasticsearch instance.
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
   * Installs custom plugins that have been uploaded to the Elasticsearch console.
   * 
   * @remarks
   * > The custom plugin installation feature is being upgraded internally and is temporarily unavailable. If you urgently need this feature, submit a ticket to contact us.
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
   * Installs custom plugins that have been uploaded to the Elasticsearch console.
   * 
   * @remarks
   * > The custom plugin installation feature is being upgraded internally and is temporarily unavailable. If you urgently need this feature, submit a ticket to contact us.
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
   * Interrupts an instance change task. This operation is valid only for instances in the Effecting state. After the interruption, the instance enters the suspended state.
   * 
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
   * Interrupts an instance change task. This operation is valid only for instances in the Effecting state. After the interruption, the instance enters the suspended state.
   * 
   * @param request - InterruptElasticsearchTaskRequest
   * @returns InterruptElasticsearchTaskResponse
   */
  async interruptElasticsearchTask(InstanceId: string, request: $_model.InterruptElasticsearchTaskRequest): Promise<$_model.InterruptElasticsearchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.interruptElasticsearchTaskWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * After the interruption, the instance enters the suspended state.
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
   * After the interruption, the instance enters the suspended state.
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
   * Retrieves the list of Container Service for Kubernetes (ACK) clusters.
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
   * Retrieves the list of Container Service for Kubernetes (ACK) clusters.
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
   * This operation is deprecated and will be taken offline soon.
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
   * This operation is deprecated and will be taken offline soon.
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
   * Release notes Release notes details.
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
   * Release notes Release notes details.
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
   * Retrieves information about all nodes in an Elasticsearch cluster.
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
   * Retrieves information about all nodes in an Elasticsearch cluster.
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
   * Retrieves the OSS reference repositories that can be added to the current instance.
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
   * Retrieves the OSS reference repositories that can be added to the current instance.
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
   * Retrieves a list of available Elasticsearch instances when configuring X-Pack monitoring for a Logstash instance.
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
   * Retrieves a list of available Elasticsearch instances when configuring X-Pack monitoring for a Logstash instance.
   * @returns ListAvailableEsInstanceIdsResponse
   */
  async listAvailableEsInstanceIds(InstanceId: string): Promise<$_model.ListAvailableEsInstanceIdsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAvailableEsInstanceIdsWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Retrieves a list of collectors.
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
   * Retrieves a list of collectors.
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
   * Retrieves the list of composable templates for an Elasticsearch instance.
   * 
   * @remarks
   * For more information, see [Store massive amounts of data through OpenStore](https://help.aliyun.com/document_detail/317694.html).
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
   * Retrieves the list of composable templates for an Elasticsearch instance.
   * 
   * @remarks
   * For more information, see [Store massive amounts of data through OpenStore](https://help.aliyun.com/document_detail/317694.html).
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
   * Retrieves a list of instances that have established private network peering with the current instance.
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
   * Retrieves a list of instances that have established private network peering with the current instance.
   * @returns ListConnectedClustersResponse
   */
  async listConnectedClusters(InstanceId: string): Promise<$_model.ListConnectedClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConnectedClustersWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Retrieves the list of index data streams in an Elasticsearch cluster.
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
   * Retrieves the list of index data streams in an Elasticsearch cluster.
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
   * Retrieves a list of data migration tasks between different Elasticsearch clusters.
   * 
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
   * Retrieves a list of data migration tasks between different Elasticsearch clusters.
   * @returns ListDataTasksResponse
   */
  async listDataTasks(InstanceId: string): Promise<$_model.ListDataTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataTasksWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Invokes the ListDefaultCollectorConfigurations operation to retrieve the default configuration file of a collector.
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
   * Invokes the ListDefaultCollectorConfigurations operation to retrieve the default configuration file of a collector.
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
   * Queries the list of historical index templates.
   * 
   * @remarks
   * For more information, see [Use OpenStore to store large volumes of data](https://help.aliyun.com/document_detail/317694.html).
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
   * Queries the list of historical index templates.
   * 
   * @remarks
   * For more information, see [Use OpenStore to store large volumes of data](https://help.aliyun.com/document_detail/317694.html).
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
   * Retrieves the diagnostic indexes from the intelligent O&M module for a specified instance.
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
   * Retrieves the diagnostic indexes from the intelligent O&M module for a specified instance.
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
   * Calls ListDiagnoseReport to retrieve historical reports of intelligent O&M.
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
   * Calls ListDiagnoseReport to retrieve historical reports of intelligent O&M.
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
   * Retrieves all IDs of Intelligent O&M Center historical reports.
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
   * Retrieves all IDs of Intelligent O&M Center historical reports.
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
   * Lists the intelligent diagnostic items for an Elasticsearch instance.
   * 
   * @param request - ListDiagnosisItemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDiagnosisItemsResponse
   */
  async listDiagnosisItemsWithOptions(request: $_model.ListDiagnosisItemsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDiagnosisItemsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

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
   * Lists the intelligent diagnostic items for an Elasticsearch instance.
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
   * Queries the information of a specified dictionary.
   * 
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
   * Queries the information of a specified dictionary.
   * 
   * @param request - ListDictInformationRequest
   * @returns ListDictInformationResponse
   */
  async listDictInformation(InstanceId: string, request: $_model.ListDictInformationRequest): Promise<$_model.ListDictInformationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDictInformationWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries the details of the dictionary list for a specified type.
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
   * Queries the details of the dictionary list for a specified type.
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
   * Retrieves the list of ECS instances under the current user\\"s VPC and vSwitch.
   * 
   * @remarks
   * >Notice:  Before calling this operation, create the AliyunElasticsearchAccessingOOSRole and AliyunOOSAccessingECS4ESRole service-linked roles. These roles allow the Elasticsearch service account to obtain ECS access permissions of the Alibaba Cloud account. For more information, see [Collect ECS service logs](https://help.aliyun.com/document_detail/146446.html).
   * .
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
   * Retrieves the list of ECS instances under the current user\\"s VPC and vSwitch.
   * 
   * @remarks
   * >Notice:  Before calling this operation, create the AliyunElasticsearchAccessingOOSRole and AliyunOOSAccessingECS4ESRole service-linked roles. These roles allow the Elasticsearch service account to obtain ECS access permissions of the Alibaba Cloud account. For more information, see [Collect ECS service logs](https://help.aliyun.com/document_detail/146446.html).
   * .
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
   * Obtain Event List
   * 
   * @param request - ListEventRecordsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventRecordsResponse
   */
  async listEventRecordsWithOptions(eventType: string, request: $_model.ListEventRecordsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEventRecordsResponse> {
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

    if (!$dara.isNull(request.size)) {
      query["size"] = request.size;
    }

    if (!$dara.isNull(request.termContent)) {
      query["termContent"] = request.termContent;
    }

    if (!$dara.isNull(request.termType)) {
      query["termType"] = request.termType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventRecords",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/${$dara.URL.percentEncode(eventType)}/listEventRecords`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEventRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListEventRecordsResponse({}));
  }

  /**
   * Obtain Event List
   * 
   * @param request - ListEventRecordsRequest
   * @returns ListEventRecordsResponse
   */
  async listEventRecords(eventType: string, request: $_model.ListEventRecordsRequest): Promise<$_model.ListEventRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEventRecordsWithOptions(eventType, request, headers, runtime);
  }

  /**
   * Retrieves the extension file configuration of a Logstash instance.
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
   * Retrieves the extension file configuration of a Logstash instance.
   * @returns ListExtendfilesResponse
   */
  async listExtendfiles(InstanceId: string): Promise<$_model.ListExtendfilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExtendfilesWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Queries the list of index lifecycle policies that have been created for a cluster.
   * 
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
   * Queries the list of index lifecycle policies that have been created for a cluster.
   * 
   * @param request - ListILMPoliciesRequest
   * @returns ListILMPoliciesResponse
   */
  async listILMPolicies(InstanceId: string, request: $_model.ListILMPoliciesRequest): Promise<$_model.ListILMPoliciesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listILMPoliciesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries a list of index templates.
   * 
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
   * Queries a list of index templates.
   * 
   * @param request - ListIndexTemplatesRequest
   * @returns ListIndexTemplatesResponse
   */
  async listIndexTemplates(InstanceId: string, request: $_model.ListIndexTemplatesRequest): Promise<$_model.ListIndexTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexTemplatesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries the information about Elasticsearch instances.
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
   * Queries the information about Elasticsearch instances.
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
   * Queries the list of hardware O&M events triggered by an Elasticsearch cluster.
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
   * Queries the list of hardware O&M events triggered by an Elasticsearch cluster.
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
   * Filters system indexes from the index list of a cluster.
   * 
   * @remarks
   * The ListInstanceIndices operation is applicable only to Elasticsearch instances that have the indexing service enabled. Query index information by using the Elasticsearch API. For more information, see [cat indices API
   * ](https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-indices.html).
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
   * Filters system indexes from the index list of a cluster.
   * 
   * @remarks
   * The ListInstanceIndices operation is applicable only to Elasticsearch instances that have the indexing service enabled. Query index information by using the Elasticsearch API. For more information, see [cat indices API
   * ](https://www.elastic.co/guide/en/elasticsearch/reference/current/cat-indices.html).
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
   * Retrieves the list of plugins installed on the Kibana node of an Elasticsearch instance.
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
   * Retrieves the list of plugins installed on the Kibana node of an Elasticsearch instance.
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
   * Queries the details of the Kibana private network connection.
   * 
   * @remarks
   * This API operation supports only cloud-native instances.
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
   * Queries the details of the Kibana private network connection.
   * 
   * @remarks
   * This API operation supports only cloud-native instances.
   * @returns ListKibanaPvlNetworkResponse
   */
  async listKibanaPvlNetwork(InstanceId: string): Promise<$_model.ListKibanaPvlNetworkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKibanaPvlNetworkWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Displays the details of all or specified Logstash instances in a list.
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
   * Displays the details of all or specified Logstash instances in a list.
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
   * Queries the logs of a Logstash instance.
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
   * Queries the logs of a Logstash instance.
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
   * Calls ListLogstashPlugins to retrieve detailed information about all or specified plugins.
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
   * Calls ListLogstashPlugins to retrieve detailed information about all or specified plugins.
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
   * Historical report list of intelligent O&M.
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
   * Historical report list of intelligent O&M.
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
   * Retrieves the pipeline list of a Logstash instance.
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
   * Retrieves the pipeline list of a Logstash instance.
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
   * Retrieves the list of pipeline IDs for a Logstash instance.
   * 
   * @remarks
   * > Pipeline management is divided into configuration file management and Kibana pipeline management. Kibana pipeline management is not available in the console for some regions.
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
   * Retrieves the list of pipeline IDs for a Logstash instance.
   * 
   * @remarks
   * > Pipeline management is divided into configuration file management and Kibana pipeline management. Kibana pipeline management is not available in the console for some regions.
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
   * Retrieves the plugin list of a specified Alibaba Cloud Elasticsearch instance.
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
   * Retrieves the plugin list of a specified Alibaba Cloud Elasticsearch instance.
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
   * Queries logs of different types for an Elasticsearch instance.
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
   * Queries logs of different types for an Elasticsearch instance.
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
   * Queries the data progress list of ongoing and completed shard recoveries. By default, only ongoing shard recovery information is returned.
   * 
   * @remarks
   * > Shard recovery is the process of synchronizing data from a primary shard to a replica shard. After recovery is complete, the replica shard becomes available for search.
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
   * Queries the data progress list of ongoing and completed shard recoveries. By default, only ongoing shard recovery information is returned.
   * 
   * @remarks
   * > Shard recovery is the process of synchronizing data from a primary shard to a replica shard. After recovery is complete, the replica shard becomes available for search.
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
   * Retrieves the list of cross-cluster OSS repository settings for the current instance.
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
   * Retrieves the list of cross-cluster OSS repository settings for the current instance.
   * @returns ListSnapshotReposByInstanceIdResponse
   */
  async listSnapshotReposByInstanceId(InstanceId: string): Promise<$_model.ListSnapshotReposByInstanceIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSnapshotReposByInstanceIdWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Statistics of management event records
   * 
   * @param request - ListStatsEventRecordsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStatsEventRecordsResponse
   */
  async listStatsEventRecordsWithOptions(request: $_model.ListStatsEventRecordsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListStatsEventRecordsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventType)) {
      query["eventType"] = request.eventType;
    }

    if (!$dara.isNull(request.level)) {
      query["level"] = request.level;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStatsEventRecords",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/event/statsEventRecords`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStatsEventRecordsResponse>(await this.callApi(params, req, runtime), new $_model.ListStatsEventRecordsResponse({}));
  }

  /**
   * Statistics of management event records
   * 
   * @param request - ListStatsEventRecordsRequest
   * @returns ListStatsEventRecordsResponse
   */
  async listStatsEventRecords(request: $_model.ListStatsEventRecordsRequest): Promise<$_model.ListStatsEventRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStatsEventRecordsWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves the relationships between all instances and tags.
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
   * Retrieves the relationships between all instances and tags.
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
   * Queries all labels created by the user in the current region.
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
   * Queries all labels created by the user in the current region.
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
   * Custom plugin list
   * 
   * @param request - ListUserPluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserPluginResponse
   */
  async listUserPluginWithOptions(instanceId: string, request: $_model.ListUserPluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUserPluginResponse> {
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
      action: "ListUserPlugin",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(instanceId)}/userPlugins`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUserPluginResponse>(await this.callApi(params, req, runtime), new $_model.ListUserPluginResponse({}));
  }

  /**
   * Custom plugin list
   * 
   * @param request - ListUserPluginRequest
   * @returns ListUserPluginResponse
   */
  async listUserPlugin(instanceId: string, request: $_model.ListUserPluginRequest): Promise<$_model.ListUserPluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserPluginWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Queries the status of endpoints in the VPC of a service account.
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
   * Queries the status of endpoints in the VPC of a service account.
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
   * Migrates nodes in a specified zone to a destination zone.
   * 
   * @remarks
   * When you upgrade the specifications of an instance and encounter insufficient inventory in the current zone, you can resolve this issue by migrating zone nodes. Before calling this operation, make sure that:
   * - Your account has a zone with sufficient resources.
   *    After migrating nodes of the current specifications to another zone, you must manually [upgrade the cluster](https://help.aliyun.com/document_detail/96650.html). The cluster is not upgraded during the migration. Therefore, select a zone with sufficient resources to avoid cluster upgrade failures. Select a zone with a later alphabetical order first. For example, between ap-southeast-1e and ap-southeast-1h, select ap-southeast-1h first.
   * - The cluster is in a healthy state.
   *    You can run the `GET _cat/health?v` command to check the cluster health status.
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
   * Migrates nodes in a specified zone to a destination zone.
   * 
   * @remarks
   * When you upgrade the specifications of an instance and encounter insufficient inventory in the current zone, you can resolve this issue by migrating zone nodes. Before calling this operation, make sure that:
   * - Your account has a zone with sufficient resources.
   *    After migrating nodes of the current specifications to another zone, you must manually [upgrade the cluster](https://help.aliyun.com/document_detail/96650.html). The cluster is not upgraded during the migration. Therefore, select a zone with sufficient resources to avoid cluster upgrade failures. Select a zone with a later alphabetical order first. For example, between ap-southeast-1e and ap-southeast-1h, select ap-southeast-1h first.
   * - The cluster is in a healthy state.
   *    You can run the `GET _cat/health?v` command to check the cluster health status.
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
   * Updates the ECS instances on which a collector is installed.
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
   * Updates the ECS instances on which a collector is installed.
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
   * Updates the elastic scaling rules of a cluster.
   * 
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
   * Updates the elastic scaling rules of a cluster.
   * 
   * @param request - ModifyElastictaskRequest
   * @returns ModifyElastictaskResponse
   */
  async modifyElastictask(InstanceId: string, request: $_model.ModifyElastictaskRequest): Promise<$_model.ModifyElastictaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyElastictaskWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Modifies and enables the maintenance window for an instance.
   * 
   * @remarks
   * Before calling this operation, note the following:
   * - Before the scheduled maintenance, Alibaba Cloud sends SMS messages and emails to the contacts configured in your Alibaba Cloud account. Check your messages promptly.
   * - On the day of instance maintenance, to ensure stability throughout the maintenance process, the instance enters the Effective state before the maintenance window begins. While the instance is in this state, access to the cluster and query operations such as performance monitoring are not affected. However, cluster change operations such as cluster upgrades and restarts are temporarily unavailable.
   * - During the maintenance window, transient disconnections may occur. Ensure that your application has a reconnection mechanism.
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
   * Modifies and enables the maintenance window for an instance.
   * 
   * @remarks
   * Before calling this operation, note the following:
   * - Before the scheduled maintenance, Alibaba Cloud sends SMS messages and emails to the contacts configured in your Alibaba Cloud account. Check your messages promptly.
   * - On the day of instance maintenance, to ensure stability throughout the maintenance process, the instance enters the Effective state before the maintenance window begins. While the instance is in this state, access to the cluster and query operations such as performance monitoring are not affected. However, cluster change operations such as cluster upgrades and restarts are temporarily unavailable.
   * - During the maintenance window, transient disconnections may occur. Ensure that your application has a reconnection mechanism.
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
   * For O&M events in the Event Center, you can specify a restart event, and the system will restart the specified edge zone of the relevant instance at the scheduled time.
   * 
   * @param request - ModifyScheduleExecuteTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyScheduleExecuteTimeResponse
   */
  async modifyScheduleExecuteTimeWithOptions(instanceId: string, request: $_model.ModifyScheduleExecuteTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyScheduleExecuteTimeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.eventId)) {
      query["eventId"] = request.eventId;
    }

    if (!$dara.isNull(request.scheduleExecuteTime)) {
      query["scheduleExecuteTime"] = request.scheduleExecuteTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyScheduleExecuteTime",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/event/${$dara.URL.percentEncode(instanceId)}/actions/modify-execute-time`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyScheduleExecuteTimeResponse>(await this.callApi(params, req, runtime), new $_model.ModifyScheduleExecuteTimeResponse({}));
  }

  /**
   * For O&M events in the Event Center, you can specify a restart event, and the system will restart the specified edge zone of the relevant instance at the scheduled time.
   * 
   * @param request - ModifyScheduleExecuteTimeRequest
   * @returns ModifyScheduleExecuteTimeResponse
   */
  async modifyScheduleExecuteTime(instanceId: string, request: $_model.ModifyScheduleExecuteTimeRequest): Promise<$_model.ModifyScheduleExecuteTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyScheduleExecuteTimeWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Calls ModifyWhiteIps to update the access whitelist of a specified instance.
   * 
   * @remarks
   * ## Before you begin
   * - You cannot update information for an instance whose instance status is activating, invalid, or freeze (inactive).
   * - You can update the whitelist in two ways: IP whitelist list and IP whitelist group. The two methods cannot be used at the same time. In addition to InstanceId and clientToken, the two methods support different parameters:
   *     - IP whitelist list: whiteIpList, nodeType, networkType
   *     - IP whitelist group: modifyMode, whiteIpGroup
   * - The public network access whitelist does not support private network IP addresses, and the internal-facing whitelist does not support public IP addresses.
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
   * Calls ModifyWhiteIps to update the access whitelist of a specified instance.
   * 
   * @remarks
   * ## Before you begin
   * - You cannot update information for an instance whose instance status is activating, invalid, or freeze (inactive).
   * - You can update the whitelist in two ways: IP whitelist list and IP whitelist group. The two methods cannot be used at the same time. In addition to InstanceId and clientToken, the two methods support different parameters:
   *     - IP whitelist list: whiteIpList, nodeType, networkType
   *     - IP whitelist group: modifyMode, whiteIpGroup
   * - The public network access whitelist does not support private network IP addresses, and the internal-facing whitelist does not support public IP addresses.
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
   * Modifies the resource group to which an instance belongs.
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
   * Modifies the resource group to which an instance belongs.
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
   * Enables the intelligent O&M feature for an instance.
   * 
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
   * Enables the intelligent O&M feature for an instance.
   * 
   * @param request - OpenDiagnosisRequest
   * @returns OpenDiagnosisResponse
   */
  async openDiagnosis(InstanceId: string, request: $_model.OpenDiagnosisRequest): Promise<$_model.OpenDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openDiagnosisWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Enables the HTTPS protocol. Before enabling HTTPS, make sure that you have purchased client nodes.
   * 
   * @remarks
   * > - To ensure data security, enable the HTTPS protocol.
   * - Except for versions 8.5 and 7.16<props="china"><ph> and version 7.10 in some regions</ph>, make sure that you have purchased client nodes before enabling HTTPS.
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
   * Enables the HTTPS protocol. Before enabling HTTPS, make sure that you have purchased client nodes.
   * 
   * @remarks
   * > - To ensure data security, enable the HTTPS protocol.
   * - Except for versions 8.5 and 7.16<props="china"><ph> and version 7.10 in some regions</ph>, make sure that you have purchased client nodes before enabling HTTPS.
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
   * Upload a custom plugin to the plugin repository. After uploading, the plugin is in the pending installation status.
   * 
   * @param request - PluginAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PluginAnalysisResponse
   */
  async pluginAnalysisWithOptions(instanceId: string, request: $_model.PluginAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PluginAnalysisResponse> {
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
      action: "PluginAnalysis",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(instanceId)}/plugins/actions/analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PluginAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.PluginAnalysisResponse({}));
  }

  /**
   * Upload a custom plugin to the plugin repository. After uploading, the plugin is in the pending installation status.
   * 
   * @param request - PluginAnalysisRequest
   * @returns PluginAnalysisResponse
   */
  async pluginAnalysis(instanceId: string, request: $_model.PluginAnalysisRequest): Promise<$_model.PluginAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.pluginAnalysisWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Sends a test alert message by calling PostEmonTryAlarmRule.
   * 
   * @remarks
   * > This API operation can be called up to 10 times per hour.
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
   * Sends a test alert message by calling PostEmonTryAlarmRule.
   * 
   * @remarks
   * > This API operation can be called up to 10 times per hour.
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
   * Calls RecommendTemplates to retrieve recommended cluster configurations.
   * 
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
   * Calls RecommendTemplates to retrieve recommended cluster configurations.
   * 
   * @param request - RecommendTemplatesRequest
   * @returns RecommendTemplatesResponse
   */
  async recommendTemplates(InstanceId: string, request: $_model.RecommendTemplatesRequest): Promise<$_model.RecommendTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recommendTemplatesWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Retries the installation of a collector that failed to install during creation.
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
   * Retries the installation of a collector that failed to install during creation.
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
   * You can delete uploaded but uninstalled plugins from the plugin library.
   * 
   * @param request - RemovePluginRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemovePluginResponse
   */
  async removePluginWithOptions(instanceId: string, request: $_model.RemovePluginRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemovePluginResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemovePlugin",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(instanceId)}/plugins/actions/remove`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemovePluginResponse>(await this.callApi(params, req, runtime), new $_model.RemovePluginResponse({}));
  }

  /**
   * You can delete uploaded but uninstalled plugins from the plugin library.
   * 
   * @param request - RemovePluginRequest
   * @returns RemovePluginResponse
   */
  async removePlugin(instanceId: string, request: $_model.RemovePluginRequest): Promise<$_model.RemovePluginResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removePluginWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Renews a subscription Elasticsearch instance.
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
   * Renews a subscription Elasticsearch instance.
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
   * Renews a specified Logstash instance.
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
   * Renews a specified Logstash instance.
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
   * Restarts a collector to perform data collection.
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
   * Restarts a collector to perform data collection.
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
   * Restarts an Elasticsearch cluster.
   * 
   * @remarks
   * > After the restart, the instance enters the activating state. After the restart is complete, the instance status changes to active. Alibaba Cloud Elasticsearch supports single-node restarts. Node restarts are classified into normal restarts and blue-green restarts.
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
   * Restarts an Elasticsearch cluster.
   * 
   * @remarks
   * > After the restart, the instance enters the activating state. After the restart is complete, the instance status changes to active. Alibaba Cloud Elasticsearch supports single-node restarts. Node restarts are classified into normal restarts and blue-green restarts.
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
   * Restarts a specified instance. After the restart, the instance enters the activating (activing) state.
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
   * Restarts a specified instance. After the restart, the instance enters the activating (activing) state.
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
   * Resumes an interrupted change task for an instance.
   * 
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
   * Resumes an interrupted change task for an instance.
   * 
   * @param request - ResumeElasticsearchTaskRequest
   * @returns ResumeElasticsearchTaskResponse
   */
  async resumeElasticsearchTask(InstanceId: string, request: $_model.ResumeElasticsearchTaskRequest): Promise<$_model.ResumeElasticsearchTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeElasticsearchTaskWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Resumes an interrupted instance change task. After the task is resumed, the instance enters the activating state.
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
   * Resumes an interrupted instance change task. After the task is resumed, the instance enters the activating state.
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
   * Creates a new index for a data stream or index alias.
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
   * Creates a new index for a data stream or index alias.
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
   * Deploys Logstash pipelines immediately.
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
   * Deploys Logstash pipelines immediately.
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
   * Scales in nodes of a specified role in an Elasticsearch cluster.
   * 
   * @remarks
   * Note the following when you invoke this operation:
   * Before scaling in data nodes of a cluster, perform data migration from the nodes to be removed to other nodes. After you confirm that the nodes to be removed contain no data, proceed with the scale-in operation.
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
   * Scales in nodes of a specified role in an Elasticsearch cluster.
   * 
   * @remarks
   * Note the following when you invoke this operation:
   * Before scaling in data nodes of a cluster, perform data migration from the nodes to be removed to other nodes. After you confirm that the nodes to be removed contain no data, proceed with the scale-in operation.
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
   * Calls StopCollector to stop a running collector.
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
   * Calls StopCollector to stop a running collector.
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
   * Stops Logstash pipelines by calling StopPipelines.
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
   * Stops Logstash pipelines by calling StopPipelines.
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
   * Creates tag-resource relationships for a specified instance.
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
   * Creates tag-resource relationships for a specified instance.
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
   * Performs data migration on a node to facilitate node scale-in operations.
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
   * Performs data migration on a node to facilitate node scale-in operations.
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
   * Enables or shuts down public or private network access for an Elasticsearch or Kibana cluster.
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
   * Enables or shuts down public or private network access for an Elasticsearch or Kibana cluster.
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
   * Disables an existing zone for a multi-zone instance. This operation is intended only for disaster recovery drills. Proceed with caution.
   * 
   * @remarks
   * Disables an existing zone for a multi-zone instance. This operation is intended only for disaster recovery drills. Proceed with caution.
   * 
   * @param request - TurnOffZoneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TurnOffZoneResponse
   */
  async turnOffZoneWithOptions(instanceId: string, request: $_model.TurnOffZoneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TurnOffZoneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hpAlbZoneDrained)) {
      query["hpAlbZoneDrained"] = request.hpAlbZoneDrained;
    }

    if (!$dara.isNull(request.zone)) {
      query["zone"] = request.zone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TurnOffZone",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(instanceId)}/actions/turnOff-zone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TurnOffZoneResponse>(await this.callApi(params, req, runtime), new $_model.TurnOffZoneResponse({}));
  }

  /**
   * Disables an existing zone for a multi-zone instance. This operation is intended only for disaster recovery drills. Proceed with caution.
   * 
   * @remarks
   * Disables an existing zone for a multi-zone instance. This operation is intended only for disaster recovery drills. Proceed with caution.
   * 
   * @param request - TurnOffZoneRequest
   * @returns TurnOffZoneResponse
   */
  async turnOffZone(instanceId: string, request: $_model.TurnOffZoneRequest): Promise<$_model.TurnOffZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.turnOffZoneWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Reopens an offline zone for a multi-zone instance. This operation is intended only for disaster recovery drills. Proceed with caution.
   * 
   * @remarks
   * Reopens an offline zone for a multi-zone instance. This operation is intended only for disaster recovery drills. Proceed with caution.
   * 
   * @param request - TurnOnZoneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TurnOnZoneResponse
   */
  async turnOnZoneWithOptions(instanceId: string, request: $_model.TurnOnZoneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TurnOnZoneResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hpAlbZoneDrained)) {
      query["hpAlbZoneDrained"] = request.hpAlbZoneDrained;
    }

    if (!$dara.isNull(request.zone)) {
      query["zone"] = request.zone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TurnOnZone",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(instanceId)}/actions/turnOn-zone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TurnOnZoneResponse>(await this.callApi(params, req, runtime), new $_model.TurnOnZoneResponse({}));
  }

  /**
   * Reopens an offline zone for a multi-zone instance. This operation is intended only for disaster recovery drills. Proceed with caution.
   * 
   * @remarks
   * Reopens an offline zone for a multi-zone instance. This operation is intended only for disaster recovery drills. Proceed with caution.
   * 
   * @param request - TurnOnZoneRequest
   * @returns TurnOnZoneResponse
   */
  async turnOnZone(instanceId: string, request: $_model.TurnOnZoneRequest): Promise<$_model.TurnOnZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.turnOnZoneWithOptions(instanceId, request, headers, runtime);
  }

  /**
   * Uninstalls plug-ins from the Kibana node of an Elasticsearch instance.
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
   * Uninstalls plug-ins from the Kibana node of an Elasticsearch instance.
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
   * Uninstalls installed plug-ins from a Logstash instance.
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
   * Uninstalls installed plug-ins from a Logstash instance.
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
   * Uninstalls system plug-ins from an Elasticsearch instance.
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
   * Uninstalls system plug-ins from an Elasticsearch instance.
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
   * Deletes user resource tag associations for a specified instance.
   * 
   * @remarks
   * When calling this operation, note the following:
   * - Only user tags can be deleted.
   *   
   *     > User tags are tags that users manually add to instances. System tags are tags that Alibaba Cloud services add to user instances. System tags are classified into visible tags and invisible tags.
   * - If a tag is not associated with any resource, the tag is also deleted when the resource tag association is deleted.
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
   * Deletes user resource tag associations for a specified instance.
   * 
   * @remarks
   * When calling this operation, note the following:
   * - Only user tags can be deleted.
   *   
   *     > User tags are tags that users manually add to instances. System tags are tags that Alibaba Cloud services add to user instances. System tags are classified into visible tags and invisible tags.
   * - If a tag is not associated with any resource, the tag is also deleted when the resource tag association is deleted.
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
   * Updates the password of the elastic account for a specified Elasticsearch instance.
   * 
   * @remarks
   * When you invoke this operation, note the following:
   * You cannot update information when the instance status is activating, invalid, or freeze (inactive).
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
   * Updates the password of the elastic account for a specified Elasticsearch instance.
   * 
   * @remarks
   * When you invoke this operation, note the following:
   * You cannot update information when the instance status is activating, invalid, or freeze (inactive).
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
   * Changes the garbage collector configuration of a specified Elasticsearch instance.
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
   * Changes the garbage collector configuration of a specified Elasticsearch instance.
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
   * Updates the dictionary of the AliNLP tokenizer plugin (analysis-aliws).
   * 
   * @remarks
   * When calling this operation, note the following:
   * - Instances of version 5.x do not support the AliNLP tokenizer plugin.
   * - If the dictionary file is sourced from OSS, ensure that the OSS bucket has public-read permission.
   * - If a previously uploaded dictionary is not configured with ORIGIN, calling this operation will delete the dictionary file.
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
   * Updates the dictionary of the AliNLP tokenizer plugin (analysis-aliws).
   * 
   * @remarks
   * When calling this operation, note the following:
   * - Instances of version 5.x do not support the AliNLP tokenizer plugin.
   * - If the dictionary file is sourced from OSS, ensure that the OSS bucket has public-read permission.
   * - If a previously uploaded dictionary is not configured with ORIGIN, calling this operation will delete the dictionary file.
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
   * Modifies the access blacklist of an Elasticsearch instance. This operation is deprecated.
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
   * Modifies the access blacklist of an Elasticsearch instance. This operation is deprecated.
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
   * Modifies the configuration of a collector.
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
   * Modifies the configuration of a collector.
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
   * Calls UpdateCollectorName to modify the name of a collector.
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
   * Calls UpdateCollectorName to modify the name of a collector.
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
   * Updates a composable index template for an Elasticsearch instance.
   * 
   * @remarks
   * For more information, see [Use OpenStore to store massive amounts of data](https://help.aliyun.com/document_detail/317694.html).
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
   * Updates a composable index template for an Elasticsearch instance.
   * 
   * @remarks
   * For more information, see [Use OpenStore to store massive amounts of data](https://help.aliyun.com/document_detail/317694.html).
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
   * Changes the name of an Elasticsearch instance.
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
   * Changes the name of an Elasticsearch instance.
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
   * Modifies the intelligent O&M scenario settings of a specified Elasticsearch instance.
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
   * Modifies the intelligent O&M scenario settings of a specified Elasticsearch instance.
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
   * Updates the user dictionary of an Elasticsearch instance.
   * 
   * @remarks
   * When calling this operation, note the following:
   * - If the dictionary file originates from OSS, ensure that the OSS storage space is publicly readable.
   * - If previously uploaded dictionaries are not configured with ORIGIN, the dictionary files will be deleted after this operation is called.
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
   * Updates the user dictionary of an Elasticsearch instance.
   * 
   * @remarks
   * When calling this operation, note the following:
   * - If the dictionary file originates from OSS, ensure that the OSS storage space is publicly readable.
   * - If previously uploaded dictionaries are not configured with ORIGIN, the dictionary files will be deleted after this operation is called.
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
   * Modify Cluster Dynamic Configuration
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
   * Modify Cluster Dynamic Configuration
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
   * Modifies the scenario-based configuration template of an Elasticsearch instance.
   * 
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
   * Modifies the scenario-based configuration template of an Elasticsearch instance.
   * 
   * @param request - UpdateExtendConfigRequest
   * @returns UpdateExtendConfigResponse
   */
  async updateExtendConfig(InstanceId: string, request: $_model.UpdateExtendConfigRequest): Promise<$_model.UpdateExtendConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExtendConfigWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates the extension file configuration of a Logstash instance.
   * 
   * @remarks
   * When calling this operation, note the following: Currently, this operation only supports deleting extension files that have been uploaded through the console. To add or modify extension files, perform the operations in the console.
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
   * Updates the extension file configuration of a Logstash instance.
   * 
   * @remarks
   * When calling this operation, note the following: Currently, this operation only supports deleting extension files that have been uploaded through the console. To add or modify extension files, perform the operations in the console.
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
   * Toggle the FalconSeek cloud-native kernel attribute for instances of Version 8.17.
   * 
   * @param request - UpdateFalconSeekRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFalconSeekResponse
   */
  async updateFalconSeekWithOptions(InstanceId: string, request: $_model.UpdateFalconSeekRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFalconSeekResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enable)) {
      query["enable"] = request.enable;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFalconSeek",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/falconseek`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFalconSeekResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFalconSeekResponse({}));
  }

  /**
   * Toggle the FalconSeek cloud-native kernel attribute for instances of Version 8.17.
   * 
   * @param request - UpdateFalconSeekRequest
   * @returns UpdateFalconSeekResponse
   */
  async updateFalconSeek(InstanceId: string, request: $_model.UpdateFalconSeekRequest): Promise<$_model.UpdateFalconSeekResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFalconSeekWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates the IK hot-word dictionary of an Alibaba Cloud Elasticsearch instance.
   * 
   * @remarks
   * When calling this operation, note the following:
   * - If the dictionary file is sourced from OSS, make sure the OSS bucket has public-read permission.
   * - If a previously uploaded dictionary is not configured with ORIGIN, the dictionary file will be deleted after this operation is called.
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
   * Updates the IK hot-word dictionary of an Alibaba Cloud Elasticsearch instance.
   * 
   * @remarks
   * When calling this operation, note the following:
   * - If the dictionary file is sourced from OSS, make sure the OSS bucket has public-read permission.
   * - If a previously uploaded dictionary is not configured with ORIGIN, the dictionary file will be deleted after this operation is called.
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
   * Modifies the lifecycle policy of an Elasticsearch index.
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
   * Modifies the lifecycle policy of an Elasticsearch index.
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
   * Modifies the template configuration of an Elasticsearch instance.
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
   * Modifies the template configuration of an Elasticsearch instance.
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
   * Upgrades the configuration of an Elasticsearch cluster, including the number of nodes, roles, specifications, and disk configurations.
   * 
   * @remarks
   * When you call this operation, note the following items:
   * For more precautions, see [Upgrade cluster configuration](https://help.aliyun.com/document_detail/96650.html) and [Downgrade cluster configuration](https://help.aliyun.com/document_detail/198887.html).
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

    if (!$dara.isNull(request.updateType)) {
      body["updateType"] = request.updateType;
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
   * Upgrades the configuration of an Elasticsearch cluster, including the number of nodes, roles, specifications, and disk configurations.
   * 
   * @remarks
   * When you call this operation, note the following items:
   * For more precautions, see [Upgrade cluster configuration](https://help.aliyun.com/document_detail/96650.html) and [Downgrade cluster configuration](https://help.aliyun.com/document_detail/198887.html).
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
   * Transforms the billing method of an Elasticsearch instance from pay-as-you-go to a subscription instance.
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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.paymentInfo)) {
      body["paymentInfo"] = request.paymentInfo;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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
   * Transforms the billing method of an Elasticsearch instance from pay-as-you-go to a subscription instance.
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
   * Modifies the YML parameter settings of a specified Elasticsearch instance.
   * 
   * @remarks
   * When you invoke this operation, note the following:
   * You cannot update the configuration when the instance status is activating, invalid, or inactive (freeze).
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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.esConfig)) {
      body["esConfig"] = request.esConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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
   * Modifies the YML parameter settings of a specified Elasticsearch instance.
   * 
   * @remarks
   * When you invoke this operation, note the following:
   * You cannot update the configuration when the instance status is activating, invalid, or inactive (freeze).
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
   * Update keystore
   * 
   * @param request - UpdateKeystoresRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKeystoresResponse
   */
  async updateKeystoresWithOptions(InstanceId: string, request: $_model.UpdateKeystoresRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKeystoresResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.remove)) {
      body["remove"] = request.remove;
    }

    if (!$dara.isNull(request.update)) {
      body["update"] = request.update;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKeystores",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/keystores`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKeystoresResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKeystoresResponse({}));
  }

  /**
   * Update keystore
   * 
   * @param request - UpdateKeystoresRequest
   * @returns UpdateKeystoresResponse
   */
  async updateKeystores(InstanceId: string, request: $_model.UpdateKeystoresRequest): Promise<$_model.UpdateKeystoresResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKeystoresWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Update Kibana private network access
   * 
   * @remarks
   * 1. This API operation supports only cloud-native instances. For instances of the legacy architecture, use the TriggerNetwork operation.
   * 2. The Kibana specifications must be greater than 1 vCPU and 2 GB of memory.
   * 
   * @param request - UpdateKibanaPvlNetworkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKibanaPvlNetworkResponse
   */
  async updateKibanaPvlNetworkWithOptions(InstanceId: string, request: $_model.UpdateKibanaPvlNetworkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKibanaPvlNetworkResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

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
   * Update Kibana private network access
   * 
   * @remarks
   * 1. This API operation supports only cloud-native instances. For instances of the legacy architecture, use the TriggerNetwork operation.
   * 2. The Kibana specifications must be greater than 1 vCPU and 2 GB of memory.
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
   * Modifies the Kibana configuration. Currently, only the Kibana language configuration can be modified.
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
   * Modifies the Kibana configuration. Currently, only the Kibana language configuration can be modified.
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
   * Enable or disable Alibaba Cloud account authentication for Kibana. After Alibaba Cloud account authentication is enabled, you must log on with your Alibaba Cloud account before you can use Kibana features.
   * 
   * @param request - UpdateKibanaSsoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKibanaSsoResponse
   */
  async updateKibanaSsoWithOptions(InstanceId: string, request: $_model.UpdateKibanaSsoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKibanaSsoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enable)) {
      query["enable"] = request.enable;
    }

    if (!$dara.isNull(request.networkType)) {
      query["networkType"] = request.networkType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKibanaSso",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(InstanceId)}/actions/kibana-sso`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKibanaSsoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKibanaSsoResponse({}));
  }

  /**
   * Enable or disable Alibaba Cloud account authentication for Kibana. After Alibaba Cloud account authentication is enabled, you must log on with your Alibaba Cloud account before you can use Kibana features.
   * 
   * @param request - UpdateKibanaSsoRequest
   * @returns UpdateKibanaSsoResponse
   */
  async updateKibanaSso(InstanceId: string, request: $_model.UpdateKibanaSsoRequest): Promise<$_model.UpdateKibanaSsoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKibanaSsoWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Updates the Kibana access whitelist of a specified Alibaba Cloud Elasticsearch instance.
   * 
   * @remarks
   * ## Before you begin
   * - When you invoke this operation, you cannot update information if the instance status is activating, invalid, or freeze (inactive).
   * - You can update the whitelist in two ways: IP whitelist list and IP whitelist group. The two methods cannot be used at the same time. In addition to InstanceId and clientToken, the two methods support different parameters, as follows: 
   *     - IP whitelist list: kibanaIPWhitelist
   *     - IP whitelist group: modifyMode, whiteIpGroup
   * - The public network access whitelist does not support private IP addresses, and the internal-facing whitelist does not support public IP addresses.
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
   * Updates the Kibana access whitelist of a specified Alibaba Cloud Elasticsearch instance.
   * 
   * @remarks
   * ## Before you begin
   * - When you invoke this operation, you cannot update information if the instance status is activating, invalid, or freeze (inactive).
   * - You can update the whitelist in two ways: IP whitelist list and IP whitelist group. The two methods cannot be used at the same time. In addition to InstanceId and clientToken, the two methods support different parameters, as follows: 
   *     - IP whitelist list: kibanaIPWhitelist
   *     - IP whitelist group: modifyMode, whiteIpGroup
   * - The public network access whitelist does not support private IP addresses, and the internal-facing whitelist does not support public IP addresses.
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
   * Modifies some information about a specified instance, such as the number of nodes, quota, name, and disk size.
   * 
   * @remarks
   * ### Before you begin
   * You cannot modify instance information when the instance status is activating, invalid, or freeze (inactive).
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
   * Modifies some information about a specified instance, such as the number of nodes, quota, name, and disk size.
   * 
   * @remarks
   * ### Before you begin
   * You cannot modify instance information when the instance status is activating, invalid, or freeze (inactive).
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
   * Converts a pay-as-you-go Alibaba Cloud Logstash instance to a subscription instance.
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
   * Converts a pay-as-you-go Alibaba Cloud Logstash instance to a subscription instance.
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
   * Modifies the name of a specified Logstash instance.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * You cannot modify the instance name when the instance status is activating, invalid, or freeze (inactive).
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
   * Modifies the name of a specified Logstash instance.
   * 
   * @remarks
   * When you call this operation, take note of the following items:
   * You cannot modify the instance name when the instance status is activating, invalid, or freeze (inactive).
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
   * Updates the configuration of a specified Logstash instance.
   * 
   * @remarks
   * When you invoke this operation, note the following: The instance configuration cannot be updated when the instance status is activating, invalid, or freeze (inactive).
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
   * Updates the configuration of a specified Logstash instance.
   * 
   * @remarks
   * When you invoke this operation, note the following: The instance configuration cannot be updated when the instance status is activating, invalid, or freeze (inactive).
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
   * Modifies the pipeline management method for a specified Logstash instance.
   * 
   * @remarks
   * > Pipeline management methods include configuration file management and Kibana pipeline management. The console no longer supports Kibana pipeline management. You can use this feature only through the API.
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
   * Modifies the pipeline management method for a specified Logstash instance.
   * 
   * @remarks
   * > Pipeline management methods include configuration file management and Kibana pipeline management. The console no longer supports Kibana pipeline management. You can use this feature only through the API.
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
   * Calls UpdatePipelines to update Logstash pipeline information.
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
   * Calls UpdatePipelines to update Logstash pipeline information.
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
   * Updates the VPC private network access whitelist of a specified instance.
   * 
   * @remarks
   * ## Before you begin
   * - You cannot update the VPC private network access whitelist of an instance when the instance status is Activating (activating), Invalid (invalid), or Freeze (inactive).
   * - You can update the whitelist in two ways: by using an IP whitelist list or by using an IP whitelist group. The two methods cannot be used at the same time. In addition to InstanceId and clientToken, the two methods support different parameters:
   *     - IP whitelist list: privateNetworkIpWhiteList
   *     - IP whitelist group: modifyMode, whiteIpGroup
   * - The public network access whitelist does not support private IP addresses, and the private network access whitelist does not support public IP addresses.
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
   * Updates the VPC private network access whitelist of a specified instance.
   * 
   * @remarks
   * ## Before you begin
   * - You cannot update the VPC private network access whitelist of an instance when the instance status is Activating (activating), Invalid (invalid), or Freeze (inactive).
   * - You can update the whitelist in two ways: by using an IP whitelist list or by using an IP whitelist group. The two methods cannot be used at the same time. In addition to InstanceId and clientToken, the two methods support different parameters:
   *     - IP whitelist list: privateNetworkIpWhiteList
   *     - IP whitelist group: modifyMode, whiteIpGroup
   * - The public network access whitelist does not support private IP addresses, and the private network access whitelist does not support public IP addresses.
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
   * Enables or disables the public network address for a specified Elasticsearch instance.
   * 
   * @remarks
   * When you call this operation, note the following:
   * You cannot update information when the instance status is activating, invalid, or freeze (inactive).
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
   * Enables or disables the public network address for a specified Elasticsearch instance.
   * 
   * @remarks
   * When you call this operation, note the following:
   * You cannot update information when the instance status is activating, invalid, or freeze (inactive).
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
   * Updates the public endpoint access whitelist of a specified Elasticsearch instance.
   * 
   * @remarks
   * ## Before you begin
   * - You cannot update the public endpoint access whitelist of an instance when the instance status is activating, invalid, or inactive (freeze).
   * - You can update the whitelist in two ways: IP whitelist list and IP whitelist group. The two methods cannot be used at the same time. In addition to InstanceId and clientToken, the two methods support different parameters:   
   *     - IP whitelist list: publicIpWhitelist
   *     - IP whitelist group: modifyMode, whiteIpGroup
   * - The public network access whitelist does not support private network IP addresses, and the private network access whitelist does not support public network IP addresses.
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
   * Updates the public endpoint access whitelist of a specified Elasticsearch instance.
   * 
   * @remarks
   * ## Before you begin
   * - You cannot update the public endpoint access whitelist of an instance when the instance status is activating, invalid, or inactive (freeze).
   * - You can update the whitelist in two ways: IP whitelist list and IP whitelist group. The two methods cannot be used at the same time. In addition to InstanceId and clientToken, the two methods support different parameters:   
   *     - IP whitelist list: publicIpWhitelist
   *     - IP whitelist group: modifyMode, whiteIpGroup
   * - The public network access whitelist does not support private network IP addresses, and the private network access whitelist does not support public network IP addresses.
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
   * Enables or disables the write high availability feature for a cluster. Currently, only instances in the China (Beijing) region are supported.
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
   * Enables or disables the write high availability feature for a cluster. Currently, only instances in the China (Beijing) region are supported.
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
   * Updates the data backup configuration of a specified instance.
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
   * Updates the data backup configuration of a specified instance.
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
   * Updates the synonym dictionary of an Alibaba Cloud Elasticsearch instance.
   * 
   * @remarks
   * When calling this operation, note the following:
   * - If the dictionary file is sourced from OSS, make sure the OSS bucket has public-read permission.
   * - If a previously uploaded dictionary is not configured with ORIGIN, the dictionary file will be deleted after this operation is called.
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
   * Updates the synonym dictionary of an Alibaba Cloud Elasticsearch instance.
   * 
   * @remarks
   * When calling this operation, note the following:
   * - If the dictionary file is sourced from OSS, make sure the OSS bucket has public-read permission.
   * - If a previously uploaded dictionary is not configured with ORIGIN, the dictionary file will be deleted after this operation is called.
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
   * Modifies the scenario-specific template configuration of a cluster.
   * 
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
   * Modifies the scenario-specific template configuration of a cluster.
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(InstanceId: string, TemplateName: string, request: $_model.UpdateTemplateRequest): Promise<$_model.UpdateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(InstanceId, TemplateName, request, headers, runtime);
  }

  /**
   * Modifies the VPC internal-facing access whitelist of an Elasticsearch instance.
   * 
   * @remarks
   * ## Before you begin
   * - You cannot update information when the instance status is activating, invalid, or freeze (inactive).
   * - You can update the whitelist in two ways: IP whitelist list and IP whitelist group. The two methods cannot be used at the same time, and they support different parameters besides InstanceId and clientToken. The details are as follows: 
   *     - IP whitelist list: esIPWhitelist
   *     - IP whitelist group: modifyMode, whiteIpGroup
   * - The public access whitelist does not support private network IP addresses, and the internal-facing access whitelist does not support public IP addresses.
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
   * Modifies the VPC internal-facing access whitelist of an Elasticsearch instance.
   * 
   * @remarks
   * ## Before you begin
   * - You cannot update information when the instance status is activating, invalid, or freeze (inactive).
   * - You can update the whitelist in two ways: IP whitelist list and IP whitelist group. The two methods cannot be used at the same time, and they support different parameters besides InstanceId and clientToken. The details are as follows: 
   *     - IP whitelist list: esIPWhitelist
   *     - IP whitelist group: modifyMode, whiteIpGroup
   * - The public access whitelist does not support private network IP addresses, and the internal-facing access whitelist does not support public IP addresses.
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
   * Updates the X-Pack monitoring and alerting configuration of a Logstash instance.
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
   * Updates the X-Pack monitoring and alerting configuration of a Logstash instance.
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
   * Upgrades the version of an Elasticsearch instance. Both major version upgrades and kernel version upgrades are supported.
   * 
   * @remarks
   * > The version upgrade feature currently supports only the following upgrade paths: 5.5.3 to 5.6.16, 5.6.16 to 6.3.2, and 6.3.2 to 6.7.0. Upgrades between other versions are not supported. For more information, see [Upgrade version](https://help.aliyun.com/document_detail/148786.html).
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
   * Upgrades the version of an Elasticsearch instance. Both major version upgrades and kernel version upgrades are supported.
   * 
   * @remarks
   * > The version upgrade feature currently supports only the following upgrade paths: 5.5.3 to 5.6.16, 5.6.16 to 6.3.2, and 6.3.2 to 6.7.0. Upgrades between other versions are not supported. For more information, see [Upgrade version](https://help.aliyun.com/document_detail/148786.html).
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
   * Query whether a minor version is available for upgrade.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeInfoResponse
   */
  async upgradeInfoWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpgradeInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeInfo",
      version: "2017-06-13",
      protocol: "HTTPS",
      pathname: `/openapi/instances/${$dara.URL.percentEncode(instanceId)}/upgradeInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpgradeInfoResponse>(await this.callApi(params, req, runtime), new $_model.UpgradeInfoResponse({}));
  }

  /**
   * Query whether a minor version is available for upgrade.
   * @returns UpgradeInfoResponse
   */
  async upgradeInfo(instanceId: string): Promise<$_model.UpgradeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeInfoWithOptions(instanceId, headers, runtime);
  }

  /**
   * Validates the connectivity of an Elasticsearch instance that provides X-Pack monitoring.
   * 
   * @remarks
   * > To enable X-Pack monitoring for Logstash, configure an Elasticsearch instance. After the configuration, you can monitor the Logstash instance in the Kibana console of the corresponding Elasticsearch instance.
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
   * Validates the connectivity of an Elasticsearch instance that provides X-Pack monitoring.
   * 
   * @remarks
   * > To enable X-Pack monitoring for Logstash, configure an Elasticsearch instance. After the configuration, you can monitor the Logstash instance in the Kibana console of the corresponding Elasticsearch instance.
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
   * Checks whether specific nodes in a specified instance can be scaled in.
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
   * Checks whether specific nodes in a specified instance can be scaled in.
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
   * Verifies the service-linked role (SLR) permission of the current account.
   * 
   * @remarks
   * > When you use a collector to collect logs from different data sources, you must first authorize the creation of a service-linked role. You can call this operation to check whether the service-linked role has been created.
   * 
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
   * Verifies the service-linked role (SLR) permission of the current account.
   * 
   * @remarks
   * > When you use a collector to collect logs from different data sources, you must first authorize the creation of a service-linked role. You can call this operation to check whether the service-linked role has been created.
   * 
   * @param request - ValidateSlrPermissionRequest
   * @returns ValidateSlrPermissionResponse
   */
  async validateSlrPermission(request: $_model.ValidateSlrPermissionRequest): Promise<$_model.ValidateSlrPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateSlrPermissionWithOptions(request, headers, runtime);
  }

  /**
   * Validates whether data on specific nodes in a specified instance can be migrated.
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
   * Validates whether data on specific nodes in a specified instance can be migrated.
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
   * Creates an Elasticsearch instance.
   * 
   * @remarks
   * ### Precautions
   * - Before using this operation, make sure that you fully understand the billing methods and pricing of Elasticsearch. For more information, see [Alibaba Cloud Elasticsearch pricing](https://www.aliyun.com/price/product?spm=a2c4g.11186623.2.7.657d2cbeRoSPCd#/elasticsearch/detail).
   * - Real-name verification is required to create instances.<props="china"><ph> For more information, see [Real-name verification](https://help.aliyun.com/document_detail/37175.html).</ph>
   * - You do not need to specify a zone when creating an instance. By default, the instance is in the same zone as the selected VPC.
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
   * Creates an Elasticsearch instance.
   * 
   * @remarks
   * ### Precautions
   * - Before using this operation, make sure that you fully understand the billing methods and pricing of Elasticsearch. For more information, see [Alibaba Cloud Elasticsearch pricing](https://www.aliyun.com/price/product?spm=a2c4g.11186623.2.7.657d2cbeRoSPCd#/elasticsearch/detail).
   * - Real-name verification is required to create instances.<props="china"><ph> For more information, see [Real-name verification](https://help.aliyun.com/document_detail/37175.html).</ph>
   * - You do not need to specify a zone when creating an instance. By default, the instance is in the same zone as the selected VPC.
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
