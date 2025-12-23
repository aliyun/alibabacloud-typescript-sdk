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
    this._endpoint = this.getEndpoint("emrstudio", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建工作流
   * 
   * @param request - CreateWorkflowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkflowResponse
   */
  async createWorkflowWithOptions(projectId: string, request: $_model.CreateWorkflowRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateWorkflowResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertGroupId)) {
      query["alertGroupId"] = request.alertGroupId;
    }

    if (!$dara.isNull(request.alertStrategy)) {
      query["alertStrategy"] = request.alertStrategy;
    }

    if (!$dara.isNull(request.cronExpr)) {
      query["cronExpr"] = request.cronExpr;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.executionType)) {
      query["executionType"] = request.executionType;
    }

    if (!$dara.isNull(request.failureStrategy)) {
      query["failureStrategy"] = request.failureStrategy;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.parentDirectoryId)) {
      query["parentDirectoryId"] = request.parentDirectoryId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scheduleEndTime)) {
      query["scheduleEndTime"] = request.scheduleEndTime;
    }

    if (!$dara.isNull(request.scheduleStartTime)) {
      query["scheduleStartTime"] = request.scheduleStartTime;
    }

    if (!$dara.isNull(request.scheduleState)) {
      query["scheduleState"] = request.scheduleState;
    }

    if (!$dara.isNull(request.taskDefinitionJson)) {
      query["taskDefinitionJson"] = request.taskDefinitionJson;
    }

    if (!$dara.isNull(request.taskRelationJson)) {
      query["taskRelationJson"] = request.taskRelationJson;
    }

    if (!$dara.isNull(request.timeZone)) {
      query["timeZone"] = request.timeZone;
    }

    if (!$dara.isNull(request.timeout)) {
      query["timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.workflowInstancePriority)) {
      query["workflowInstancePriority"] = request.workflowInstancePriority;
    }

    if (!$dara.isNull(request.workflowParams)) {
      query["workflowParams"] = request.workflowParams;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskDefinitionJsonValue)) {
      body["taskDefinitionJsonValue"] = request.taskDefinitionJsonValue;
    }

    if (!$dara.isNull(request.taskRelationJsonValue)) {
      body["taskRelationJsonValue"] = request.taskRelationJsonValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkflow",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/workflows`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.CreateWorkflowResponse({}));
  }

  /**
   * 创建工作流
   * 
   * @param request - CreateWorkflowRequest
   * @returns CreateWorkflowResponse
   */
  async createWorkflow(projectId: string, request: $_model.CreateWorkflowRequest): Promise<$_model.CreateWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkflowWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 删除工作流
   * 
   * @param request - DeleteWorkflowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflowWithOptions(projectId: string, workflowId: string, request: $_model.DeleteWorkflowRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteWorkflowResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkflow",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/workflows/${$dara.URL.percentEncode(workflowId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.DeleteWorkflowResponse({}));
  }

  /**
   * 删除工作流
   * 
   * @param request - DeleteWorkflowRequest
   * @returns DeleteWorkflowResponse
   */
  async deleteWorkflow(projectId: string, workflowId: string, request: $_model.DeleteWorkflowRequest): Promise<$_model.DeleteWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkflowWithOptions(projectId, workflowId, request, headers, runtime);
  }

  /**
   * 获取id关联信息
   * 
   * @param request - DescribeIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeIdResponse
   */
  async describeIdWithOptions(request: $_model.DescribeIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeIdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeId",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/relatedIds`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeIdResponse>(await this.callApi(params, req, runtime), new $_model.DescribeIdResponse({}));
  }

  /**
   * 获取id关联信息
   * 
   * @param request - DescribeIdRequest
   * @returns DescribeIdResponse
   */
  async describeId(request: $_model.DescribeIdRequest): Promise<$_model.DescribeIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeIdWithOptions(request, headers, runtime);
  }

  /**
   * 获取手动任务定义
   * 
   * @param request - DescribeManualTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeManualTaskResponse
   */
  async describeManualTaskWithOptions(projectId: string, manualTaskId: string, request: $_model.DescribeManualTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeManualTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeManualTask",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/manualTasks/${$dara.URL.percentEncode(manualTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeManualTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeManualTaskResponse({}));
  }

  /**
   * 获取手动任务定义
   * 
   * @param request - DescribeManualTaskRequest
   * @returns DescribeManualTaskResponse
   */
  async describeManualTask(projectId: string, manualTaskId: string, request: $_model.DescribeManualTaskRequest): Promise<$_model.DescribeManualTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeManualTaskWithOptions(projectId, manualTaskId, request, headers, runtime);
  }

  /**
   * 获取手动任务实例
   * 
   * @param request - DescribeManualTaskInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeManualTaskInstanceResponse
   */
  async describeManualTaskInstanceWithOptions(manualTaskInstanceId: string, projectId: string, request: $_model.DescribeManualTaskInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeManualTaskInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeManualTaskInstance",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/manualTaskInstances/${$dara.URL.percentEncode(manualTaskInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeManualTaskInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeManualTaskInstanceResponse({}));
  }

  /**
   * 获取手动任务实例
   * 
   * @param request - DescribeManualTaskInstanceRequest
   * @returns DescribeManualTaskInstanceResponse
   */
  async describeManualTaskInstance(manualTaskInstanceId: string, projectId: string, request: $_model.DescribeManualTaskInstanceRequest): Promise<$_model.DescribeManualTaskInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeManualTaskInstanceWithOptions(manualTaskInstanceId, projectId, request, headers, runtime);
  }

  /**
   * 获取项目详情
   * 
   * @param request - DescribeProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectResponse
   */
  async describeProjectWithOptions(projectId: string, request: $_model.DescribeProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeProjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProject",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeProjectResponse>(await this.callApi(params, req, runtime), new $_model.DescribeProjectResponse({}));
  }

  /**
   * 获取项目详情
   * 
   * @param request - DescribeProjectRequest
   * @returns DescribeProjectResponse
   */
  async describeProject(projectId: string, request: $_model.DescribeProjectRequest): Promise<$_model.DescribeProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeProjectWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 查询任务定义
   * 
   * @param request - DescribeTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskResponse
   */
  async describeTaskWithOptions(workflowId: string, projectId: string, taskId: string, request: $_model.DescribeTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTask",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/workflows/${$dara.URL.percentEncode(workflowId)}/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTaskResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTaskResponse({}));
  }

  /**
   * 查询任务定义
   * 
   * @param request - DescribeTaskRequest
   * @returns DescribeTaskResponse
   */
  async describeTask(workflowId: string, projectId: string, taskId: string, request: $_model.DescribeTaskRequest): Promise<$_model.DescribeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskWithOptions(workflowId, projectId, taskId, request, headers, runtime);
  }

  /**
   * 获取任务实例
   * 
   * @param request - DescribeTaskInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeTaskInstanceResponse
   */
  async describeTaskInstanceWithOptions(projectId: string, workflowInstanceId: string, taskInstanceId: string, request: $_model.DescribeTaskInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeTaskInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeTaskInstance",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/workflows/${$dara.URL.percentEncode(workflowInstanceId)}/taskInstances/${$dara.URL.percentEncode(taskInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeTaskInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeTaskInstanceResponse({}));
  }

  /**
   * 获取任务实例
   * 
   * @param request - DescribeTaskInstanceRequest
   * @returns DescribeTaskInstanceResponse
   */
  async describeTaskInstance(projectId: string, workflowInstanceId: string, taskInstanceId: string, request: $_model.DescribeTaskInstanceRequest): Promise<$_model.DescribeTaskInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTaskInstanceWithOptions(projectId, workflowInstanceId, taskInstanceId, request, headers, runtime);
  }

  /**
   * 获取工作流详情
   * 
   * @param request - DescribeWorkflowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWorkflowResponse
   */
  async describeWorkflowWithOptions(projectId: string, workflowId: string, request: $_model.DescribeWorkflowRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWorkflowResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWorkflow",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/workflows/${$dara.URL.percentEncode(workflowId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWorkflowResponse({}));
  }

  /**
   * 获取工作流详情
   * 
   * @param request - DescribeWorkflowRequest
   * @returns DescribeWorkflowResponse
   */
  async describeWorkflow(projectId: string, workflowId: string, request: $_model.DescribeWorkflowRequest): Promise<$_model.DescribeWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWorkflowWithOptions(projectId, workflowId, request, headers, runtime);
  }

  /**
   * 获取工作流实例详情
   * 
   * @param request - DescribeWorkflowInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeWorkflowInstanceResponse
   */
  async describeWorkflowInstanceWithOptions(projectId: string, workflowInstanceId: string, request: $_model.DescribeWorkflowInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeWorkflowInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeWorkflowInstance",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/workflowInstances/${$dara.URL.percentEncode(workflowInstanceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeWorkflowInstanceResponse>(await this.callApi(params, req, runtime), new $_model.DescribeWorkflowInstanceResponse({}));
  }

  /**
   * 获取工作流实例详情
   * 
   * @param request - DescribeWorkflowInstanceRequest
   * @returns DescribeWorkflowInstanceResponse
   */
  async describeWorkflowInstance(projectId: string, workflowInstanceId: string, request: $_model.DescribeWorkflowInstanceRequest): Promise<$_model.DescribeWorkflowInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeWorkflowInstanceWithOptions(projectId, workflowInstanceId, request, headers, runtime);
  }

  /**
   * 获取实例的日志
   * 
   * @param request - GetInstanceLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceLogResponse
   */
  async getInstanceLogWithOptions(projectId: string, instanceId: string, request: $_model.GetInstanceLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.skipLineNum)) {
      query["skipLineNum"] = request.skipLineNum;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceLog",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/instances/${$dara.URL.percentEncode(instanceId)}/log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceLogResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceLogResponse({}));
  }

  /**
   * 获取实例的日志
   * 
   * @param request - GetInstanceLogRequest
   * @returns GetInstanceLogResponse
   */
  async getInstanceLog(projectId: string, instanceId: string, request: $_model.GetInstanceLogRequest): Promise<$_model.GetInstanceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceLogWithOptions(projectId, instanceId, request, headers, runtime);
  }

  /**
   * 查询告警组列表
   * 
   * @param request - ListAlertGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlertGroupsResponse
   */
  async listAlertGroupsWithOptions(projectId: string, request: $_model.ListAlertGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAlertGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlertGroups",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/alert-groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAlertGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListAlertGroupsResponse({}));
  }

  /**
   * 查询告警组列表
   * 
   * @param request - ListAlertGroupsRequest
   * @returns ListAlertGroupsResponse
   */
  async listAlertGroups(projectId: string, request: $_model.ListAlertGroupsRequest): Promise<$_model.ListAlertGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlertGroupsWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 获取手动任务实例列表
   * 
   * @param request - ListManualTaskInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListManualTaskInstancesResponse
   */
  async listManualTaskInstancesWithOptions(projectId: string, request: $_model.ListManualTaskInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListManualTaskInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListManualTaskInstances",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/manualTaskInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListManualTaskInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListManualTaskInstancesResponse({}));
  }

  /**
   * 获取手动任务实例列表
   * 
   * @param request - ListManualTaskInstancesRequest
   * @returns ListManualTaskInstancesResponse
   */
  async listManualTaskInstances(projectId: string, request: $_model.ListManualTaskInstancesRequest): Promise<$_model.ListManualTaskInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listManualTaskInstancesWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 查询手动任务定义列表
   * 
   * @param request - ListManualTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListManualTasksResponse
   */
  async listManualTasksWithOptions(projectId: string, request: $_model.ListManualTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListManualTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!$dara.isNull(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListManualTasks",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/manualTasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListManualTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListManualTasksResponse({}));
  }

  /**
   * 查询手动任务定义列表
   * 
   * @param request - ListManualTasksRequest
   * @returns ListManualTasksResponse
   */
  async listManualTasks(projectId: string, request: $_model.ListManualTasksRequest): Promise<$_model.ListManualTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listManualTasksWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 获取项目详情
   * 
   * @param request - ListProjectsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(request: $_model.ListProjectsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectsResponse({}));
  }

  /**
   * 获取项目详情
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: $_model.ListProjectsRequest): Promise<$_model.ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(request, headers, runtime);
  }

  /**
   * 查询调度资源组列表
   * 
   * @param request - ListResourceGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroupsWithOptions(request: $_model.ListResourceGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["resourceGroupName"] = request.resourceGroupName;
    }

    if (!$dara.isNull(request.resourceGroupType)) {
      query["resourceGroupType"] = request.resourceGroupType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceGroups",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/resourcegroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceGroupsResponse({}));
  }

  /**
   * 查询调度资源组列表
   * 
   * @param request - ListResourceGroupsRequest
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroups(request: $_model.ListResourceGroupsRequest): Promise<$_model.ListResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 获取任务实例列表
   * 
   * @param request - ListTaskInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskInstancesResponse
   */
  async listTaskInstancesWithOptions(projectId: string, request: $_model.ListTaskInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.workflowInstanceId)) {
      query["workflowInstanceId"] = request.workflowInstanceId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskInstances",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/taskInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskInstancesResponse({}));
  }

  /**
   * 获取任务实例列表
   * 
   * @param request - ListTaskInstancesRequest
   * @returns ListTaskInstancesResponse
   */
  async listTaskInstances(projectId: string, request: $_model.ListTaskInstancesRequest): Promise<$_model.ListTaskInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTaskInstancesWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 查询任务定义列表
   * 
   * @param request - ListTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(projectId: string, request: $_model.ListTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!$dara.isNull(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["workflowId"] = request.workflowId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTasksResponse({}));
  }

  /**
   * 查询任务定义列表
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(projectId: string, request: $_model.ListTasksRequest): Promise<$_model.ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 查询工作流目录列表
   * 
   * @param request - ListWorkflowDirectoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowDirectoriesResponse
   */
  async listWorkflowDirectoriesWithOptions(projectId: string, request: $_model.ListWorkflowDirectoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowDirectoriesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.directoryId)) {
      query["directoryId"] = request.directoryId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.parentDirectoryId)) {
      query["parentDirectoryId"] = request.parentDirectoryId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflowDirectories",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/directories`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowDirectoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowDirectoriesResponse({}));
  }

  /**
   * 查询工作流目录列表
   * 
   * @param request - ListWorkflowDirectoriesRequest
   * @returns ListWorkflowDirectoriesResponse
   */
  async listWorkflowDirectories(projectId: string, request: $_model.ListWorkflowDirectoriesRequest): Promise<$_model.ListWorkflowDirectoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkflowDirectoriesWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 获取工作流实例列表
   * 
   * @param request - ListWorkflowInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowInstancesResponse
   */
  async listWorkflowInstancesWithOptions(projectId: string, request: $_model.ListWorkflowInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["workflowId"] = request.workflowId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflowInstances",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/workflowInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowInstancesResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowInstancesResponse({}));
  }

  /**
   * 获取工作流实例列表
   * 
   * @param request - ListWorkflowInstancesRequest
   * @returns ListWorkflowInstancesResponse
   */
  async listWorkflowInstances(projectId: string, request: $_model.ListWorkflowInstancesRequest): Promise<$_model.ListWorkflowInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkflowInstancesWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 获取工作流列表
   * 
   * @param request - ListWorkflowsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowsResponse
   */
  async listWorkflowsWithOptions(projectId: string, request: $_model.ListWorkflowsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListWorkflowsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.searchVal)) {
      query["searchVal"] = request.searchVal;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkflows",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/workflows`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListWorkflowsResponse>(await this.callApi(params, req, runtime), new $_model.ListWorkflowsResponse({}));
  }

  /**
   * 获取工作流列表
   * 
   * @param request - ListWorkflowsRequest
   * @returns ListWorkflowsResponse
   */
  async listWorkflows(projectId: string, request: $_model.ListWorkflowsRequest): Promise<$_model.ListWorkflowsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkflowsWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 操作工作流实例
   * 
   * @param request - OperateWorkflowInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateWorkflowInstanceResponse
   */
  async operateWorkflowInstanceWithOptions(projectId: string, request: $_model.OperateWorkflowInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OperateWorkflowInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.execType)) {
      body["execType"] = request.execType;
    }

    if (!$dara.isNull(request.workflowInstanceId)) {
      body["workflowInstanceId"] = request.workflowInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateWorkflowInstance",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/executors/execute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateWorkflowInstanceResponse>(await this.callApi(params, req, runtime), new $_model.OperateWorkflowInstanceResponse({}));
  }

  /**
   * 操作工作流实例
   * 
   * @param request - OperateWorkflowInstanceRequest
   * @returns OperateWorkflowInstanceResponse
   */
  async operateWorkflowInstance(projectId: string, request: $_model.OperateWorkflowInstanceRequest): Promise<$_model.OperateWorkflowInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.operateWorkflowInstanceWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 运行工作流
   * 
   * @param request - RunWorkflowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunWorkflowResponse
   */
  async runWorkflowWithOptions(projectId: string, request: $_model.RunWorkflowRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunWorkflowResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertGroupId)) {
      query["alertGroupId"] = request.alertGroupId;
    }

    if (!$dara.isNull(request.alertStrategy)) {
      query["alertStrategy"] = request.alertStrategy;
    }

    if (!$dara.isNull(request.complementDependentMode)) {
      query["complementDependentMode"] = request.complementDependentMode;
    }

    if (!$dara.isNull(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    if (!$dara.isNull(request.execType)) {
      query["execType"] = request.execType;
    }

    if (!$dara.isNull(request.expectedParallelismNumber)) {
      query["expectedParallelismNumber"] = request.expectedParallelismNumber;
    }

    if (!$dara.isNull(request.failureStrategy)) {
      query["failureStrategy"] = request.failureStrategy;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.runMode)) {
      query["runMode"] = request.runMode;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      query["scheduleTime"] = request.scheduleTime;
    }

    if (!$dara.isNull(request.startParams)) {
      query["startParams"] = request.startParams;
    }

    if (!$dara.isNull(request.workflowId)) {
      query["workflowId"] = request.workflowId;
    }

    if (!$dara.isNull(request.workflowInstancePriority)) {
      query["workflowInstancePriority"] = request.workflowInstancePriority;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunWorkflow",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/executors/run-workflow`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.RunWorkflowResponse({}));
  }

  /**
   * 运行工作流
   * 
   * @param request - RunWorkflowRequest
   * @returns RunWorkflowResponse
   */
  async runWorkflow(projectId: string, request: $_model.RunWorkflowRequest): Promise<$_model.RunWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runWorkflowWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 更新工作流
   * 
   * @param request - UpdateWorkflowRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflowWithOptions(projectId: string, workflowId: string, request: $_model.UpdateWorkflowRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateWorkflowResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.alertGroupId)) {
      query["alertGroupId"] = request.alertGroupId;
    }

    if (!$dara.isNull(request.alertStrategy)) {
      query["alertStrategy"] = request.alertStrategy;
    }

    if (!$dara.isNull(request.cronExpr)) {
      query["cronExpr"] = request.cronExpr;
    }

    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.executionType)) {
      query["executionType"] = request.executionType;
    }

    if (!$dara.isNull(request.failureStrategy)) {
      query["failureStrategy"] = request.failureStrategy;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.parentDirectoryId)) {
      query["parentDirectoryId"] = request.parentDirectoryId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scheduleEndTime)) {
      query["scheduleEndTime"] = request.scheduleEndTime;
    }

    if (!$dara.isNull(request.scheduleStartTime)) {
      query["scheduleStartTime"] = request.scheduleStartTime;
    }

    if (!$dara.isNull(request.scheduleState)) {
      query["scheduleState"] = request.scheduleState;
    }

    if (!$dara.isNull(request.taskDefinitionJson)) {
      query["taskDefinitionJson"] = request.taskDefinitionJson;
    }

    if (!$dara.isNull(request.taskRelationJson)) {
      query["taskRelationJson"] = request.taskRelationJson;
    }

    if (!$dara.isNull(request.timeZone)) {
      query["timeZone"] = request.timeZone;
    }

    if (!$dara.isNull(request.timeout)) {
      query["timeout"] = request.timeout;
    }

    if (!$dara.isNull(request.workflowInstancePriority)) {
      query["workflowInstancePriority"] = request.workflowInstancePriority;
    }

    if (!$dara.isNull(request.workflowParams)) {
      query["workflowParams"] = request.workflowParams;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskDefinitionJsonValue)) {
      body["taskDefinitionJsonValue"] = request.taskDefinitionJsonValue;
    }

    if (!$dara.isNull(request.taskRelationJsonValue)) {
      body["taskRelationJsonValue"] = request.taskRelationJsonValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkflow",
      version: "2024-04-30",
      protocol: "HTTPS",
      pathname: `/dolphinscheduler/v3/projects/${$dara.URL.percentEncode(projectId)}/workflows/${$dara.URL.percentEncode(workflowId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateWorkflowResponse>(await this.callApi(params, req, runtime), new $_model.UpdateWorkflowResponse({}));
  }

  /**
   * 更新工作流
   * 
   * @param request - UpdateWorkflowRequest
   * @returns UpdateWorkflowResponse
   */
  async updateWorkflow(projectId: string, workflowId: string, request: $_model.UpdateWorkflowRequest): Promise<$_model.UpdateWorkflowResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkflowWithOptions(projectId, workflowId, request, headers, runtime);
  }

}
