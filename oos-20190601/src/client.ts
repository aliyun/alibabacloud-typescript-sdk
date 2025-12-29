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
    this._endpoint = this.getEndpoint("oos", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 分析仓库
   * 
   * @param request - AnalyzeGitRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AnalyzeGitRepositoryResponse
   */
  async analyzeGitRepositoryWithOptions(request: $_model.AnalyzeGitRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AnalyzeGitRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branch)) {
      query["Branch"] = request.branch;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repoFullName)) {
      query["RepoFullName"] = request.repoFullName;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AnalyzeGitRepository",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AnalyzeGitRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.AnalyzeGitRepositoryResponse({}));
  }

  /**
   * 分析仓库
   * 
   * @param request - AnalyzeGitRepositoryRequest
   * @returns AnalyzeGitRepositoryResponse
   */
  async analyzeGitRepository(request: $_model.AnalyzeGitRepositoryRequest): Promise<$_model.AnalyzeGitRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.analyzeGitRepositoryWithOptions(request, runtime);
  }

  /**
   * Cancels an execution.
   * 
   * @param request - CancelExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelExecutionResponse
   */
  async cancelExecutionWithOptions(request: $_model.CancelExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelExecutionResponse>(await this.callApi(params, req, runtime), new $_model.CancelExecutionResponse({}));
  }

  /**
   * Cancels an execution.
   * 
   * @param request - CancelExecutionRequest
   * @returns CancelExecutionResponse
   */
  async cancelExecution(request: $_model.CancelExecutionRequest): Promise<$_model.CancelExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelExecutionWithOptions(request, runtime);
  }

  /**
   * Modifies the resource group to which a cloud resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: $_model.ChangeResourceGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeResourceGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
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

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2019-06-01",
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
   * Modifies the resource group to which a cloud resource belongs.
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: $_model.ChangeResourceGroupRequest): Promise<$_model.ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  /**
   * 检测仓库中文件是否存在
   * 
   * @param request - CheckGitRepoFileExistsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckGitRepoFileExistsResponse
   */
  async checkGitRepoFileExistsWithOptions(request: $_model.CheckGitRepoFileExistsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckGitRepoFileExistsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branch)) {
      query["Branch"] = request.branch;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repoFullName)) {
      query["RepoFullName"] = request.repoFullName;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckGitRepoFileExists",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckGitRepoFileExistsResponse>(await this.callApi(params, req, runtime), new $_model.CheckGitRepoFileExistsResponse({}));
  }

  /**
   * 检测仓库中文件是否存在
   * 
   * @param request - CheckGitRepoFileExistsRequest
   * @returns CheckGitRepoFileExistsResponse
   */
  async checkGitRepoFileExists(request: $_model.CheckGitRepoFileExistsRequest): Promise<$_model.CheckGitRepoFileExistsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkGitRepoFileExistsWithOptions(request, runtime);
  }

  /**
   * 检测仓库是否存在
   * 
   * @param request - CheckGitRepositoryExistsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckGitRepositoryExistsResponse
   */
  async checkGitRepositoryExistsWithOptions(request: $_model.CheckGitRepositoryExistsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckGitRepositoryExistsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repoFullName)) {
      query["RepoFullName"] = request.repoFullName;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckGitRepositoryExists",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckGitRepositoryExistsResponse>(await this.callApi(params, req, runtime), new $_model.CheckGitRepositoryExistsResponse({}));
  }

  /**
   * 检测仓库是否存在
   * 
   * @param request - CheckGitRepositoryExistsRequest
   * @returns CheckGitRepositoryExistsResponse
   */
  async checkGitRepositoryExists(request: $_model.CheckGitRepositoryExistsRequest): Promise<$_model.CheckGitRepositoryExistsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkGitRepositoryExistsWithOptions(request, runtime);
  }

  /**
   * Continues deploying an application group when an error occurs for calling the DeployApplicationGroup operation. You can call this operation only for the applications which reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - ContinueDeployApplicationGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContinueDeployApplicationGroupResponse
   */
  async continueDeployApplicationGroupWithOptions(request: $_model.ContinueDeployApplicationGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ContinueDeployApplicationGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.deployParameters)) {
      query["DeployParameters"] = request.deployParameters;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ContinueDeployApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ContinueDeployApplicationGroupResponse>(await this.callApi(params, req, runtime), new $_model.ContinueDeployApplicationGroupResponse({}));
  }

  /**
   * Continues deploying an application group when an error occurs for calling the DeployApplicationGroup operation. You can call this operation only for the applications which reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - ContinueDeployApplicationGroupRequest
   * @returns ContinueDeployApplicationGroupResponse
   */
  async continueDeployApplicationGroup(request: $_model.ContinueDeployApplicationGroupRequest): Promise<$_model.ContinueDeployApplicationGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.continueDeployApplicationGroupWithOptions(request, runtime);
  }

  /**
   * Creates an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param tmpReq - CreateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationResponse
   */
  async createApplicationWithOptions(tmpReq: $_model.CreateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationResponse> {
    tmpReq.validate();
    let request = new $_model.CreateApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alarmConfig)) {
      request.alarmConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarmConfig, "AlarmConfig", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.alarmConfigShrink)) {
      query["AlarmConfig"] = request.alarmConfigShrink;
    }

    if (!$dara.isNull(request.applicationSource)) {
      query["ApplicationSource"] = request.applicationSource;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.serviceId)) {
      query["ServiceId"] = request.serviceId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplication",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationResponse({}));
  }

  /**
   * Creates an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - CreateApplicationRequest
   * @returns CreateApplicationResponse
   */
  async createApplication(request: $_model.CreateApplicationRequest): Promise<$_model.CreateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationWithOptions(request, runtime);
  }

  /**
   * Creates an application group. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - CreateApplicationGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateApplicationGroupResponse
   */
  async createApplicationGroupWithOptions(request: $_model.CreateApplicationGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateApplicationGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.cmsGroupId)) {
      query["CmsGroupId"] = request.cmsGroupId;
    }

    if (!$dara.isNull(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.importTagKey)) {
      query["ImportTagKey"] = request.importTagKey;
    }

    if (!$dara.isNull(request.importTagValue)) {
      query["ImportTagValue"] = request.importTagValue;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateApplicationGroupResponse>(await this.callApi(params, req, runtime), new $_model.CreateApplicationGroupResponse({}));
  }

  /**
   * Creates an application group. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - CreateApplicationGroupRequest
   * @returns CreateApplicationGroupResponse
   */
  async createApplicationGroup(request: $_model.CreateApplicationGroupRequest): Promise<$_model.CreateApplicationGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createApplicationGroupWithOptions(request, runtime);
  }

  /**
   * 创建仓库
   * 
   * @param request - CreateGitRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGitRepositoryResponse
   */
  async createGitRepositoryWithOptions(request: $_model.CreateGitRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGitRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.isPrivate)) {
      query["IsPrivate"] = request.isPrivate;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sourceRepoBranch)) {
      query["SourceRepoBranch"] = request.sourceRepoBranch;
    }

    if (!$dara.isNull(request.sourceRepoName)) {
      query["SourceRepoName"] = request.sourceRepoName;
    }

    if (!$dara.isNull(request.sourceRepoOwner)) {
      query["SourceRepoOwner"] = request.sourceRepoOwner;
    }

    if (!$dara.isNull(request.targetRepoName)) {
      query["TargetRepoName"] = request.targetRepoName;
    }

    if (!$dara.isNull(request.targetRepoOwner)) {
      query["TargetRepoOwner"] = request.targetRepoOwner;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGitRepository",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGitRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateGitRepositoryResponse({}));
  }

  /**
   * 创建仓库
   * 
   * @param request - CreateGitRepositoryRequest
   * @returns CreateGitRepositoryResponse
   */
  async createGitRepository(request: $_model.CreateGitRepositoryRequest): Promise<$_model.CreateGitRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createGitRepositoryWithOptions(request, runtime);
  }

  /**
   * Creates an O\\\\\\\\\\\\&M Item.
   * 
   * @param tmpReq - CreateOpsItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOpsItemResponse
   */
  async createOpsItemWithOptions(tmpReq: $_model.CreateOpsItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOpsItemResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOpsItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dedupString)) {
      query["DedupString"] = request.dedupString;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.solutions)) {
      query["Solutions"] = request.solutions;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOpsItem",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOpsItemResponse>(await this.callApi(params, req, runtime), new $_model.CreateOpsItemResponse({}));
  }

  /**
   * Creates an O\\\\\\\\\\\\&M Item.
   * 
   * @param request - CreateOpsItemRequest
   * @returns CreateOpsItemResponse
   */
  async createOpsItem(request: $_model.CreateOpsItemRequest): Promise<$_model.CreateOpsItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOpsItemWithOptions(request, runtime);
  }

  /**
   * Creates a common parameter.
   * 
   * @param tmpReq - CreateParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateParameterResponse
   */
  async createParameterWithOptions(tmpReq: $_model.CreateParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateParameterResponse> {
    tmpReq.validate();
    let request = new $_model.CreateParameterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.constraints)) {
      query["Constraints"] = request.constraints;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateParameterResponse>(await this.callApi(params, req, runtime), new $_model.CreateParameterResponse({}));
  }

  /**
   * Creates a common parameter.
   * 
   * @param request - CreateParameterRequest
   * @returns CreateParameterResponse
   */
  async createParameter(request: $_model.CreateParameterRequest): Promise<$_model.CreateParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createParameterWithOptions(request, runtime);
  }

  /**
   * Creates a patch baseline.
   * 
   * @param tmpReq - CreatePatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePatchBaselineResponse
   */
  async createPatchBaselineWithOptions(tmpReq: $_model.CreatePatchBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePatchBaselineResponse> {
    tmpReq.validate();
    let request = new $_model.CreatePatchBaselineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.approvedPatches)) {
      request.approvedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.approvedPatches, "ApprovedPatches", "json");
    }

    if (!$dara.isNull(tmpReq.rejectedPatches)) {
      request.rejectedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rejectedPatches, "RejectedPatches", "json");
    }

    if (!$dara.isNull(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.approvalRules)) {
      query["ApprovalRules"] = request.approvalRules;
    }

    if (!$dara.isNull(request.approvedPatchesShrink)) {
      query["ApprovedPatches"] = request.approvedPatchesShrink;
    }

    if (!$dara.isNull(request.approvedPatchesEnableNonSecurity)) {
      query["ApprovedPatchesEnableNonSecurity"] = request.approvedPatchesEnableNonSecurity;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.operationSystem)) {
      query["OperationSystem"] = request.operationSystem;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rejectedPatchesShrink)) {
      query["RejectedPatches"] = request.rejectedPatchesShrink;
    }

    if (!$dara.isNull(request.rejectedPatchesAction)) {
      query["RejectedPatchesAction"] = request.rejectedPatchesAction;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePatchBaselineResponse>(await this.callApi(params, req, runtime), new $_model.CreatePatchBaselineResponse({}));
  }

  /**
   * Creates a patch baseline.
   * 
   * @param request - CreatePatchBaselineRequest
   * @returns CreatePatchBaselineResponse
   */
  async createPatchBaseline(request: $_model.CreatePatchBaselineRequest): Promise<$_model.CreatePatchBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPatchBaselineWithOptions(request, runtime);
  }

  /**
   * Creates an encryption parameter. Make sure that you have the permissions to call this operation.
   * 
   * @param tmpReq - CreateSecretParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecretParameterResponse
   */
  async createSecretParameterWithOptions(tmpReq: $_model.CreateSecretParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateSecretParameterResponse> {
    tmpReq.validate();
    let request = new $_model.CreateSecretParameterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.constraints)) {
      query["Constraints"] = request.constraints;
    }

    if (!$dara.isNull(request.DKMSInstanceId)) {
      query["DKMSInstanceId"] = request.DKMSInstanceId;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.keyId)) {
      query["KeyId"] = request.keyId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateSecretParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateSecretParameterResponse>(await this.callApi(params, req, runtime), new $_model.CreateSecretParameterResponse({}));
  }

  /**
   * Creates an encryption parameter. Make sure that you have the permissions to call this operation.
   * 
   * @param request - CreateSecretParameterRequest
   * @returns CreateSecretParameterResponse
   */
  async createSecretParameter(request: $_model.CreateSecretParameterRequest): Promise<$_model.CreateSecretParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createSecretParameterWithOptions(request, runtime);
  }

  /**
   * Creates a desired-state configuration.
   * 
   * @param tmpReq - CreateStateConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateStateConfigurationResponse
   */
  async createStateConfigurationWithOptions(tmpReq: $_model.CreateStateConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateStateConfigurationResponse> {
    tmpReq.validate();
    let request = new $_model.CreateStateConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configureMode)) {
      query["ConfigureMode"] = request.configureMode;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scheduleExpression)) {
      query["ScheduleExpression"] = request.scheduleExpression;
    }

    if (!$dara.isNull(request.scheduleType)) {
      query["ScheduleType"] = request.scheduleType;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.targets)) {
      query["Targets"] = request.targets;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateStateConfiguration",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateStateConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.CreateStateConfigurationResponse({}));
  }

  /**
   * Creates a desired-state configuration.
   * 
   * @param request - CreateStateConfigurationRequest
   * @returns CreateStateConfigurationResponse
   */
  async createStateConfiguration(request: $_model.CreateStateConfigurationRequest): Promise<$_model.CreateStateConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createStateConfigurationWithOptions(request, runtime);
  }

  /**
   * Creates a template.
   * 
   * @param tmpReq - CreateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTemplateResponse
   */
  async createTemplateWithOptions(tmpReq: $_model.CreateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.CreateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.CreateTemplateResponse({}));
  }

  /**
   * Creates a template.
   * 
   * @param request - CreateTemplateRequest
   * @returns CreateTemplateResponse
   */
  async createTemplate(request: $_model.CreateTemplateRequest): Promise<$_model.CreateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - DeleteApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationResponse
   */
  async deleteApplicationWithOptions(request: $_model.DeleteApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.retainResource)) {
      query["RetainResource"] = request.retainResource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplication",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationResponse({}));
  }

  /**
   * Deletes an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - DeleteApplicationRequest
   * @returns DeleteApplicationResponse
   */
  async deleteApplication(request: $_model.DeleteApplicationRequest): Promise<$_model.DeleteApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationWithOptions(request, runtime);
  }

  /**
   * Deletes an application group. You can call this operation only for the application groups which reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - DeleteApplicationGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteApplicationGroupResponse
   */
  async deleteApplicationGroupWithOptions(request: $_model.DeleteApplicationGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteApplicationGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.retainResource)) {
      query["RetainResource"] = request.retainResource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteApplicationGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeleteApplicationGroupResponse({}));
  }

  /**
   * Deletes an application group. You can call this operation only for the application groups which reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - DeleteApplicationGroupRequest
   * @returns DeleteApplicationGroupResponse
   */
  async deleteApplicationGroup(request: $_model.DeleteApplicationGroupRequest): Promise<$_model.DeleteApplicationGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteApplicationGroupWithOptions(request, runtime);
  }

  /**
   * Deletes multiple executions.
   * 
   * @param request - DeleteExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExecutionsResponse
   */
  async deleteExecutionsWithOptions(request: $_model.DeleteExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteExecutionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.executionIds)) {
      query["ExecutionIds"] = request.executionIds;
    }

    if (!$dara.isNull(request.force)) {
      query["Force"] = request.force;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteExecutionsResponse({}));
  }

  /**
   * Deletes multiple executions.
   * 
   * @param request - DeleteExecutionsRequest
   * @returns DeleteExecutionsResponse
   */
  async deleteExecutions(request: $_model.DeleteExecutionsRequest): Promise<$_model.DeleteExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteExecutionsWithOptions(request, runtime);
  }

  /**
   * Deletes O\\\\\\&M Items.
   * 
   * @param request - DeleteOpsItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOpsItemsResponse
   */
  async deleteOpsItemsWithOptions(request: $_model.DeleteOpsItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOpsItemsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opsItemIds)) {
      query["OpsItemIds"] = request.opsItemIds;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOpsItems",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOpsItemsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOpsItemsResponse({}));
  }

  /**
   * Deletes O\\\\\\&M Items.
   * 
   * @param request - DeleteOpsItemsRequest
   * @returns DeleteOpsItemsResponse
   */
  async deleteOpsItems(request: $_model.DeleteOpsItemsRequest): Promise<$_model.DeleteOpsItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOpsItemsWithOptions(request, runtime);
  }

  /**
   * Deletes a common parameter.
   * 
   * @param request - DeleteParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteParameterResponse
   */
  async deleteParameterWithOptions(request: $_model.DeleteParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteParameterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteParameterResponse({}));
  }

  /**
   * Deletes a common parameter.
   * 
   * @param request - DeleteParameterRequest
   * @returns DeleteParameterResponse
   */
  async deleteParameter(request: $_model.DeleteParameterRequest): Promise<$_model.DeleteParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteParameterWithOptions(request, runtime);
  }

  /**
   * Deletes a patch baseline.
   * 
   * @param request - DeletePatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeletePatchBaselineResponse
   */
  async deletePatchBaselineWithOptions(request: $_model.DeletePatchBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeletePatchBaselineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeletePatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeletePatchBaselineResponse>(await this.callApi(params, req, runtime), new $_model.DeletePatchBaselineResponse({}));
  }

  /**
   * Deletes a patch baseline.
   * 
   * @param request - DeletePatchBaselineRequest
   * @returns DeletePatchBaselineResponse
   */
  async deletePatchBaseline(request: $_model.DeletePatchBaselineRequest): Promise<$_model.DeletePatchBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deletePatchBaselineWithOptions(request, runtime);
  }

  /**
   * Deletes an encryption parameter. Make sure that you have the permissions to call the DeleteSecret operation before you call this operation.
   * 
   * @param request - DeleteSecretParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecretParameterResponse
   */
  async deleteSecretParameterWithOptions(request: $_model.DeleteSecretParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteSecretParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSecretParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteSecretParameterResponse>(await this.callApi(params, req, runtime), new $_model.DeleteSecretParameterResponse({}));
  }

  /**
   * Deletes an encryption parameter. Make sure that you have the permissions to call the DeleteSecret operation before you call this operation.
   * 
   * @param request - DeleteSecretParameterRequest
   * @returns DeleteSecretParameterResponse
   */
  async deleteSecretParameter(request: $_model.DeleteSecretParameterRequest): Promise<$_model.DeleteSecretParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteSecretParameterWithOptions(request, runtime);
  }

  /**
   * Deletes multiple desired-state configurations at a time.
   * 
   * @param request - DeleteStateConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteStateConfigurationsResponse
   */
  async deleteStateConfigurationsWithOptions(request: $_model.DeleteStateConfigurationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteStateConfigurationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.stateConfigurationIds)) {
      query["StateConfigurationIds"] = request.stateConfigurationIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteStateConfigurations",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteStateConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.DeleteStateConfigurationsResponse({}));
  }

  /**
   * Deletes multiple desired-state configurations at a time.
   * 
   * @param request - DeleteStateConfigurationsRequest
   * @returns DeleteStateConfigurationsResponse
   */
  async deleteStateConfigurations(request: $_model.DeleteStateConfigurationsRequest): Promise<$_model.DeleteStateConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteStateConfigurationsWithOptions(request, runtime);
  }

  /**
   * Deletes a template.
   * 
   * @param request - DeleteTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(request: $_model.DeleteTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoDeleteExecutions)) {
      query["AutoDeleteExecutions"] = request.autoDeleteExecutions;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplateResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplateResponse({}));
  }

  /**
   * Deletes a template.
   * 
   * @param request - DeleteTemplateRequest
   * @returns DeleteTemplateResponse
   */
  async deleteTemplate(request: $_model.DeleteTemplateRequest): Promise<$_model.DeleteTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplateWithOptions(request, runtime);
  }

  /**
   * Deletes multiple templates.
   * 
   * @param request - DeleteTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTemplatesResponse
   */
  async deleteTemplatesWithOptions(request: $_model.DeleteTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTemplatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.autoDeleteExecutions)) {
      query["AutoDeleteExecutions"] = request.autoDeleteExecutions;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateNames)) {
      query["TemplateNames"] = request.templateNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTemplates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTemplatesResponse({}));
  }

  /**
   * Deletes multiple templates.
   * 
   * @param request - DeleteTemplatesRequest
   * @returns DeleteTemplatesResponse
   */
  async deleteTemplates(request: $_model.DeleteTemplatesRequest): Promise<$_model.DeleteTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteTemplatesWithOptions(request, runtime);
  }

  /**
   * Deploys an application group. You can call this operation only for the applications which reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - DeployApplicationGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployApplicationGroupResponse
   */
  async deployApplicationGroupWithOptions(request: $_model.DeployApplicationGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeployApplicationGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.deployParameters)) {
      query["DeployParameters"] = request.deployParameters;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.revisionId)) {
      query["RevisionId"] = request.revisionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeployApplicationGroupResponse>(await this.callApi(params, req, runtime), new $_model.DeployApplicationGroupResponse({}));
  }

  /**
   * Deploys an application group. You can call this operation only for the applications which reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - DeployApplicationGroupRequest
   * @returns DeployApplicationGroupResponse
   */
  async deployApplicationGroup(request: $_model.DeployApplicationGroupRequest): Promise<$_model.DeployApplicationGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deployApplicationGroupWithOptions(request, runtime);
  }

  /**
   * 查询应用分组资源成本
   * 
   * @param request - DescribeApplicationGroupBillRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApplicationGroupBillResponse
   */
  async describeApplicationGroupBillWithOptions(request: $_model.DescribeApplicationGroupBillRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeApplicationGroupBillResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.billingCycle)) {
      query["BillingCycle"] = request.billingCycle;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApplicationGroupBill",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeApplicationGroupBillResponse>(await this.callApi(params, req, runtime), new $_model.DescribeApplicationGroupBillResponse({}));
  }

  /**
   * 查询应用分组资源成本
   * 
   * @param request - DescribeApplicationGroupBillRequest
   * @returns DescribeApplicationGroupBillResponse
   */
  async describeApplicationGroupBill(request: $_model.DescribeApplicationGroupBillRequest): Promise<$_model.DescribeApplicationGroupBillResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApplicationGroupBillWithOptions(request, runtime);
  }

  /**
   * Queries supported regions.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: $_model.DescribeRegionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeRegionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeRegionsResponse>(await this.callApi(params, req, runtime), new $_model.DescribeRegionsResponse({}));
  }

  /**
   * Queries supported regions.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: $_model.DescribeRegionsRequest): Promise<$_model.DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries the Resource Access Management (RAM) policy required for template execution.
   * 
   * @param request - GenerateExecutionPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateExecutionPolicyResponse
   */
  async generateExecutionPolicyWithOptions(request: $_model.GenerateExecutionPolicyRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateExecutionPolicyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.ramRole)) {
      query["RamRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateExecutionPolicy",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateExecutionPolicyResponse>(await this.callApi(params, req, runtime), new $_model.GenerateExecutionPolicyResponse({}));
  }

  /**
   * Queries the Resource Access Management (RAM) policy required for template execution.
   * 
   * @param request - GenerateExecutionPolicyRequest
   * @returns GenerateExecutionPolicyResponse
   */
  async generateExecutionPolicy(request: $_model.GenerateExecutionPolicyRequest): Promise<$_model.GenerateExecutionPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateExecutionPolicyWithOptions(request, runtime);
  }

  /**
   * Generates an O\\\\\\&M item.
   * 
   * @param request - GenerateOpsItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateOpsItemResponse
   */
  async generateOpsItemWithOptions(request: $_model.GenerateOpsItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateOpsItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configurationId)) {
      query["ConfigurationId"] = request.configurationId;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.dataSource)) {
      query["DataSource"] = request.dataSource;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateOpsItem",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateOpsItemResponse>(await this.callApi(params, req, runtime), new $_model.GenerateOpsItemResponse({}));
  }

  /**
   * Generates an O\\\\\\&M item.
   * 
   * @param request - GenerateOpsItemRequest
   * @returns GenerateOpsItemResponse
   */
  async generateOpsItem(request: $_model.GenerateOpsItemRequest): Promise<$_model.GenerateOpsItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.generateOpsItemWithOptions(request, runtime);
  }

  /**
   * Queries the information of an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - GetApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationResponse
   */
  async getApplicationWithOptions(request: $_model.GetApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplication",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationResponse({}));
  }

  /**
   * Queries the information of an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - GetApplicationRequest
   * @returns GetApplicationResponse
   */
  async getApplication(request: $_model.GetApplicationRequest): Promise<$_model.GetApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationWithOptions(request, runtime);
  }

  /**
   * Queries the information about an application group. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - GetApplicationGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetApplicationGroupResponse
   */
  async getApplicationGroupWithOptions(request: $_model.GetApplicationGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetApplicationGroupResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetApplicationGroupResponse>(await this.callApi(params, req, runtime), new $_model.GetApplicationGroupResponse({}));
  }

  /**
   * Queries the information about an application group. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - GetApplicationGroupRequest
   * @returns GetApplicationGroupResponse
   */
  async getApplicationGroup(request: $_model.GetApplicationGroupRequest): Promise<$_model.GetApplicationGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getApplicationGroupWithOptions(request, runtime);
  }

  /**
   * Queries the information about the template of an execution, including the content of the template.
   * 
   * @param request - GetExecutionTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecutionTemplateResponse
   */
  async getExecutionTemplateWithOptions(request: $_model.GetExecutionTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExecutionTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExecutionTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExecutionTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetExecutionTemplateResponse({}));
  }

  /**
   * Queries the information about the template of an execution, including the content of the template.
   * 
   * @param request - GetExecutionTemplateRequest
   * @returns GetExecutionTemplateResponse
   */
  async getExecutionTemplate(request: $_model.GetExecutionTemplateRequest): Promise<$_model.GetExecutionTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExecutionTemplateWithOptions(request, runtime);
  }

  /**
   * 查询Git分支详情
   * 
   * @param request - GetGitBranchRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGitBranchResponse
   */
  async getGitBranchWithOptions(request: $_model.GetGitBranchRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGitBranchResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branch)) {
      query["Branch"] = request.branch;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repoFullName)) {
      query["RepoFullName"] = request.repoFullName;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGitBranch",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGitBranchResponse>(await this.callApi(params, req, runtime), new $_model.GetGitBranchResponse({}));
  }

  /**
   * 查询Git分支详情
   * 
   * @param request - GetGitBranchRequest
   * @returns GetGitBranchResponse
   */
  async getGitBranch(request: $_model.GetGitBranchRequest): Promise<$_model.GetGitBranchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGitBranchWithOptions(request, runtime);
  }

  /**
   * 查询Git仓库详情
   * 
   * @param request - GetGitRepositoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGitRepositoryResponse
   */
  async getGitRepositoryWithOptions(request: $_model.GetGitRepositoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGitRepositoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repoFullName)) {
      query["RepoFullName"] = request.repoFullName;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetGitRepository",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGitRepositoryResponse>(await this.callApi(params, req, runtime), new $_model.GetGitRepositoryResponse({}));
  }

  /**
   * 查询Git仓库详情
   * 
   * @param request - GetGitRepositoryRequest
   * @returns GetGitRepositoryResponse
   */
  async getGitRepository(request: $_model.GetGitRepositoryRequest): Promise<$_model.GetGitRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGitRepositoryWithOptions(request, runtime);
  }

  /**
   * Queries the properties of a configuration list.
   * 
   * @param request - GetInventorySchemaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInventorySchemaResponse
   */
  async getInventorySchemaWithOptions(request: $_model.GetInventorySchemaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetInventorySchemaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregator)) {
      query["Aggregator"] = request.aggregator;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.typeName)) {
      query["TypeName"] = request.typeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInventorySchema",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetInventorySchemaResponse>(await this.callApi(params, req, runtime), new $_model.GetInventorySchemaResponse({}));
  }

  /**
   * Queries the properties of a configuration list.
   * 
   * @param request - GetInventorySchemaRequest
   * @returns GetInventorySchemaResponse
   */
  async getInventorySchema(request: $_model.GetInventorySchemaRequest): Promise<$_model.GetInventorySchemaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getInventorySchemaWithOptions(request, runtime);
  }

  /**
   * Queries the details of an O\\\\\\\\\\\\&M item.
   * 
   * @param request - GetOpsItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOpsItemResponse
   */
  async getOpsItemWithOptions(request: $_model.GetOpsItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOpsItemResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.opsItemId)) {
      query["OpsItemId"] = request.opsItemId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOpsItem",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOpsItemResponse>(await this.callApi(params, req, runtime), new $_model.GetOpsItemResponse({}));
  }

  /**
   * Queries the details of an O\\\\\\\\\\\\&M item.
   * 
   * @param request - GetOpsItemRequest
   * @returns GetOpsItemResponse
   */
  async getOpsItem(request: $_model.GetOpsItemRequest): Promise<$_model.GetOpsItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOpsItemWithOptions(request, runtime);
  }

  /**
   * Queries a common parameter and its value.
   * 
   * @param request - GetParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParameterResponse
   */
  async getParameterWithOptions(request: $_model.GetParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parameterVersion)) {
      query["ParameterVersion"] = request.parameterVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetParameterResponse>(await this.callApi(params, req, runtime), new $_model.GetParameterResponse({}));
  }

  /**
   * Queries a common parameter and its value.
   * 
   * @param request - GetParameterRequest
   * @returns GetParameterResponse
   */
  async getParameter(request: $_model.GetParameterRequest): Promise<$_model.GetParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getParameterWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more parameters.
   * 
   * @param request - GetParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParametersResponse
   */
  async getParametersWithOptions(request: $_model.GetParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.names)) {
      query["Names"] = request.names;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetParametersResponse>(await this.callApi(params, req, runtime), new $_model.GetParametersResponse({}));
  }

  /**
   * Queries the information about one or more parameters.
   * 
   * @param request - GetParametersRequest
   * @returns GetParametersResponse
   */
  async getParameters(request: $_model.GetParametersRequest): Promise<$_model.GetParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getParametersWithOptions(request, runtime);
  }

  /**
   * Queries one or more parameters by path.
   * 
   * @param request - GetParametersByPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetParametersByPathResponse
   */
  async getParametersByPathWithOptions(request: $_model.GetParametersByPathRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetParametersByPathResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetParametersByPath",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetParametersByPathResponse>(await this.callApi(params, req, runtime), new $_model.GetParametersByPathResponse({}));
  }

  /**
   * Queries one or more parameters by path.
   * 
   * @param request - GetParametersByPathRequest
   * @returns GetParametersByPathResponse
   */
  async getParametersByPath(request: $_model.GetParametersByPathRequest): Promise<$_model.GetParametersByPathResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getParametersByPathWithOptions(request, runtime);
  }

  /**
   * Queries the information of a patch baseline.
   * 
   * @param request - GetPatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPatchBaselineResponse
   */
  async getPatchBaselineWithOptions(request: $_model.GetPatchBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPatchBaselineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPatchBaselineResponse>(await this.callApi(params, req, runtime), new $_model.GetPatchBaselineResponse({}));
  }

  /**
   * Queries the information of a patch baseline.
   * 
   * @param request - GetPatchBaselineRequest
   * @returns GetPatchBaselineResponse
   */
  async getPatchBaseline(request: $_model.GetPatchBaselineRequest): Promise<$_model.GetPatchBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPatchBaselineWithOptions(request, runtime);
  }

  /**
   * Queries the information about an encryption parameter, including the parameter value. Make sure that you have the permissions to call the GetSecretValue operation before you call this operation.
   * 
   * @param request - GetSecretParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretParameterResponse
   */
  async getSecretParameterWithOptions(request: $_model.GetSecretParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecretParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.parameterVersion)) {
      query["ParameterVersion"] = request.parameterVersion;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.withDecryption)) {
      query["WithDecryption"] = request.withDecryption;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecretParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecretParameterResponse>(await this.callApi(params, req, runtime), new $_model.GetSecretParameterResponse({}));
  }

  /**
   * Queries the information about an encryption parameter, including the parameter value. Make sure that you have the permissions to call the GetSecretValue operation before you call this operation.
   * 
   * @param request - GetSecretParameterRequest
   * @returns GetSecretParameterResponse
   */
  async getSecretParameter(request: $_model.GetSecretParameterRequest): Promise<$_model.GetSecretParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecretParameterWithOptions(request, runtime);
  }

  /**
   * Queries the information about one or more encryption parameters. Make sure that you have the permissions to call the GetSecretValue operation before you call this operation.
   * 
   * @param request - GetSecretParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretParametersResponse
   */
  async getSecretParametersWithOptions(request: $_model.GetSecretParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecretParametersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.names)) {
      query["Names"] = request.names;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.withDecryption)) {
      query["WithDecryption"] = request.withDecryption;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecretParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecretParametersResponse>(await this.callApi(params, req, runtime), new $_model.GetSecretParametersResponse({}));
  }

  /**
   * Queries the information about one or more encryption parameters. Make sure that you have the permissions to call the GetSecretValue operation before you call this operation.
   * 
   * @param request - GetSecretParametersRequest
   * @returns GetSecretParametersResponse
   */
  async getSecretParameters(request: $_model.GetSecretParametersRequest): Promise<$_model.GetSecretParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecretParametersWithOptions(request, runtime);
  }

  /**
   * Queries encryption parameters by path. Make sure that you have the permissions to call the GetSecretValue operation before you call this operation.
   * 
   * @param request - GetSecretParametersByPathRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSecretParametersByPathResponse
   */
  async getSecretParametersByPathWithOptions(request: $_model.GetSecretParametersByPathRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetSecretParametersByPathResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.withDecryption)) {
      query["WithDecryption"] = request.withDecryption;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSecretParametersByPath",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSecretParametersByPathResponse>(await this.callApi(params, req, runtime), new $_model.GetSecretParametersByPathResponse({}));
  }

  /**
   * Queries encryption parameters by path. Make sure that you have the permissions to call the GetSecretValue operation before you call this operation.
   * 
   * @param request - GetSecretParametersByPathRequest
   * @returns GetSecretParametersByPathResponse
   */
  async getSecretParametersByPath(request: $_model.GetSecretParametersByPathRequest): Promise<$_model.GetSecretParametersByPathResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSecretParametersByPathWithOptions(request, runtime);
  }

  /**
   * Queries the settings of the delivery feature.
   * 
   * @param request - GetServiceSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceSettingsResponse
   */
  async getServiceSettingsWithOptions(request: $_model.GetServiceSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceSettingsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceSettings",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceSettingsResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceSettingsResponse({}));
  }

  /**
   * Queries the settings of the delivery feature.
   * 
   * @param request - GetServiceSettingsRequest
   * @returns GetServiceSettingsResponse
   */
  async getServiceSettings(request: $_model.GetServiceSettingsRequest): Promise<$_model.GetServiceSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceSettingsWithOptions(request, runtime);
  }

  /**
   * Queries the information about a template, including the content of the template.
   * 
   * @param request - GetTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateResponse
   */
  async getTemplateWithOptions(request: $_model.GetTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateResponse({}));
  }

  /**
   * Queries the information about a template, including the content of the template.
   * 
   * @param request - GetTemplateRequest
   * @returns GetTemplateResponse
   */
  async getTemplate(request: $_model.GetTemplateRequest): Promise<$_model.GetTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateWithOptions(request, runtime);
  }

  /**
   * 获取参数可用值
   * 
   * @param request - GetTemplateParameterConstraintsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTemplateParameterConstraintsResponse
   */
  async getTemplateParameterConstraintsWithOptions(request: $_model.GetTemplateParameterConstraintsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTemplateParameterConstraintsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTemplateParameterConstraints",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTemplateParameterConstraintsResponse>(await this.callApi(params, req, runtime), new $_model.GetTemplateParameterConstraintsResponse({}));
  }

  /**
   * 获取参数可用值
   * 
   * @param request - GetTemplateParameterConstraintsRequest
   * @returns GetTemplateParameterConstraintsResponse
   */
  async getTemplateParameterConstraints(request: $_model.GetTemplateParameterConstraintsRequest): Promise<$_model.GetTemplateParameterConstraintsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTemplateParameterConstraintsWithOptions(request, runtime);
  }

  /**
   * Queries the available actions, including atomic actions and cloud product actions.
   * 
   * @param request - ListActionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListActionsResponse
   */
  async listActionsWithOptions(request: $_model.ListActionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListActionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.OOSActionName)) {
      query["OOSActionName"] = request.OOSActionName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListActions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListActionsResponse>(await this.callApi(params, req, runtime), new $_model.ListActionsResponse({}));
  }

  /**
   * Queries the available actions, including atomic actions and cloud product actions.
   * 
   * @param request - ListActionsRequest
   * @returns ListActionsResponse
   */
  async listActions(request: $_model.ListActionsRequest): Promise<$_model.ListActionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listActionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of application groups. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - ListApplicationGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationGroupsResponse
   */
  async listApplicationGroupsWithOptions(request: $_model.ListApplicationGroupsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationGroupsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.deployRegionId)) {
      query["DeployRegionId"] = request.deployRegionId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceProduct)) {
      query["ResourceProduct"] = request.resourceProduct;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplicationGroups",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationGroupsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationGroupsResponse({}));
  }

  /**
   * Queries a list of application groups. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - ListApplicationGroupsRequest
   * @returns ListApplicationGroupsResponse
   */
  async listApplicationGroups(request: $_model.ListApplicationGroupsRequest): Promise<$_model.ListApplicationGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationGroupsWithOptions(request, runtime);
  }

  /**
   * Queries a list of applications. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param tmpReq - ListApplicationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApplicationsResponse
   */
  async listApplicationsWithOptions(tmpReq: $_model.ListApplicationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListApplicationsResponse> {
    tmpReq.validate();
    let request = new $_model.ListApplicationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationType)) {
      query["ApplicationType"] = request.applicationType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.names)) {
      query["Names"] = request.names;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApplications",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApplicationsResponse>(await this.callApi(params, req, runtime), new $_model.ListApplicationsResponse({}));
  }

  /**
   * Queries a list of applications. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - ListApplicationsRequest
   * @returns ListApplicationsResponse
   */
  async listApplications(request: $_model.ListApplicationsRequest): Promise<$_model.ListApplicationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listApplicationsWithOptions(request, runtime);
  }

  /**
   * Queries the logs of an execution.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListExecutionLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutionLogsResponse
   */
  async listExecutionLogsWithOptions(request: $_model.ListExecutionLogsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExecutionLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExecutionLogs",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExecutionLogsResponse>(await this.callApi(params, req, runtime), new $_model.ListExecutionLogsResponse({}));
  }

  /**
   * Queries the logs of an execution.
   * 
   * @remarks
   * ***
   * 
   * @param request - ListExecutionLogsRequest
   * @returns ListExecutionLogsResponse
   */
  async listExecutionLogs(request: $_model.ListExecutionLogsRequest): Promise<$_model.ListExecutionLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExecutionLogsWithOptions(request, runtime);
  }

  /**
   * Queries high-risk tasks in the execution of a template.
   * 
   * @param request - ListExecutionRiskyTasksRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutionRiskyTasksResponse
   */
  async listExecutionRiskyTasksWithOptions(request: $_model.ListExecutionRiskyTasksRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExecutionRiskyTasksResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExecutionRiskyTasks",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExecutionRiskyTasksResponse>(await this.callApi(params, req, runtime), new $_model.ListExecutionRiskyTasksResponse({}));
  }

  /**
   * Queries high-risk tasks in the execution of a template.
   * 
   * @param request - ListExecutionRiskyTasksRequest
   * @returns ListExecutionRiskyTasksResponse
   */
  async listExecutionRiskyTasks(request: $_model.ListExecutionRiskyTasksRequest): Promise<$_model.ListExecutionRiskyTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExecutionRiskyTasksWithOptions(request, runtime);
  }

  /**
   * Queries executions. Multiple methods are supported to filter executions.
   * 
   * @param tmpReq - ListExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExecutionsResponse
   */
  async listExecutionsWithOptions(tmpReq: $_model.ListExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListExecutionsResponse> {
    tmpReq.validate();
    let request = new $_model.ListExecutionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.categories)) {
      query["Categories"] = request.categories;
    }

    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.depth)) {
      query["Depth"] = request.depth;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.endDateAfter)) {
      query["EndDateAfter"] = request.endDateAfter;
    }

    if (!$dara.isNull(request.endDateBefore)) {
      query["EndDateBefore"] = request.endDateBefore;
    }

    if (!$dara.isNull(request.executedBy)) {
      query["ExecutedBy"] = request.executedBy;
    }

    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.includeChildExecution)) {
      query["IncludeChildExecution"] = request.includeChildExecution;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.parentExecutionId)) {
      query["ParentExecutionId"] = request.parentExecutionId;
    }

    if (!$dara.isNull(request.ramRole)) {
      query["RamRole"] = request.ramRole;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceTemplateName)) {
      query["ResourceTemplateName"] = request.resourceTemplateName;
    }

    if (!$dara.isNull(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.startDateAfter)) {
      query["StartDateAfter"] = request.startDateAfter;
    }

    if (!$dara.isNull(request.startDateBefore)) {
      query["StartDateBefore"] = request.startDateBefore;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListExecutionsResponse({}));
  }

  /**
   * Queries executions. Multiple methods are supported to filter executions.
   * 
   * @param request - ListExecutionsRequest
   * @returns ListExecutionsResponse
   */
  async listExecutions(request: $_model.ListExecutionsRequest): Promise<$_model.ListExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listExecutionsWithOptions(request, runtime);
  }

  /**
   * 获取当前阿里云用户已授权在应用管理的托管平台账户
   * 
   * @param request - ListGitAccountsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGitAccountsResponse
   */
  async listGitAccountsWithOptions(request: $_model.ListGitAccountsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGitAccountsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindType)) {
      query["BindType"] = request.bindType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGitAccounts",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGitAccountsResponse>(await this.callApi(params, req, runtime), new $_model.ListGitAccountsResponse({}));
  }

  /**
   * 获取当前阿里云用户已授权在应用管理的托管平台账户
   * 
   * @param request - ListGitAccountsRequest
   * @returns ListGitAccountsResponse
   */
  async listGitAccounts(request: $_model.ListGitAccountsRequest): Promise<$_model.ListGitAccountsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGitAccountsWithOptions(request, runtime);
  }

  /**
   * 获取指定Git仓库的所有分支
   * 
   * @param request - ListGitBranchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGitBranchesResponse
   */
  async listGitBranchesWithOptions(request: $_model.ListGitBranchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGitBranchesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repoFullName)) {
      query["RepoFullName"] = request.repoFullName;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGitBranches",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGitBranchesResponse>(await this.callApi(params, req, runtime), new $_model.ListGitBranchesResponse({}));
  }

  /**
   * 获取指定Git仓库的所有分支
   * 
   * @param request - ListGitBranchesRequest
   * @returns ListGitBranchesResponse
   */
  async listGitBranches(request: $_model.ListGitBranchesRequest): Promise<$_model.ListGitBranchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGitBranchesWithOptions(request, runtime);
  }

  /**
   * 获取已授权用户的组织
   * 
   * @param request - ListGitOrganizationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGitOrganizationsResponse
   */
  async listGitOrganizationsWithOptions(request: $_model.ListGitOrganizationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGitOrganizationsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bindType)) {
      query["BindType"] = request.bindType;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGitOrganizations",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGitOrganizationsResponse>(await this.callApi(params, req, runtime), new $_model.ListGitOrganizationsResponse({}));
  }

  /**
   * 获取已授权用户的组织
   * 
   * @param request - ListGitOrganizationsRequest
   * @returns ListGitOrganizationsResponse
   */
  async listGitOrganizations(request: $_model.ListGitOrganizationsRequest): Promise<$_model.ListGitOrganizationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGitOrganizationsWithOptions(request, runtime);
  }

  /**
   * 查询Git仓库列表
   * 
   * @param request - ListGitRepositoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGitRepositoriesResponse
   */
  async listGitRepositoriesWithOptions(request: $_model.ListGitRepositoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGitRepositoriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.orgName)) {
      query["OrgName"] = request.orgName;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGitRepositories",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGitRepositoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListGitRepositoriesResponse({}));
  }

  /**
   * 查询Git仓库列表
   * 
   * @param request - ListGitRepositoriesRequest
   * @returns ListGitRepositoriesResponse
   */
  async listGitRepositories(request: $_model.ListGitRepositoriesRequest): Promise<$_model.ListGitRepositoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGitRepositoriesWithOptions(request, runtime);
  }

  /**
   * 获取仓库文件与目录信息
   * 
   * @param request - ListGitRepositoryContentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGitRepositoryContentsResponse
   */
  async listGitRepositoryContentsWithOptions(request: $_model.ListGitRepositoryContentsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListGitRepositoryContentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.branch)) {
      query["Branch"] = request.branch;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.contentType)) {
      query["ContentType"] = request.contentType;
    }

    if (!$dara.isNull(request.orgId)) {
      query["OrgId"] = request.orgId;
    }

    if (!$dara.isNull(request.owner)) {
      query["Owner"] = request.owner;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.platform)) {
      query["Platform"] = request.platform;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.repoFullName)) {
      query["RepoFullName"] = request.repoFullName;
    }

    if (!$dara.isNull(request.repoId)) {
      query["RepoId"] = request.repoId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGitRepositoryContents",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListGitRepositoryContentsResponse>(await this.callApi(params, req, runtime), new $_model.ListGitRepositoryContentsResponse({}));
  }

  /**
   * 获取仓库文件与目录信息
   * 
   * @param request - ListGitRepositoryContentsRequest
   * @returns ListGitRepositoryContentsResponse
   */
  async listGitRepositoryContents(request: $_model.ListGitRepositoryContentsRequest): Promise<$_model.ListGitRepositoryContentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGitRepositoryContentsWithOptions(request, runtime);
  }

  /**
   * List Instance Package States
   * 
   * @param request - ListInstancePackageStatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancePackageStatesResponse
   */
  async listInstancePackageStatesWithOptions(request: $_model.ListInstancePackageStatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancePackageStatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateNames)) {
      query["TemplateNames"] = request.templateNames;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancePackageStates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancePackageStatesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancePackageStatesResponse({}));
  }

  /**
   * List Instance Package States
   * 
   * @param request - ListInstancePackageStatesRequest
   * @returns ListInstancePackageStatesResponse
   */
  async listInstancePackageStates(request: $_model.ListInstancePackageStatesRequest): Promise<$_model.ListInstancePackageStatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancePackageStatesWithOptions(request, runtime);
  }

  /**
   * Queries the information about the patches of an instance.
   * 
   * @param request - ListInstancePatchStatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancePatchStatesResponse
   */
  async listInstancePatchStatesWithOptions(request: $_model.ListInstancePatchStatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancePatchStatesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancePatchStates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancePatchStatesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancePatchStatesResponse({}));
  }

  /**
   * Queries the information about the patches of an instance.
   * 
   * @param request - ListInstancePatchStatesRequest
   * @returns ListInstancePatchStatesResponse
   */
  async listInstancePatchStates(request: $_model.ListInstancePatchStatesRequest): Promise<$_model.ListInstancePatchStatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancePatchStatesWithOptions(request, runtime);
  }

  /**
   * Queries the information about the patches of an instance.
   * 
   * @param request - ListInstancePatchesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancePatchesResponse
   */
  async listInstancePatchesWithOptions(request: $_model.ListInstancePatchesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInstancePatchesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.patchStatuses)) {
      query["PatchStatuses"] = request.patchStatuses;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancePatches",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInstancePatchesResponse>(await this.callApi(params, req, runtime), new $_model.ListInstancePatchesResponse({}));
  }

  /**
   * Queries the information about the patches of an instance.
   * 
   * @param request - ListInstancePatchesRequest
   * @returns ListInstancePatchesResponse
   */
  async listInstancePatches(request: $_model.ListInstancePatchesRequest): Promise<$_model.ListInstancePatchesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInstancePatchesWithOptions(request, runtime);
  }

  /**
   * Queries the configurations of an Elastic Compute Service (ECS) instance.
   * 
   * @param request - ListInventoryEntriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInventoryEntriesResponse
   */
  async listInventoryEntriesWithOptions(request: $_model.ListInventoryEntriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListInventoryEntriesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.typeName)) {
      query["TypeName"] = request.typeName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInventoryEntries",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListInventoryEntriesResponse>(await this.callApi(params, req, runtime), new $_model.ListInventoryEntriesResponse({}));
  }

  /**
   * Queries the configurations of an Elastic Compute Service (ECS) instance.
   * 
   * @param request - ListInventoryEntriesRequest
   * @returns ListInventoryEntriesResponse
   */
  async listInventoryEntries(request: $_model.ListInventoryEntriesRequest): Promise<$_model.ListInventoryEntriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listInventoryEntriesWithOptions(request, runtime);
  }

  /**
   * Queries O\\&M items.
   * 
   * @param tmpReq - ListOpsItemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOpsItemsResponse
   */
  async listOpsItemsWithOptions(tmpReq: $_model.ListOpsItemsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOpsItemsResponse> {
    tmpReq.validate();
    let request = new $_model.ListOpsItemsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceTags)) {
      request.resourceTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceTags, "ResourceTags", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceTagsShrink)) {
      query["ResourceTags"] = request.resourceTagsShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOpsItems",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOpsItemsResponse>(await this.callApi(params, req, runtime), new $_model.ListOpsItemsResponse({}));
  }

  /**
   * Queries O\\&M items.
   * 
   * @param request - ListOpsItemsRequest
   * @returns ListOpsItemsResponse
   */
  async listOpsItems(request: $_model.ListOpsItemsRequest): Promise<$_model.ListOpsItemsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOpsItemsWithOptions(request, runtime);
  }

  /**
   * Queries the versions of a common parameter.
   * 
   * @param request - ListParameterVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListParameterVersionsResponse
   */
  async listParameterVersionsWithOptions(request: $_model.ListParameterVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListParameterVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListParameterVersions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListParameterVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListParameterVersionsResponse({}));
  }

  /**
   * Queries the versions of a common parameter.
   * 
   * @param request - ListParameterVersionsRequest
   * @returns ListParameterVersionsResponse
   */
  async listParameterVersions(request: $_model.ListParameterVersionsRequest): Promise<$_model.ListParameterVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listParameterVersionsWithOptions(request, runtime);
  }

  /**
   * Queries common parameters. Multiple methods are supported to filter common parameters.
   * 
   * @param tmpReq - ListParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListParametersResponse
   */
  async listParametersWithOptions(tmpReq: $_model.ListParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListParametersResponse> {
    tmpReq.validate();
    let request = new $_model.ListParametersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!$dara.isNull(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListParametersResponse>(await this.callApi(params, req, runtime), new $_model.ListParametersResponse({}));
  }

  /**
   * Queries common parameters. Multiple methods are supported to filter common parameters.
   * 
   * @param request - ListParametersRequest
   * @returns ListParametersResponse
   */
  async listParameters(request: $_model.ListParametersRequest): Promise<$_model.ListParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listParametersWithOptions(request, runtime);
  }

  /**
   * Queries a list of patch baselines.
   * 
   * @param tmpReq - ListPatchBaselinesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPatchBaselinesResponse
   */
  async listPatchBaselinesWithOptions(tmpReq: $_model.ListPatchBaselinesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListPatchBaselinesResponse> {
    tmpReq.validate();
    let request = new $_model.ListPatchBaselinesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.approvedPatches)) {
      request.approvedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.approvedPatches, "ApprovedPatches", "json");
    }

    if (!$dara.isNull(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.approvedPatchesShrink)) {
      query["ApprovedPatches"] = request.approvedPatchesShrink;
    }

    if (!$dara.isNull(request.approvedPatchesEnableNonSecurity)) {
      query["ApprovedPatchesEnableNonSecurity"] = request.approvedPatchesEnableNonSecurity;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.operationSystem)) {
      query["OperationSystem"] = request.operationSystem;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!$dara.isNull(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPatchBaselines",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPatchBaselinesResponse>(await this.callApi(params, req, runtime), new $_model.ListPatchBaselinesResponse({}));
  }

  /**
   * Queries a list of patch baselines.
   * 
   * @param request - ListPatchBaselinesRequest
   * @returns ListPatchBaselinesResponse
   */
  async listPatchBaselines(request: $_model.ListPatchBaselinesRequest): Promise<$_model.ListPatchBaselinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listPatchBaselinesWithOptions(request, runtime);
  }

  /**
   * Queries the information about a scheduled execution that involves O&M operations on Elastic Compute Service (ECS) instances.
   * 
   * @param request - ListResourceExecutionStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceExecutionStatusResponse
   */
  async listResourceExecutionStatusWithOptions(request: $_model.ListResourceExecutionStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListResourceExecutionStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceExecutionStatus",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListResourceExecutionStatusResponse>(await this.callApi(params, req, runtime), new $_model.ListResourceExecutionStatusResponse({}));
  }

  /**
   * Queries the information about a scheduled execution that involves O&M operations on Elastic Compute Service (ECS) instances.
   * 
   * @param request - ListResourceExecutionStatusRequest
   * @returns ListResourceExecutionStatusResponse
   */
  async listResourceExecutionStatus(request: $_model.ListResourceExecutionStatusRequest): Promise<$_model.ListResourceExecutionStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listResourceExecutionStatusWithOptions(request, runtime);
  }

  /**
   * Queries versions of an encryption parameter.
   * 
   * @param request - ListSecretParameterVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecretParameterVersionsResponse
   */
  async listSecretParameterVersionsWithOptions(request: $_model.ListSecretParameterVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecretParameterVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!$dara.isNull(request.withDecryption)) {
      query["WithDecryption"] = request.withDecryption;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecretParameterVersions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecretParameterVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListSecretParameterVersionsResponse({}));
  }

  /**
   * Queries versions of an encryption parameter.
   * 
   * @param request - ListSecretParameterVersionsRequest
   * @returns ListSecretParameterVersionsResponse
   */
  async listSecretParameterVersions(request: $_model.ListSecretParameterVersionsRequest): Promise<$_model.ListSecretParameterVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecretParameterVersionsWithOptions(request, runtime);
  }

  /**
   * Queries common parameters. Multiple types of queries are supported.
   * 
   * @remarks
   * Before you call this operation, make sure that you have the permission to manage Key Management Service (KMS) secrets.
   * 
   * @param tmpReq - ListSecretParametersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecretParametersResponse
   */
  async listSecretParametersWithOptions(tmpReq: $_model.ListSecretParametersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListSecretParametersResponse> {
    tmpReq.validate();
    let request = new $_model.ListSecretParametersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.path)) {
      query["Path"] = request.path;
    }

    if (!$dara.isNull(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSecretParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSecretParametersResponse>(await this.callApi(params, req, runtime), new $_model.ListSecretParametersResponse({}));
  }

  /**
   * Queries common parameters. Multiple types of queries are supported.
   * 
   * @remarks
   * Before you call this operation, make sure that you have the permission to manage Key Management Service (KMS) secrets.
   * 
   * @param request - ListSecretParametersRequest
   * @returns ListSecretParametersResponse
   */
  async listSecretParameters(request: $_model.ListSecretParametersRequest): Promise<$_model.ListSecretParametersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listSecretParametersWithOptions(request, runtime);
  }

  /**
   * Queries desired-state configurations.
   * 
   * @param tmpReq - ListStateConfigurationsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListStateConfigurationsResponse
   */
  async listStateConfigurationsWithOptions(tmpReq: $_model.ListStateConfigurationsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListStateConfigurationsResponse> {
    tmpReq.validate();
    let request = new $_model.ListStateConfigurationsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.stateConfigurationIds)) {
      query["StateConfigurationIds"] = request.stateConfigurationIds;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListStateConfigurations",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListStateConfigurationsResponse>(await this.callApi(params, req, runtime), new $_model.ListStateConfigurationsResponse({}));
  }

  /**
   * Queries desired-state configurations.
   * 
   * @param request - ListStateConfigurationsRequest
   * @returns ListStateConfigurationsResponse
   */
  async listStateConfigurations(request: $_model.ListStateConfigurationsRequest): Promise<$_model.ListStateConfigurationsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listStateConfigurationsWithOptions(request, runtime);
  }

  /**
   * Queries the tags.
   * 
   * @param request - ListTagKeysRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagKeysResponse
   */
  async listTagKeysWithOptions(request: $_model.ListTagKeysRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagKeysResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagKeys",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagKeysResponse>(await this.callApi(params, req, runtime), new $_model.ListTagKeysResponse({}));
  }

  /**
   * Queries the tags.
   * 
   * @param request - ListTagKeysRequest
   * @returns ListTagKeysResponse
   */
  async listTagKeys(request: $_model.ListTagKeysRequest): Promise<$_model.ListTagKeysResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagKeysWithOptions(request, runtime);
  }

  /**
   * Queries the tags that are added to one or more resources.
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: $_model.ListTagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagResources",
      version: "2019-06-01",
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
   * Queries the tags that are added to one or more resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: $_model.ListTagResourcesRequest): Promise<$_model.ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Queries the values of created tags.
   * 
   * @param request - ListTagValuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagValuesResponse
   */
  async listTagValuesWithOptions(request: $_model.ListTagValuesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTagValuesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTagValues",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTagValuesResponse>(await this.callApi(params, req, runtime), new $_model.ListTagValuesResponse({}));
  }

  /**
   * Queries the values of created tags.
   * 
   * @param request - ListTagValuesRequest
   * @returns ListTagValuesResponse
   */
  async listTagValues(request: $_model.ListTagValuesRequest): Promise<$_model.ListTagValuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTagValuesWithOptions(request, runtime);
  }

  /**
   * Queries task executions. Multiple methods are supported to filter task executions.
   * 
   * @param request - ListTaskExecutionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTaskExecutionsResponse
   */
  async listTaskExecutionsWithOptions(request: $_model.ListTaskExecutionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTaskExecutionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDateAfter)) {
      query["EndDateAfter"] = request.endDateAfter;
    }

    if (!$dara.isNull(request.endDateBefore)) {
      query["EndDateBefore"] = request.endDateBefore;
    }

    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.includeChildTaskExecution)) {
      query["IncludeChildTaskExecution"] = request.includeChildTaskExecution;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.parentTaskExecutionId)) {
      query["ParentTaskExecutionId"] = request.parentTaskExecutionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.startDateAfter)) {
      query["StartDateAfter"] = request.startDateAfter;
    }

    if (!$dara.isNull(request.startDateBefore)) {
      query["StartDateBefore"] = request.startDateBefore;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    if (!$dara.isNull(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTaskExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTaskExecutionsResponse>(await this.callApi(params, req, runtime), new $_model.ListTaskExecutionsResponse({}));
  }

  /**
   * Queries task executions. Multiple methods are supported to filter task executions.
   * 
   * @param request - ListTaskExecutionsRequest
   * @returns ListTaskExecutionsResponse
   */
  async listTaskExecutions(request: $_model.ListTaskExecutionsRequest): Promise<$_model.ListTaskExecutionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTaskExecutionsWithOptions(request, runtime);
  }

  /**
   * Queries a list of versions of a template.
   * 
   * @param request - ListTemplateVersionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplateVersionsResponse
   */
  async listTemplateVersionsWithOptions(request: $_model.ListTemplateVersionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplateVersionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplateVersions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplateVersionsResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplateVersionsResponse({}));
  }

  /**
   * Queries a list of versions of a template.
   * 
   * @param request - ListTemplateVersionsRequest
   * @returns ListTemplateVersionsResponse
   */
  async listTemplateVersions(request: $_model.ListTemplateVersionsRequest): Promise<$_model.ListTemplateVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTemplateVersionsWithOptions(request, runtime);
  }

  /**
   * Queries templates. Multiple methods are supported to filter templates.
   * 
   * @param tmpReq - ListTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTemplatesResponse
   */
  async listTemplatesWithOptions(tmpReq: $_model.ListTemplatesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListTemplatesResponse> {
    tmpReq.validate();
    let request = new $_model.ListTemplatesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.createdBy)) {
      query["CreatedBy"] = request.createdBy;
    }

    if (!$dara.isNull(request.createdDateAfter)) {
      query["CreatedDateAfter"] = request.createdDateAfter;
    }

    if (!$dara.isNull(request.createdDateBefore)) {
      query["CreatedDateBefore"] = request.createdDateBefore;
    }

    if (!$dara.isNull(request.hasTrigger)) {
      query["HasTrigger"] = request.hasTrigger;
    }

    if (!$dara.isNull(request.isExample)) {
      query["IsExample"] = request.isExample;
    }

    if (!$dara.isNull(request.isFavorite)) {
      query["IsFavorite"] = request.isFavorite;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!$dara.isNull(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.templateFormat)) {
      query["TemplateFormat"] = request.templateFormat;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTemplates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTemplatesResponse>(await this.callApi(params, req, runtime), new $_model.ListTemplatesResponse({}));
  }

  /**
   * Queries templates. Multiple methods are supported to filter templates.
   * 
   * @param request - ListTemplatesRequest
   * @returns ListTemplatesResponse
   */
  async listTemplates(request: $_model.ListTemplatesRequest): Promise<$_model.ListTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listTemplatesWithOptions(request, runtime);
  }

  /**
   * Notifies an execution in the Waiting state of the subsequent operations.
   * 
   * @remarks
   * You can call this operation to notify an execution in the following scenarios:
   * *   If a template contains a special task, such as an approval task, the Operation Orchestration Service (OOS) execution engine sets the execution state to Waiting when the approval task is being run. You can call this operation to specify whether to continue the execution.
   * *   If you perform debugging in the debug mode, you can call this operation to notify the execution of the subsequent operations after the execution is created or a task is complete.
   * *   If a high-risk operation task waits for approval, you can call this operation to specify whether to continue the execution.
   * 
   * @param request - NotifyExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NotifyExecutionResponse
   */
  async notifyExecutionWithOptions(request: $_model.NotifyExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.NotifyExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.executionStatus)) {
      query["ExecutionStatus"] = request.executionStatus;
    }

    if (!$dara.isNull(request.loopItem)) {
      query["LoopItem"] = request.loopItem;
    }

    if (!$dara.isNull(request.notifyNote)) {
      query["NotifyNote"] = request.notifyNote;
    }

    if (!$dara.isNull(request.notifyType)) {
      query["NotifyType"] = request.notifyType;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    if (!$dara.isNull(request.taskExecutionIds)) {
      query["TaskExecutionIds"] = request.taskExecutionIds;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "NotifyExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.NotifyExecutionResponse>(await this.callApi(params, req, runtime), new $_model.NotifyExecutionResponse({}));
  }

  /**
   * Notifies an execution in the Waiting state of the subsequent operations.
   * 
   * @remarks
   * You can call this operation to notify an execution in the following scenarios:
   * *   If a template contains a special task, such as an approval task, the Operation Orchestration Service (OOS) execution engine sets the execution state to Waiting when the approval task is being run. You can call this operation to specify whether to continue the execution.
   * *   If you perform debugging in the debug mode, you can call this operation to notify the execution of the subsequent operations after the execution is created or a task is complete.
   * *   If a high-risk operation task waits for approval, you can call this operation to specify whether to continue the execution.
   * 
   * @param request - NotifyExecutionRequest
   * @returns NotifyExecutionResponse
   */
  async notifyExecution(request: $_model.NotifyExecutionRequest): Promise<$_model.NotifyExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.notifyExecutionWithOptions(request, runtime);
  }

  /**
   * Registers the default patch baseline.
   * 
   * @param request - RegisterDefaultPatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterDefaultPatchBaselineResponse
   */
  async registerDefaultPatchBaselineWithOptions(request: $_model.RegisterDefaultPatchBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterDefaultPatchBaselineResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterDefaultPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterDefaultPatchBaselineResponse>(await this.callApi(params, req, runtime), new $_model.RegisterDefaultPatchBaselineResponse({}));
  }

  /**
   * Registers the default patch baseline.
   * 
   * @param request - RegisterDefaultPatchBaselineRequest
   * @returns RegisterDefaultPatchBaselineResponse
   */
  async registerDefaultPatchBaseline(request: $_model.RegisterDefaultPatchBaselineRequest): Promise<$_model.RegisterDefaultPatchBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerDefaultPatchBaselineWithOptions(request, runtime);
  }

  /**
   * Queries the details or aggregate information of a configuration inventory.
   * 
   * @param request - SearchInventoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchInventoryResponse
   */
  async searchInventoryWithOptions(request: $_model.SearchInventoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchInventoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aggregator)) {
      query["Aggregator"] = request.aggregator;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchInventory",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchInventoryResponse>(await this.callApi(params, req, runtime), new $_model.SearchInventoryResponse({}));
  }

  /**
   * Queries the details or aggregate information of a configuration inventory.
   * 
   * @param request - SearchInventoryRequest
   * @returns SearchInventoryResponse
   */
  async searchInventory(request: $_model.SearchInventoryRequest): Promise<$_model.SearchInventoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchInventoryWithOptions(request, runtime);
  }

  /**
   * Enables or disables the feature of delivering template execution records and sets the storage location.
   * 
   * @param request - SetServiceSettingsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetServiceSettingsResponse
   */
  async setServiceSettingsWithOptions(request: $_model.SetServiceSettingsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetServiceSettingsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deliveryOssBucketName)) {
      query["DeliveryOssBucketName"] = request.deliveryOssBucketName;
    }

    if (!$dara.isNull(request.deliveryOssEnabled)) {
      query["DeliveryOssEnabled"] = request.deliveryOssEnabled;
    }

    if (!$dara.isNull(request.deliveryOssKeyPrefix)) {
      query["DeliveryOssKeyPrefix"] = request.deliveryOssKeyPrefix;
    }

    if (!$dara.isNull(request.deliverySlsEnabled)) {
      query["DeliverySlsEnabled"] = request.deliverySlsEnabled;
    }

    if (!$dara.isNull(request.deliverySlsProjectName)) {
      query["DeliverySlsProjectName"] = request.deliverySlsProjectName;
    }

    if (!$dara.isNull(request.rdcEnterpriseId)) {
      query["RdcEnterpriseId"] = request.rdcEnterpriseId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetServiceSettings",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetServiceSettingsResponse>(await this.callApi(params, req, runtime), new $_model.SetServiceSettingsResponse({}));
  }

  /**
   * Enables or disables the feature of delivering template execution records and sets the storage location.
   * 
   * @param request - SetServiceSettingsRequest
   * @returns SetServiceSettingsResponse
   */
  async setServiceSettings(request: $_model.SetServiceSettingsRequest): Promise<$_model.SetServiceSettingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setServiceSettingsWithOptions(request, runtime);
  }

  /**
   * 启动一个调试执行
   * 
   * @param request - StartDebugExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartDebugExecutionResponse
   */
  async startDebugExecutionWithOptions(request: $_model.StartDebugExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartDebugExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.properties)) {
      query["Properties"] = request.properties;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartDebugExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartDebugExecutionResponse>(await this.callApi(params, req, runtime), new $_model.StartDebugExecutionResponse({}));
  }

  /**
   * 启动一个调试执行
   * 
   * @param request - StartDebugExecutionRequest
   * @returns StartDebugExecutionResponse
   */
  async startDebugExecution(request: $_model.StartDebugExecutionRequest): Promise<$_model.StartDebugExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startDebugExecutionWithOptions(request, runtime);
  }

  /**
   * Starts an execution.
   * 
   * @param tmpReq - StartExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartExecutionResponse
   */
  async startExecutionWithOptions(tmpReq: $_model.StartExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StartExecutionResponse> {
    tmpReq.validate();
    let request = new $_model.StartExecutionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.loopMode)) {
      query["LoopMode"] = request.loopMode;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.parentExecutionId)) {
      query["ParentExecutionId"] = request.parentExecutionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.safetyCheck)) {
      query["SafetyCheck"] = request.safetyCheck;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.templateContent)) {
      query["TemplateContent"] = request.templateContent;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StartExecutionResponse>(await this.callApi(params, req, runtime), new $_model.StartExecutionResponse({}));
  }

  /**
   * Starts an execution.
   * 
   * @param request - StartExecutionRequest
   * @returns StartExecutionResponse
   */
  async startExecution(request: $_model.StartExecutionRequest): Promise<$_model.StartExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.startExecutionWithOptions(request, runtime);
  }

  /**
   * Adds tags to one or more resources.
   * 
   * @param tmpReq - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(tmpReq: $_model.TagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.TagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TagResources",
      version: "2019-06-01",
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
   * Adds tags to one or more resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: $_model.TagResourcesRequest): Promise<$_model.TagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Debugs a started execution that contains an event trigger task or alert trigger task. If the operation is called, a message body is sent to the event trigger task or alert trigger task. After the trigger task receives the message body, the trigger task generates a new child execution.
   * 
   * @param request - TriggerExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TriggerExecutionResponse
   */
  async triggerExecutionWithOptions(request: $_model.TriggerExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TriggerExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TriggerExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TriggerExecutionResponse>(await this.callApi(params, req, runtime), new $_model.TriggerExecutionResponse({}));
  }

  /**
   * Debugs a started execution that contains an event trigger task or alert trigger task. If the operation is called, a message body is sent to the event trigger task or alert trigger task. After the trigger task receives the message body, the trigger task generates a new child execution.
   * 
   * @param request - TriggerExecutionRequest
   * @returns TriggerExecutionResponse
   */
  async triggerExecution(request: $_model.TriggerExecutionRequest): Promise<$_model.TriggerExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.triggerExecutionWithOptions(request, runtime);
  }

  /**
   * Removes tags from one or more resources.
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: $_model.UntagResourcesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UntagResourcesResponse> {
    tmpReq.validate();
    let request = new $_model.UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceIds)) {
      request.resourceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceIds, "ResourceIds", "json");
    }

    if (!$dara.isNull(tmpReq.tagKeys)) {
      request.tagKeysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKeys, "TagKeys", "json");
    }

    let query = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceIdsShrink)) {
      query["ResourceIds"] = request.resourceIdsShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeysShrink)) {
      query["TagKeys"] = request.tagKeysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UntagResources",
      version: "2019-06-01",
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
   * Removes tags from one or more resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: $_model.UntagResourcesRequest): Promise<$_model.UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param tmpReq - UpdateApplicationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationResponse
   */
  async updateApplicationWithOptions(tmpReq: $_model.UpdateApplicationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateApplicationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.alarmConfig)) {
      request.alarmConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.alarmConfig, "AlarmConfig", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.alarmConfigShrink)) {
      query["AlarmConfig"] = request.alarmConfigShrink;
    }

    if (!$dara.isNull(request.deleteAlarmRulesBeforeUpdate)) {
      query["DeleteAlarmRulesBeforeUpdate"] = request.deleteAlarmRulesBeforeUpdate;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplication",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationResponse({}));
  }

  /**
   * Updates an application. You can call this operation only for the applications that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - UpdateApplicationRequest
   * @returns UpdateApplicationResponse
   */
  async updateApplication(request: $_model.UpdateApplicationRequest): Promise<$_model.UpdateApplicationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationWithOptions(request, runtime);
  }

  /**
   * Updates the information of an application group. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param tmpReq - UpdateApplicationGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateApplicationGroupResponse
   */
  async updateApplicationGroupWithOptions(tmpReq: $_model.UpdateApplicationGroupRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateApplicationGroupResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateApplicationGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.applicationName)) {
      query["ApplicationName"] = request.applicationName;
    }

    if (!$dara.isNull(request.deployedRevisionId)) {
      query["DeployedRevisionId"] = request.deployedRevisionId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.newName)) {
      query["NewName"] = request.newName;
    }

    if (!$dara.isNull(request.operationName)) {
      query["OperationName"] = request.operationName;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateApplicationGroup",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateApplicationGroupResponse>(await this.callApi(params, req, runtime), new $_model.UpdateApplicationGroupResponse({}));
  }

  /**
   * Updates the information of an application group. You can call this operation only for the application groups that reside in the China (Hangzhou) region. Use an endpoint of the China (Hangzhou) region.
   * 
   * @param request - UpdateApplicationGroupRequest
   * @returns UpdateApplicationGroupResponse
   */
  async updateApplicationGroup(request: $_model.UpdateApplicationGroupRequest): Promise<$_model.UpdateApplicationGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateApplicationGroupWithOptions(request, runtime);
  }

  /**
   * Update executions that are in Running or Waiting status.
   * 
   * @param request - UpdateExecutionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExecutionResponse
   */
  async updateExecutionWithOptions(request: $_model.UpdateExecutionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateExecutionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!$dara.isNull(request.parameters)) {
      query["Parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateExecutionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateExecutionResponse({}));
  }

  /**
   * Update executions that are in Running or Waiting status.
   * 
   * @param request - UpdateExecutionRequest
   * @returns UpdateExecutionResponse
   */
  async updateExecution(request: $_model.UpdateExecutionRequest): Promise<$_model.UpdateExecutionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateExecutionWithOptions(request, runtime);
  }

  /**
   * Updates the installed extensions of an instance.
   * 
   * @param tmpReq - UpdateInstancePackageStateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateInstancePackageStateResponse
   */
  async updateInstancePackageStateWithOptions(tmpReq: $_model.UpdateInstancePackageStateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateInstancePackageStateResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateInstancePackageStateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    let query = { };
    if (!$dara.isNull(request.configurationInfo)) {
      query["ConfigurationInfo"] = request.configurationInfo;
    }

    if (!$dara.isNull(request.configureAction)) {
      query["ConfigureAction"] = request.configureAction;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateInstancePackageState",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateInstancePackageStateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateInstancePackageStateResponse({}));
  }

  /**
   * Updates the installed extensions of an instance.
   * 
   * @param request - UpdateInstancePackageStateRequest
   * @returns UpdateInstancePackageStateResponse
   */
  async updateInstancePackageState(request: $_model.UpdateInstancePackageStateRequest): Promise<$_model.UpdateInstancePackageStateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateInstancePackageStateWithOptions(request, runtime);
  }

  /**
   * Modifies an O\\\\\\\\\\\\&M item.
   * 
   * @param tmpReq - UpdateOpsItemRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOpsItemResponse
   */
  async updateOpsItemWithOptions(tmpReq: $_model.UpdateOpsItemRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOpsItemResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateOpsItemShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.category)) {
      query["Category"] = request.category;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.dedupString)) {
      query["DedupString"] = request.dedupString;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.opsItemId)) {
      query["OpsItemId"] = request.opsItemId;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resources)) {
      query["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.severity)) {
      query["Severity"] = request.severity;
    }

    if (!$dara.isNull(request.solutions)) {
      query["Solutions"] = request.solutions;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOpsItem",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOpsItemResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOpsItemResponse({}));
  }

  /**
   * Modifies an O\\\\\\\\\\\\&M item.
   * 
   * @param request - UpdateOpsItemRequest
   * @returns UpdateOpsItemResponse
   */
  async updateOpsItem(request: $_model.UpdateOpsItemRequest): Promise<$_model.UpdateOpsItemResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOpsItemWithOptions(request, runtime);
  }

  /**
   * Updates a common parameter.
   * 
   * @param request - UpdateParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateParameterResponse
   */
  async updateParameterWithOptions(request: $_model.UpdateParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateParameterResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tags)) {
      query["Tags"] = request.tags;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateParameterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateParameterResponse({}));
  }

  /**
   * Updates a common parameter.
   * 
   * @param request - UpdateParameterRequest
   * @returns UpdateParameterResponse
   */
  async updateParameter(request: $_model.UpdateParameterRequest): Promise<$_model.UpdateParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateParameterWithOptions(request, runtime);
  }

  /**
   * Updates a patch baseline.
   * 
   * @param tmpReq - UpdatePatchBaselineRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePatchBaselineResponse
   */
  async updatePatchBaselineWithOptions(tmpReq: $_model.UpdatePatchBaselineRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePatchBaselineResponse> {
    tmpReq.validate();
    let request = new $_model.UpdatePatchBaselineShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.approvedPatches)) {
      request.approvedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.approvedPatches, "ApprovedPatches", "json");
    }

    if (!$dara.isNull(tmpReq.rejectedPatches)) {
      request.rejectedPatchesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.rejectedPatches, "RejectedPatches", "json");
    }

    if (!$dara.isNull(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.approvalRules)) {
      query["ApprovalRules"] = request.approvalRules;
    }

    if (!$dara.isNull(request.approvedPatchesShrink)) {
      query["ApprovedPatches"] = request.approvedPatchesShrink;
    }

    if (!$dara.isNull(request.approvedPatchesEnableNonSecurity)) {
      query["ApprovedPatchesEnableNonSecurity"] = request.approvedPatchesEnableNonSecurity;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.rejectedPatchesShrink)) {
      query["RejectedPatches"] = request.rejectedPatchesShrink;
    }

    if (!$dara.isNull(request.rejectedPatchesAction)) {
      query["RejectedPatchesAction"] = request.rejectedPatchesAction;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePatchBaselineResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePatchBaselineResponse({}));
  }

  /**
   * Updates a patch baseline.
   * 
   * @param request - UpdatePatchBaselineRequest
   * @returns UpdatePatchBaselineResponse
   */
  async updatePatchBaseline(request: $_model.UpdatePatchBaselineRequest): Promise<$_model.UpdatePatchBaselineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePatchBaselineWithOptions(request, runtime);
  }

  /**
   * Updates an encryption parameter.
   * 
   * @param tmpReq - UpdateSecretParameterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecretParameterResponse
   */
  async updateSecretParameterWithOptions(tmpReq: $_model.UpdateSecretParameterRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateSecretParameterResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateSecretParameterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateSecretParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateSecretParameterResponse>(await this.callApi(params, req, runtime), new $_model.UpdateSecretParameterResponse({}));
  }

  /**
   * Updates an encryption parameter.
   * 
   * @param request - UpdateSecretParameterRequest
   * @returns UpdateSecretParameterResponse
   */
  async updateSecretParameter(request: $_model.UpdateSecretParameterRequest): Promise<$_model.UpdateSecretParameterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateSecretParameterWithOptions(request, runtime);
  }

  /**
   * Updates a desired-state configuration.
   * 
   * @param tmpReq - UpdateStateConfigurationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateStateConfigurationResponse
   */
  async updateStateConfigurationWithOptions(tmpReq: $_model.UpdateStateConfigurationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateStateConfigurationResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateStateConfigurationShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.parameters)) {
      request.parametersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.parameters, "Parameters", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.configureMode)) {
      query["ConfigureMode"] = request.configureMode;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.parametersShrink)) {
      query["Parameters"] = request.parametersShrink;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.scheduleExpression)) {
      query["ScheduleExpression"] = request.scheduleExpression;
    }

    if (!$dara.isNull(request.scheduleType)) {
      query["ScheduleType"] = request.scheduleType;
    }

    if (!$dara.isNull(request.stateConfigurationId)) {
      query["StateConfigurationId"] = request.stateConfigurationId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.targets)) {
      query["Targets"] = request.targets;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateStateConfiguration",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateStateConfigurationResponse>(await this.callApi(params, req, runtime), new $_model.UpdateStateConfigurationResponse({}));
  }

  /**
   * Updates a desired-state configuration.
   * 
   * @param request - UpdateStateConfigurationRequest
   * @returns UpdateStateConfigurationResponse
   */
  async updateStateConfiguration(request: $_model.UpdateStateConfigurationRequest): Promise<$_model.UpdateStateConfigurationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateStateConfigurationWithOptions(request, runtime);
  }

  /**
   * Updates the information about an existing template.
   * 
   * @param tmpReq - UpdateTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTemplateResponse
   */
  async updateTemplateWithOptions(tmpReq: $_model.UpdateTemplateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTemplateResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTemplateResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTemplateResponse({}));
  }

  /**
   * Updates the information about an existing template.
   * 
   * @param request - UpdateTemplateRequest
   * @returns UpdateTemplateResponse
   */
  async updateTemplate(request: $_model.UpdateTemplateRequest): Promise<$_model.UpdateTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateTemplateWithOptions(request, runtime);
  }

  /**
   * Check whether a template is valid.
   * 
   * @param request - ValidateTemplateContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidateTemplateContentResponse
   */
  async validateTemplateContentWithOptions(request: $_model.ValidateTemplateContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ValidateTemplateContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.content)) {
      query["Content"] = request.content;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.templateURL)) {
      query["TemplateURL"] = request.templateURL;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ValidateTemplateContent",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidateTemplateContentResponse>(await this.callApi(params, req, runtime), new $_model.ValidateTemplateContentResponse({}));
  }

  /**
   * Check whether a template is valid.
   * 
   * @param request - ValidateTemplateContentRequest
   * @returns ValidateTemplateContentResponse
   */
  async validateTemplateContent(request: $_model.ValidateTemplateContentRequest): Promise<$_model.ValidateTemplateContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.validateTemplateContentWithOptions(request, runtime);
  }

}
