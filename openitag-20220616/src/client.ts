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
      'cn-shenzhen': "openitag.cn-shenzhen.aliyuncs.com",
      'cn-shanghai': "openitag.cn-shanghai.aliyuncs.com",
      'cn-hangzhou': "openitag.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "openitag.cn-beijing.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("openitag", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Assign personnel to the worker nodes (annotation, quality inspection, and validation) of an annotation job.
   * 
   * @param request - AddWorkNodeWorkforceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddWorkNodeWorkforceResponse
   */
  async addWorkNodeWorkforceWithOptions(TenantId: string, TaskId: string, WorkNodeId: string, request: $_model.AddWorkNodeWorkforceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddWorkNodeWorkforceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userIds)) {
      body["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddWorkNodeWorkforce",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/worknodes/${$dara.URL.percentEncode(WorkNodeId)}/workforce`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddWorkNodeWorkforceResponse>(await this.callApi(params, req, runtime), new $_model.AddWorkNodeWorkforceResponse({}));
  }

  /**
   * Assign personnel to the worker nodes (annotation, quality inspection, and validation) of an annotation job.
   * 
   * @param request - AddWorkNodeWorkforceRequest
   * @returns AddWorkNodeWorkforceResponse
   */
  async addWorkNodeWorkforce(TenantId: string, TaskId: string, WorkNodeId: string, request: $_model.AddWorkNodeWorkforceRequest): Promise<$_model.AddWorkNodeWorkforceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addWorkNodeWorkforceWithOptions(TenantId, TaskId, WorkNodeId, request, headers, runtime);
  }

  /**
   * Append data to a job.
   * 
   * @param request - AppendAllDataToTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AppendAllDataToTaskResponse
   */
  async appendAllDataToTaskWithOptions(TenantId: string, TaskId: string, request: $_model.AppendAllDataToTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AppendAllDataToTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AppendAllDataToTask",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/appendAllDataToTask`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AppendAllDataToTaskResponse>(await this.callApi(params, req, runtime), new $_model.AppendAllDataToTaskResponse({}));
  }

  /**
   * Append data to a job.
   * 
   * @param request - AppendAllDataToTaskRequest
   * @returns AppendAllDataToTaskResponse
   */
  async appendAllDataToTask(TenantId: string, TaskId: string, request: $_model.AppendAllDataToTaskRequest): Promise<$_model.AppendAllDataToTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.appendAllDataToTaskWithOptions(TenantId, TaskId, request, headers, runtime);
  }

  /**
   * Create an annotation job for the current tenant.
   * 
   * @param request - CreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(TenantId: string, request: $_model.CreateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTaskResponse({}));
  }

  /**
   * Create an annotation job for the current tenant.
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(TenantId: string, request: $_model.CreateTaskRequest): Promise<$_model.CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * You can add a new template for the current tenant and customize the annotation template based on your business requirements.
   * 
   * @param request - CreateTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(TenantId: string, request: $_model.CreateTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplate",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/templates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateTemplateResponse({}));
  }

  /**
   * You can add a new template for the current tenant and customize the annotation template based on your business requirements.
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(TenantId: string, request: $_model.CreateTemplateRequest): Promise<$_model.CreateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * Add a member to the tenant.
   * 
   * @param request - CreateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUserResponse
   */
  async createUserWithOptions(TenantId: string, request: $_model.CreateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.accountType)) {
      body["AccountType"] = request.accountType;
    }

    if (!$dara.isNull(request.role)) {
      body["Role"] = request.role;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUser",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/users`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateUserResponse({}));
  }

  /**
   * Add a member to the tenant.
   * 
   * @param request - CreateUserRequest
   * @returns CreateUserResponse
   */
  async createUser(TenantId: string, request: $_model.CreateUserRequest): Promise<$_model.CreateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createUserWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * Delete a job under the current tenant.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTaskResponse
   */
  async deleteTaskWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTask",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTaskResponse({}));
  }

  /**
   * Delete a job under the current tenant.
   * @returns DeleteTaskResponse
   */
  async deleteTask(TenantId: string, TaskId: string): Promise<$_model.DeleteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTaskWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * Delete the template under the current tenant.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(TenantId: string, TemplateId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplate",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/templates/${$dara.URL.percentEncode(TemplateId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateResponse({}));
  }

  /**
   * Delete the template under the current tenant.
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(TenantId: string, TemplateId: string): Promise<$_model.DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(TenantId, TemplateId, headers, runtime);
  }

  /**
   * Delete a member within a tenant.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserResponse
   */
  async deleteUserWithOptions(TenantId: string, UserId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUserResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUser",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/users/${$dara.URL.percentEncode(UserId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUserResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUserResponse({}));
  }

  /**
   * Delete a member within a tenant.
   * @returns DeleteUserResponse
   */
  async deleteUser(TenantId: string, UserId: string): Promise<$_model.DeleteUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserWithOptions(TenantId, UserId, headers, runtime);
  }

  /**
   * Export the result data of an annotation job.
   * 
   * @param request - ExportAnnotationsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportAnnotationsResponse
   */
  async exportAnnotationsWithOptions(TenantId: string, TaskId: string, request: $_model.ExportAnnotationsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportAnnotationsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ossPath)) {
      query["OssPath"] = request.ossPath;
    }

    if (!$dara.isNull(request.registerDataset)) {
      query["RegisterDataset"] = request.registerDataset;
    }

    if (!$dara.isNull(request.target)) {
      query["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportAnnotations",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/annotations/export`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportAnnotationsResponse>(await this.callApi(params, req, runtime), new $_model.ExportAnnotationsResponse({}));
  }

  /**
   * Export the result data of an annotation job.
   * 
   * @param request - ExportAnnotationsRequest
   * @returns ExportAnnotationsResponse
   */
  async exportAnnotations(TenantId: string, TaskId: string, request: $_model.ExportAnnotationsRequest): Promise<$_model.ExportAnnotationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportAnnotationsWithOptions(TenantId, TaskId, request, headers, runtime);
  }

  /**
   * Query the information of a single annotation export result.
   * 
   * @param request - GetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(TenantId: string, JobId: string, request: $_model.GetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/jobs/${$dara.URL.percentEncode(JobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobResponse>(await this.callApi(params, req, runtime), new $_model.GetJobResponse({}));
  }

  /**
   * Query the information of a single annotation export result.
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(TenantId: string, JobId: string, request: $_model.GetJobRequest): Promise<$_model.GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobWithOptions(TenantId, JobId, request, headers, runtime);
  }

  /**
   * Query the information of a single subtask package.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubtaskResponse
   */
  async getSubtaskWithOptions(TenantId: string, TaskID: string, SubtaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubtaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubtask",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskID)}/subtasks/${$dara.URL.percentEncode(SubtaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubtaskResponse>(await this.callApi(params, req, runtime), new $_model.GetSubtaskResponse({}));
  }

  /**
   * Query the information of a single subtask package.
   * @returns GetSubtaskResponse
   */
  async getSubtask(TenantId: string, TaskID: string, SubtaskId: string): Promise<$_model.GetSubtaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubtaskWithOptions(TenantId, TaskID, SubtaskId, headers, runtime);
  }

  /**
   * Query a single annotated data item in a subtask package.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSubtaskItemResponse
   */
  async getSubtaskItemWithOptions(TenantId: string, TaskId: string, SubtaskId: string, ItemId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSubtaskItemResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSubtaskItem",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/subtasks/${$dara.URL.percentEncode(SubtaskId)}/items/${$dara.URL.percentEncode(ItemId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSubtaskItemResponse>(await this.callApi(params, req, runtime), new $_model.GetSubtaskItemResponse({}));
  }

  /**
   * Query a single annotated data item in a subtask package.
   * @returns GetSubtaskItemResponse
   */
  async getSubtaskItem(TenantId: string, TaskId: string, SubtaskId: string, ItemId: string): Promise<$_model.GetSubtaskItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSubtaskItemWithOptions(TenantId, TaskId, SubtaskId, ItemId, headers, runtime);
  }

  /**
   * Query the information of a single annotation job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResponse({}));
  }

  /**
   * Query the information of a single annotation job.
   * @returns GetTaskResponse
   */
  async getTask(TenantId: string, TaskId: string): Promise<$_model.GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * Query the current statistics information of a job.
   * 
   * @param request - GetTaskStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatisticsResponse
   */
  async getTaskStatisticsWithOptions(TenantId: string, TaskId: string, request: $_model.GetTaskStatisticsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskStatisticsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.statType)) {
      query["StatType"] = request.statType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskStatistics",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/statistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskStatisticsResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskStatisticsResponse({}));
  }

  /**
   * Query the current statistics information of a job.
   * 
   * @param request - GetTaskStatisticsRequest
   * @returns GetTaskStatisticsResponse
   */
  async getTaskStatistics(TenantId: string, TaskId: string, request: $_model.GetTaskStatisticsRequest): Promise<$_model.GetTaskStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskStatisticsWithOptions(TenantId, TaskId, request, headers, runtime);
  }

  /**
   * Query the current status of a job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskStatusResponse
   */
  async getTaskStatusWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskStatus",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskStatusResponse({}));
  }

  /**
   * Query the current status of a job.
   * @returns GetTaskStatusResponse
   */
  async getTaskStatus(TenantId: string, TaskId: string): Promise<$_model.GetTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskStatusWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * Query the current template information of a job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskTemplateResponse
   */
  async getTaskTemplateWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskTemplate",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/template`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskTemplateResponse({}));
  }

  /**
   * Query the current template information of a job.
   * @returns GetTaskTemplateResponse
   */
  async getTaskTemplate(TenantId: string, TaskId: string): Promise<$_model.GetTaskTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskTemplateWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * Query job template questions.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskTemplateQuestionsResponse
   */
  async getTaskTemplateQuestionsWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskTemplateQuestionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskTemplateQuestions",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/template/questions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskTemplateQuestionsResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskTemplateQuestionsResponse({}));
  }

  /**
   * Query job template questions.
   * @returns GetTaskTemplateQuestionsResponse
   */
  async getTaskTemplateQuestions(TenantId: string, TaskId: string): Promise<$_model.GetTaskTemplateQuestionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskTemplateQuestionsWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * Query the data display information in the job template.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskTemplateViewsResponse
   */
  async getTaskTemplateViewsWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskTemplateViewsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskTemplateViews",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/template/views`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskTemplateViewsResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskTemplateViewsResponse({}));
  }

  /**
   * Query the data display information in the job template.
   * @returns GetTaskTemplateViewsResponse
   */
  async getTaskTemplateViews(TenantId: string, TaskId: string): Promise<$_model.GetTaskTemplateViewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskTemplateViewsWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * Query the personnel configuration information of each node in a job.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskWorkforceResponse
   */
  async getTaskWorkforceWithOptions(TenantId: string, TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskWorkforceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskWorkforce",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/workforce`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskWorkforceResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskWorkforceResponse({}));
  }

  /**
   * Query the personnel configuration information of each node in a job.
   * @returns GetTaskWorkforceResponse
   */
  async getTaskWorkforce(TenantId: string, TaskId: string): Promise<$_model.GetTaskWorkforceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWorkforceWithOptions(TenantId, TaskId, headers, runtime);
  }

  /**
   * Query statistics of each member in a job.
   * 
   * @param request - GetTaskWorkforceStatisticRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskWorkforceStatisticResponse
   */
  async getTaskWorkforceStatisticWithOptions(TenantId: string, TaskId: string, request: $_model.GetTaskWorkforceStatisticRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskWorkforceStatisticResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.statType)) {
      query["StatType"] = request.statType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskWorkforceStatistic",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/workforce/statistic`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskWorkforceStatisticResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskWorkforceStatisticResponse({}));
  }

  /**
   * Query statistics of each member in a job.
   * 
   * @param request - GetTaskWorkforceStatisticRequest
   * @returns GetTaskWorkforceStatisticResponse
   */
  async getTaskWorkforceStatistic(TenantId: string, TaskId: string, request: $_model.GetTaskWorkforceStatisticRequest): Promise<$_model.GetTaskWorkforceStatisticResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWorkforceStatisticWithOptions(TenantId, TaskId, request, headers, runtime);
  }

  /**
   * Query template information under a tenant.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(TenantId: string, TemplateId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplate",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/templates/${$dara.URL.percentEncode(TemplateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateResponse({}));
  }

  /**
   * Query template information under a tenant.
   * @returns GetTemplateResponse
   */
  async getTemplate(TenantId: string, TemplateId: string): Promise<$_model.GetTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(TenantId, TemplateId, headers, runtime);
  }

  /**
   * Query question information such as Radio and Multiple Choice in a template.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateQuestionsResponse
   */
  async getTemplateQuestionsWithOptions(TenantId: string, TemplateId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateQuestionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplateQuestions",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/templates/${$dara.URL.percentEncode(TemplateId)}/questions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateQuestionsResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateQuestionsResponse({}));
  }

  /**
   * Query question information such as Radio and Multiple Choice in a template.
   * @returns GetTemplateQuestionsResponse
   */
  async getTemplateQuestions(TenantId: string, TemplateId: string): Promise<$_model.GetTemplateQuestionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateQuestionsWithOptions(TenantId, TemplateId, headers, runtime);
  }

  /**
   * Query the display information such as images, text, and audio in the template.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateViewResponse
   */
  async getTemplateViewWithOptions(TenantId: string, TemplateId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateViewResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplateView",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/templates/${$dara.URL.percentEncode(TemplateId)}/views`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateViewResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateViewResponse({}));
  }

  /**
   * Query the display information such as images, text, and audio in the template.
   * @returns GetTemplateViewResponse
   */
  async getTemplateView(TenantId: string, TemplateId: string): Promise<$_model.GetTemplateViewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateViewWithOptions(TenantId, TemplateId, headers, runtime);
  }

  /**
   * Query information about the iTAG tenant.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTenantResponse
   */
  async getTenantWithOptions(TenantId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTenantResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTenant",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTenantResponse>(await this.callApi(params, req, runtime), new $_model.GetTenantResponse({}));
  }

  /**
   * Query information about the iTAG tenant.
   * @returns GetTenantResponse
   */
  async getTenant(TenantId: string): Promise<$_model.GetTenantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTenantWithOptions(TenantId, headers, runtime);
  }

  /**
   * Query the details of a single member in a tenant.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(TenantId: string, UserId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUser",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/users/${$dara.URL.percentEncode(UserId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserResponse>(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * Query the details of a single member in a tenant.
   * @returns GetUserResponse
   */
  async getUser(TenantId: string, UserId: string): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(TenantId, UserId, headers, runtime);
  }

  /**
   * Displays a list of all exported annotation results.
   * 
   * @param request - ListJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(TenantId: string, request: $_model.ListJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobsResponse({}));
  }

  /**
   * Displays a list of all exported annotation results.
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(TenantId: string, request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * Display the annotation data of a single subtask package.
   * 
   * @param request - ListSubtaskItemsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubtaskItemsResponse
   */
  async listSubtaskItemsWithOptions(TenantId: string, TaskID: string, SubtaskId: string, request: $_model.ListSubtaskItemsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubtaskItemsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubtaskItems",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskID)}/subtasks/${$dara.URL.percentEncode(SubtaskId)}/items`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubtaskItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListSubtaskItemsResponse({}));
  }

  /**
   * Display the annotation data of a single subtask package.
   * 
   * @param request - ListSubtaskItemsRequest
   * @returns ListSubtaskItemsResponse
   */
  async listSubtaskItems(TenantId: string, TaskID: string, SubtaskId: string, request: $_model.ListSubtaskItemsRequest): Promise<$_model.ListSubtaskItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubtaskItemsWithOptions(TenantId, TaskID, SubtaskId, request, headers, runtime);
  }

  /**
   * Displays the list of subtask packages.
   * 
   * @param request - ListSubtasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubtasksResponse
   */
  async listSubtasksWithOptions(TenantId: string, TaskID: string, request: $_model.ListSubtasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubtasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubtasks",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskID)}/subtasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubtasksResponse>(await this.callApi(params, req, runtime), new $_model.ListSubtasksResponse({}));
  }

  /**
   * Displays the list of subtask packages.
   * 
   * @param request - ListSubtasksRequest
   * @returns ListSubtasksResponse
   */
  async listSubtasks(TenantId: string, TaskID: string, request: $_model.ListSubtasksRequest): Promise<$_model.ListSubtasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubtasksWithOptions(TenantId, TaskID, request, headers, runtime);
  }

  /**
   * Displays the list of annotation jobs for the current tenant.
   * 
   * @param request - ListTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(TenantId: string, request: $_model.ListTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTasksResponse({}));
  }

  /**
   * Displays the list of annotation jobs for the current tenant.
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(TenantId: string, request: $_model.ListTasksRequest): Promise<$_model.ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * Display the template list of the current tenant.
   * 
   * @param tmpReq - ListTemplatesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplatesResponse
   */
  async listTemplatesWithOptions(TenantId: string, tmpReq: $_model.ListTemplatesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplatesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.types)) {
      request.typesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.types, "Types", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!$dara.isNull(request.typesShrink)) {
      query["Types"] = request.typesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplates",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplatesResponse({}));
  }

  /**
   * Display the template list of the current tenant.
   * 
   * @param request - ListTemplatesRequest
   * @returns ListTemplatesResponse
   */
  async listTemplates(TenantId: string, request: $_model.ListTemplatesRequest): Promise<$_model.ListTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplatesWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * Query iTAG tenants under an Alibaba Cloud account.
   * 
   * @param request - ListTenantsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTenantsResponse
   */
  async listTenantsWithOptions(request: $_model.ListTenantsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTenantsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTenants",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTenantsResponse>(await this.callApi(params, req, runtime), new $_model.ListTenantsResponse({}));
  }

  /**
   * Query iTAG tenants under an Alibaba Cloud account.
   * 
   * @param request - ListTenantsRequest
   * @returns ListTenantsResponse
   */
  async listTenants(request: $_model.ListTenantsRequest): Promise<$_model.ListTenantsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTenantsWithOptions(request, headers, runtime);
  }

  /**
   * Displays all annotate members under the current tenant.
   * 
   * @param request - ListUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(TenantId: string, request: $_model.ListUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUsers",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListUsersResponse>(await this.callApi(params, req, runtime), new $_model.ListUsersResponse({}));
  }

  /**
   * Displays all annotate members under the current tenant.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(TenantId: string, request: $_model.ListUsersRequest): Promise<$_model.ListUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUsersWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * Delete Node Personnel
   * 
   * @param request - RemoveWorkNodeWorkforceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveWorkNodeWorkforceResponse
   */
  async removeWorkNodeWorkforceWithOptions(TenantId: string, TaskId: string, WorkNodeId: string, request: $_model.RemoveWorkNodeWorkforceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveWorkNodeWorkforceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userIds)) {
      body["UserIds"] = request.userIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveWorkNodeWorkforce",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/worknodes/${$dara.URL.percentEncode(WorkNodeId)}/workforce`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveWorkNodeWorkforceResponse>(await this.callApi(params, req, runtime), new $_model.RemoveWorkNodeWorkforceResponse({}));
  }

  /**
   * Delete Node Personnel
   * 
   * @param request - RemoveWorkNodeWorkforceRequest
   * @returns RemoveWorkNodeWorkforceResponse
   */
  async removeWorkNodeWorkforce(TenantId: string, TaskId: string, WorkNodeId: string, request: $_model.RemoveWorkNodeWorkforceRequest): Promise<$_model.RemoveWorkNodeWorkforceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeWorkNodeWorkforceWithOptions(TenantId, TaskId, WorkNodeId, request, headers, runtime);
  }

  /**
   * Modify a job under the current tenant.
   * 
   * @param request - UpdateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskResponse
   */
  async updateTaskWithOptions(TenantId: string, TaskId: string, request: $_model.UpdateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTask",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskResponse({}));
  }

  /**
   * Modify a job under the current tenant.
   * 
   * @param request - UpdateTaskRequest
   * @returns UpdateTaskResponse
   */
  async updateTask(TenantId: string, TaskId: string, request: $_model.UpdateTaskRequest): Promise<$_model.UpdateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTaskWithOptions(TenantId, TaskId, request, headers, runtime);
  }

  /**
   * Update job members.
   * 
   * @param request - UpdateTaskWorkforceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskWorkforceResponse
   */
  async updateTaskWorkforceWithOptions(TenantId: string, TaskId: string, request: $_model.UpdateTaskWorkforceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskWorkforceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workforce)) {
      body["Workforce"] = request.workforce;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskWorkforce",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/tasks/${$dara.URL.percentEncode(TaskId)}/workforce`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskWorkforceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskWorkforceResponse({}));
  }

  /**
   * Update job members.
   * 
   * @param request - UpdateTaskWorkforceRequest
   * @returns UpdateTaskWorkforceResponse
   */
  async updateTaskWorkforce(TenantId: string, TaskId: string, request: $_model.UpdateTaskWorkforceRequest): Promise<$_model.UpdateTaskWorkforceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTaskWorkforceWithOptions(TenantId, TaskId, request, headers, runtime);
  }

  /**
   * Modify the template under the current tenant.
   * 
   * @param request - UpdateTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
  async updateTemplateWithOptions(TenantId: string, TemplateId: string, request: $_model.UpdateTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTemplateResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTemplate",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/templates/${$dara.URL.percentEncode(TemplateId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTemplateResponse({}));
  }

  /**
   * Modify the template under the current tenant.
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(TenantId: string, TemplateId: string, request: $_model.UpdateTemplateRequest): Promise<$_model.UpdateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(TenantId, TemplateId, request, headers, runtime);
  }

  /**
   * Modify the information of an iTAG tenant.
   * 
   * @param request - UpdateTenantRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTenantResponse
   */
  async updateTenantWithOptions(TenantId: string, request: $_model.UpdateTenantRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTenantResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.tenantName)) {
      body["TenantName"] = request.tenantName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTenant",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTenantResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTenantResponse({}));
  }

  /**
   * Modify the information of an iTAG tenant.
   * 
   * @param request - UpdateTenantRequest
   * @returns UpdateTenantResponse
   */
  async updateTenant(TenantId: string, request: $_model.UpdateTenantRequest): Promise<$_model.UpdateTenantResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTenantWithOptions(TenantId, request, headers, runtime);
  }

  /**
   * Update member information within a tenant.
   * 
   * @param request - UpdateUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(TenantId: string, UserId: string, request: $_model.UpdateUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.role)) {
      body["Role"] = request.role;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUser",
      version: "2022-06-16",
      protocol: "HTTPS",
      pathname: `/openapi/api/v1/tenants/${$dara.URL.percentEncode(TenantId)}/users/${$dara.URL.percentEncode(UserId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUserResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUserResponse({}));
  }

  /**
   * Update member information within a tenant.
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(TenantId: string, UserId: string, request: $_model.UpdateUserRequest): Promise<$_model.UpdateUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUserWithOptions(TenantId, UserId, request, headers, runtime);
  }

}
