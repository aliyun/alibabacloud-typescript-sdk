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
    this._endpoint = this.getEndpoint("quanmiaolightapp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 取消异步任务
   * 
   * @param request - CancelAsyncTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelAsyncTaskResponse
   */
  async cancelAsyncTaskWithOptions(workspaceId: string, request: $_model.CancelAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelAsyncTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelAsyncTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/cancelAsyncTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelAsyncTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelAsyncTaskResponse({}));
  }

  /**
   * 取消异步任务
   * 
   * @param request - CancelAsyncTaskRequest
   * @returns CancelAsyncTaskResponse
   */
  async cancelAsyncTask(workspaceId: string, request: $_model.CancelAsyncTaskRequest): Promise<$_model.CancelAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelAsyncTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 导出挖掘任务明细
   * 
   * @param tmpReq - ExportAnalysisTagDetailByTaskIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportAnalysisTagDetailByTaskIdResponse
   */
  async exportAnalysisTagDetailByTaskIdWithOptions(workspaceId: string, tmpReq: $_model.ExportAnalysisTagDetailByTaskIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExportAnalysisTagDetailByTaskIdResponse> {
    tmpReq.validate();
    let request = new $_model.ExportAnalysisTagDetailByTaskIdShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.categories)) {
      request.categoriesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.categories, "categories", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoriesShrink)) {
      body["categories"] = request.categoriesShrink;
    }

    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportAnalysisTagDetailByTaskId",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/exportAnalysisTagDetailByTaskId`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportAnalysisTagDetailByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.ExportAnalysisTagDetailByTaskIdResponse({}));
  }

  /**
   * 导出挖掘任务明细
   * 
   * @param request - ExportAnalysisTagDetailByTaskIdRequest
   * @returns ExportAnalysisTagDetailByTaskIdResponse
   */
  async exportAnalysisTagDetailByTaskId(workspaceId: string, request: $_model.ExportAnalysisTagDetailByTaskIdRequest): Promise<$_model.ExportAnalysisTagDetailByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.exportAnalysisTagDetailByTaskIdWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 新闻播报-抽取分类获取播报热点
   * 
   * @param request - GenerateBroadcastNewsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateBroadcastNewsResponse
   */
  async generateBroadcastNewsWithOptions(workspaceId: string, request: $_model.GenerateBroadcastNewsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateBroadcastNewsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateBroadcastNews",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/GenerateBroadcastNews`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateBroadcastNewsResponse>(await this.callApi(params, req, runtime), new $_model.GenerateBroadcastNewsResponse({}));
  }

  /**
   * 新闻播报-抽取分类获取播报热点
   * 
   * @param request - GenerateBroadcastNewsRequest
   * @returns GenerateBroadcastNewsResponse
   */
  async generateBroadcastNews(workspaceId: string, request: $_model.GenerateBroadcastNewsRequest): Promise<$_model.GenerateBroadcastNewsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateBroadcastNewsWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-标签挖掘-获取示例输出格式
   * 
   * @param tmpReq - GenerateOutputFormatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateOutputFormatResponse
   */
  async generateOutputFormatWithOptions(workspaceId: string, tmpReq: $_model.GenerateOutputFormatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenerateOutputFormatResponse> {
    tmpReq.validate();
    let request = new $_model.GenerateOutputFormatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.businessType)) {
      body["businessType"] = request.businessType;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["extraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateOutputFormat",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/generateOutputFormat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenerateOutputFormatResponse>(await this.callApi(params, req, runtime), new $_model.GenerateOutputFormatResponse({}));
  }

  /**
   * 轻应用-标签挖掘-获取示例输出格式
   * 
   * @param request - GenerateOutputFormatRequest
   * @returns GenerateOutputFormatResponse
   */
  async generateOutputFormat(workspaceId: string, request: $_model.GenerateOutputFormatRequest): Promise<$_model.GenerateOutputFormatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateOutputFormatWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取企业VOC分析任务结果
   * 
   * @param request - GetEnterpriseVocAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnterpriseVocAnalysisTaskResponse
   */
  async getEnterpriseVocAnalysisTaskWithOptions(workspaceId: string, request: $_model.GetEnterpriseVocAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEnterpriseVocAnalysisTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnterpriseVocAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/getEnterpriseVocAnalysisTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEnterpriseVocAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetEnterpriseVocAnalysisTaskResponse({}));
  }

  /**
   * 获取企业VOC分析任务结果
   * 
   * @param request - GetEnterpriseVocAnalysisTaskRequest
   * @returns GetEnterpriseVocAnalysisTaskResponse
   */
  async getEnterpriseVocAnalysisTask(workspaceId: string, request: $_model.GetEnterpriseVocAnalysisTaskRequest): Promise<$_model.GetEnterpriseVocAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnterpriseVocAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取挖掘分析任务结果
   * 
   * @param request - GetTagMiningAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTagMiningAnalysisTaskResponse
   */
  async getTagMiningAnalysisTaskWithOptions(workspaceId: string, request: $_model.GetTagMiningAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTagMiningAnalysisTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTagMiningAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/getTagMiningAnalysisTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTagMiningAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetTagMiningAnalysisTaskResponse({}));
  }

  /**
   * 获取挖掘分析任务结果
   * 
   * @param request - GetTagMiningAnalysisTaskRequest
   * @returns GetTagMiningAnalysisTaskResponse
   */
  async getTagMiningAnalysisTask(workspaceId: string, request: $_model.GetTagMiningAnalysisTaskRequest): Promise<$_model.GetTagMiningAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTagMiningAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 视频理解-获取配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoAnalysisConfigResponse
   */
  async getVideoAnalysisConfigWithOptions(workspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoAnalysisConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoAnalysisConfig",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/videoAnalysis/getVideoAnalysisConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoAnalysisConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoAnalysisConfigResponse({}));
  }

  /**
   * 视频理解-获取配置
   * @returns GetVideoAnalysisConfigResponse
   */
  async getVideoAnalysisConfig(workspaceId: string): Promise<$_model.GetVideoAnalysisConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVideoAnalysisConfigWithOptions(workspaceId, headers, runtime);
  }

  /**
   * 轻应用-获取视频理解异步任务结果
   * 
   * @param request - GetVideoAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoAnalysisTaskResponse
   */
  async getVideoAnalysisTaskWithOptions(workspaceId: string, request: $_model.GetVideoAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoAnalysisTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/videoAnalysis/getVideoAnalysisTask`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.GetVideoAnalysisTaskResponse({}));
  }

  /**
   * 轻应用-获取视频理解异步任务结果
   * 
   * @param request - GetVideoAnalysisTaskRequest
   * @returns GetVideoAnalysisTaskResponse
   */
  async getVideoAnalysisTask(workspaceId: string, request: $_model.GetVideoAnalysisTaskRequest): Promise<$_model.GetVideoAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVideoAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 热点新闻推荐
   * 
   * @param request - HotNewsRecommendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns HotNewsRecommendResponse
   */
  async hotNewsRecommendWithOptions(workspaceId: string, request: $_model.HotNewsRecommendRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.HotNewsRecommendResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "HotNewsRecommend",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/hotNewsRecommend`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.HotNewsRecommendResponse>(await this.callApi(params, req, runtime), new $_model.HotNewsRecommendResponse({}));
  }

  /**
   * 热点新闻推荐
   * 
   * @param request - HotNewsRecommendRequest
   * @returns HotNewsRecommendResponse
   */
  async hotNewsRecommend(workspaceId: string, request: $_model.HotNewsRecommendRequest): Promise<$_model.HotNewsRecommendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.hotNewsRecommendWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 获取挖掘分析结果明细列表
   * 
   * @param request - ListAnalysisTagDetailByTaskIdRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnalysisTagDetailByTaskIdResponse
   */
  async listAnalysisTagDetailByTaskIdWithOptions(workspaceId: string, request: $_model.ListAnalysisTagDetailByTaskIdRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnalysisTagDetailByTaskIdResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.maxResults)) {
      query["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnalysisTagDetailByTaskId",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/listAnalysisTagDetailByTaskId`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnalysisTagDetailByTaskIdResponse>(await this.callApi(params, req, runtime), new $_model.ListAnalysisTagDetailByTaskIdResponse({}));
  }

  /**
   * 获取挖掘分析结果明细列表
   * 
   * @param request - ListAnalysisTagDetailByTaskIdRequest
   * @returns ListAnalysisTagDetailByTaskIdResponse
   */
  async listAnalysisTagDetailByTaskId(workspaceId: string, request: $_model.ListAnalysisTagDetailByTaskIdRequest): Promise<$_model.ListAnalysisTagDetailByTaskIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAnalysisTagDetailByTaskIdWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-新闻播报-获取热点话题摘要列表
   * 
   * @param request - ListHotTopicSummariesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListHotTopicSummariesResponse
   */
  async listHotTopicSummariesWithOptions(workspaceId: string, request: $_model.ListHotTopicSummariesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListHotTopicSummariesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.hotTopic)) {
      body["hotTopic"] = request.hotTopic;
    }

    if (!$dara.isNull(request.hotTopicVersion)) {
      body["hotTopicVersion"] = request.hotTopicVersion;
    }

    if (!$dara.isNull(request.maxResults)) {
      body["maxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      body["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListHotTopicSummaries",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/listHotTopicSummaries`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListHotTopicSummariesResponse>(await this.callApi(params, req, runtime), new $_model.ListHotTopicSummariesResponse({}));
  }

  /**
   * 轻应用-新闻播报-获取热点话题摘要列表
   * 
   * @param request - ListHotTopicSummariesRequest
   * @returns ListHotTopicSummariesResponse
   */
  async listHotTopicSummaries(workspaceId: string, request: $_model.ListHotTopicSummariesRequest): Promise<$_model.ListHotTopicSummariesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listHotTopicSummariesWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 企业VOC分析
   * 
   * @param tmpReq - RunEnterpriseVocAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunEnterpriseVocAnalysisResponse
   */
  async runEnterpriseVocAnalysisWithOptions(workspaceId: string, tmpReq: $_model.RunEnterpriseVocAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunEnterpriseVocAnalysisResponse> {
    tmpReq.validate();
    let request = new $_model.RunEnterpriseVocAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filterTags)) {
      request.filterTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterTags, "filterTags", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.akProxy)) {
      body["akProxy"] = request.akProxy;
    }

    if (!$dara.isNull(request.apiKey)) {
      body["apiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["extraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.filterTagsShrink)) {
      body["filterTags"] = request.filterTagsShrink;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.outputFormat)) {
      body["outputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.sourceTrace)) {
      body["sourceTrace"] = request.sourceTrace;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunEnterpriseVocAnalysis",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runEnterpriseVocAnalysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunEnterpriseVocAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.RunEnterpriseVocAnalysisResponse({}));
  }

  /**
   * 企业VOC分析
   * 
   * @param request - RunEnterpriseVocAnalysisRequest
   * @returns RunEnterpriseVocAnalysisResponse
   */
  async runEnterpriseVocAnalysis(workspaceId: string, request: $_model.RunEnterpriseVocAnalysisRequest): Promise<$_model.RunEnterpriseVocAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runEnterpriseVocAnalysisWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-热点播报-问答
   * 
   * @param tmpReq - RunHotTopicChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunHotTopicChatResponse
   */
  async runHotTopicChatWithOptions(workspaceId: string, tmpReq: $_model.RunHotTopicChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunHotTopicChatResponse> {
    tmpReq.validate();
    let request = new $_model.RunHotTopicChatShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.generateOptions)) {
      request.generateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.generateOptions, "generateOptions", "json");
    }

    if (!$dara.isNull(tmpReq.hotTopics)) {
      request.hotTopicsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hotTopics, "hotTopics", "json");
    }

    if (!$dara.isNull(tmpReq.messages)) {
      request.messagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.messages, "messages", "json");
    }

    if (!$dara.isNull(tmpReq.stepForBroadcastContentConfig)) {
      request.stepForBroadcastContentConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stepForBroadcastContentConfig, "stepForBroadcastContentConfig", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.category)) {
      body["category"] = request.category;
    }

    if (!$dara.isNull(request.generateOptionsShrink)) {
      body["generateOptions"] = request.generateOptionsShrink;
    }

    if (!$dara.isNull(request.hotTopicVersion)) {
      body["hotTopicVersion"] = request.hotTopicVersion;
    }

    if (!$dara.isNull(request.hotTopicsShrink)) {
      body["hotTopics"] = request.hotTopicsShrink;
    }

    if (!$dara.isNull(request.imageCount)) {
      body["imageCount"] = request.imageCount;
    }

    if (!$dara.isNull(request.messagesShrink)) {
      body["messages"] = request.messagesShrink;
    }

    if (!$dara.isNull(request.modelCustomPromptTemplate)) {
      body["modelCustomPromptTemplate"] = request.modelCustomPromptTemplate;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.originalSessionId)) {
      body["originalSessionId"] = request.originalSessionId;
    }

    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.stepForBroadcastContentConfigShrink)) {
      body["stepForBroadcastContentConfig"] = request.stepForBroadcastContentConfigShrink;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunHotTopicChat",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runHotTopicChat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunHotTopicChatResponse>(await this.callApi(params, req, runtime), new $_model.RunHotTopicChatResponse({}));
  }

  /**
   * 轻应用-热点播报-问答
   * 
   * @param request - RunHotTopicChatRequest
   * @returns RunHotTopicChatResponse
   */
  async runHotTopicChat(workspaceId: string, request: $_model.RunHotTopicChatRequest): Promise<$_model.RunHotTopicChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runHotTopicChatWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-热点播报-热点摘要生成
   * 
   * @param tmpReq - RunHotTopicSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunHotTopicSummaryResponse
   */
  async runHotTopicSummaryWithOptions(workspaceId: string, tmpReq: $_model.RunHotTopicSummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunHotTopicSummaryResponse> {
    tmpReq.validate();
    let request = new $_model.RunHotTopicSummaryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.stepForCustomSummaryStyleConfig)) {
      request.stepForCustomSummaryStyleConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.stepForCustomSummaryStyleConfig, "stepForCustomSummaryStyleConfig", "json");
    }

    if (!$dara.isNull(tmpReq.topicIds)) {
      request.topicIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.topicIds, "topicIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.hotTopicVersion)) {
      body["hotTopicVersion"] = request.hotTopicVersion;
    }

    if (!$dara.isNull(request.stepForCustomSummaryStyleConfigShrink)) {
      body["stepForCustomSummaryStyleConfig"] = request.stepForCustomSummaryStyleConfigShrink;
    }

    if (!$dara.isNull(request.topicIdsShrink)) {
      body["topicIds"] = request.topicIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunHotTopicSummary",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runHotTopicSummary`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunHotTopicSummaryResponse>(await this.callApi(params, req, runtime), new $_model.RunHotTopicSummaryResponse({}));
  }

  /**
   * 轻应用-热点播报-热点摘要生成
   * 
   * @param request - RunHotTopicSummaryRequest
   * @returns RunHotTopicSummaryResponse
   */
  async runHotTopicSummary(workspaceId: string, request: $_model.RunHotTopicSummaryRequest): Promise<$_model.RunHotTopicSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runHotTopicSummaryWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 营销信息抽取服务
   * 
   * @param tmpReq - RunMarketingInformationExtractRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunMarketingInformationExtractResponse
   */
  async runMarketingInformationExtractWithOptions(workspaceId: string, tmpReq: $_model.RunMarketingInformationExtractRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunMarketingInformationExtractResponse> {
    tmpReq.validate();
    let request = new $_model.RunMarketingInformationExtractShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sourceMaterials)) {
      request.sourceMaterialsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sourceMaterials, "sourceMaterials", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.extractType)) {
      body["extractType"] = request.extractType;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.sourceMaterialsShrink)) {
      body["sourceMaterials"] = request.sourceMaterialsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunMarketingInformationExtract",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runMarketingInformationExtract`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunMarketingInformationExtractResponse>(await this.callApi(params, req, runtime), new $_model.RunMarketingInformationExtractResponse({}));
  }

  /**
   * 营销信息抽取服务
   * 
   * @param request - RunMarketingInformationExtractRequest
   * @returns RunMarketingInformationExtractResponse
   */
  async runMarketingInformationExtract(workspaceId: string, request: $_model.RunMarketingInformationExtractRequest): Promise<$_model.RunMarketingInformationExtractResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runMarketingInformationExtractWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 营销文案写作服务
   * 
   * @param request - RunMarketingInformationWritingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunMarketingInformationWritingResponse
   */
  async runMarketingInformationWritingWithOptions(workspaceId: string, request: $_model.RunMarketingInformationWritingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunMarketingInformationWritingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["apiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.customLimitation)) {
      body["customLimitation"] = request.customLimitation;
    }

    if (!$dara.isNull(request.customPrompt)) {
      body["customPrompt"] = request.customPrompt;
    }

    if (!$dara.isNull(request.inputExample)) {
      body["inputExample"] = request.inputExample;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.outputExample)) {
      body["outputExample"] = request.outputExample;
    }

    if (!$dara.isNull(request.sourceMaterial)) {
      body["sourceMaterial"] = request.sourceMaterial;
    }

    if (!$dara.isNull(request.writingType)) {
      body["writingType"] = request.writingType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunMarketingInformationWriting",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runMarketingInformationWriting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunMarketingInformationWritingResponse>(await this.callApi(params, req, runtime), new $_model.RunMarketingInformationWritingResponse({}));
  }

  /**
   * 营销文案写作服务
   * 
   * @param request - RunMarketingInformationWritingRequest
   * @returns RunMarketingInformationWritingResponse
   */
  async runMarketingInformationWriting(workspaceId: string, request: $_model.RunMarketingInformationWritingRequest): Promise<$_model.RunMarketingInformationWritingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runMarketingInformationWritingWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-网络内容审核
   * 
   * @param tmpReq - RunNetworkContentAuditRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunNetworkContentAuditResponse
   */
  async runNetworkContentAuditWithOptions(workspaceId: string, tmpReq: $_model.RunNetworkContentAuditRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunNetworkContentAuditResponse> {
    tmpReq.validate();
    let request = new $_model.RunNetworkContentAuditShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["apiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.businessType)) {
      body["businessType"] = request.businessType;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["extraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.outputFormat)) {
      body["outputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunNetworkContentAudit",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runNetworkContentAudit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunNetworkContentAuditResponse>(await this.callApi(params, req, runtime), new $_model.RunNetworkContentAuditResponse({}));
  }

  /**
   * 轻应用-网络内容审核
   * 
   * @param request - RunNetworkContentAuditRequest
   * @returns RunNetworkContentAuditResponse
   */
  async runNetworkContentAudit(workspaceId: string, request: $_model.RunNetworkContentAuditRequest): Promise<$_model.RunNetworkContentAuditResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runNetworkContentAuditWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 长剧本创作
   * 
   * @param request - RunScriptChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunScriptChatResponse
   */
  async runScriptChatWithOptions(workspaceId: string, request: $_model.RunScriptChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunScriptChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.prompt)) {
      body["prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunScriptChat",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runScriptChat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunScriptChatResponse>(await this.callApi(params, req, runtime), new $_model.RunScriptChatResponse({}));
  }

  /**
   * 长剧本创作
   * 
   * @param request - RunScriptChatRequest
   * @returns RunScriptChatResponse
   */
  async runScriptChat(workspaceId: string, request: $_model.RunScriptChatRequest): Promise<$_model.RunScriptChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runScriptChatWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 剧本续写
   * 
   * @param request - RunScriptContinueRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunScriptContinueResponse
   */
  async runScriptContinueWithOptions(workspaceId: string, request: $_model.RunScriptContinueRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunScriptContinueResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.scriptSummary)) {
      body["scriptSummary"] = request.scriptSummary;
    }

    if (!$dara.isNull(request.scriptTypeKeyword)) {
      body["scriptTypeKeyword"] = request.scriptTypeKeyword;
    }

    if (!$dara.isNull(request.userProvidedContent)) {
      body["userProvidedContent"] = request.userProvidedContent;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunScriptContinue",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runScriptContinue`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunScriptContinueResponse>(await this.callApi(params, req, runtime), new $_model.RunScriptContinueResponse({}));
  }

  /**
   * 剧本续写
   * 
   * @param request - RunScriptContinueRequest
   * @returns RunScriptContinueResponse
   */
  async runScriptContinue(workspaceId: string, request: $_model.RunScriptContinueRequest): Promise<$_model.RunScriptContinueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runScriptContinueWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 剧本策划
   * 
   * @param request - RunScriptPlanningRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunScriptPlanningResponse
   */
  async runScriptPlanningWithOptions(workspaceId: string, request: $_model.RunScriptPlanningRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunScriptPlanningResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.additionalNote)) {
      body["additionalNote"] = request.additionalNote;
    }

    if (!$dara.isNull(request.dialogueInScene)) {
      body["dialogueInScene"] = request.dialogueInScene;
    }

    if (!$dara.isNull(request.plotConflict)) {
      body["plotConflict"] = request.plotConflict;
    }

    if (!$dara.isNull(request.scriptName)) {
      body["scriptName"] = request.scriptName;
    }

    if (!$dara.isNull(request.scriptShotCount)) {
      body["scriptShotCount"] = request.scriptShotCount;
    }

    if (!$dara.isNull(request.scriptSummary)) {
      body["scriptSummary"] = request.scriptSummary;
    }

    if (!$dara.isNull(request.scriptTypeKeyword)) {
      body["scriptTypeKeyword"] = request.scriptTypeKeyword;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunScriptPlanning",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runScriptPlanning`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunScriptPlanningResponse>(await this.callApi(params, req, runtime), new $_model.RunScriptPlanningResponse({}));
  }

  /**
   * 剧本策划
   * 
   * @param request - RunScriptPlanningRequest
   * @returns RunScriptPlanningResponse
   */
  async runScriptPlanning(workspaceId: string, request: $_model.RunScriptPlanningRequest): Promise<$_model.RunScriptPlanningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runScriptPlanningWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 剧本对话内容的整理
   * 
   * @param request - RunScriptRefineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunScriptRefineResponse
   */
  async runScriptRefineWithOptions(workspaceId: string, request: $_model.RunScriptRefineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunScriptRefineResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunScriptRefine",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runScriptRefine`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunScriptRefineResponse>(await this.callApi(params, req, runtime), new $_model.RunScriptRefineResponse({}));
  }

  /**
   * 剧本对话内容的整理
   * 
   * @param request - RunScriptRefineRequest
   * @returns RunScriptRefineResponse
   */
  async runScriptRefine(workspaceId: string, request: $_model.RunScriptRefineRequest): Promise<$_model.RunScriptRefineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runScriptRefineWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 文体学习和写作推理服务
   * 
   * @param tmpReq - RunStyleWritingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunStyleWritingResponse
   */
  async runStyleWritingWithOptions(workspaceId: string, tmpReq: $_model.RunStyleWritingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunStyleWritingResponse> {
    tmpReq.validate();
    let request = new $_model.RunStyleWritingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.learningSamples)) {
      request.learningSamplesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.learningSamples, "learningSamples", "json");
    }

    if (!$dara.isNull(tmpReq.referenceMaterials)) {
      request.referenceMaterialsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.referenceMaterials, "referenceMaterials", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.learningSamplesShrink)) {
      body["learningSamples"] = request.learningSamplesShrink;
    }

    if (!$dara.isNull(request.processStage)) {
      body["processStage"] = request.processStage;
    }

    if (!$dara.isNull(request.referenceMaterialsShrink)) {
      body["referenceMaterials"] = request.referenceMaterialsShrink;
    }

    if (!$dara.isNull(request.styleFeature)) {
      body["styleFeature"] = request.styleFeature;
    }

    if (!$dara.isNull(request.useSearch)) {
      body["useSearch"] = request.useSearch;
    }

    if (!$dara.isNull(request.writingTheme)) {
      body["writingTheme"] = request.writingTheme;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunStyleWriting",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runStyleWriting`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunStyleWritingResponse>(await this.callApi(params, req, runtime), new $_model.RunStyleWritingResponse({}));
  }

  /**
   * 文体学习和写作推理服务
   * 
   * @param request - RunStyleWritingRequest
   * @returns RunStyleWritingResponse
   */
  async runStyleWriting(workspaceId: string, request: $_model.RunStyleWritingRequest): Promise<$_model.RunStyleWritingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runStyleWritingWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-标签挖掘
   * 
   * @param tmpReq - RunTagMiningAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunTagMiningAnalysisResponse
   */
  async runTagMiningAnalysisWithOptions(workspaceId: string, tmpReq: $_model.RunTagMiningAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunTagMiningAnalysisResponse> {
    tmpReq.validate();
    let request = new $_model.RunTagMiningAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["apiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.businessType)) {
      body["businessType"] = request.businessType;
    }

    if (!$dara.isNull(request.content)) {
      body["content"] = request.content;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["extraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.outputFormat)) {
      body["outputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunTagMiningAnalysis",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runTagMiningAnalysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunTagMiningAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.RunTagMiningAnalysisResponse({}));
  }

  /**
   * 轻应用-标签挖掘
   * 
   * @param request - RunTagMiningAnalysisRequest
   * @returns RunTagMiningAnalysisResponse
   */
  async runTagMiningAnalysis(workspaceId: string, request: $_model.RunTagMiningAnalysisRequest): Promise<$_model.RunTagMiningAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runTagMiningAnalysisWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-视频理解
   * 
   * @param tmpReq - RunVideoAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RunVideoAnalysisResponse
   */
  async runVideoAnalysisWithOptions(workspaceId: string, tmpReq: $_model.RunVideoAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RunVideoAnalysisResponse> {
    tmpReq.validate();
    let request = new $_model.RunVideoAnalysisShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.excludeGenerateOptions)) {
      request.excludeGenerateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeGenerateOptions, "excludeGenerateOptions", "json");
    }

    if (!$dara.isNull(tmpReq.frameSampleMethod)) {
      request.frameSampleMethodShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.frameSampleMethod, "frameSampleMethod", "json");
    }

    if (!$dara.isNull(tmpReq.generateOptions)) {
      request.generateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.generateOptions, "generateOptions", "json");
    }

    if (!$dara.isNull(tmpReq.textProcessTasks)) {
      request.textProcessTasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textProcessTasks, "textProcessTasks", "json");
    }

    if (!$dara.isNull(tmpReq.videoCaptionInfo)) {
      request.videoCaptionInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoCaptionInfo, "videoCaptionInfo", "json");
    }

    if (!$dara.isNull(tmpReq.videoRoles)) {
      request.videoRolesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoRoles, "videoRoles", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeGenerateOptionsShrink)) {
      body["excludeGenerateOptions"] = request.excludeGenerateOptionsShrink;
    }

    if (!$dara.isNull(request.faceIdentitySimilarityMinScore)) {
      body["faceIdentitySimilarityMinScore"] = request.faceIdentitySimilarityMinScore;
    }

    if (!$dara.isNull(request.frameSampleMethodShrink)) {
      body["frameSampleMethod"] = request.frameSampleMethodShrink;
    }

    if (!$dara.isNull(request.generateOptionsShrink)) {
      body["generateOptions"] = request.generateOptionsShrink;
    }

    if (!$dara.isNull(request.language)) {
      body["language"] = request.language;
    }

    if (!$dara.isNull(request.modelCustomPromptTemplate)) {
      body["modelCustomPromptTemplate"] = request.modelCustomPromptTemplate;
    }

    if (!$dara.isNull(request.modelCustomPromptTemplateId)) {
      body["modelCustomPromptTemplateId"] = request.modelCustomPromptTemplateId;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.originalSessionId)) {
      body["originalSessionId"] = request.originalSessionId;
    }

    if (!$dara.isNull(request.snapshotInterval)) {
      body["snapshotInterval"] = request.snapshotInterval;
    }

    if (!$dara.isNull(request.splitInterval)) {
      body["splitInterval"] = request.splitInterval;
    }

    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.textProcessTasksShrink)) {
      body["textProcessTasks"] = request.textProcessTasksShrink;
    }

    if (!$dara.isNull(request.videoCaptionInfoShrink)) {
      body["videoCaptionInfo"] = request.videoCaptionInfoShrink;
    }

    if (!$dara.isNull(request.videoExtraInfo)) {
      body["videoExtraInfo"] = request.videoExtraInfo;
    }

    if (!$dara.isNull(request.videoModelCustomPromptTemplate)) {
      body["videoModelCustomPromptTemplate"] = request.videoModelCustomPromptTemplate;
    }

    if (!$dara.isNull(request.videoModelId)) {
      body["videoModelId"] = request.videoModelId;
    }

    if (!$dara.isNull(request.videoRolesShrink)) {
      body["videoRoles"] = request.videoRolesShrink;
    }

    if (!$dara.isNull(request.videoShotFaceIdentityCount)) {
      body["videoShotFaceIdentityCount"] = request.videoShotFaceIdentityCount;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["videoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RunVideoAnalysis",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/runVideoAnalysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RunVideoAnalysisResponse>(await this.callApi(params, req, runtime), new $_model.RunVideoAnalysisResponse({}));
  }

  /**
   * 轻应用-视频理解
   * 
   * @param request - RunVideoAnalysisRequest
   * @returns RunVideoAnalysisResponse
   */
  async runVideoAnalysis(workspaceId: string, request: $_model.RunVideoAnalysisRequest): Promise<$_model.RunVideoAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runVideoAnalysisWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 提交企业VOC异步任务
   * 
   * @param tmpReq - SubmitEnterpriseVocAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitEnterpriseVocAnalysisTaskResponse
   */
  async submitEnterpriseVocAnalysisTaskWithOptions(workspaceId: string, tmpReq: $_model.SubmitEnterpriseVocAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitEnterpriseVocAnalysisTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitEnterpriseVocAnalysisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contents)) {
      request.contentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contents, "contents", "json");
    }

    if (!$dara.isNull(tmpReq.filterTags)) {
      request.filterTagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filterTags, "filterTags", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["apiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.contentsShrink)) {
      body["contents"] = request.contentsShrink;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["extraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.fileKey)) {
      body["fileKey"] = request.fileKey;
    }

    if (!$dara.isNull(request.filterTagsShrink)) {
      body["filterTags"] = request.filterTagsShrink;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.outputFormat)) {
      body["outputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.sourceTrace)) {
      body["sourceTrace"] = request.sourceTrace;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    if (!$dara.isNull(request.url)) {
      body["url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitEnterpriseVocAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/submitEnterpriseVocAnalysisTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitEnterpriseVocAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitEnterpriseVocAnalysisTaskResponse({}));
  }

  /**
   * 提交企业VOC异步任务
   * 
   * @param request - SubmitEnterpriseVocAnalysisTaskRequest
   * @returns SubmitEnterpriseVocAnalysisTaskResponse
   */
  async submitEnterpriseVocAnalysisTask(workspaceId: string, request: $_model.SubmitEnterpriseVocAnalysisTaskRequest): Promise<$_model.SubmitEnterpriseVocAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitEnterpriseVocAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-标签挖掘
   * 
   * @param tmpReq - SubmitTagMiningAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitTagMiningAnalysisTaskResponse
   */
  async submitTagMiningAnalysisTaskWithOptions(workspaceId: string, tmpReq: $_model.SubmitTagMiningAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitTagMiningAnalysisTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitTagMiningAnalysisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contents)) {
      request.contentsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contents, "contents", "json");
    }

    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiKey)) {
      body["apiKey"] = request.apiKey;
    }

    if (!$dara.isNull(request.businessType)) {
      body["businessType"] = request.businessType;
    }

    if (!$dara.isNull(request.contentsShrink)) {
      body["contents"] = request.contentsShrink;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["extraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.outputFormat)) {
      body["outputFormat"] = request.outputFormat;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      body["tags"] = request.tagsShrink;
    }

    if (!$dara.isNull(request.taskDescription)) {
      body["taskDescription"] = request.taskDescription;
    }

    if (!$dara.isNull(request.url)) {
      body["url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitTagMiningAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/submitTagMiningAnalysisTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitTagMiningAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitTagMiningAnalysisTaskResponse({}));
  }

  /**
   * 轻应用-标签挖掘
   * 
   * @param request - SubmitTagMiningAnalysisTaskRequest
   * @returns SubmitTagMiningAnalysisTaskResponse
   */
  async submitTagMiningAnalysisTask(workspaceId: string, request: $_model.SubmitTagMiningAnalysisTaskRequest): Promise<$_model.SubmitTagMiningAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitTagMiningAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 轻应用-提交视频理解任务
   * 
   * @param tmpReq - SubmitVideoAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitVideoAnalysisTaskResponse
   */
  async submitVideoAnalysisTaskWithOptions(workspaceId: string, tmpReq: $_model.SubmitVideoAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitVideoAnalysisTaskResponse> {
    tmpReq.validate();
    let request = new $_model.SubmitVideoAnalysisTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.excludeGenerateOptions)) {
      request.excludeGenerateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.excludeGenerateOptions, "excludeGenerateOptions", "json");
    }

    if (!$dara.isNull(tmpReq.frameSampleMethod)) {
      request.frameSampleMethodShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.frameSampleMethod, "frameSampleMethod", "json");
    }

    if (!$dara.isNull(tmpReq.generateOptions)) {
      request.generateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.generateOptions, "generateOptions", "json");
    }

    if (!$dara.isNull(tmpReq.textProcessTasks)) {
      request.textProcessTasksShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.textProcessTasks, "textProcessTasks", "json");
    }

    if (!$dara.isNull(tmpReq.videoCaptionInfo)) {
      request.videoCaptionInfoShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoCaptionInfo, "videoCaptionInfo", "json");
    }

    if (!$dara.isNull(tmpReq.videoRoles)) {
      request.videoRolesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.videoRoles, "videoRoles", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.deduplicationId)) {
      body["deduplicationId"] = request.deduplicationId;
    }

    if (!$dara.isNull(request.excludeGenerateOptionsShrink)) {
      body["excludeGenerateOptions"] = request.excludeGenerateOptionsShrink;
    }

    if (!$dara.isNull(request.faceIdentitySimilarityMinScore)) {
      body["faceIdentitySimilarityMinScore"] = request.faceIdentitySimilarityMinScore;
    }

    if (!$dara.isNull(request.frameSampleMethodShrink)) {
      body["frameSampleMethod"] = request.frameSampleMethodShrink;
    }

    if (!$dara.isNull(request.generateOptionsShrink)) {
      body["generateOptions"] = request.generateOptionsShrink;
    }

    if (!$dara.isNull(request.language)) {
      body["language"] = request.language;
    }

    if (!$dara.isNull(request.modelCustomPromptTemplate)) {
      body["modelCustomPromptTemplate"] = request.modelCustomPromptTemplate;
    }

    if (!$dara.isNull(request.modelCustomPromptTemplateId)) {
      body["modelCustomPromptTemplateId"] = request.modelCustomPromptTemplateId;
    }

    if (!$dara.isNull(request.modelId)) {
      body["modelId"] = request.modelId;
    }

    if (!$dara.isNull(request.snapshotInterval)) {
      body["snapshotInterval"] = request.snapshotInterval;
    }

    if (!$dara.isNull(request.splitInterval)) {
      body["splitInterval"] = request.splitInterval;
    }

    if (!$dara.isNull(request.textProcessTasksShrink)) {
      body["textProcessTasks"] = request.textProcessTasksShrink;
    }

    if (!$dara.isNull(request.videoCaptionInfoShrink)) {
      body["videoCaptionInfo"] = request.videoCaptionInfoShrink;
    }

    if (!$dara.isNull(request.videoExtraInfo)) {
      body["videoExtraInfo"] = request.videoExtraInfo;
    }

    if (!$dara.isNull(request.videoModelCustomPromptTemplate)) {
      body["videoModelCustomPromptTemplate"] = request.videoModelCustomPromptTemplate;
    }

    if (!$dara.isNull(request.videoModelId)) {
      body["videoModelId"] = request.videoModelId;
    }

    if (!$dara.isNull(request.videoRolesShrink)) {
      body["videoRoles"] = request.videoRolesShrink;
    }

    if (!$dara.isNull(request.videoShotFaceIdentityCount)) {
      body["videoShotFaceIdentityCount"] = request.videoShotFaceIdentityCount;
    }

    if (!$dara.isNull(request.videoUrl)) {
      body["videoUrl"] = request.videoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitVideoAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/videoAnalysis/submitVideoAnalysisTask`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitVideoAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.SubmitVideoAnalysisTaskResponse({}));
  }

  /**
   * 轻应用-提交视频理解任务
   * 
   * @param request - SubmitVideoAnalysisTaskRequest
   * @returns SubmitVideoAnalysisTaskResponse
   */
  async submitVideoAnalysisTask(workspaceId: string, request: $_model.SubmitVideoAnalysisTaskRequest): Promise<$_model.SubmitVideoAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitVideoAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 视频理解-更新配置
   * 
   * @param request - UpdateVideoAnalysisConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVideoAnalysisConfigResponse
   */
  async updateVideoAnalysisConfigWithOptions(workspaceId: string, request: $_model.UpdateVideoAnalysisConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVideoAnalysisConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.asyncConcurrency)) {
      body["asyncConcurrency"] = request.asyncConcurrency;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVideoAnalysisConfig",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/videoAnalysis/updateVideoAnalysisConfig`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVideoAnalysisConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVideoAnalysisConfigResponse({}));
  }

  /**
   * 视频理解-更新配置
   * 
   * @param request - UpdateVideoAnalysisConfigRequest
   * @returns UpdateVideoAnalysisConfigResponse
   */
  async updateVideoAnalysisConfig(workspaceId: string, request: $_model.UpdateVideoAnalysisConfigRequest): Promise<$_model.UpdateVideoAnalysisConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVideoAnalysisConfigWithOptions(workspaceId, request, headers, runtime);
  }

  /**
   * 视频理解-修改任务状态
   * 
   * @param request - UpdateVideoAnalysisTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVideoAnalysisTaskResponse
   */
  async updateVideoAnalysisTaskWithOptions(workspaceId: string, request: $_model.UpdateVideoAnalysisTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateVideoAnalysisTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    if (!$dara.isNull(request.taskStatus)) {
      body["taskStatus"] = request.taskStatus;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVideoAnalysisTask",
      version: "2024-08-01",
      protocol: "HTTPS",
      pathname: `/${$dara.URL.percentEncode(workspaceId)}/quanmiao/lightapp/videoAnalysis/updateVideoAnalysisTask`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateVideoAnalysisTaskResponse>(await this.callApi(params, req, runtime), new $_model.UpdateVideoAnalysisTaskResponse({}));
  }

  /**
   * 视频理解-修改任务状态
   * 
   * @param request - UpdateVideoAnalysisTaskRequest
   * @returns UpdateVideoAnalysisTaskResponse
   */
  async updateVideoAnalysisTask(workspaceId: string, request: $_model.UpdateVideoAnalysisTaskRequest): Promise<$_model.UpdateVideoAnalysisTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVideoAnalysisTaskWithOptions(workspaceId, request, headers, runtime);
  }

}
