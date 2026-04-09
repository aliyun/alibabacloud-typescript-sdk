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

}
