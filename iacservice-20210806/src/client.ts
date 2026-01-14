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
    this._endpoint = this.getEndpoint("iacservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 新增共享账号信息
   * 
   * @param request - AddSharedAccountsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddSharedAccountsResponse
   */
  async addSharedAccountsWithOptions(request: $_model.AddSharedAccountsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AddSharedAccountsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountIds)) {
      body["accountIds"] = request.accountIds;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddSharedAccounts",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/sharedAccounts`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddSharedAccountsResponse>(await this.callApi(params, req, runtime), new $_model.AddSharedAccountsResponse({}));
  }

  /**
   * 新增共享账号信息
   * 
   * @param request - AddSharedAccountsRequest
   * @returns AddSharedAccountsResponse
   */
  async addSharedAccounts(request: $_model.AddSharedAccountsRequest): Promise<$_model.AddSharedAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addSharedAccountsWithOptions(request, headers, runtime);
  }

  /**
   * 分组关联
   * 
   * @param request - AssociateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateGroupResponse
   */
  async associateGroupWithOptions(groupId: string, request: $_model.AssociateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AssociateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["resourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AssociateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}/associate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AssociateGroupResponse>(await this.callApi(params, req, runtime), new $_model.AssociateGroupResponse({}));
  }

  /**
   * 分组关联
   * 
   * @param request - AssociateGroupRequest
   * @returns AssociateGroupResponse
   */
  async associateGroup(groupId: string, request: $_model.AssociateGroupRequest): Promise<$_model.AssociateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.associateGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 取消资源导出任务
   * 
   * @param request - CancelResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelResourceExportTaskResponse
   */
  async cancelResourceExportTaskWithOptions(exportTaskId: string, request: $_model.CancelResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelResourceExportTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/cancel/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelResourceExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelResourceExportTaskResponse({}));
  }

  /**
   * 取消资源导出任务
   * 
   * @param request - CancelResourceExportTaskRequest
   * @returns CancelResourceExportTaskResponse
   */
  async cancelResourceExportTask(exportTaskId: string, request: $_model.CancelResourceExportTaskRequest): Promise<$_model.CancelResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * 创建分组
   * 
   * @param request - CreateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGroupResponse
   */
  async createGroupWithOptions(request: $_model.CreateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.autoTrigger)) {
      body["autoTrigger"] = request.autoTrigger;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.forcedSetting)) {
      body["forcedSetting"] = request.forcedSetting;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.notifyConfig)) {
      body["notifyConfig"] = request.notifyConfig;
    }

    if (!$dara.isNull(request.notifyOperationTypes)) {
      body["notifyOperationTypes"] = request.notifyOperationTypes;
    }

    if (!$dara.isNull(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.reportExportField)) {
      body["reportExportField"] = request.reportExportField;
    }

    if (!$dara.isNull(request.reportExportPath)) {
      body["reportExportPath"] = request.reportExportPath;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.triggerConfig)) {
      body["triggerConfig"] = request.triggerConfig;
    }

    if (!$dara.isNull(request.triggerResourceType)) {
      body["triggerResourceType"] = request.triggerResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateGroupResponse({}));
  }

  /**
   * 创建分组
   * 
   * @param request - CreateGroupRequest
   * @returns CreateGroupResponse
   */
  async createGroup(request: $_model.CreateGroupRequest): Promise<$_model.CreateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGroupWithOptions(request, headers, runtime);
  }

  /**
   * 创建作业
   * 
   * @param request - CreateJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateJobResponse
   */
  async createJobWithOptions(taskId: string, request: $_model.CreateJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.subCommand)) {
      body["subCommand"] = request.subCommand;
    }

    if (!$dara.isNull(request.taskType)) {
      body["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateJob",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateJobResponse>(await this.callApi(params, req, runtime), new $_model.CreateJobResponse({}));
  }

  /**
   * 创建作业
   * 
   * @param request - CreateJobRequest
   * @returns CreateJobResponse
   */
  async createJob(taskId: string, request: $_model.CreateJobRequest): Promise<$_model.CreateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createJobWithOptions(taskId, request, headers, runtime);
  }

  /**
   * 创建模板
   * 
   * @param request - CreateModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModuleResponse
   */
  async createModuleWithOptions(request: $_model.CreateModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupInfo)) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    if (!$dara.isNull(request.statePath)) {
      body["statePath"] = request.statePath;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.versionStrategy)) {
      body["versionStrategy"] = request.versionStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateModuleResponse({}));
  }

  /**
   * 创建模板
   * 
   * @param request - CreateModuleRequest
   * @returns CreateModuleResponse
   */
  async createModule(request: $_model.CreateModuleRequest): Promise<$_model.CreateModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModuleWithOptions(request, headers, runtime);
  }

  /**
   * 创建模板版本
   * 
   * @param request - CreateModuleVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModuleVersionResponse
   */
  async createModuleVersionWithOptions(moduleId: string, request: $_model.CreateModuleVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateModuleVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateModuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.CreateModuleVersionResponse({}));
  }

  /**
   * 创建模板版本
   * 
   * @param request - CreateModuleVersionRequest
   * @returns CreateModuleVersionResponse
   */
  async createModuleVersion(moduleId: string, request: $_model.CreateModuleVersionRequest): Promise<$_model.CreateModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModuleVersionWithOptions(moduleId, request, headers, runtime);
  }

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(request: $_model.CreateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateProjectResponse>(await this.callApi(params, req, runtime), new $_model.CreateProjectResponse({}));
  }

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: $_model.CreateProjectRequest): Promise<$_model.CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * 创建RegistryModule
   * 
   * @param request - CreateRegistryModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRegistryModuleResponse
   */
  async createRegistryModuleWithOptions(request: $_model.CreateRegistryModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRegistryModuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acl)) {
      body["acl"] = request.acl;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.moduleName)) {
      body["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.namespaceName)) {
      body["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.provider)) {
      body["provider"] = request.provider;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRegistryModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModule`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRegistryModuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRegistryModuleResponse({}));
  }

  /**
   * 创建RegistryModule
   * 
   * @param request - CreateRegistryModuleRequest
   * @returns CreateRegistryModuleResponse
   */
  async createRegistryModule(request: $_model.CreateRegistryModuleRequest): Promise<$_model.CreateRegistryModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRegistryModuleWithOptions(request, headers, runtime);
  }

  /**
   * 创建工作空间
   * 
   * @param request - CreateRegistryNamespaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRegistryNamespaceResponse
   */
  async createRegistryNamespaceWithOptions(request: $_model.CreateRegistryNamespaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRegistryNamespaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acl)) {
      body["acl"] = request.acl;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.maintainer)) {
      body["maintainer"] = request.maintainer;
    }

    if (!$dara.isNull(request.namespaceName)) {
      body["namespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRegistryNamespace",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryNamespace`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRegistryNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateRegistryNamespaceResponse({}));
  }

  /**
   * 创建工作空间
   * 
   * @param request - CreateRegistryNamespaceRequest
   * @returns CreateRegistryNamespaceResponse
   */
  async createRegistryNamespace(request: $_model.CreateRegistryNamespaceRequest): Promise<$_model.CreateRegistryNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRegistryNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * 创建导出任务
   * 
   * @param request - CreateResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceExportTaskResponse
   */
  async createResourceExportTaskWithOptions(request: $_model.CreateResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateResourceExportTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.exportToModule)) {
      body["exportToModule"] = request.exportToModule;
    }

    if (!$dara.isNull(request.includeRules)) {
      body["includeRules"] = request.includeRules;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateResourceExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateResourceExportTaskResponse({}));
  }

  /**
   * 创建导出任务
   * 
   * @param request - CreateResourceExportTaskRequest
   * @returns CreateResourceExportTaskResponse
   */
  async createResourceExportTask(request: $_model.CreateResourceExportTaskRequest): Promise<$_model.CreateResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceExportTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建任务
   * 
   * @param request - CreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(request: $_model.CreateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoApply)) {
      body["autoApply"] = request.autoApply;
    }

    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupInfo)) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!$dara.isNull(request.initModuleState)) {
      body["initModuleState"] = request.initModuleState;
    }

    if (!$dara.isNull(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.protectionStrategy)) {
      body["protectionStrategy"] = request.protectionStrategy;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.skipPropertyValidation)) {
      body["skipPropertyValidation"] = request.skipPropertyValidation;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.taskBackend)) {
      body["taskBackend"] = request.taskBackend;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTaskResponse({}));
  }

  /**
   * 创建任务
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(request: $_model.CreateTaskRequest): Promise<$_model.CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(request, headers, runtime);
  }

  /**
   * 删除分组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGroupResponse
   */
  async deleteGroupWithOptions(groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteGroupResponse({}));
  }

  /**
   * 删除分组
   * @returns DeleteGroupResponse
   */
  async deleteGroup(groupId: string): Promise<$_model.DeleteGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupWithOptions(groupId, headers, runtime);
  }

  /**
   * 删除模板
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModuleResponse
   */
  async deleteModuleWithOptions(moduleId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteModuleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteModuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteModuleResponse({}));
  }

  /**
   * 删除模板
   * @returns DeleteModuleResponse
   */
  async deleteModule(moduleId: string): Promise<$_model.DeleteModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModuleWithOptions(moduleId, headers, runtime);
  }

  /**
   * 删除项目
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(projectId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectResponse({}));
  }

  /**
   * 删除项目
   * @returns DeleteProjectResponse
   */
  async deleteProject(projectId: string): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(projectId, headers, runtime);
  }

  /**
   * 删除RegistryModule
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRegistryModuleResponse
   */
  async deleteRegistryModuleWithOptions(namespaceName: string, moduleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRegistryModuleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRegistryModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModule/${$dara.URL.percentEncode(namespaceName)}/${$dara.URL.percentEncode(moduleName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRegistryModuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRegistryModuleResponse({}));
  }

  /**
   * 删除RegistryModule
   * @returns DeleteRegistryModuleResponse
   */
  async deleteRegistryModule(namespaceName: string, moduleName: string): Promise<$_model.DeleteRegistryModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRegistryModuleWithOptions(namespaceName, moduleName, headers, runtime);
  }

  /**
   * 删除RegistryModule版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRegistryModuleVersionResponse
   */
  async deleteRegistryModuleVersionWithOptions(namespaceName: string, moduleName: string, version: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRegistryModuleVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRegistryModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModuleVersion/${$dara.URL.percentEncode(namespaceName)}/${$dara.URL.percentEncode(moduleName)}/${$dara.URL.percentEncode(version)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRegistryModuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRegistryModuleVersionResponse({}));
  }

  /**
   * 删除RegistryModule版本
   * @returns DeleteRegistryModuleVersionResponse
   */
  async deleteRegistryModuleVersion(namespaceName: string, moduleName: string, version: string): Promise<$_model.DeleteRegistryModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRegistryModuleVersionWithOptions(namespaceName, moduleName, version, headers, runtime);
  }

  /**
   * 删除工作空间
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRegistryNamespaceResponse
   */
  async deleteRegistryNamespaceWithOptions(namespaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRegistryNamespaceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRegistryNamespace",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryNamespace/${$dara.URL.percentEncode(namespaceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRegistryNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRegistryNamespaceResponse({}));
  }

  /**
   * 删除工作空间
   * @returns DeleteRegistryNamespaceResponse
   */
  async deleteRegistryNamespace(namespaceName: string): Promise<$_model.DeleteRegistryNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRegistryNamespaceWithOptions(namespaceName, headers, runtime);
  }

  /**
   * 删除资源导出任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceExportTaskResponse
   */
  async deleteResourceExportTaskWithOptions(exportTaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteResourceExportTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteResourceExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteResourceExportTaskResponse({}));
  }

  /**
   * 删除资源导出任务
   * @returns DeleteResourceExportTaskResponse
   */
  async deleteResourceExportTask(exportTaskId: string): Promise<$_model.DeleteResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceExportTaskWithOptions(exportTaskId, headers, runtime);
  }

  /**
   * 删除任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTaskResponse
   */
  async deleteTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTaskResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTaskResponse({}));
  }

  /**
   * 删除任务
   * @returns DeleteTaskResponse
   */
  async deleteTask(taskId: string): Promise<$_model.DeleteTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * 取消关联分组
   * 
   * @param request - DissociateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DissociateGroupResponse
   */
  async dissociateGroupWithOptions(projectId: string, groupId: string, request: $_model.DissociateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DissociateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["resourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DissociateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}/dissociate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DissociateGroupResponse>(await this.callApi(params, req, runtime), new $_model.DissociateGroupResponse({}));
  }

  /**
   * 取消关联分组
   * 
   * @param request - DissociateGroupRequest
   * @returns DissociateGroupResponse
   */
  async dissociateGroup(projectId: string, groupId: string, request: $_model.DissociateGroupRequest): Promise<$_model.DissociateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dissociateGroupWithOptions(projectId, groupId, request, headers, runtime);
  }

  /**
   * 执行RegistryModule
   * 
   * @param request - ExecuteRegistryModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteRegistryModuleResponse
   */
  async executeRegistryModuleWithOptions(namespaceName: string, moduleName: string, request: $_model.ExecuteRegistryModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteRegistryModuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteRegistryModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModule/${$dara.URL.percentEncode(namespaceName)}/${$dara.URL.percentEncode(moduleName)}/execution`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteRegistryModuleResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteRegistryModuleResponse({}));
  }

  /**
   * 执行RegistryModule
   * 
   * @param request - ExecuteRegistryModuleRequest
   * @returns ExecuteRegistryModuleResponse
   */
  async executeRegistryModule(namespaceName: string, moduleName: string, request: $_model.ExecuteRegistryModuleRequest): Promise<$_model.ExecuteRegistryModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeRegistryModuleWithOptions(namespaceName, moduleName, request, headers, runtime);
  }

  /**
   * 执行资源导出任务
   * 
   * @param request - ExecuteResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteResourceExportTaskResponse
   */
  async executeResourceExportTaskWithOptions(exportTaskId: string, request: $_model.ExecuteResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteResourceExportTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/execute/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteResourceExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteResourceExportTaskResponse({}));
  }

  /**
   * 执行资源导出任务
   * 
   * @param request - ExecuteResourceExportTaskRequest
   * @returns ExecuteResourceExportTaskResponse
   */
  async executeResourceExportTask(exportTaskId: string, request: $_model.ExecuteResourceExportTaskRequest): Promise<$_model.ExecuteResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * 执行TerraformApply
   * 
   * @param request - ExecuteTerraformApplyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTerraformApplyResponse
   */
  async executeTerraformApplyWithOptions(request: $_model.ExecuteTerraformApplyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTerraformApplyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.stateId)) {
      body["stateId"] = request.stateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTerraformApply",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraform/execution/apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTerraformApplyResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTerraformApplyResponse({}));
  }

  /**
   * 执行TerraformApply
   * 
   * @param request - ExecuteTerraformApplyRequest
   * @returns ExecuteTerraformApplyResponse
   */
  async executeTerraformApply(request: $_model.ExecuteTerraformApplyRequest): Promise<$_model.ExecuteTerraformApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTerraformApplyWithOptions(request, headers, runtime);
  }

  /**
   * 执行TerraformDestroy
   * 
   * @param request - ExecuteTerraformDestroyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTerraformDestroyResponse
   */
  async executeTerraformDestroyWithOptions(request: $_model.ExecuteTerraformDestroyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTerraformDestroyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.stateId)) {
      body["stateId"] = request.stateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTerraformDestroy",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraform/execution/destroy`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTerraformDestroyResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTerraformDestroyResponse({}));
  }

  /**
   * 执行TerraformDestroy
   * 
   * @param request - ExecuteTerraformDestroyRequest
   * @returns ExecuteTerraformDestroyResponse
   */
  async executeTerraformDestroy(request: $_model.ExecuteTerraformDestroyRequest): Promise<$_model.ExecuteTerraformDestroyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTerraformDestroyWithOptions(request, headers, runtime);
  }

  /**
   * 执行TerraformPlan
   * 
   * @param request - ExecuteTerraformPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteTerraformPlanResponse
   */
  async executeTerraformPlanWithOptions(request: $_model.ExecuteTerraformPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteTerraformPlanResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.stateId)) {
      body["stateId"] = request.stateId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteTerraformPlan",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraform/execution/plan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteTerraformPlanResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteTerraformPlanResponse({}));
  }

  /**
   * 执行TerraformPlan
   * 
   * @param request - ExecuteTerraformPlanRequest
   * @returns ExecuteTerraformPlanResponse
   */
  async executeTerraformPlan(request: $_model.ExecuteTerraformPlanRequest): Promise<$_model.ExecuteTerraformPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeTerraformPlanWithOptions(request, headers, runtime);
  }

  /**
   * 生成模板
   * 
   * @param request - GenerateModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateModuleResponse
   */
  async generateModuleWithOptions(request: $_model.GenerateModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateModuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.generateSource)) {
      body["generateSource"] = request.generateSource;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      body["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.syntax)) {
      body["syntax"] = request.syntax;
    }

    if (!$dara.isNull(request.template)) {
      body["template"] = request.template;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.terraformResourceType)) {
      body["terraformResourceType"] = request.terraformResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorer/generate/module`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateModuleResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GenerateModuleResponse({}));
  }

  /**
   * 生成模板
   * 
   * @param request - GenerateModuleRequest
   * @returns GenerateModuleResponse
   */
  async generateModule(request: $_model.GenerateModuleRequest): Promise<$_model.GenerateModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateModuleWithOptions(request, headers, runtime);
  }

  /**
   * 获取Terraform运行结果
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecuteStateResponse
   */
  async getExecuteStateWithOptions(stateId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetExecuteStateResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExecuteState",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/terraform/execution/${$dara.URL.percentEncode(stateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExecuteStateResponse>(await this.callApi(params, req, runtime), new $_model.GetExecuteStateResponse({}));
  }

  /**
   * 获取Terraform运行结果
   * @returns GetExecuteStateResponse
   */
  async getExecuteState(stateId: string): Promise<$_model.GetExecuteStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExecuteStateWithOptions(stateId, headers, runtime);
  }

  /**
   * 查询分组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGroupResponse
   */
  async getGroupWithOptions(groupId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetGroupResponse({}));
  }

  /**
   * 查询分组
   * @returns GetGroupResponse
   */
  async getGroup(groupId: string): Promise<$_model.GetGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupWithOptions(groupId, headers, runtime);
  }

  /**
   * 作业详情
   * 
   * @param request - GetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(taskId: string, jobId: string, request: $_model.GetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/jobs/${$dara.URL.percentEncode(jobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobResponse>(await this.callApi(params, req, runtime), new $_model.GetJobResponse({}));
  }

  /**
   * 作业详情
   * 
   * @param request - GetJobRequest
   * @returns GetJobResponse
   */
  async getJob(taskId: string, jobId: string, request: $_model.GetJobRequest): Promise<$_model.GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobWithOptions(taskId, jobId, request, headers, runtime);
  }

  /**
   * 获取模板详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModuleResponse
   */
  async getModuleWithOptions(moduleId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModuleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModuleResponse>(await this.callApi(params, req, runtime), new $_model.GetModuleResponse({}));
  }

  /**
   * 获取模板详情
   * @returns GetModuleResponse
   */
  async getModule(moduleId: string): Promise<$_model.GetModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModuleWithOptions(moduleId, headers, runtime);
  }

  /**
   * 模板版本详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModuleVersionResponse
   */
  async getModuleVersionWithOptions(moduleId: string, moduleVersion: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetModuleVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}/versions/${$dara.URL.percentEncode(moduleVersion)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetModuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetModuleVersionResponse({}));
  }

  /**
   * 模板版本详情
   * @returns GetModuleVersionResponse
   */
  async getModuleVersion(moduleId: string, moduleVersion: string): Promise<$_model.GetModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModuleVersionWithOptions(moduleId, moduleVersion, headers, runtime);
  }

  /**
   * 查询项目
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(projectId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetProjectResponse>(await this.callApi(params, req, runtime), new $_model.GetProjectResponse({}));
  }

  /**
   * 查询项目
   * @returns GetProjectResponse
   */
  async getProject(projectId: string): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(projectId, headers, runtime);
  }

  /**
   * 获取RegistryModule信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegistryModuleResponse
   */
  async getRegistryModuleWithOptions(namespaceName: string, moduleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegistryModuleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegistryModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModule/${$dara.URL.percentEncode(namespaceName)}/${$dara.URL.percentEncode(moduleName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegistryModuleResponse>(await this.callApi(params, req, runtime), new $_model.GetRegistryModuleResponse({}));
  }

  /**
   * 获取RegistryModule信息
   * @returns GetRegistryModuleResponse
   */
  async getRegistryModule(namespaceName: string, moduleName: string): Promise<$_model.GetRegistryModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegistryModuleWithOptions(namespaceName, moduleName, headers, runtime);
  }

  /**
   * 获取RegistryModule版本信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegistryModuleVersionResponse
   */
  async getRegistryModuleVersionWithOptions(namespaceName: string, moduleName: string, version: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegistryModuleVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegistryModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModuleVersion/${$dara.URL.percentEncode(namespaceName)}/${$dara.URL.percentEncode(moduleName)}/${$dara.URL.percentEncode(version)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegistryModuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.GetRegistryModuleVersionResponse({}));
  }

  /**
   * 获取RegistryModule版本信息
   * @returns GetRegistryModuleVersionResponse
   */
  async getRegistryModuleVersion(namespaceName: string, moduleName: string, version: string): Promise<$_model.GetRegistryModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegistryModuleVersionWithOptions(namespaceName, moduleName, version, headers, runtime);
  }

  /**
   * 获取工作空间信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRegistryNamespaceResponse
   */
  async getRegistryNamespaceWithOptions(namespaceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRegistryNamespaceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRegistryNamespace",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryNamespace/${$dara.URL.percentEncode(namespaceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRegistryNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.GetRegistryNamespaceResponse({}));
  }

  /**
   * 获取工作空间信息
   * @returns GetRegistryNamespaceResponse
   */
  async getRegistryNamespace(namespaceName: string): Promise<$_model.GetRegistryNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegistryNamespaceWithOptions(namespaceName, headers, runtime);
  }

  /**
   * 查询导出任务详情
   * 
   * @param request - GetResourceExportTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceExportTaskResponse
   */
  async getResourceExportTaskWithOptions(exportTaskId: string, request: $_model.GetResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceExportTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exportVersion)) {
      query["exportVersion"] = request.exportVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceExportTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetResourceExportTaskResponse({}));
  }

  /**
   * 查询导出任务详情
   * 
   * @param request - GetResourceExportTaskRequest
   * @returns GetResourceExportTaskResponse
   */
  async getResourceExportTask(exportTaskId: string, request: $_model.GetResourceExportTaskRequest): Promise<$_model.GetResourceExportTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * 获取资源类型信息
   * 
   * @param request - GetResourceTypeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceTypeResponse
   */
  async getResourceTypeWithOptions(resourceType: string, request: $_model.GetResourceTypeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetResourceTypeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.filterReadOnly)) {
      query["filterReadOnly"] = request.filterReadOnly;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      query["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceType",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/resourceType/${$dara.URL.percentEncode(resourceType)}`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetResourceTypeResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.GetResourceTypeResponse({}));
  }

  /**
   * 获取资源类型信息
   * 
   * @param request - GetResourceTypeRequest
   * @returns GetResourceTypeResponse
   */
  async getResourceType(resourceType: string, request: $_model.GetResourceTypeRequest): Promise<$_model.GetResourceTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceTypeWithOptions(resourceType, request, headers, runtime);
  }

  /**
   * 查询任务详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResponse({}));
  }

  /**
   * 查询任务详情
   * @returns GetTaskResponse
   */
  async getTask(taskId: string): Promise<$_model.GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(taskId, headers, runtime);
  }

  /**
   * 获取Explorer的egistryModule版本示例列表
   * 
   * @param request - ListExplorerRegistryModuleExamplesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExplorerRegistryModuleExamplesResponse
   */
  async listExplorerRegistryModuleExamplesWithOptions(request: $_model.ListExplorerRegistryModuleExamplesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExplorerRegistryModuleExamplesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exampleName)) {
      query["exampleName"] = request.exampleName;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      query["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExplorerRegistryModuleExamples",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorerRegistryModule/example`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExplorerRegistryModuleExamplesResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListExplorerRegistryModuleExamplesResponse({}));
  }

  /**
   * 获取Explorer的egistryModule版本示例列表
   * 
   * @param request - ListExplorerRegistryModuleExamplesRequest
   * @returns ListExplorerRegistryModuleExamplesResponse
   */
  async listExplorerRegistryModuleExamples(request: $_model.ListExplorerRegistryModuleExamplesRequest): Promise<$_model.ListExplorerRegistryModuleExamplesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExplorerRegistryModuleExamplesWithOptions(request, headers, runtime);
  }

  /**
   * 获取Explorer的egistryModule版本列表
   * 
   * @param request - ListExplorerRegistryModuleVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExplorerRegistryModuleVersionsResponse
   */
  async listExplorerRegistryModuleVersionsWithOptions(request: $_model.ListExplorerRegistryModuleVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExplorerRegistryModuleVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      query["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExplorerRegistryModuleVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorerRegistryModule/version`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExplorerRegistryModuleVersionsResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListExplorerRegistryModuleVersionsResponse({}));
  }

  /**
   * 获取Explorer的egistryModule版本列表
   * 
   * @param request - ListExplorerRegistryModuleVersionsRequest
   * @returns ListExplorerRegistryModuleVersionsResponse
   */
  async listExplorerRegistryModuleVersions(request: $_model.ListExplorerRegistryModuleVersionsRequest): Promise<$_model.ListExplorerRegistryModuleVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExplorerRegistryModuleVersionsWithOptions(request, headers, runtime);
  }

  /**
   * 获取Explorer的Registry Module列表
   * 
   * @param request - ListExplorerRegistryModulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExplorerRegistryModulesResponse
   */
  async listExplorerRegistryModulesWithOptions(request: $_model.ListExplorerRegistryModulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListExplorerRegistryModulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExplorerRegistryModules",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorerRegistryModule`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExplorerRegistryModulesResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListExplorerRegistryModulesResponse({}));
  }

  /**
   * 获取Explorer的Registry Module列表
   * 
   * @param request - ListExplorerRegistryModulesRequest
   * @returns ListExplorerRegistryModulesResponse
   */
  async listExplorerRegistryModules(request: $_model.ListExplorerRegistryModulesRequest): Promise<$_model.ListExplorerRegistryModulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExplorerRegistryModulesWithOptions(request, headers, runtime);
  }

  /**
   * 查询分组列表
   * 
   * @param tmpReq - ListGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupResponse
   */
  async listGroupWithOptions(tmpReq: $_model.ListGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListGroupResponse> {
    tmpReq.validate();
    let request = new $_model.ListGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGroupResponse>(await this.callApi(params, req, runtime), new $_model.ListGroupResponse({}));
  }

  /**
   * 查询分组列表
   * 
   * @param request - ListGroupRequest
   * @returns ListGroupResponse
   */
  async listGroup(request: $_model.ListGroupRequest): Promise<$_model.ListGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupWithOptions(request, headers, runtime);
  }

  /**
   * 作业列表
   * 
   * @param request - ListJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(taskId: string, request: $_model.ListJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobType)) {
      query["jobType"] = request.jobType;
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

    if (!$dara.isNull(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobsResponse({}));
  }

  /**
   * 作业列表
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(taskId: string, request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(taskId, request, headers, runtime);
  }

  /**
   * 模板版本列表
   * 
   * @param request - ListModuleVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModuleVersionResponse
   */
  async listModuleVersionWithOptions(moduleId: string, request: $_model.ListModuleVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModuleVersionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

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
      action: "ListModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.ListModuleVersionResponse({}));
  }

  /**
   * 模板版本列表
   * 
   * @param request - ListModuleVersionRequest
   * @returns ListModuleVersionResponse
   */
  async listModuleVersion(moduleId: string, request: $_model.ListModuleVersionRequest): Promise<$_model.ListModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModuleVersionWithOptions(moduleId, request, headers, runtime);
  }

  /**
   * 列举模板
   * 
   * @param tmpReq - ListModulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModulesResponse
   */
  async listModulesWithOptions(tmpReq: $_model.ListModulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListModulesResponse> {
    tmpReq.validate();
    let request = new $_model.ListModulesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModules",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListModulesResponse>(await this.callApi(params, req, runtime), new $_model.ListModulesResponse({}));
  }

  /**
   * 列举模板
   * 
   * @param request - ListModulesRequest
   * @returns ListModulesResponse
   */
  async listModules(request: $_model.ListModulesRequest): Promise<$_model.ListModulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModulesWithOptions(request, headers, runtime);
  }

  /**
   * 所有产品列表
   * 
   * @param request - ListProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(request: $_model.ListProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProductsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.supportTerraformer)) {
      query["supportTerraformer"] = request.supportTerraformer;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      query["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProducts",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/products`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProductsResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListProductsResponse({}));
  }

  /**
   * 所有产品列表
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(request: $_model.ListProductsRequest): Promise<$_model.ListProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductsWithOptions(request, headers, runtime);
  }

  /**
   * 查询项目列表
   * 
   * @param tmpReq - ListProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectResponse
   */
  async listProjectWithOptions(tmpReq: $_model.ListProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectResponse({}));
  }

  /**
   * 查询项目列表
   * 
   * @param request - ListProjectRequest
   * @returns ListProjectResponse
   */
  async listProject(request: $_model.ListProjectRequest): Promise<$_model.ListProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectWithOptions(request, headers, runtime);
  }

  /**
   * 获取RegistryModule版本列表
   * 
   * @param request - ListRegistryModuleVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegistryModuleVersionsResponse
   */
  async listRegistryModuleVersionsWithOptions(request: $_model.ListRegistryModuleVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegistryModuleVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegistryModuleVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModuleVersion`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegistryModuleVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListRegistryModuleVersionsResponse({}));
  }

  /**
   * 获取RegistryModule版本列表
   * 
   * @param request - ListRegistryModuleVersionsRequest
   * @returns ListRegistryModuleVersionsResponse
   */
  async listRegistryModuleVersions(request: $_model.ListRegistryModuleVersionsRequest): Promise<$_model.ListRegistryModuleVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegistryModuleVersionsWithOptions(request, headers, runtime);
  }

  /**
   * 获取RegistryModule列表
   * 
   * @param request - ListRegistryModulesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegistryModulesResponse
   */
  async listRegistryModulesWithOptions(request: $_model.ListRegistryModulesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegistryModulesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
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
      action: "ListRegistryModules",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegistryModulesResponse>(await this.callApi(params, req, runtime), new $_model.ListRegistryModulesResponse({}));
  }

  /**
   * 获取RegistryModule列表
   * 
   * @param request - ListRegistryModulesRequest
   * @returns ListRegistryModulesResponse
   */
  async listRegistryModules(request: $_model.ListRegistryModulesRequest): Promise<$_model.ListRegistryModulesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegistryModulesWithOptions(request, headers, runtime);
  }

  /**
   * 获取工作空间列表
   * 
   * @param request - ListRegistryNamespacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegistryNamespacesResponse
   */
  async listRegistryNamespacesWithOptions(request: $_model.ListRegistryNamespacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRegistryNamespacesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegistryNamespaces",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryNamespace`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRegistryNamespacesResponse>(await this.callApi(params, req, runtime), new $_model.ListRegistryNamespacesResponse({}));
  }

  /**
   * 获取工作空间列表
   * 
   * @param request - ListRegistryNamespacesRequest
   * @returns ListRegistryNamespacesResponse
   */
  async listRegistryNamespaces(request: $_model.ListRegistryNamespacesRequest): Promise<$_model.ListRegistryNamespacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegistryNamespacesWithOptions(request, headers, runtime);
  }

  /**
   * 获取任务版本列表
   * 
   * @param request - ListResourceExportTaskVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceExportTaskVersionsResponse
   */
  async listResourceExportTaskVersionsWithOptions(exportTaskId: string, request: $_model.ListResourceExportTaskVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceExportTaskVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exportVersion)) {
      query["exportVersion"] = request.exportVersion;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceExportTaskVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}/exportVersions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceExportTaskVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceExportTaskVersionsResponse({}));
  }

  /**
   * 获取任务版本列表
   * 
   * @param request - ListResourceExportTaskVersionsRequest
   * @returns ListResourceExportTaskVersionsResponse
   */
  async listResourceExportTaskVersions(exportTaskId: string, request: $_model.ListResourceExportTaskVersionsRequest): Promise<$_model.ListResourceExportTaskVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceExportTaskVersionsWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * 查询导出任务列表
   * 
   * @param request - ListResourceExportTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceExportTasksResponse
   */
  async listResourceExportTasksWithOptions(request: $_model.ListResourceExportTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceExportTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exportTaskId)) {
      query["exportTaskId"] = request.exportTaskId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

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
      action: "ListResourceExportTasks",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceExportTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceExportTasksResponse({}));
  }

  /**
   * 查询导出任务列表
   * 
   * @param request - ListResourceExportTasksRequest
   * @returns ListResourceExportTasksResponse
   */
  async listResourceExportTasks(request: $_model.ListResourceExportTasksRequest): Promise<$_model.ListResourceExportTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceExportTasksWithOptions(request, headers, runtime);
  }

  /**
   * 资源类型列表
   * 
   * @param tmpReq - ListResourceTypesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceTypesResponse
   */
  async listResourceTypesWithOptions(tmpReq: $_model.ListResourceTypesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceTypesResponse> {
    tmpReq.validate();
    let request = new $_model.ListResourceTypesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.terraformResourceTypes)) {
      request.terraformResourceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.terraformResourceTypes, "terraformResourceTypes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["acceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.product)) {
      query["product"] = request.product;
    }

    if (!$dara.isNull(request.sort)) {
      query["sort"] = request.sort;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.subcategory)) {
      query["subcategory"] = request.subcategory;
    }

    if (!$dara.isNull(request.supportTerraformer)) {
      query["supportTerraformer"] = request.supportTerraformer;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      query["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.terraformResourceTypesShrink)) {
      query["terraformResourceTypes"] = request.terraformResourceTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceTypes",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/resourceTypes`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceTypesResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListResourceTypesResponse({}));
  }

  /**
   * 资源类型列表
   * 
   * @param request - ListResourceTypesRequest
   * @returns ListResourceTypesResponse
   */
  async listResourceTypes(request: $_model.ListResourceTypesRequest): Promise<$_model.ListResourceTypesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceTypesWithOptions(request, headers, runtime);
  }

  /**
   * 任务列表
   * 
   * @param tmpReq - ListTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(tmpReq: $_model.ListTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTasksResponse> {
    tmpReq.validate();
    let request = new $_model.ListTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.moduleId)) {
      query["moduleId"] = request.moduleId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["tag"] = request.tagShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTasksResponse({}));
  }

  /**
   * 任务列表
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(request: $_model.ListTasksRequest): Promise<$_model.ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(request, headers, runtime);
  }

  /**
   * terraformProvider版本
   * 
   * @param request - ListTerraformProviderVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTerraformProviderVersionsResponse
   */
  async listTerraformProviderVersionsWithOptions(request: $_model.ListTerraformProviderVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTerraformProviderVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.usage)) {
      query["usage"] = request.usage;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTerraformProviderVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/version/terraform/provider`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTerraformProviderVersionsResponse>(await this.doROARequest(params.action, params.version, params.protocol, params.method, params.authType, params.pathname, params.bodyType, req, runtime), new $_model.ListTerraformProviderVersionsResponse({}));
  }

  /**
   * terraformProvider版本
   * 
   * @param request - ListTerraformProviderVersionsRequest
   * @returns ListTerraformProviderVersionsResponse
   */
  async listTerraformProviderVersions(request: $_model.ListTerraformProviderVersionsRequest): Promise<$_model.ListTerraformProviderVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTerraformProviderVersionsWithOptions(request, headers, runtime);
  }

  /**
   * 控制作业
   * 
   * @param request - OperateJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OperateJobResponse
   */
  async operateJobWithOptions(taskId: string, jobId: string, operationType: string, request: $_model.OperateJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OperateJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      query["comment"] = request.comment;
    }

    if (!$dara.isNull(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OperateJob",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}/jobs/${$dara.URL.percentEncode(jobId)}/operation/${$dara.URL.percentEncode(operationType)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OperateJobResponse>(await this.callApi(params, req, runtime), new $_model.OperateJobResponse({}));
  }

  /**
   * 控制作业
   * 
   * @param request - OperateJobRequest
   * @returns OperateJobResponse
   */
  async operateJob(taskId: string, jobId: string, operationType: string, request: $_model.OperateJobRequest): Promise<$_model.OperateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.operateJobWithOptions(taskId, jobId, operationType, request, headers, runtime);
  }

  /**
   * 发布RegistryModule版本
   * 
   * @param request - PublishRegistryModuleVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishRegistryModuleVersionResponse
   */
  async publishRegistryModuleVersionWithOptions(request: $_model.PublishRegistryModuleVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PublishRegistryModuleVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.moduleName)) {
      body["moduleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.namespaceName)) {
      body["namespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishRegistryModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModuleVersion`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishRegistryModuleVersionResponse>(await this.callApi(params, req, runtime), new $_model.PublishRegistryModuleVersionResponse({}));
  }

  /**
   * 发布RegistryModule版本
   * 
   * @param request - PublishRegistryModuleVersionRequest
   * @returns PublishRegistryModuleVersionResponse
   */
  async publishRegistryModuleVersion(request: $_model.PublishRegistryModuleVersionRequest): Promise<$_model.PublishRegistryModuleVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishRegistryModuleVersionWithOptions(request, headers, runtime);
  }

  /**
   * 删除共享账号信息
   * 
   * @param tmpReq - RemoveSharedAccountsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveSharedAccountsResponse
   */
  async removeSharedAccountsWithOptions(tmpReq: $_model.RemoveSharedAccountsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RemoveSharedAccountsResponse> {
    tmpReq.validate();
    let request = new $_model.RemoveSharedAccountsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.accountIds)) {
      request.accountIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.accountIds, "accountIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountIdsShrink)) {
      query["accountIds"] = request.accountIdsShrink;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveSharedAccounts",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/sharedAccounts`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RemoveSharedAccountsResponse>(await this.callApi(params, req, runtime), new $_model.RemoveSharedAccountsResponse({}));
  }

  /**
   * 删除共享账号信息
   * 
   * @param request - RemoveSharedAccountsRequest
   * @returns RemoveSharedAccountsResponse
   */
  async removeSharedAccounts(request: $_model.RemoveSharedAccountsRequest): Promise<$_model.RemoveSharedAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeSharedAccountsWithOptions(request, headers, runtime);
  }

  /**
   * 修改ExplorerModule
   * 
   * @param request - UpdateExplorerModuleAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExplorerModuleAttributeResponse
   */
  async updateExplorerModuleAttributeWithOptions(explorerModuleId: string, request: $_model.UpdateExplorerModuleAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExplorerModuleAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExplorerModuleAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/explorerModule/${$dara.URL.percentEncode(explorerModuleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExplorerModuleAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExplorerModuleAttributeResponse({}));
  }

  /**
   * 修改ExplorerModule
   * 
   * @param request - UpdateExplorerModuleAttributeRequest
   * @returns UpdateExplorerModuleAttributeResponse
   */
  async updateExplorerModuleAttribute(explorerModuleId: string, request: $_model.UpdateExplorerModuleAttributeRequest): Promise<$_model.UpdateExplorerModuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExplorerModuleAttributeWithOptions(explorerModuleId, request, headers, runtime);
  }

  /**
   * 修改分组
   * 
   * @param request - UpdateGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGroupResponse
   */
  async updateGroupWithOptions(groupId: string, request: $_model.UpdateGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.autoTrigger)) {
      body["autoTrigger"] = request.autoTrigger;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.forcedSetting)) {
      body["forcedSetting"] = request.forcedSetting;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.notifyConfig)) {
      body["notifyConfig"] = request.notifyConfig;
    }

    if (!$dara.isNull(request.notifyOperationTypes)) {
      body["notifyOperationTypes"] = request.notifyOperationTypes;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.reportExportField)) {
      body["reportExportField"] = request.reportExportField;
    }

    if (!$dara.isNull(request.reportExportPath)) {
      body["reportExportPath"] = request.reportExportPath;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.triggerConfig)) {
      body["triggerConfig"] = request.triggerConfig;
    }

    if (!$dara.isNull(request.triggerResourceType)) {
      body["triggerResourceType"] = request.triggerResourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${$dara.URL.percentEncode(groupId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateGroupResponse({}));
  }

  /**
   * 修改分组
   * 
   * @param request - UpdateGroupRequest
   * @returns UpdateGroupResponse
   */
  async updateGroup(groupId: string, request: $_model.UpdateGroupRequest): Promise<$_model.UpdateGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGroupWithOptions(groupId, request, headers, runtime);
  }

  /**
   * 更新模板
   * 
   * @param request - UpdateModuleAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModuleAttributeResponse
   */
  async updateModuleAttributeWithOptions(moduleId: string, request: $_model.UpdateModuleAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateModuleAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupInfo)) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    if (!$dara.isNull(request.statePath)) {
      body["statePath"] = request.statePath;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.versionStrategy)) {
      body["versionStrategy"] = request.versionStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModuleAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${$dara.URL.percentEncode(moduleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateModuleAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateModuleAttributeResponse({}));
  }

  /**
   * 更新模板
   * 
   * @param request - UpdateModuleAttributeRequest
   * @returns UpdateModuleAttributeResponse
   */
  async updateModuleAttribute(moduleId: string, request: $_model.UpdateModuleAttributeRequest): Promise<$_model.UpdateModuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModuleAttributeWithOptions(moduleId, request, headers, runtime);
  }

  /**
   * 修改项目
   * 
   * @param request - UpdateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(projectId: string, request: $_model.UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${$dara.URL.percentEncode(projectId)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectResponse({}));
  }

  /**
   * 修改项目
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(projectId: string, request: $_model.UpdateProjectRequest): Promise<$_model.UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(projectId, request, headers, runtime);
  }

  /**
   * 修改RegistryModule
   * 
   * @param request - UpdateRegistryModuleAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRegistryModuleAttributeResponse
   */
  async updateRegistryModuleAttributeWithOptions(namespaceName: string, moduleName: string, request: $_model.UpdateRegistryModuleAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRegistryModuleAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acl)) {
      body["acl"] = request.acl;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRegistryModuleAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryModule/${$dara.URL.percentEncode(namespaceName)}/${$dara.URL.percentEncode(moduleName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRegistryModuleAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRegistryModuleAttributeResponse({}));
  }

  /**
   * 修改RegistryModule
   * 
   * @param request - UpdateRegistryModuleAttributeRequest
   * @returns UpdateRegistryModuleAttributeResponse
   */
  async updateRegistryModuleAttribute(namespaceName: string, moduleName: string, request: $_model.UpdateRegistryModuleAttributeRequest): Promise<$_model.UpdateRegistryModuleAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRegistryModuleAttributeWithOptions(namespaceName, moduleName, request, headers, runtime);
  }

  /**
   * 修改工作空间
   * 
   * @param request - UpdateRegistryNamespaceAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRegistryNamespaceAttributeResponse
   */
  async updateRegistryNamespaceAttributeWithOptions(namespaceName: string, request: $_model.UpdateRegistryNamespaceAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRegistryNamespaceAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acl)) {
      body["acl"] = request.acl;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRegistryNamespaceAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/registryNamespace/${$dara.URL.percentEncode(namespaceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRegistryNamespaceAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRegistryNamespaceAttributeResponse({}));
  }

  /**
   * 修改工作空间
   * 
   * @param request - UpdateRegistryNamespaceAttributeRequest
   * @returns UpdateRegistryNamespaceAttributeResponse
   */
  async updateRegistryNamespaceAttribute(namespaceName: string, request: $_model.UpdateRegistryNamespaceAttributeRequest): Promise<$_model.UpdateRegistryNamespaceAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRegistryNamespaceAttributeWithOptions(namespaceName, request, headers, runtime);
  }

  /**
   * 更新导出任务
   * 
   * @param request - UpdateResourceExportTaskAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceExportTaskAttributeResponse
   */
  async updateResourceExportTaskAttributeWithOptions(exportTaskId: string, request: $_model.UpdateResourceExportTaskAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateResourceExportTaskAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.exportToModule)) {
      body["exportToModule"] = request.exportToModule;
    }

    if (!$dara.isNull(request.includeRules)) {
      body["includeRules"] = request.includeRules;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.terraformProviderVersion)) {
      body["terraformProviderVersion"] = request.terraformProviderVersion;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    if (!$dara.isNull(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceExportTaskAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${$dara.URL.percentEncode(exportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateResourceExportTaskAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateResourceExportTaskAttributeResponse({}));
  }

  /**
   * 更新导出任务
   * 
   * @param request - UpdateResourceExportTaskAttributeRequest
   * @returns UpdateResourceExportTaskAttributeResponse
   */
  async updateResourceExportTaskAttribute(exportTaskId: string, request: $_model.UpdateResourceExportTaskAttributeRequest): Promise<$_model.UpdateResourceExportTaskAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceExportTaskAttributeWithOptions(exportTaskId, request, headers, runtime);
  }

  /**
   * 修改任务
   * 
   * @param request - UpdateTaskAttributeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTaskAttributeResponse
   */
  async updateTaskAttributeWithOptions(taskId: string, request: $_model.UpdateTaskAttributeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTaskAttributeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoApply)) {
      body["autoApply"] = request.autoApply;
    }

    if (!$dara.isNull(request.autoDestroy)) {
      body["autoDestroy"] = request.autoDestroy;
    }

    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.groupInfo)) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!$dara.isNull(request.initModuleState)) {
      body["initModuleState"] = request.initModuleState;
    }

    if (!$dara.isNull(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!$dara.isNull(request.name)) {
      body["name"] = request.name;
    }

    if (!$dara.isNull(request.protectionStrategy)) {
      body["protectionStrategy"] = request.protectionStrategy;
    }

    if (!$dara.isNull(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.skipPropertyValidation)) {
      body["skipPropertyValidation"] = request.skipPropertyValidation;
    }

    if (!$dara.isNull(request.tags)) {
      body["tags"] = request.tags;
    }

    if (!$dara.isNull(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!$dara.isNull(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTaskAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTaskAttributeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTaskAttributeResponse({}));
  }

  /**
   * 修改任务
   * 
   * @param request - UpdateTaskAttributeRequest
   * @returns UpdateTaskAttributeResponse
   */
  async updateTaskAttribute(taskId: string, request: $_model.UpdateTaskAttributeRequest): Promise<$_model.UpdateTaskAttributeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTaskAttributeWithOptions(taskId, request, headers, runtime);
  }

  /**
   * 模版预检
   * 
   * @param request - ValidateModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateModuleResponse
   */
  async *validateModuleWithSSE(request: $_model.ValidateModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.ValidateModuleResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.codeMap)) {
      body["codeMap"] = request.codeMap;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/module/validation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.ValidateModuleResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.ValidateModuleResponse({}));
    }
  }

  /**
   * 模版预检
   * 
   * @param request - ValidateModuleRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateModuleResponse
   */
  async validateModuleWithOptions(request: $_model.ValidateModuleRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateModuleResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.code)) {
      body["code"] = request.code;
    }

    if (!$dara.isNull(request.codeMap)) {
      body["codeMap"] = request.codeMap;
    }

    if (!$dara.isNull(request.source)) {
      body["source"] = request.source;
    }

    if (!$dara.isNull(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/module/validation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateModuleResponse>(await this.callApi(params, req, runtime), new $_model.ValidateModuleResponse({}));
  }

  /**
   * 模版预检
   * 
   * @param request - ValidateModuleRequest
   * @returns ValidateModuleResponse
   */
  async validateModule(request: $_model.ValidateModuleRequest): Promise<$_model.ValidateModuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateModuleWithOptions(request, headers, runtime);
  }

}
