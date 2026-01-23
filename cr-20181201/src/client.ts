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
    this._endpoint = this.getEndpoint("cr", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Cancels an artifact building task.
   * 
   * @param request - CancelArtifactBuildTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelArtifactBuildTaskResponse
   */
  async cancelArtifactBuildTaskWithOptions(request: $_model.CancelArtifactBuildTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelArtifactBuildTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildTaskId)) {
      query["BuildTaskId"] = request.buildTaskId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelArtifactBuildTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelArtifactBuildTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelArtifactBuildTaskResponse({}));
  }

  /**
   * Cancels an artifact building task.
   * 
   * @param request - CancelArtifactBuildTaskRequest
   * @returns CancelArtifactBuildTaskResponse
   */
  async cancelArtifactBuildTask(request: $_model.CancelArtifactBuildTaskRequest): Promise<$_model.CancelArtifactBuildTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelArtifactBuildTaskWithOptions(request, runtime);
  }

  /**
   * Cancels an image building task of a repository.
   * 
   * @param request - CancelRepoBuildRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRepoBuildRecordResponse
   */
  async cancelRepoBuildRecordWithOptions(request: $_model.CancelRepoBuildRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelRepoBuildRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRecordId)) {
      query["BuildRecordId"] = request.buildRecordId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRepoBuildRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelRepoBuildRecordResponse>(await this.callApi(params, req, runtime), new $_model.CancelRepoBuildRecordResponse({}));
  }

  /**
   * Cancels an image building task of a repository.
   * 
   * @param request - CancelRepoBuildRecordRequest
   * @returns CancelRepoBuildRecordResponse
   */
  async cancelRepoBuildRecord(request: $_model.CancelRepoBuildRecordRequest): Promise<$_model.CancelRepoBuildRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelRepoBuildRecordWithOptions(request, runtime);
  }

  /**
   * Cancels a single replication task.
   * 
   * @param request - CancelRepoSyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRepoSyncTaskResponse
   */
  async cancelRepoSyncTaskWithOptions(request: $_model.CancelRepoSyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelRepoSyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.syncTaskId)) {
      query["SyncTaskId"] = request.syncTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRepoSyncTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelRepoSyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelRepoSyncTaskResponse({}));
  }

  /**
   * Cancels a single replication task.
   * 
   * @param request - CancelRepoSyncTaskRequest
   * @returns CancelRepoSyncTaskResponse
   */
  async cancelRepoSyncTask(request: $_model.CancelRepoSyncTaskRequest): Promise<$_model.CancelRepoSyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelRepoSyncTaskWithOptions(request, runtime);
  }

  /**
   * Changes the resource group to which a resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceRegionId)) {
      query["ResourceRegionId"] = request.resourceRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new $_model.ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which a resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * Create image repository acceleration rules for image building.
   * 
   * @remarks
   * You can create building rules of accelerated images only for image repositories of Container Registry Advanced Edition instances. You cannot create building rules of accelerated images for image repositories of Container Registry Basic Edition instances. For more information, see [Specifications of different editions](https://www.alibabacloud.com/help/en/acr/product-overview/what-is-container-registry?spm=openapi-amp.newDocPublishment.0.0.bf82281fRj7rmV#section-n3q-ps7-x6k).
   * Accelerated images are not supported in Alibaba Finance Cloud regions or Alibaba Gov Cloud regions.
   * 
   * @param tmpReq - CreateArtifactBuildRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactBuildRuleResponse
   */
  async createArtifactBuildRuleWithOptions(tmpReq: $_model.CreateArtifactBuildRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateArtifactBuildRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateArtifactBuildRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.artifactType)) {
      query["ArtifactType"] = request.artifactType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.scopeId)) {
      query["ScopeId"] = request.scopeId;
    }

    if (!$dara.isNull(request.scopeType)) {
      query["ScopeType"] = request.scopeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArtifactBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateArtifactBuildRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateArtifactBuildRuleResponse({}));
  }

  /**
   * Create image repository acceleration rules for image building.
   * 
   * @remarks
   * You can create building rules of accelerated images only for image repositories of Container Registry Advanced Edition instances. You cannot create building rules of accelerated images for image repositories of Container Registry Basic Edition instances. For more information, see [Specifications of different editions](https://www.alibabacloud.com/help/en/acr/product-overview/what-is-container-registry?spm=openapi-amp.newDocPublishment.0.0.bf82281fRj7rmV#section-n3q-ps7-x6k).
   * Accelerated images are not supported in Alibaba Finance Cloud regions or Alibaba Gov Cloud regions.
   * 
   * @param request - CreateArtifactBuildRuleRequest
   * @returns CreateArtifactBuildRuleResponse
   */
  async createArtifactBuildRule(request: $_model.CreateArtifactBuildRuleRequest): Promise<$_model.CreateArtifactBuildRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createArtifactBuildRuleWithOptions(request, runtime);
  }

  /**
   * Creates a lifecycle management rule for an artifact.
   * 
   * @param request - CreateArtifactLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactLifecycleRuleResponse
   */
  async createArtifactLifecycleRuleWithOptions(request: $_model.CreateArtifactLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateArtifactLifecycleRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auto)) {
      query["Auto"] = request.auto;
    }

    if (!$dara.isNull(request.enableDeleteTag)) {
      query["EnableDeleteTag"] = request.enableDeleteTag;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.retentionTagCount)) {
      query["RetentionTagCount"] = request.retentionTagCount;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.tagRegexp)) {
      query["TagRegexp"] = request.tagRegexp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArtifactLifecycleRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateArtifactLifecycleRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateArtifactLifecycleRuleResponse({}));
  }

  /**
   * Creates a lifecycle management rule for an artifact.
   * 
   * @param request - CreateArtifactLifecycleRuleRequest
   * @returns CreateArtifactLifecycleRuleResponse
   */
  async createArtifactLifecycleRule(request: $_model.CreateArtifactLifecycleRuleRequest): Promise<$_model.CreateArtifactLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createArtifactLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Creates an artifact subscription rule.
   * 
   * @param request - CreateArtifactSubscriptionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactSubscriptionRuleResponse
   */
  async createArtifactSubscriptionRuleWithOptions(request: $_model.CreateArtifactSubscriptionRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateArtifactSubscriptionRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerate)) {
      query["Accelerate"] = request.accelerate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.override)) {
      query["Override"] = request.override;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.sourceNamespaceName)) {
      query["SourceNamespaceName"] = request.sourceNamespaceName;
    }

    if (!$dara.isNull(request.sourceProvider)) {
      query["SourceProvider"] = request.sourceProvider;
    }

    if (!$dara.isNull(request.sourceRepoName)) {
      query["SourceRepoName"] = request.sourceRepoName;
    }

    if (!$dara.isNull(request.tagCount)) {
      query["TagCount"] = request.tagCount;
    }

    if (!$dara.isNull(request.tagRegexp)) {
      query["TagRegexp"] = request.tagRegexp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArtifactSubscriptionRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateArtifactSubscriptionRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateArtifactSubscriptionRuleResponse({}));
  }

  /**
   * Creates an artifact subscription rule.
   * 
   * @param request - CreateArtifactSubscriptionRuleRequest
   * @returns CreateArtifactSubscriptionRuleResponse
   */
  async createArtifactSubscriptionRule(request: $_model.CreateArtifactSubscriptionRuleRequest): Promise<$_model.CreateArtifactSubscriptionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createArtifactSubscriptionRuleWithOptions(request, runtime);
  }

  /**
   * Creates an artifact subscription task.
   * 
   * @param request - CreateArtifactSubscriptionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactSubscriptionTaskResponse
   */
  async createArtifactSubscriptionTaskWithOptions(request: $_model.CreateArtifactSubscriptionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateArtifactSubscriptionTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArtifactSubscriptionTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateArtifactSubscriptionTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateArtifactSubscriptionTaskResponse({}));
  }

  /**
   * Creates an artifact subscription task.
   * 
   * @param request - CreateArtifactSubscriptionTaskRequest
   * @returns CreateArtifactSubscriptionTaskResponse
   */
  async createArtifactSubscriptionTask(request: $_model.CreateArtifactSubscriptionTaskRequest): Promise<$_model.CreateArtifactSubscriptionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createArtifactSubscriptionTaskWithOptions(request, runtime);
  }

  /**
   * Creates an image building record based on an existing record.
   * 
   * @param request - CreateBuildRecordByRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBuildRecordByRecordResponse
   */
  async createBuildRecordByRecordWithOptions(request: $_model.CreateBuildRecordByRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBuildRecordByRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRecordId)) {
      query["BuildRecordId"] = request.buildRecordId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBuildRecordByRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBuildRecordByRecordResponse>(await this.callApi(params, req, runtime), new $_model.CreateBuildRecordByRecordResponse({}));
  }

  /**
   * Creates an image building record based on an existing record.
   * 
   * @param request - CreateBuildRecordByRecordRequest
   * @returns CreateBuildRecordByRecordResponse
   */
  async createBuildRecordByRecord(request: $_model.CreateBuildRecordByRecordRequest): Promise<$_model.CreateBuildRecordByRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBuildRecordByRecordWithOptions(request, runtime);
  }

  /**
   * Creates an image building record based on a rule.
   * 
   * @param request - CreateBuildRecordByRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBuildRecordByRuleResponse
   */
  async createBuildRecordByRuleWithOptions(request: $_model.CreateBuildRecordByRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateBuildRecordByRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRuleId)) {
      query["BuildRuleId"] = request.buildRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBuildRecordByRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateBuildRecordByRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateBuildRecordByRuleResponse({}));
  }

  /**
   * Creates an image building record based on a rule.
   * 
   * @param request - CreateBuildRecordByRuleRequest
   * @returns CreateBuildRecordByRuleResponse
   */
  async createBuildRecordByRule(request: $_model.CreateBuildRecordByRuleRequest): Promise<$_model.CreateBuildRecordByRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createBuildRecordByRuleWithOptions(request, runtime);
  }

  /**
   * Creates a delivery chain.
   * 
   * @param request - CreateChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChainResponse
   */
  async createChainWithOptions(request: $_model.CreateChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chainConfig)) {
      query["ChainConfig"] = request.chainConfig;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.scopeExclude)) {
      query["ScopeExclude"] = request.scopeExclude;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChainResponse>(await this.callApi(params, req, runtime), new $_model.CreateChainResponse({}));
  }

  /**
   * Creates a delivery chain.
   * 
   * @param request - CreateChainRequest
   * @returns CreateChainResponse
   */
  async createChain(request: $_model.CreateChainRequest): Promise<$_model.CreateChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChainWithOptions(request, runtime);
  }

  /**
   * Creates a chart namespace in an instance.
   * 
   * @param request - CreateChartNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChartNamespaceResponse
   */
  async createChartNamespaceWithOptions(request: $_model.CreateChartNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChartNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoCreateRepo)) {
      query["AutoCreateRepo"] = request.autoCreateRepo;
    }

    if (!$dara.isNull(request.defaultRepoType)) {
      query["DefaultRepoType"] = request.defaultRepoType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChartNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateChartNamespaceResponse({}));
  }

  /**
   * Creates a chart namespace in an instance.
   * 
   * @param request - CreateChartNamespaceRequest
   * @returns CreateChartNamespaceResponse
   */
  async createChartNamespace(request: $_model.CreateChartNamespaceRequest): Promise<$_model.CreateChartNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChartNamespaceWithOptions(request, runtime);
  }

  /**
   * Creates a chart repository.
   * 
   * @param request - CreateChartRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateChartRepositoryResponse
   */
  async createChartRepositoryWithOptions(request: $_model.CreateChartRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateChartRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.repoType)) {
      query["RepoType"] = request.repoType;
    }

    if (!$dara.isNull(request.summary)) {
      query["Summary"] = request.summary;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateChartRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateChartRepositoryResponse({}));
  }

  /**
   * Creates a chart repository.
   * 
   * @param request - CreateChartRepositoryRequest
   * @returns CreateChartRepositoryResponse
   */
  async createChartRepository(request: $_model.CreateChartRepositoryRequest): Promise<$_model.CreateChartRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createChartRepositoryWithOptions(request, runtime);
  }

  /**
   * Creates a whitelist policy for the public endpoint of the instance.
   * 
   * @param request - CreateInstanceEndpointAclPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceEndpointAclPolicyResponse
   */
  async createInstanceEndpointAclPolicyWithOptions(request: $_model.CreateInstanceEndpointAclPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceEndpointAclPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.entry)) {
      query["Entry"] = request.entry;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceEndpointAclPolicy",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceEndpointAclPolicyResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceEndpointAclPolicyResponse({}));
  }

  /**
   * Creates a whitelist policy for the public endpoint of the instance.
   * 
   * @param request - CreateInstanceEndpointAclPolicyRequest
   * @returns CreateInstanceEndpointAclPolicyResponse
   */
  async createInstanceEndpointAclPolicy(request: $_model.CreateInstanceEndpointAclPolicyRequest): Promise<$_model.CreateInstanceEndpointAclPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceEndpointAclPolicyWithOptions(request, runtime);
  }

  /**
   * Associates a virtual private cloud (VPC) with a Container Registry instance.
   * 
   * @remarks
   * The VPC quota must be purchased separately.
   * 
   * @param request - CreateInstanceVpcEndpointLinkedVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceVpcEndpointLinkedVpcResponse
   */
  async createInstanceVpcEndpointLinkedVpcWithOptions(request: $_model.CreateInstanceVpcEndpointLinkedVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateInstanceVpcEndpointLinkedVpcResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enableCreateDNSRecordInPvzt)) {
      query["EnableCreateDNSRecordInPvzt"] = request.enableCreateDNSRecordInPvzt;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceVpcEndpointLinkedVpc",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateInstanceVpcEndpointLinkedVpcResponse>(await this.callApi(params, req, runtime), new $_model.CreateInstanceVpcEndpointLinkedVpcResponse({}));
  }

  /**
   * Associates a virtual private cloud (VPC) with a Container Registry instance.
   * 
   * @remarks
   * The VPC quota must be purchased separately.
   * 
   * @param request - CreateInstanceVpcEndpointLinkedVpcRequest
   * @returns CreateInstanceVpcEndpointLinkedVpcResponse
   */
  async createInstanceVpcEndpointLinkedVpc(request: $_model.CreateInstanceVpcEndpointLinkedVpcRequest): Promise<$_model.CreateInstanceVpcEndpointLinkedVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createInstanceVpcEndpointLinkedVpcWithOptions(request, runtime);
  }

  /**
   * Creates a namespace of image repositories.
   * 
   * @param tmpReq - CreateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNamespaceResponse
   */
  async createNamespaceWithOptions(tmpReq: $_model.CreateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateNamespaceResponse> {
    tmpReq.validate();
    let request = new $_model.CreateNamespaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.defaultRepoConfiguration)) {
      request.defaultRepoConfigurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.defaultRepoConfiguration, "DefaultRepoConfiguration", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoCreateRepo)) {
      query["AutoCreateRepo"] = request.autoCreateRepo;
    }

    if (!$dara.isNull(request.defaultRepoConfigurationShrink)) {
      query["DefaultRepoConfiguration"] = request.defaultRepoConfigurationShrink;
    }

    if (!$dara.isNull(request.defaultRepoType)) {
      query["DefaultRepoType"] = request.defaultRepoType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateNamespaceResponse({}));
  }

  /**
   * Creates a namespace of image repositories.
   * 
   * @param request - CreateNamespaceRequest
   * @returns CreateNamespaceResponse
   */
  async createNamespace(request: $_model.CreateNamespaceRequest): Promise<$_model.CreateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createNamespaceWithOptions(request, runtime);
  }

  /**
   * Creates an image building rule for a repository.
   * 
   * @param request - CreateRepoBuildRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoBuildRuleResponse
   */
  async createRepoBuildRuleWithOptions(request: $_model.CreateRepoBuildRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRepoBuildRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildArgs)) {
      query["BuildArgs"] = request.buildArgs;
    }

    if (!$dara.isNull(request.dockerfileLocation)) {
      query["DockerfileLocation"] = request.dockerfileLocation;
    }

    if (!$dara.isNull(request.dockerfileName)) {
      query["DockerfileName"] = request.dockerfileName;
    }

    if (!$dara.isNull(request.imageTag)) {
      query["ImageTag"] = request.imageTag;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.platforms)) {
      query["Platforms"] = request.platforms;
    }

    if (!$dara.isNull(request.pushName)) {
      query["PushName"] = request.pushName;
    }

    if (!$dara.isNull(request.pushType)) {
      query["PushType"] = request.pushType;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRepoBuildRuleResponse({}));
  }

  /**
   * Creates an image building rule for a repository.
   * 
   * @param request - CreateRepoBuildRuleRequest
   * @returns CreateRepoBuildRuleResponse
   */
  async createRepoBuildRule(request: $_model.CreateRepoBuildRuleRequest): Promise<$_model.CreateRepoBuildRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoBuildRuleWithOptions(request, runtime);
  }

  /**
   * Binds a source code repository to an image repository.
   * 
   * @param request - CreateRepoSourceCodeRepoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoSourceCodeRepoResponse
   */
  async createRepoSourceCodeRepoWithOptions(request: $_model.CreateRepoSourceCodeRepoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRepoSourceCodeRepoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoBuild)) {
      query["AutoBuild"] = request.autoBuild;
    }

    if (!$dara.isNull(request.codeRepoName)) {
      query["CodeRepoName"] = request.codeRepoName;
    }

    if (!$dara.isNull(request.codeRepoNamespaceName)) {
      query["CodeRepoNamespaceName"] = request.codeRepoNamespaceName;
    }

    if (!$dara.isNull(request.codeRepoType)) {
      query["CodeRepoType"] = request.codeRepoType;
    }

    if (!$dara.isNull(request.disableCacheBuild)) {
      query["DisableCacheBuild"] = request.disableCacheBuild;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.overseaBuild)) {
      query["OverseaBuild"] = request.overseaBuild;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoSourceCodeRepo",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRepoSourceCodeRepoResponse>(await this.callApi(params, req, runtime), new $_model.CreateRepoSourceCodeRepoResponse({}));
  }

  /**
   * Binds a source code repository to an image repository.
   * 
   * @param request - CreateRepoSourceCodeRepoRequest
   * @returns CreateRepoSourceCodeRepoResponse
   */
  async createRepoSourceCodeRepo(request: $_model.CreateRepoSourceCodeRepoRequest): Promise<$_model.CreateRepoSourceCodeRepoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoSourceCodeRepoWithOptions(request, runtime);
  }

  /**
   * Creates an image synchronization rule for an image repository.
   * 
   * @param request - CreateRepoSyncRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoSyncRuleResponse
   */
  async createRepoSyncRuleWithOptions(request: $_model.CreateRepoSyncRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRepoSyncRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNameFilter)) {
      query["RepoNameFilter"] = request.repoNameFilter;
    }

    if (!$dara.isNull(request.syncRuleName)) {
      query["SyncRuleName"] = request.syncRuleName;
    }

    if (!$dara.isNull(request.syncScope)) {
      query["SyncScope"] = request.syncScope;
    }

    if (!$dara.isNull(request.syncTrigger)) {
      query["SyncTrigger"] = request.syncTrigger;
    }

    if (!$dara.isNull(request.tagFilter)) {
      query["TagFilter"] = request.tagFilter;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    if (!$dara.isNull(request.targetNamespaceName)) {
      query["TargetNamespaceName"] = request.targetNamespaceName;
    }

    if (!$dara.isNull(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    if (!$dara.isNull(request.targetRepoName)) {
      query["TargetRepoName"] = request.targetRepoName;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoSyncRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRepoSyncRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRepoSyncRuleResponse({}));
  }

  /**
   * Creates an image synchronization rule for an image repository.
   * 
   * @param request - CreateRepoSyncRuleRequest
   * @returns CreateRepoSyncRuleResponse
   */
  async createRepoSyncRule(request: $_model.CreateRepoSyncRuleRequest): Promise<$_model.CreateRepoSyncRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoSyncRuleWithOptions(request, runtime);
  }

  /**
   * @param request - CreateRepoSyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoSyncTaskResponse
   */
  async createRepoSyncTaskWithOptions(request: $_model.CreateRepoSyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRepoSyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.override)) {
      query["Override"] = request.override;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    if (!$dara.isNull(request.targetNamespace)) {
      query["TargetNamespace"] = request.targetNamespace;
    }

    if (!$dara.isNull(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    if (!$dara.isNull(request.targetRepoName)) {
      query["TargetRepoName"] = request.targetRepoName;
    }

    if (!$dara.isNull(request.targetTag)) {
      query["TargetTag"] = request.targetTag;
    }

    if (!$dara.isNull(request.targetUserId)) {
      query["TargetUserId"] = request.targetUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoSyncTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRepoSyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateRepoSyncTaskResponse({}));
  }

  /**
   * @param request - CreateRepoSyncTaskRequest
   * @returns CreateRepoSyncTaskResponse
   */
  async createRepoSyncTask(request: $_model.CreateRepoSyncTaskRequest): Promise<$_model.CreateRepoSyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoSyncTaskWithOptions(request, runtime);
  }

  /**
   * Creates an image replication task based on a manual replication rule.
   * 
   * @param request - CreateRepoSyncTaskByRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoSyncTaskByRuleResponse
   */
  async createRepoSyncTaskByRuleWithOptions(request: $_model.CreateRepoSyncTaskByRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRepoSyncTaskByRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.syncRuleId)) {
      query["SyncRuleId"] = request.syncRuleId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoSyncTaskByRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRepoSyncTaskByRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateRepoSyncTaskByRuleResponse({}));
  }

  /**
   * Creates an image replication task based on a manual replication rule.
   * 
   * @param request - CreateRepoSyncTaskByRuleRequest
   * @returns CreateRepoSyncTaskByRuleResponse
   */
  async createRepoSyncTaskByRule(request: $_model.CreateRepoSyncTaskByRuleRequest): Promise<$_model.CreateRepoSyncTaskByRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoSyncTaskByRuleWithOptions(request, runtime);
  }

  /**
   * Creates an image tag based on an existing image tag in an image repository.
   * 
   * @param request - CreateRepoTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoTagResponse
   */
  async createRepoTagWithOptions(request: $_model.CreateRepoTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRepoTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fromTag)) {
      query["FromTag"] = request.fromTag;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.toTag)) {
      query["ToTag"] = request.toTag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoTag",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRepoTagResponse>(await this.callApi(params, req, runtime), new $_model.CreateRepoTagResponse({}));
  }

  /**
   * Creates an image tag based on an existing image tag in an image repository.
   * 
   * @param request - CreateRepoTagRequest
   * @returns CreateRepoTagResponse
   */
  async createRepoTag(request: $_model.CreateRepoTagRequest): Promise<$_model.CreateRepoTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoTagWithOptions(request, runtime);
  }

  /**
   * Creates an image scan task.
   * 
   * @param request - CreateRepoTagScanTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoTagScanTaskResponse
   */
  async createRepoTagScanTaskWithOptions(request: $_model.CreateRepoTagScanTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRepoTagScanTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.scanService)) {
      query["ScanService"] = request.scanService;
    }

    if (!$dara.isNull(request.scanType)) {
      query["ScanType"] = request.scanType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoTagScanTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRepoTagScanTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateRepoTagScanTaskResponse({}));
  }

  /**
   * Creates an image scan task.
   * 
   * @param request - CreateRepoTagScanTaskRequest
   * @returns CreateRepoTagScanTaskResponse
   */
  async createRepoTagScanTask(request: $_model.CreateRepoTagScanTaskRequest): Promise<$_model.CreateRepoTagScanTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoTagScanTaskWithOptions(request, runtime);
  }

  /**
   * Creates a trigger for a repository.
   * 
   * @param request - CreateRepoTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepoTriggerResponse
   */
  async createRepoTriggerWithOptions(request: $_model.CreateRepoTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRepoTriggerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.triggerName)) {
      query["TriggerName"] = request.triggerName;
    }

    if (!$dara.isNull(request.triggerTag)) {
      query["TriggerTag"] = request.triggerTag;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    if (!$dara.isNull(request.triggerUrl)) {
      query["TriggerUrl"] = request.triggerUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepoTrigger",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRepoTriggerResponse>(await this.callApi(params, req, runtime), new $_model.CreateRepoTriggerResponse({}));
  }

  /**
   * Creates a trigger for a repository.
   * 
   * @param request - CreateRepoTriggerRequest
   * @returns CreateRepoTriggerResponse
   */
  async createRepoTrigger(request: $_model.CreateRepoTriggerRequest): Promise<$_model.CreateRepoTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepoTriggerWithOptions(request, runtime);
  }

  /**
   * Creates an image repository.
   * 
   * @param request - CreateRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRepositoryResponse
   */
  async createRepositoryWithOptions(request: $_model.CreateRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.repoType)) {
      query["RepoType"] = request.repoType;
    }

    if (!$dara.isNull(request.summary)) {
      query["Summary"] = request.summary;
    }

    if (!$dara.isNull(request.tagImmutability)) {
      query["TagImmutability"] = request.tagImmutability;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateRepositoryResponse({}));
  }

  /**
   * Creates an image repository.
   * 
   * @param request - CreateRepositoryRequest
   * @returns CreateRepositoryResponse
   */
  async createRepository(request: $_model.CreateRepositoryRequest): Promise<$_model.CreateRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createRepositoryWithOptions(request, runtime);
  }

  /**
   * Creates a scan or content analysis rule.
   * 
   * @remarks
   * Creates a scan or content analysis rule.
   * 
   * @param tmpReq - CreateScanRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScanRuleResponse
   */
  async createScanRuleWithOptions(tmpReq: $_model.CreateScanRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateScanRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateScanRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.namespaces)) {
      request.namespacesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaces, "Namespaces", "json");
    }

    if (!$dara.isNull(tmpReq.repoNames)) {
      request.repoNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repoNames, "RepoNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespacesShrink)) {
      query["Namespaces"] = request.namespacesShrink;
    }

    if (!$dara.isNull(request.repoNamesShrink)) {
      query["RepoNames"] = request.repoNamesShrink;
    }

    if (!$dara.isNull(request.repoTagFilterPattern)) {
      query["RepoTagFilterPattern"] = request.repoTagFilterPattern;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.scanScope)) {
      query["ScanScope"] = request.scanScope;
    }

    if (!$dara.isNull(request.scanType)) {
      query["ScanType"] = request.scanType;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScanRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateScanRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateScanRuleResponse({}));
  }

  /**
   * Creates a scan or content analysis rule.
   * 
   * @remarks
   * Creates a scan or content analysis rule.
   * 
   * @param request - CreateScanRuleRequest
   * @returns CreateScanRuleResponse
   */
  async createScanRule(request: $_model.CreateScanRuleRequest): Promise<$_model.CreateScanRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScanRuleWithOptions(request, runtime);
  }

  /**
   * Creates an instance store domain name routing rule.
   * 
   * @remarks
   * The whitelist of this API operation is available. [Submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket).
   * 
   * @param tmpReq - CreateStorageDomainRoutingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStorageDomainRoutingRuleResponse
   */
  async createStorageDomainRoutingRuleWithOptions(tmpReq: $_model.CreateStorageDomainRoutingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStorageDomainRoutingRuleResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStorageDomainRoutingRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.routes)) {
      request.routesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.routes, "Routes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.routesShrink)) {
      query["Routes"] = request.routesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStorageDomainRoutingRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStorageDomainRoutingRuleResponse>(await this.callApi(params, req, runtime), new $_model.CreateStorageDomainRoutingRuleResponse({}));
  }

  /**
   * Creates an instance store domain name routing rule.
   * 
   * @remarks
   * The whitelist of this API operation is available. [Submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket).
   * 
   * @param request - CreateStorageDomainRoutingRuleRequest
   * @returns CreateStorageDomainRoutingRuleResponse
   */
  async createStorageDomainRoutingRule(request: $_model.CreateStorageDomainRoutingRuleRequest): Promise<$_model.CreateStorageDomainRoutingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStorageDomainRoutingRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an artifact lifecycle management rule.
   * 
   * @param request - DeleteArtifactLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteArtifactLifecycleRuleResponse
   */
  async deleteArtifactLifecycleRuleWithOptions(request: $_model.DeleteArtifactLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteArtifactLifecycleRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteArtifactLifecycleRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteArtifactLifecycleRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteArtifactLifecycleRuleResponse({}));
  }

  /**
   * Deletes an artifact lifecycle management rule.
   * 
   * @param request - DeleteArtifactLifecycleRuleRequest
   * @returns DeleteArtifactLifecycleRuleResponse
   */
  async deleteArtifactLifecycleRule(request: $_model.DeleteArtifactLifecycleRuleRequest): Promise<$_model.DeleteArtifactLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteArtifactLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an artifact subscription rule.
   * 
   * @param request - DeleteArtifactSubscriptionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteArtifactSubscriptionRuleResponse
   */
  async deleteArtifactSubscriptionRuleWithOptions(request: $_model.DeleteArtifactSubscriptionRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteArtifactSubscriptionRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteArtifactSubscriptionRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteArtifactSubscriptionRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteArtifactSubscriptionRuleResponse({}));
  }

  /**
   * Deletes an artifact subscription rule.
   * 
   * @param request - DeleteArtifactSubscriptionRuleRequest
   * @returns DeleteArtifactSubscriptionRuleResponse
   */
  async deleteArtifactSubscriptionRule(request: $_model.DeleteArtifactSubscriptionRuleRequest): Promise<$_model.DeleteArtifactSubscriptionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteArtifactSubscriptionRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a delivery pipeline.
   * 
   * @param request - DeleteChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChainResponse
   */
  async deleteChainWithOptions(request: $_model.DeleteChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chainId)) {
      query["ChainId"] = request.chainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChainResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChainResponse({}));
  }

  /**
   * Deletes a delivery pipeline.
   * 
   * @param request - DeleteChainRequest
   * @returns DeleteChainResponse
   */
  async deleteChain(request: $_model.DeleteChainRequest): Promise<$_model.DeleteChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChainWithOptions(request, runtime);
  }

  /**
   * Deletes a chart namespace from an instance.
   * 
   * @remarks
   * >  If you delete a chart namespace, all repositories in the namespace and the charts in all repositories are deleted.
   * 
   * @param request - DeleteChartNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChartNamespaceResponse
   */
  async deleteChartNamespaceWithOptions(request: $_model.DeleteChartNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChartNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChartNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChartNamespaceResponse({}));
  }

  /**
   * Deletes a chart namespace from an instance.
   * 
   * @remarks
   * >  If you delete a chart namespace, all repositories in the namespace and the charts in all repositories are deleted.
   * 
   * @param request - DeleteChartNamespaceRequest
   * @returns DeleteChartNamespaceResponse
   */
  async deleteChartNamespace(request: $_model.DeleteChartNamespaceRequest): Promise<$_model.DeleteChartNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChartNamespaceWithOptions(request, runtime);
  }

  /**
   * Deletes a chart version from a chart repository.
   * 
   * @param request - DeleteChartReleaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChartReleaseResponse
   */
  async deleteChartReleaseWithOptions(request: $_model.DeleteChartReleaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChartReleaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chart)) {
      query["Chart"] = request.chart;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.release)) {
      query["Release"] = request.release;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChartRelease",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChartReleaseResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChartReleaseResponse({}));
  }

  /**
   * Deletes a chart version from a chart repository.
   * 
   * @param request - DeleteChartReleaseRequest
   * @returns DeleteChartReleaseResponse
   */
  async deleteChartRelease(request: $_model.DeleteChartReleaseRequest): Promise<$_model.DeleteChartReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChartReleaseWithOptions(request, runtime);
  }

  /**
   * Deletes a chart repository from an instance.
   * 
   * @param request - DeleteChartRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteChartRepositoryResponse
   */
  async deleteChartRepositoryWithOptions(request: $_model.DeleteChartRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteChartRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteChartRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteChartRepositoryResponse({}));
  }

  /**
   * Deletes a chart repository from an instance.
   * 
   * @param request - DeleteChartRepositoryRequest
   * @returns DeleteChartRepositoryResponse
   */
  async deleteChartRepository(request: $_model.DeleteChartRepositoryRequest): Promise<$_model.DeleteChartRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteChartRepositoryWithOptions(request, runtime);
  }

  /**
   * Deletes an event notification rule.
   * 
   * @param request - DeleteEventCenterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEventCenterRuleResponse
   */
  async deleteEventCenterRuleWithOptions(request: $_model.DeleteEventCenterRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteEventCenterRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEventCenterRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteEventCenterRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteEventCenterRuleResponse({}));
  }

  /**
   * Deletes an event notification rule.
   * 
   * @param request - DeleteEventCenterRuleRequest
   * @returns DeleteEventCenterRuleResponse
   */
  async deleteEventCenterRule(request: $_model.DeleteEventCenterRuleRequest): Promise<$_model.DeleteEventCenterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteEventCenterRuleWithOptions(request, runtime);
  }

  /**
   * Deletes a whitelist policy for the public endpoint of an instance.
   * 
   * @param request - DeleteInstanceEndpointAclPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceEndpointAclPolicyResponse
   */
  async deleteInstanceEndpointAclPolicyWithOptions(request: $_model.DeleteInstanceEndpointAclPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceEndpointAclPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.entry)) {
      query["Entry"] = request.entry;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceEndpointAclPolicy",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceEndpointAclPolicyResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceEndpointAclPolicyResponse({}));
  }

  /**
   * Deletes a whitelist policy for the public endpoint of an instance.
   * 
   * @param request - DeleteInstanceEndpointAclPolicyRequest
   * @returns DeleteInstanceEndpointAclPolicyResponse
   */
  async deleteInstanceEndpointAclPolicy(request: $_model.DeleteInstanceEndpointAclPolicyRequest): Promise<$_model.DeleteInstanceEndpointAclPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceEndpointAclPolicyWithOptions(request, runtime);
  }

  /**
   * Disassociates a virtual private cloud (VPC) from an instance.
   * 
   * @param request - DeleteInstanceVpcEndpointLinkedVpcRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteInstanceVpcEndpointLinkedVpcResponse
   */
  async deleteInstanceVpcEndpointLinkedVpcWithOptions(request: $_model.DeleteInstanceVpcEndpointLinkedVpcRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteInstanceVpcEndpointLinkedVpcResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    if (!$dara.isNull(request.vswitchId)) {
      query["VswitchId"] = request.vswitchId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteInstanceVpcEndpointLinkedVpc",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteInstanceVpcEndpointLinkedVpcResponse>(await this.callApi(params, req, runtime), new $_model.DeleteInstanceVpcEndpointLinkedVpcResponse({}));
  }

  /**
   * Disassociates a virtual private cloud (VPC) from an instance.
   * 
   * @param request - DeleteInstanceVpcEndpointLinkedVpcRequest
   * @returns DeleteInstanceVpcEndpointLinkedVpcResponse
   */
  async deleteInstanceVpcEndpointLinkedVpc(request: $_model.DeleteInstanceVpcEndpointLinkedVpcRequest): Promise<$_model.DeleteInstanceVpcEndpointLinkedVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteInstanceVpcEndpointLinkedVpcWithOptions(request, runtime);
  }

  /**
   * Deletes a namespace.
   * 
   * @remarks
   * > After you delete a namespace, all repositories in the namespace and all images in these repositories are deleted as well.
   * 
   * @param request - DeleteNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespaceWithOptions(request: $_model.DeleteNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.DeleteNamespaceResponse({}));
  }

  /**
   * Deletes a namespace.
   * 
   * @remarks
   * > After you delete a namespace, all repositories in the namespace and all images in these repositories are deleted as well.
   * 
   * @param request - DeleteNamespaceRequest
   * @returns DeleteNamespaceResponse
   */
  async deleteNamespace(request: $_model.DeleteNamespaceRequest): Promise<$_model.DeleteNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteNamespaceWithOptions(request, runtime);
  }

  /**
   * Deletes an image building rule of a repository.
   * 
   * @param request - DeleteRepoBuildRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepoBuildRuleResponse
   */
  async deleteRepoBuildRuleWithOptions(request: $_model.DeleteRepoBuildRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRepoBuildRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRuleId)) {
      query["BuildRuleId"] = request.buildRuleId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepoBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRepoBuildRuleResponse({}));
  }

  /**
   * Deletes an image building rule of a repository.
   * 
   * @param request - DeleteRepoBuildRuleRequest
   * @returns DeleteRepoBuildRuleResponse
   */
  async deleteRepoBuildRule(request: $_model.DeleteRepoBuildRuleRequest): Promise<$_model.DeleteRepoBuildRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRepoBuildRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an image replication rule of an image repository.
   * 
   * @param request - DeleteRepoSyncRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepoSyncRuleResponse
   */
  async deleteRepoSyncRuleWithOptions(request: $_model.DeleteRepoSyncRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRepoSyncRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.syncRuleId)) {
      query["SyncRuleId"] = request.syncRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepoSyncRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRepoSyncRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRepoSyncRuleResponse({}));
  }

  /**
   * Deletes an image replication rule of an image repository.
   * 
   * @param request - DeleteRepoSyncRuleRequest
   * @returns DeleteRepoSyncRuleResponse
   */
  async deleteRepoSyncRule(request: $_model.DeleteRepoSyncRuleRequest): Promise<$_model.DeleteRepoSyncRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRepoSyncRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an image tag.
   * 
   * @param request - DeleteRepoTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepoTagResponse
   */
  async deleteRepoTagWithOptions(request: $_model.DeleteRepoTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRepoTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepoTag",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRepoTagResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRepoTagResponse({}));
  }

  /**
   * Deletes an image tag.
   * 
   * @param request - DeleteRepoTagRequest
   * @returns DeleteRepoTagResponse
   */
  async deleteRepoTag(request: $_model.DeleteRepoTagRequest): Promise<$_model.DeleteRepoTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRepoTagWithOptions(request, runtime);
  }

  /**
   * Deletes a trigger of an image repository.
   * 
   * @param request - DeleteRepoTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepoTriggerResponse
   */
  async deleteRepoTriggerWithOptions(request: $_model.DeleteRepoTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRepoTriggerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.triggerId)) {
      query["TriggerId"] = request.triggerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepoTrigger",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRepoTriggerResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRepoTriggerResponse({}));
  }

  /**
   * Deletes a trigger of an image repository.
   * 
   * @param request - DeleteRepoTriggerRequest
   * @returns DeleteRepoTriggerResponse
   */
  async deleteRepoTrigger(request: $_model.DeleteRepoTriggerRequest): Promise<$_model.DeleteRepoTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRepoTriggerWithOptions(request, runtime);
  }

  /**
   * Deletes an image repository.
   * 
   * @remarks
   * If you delete a repository, all images in the repository are also deleted.
   * 
   * @param request - DeleteRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRepositoryResponse
   */
  async deleteRepositoryWithOptions(request: $_model.DeleteRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteRepositoryResponse({}));
  }

  /**
   * Deletes an image repository.
   * 
   * @remarks
   * If you delete a repository, all images in the repository are also deleted.
   * 
   * @param request - DeleteRepositoryRequest
   * @returns DeleteRepositoryResponse
   */
  async deleteRepository(request: $_model.DeleteRepositoryRequest): Promise<$_model.DeleteRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteRepositoryWithOptions(request, runtime);
  }

  /**
   * Deletes a scan rule.
   * 
   * @remarks
   * Deletes a scan rule.
   * 
   * @param request - DeleteScanRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScanRuleResponse
   */
  async deleteScanRuleWithOptions(request: $_model.DeleteScanRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteScanRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scanRuleId)) {
      query["ScanRuleId"] = request.scanRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScanRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteScanRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteScanRuleResponse({}));
  }

  /**
   * Deletes a scan rule.
   * 
   * @remarks
   * Deletes a scan rule.
   * 
   * @param request - DeleteScanRuleRequest
   * @returns DeleteScanRuleResponse
   */
  async deleteScanRule(request: $_model.DeleteScanRuleRequest): Promise<$_model.DeleteScanRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScanRuleWithOptions(request, runtime);
  }

  /**
   * Deletes an instance store domain name routing rule.
   * 
   * @remarks
   * The whitelist of this API operation is available. [Submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket).
   * 
   * @param request - DeleteStorageDomainRoutingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStorageDomainRoutingRuleResponse
   */
  async deleteStorageDomainRoutingRuleWithOptions(request: $_model.DeleteStorageDomainRoutingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStorageDomainRoutingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStorageDomainRoutingRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStorageDomainRoutingRuleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStorageDomainRoutingRuleResponse({}));
  }

  /**
   * Deletes an instance store domain name routing rule.
   * 
   * @remarks
   * The whitelist of this API operation is available. [Submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket).
   * 
   * @param request - DeleteStorageDomainRoutingRuleRequest
   * @returns DeleteStorageDomainRoutingRuleResponse
   */
  async deleteStorageDomainRoutingRule(request: $_model.DeleteStorageDomainRoutingRuleRequest): Promise<$_model.DeleteStorageDomainRoutingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStorageDomainRoutingRuleWithOptions(request, runtime);
  }

  /**
   * @param request - GetArtifactBuildRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactBuildRuleResponse
   */
  async getArtifactBuildRuleWithOptions(request: $_model.GetArtifactBuildRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetArtifactBuildRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArtifactBuildRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetArtifactBuildRuleResponse({}));
  }

  /**
   * @param request - GetArtifactBuildRuleRequest
   * @returns GetArtifactBuildRuleResponse
   */
  async getArtifactBuildRule(request: $_model.GetArtifactBuildRuleRequest): Promise<$_model.GetArtifactBuildRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactBuildRuleWithOptions(request, runtime);
  }

  /**
   * Queries the details of an artifact building task.
   * 
   * @param request - GetArtifactBuildTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactBuildTaskResponse
   */
  async getArtifactBuildTaskWithOptions(request: $_model.GetArtifactBuildTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetArtifactBuildTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactBuildTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArtifactBuildTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetArtifactBuildTaskResponse({}));
  }

  /**
   * Queries the details of an artifact building task.
   * 
   * @param request - GetArtifactBuildTaskRequest
   * @returns GetArtifactBuildTaskResponse
   */
  async getArtifactBuildTask(request: $_model.GetArtifactBuildTaskRequest): Promise<$_model.GetArtifactBuildTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactBuildTaskWithOptions(request, runtime);
  }

  /**
   * Queries the lifecycle management rules of an artifact.
   * 
   * @param request - GetArtifactLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactLifecycleRuleResponse
   */
  async getArtifactLifecycleRuleWithOptions(request: $_model.GetArtifactLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetArtifactLifecycleRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactLifecycleRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArtifactLifecycleRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetArtifactLifecycleRuleResponse({}));
  }

  /**
   * Queries the lifecycle management rules of an artifact.
   * 
   * @param request - GetArtifactLifecycleRuleRequest
   * @returns GetArtifactLifecycleRuleResponse
   */
  async getArtifactLifecycleRule(request: $_model.GetArtifactLifecycleRuleRequest): Promise<$_model.GetArtifactLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Queries the information about an artifact subscription rule.
   * 
   * @param request - GetArtifactSubscriptionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactSubscriptionRuleResponse
   */
  async getArtifactSubscriptionRuleWithOptions(request: $_model.GetArtifactSubscriptionRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetArtifactSubscriptionRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactSubscriptionRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArtifactSubscriptionRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetArtifactSubscriptionRuleResponse({}));
  }

  /**
   * Queries the information about an artifact subscription rule.
   * 
   * @param request - GetArtifactSubscriptionRuleRequest
   * @returns GetArtifactSubscriptionRuleResponse
   */
  async getArtifactSubscriptionRule(request: $_model.GetArtifactSubscriptionRuleRequest): Promise<$_model.GetArtifactSubscriptionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactSubscriptionRuleWithOptions(request, runtime);
  }

  /**
   * Queries an artifact subscription task.
   * 
   * @param request - GetArtifactSubscriptionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactSubscriptionTaskResponse
   */
  async getArtifactSubscriptionTaskWithOptions(request: $_model.GetArtifactSubscriptionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetArtifactSubscriptionTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactSubscriptionTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArtifactSubscriptionTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetArtifactSubscriptionTaskResponse({}));
  }

  /**
   * Queries an artifact subscription task.
   * 
   * @param request - GetArtifactSubscriptionTaskRequest
   * @returns GetArtifactSubscriptionTaskResponse
   */
  async getArtifactSubscriptionTask(request: $_model.GetArtifactSubscriptionTaskRequest): Promise<$_model.GetArtifactSubscriptionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactSubscriptionTaskWithOptions(request, runtime);
  }

  /**
   * Queries the details of an artifact subscription task.
   * 
   * @param request - GetArtifactSubscriptionTaskResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactSubscriptionTaskResultResponse
   */
  async getArtifactSubscriptionTaskResultWithOptions(request: $_model.GetArtifactSubscriptionTaskResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetArtifactSubscriptionTaskResultResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifactSubscriptionTaskResult",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetArtifactSubscriptionTaskResultResponse>(await this.callApi(params, req, runtime), new $_model.GetArtifactSubscriptionTaskResultResponse({}));
  }

  /**
   * Queries the details of an artifact subscription task.
   * 
   * @param request - GetArtifactSubscriptionTaskResultRequest
   * @returns GetArtifactSubscriptionTaskResultResponse
   */
  async getArtifactSubscriptionTaskResult(request: $_model.GetArtifactSubscriptionTaskResultRequest): Promise<$_model.GetArtifactSubscriptionTaskResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getArtifactSubscriptionTaskResultWithOptions(request, runtime);
  }

  /**
   * Queries a pair of temporary username and password that you use to log on to a Container Registry instance.
   * 
   * @remarks
   * The validity period of the temporary password is 1 hour. If you use STS to request a token, the validity period of the temporary password is the same as the validity period of the STS token.
   * *   If you log on to an instance by using the temporary password obtained through an Alibaba Cloud account, you have the same permissions on resources as the user of the Alibaba Cloud account.
   * *   If you log on to an instance by using the temporary password obtained through a RAM user, you have the same permissions as the RAM user.
   * *   If you log on to an instance by using the temporary password obtained through STS, you have the same permissions as the STS token.
   * 
   * @param request - GetAuthorizationTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAuthorizationTokenResponse
   */
  async getAuthorizationTokenWithOptions(request: $_model.GetAuthorizationTokenRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAuthorizationTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAuthorizationToken",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAuthorizationTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetAuthorizationTokenResponse({}));
  }

  /**
   * Queries a pair of temporary username and password that you use to log on to a Container Registry instance.
   * 
   * @remarks
   * The validity period of the temporary password is 1 hour. If you use STS to request a token, the validity period of the temporary password is the same as the validity period of the STS token.
   * *   If you log on to an instance by using the temporary password obtained through an Alibaba Cloud account, you have the same permissions on resources as the user of the Alibaba Cloud account.
   * *   If you log on to an instance by using the temporary password obtained through a RAM user, you have the same permissions as the RAM user.
   * *   If you log on to an instance by using the temporary password obtained through STS, you have the same permissions as the STS token.
   * 
   * @param request - GetAuthorizationTokenRequest
   * @returns GetAuthorizationTokenResponse
   */
  async getAuthorizationToken(request: $_model.GetAuthorizationTokenRequest): Promise<$_model.GetAuthorizationTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAuthorizationTokenWithOptions(request, runtime);
  }

  /**
   * 获取交付链
   * 
   * @param request - GetChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChainResponse
   */
  async getChainWithOptions(request: $_model.GetChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chainId)) {
      query["ChainId"] = request.chainId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChainResponse>(await this.callApi(params, req, runtime), new $_model.GetChainResponse({}));
  }

  /**
   * 获取交付链
   * 
   * @param request - GetChainRequest
   * @returns GetChainResponse
   */
  async getChain(request: $_model.GetChainRequest): Promise<$_model.GetChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChainWithOptions(request, runtime);
  }

  /**
   * Queries a chart namespace in an instance.
   * 
   * @param request - GetChartNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChartNamespaceResponse
   */
  async getChartNamespaceWithOptions(request: $_model.GetChartNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChartNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChartNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.GetChartNamespaceResponse({}));
  }

  /**
   * Queries a chart namespace in an instance.
   * 
   * @param request - GetChartNamespaceRequest
   * @returns GetChartNamespaceResponse
   */
  async getChartNamespace(request: $_model.GetChartNamespaceRequest): Promise<$_model.GetChartNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChartNamespaceWithOptions(request, runtime);
  }

  /**
   * Queries the information about a chart repository.
   * 
   * @param request - GetChartRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetChartRepositoryResponse
   */
  async getChartRepositoryWithOptions(request: $_model.GetChartRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetChartRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetChartRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.GetChartRepositoryResponse({}));
  }

  /**
   * Queries the information about a chart repository.
   * 
   * @param request - GetChartRepositoryRequest
   * @returns GetChartRepositoryResponse
   */
  async getChartRepository(request: $_model.GetChartRepositoryRequest): Promise<$_model.GetChartRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getChartRepositoryWithOptions(request, runtime);
  }

  /**
   * The ID of the resource group to which the instance belongs.
   * 
   * @param request - GetInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceResponse
   */
  async getInstanceWithOptions(request: $_model.GetInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstance",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceResponse({}));
  }

  /**
   * The ID of the resource group to which the instance belongs.
   * 
   * @param request - GetInstanceRequest
   * @returns GetInstanceResponse
   */
  async getInstance(request: $_model.GetInstanceRequest): Promise<$_model.GetInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the number of instances.
   * 
   * @param request - GetInstanceCountRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceCountResponse
   */
  async getInstanceCountWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceCountResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceCount",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceCountResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceCountResponse({}));
  }

  /**
   * Queries the number of instances.
   * @returns GetInstanceCountResponse
   */
  async getInstanceCount(): Promise<$_model.GetInstanceCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceCountWithOptions(runtime);
  }

  /**
   * Queries the endpoint of an instance.
   * 
   * @param request - GetInstanceEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceEndpointResponse
   */
  async getInstanceEndpointWithOptions(request: $_model.GetInstanceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceEndpoint",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceEndpointResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceEndpointResponse({}));
  }

  /**
   * Queries the endpoint of an instance.
   * 
   * @param request - GetInstanceEndpointRequest
   * @returns GetInstanceEndpointResponse
   */
  async getInstanceEndpoint(request: $_model.GetInstanceEndpointRequest): Promise<$_model.GetInstanceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceEndpointWithOptions(request, runtime);
  }

  /**
   * Queries the quota usage of an instance.
   * 
   * @param request - GetInstanceUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceUsageResponse
   */
  async getInstanceUsageWithOptions(request: $_model.GetInstanceUsageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceUsage",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceUsageResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceUsageResponse({}));
  }

  /**
   * Queries the quota usage of an instance.
   * 
   * @param request - GetInstanceUsageRequest
   * @returns GetInstanceUsageResponse
   */
  async getInstanceUsage(request: $_model.GetInstanceUsageRequest): Promise<$_model.GetInstanceUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceUsageWithOptions(request, runtime);
  }

  /**
   * Queries the endpoints of the virtual private clouds (VPCs) in which a Container Registry instance is deployed.
   * 
   * @param request - GetInstanceVpcEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstanceVpcEndpointResponse
   */
  async getInstanceVpcEndpointWithOptions(request: $_model.GetInstanceVpcEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInstanceVpcEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstanceVpcEndpoint",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInstanceVpcEndpointResponse>(await this.callApi(params, req, runtime), new $_model.GetInstanceVpcEndpointResponse({}));
  }

  /**
   * Queries the endpoints of the virtual private clouds (VPCs) in which a Container Registry instance is deployed.
   * 
   * @param request - GetInstanceVpcEndpointRequest
   * @returns GetInstanceVpcEndpointResponse
   */
  async getInstanceVpcEndpoint(request: $_model.GetInstanceVpcEndpointRequest): Promise<$_model.GetInstanceVpcEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInstanceVpcEndpointWithOptions(request, runtime);
  }

  /**
   * Queries the information about a namespace.
   * 
   * @param request - GetNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNamespaceResponse
   */
  async getNamespaceWithOptions(request: $_model.GetNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceId)) {
      query["NamespaceId"] = request.namespaceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.GetNamespaceResponse({}));
  }

  /**
   * Queries the information about a namespace.
   * 
   * @param request - GetNamespaceRequest
   * @returns GetNamespaceResponse
   */
  async getNamespace(request: $_model.GetNamespaceRequest): Promise<$_model.GetNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getNamespaceWithOptions(request, runtime);
  }

  /**
   * Queries the information about image building records of a repository.
   * 
   * @remarks
   * ***
   * 
   * @param request - GetRepoBuildRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoBuildRecordResponse
   */
  async getRepoBuildRecordWithOptions(request: $_model.GetRepoBuildRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRepoBuildRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRecordId)) {
      query["BuildRecordId"] = request.buildRecordId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoBuildRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRepoBuildRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetRepoBuildRecordResponse({}));
  }

  /**
   * Queries the information about image building records of a repository.
   * 
   * @remarks
   * ***
   * 
   * @param request - GetRepoBuildRecordRequest
   * @returns GetRepoBuildRecordResponse
   */
  async getRepoBuildRecord(request: $_model.GetRepoBuildRecordRequest): Promise<$_model.GetRepoBuildRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoBuildRecordWithOptions(request, runtime);
  }

  /**
   * Queries the status of an image building task.
   * 
   * @param request - GetRepoBuildRecordStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoBuildRecordStatusResponse
   */
  async getRepoBuildRecordStatusWithOptions(request: $_model.GetRepoBuildRecordStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRepoBuildRecordStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRecordId)) {
      query["BuildRecordId"] = request.buildRecordId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoBuildRecordStatus",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRepoBuildRecordStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetRepoBuildRecordStatusResponse({}));
  }

  /**
   * Queries the status of an image building task.
   * 
   * @param request - GetRepoBuildRecordStatusRequest
   * @returns GetRepoBuildRecordStatusResponse
   */
  async getRepoBuildRecordStatus(request: $_model.GetRepoBuildRecordStatusRequest): Promise<$_model.GetRepoBuildRecordStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoBuildRecordStatusWithOptions(request, runtime);
  }

  /**
   * Queries the information about the source code repository that is bound to an image repository.
   * 
   * @param request - GetRepoSourceCodeRepoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoSourceCodeRepoResponse
   */
  async getRepoSourceCodeRepoWithOptions(request: $_model.GetRepoSourceCodeRepoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRepoSourceCodeRepoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoSourceCodeRepo",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRepoSourceCodeRepoResponse>(await this.callApi(params, req, runtime), new $_model.GetRepoSourceCodeRepoResponse({}));
  }

  /**
   * Queries the information about the source code repository that is bound to an image repository.
   * 
   * @param request - GetRepoSourceCodeRepoRequest
   * @returns GetRepoSourceCodeRepoResponse
   */
  async getRepoSourceCodeRepo(request: $_model.GetRepoSourceCodeRepoRequest): Promise<$_model.GetRepoSourceCodeRepoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoSourceCodeRepoWithOptions(request, runtime);
  }

  /**
   * Queries an image synchronization task in an instance.
   * 
   * @param request - GetRepoSyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoSyncTaskResponse
   */
  async getRepoSyncTaskWithOptions(request: $_model.GetRepoSyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRepoSyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.syncTaskId)) {
      query["SyncTaskId"] = request.syncTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoSyncTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRepoSyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetRepoSyncTaskResponse({}));
  }

  /**
   * Queries an image synchronization task in an instance.
   * 
   * @param request - GetRepoSyncTaskRequest
   * @returns GetRepoSyncTaskResponse
   */
  async getRepoSyncTask(request: $_model.GetRepoSyncTaskRequest): Promise<$_model.GetRepoSyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoSyncTaskWithOptions(request, runtime);
  }

  /**
   * The version of the repository.
   * 
   * @param request - GetRepoTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoTagResponse
   */
  async getRepoTagWithOptions(request: $_model.GetRepoTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRepoTagResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoTag",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRepoTagResponse>(await this.callApi(params, req, runtime), new $_model.GetRepoTagResponse({}));
  }

  /**
   * The version of the repository.
   * 
   * @param request - GetRepoTagRequest
   * @returns GetRepoTagResponse
   */
  async getRepoTag(request: $_model.GetRepoTagRequest): Promise<$_model.GetRepoTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoTagWithOptions(request, runtime);
  }

  /**
   * Queries the scanning status of an image tag.
   * 
   * @param request - GetRepoTagScanStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoTagScanStatusResponse
   */
  async getRepoTagScanStatusWithOptions(request: $_model.GetRepoTagScanStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRepoTagScanStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.scanTaskId)) {
      query["ScanTaskId"] = request.scanTaskId;
    }

    if (!$dara.isNull(request.scanType)) {
      query["ScanType"] = request.scanType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoTagScanStatus",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRepoTagScanStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetRepoTagScanStatusResponse({}));
  }

  /**
   * Queries the scanning status of an image tag.
   * 
   * @param request - GetRepoTagScanStatusRequest
   * @returns GetRepoTagScanStatusResponse
   */
  async getRepoTagScanStatus(request: $_model.GetRepoTagScanStatusRequest): Promise<$_model.GetRepoTagScanStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoTagScanStatusWithOptions(request, runtime);
  }

  /**
   * @param request - GetRepoTagScanSummaryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepoTagScanSummaryResponse
   */
  async getRepoTagScanSummaryWithOptions(request: $_model.GetRepoTagScanSummaryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRepoTagScanSummaryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.scanTaskId)) {
      query["ScanTaskId"] = request.scanTaskId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepoTagScanSummary",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRepoTagScanSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetRepoTagScanSummaryResponse({}));
  }

  /**
   * @param request - GetRepoTagScanSummaryRequest
   * @returns GetRepoTagScanSummaryResponse
   */
  async getRepoTagScanSummary(request: $_model.GetRepoTagScanSummaryRequest): Promise<$_model.GetRepoTagScanSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepoTagScanSummaryWithOptions(request, runtime);
  }

  /**
   * Queries details about an image repository.
   * 
   * @param request - GetRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepositoryResponse
   */
  async getRepositoryWithOptions(request: $_model.GetRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.GetRepositoryResponse({}));
  }

  /**
   * Queries details about an image repository.
   * 
   * @param request - GetRepositoryRequest
   * @returns GetRepositoryResponse
   */
  async getRepository(request: $_model.GetRepositoryRequest): Promise<$_model.GetRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getRepositoryWithOptions(request, runtime);
  }

  /**
   * Obtains a scan rule.
   * 
   * @remarks
   * Get scan rule.
   * 
   * @param request - GetScanRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScanRuleResponse
   */
  async getScanRuleWithOptions(request: $_model.GetScanRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScanRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.scanRuleId)) {
      query["ScanRuleId"] = request.scanRuleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScanRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScanRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetScanRuleResponse({}));
  }

  /**
   * Obtains a scan rule.
   * 
   * @remarks
   * Get scan rule.
   * 
   * @param request - GetScanRuleRequest
   * @returns GetScanRuleResponse
   */
  async getScanRule(request: $_model.GetScanRuleRequest): Promise<$_model.GetScanRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScanRuleWithOptions(request, runtime);
  }

  /**
   * Queries instance storage domain routing rules
   * 
   * @remarks
   * This API is open to a whitelist. Please [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket) for support.
   * 
   * @param request - GetStorageDomainRoutingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStorageDomainRoutingRuleResponse
   */
  async getStorageDomainRoutingRuleWithOptions(request: $_model.GetStorageDomainRoutingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStorageDomainRoutingRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStorageDomainRoutingRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStorageDomainRoutingRuleResponse>(await this.callApi(params, req, runtime), new $_model.GetStorageDomainRoutingRuleResponse({}));
  }

  /**
   * Queries instance storage domain routing rules
   * 
   * @remarks
   * This API is open to a whitelist. Please [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket) for support.
   * 
   * @param request - GetStorageDomainRoutingRuleRequest
   * @returns GetStorageDomainRoutingRuleResponse
   */
  async getStorageDomainRoutingRule(request: $_model.GetStorageDomainRoutingRuleRequest): Promise<$_model.GetStorageDomainRoutingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStorageDomainRoutingRuleWithOptions(request, runtime);
  }

  /**
   * Queries the log entries of an artifact building task.
   * 
   * @param request - ListArtifactBuildTaskLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactBuildTaskLogResponse
   */
  async listArtifactBuildTaskLogWithOptions(request: $_model.ListArtifactBuildTaskLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListArtifactBuildTaskLogResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListArtifactBuildTaskLog",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListArtifactBuildTaskLogResponse>(await this.callApi(params, req, runtime), new $_model.ListArtifactBuildTaskLogResponse({}));
  }

  /**
   * Queries the log entries of an artifact building task.
   * 
   * @param request - ListArtifactBuildTaskLogRequest
   * @returns ListArtifactBuildTaskLogResponse
   */
  async listArtifactBuildTaskLog(request: $_model.ListArtifactBuildTaskLogRequest): Promise<$_model.ListArtifactBuildTaskLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactBuildTaskLogWithOptions(request, runtime);
  }

  /**
   * Queries the lifecycle management rules of an artifact.
   * 
   * @param request - ListArtifactLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactLifecycleRuleResponse
   */
  async listArtifactLifecycleRuleWithOptions(request: $_model.ListArtifactLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListArtifactLifecycleRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListArtifactLifecycleRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListArtifactLifecycleRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListArtifactLifecycleRuleResponse({}));
  }

  /**
   * Queries the lifecycle management rules of an artifact.
   * 
   * @param request - ListArtifactLifecycleRuleRequest
   * @returns ListArtifactLifecycleRuleResponse
   */
  async listArtifactLifecycleRule(request: $_model.ListArtifactLifecycleRuleRequest): Promise<$_model.ListArtifactLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Lists the subscription rules of artifacts.
   * 
   * @param request - ListArtifactSubscriptionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactSubscriptionRuleResponse
   */
  async listArtifactSubscriptionRuleWithOptions(request: $_model.ListArtifactSubscriptionRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListArtifactSubscriptionRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListArtifactSubscriptionRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListArtifactSubscriptionRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListArtifactSubscriptionRuleResponse({}));
  }

  /**
   * Lists the subscription rules of artifacts.
   * 
   * @param request - ListArtifactSubscriptionRuleRequest
   * @returns ListArtifactSubscriptionRuleResponse
   */
  async listArtifactSubscriptionRule(request: $_model.ListArtifactSubscriptionRuleRequest): Promise<$_model.ListArtifactSubscriptionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactSubscriptionRuleWithOptions(request, runtime);
  }

  /**
   * Lists artifact subscription tasks.
   * 
   * @param request - ListArtifactSubscriptionTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListArtifactSubscriptionTaskResponse
   */
  async listArtifactSubscriptionTaskWithOptions(request: $_model.ListArtifactSubscriptionTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListArtifactSubscriptionTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListArtifactSubscriptionTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListArtifactSubscriptionTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListArtifactSubscriptionTaskResponse({}));
  }

  /**
   * Lists artifact subscription tasks.
   * 
   * @param request - ListArtifactSubscriptionTaskRequest
   * @returns ListArtifactSubscriptionTaskResponse
   */
  async listArtifactSubscriptionTask(request: $_model.ListArtifactSubscriptionTaskRequest): Promise<$_model.ListArtifactSubscriptionTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listArtifactSubscriptionTaskWithOptions(request, runtime);
  }

  /**
   * Queries delivery chains.
   * 
   * @param request - ListChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChainResponse
   */
  async listChainWithOptions(request: $_model.ListChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChainResponse>(await this.callApi(params, req, runtime), new $_model.ListChainResponse({}));
  }

  /**
   * Queries delivery chains.
   * 
   * @param request - ListChainRequest
   * @returns ListChainResponse
   */
  async listChain(request: $_model.ListChainRequest): Promise<$_model.ListChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChainWithOptions(request, runtime);
  }

  /**
   * The response code.
   * 
   * @param request - ListChainInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChainInstanceResponse
   */
  async listChainInstanceWithOptions(request: $_model.ListChainInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChainInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChainInstance",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChainInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListChainInstanceResponse({}));
  }

  /**
   * The response code.
   * 
   * @param request - ListChainInstanceRequest
   * @returns ListChainInstanceResponse
   */
  async listChainInstance(request: $_model.ListChainInstanceRequest): Promise<$_model.ListChainInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChainInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the chart namespaces of a Container Registry instance.
   * 
   * @param request - ListChartNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChartNamespaceResponse
   */
  async listChartNamespaceWithOptions(request: $_model.ListChartNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChartNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.namespaceStatus)) {
      query["NamespaceStatus"] = request.namespaceStatus;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChartNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.ListChartNamespaceResponse({}));
  }

  /**
   * Queries the chart namespaces of a Container Registry instance.
   * 
   * @param request - ListChartNamespaceRequest
   * @returns ListChartNamespaceResponse
   */
  async listChartNamespace(request: $_model.ListChartNamespaceRequest): Promise<$_model.ListChartNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChartNamespaceWithOptions(request, runtime);
  }

  /**
   * Queries the versions of a chart in a chart repository.
   * 
   * @param request - ListChartReleaseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChartReleaseResponse
   */
  async listChartReleaseWithOptions(request: $_model.ListChartReleaseRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChartReleaseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chart)) {
      query["Chart"] = request.chart;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChartRelease",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChartReleaseResponse>(await this.callApi(params, req, runtime), new $_model.ListChartReleaseResponse({}));
  }

  /**
   * Queries the versions of a chart in a chart repository.
   * 
   * @param request - ListChartReleaseRequest
   * @returns ListChartReleaseResponse
   */
  async listChartRelease(request: $_model.ListChartReleaseRequest): Promise<$_model.ListChartReleaseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChartReleaseWithOptions(request, runtime);
  }

  /**
   * Queries the chart repositories of a Container Registry instance.
   * 
   * @param request - ListChartRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListChartRepositoryResponse
   */
  async listChartRepositoryWithOptions(request: $_model.ListChartRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListChartRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.repoStatus)) {
      query["RepoStatus"] = request.repoStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListChartRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.ListChartRepositoryResponse({}));
  }

  /**
   * Queries the chart repositories of a Container Registry instance.
   * 
   * @param request - ListChartRepositoryRequest
   * @returns ListChartRepositoryResponse
   */
  async listChartRepository(request: $_model.ListChartRepositoryRequest): Promise<$_model.ListChartRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listChartRepositoryWithOptions(request, runtime);
  }

  /**
   * Queries the historical events of an event rule.
   * 
   * @param request - ListEventCenterRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventCenterRecordResponse
   */
  async listEventCenterRecordWithOptions(request: $_model.ListEventCenterRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEventCenterRecordResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventCenterRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEventCenterRecordResponse>(await this.callApi(params, req, runtime), new $_model.ListEventCenterRecordResponse({}));
  }

  /**
   * Queries the historical events of an event rule.
   * 
   * @param request - ListEventCenterRecordRequest
   * @returns ListEventCenterRecordResponse
   */
  async listEventCenterRecord(request: $_model.ListEventCenterRecordRequest): Promise<$_model.ListEventCenterRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEventCenterRecordWithOptions(request, runtime);
  }

  /**
   * Queries the names of event notification rules.
   * 
   * @param request - ListEventCenterRuleNameRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEventCenterRuleNameResponse
   */
  async listEventCenterRuleNameWithOptions(request: $_model.ListEventCenterRuleNameRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListEventCenterRuleNameResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEventCenterRuleName",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListEventCenterRuleNameResponse>(await this.callApi(params, req, runtime), new $_model.ListEventCenterRuleNameResponse({}));
  }

  /**
   * Queries the names of event notification rules.
   * 
   * @param request - ListEventCenterRuleNameRequest
   * @returns ListEventCenterRuleNameResponse
   */
  async listEventCenterRuleName(request: $_model.ListEventCenterRuleNameRequest): Promise<$_model.ListEventCenterRuleNameResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listEventCenterRuleNameWithOptions(request, runtime);
  }

  /**
   * Queries Container Registry instances.
   * 
   * @param request - ListInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceResponse
   */
  async listInstanceWithOptions(request: $_model.ListInstanceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstance",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceResponse({}));
  }

  /**
   * Queries Container Registry instances.
   * 
   * @param request - ListInstanceRequest
   * @returns ListInstanceResponse
   */
  async listInstance(request: $_model.ListInstanceRequest): Promise<$_model.ListInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceWithOptions(request, runtime);
  }

  /**
   * Queries the endpoints of a Container Registry instance.
   * 
   * @param request - ListInstanceEndpointRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceEndpointResponse
   */
  async listInstanceEndpointWithOptions(request: $_model.ListInstanceEndpointRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceEndpointResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    if (!$dara.isNull(request.summary)) {
      query["Summary"] = request.summary;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceEndpoint",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceEndpointResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceEndpointResponse({}));
  }

  /**
   * Queries the endpoints of a Container Registry instance.
   * 
   * @param request - ListInstanceEndpointRequest
   * @returns ListInstanceEndpointResponse
   */
  async listInstanceEndpoint(request: $_model.ListInstanceEndpointRequest): Promise<$_model.ListInstanceEndpointResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceEndpointWithOptions(request, runtime);
  }

  /**
   * Queries regions in which you can create Container Registry instances.
   * 
   * @param request - ListInstanceRegionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceRegionResponse
   */
  async listInstanceRegionWithOptions(request: $_model.ListInstanceRegionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstanceRegionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceRegion",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstanceRegionResponse>(await this.callApi(params, req, runtime), new $_model.ListInstanceRegionResponse({}));
  }

  /**
   * Queries regions in which you can create Container Registry instances.
   * 
   * @param request - ListInstanceRegionRequest
   * @returns ListInstanceRegionResponse
   */
  async listInstanceRegion(request: $_model.ListInstanceRegionRequest): Promise<$_model.ListInstanceRegionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstanceRegionWithOptions(request, runtime);
  }

  /**
   * Queries namespaces in a Container Registry instance.
   * 
   * @param request - ListNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNamespaceResponse
   */
  async listNamespaceWithOptions(request: $_model.ListNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.namespaceStatus)) {
      query["NamespaceStatus"] = request.namespaceStatus;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.ListNamespaceResponse({}));
  }

  /**
   * Queries namespaces in a Container Registry instance.
   * 
   * @param request - ListNamespaceRequest
   * @returns ListNamespaceResponse
   */
  async listNamespace(request: $_model.ListNamespaceRequest): Promise<$_model.ListNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listNamespaceWithOptions(request, runtime);
  }

  /**
   * Queries image building records of an image repository.
   * 
   * @param request - ListRepoBuildRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoBuildRecordResponse
   */
  async listRepoBuildRecordWithOptions(request: $_model.ListRepoBuildRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepoBuildRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoBuildRecord",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepoBuildRecordResponse>(await this.callApi(params, req, runtime), new $_model.ListRepoBuildRecordResponse({}));
  }

  /**
   * Queries image building records of an image repository.
   * 
   * @param request - ListRepoBuildRecordRequest
   * @returns ListRepoBuildRecordResponse
   */
  async listRepoBuildRecord(request: $_model.ListRepoBuildRecordRequest): Promise<$_model.ListRepoBuildRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoBuildRecordWithOptions(request, runtime);
  }

  /**
   * Queries the log of an image building record.
   * 
   * @param request - ListRepoBuildRecordLogRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoBuildRecordLogResponse
   */
  async listRepoBuildRecordLogWithOptions(request: $_model.ListRepoBuildRecordLogRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepoBuildRecordLogResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildRecordId)) {
      query["BuildRecordId"] = request.buildRecordId;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoBuildRecordLog",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepoBuildRecordLogResponse>(await this.callApi(params, req, runtime), new $_model.ListRepoBuildRecordLogResponse({}));
  }

  /**
   * Queries the log of an image building record.
   * 
   * @param request - ListRepoBuildRecordLogRequest
   * @returns ListRepoBuildRecordLogResponse
   */
  async listRepoBuildRecordLog(request: $_model.ListRepoBuildRecordLogRequest): Promise<$_model.ListRepoBuildRecordLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoBuildRecordLogWithOptions(request, runtime);
  }

  /**
   * Queries image building rules of a repository.
   * 
   * @param request - ListRepoBuildRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoBuildRuleResponse
   */
  async listRepoBuildRuleWithOptions(request: $_model.ListRepoBuildRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepoBuildRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListRepoBuildRuleResponse({}));
  }

  /**
   * Queries image building rules of a repository.
   * 
   * @param request - ListRepoBuildRuleRequest
   * @returns ListRepoBuildRuleResponse
   */
  async listRepoBuildRule(request: $_model.ListRepoBuildRuleRequest): Promise<$_model.ListRepoBuildRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoBuildRuleWithOptions(request, runtime);
  }

  /**
   * Queries image synchronization rules of a repository.
   * 
   * @param request - ListRepoSyncRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoSyncRuleResponse
   */
  async listRepoSyncRuleWithOptions(request: $_model.ListRepoSyncRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepoSyncRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.targetInstanceId)) {
      query["TargetInstanceId"] = request.targetInstanceId;
    }

    if (!$dara.isNull(request.targetRegionId)) {
      query["TargetRegionId"] = request.targetRegionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoSyncRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepoSyncRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListRepoSyncRuleResponse({}));
  }

  /**
   * Queries image synchronization rules of a repository.
   * 
   * @param request - ListRepoSyncRuleRequest
   * @returns ListRepoSyncRuleResponse
   */
  async listRepoSyncRule(request: $_model.ListRepoSyncRuleRequest): Promise<$_model.ListRepoSyncRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoSyncRuleWithOptions(request, runtime);
  }

  /**
   * Queries image synchronization tasks in an image repository.
   * 
   * @param request - ListRepoSyncTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoSyncTaskResponse
   */
  async listRepoSyncTaskWithOptions(request: $_model.ListRepoSyncTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepoSyncTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.syncRecordId)) {
      query["SyncRecordId"] = request.syncRecordId;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoSyncTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepoSyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListRepoSyncTaskResponse({}));
  }

  /**
   * Queries image synchronization tasks in an image repository.
   * 
   * @param request - ListRepoSyncTaskRequest
   * @returns ListRepoSyncTaskResponse
   */
  async listRepoSyncTask(request: $_model.ListRepoSyncTaskRequest): Promise<$_model.ListRepoSyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoSyncTaskWithOptions(request, runtime);
  }

  /**
   * Queries image tags in a repository.
   * 
   * @param request - ListRepoTagRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoTagResponse
   */
  async listRepoTagWithOptions(request: $_model.ListRepoTagRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepoTagResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoTag",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepoTagResponse>(await this.callApi(params, req, runtime), new $_model.ListRepoTagResponse({}));
  }

  /**
   * Queries image tags in a repository.
   * 
   * @param request - ListRepoTagRequest
   * @returns ListRepoTagResponse
   */
  async listRepoTag(request: $_model.ListRepoTagRequest): Promise<$_model.ListRepoTagResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoTagWithOptions(request, runtime);
  }

  /**
   * Queries the results of a security scan that is created for an image tag.
   * 
   * @param request - ListRepoTagScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoTagScanResultResponse
   */
  async listRepoTagScanResultWithOptions(request: $_model.ListRepoTagScanResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepoTagScanResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.digest)) {
      query["Digest"] = request.digest;
    }

    if (!$dara.isNull(request.filterValue)) {
      query["FilterValue"] = request.filterValue;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.scanTaskId)) {
      query["ScanTaskId"] = request.scanTaskId;
    }

    if (!$dara.isNull(request.scanType)) {
      query["ScanType"] = request.scanType;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.vulQueryKey)) {
      query["VulQueryKey"] = request.vulQueryKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoTagScanResult",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepoTagScanResultResponse>(await this.callApi(params, req, runtime), new $_model.ListRepoTagScanResultResponse({}));
  }

  /**
   * Queries the results of a security scan that is created for an image tag.
   * 
   * @param request - ListRepoTagScanResultRequest
   * @returns ListRepoTagScanResultResponse
   */
  async listRepoTagScanResult(request: $_model.ListRepoTagScanResultRequest): Promise<$_model.ListRepoTagScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoTagScanResultWithOptions(request, runtime);
  }

  /**
   * Queries the triggers of a repository.
   * 
   * @param request - ListRepoTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepoTriggerResponse
   */
  async listRepoTriggerWithOptions(request: $_model.ListRepoTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepoTriggerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepoTrigger",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepoTriggerResponse>(await this.callApi(params, req, runtime), new $_model.ListRepoTriggerResponse({}));
  }

  /**
   * Queries the triggers of a repository.
   * 
   * @param request - ListRepoTriggerRequest
   * @returns ListRepoTriggerResponse
   */
  async listRepoTrigger(request: $_model.ListRepoTriggerRequest): Promise<$_model.ListRepoTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepoTriggerWithOptions(request, runtime);
  }

  /**
   * Queries image repositories.
   * 
   * @param request - ListRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRepositoryResponse
   */
  async listRepositoryWithOptions(request: $_model.ListRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.repoStatus)) {
      query["RepoStatus"] = request.repoStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.ListRepositoryResponse({}));
  }

  /**
   * Queries image repositories.
   * 
   * @param request - ListRepositoryRequest
   * @returns ListRepositoryResponse
   */
  async listRepository(request: $_model.ListRepositoryRequest): Promise<$_model.ListRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listRepositoryWithOptions(request, runtime);
  }

  /**
   * Queries the baseline risks of a scan task by page.
   * 
   * @remarks
   * Before you call this operation, use a Security Center scan engine to scan the image.
   * 
   * @param request - ListScanBaselineByTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScanBaselineByTaskResponse
   */
  async listScanBaselineByTaskWithOptions(request: $_model.ListScanBaselineByTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScanBaselineByTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScanBaselineByTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScanBaselineByTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListScanBaselineByTaskResponse({}));
  }

  /**
   * Queries the baseline risks of a scan task by page.
   * 
   * @remarks
   * Before you call this operation, use a Security Center scan engine to scan the image.
   * 
   * @param request - ListScanBaselineByTaskRequest
   * @returns ListScanBaselineByTaskResponse
   */
  async listScanBaselineByTask(request: $_model.ListScanBaselineByTaskRequest): Promise<$_model.ListScanBaselineByTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScanBaselineByTaskWithOptions(request, runtime);
  }

  /**
   * Queries the malicious files of a scan task by page.
   * 
   * @remarks
   * Before you call this operation, use a Security Center scan engine to scan the image.
   * 
   * @param request - ListScanMaliciousFileByTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScanMaliciousFileByTaskResponse
   */
  async listScanMaliciousFileByTaskWithOptions(request: $_model.ListScanMaliciousFileByTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScanMaliciousFileByTaskResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScanMaliciousFileByTask",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScanMaliciousFileByTaskResponse>(await this.callApi(params, req, runtime), new $_model.ListScanMaliciousFileByTaskResponse({}));
  }

  /**
   * Queries the malicious files of a scan task by page.
   * 
   * @remarks
   * Before you call this operation, use a Security Center scan engine to scan the image.
   * 
   * @param request - ListScanMaliciousFileByTaskRequest
   * @returns ListScanMaliciousFileByTaskResponse
   */
  async listScanMaliciousFileByTask(request: $_model.ListScanMaliciousFileByTaskRequest): Promise<$_model.ListScanMaliciousFileByTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScanMaliciousFileByTaskWithOptions(request, runtime);
  }

  /**
   * Lists the scan rules.
   * 
   * @remarks
   * Lists the scan rules.
   * 
   * @param request - ListScanRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListScanRuleResponse
   */
  async listScanRuleWithOptions(request: $_model.ListScanRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListScanRuleResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListScanRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListScanRuleResponse>(await this.callApi(params, req, runtime), new $_model.ListScanRuleResponse({}));
  }

  /**
   * Lists the scan rules.
   * 
   * @remarks
   * Lists the scan rules.
   * 
   * @param request - ListScanRuleRequest
   * @returns ListScanRuleResponse
   */
  async listScanRule(request: $_model.ListScanRuleRequest): Promise<$_model.ListScanRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listScanRuleWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to cloud resources. Instance resources are supported.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags that are added to cloud resources. Instance resources are supported.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Resets the logon password of a Container Registry instance.
   * 
   * @param request - ResetLoginPasswordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResetLoginPasswordResponse
   */
  async resetLoginPasswordWithOptions(request: $_model.ResetLoginPasswordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResetLoginPasswordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResetLoginPassword",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResetLoginPasswordResponse>(await this.callApi(params, req, runtime), new $_model.ResetLoginPasswordResponse({}));
  }

  /**
   * Resets the logon password of a Container Registry instance.
   * 
   * @param request - ResetLoginPasswordRequest
   * @returns ResetLoginPasswordResponse
   */
  async resetLoginPassword(request: $_model.ResetLoginPasswordRequest): Promise<$_model.ResetLoginPasswordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resetLoginPasswordWithOptions(request, runtime);
  }

  /**
   * Adds tags to resources. Instance resources are supported.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.TagResourcesResponse({}));
  }

  /**
   * Adds tags to resources. Instance resources are supported.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources. Instance resources are supported.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UntagResourcesResponse>(await this.callApi(params, req, runtime), new $_model.UntagResourcesResponse({}));
  }

  /**
   * Removes tags from resources. Instance resources are supported.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates a lifecycle management rule of an artifact.
   * 
   * @param request - UpdateArtifactLifecycleRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateArtifactLifecycleRuleResponse
   */
  async updateArtifactLifecycleRuleWithOptions(request: $_model.UpdateArtifactLifecycleRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateArtifactLifecycleRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auto)) {
      query["Auto"] = request.auto;
    }

    if (!$dara.isNull(request.enableDeleteTag)) {
      query["EnableDeleteTag"] = request.enableDeleteTag;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.retentionTagCount)) {
      query["RetentionTagCount"] = request.retentionTagCount;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.scheduleTime)) {
      query["ScheduleTime"] = request.scheduleTime;
    }

    if (!$dara.isNull(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.tagRegexp)) {
      query["TagRegexp"] = request.tagRegexp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateArtifactLifecycleRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateArtifactLifecycleRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateArtifactLifecycleRuleResponse({}));
  }

  /**
   * Updates a lifecycle management rule of an artifact.
   * 
   * @param request - UpdateArtifactLifecycleRuleRequest
   * @returns UpdateArtifactLifecycleRuleResponse
   */
  async updateArtifactLifecycleRule(request: $_model.UpdateArtifactLifecycleRuleRequest): Promise<$_model.UpdateArtifactLifecycleRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateArtifactLifecycleRuleWithOptions(request, runtime);
  }

  /**
   * Updates an artifact subscription rule.
   * 
   * @param request - UpdateArtifactSubscriptionRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateArtifactSubscriptionRuleResponse
   */
  async updateArtifactSubscriptionRuleWithOptions(request: $_model.UpdateArtifactSubscriptionRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateArtifactSubscriptionRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.accelerate)) {
      query["Accelerate"] = request.accelerate;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    if (!$dara.isNull(request.override)) {
      query["Override"] = request.override;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.sourceNamespaceName)) {
      query["SourceNamespaceName"] = request.sourceNamespaceName;
    }

    if (!$dara.isNull(request.sourceProvider)) {
      query["SourceProvider"] = request.sourceProvider;
    }

    if (!$dara.isNull(request.sourceRepoName)) {
      query["SourceRepoName"] = request.sourceRepoName;
    }

    if (!$dara.isNull(request.tagCount)) {
      query["TagCount"] = request.tagCount;
    }

    if (!$dara.isNull(request.tagRegexp)) {
      query["TagRegexp"] = request.tagRegexp;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateArtifactSubscriptionRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateArtifactSubscriptionRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateArtifactSubscriptionRuleResponse({}));
  }

  /**
   * Updates an artifact subscription rule.
   * 
   * @param request - UpdateArtifactSubscriptionRuleRequest
   * @returns UpdateArtifactSubscriptionRuleResponse
   */
  async updateArtifactSubscriptionRule(request: $_model.UpdateArtifactSubscriptionRuleRequest): Promise<$_model.UpdateArtifactSubscriptionRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateArtifactSubscriptionRuleWithOptions(request, runtime);
  }

  /**
   * Updates the information about a delivery chain, such as the node execution sequence of the delivery chain.
   * 
   * @param request - UpdateChainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChainResponse
   */
  async updateChainWithOptions(request: $_model.UpdateChainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateChainResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.chainConfig)) {
      query["ChainConfig"] = request.chainConfig;
    }

    if (!$dara.isNull(request.chainId)) {
      query["ChainId"] = request.chainId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.scopeExclude)) {
      query["ScopeExclude"] = request.scopeExclude;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateChain",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateChainResponse>(await this.callApi(params, req, runtime), new $_model.UpdateChainResponse({}));
  }

  /**
   * Updates the information about a delivery chain, such as the node execution sequence of the delivery chain.
   * 
   * @param request - UpdateChainRequest
   * @returns UpdateChainResponse
   */
  async updateChain(request: $_model.UpdateChainRequest): Promise<$_model.UpdateChainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateChainWithOptions(request, runtime);
  }

  /**
   * Updates a chart namespace.
   * 
   * @param request - UpdateChartNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChartNamespaceResponse
   */
  async updateChartNamespaceWithOptions(request: $_model.UpdateChartNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateChartNamespaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoCreateRepo)) {
      query["AutoCreateRepo"] = request.autoCreateRepo;
    }

    if (!$dara.isNull(request.defaultRepoType)) {
      query["DefaultRepoType"] = request.defaultRepoType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateChartNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateChartNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateChartNamespaceResponse({}));
  }

  /**
   * Updates a chart namespace.
   * 
   * @param request - UpdateChartNamespaceRequest
   * @returns UpdateChartNamespaceResponse
   */
  async updateChartNamespace(request: $_model.UpdateChartNamespaceRequest): Promise<$_model.UpdateChartNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateChartNamespaceWithOptions(request, runtime);
  }

  /**
   * Updates a chart repository of a Container Registry instance.
   * 
   * @param request - UpdateChartRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateChartRepositoryResponse
   */
  async updateChartRepositoryWithOptions(request: $_model.UpdateChartRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateChartRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.repoType)) {
      query["RepoType"] = request.repoType;
    }

    if (!$dara.isNull(request.summary)) {
      query["Summary"] = request.summary;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateChartRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateChartRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateChartRepositoryResponse({}));
  }

  /**
   * Updates a chart repository of a Container Registry instance.
   * 
   * @param request - UpdateChartRepositoryRequest
   * @returns UpdateChartRepositoryResponse
   */
  async updateChartRepository(request: $_model.UpdateChartRepositoryRequest): Promise<$_model.UpdateChartRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateChartRepositoryWithOptions(request, runtime);
  }

  /**
   * Updates an event notification rule.
   * 
   * @param tmpReq - UpdateEventCenterRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEventCenterRuleResponse
   */
  async updateEventCenterRuleWithOptions(tmpReq: $_model.UpdateEventCenterRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateEventCenterRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateEventCenterRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.namespaces)) {
      request.namespacesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaces, "Namespaces", "json");
    }

    if (!$dara.isNull(tmpReq.repoNames)) {
      request.repoNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repoNames, "RepoNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.eventChannel)) {
      query["EventChannel"] = request.eventChannel;
    }

    if (!$dara.isNull(request.eventConfig)) {
      query["EventConfig"] = request.eventConfig;
    }

    if (!$dara.isNull(request.eventScope)) {
      query["EventScope"] = request.eventScope;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespacesShrink)) {
      query["Namespaces"] = request.namespacesShrink;
    }

    if (!$dara.isNull(request.repoNamesShrink)) {
      query["RepoNames"] = request.repoNamesShrink;
    }

    if (!$dara.isNull(request.repoTagFilterPattern)) {
      query["RepoTagFilterPattern"] = request.repoTagFilterPattern;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEventCenterRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateEventCenterRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateEventCenterRuleResponse({}));
  }

  /**
   * Updates an event notification rule.
   * 
   * @param request - UpdateEventCenterRuleRequest
   * @returns UpdateEventCenterRuleResponse
   */
  async updateEventCenterRule(request: $_model.UpdateEventCenterRuleRequest): Promise<$_model.UpdateEventCenterRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateEventCenterRuleWithOptions(request, runtime);
  }

  /**
   * Updates the status of an instance endpoint.
   * 
   * @param request - UpdateInstanceEndpointStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstanceEndpointStatusResponse
   */
  async updateInstanceEndpointStatusWithOptions(request: $_model.UpdateInstanceEndpointStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstanceEndpointStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.endpointType)) {
      query["EndpointType"] = request.endpointType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.moduleName)) {
      query["ModuleName"] = request.moduleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstanceEndpointStatus",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstanceEndpointStatusResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstanceEndpointStatusResponse({}));
  }

  /**
   * Updates the status of an instance endpoint.
   * 
   * @param request - UpdateInstanceEndpointStatusRequest
   * @returns UpdateInstanceEndpointStatusResponse
   */
  async updateInstanceEndpointStatus(request: $_model.UpdateInstanceEndpointStatusRequest): Promise<$_model.UpdateInstanceEndpointStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstanceEndpointStatusWithOptions(request, runtime);
  }

  /**
   * Updates a namespace.
   * 
   * @param tmpReq - UpdateNamespaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNamespaceResponse
   */
  async updateNamespaceWithOptions(tmpReq: $_model.UpdateNamespaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateNamespaceResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateNamespaceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.defaultRepoConfiguration)) {
      request.defaultRepoConfigurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.defaultRepoConfiguration, "DefaultRepoConfiguration", "json");
    }

    let query = { };
    if (!$dara.isNull(request.autoCreateRepo)) {
      query["AutoCreateRepo"] = request.autoCreateRepo;
    }

    if (!$dara.isNull(request.defaultRepoConfigurationShrink)) {
      query["DefaultRepoConfiguration"] = request.defaultRepoConfigurationShrink;
    }

    if (!$dara.isNull(request.defaultRepoType)) {
      query["DefaultRepoType"] = request.defaultRepoType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespaceName)) {
      query["NamespaceName"] = request.namespaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateNamespace",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateNamespaceResponse>(await this.callApi(params, req, runtime), new $_model.UpdateNamespaceResponse({}));
  }

  /**
   * Updates a namespace.
   * 
   * @param request - UpdateNamespaceRequest
   * @returns UpdateNamespaceResponse
   */
  async updateNamespace(request: $_model.UpdateNamespaceRequest): Promise<$_model.UpdateNamespaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateNamespaceWithOptions(request, runtime);
  }

  /**
   * Updates an image building rule for a repository.
   * 
   * @param request - UpdateRepoBuildRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRepoBuildRuleResponse
   */
  async updateRepoBuildRuleWithOptions(request: $_model.UpdateRepoBuildRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRepoBuildRuleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buildArgs)) {
      query["BuildArgs"] = request.buildArgs;
    }

    if (!$dara.isNull(request.buildRuleId)) {
      query["BuildRuleId"] = request.buildRuleId;
    }

    if (!$dara.isNull(request.dockerfileLocation)) {
      query["DockerfileLocation"] = request.dockerfileLocation;
    }

    if (!$dara.isNull(request.dockerfileName)) {
      query["DockerfileName"] = request.dockerfileName;
    }

    if (!$dara.isNull(request.imageTag)) {
      query["ImageTag"] = request.imageTag;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.platforms)) {
      query["Platforms"] = request.platforms;
    }

    if (!$dara.isNull(request.pushName)) {
      query["PushName"] = request.pushName;
    }

    if (!$dara.isNull(request.pushType)) {
      query["PushType"] = request.pushType;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRepoBuildRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRepoBuildRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRepoBuildRuleResponse({}));
  }

  /**
   * Updates an image building rule for a repository.
   * 
   * @param request - UpdateRepoBuildRuleRequest
   * @returns UpdateRepoBuildRuleResponse
   */
  async updateRepoBuildRule(request: $_model.UpdateRepoBuildRuleRequest): Promise<$_model.UpdateRepoBuildRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRepoBuildRuleWithOptions(request, runtime);
  }

  /**
   * Updates the URL of the source code repository that is bound to an image repository.
   * 
   * @param request - UpdateRepoSourceCodeRepoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRepoSourceCodeRepoResponse
   */
  async updateRepoSourceCodeRepoWithOptions(request: $_model.UpdateRepoSourceCodeRepoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRepoSourceCodeRepoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoBuild)) {
      query["AutoBuild"] = request.autoBuild;
    }

    if (!$dara.isNull(request.codeRepoId)) {
      query["CodeRepoId"] = request.codeRepoId;
    }

    if (!$dara.isNull(request.codeRepoName)) {
      query["CodeRepoName"] = request.codeRepoName;
    }

    if (!$dara.isNull(request.codeRepoNamespaceName)) {
      query["CodeRepoNamespaceName"] = request.codeRepoNamespaceName;
    }

    if (!$dara.isNull(request.codeRepoType)) {
      query["CodeRepoType"] = request.codeRepoType;
    }

    if (!$dara.isNull(request.disableCacheBuild)) {
      query["DisableCacheBuild"] = request.disableCacheBuild;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.overseaBuild)) {
      query["OverseaBuild"] = request.overseaBuild;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRepoSourceCodeRepo",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRepoSourceCodeRepoResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRepoSourceCodeRepoResponse({}));
  }

  /**
   * Updates the URL of the source code repository that is bound to an image repository.
   * 
   * @param request - UpdateRepoSourceCodeRepoRequest
   * @returns UpdateRepoSourceCodeRepoResponse
   */
  async updateRepoSourceCodeRepo(request: $_model.UpdateRepoSourceCodeRepoRequest): Promise<$_model.UpdateRepoSourceCodeRepoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRepoSourceCodeRepoWithOptions(request, runtime);
  }

  /**
   * Updates a trigger of an image repository.
   * 
   * @param request - UpdateRepoTriggerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRepoTriggerResponse
   */
  async updateRepoTriggerWithOptions(request: $_model.UpdateRepoTriggerRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRepoTriggerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.triggerId)) {
      query["TriggerId"] = request.triggerId;
    }

    if (!$dara.isNull(request.triggerName)) {
      query["TriggerName"] = request.triggerName;
    }

    if (!$dara.isNull(request.triggerTag)) {
      query["TriggerTag"] = request.triggerTag;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    if (!$dara.isNull(request.triggerUrl)) {
      query["TriggerUrl"] = request.triggerUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRepoTrigger",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRepoTriggerResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRepoTriggerResponse({}));
  }

  /**
   * Updates a trigger of an image repository.
   * 
   * @param request - UpdateRepoTriggerRequest
   * @returns UpdateRepoTriggerResponse
   */
  async updateRepoTrigger(request: $_model.UpdateRepoTriggerRequest): Promise<$_model.UpdateRepoTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRepoTriggerWithOptions(request, runtime);
  }

  /**
   * The ID of the request.
   * 
   * @param request - UpdateRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRepositoryResponse
   */
  async updateRepositoryWithOptions(request: $_model.UpdateRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.detail)) {
      query["Detail"] = request.detail;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    if (!$dara.isNull(request.repoName)) {
      query["RepoName"] = request.repoName;
    }

    if (!$dara.isNull(request.repoNamespaceName)) {
      query["RepoNamespaceName"] = request.repoNamespaceName;
    }

    if (!$dara.isNull(request.repoType)) {
      query["RepoType"] = request.repoType;
    }

    if (!$dara.isNull(request.summary)) {
      query["Summary"] = request.summary;
    }

    if (!$dara.isNull(request.tagImmutability)) {
      query["TagImmutability"] = request.tagImmutability;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRepository",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateRepositoryResponse({}));
  }

  /**
   * The ID of the request.
   * 
   * @param request - UpdateRepositoryRequest
   * @returns UpdateRepositoryResponse
   */
  async updateRepository(request: $_model.UpdateRepositoryRequest): Promise<$_model.UpdateRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateRepositoryWithOptions(request, runtime);
  }

  /**
   * Updates a scan rule.
   * 
   * @remarks
   * The whitelist of this API operation is available. [Submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket).
   * 
   * @param tmpReq - UpdateScanRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScanRuleResponse
   */
  async updateScanRuleWithOptions(tmpReq: $_model.UpdateScanRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScanRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateScanRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.namespaces)) {
      request.namespacesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.namespaces, "Namespaces", "json");
    }

    if (!$dara.isNull(tmpReq.repoNames)) {
      request.repoNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.repoNames, "RepoNames", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.namespacesShrink)) {
      query["Namespaces"] = request.namespacesShrink;
    }

    if (!$dara.isNull(request.repoNamesShrink)) {
      query["RepoNames"] = request.repoNamesShrink;
    }

    if (!$dara.isNull(request.repoTagFilterPattern)) {
      query["RepoTagFilterPattern"] = request.repoTagFilterPattern;
    }

    if (!$dara.isNull(request.ruleName)) {
      query["RuleName"] = request.ruleName;
    }

    if (!$dara.isNull(request.scanRuleId)) {
      query["ScanRuleId"] = request.scanRuleId;
    }

    if (!$dara.isNull(request.scanScope)) {
      query["ScanScope"] = request.scanScope;
    }

    if (!$dara.isNull(request.triggerType)) {
      query["TriggerType"] = request.triggerType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScanRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScanRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScanRuleResponse({}));
  }

  /**
   * Updates a scan rule.
   * 
   * @remarks
   * The whitelist of this API operation is available. [Submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket).
   * 
   * @param request - UpdateScanRuleRequest
   * @returns UpdateScanRuleResponse
   */
  async updateScanRule(request: $_model.UpdateScanRuleRequest): Promise<$_model.UpdateScanRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateScanRuleWithOptions(request, runtime);
  }

  /**
   * Updates a routing rule for an instance store domain name.
   * 
   * @remarks
   * The whitelist of this API operation is available. [Submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket).
   * 
   * @param tmpReq - UpdateStorageDomainRoutingRuleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStorageDomainRoutingRuleResponse
   */
  async updateStorageDomainRoutingRuleWithOptions(tmpReq: $_model.UpdateStorageDomainRoutingRuleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStorageDomainRoutingRuleResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStorageDomainRoutingRuleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.routes)) {
      request.routesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.routes, "Routes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.routesShrink)) {
      query["Routes"] = request.routesShrink;
    }

    if (!$dara.isNull(request.ruleId)) {
      query["RuleId"] = request.ruleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStorageDomainRoutingRule",
      version: "2018-12-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStorageDomainRoutingRuleResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStorageDomainRoutingRuleResponse({}));
  }

  /**
   * Updates a routing rule for an instance store domain name.
   * 
   * @remarks
   * The whitelist of this API operation is available. [Submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket).
   * 
   * @param request - UpdateStorageDomainRoutingRuleRequest
   * @returns UpdateStorageDomainRoutingRuleResponse
   */
  async updateStorageDomainRoutingRule(request: $_model.UpdateStorageDomainRoutingRuleRequest): Promise<$_model.UpdateStorageDomainRoutingRuleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStorageDomainRoutingRuleWithOptions(request, runtime);
  }

}
