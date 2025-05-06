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
    this._endpoint = this.getEndpoint("emr-serverless-spark", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a RAM user or RAM role to a workspace as a member.
   * 
   * @param request - AddMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMembersResponse
   */
  async addMembersWithOptions(request: $_model.AddMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.memberArns)) {
      body["memberArns"] = request.memberArns;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMembers",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/auth/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddMembersResponse>(await this.callApi(params, req, runtime), new $_model.AddMembersResponse({}));
  }

  /**
   * Adds a RAM user or RAM role to a workspace as a member.
   * 
   * @param request - AddMembersRequest
   * @returns AddMembersResponse
   */
  async addMembers(request: $_model.AddMembersRequest): Promise<$_model.AddMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMembersWithOptions(request, headers, runtime);
  }

  /**
   * Terminates a Spark job.
   * 
   * @param request - CancelJobRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelJobRunResponse
   */
  async cancelJobRunWithOptions(workspaceId: string, jobRunId: string, request: $_model.CancelJobRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelJobRunResponse> {
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
      action: "CancelJobRun",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/jobRuns/${$dara.URL.percentEncode(jobRunId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelJobRunResponse>(await this.callApi(params, req, runtime), new $_model.CancelJobRunResponse({}));
  }

  /**
   * Terminates a Spark job.
   * 
   * @param request - CancelJobRunRequest
   * @returns CancelJobRunResponse
   */
  async cancelJobRun(workspaceId: string, jobRunId: string, request: $_model.CancelJobRunRequest): Promise<$_model.CancelJobRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelJobRunWithOptions(workspaceId, jobRunId, request, headers, runtime);
  }

  /**
   * Creates a workflow.
   * 
   * @param tmpReq - CreateProcessDefinitionWithScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProcessDefinitionWithScheduleResponse
   */
  async createProcessDefinitionWithScheduleWithOptions(bizId: string, tmpReq: $_model.CreateProcessDefinitionWithScheduleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProcessDefinitionWithScheduleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateProcessDefinitionWithScheduleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.globalParams)) {
      request.globalParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.globalParams, "globalParams", "json");
    }

    if (!$dara.isNull(tmpReq.schedule)) {
      request.scheduleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedule, "schedule", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    if (!$dara.isNull(tmpReq.taskDefinitionJson)) {
      request.taskDefinitionJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskDefinitionJson, "taskDefinitionJson", "json");
    }

    if (!$dara.isNull(tmpReq.taskRelationJson)) {
      request.taskRelationJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskRelationJson, "taskRelationJson", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertEmailAddress)) {
      query["alertEmailAddress"] = request.alertEmailAddress;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.executionType)) {
      query["executionType"] = request.executionType;
    }

    if (!$dara.isNull(request.globalParamsShrink)) {
      query["globalParams"] = request.globalParamsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.productNamespace)) {
      query["productNamespace"] = request.productNamespace;
    }

    if (!$dara.isNull(request.publish)) {
      query["publish"] = request.publish;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceQueue)) {
      query["resourceQueue"] = request.resourceQueue;
    }

    if (!$dara.isNull(request.retryTimes)) {
      query["retryTimes"] = request.retryTimes;
    }

    if (!$dara.isNull(request.runAs)) {
      query["runAs"] = request.runAs;
    }

    if (!$dara.isNull(request.scheduleShrink)) {
      query["schedule"] = request.scheduleShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDefinitionJsonShrink)) {
      query["taskDefinitionJson"] = request.taskDefinitionJsonShrink;
    }

    if (!$dara.isNull(request.taskParallelism)) {
      query["taskParallelism"] = request.taskParallelism;
    }

    if (!$dara.isNull(request.taskRelationJsonShrink)) {
      query["taskRelationJson"] = request.taskRelationJsonShrink;
    }

    if (!$dara.isNull(request.timeout)) {
      query["timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProcessDefinitionWithSchedule",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/projects/${$dara.URL.percentEncode(bizId)}/process-definition`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProcessDefinitionWithScheduleResponse>(await this.callApi(params, req, runtime), new $_model.CreateProcessDefinitionWithScheduleResponse({}));
  }

  /**
   * Creates a workflow.
   * 
   * @param request - CreateProcessDefinitionWithScheduleRequest
   * @returns CreateProcessDefinitionWithScheduleResponse
   */
  async createProcessDefinitionWithSchedule(bizId: string, request: $_model.CreateProcessDefinitionWithScheduleRequest): Promise<$_model.CreateProcessDefinitionWithScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProcessDefinitionWithScheduleWithOptions(bizId, request, headers, runtime);
  }

  /**
   * Creates a session.
   * 
   * @param request - CreateSessionClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSessionClusterResponse
   */
  async createSessionClusterWithOptions(workspaceId: string, request: $_model.CreateSessionClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSessionClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationConfigs)) {
      body["applicationConfigs"] = request.applicationConfigs;
    }

    if (!$dara.isNull(request.autoStartConfiguration)) {
      body["autoStartConfiguration"] = request.autoStartConfiguration;
    }

    if (!$dara.isNull(request.autoStopConfiguration)) {
      body["autoStopConfiguration"] = request.autoStopConfiguration;
    }

    if (!$dara.isNull(request.displayReleaseVersion)) {
      body["displayReleaseVersion"] = request.displayReleaseVersion;
    }

    if (!$dara.isNull(request.envId)) {
      body["envId"] = request.envId;
    }

    if (!$dara.isNull(request.fusion)) {
      body["fusion"] = request.fusion;
    }

    if (!$dara.isNull(request.kind)) {
      body["kind"] = request.kind;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.queueName)) {
      body["queueName"] = request.queueName;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      body["releaseVersion"] = request.releaseVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSessionCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/sessionClusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateSessionClusterResponse({}));
  }

  /**
   * Creates a session.
   * 
   * @param request - CreateSessionClusterRequest
   * @returns CreateSessionClusterResponse
   */
  async createSessionCluster(workspaceId: string, request: $_model.CreateSessionClusterRequest): Promise<$_model.CreateSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSessionClusterWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates an SQL query task.
   * 
   * @param request - CreateSqlStatementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSqlStatementResponse
   */
  async createSqlStatementWithOptions(workspaceId: string, request: $_model.CreateSqlStatementRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSqlStatementResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeContent)) {
      body["codeContent"] = request.codeContent;
    }

    if (!$dara.isNull(request.defaultCatalog)) {
      body["defaultCatalog"] = request.defaultCatalog;
    }

    if (!$dara.isNull(request.defaultDatabase)) {
      body["defaultDatabase"] = request.defaultDatabase;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.sqlComputeId)) {
      body["sqlComputeId"] = request.sqlComputeId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSqlStatement",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceId)}/statement`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSqlStatementResponse>(await this.callApi(params, req, runtime), new $_model.CreateSqlStatementResponse({}));
  }

  /**
   * Creates an SQL query task.
   * 
   * @param request - CreateSqlStatementRequest
   * @returns CreateSqlStatementResponse
   */
  async createSqlStatement(workspaceId: string, request: $_model.CreateSqlStatementRequest): Promise<$_model.CreateSqlStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSqlStatementWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Creates a workspace.
   * 
   * @param request - CreateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(request: $_model.CreateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkspaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenew)) {
      body["autoRenew"] = request.autoRenew;
    }

    if (!$dara.isNull(request.autoRenewPeriod)) {
      body["autoRenewPeriod"] = request.autoRenewPeriod;
    }

    if (!$dara.isNull(request.autoRenewPeriodUnit)) {
      body["autoRenewPeriodUnit"] = request.autoRenewPeriodUnit;
    }

    if (!$dara.isNull(request.autoStartSessionCluster)) {
      body["autoStartSessionCluster"] = request.autoStartSessionCluster;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dlfCatalogId)) {
      body["dlfCatalogId"] = request.dlfCatalogId;
    }

    if (!$dara.isNull(request.dlfType)) {
      body["dlfType"] = request.dlfType;
    }

    if (!$dara.isNull(request.duration)) {
      body["duration"] = request.duration;
    }

    if (!$dara.isNull(request.ossBucket)) {
      body["ossBucket"] = request.ossBucket;
    }

    if (!$dara.isNull(request.paymentDurationUnit)) {
      body["paymentDurationUnit"] = request.paymentDurationUnit;
    }

    if (!$dara.isNull(request.paymentType)) {
      body["paymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.ramRoleName)) {
      body["ramRoleName"] = request.ramRoleName;
    }

    if (!$dara.isNull(request.releaseType)) {
      body["releaseType"] = request.releaseType;
    }

    if (!$dara.isNull(request.resourceSpec)) {
      body["resourceSpec"] = request.resourceSpec;
    }

    if (!$dara.isNull(request.tag)) {
      body["tag"] = request.tag;
    }

    if (!$dara.isNull(request.workspaceName)) {
      body["workspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspace",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkspaceResponse({}));
  }

  /**
   * Creates a workspace.
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
   * Modifies the queue of a workspace.
   * 
   * @param request - EditWorkspaceQueueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EditWorkspaceQueueResponse
   */
  async editWorkspaceQueueWithOptions(request: $_model.EditWorkspaceQueueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EditWorkspaceQueueResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environments)) {
      body["environments"] = request.environments;
    }

    if (!$dara.isNull(request.resourceSpec)) {
      body["resourceSpec"] = request.resourceSpec;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["workspaceId"] = request.workspaceId;
    }

    if (!$dara.isNull(request.workspaceQueueName)) {
      body["workspaceQueueName"] = request.workspaceQueueName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EditWorkspaceQueue",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/queues/action/edit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EditWorkspaceQueueResponse>(await this.callApi(params, req, runtime), new $_model.EditWorkspaceQueueResponse({}));
  }

  /**
   * Modifies the queue of a workspace.
   * 
   * @param request - EditWorkspaceQueueRequest
   * @returns EditWorkspaceQueueResponse
   */
  async editWorkspaceQueue(request: $_model.EditWorkspaceQueueRequest): Promise<$_model.EditWorkspaceQueueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.editWorkspaceQueueWithOptions(request, headers, runtime);
  }

  /**
   * Queries the number of CU-hours consumed by a queue during a specified cycle.
   * 
   * @param request - GetCuHoursRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCuHoursResponse
   */
  async getCuHoursWithOptions(workspaceId: string, queue: string, request: $_model.GetCuHoursRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetCuHoursResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCuHours",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/metric/cuHours/${$dara.URL.percentEncode(queue)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCuHoursResponse>(await this.callApi(params, req, runtime), new $_model.GetCuHoursResponse({}));
  }

  /**
   * Queries the number of CU-hours consumed by a queue during a specified cycle.
   * 
   * @param request - GetCuHoursRequest
   * @returns GetCuHoursResponse
   */
  async getCuHours(workspaceId: string, queue: string, request: $_model.GetCuHoursRequest): Promise<$_model.GetCuHoursResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCuHoursWithOptions(workspaceId, queue, request, headers, runtime);
  }

  /**
   * Obtains job analysis information on E-MapReduce (EMR) Doctor.
   * 
   * @param request - GetDoctorApplicationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDoctorApplicationResponse
   */
  async getDoctorApplicationWithOptions(workspaceId: string, runId: string, request: $_model.GetDoctorApplicationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDoctorApplicationResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.locale)) {
      query["locale"] = request.locale;
    }

    if (!$dara.isNull(request.queryTime)) {
      query["queryTime"] = request.queryTime;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDoctorApplication",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/runs/${$dara.URL.percentEncode(runId)}/action/getDoctorApplication`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDoctorApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetDoctorApplicationResponse({}));
  }

  /**
   * Obtains job analysis information on E-MapReduce (EMR) Doctor.
   * 
   * @param request - GetDoctorApplicationRequest
   * @returns GetDoctorApplicationResponse
   */
  async getDoctorApplication(workspaceId: string, runId: string, request: $_model.GetDoctorApplicationRequest): Promise<$_model.GetDoctorApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDoctorApplicationWithOptions(workspaceId, runId, request, headers, runtime);
  }

  /**
   * Obtain the job details.
   * 
   * @param request - GetJobRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobRunResponse
   */
  async getJobRunWithOptions(workspaceId: string, jobRunId: string, request: $_model.GetJobRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobRunResponse> {
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
      action: "GetJobRun",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/jobRuns/${$dara.URL.percentEncode(jobRunId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobRunResponse>(await this.callApi(params, req, runtime), new $_model.GetJobRunResponse({}));
  }

  /**
   * Obtain the job details.
   * 
   * @param request - GetJobRunRequest
   * @returns GetJobRunResponse
   */
  async getJobRun(workspaceId: string, jobRunId: string, request: $_model.GetJobRunRequest): Promise<$_model.GetJobRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobRunWithOptions(workspaceId, jobRunId, request, headers, runtime);
  }

  /**
   * Queries the information about a session.
   * 
   * @param request - GetSessionClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSessionClusterResponse
   */
  async getSessionClusterWithOptions(workspaceId: string, sessionClusterId: string, request: $_model.GetSessionClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSessionClusterResponse> {
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
      action: "GetSessionCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/sessionClusters/${$dara.URL.percentEncode(sessionClusterId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetSessionClusterResponse({}));
  }

  /**
   * Queries the information about a session.
   * 
   * @param request - GetSessionClusterRequest
   * @returns GetSessionClusterResponse
   */
  async getSessionCluster(workspaceId: string, sessionClusterId: string, request: $_model.GetSessionClusterRequest): Promise<$_model.GetSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSessionClusterWithOptions(workspaceId, sessionClusterId, request, headers, runtime);
  }

  /**
   * Queries the status of an SQL query task.
   * 
   * @param request - GetSqlStatementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSqlStatementResponse
   */
  async getSqlStatementWithOptions(workspaceId: string, statementId: string, request: $_model.GetSqlStatementRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSqlStatementResponse> {
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
      action: "GetSqlStatement",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceId)}/statement/${$dara.URL.percentEncode(statementId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSqlStatementResponse>(await this.callApi(params, req, runtime), new $_model.GetSqlStatementResponse({}));
  }

  /**
   * Queries the status of an SQL query task.
   * 
   * @param request - GetSqlStatementRequest
   * @returns GetSqlStatementResponse
   */
  async getSqlStatement(workspaceId: string, statementId: string, request: $_model.GetSqlStatementRequest): Promise<$_model.GetSqlStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSqlStatementWithOptions(workspaceId, statementId, request, headers, runtime);
  }

  /**
   * Queries task templates.
   * 
   * @param request - GetTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(workspaceBizId: string, request: $_model.GetTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateType)) {
      query["templateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplate",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceBizId)}/template`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateResponse({}));
  }

  /**
   * Queries task templates.
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(workspaceBizId: string, request: $_model.GetTemplateRequest): Promise<$_model.GetTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(workspaceBizId, request, headers, runtime);
  }

  /**
   * Assigns a specified role to users.
   * 
   * @param request - GrantRoleToUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GrantRoleToUsersResponse
   */
  async grantRoleToUsersWithOptions(request: $_model.GrantRoleToUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GrantRoleToUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.roleArn)) {
      body["roleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.userArns)) {
      body["userArns"] = request.userArns;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GrantRoleToUsers",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/auth/roles/grant`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GrantRoleToUsersResponse>(await this.callApi(params, req, runtime), new $_model.GrantRoleToUsersResponse({}));
  }

  /**
   * Assigns a specified role to users.
   * 
   * @param request - GrantRoleToUsersRequest
   * @returns GrantRoleToUsersResponse
   */
  async grantRoleToUsers(request: $_model.GrantRoleToUsersRequest): Promise<$_model.GrantRoleToUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.grantRoleToUsersWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of Spark jobs.
   * 
   * @param tmpReq - ListJobRunsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobRunsResponse
   */
  async listJobRunsWithOptions(workspaceId: string, tmpReq: $_model.ListJobRunsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobRunsResponse> {
    tmpReq.validate();
    let request = new $_model.ListJobRunsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.endTime)) {
      request.endTimeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.endTime, "endTime", "json");
    }

    if (!$dara.isNull(tmpReq.startTime)) {
      request.startTimeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startTime, "startTime", "json");
    }

    if (!$dara.isNull(tmpReq.states)) {
      request.statesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.states, "states", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creator)) {
      query["creator"] = request.creator;
    }

    if (!$dara.isNull(request.endTimeShrink)) {
      query["endTime"] = request.endTimeShrink;
    }

    if (!$dara.isNull(request.jobRunDeploymentId)) {
      query["jobRunDeploymentId"] = request.jobRunDeploymentId;
    }

    if (!$dara.isNull(request.jobRunId)) {
      query["jobRunId"] = request.jobRunId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.minDuration)) {
      query["minDuration"] = request.minDuration;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceQueueId)) {
      query["resourceQueueId"] = request.resourceQueueId;
    }

    if (!$dara.isNull(request.startTimeShrink)) {
      query["startTime"] = request.startTimeShrink;
    }

    if (!$dara.isNull(request.statesShrink)) {
      query["states"] = request.statesShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobRuns",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/jobRuns`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobRunsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobRunsResponse({}));
  }

  /**
   * Queries a list of Spark jobs.
   * 
   * @param request - ListJobRunsRequest
   * @returns ListJobRunsResponse
   */
  async listJobRuns(workspaceId: string, request: $_model.ListJobRunsRequest): Promise<$_model.ListJobRunsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobRunsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the applications that are submitted by using a Kyuubi gateway.
   * 
   * @param tmpReq - ListKyuubiSparkApplicationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKyuubiSparkApplicationsResponse
   */
  async listKyuubiSparkApplicationsWithOptions(workspaceId: string, kyuubiServiceId: string, tmpReq: $_model.ListKyuubiSparkApplicationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListKyuubiSparkApplicationsResponse> {
    tmpReq.validate();
    let request = new $_model.ListKyuubiSparkApplicationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.startTime)) {
      request.startTimeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startTime, "startTime", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.applicationId)) {
      query["applicationId"] = request.applicationId;
    }

    if (!$dara.isNull(request.applicationName)) {
      query["applicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTimeShrink)) {
      query["startTime"] = request.startTimeShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKyuubiSparkApplications",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/kyuubi/${$dara.URL.percentEncode(workspaceId)}/${$dara.URL.percentEncode(kyuubiServiceId)}/applications`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKyuubiSparkApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListKyuubiSparkApplicationsResponse({}));
  }

  /**
   * Queries the applications that are submitted by using a Kyuubi gateway.
   * 
   * @param request - ListKyuubiSparkApplicationsRequest
   * @returns ListKyuubiSparkApplicationsResponse
   */
  async listKyuubiSparkApplications(workspaceId: string, kyuubiServiceId: string, request: $_model.ListKyuubiSparkApplicationsRequest): Promise<$_model.ListKyuubiSparkApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKyuubiSparkApplicationsWithOptions(workspaceId, kyuubiServiceId, request, headers, runtime);
  }

  /**
   * Get Log Content
   * 
   * @param request - ListLogContentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogContentsResponse
   */
  async listLogContentsWithOptions(workspaceId: string, request: $_model.ListLogContentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogContentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.length)) {
      query["length"] = request.length;
    }

    if (!$dara.isNull(request.offset)) {
      query["offset"] = request.offset;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogContents",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/action/listLogContents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogContentsResponse>(await this.callApi(params, req, runtime), new $_model.ListLogContentsResponse({}));
  }

  /**
   * Get Log Content
   * 
   * @param request - ListLogContentsRequest
   * @returns ListLogContentsResponse
   */
  async listLogContents(workspaceId: string, request: $_model.ListLogContentsRequest): Promise<$_model.ListLogContentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogContentsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the list of published versions of E-MapReduce (EMR) Serverless Spark.
   * 
   * @param request - ListReleaseVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListReleaseVersionsResponse
   */
  async listReleaseVersionsWithOptions(request: $_model.ListReleaseVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListReleaseVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.releaseType)) {
      query["releaseType"] = request.releaseType;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      query["releaseVersion"] = request.releaseVersion;
    }

    if (!$dara.isNull(request.releaseVersionStatus)) {
      query["releaseVersionStatus"] = request.releaseVersionStatus;
    }

    if (!$dara.isNull(request.serviceFilter)) {
      query["serviceFilter"] = request.serviceFilter;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListReleaseVersions",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/releaseVersions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListReleaseVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListReleaseVersionsResponse({}));
  }

  /**
   * Queries the list of published versions of E-MapReduce (EMR) Serverless Spark.
   * 
   * @param request - ListReleaseVersionsRequest
   * @returns ListReleaseVersionsResponse
   */
  async listReleaseVersions(request: $_model.ListReleaseVersionsRequest): Promise<$_model.ListReleaseVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listReleaseVersionsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of sessions.
   * 
   * @param request - ListSessionClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSessionClustersResponse
   */
  async listSessionClustersWithOptions(workspaceId: string, request: $_model.ListSessionClustersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSessionClustersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.kind)) {
      query["kind"] = request.kind;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.queueName)) {
      query["queueName"] = request.queueName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sessionClusterId)) {
      query["sessionClusterId"] = request.sessionClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSessionClusters",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/sessionClusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSessionClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListSessionClustersResponse({}));
  }

  /**
   * Queries the list of sessions.
   * 
   * @param request - ListSessionClustersRequest
   * @returns ListSessionClustersResponse
   */
  async listSessionClusters(workspaceId: string, request: $_model.ListSessionClustersRequest): Promise<$_model.ListSessionClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSessionClustersWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries the list of queues in a Spark workspace.
   * 
   * @param request - ListWorkspaceQueuesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceQueuesResponse
   */
  async listWorkspaceQueuesWithOptions(workspaceId: string, request: $_model.ListWorkspaceQueuesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkspaceQueuesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.environment)) {
      query["environment"] = request.environment;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaceQueues",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/queues`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspaceQueuesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspaceQueuesResponse({}));
  }

  /**
   * Queries the list of queues in a Spark workspace.
   * 
   * @param request - ListWorkspaceQueuesRequest
   * @returns ListWorkspaceQueuesResponse
   */
  async listWorkspaceQueues(workspaceId: string, request: $_model.ListWorkspaceQueuesRequest): Promise<$_model.ListWorkspaceQueuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspaceQueuesWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Queries a list of workspaces.
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
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.state)) {
      query["state"] = request.state;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkspacesResponse({}));
  }

  /**
   * Queries a list of workspaces.
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
   * Starts a Spark job.
   * 
   * @param request - StartJobRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartJobRunResponse
   */
  async startJobRunWithOptions(workspaceId: string, request: $_model.StartJobRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartJobRunResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.codeType)) {
      body["codeType"] = request.codeType;
    }

    if (!$dara.isNull(request.configurationOverrides)) {
      body["configurationOverrides"] = request.configurationOverrides;
    }

    if (!$dara.isNull(request.displayReleaseVersion)) {
      body["displayReleaseVersion"] = request.displayReleaseVersion;
    }

    if (!$dara.isNull(request.executionTimeoutSeconds)) {
      body["executionTimeoutSeconds"] = request.executionTimeoutSeconds;
    }

    if (!$dara.isNull(request.fusion)) {
      body["fusion"] = request.fusion;
    }

    if (!$dara.isNull(request.jobDriver)) {
      body["jobDriver"] = request.jobDriver;
    }

    if (!$dara.isNull(request.jobId)) {
      body["jobId"] = request.jobId;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.releaseVersion)) {
      body["releaseVersion"] = request.releaseVersion;
    }

    if (!$dara.isNull(request.resourceQueueId)) {
      body["resourceQueueId"] = request.resourceQueueId;
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
      action: "StartJobRun",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/jobRuns`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartJobRunResponse>(await this.callApi(params, req, runtime), new $_model.StartJobRunResponse({}));
  }

  /**
   * Starts a Spark job.
   * 
   * @param request - StartJobRunRequest
   * @returns StartJobRunResponse
   */
  async startJobRun(workspaceId: string, request: $_model.StartJobRunRequest): Promise<$_model.StartJobRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startJobRunWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Manually runs a workflow.
   * 
   * @param request - StartProcessInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartProcessInstanceResponse
   */
  async startProcessInstanceWithOptions(bizId: string, request: $_model.StartProcessInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartProcessInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      query["action"] = request.action;
    }

    if (!$dara.isNull(request.comments)) {
      query["comments"] = request.comments;
    }

    if (!$dara.isNull(request.email)) {
      query["email"] = request.email;
    }

    if (!$dara.isNull(request.interval)) {
      query["interval"] = request.interval;
    }

    if (!$dara.isNull(request.isProd)) {
      query["isProd"] = request.isProd;
    }

    if (!$dara.isNull(request.processDefinitionCode)) {
      query["processDefinitionCode"] = request.processDefinitionCode;
    }

    if (!$dara.isNull(request.productNamespace)) {
      query["productNamespace"] = request.productNamespace;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.runtimeQueue)) {
      query["runtimeQueue"] = request.runtimeQueue;
    }

    if (!$dara.isNull(request.versionHashCode)) {
      query["versionHashCode"] = request.versionHashCode;
    }

    if (!$dara.isNull(request.versionNumber)) {
      query["versionNumber"] = request.versionNumber;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartProcessInstance",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/projects/${$dara.URL.percentEncode(bizId)}/executors/start-process-instance`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartProcessInstanceResponse>(await this.callApi(params, req, runtime), new $_model.StartProcessInstanceResponse({}));
  }

  /**
   * Manually runs a workflow.
   * 
   * @param request - StartProcessInstanceRequest
   * @returns StartProcessInstanceResponse
   */
  async startProcessInstance(bizId: string, request: $_model.StartProcessInstanceRequest): Promise<$_model.StartProcessInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startProcessInstanceWithOptions(bizId, request, headers, runtime);
  }

  /**
   * Starts a session.
   * 
   * @param request - StartSessionClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSessionClusterResponse
   */
  async startSessionClusterWithOptions(workspaceId: string, request: $_model.StartSessionClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartSessionClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.queueName)) {
      body["queueName"] = request.queueName;
    }

    if (!$dara.isNull(request.sessionClusterId)) {
      body["sessionClusterId"] = request.sessionClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSessionCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/sessionClusters/action/startSessionCluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.StartSessionClusterResponse({}));
  }

  /**
   * Starts a session.
   * 
   * @param request - StartSessionClusterRequest
   * @returns StartSessionClusterResponse
   */
  async startSessionCluster(workspaceId: string, request: $_model.StartSessionClusterRequest): Promise<$_model.StartSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startSessionClusterWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Stops a session.
   * 
   * @param request - StopSessionClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopSessionClusterResponse
   */
  async stopSessionClusterWithOptions(workspaceId: string, request: $_model.StopSessionClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StopSessionClusterResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.queueName)) {
      body["queueName"] = request.queueName;
    }

    if (!$dara.isNull(request.sessionClusterId)) {
      body["sessionClusterId"] = request.sessionClusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopSessionCluster",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(workspaceId)}/sessionClusters/action/stopSessionCluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.StopSessionClusterResponse({}));
  }

  /**
   * Stops a session.
   * 
   * @param request - StopSessionClusterRequest
   * @returns StopSessionClusterResponse
   */
  async stopSessionCluster(workspaceId: string, request: $_model.StopSessionClusterRequest): Promise<$_model.StopSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopSessionClusterWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * Terminates an SQL query task.
   * 
   * @param request - TerminateSqlStatementRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TerminateSqlStatementResponse
   */
  async terminateSqlStatementWithOptions(workspaceId: string, statementId: string, request: $_model.TerminateSqlStatementRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.TerminateSqlStatementResponse> {
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
      action: "TerminateSqlStatement",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/api/interactive/v1/workspace/${$dara.URL.percentEncode(workspaceId)}/statement/${$dara.URL.percentEncode(statementId)}/terminate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TerminateSqlStatementResponse>(await this.callApi(params, req, runtime), new $_model.TerminateSqlStatementResponse({}));
  }

  /**
   * Terminates an SQL query task.
   * 
   * @param request - TerminateSqlStatementRequest
   * @returns TerminateSqlStatementResponse
   */
  async terminateSqlStatement(workspaceId: string, statementId: string, request: $_model.TerminateSqlStatementRequest): Promise<$_model.TerminateSqlStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.terminateSqlStatementWithOptions(workspaceId, statementId, request, headers, runtime);
  }

  /**
   * Updates the workflow and time-based scheduling configurations.
   * 
   * @param tmpReq - UpdateProcessDefinitionWithScheduleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProcessDefinitionWithScheduleResponse
   */
  async updateProcessDefinitionWithScheduleWithOptions(bizId: string, code: string, tmpReq: $_model.UpdateProcessDefinitionWithScheduleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProcessDefinitionWithScheduleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateProcessDefinitionWithScheduleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.globalParams)) {
      request.globalParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.globalParams, "globalParams", "json");
    }

    if (!$dara.isNull(tmpReq.schedule)) {
      request.scheduleShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.schedule, "schedule", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    if (!$dara.isNull(tmpReq.taskDefinitionJson)) {
      request.taskDefinitionJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskDefinitionJson, "taskDefinitionJson", "json");
    }

    if (!$dara.isNull(tmpReq.taskRelationJson)) {
      request.taskRelationJsonShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskRelationJson, "taskRelationJson", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertEmailAddress)) {
      query["alertEmailAddress"] = request.alertEmailAddress;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.executionType)) {
      query["executionType"] = request.executionType;
    }

    if (!$dara.isNull(request.globalParamsShrink)) {
      query["globalParams"] = request.globalParamsShrink;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.productNamespace)) {
      query["productNamespace"] = request.productNamespace;
    }

    if (!$dara.isNull(request.publish)) {
      query["publish"] = request.publish;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.releaseState)) {
      query["releaseState"] = request.releaseState;
    }

    if (!$dara.isNull(request.resourceQueue)) {
      query["resourceQueue"] = request.resourceQueue;
    }

    if (!$dara.isNull(request.retryTimes)) {
      query["retryTimes"] = request.retryTimes;
    }

    if (!$dara.isNull(request.runAs)) {
      query["runAs"] = request.runAs;
    }

    if (!$dara.isNull(request.scheduleShrink)) {
      query["schedule"] = request.scheduleShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDefinitionJsonShrink)) {
      query["taskDefinitionJson"] = request.taskDefinitionJsonShrink;
    }

    if (!$dara.isNull(request.taskParallelism)) {
      query["taskParallelism"] = request.taskParallelism;
    }

    if (!$dara.isNull(request.taskRelationJsonShrink)) {
      query["taskRelationJson"] = request.taskRelationJsonShrink;
    }

    if (!$dara.isNull(request.timeout)) {
      query["timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProcessDefinitionWithSchedule",
      version: "2023-08-08",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/projects/${$dara.URL.percentEncode(bizId)}/process-definition/${$dara.URL.percentEncode(code)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProcessDefinitionWithScheduleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProcessDefinitionWithScheduleResponse({}));
  }

  /**
   * Updates the workflow and time-based scheduling configurations.
   * 
   * @param request - UpdateProcessDefinitionWithScheduleRequest
   * @returns UpdateProcessDefinitionWithScheduleResponse
   */
  async updateProcessDefinitionWithSchedule(bizId: string, code: string, request: $_model.UpdateProcessDefinitionWithScheduleRequest): Promise<$_model.UpdateProcessDefinitionWithScheduleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProcessDefinitionWithScheduleWithOptions(bizId, code, request, headers, runtime);
  }

}
