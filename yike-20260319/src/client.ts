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
   * 增加用户积分
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
   * 增加用户积分
   * 
   * @param request - AddYikeUserCreditRequest
   * @returns AddYikeUserCreditResponse
   */
  async addYikeUserCredit(request: $_model.AddYikeUserCreditRequest): Promise<$_model.AddYikeUserCreditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addYikeUserCreditWithOptions(request, runtime);
  }

  /**
   * 批量获取一刻AI应用生成任务
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
   * 批量获取一刻AI应用生成任务
   * 
   * @param request - BatchGetYikeAIAppJobRequest
   * @returns BatchGetYikeAIAppJobResponse
   */
  async batchGetYikeAIAppJob(request: $_model.BatchGetYikeAIAppJobRequest): Promise<$_model.BatchGetYikeAIAppJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetYikeAIAppJobWithOptions(request, runtime);
  }

  /**
   * 批量获取媒资信息
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
   * 批量获取媒资信息
   * 
   * @param request - BatchGetYikeAssetMediaInfosRequest
   * @returns BatchGetYikeAssetMediaInfosResponse
   */
  async batchGetYikeAssetMediaInfos(request: $_model.BatchGetYikeAssetMediaInfosRequest): Promise<$_model.BatchGetYikeAssetMediaInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetYikeAssetMediaInfosWithOptions(request, runtime);
  }

  /**
   * 获取一刻媒资上传凭证
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
   * 获取一刻媒资上传凭证
   * 
   * @param request - CreateYikeAssetUploadRequest
   * @returns CreateYikeAssetUploadResponse
   */
  async createYikeAssetUpload(request: $_model.CreateYikeAssetUploadRequest): Promise<$_model.CreateYikeAssetUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createYikeAssetUploadWithOptions(request, runtime);
  }

  /**
   * 创建一刻项目
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
   * 创建一刻项目
   * 
   * @param request - CreateYikeProductionRequest
   * @returns CreateYikeProductionResponse
   */
  async createYikeProduction(request: $_model.CreateYikeProductionRequest): Promise<$_model.CreateYikeProductionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createYikeProductionWithOptions(request, runtime);
  }

  /**
   * 创建一刻子用户
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
   * 创建一刻子用户
   * 
   * @param request - CreateYikeUserRequest
   * @returns CreateYikeUserResponse
   */
  async createYikeUser(request: $_model.CreateYikeUserRequest): Promise<$_model.CreateYikeUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createYikeUserWithOptions(request, runtime);
  }

  /**
   * 创建工作室
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
   * 创建工作室
   * 
   * @param request - CreateYikeWorkspaceRequest
   * @returns CreateYikeWorkspaceResponse
   */
  async createYikeWorkspace(request: $_model.CreateYikeWorkspaceRequest): Promise<$_model.CreateYikeWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createYikeWorkspaceWithOptions(request, runtime);
  }

  /**
   * 删除媒资信息
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
   * 删除媒资信息
   * 
   * @param request - DeleteYikeAssetMediaInfosRequest
   * @returns DeleteYikeAssetMediaInfosResponse
   */
  async deleteYikeAssetMediaInfos(request: $_model.DeleteYikeAssetMediaInfosRequest): Promise<$_model.DeleteYikeAssetMediaInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteYikeAssetMediaInfosWithOptions(request, runtime);
  }

  /**
   * 获取一刻AI应用任务
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
   * 获取一刻AI应用任务
   * 
   * @param request - GetYikeAIAppJobRequest
   * @returns GetYikeAIAppJobResponse
   */
  async getYikeAIAppJob(request: $_model.GetYikeAIAppJobRequest): Promise<$_model.GetYikeAIAppJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeAIAppJobWithOptions(request, runtime);
  }

  /**
   * 获取一刻媒资内容信息
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
   * 获取一刻媒资内容信息
   * 
   * @param request - GetYikeAssetMediaInfoRequest
   * @returns GetYikeAssetMediaInfoResponse
   */
  async getYikeAssetMediaInfo(request: $_model.GetYikeAssetMediaInfoRequest): Promise<$_model.GetYikeAssetMediaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeAssetMediaInfoWithOptions(request, runtime);
  }

  /**
   * 获取一刻故事板任务
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
   * 获取一刻故事板任务
   * 
   * @param request - GetYikeStoryboardJobRequest
   * @returns GetYikeStoryboardJobResponse
   */
  async getYikeStoryboardJob(request: $_model.GetYikeStoryboardJobRequest): Promise<$_model.GetYikeStoryboardJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeStoryboardJobWithOptions(request, runtime);
  }

  /**
   * 获取一刻子用户信息
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
   * 获取一刻子用户信息
   * 
   * @param request - GetYikeUserRequest
   * @returns GetYikeUserResponse
   */
  async getYikeUser(request: $_model.GetYikeUserRequest): Promise<$_model.GetYikeUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeUserWithOptions(request, runtime);
  }

  /**
   * 查询一刻用户积分
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
   * 查询一刻用户积分
   * 
   * @param request - GetYikeUserCreditRequest
   * @returns GetYikeUserCreditResponse
   */
  async getYikeUserCredit(request: $_model.GetYikeUserCreditRequest): Promise<$_model.GetYikeUserCreditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeUserCreditWithOptions(request, runtime);
  }

  /**
   * 查询一刻口播视频生成任务
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
   * 查询一刻口播视频生成任务
   * 
   * @param request - GetYikeVoiceNarratorJobRequest
   * @returns GetYikeVoiceNarratorJobResponse
   */
  async getYikeVoiceNarratorJob(request: $_model.GetYikeVoiceNarratorJobRequest): Promise<$_model.GetYikeVoiceNarratorJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeVoiceNarratorJobWithOptions(request, runtime);
  }

  /**
   * 获取一刻文件夹列表
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
   * 获取一刻文件夹列表
   * 
   * @param request - ListYikeAssetFoldersRequest
   * @returns ListYikeAssetFoldersResponse
   */
  async listYikeAssetFolders(request: $_model.ListYikeAssetFoldersRequest): Promise<$_model.ListYikeAssetFoldersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listYikeAssetFoldersWithOptions(request, runtime);
  }

  /**
   * 获取一刻项目列表
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
   * 获取一刻项目列表
   * 
   * @param request - ListYikeProductionsRequest
   * @returns ListYikeProductionsResponse
   */
  async listYikeProductions(request: $_model.ListYikeProductionsRequest): Promise<$_model.ListYikeProductionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listYikeProductionsWithOptions(request, runtime);
  }

  /**
   * 检查应用参数是否合法
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
   * 检查应用参数是否合法
   * 
   * @param request - PrecheckYikeAIAppJobRequest
   * @returns PrecheckYikeAIAppJobResponse
   */
  async precheckYikeAIAppJob(request: $_model.PrecheckYikeAIAppJobRequest): Promise<$_model.PrecheckYikeAIAppJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.precheckYikeAIAppJobWithOptions(request, runtime);
  }

  /**
   * 注册一刻媒资
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
   * 注册一刻媒资
   * 
   * @param request - RegisterYikeAssetMediaInfoRequest
   * @returns RegisterYikeAssetMediaInfoResponse
   */
  async registerYikeAssetMediaInfo(request: $_model.RegisterYikeAssetMediaInfoRequest): Promise<$_model.RegisterYikeAssetMediaInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.registerYikeAssetMediaInfoWithOptions(request, runtime);
  }

  /**
   * 故事板任务恢复继续执行任务
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
   * 故事板任务恢复继续执行任务
   * 
   * @param request - ResumeYikeStoryboardJobRequest
   * @returns ResumeYikeStoryboardJobResponse
   */
  async resumeYikeStoryboardJob(request: $_model.ResumeYikeStoryboardJobRequest): Promise<$_model.ResumeYikeStoryboardJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeYikeStoryboardJobWithOptions(request, runtime);
  }

  /**
   * 配置一刻事件回调
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
   * 配置一刻事件回调
   * 
   * @param request - SetYikeCallbackConfigRequest
   * @returns SetYikeCallbackConfigResponse
   */
  async setYikeCallbackConfig(request: $_model.SetYikeCallbackConfigRequest): Promise<$_model.SetYikeCallbackConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setYikeCallbackConfigWithOptions(request, runtime);
  }

  /**
   * 设置用户角色
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
   * 设置用户角色
   * 
   * @param request - SetYikeUserRoleRequest
   * @returns SetYikeUserRoleResponse
   */
  async setYikeUserRole(request: $_model.SetYikeUserRoleRequest): Promise<$_model.SetYikeUserRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.setYikeUserRoleWithOptions(request, runtime);
  }

  /**
   * 扣减用户积分
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
   * 扣减用户积分
   * 
   * @param request - SubYikeUserCreditRequest
   * @returns SubYikeUserCreditResponse
   */
  async subYikeUserCredit(request: $_model.SubYikeUserCreditRequest): Promise<$_model.SubYikeUserCreditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.subYikeUserCreditWithOptions(request, runtime);
  }

  /**
   * 提交一刻AI应用任务
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
   * 提交一刻AI应用任务
   * 
   * @param request - SubmitYikeAIAppJobRequest
   * @returns SubmitYikeAIAppJobResponse
   */
  async submitYikeAIAppJob(request: $_model.SubmitYikeAIAppJobRequest): Promise<$_model.SubmitYikeAIAppJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitYikeAIAppJobWithOptions(request, runtime);
  }

  /**
   * 提交一刻故事板任务
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
   * 提交一刻故事板任务
   * 
   * @param request - SubmitYikeStoryboardJobRequest
   * @returns SubmitYikeStoryboardJobResponse
   */
  async submitYikeStoryboardJob(request: $_model.SubmitYikeStoryboardJobRequest): Promise<$_model.SubmitYikeStoryboardJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitYikeStoryboardJobWithOptions(request, runtime);
  }

  /**
   * 提交一刻口播视频生成任务
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
   * 提交一刻口播视频生成任务
   * 
   * @param request - SubmitYikeVoiceNarratorJobRequest
   * @returns SubmitYikeVoiceNarratorJobResponse
   */
  async submitYikeVoiceNarratorJob(request: $_model.SubmitYikeVoiceNarratorJobRequest): Promise<$_model.SubmitYikeVoiceNarratorJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitYikeVoiceNarratorJobWithOptions(request, runtime);
  }

}
