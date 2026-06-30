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
      'cn-shanghai': "yike.cn-shanghai.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("yike", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Adds a member to a Yike project.
   * 
   * @param request - AddYikeProductionMembersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddYikeProductionMembersResponse
   */
  async addYikeProductionMembersWithOptions(request: $_model.AddYikeProductionMembersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddYikeProductionMembersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productionId)) {
      query["ProductionId"] = request.productionId;
    }

    if (!$dara.isNull(request.yikeUserIds)) {
      query["YikeUserIds"] = request.yikeUserIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddYikeProductionMembers",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddYikeProductionMembersResponse>(await this.callApi(params, req, runtime), new $_model.AddYikeProductionMembersResponse({}));
  }

  /**
   * Adds a member to a Yike project.
   * 
   * @param request - AddYikeProductionMembersRequest
   * @returns AddYikeProductionMembersResponse
   */
  async addYikeProductionMembers(request: $_model.AddYikeProductionMembersRequest): Promise<$_model.AddYikeProductionMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addYikeProductionMembersWithOptions(request, runtime);
  }

  /**
   * Increases user credits.
   * 
   * @param request - AddYikeUserCreditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddYikeUserCreditResponse
   */
  async addYikeUserCreditWithOptions(request: $_model.AddYikeUserCreditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddYikeUserCreditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.credit)) {
      query["Credit"] = request.credit;
    }

    if (!$dara.isNull(request.yikeUserId)) {
      query["YikeUserId"] = request.yikeUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddYikeUserCredit",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddYikeUserCreditResponse>(await this.callApi(params, req, runtime), new $_model.AddYikeUserCreditResponse({}));
  }

  /**
   * Increases user credits.
   * 
   * @param request - AddYikeUserCreditRequest
   * @returns AddYikeUserCreditResponse
   */
  async addYikeUserCredit(request: $_model.AddYikeUserCreditRequest): Promise<$_model.AddYikeUserCreditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addYikeUserCreditWithOptions(request, runtime);
  }

  /**
   * Retrieves multiple Yike AI application generation tasks in a batch.
   * 
   * @param request - BatchGetYikeAIAppJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetYikeAIAppJobResponse
   */
  async batchGetYikeAIAppJobWithOptions(request: $_model.BatchGetYikeAIAppJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetYikeAIAppJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobIds)) {
      query["JobIds"] = request.jobIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetYikeAIAppJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetYikeAIAppJobResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetYikeAIAppJobResponse({}));
  }

  /**
   * Retrieves multiple Yike AI application generation tasks in a batch.
   * 
   * @param request - BatchGetYikeAIAppJobRequest
   * @returns BatchGetYikeAIAppJobResponse
   */
  async batchGetYikeAIAppJob(request: $_model.BatchGetYikeAIAppJobRequest): Promise<$_model.BatchGetYikeAIAppJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetYikeAIAppJobWithOptions(request, runtime);
  }

  /**
   * Retrieves information about multiple media assets in a batch.
   * 
   * @param request - BatchGetYikeAssetMediaInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetYikeAssetMediaInfosResponse
   */
  async batchGetYikeAssetMediaInfosWithOptions(request: $_model.BatchGetYikeAssetMediaInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetYikeAssetMediaInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetYikeAssetMediaInfos",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetYikeAssetMediaInfosResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetYikeAssetMediaInfosResponse({}));
  }

  /**
   * Retrieves information about multiple media assets in a batch.
   * 
   * @param request - BatchGetYikeAssetMediaInfosRequest
   * @returns BatchGetYikeAssetMediaInfosResponse
   */
  async batchGetYikeAssetMediaInfos(request: $_model.BatchGetYikeAssetMediaInfosRequest): Promise<$_model.BatchGetYikeAssetMediaInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetYikeAssetMediaInfosWithOptions(request, runtime);
  }

  /**
   * Retrieves the upload credential for a media asset.
   * 
   * @param request - CreateYikeAssetUploadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateYikeAssetUploadResponse
   */
  async createYikeAssetUploadWithOptions(request: $_model.CreateYikeAssetUploadRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateYikeAssetUploadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fileExt)) {
      query["FileExt"] = request.fileExt;
    }

    if (!$dara.isNull(request.fileType)) {
      query["FileType"] = request.fileType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateYikeAssetUpload",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateYikeAssetUploadResponse>(await this.callApi(params, req, runtime), new $_model.CreateYikeAssetUploadResponse({}));
  }

  /**
   * Retrieves the upload credential for a media asset.
   * 
   * @param request - CreateYikeAssetUploadRequest
   * @returns CreateYikeAssetUploadResponse
   */
  async createYikeAssetUpload(request: $_model.CreateYikeAssetUploadRequest): Promise<$_model.CreateYikeAssetUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createYikeAssetUploadWithOptions(request, runtime);
  }

  /**
   * Creates a project.
   * 
   * @param request - CreateYikeProductionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateYikeProductionResponse
   */
  async createYikeProductionWithOptions(request: $_model.CreateYikeProductionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateYikeProductionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateYikeProduction",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateYikeProductionResponse>(await this.callApi(params, req, runtime), new $_model.CreateYikeProductionResponse({}));
  }

  /**
   * Creates a project.
   * 
   * @param request - CreateYikeProductionRequest
   * @returns CreateYikeProductionResponse
   */
  async createYikeProduction(request: $_model.CreateYikeProductionRequest): Promise<$_model.CreateYikeProductionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createYikeProductionWithOptions(request, runtime);
  }

  /**
   * Creates a sub-account user in WonderClip.
   * 
   * @param request - CreateYikeUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateYikeUserResponse
   */
  async createYikeUserWithOptions(request: $_model.CreateYikeUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateYikeUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.nickname)) {
      query["Nickname"] = request.nickname;
    }

    if (!$dara.isNull(request.password)) {
      query["Password"] = request.password;
    }

    if (!$dara.isNull(request.productionIds)) {
      query["ProductionIds"] = request.productionIds;
    }

    if (!$dara.isNull(request.userNamePrefix)) {
      query["UserNamePrefix"] = request.userNamePrefix;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateYikeUser",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateYikeUserResponse>(await this.callApi(params, req, runtime), new $_model.CreateYikeUserResponse({}));
  }

  /**
   * Creates a sub-account user in WonderClip.
   * 
   * @param request - CreateYikeUserRequest
   * @returns CreateYikeUserResponse
   */
  async createYikeUser(request: $_model.CreateYikeUserRequest): Promise<$_model.CreateYikeUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createYikeUserWithOptions(request, runtime);
  }

  /**
   * Creates a workspace.
   * 
   * @param request - CreateYikeWorkspaceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateYikeWorkspaceResponse
   */
  async createYikeWorkspaceWithOptions(request: $_model.CreateYikeWorkspaceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateYikeWorkspaceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userCountLimit)) {
      query["UserCountLimit"] = request.userCountLimit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateYikeWorkspace",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateYikeWorkspaceResponse>(await this.callApi(params, req, runtime), new $_model.CreateYikeWorkspaceResponse({}));
  }

  /**
   * Creates a workspace.
   * 
   * @param request - CreateYikeWorkspaceRequest
   * @returns CreateYikeWorkspaceResponse
   */
  async createYikeWorkspace(request: $_model.CreateYikeWorkspaceRequest): Promise<$_model.CreateYikeWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createYikeWorkspaceWithOptions(request, runtime);
  }

  /**
   * Deletes media asset information.
   * 
   * @param request - DeleteYikeAssetMediaInfosRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteYikeAssetMediaInfosResponse
   */
  async deleteYikeAssetMediaInfosWithOptions(request: $_model.DeleteYikeAssetMediaInfosRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteYikeAssetMediaInfosResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logicDelete)) {
      query["LogicDelete"] = request.logicDelete;
    }

    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteYikeAssetMediaInfos",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteYikeAssetMediaInfosResponse>(await this.callApi(params, req, runtime), new $_model.DeleteYikeAssetMediaInfosResponse({}));
  }

  /**
   * Deletes media asset information.
   * 
   * @param request - DeleteYikeAssetMediaInfosRequest
   * @returns DeleteYikeAssetMediaInfosResponse
   */
  async deleteYikeAssetMediaInfos(request: $_model.DeleteYikeAssetMediaInfosRequest): Promise<$_model.DeleteYikeAssetMediaInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteYikeAssetMediaInfosWithOptions(request, runtime);
  }

  /**
   * Retrieves the details of an AI application task.
   * 
   * @param request - GetYikeAIAppJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikeAIAppJobResponse
   */
  async getYikeAIAppJobWithOptions(request: $_model.GetYikeAIAppJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikeAIAppJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYikeAIAppJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikeAIAppJobResponse>(await this.callApi(params, req, runtime), new $_model.GetYikeAIAppJobResponse({}));
  }

  /**
   * Retrieves the details of an AI application task.
   * 
   * @param request - GetYikeAIAppJobRequest
   * @returns GetYikeAIAppJobResponse
   */
  async getYikeAIAppJob(request: $_model.GetYikeAIAppJobRequest): Promise<$_model.GetYikeAIAppJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeAIAppJobWithOptions(request, runtime);
  }

  /**
   * Queries an agent task.
   * 
   * @param request - GetYikeAgentJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikeAgentJobResponse
   */
  async getYikeAgentJobWithOptions(request: $_model.GetYikeAgentJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikeAgentJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYikeAgentJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikeAgentJobResponse>(await this.callApi(params, req, runtime), new $_model.GetYikeAgentJobResponse({}));
  }

  /**
   * Queries an agent task.
   * 
   * @param request - GetYikeAgentJobRequest
   * @returns GetYikeAgentJobResponse
   */
  async getYikeAgentJob(request: $_model.GetYikeAgentJobRequest): Promise<$_model.GetYikeAgentJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeAgentJobWithOptions(request, runtime);
  }

  /**
   * Retrieves the content information of a media asset.
   * 
   * @param request - GetYikeAssetMediaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikeAssetMediaInfoResponse
   */
  async getYikeAssetMediaInfoWithOptions(request: $_model.GetYikeAssetMediaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikeAssetMediaInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYikeAssetMediaInfo",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikeAssetMediaInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetYikeAssetMediaInfoResponse({}));
  }

  /**
   * Retrieves the content information of a media asset.
   * 
   * @param request - GetYikeAssetMediaInfoRequest
   * @returns GetYikeAssetMediaInfoResponse
   */
  async getYikeAssetMediaInfo(request: $_model.GetYikeAssetMediaInfoRequest): Promise<$_model.GetYikeAssetMediaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeAssetMediaInfoWithOptions(request, runtime);
  }

  /**
   * Queries the information and results of an editing project export task.
   * 
   * @param request - GetYikeProjectExportJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikeProjectExportJobResponse
   */
  async getYikeProjectExportJobWithOptions(request: $_model.GetYikeProjectExportJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikeProjectExportJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYikeProjectExportJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikeProjectExportJobResponse>(await this.callApi(params, req, runtime), new $_model.GetYikeProjectExportJobResponse({}));
  }

  /**
   * Queries the information and results of an editing project export task.
   * 
   * @param request - GetYikeProjectExportJobRequest
   * @returns GetYikeProjectExportJobResponse
   */
  async getYikeProjectExportJob(request: $_model.GetYikeProjectExportJobRequest): Promise<$_model.GetYikeProjectExportJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeProjectExportJobWithOptions(request, runtime);
  }

  /**
   * Queries a Yike prompt enhancement and audio repair video generation task.
   * 
   * @param request - GetYikePromptExpansionVoiceFixJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikePromptExpansionVoiceFixJobResponse
   */
  async getYikePromptExpansionVoiceFixJobWithOptions(request: $_model.GetYikePromptExpansionVoiceFixJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikePromptExpansionVoiceFixJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYikePromptExpansionVoiceFixJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikePromptExpansionVoiceFixJobResponse>(await this.callApi(params, req, runtime), new $_model.GetYikePromptExpansionVoiceFixJobResponse({}));
  }

  /**
   * Queries a Yike prompt enhancement and audio repair video generation task.
   * 
   * @param request - GetYikePromptExpansionVoiceFixJobRequest
   * @returns GetYikePromptExpansionVoiceFixJobResponse
   */
  async getYikePromptExpansionVoiceFixJob(request: $_model.GetYikePromptExpansionVoiceFixJobRequest): Promise<$_model.GetYikePromptExpansionVoiceFixJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikePromptExpansionVoiceFixJobWithOptions(request, runtime);
  }

  /**
   * Retrieves a storyboard task.
   * 
   * @param request - GetYikeStoryboardJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikeStoryboardJobResponse
   */
  async getYikeStoryboardJobWithOptions(request: $_model.GetYikeStoryboardJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikeStoryboardJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYikeStoryboardJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikeStoryboardJobResponse>(await this.callApi(params, req, runtime), new $_model.GetYikeStoryboardJobResponse({}));
  }

  /**
   * Retrieves a storyboard task.
   * 
   * @param request - GetYikeStoryboardJobRequest
   * @returns GetYikeStoryboardJobResponse
   */
  async getYikeStoryboardJob(request: $_model.GetYikeStoryboardJobRequest): Promise<$_model.GetYikeStoryboardJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeStoryboardJobWithOptions(request, runtime);
  }

  /**
   * Retrieves information about a WonderClip sub-account.
   * 
   * @param request - GetYikeUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikeUserResponse
   */
  async getYikeUserWithOptions(request: $_model.GetYikeUserRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikeUserResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYikeUser",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikeUserResponse>(await this.callApi(params, req, runtime), new $_model.GetYikeUserResponse({}));
  }

  /**
   * Retrieves information about a WonderClip sub-account.
   * 
   * @param request - GetYikeUserRequest
   * @returns GetYikeUserResponse
   */
  async getYikeUser(request: $_model.GetYikeUserRequest): Promise<$_model.GetYikeUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeUserWithOptions(request, runtime);
  }

  /**
   * Queries the credit balance of a WonderClip user.
   * 
   * @param request - GetYikeUserCreditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikeUserCreditResponse
   */
  async getYikeUserCreditWithOptions(request: $_model.GetYikeUserCreditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikeUserCreditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.yikeUserId)) {
      query["YikeUserId"] = request.yikeUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYikeUserCredit",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikeUserCreditResponse>(await this.callApi(params, req, runtime), new $_model.GetYikeUserCreditResponse({}));
  }

  /**
   * Queries the credit balance of a WonderClip user.
   * 
   * @param request - GetYikeUserCreditRequest
   * @returns GetYikeUserCreditResponse
   */
  async getYikeUserCredit(request: $_model.GetYikeUserCreditRequest): Promise<$_model.GetYikeUserCreditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeUserCreditWithOptions(request, runtime);
  }

  /**
   * Queries an intelligent video generation task for a narration-only video without a digital human.
   * 
   * @param request - GetYikeVoiceNarratorJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikeVoiceNarratorJobResponse
   */
  async getYikeVoiceNarratorJobWithOptions(request: $_model.GetYikeVoiceNarratorJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikeVoiceNarratorJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYikeVoiceNarratorJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikeVoiceNarratorJobResponse>(await this.callApi(params, req, runtime), new $_model.GetYikeVoiceNarratorJobResponse({}));
  }

  /**
   * Queries an intelligent video generation task for a narration-only video without a digital human.
   * 
   * @param request - GetYikeVoiceNarratorJobRequest
   * @returns GetYikeVoiceNarratorJobResponse
   */
  async getYikeVoiceNarratorJob(request: $_model.GetYikeVoiceNarratorJobRequest): Promise<$_model.GetYikeVoiceNarratorJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeVoiceNarratorJobWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of folders.
   * 
   * @param request - ListYikeAssetFoldersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListYikeAssetFoldersResponse
   */
  async listYikeAssetFoldersWithOptions(request: $_model.ListYikeAssetFoldersRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListYikeAssetFoldersResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productionId)) {
      query["ProductionId"] = request.productionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListYikeAssetFolders",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListYikeAssetFoldersResponse>(await this.callApi(params, req, runtime), new $_model.ListYikeAssetFoldersResponse({}));
  }

  /**
   * Retrieves the list of folders.
   * 
   * @param request - ListYikeAssetFoldersRequest
   * @returns ListYikeAssetFoldersResponse
   */
  async listYikeAssetFolders(request: $_model.ListYikeAssetFoldersRequest): Promise<$_model.ListYikeAssetFoldersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listYikeAssetFoldersWithOptions(request, runtime);
  }

  /**
   * Retrieves a list of Yike projects.
   * 
   * @param request - ListYikeProductionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListYikeProductionsResponse
   */
  async listYikeProductionsWithOptions(request: $_model.ListYikeProductionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListYikeProductionsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListYikeProductions",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListYikeProductionsResponse>(await this.callApi(params, req, runtime), new $_model.ListYikeProductionsResponse({}));
  }

  /**
   * Retrieves a list of Yike projects.
   * 
   * @param request - ListYikeProductionsRequest
   * @returns ListYikeProductionsResponse
   */
  async listYikeProductions(request: $_model.ListYikeProductionsRequest): Promise<$_model.ListYikeProductionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listYikeProductionsWithOptions(request, runtime);
  }

  /**
   * Get Yike Workspace List
   * 
   * @param request - ListYikeWorkspacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListYikeWorkspacesResponse
   */
  async listYikeWorkspacesWithOptions(request: $_model.ListYikeWorkspacesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListYikeWorkspacesResponse> {
    request.validate();
    let query = { };
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
      action: "ListYikeWorkspaces",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListYikeWorkspacesResponse>(await this.callApi(params, req, runtime), new $_model.ListYikeWorkspacesResponse({}));
  }

  /**
   * Get Yike Workspace List
   * 
   * @param request - ListYikeWorkspacesRequest
   * @returns ListYikeWorkspacesResponse
   */
  async listYikeWorkspaces(request: $_model.ListYikeWorkspacesRequest): Promise<$_model.ListYikeWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listYikeWorkspacesWithOptions(request, runtime);
  }

  /**
   * Checks whether the application parameters are valid.
   * 
   * @param request - PrecheckYikeAIAppJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PrecheckYikeAIAppJobResponse
   */
  async precheckYikeAIAppJobWithOptions(request: $_model.PrecheckYikeAIAppJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PrecheckYikeAIAppJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appParams)) {
      query["AppParams"] = request.appParams;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PrecheckYikeAIAppJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PrecheckYikeAIAppJobResponse>(await this.callApi(params, req, runtime), new $_model.PrecheckYikeAIAppJobResponse({}));
  }

  /**
   * Checks whether the application parameters are valid.
   * 
   * @param request - PrecheckYikeAIAppJobRequest
   * @returns PrecheckYikeAIAppJobResponse
   */
  async precheckYikeAIAppJob(request: $_model.PrecheckYikeAIAppJobRequest): Promise<$_model.PrecheckYikeAIAppJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.precheckYikeAIAppJobWithOptions(request, runtime);
  }

  /**
   * Registers a Yike media asset.
   * 
   * @param request - RegisterYikeAssetMediaInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RegisterYikeAssetMediaInfoResponse
   */
  async registerYikeAssetMediaInfoWithOptions(request: $_model.RegisterYikeAssetMediaInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RegisterYikeAssetMediaInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.productionId)) {
      query["ProductionId"] = request.productionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RegisterYikeAssetMediaInfo",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RegisterYikeAssetMediaInfoResponse>(await this.callApi(params, req, runtime), new $_model.RegisterYikeAssetMediaInfoResponse({}));
  }

  /**
   * Registers a Yike media asset.
   * 
   * @param request - RegisterYikeAssetMediaInfoRequest
   * @returns RegisterYikeAssetMediaInfoResponse
   */
  async registerYikeAssetMediaInfo(request: $_model.RegisterYikeAssetMediaInfoRequest): Promise<$_model.RegisterYikeAssetMediaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerYikeAssetMediaInfoWithOptions(request, runtime);
  }

  /**
   * Resumes the execution of a storyboard task.
   * 
   * @param request - ResumeYikeStoryboardJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeYikeStoryboardJobResponse
   */
  async resumeYikeStoryboardJobWithOptions(request: $_model.ResumeYikeStoryboardJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ResumeYikeStoryboardJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeYikeStoryboardJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ResumeYikeStoryboardJobResponse>(await this.callApi(params, req, runtime), new $_model.ResumeYikeStoryboardJobResponse({}));
  }

  /**
   * Resumes the execution of a storyboard task.
   * 
   * @param request - ResumeYikeStoryboardJobRequest
   * @returns ResumeYikeStoryboardJobResponse
   */
  async resumeYikeStoryboardJob(request: $_model.ResumeYikeStoryboardJobRequest): Promise<$_model.ResumeYikeStoryboardJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeYikeStoryboardJobWithOptions(request, runtime);
  }

  /**
   * Configures event callbacks for the business system.
   * 
   * @param request - SetYikeCallbackConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetYikeCallbackConfigResponse
   */
  async setYikeCallbackConfigWithOptions(request: $_model.SetYikeCallbackConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetYikeCallbackConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.callbackConfig)) {
      query["CallbackConfig"] = request.callbackConfig;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetYikeCallbackConfig",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetYikeCallbackConfigResponse>(await this.callApi(params, req, runtime), new $_model.SetYikeCallbackConfigResponse({}));
  }

  /**
   * Configures event callbacks for the business system.
   * 
   * @param request - SetYikeCallbackConfigRequest
   * @returns SetYikeCallbackConfigResponse
   */
  async setYikeCallbackConfig(request: $_model.SetYikeCallbackConfigRequest): Promise<$_model.SetYikeCallbackConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setYikeCallbackConfigWithOptions(request, runtime);
  }

  /**
   * Sets the user role.
   * 
   * @param request - SetYikeUserRoleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetYikeUserRoleResponse
   */
  async setYikeUserRoleWithOptions(request: $_model.SetYikeUserRoleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SetYikeUserRoleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.roleName)) {
      query["RoleName"] = request.roleName;
    }

    if (!$dara.isNull(request.yikeUserId)) {
      query["YikeUserId"] = request.yikeUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetYikeUserRole",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SetYikeUserRoleResponse>(await this.callApi(params, req, runtime), new $_model.SetYikeUserRoleResponse({}));
  }

  /**
   * Sets the user role.
   * 
   * @param request - SetYikeUserRoleRequest
   * @returns SetYikeUserRoleResponse
   */
  async setYikeUserRole(request: $_model.SetYikeUserRoleRequest): Promise<$_model.SetYikeUserRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setYikeUserRoleWithOptions(request, runtime);
  }

  /**
   * Reclaims credits from a user.
   * 
   * @param request - SubYikeUserCreditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubYikeUserCreditResponse
   */
  async subYikeUserCreditWithOptions(request: $_model.SubYikeUserCreditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubYikeUserCreditResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.credit)) {
      query["Credit"] = request.credit;
    }

    if (!$dara.isNull(request.yikeUserId)) {
      query["YikeUserId"] = request.yikeUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubYikeUserCredit",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubYikeUserCreditResponse>(await this.callApi(params, req, runtime), new $_model.SubYikeUserCreditResponse({}));
  }

  /**
   * Reclaims credits from a user.
   * 
   * @param request - SubYikeUserCreditRequest
   * @returns SubYikeUserCreditResponse
   */
  async subYikeUserCredit(request: $_model.SubYikeUserCreditRequest): Promise<$_model.SubYikeUserCreditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.subYikeUserCreditWithOptions(request, runtime);
  }

  /**
   * Submits an AI application task to Yike AI.
   * 
   * @param request - SubmitYikeAIAppJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitYikeAIAppJobResponse
   */
  async submitYikeAIAppJobWithOptions(request: $_model.SubmitYikeAIAppJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitYikeAIAppJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appParams)) {
      body["AppParams"] = request.appParams;
    }

    if (!$dara.isNull(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!$dara.isNull(request.productionId)) {
      body["ProductionId"] = request.productionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitYikeAIAppJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitYikeAIAppJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitYikeAIAppJobResponse({}));
  }

  /**
   * Submits an AI application task to Yike AI.
   * 
   * @param request - SubmitYikeAIAppJobRequest
   * @returns SubmitYikeAIAppJobResponse
   */
  async submitYikeAIAppJob(request: $_model.SubmitYikeAIAppJobRequest): Promise<$_model.SubmitYikeAIAppJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitYikeAIAppJobWithOptions(request, runtime);
  }

  /**
   * Creates an intelligent video production task for a digital human oral broadcasting scenario. This task is applicable to video scenarios such as influencer product promotion and knowledge sharing.
   * 
   * @remarks
   * ## Operation description
   * This API operation generates a video featuring a virtual human delivering an oral broadcast based on the provided text content and other parameters such as digital human information and common scenario type. You must specify key configuration items including the text type (raw script or oral broadcast script), video dimensions, and resolution. You can also choose whether to add subtitles or specify the output language. In addition, you can pass custom parameters through the `UserData` field, which are returned as-is in the callback.
   * 
   * @param request - SubmitYikeAvatarNarratorJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitYikeAvatarNarratorJobResponse
   */
  async submitYikeAvatarNarratorJobWithOptions(request: $_model.SubmitYikeAvatarNarratorJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitYikeAvatarNarratorJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobParams)) {
      body["JobParams"] = request.jobParams;
    }

    if (!$dara.isNull(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitYikeAvatarNarratorJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitYikeAvatarNarratorJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitYikeAvatarNarratorJobResponse({}));
  }

  /**
   * Creates an intelligent video production task for a digital human oral broadcasting scenario. This task is applicable to video scenarios such as influencer product promotion and knowledge sharing.
   * 
   * @remarks
   * ## Operation description
   * This API operation generates a video featuring a virtual human delivering an oral broadcast based on the provided text content and other parameters such as digital human information and common scenario type. You must specify key configuration items including the text type (raw script or oral broadcast script), video dimensions, and resolution. You can also choose whether to add subtitles or specify the output language. In addition, you can pass custom parameters through the `UserData` field, which are returned as-is in the callback.
   * 
   * @param request - SubmitYikeAvatarNarratorJobRequest
   * @returns SubmitYikeAvatarNarratorJobResponse
   */
  async submitYikeAvatarNarratorJob(request: $_model.SubmitYikeAvatarNarratorJobRequest): Promise<$_model.SubmitYikeAvatarNarratorJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitYikeAvatarNarratorJobWithOptions(request, runtime);
  }

  /**
   * Submits an online editing project export task that supports exporting pure audio and SRT subtitles.
   * 
   * @param request - SubmitYikeProjectExportJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitYikeProjectExportJobResponse
   */
  async submitYikeProjectExportJobWithOptions(request: $_model.SubmitYikeProjectExportJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitYikeProjectExportJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.exportType)) {
      query["ExportType"] = request.exportType;
    }

    if (!$dara.isNull(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitYikeProjectExportJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitYikeProjectExportJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitYikeProjectExportJobResponse({}));
  }

  /**
   * Submits an online editing project export task that supports exporting pure audio and SRT subtitles.
   * 
   * @param request - SubmitYikeProjectExportJobRequest
   * @returns SubmitYikeProjectExportJobResponse
   */
  async submitYikeProjectExportJob(request: $_model.SubmitYikeProjectExportJobRequest): Promise<$_model.SubmitYikeProjectExportJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitYikeProjectExportJobWithOptions(request, runtime);
  }

  /**
   * Submits a video generation task with prompt enhancement and audio repair.
   * 
   * @param request - SubmitYikePromptExpansionVoiceFixJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitYikePromptExpansionVoiceFixJobResponse
   */
  async submitYikePromptExpansionVoiceFixJobWithOptions(request: $_model.SubmitYikePromptExpansionVoiceFixJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitYikePromptExpansionVoiceFixJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobParams)) {
      body["JobParams"] = request.jobParams;
    }

    if (!$dara.isNull(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitYikePromptExpansionVoiceFixJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitYikePromptExpansionVoiceFixJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitYikePromptExpansionVoiceFixJobResponse({}));
  }

  /**
   * Submits a video generation task with prompt enhancement and audio repair.
   * 
   * @param request - SubmitYikePromptExpansionVoiceFixJobRequest
   * @returns SubmitYikePromptExpansionVoiceFixJobResponse
   */
  async submitYikePromptExpansionVoiceFixJob(request: $_model.SubmitYikePromptExpansionVoiceFixJobRequest): Promise<$_model.SubmitYikePromptExpansionVoiceFixJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitYikePromptExpansionVoiceFixJobWithOptions(request, runtime);
  }

  /**
   * Submits a storyboard generation task.
   * 
   * @remarks
   * Ensure that your credits remain above 5,000 when calling this operation. Insufficient credits may cause the task to be interrupted.
   * 
   * @param request - SubmitYikeStoryboardJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitYikeStoryboardJobResponse
   */
  async submitYikeStoryboardJobWithOptions(request: $_model.SubmitYikeStoryboardJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitYikeStoryboardJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aspectRatio)) {
      query["AspectRatio"] = request.aspectRatio;
    }

    if (!$dara.isNull(request.execMode)) {
      query["ExecMode"] = request.execMode;
    }

    if (!$dara.isNull(request.keepOriginDialogue)) {
      query["KeepOriginDialogue"] = request.keepOriginDialogue;
    }

    if (!$dara.isNull(request.modelParams)) {
      query["ModelParams"] = request.modelParams;
    }

    if (!$dara.isNull(request.narrationVoiceId)) {
      query["NarrationVoiceId"] = request.narrationVoiceId;
    }

    if (!$dara.isNull(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!$dara.isNull(request.shotPromptMode)) {
      query["ShotPromptMode"] = request.shotPromptMode;
    }

    if (!$dara.isNull(request.skipFailureShot)) {
      query["SkipFailureShot"] = request.skipFailureShot;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.videoModel)) {
      query["VideoModel"] = request.videoModel;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileURL)) {
      body["FileURL"] = request.fileURL;
    }

    if (!$dara.isNull(request.shotSplitMode)) {
      body["ShotSplitMode"] = request.shotSplitMode;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.styleId)) {
      body["StyleId"] = request.styleId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitYikeStoryboardJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitYikeStoryboardJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitYikeStoryboardJobResponse({}));
  }

  /**
   * Submits a storyboard generation task.
   * 
   * @remarks
   * Ensure that your credits remain above 5,000 when calling this operation. Insufficient credits may cause the task to be interrupted.
   * 
   * @param request - SubmitYikeStoryboardJobRequest
   * @returns SubmitYikeStoryboardJobResponse
   */
  async submitYikeStoryboardJob(request: $_model.SubmitYikeStoryboardJobRequest): Promise<$_model.SubmitYikeStoryboardJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitYikeStoryboardJobWithOptions(request, runtime);
  }

  /**
   * Creates an intelligent video generation task for a voiceover-only scenario (without a digital human). This task is applicable to video scenarios such as product showcases and news broadcasts.
   * 
   * @param request - SubmitYikeVoiceNarratorJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitYikeVoiceNarratorJobResponse
   */
  async submitYikeVoiceNarratorJobWithOptions(request: $_model.SubmitYikeVoiceNarratorJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitYikeVoiceNarratorJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobParams)) {
      body["JobParams"] = request.jobParams;
    }

    if (!$dara.isNull(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitYikeVoiceNarratorJob",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitYikeVoiceNarratorJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitYikeVoiceNarratorJobResponse({}));
  }

  /**
   * Creates an intelligent video generation task for a voiceover-only scenario (without a digital human). This task is applicable to video scenarios such as product showcases and news broadcasts.
   * 
   * @param request - SubmitYikeVoiceNarratorJobRequest
   * @returns SubmitYikeVoiceNarratorJobResponse
   */
  async submitYikeVoiceNarratorJob(request: $_model.SubmitYikeVoiceNarratorJobRequest): Promise<$_model.SubmitYikeVoiceNarratorJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitYikeVoiceNarratorJobWithOptions(request, runtime);
  }

  /**
   * Update a Yike project
   * 
   * @param request - UpdateYikeProductionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateYikeProductionResponse
   */
  async updateYikeProductionWithOptions(request: $_model.UpdateYikeProductionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateYikeProductionResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.productionId)) {
      query["ProductionId"] = request.productionId;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateYikeProduction",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateYikeProductionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateYikeProductionResponse({}));
  }

  /**
   * Update a Yike project
   * 
   * @param request - UpdateYikeProductionRequest
   * @returns UpdateYikeProductionResponse
   */
  async updateYikeProduction(request: $_model.UpdateYikeProductionRequest): Promise<$_model.UpdateYikeProductionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateYikeProductionWithOptions(request, runtime);
  }

  /**
   * Modifies the permissions of a Yike project member.
   * 
   * @param request - UpdateYikeProductionMemberAuthRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateYikeProductionMemberAuthResponse
   */
  async updateYikeProductionMemberAuthWithOptions(request: $_model.UpdateYikeProductionMemberAuthRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateYikeProductionMemberAuthResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.auth)) {
      query["Auth"] = request.auth;
    }

    if (!$dara.isNull(request.productionId)) {
      query["ProductionId"] = request.productionId;
    }

    if (!$dara.isNull(request.yikeUserId)) {
      query["YikeUserId"] = request.yikeUserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateYikeProductionMemberAuth",
      version: "2026-03-19",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateYikeProductionMemberAuthResponse>(await this.callApi(params, req, runtime), new $_model.UpdateYikeProductionMemberAuthResponse({}));
  }

  /**
   * Modifies the permissions of a Yike project member.
   * 
   * @param request - UpdateYikeProductionMemberAuthRequest
   * @returns UpdateYikeProductionMemberAuthResponse
   */
  async updateYikeProductionMemberAuth(request: $_model.UpdateYikeProductionMemberAuthRequest): Promise<$_model.UpdateYikeProductionMemberAuthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateYikeProductionMemberAuthWithOptions(request, runtime);
  }

}
