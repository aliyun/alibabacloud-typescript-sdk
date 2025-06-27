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
      'ap-northeast-1': "green.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "green.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "green.ap-southeast-1.aliyuncs.com",
      'cn-chengdu': "green.aliyuncs.com",
      'cn-hongkong': "green.aliyuncs.com",
      'cn-huhehaote': "green.aliyuncs.com",
      'cn-qingdao': "green.aliyuncs.com",
      'cn-zhangjiakou': "green.aliyuncs.com",
      'eu-central-1': "green.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "green.ap-southeast-1.aliyuncs.com",
      'me-east-1': "green.ap-southeast-1.aliyuncs.com",
      'us-east-1': "green.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "green.aliyuncs.com",
      'cn-shenzhen-finance-1': "green.aliyuncs.com",
      'cn-shanghai-finance-1': "green.aliyuncs.com",
      'cn-north-2-gov-1': "green.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("green", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 添加代答样本
   * 
   * @param request - AddAnswerSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAnswerSampleResponse
   */
  async addAnswerSampleWithOptions(request: $_model.AddAnswerSampleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAnswerSampleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sampleObject)) {
      query["SampleObject"] = request.sampleObject;
    }

    if (!$dara.isNull(request.samples)) {
      query["Samples"] = request.samples;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddAnswerSample",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAnswerSampleResponse>(await this.callApi(params, req, runtime), new $_model.AddAnswerSampleResponse({}));
  }

  /**
   * 添加代答样本
   * 
   * @param request - AddAnswerSampleRequest
   * @returns AddAnswerSampleResponse
   */
  async addAnswerSample(request: $_model.AddAnswerSampleRequest): Promise<$_model.AddAnswerSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAnswerSampleWithOptions(request, runtime);
  }

  /**
   * 创建图库
   * 
   * @param request - AddImageLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageLibResponse
   */
  async addImageLibWithOptions(request: $_model.AddImageLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddImageLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.libName)) {
      body["LibName"] = request.libName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImageLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddImageLibResponse>(await this.callApi(params, req, runtime), new $_model.AddImageLibResponse({}));
  }

  /**
   * 创建图库
   * 
   * @param request - AddImageLibRequest
   * @returns AddImageLibResponse
   */
  async addImageLib(request: $_model.AddImageLibRequest): Promise<$_model.AddImageLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addImageLibWithOptions(request, runtime);
  }

  /**
   * 批量添加图片
   * 
   * @param request - AddImages2LibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImages2LibResponse
   */
  async addImages2LibWithOptions(request: $_model.AddImages2LibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddImages2LibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imgUrl)) {
      body["ImgUrl"] = request.imgUrl;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImages2Lib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddImages2LibResponse>(await this.callApi(params, req, runtime), new $_model.AddImages2LibResponse({}));
  }

  /**
   * 批量添加图片
   * 
   * @param request - AddImages2LibRequest
   * @returns AddImages2LibResponse
   */
  async addImages2Lib(request: $_model.AddImages2LibRequest): Promise<$_model.AddImages2LibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addImages2LibWithOptions(request, runtime);
  }

  /**
   * 创建关键词库
   * 
   * @param request - AddKeywordLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddKeywordLibResponse
   */
  async addKeywordLibWithOptions(request: $_model.AddKeywordLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddKeywordLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.keywordsObject)) {
      body["KeywordsObject"] = request.keywordsObject;
    }

    if (!$dara.isNull(request.libName)) {
      body["LibName"] = request.libName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddKeywordLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddKeywordLibResponse>(await this.callApi(params, req, runtime), new $_model.AddKeywordLibResponse({}));
  }

  /**
   * 创建关键词库
   * 
   * @param request - AddKeywordLibRequest
   * @returns AddKeywordLibResponse
   */
  async addKeywordLib(request: $_model.AddKeywordLibRequest): Promise<$_model.AddKeywordLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addKeywordLibWithOptions(request, runtime);
  }

  /**
   * 添加关键词
   * 
   * @param request - AddKeywordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddKeywordsResponse
   */
  async addKeywordsWithOptions(request: $_model.AddKeywordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddKeywordsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.keywordsObject)) {
      body["KeywordsObject"] = request.keywordsObject;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddKeywords",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddKeywordsResponse>(await this.callApi(params, req, runtime), new $_model.AddKeywordsResponse({}));
  }

  /**
   * 添加关键词
   * 
   * @param request - AddKeywordsRequest
   * @returns AddKeywordsResponse
   */
  async addKeywords(request: $_model.AddKeywordsRequest): Promise<$_model.AddKeywordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addKeywordsWithOptions(request, runtime);
  }

  /**
   * 添加关键词
   * 
   * @param request - AddKeywordsToLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddKeywordsToLibResponse
   */
  async addKeywordsToLibWithOptions(request: $_model.AddKeywordsToLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddKeywordsToLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keywords)) {
      body["Keywords"] = request.keywords;
    }

    if (!$dara.isNull(request.keywordsObject)) {
      body["KeywordsObject"] = request.keywordsObject;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddKeywordsToLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddKeywordsToLibResponse>(await this.callApi(params, req, runtime), new $_model.AddKeywordsToLibResponse({}));
  }

  /**
   * 添加关键词
   * 
   * @param request - AddKeywordsToLibRequest
   * @returns AddKeywordsToLibResponse
   */
  async addKeywordsToLib(request: $_model.AddKeywordsToLibRequest): Promise<$_model.AddKeywordsToLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addKeywordsToLibWithOptions(request, runtime);
  }

  /**
   * 取消oss扫描任务
   * 
   * @param request - CancelStockOssCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelStockOssCheckTaskResponse
   */
  async cancelStockOssCheckTaskWithOptions(request: $_model.CancelStockOssCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CancelStockOssCheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelStockOssCheckTask",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelStockOssCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.CancelStockOssCheckTaskResponse({}));
  }

  /**
   * 取消oss扫描任务
   * 
   * @param request - CancelStockOssCheckTaskRequest
   * @returns CancelStockOssCheckTaskResponse
   */
  async cancelStockOssCheckTask(request: $_model.CancelStockOssCheckTaskRequest): Promise<$_model.CancelStockOssCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelStockOssCheckTaskWithOptions(request, runtime);
  }

  /**
   * 复制服务
   * 
   * @param request - CopyServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyServiceConfigResponse
   */
  async copyServiceConfigWithOptions(request: $_model.CopyServiceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyServiceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.serviceDesc)) {
      body["ServiceDesc"] = request.serviceDesc;
    }

    if (!$dara.isNull(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CopyServiceConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyServiceConfigResponse>(await this.callApi(params, req, runtime), new $_model.CopyServiceConfigResponse({}));
  }

  /**
   * 复制服务
   * 
   * @param request - CopyServiceConfigRequest
   * @returns CopyServiceConfigResponse
   */
  async copyServiceConfig(request: $_model.CopyServiceConfigRequest): Promise<$_model.CopyServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyServiceConfigWithOptions(request, runtime);
  }

  /**
   * 创建oss扫描任务
   * 
   * @param request - CreatStockOssCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatStockOssCheckTaskResponse
   */
  async creatStockOssCheckTaskWithOptions(request: $_model.CreatStockOssCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatStockOssCheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buckets)) {
      query["Buckets"] = request.buckets;
    }

    if (!$dara.isNull(request.callbackId)) {
      query["CallbackId"] = request.callbackId;
    }

    if (!$dara.isNull(request.distinctHistoryTasks)) {
      query["DistinctHistoryTasks"] = request.distinctHistoryTasks;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.executeDate)) {
      query["ExecuteDate"] = request.executeDate;
    }

    if (!$dara.isNull(request.executeTime)) {
      query["ExecuteTime"] = request.executeTime;
    }

    if (!$dara.isNull(request.freeze)) {
      query["Freeze"] = request.freeze;
    }

    if (!$dara.isNull(request.freezeHighRisk1)) {
      query["FreezeHighRisk1"] = request.freezeHighRisk1;
    }

    if (!$dara.isNull(request.freezeHighRisk2)) {
      query["FreezeHighRisk2"] = request.freezeHighRisk2;
    }

    if (!$dara.isNull(request.freezeMediumRisk1)) {
      query["FreezeMediumRisk1"] = request.freezeMediumRisk1;
    }

    if (!$dara.isNull(request.freezeMediumRisk2)) {
      query["FreezeMediumRisk2"] = request.freezeMediumRisk2;
    }

    if (!$dara.isNull(request.freezeType)) {
      query["FreezeType"] = request.freezeType;
    }

    if (!$dara.isNull(request.isInc)) {
      query["IsInc"] = request.isInc;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.prefixFilterType)) {
      query["PrefixFilterType"] = request.prefixFilterType;
    }

    if (!$dara.isNull(request.prefixFilters)) {
      query["PrefixFilters"] = request.prefixFilters;
    }

    if (!$dara.isNull(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.scanLimit)) {
      query["ScanLimit"] = request.scanLimit;
    }

    if (!$dara.isNull(request.scanNoFileType)) {
      query["ScanNoFileType"] = request.scanNoFileType;
    }

    if (!$dara.isNull(request.scanResourceType)) {
      query["ScanResourceType"] = request.scanResourceType;
    }

    if (!$dara.isNull(request.scanService)) {
      query["ScanService"] = request.scanService;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskCycle)) {
      query["TaskCycle"] = request.taskCycle;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatStockOssCheckTask",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatStockOssCheckTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreatStockOssCheckTaskResponse({}));
  }

  /**
   * 创建oss扫描任务
   * 
   * @param request - CreatStockOssCheckTaskRequest
   * @returns CreatStockOssCheckTaskResponse
   */
  async creatStockOssCheckTask(request: $_model.CreatStockOssCheckTaskRequest): Promise<$_model.CreatStockOssCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.creatStockOssCheckTaskWithOptions(request, runtime);
  }

  /**
   * 创建代答库
   * 
   * @param request - CreateAnswerLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAnswerLibResponse
   */
  async createAnswerLibWithOptions(request: $_model.CreateAnswerLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAnswerLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libName)) {
      body["LibName"] = request.libName;
    }

    if (!$dara.isNull(request.sampleBucket)) {
      body["SampleBucket"] = request.sampleBucket;
    }

    if (!$dara.isNull(request.sampleObject)) {
      body["SampleObject"] = request.sampleObject;
    }

    if (!$dara.isNull(request.samples)) {
      body["Samples"] = request.samples;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAnswerLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAnswerLibResponse>(await this.callApi(params, req, runtime), new $_model.CreateAnswerLibResponse({}));
  }

  /**
   * 创建代答库
   * 
   * @param request - CreateAnswerLibRequest
   * @returns CreateAnswerLibResponse
   */
  async createAnswerLib(request: $_model.CreateAnswerLibRequest): Promise<$_model.CreateAnswerLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAnswerLibWithOptions(request, runtime);
  }

  /**
   * 新建消息通知
   * 
   * @param request - CreateCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCallbackResponse
   */
  async createCallbackWithOptions(request: $_model.CreateCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cryptType)) {
      body["CryptType"] = request.cryptType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.scope)) {
      body["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCallback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateCallbackResponse>(await this.callApi(params, req, runtime), new $_model.CreateCallbackResponse({}));
  }

  /**
   * 新建消息通知
   * 
   * @param request - CreateCallbackRequest
   * @returns CreateCallbackResponse
   */
  async createCallback(request: $_model.CreateCallbackRequest): Promise<$_model.CreateCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCallbackWithOptions(request, runtime);
  }

  /**
   * 创建oss扫描任务前检查
   * 
   * @param request - CreatePreCheckRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePreCheckResponse
   */
  async createPreCheckWithOptions(request: $_model.CreatePreCheckRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePreCheckResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.buckets)) {
      body["Buckets"] = request.buckets;
    }

    if (!$dara.isNull(request.distinctHistoryTasks)) {
      body["DistinctHistoryTasks"] = request.distinctHistoryTasks;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.isInc)) {
      body["IsInc"] = request.isInc;
    }

    if (!$dara.isNull(request.mediaType)) {
      body["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.prefixFilterType)) {
      body["PrefixFilterType"] = request.prefixFilterType;
    }

    if (!$dara.isNull(request.prefixFilters)) {
      body["PrefixFilters"] = request.prefixFilters;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.scanLimit)) {
      body["ScanLimit"] = request.scanLimit;
    }

    if (!$dara.isNull(request.scanNoFileType)) {
      body["ScanNoFileType"] = request.scanNoFileType;
    }

    if (!$dara.isNull(request.scanService)) {
      body["ScanService"] = request.scanService;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePreCheck",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePreCheckResponse>(await this.callApi(params, req, runtime), new $_model.CreatePreCheckResponse({}));
  }

  /**
   * 创建oss扫描任务前检查
   * 
   * @param request - CreatePreCheckRequest
   * @returns CreatePreCheckResponse
   */
  async createPreCheck(request: $_model.CreatePreCheckRequest): Promise<$_model.CreatePreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPreCheckWithOptions(request, runtime);
  }

  /**
   * 删除代答库
   * 
   * @param request - DeleteAnswerLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAnswerLibResponse
   */
  async deleteAnswerLibWithOptions(request: $_model.DeleteAnswerLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAnswerLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAnswerLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAnswerLibResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAnswerLibResponse({}));
  }

  /**
   * 删除代答库
   * 
   * @param request - DeleteAnswerLibRequest
   * @returns DeleteAnswerLibResponse
   */
  async deleteAnswerLib(request: $_model.DeleteAnswerLibRequest): Promise<$_model.DeleteAnswerLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAnswerLibWithOptions(request, runtime);
  }

  /**
   * 删除代答答案
   * 
   * @param request - DeleteAnswerSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAnswerSampleResponse
   */
  async deleteAnswerSampleWithOptions(request: $_model.DeleteAnswerSampleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAnswerSampleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ids)) {
      body["Ids"] = request.ids;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAnswerSample",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAnswerSampleResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAnswerSampleResponse({}));
  }

  /**
   * 删除代答答案
   * 
   * @param request - DeleteAnswerSampleRequest
   * @returns DeleteAnswerSampleResponse
   */
  async deleteAnswerSample(request: $_model.DeleteAnswerSampleRequest): Promise<$_model.DeleteAnswerSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAnswerSampleWithOptions(request, runtime);
  }

  /**
   * 删除消息通知
   * 
   * @param request - DeleteCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCallbackResponse
   */
  async deleteCallbackWithOptions(request: $_model.DeleteCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCallback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteCallbackResponse>(await this.callApi(params, req, runtime), new $_model.DeleteCallbackResponse({}));
  }

  /**
   * 删除消息通知
   * 
   * @param request - DeleteCallbackRequest
   * @returns DeleteCallbackResponse
   */
  async deleteCallback(request: $_model.DeleteCallbackRequest): Promise<$_model.DeleteCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteCallbackWithOptions(request, runtime);
  }

  /**
   * Delete feature configuration
   * 
   * @param request - DeleteFeatureConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFeatureConfigResponse
   */
  async deleteFeatureConfigWithOptions(request: $_model.DeleteFeatureConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteFeatureConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.field)) {
      body["Field"] = request.field;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFeatureConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteFeatureConfigResponse>(await this.callApi(params, req, runtime), new $_model.DeleteFeatureConfigResponse({}));
  }

  /**
   * Delete feature configuration
   * 
   * @param request - DeleteFeatureConfigRequest
   * @returns DeleteFeatureConfigResponse
   */
  async deleteFeatureConfig(request: $_model.DeleteFeatureConfigRequest): Promise<$_model.DeleteFeatureConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFeatureConfigWithOptions(request, runtime);
  }

  /**
   * 批量删除
   * 
   * @param request - DeleteImagesFromLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteImagesFromLibResponse
   */
  async deleteImagesFromLibWithOptions(request: $_model.DeleteImagesFromLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteImagesFromLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageIds)) {
      body["ImageIds"] = request.imageIds;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteImagesFromLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteImagesFromLibResponse>(await this.callApi(params, req, runtime), new $_model.DeleteImagesFromLibResponse({}));
  }

  /**
   * 批量删除
   * 
   * @param request - DeleteImagesFromLibRequest
   * @returns DeleteImagesFromLibResponse
   */
  async deleteImagesFromLib(request: $_model.DeleteImagesFromLibRequest): Promise<$_model.DeleteImagesFromLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImagesFromLibWithOptions(request, runtime);
  }

  /**
   * 删除关键词
   * 
   * @param request - DeleteKeywordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeywordResponse
   */
  async deleteKeywordWithOptions(request: $_model.DeleteKeywordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKeywordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keywordIdList)) {
      body["KeywordIdList"] = request.keywordIdList;
    }

    if (!$dara.isNull(request.keywordIds)) {
      body["KeywordIds"] = request.keywordIds;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKeyword",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKeywordResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKeywordResponse({}));
  }

  /**
   * 删除关键词
   * 
   * @param request - DeleteKeywordRequest
   * @returns DeleteKeywordResponse
   */
  async deleteKeyword(request: $_model.DeleteKeywordRequest): Promise<$_model.DeleteKeywordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKeywordWithOptions(request, runtime);
  }

  /**
   * 删除关键词库
   * 
   * @param request - DeleteKeywordLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteKeywordLibResponse
   */
  async deleteKeywordLibWithOptions(request: $_model.DeleteKeywordLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteKeywordLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteKeywordLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteKeywordLibResponse>(await this.callApi(params, req, runtime), new $_model.DeleteKeywordLibResponse({}));
  }

  /**
   * 删除关键词库
   * 
   * @param request - DeleteKeywordLibRequest
   * @returns DeleteKeywordLibResponse
   */
  async deleteKeywordLib(request: $_model.DeleteKeywordLibRequest): Promise<$_model.DeleteKeywordLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKeywordLibWithOptions(request, runtime);
  }

  /**
   * 导出代答答案
   * 
   * @param request - ExportAnswerSampleRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportAnswerSampleResponse
   */
  async exportAnswerSampleWithOptions(request: $_model.ExportAnswerSampleRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportAnswerSampleResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportAnswerSample",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportAnswerSampleResponse>(await this.callApi(params, req, runtime), new $_model.ExportAnswerSampleResponse({}));
  }

  /**
   * 导出代答答案
   * 
   * @param request - ExportAnswerSampleRequest
   * @returns ExportAnswerSampleResponse
   */
  async exportAnswerSample(request: $_model.ExportAnswerSampleRequest): Promise<$_model.ExportAnswerSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportAnswerSampleWithOptions(request, runtime);
  }

  /**
   * 导出调用量
   * 
   * @param request - ExportCipStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportCipStatsResponse
   */
  async exportCipStatsWithOptions(request: $_model.ExportCipStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportCipStatsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.byMonth)) {
      body["ByMonth"] = request.byMonth;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.exportType)) {
      body["ExportType"] = request.exportType;
    }

    if (!$dara.isNull(request.label)) {
      body["Label"] = request.label;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.subUid)) {
      body["SubUid"] = request.subUid;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportCipStats",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportCipStatsResponse>(await this.callApi(params, req, runtime), new $_model.ExportCipStatsResponse({}));
  }

  /**
   * 导出调用量
   * 
   * @param request - ExportCipStatsRequest
   * @returns ExportCipStatsResponse
   */
  async exportCipStats(request: $_model.ExportCipStatsRequest): Promise<$_model.ExportCipStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportCipStatsWithOptions(request, runtime);
  }

  /**
   * 导出关键词
   * 
   * @param request - ExportKeywordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportKeywordResponse
   */
  async exportKeywordWithOptions(request: $_model.ExportKeywordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportKeywordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportKeyword",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportKeywordResponse>(await this.callApi(params, req, runtime), new $_model.ExportKeywordResponse({}));
  }

  /**
   * 导出关键词
   * 
   * @param request - ExportKeywordRequest
   * @returns ExportKeywordResponse
   */
  async exportKeyword(request: $_model.ExportKeywordRequest): Promise<$_model.ExportKeywordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportKeywordWithOptions(request, runtime);
  }

  /**
   * oss用量统计导出
   * 
   * @param request - ExportOssCheckStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportOssCheckStatResponse
   */
  async exportOssCheckStatWithOptions(request: $_model.ExportOssCheckStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportOssCheckStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.byMonth)) {
      body["ByMonth"] = request.byMonth;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.parentTaskId)) {
      body["ParentTaskId"] = request.parentTaskId;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportOssCheckStat",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportOssCheckStatResponse>(await this.callApi(params, req, runtime), new $_model.ExportOssCheckStatResponse({}));
  }

  /**
   * oss用量统计导出
   * 
   * @param request - ExportOssCheckStatRequest
   * @returns ExportOssCheckStatResponse
   */
  async exportOssCheckStat(request: $_model.ExportOssCheckStatRequest): Promise<$_model.ExportOssCheckStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportOssCheckStatWithOptions(request, runtime);
  }

  /**
   * 导出oss扫描结果
   * 
   * @param tmpReq - ExportResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportResultResponse
   */
  async exportResultWithOptions(tmpReq: $_model.ExportResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportResultResponse> {
    tmpReq.validate();
    let request = new $_model.ExportResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportResultResponse>(await this.callApi(params, req, runtime), new $_model.ExportResultResponse({}));
  }

  /**
   * 导出oss扫描结果
   * 
   * @param request - ExportResultRequest
   * @returns ExportResultResponse
   */
  async exportResult(request: $_model.ExportResultRequest): Promise<$_model.ExportResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportResultWithOptions(request, runtime);
  }

  /**
   * 导出调用结果，excel文件
   * 
   * @param tmpReq - ExportScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportScanResultResponse
   */
  async exportScanResultWithOptions(tmpReq: $_model.ExportScanResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportScanResultResponse> {
    tmpReq.validate();
    let request = new $_model.ExportScanResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryShrink)) {
      body["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportScanResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportScanResultResponse>(await this.callApi(params, req, runtime), new $_model.ExportScanResultResponse({}));
  }

  /**
   * 导出调用结果，excel文件
   * 
   * @param request - ExportScanResultRequest
   * @returns ExportScanResultResponse
   */
  async exportScanResult(request: $_model.ExportScanResultRequest): Promise<$_model.ExportScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportScanResultWithOptions(request, runtime);
  }

  /**
   * 导出调用结果，excel文件
   * 
   * @param tmpReq - ExportTextScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExportTextScanResultResponse
   */
  async exportTextScanResultWithOptions(tmpReq: $_model.ExportTextScanResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ExportTextScanResultResponse> {
    tmpReq.validate();
    let request = new $_model.ExportTextScanResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.queryShrink)) {
      body["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExportTextScanResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExportTextScanResultResponse>(await this.callApi(params, req, runtime), new $_model.ExportTextScanResultResponse({}));
  }

  /**
   * 导出调用结果，excel文件
   * 
   * @param request - ExportTextScanResultRequest
   * @returns ExportTextScanResultResponse
   */
  async exportTextScanResult(request: $_model.ExportTextScanResultRequest): Promise<$_model.ExportTextScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportTextScanResultWithOptions(request, runtime);
  }

  /**
   * 获取代答样本导入进度
   * 
   * @param request - GetAnswerImportProgressRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAnswerImportProgressResponse
   */
  async getAnswerImportProgressWithOptions(request: $_model.GetAnswerImportProgressRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAnswerImportProgressResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAnswerImportProgress",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAnswerImportProgressResponse>(await this.callApi(params, req, runtime), new $_model.GetAnswerImportProgressResponse({}));
  }

  /**
   * 获取代答样本导入进度
   * 
   * @param request - GetAnswerImportProgressRequest
   * @returns GetAnswerImportProgressResponse
   */
  async getAnswerImportProgress(request: $_model.GetAnswerImportProgressRequest): Promise<$_model.GetAnswerImportProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAnswerImportProgressWithOptions(request, runtime);
  }

  /**
   * 证据转存获取用户bucket列表
   * 
   * @param request - GetBackupBucketsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBackupBucketsListResponse
   */
  async getBackupBucketsListWithOptions(request: $_model.GetBackupBucketsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBackupBucketsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBackupBucketsList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBackupBucketsListResponse>(await this.callApi(params, req, runtime), new $_model.GetBackupBucketsListResponse({}));
  }

  /**
   * 证据转存获取用户bucket列表
   * 
   * @param request - GetBackupBucketsListRequest
   * @returns GetBackupBucketsListResponse
   */
  async getBackupBucketsList(request: $_model.GetBackupBucketsListRequest): Promise<$_model.GetBackupBucketsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBackupBucketsListWithOptions(request, runtime);
  }

  /**
   * 获取证据转存配置
   * 
   * @param request - GetBackupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBackupConfigResponse
   */
  async getBackupConfigWithOptions(request: $_model.GetBackupConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBackupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBackupConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBackupConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetBackupConfigResponse({}));
  }

  /**
   * 获取证据转存配置
   * 
   * @param request - GetBackupConfigRequest
   * @returns GetBackupConfigResponse
   */
  async getBackupConfig(request: $_model.GetBackupConfigRequest): Promise<$_model.GetBackupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBackupConfigWithOptions(request, runtime);
  }

  /**
   * 用户授权校验
   * 
   * @param request - GetBackupStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBackupStatusResponse
   */
  async getBackupStatusWithOptions(request: $_model.GetBackupStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBackupStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBackupStatus",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBackupStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetBackupStatusResponse({}));
  }

  /**
   * 用户授权校验
   * 
   * @param request - GetBackupStatusRequest
   * @returns GetBackupStatusResponse
   */
  async getBackupStatus(request: $_model.GetBackupStatusRequest): Promise<$_model.GetBackupStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBackupStatusWithOptions(request, runtime);
  }

  /**
   * bucket列表
   * 
   * @param request - GetBucketsListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetBucketsListResponse
   */
  async getBucketsListWithOptions(request: $_model.GetBucketsListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetBucketsListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetBucketsList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetBucketsListResponse>(await this.callApi(params, req, runtime), new $_model.GetBucketsListResponse({}));
  }

  /**
   * bucket列表
   * 
   * @param request - GetBucketsListRequest
   * @returns GetBucketsListResponse
   */
  async getBucketsList(request: $_model.GetBucketsListRequest): Promise<$_model.GetBucketsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBucketsListWithOptions(request, runtime);
  }

  /**
   * 查询调用量
   * 
   * @param request - GetCipStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCipStatsResponse
   */
  async getCipStatsWithOptions(request: $_model.GetCipStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCipStatsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.byMonth)) {
      body["ByMonth"] = request.byMonth;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.label)) {
      body["Label"] = request.label;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.subUid)) {
      body["SubUid"] = request.subUid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCipStats",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetCipStatsResponse>(await this.callApi(params, req, runtime), new $_model.GetCipStatsResponse({}));
  }

  /**
   * 查询调用量
   * 
   * @param request - GetCipStatsRequest
   * @returns GetCipStatsResponse
   */
  async getCipStats(request: $_model.GetCipStatsRequest): Promise<$_model.GetCipStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCipStatsWithOptions(request, runtime);
  }

  /**
   * 获取定时任务预计执行时间
   * 
   * @param request - GetExecuteTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExecuteTimeResponse
   */
  async getExecuteTimeWithOptions(request: $_model.GetExecuteTimeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetExecuteTimeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExecuteTime",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetExecuteTimeResponse>(await this.callApi(params, req, runtime), new $_model.GetExecuteTimeResponse({}));
  }

  /**
   * 获取定时任务预计执行时间
   * 
   * @param request - GetExecuteTimeRequest
   * @returns GetExecuteTimeResponse
   */
  async getExecuteTime(request: $_model.GetExecuteTimeRequest): Promise<$_model.GetExecuteTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExecuteTimeWithOptions(request, runtime);
  }

  /**
   * Get Feature Configuration
   * 
   * @param request - GetFeatureConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFeatureConfigResponse
   */
  async getFeatureConfigWithOptions(request: $_model.GetFeatureConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetFeatureConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFeatureConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetFeatureConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetFeatureConfigResponse({}));
  }

  /**
   * Get Feature Configuration
   * 
   * @param request - GetFeatureConfigRequest
   * @returns GetFeatureConfigResponse
   */
  async getFeatureConfig(request: $_model.GetFeatureConfigRequest): Promise<$_model.GetFeatureConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFeatureConfigWithOptions(request, runtime);
  }

  /**
   * 获取图片规则标签信息
   * 
   * @param request - GetImageSceneLabelConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageSceneLabelConfResponse
   */
  async getImageSceneLabelConfWithOptions(request: $_model.GetImageSceneLabelConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageSceneLabelConfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageSceneLabelConf",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageSceneLabelConfResponse>(await this.callApi(params, req, runtime), new $_model.GetImageSceneLabelConfResponse({}));
  }

  /**
   * 获取图片规则标签信息
   * 
   * @param request - GetImageSceneLabelConfRequest
   * @returns GetImageSceneLabelConfResponse
   */
  async getImageSceneLabelConf(request: $_model.GetImageSceneLabelConfRequest): Promise<$_model.GetImageSceneLabelConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageSceneLabelConfWithOptions(request, runtime);
  }

  /**
   * 获取图片规则标签信息
   * 
   * @param request - GetImageSceneLabelListConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageSceneLabelListConfResponse
   */
  async getImageSceneLabelListConfWithOptions(request: $_model.GetImageSceneLabelListConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageSceneLabelListConfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.imageServiceCode)) {
      query["ImageServiceCode"] = request.imageServiceCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageSceneLabelListConf",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageSceneLabelListConfResponse>(await this.callApi(params, req, runtime), new $_model.GetImageSceneLabelListConfResponse({}));
  }

  /**
   * 获取图片规则标签信息
   * 
   * @param request - GetImageSceneLabelListConfRequest
   * @returns GetImageSceneLabelListConfResponse
   */
  async getImageSceneLabelListConf(request: $_model.GetImageSceneLabelListConfRequest): Promise<$_model.GetImageSceneLabelListConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageSceneLabelListConfWithOptions(request, runtime);
  }

  /**
   * oss定时扫描检测周期查询
   * 
   * @param tmpReq - GetJobNameListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobNameListResponse
   */
  async getJobNameListWithOptions(tmpReq: $_model.GetJobNameListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetJobNameListResponse> {
    tmpReq.validate();
    let request = new $_model.GetJobNameListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortShrink)) {
      query["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetJobNameList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetJobNameListResponse>(await this.callApi(params, req, runtime), new $_model.GetJobNameListResponse({}));
  }

  /**
   * oss定时扫描检测周期查询
   * 
   * @param request - GetJobNameListRequest
   * @returns GetJobNameListResponse
   */
  async getJobNameList(request: $_model.GetJobNameListRequest): Promise<$_model.GetJobNameListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobNameListWithOptions(request, runtime);
  }

  /**
   * 查询导入关键词结果
   * 
   * @param request - GetKeywordImportResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKeywordImportResultResponse
   */
  async getKeywordImportResultWithOptions(request: $_model.GetKeywordImportResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetKeywordImportResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKeywordImportResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKeywordImportResultResponse>(await this.callApi(params, req, runtime), new $_model.GetKeywordImportResultResponse({}));
  }

  /**
   * 查询导入关键词结果
   * 
   * @param request - GetKeywordImportResultRequest
   * @returns GetKeywordImportResultResponse
   */
  async getKeywordImportResult(request: $_model.GetKeywordImportResultRequest): Promise<$_model.GetKeywordImportResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKeywordImportResultWithOptions(request, runtime);
  }

  /**
   * 关键词库信息
   * 
   * @param request - GetKeywordLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetKeywordLibResponse
   */
  async getKeywordLibWithOptions(request: $_model.GetKeywordLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetKeywordLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetKeywordLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetKeywordLibResponse>(await this.callApi(params, req, runtime), new $_model.GetKeywordLibResponse({}));
  }

  /**
   * 关键词库信息
   * 
   * @param request - GetKeywordLibRequest
   * @returns GetKeywordLibResponse
   */
  async getKeywordLib(request: $_model.GetKeywordLibRequest): Promise<$_model.GetKeywordLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKeywordLibWithOptions(request, runtime);
  }

  /**
   * oss用量统计
   * 
   * @param request - GetOssCheckStatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssCheckStatResponse
   */
  async getOssCheckStatWithOptions(request: $_model.GetOssCheckStatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssCheckStatResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.byMonth)) {
      body["ByMonth"] = request.byMonth;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.parentTaskId)) {
      body["ParentTaskId"] = request.parentTaskId;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssCheckStat",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssCheckStatResponse>(await this.callApi(params, req, runtime), new $_model.GetOssCheckStatResponse({}));
  }

  /**
   * oss用量统计
   * 
   * @param request - GetOssCheckStatRequest
   * @returns GetOssCheckStatResponse
   */
  async getOssCheckStat(request: $_model.GetOssCheckStatRequest): Promise<$_model.GetOssCheckStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssCheckStatWithOptions(request, runtime);
  }

  /**
   * 获取OSS检测用户状态
   * 
   * @param request - GetOssCheckStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssCheckStatusResponse
   */
  async getOssCheckStatusWithOptions(request: $_model.GetOssCheckStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssCheckStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssCheckStatus",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssCheckStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetOssCheckStatusResponse({}));
  }

  /**
   * 获取OSS检测用户状态
   * 
   * @param request - GetOssCheckStatusRequest
   * @returns GetOssCheckStatusResponse
   */
  async getOssCheckStatus(request: $_model.GetOssCheckStatusRequest): Promise<$_model.GetOssCheckStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssCheckStatusWithOptions(request, runtime);
  }

  /**
   * 用户待检测信息
   * 
   * @param request - GetScanNumRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScanNumResponse
   */
  async getScanNumWithOptions(request: $_model.GetScanNumRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScanNumResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.buckets)) {
      query["Buckets"] = request.buckets;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScanNum",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScanNumResponse>(await this.callApi(params, req, runtime), new $_model.GetScanNumResponse({}));
  }

  /**
   * 用户待检测信息
   * 
   * @param request - GetScanNumRequest
   * @returns GetScanNumResponse
   */
  async getScanNum(request: $_model.GetScanNumRequest): Promise<$_model.GetScanNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScanNumWithOptions(request, runtime);
  }

  /**
   * 查询调用结果
   * 
   * @param tmpReq - GetScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetScanResultResponse
   */
  async getScanResultWithOptions(tmpReq: $_model.GetScanResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetScanResultResponse> {
    tmpReq.validate();
    let request = new $_model.GetScanResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryShrink)) {
      body["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetScanResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetScanResultResponse>(await this.callApi(params, req, runtime), new $_model.GetScanResultResponse({}));
  }

  /**
   * 查询调用结果
   * 
   * @param request - GetScanResultRequest
   * @returns GetScanResultResponse
   */
  async getScanResult(request: $_model.GetScanResultRequest): Promise<$_model.GetScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScanResultWithOptions(request, runtime);
  }

  /**
   * 获取单个服务
   * 
   * @param request - GetServiceConfRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceConfResponse
   */
  async getServiceConfWithOptions(request: $_model.GetServiceConfRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceConfResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.byDefault)) {
      body["ByDefault"] = request.byDefault;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceConf",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceConfResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceConfResponse({}));
  }

  /**
   * 获取单个服务
   * 
   * @param request - GetServiceConfRequest
   * @returns GetServiceConfResponse
   */
  async getServiceConf(request: $_model.GetServiceConfRequest): Promise<$_model.GetServiceConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceConfWithOptions(request, runtime);
  }

  /**
   * 获取单个服务
   * 
   * @param request - GetServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceConfigResponse
   */
  async getServiceConfigWithOptions(request: $_model.GetServiceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceConfigResponse({}));
  }

  /**
   * 获取单个服务
   * 
   * @param request - GetServiceConfigRequest
   * @returns GetServiceConfigResponse
   */
  async getServiceConfig(request: $_model.GetServiceConfigRequest): Promise<$_model.GetServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceConfigWithOptions(request, runtime);
  }

  /**
   * 获取单个服务的标签配置
   * 
   * @param request - GetServiceLabelConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceLabelConfigResponse
   */
  async getServiceLabelConfigWithOptions(request: $_model.GetServiceLabelConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceLabelConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceLabelConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceLabelConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceLabelConfigResponse({}));
  }

  /**
   * 获取单个服务的标签配置
   * 
   * @param request - GetServiceLabelConfigRequest
   * @returns GetServiceLabelConfigResponse
   */
  async getServiceLabelConfig(request: $_model.GetServiceLabelConfigRequest): Promise<$_model.GetServiceLabelConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceLabelConfigWithOptions(request, runtime);
  }

  /**
   * 查询oss扫描任务列表
   * 
   * @param tmpReq - GetStockOssCheckTasksListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStockOssCheckTasksListResponse
   */
  async getStockOssCheckTasksListWithOptions(tmpReq: $_model.GetStockOssCheckTasksListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetStockOssCheckTasksListResponse> {
    tmpReq.validate();
    let request = new $_model.GetStockOssCheckTasksListShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.isInc)) {
      query["IsInc"] = request.isInc;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.mediaType)) {
      body["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStockOssCheckTasksList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetStockOssCheckTasksListResponse>(await this.callApi(params, req, runtime), new $_model.GetStockOssCheckTasksListResponse({}));
  }

  /**
   * 查询oss扫描任务列表
   * 
   * @param request - GetStockOssCheckTasksListRequest
   * @returns GetStockOssCheckTasksListResponse
   */
  async getStockOssCheckTasksList(request: $_model.GetStockOssCheckTasksListRequest): Promise<$_model.GetStockOssCheckTasksListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStockOssCheckTasksListWithOptions(request, runtime);
  }

  /**
   * 查询调用结果
   * 
   * @param tmpReq - GetTextScanResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextScanResultResponse
   */
  async getTextScanResultWithOptions(tmpReq: $_model.GetTextScanResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTextScanResultResponse> {
    tmpReq.validate();
    let request = new $_model.GetTextScanResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryShrink)) {
      body["Query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextScanResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTextScanResultResponse>(await this.callApi(params, req, runtime), new $_model.GetTextScanResultResponse({}));
  }

  /**
   * 查询调用结果
   * 
   * @param request - GetTextScanResultRequest
   * @returns GetTextScanResultResponse
   */
  async getTextScanResult(request: $_model.GetTextScanResultRequest): Promise<$_model.GetTextScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTextScanResultWithOptions(request, runtime);
  }

  /**
   * 文件上传获取相应信息
   * 
   * @param request - GetUploadInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadInfoResponse
   */
  async getUploadInfoWithOptions(request: $_model.GetUploadInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadInfo",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetUploadInfoResponse({}));
  }

  /**
   * 文件上传获取相应信息
   * 
   * @param request - GetUploadInfoRequest
   * @returns GetUploadInfoResponse
   */
  async getUploadInfo(request: $_model.GetUploadInfoRequest): Promise<$_model.GetUploadInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadInfoWithOptions(request, runtime);
  }

  /**
   * 获取用户购买状态
   * 
   * @param request - GetUserBuyStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserBuyStatusResponse
   */
  async getUserBuyStatusWithOptions(request: $_model.GetUserBuyStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserBuyStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserBuyStatus",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUserBuyStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetUserBuyStatusResponse({}));
  }

  /**
   * 获取用户购买状态
   * 
   * @param request - GetUserBuyStatusRequest
   * @returns GetUserBuyStatusResponse
   */
  async getUserBuyStatus(request: $_model.GetUserBuyStatusRequest): Promise<$_model.GetUserBuyStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserBuyStatusWithOptions(request, runtime);
  }

  /**
   * 代答库列表
   * 
   * @param request - ListAnswerLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAnswerLibResponse
   */
  async listAnswerLibWithOptions(request: $_model.ListAnswerLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAnswerLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAnswerLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAnswerLibResponse>(await this.callApi(params, req, runtime), new $_model.ListAnswerLibResponse({}));
  }

  /**
   * 代答库列表
   * 
   * @param request - ListAnswerLibRequest
   * @returns ListAnswerLibResponse
   */
  async listAnswerLib(request: $_model.ListAnswerLibRequest): Promise<$_model.ListAnswerLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAnswerLibWithOptions(request, runtime);
  }

  /**
   * 消息通知列表
   * 
   * @param request - ListCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCallbackResponse
   */
  async listCallbackWithOptions(request: $_model.ListCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCallback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCallbackResponse>(await this.callApi(params, req, runtime), new $_model.ListCallbackResponse({}));
  }

  /**
   * 消息通知列表
   * 
   * @param request - ListCallbackRequest
   * @returns ListCallbackResponse
   */
  async listCallback(request: $_model.ListCallbackRequest): Promise<$_model.ListCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCallbackWithOptions(request, runtime);
  }

  /**
   * 图库列表
   * 
   * @param request - ListImageLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImageLibResponse
   */
  async listImageLibWithOptions(request: $_model.ListImageLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImageLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImageLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImageLibResponse>(await this.callApi(params, req, runtime), new $_model.ListImageLibResponse({}));
  }

  /**
   * 图库列表
   * 
   * @param request - ListImageLibRequest
   * @returns ListImageLibResponse
   */
  async listImageLib(request: $_model.ListImageLibRequest): Promise<$_model.ListImageLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImageLibWithOptions(request, runtime);
  }

  /**
   * 图片列表 分页
   * 
   * @param tmpReq - ListImagesFromLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesFromLibResponse
   */
  async listImagesFromLibWithOptions(tmpReq: $_model.ListImagesFromLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListImagesFromLibResponse> {
    tmpReq.validate();
    let request = new $_model.ListImagesFromLibShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      body["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.imgId)) {
      body["ImgId"] = request.imgId;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      body["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImagesFromLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListImagesFromLibResponse>(await this.callApi(params, req, runtime), new $_model.ListImagesFromLibResponse({}));
  }

  /**
   * 图片列表 分页
   * 
   * @param request - ListImagesFromLibRequest
   * @returns ListImagesFromLibResponse
   */
  async listImagesFromLib(request: $_model.ListImagesFromLibRequest): Promise<$_model.ListImagesFromLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImagesFromLibWithOptions(request, runtime);
  }

  /**
   * 关键词库列表
   * 
   * @param request - ListKeywordLibsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKeywordLibsResponse
   */
  async listKeywordLibsWithOptions(request: $_model.ListKeywordLibsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListKeywordLibsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKeywordLibs",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKeywordLibsResponse>(await this.callApi(params, req, runtime), new $_model.ListKeywordLibsResponse({}));
  }

  /**
   * 关键词库列表
   * 
   * @param request - ListKeywordLibsRequest
   * @returns ListKeywordLibsResponse
   */
  async listKeywordLibs(request: $_model.ListKeywordLibsRequest): Promise<$_model.ListKeywordLibsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKeywordLibsWithOptions(request, runtime);
  }

  /**
   * 查询关键词列表
   * 
   * @param tmpReq - ListKeywordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListKeywordsResponse
   */
  async listKeywordsWithOptions(tmpReq: $_model.ListKeywordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListKeywordsResponse> {
    tmpReq.validate();
    let request = new $_model.ListKeywordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortShrink)) {
      body["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.word)) {
      body["Word"] = request.word;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListKeywords",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListKeywordsResponse>(await this.callApi(params, req, runtime), new $_model.ListKeywordsResponse({}));
  }

  /**
   * 查询关键词列表
   * 
   * @param request - ListKeywordsRequest
   * @returns ListKeywordsResponse
   */
  async listKeywords(request: $_model.ListKeywordsRequest): Promise<$_model.ListKeywordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKeywordsWithOptions(request, runtime);
  }

  /**
   * oss扫描结果查询
   * 
   * @param tmpReq - ListOssCheckResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOssCheckResultResponse
   */
  async listOssCheckResultWithOptions(tmpReq: $_model.ListOssCheckResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListOssCheckResultResponse> {
    tmpReq.validate();
    let request = new $_model.ListOssCheckResultShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.finishNum)) {
      query["FinishNum"] = request.finishNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortShrink)) {
      query["Sort"] = request.sortShrink;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOssCheckResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListOssCheckResultResponse>(await this.callApi(params, req, runtime), new $_model.ListOssCheckResultResponse({}));
  }

  /**
   * oss扫描结果查询
   * 
   * @param request - ListOssCheckResultRequest
   * @returns ListOssCheckResultResponse
   */
  async listOssCheckResult(request: $_model.ListOssCheckResultRequest): Promise<$_model.ListOssCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOssCheckResultWithOptions(request, runtime);
  }

  /**
   * 获取服务列表
   * 
   * @param request - ListServiceConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceConfigsResponse
   */
  async listServiceConfigsWithOptions(request: $_model.ListServiceConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListServiceConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.classify)) {
      query["Classify"] = request.classify;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.useStatus)) {
      query["UseStatus"] = request.useStatus;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceConfigs",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListServiceConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListServiceConfigsResponse({}));
  }

  /**
   * 获取服务列表
   * 
   * @param request - ListServiceConfigsRequest
   * @returns ListServiceConfigsResponse
   */
  async listServiceConfigs(request: $_model.ListServiceConfigsRequest): Promise<$_model.ListServiceConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceConfigsWithOptions(request, runtime);
  }

  /**
   * 使用SSE接口流式调用大模型
   * 
   * @param request - LlmStreamChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LlmStreamChatResponse
   */
  async llmStreamChatWithOptions(request: $_model.LlmStreamChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LlmStreamChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.messages)) {
      body["Messages"] = request.messages;
    }

    if (!$dara.isNull(request.temperature)) {
      body["Temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.topP)) {
      body["TopP"] = request.topP;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LlmStreamChat",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.LlmStreamChatResponse>(await this.callApi(params, req, runtime), new $_model.LlmStreamChatResponse({}));
  }

  /**
   * 使用SSE接口流式调用大模型
   * 
   * @param request - LlmStreamChatRequest
   * @returns LlmStreamChatResponse
   */
  async llmStreamChat(request: $_model.LlmStreamChatRequest): Promise<$_model.LlmStreamChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.llmStreamChatWithOptions(request, runtime);
  }

  /**
   * 更新代答库
   * 
   * @param request - ModifyAnswerLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAnswerLibResponse
   */
  async modifyAnswerLibWithOptions(request: $_model.ModifyAnswerLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAnswerLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.libName)) {
      query["LibName"] = request.libName;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAnswerLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAnswerLibResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAnswerLibResponse({}));
  }

  /**
   * 更新代答库
   * 
   * @param request - ModifyAnswerLibRequest
   * @returns ModifyAnswerLibResponse
   */
  async modifyAnswerLib(request: $_model.ModifyAnswerLibRequest): Promise<$_model.ModifyAnswerLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAnswerLibWithOptions(request, runtime);
  }

  /**
   * 修改消息通知
   * 
   * @param request - ModifyCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyCallbackResponse
   */
  async modifyCallbackWithOptions(request: $_model.ModifyCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cryptType)) {
      body["CryptType"] = request.cryptType;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.scope)) {
      body["Scope"] = request.scope;
    }

    if (!$dara.isNull(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyCallback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyCallbackResponse>(await this.callApi(params, req, runtime), new $_model.ModifyCallbackResponse({}));
  }

  /**
   * 修改消息通知
   * 
   * @param request - ModifyCallbackRequest
   * @returns ModifyCallbackResponse
   */
  async modifyCallback(request: $_model.ModifyCallbackRequest): Promise<$_model.ModifyCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCallbackWithOptions(request, runtime);
  }

  /**
   * Save Feature Configuration
   * 
   * @param request - ModifyFeatureConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyFeatureConfigResponse
   */
  async modifyFeatureConfigWithOptions(request: $_model.ModifyFeatureConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyFeatureConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.field)) {
      body["Field"] = request.field;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyFeatureConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyFeatureConfigResponse>(await this.callApi(params, req, runtime), new $_model.ModifyFeatureConfigResponse({}));
  }

  /**
   * Save Feature Configuration
   * 
   * @param request - ModifyFeatureConfigRequest
   * @returns ModifyFeatureConfigResponse
   */
  async modifyFeatureConfig(request: $_model.ModifyFeatureConfigRequest): Promise<$_model.ModifyFeatureConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFeatureConfigWithOptions(request, runtime);
  }

  /**
   * 编辑服务
   * 
   * @param request - ModifyServiceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyServiceInfoResponse
   */
  async modifyServiceInfoWithOptions(request: $_model.ModifyServiceInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyServiceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.serviceDesc)) {
      body["ServiceDesc"] = request.serviceDesc;
    }

    if (!$dara.isNull(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyServiceInfo",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyServiceInfoResponse>(await this.callApi(params, req, runtime), new $_model.ModifyServiceInfoResponse({}));
  }

  /**
   * 编辑服务
   * 
   * @param request - ModifyServiceInfoRequest
   * @returns ModifyServiceInfoResponse
   */
  async modifyServiceInfo(request: $_model.ModifyServiceInfoRequest): Promise<$_model.ModifyServiceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyServiceInfoWithOptions(request, runtime);
  }

  /**
   * 分页查询代答样本
   * 
   * @param tmpReq - QueryAnswerSampleByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAnswerSampleByPageResponse
   */
  async queryAnswerSampleByPageWithOptions(tmpReq: $_model.QueryAnswerSampleByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAnswerSampleByPageResponse> {
    tmpReq.validate();
    let request = new $_model.QueryAnswerSampleByPageShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.sort)) {
      request.sortShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sort, "Sort", "json");
    }

    let query = { };
    if (!$dara.isNull(request.answer)) {
      query["Answer"] = request.answer;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.libId)) {
      query["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.sortShrink)) {
      query["Sort"] = request.sortShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAnswerSampleByPage",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAnswerSampleByPageResponse>(await this.callApi(params, req, runtime), new $_model.QueryAnswerSampleByPageResponse({}));
  }

  /**
   * 分页查询代答样本
   * 
   * @param request - QueryAnswerSampleByPageRequest
   * @returns QueryAnswerSampleByPageResponse
   */
  async queryAnswerSampleByPage(request: $_model.QueryAnswerSampleByPageRequest): Promise<$_model.QueryAnswerSampleByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAnswerSampleByPageWithOptions(request, runtime);
  }

  /**
   * 查询单个回调配置
   * 
   * @param request - QueryCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallbackResponse
   */
  async queryCallbackWithOptions(request: $_model.QueryCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkForOss)) {
      body["CheckForOss"] = request.checkForOss;
    }

    if (!$dara.isNull(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCallback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCallbackResponse>(await this.callApi(params, req, runtime), new $_model.QueryCallbackResponse({}));
  }

  /**
   * 查询单个回调配置
   * 
   * @param request - QueryCallbackRequest
   * @returns QueryCallbackResponse
   */
  async queryCallback(request: $_model.QueryCallbackRequest): Promise<$_model.QueryCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCallbackWithOptions(request, runtime);
  }

  /**
   * 消息通知
   * 
   * @param request - QueryCallbackByPageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCallbackByPageResponse
   */
  async queryCallbackByPageWithOptions(request: $_model.QueryCallbackByPageRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCallbackByPageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryCallbackByPage",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCallbackByPageResponse>(await this.callApi(params, req, runtime), new $_model.QueryCallbackByPageResponse({}));
  }

  /**
   * 消息通知
   * 
   * @param request - QueryCallbackByPageRequest
   * @returns QueryCallbackByPageResponse
   */
  async queryCallbackByPage(request: $_model.QueryCallbackByPageRequest): Promise<$_model.QueryCallbackByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCallbackByPageWithOptions(request, runtime);
  }

  /**
   * 更新证据转存配置
   * 
   * @param request - UpdateBackupConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBackupConfigResponse
   */
  async updateBackupConfigWithOptions(request: $_model.UpdateBackupConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateBackupConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.backupConfig)) {
      query["BackupConfig"] = request.backupConfig;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBackupConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateBackupConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateBackupConfigResponse({}));
  }

  /**
   * 更新证据转存配置
   * 
   * @param request - UpdateBackupConfigRequest
   * @returns UpdateBackupConfigResponse
   */
  async updateBackupConfig(request: $_model.UpdateBackupConfigRequest): Promise<$_model.UpdateBackupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBackupConfigWithOptions(request, runtime);
  }

  /**
   * 编辑图库
   * 
   * @param request - UpdateImageLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageLibResponse
   */
  async updateImageLibWithOptions(request: $_model.UpdateImageLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateImageLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.comment)) {
      body["Comment"] = request.comment;
    }

    if (!$dara.isNull(request.freeInspection)) {
      body["FreeInspection"] = request.freeInspection;
    }

    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.libName)) {
      body["LibName"] = request.libName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateImageLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateImageLibResponse>(await this.callApi(params, req, runtime), new $_model.UpdateImageLibResponse({}));
  }

  /**
   * 编辑图库
   * 
   * @param request - UpdateImageLibRequest
   * @returns UpdateImageLibResponse
   */
  async updateImageLib(request: $_model.UpdateImageLibRequest): Promise<$_model.UpdateImageLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageLibWithOptions(request, runtime);
  }

  /**
   * 编辑图库免检配置
   * 
   * @param tmpReq - UpdateImageLibFreeInspectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateImageLibFreeInspectionResponse
   */
  async updateImageLibFreeInspectionWithOptions(tmpReq: $_model.UpdateImageLibFreeInspectionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateImageLibFreeInspectionResponse> {
    tmpReq.validate();
    let request = new $_model.UpdateImageLibFreeInspectionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.config)) {
      request.configShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.config, "Config", "json");
    }

    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configShrink)) {
      body["Config"] = request.configShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateImageLibFreeInspection",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateImageLibFreeInspectionResponse>(await this.callApi(params, req, runtime), new $_model.UpdateImageLibFreeInspectionResponse({}));
  }

  /**
   * 编辑图库免检配置
   * 
   * @param request - UpdateImageLibFreeInspectionRequest
   * @returns UpdateImageLibFreeInspectionResponse
   */
  async updateImageLibFreeInspection(request: $_model.UpdateImageLibFreeInspectionRequest): Promise<$_model.UpdateImageLibFreeInspectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageLibFreeInspectionWithOptions(request, runtime);
  }

  /**
   * 编辑关键词库
   * 
   * @param request - UpdateKeywordLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateKeywordLibResponse
   */
  async updateKeywordLibWithOptions(request: $_model.UpdateKeywordLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateKeywordLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.libId)) {
      body["LibId"] = request.libId;
    }

    if (!$dara.isNull(request.libName)) {
      body["LibName"] = request.libName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateKeywordLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateKeywordLibResponse>(await this.callApi(params, req, runtime), new $_model.UpdateKeywordLibResponse({}));
  }

  /**
   * 编辑关键词库
   * 
   * @param request - UpdateKeywordLibRequest
   * @returns UpdateKeywordLibResponse
   */
  async updateKeywordLib(request: $_model.UpdateKeywordLibRequest): Promise<$_model.UpdateKeywordLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateKeywordLibWithOptions(request, runtime);
  }

  /**
   * 检测结果反馈
   * 
   * @param request - UpdateScanResultFeedbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateScanResultFeedbackResponse
   */
  async updateScanResultFeedbackWithOptions(request: $_model.UpdateScanResultFeedbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateScanResultFeedbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.feedback)) {
      body["Feedback"] = request.feedback;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.queryRequestId)) {
      body["QueryRequestId"] = request.queryRequestId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.riskLevel)) {
      body["RiskLevel"] = request.riskLevel;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateScanResultFeedback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateScanResultFeedbackResponse>(await this.callApi(params, req, runtime), new $_model.UpdateScanResultFeedbackResponse({}));
  }

  /**
   * 检测结果反馈
   * 
   * @param request - UpdateScanResultFeedbackRequest
   * @returns UpdateScanResultFeedbackResponse
   */
  async updateScanResultFeedback(request: $_model.UpdateScanResultFeedbackRequest): Promise<$_model.UpdateScanResultFeedbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateScanResultFeedbackWithOptions(request, runtime);
  }

  /**
   * 更新服务
   * 
   * @param request - UpdateServiceConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceConfigResponse
   */
  async updateServiceConfigWithOptions(request: $_model.UpdateServiceConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateServiceConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileConfig)) {
      body["FileConfig"] = request.fileConfig;
    }

    if (!$dara.isNull(request.keywordFilterLibs)) {
      body["KeywordFilterLibs"] = request.keywordFilterLibs;
    }

    if (!$dara.isNull(request.keywordHitLibs)) {
      body["KeywordHitLibs"] = request.keywordHitLibs;
    }

    if (!$dara.isNull(request.manualMachineConfig)) {
      body["ManualMachineConfig"] = request.manualMachineConfig;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!$dara.isNull(request.sceneConfig)) {
      body["SceneConfig"] = request.sceneConfig;
    }

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.serviceConfig)) {
      body["ServiceConfig"] = request.serviceConfig;
    }

    if (!$dara.isNull(request.videoConfig)) {
      body["VideoConfig"] = request.videoConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateServiceConfigResponse>(await this.callApi(params, req, runtime), new $_model.UpdateServiceConfigResponse({}));
  }

  /**
   * 更新服务
   * 
   * @param request - UpdateServiceConfigRequest
   * @returns UpdateServiceConfigResponse
   */
  async updateServiceConfig(request: $_model.UpdateServiceConfigRequest): Promise<$_model.UpdateServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceConfigWithOptions(request, runtime);
  }

}
