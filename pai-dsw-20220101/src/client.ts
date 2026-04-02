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
    this._endpoint = this.getEndpoint("pai-dsw", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 诊断问题
   * 
   * @param request - CreateDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDiagnosisResponse
   */
  async createDiagnosisWithOptions(request: $_model.CreateDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDiagnosisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gmtFailureTime)) {
      body["GmtFailureTime"] = request.gmtFailureTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.problemCategory)) {
      body["ProblemCategory"] = request.problemCategory;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDiagnosis",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/diagnoses`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.CreateDiagnosisResponse({}));
  }

  /**
   * 诊断问题
   * 
   * @param request - CreateDiagnosisRequest
   * @returns CreateDiagnosisResponse
   */
  async createDiagnosis(request: $_model.CreateDiagnosisRequest): Promise<$_model.CreateDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDiagnosisWithOptions(request, headers, runtime);
  }

  /**
   * Creates an automatic stop policy for a specific Data Science Workshop (DSW) instance. When the conditions are met, the instance is automatically stopped. You can create only one automatic stop policy for an idle DSW instance. If the specific instance has an automatic stop policy, call DeleteIdleInstanceCuller to delete it first.
   * 
   * @param request - CreateIdleInstanceCullerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateIdleInstanceCullerResponse
   */
  async createIdleInstanceCullerWithOptions(InstanceId: string, request: $_model.CreateIdleInstanceCullerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateIdleInstanceCullerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cpuPercentThreshold)) {
      body["CpuPercentThreshold"] = request.cpuPercentThreshold;
    }

    if (!$dara.isNull(request.gpuPercentThreshold)) {
      body["GpuPercentThreshold"] = request.gpuPercentThreshold;
    }

    if (!$dara.isNull(request.maxIdleTimeInMinutes)) {
      body["MaxIdleTimeInMinutes"] = request.maxIdleTimeInMinutes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateIdleInstanceCuller",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/idleinstanceculler`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateIdleInstanceCullerResponse>(await this.callApi(params, req, runtime), new $_model.CreateIdleInstanceCullerResponse({}));
  }

  /**
   * Creates an automatic stop policy for a specific Data Science Workshop (DSW) instance. When the conditions are met, the instance is automatically stopped. You can create only one automatic stop policy for an idle DSW instance. If the specific instance has an automatic stop policy, call DeleteIdleInstanceCuller to delete it first.
   * 
   * @param request - CreateIdleInstanceCullerRequest
   * @returns CreateIdleInstanceCullerResponse
   */
  async createIdleInstanceCuller(InstanceId: string, request: $_model.CreateIdleInstanceCullerRequest): Promise<$_model.CreateIdleInstanceCullerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIdleInstanceCullerWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Creates a Data Science Workshop (DSW) instance.
   * 
   * @param request - CreateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceResponse
   */
  async createInstanceWithOptions(request: $_model.CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessRestrictionRules)) {
      body["AccessRestrictionRules"] = request.accessRestrictionRules;
    }

    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.affinity)) {
      body["Affinity"] = request.affinity;
    }

    if (!$dara.isNull(request.assignNodeSpec)) {
      body["AssignNodeSpec"] = request.assignNodeSpec;
    }

    if (!$dara.isNull(request.cloudDisks)) {
      body["CloudDisks"] = request.cloudDisks;
    }

    if (!$dara.isNull(request.credentialConfig)) {
      body["CredentialConfig"] = request.credentialConfig;
    }

    if (!$dara.isNull(request.datasets)) {
      body["Datasets"] = request.datasets;
    }

    if (!$dara.isNull(request.dockerConfig)) {
      body["DockerConfig"] = request.dockerConfig;
    }

    if (!$dara.isNull(request.driver)) {
      body["Driver"] = request.driver;
    }

    if (!$dara.isNull(request.dynamicMount)) {
      body["DynamicMount"] = request.dynamicMount;
    }

    if (!$dara.isNull(request.ecsSpec)) {
      body["EcsSpec"] = request.ecsSpec;
    }

    if (!$dara.isNull(request.environmentVariables)) {
      body["EnvironmentVariables"] = request.environmentVariables;
    }

    if (!$dara.isNull(request.imageAuth)) {
      body["ImageAuth"] = request.imageAuth;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.migrationOptions)) {
      body["MigrationOptions"] = request.migrationOptions;
    }

    if (!$dara.isNull(request.oversoldType)) {
      body["OversoldType"] = request.oversoldType;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.requestedResource)) {
      body["RequestedResource"] = request.requestedResource;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.spotSpec)) {
      body["SpotSpec"] = request.spotSpec;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.userCommand)) {
      body["UserCommand"] = request.userCommand;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceSource)) {
      body["WorkspaceSource"] = request.workspaceSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceResponse({}));
  }

  /**
   * Creates a Data Science Workshop (DSW) instance.
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
   * Creates a scheduled stop task for an instance.
   * 
   * @param request - CreateInstanceShutdownTimerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceShutdownTimerResponse
   */
  async createInstanceShutdownTimerWithOptions(InstanceId: string, request: $_model.CreateInstanceShutdownTimerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceShutdownTimerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dueTime)) {
      body["DueTime"] = request.dueTime;
    }

    if (!$dara.isNull(request.remainingTimeInMs)) {
      body["RemainingTimeInMs"] = request.remainingTimeInMs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceShutdownTimer",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/shutdowntimer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceShutdownTimerResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceShutdownTimerResponse({}));
  }

  /**
   * Creates a scheduled stop task for an instance.
   * 
   * @param request - CreateInstanceShutdownTimerRequest
   * @returns CreateInstanceShutdownTimerResponse
   */
  async createInstanceShutdownTimer(InstanceId: string, request: $_model.CreateInstanceShutdownTimerRequest): Promise<$_model.CreateInstanceShutdownTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceShutdownTimerWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建实例快照
   * 
   * @param request - CreateInstanceSnapshotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceSnapshotResponse
   */
  async createInstanceSnapshotWithOptions(InstanceId: string, request: $_model.CreateInstanceSnapshotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceSnapshotResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludePaths)) {
      body["ExcludePaths"] = request.excludePaths;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.overwrite)) {
      body["Overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.snapshotDescription)) {
      body["SnapshotDescription"] = request.snapshotDescription;
    }

    if (!$dara.isNull(request.snapshotName)) {
      body["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceSnapshot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/snapshots`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceSnapshotResponse({}));
  }

  /**
   * 创建实例快照
   * 
   * @param request - CreateInstanceSnapshotRequest
   * @returns CreateInstanceSnapshotResponse
   */
  async createInstanceSnapshot(InstanceId: string, request: $_model.CreateInstanceSnapshotRequest): Promise<$_model.CreateInstanceSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceSnapshotWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 创建一个健康检查任务
   * 
   * @param request - CreateSanityCheckTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSanityCheckTaskResponse
   */
  async createSanityCheckTaskWithOptions(CheckType: string, request: $_model.CreateSanityCheckTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSanityCheckTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSanityCheckTask",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/sanitychecks/${$dara.URL.percentEncode(CheckType)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSanityCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateSanityCheckTaskResponse({}));
  }

  /**
   * 创建一个健康检查任务
   * 
   * @param request - CreateSanityCheckTaskRequest
   * @returns CreateSanityCheckTaskResponse
   */
  async createSanityCheckTask(CheckType: string, request: $_model.CreateSanityCheckTaskRequest): Promise<$_model.CreateSanityCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSanityCheckTaskWithOptions(CheckType, request, headers, runtime);
  }

  /**
   * 创建临时文件
   * 
   * @param request - CreateTempFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTempFileResponse
   */
  async createTempFileWithOptions(request: $_model.CreateTempFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTempFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.capacity)) {
      body["Capacity"] = request.capacity;
    }

    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.prefix)) {
      body["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTempFile",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tempfiles`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTempFileResponse>(await this.callApi(params, req, runtime), new $_model.CreateTempFileResponse({}));
  }

  /**
   * 创建临时文件
   * 
   * @param request - CreateTempFileRequest
   * @returns CreateTempFileResponse
   */
  async createTempFile(request: $_model.CreateTempFileRequest): Promise<$_model.CreateTempFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTempFileWithOptions(request, headers, runtime);
  }

  /**
   * 创建临时文件任务
   * 
   * @param request - CreateTempFileTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTempFileTaskResponse
   */
  async createTempFileTaskWithOptions(request: $_model.CreateTempFileTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTempFileTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTempFileTask",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tempfiletasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTempFileTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTempFileTaskResponse({}));
  }

  /**
   * 创建临时文件任务
   * 
   * @param request - CreateTempFileTaskRequest
   * @returns CreateTempFileTaskResponse
   */
  async createTempFileTask(request: $_model.CreateTempFileTaskRequest): Promise<$_model.CreateTempFileTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTempFileTaskWithOptions(request, headers, runtime);
  }

  /**
   * Deletes the automatic stop policy of an instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteIdleInstanceCullerResponse
   */
  async deleteIdleInstanceCullerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteIdleInstanceCullerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteIdleInstanceCuller",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/idleinstanceculler`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteIdleInstanceCullerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteIdleInstanceCullerResponse({}));
  }

  /**
   * Deletes the automatic stop policy of an instance.
   * @returns DeleteIdleInstanceCullerResponse
   */
  async deleteIdleInstanceCuller(InstanceId: string): Promise<$_model.DeleteIdleInstanceCullerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIdleInstanceCullerWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Deletes a specific instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceResponse
   */
  async deleteInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceResponse({}));
  }

  /**
   * Deletes a specific instance.
   * @returns DeleteInstanceResponse
   */
  async deleteInstance(InstanceId: string): Promise<$_model.DeleteInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Delete tags from a Data Science Workshop (DSW) instance.
   * 
   * @param request - DeleteInstanceLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceLabelsResponse
   */
  async deleteInstanceLabelsWithOptions(InstanceId: string, request: $_model.DeleteInstanceLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceLabels",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceLabelsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceLabelsResponse({}));
  }

  /**
   * Delete tags from a Data Science Workshop (DSW) instance.
   * 
   * @param request - DeleteInstanceLabelsRequest
   * @returns DeleteInstanceLabelsResponse
   */
  async deleteInstanceLabels(InstanceId: string, request: $_model.DeleteInstanceLabelsRequest): Promise<$_model.DeleteInstanceLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceLabelsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Deletes a scheduled stop task of an instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceShutdownTimerResponse
   */
  async deleteInstanceShutdownTimerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceShutdownTimerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceShutdownTimer",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/shutdowntimer`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceShutdownTimerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceShutdownTimerResponse({}));
  }

  /**
   * Deletes a scheduled stop task of an instance.
   * @returns DeleteInstanceShutdownTimerResponse
   */
  async deleteInstanceShutdownTimer(InstanceId: string): Promise<$_model.DeleteInstanceShutdownTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceShutdownTimerWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 获取实例快照详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceSnapshotResponse
   */
  async deleteInstanceSnapshotWithOptions(InstanceId: string, SnapshotId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceSnapshotResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceSnapshot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/snapshots/${$dara.URL.percentEncode(SnapshotId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceSnapshotResponse({}));
  }

  /**
   * 获取实例快照详情
   * @returns DeleteInstanceSnapshotResponse
   */
  async deleteInstanceSnapshot(InstanceId: string, SnapshotId: string): Promise<$_model.DeleteInstanceSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceSnapshotWithOptions(InstanceId, SnapshotId, headers, runtime);
  }

  /**
   * 批量删除实例
   * 
   * @param request - DeleteInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstancesResponse
   */
  async deleteInstancesWithOptions(request: $_model.DeleteInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceIds)) {
      body["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstances",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/batch/instances/delete`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstancesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstancesResponse({}));
  }

  /**
   * 批量删除实例
   * 
   * @param request - DeleteInstancesRequest
   * @returns DeleteInstancesResponse
   */
  async deleteInstances(request: $_model.DeleteInstancesRequest): Promise<$_model.DeleteInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 删除临时文件
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTempFileResponse
   */
  async deleteTempFileWithOptions(TempFileId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTempFileResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTempFile",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tempfiles/${$dara.URL.percentEncode(TempFileId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTempFileResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTempFileResponse({}));
  }

  /**
   * 删除临时文件
   * @returns DeleteTempFileResponse
   */
  async deleteTempFile(TempFileId: string): Promise<$_model.DeleteTempFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTempFileWithOptions(TempFileId, headers, runtime);
  }

  /**
   * 删除临时文件
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTempFileTaskResponse
   */
  async deleteTempFileTaskWithOptions(TempFileTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTempFileTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTempFileTask",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tempfiletasks/${$dara.URL.percentEncode(TempFileTaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTempFileTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTempFileTaskResponse({}));
  }

  /**
   * 删除临时文件
   * @returns DeleteTempFileTaskResponse
   */
  async deleteTempFileTask(TempFileTaskId: string): Promise<$_model.DeleteTempFileTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTempFileTaskWithOptions(TempFileTaskId, headers, runtime);
  }

  /**
   * 批量删除临时文件
   * 
   * @param request - DeleteTempFileTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTempFileTasksResponse
   */
  async deleteTempFileTasksWithOptions(request: $_model.DeleteTempFileTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTempFileTasksResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tempFileTaskIds)) {
      body["TempFileTaskIds"] = request.tempFileTaskIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTempFileTasks",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/batch/tempfiletasks/delete`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTempFileTasksResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTempFileTasksResponse({}));
  }

  /**
   * 批量删除临时文件
   * 
   * @param request - DeleteTempFileTasksRequest
   * @returns DeleteTempFileTasksResponse
   */
  async deleteTempFileTasks(request: $_model.DeleteTempFileTasksRequest): Promise<$_model.DeleteTempFileTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTempFileTasksWithOptions(request, headers, runtime);
  }

  /**
   * Queries the information about an auto stop policy for a specific idle instance.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIdleInstanceCullerResponse
   */
  async getIdleInstanceCullerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIdleInstanceCullerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIdleInstanceCuller",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/idleinstanceculler`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIdleInstanceCullerResponse>(await this.callApi(params, req, runtime), new $_model.GetIdleInstanceCullerResponse({}));
  }

  /**
   * Queries the information about an auto stop policy for a specific idle instance.
   * @returns GetIdleInstanceCullerResponse
   */
  async getIdleInstanceCuller(InstanceId: string): Promise<$_model.GetIdleInstanceCullerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIdleInstanceCullerWithOptions(InstanceId, headers, runtime);
  }

  /**
   * Queries the details of a DSW instance.
   * 
   * @param request - GetInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(InstanceId: string, request: $_model.GetInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * Queries the details of a DSW instance.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(InstanceId: string, request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries a list of system events for a Data Science Workshop (DSW) instance.
   * 
   * @param request - GetInstanceEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceEventsResponse
   */
  async getInstanceEventsWithOptions(InstanceId: string, request: $_model.GetInstanceEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventLevel)) {
      query["EventLevel"] = request.eventLevel;
    }

    if (!$dara.isNull(request.maxEventsNum)) {
      query["MaxEventsNum"] = request.maxEventsNum;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceEvents",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceEventsResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceEventsResponse({}));
  }

  /**
   * Queries a list of system events for a Data Science Workshop (DSW) instance.
   * 
   * @param request - GetInstanceEventsRequest
   * @returns GetInstanceEventsResponse
   */
  async getInstanceEvents(InstanceId: string, request: $_model.GetInstanceEventsRequest): Promise<$_model.GetInstanceEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceEventsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * Queries the resource metrics of an instance.
   * 
   * @param request - GetInstanceMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceMetricsResponse
   */
  async getInstanceMetricsWithOptions(InstanceId: string, request: $_model.GetInstanceMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceMetrics",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instance/${$dara.URL.percentEncode(InstanceId)}/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceMetricsResponse({}));
  }

  /**
   * Queries the resource metrics of an instance.
   * 
   * @param request - GetInstanceMetricsRequest
   * @returns GetInstanceMetricsResponse
   */
  async getInstanceMetrics(InstanceId: string, request: $_model.GetInstanceMetricsRequest): Promise<$_model.GetInstanceMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceMetricsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取定时关机任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceShutdownTimerResponse
   */
  async getInstanceShutdownTimerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceShutdownTimerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceShutdownTimer",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/shutdowntimer`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceShutdownTimerResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceShutdownTimerResponse({}));
  }

  /**
   * 获取定时关机任务
   * @returns GetInstanceShutdownTimerResponse
   */
  async getInstanceShutdownTimer(InstanceId: string): Promise<$_model.GetInstanceShutdownTimerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceShutdownTimerWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 获取实例快照详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceSnapshotResponse
   */
  async getInstanceSnapshotWithOptions(InstanceId: string, SnapshotId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceSnapshotResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceSnapshot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/snapshots/${$dara.URL.percentEncode(SnapshotId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceSnapshotResponse({}));
  }

  /**
   * 获取实例快照详情
   * @returns GetInstanceSnapshotResponse
   */
  async getInstanceSnapshot(InstanceId: string, SnapshotId: string): Promise<$_model.GetInstanceSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceSnapshotWithOptions(InstanceId, SnapshotId, headers, runtime);
  }

  /**
   * Obtains the lifecycle of an instance
   * 
   * @remarks
   * Obtains the lifecycle transition information for an instance, including details on the status an instance transitions to at a specific point in time.
   * 
   * @param request - GetLifecycleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLifecycleResponse
   */
  async getLifecycleWithOptions(InstanceId: string, request: $_model.GetLifecycleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetLifecycleResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.sessionNumber)) {
      query["SessionNumber"] = request.sessionNumber;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLifecycle",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/lifecycle`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLifecycleResponse>(await this.callApi(params, req, runtime), new $_model.GetLifecycleResponse({}));
  }

  /**
   * Obtains the lifecycle of an instance
   * 
   * @remarks
   * Obtains the lifecycle transition information for an instance, including details on the status an instance transitions to at a specific point in time.
   * 
   * @param request - GetLifecycleRequest
   * @returns GetLifecycleResponse
   */
  async getLifecycle(InstanceId: string, request: $_model.GetLifecycleRequest): Promise<$_model.GetLifecycleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLifecycleWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取metrics数据
   * 
   * @param request - GetMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMetricsResponse
   */
  async getMetricsWithOptions(InstanceId: string, request: $_model.GetMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dimensions)) {
      query["Dimensions"] = request.dimensions;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.length)) {
      query["Length"] = request.length;
    }

    if (!$dara.isNull(request.metricName)) {
      query["MetricName"] = request.metricName;
    }

    if (!$dara.isNull(request.namespace)) {
      query["Namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.period)) {
      query["Period"] = request.period;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMetrics",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instance/${$dara.URL.percentEncode(InstanceId)}/cms/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMetricsResponse>(await this.callApi(params, req, runtime), new $_model.GetMetricsResponse({}));
  }

  /**
   * 获取metrics数据
   * 
   * @param request - GetMetricsRequest
   * @returns GetMetricsResponse
   */
  async getMetrics(InstanceId: string, request: $_model.GetMetricsRequest): Promise<$_model.GetMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMetricsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取资源组统计
   * 
   * @param request - GetResourceGroupStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupStatisticsResponse
   */
  async getResourceGroupStatisticsWithOptions(request: $_model.GetResourceGroupStatisticsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceGroupStatisticsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroupStatistics",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resourcegroupstatistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceGroupStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceGroupStatisticsResponse({}));
  }

  /**
   * 获取资源组统计
   * 
   * @param request - GetResourceGroupStatisticsRequest
   * @returns GetResourceGroupStatisticsResponse
   */
  async getResourceGroupStatistics(request: $_model.GetResourceGroupStatisticsRequest): Promise<$_model.GetResourceGroupStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * 查询健康检查任务结果
   * 
   * @param request - GetSanityCheckTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSanityCheckTaskResponse
   */
  async getSanityCheckTaskWithOptions(CheckType: string, TaskId: string, request: $_model.GetSanityCheckTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSanityCheckTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSanityCheckTask",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/sanitychecks/${$dara.URL.percentEncode(CheckType)}/${$dara.URL.percentEncode(TaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSanityCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetSanityCheckTaskResponse({}));
  }

  /**
   * 查询健康检查任务结果
   * 
   * @param request - GetSanityCheckTaskRequest
   * @returns GetSanityCheckTaskResponse
   */
  async getSanityCheckTask(CheckType: string, TaskId: string, request: $_model.GetSanityCheckTaskRequest): Promise<$_model.GetSanityCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSanityCheckTaskWithOptions(CheckType, TaskId, request, headers, runtime);
  }

  /**
   * 获取临时文件详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTempFileResponse
   */
  async getTempFileWithOptions(TempFileId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTempFileResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTempFile",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tempfiles/${$dara.URL.percentEncode(TempFileId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTempFileResponse>(await this.callApi(params, req, runtime), new $_model.GetTempFileResponse({}));
  }

  /**
   * 获取临时文件详情
   * @returns GetTempFileResponse
   */
  async getTempFile(TempFileId: string): Promise<$_model.GetTempFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTempFileWithOptions(TempFileId, headers, runtime);
  }

  /**
   * 获取临时文件任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTempFileTaskResponse
   */
  async getTempFileTaskWithOptions(TempFileTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTempFileTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTempFileTask",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tempfiletasks/${$dara.URL.percentEncode(TempFileTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTempFileTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTempFileTaskResponse({}));
  }

  /**
   * 获取临时文件任务
   * @returns GetTempFileTaskResponse
   */
  async getTempFileTask(TempFileTaskId: string): Promise<$_model.GetTempFileTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTempFileTaskWithOptions(TempFileTaskId, headers, runtime);
  }

  /**
   * Obtains the temporary authentication information of a DSW instance.
   * 
   * @param request - GetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: $_model.GetTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.audience)) {
      query["Audience"] = request.audience;
    }

    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToken",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tokens`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenResponse({}));
  }

  /**
   * Obtains the temporary authentication information of a DSW instance.
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: $_model.GetTokenRequest): Promise<$_model.GetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  /**
   * Get the user defined command
   * 
   * @param request - GetUserCommandRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserCommandResponse
   */
  async getUserCommandWithOptions(UserCommandId: string, request: $_model.GetUserCommandRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserCommandResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserCommand",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/usercommands/${$dara.URL.percentEncode(UserCommandId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserCommandResponse>(await this.callApi(params, req, runtime), new $_model.GetUserCommandResponse({}));
  }

  /**
   * Get the user defined command
   * 
   * @param request - GetUserCommandRequest
   * @returns GetUserCommandResponse
   */
  async getUserCommand(UserCommandId: string, request: $_model.GetUserCommandRequest): Promise<$_model.GetUserCommandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserCommandWithOptions(UserCommandId, request, headers, runtime);
  }

  /**
   * 获取用户配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserConfigResponse
   */
  async getUserConfigWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserConfig",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/userconfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetUserConfigResponse({}));
  }

  /**
   * 获取用户配置
   * @returns GetUserConfigResponse
   */
  async getUserConfig(): Promise<$_model.GetUserConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserConfigWithOptions(headers, runtime);
  }

  /**
   * Queries a list of specifications of ECS instances.
   * 
   * @param request - ListEcsSpecsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEcsSpecsResponse
   */
  async listEcsSpecsWithOptions(request: $_model.ListEcsSpecsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEcsSpecsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
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

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEcsSpecs",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/ecsspecs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEcsSpecsResponse>(await this.callApi(params, req, runtime), new $_model.ListEcsSpecsResponse({}));
  }

  /**
   * Queries a list of specifications of ECS instances.
   * 
   * @param request - ListEcsSpecsRequest
   * @returns ListEcsSpecsResponse
   */
  async listEcsSpecs(request: $_model.ListEcsSpecsRequest): Promise<$_model.ListEcsSpecsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsSpecsWithOptions(request, headers, runtime);
  }

  /**
   * 查询实例快照列表
   * 
   * @param request - ListInstanceSnapshotRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceSnapshotResponse
   */
  async listInstanceSnapshotWithOptions(InstanceId: string, request: $_model.ListInstanceSnapshotRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceSnapshotResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceSnapshot",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/snapshots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceSnapshotResponse({}));
  }

  /**
   * 查询实例快照列表
   * 
   * @param request - ListInstanceSnapshotRequest
   * @returns ListInstanceSnapshotResponse
   */
  async listInstanceSnapshot(InstanceId: string, request: $_model.ListInstanceSnapshotRequest): Promise<$_model.ListInstanceSnapshotResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceSnapshotWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 获取实例统计信息
   * 
   * @param request - ListInstanceStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceStatisticsResponse
   */
  async listInstanceStatisticsWithOptions(request: $_model.ListInstanceStatisticsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceStatisticsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceStatistics",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instancestatistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceStatisticsResponse({}));
  }

  /**
   * 获取实例统计信息
   * 
   * @param request - ListInstanceStatisticsRequest
   * @returns ListInstanceStatisticsResponse
   */
  async listInstanceStatistics(request: $_model.ListInstanceStatisticsRequest): Promise<$_model.ListInstanceStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceStatisticsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of Data Science Workshop (DSW) instances.
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
    if (!$dara.isNull(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.createTimeAfter)) {
      query["CreateTimeAfter"] = request.createTimeAfter;
    }

    if (!$dara.isNull(request.createTimeBefore)) {
      query["CreateTimeBefore"] = request.createTimeBefore;
    }

    if (!$dara.isNull(request.createUserId)) {
      query["CreateUserId"] = request.createUserId;
    }

    if (!$dara.isNull(request.gpuType)) {
      query["GpuType"] = request.gpuType;
    }

    if (!$dara.isNull(request.imageName)) {
      query["ImageName"] = request.imageName;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    if (!$dara.isNull(request.maxCpu)) {
      query["MaxCpu"] = request.maxCpu;
    }

    if (!$dara.isNull(request.maxGpu)) {
      query["MaxGpu"] = request.maxGpu;
    }

    if (!$dara.isNull(request.maxGpuMemory)) {
      query["MaxGpuMemory"] = request.maxGpuMemory;
    }

    if (!$dara.isNull(request.maxMemory)) {
      query["MaxMemory"] = request.maxMemory;
    }

    if (!$dara.isNull(request.minCpu)) {
      query["MinCpu"] = request.minCpu;
    }

    if (!$dara.isNull(request.minGpu)) {
      query["MinGpu"] = request.minGpu;
    }

    if (!$dara.isNull(request.minGpuMemory)) {
      query["MinGpuMemory"] = request.minGpuMemory;
    }

    if (!$dara.isNull(request.minMemory)) {
      query["MinMemory"] = request.minMemory;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.oversoldInfo)) {
      query["OversoldInfo"] = request.oversoldInfo;
    }

    if (!$dara.isNull(request.oversoldType)) {
      query["OversoldType"] = request.oversoldType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancesResponse({}));
  }

  /**
   * Queries a list of Data Science Workshop (DSW) instances.
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
   * 获取系统日志
   * 
   * @param request - ListSystemLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSystemLogsResponse
   */
  async listSystemLogsWithOptions(request: $_model.ListSystemLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSystemLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gmtEndTime)) {
      query["GmtEndTime"] = request.gmtEndTime;
    }

    if (!$dara.isNull(request.gmtStartTime)) {
      query["GmtStartTime"] = request.gmtStartTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.lifecycleId)) {
      query["LifecycleId"] = request.lifecycleId;
    }

    if (!$dara.isNull(request.logLevel)) {
      query["LogLevel"] = request.logLevel;
    }

    if (!$dara.isNull(request.logRepository)) {
      query["LogRepository"] = request.logRepository;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.problemCategory)) {
      query["ProblemCategory"] = request.problemCategory;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceRequestId)) {
      query["SourceRequestId"] = request.sourceRequestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSystemLogs",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/systemlogs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSystemLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListSystemLogsResponse({}));
  }

  /**
   * 获取系统日志
   * 
   * @param request - ListSystemLogsRequest
   * @returns ListSystemLogsResponse
   */
  async listSystemLogs(request: $_model.ListSystemLogsRequest): Promise<$_model.ListSystemLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSystemLogsWithOptions(request, headers, runtime);
  }

  /**
   * 获取临时文件列表
   * 
   * @param request - ListTempFilesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTempFilesResponse
   */
  async listTempFilesWithOptions(request: $_model.ListTempFilesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTempFilesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.delimiter)) {
      query["Delimiter"] = request.delimiter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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

    if (!$dara.isNull(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTempFiles",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tempfiles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTempFilesResponse>(await this.callApi(params, req, runtime), new $_model.ListTempFilesResponse({}));
  }

  /**
   * 获取临时文件列表
   * 
   * @param request - ListTempFilesRequest
   * @returns ListTempFilesResponse
   */
  async listTempFiles(request: $_model.ListTempFilesRequest): Promise<$_model.ListTempFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTempFilesWithOptions(request, headers, runtime);
  }

  /**
   * 启动实例
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartInstanceResponse
   */
  async startInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartInstanceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartInstanceResponse({}));
  }

  /**
   * 启动实例
   * @returns StartInstanceResponse
   */
  async startInstance(InstanceId: string): Promise<$_model.StartInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startInstanceWithOptions(InstanceId, headers, runtime);
  }

  /**
   * 停止实例
   * 
   * @param request - StopInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstanceResponse
   */
  async stopInstanceWithOptions(InstanceId: string, request: $_model.StopInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.saveImage)) {
      query["SaveImage"] = request.saveImage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StopInstanceResponse({}));
  }

  /**
   * 停止实例
   * 
   * @param request - StopInstanceRequest
   * @returns StopInstanceResponse
   */
  async stopInstance(InstanceId: string, request: $_model.StopInstanceRequest): Promise<$_model.StopInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 批量停止实例
   * 
   * @param request - StopInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopInstancesResponse
   */
  async stopInstancesWithOptions(request: $_model.StopInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceIds)) {
      body["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopInstances",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/batch/instances/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopInstancesResponse>(await this.callApi(params, req, runtime), new $_model.StopInstancesResponse({}));
  }

  /**
   * 批量停止实例
   * 
   * @param request - StopInstancesRequest
   * @returns StopInstancesResponse
   */
  async stopInstances(request: $_model.StopInstancesRequest): Promise<$_model.StopInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopInstancesWithOptions(request, headers, runtime);
  }

  /**
   * Updates the properties of a DSW instance.
   * 
   * @param request - UpdateInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceResponse
   */
  async updateInstanceWithOptions(InstanceId: string, request: $_model.UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.affinity)) {
      body["Affinity"] = request.affinity;
    }

    if (!$dara.isNull(request.assignNodeSpec)) {
      body["AssignNodeSpec"] = request.assignNodeSpec;
    }

    if (!$dara.isNull(request.cloudDisks)) {
      body["CloudDisks"] = request.cloudDisks;
    }

    if (!$dara.isNull(request.credentialConfig)) {
      body["CredentialConfig"] = request.credentialConfig;
    }

    if (!$dara.isNull(request.datasets)) {
      body["Datasets"] = request.datasets;
    }

    if (!$dara.isNull(request.disassociateAssignNode)) {
      body["DisassociateAssignNode"] = request.disassociateAssignNode;
    }

    if (!$dara.isNull(request.disassociateCredential)) {
      body["DisassociateCredential"] = request.disassociateCredential;
    }

    if (!$dara.isNull(request.disassociateDatasets)) {
      body["DisassociateDatasets"] = request.disassociateDatasets;
    }

    if (!$dara.isNull(request.disassociateDriver)) {
      body["DisassociateDriver"] = request.disassociateDriver;
    }

    if (!$dara.isNull(request.disassociateEnvironmentVariables)) {
      body["DisassociateEnvironmentVariables"] = request.disassociateEnvironmentVariables;
    }

    if (!$dara.isNull(request.disassociateForwardInfos)) {
      body["DisassociateForwardInfos"] = request.disassociateForwardInfos;
    }

    if (!$dara.isNull(request.disassociateMigrationOptions)) {
      body["DisassociateMigrationOptions"] = request.disassociateMigrationOptions;
    }

    if (!$dara.isNull(request.disassociateSpot)) {
      body["DisassociateSpot"] = request.disassociateSpot;
    }

    if (!$dara.isNull(request.disassociateUserCommand)) {
      body["DisassociateUserCommand"] = request.disassociateUserCommand;
    }

    if (!$dara.isNull(request.disassociateVpc)) {
      body["DisassociateVpc"] = request.disassociateVpc;
    }

    if (!$dara.isNull(request.driver)) {
      body["Driver"] = request.driver;
    }

    if (!$dara.isNull(request.dynamicMount)) {
      body["DynamicMount"] = request.dynamicMount;
    }

    if (!$dara.isNull(request.ecsSpec)) {
      body["EcsSpec"] = request.ecsSpec;
    }

    if (!$dara.isNull(request.environmentVariables)) {
      body["EnvironmentVariables"] = request.environmentVariables;
    }

    if (!$dara.isNull(request.imageAuth)) {
      body["ImageAuth"] = request.imageAuth;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.migrationOptions)) {
      body["MigrationOptions"] = request.migrationOptions;
    }

    if (!$dara.isNull(request.oversoldType)) {
      body["OversoldType"] = request.oversoldType;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.requestedResource)) {
      body["RequestedResource"] = request.requestedResource;
    }

    if (!$dara.isNull(request.spotSpec)) {
      body["SpotSpec"] = request.spotSpec;
    }

    if (!$dara.isNull(request.startInstance)) {
      body["StartInstance"] = request.startInstance;
    }

    if (!$dara.isNull(request.userCommand)) {
      body["UserCommand"] = request.userCommand;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    if (!$dara.isNull(request.workspaceSource)) {
      body["WorkspaceSource"] = request.workspaceSource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstance",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceResponse({}));
  }

  /**
   * Updates the properties of a DSW instance.
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
   * Updates the tags of a Data Science Workshop (DSW) instance. If the tags do not exist, the system adds tags.
   * 
   * @param request - UpdateInstanceLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceLabelsResponse
   */
  async updateInstanceLabelsWithOptions(InstanceId: string, request: $_model.UpdateInstanceLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceLabels",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${$dara.URL.percentEncode(InstanceId)}/labels`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceLabelsResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceLabelsResponse({}));
  }

  /**
   * Updates the tags of a Data Science Workshop (DSW) instance. If the tags do not exist, the system adds tags.
   * 
   * @param request - UpdateInstanceLabelsRequest
   * @returns UpdateInstanceLabelsResponse
   */
  async updateInstanceLabels(InstanceId: string, request: $_model.UpdateInstanceLabelsRequest): Promise<$_model.UpdateInstanceLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceLabelsWithOptions(InstanceId, request, headers, runtime);
  }

  /**
   * 更新临时文件
   * 
   * @param request - UpdateTempFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTempFileResponse
   */
  async updateTempFileWithOptions(TempFileId: string, request: $_model.UpdateTempFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTempFileResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gmtExpiredTime)) {
      body["GmtExpiredTime"] = request.gmtExpiredTime;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTempFile",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tempfiles/${$dara.URL.percentEncode(TempFileId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTempFileResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTempFileResponse({}));
  }

  /**
   * 更新临时文件
   * 
   * @param request - UpdateTempFileRequest
   * @returns UpdateTempFileResponse
   */
  async updateTempFile(TempFileId: string, request: $_model.UpdateTempFileRequest): Promise<$_model.UpdateTempFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTempFileWithOptions(TempFileId, request, headers, runtime);
  }

  /**
   * 更新临时文件任务
   * 
   * @param request - UpdateTempFileTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTempFileTaskResponse
   */
  async updateTempFileTaskWithOptions(TempFileTaskId: string, request: $_model.UpdateTempFileTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTempFileTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gmtExpiredTime)) {
      body["GmtExpiredTime"] = request.gmtExpiredTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTempFileTask",
      version: "2022-01-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tempfiletasks/${$dara.URL.percentEncode(TempFileTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTempFileTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTempFileTaskResponse({}));
  }

  /**
   * 更新临时文件任务
   * 
   * @param request - UpdateTempFileTaskRequest
   * @returns UpdateTempFileTaskResponse
   */
  async updateTempFileTask(TempFileTaskId: string, request: $_model.UpdateTempFileTaskRequest): Promise<$_model.UpdateTempFileTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTempFileTaskWithOptions(TempFileTaskId, request, headers, runtime);
  }

}
