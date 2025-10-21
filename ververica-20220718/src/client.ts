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
    this._endpoint = this.getEndpoint("ververica", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 执行定时计划
   * 
   * @param headers - ApplyScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyScheduledPlanResponse
   */
  async applyScheduledPlanWithOptions(namespace: string, scheduledPlanId: string, headers: $_model.ApplyScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyScheduledPlanResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans/${$dara.URL.percentEncode(scheduledPlanId)}%3Aapply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyScheduledPlanResponse>(await this.callApi(params, req, runtime), new $_model.ApplyScheduledPlanResponse({}));
  }

  /**
   * 执行定时计划
   * @returns ApplyScheduledPlanResponse
   */
  async applyScheduledPlan(namespace: string, scheduledPlanId: string): Promise<$_model.ApplyScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ApplyScheduledPlanHeaders({ });
    return await this.applyScheduledPlanWithOptions(namespace, scheduledPlanId, headers, runtime);
  }

  /**
   * 取消调试
   * 
   * @param request - CancelSqlPreviewRequest
   * @param headers - CancelSqlPreviewHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelSqlPreviewResponse
   */
  async cancelSqlPreviewWithOptions(namespace: string, request: $_model.CancelSqlPreviewRequest, headers: $_model.CancelSqlPreviewHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CancelSqlPreviewResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.queryId)) {
      query["queryId"] = request.queryId;
    }

    if (!$dara.isNull(request.sessionClusterName)) {
      query["sessionClusterName"] = request.sessionClusterName;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelSqlPreview",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sql-preview/cancel`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelSqlPreviewResponse>(await this.callApi(params, req, runtime), new $_model.CancelSqlPreviewResponse({}));
  }

  /**
   * 取消调试
   * 
   * @param request - CancelSqlPreviewRequest
   * @returns CancelSqlPreviewResponse
   */
  async cancelSqlPreview(namespace: string, request: $_model.CancelSqlPreviewRequest): Promise<$_model.CancelSqlPreviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CancelSqlPreviewHeaders({ });
    return await this.cancelSqlPreviewWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Creates a deployment.
   * 
   * @param request - CreateDeploymentRequest
   * @param headers - CreateDeploymentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentResponse
   */
  async createDeploymentWithOptions(namespace: string, request: $_model.CreateDeploymentRequest, headers: $_model.CreateDeploymentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDeploymentResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeployment",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDeploymentResponse>(await this.callApi(params, req, runtime), new $_model.CreateDeploymentResponse({}));
  }

  /**
   * Creates a deployment.
   * 
   * @param request - CreateDeploymentRequest
   * @returns CreateDeploymentResponse
   */
  async createDeployment(namespace: string, request: $_model.CreateDeploymentRequest): Promise<$_model.CreateDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateDeploymentHeaders({ });
    return await this.createDeploymentWithOptions(namespace, request, headers, runtime);
  }

  /**
   * create a deploymentDraft
   * 
   * @param request - CreateDeploymentDraftRequest
   * @param headers - CreateDeploymentDraftHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentDraftResponse
   */
  async createDeploymentDraftWithOptions(namespace: string, request: $_model.CreateDeploymentDraftRequest, headers: $_model.CreateDeploymentDraftHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDeploymentDraftResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeploymentDraft",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDeploymentDraftResponse>(await this.callApi(params, req, runtime), new $_model.CreateDeploymentDraftResponse({}));
  }

  /**
   * create a deploymentDraft
   * 
   * @param request - CreateDeploymentDraftRequest
   * @returns CreateDeploymentDraftResponse
   */
  async createDeploymentDraft(namespace: string, request: $_model.CreateDeploymentDraftRequest): Promise<$_model.CreateDeploymentDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateDeploymentDraftHeaders({ });
    return await this.createDeploymentDraftWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 创建deploymentTarget
   * 
   * @param request - CreateDeploymentTargetRequest
   * @param headers - CreateDeploymentTargetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentTargetResponse
   */
  async createDeploymentTargetWithOptions(namespace: string, request: $_model.CreateDeploymentTargetRequest, headers: $_model.CreateDeploymentTargetHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDeploymentTargetResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentTargetName)) {
      query["deploymentTargetName"] = request.deploymentTargetName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeploymentTarget",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-targets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDeploymentTargetResponse>(await this.callApi(params, req, runtime), new $_model.CreateDeploymentTargetResponse({}));
  }

  /**
   * 创建deploymentTarget
   * 
   * @param request - CreateDeploymentTargetRequest
   * @returns CreateDeploymentTargetResponse
   */
  async createDeploymentTarget(namespace: string, request: $_model.CreateDeploymentTargetRequest): Promise<$_model.CreateDeploymentTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateDeploymentTargetHeaders({ });
    return await this.createDeploymentTargetWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 创建部署目标V2
   * 
   * @param request - CreateDeploymentTargetV2Request
   * @param headers - CreateDeploymentTargetV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentTargetV2Response
   */
  async createDeploymentTargetV2WithOptions(namespace: string, request: $_model.CreateDeploymentTargetV2Request, headers: $_model.CreateDeploymentTargetV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDeploymentTargetV2Response> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentTargetName)) {
      query["deploymentTargetName"] = request.deploymentTargetName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDeploymentTargetV2",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-targets/support-elastic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDeploymentTargetV2Response>(await this.callApi(params, req, runtime), new $_model.CreateDeploymentTargetV2Response({}));
  }

  /**
   * 创建部署目标V2
   * 
   * @param request - CreateDeploymentTargetV2Request
   * @returns CreateDeploymentTargetV2Response
   */
  async createDeploymentTargetV2(namespace: string, request: $_model.CreateDeploymentTargetV2Request): Promise<$_model.CreateDeploymentTargetV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateDeploymentTargetV2Headers({ });
    return await this.createDeploymentTargetV2WithOptions(namespace, request, headers, runtime);
  }

  /**
   * create a folder
   * 
   * @param request - CreateFolderRequest
   * @param headers - CreateFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFolderResponse
   */
  async createFolderWithOptions(namespace: string, request: $_model.CreateFolderRequest, headers: $_model.CreateFolderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFolderResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFolder",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/folder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFolderResponse>(await this.callApi(params, req, runtime), new $_model.CreateFolderResponse({}));
  }

  /**
   * create a folder
   * 
   * @param request - CreateFolderRequest
   * @returns CreateFolderResponse
   */
  async createFolder(namespace: string, request: $_model.CreateFolderRequest): Promise<$_model.CreateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateFolderHeaders({ });
    return await this.createFolderWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Adds a user to a namespace as a member and grants permissions to the user.
   * 
   * @param request - CreateMemberRequest
   * @param headers - CreateMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemberResponse
   */
  async createMemberWithOptions(namespace: string, request: $_model.CreateMemberRequest, headers: $_model.CreateMemberHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateMemberResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMember",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${$dara.URL.percentEncode(namespace)}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateMemberResponse>(await this.callApi(params, req, runtime), new $_model.CreateMemberResponse({}));
  }

  /**
   * Adds a user to a namespace as a member and grants permissions to the user.
   * 
   * @param request - CreateMemberRequest
   * @returns CreateMemberResponse
   */
  async createMember(namespace: string, request: $_model.CreateMemberRequest): Promise<$_model.CreateMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateMemberHeaders({ });
    return await this.createMemberWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Creates a savepoint.
   * 
   * @param request - CreateSavepointRequest
   * @param headers - CreateSavepointHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSavepointResponse
   */
  async createSavepointWithOptions(namespace: string, request: $_model.CreateSavepointRequest, headers: $_model.CreateSavepointHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSavepointResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      body["deploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.description)) {
      body["description"] = request.description;
    }

    if (!$dara.isNull(request.nativeFormat)) {
      body["nativeFormat"] = request.nativeFormat;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSavepoint",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/savepoints`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSavepointResponse>(await this.callApi(params, req, runtime), new $_model.CreateSavepointResponse({}));
  }

  /**
   * Creates a savepoint.
   * 
   * @param request - CreateSavepointRequest
   * @returns CreateSavepointResponse
   */
  async createSavepoint(namespace: string, request: $_model.CreateSavepointRequest): Promise<$_model.CreateSavepointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateSavepointHeaders({ });
    return await this.createSavepointWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 创建定时执行计划
   * 
   * @param request - CreateScheduledPlanRequest
   * @param headers - CreateScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScheduledPlanResponse
   */
  async createScheduledPlanWithOptions(namespace: string, request: $_model.CreateScheduledPlanRequest, headers: $_model.CreateScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScheduledPlanResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScheduledPlanResponse>(await this.callApi(params, req, runtime), new $_model.CreateScheduledPlanResponse({}));
  }

  /**
   * 创建定时执行计划
   * 
   * @param request - CreateScheduledPlanRequest
   * @returns CreateScheduledPlanResponse
   */
  async createScheduledPlan(namespace: string, request: $_model.CreateScheduledPlanRequest): Promise<$_model.CreateScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateScheduledPlanHeaders({ });
    return await this.createScheduledPlanWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 创建session集群
   * 
   * @param request - CreateSessionClusterRequest
   * @param headers - CreateSessionClusterHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSessionClusterResponse
   */
  async createSessionClusterWithOptions(namespace: string, request: $_model.CreateSessionClusterRequest, headers: $_model.CreateSessionClusterHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSessionClusterResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSessionCluster",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.CreateSessionClusterResponse({}));
  }

  /**
   * 创建session集群
   * 
   * @param request - CreateSessionClusterRequest
   * @returns CreateSessionClusterResponse
   */
  async createSessionCluster(namespace: string, request: $_model.CreateSessionClusterRequest): Promise<$_model.CreateSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateSessionClusterHeaders({ });
    return await this.createSessionClusterWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Parses all user-defined function (UDF) methods in your JAR or Python file and creates an artifact configuration for a UDF.
   * 
   * @param request - CreateUdfArtifactRequest
   * @param headers - CreateUdfArtifactHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUdfArtifactResponse
   */
  async createUdfArtifactWithOptions(namespace: string, request: $_model.CreateUdfArtifactRequest, headers: $_model.CreateUdfArtifactHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateUdfArtifactResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateUdfArtifact",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/udfartifacts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateUdfArtifactResponse>(await this.callApi(params, req, runtime), new $_model.CreateUdfArtifactResponse({}));
  }

  /**
   * Parses all user-defined function (UDF) methods in your JAR or Python file and creates an artifact configuration for a UDF.
   * 
   * @param request - CreateUdfArtifactRequest
   * @returns CreateUdfArtifactResponse
   */
  async createUdfArtifact(namespace: string, request: $_model.CreateUdfArtifactRequest): Promise<$_model.CreateUdfArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateUdfArtifactHeaders({ });
    return await this.createUdfArtifactWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Creates a variable.
   * 
   * @param request - CreateVariableRequest
   * @param headers - CreateVariableHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVariableResponse
   */
  async createVariableWithOptions(namespace: string, request: $_model.CreateVariableRequest, headers: $_model.CreateVariableHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVariableResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVariable",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/variables`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVariableResponse>(await this.callApi(params, req, runtime), new $_model.CreateVariableResponse({}));
  }

  /**
   * Creates a variable.
   * 
   * @param request - CreateVariableRequest
   * @returns CreateVariableResponse
   */
  async createVariable(namespace: string, request: $_model.CreateVariableRequest): Promise<$_model.CreateVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CreateVariableHeaders({ });
    return await this.createVariableWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Deletes a registered custom connector from a workspace.
   * 
   * @param headers - DeleteCustomConnectorHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomConnectorResponse
   */
  async deleteCustomConnectorWithOptions(namespace: string, connectorName: string, headers: $_model.DeleteCustomConnectorHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCustomConnectorResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomConnector",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/connectors/${$dara.URL.percentEncode(connectorName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCustomConnectorResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCustomConnectorResponse({}));
  }

  /**
   * Deletes a registered custom connector from a workspace.
   * @returns DeleteCustomConnectorResponse
   */
  async deleteCustomConnector(namespace: string, connectorName: string): Promise<$_model.DeleteCustomConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteCustomConnectorHeaders({ });
    return await this.deleteCustomConnectorWithOptions(namespace, connectorName, headers, runtime);
  }

  /**
   * Deletes a deployment based on the deployment ID.
   * 
   * @param headers - DeleteDeploymentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeploymentResponse
   */
  async deleteDeploymentWithOptions(namespace: string, deploymentId: string, headers: $_model.DeleteDeploymentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDeploymentResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeployment",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/${$dara.URL.percentEncode(deploymentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDeploymentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDeploymentResponse({}));
  }

  /**
   * Deletes a deployment based on the deployment ID.
   * @returns DeleteDeploymentResponse
   */
  async deleteDeployment(namespace: string, deploymentId: string): Promise<$_model.DeleteDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteDeploymentHeaders({ });
    return await this.deleteDeploymentWithOptions(namespace, deploymentId, headers, runtime);
  }

  /**
   * delete a deploymentDraft
   * 
   * @param headers - DeleteDeploymentDraftHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeploymentDraftResponse
   */
  async deleteDeploymentDraftWithOptions(namespace: string, deploymentDraftId: string, headers: $_model.DeleteDeploymentDraftHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDeploymentDraftResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeploymentDraft",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts/${$dara.URL.percentEncode(deploymentDraftId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDeploymentDraftResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDeploymentDraftResponse({}));
  }

  /**
   * delete a deploymentDraft
   * @returns DeleteDeploymentDraftResponse
   */
  async deleteDeploymentDraft(namespace: string, deploymentDraftId: string): Promise<$_model.DeleteDeploymentDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteDeploymentDraftHeaders({ });
    return await this.deleteDeploymentDraftWithOptions(namespace, deploymentDraftId, headers, runtime);
  }

  /**
   * 删除deploymentTarget
   * 
   * @param headers - DeleteDeploymentTargetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDeploymentTargetResponse
   */
  async deleteDeploymentTargetWithOptions(namespace: string, deploymentTargetName: string, headers: $_model.DeleteDeploymentTargetHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteDeploymentTargetResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDeploymentTarget",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-targets/${$dara.URL.percentEncode(deploymentTargetName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteDeploymentTargetResponse>(await this.callApi(params, req, runtime), new $_model.DeleteDeploymentTargetResponse({}));
  }

  /**
   * 删除deploymentTarget
   * @returns DeleteDeploymentTargetResponse
   */
  async deleteDeploymentTarget(namespace: string, deploymentTargetName: string): Promise<$_model.DeleteDeploymentTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteDeploymentTargetHeaders({ });
    return await this.deleteDeploymentTargetWithOptions(namespace, deploymentTargetName, headers, runtime);
  }

  /**
   * delete a folder
   * 
   * @param headers - DeleteFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFolderResponse
   */
  async deleteFolderWithOptions(namespace: string, folderId: string, headers: $_model.DeleteFolderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFolderResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFolder",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/folder/${$dara.URL.percentEncode(folderId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFolderResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFolderResponse({}));
  }

  /**
   * delete a folder
   * @returns DeleteFolderResponse
   */
  async deleteFolder(namespace: string, folderId: string): Promise<$_model.DeleteFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteFolderHeaders({ });
    return await this.deleteFolderWithOptions(namespace, folderId, headers, runtime);
  }

  /**
   * Deletes the information about a job that is not in the running state in a deployment.
   * 
   * @param headers - DeleteJobHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobResponse
   */
  async deleteJobWithOptions(namespace: string, jobId: string, headers: $_model.DeleteJobHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteJobResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs/${$dara.URL.percentEncode(jobId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteJobResponse>(await this.callApi(params, req, runtime), new $_model.DeleteJobResponse({}));
  }

  /**
   * Deletes the information about a job that is not in the running state in a deployment.
   * @returns DeleteJobResponse
   */
  async deleteJob(namespace: string, jobId: string): Promise<$_model.DeleteJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteJobHeaders({ });
    return await this.deleteJobWithOptions(namespace, jobId, headers, runtime);
  }

  /**
   * Revokes the permissions from a member.
   * 
   * @param headers - DeleteMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMemberResponse
   */
  async deleteMemberWithOptions(namespace: string, member: string, headers: $_model.DeleteMemberHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMemberResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMember",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${$dara.URL.percentEncode(namespace)}/members/${$dara.URL.percentEncode(member)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMemberResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMemberResponse({}));
  }

  /**
   * Revokes the permissions from a member.
   * @returns DeleteMemberResponse
   */
  async deleteMember(namespace: string, member: string): Promise<$_model.DeleteMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteMemberHeaders({ });
    return await this.deleteMemberWithOptions(namespace, member, headers, runtime);
  }

  /**
   * Deletes a savepoint.
   * 
   * @param headers - DeleteSavepointHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSavepointResponse
   */
  async deleteSavepointWithOptions(namespace: string, savepointId: string, headers: $_model.DeleteSavepointHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSavepointResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSavepoint",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/savepoints/${$dara.URL.percentEncode(savepointId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSavepointResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSavepointResponse({}));
  }

  /**
   * Deletes a savepoint.
   * @returns DeleteSavepointResponse
   */
  async deleteSavepoint(namespace: string, savepointId: string): Promise<$_model.DeleteSavepointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteSavepointHeaders({ });
    return await this.deleteSavepointWithOptions(namespace, savepointId, headers, runtime);
  }

  /**
   * 删除定时执行计划
   * 
   * @param headers - DeleteScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScheduledPlanResponse
   */
  async deleteScheduledPlanWithOptions(namespace: string, scheduledPlanId: string, headers: $_model.DeleteScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScheduledPlanResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans/${$dara.URL.percentEncode(scheduledPlanId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScheduledPlanResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScheduledPlanResponse({}));
  }

  /**
   * 删除定时执行计划
   * @returns DeleteScheduledPlanResponse
   */
  async deleteScheduledPlan(namespace: string, scheduledPlanId: string): Promise<$_model.DeleteScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteScheduledPlanHeaders({ });
    return await this.deleteScheduledPlanWithOptions(namespace, scheduledPlanId, headers, runtime);
  }

  /**
   * 删除session集群
   * 
   * @param headers - DeleteSessionClusterHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSessionClusterResponse
   */
  async deleteSessionClusterWithOptions(namespace: string, sessionClusterName: string, headers: $_model.DeleteSessionClusterHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSessionClusterResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSessionCluster",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters/${$dara.URL.percentEncode(sessionClusterName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSessionClusterResponse({}));
  }

  /**
   * 删除session集群
   * @returns DeleteSessionClusterResponse
   */
  async deleteSessionCluster(namespace: string, sessionClusterName: string): Promise<$_model.DeleteSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteSessionClusterHeaders({ });
    return await this.deleteSessionClusterWithOptions(namespace, sessionClusterName, headers, runtime);
  }

  /**
   * 删除UdfArtifact
   * 
   * @param headers - DeleteUdfArtifactHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUdfArtifactResponse
   */
  async deleteUdfArtifactWithOptions(namespace: string, udfArtifactName: string, headers: $_model.DeleteUdfArtifactHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUdfArtifactResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUdfArtifact",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/udfartifacts/${$dara.URL.percentEncode(udfArtifactName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUdfArtifactResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUdfArtifactResponse({}));
  }

  /**
   * 删除UdfArtifact
   * @returns DeleteUdfArtifactResponse
   */
  async deleteUdfArtifact(namespace: string, udfArtifactName: string): Promise<$_model.DeleteUdfArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteUdfArtifactHeaders({ });
    return await this.deleteUdfArtifactWithOptions(namespace, udfArtifactName, headers, runtime);
  }

  /**
   * Deletes an existing user-defined function (UDF) from a Realtime Compute for Apache Flink workspace.
   * 
   * @param request - DeleteUdfFunctionRequest
   * @param headers - DeleteUdfFunctionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUdfFunctionResponse
   */
  async deleteUdfFunctionWithOptions(namespace: string, functionName: string, request: $_model.DeleteUdfFunctionRequest, headers: $_model.DeleteUdfFunctionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteUdfFunctionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.className)) {
      query["className"] = request.className;
    }

    if (!$dara.isNull(request.udfArtifactName)) {
      query["udfArtifactName"] = request.udfArtifactName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUdfFunction",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/udfartifacts/function/${$dara.URL.percentEncode(functionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteUdfFunctionResponse>(await this.callApi(params, req, runtime), new $_model.DeleteUdfFunctionResponse({}));
  }

  /**
   * Deletes an existing user-defined function (UDF) from a Realtime Compute for Apache Flink workspace.
   * 
   * @param request - DeleteUdfFunctionRequest
   * @returns DeleteUdfFunctionResponse
   */
  async deleteUdfFunction(namespace: string, functionName: string, request: $_model.DeleteUdfFunctionRequest): Promise<$_model.DeleteUdfFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteUdfFunctionHeaders({ });
    return await this.deleteUdfFunctionWithOptions(namespace, functionName, request, headers, runtime);
  }

  /**
   * Deletes a variable.
   * 
   * @param headers - DeleteVariableHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVariableResponse
   */
  async deleteVariableWithOptions(namespace: string, name: string, headers: $_model.DeleteVariableHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteVariableResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVariable",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/variables/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteVariableResponse>(await this.callApi(params, req, runtime), new $_model.DeleteVariableResponse({}));
  }

  /**
   * Deletes a variable.
   * @returns DeleteVariableResponse
   */
  async deleteVariable(namespace: string, name: string): Promise<$_model.DeleteVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeleteVariableHeaders({ });
    return await this.deleteVariableWithOptions(namespace, name, headers, runtime);
  }

  /**
   * deploy deploymentDraft async
   * 
   * @param request - DeployDeploymentDraftAsyncRequest
   * @param headers - DeployDeploymentDraftAsyncHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployDeploymentDraftAsyncResponse
   */
  async deployDeploymentDraftAsyncWithOptions(namespace: string, request: $_model.DeployDeploymentDraftAsyncRequest, headers: $_model.DeployDeploymentDraftAsyncHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.DeployDeploymentDraftAsyncResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployDeploymentDraftAsync",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts/async-deploy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployDeploymentDraftAsyncResponse>(await this.callApi(params, req, runtime), new $_model.DeployDeploymentDraftAsyncResponse({}));
  }

  /**
   * deploy deploymentDraft async
   * 
   * @param request - DeployDeploymentDraftAsyncRequest
   * @returns DeployDeploymentDraftAsyncResponse
   */
  async deployDeploymentDraftAsync(namespace: string, request: $_model.DeployDeploymentDraftAsyncRequest): Promise<$_model.DeployDeploymentDraftAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.DeployDeploymentDraftAsyncHeaders({ });
    return await this.deployDeploymentDraftAsyncWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 执行sql语句
   * 
   * @param request - ExecuteSqlStatementRequest
   * @param headers - ExecuteSqlStatementHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecuteSqlStatementResponse
   */
  async executeSqlStatementWithOptions(namespace: string, request: $_model.ExecuteSqlStatementRequest, headers: $_model.ExecuteSqlStatementHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ExecuteSqlStatementResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExecuteSqlStatement",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sql-statement/execute`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExecuteSqlStatementResponse>(await this.callApi(params, req, runtime), new $_model.ExecuteSqlStatementResponse({}));
  }

  /**
   * 执行sql语句
   * 
   * @param request - ExecuteSqlStatementRequest
   * @returns ExecuteSqlStatementResponse
   */
  async executeSqlStatement(namespace: string, request: $_model.ExecuteSqlStatementRequest): Promise<$_model.ExecuteSqlStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ExecuteSqlStatementHeaders({ });
    return await this.executeSqlStatementWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 获取调试结果
   * 
   * @param request - FetchSqlPreviewResultsRequest
   * @param headers - FetchSqlPreviewResultsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchSqlPreviewResultsResponse
   */
  async fetchSqlPreviewResultsWithOptions(namespace: string, request: $_model.FetchSqlPreviewResultsRequest, headers: $_model.FetchSqlPreviewResultsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FetchSqlPreviewResultsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.queryId)) {
      query["queryId"] = request.queryId;
    }

    if (!$dara.isNull(request.sessionClusterName)) {
      query["sessionClusterName"] = request.sessionClusterName;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchSqlPreviewResults",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sql-preview/fetchResults`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FetchSqlPreviewResultsResponse>(await this.callApi(params, req, runtime), new $_model.FetchSqlPreviewResultsResponse({}));
  }

  /**
   * 获取调试结果
   * 
   * @param request - FetchSqlPreviewResultsRequest
   * @returns FetchSqlPreviewResultsResponse
   */
  async fetchSqlPreviewResults(namespace: string, request: $_model.FetchSqlPreviewResultsRequest): Promise<$_model.FetchSqlPreviewResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FetchSqlPreviewResultsHeaders({ });
    return await this.fetchSqlPreviewResultsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Provides a Flink request proxy.
   * 
   * @param request - FlinkApiProxyRequest
   * @param headers - FlinkApiProxyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlinkApiProxyResponse
   */
  async flinkApiProxyWithOptions(request: $_model.FlinkApiProxyRequest, headers: $_model.FlinkApiProxyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlinkApiProxyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.flinkApiPath)) {
      query["flinkApiPath"] = request.flinkApiPath;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["resourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlinkApiProxy",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/flink-ui/v2/proxy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlinkApiProxyResponse>(await this.callApi(params, req, runtime), new $_model.FlinkApiProxyResponse({}));
  }

  /**
   * Provides a Flink request proxy.
   * 
   * @param request - FlinkApiProxyRequest
   * @returns FlinkApiProxyResponse
   */
  async flinkApiProxy(request: $_model.FlinkApiProxyRequest): Promise<$_model.FlinkApiProxyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlinkApiProxyHeaders({ });
    return await this.flinkApiProxyWithOptions(request, headers, runtime);
  }

  /**
   * Submits a ticket that applies for asynchronous generation of the fine-grained resources. This operation returns the ID of the ticket for you to query the asynchronous generation result.
   * 
   * @param request - GenerateResourcePlanWithFlinkConfAsyncRequest
   * @param headers - GenerateResourcePlanWithFlinkConfAsyncHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateResourcePlanWithFlinkConfAsyncResponse
   */
  async generateResourcePlanWithFlinkConfAsyncWithOptions(namespace: string, deploymentId: string, request: $_model.GenerateResourcePlanWithFlinkConfAsyncRequest, headers: $_model.GenerateResourcePlanWithFlinkConfAsyncHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateResourcePlanWithFlinkConfAsyncResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateResourcePlanWithFlinkConfAsync",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/${$dara.URL.percentEncode(deploymentId)}/resource-plan%3AasyncGenerate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateResourcePlanWithFlinkConfAsyncResponse>(await this.callApi(params, req, runtime), new $_model.GenerateResourcePlanWithFlinkConfAsyncResponse({}));
  }

  /**
   * Submits a ticket that applies for asynchronous generation of the fine-grained resources. This operation returns the ID of the ticket for you to query the asynchronous generation result.
   * 
   * @param request - GenerateResourcePlanWithFlinkConfAsyncRequest
   * @returns GenerateResourcePlanWithFlinkConfAsyncResponse
   */
  async generateResourcePlanWithFlinkConfAsync(namespace: string, deploymentId: string, request: $_model.GenerateResourcePlanWithFlinkConfAsyncRequest): Promise<$_model.GenerateResourcePlanWithFlinkConfAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GenerateResourcePlanWithFlinkConfAsyncHeaders({ });
    return await this.generateResourcePlanWithFlinkConfAsyncWithOptions(namespace, deploymentId, request, headers, runtime);
  }

  /**
   * 获取应用中的执行定时计划
   * 
   * @param request - GetAppliedScheduledPlanRequest
   * @param headers - GetAppliedScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppliedScheduledPlanResponse
   */
  async getAppliedScheduledPlanWithOptions(namespace: string, request: $_model.GetAppliedScheduledPlanRequest, headers: $_model.GetAppliedScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppliedScheduledPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAppliedScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans%3AgetExecutedScheduledPlan`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppliedScheduledPlanResponse>(await this.callApi(params, req, runtime), new $_model.GetAppliedScheduledPlanResponse({}));
  }

  /**
   * 获取应用中的执行定时计划
   * 
   * @param request - GetAppliedScheduledPlanRequest
   * @returns GetAppliedScheduledPlanResponse
   */
  async getAppliedScheduledPlan(namespace: string, request: $_model.GetAppliedScheduledPlanRequest): Promise<$_model.GetAppliedScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetAppliedScheduledPlanHeaders({ });
    return await this.getAppliedScheduledPlanWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 获取catalog
   * 
   * @param request - GetCatalogsRequest
   * @param headers - GetCatalogsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCatalogsResponse
   */
  async getCatalogsWithOptions(namespace: string, request: $_model.GetCatalogsRequest, headers: $_model.GetCatalogsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetCatalogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.catalogName)) {
      query["catalogName"] = request.catalogName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCatalogs",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/catalogs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCatalogsResponse>(await this.callApi(params, req, runtime), new $_model.GetCatalogsResponse({}));
  }

  /**
   * 获取catalog
   * 
   * @param request - GetCatalogsRequest
   * @returns GetCatalogsResponse
   */
  async getCatalogs(namespace: string, request: $_model.GetCatalogsRequest): Promise<$_model.GetCatalogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetCatalogsHeaders({ });
    return await this.getCatalogsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 获取database
   * 
   * @param request - GetDatabasesRequest
   * @param headers - GetDatabasesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatabasesResponse
   */
  async getDatabasesWithOptions(namespace: string, catalogName: string, request: $_model.GetDatabasesRequest, headers: $_model.GetDatabasesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatabasesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.databaseName)) {
      query["databaseName"] = request.databaseName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatabases",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/catalogs/${$dara.URL.percentEncode(catalogName)}/databases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatabasesResponse>(await this.callApi(params, req, runtime), new $_model.GetDatabasesResponse({}));
  }

  /**
   * 获取database
   * 
   * @param request - GetDatabasesRequest
   * @returns GetDatabasesResponse
   */
  async getDatabases(namespace: string, catalogName: string, request: $_model.GetDatabasesRequest): Promise<$_model.GetDatabasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDatabasesHeaders({ });
    return await this.getDatabasesWithOptions(namespace, catalogName, request, headers, runtime);
  }

  /**
   * get deploy deploymentDraft result
   * 
   * @param headers - GetDeployDeploymentDraftResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeployDeploymentDraftResultResponse
   */
  async getDeployDeploymentDraftResultWithOptions(namespace: string, ticketId: string, headers: $_model.GetDeployDeploymentDraftResultHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeployDeploymentDraftResultResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeployDeploymentDraftResult",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts/tickets/${$dara.URL.percentEncode(ticketId)}/async-deploy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeployDeploymentDraftResultResponse>(await this.callApi(params, req, runtime), new $_model.GetDeployDeploymentDraftResultResponse({}));
  }

  /**
   * get deploy deploymentDraft result
   * @returns GetDeployDeploymentDraftResultResponse
   */
  async getDeployDeploymentDraftResult(namespace: string, ticketId: string): Promise<$_model.GetDeployDeploymentDraftResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDeployDeploymentDraftResultHeaders({ });
    return await this.getDeployDeploymentDraftResultWithOptions(namespace, ticketId, headers, runtime);
  }

  /**
   * Obtains the details of a deployment.
   * 
   * @param headers - GetDeploymentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentResponse
   */
  async getDeploymentWithOptions(namespace: string, deploymentId: string, headers: $_model.GetDeploymentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeploymentResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeployment",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/${$dara.URL.percentEncode(deploymentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeploymentResponse>(await this.callApi(params, req, runtime), new $_model.GetDeploymentResponse({}));
  }

  /**
   * Obtains the details of a deployment.
   * @returns GetDeploymentResponse
   */
  async getDeployment(namespace: string, deploymentId: string): Promise<$_model.GetDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDeploymentHeaders({ });
    return await this.getDeploymentWithOptions(namespace, deploymentId, headers, runtime);
  }

  /**
   * get a deploymentDraft
   * 
   * @param headers - GetDeploymentDraftHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentDraftResponse
   */
  async getDeploymentDraftWithOptions(namespace: string, deploymentDraftId: string, headers: $_model.GetDeploymentDraftHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeploymentDraftResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeploymentDraft",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts/${$dara.URL.percentEncode(deploymentDraftId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeploymentDraftResponse>(await this.callApi(params, req, runtime), new $_model.GetDeploymentDraftResponse({}));
  }

  /**
   * get a deploymentDraft
   * @returns GetDeploymentDraftResponse
   */
  async getDeploymentDraft(namespace: string, deploymentDraftId: string): Promise<$_model.GetDeploymentDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDeploymentDraftHeaders({ });
    return await this.getDeploymentDraftWithOptions(namespace, deploymentDraftId, headers, runtime);
  }

  /**
   * get deploymentDraft lock
   * 
   * @param request - GetDeploymentDraftLockRequest
   * @param headers - GetDeploymentDraftLockHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentDraftLockResponse
   */
  async getDeploymentDraftLockWithOptions(namespace: string, request: $_model.GetDeploymentDraftLockRequest, headers: $_model.GetDeploymentDraftLockHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetDeploymentDraftLockResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentDraftId)) {
      query["deploymentDraftId"] = request.deploymentDraftId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDeploymentDraftLock",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts/getLock`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDeploymentDraftLockResponse>(await this.callApi(params, req, runtime), new $_model.GetDeploymentDraftLockResponse({}));
  }

  /**
   * get deploymentDraft lock
   * 
   * @param request - GetDeploymentDraftLockRequest
   * @returns GetDeploymentDraftLockResponse
   */
  async getDeploymentDraftLock(namespace: string, request: $_model.GetDeploymentDraftLockRequest): Promise<$_model.GetDeploymentDraftLockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetDeploymentDraftLockHeaders({ });
    return await this.getDeploymentDraftLockWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 获取运行事件
   * 
   * @param request - GetEventsRequest
   * @param headers - GetEventsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEventsResponse
   */
  async getEventsWithOptions(namespace: string, request: $_model.GetEventsRequest, headers: $_model.GetEventsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEvents",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEventsResponse>(await this.callApi(params, req, runtime), new $_model.GetEventsResponse({}));
  }

  /**
   * 获取运行事件
   * 
   * @param request - GetEventsRequest
   * @returns GetEventsResponse
   */
  async getEvents(namespace: string, request: $_model.GetEventsRequest): Promise<$_model.GetEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetEventsHeaders({ });
    return await this.getEventsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * get a folder
   * 
   * @param request - GetFolderRequest
   * @param headers - GetFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFolderResponse
   */
  async getFolderWithOptions(namespace: string, request: $_model.GetFolderRequest, headers: $_model.GetFolderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetFolderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.folderId)) {
      query["folderId"] = request.folderId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFolder",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/folder`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFolderResponse>(await this.callApi(params, req, runtime), new $_model.GetFolderResponse({}));
  }

  /**
   * get a folder
   * 
   * @param request - GetFolderRequest
   * @returns GetFolderResponse
   */
  async getFolder(namespace: string, request: $_model.GetFolderRequest): Promise<$_model.GetFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetFolderHeaders({ });
    return await this.getFolderWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Obtains the asynchronous generation result of fine-grained resources based on the ID of the ticket that applies for an asynchronous generation.
   * 
   * @param headers - GetGenerateResourcePlanResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGenerateResourcePlanResultResponse
   */
  async getGenerateResourcePlanResultWithOptions(namespace: string, ticketId: string, headers: $_model.GetGenerateResourcePlanResultHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetGenerateResourcePlanResultResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGenerateResourcePlanResult",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/tickets/${$dara.URL.percentEncode(ticketId)}/resource-plan%3AasyncGenerate`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGenerateResourcePlanResultResponse>(await this.callApi(params, req, runtime), new $_model.GetGenerateResourcePlanResultResponse({}));
  }

  /**
   * Obtains the asynchronous generation result of fine-grained resources based on the ID of the ticket that applies for an asynchronous generation.
   * @returns GetGenerateResourcePlanResultResponse
   */
  async getGenerateResourcePlanResult(namespace: string, ticketId: string): Promise<$_model.GetGenerateResourcePlanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetGenerateResourcePlanResultHeaders({ });
    return await this.getGenerateResourcePlanResultWithOptions(namespace, ticketId, headers, runtime);
  }

  /**
   * 查询动态更新结果
   * 
   * @param headers - GetHotUpdateJobResultHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotUpdateJobResultResponse
   */
  async getHotUpdateJobResultWithOptions(namespace: string, jobHotUpdateId: string, headers: $_model.GetHotUpdateJobResultHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetHotUpdateJobResultResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotUpdateJobResult",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs/hot-updates/${$dara.URL.percentEncode(jobHotUpdateId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetHotUpdateJobResultResponse>(await this.callApi(params, req, runtime), new $_model.GetHotUpdateJobResultResponse({}));
  }

  /**
   * 查询动态更新结果
   * @returns GetHotUpdateJobResultResponse
   */
  async getHotUpdateJobResult(namespace: string, jobHotUpdateId: string): Promise<$_model.GetHotUpdateJobResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetHotUpdateJobResultHeaders({ });
    return await this.getHotUpdateJobResultWithOptions(namespace, jobHotUpdateId, headers, runtime);
  }

  /**
   * Obtains the details of a job.
   * 
   * @param headers - GetJobHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobResponse
   */
  async getJobWithOptions(namespace: string, jobId: string, headers: $_model.GetJobHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs/${$dara.URL.percentEncode(jobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobResponse>(await this.callApi(params, req, runtime), new $_model.GetJobResponse({}));
  }

  /**
   * Obtains the details of a job.
   * @returns GetJobResponse
   */
  async getJob(namespace: string, jobId: string): Promise<$_model.GetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetJobHeaders({ });
    return await this.getJobWithOptions(namespace, jobId, headers, runtime);
  }

  /**
   * 获取作业诊断信息
   * 
   * @param headers - GetJobDiagnosisHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobDiagnosisResponse
   */
  async getJobDiagnosisWithOptions(namespace: string, deploymentId: string, jobId: string, headers: $_model.GetJobDiagnosisHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobDiagnosisResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobDiagnosis",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/${$dara.URL.percentEncode(deploymentId)}/jobs/${$dara.URL.percentEncode(jobId)}/job-diagnoses/lite`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobDiagnosisResponse>(await this.callApi(params, req, runtime), new $_model.GetJobDiagnosisResponse({}));
  }

  /**
   * 获取作业诊断信息
   * @returns GetJobDiagnosisResponse
   */
  async getJobDiagnosis(namespace: string, deploymentId: string, jobId: string): Promise<$_model.GetJobDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetJobDiagnosisHeaders({ });
    return await this.getJobDiagnosisWithOptions(namespace, deploymentId, jobId, headers, runtime);
  }

  /**
   * Obtains the latest startup logs of a job.
   * 
   * @param headers - GetLatestJobStartLogHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLatestJobStartLogResponse
   */
  async getLatestJobStartLogWithOptions(namespace: string, deploymentId: string, headers: $_model.GetLatestJobStartLogHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetLatestJobStartLogResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLatestJobStartLog",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/${$dara.URL.percentEncode(deploymentId)}/latest_jobmanager_start_log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLatestJobStartLogResponse>(await this.callApi(params, req, runtime), new $_model.GetLatestJobStartLogResponse({}));
  }

  /**
   * Obtains the latest startup logs of a job.
   * @returns GetLatestJobStartLogResponse
   */
  async getLatestJobStartLog(namespace: string, deploymentId: string): Promise<$_model.GetLatestJobStartLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetLatestJobStartLogHeaders({ });
    return await this.getLatestJobStartLogWithOptions(namespace, deploymentId, headers, runtime);
  }

  /**
   * Obtains the lineage information of a deployment.
   * 
   * @param request - GetLineageInfoRequest
   * @param headers - GetLineageInfoHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLineageInfoResponse
   */
  async getLineageInfoWithOptions(request: $_model.GetLineageInfoRequest, headers: $_model.GetLineageInfoHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetLineageInfoResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLineageInfo",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/meta/v2/lineage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetLineageInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetLineageInfoResponse({}));
  }

  /**
   * Obtains the lineage information of a deployment.
   * 
   * @param request - GetLineageInfoRequest
   * @returns GetLineageInfoResponse
   */
  async getLineageInfo(request: $_model.GetLineageInfoRequest): Promise<$_model.GetLineageInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetLineageInfoHeaders({ });
    return await this.getLineageInfoWithOptions(request, headers, runtime);
  }

  /**
   * Queries the permissions of a member.
   * 
   * @param headers - GetMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemberResponse
   */
  async getMemberWithOptions(namespace: string, member: string, headers: $_model.GetMemberHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetMemberResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMember",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${$dara.URL.percentEncode(namespace)}/members/${$dara.URL.percentEncode(member)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMemberResponse>(await this.callApi(params, req, runtime), new $_model.GetMemberResponse({}));
  }

  /**
   * Queries the permissions of a member.
   * @returns GetMemberResponse
   */
  async getMember(namespace: string, member: string): Promise<$_model.GetMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetMemberHeaders({ });
    return await this.getMemberWithOptions(namespace, member, headers, runtime);
  }

  /**
   * Queries details of a savepoint and checkpoint.
   * 
   * @param headers - GetSavepointHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSavepointResponse
   */
  async getSavepointWithOptions(namespace: string, savepointId: string, headers: $_model.GetSavepointHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetSavepointResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSavepoint",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/savepoints/${$dara.URL.percentEncode(savepointId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSavepointResponse>(await this.callApi(params, req, runtime), new $_model.GetSavepointResponse({}));
  }

  /**
   * Queries details of a savepoint and checkpoint.
   * @returns GetSavepointResponse
   */
  async getSavepoint(namespace: string, savepointId: string): Promise<$_model.GetSavepointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetSavepointHeaders({ });
    return await this.getSavepointWithOptions(namespace, savepointId, headers, runtime);
  }

  /**
   * 获取session集群
   * 
   * @param headers - GetSessionClusterHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSessionClusterResponse
   */
  async getSessionClusterWithOptions(namespace: string, sessionClusterName: string, headers: $_model.GetSessionClusterHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetSessionClusterResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSessionCluster",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters/${$dara.URL.percentEncode(sessionClusterName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.GetSessionClusterResponse({}));
  }

  /**
   * 获取session集群
   * @returns GetSessionClusterResponse
   */
  async getSessionCluster(namespace: string, sessionClusterName: string): Promise<$_model.GetSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetSessionClusterHeaders({ });
    return await this.getSessionClusterWithOptions(namespace, sessionClusterName, headers, runtime);
  }

  /**
   * 获取table
   * 
   * @param request - GetTablesRequest
   * @param headers - GetTablesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTablesResponse
   */
  async getTablesWithOptions(namespace: string, catalogName: string, databaseName: string, request: $_model.GetTablesRequest, headers: $_model.GetTablesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetTablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tableName)) {
      query["tableName"] = request.tableName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTables",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/catalogs/${$dara.URL.percentEncode(catalogName)}/databases/${$dara.URL.percentEncode(databaseName)}/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTablesResponse>(await this.callApi(params, req, runtime), new $_model.GetTablesResponse({}));
  }

  /**
   * 获取table
   * 
   * @param request - GetTablesRequest
   * @returns GetTablesResponse
   */
  async getTables(namespace: string, catalogName: string, databaseName: string, request: $_model.GetTablesRequest): Promise<$_model.GetTablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetTablesHeaders({ });
    return await this.getTablesWithOptions(namespace, catalogName, databaseName, request, headers, runtime);
  }

  /**
   * Obtains the details of the JAR or Python file that corresponds to the user-defined function (UDF) that you upload and create.
   * 
   * @param request - GetUdfArtifactsRequest
   * @param headers - GetUdfArtifactsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUdfArtifactsResponse
   */
  async getUdfArtifactsWithOptions(namespace: string, request: $_model.GetUdfArtifactsRequest, headers: $_model.GetUdfArtifactsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetUdfArtifactsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.udfArtifactName)) {
      query["udfArtifactName"] = request.udfArtifactName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUdfArtifacts",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/udfartifacts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUdfArtifactsResponse>(await this.callApi(params, req, runtime), new $_model.GetUdfArtifactsResponse({}));
  }

  /**
   * Obtains the details of the JAR or Python file that corresponds to the user-defined function (UDF) that you upload and create.
   * 
   * @param request - GetUdfArtifactsRequest
   * @returns GetUdfArtifactsResponse
   */
  async getUdfArtifacts(namespace: string, request: $_model.GetUdfArtifactsRequest): Promise<$_model.GetUdfArtifactsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetUdfArtifactsHeaders({ });
    return await this.getUdfArtifactsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Dynamically updates parameters or resources of a deployment that is running.
   * 
   * @param headers - HotUpdateJobHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotUpdateJobResponse
   */
  async hotUpdateJobWithOptions(namespace: string, jobId: string, headers: $_model.HotUpdateJobHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.HotUpdateJobResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "HotUpdateJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs/${$dara.URL.percentEncode(jobId)}%3AhotUpdate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotUpdateJobResponse>(await this.callApi(params, req, runtime), new $_model.HotUpdateJobResponse({}));
  }

  /**
   * Dynamically updates parameters or resources of a deployment that is running.
   * @returns HotUpdateJobResponse
   */
  async hotUpdateJob(namespace: string, jobId: string): Promise<$_model.HotUpdateJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.HotUpdateJobHeaders({ });
    return await this.hotUpdateJobWithOptions(namespace, jobId, headers, runtime);
  }

  /**
   * Obtains a list of existing custom connectors.
   * 
   * @param headers - ListCustomConnectorsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomConnectorsResponse
   */
  async listCustomConnectorsWithOptions(namespace: string, headers: $_model.ListCustomConnectorsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListCustomConnectorsResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCustomConnectors",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/connectors`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCustomConnectorsResponse>(await this.callApi(params, req, runtime), new $_model.ListCustomConnectorsResponse({}));
  }

  /**
   * Obtains a list of existing custom connectors.
   * @returns ListCustomConnectorsResponse
   */
  async listCustomConnectors(namespace: string): Promise<$_model.ListCustomConnectorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListCustomConnectorsHeaders({ });
    return await this.listCustomConnectorsWithOptions(namespace, headers, runtime);
  }

  /**
   * list deploymentDrafts
   * 
   * @param request - ListDeploymentDraftsRequest
   * @param headers - ListDeploymentDraftsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentDraftsResponse
   */
  async listDeploymentDraftsWithOptions(namespace: string, request: $_model.ListDeploymentDraftsRequest, headers: $_model.ListDeploymentDraftsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeploymentDraftsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeploymentDrafts",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeploymentDraftsResponse>(await this.callApi(params, req, runtime), new $_model.ListDeploymentDraftsResponse({}));
  }

  /**
   * list deploymentDrafts
   * 
   * @param request - ListDeploymentDraftsRequest
   * @returns ListDeploymentDraftsResponse
   */
  async listDeploymentDrafts(namespace: string, request: $_model.ListDeploymentDraftsRequest): Promise<$_model.ListDeploymentDraftsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListDeploymentDraftsHeaders({ });
    return await this.listDeploymentDraftsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Obtains a list of clusters in which deployments can be deployed. The cluster can be a session cluster or a per-job cluster.
   * 
   * @param request - ListDeploymentTargetsRequest
   * @param headers - ListDeploymentTargetsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentTargetsResponse
   */
  async listDeploymentTargetsWithOptions(namespace: string, request: $_model.ListDeploymentTargetsRequest, headers: $_model.ListDeploymentTargetsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeploymentTargetsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeploymentTargets",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-targets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeploymentTargetsResponse>(await this.callApi(params, req, runtime), new $_model.ListDeploymentTargetsResponse({}));
  }

  /**
   * Obtains a list of clusters in which deployments can be deployed. The cluster can be a session cluster or a per-job cluster.
   * 
   * @param request - ListDeploymentTargetsRequest
   * @returns ListDeploymentTargetsResponse
   */
  async listDeploymentTargets(namespace: string, request: $_model.ListDeploymentTargetsRequest): Promise<$_model.ListDeploymentTargetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListDeploymentTargetsHeaders({ });
    return await this.listDeploymentTargetsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Obtains information about all deployments.
   * 
   * @param request - ListDeploymentsRequest
   * @param headers - ListDeploymentsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentsResponse
   */
  async listDeploymentsWithOptions(namespace: string, request: $_model.ListDeploymentsRequest, headers: $_model.ListDeploymentsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListDeploymentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creator)) {
      query["creator"] = request.creator;
    }

    if (!$dara.isNull(request.executionMode)) {
      query["executionMode"] = request.executionMode;
    }

    if (!$dara.isNull(request.labelKey)) {
      query["labelKey"] = request.labelKey;
    }

    if (!$dara.isNull(request.labelValueArray)) {
      query["labelValueArray"] = request.labelValueArray;
    }

    if (!$dara.isNull(request.modifier)) {
      query["modifier"] = request.modifier;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortName)) {
      query["sortName"] = request.sortName;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDeployments",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListDeploymentsResponse>(await this.callApi(params, req, runtime), new $_model.ListDeploymentsResponse({}));
  }

  /**
   * Obtains information about all deployments.
   * 
   * @param request - ListDeploymentsRequest
   * @returns ListDeploymentsResponse
   */
  async listDeployments(namespace: string, request: $_model.ListDeploymentsRequest): Promise<$_model.ListDeploymentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListDeploymentsHeaders({ });
    return await this.listDeploymentsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 列出有编辑权限的项目空间。
   * 
   * @param request - ListEditableNamespaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEditableNamespaceResponse
   */
  async listEditableNamespaceWithOptions(request: $_model.ListEditableNamespaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListEditableNamespaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["regionId"] = request.regionId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["workspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEditableNamespace",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/editable`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEditableNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.ListEditableNamespaceResponse({}));
  }

  /**
   * 列出有编辑权限的项目空间。
   * 
   * @param request - ListEditableNamespaceRequest
   * @returns ListEditableNamespaceResponse
   */
  async listEditableNamespace(request: $_model.ListEditableNamespaceRequest): Promise<$_model.ListEditableNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEditableNamespaceWithOptions(request, headers, runtime);
  }

  /**
   * Obtains a list of engine versions that are supported by Realtime Compute for Apache Flink.
   * 
   * @param headers - ListEngineVersionMetadataHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEngineVersionMetadataResponse
   */
  async listEngineVersionMetadataWithOptions(headers: $_model.ListEngineVersionMetadataHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListEngineVersionMetadataResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEngineVersionMetadata",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/engine-version-meta.json`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEngineVersionMetadataResponse>(await this.callApi(params, req, runtime), new $_model.ListEngineVersionMetadataResponse({}));
  }

  /**
   * Obtains a list of engine versions that are supported by Realtime Compute for Apache Flink.
   * @returns ListEngineVersionMetadataResponse
   */
  async listEngineVersionMetadata(): Promise<$_model.ListEngineVersionMetadataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListEngineVersionMetadataHeaders({ });
    return await this.listEngineVersionMetadataWithOptions(headers, runtime);
  }

  /**
   * Queries the information about all jobs in a deployment.
   * 
   * @param request - ListJobsRequest
   * @param headers - ListJobsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListJobsResponse
   */
  async listJobsWithOptions(namespace: string, request: $_model.ListJobsRequest, headers: $_model.ListJobsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortName)) {
      query["sortName"] = request.sortName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListJobs",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListJobsResponse>(await this.callApi(params, req, runtime), new $_model.ListJobsResponse({}));
  }

  /**
   * Queries the information about all jobs in a deployment.
   * 
   * @param request - ListJobsRequest
   * @returns ListJobsResponse
   */
  async listJobs(namespace: string, request: $_model.ListJobsRequest): Promise<$_model.ListJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListJobsHeaders({ });
    return await this.listJobsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Queries the mappings between the ID and permissions of a member in a specific namespace.
   * 
   * @param request - ListMembersRequest
   * @param headers - ListMembersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMembersResponse
   */
  async listMembersWithOptions(namespace: string, request: $_model.ListMembersRequest, headers: $_model.ListMembersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMembers",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${$dara.URL.percentEncode(namespace)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMembersResponse>(await this.callApi(params, req, runtime), new $_model.ListMembersResponse({}));
  }

  /**
   * Queries the mappings between the ID and permissions of a member in a specific namespace.
   * 
   * @param request - ListMembersRequest
   * @returns ListMembersResponse
   */
  async listMembers(namespace: string, request: $_model.ListMembersRequest): Promise<$_model.ListMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListMembersHeaders({ });
    return await this.listMembersWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Obtains a list of savepoints or checkpoints.
   * 
   * @param request - ListSavepointsRequest
   * @param headers - ListSavepointsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSavepointsResponse
   */
  async listSavepointsWithOptions(namespace: string, request: $_model.ListSavepointsRequest, headers: $_model.ListSavepointsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListSavepointsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.jobId)) {
      query["jobId"] = request.jobId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSavepoints",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/savepoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSavepointsResponse>(await this.callApi(params, req, runtime), new $_model.ListSavepointsResponse({}));
  }

  /**
   * Obtains a list of savepoints or checkpoints.
   * 
   * @param request - ListSavepointsRequest
   * @returns ListSavepointsResponse
   */
  async listSavepoints(namespace: string, request: $_model.ListSavepointsRequest): Promise<$_model.ListSavepointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListSavepointsHeaders({ });
    return await this.listSavepointsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 列表定时执行计划
   * 
   * @param request - ListScheduledPlanRequest
   * @param headers - ListScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledPlanResponse
   */
  async listScheduledPlanWithOptions(namespace: string, request: $_model.ListScheduledPlanRequest, headers: $_model.ListScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListScheduledPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScheduledPlanResponse>(await this.callApi(params, req, runtime), new $_model.ListScheduledPlanResponse({}));
  }

  /**
   * 列表定时执行计划
   * 
   * @param request - ListScheduledPlanRequest
   * @returns ListScheduledPlanResponse
   */
  async listScheduledPlan(namespace: string, request: $_model.ListScheduledPlanRequest): Promise<$_model.ListScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListScheduledPlanHeaders({ });
    return await this.listScheduledPlanWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 获取作业资源变更历史
   * 
   * @param request - ListScheduledPlanExecutedHistoryRequest
   * @param headers - ListScheduledPlanExecutedHistoryHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScheduledPlanExecutedHistoryResponse
   */
  async listScheduledPlanExecutedHistoryWithOptions(namespace: string, request: $_model.ListScheduledPlanExecutedHistoryRequest, headers: $_model.ListScheduledPlanExecutedHistoryHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListScheduledPlanExecutedHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deploymentId)) {
      query["deploymentId"] = request.deploymentId;
    }

    if (!$dara.isNull(request.origin)) {
      query["origin"] = request.origin;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScheduledPlanExecutedHistory",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/job-resource-upgradings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScheduledPlanExecutedHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListScheduledPlanExecutedHistoryResponse({}));
  }

  /**
   * 获取作业资源变更历史
   * 
   * @param request - ListScheduledPlanExecutedHistoryRequest
   * @returns ListScheduledPlanExecutedHistoryResponse
   */
  async listScheduledPlanExecutedHistory(namespace: string, request: $_model.ListScheduledPlanExecutedHistoryRequest): Promise<$_model.ListScheduledPlanExecutedHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListScheduledPlanExecutedHistoryHeaders({ });
    return await this.listScheduledPlanExecutedHistoryWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 列举session集群
   * 
   * @param headers - ListSessionClustersHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSessionClustersResponse
   */
  async listSessionClustersWithOptions(namespace: string, headers: $_model.ListSessionClustersHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListSessionClustersResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSessionClusters",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSessionClustersResponse>(await this.callApi(params, req, runtime), new $_model.ListSessionClustersResponse({}));
  }

  /**
   * 列举session集群
   * @returns ListSessionClustersResponse
   */
  async listSessionClusters(namespace: string): Promise<$_model.ListSessionClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListSessionClustersHeaders({ });
    return await this.listSessionClustersWithOptions(namespace, headers, runtime);
  }

  /**
   * Obtains a list of variables.
   * 
   * @param request - ListVariablesRequest
   * @param headers - ListVariablesHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVariablesResponse
   */
  async listVariablesWithOptions(namespace: string, request: $_model.ListVariablesRequest, headers: $_model.ListVariablesHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ListVariablesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      query["pageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVariables",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/variables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListVariablesResponse>(await this.callApi(params, req, runtime), new $_model.ListVariablesResponse({}));
  }

  /**
   * Obtains a list of variables.
   * 
   * @param request - ListVariablesRequest
   * @returns ListVariablesResponse
   */
  async listVariables(namespace: string, request: $_model.ListVariablesRequest): Promise<$_model.ListVariablesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ListVariablesHeaders({ });
    return await this.listVariablesWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Registers a custom connector in a namespace. The registered custom connector can be used in SQL statements.
   * 
   * @param request - RegisterCustomConnectorRequest
   * @param headers - RegisterCustomConnectorHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterCustomConnectorResponse
   */
  async registerCustomConnectorWithOptions(namespace: string, request: $_model.RegisterCustomConnectorRequest, headers: $_model.RegisterCustomConnectorHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterCustomConnectorResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jarUrl)) {
      query["jarUrl"] = request.jarUrl;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterCustomConnector",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/connectors%3Aregister`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterCustomConnectorResponse>(await this.callApi(params, req, runtime), new $_model.RegisterCustomConnectorResponse({}));
  }

  /**
   * Registers a custom connector in a namespace. The registered custom connector can be used in SQL statements.
   * 
   * @param request - RegisterCustomConnectorRequest
   * @returns RegisterCustomConnectorResponse
   */
  async registerCustomConnector(namespace: string, request: $_model.RegisterCustomConnectorRequest): Promise<$_model.RegisterCustomConnectorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RegisterCustomConnectorHeaders({ });
    return await this.registerCustomConnectorWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Registers specific or all of the user-defined functions (UDFs) that are parsed from the JAR files. The registered functions can be used in SQL statements.
   * 
   * @param request - RegisterUdfFunctionRequest
   * @param headers - RegisterUdfFunctionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterUdfFunctionResponse
   */
  async registerUdfFunctionWithOptions(namespace: string, request: $_model.RegisterUdfFunctionRequest, headers: $_model.RegisterUdfFunctionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterUdfFunctionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.className)) {
      query["className"] = request.className;
    }

    if (!$dara.isNull(request.functionName)) {
      query["functionName"] = request.functionName;
    }

    if (!$dara.isNull(request.udfArtifactName)) {
      query["udfArtifactName"] = request.udfArtifactName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterUdfFunction",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/udfartifacts/function%3AregisterUdfFunction`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterUdfFunctionResponse>(await this.callApi(params, req, runtime), new $_model.RegisterUdfFunctionResponse({}));
  }

  /**
   * Registers specific or all of the user-defined functions (UDFs) that are parsed from the JAR files. The registered functions can be used in SQL statements.
   * 
   * @param request - RegisterUdfFunctionRequest
   * @returns RegisterUdfFunctionResponse
   */
  async registerUdfFunction(namespace: string, request: $_model.RegisterUdfFunctionRequest): Promise<$_model.RegisterUdfFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RegisterUdfFunctionHeaders({ });
    return await this.registerUdfFunctionWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Creates and starts a job.
   * 
   * @deprecated OpenAPI StartJob is deprecated
   * 
   * @param request - StartJobRequest
   * @param headers - StartJobHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartJobResponse
   */
  async startJobWithOptions(namespace: string, request: $_model.StartJobRequest, headers: $_model.StartJobHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StartJobResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartJobResponse>(await this.callApi(params, req, runtime), new $_model.StartJobResponse({}));
  }

  /**
   * Creates and starts a job.
   * 
   * @deprecated OpenAPI StartJob is deprecated
   * 
   * @param request - StartJobRequest
   * @returns StartJobResponse
   */
  // Deprecated
  async startJob(namespace: string, request: $_model.StartJobRequest): Promise<$_model.StartJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StartJobHeaders({ });
    return await this.startJobWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Starts a job.
   * 
   * @param request - StartJobWithParamsRequest
   * @param headers - StartJobWithParamsHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartJobWithParamsResponse
   */
  async startJobWithParamsWithOptions(namespace: string, request: $_model.StartJobWithParamsRequest, headers: $_model.StartJobWithParamsHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StartJobWithParamsResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartJobWithParams",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs%3Astart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartJobWithParamsResponse>(await this.callApi(params, req, runtime), new $_model.StartJobWithParamsResponse({}));
  }

  /**
   * Starts a job.
   * 
   * @param request - StartJobWithParamsRequest
   * @returns StartJobWithParamsResponse
   */
  async startJobWithParams(namespace: string, request: $_model.StartJobWithParamsRequest): Promise<$_model.StartJobWithParamsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StartJobWithParamsHeaders({ });
    return await this.startJobWithParamsWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 启动session集群
   * 
   * @param headers - StartSessionClusterHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartSessionClusterResponse
   */
  async startSessionClusterWithOptions(namespace: string, sessionClusterName: string, headers: $_model.StartSessionClusterHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StartSessionClusterResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartSessionCluster",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters/${$dara.URL.percentEncode(sessionClusterName)}%3Astart`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.StartSessionClusterResponse({}));
  }

  /**
   * 启动session集群
   * @returns StartSessionClusterResponse
   */
  async startSessionCluster(namespace: string, sessionClusterName: string): Promise<$_model.StartSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StartSessionClusterHeaders({ });
    return await this.startSessionClusterWithOptions(namespace, sessionClusterName, headers, runtime);
  }

  /**
   * 停止应用执行定时计划
   * 
   * @param headers - StopApplyScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopApplyScheduledPlanResponse
   */
  async stopApplyScheduledPlanWithOptions(namespace: string, scheduledPlanId: string, headers: $_model.StopApplyScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StopApplyScheduledPlanResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopApplyScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans/${$dara.URL.percentEncode(scheduledPlanId)}%3Astop`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopApplyScheduledPlanResponse>(await this.callApi(params, req, runtime), new $_model.StopApplyScheduledPlanResponse({}));
  }

  /**
   * 停止应用执行定时计划
   * @returns StopApplyScheduledPlanResponse
   */
  async stopApplyScheduledPlan(namespace: string, scheduledPlanId: string): Promise<$_model.StopApplyScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StopApplyScheduledPlanHeaders({ });
    return await this.stopApplyScheduledPlanWithOptions(namespace, scheduledPlanId, headers, runtime);
  }

  /**
   * Stops a job.
   * 
   * @param request - StopJobRequest
   * @param headers - StopJobHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopJobResponse
   */
  async stopJobWithOptions(namespace: string, jobId: string, request: $_model.StopJobRequest, headers: $_model.StopJobHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StopJobResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopJob",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/jobs/${$dara.URL.percentEncode(jobId)}%3Astop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopJobResponse>(await this.callApi(params, req, runtime), new $_model.StopJobResponse({}));
  }

  /**
   * Stops a job.
   * 
   * @param request - StopJobRequest
   * @returns StopJobResponse
   */
  async stopJob(namespace: string, jobId: string, request: $_model.StopJobRequest): Promise<$_model.StopJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StopJobHeaders({ });
    return await this.stopJobWithOptions(namespace, jobId, request, headers, runtime);
  }

  /**
   * 停止session集群
   * 
   * @param headers - StopSessionClusterHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopSessionClusterResponse
   */
  async stopSessionClusterWithOptions(namespace: string, sessionClusterName: string, headers: $_model.StopSessionClusterHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StopSessionClusterResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopSessionCluster",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters/${$dara.URL.percentEncode(sessionClusterName)}%3Astop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.StopSessionClusterResponse({}));
  }

  /**
   * 停止session集群
   * @returns StopSessionClusterResponse
   */
  async stopSessionCluster(namespace: string, sessionClusterName: string): Promise<$_model.StopSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StopSessionClusterHeaders({ });
    return await this.stopSessionClusterWithOptions(namespace, sessionClusterName, headers, runtime);
  }

  /**
   * 提交sql调试
   * 
   * @param request - SubmitSqlPreviewRequest
   * @param headers - SubmitSqlPreviewHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSqlPreviewResponse
   */
  async submitSqlPreviewWithOptions(namespace: string, request: $_model.SubmitSqlPreviewRequest, headers: $_model.SubmitSqlPreviewHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitSqlPreviewResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sessionClusterName)) {
      query["sessionClusterName"] = request.sessionClusterName;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitSqlPreview",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sql-preview/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitSqlPreviewResponse>(await this.callApi(params, req, runtime), new $_model.SubmitSqlPreviewResponse({}));
  }

  /**
   * 提交sql调试
   * 
   * @param request - SubmitSqlPreviewRequest
   * @returns SubmitSqlPreviewResponse
   */
  async submitSqlPreview(namespace: string, request: $_model.SubmitSqlPreviewRequest): Promise<$_model.SubmitSqlPreviewResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SubmitSqlPreviewHeaders({ });
    return await this.submitSqlPreviewWithOptions(namespace, request, headers, runtime);
  }

  /**
   * Updates information about a deployment.
   * 
   * @param request - UpdateDeploymentRequest
   * @param headers - UpdateDeploymentHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeploymentResponse
   */
  async updateDeploymentWithOptions(namespace: string, deploymentId: string, request: $_model.UpdateDeploymentRequest, headers: $_model.UpdateDeploymentHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDeploymentResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeployment",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployments/${$dara.URL.percentEncode(deploymentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDeploymentResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDeploymentResponse({}));
  }

  /**
   * Updates information about a deployment.
   * 
   * @param request - UpdateDeploymentRequest
   * @returns UpdateDeploymentResponse
   */
  async updateDeployment(namespace: string, deploymentId: string, request: $_model.UpdateDeploymentRequest): Promise<$_model.UpdateDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateDeploymentHeaders({ });
    return await this.updateDeploymentWithOptions(namespace, deploymentId, request, headers, runtime);
  }

  /**
   * update a deploymentDraft
   * 
   * @param request - UpdateDeploymentDraftRequest
   * @param headers - UpdateDeploymentDraftHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeploymentDraftResponse
   */
  async updateDeploymentDraftWithOptions(namespace: string, deploymentDraftId: string, request: $_model.UpdateDeploymentDraftRequest, headers: $_model.UpdateDeploymentDraftHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDeploymentDraftResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeploymentDraft",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-drafts/${$dara.URL.percentEncode(deploymentDraftId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDeploymentDraftResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDeploymentDraftResponse({}));
  }

  /**
   * update a deploymentDraft
   * 
   * @param request - UpdateDeploymentDraftRequest
   * @returns UpdateDeploymentDraftResponse
   */
  async updateDeploymentDraft(namespace: string, deploymentDraftId: string, request: $_model.UpdateDeploymentDraftRequest): Promise<$_model.UpdateDeploymentDraftResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateDeploymentDraftHeaders({ });
    return await this.updateDeploymentDraftWithOptions(namespace, deploymentDraftId, request, headers, runtime);
  }

  /**
   * 修改deploymentTarget
   * 
   * @param request - UpdateDeploymentTargetRequest
   * @param headers - UpdateDeploymentTargetHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeploymentTargetResponse
   */
  async updateDeploymentTargetWithOptions(namespace: string, deploymentTargetName: string, request: $_model.UpdateDeploymentTargetRequest, headers: $_model.UpdateDeploymentTargetHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDeploymentTargetResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeploymentTarget",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-targets/${$dara.URL.percentEncode(deploymentTargetName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDeploymentTargetResponse>(await this.callApi(params, req, runtime), new $_model.UpdateDeploymentTargetResponse({}));
  }

  /**
   * 修改deploymentTarget
   * 
   * @param request - UpdateDeploymentTargetRequest
   * @returns UpdateDeploymentTargetResponse
   */
  async updateDeploymentTarget(namespace: string, deploymentTargetName: string, request: $_model.UpdateDeploymentTargetRequest): Promise<$_model.UpdateDeploymentTargetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateDeploymentTargetHeaders({ });
    return await this.updateDeploymentTargetWithOptions(namespace, deploymentTargetName, request, headers, runtime);
  }

  /**
   * 更新部署目标
   * 
   * @param request - UpdateDeploymentTargetV2Request
   * @param headers - UpdateDeploymentTargetV2Headers
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDeploymentTargetV2Response
   */
  async updateDeploymentTargetV2WithOptions(namespace: string, deploymentTargetName: string, request: $_model.UpdateDeploymentTargetV2Request, headers: $_model.UpdateDeploymentTargetV2Headers, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateDeploymentTargetV2Response> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDeploymentTargetV2",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/deployment-targets/support-elastic/${$dara.URL.percentEncode(deploymentTargetName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateDeploymentTargetV2Response>(await this.callApi(params, req, runtime), new $_model.UpdateDeploymentTargetV2Response({}));
  }

  /**
   * 更新部署目标
   * 
   * @param request - UpdateDeploymentTargetV2Request
   * @returns UpdateDeploymentTargetV2Response
   */
  async updateDeploymentTargetV2(namespace: string, deploymentTargetName: string, request: $_model.UpdateDeploymentTargetV2Request): Promise<$_model.UpdateDeploymentTargetV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateDeploymentTargetV2Headers({ });
    return await this.updateDeploymentTargetV2WithOptions(namespace, deploymentTargetName, request, headers, runtime);
  }

  /**
   * update a folder
   * 
   * @param request - UpdateFolderRequest
   * @param headers - UpdateFolderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFolderResponse
   */
  async updateFolderWithOptions(namespace: string, folderId: string, request: $_model.UpdateFolderRequest, headers: $_model.UpdateFolderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateFolderResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFolder",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/folder/${$dara.URL.percentEncode(folderId)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateFolderResponse>(await this.callApi(params, req, runtime), new $_model.UpdateFolderResponse({}));
  }

  /**
   * update a folder
   * 
   * @param request - UpdateFolderRequest
   * @returns UpdateFolderResponse
   */
  async updateFolder(namespace: string, folderId: string, request: $_model.UpdateFolderRequest): Promise<$_model.UpdateFolderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateFolderHeaders({ });
    return await this.updateFolderWithOptions(namespace, folderId, request, headers, runtime);
  }

  /**
   * Updates the permissions of one or more members in a specific namespace.
   * 
   * @param request - UpdateMemberRequest
   * @param headers - UpdateMemberHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMemberResponse
   */
  async updateMemberWithOptions(namespace: string, request: $_model.UpdateMemberRequest, headers: $_model.UpdateMemberHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMemberResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMember",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/gateway/v2/namespaces/${$dara.URL.percentEncode(namespace)}/members`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMemberResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMemberResponse({}));
  }

  /**
   * Updates the permissions of one or more members in a specific namespace.
   * 
   * @param request - UpdateMemberRequest
   * @returns UpdateMemberResponse
   */
  async updateMember(namespace: string, request: $_model.UpdateMemberRequest): Promise<$_model.UpdateMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateMemberHeaders({ });
    return await this.updateMemberWithOptions(namespace, request, headers, runtime);
  }

  /**
   * 更新定时执行计划
   * 
   * @param request - UpdateScheduledPlanRequest
   * @param headers - UpdateScheduledPlanHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScheduledPlanResponse
   */
  async updateScheduledPlanWithOptions(namespace: string, scheduledPlanId: string, request: $_model.UpdateScheduledPlanRequest, headers: $_model.UpdateScheduledPlanHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScheduledPlanResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScheduledPlan",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/scheduled-plans/${$dara.URL.percentEncode(scheduledPlanId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScheduledPlanResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScheduledPlanResponse({}));
  }

  /**
   * 更新定时执行计划
   * 
   * @param request - UpdateScheduledPlanRequest
   * @returns UpdateScheduledPlanResponse
   */
  async updateScheduledPlan(namespace: string, scheduledPlanId: string, request: $_model.UpdateScheduledPlanRequest): Promise<$_model.UpdateScheduledPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateScheduledPlanHeaders({ });
    return await this.updateScheduledPlanWithOptions(namespace, scheduledPlanId, request, headers, runtime);
  }

  /**
   * 更新session集群
   * 
   * @param request - UpdateSessionClusterRequest
   * @param headers - UpdateSessionClusterHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSessionClusterResponse
   */
  async updateSessionClusterWithOptions(namespace: string, sessionClusterName: string, request: $_model.UpdateSessionClusterRequest, headers: $_model.UpdateSessionClusterHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSessionClusterResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSessionCluster",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sessionclusters/${$dara.URL.percentEncode(sessionClusterName)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSessionClusterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSessionClusterResponse({}));
  }

  /**
   * 更新session集群
   * 
   * @param request - UpdateSessionClusterRequest
   * @returns UpdateSessionClusterResponse
   */
  async updateSessionCluster(namespace: string, sessionClusterName: string, request: $_model.UpdateSessionClusterRequest): Promise<$_model.UpdateSessionClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateSessionClusterHeaders({ });
    return await this.updateSessionClusterWithOptions(namespace, sessionClusterName, request, headers, runtime);
  }

  /**
   * Updates the JAR file of the user-defined function (UDF) that you create.
   * 
   * @param request - UpdateUdfArtifactRequest
   * @param headers - UpdateUdfArtifactHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUdfArtifactResponse
   */
  async updateUdfArtifactWithOptions(namespace: string, udfArtifactName: string, request: $_model.UpdateUdfArtifactRequest, headers: $_model.UpdateUdfArtifactHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateUdfArtifactResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateUdfArtifact",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/udfartifacts/${$dara.URL.percentEncode(udfArtifactName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateUdfArtifactResponse>(await this.callApi(params, req, runtime), new $_model.UpdateUdfArtifactResponse({}));
  }

  /**
   * Updates the JAR file of the user-defined function (UDF) that you create.
   * 
   * @param request - UpdateUdfArtifactRequest
   * @returns UpdateUdfArtifactResponse
   */
  async updateUdfArtifact(namespace: string, udfArtifactName: string, request: $_model.UpdateUdfArtifactRequest): Promise<$_model.UpdateUdfArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateUdfArtifactHeaders({ });
    return await this.updateUdfArtifactWithOptions(namespace, udfArtifactName, request, headers, runtime);
  }

  /**
   * 更新秘钥
   * 
   * @param request - UpdateVariableRequest
   * @param headers - UpdateVariableHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVariableResponse
   */
  async updateVariableWithOptions(namespace: string, name: string, request: $_model.UpdateVariableRequest, headers: $_model.UpdateVariableHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVariableResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVariable",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/variables/${$dara.URL.percentEncode(name)}`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVariableResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVariableResponse({}));
  }

  /**
   * 更新秘钥
   * 
   * @param request - UpdateVariableRequest
   * @returns UpdateVariableResponse
   */
  async updateVariable(namespace: string, name: string, request: $_model.UpdateVariableRequest): Promise<$_model.UpdateVariableResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.UpdateVariableHeaders({ });
    return await this.updateVariableWithOptions(namespace, name, request, headers, runtime);
  }

  /**
   * Verifies the code of an SQL deployment.
   * 
   * @param request - ValidateSqlStatementRequest
   * @param headers - ValidateSqlStatementHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateSqlStatementResponse
   */
  async validateSqlStatementWithOptions(namespace: string, request: $_model.ValidateSqlStatementRequest, headers: $_model.ValidateSqlStatementHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateSqlStatementResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.workspace)) {
      realHeaders["workspace"] = String(headers.workspace);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateSqlStatement",
      version: "2022-07-18",
      protocol: "HTTPS",
      pathname: `/api/v2/namespaces/${$dara.URL.percentEncode(namespace)}/sql-statement/validate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateSqlStatementResponse>(await this.callApi(params, req, runtime), new $_model.ValidateSqlStatementResponse({}));
  }

  /**
   * Verifies the code of an SQL deployment.
   * 
   * @param request - ValidateSqlStatementRequest
   * @returns ValidateSqlStatementResponse
   */
  async validateSqlStatement(namespace: string, request: $_model.ValidateSqlStatementRequest): Promise<$_model.ValidateSqlStatementResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ValidateSqlStatementHeaders({ });
    return await this.validateSqlStatementWithOptions(namespace, request, headers, runtime);
  }

}
