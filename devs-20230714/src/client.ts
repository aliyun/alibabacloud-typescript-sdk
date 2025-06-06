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
    this._endpoint = this.getEndpoint("devs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 激活身份绑定,完成OAuth授权
   * 
   * @param request - ActivateConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateConnectionResponse
   */
  async activateConnectionWithOptions(name: string, request: $_model.ActivateConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateConnectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.account)) {
      body["account"] = request.account;
    }

    if (!$dara.isNull(request.credential)) {
      body["credential"] = request.credential;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateConnection",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections/${$dara.URL.percentEncode(name)}/activate`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateConnectionResponse>(await this.callApi(params, req, runtime), new $_model.ActivateConnectionResponse({}));
  }

  /**
   * 激活身份绑定,完成OAuth授权
   * 
   * @param request - ActivateConnectionRequest
   * @returns ActivateConnectionResponse
   */
  async activateConnection(name: string, request: $_model.ActivateConnectionRequest): Promise<$_model.ActivateConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.activateConnectionWithOptions(name, request, headers, runtime);
  }

  /**
   * 取消流水线
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPipelineResponse
   */
  async cancelPipelineWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelPipelineResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelPipeline",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines/${$dara.URL.percentEncode(name)}/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelPipelineResponse>(await this.callApi(params, req, runtime), new $_model.CancelPipelineResponse({}));
  }

  /**
   * 取消流水线
   * @returns CancelPipelineResponse
   */
  async cancelPipeline(name: string): Promise<$_model.CancelPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelPipelineWithOptions(name, headers, runtime);
  }

  /**
   * 取消任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTaskResponse
   */
  async cancelTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${$dara.URL.percentEncode(name)}/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelTaskResponse({}));
  }

  /**
   * 取消任务
   * @returns CancelTaskResponse
   */
  async cancelTask(name: string): Promise<$_model.CancelTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(name, headers, runtime);
  }

  /**
   * 创建交付物存储
   * 
   * @param request - CreateArtifactRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactResponse
   */
  async createArtifactWithOptions(request: $_model.CreateArtifactRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateArtifactResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArtifact",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/artifacts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateArtifactResponse>(await this.callApi(params, req, runtime), new $_model.CreateArtifactResponse({}));
  }

  /**
   * 创建交付物存储
   * 
   * @param request - CreateArtifactRequest
   * @returns CreateArtifactResponse
   */
  async createArtifact(request: $_model.CreateArtifactRequest): Promise<$_model.CreateArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createArtifactWithOptions(request, headers, runtime);
  }

  /**
   * 创建环境
   * 
   * @param request - CreateEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnvironmentResponse
   */
  async createEnvironmentWithOptions(projectName: string, request: $_model.CreateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEnvironmentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.CreateEnvironmentResponse({}));
  }

  /**
   * 创建环境
   * 
   * @param request - CreateEnvironmentRequest
   * @returns CreateEnvironmentResponse
   */
  async createEnvironment(projectName: string, request: $_model.CreateEnvironmentRequest): Promise<$_model.CreateEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEnvironmentWithOptions(projectName, request, headers, runtime);
  }

  /**
   * 创建流水线
   * 
   * @param request - CreatePipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePipelineResponse
   */
  async createPipelineWithOptions(request: $_model.CreatePipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePipelineResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePipeline",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePipelineResponse>(await this.callApi(params, req, runtime), new $_model.CreatePipelineResponse({}));
  }

  /**
   * 创建流水线
   * 
   * @param request - CreatePipelineRequest
   * @returns CreatePipelineResponse
   */
  async createPipeline(request: $_model.CreatePipelineRequest): Promise<$_model.CreatePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineWithOptions(request, headers, runtime);
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
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects`,
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
   * 创建任务
   * 
   * @param request - CreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(request: $_model.CreateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks`,
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
   * 创建工具集
   * 
   * @param request - CreateToolsetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateToolsetResponse
   */
  async createToolsetWithOptions(request: $_model.CreateToolsetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateToolsetResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateToolset",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/toolsets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateToolsetResponse>(await this.callApi(params, req, runtime), new $_model.CreateToolsetResponse({}));
  }

  /**
   * 创建工具集
   * 
   * @param request - CreateToolsetRequest
   * @returns CreateToolsetResponse
   */
  async createToolset(request: $_model.CreateToolsetRequest): Promise<$_model.CreateToolsetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createToolsetWithOptions(request, headers, runtime);
  }

  /**
   * 删除交付物
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteArtifactResponse
   */
  async deleteArtifactWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteArtifactResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteArtifact",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/artifacts/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteArtifactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteArtifactResponse({}));
  }

  /**
   * 删除交付物
   * @returns DeleteArtifactResponse
   */
  async deleteArtifact(name: string): Promise<$_model.DeleteArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteArtifactWithOptions(name, headers, runtime);
  }

  /**
   * 删除身份绑定
   * 
   * @param request - DeleteConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConnectionResponse
   */
  async deleteConnectionWithOptions(name: string, request: $_model.DeleteConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteConnectionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConnection",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteConnectionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteConnectionResponse({}));
  }

  /**
   * 删除身份绑定
   * 
   * @param request - DeleteConnectionRequest
   * @returns DeleteConnectionResponse
   */
  async deleteConnection(name: string, request: $_model.DeleteConnectionRequest): Promise<$_model.DeleteConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConnectionWithOptions(name, request, headers, runtime);
  }

  /**
   * 删除环境
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnvironmentResponse
   */
  async deleteEnvironmentWithOptions(projectName: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEnvironmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEnvironmentResponse({}));
  }

  /**
   * 删除环境
   * @returns DeleteEnvironmentResponse
   */
  async deleteEnvironment(projectName: string, name: string): Promise<$_model.DeleteEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentWithOptions(projectName, name, headers, runtime);
  }

  /**
   * 删除项目
   * 
   * @param request - DeleteProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(name: string, request: $_model.DeleteProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteProjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteProjectResponse>(await this.callApi(params, req, runtime), new $_model.DeleteProjectResponse({}));
  }

  /**
   * 删除项目
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(name: string, request: $_model.DeleteProjectRequest): Promise<$_model.DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(name, request, headers, runtime);
  }

  /**
   * 删除工具集
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteToolsetResponse
   */
  async deleteToolsetWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteToolsetResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteToolset",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/toolsets/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $dara.cast<$_model.DeleteToolsetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteToolsetResponse({}));
  }

  /**
   * 删除工具集
   * @returns DeleteToolsetResponse
   */
  async deleteToolset(name: string): Promise<$_model.DeleteToolsetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteToolsetWithOptions(name, headers, runtime);
  }

  /**
   * 手动触发环境部署
   * 
   * @param request - DeployEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployEnvironmentResponse
   */
  async deployEnvironmentWithOptions(projectName: string, name: string, request: $_model.DeployEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeployEnvironmentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments/${$dara.URL.percentEncode(name)}/deploy`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.DeployEnvironmentResponse({}));
  }

  /**
   * 手动触发环境部署
   * 
   * @param request - DeployEnvironmentRequest
   * @returns DeployEnvironmentResponse
   */
  async deployEnvironment(projectName: string, name: string, request: $_model.DeployEnvironmentRequest): Promise<$_model.DeployEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployEnvironmentWithOptions(projectName, name, request, headers, runtime);
  }

  /**
   * 获取交付物的zip包临时下载地址url
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchArtifactDownloadUrlResponse
   */
  async fetchArtifactDownloadUrlWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.FetchArtifactDownloadUrlResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchArtifactDownloadUrl",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/artifacts/${$dara.URL.percentEncode(name)}/fetchCode`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FetchArtifactDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.FetchArtifactDownloadUrlResponse({}));
  }

  /**
   * 获取交付物的zip包临时下载地址url
   * @returns FetchArtifactDownloadUrlResponse
   */
  async fetchArtifactDownloadUrl(name: string): Promise<$_model.FetchArtifactDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fetchArtifactDownloadUrlWithOptions(name, headers, runtime);
  }

  /**
   * 获取交付物临时上传的bucket、object和临时sts
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchArtifactTempBucketTokenResponse
   */
  async fetchArtifactTempBucketTokenWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.FetchArtifactTempBucketTokenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchArtifactTempBucketToken",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/artifacts/action/fetchTempBucketToken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FetchArtifactTempBucketTokenResponse>(await this.callApi(params, req, runtime), new $_model.FetchArtifactTempBucketTokenResponse({}));
  }

  /**
   * 获取交付物临时上传的bucket、object和临时sts
   * @returns FetchArtifactTempBucketTokenResponse
   */
  async fetchArtifactTempBucketToken(): Promise<$_model.FetchArtifactTempBucketTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fetchArtifactTempBucketTokenWithOptions(headers, runtime);
  }

  /**
   * 查询身份绑定中的凭证信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchConnectionCredentialResponse
   */
  async fetchConnectionCredentialWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.FetchConnectionCredentialResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchConnectionCredential",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections/${$dara.URL.percentEncode(name)}/fetchCredential`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FetchConnectionCredentialResponse>(await this.callApi(params, req, runtime), new $_model.FetchConnectionCredentialResponse({}));
  }

  /**
   * 查询身份绑定中的凭证信息
   * @returns FetchConnectionCredentialResponse
   */
  async fetchConnectionCredential(name: string): Promise<$_model.FetchConnectionCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fetchConnectionCredentialWithOptions(name, headers, runtime);
  }

  /**
   * 查询交付物
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactResponse
   */
  async getArtifactWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetArtifactResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifact",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/artifacts/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArtifactResponse>(await this.callApi(params, req, runtime), new $_model.GetArtifactResponse({}));
  }

  /**
   * 查询交付物
   * @returns GetArtifactResponse
   */
  async getArtifact(name: string): Promise<$_model.GetArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getArtifactWithOptions(name, headers, runtime);
  }

  /**
   * 获取环境信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnvironmentResponse
   */
  async getEnvironmentWithOptions(projectName: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEnvironmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.GetEnvironmentResponse({}));
  }

  /**
   * 获取环境信息
   * @returns GetEnvironmentResponse
   */
  async getEnvironment(projectName: string, name: string): Promise<$_model.GetEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentWithOptions(projectName, name, headers, runtime);
  }

  /**
   * 查询环境部署信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnvironmentDeploymentResponse
   */
  async getEnvironmentDeploymentWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEnvironmentDeploymentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnvironmentDeployment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/environmentdeployments/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEnvironmentDeploymentResponse>(await this.callApi(params, req, runtime), new $_model.GetEnvironmentDeploymentResponse({}));
  }

  /**
   * 查询环境部署信息
   * @returns GetEnvironmentDeploymentResponse
   */
  async getEnvironmentDeployment(name: string): Promise<$_model.GetEnvironmentDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentDeploymentWithOptions(name, headers, runtime);
  }

  /**
   * 查询流水线
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineResponse
   */
  async getPipelineWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPipelineResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipeline",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPipelineResponse>(await this.callApi(params, req, runtime), new $_model.GetPipelineResponse({}));
  }

  /**
   * 查询流水线
   * @returns GetPipelineResponse
   */
  async getPipeline(name: string): Promise<$_model.GetPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineWithOptions(name, headers, runtime);
  }

  /**
   * 查询项目
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetProjectResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(name)}`,
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
  async getProject(name: string): Promise<$_model.GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(name, headers, runtime);
  }

  /**
   * 查询仓库绑定
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepositoryResponse
   */
  async getRepositoryWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRepositoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepository",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/repositories/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.GetRepositoryResponse({}));
  }

  /**
   * 查询仓库绑定
   * @returns GetRepositoryResponse
   */
  async getRepository(name: string): Promise<$_model.GetRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepositoryWithOptions(name, headers, runtime);
  }

  /**
   * 查询服务部署信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceDeploymentResponse
   */
  async getServiceDeploymentWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceDeploymentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceDeployment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/servicedeployments/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceDeploymentResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceDeploymentResponse({}));
  }

  /**
   * 查询服务部署信息
   * @returns GetServiceDeploymentResponse
   */
  async getServiceDeployment(name: string): Promise<$_model.GetServiceDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceDeploymentWithOptions(name, headers, runtime);
  }

  /**
   * 查询任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskResponse({}));
  }

  /**
   * 查询任务
   * @returns GetTaskResponse
   */
  async getTask(name: string): Promise<$_model.GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(name, headers, runtime);
  }

  /**
   * 查询工具集
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetToolsetResponse
   */
  async getToolsetWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetToolsetResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToolset",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/toolsets/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetToolsetResponse>(await this.callApi(params, req, runtime), new $_model.GetToolsetResponse({}));
  }

  /**
   * 查询工具集
   * @returns GetToolsetResponse
   */
  async getToolset(name: string): Promise<$_model.GetToolsetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getToolsetWithOptions(name, headers, runtime);
  }

  /**
   * 批量查询身份绑定
   * 
   * @param tmpReq - ListConnectionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnectionsResponse
   */
  async listConnectionsWithOptions(tmpReq: $_model.ListConnectionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListConnectionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListConnectionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
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
      action: "ListConnections",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListConnectionsResponse>(await this.callApi(params, req, runtime), new $_model.ListConnectionsResponse({}));
  }

  /**
   * 批量查询身份绑定
   * 
   * @param request - ListConnectionsRequest
   * @returns ListConnectionsResponse
   */
  async listConnections(request: $_model.ListConnectionsRequest): Promise<$_model.ListConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConnectionsWithOptions(request, headers, runtime);
  }

  /**
   * 查询环境列表
   * 
   * @param tmpReq - ListEnvironmentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentsResponse
   */
  async listEnvironmentsWithOptions(projectName: string, tmpReq: $_model.ListEnvironmentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEnvironmentsResponse> {
    tmpReq.validate();
    let request = new $_model.ListEnvironmentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
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
      action: "ListEnvironments",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEnvironmentsResponse>(await this.callApi(params, req, runtime), new $_model.ListEnvironmentsResponse({}));
  }

  /**
   * 查询环境列表
   * 
   * @param request - ListEnvironmentsRequest
   * @returns ListEnvironmentsResponse
   */
  async listEnvironments(projectName: string, request: $_model.ListEnvironmentsRequest): Promise<$_model.ListEnvironmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentsWithOptions(projectName, request, headers, runtime);
  }

  /**
   * 批量查询流水线
   * 
   * @param tmpReq - ListPipelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelinesResponse
   */
  async listPipelinesWithOptions(tmpReq: $_model.ListPipelinesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPipelinesResponse> {
    tmpReq.validate();
    let request = new $_model.ListPipelinesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelines",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.ListPipelinesResponse>(await this.callApi(params, req, runtime), new $_model.ListPipelinesResponse({}));
  }

  /**
   * 批量查询流水线
   * 
   * @param request - ListPipelinesRequest
   * @returns ListPipelinesResponse
   */
  async listPipelines(request: $_model.ListPipelinesRequest): Promise<$_model.ListPipelinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelinesWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询项目
   * 
   * @param tmpReq - ListProjectsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(tmpReq: $_model.ListProjectsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListProjectsResponse> {
    tmpReq.validate();
    let request = new $_model.ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
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
      action: "ListProjects",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListProjectsResponse>(await this.callApi(params, req, runtime), new $_model.ListProjectsResponse({}));
  }

  /**
   * 批量查询项目
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
   * 批量查询服务部署信息
   * 
   * @param tmpReq - ListServiceDeploymentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceDeploymentsResponse
   */
  async listServiceDeploymentsWithOptions(tmpReq: $_model.ListServiceDeploymentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceDeploymentsResponse> {
    tmpReq.validate();
    let request = new $_model.ListServiceDeploymentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
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
      action: "ListServiceDeployments",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/servicedeployments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceDeploymentsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceDeploymentsResponse({}));
  }

  /**
   * 批量查询服务部署信息
   * 
   * @param request - ListServiceDeploymentsRequest
   * @returns ListServiceDeploymentsResponse
   */
  async listServiceDeployments(request: $_model.ListServiceDeploymentsRequest): Promise<$_model.ListServiceDeploymentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceDeploymentsWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询任务
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
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    return $dara.cast<$_model.ListTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListTasksResponse({}));
  }

  /**
   * 批量查询任务
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
   * 批量查询工具集
   * 
   * @param tmpReq - ListToolsetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListToolsetsResponse
   */
  async listToolsetsWithOptions(tmpReq: $_model.ListToolsetsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListToolsetsResponse> {
    tmpReq.validate();
    let request = new $_model.ListToolsetsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
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
      action: "ListToolsets",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/toolsets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListToolsetsResponse>(await this.callApi(params, req, runtime), new $_model.ListToolsetsResponse({}));
  }

  /**
   * 批量查询工具集
   * 
   * @param request - ListToolsetsRequest
   * @returns ListToolsetsResponse
   */
  async listToolsets(request: $_model.ListToolsetsRequest): Promise<$_model.ListToolsetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listToolsetsWithOptions(request, headers, runtime);
  }

  /**
   * 预览环境变更信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewEnvironmentResponse
   */
  async previewEnvironmentWithOptions(projectName: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PreviewEnvironmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PreviewEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments/${$dara.URL.percentEncode(name)}/preview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PreviewEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.PreviewEnvironmentResponse({}));
  }

  /**
   * 预览环境变更信息
   * @returns PreviewEnvironmentResponse
   */
  async previewEnvironment(projectName: string, name: string): Promise<$_model.PreviewEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.previewEnvironmentWithOptions(projectName, name, headers, runtime);
  }

  /**
   * 更新交付物
   * 
   * @param request - PutArtifactRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutArtifactResponse
   */
  async putArtifactWithOptions(name: string, request: $_model.PutArtifactRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutArtifactResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutArtifact",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/artifacts/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutArtifactResponse>(await this.callApi(params, req, runtime), new $_model.PutArtifactResponse({}));
  }

  /**
   * 更新交付物
   * 
   * @param request - PutArtifactRequest
   * @returns PutArtifactResponse
   */
  async putArtifact(name: string, request: $_model.PutArtifactRequest): Promise<$_model.PutArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putArtifactWithOptions(name, request, headers, runtime);
  }

  /**
   * 更新流水线状态
   * 
   * @param request - PutPipelineStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutPipelineStatusResponse
   */
  async putPipelineStatusWithOptions(name: string, request: $_model.PutPipelineStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutPipelineStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutPipelineStatus",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines/${$dara.URL.percentEncode(name)}/status`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutPipelineStatusResponse>(await this.callApi(params, req, runtime), new $_model.PutPipelineStatusResponse({}));
  }

  /**
   * 更新流水线状态
   * 
   * @param request - PutPipelineStatusRequest
   * @returns PutPipelineStatusResponse
   */
  async putPipelineStatus(name: string, request: $_model.PutPipelineStatusRequest): Promise<$_model.PutPipelineStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putPipelineStatusWithOptions(name, request, headers, runtime);
  }

  /**
   * 更新替换任务状态
   * 
   * @param request - PutTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutTaskStatusResponse
   */
  async putTaskStatusWithOptions(name: string, request: $_model.PutTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PutTaskStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutTaskStatus",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${$dara.URL.percentEncode(name)}/status`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.PutTaskStatusResponse>(await this.callApi(params, req, runtime), new $_model.PutTaskStatusResponse({}));
  }

  /**
   * 更新替换任务状态
   * 
   * @param request - PutTaskStatusRequest
   * @returns PutTaskStatusResponse
   */
  async putTaskStatus(name: string, request: $_model.PutTaskStatusRequest): Promise<$_model.PutTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putTaskStatusWithOptions(name, request, headers, runtime);
  }

  /**
   * 解析模板中的服务、变量配置
   * 
   * @param request - RenderServicesByTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenderServicesByTemplateResponse
   */
  async renderServicesByTemplateWithOptions(request: $_model.RenderServicesByTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenderServicesByTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.projectName)) {
      body["projectName"] = request.projectName;
    }

    if (!$dara.isNull(request.serviceNameChanges)) {
      body["serviceNameChanges"] = request.serviceNameChanges;
    }

    if (!$dara.isNull(request.templateName)) {
      body["templateName"] = request.templateName;
    }

    if (!$dara.isNull(request.variableValues)) {
      body["variableValues"] = request.variableValues;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenderServicesByTemplate",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/templates/action/renderServices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenderServicesByTemplateResponse>(await this.callApi(params, req, runtime), new $_model.RenderServicesByTemplateResponse({}));
  }

  /**
   * 解析模板中的服务、变量配置
   * 
   * @param request - RenderServicesByTemplateRequest
   * @returns RenderServicesByTemplateResponse
   */
  async renderServicesByTemplate(request: $_model.RenderServicesByTemplateRequest): Promise<$_model.RenderServicesByTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renderServicesByTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 确认并继续执行任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeTaskResponse
   */
  async resumeTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${$dara.URL.percentEncode(name)}/resume`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeTaskResponse>(await this.callApi(params, req, runtime), new $_model.ResumeTaskResponse({}));
  }

  /**
   * 确认并继续执行任务
   * @returns ResumeTaskResponse
   */
  async resumeTask(name: string): Promise<$_model.ResumeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeTaskWithOptions(name, headers, runtime);
  }

  /**
   * 重试执行任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryTaskResponse
   */
  async retryTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RetryTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${$dara.URL.percentEncode(name)}/retry`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RetryTaskResponse>(await this.callApi(params, req, runtime), new $_model.RetryTaskResponse({}));
  }

  /**
   * 重试执行任务
   * @returns RetryTaskResponse
   */
  async retryTask(name: string): Promise<$_model.RetryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryTaskWithOptions(name, headers, runtime);
  }

  /**
   * 开始执行流水线
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartPipelineResponse
   */
  async startPipelineWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartPipelineResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartPipeline",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines/${$dara.URL.percentEncode(name)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartPipelineResponse>(await this.callApi(params, req, runtime), new $_model.StartPipelineResponse({}));
  }

  /**
   * 开始执行流水线
   * @returns StartPipelineResponse
   */
  async startPipeline(name: string): Promise<$_model.StartPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startPipelineWithOptions(name, headers, runtime);
  }

  /**
   * 开始执行任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTaskResponse
   */
  async startTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.StartTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${$dara.URL.percentEncode(name)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartTaskResponse>(await this.callApi(params, req, runtime), new $_model.StartTaskResponse({}));
  }

  /**
   * 开始执行任务
   * @returns StartTaskResponse
   */
  async startTask(name: string): Promise<$_model.StartTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTaskWithOptions(name, headers, runtime);
  }

  /**
   * 更新环境（局部更新）
   * 
   * @param request - UpdateEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnvironmentResponse
   */
  async updateEnvironmentWithOptions(projectName: string, name: string, request: $_model.UpdateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEnvironmentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEnvironmentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEnvironmentResponse({}));
  }

  /**
   * 更新环境（局部更新）
   * 
   * @param request - UpdateEnvironmentRequest
   * @returns UpdateEnvironmentResponse
   */
  async updateEnvironment(projectName: string, name: string, request: $_model.UpdateEnvironmentRequest): Promise<$_model.UpdateEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEnvironmentWithOptions(projectName, name, request, headers, runtime);
  }

  /**
   * 更新替换应用
   * 
   * @param request - UpdateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(name: string, request: $_model.UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateProjectResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateProjectResponse>(await this.callApi(params, req, runtime), new $_model.UpdateProjectResponse({}));
  }

  /**
   * 更新替换应用
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(name: string, request: $_model.UpdateProjectRequest): Promise<$_model.UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(name, request, headers, runtime);
  }

  /**
   * 更新工具集
   * 
   * @param request - UpdateToolsetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateToolsetResponse
   */
  async updateToolsetWithOptions(name: string, request: $_model.UpdateToolsetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateToolsetResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateToolset",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/toolsets/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateToolsetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateToolsetResponse({}));
  }

  /**
   * 更新工具集
   * 
   * @param request - UpdateToolsetRequest
   * @returns UpdateToolsetResponse
   */
  async updateToolset(name: string, request: $_model.UpdateToolsetRequest): Promise<$_model.UpdateToolsetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateToolsetWithOptions(name, request, headers, runtime);
  }

}
