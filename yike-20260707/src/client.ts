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
      'ap-southeast-1': "yike.ap-southeast-1.aliyuncs.com",
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
   * 批量获取媒资信息
   * 
   * @remarks
   * ## 请求说明
   * 该API用于查询媒资内容理解作业。
   * 
   * @param request - BatchGetMediasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetMediasResponse
   */
  async batchGetMediasWithOptions(request: $_model.BatchGetMediasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetMediasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "BatchGetMedias",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetMediasResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetMediasResponse({}));
  }

  /**
   * 批量获取媒资信息
   * 
   * @remarks
   * ## 请求说明
   * 该API用于查询媒资内容理解作业。
   * 
   * @param request - BatchGetMediasRequest
   * @returns BatchGetMediasResponse
   */
  async batchGetMedias(request: $_model.BatchGetMediasRequest): Promise<$_model.BatchGetMediasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.batchGetMediasWithOptions(request, runtime);
  }

  /**
   * 创建分类
   * 
   * @remarks
   * 分类最多支持三级分类，每级分类最多支持创建 100 个子分类。
   * 
   * @param request - CreateAssetCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAssetCategoryResponse
   */
  async createAssetCategoryWithOptions(request: $_model.CreateAssetCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAssetCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.parentId)) {
      query["ParentId"] = request.parentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAssetCategory",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAssetCategoryResponse>(await this.callApi(params, req, runtime), new $_model.CreateAssetCategoryResponse({}));
  }

  /**
   * 创建分类
   * 
   * @remarks
   * 分类最多支持三级分类，每级分类最多支持创建 100 个子分类。
   * 
   * @param request - CreateAssetCategoryRequest
   * @returns CreateAssetCategoryResponse
   */
  async createAssetCategory(request: $_model.CreateAssetCategoryRequest): Promise<$_model.CreateAssetCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAssetCategoryWithOptions(request, runtime);
  }

  /**
   * 删除分类
   * 
   * @remarks
   * 此接口会同时删除其子分类（包括二级分类和三级分类），请慎重操作。
   * 
   * @param request - DeleteAssetCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAssetCategoryResponse
   */
  async deleteAssetCategoryWithOptions(request: $_model.DeleteAssetCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAssetCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAssetCategory",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAssetCategoryResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAssetCategoryResponse({}));
  }

  /**
   * 删除分类
   * 
   * @remarks
   * 此接口会同时删除其子分类（包括二级分类和三级分类），请慎重操作。
   * 
   * @param request - DeleteAssetCategoryRequest
   * @returns DeleteAssetCategoryResponse
   */
  async deleteAssetCategory(request: $_model.DeleteAssetCategoryRequest): Promise<$_model.DeleteAssetCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAssetCategoryWithOptions(request, runtime);
  }

  /**
   * 删除媒资信息
   * 
   * @param request - DeleteMediasRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMediasResponse
   */
  async deleteMediasWithOptions(request: $_model.DeleteMediasRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteMediasResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.deletePhysicalFiles)) {
      query["DeletePhysicalFiles"] = request.deletePhysicalFiles;
    }

    if (!$dara.isNull(request.inputURLs)) {
      query["InputURLs"] = request.inputURLs;
    }

    if (!$dara.isNull(request.mediaIds)) {
      query["MediaIds"] = request.mediaIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMedias",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteMediasResponse>(await this.callApi(params, req, runtime), new $_model.DeleteMediasResponse({}));
  }

  /**
   * 删除媒资信息
   * 
   * @param request - DeleteMediasRequest
   * @returns DeleteMediasResponse
   */
  async deleteMedias(request: $_model.DeleteMediasRequest): Promise<$_model.DeleteMediasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteMediasWithOptions(request, runtime);
  }

  /**
   * 查询分类
   * 
   * @param request - GetAssetCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAssetCategoryResponse
   */
  async getAssetCategoryWithOptions(request: $_model.GetAssetCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAssetCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAssetCategory",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAssetCategoryResponse>(await this.callApi(params, req, runtime), new $_model.GetAssetCategoryResponse({}));
  }

  /**
   * 查询分类
   * 
   * @param request - GetAssetCategoryRequest
   * @returns GetAssetCategoryResponse
   */
  async getAssetCategory(request: $_model.GetAssetCategoryRequest): Promise<$_model.GetAssetCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAssetCategoryWithOptions(request, runtime);
  }

  /**
   * 查询图片生成任务
   * 
   * @param request - GetImageGenerationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageGenerationJobResponse
   */
  async getImageGenerationJobWithOptions(request: $_model.GetImageGenerationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageGenerationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageGenerationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageGenerationJobResponse>(await this.callApi(params, req, runtime), new $_model.GetImageGenerationJobResponse({}));
  }

  /**
   * 查询图片生成任务
   * 
   * @param request - GetImageGenerationJobRequest
   * @returns GetImageGenerationJobResponse
   */
  async getImageGenerationJob(request: $_model.GetImageGenerationJobRequest): Promise<$_model.GetImageGenerationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageGenerationJobWithOptions(request, runtime);
  }

  /**
   * 查询媒资
   * 
   * @remarks
   * ## 请求说明
   * 该API用于查询媒资内容理解作业。
   * 
   * @param request - GetMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaResponse
   */
  async getMediaWithOptions(request: $_model.GetMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authTimeout)) {
      query["AuthTimeout"] = request.authTimeout;
    }

    if (!$dara.isNull(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMedia",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaResponse({}));
  }

  /**
   * 查询媒资
   * 
   * @remarks
   * ## 请求说明
   * 该API用于查询媒资内容理解作业。
   * 
   * @param request - GetMediaRequest
   * @returns GetMediaResponse
   */
  async getMedia(request: $_model.GetMediaRequest): Promise<$_model.GetMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaWithOptions(request, runtime);
  }

  /**
   * 查询媒资内容理解作业
   * 
   * @remarks
   * ## 请求说明
   * 该API用于查询媒资内容理解作业。
   * 
   * @param request - GetMediaComprehensionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMediaComprehensionJobResponse
   */
  async getMediaComprehensionJobWithOptions(request: $_model.GetMediaComprehensionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetMediaComprehensionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMediaComprehensionJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMediaComprehensionJobResponse>(await this.callApi(params, req, runtime), new $_model.GetMediaComprehensionJobResponse({}));
  }

  /**
   * 查询媒资内容理解作业
   * 
   * @remarks
   * ## 请求说明
   * 该API用于查询媒资内容理解作业。
   * 
   * @param request - GetMediaComprehensionJobRequest
   * @returns GetMediaComprehensionJobResponse
   */
  async getMediaComprehensionJob(request: $_model.GetMediaComprehensionJobRequest): Promise<$_model.GetMediaComprehensionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getMediaComprehensionJobWithOptions(request, runtime);
  }

  /**
   * 查询视频生成任务
   * 
   * @param request - GetVideoGenerationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoGenerationJobResponse
   */
  async getVideoGenerationJobWithOptions(request: $_model.GetVideoGenerationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoGenerationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoGenerationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoGenerationJobResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoGenerationJobResponse({}));
  }

  /**
   * 查询视频生成任务
   * 
   * @param request - GetVideoGenerationJobRequest
   * @returns GetVideoGenerationJobResponse
   */
  async getVideoGenerationJob(request: $_model.GetVideoGenerationJobRequest): Promise<$_model.GetVideoGenerationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getVideoGenerationJobWithOptions(request, runtime);
  }

  /**
   * 获取一刻主账户会员计划及积分情况
   * 
   * @param request - GetYikeAccountCreditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikeAccountCreditResponse
   */
  async getYikeAccountCreditWithOptions(request: $_model.GetYikeAccountCreditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikeAccountCreditResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetYikeAccountCredit",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikeAccountCreditResponse>(await this.callApi(params, req, runtime), new $_model.GetYikeAccountCreditResponse({}));
  }

  /**
   * 获取一刻主账户会员计划及积分情况
   * 
   * @param request - GetYikeAccountCreditRequest
   * @returns GetYikeAccountCreditResponse
   */
  async getYikeAccountCredit(request: $_model.GetYikeAccountCreditRequest): Promise<$_model.GetYikeAccountCreditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeAccountCreditWithOptions(request, runtime);
  }

  /**
   * 查询一刻任务实际消耗积分
   * 
   * @param request - GetYikeJobCreditRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetYikeJobCreditResponse
   */
  async getYikeJobCreditWithOptions(request: $_model.GetYikeJobCreditRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetYikeJobCreditResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetYikeJobCredit",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetYikeJobCreditResponse>(await this.callApi(params, req, runtime), new $_model.GetYikeJobCreditResponse({}));
  }

  /**
   * 查询一刻任务实际消耗积分
   * 
   * @param request - GetYikeJobCreditRequest
   * @returns GetYikeJobCreditResponse
   */
  async getYikeJobCredit(request: $_model.GetYikeJobCreditRequest): Promise<$_model.GetYikeJobCreditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getYikeJobCreditWithOptions(request, runtime);
  }

  /**
   * 导入媒资
   * 
   * @remarks
   * ## 请求说明
   * 该API用于查询媒资内容理解作业。
   * 
   * @param request - ImportMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportMediaResponse
   */
  async importMediaWithOptions(request: $_model.ImportMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImportMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dynamicMetaData)) {
      query["DynamicMetaData"] = request.dynamicMetaData;
    }

    if (!$dara.isNull(request.entityId)) {
      query["EntityId"] = request.entityId;
    }

    if (!$dara.isNull(request.importSource)) {
      query["ImportSource"] = request.importSource;
    }

    if (!$dara.isNull(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!$dara.isNull(request.mediaTags)) {
      query["MediaTags"] = request.mediaTags;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.overwrite)) {
      query["Overwrite"] = request.overwrite;
    }

    if (!$dara.isNull(request.registerConfig)) {
      query["RegisterConfig"] = request.registerConfig;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportMedia",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportMediaResponse>(await this.callApi(params, req, runtime), new $_model.ImportMediaResponse({}));
  }

  /**
   * 导入媒资
   * 
   * @remarks
   * ## 请求说明
   * 该API用于查询媒资内容理解作业。
   * 
   * @param request - ImportMediaRequest
   * @returns ImportMediaResponse
   */
  async importMedia(request: $_model.ImportMediaRequest): Promise<$_model.ImportMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.importMediaWithOptions(request, runtime);
  }

  /**
   * 列出分类
   * 
   * @param request - ListAssetCategoriesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAssetCategoriesResponse
   */
  async listAssetCategoriesWithOptions(request: $_model.ListAssetCategoriesRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAssetCategoriesResponse> {
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
      action: "ListAssetCategories",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAssetCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListAssetCategoriesResponse({}));
  }

  /**
   * 列出分类
   * 
   * @param request - ListAssetCategoriesRequest
   * @returns ListAssetCategoriesResponse
   */
  async listAssetCategories(request: $_model.ListAssetCategoriesRequest): Promise<$_model.ListAssetCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAssetCategoriesWithOptions(request, runtime);
  }

  /**
   * 搜索媒资
   * 
   * @param request - SearchMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchMediaResponse
   */
  async searchMediaWithOptions(request: $_model.SearchMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SearchMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.match)) {
      query["Match"] = request.match;
    }

    if (!$dara.isNull(request.pageNo)) {
      query["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.scrollToken)) {
      query["ScrollToken"] = request.scrollToken;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchMedia",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchMediaResponse>(await this.callApi(params, req, runtime), new $_model.SearchMediaResponse({}));
  }

  /**
   * 搜索媒资
   * 
   * @param request - SearchMediaRequest
   * @returns SearchMediaResponse
   */
  async searchMedia(request: $_model.SearchMediaRequest): Promise<$_model.SearchMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.searchMediaWithOptions(request, runtime);
  }

  /**
   * 提交图像生成接口
   * 
   * @param request - SubmitImageGenerationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitImageGenerationJobResponse
   */
  async submitImageGenerationJobWithOptions(request: $_model.SubmitImageGenerationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitImageGenerationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aspectRatio)) {
      query["AspectRatio"] = request.aspectRatio;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.jobParameters)) {
      query["JobParameters"] = request.jobParameters;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.n)) {
      query["N"] = request.n;
    }

    if (!$dara.isNull(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitImageGenerationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitImageGenerationJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitImageGenerationJobResponse({}));
  }

  /**
   * 提交图像生成接口
   * 
   * @param request - SubmitImageGenerationJobRequest
   * @returns SubmitImageGenerationJobResponse
   */
  async submitImageGenerationJob(request: $_model.SubmitImageGenerationJobRequest): Promise<$_model.SubmitImageGenerationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitImageGenerationJobWithOptions(request, runtime);
  }

  /**
   * 提交媒资内容理解作业
   * 
   * @remarks
   * ## 请求说明
   * 该API用于根据提供的媒资文件（比如视频链接）进行内容理解。此外，支持通过`UserData`字段传递自定义参数，在回调时原样返回。
   * 
   * @param request - SubmitMediaComprehensionJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitMediaComprehensionJobResponse
   */
  async submitMediaComprehensionJobWithOptions(request: $_model.SubmitMediaComprehensionJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitMediaComprehensionJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.jobParams)) {
      query["JobParams"] = request.jobParams;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitMediaComprehensionJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitMediaComprehensionJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitMediaComprehensionJobResponse({}));
  }

  /**
   * 提交媒资内容理解作业
   * 
   * @remarks
   * ## 请求说明
   * 该API用于根据提供的媒资文件（比如视频链接）进行内容理解。此外，支持通过`UserData`字段传递自定义参数，在回调时原样返回。
   * 
   * @param request - SubmitMediaComprehensionJobRequest
   * @returns SubmitMediaComprehensionJobResponse
   */
  async submitMediaComprehensionJob(request: $_model.SubmitMediaComprehensionJobRequest): Promise<$_model.SubmitMediaComprehensionJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitMediaComprehensionJobWithOptions(request, runtime);
  }

  /**
   * 提交视频生成接口
   * 
   * @param request - SubmitVideoGenerationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoGenerationJobResponse
   */
  async submitVideoGenerationJobWithOptions(request: $_model.SubmitVideoGenerationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVideoGenerationJobResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aspectRatio)) {
      query["AspectRatio"] = request.aspectRatio;
    }

    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.input)) {
      query["Input"] = request.input;
    }

    if (!$dara.isNull(request.jobParameters)) {
      query["JobParameters"] = request.jobParameters;
    }

    if (!$dara.isNull(request.jobType)) {
      query["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    if (!$dara.isNull(request.n)) {
      query["N"] = request.n;
    }

    if (!$dara.isNull(request.resolution)) {
      query["Resolution"] = request.resolution;
    }

    if (!$dara.isNull(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVideoGenerationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVideoGenerationJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVideoGenerationJobResponse({}));
  }

  /**
   * 提交视频生成接口
   * 
   * @param request - SubmitVideoGenerationJobRequest
   * @returns SubmitVideoGenerationJobResponse
   */
  async submitVideoGenerationJob(request: $_model.SubmitVideoGenerationJobRequest): Promise<$_model.SubmitVideoGenerationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitVideoGenerationJobWithOptions(request, runtime);
  }

  /**
   * 提交视频翻译任务
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 支持多种视频翻译功能，包括字幕翻译和声音翻译。
   * - `JobType` 参数定义了任务类型，如 `SubtitleTranslate`和`VoiceTranslate` 。
   * - `Input` 和 `Output` 参数分别指定了输入资源和输出路径。
   * - `JobParameters` 包含了语言配置和其他能力开关，如 `SourceLanguage`、`TargetLanguage`、`NeedDetext` 和 `NeedVisualTranslate` 等。
   * - `EditingConfig` 可以用来指定最终剪辑合成的样式配置。
   * - `ClientToken` 是一个可选参数，用于保证请求的幂等性。
   * - 请确保所有必填字段都已正确填写，否则可能会导致请求失败。
   * 
   * @param request - SubmitVideoTranslationJobRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoTranslationJobResponse
   */
  async submitVideoTranslationJobWithOptions(request: $_model.SubmitVideoTranslationJobRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVideoTranslationJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.input)) {
      body["Input"] = request.input;
    }

    if (!$dara.isNull(request.jobParameters)) {
      body["JobParameters"] = request.jobParameters;
    }

    if (!$dara.isNull(request.jobType)) {
      body["JobType"] = request.jobType;
    }

    if (!$dara.isNull(request.output)) {
      body["Output"] = request.output;
    }

    if (!$dara.isNull(request.title)) {
      body["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVideoTranslationJob",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVideoTranslationJobResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVideoTranslationJobResponse({}));
  }

  /**
   * 提交视频翻译任务
   * 
   * @remarks
   * ## 请求说明
   * - 该 API 支持多种视频翻译功能，包括字幕翻译和声音翻译。
   * - `JobType` 参数定义了任务类型，如 `SubtitleTranslate`和`VoiceTranslate` 。
   * - `Input` 和 `Output` 参数分别指定了输入资源和输出路径。
   * - `JobParameters` 包含了语言配置和其他能力开关，如 `SourceLanguage`、`TargetLanguage`、`NeedDetext` 和 `NeedVisualTranslate` 等。
   * - `EditingConfig` 可以用来指定最终剪辑合成的样式配置。
   * - `ClientToken` 是一个可选参数，用于保证请求的幂等性。
   * - 请确保所有必填字段都已正确填写，否则可能会导致请求失败。
   * 
   * @param request - SubmitVideoTranslationJobRequest
   * @returns SubmitVideoTranslationJobResponse
   */
  async submitVideoTranslationJob(request: $_model.SubmitVideoTranslationJobRequest): Promise<$_model.SubmitVideoTranslationJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitVideoTranslationJobWithOptions(request, runtime);
  }

  /**
   * 更新媒资分类
   * 
   * @remarks
   * 创建媒资分类后，可调用本接口通过分类 ID 来定位并更新媒资分类的名称。
   * 
   * @param request - UpdateAssetCategoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAssetCategoryResponse
   */
  async updateAssetCategoryWithOptions(request: $_model.UpdateAssetCategoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateAssetCategoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAssetCategory",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateAssetCategoryResponse>(await this.callApi(params, req, runtime), new $_model.UpdateAssetCategoryResponse({}));
  }

  /**
   * 更新媒资分类
   * 
   * @remarks
   * 创建媒资分类后，可调用本接口通过分类 ID 来定位并更新媒资分类的名称。
   * 
   * @param request - UpdateAssetCategoryRequest
   * @returns UpdateAssetCategoryResponse
   */
  async updateAssetCategory(request: $_model.UpdateAssetCategoryRequest): Promise<$_model.UpdateAssetCategoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateAssetCategoryWithOptions(request, runtime);
  }

  /**
   * UpdateMedia
   * 
   * @remarks
   * ## 请求说明
   * 该API用于查询媒资内容理解作业。
   * 
   * @param request - UpdateMediaRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateMediaResponse
   */
  async updateMediaWithOptions(request: $_model.UpdateMediaRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateMediaResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appendTags)) {
      query["AppendTags"] = request.appendTags;
    }

    if (!$dara.isNull(request.categoryId)) {
      query["CategoryId"] = request.categoryId;
    }

    if (!$dara.isNull(request.coverURL)) {
      query["CoverURL"] = request.coverURL;
    }

    if (!$dara.isNull(request.description)) {
      query["Description"] = request.description;
    }

    if (!$dara.isNull(request.dynamicMetaData)) {
      query["DynamicMetaData"] = request.dynamicMetaData;
    }

    if (!$dara.isNull(request.inputURL)) {
      query["InputURL"] = request.inputURL;
    }

    if (!$dara.isNull(request.mediaId)) {
      query["MediaId"] = request.mediaId;
    }

    if (!$dara.isNull(request.mediaTags)) {
      query["MediaTags"] = request.mediaTags;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    if (!$dara.isNull(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateMedia",
      version: "2026-07-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateMediaResponse>(await this.callApi(params, req, runtime), new $_model.UpdateMediaResponse({}));
  }

  /**
   * UpdateMedia
   * 
   * @remarks
   * ## 请求说明
   * 该API用于查询媒资内容理解作业。
   * 
   * @param request - UpdateMediaRequest
   * @returns UpdateMediaResponse
   */
  async updateMedia(request: $_model.UpdateMediaRequest): Promise<$_model.UpdateMediaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateMediaWithOptions(request, runtime);
  }

}
