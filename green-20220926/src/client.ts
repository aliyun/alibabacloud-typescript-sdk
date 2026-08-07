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
      'cn-shenzhen': "green-cip.cn-shenzhen.aliyuncs.com",
      'cn-shanghai': "green-cip.cn-shanghai.aliyuncs.com",
      'cn-hangzhou': "green-cip.cn-hangzhou.aliyuncs.com",
      'cn-beijing': "green-cip.cn-beijing.aliyuncs.com",
      'ap-southeast-1': "green-cip.ap-southeast-1.aliyuncs.com",
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
   * Adds a proxy answer.
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
   * Adds a proxy answer.
   * 
   * @param request - AddAnswerSampleRequest
   * @returns AddAnswerSampleResponse
   */
  async addAnswerSample(request: $_model.AddAnswerSampleRequest): Promise<$_model.AddAnswerSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAnswerSampleWithOptions(request, runtime);
  }

  /**
   * Adds an agent configuration to an app.
   * 
   * @param request - AddAppAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddAppAgentResponse
   */
  async addAppAgentWithOptions(request: $_model.AddAppAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddAppAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
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
      action: "AddAppAgent",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AddAppAgentResponse>(await this.callApi(params, req, runtime), new $_model.AddAppAgentResponse({}));
  }

  /**
   * Adds an agent configuration to an app.
   * 
   * @param request - AddAppAgentRequest
   * @returns AddAppAgentResponse
   */
  async addAppAgent(request: $_model.AddAppAgentRequest): Promise<$_model.AddAppAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addAppAgentWithOptions(request, runtime);
  }

  /**
   * Creates an image library.
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
   * Creates an image library.
   * 
   * @param request - AddImageLibRequest
   * @returns AddImageLibResponse
   */
  async addImageLib(request: $_model.AddImageLibRequest): Promise<$_model.AddImageLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addImageLibWithOptions(request, runtime);
  }

  /**
   * Adds images in batches.
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
   * Adds images in batches.
   * 
   * @param request - AddImages2LibRequest
   * @returns AddImages2LibResponse
   */
  async addImages2Lib(request: $_model.AddImages2LibRequest): Promise<$_model.AddImages2LibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addImages2LibWithOptions(request, runtime);
  }

  /**
   * Creates a keyword library.
   * 
   * @param request - AddKeywordLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddKeywordLibResponse
   */
  async addKeywordLibWithOptions(request: $_model.AddKeywordLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddKeywordLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.properties)) {
      query["Properties"] = request.properties;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tenantCode)) {
      query["TenantCode"] = request.tenantCode;
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
   * Creates a keyword library.
   * 
   * @param request - AddKeywordLibRequest
   * @returns AddKeywordLibResponse
   */
  async addKeywordLib(request: $_model.AddKeywordLibRequest): Promise<$_model.AddKeywordLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addKeywordLibWithOptions(request, runtime);
  }

  /**
   * Adds keywords.
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

    if (!$dara.isNull(request.tenantCode)) {
      query["TenantCode"] = request.tenantCode;
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
   * Adds keywords.
   * 
   * @param request - AddKeywordsRequest
   * @returns AddKeywordsResponse
   */
  async addKeywords(request: $_model.AddKeywordsRequest): Promise<$_model.AddKeywordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addKeywordsWithOptions(request, runtime);
  }

  /**
   * Adds keywords.
   * 
   * @param request - AddKeywordsToLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddKeywordsToLibResponse
   */
  async addKeywordsToLibWithOptions(request: $_model.AddKeywordsToLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AddKeywordsToLibResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.properties)) {
      query["Properties"] = request.properties;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.tenantCode)) {
      query["TenantCode"] = request.tenantCode;
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
   * Adds keywords.
   * 
   * @param request - AddKeywordsToLibRequest
   * @returns AddKeywordsToLibResponse
   */
  async addKeywordsToLib(request: $_model.AddKeywordsToLibRequest): Promise<$_model.AddKeywordsToLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.addKeywordsToLibWithOptions(request, runtime);
  }

  /**
   * Cancels an OSS scan task.
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
   * Cancels an OSS scan task.
   * 
   * @param request - CancelStockOssCheckTaskRequest
   * @returns CancelStockOssCheckTaskResponse
   */
  async cancelStockOssCheckTask(request: $_model.CancelStockOssCheckTaskRequest): Promise<$_model.CancelStockOssCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.cancelStockOssCheckTaskWithOptions(request, runtime);
  }

  /**
   * Confirms the activation of AI application protection.
   * 
   * @param request - ConfirmAiAppScanRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmAiAppScanResponse
   */
  async confirmAiAppScanWithOptions(request: $_model.ConfirmAiAppScanRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmAiAppScanResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodityCode)) {
      query["CommodityCode"] = request.commodityCode;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfirmAiAppScan",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfirmAiAppScanResponse>(await this.callApi(params, req, runtime), new $_model.ConfirmAiAppScanResponse({}));
  }

  /**
   * Confirms the activation of AI application protection.
   * 
   * @param request - ConfirmAiAppScanRequest
   * @returns ConfirmAiAppScanResponse
   */
  async confirmAiAppScan(request: $_model.ConfirmAiAppScanRequest): Promise<$_model.ConfirmAiAppScanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.confirmAiAppScanWithOptions(request, runtime);
  }

  /**
   * Copies an App configuration.
   * 
   * @param request - CopyAppConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CopyAppConfigResponse
   */
  async copyAppConfigWithOptions(request: $_model.CopyAppConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CopyAppConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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
      action: "CopyAppConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CopyAppConfigResponse>(await this.callApi(params, req, runtime), new $_model.CopyAppConfigResponse({}));
  }

  /**
   * Copies an App configuration.
   * 
   * @param request - CopyAppConfigRequest
   * @returns CopyAppConfigResponse
   */
  async copyAppConfig(request: $_model.CopyAppConfigRequest): Promise<$_model.CopyAppConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyAppConfigWithOptions(request, runtime);
  }

  /**
   * Copies a service.
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
   * Copies a service.
   * 
   * @param request - CopyServiceConfigRequest
   * @returns CopyServiceConfigResponse
   */
  async copyServiceConfig(request: $_model.CopyServiceConfigRequest): Promise<$_model.CopyServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.copyServiceConfigWithOptions(request, runtime);
  }

  /**
   * Creates an OSS scan task.
   * 
   * @param request - CreatStockOssCheckTaskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatStockOssCheckTaskResponse
   */
  async creatStockOssCheckTaskWithOptions(request: $_model.CreatStockOssCheckTaskRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreatStockOssCheckTaskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucketPrefixFilterConfig)) {
      query["BucketPrefixFilterConfig"] = request.bucketPrefixFilterConfig;
    }

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

    if (!$dara.isNull(request.freezeRestorePath)) {
      query["FreezeRestorePath"] = request.freezeRestorePath;
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

    if (!$dara.isNull(request.referer)) {
      query["Referer"] = request.referer;
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
   * Creates an OSS scan task.
   * 
   * @param request - CreatStockOssCheckTaskRequest
   * @returns CreatStockOssCheckTaskResponse
   */
  async creatStockOssCheckTask(request: $_model.CreatStockOssCheckTaskRequest): Promise<$_model.CreatStockOssCheckTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.creatStockOssCheckTaskWithOptions(request, runtime);
  }

  /**
   * Creates a proxy answer library.
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
   * Creates a proxy answer library.
   * 
   * @param request - CreateAnswerLibRequest
   * @returns CreateAnswerLibResponse
   */
  async createAnswerLib(request: $_model.CreateAnswerLibRequest): Promise<$_model.CreateAnswerLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAnswerLibWithOptions(request, runtime);
  }

  /**
   * Creates an app configuration.
   * 
   * @param request - CreateAppConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppConfigResponse
   */
  async createAppConfigWithOptions(request: $_model.CreateAppConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAppConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sysAppId)) {
      query["SysAppId"] = request.sysAppId;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAppConfigResponse>(await this.callApi(params, req, runtime), new $_model.CreateAppConfigResponse({}));
  }

  /**
   * Creates an app configuration.
   * 
   * @param request - CreateAppConfigRequest
   * @returns CreateAppConfigResponse
   */
  async createAppConfig(request: $_model.CreateAppConfigRequest): Promise<$_model.CreateAppConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAppConfigWithOptions(request, runtime);
  }

  /**
   * Creates a message notification.
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
   * Creates a message notification.
   * 
   * @param request - CreateCallbackRequest
   * @returns CreateCallbackResponse
   */
  async createCallback(request: $_model.CreateCallbackRequest): Promise<$_model.CreateCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createCallbackWithOptions(request, runtime);
  }

  /**
   * Creates an image library.
   * 
   * @remarks
   * Before using this operation, complete the following steps:
   * 1. [Activate Content Moderation Enhanced Edition](https://common-buy.aliyun.com/?commodityCode=lvwang_cip_public_cn).
   * 2. Understand the [billing methods and pricing](https://help.aliyun.com/document_detail/467826.html?#section-h06-qz6-1pt) of Image Moderation Enhanced Edition.
   * 3. For more information about API operations and parameters, see [API reference](https://help.aliyun.com/document_detail/467829.html).
   * 
   * @param request - CreateImageLibRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageLibResponse
   */
  async createImageLibWithOptions(request: $_model.CreateImageLibRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageLibResponse> {
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
      action: "CreateImageLib",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageLibResponse>(await this.callApi(params, req, runtime), new $_model.CreateImageLibResponse({}));
  }

  /**
   * Creates an image library.
   * 
   * @remarks
   * Before using this operation, complete the following steps:
   * 1. [Activate Content Moderation Enhanced Edition](https://common-buy.aliyun.com/?commodityCode=lvwang_cip_public_cn).
   * 2. Understand the [billing methods and pricing](https://help.aliyun.com/document_detail/467826.html?#section-h06-qz6-1pt) of Image Moderation Enhanced Edition.
   * 3. For more information about API operations and parameters, see [API reference](https://help.aliyun.com/document_detail/467829.html).
   * 
   * @param request - CreateImageLibRequest
   * @returns CreateImageLibResponse
   */
  async createImageLib(request: $_model.CreateImageLibRequest): Promise<$_model.CreateImageLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createImageLibWithOptions(request, runtime);
  }

  /**
   * Creates an online detection task.
   * 
   * @param request - CreateOnlineTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOnlineTestResponse
   */
  async createOnlineTestWithOptions(request: $_model.CreateOnlineTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOnlineTestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dataId)) {
      query["DataId"] = request.dataId;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.url)) {
      query["Url"] = request.url;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOnlineTest",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOnlineTestResponse>(await this.callApi(params, req, runtime), new $_model.CreateOnlineTestResponse({}));
  }

  /**
   * Creates an online detection task.
   * 
   * @param request - CreateOnlineTestRequest
   * @returns CreateOnlineTestResponse
   */
  async createOnlineTest(request: $_model.CreateOnlineTestRequest): Promise<$_model.CreateOnlineTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOnlineTestWithOptions(request, runtime);
  }

  /**
   * Performs a pre-check before creating an OSS scan task.
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
    if (!$dara.isNull(request.bucketPrefixFilterConfig)) {
      body["BucketPrefixFilterConfig"] = request.bucketPrefixFilterConfig;
    }

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
   * Performs a pre-check before creating an OSS scan task.
   * 
   * @param request - CreatePreCheckRequest
   * @returns CreatePreCheckResponse
   */
  async createPreCheck(request: $_model.CreatePreCheckRequest): Promise<$_model.CreatePreCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createPreCheckWithOptions(request, runtime);
  }

  /**
   * Deletes a proxy answer library.
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
   * Deletes a proxy answer library.
   * 
   * @param request - DeleteAnswerLibRequest
   * @returns DeleteAnswerLibResponse
   */
  async deleteAnswerLib(request: $_model.DeleteAnswerLibRequest): Promise<$_model.DeleteAnswerLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAnswerLibWithOptions(request, runtime);
  }

  /**
   * Deletes proxy answers.
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
   * Deletes proxy answers.
   * 
   * @param request - DeleteAnswerSampleRequest
   * @returns DeleteAnswerSampleResponse
   */
  async deleteAnswerSample(request: $_model.DeleteAnswerSampleRequest): Promise<$_model.DeleteAnswerSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAnswerSampleWithOptions(request, runtime);
  }

  /**
   * Deletes an agent configuration.
   * 
   * @param request - DeleteAppAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAppAgentResponse
   */
  async deleteAppAgentWithOptions(request: $_model.DeleteAppAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteAppAgentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
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
      action: "DeleteAppAgent",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteAppAgentResponse>(await this.callApi(params, req, runtime), new $_model.DeleteAppAgentResponse({}));
  }

  /**
   * Deletes an agent configuration.
   * 
   * @param request - DeleteAppAgentRequest
   * @returns DeleteAppAgentResponse
   */
  async deleteAppAgent(request: $_model.DeleteAppAgentRequest): Promise<$_model.DeleteAppAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteAppAgentWithOptions(request, runtime);
  }

  /**
   * Deletes a message notification.
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
   * Deletes a message notification.
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
   * Deletes images in batches.
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
   * Deletes images in batches.
   * 
   * @param request - DeleteImagesFromLibRequest
   * @returns DeleteImagesFromLibResponse
   */
  async deleteImagesFromLib(request: $_model.DeleteImagesFromLibRequest): Promise<$_model.DeleteImagesFromLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteImagesFromLibWithOptions(request, runtime);
  }

  /**
   * Deletes keywords.
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

    if (!$dara.isNull(request.tenantCode)) {
      query["TenantCode"] = request.tenantCode;
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
   * Deletes keywords.
   * 
   * @param request - DeleteKeywordRequest
   * @returns DeleteKeywordResponse
   */
  async deleteKeyword(request: $_model.DeleteKeywordRequest): Promise<$_model.DeleteKeywordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKeywordWithOptions(request, runtime);
  }

  /**
   * Deletes a keyword library.
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

    if (!$dara.isNull(request.tenantCode)) {
      query["TenantCode"] = request.tenantCode;
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
   * Deletes a keyword library.
   * 
   * @param request - DeleteKeywordLibRequest
   * @returns DeleteKeywordLibResponse
   */
  async deleteKeywordLib(request: $_model.DeleteKeywordLibRequest): Promise<$_model.DeleteKeywordLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteKeywordLibWithOptions(request, runtime);
  }

  /**
   * Deletes an online detection task.
   * 
   * @param request - DeleteOnlineTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOnlineTestResponse
   */
  async deleteOnlineTestWithOptions(request: $_model.DeleteOnlineTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteOnlineTestResponse> {
    request.validate();
    let query = { };
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
      action: "DeleteOnlineTest",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteOnlineTestResponse>(await this.callApi(params, req, runtime), new $_model.DeleteOnlineTestResponse({}));
  }

  /**
   * Deletes an online detection task.
   * 
   * @param request - DeleteOnlineTestRequest
   * @returns DeleteOnlineTestResponse
   */
  async deleteOnlineTest(request: $_model.DeleteOnlineTestRequest): Promise<$_model.DeleteOnlineTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteOnlineTestWithOptions(request, runtime);
  }

  /**
   * Queries the detection results of online moderation.
   * 
   * @param request - DescribeOnlineTestResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOnlineTestResultResponse
   */
  async describeOnlineTestResultWithOptions(request: $_model.DescribeOnlineTestResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOnlineTestResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOnlineTestResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOnlineTestResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOnlineTestResultResponse({}));
  }

  /**
   * Queries the detection results of online moderation.
   * 
   * @param request - DescribeOnlineTestResultRequest
   * @returns DescribeOnlineTestResultResponse
   */
  async describeOnlineTestResult(request: $_model.DescribeOnlineTestResultRequest): Promise<$_model.DescribeOnlineTestResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOnlineTestResultWithOptions(request, runtime);
  }

  /**
   * Retrieves OSS moderation results v2.
   * 
   * @remarks
   * API operation is used together with the Image Moderation Enhanced API. After you call the Image Moderation Enhanced API, you can call API operation to obtain more moderation information. API operation is free of charge.
   * 
   * @param request - DescribeOssV2ResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssV2ResultResponse
   */
  async describeOssV2ResultWithOptions(request: $_model.DescribeOssV2ResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeOssV2ResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.riskLevel)) {
      query["RiskLevel"] = request.riskLevel;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOssV2Result",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeOssV2ResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeOssV2ResultResponse({}));
  }

  /**
   * Retrieves OSS moderation results v2.
   * 
   * @remarks
   * API operation is used together with the Image Moderation Enhanced API. After you call the Image Moderation Enhanced API, you can call API operation to obtain more moderation information. API operation is free of charge.
   * 
   * @param request - DescribeOssV2ResultRequest
   * @returns DescribeOssV2ResultResponse
   */
  async describeOssV2Result(request: $_model.DescribeOssV2ResultRequest): Promise<$_model.DescribeOssV2ResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssV2ResultWithOptions(request, runtime);
  }

  /**
   * Exports proxy answer responses.
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
   * Exports proxy answer responses.
   * 
   * @param request - ExportAnswerSampleRequest
   * @returns ExportAnswerSampleResponse
   */
  async exportAnswerSample(request: $_model.ExportAnswerSampleRequest): Promise<$_model.ExportAnswerSampleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportAnswerSampleWithOptions(request, runtime);
  }

  /**
   * Exports call usage statistics.
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
   * Exports call usage statistics.
   * 
   * @param request - ExportCipStatsRequest
   * @returns ExportCipStatsResponse
   */
  async exportCipStats(request: $_model.ExportCipStatsRequest): Promise<$_model.ExportCipStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportCipStatsWithOptions(request, runtime);
  }

  /**
   * Exports keywords.
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

    if (!$dara.isNull(request.tenantCode)) {
      query["TenantCode"] = request.tenantCode;
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
   * Exports keywords.
   * 
   * @param request - ExportKeywordRequest
   * @returns ExportKeywordResponse
   */
  async exportKeyword(request: $_model.ExportKeywordRequest): Promise<$_model.ExportKeywordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportKeywordWithOptions(request, runtime);
  }

  /**
   * Exports OSS usage statistics.
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
   * Exports OSS usage statistics.
   * 
   * @param request - ExportOssCheckStatRequest
   * @returns ExportOssCheckStatResponse
   */
  async exportOssCheckStat(request: $_model.ExportOssCheckStatRequest): Promise<$_model.ExportOssCheckStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportOssCheckStatWithOptions(request, runtime);
  }

  /**
   * Exports OSS scan results.
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

    if (!$dara.isNull(request.source)) {
      body["Source"] = request.source;
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
   * Exports OSS scan results.
   * 
   * @param request - ExportResultRequest
   * @returns ExportResultResponse
   */
  async exportResult(request: $_model.ExportResultRequest): Promise<$_model.ExportResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportResultWithOptions(request, runtime);
  }

  /**
   * Exports call results as an Excel file.
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
   * Exports call results as an Excel file.
   * 
   * @param request - ExportScanResultRequest
   * @returns ExportScanResultResponse
   */
  async exportScanResult(request: $_model.ExportScanResultRequest): Promise<$_model.ExportScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportScanResultWithOptions(request, runtime);
  }

  /**
   * Exports call results as an Excel file.
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
   * Exports call results as an Excel file.
   * 
   * @param request - ExportTextScanResultRequest
   * @returns ExportTextScanResultResponse
   */
  async exportTextScanResult(request: $_model.ExportTextScanResultRequest): Promise<$_model.ExportTextScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.exportTextScanResultWithOptions(request, runtime);
  }

  /**
   * Retrieves the import progress of proxy answer samples.
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
   * Retrieves the import progress of proxy answer samples.
   * 
   * @param request - GetAnswerImportProgressRequest
   * @returns GetAnswerImportProgressResponse
   */
  async getAnswerImportProgress(request: $_model.GetAnswerImportProgressRequest): Promise<$_model.GetAnswerImportProgressResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAnswerImportProgressWithOptions(request, runtime);
  }

  /**
   * Queries the details of an App configuration.
   * 
   * @param request - GetAppConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAppConfigResponse
   */
  async getAppConfigWithOptions(request: $_model.GetAppConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetAppConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
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
      action: "GetAppConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAppConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetAppConfigResponse({}));
  }

  /**
   * Queries the details of an App configuration.
   * 
   * @param request - GetAppConfigRequest
   * @returns GetAppConfigResponse
   */
  async getAppConfig(request: $_model.GetAppConfigRequest): Promise<$_model.GetAppConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getAppConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of user buckets for evidence dumping.
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
   * Retrieves the list of user buckets for evidence dumping.
   * 
   * @param request - GetBackupBucketsListRequest
   * @returns GetBackupBucketsListResponse
   */
  async getBackupBucketsList(request: $_model.GetBackupBucketsListRequest): Promise<$_model.GetBackupBucketsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBackupBucketsListWithOptions(request, runtime);
  }

  /**
   * Get Evidence Backup Configuration
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
   * Get Evidence Backup Configuration
   * 
   * @param request - GetBackupConfigRequest
   * @returns GetBackupConfigResponse
   */
  async getBackupConfig(request: $_model.GetBackupConfigRequest): Promise<$_model.GetBackupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBackupConfigWithOptions(request, runtime);
  }

  /**
   * Verifies user authorization.
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
   * Verifies user authorization.
   * 
   * @param request - GetBackupStatusRequest
   * @returns GetBackupStatusResponse
   */
  async getBackupStatus(request: $_model.GetBackupStatusRequest): Promise<$_model.GetBackupStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBackupStatusWithOptions(request, runtime);
  }

  /**
   * Lists buckets.
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
   * Lists buckets.
   * 
   * @param request - GetBucketsListRequest
   * @returns GetBucketsListResponse
   */
  async getBucketsList(request: $_model.GetBucketsListRequest): Promise<$_model.GetBucketsListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getBucketsListWithOptions(request, runtime);
  }

  /**
   * Queries the call volume.
   * 
   * @param request - GetCipStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCipStatsResponse
   */
  async getCipStatsWithOptions(request: $_model.GetCipStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetCipStatsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

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
   * Queries the call volume.
   * 
   * @param request - GetCipStatsRequest
   * @returns GetCipStatsResponse
   */
  async getCipStats(request: $_model.GetCipStatsRequest): Promise<$_model.GetCipStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getCipStatsWithOptions(request, runtime);
  }

  /**
   * Retrieves the estimated execution time of a scheduled task.
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
   * Retrieves the estimated execution time of a scheduled task.
   * 
   * @param request - GetExecuteTimeRequest
   * @returns GetExecuteTimeResponse
   */
  async getExecuteTime(request: $_model.GetExecuteTimeRequest): Promise<$_model.GetExecuteTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getExecuteTimeWithOptions(request, runtime);
  }

  /**
   * Retrieves feature configurations.
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
    if (!$dara.isNull(request.query)) {
      body["Query"] = request.query;
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
   * Retrieves feature configurations.
   * 
   * @param request - GetFeatureConfigRequest
   * @returns GetFeatureConfigResponse
   */
  async getFeatureConfig(request: $_model.GetFeatureConfigRequest): Promise<$_model.GetFeatureConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFeatureConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves log statistics for AI security guardrails.
   * 
   * @param request - GetGuardLogStatsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetGuardLogStatsResponse
   */
  async getGuardLogStatsWithOptions(request: $_model.GetGuardLogStatsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetGuardLogStatsResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetGuardLogStats",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetGuardLogStatsResponse>(await this.callApi(params, req, runtime), new $_model.GetGuardLogStatsResponse({}));
  }

  /**
   * Retrieves log statistics for AI security guardrails.
   * 
   * @param request - GetGuardLogStatsRequest
   * @returns GetGuardLogStatsResponse
   */
  async getGuardLogStats(request: $_model.GetGuardLogStatsRequest): Promise<$_model.GetGuardLogStatsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getGuardLogStatsWithOptions(request, runtime);
  }

  /**
   * Retrieves image rule tag information.
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
   * Retrieves image rule tag information.
   * 
   * @param request - GetImageSceneLabelConfRequest
   * @returns GetImageSceneLabelConfResponse
   */
  async getImageSceneLabelConf(request: $_model.GetImageSceneLabelConfRequest): Promise<$_model.GetImageSceneLabelConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageSceneLabelConfWithOptions(request, runtime);
  }

  /**
   * Retrieves image rule tag information.
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
   * Retrieves image rule tag information.
   * 
   * @param request - GetImageSceneLabelListConfRequest
   * @returns GetImageSceneLabelListConfResponse
   */
  async getImageSceneLabelListConf(request: $_model.GetImageSceneLabelListConfRequest): Promise<$_model.GetImageSceneLabelListConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getImageSceneLabelListConfWithOptions(request, runtime);
  }

  /**
   * Queries the scheduled scan detection cycle for OSS.
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
   * Queries the scheduled scan detection cycle for OSS.
   * 
   * @param request - GetJobNameListRequest
   * @returns GetJobNameListResponse
   */
  async getJobNameList(request: $_model.GetJobNameListRequest): Promise<$_model.GetJobNameListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getJobNameListWithOptions(request, runtime);
  }

  /**
   * Queries the result of a keyword import task.
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
   * Queries the result of a keyword import task.
   * 
   * @param request - GetKeywordImportResultRequest
   * @returns GetKeywordImportResultResponse
   */
  async getKeywordImportResult(request: $_model.GetKeywordImportResultRequest): Promise<$_model.GetKeywordImportResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKeywordImportResultWithOptions(request, runtime);
  }

  /**
   * Retrieves keyword library information.
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

    if (!$dara.isNull(request.tenantCode)) {
      query["TenantCode"] = request.tenantCode;
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
   * Retrieves keyword library information.
   * 
   * @param request - GetKeywordLibRequest
   * @returns GetKeywordLibResponse
   */
  async getKeywordLib(request: $_model.GetKeywordLibRequest): Promise<$_model.GetKeywordLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getKeywordLibWithOptions(request, runtime);
  }

  /**
   * Queries the results of OSS scan and freeze operations.
   * 
   * @param tmpReq - GetOssCheckFreezeResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssCheckFreezeResultResponse
   */
  async getOssCheckFreezeResultWithOptions(tmpReq: $_model.GetOssCheckFreezeResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssCheckFreezeResultResponse> {
    tmpReq.validate();
    let request = new $_model.GetOssCheckFreezeResultShrinkRequest({ });
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
      action: "GetOssCheckFreezeResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssCheckFreezeResultResponse>(await this.callApi(params, req, runtime), new $_model.GetOssCheckFreezeResultResponse({}));
  }

  /**
   * Queries the results of OSS scan and freeze operations.
   * 
   * @param request - GetOssCheckFreezeResultRequest
   * @returns GetOssCheckFreezeResultResponse
   */
  async getOssCheckFreezeResult(request: $_model.GetOssCheckFreezeResultRequest): Promise<$_model.GetOssCheckFreezeResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssCheckFreezeResultWithOptions(request, runtime);
  }

  /**
   * Retrieves the detailed information of OSS check results.
   * 
   * @param request - GetOssCheckResultDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssCheckResultDetailResponse
   */
  async getOssCheckResultDetailWithOptions(request: $_model.GetOssCheckResultDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssCheckResultDetailResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bucket)) {
      query["Bucket"] = request.bucket;
    }

    if (!$dara.isNull(request.mediaType)) {
      query["MediaType"] = request.mediaType;
    }

    if (!$dara.isNull(request.object)) {
      query["Object"] = request.object;
    }

    if (!$dara.isNull(request.parentTaskId)) {
      query["ParentTaskId"] = request.parentTaskId;
    }

    if (!$dara.isNull(request.queryRequestId)) {
      query["QueryRequestId"] = request.queryRequestId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssCheckResultDetail",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssCheckResultDetailResponse>(await this.callApi(params, req, runtime), new $_model.GetOssCheckResultDetailResponse({}));
  }

  /**
   * Retrieves the detailed information of OSS check results.
   * 
   * @param request - GetOssCheckResultDetailRequest
   * @returns GetOssCheckResultDetailResponse
   */
  async getOssCheckResultDetail(request: $_model.GetOssCheckResultDetailRequest): Promise<$_model.GetOssCheckResultDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssCheckResultDetailWithOptions(request, runtime);
  }

  /**
   * Queries OSS usage statistics.
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
   * Queries OSS usage statistics.
   * 
   * @param request - GetOssCheckStatRequest
   * @returns GetOssCheckStatResponse
   */
  async getOssCheckStat(request: $_model.GetOssCheckStatRequest): Promise<$_model.GetOssCheckStatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssCheckStatWithOptions(request, runtime);
  }

  /**
   * Retrieves the OSS detection user status.
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
   * Retrieves the OSS detection user status.
   * 
   * @param request - GetOssCheckStatusRequest
   * @returns GetOssCheckStatusResponse
   */
  async getOssCheckStatus(request: $_model.GetOssCheckStatusRequest): Promise<$_model.GetOssCheckStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssCheckStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of an OSS scan task.
   * 
   * @param request - GetOssCheckTaskInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOssCheckTaskInfoResponse
   */
  async getOssCheckTaskInfoWithOptions(request: $_model.GetOssCheckTaskInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetOssCheckTaskInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.parentTaskId)) {
      query["ParentTaskId"] = request.parentTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOssCheckTaskInfo",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOssCheckTaskInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetOssCheckTaskInfoResponse({}));
  }

  /**
   * Queries the details of an OSS scan task.
   * 
   * @param request - GetOssCheckTaskInfoRequest
   * @returns GetOssCheckTaskInfoResponse
   */
  async getOssCheckTaskInfo(request: $_model.GetOssCheckTaskInfoRequest): Promise<$_model.GetOssCheckTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOssCheckTaskInfoWithOptions(request, runtime);
  }

  /**
   * Tests the attribute configuration.
   * 
   * @param request - GetPromptTestResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPromptTestResultResponse
   */
  async getPromptTestResultWithOptions(request: $_model.GetPromptTestResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetPromptTestResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.text)) {
      query["Text"] = request.text;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPromptTestResult",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPromptTestResultResponse>(await this.callApi(params, req, runtime), new $_model.GetPromptTestResultResponse({}));
  }

  /**
   * Tests the attribute configuration.
   * 
   * @param request - GetPromptTestResultRequest
   * @returns GetPromptTestResultResponse
   */
  async getPromptTestResult(request: $_model.GetPromptTestResultRequest): Promise<$_model.GetPromptTestResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getPromptTestResultWithOptions(request, runtime);
  }

  /**
   * Queries the information about files pending detection for a user.
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
   * Queries the information about files pending detection for a user.
   * 
   * @param request - GetScanNumRequest
   * @returns GetScanNumResponse
   */
  async getScanNum(request: $_model.GetScanNumRequest): Promise<$_model.GetScanNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScanNumWithOptions(request, runtime);
  }

  /**
   * Queries the detection results.
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
   * Queries the detection results.
   * 
   * @param request - GetScanResultRequest
   * @returns GetScanResultResponse
   */
  async getScanResult(request: $_model.GetScanResultRequest): Promise<$_model.GetScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getScanResultWithOptions(request, runtime);
  }

  /**
   * Get a Single Service
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
   * Get a Single Service
   * 
   * @param request - GetServiceConfRequest
   * @returns GetServiceConfResponse
   */
  async getServiceConf(request: $_model.GetServiceConfRequest): Promise<$_model.GetServiceConfResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceConfWithOptions(request, runtime);
  }

  /**
   * Retrieves a single service.
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
   * Retrieves a single service.
   * 
   * @param request - GetServiceConfigRequest
   * @returns GetServiceConfigResponse
   */
  async getServiceConfig(request: $_model.GetServiceConfigRequest): Promise<$_model.GetServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceConfigWithOptions(request, runtime);
  }

  /**
   * Retrieves the tag configuration of a single service.
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
   * Retrieves the tag configuration of a single service.
   * 
   * @param request - GetServiceLabelConfigRequest
   * @returns GetServiceLabelConfigResponse
   */
  async getServiceLabelConfig(request: $_model.GetServiceLabelConfigRequest): Promise<$_model.GetServiceLabelConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getServiceLabelConfigWithOptions(request, runtime);
  }

  /**
   * Queries the list of OSS scan tasks.
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
   * Queries the list of OSS scan tasks.
   * 
   * @param request - GetStockOssCheckTasksListRequest
   * @returns GetStockOssCheckTasksListResponse
   */
  async getStockOssCheckTasksList(request: $_model.GetStockOssCheckTasksListRequest): Promise<$_model.GetStockOssCheckTasksListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getStockOssCheckTasksListWithOptions(request, runtime);
  }

  /**
   * Queries the call results.
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
   * Queries the call results.
   * 
   * @param request - GetTextScanResultRequest
   * @returns GetTextScanResultResponse
   */
  async getTextScanResult(request: $_model.GetTextScanResultRequest): Promise<$_model.GetTextScanResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTextScanResultWithOptions(request, runtime);
  }

  /**
   * Retrieves tuning suggestions for switch configurations.
   * 
   * @remarks
   * API operation is used together with the enhanced image moderation API. After you call the enhanced image moderation API, call API operation to retrieve additional detection information. API operation is free of charge.
   * 
   * @param request - GetTuneProposalByIdRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTuneProposalByIdResponse
   */
  async getTuneProposalByIdWithOptions(request: $_model.GetTuneProposalByIdRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetTuneProposalByIdResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTuneProposalById",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTuneProposalByIdResponse>(await this.callApi(params, req, runtime), new $_model.GetTuneProposalByIdResponse({}));
  }

  /**
   * Retrieves tuning suggestions for switch configurations.
   * 
   * @remarks
   * API operation is used together with the enhanced image moderation API. After you call the enhanced image moderation API, call API operation to retrieve additional detection information. API operation is free of charge.
   * 
   * @param request - GetTuneProposalByIdRequest
   * @returns GetTuneProposalByIdResponse
   */
  async getTuneProposalById(request: $_model.GetTuneProposalByIdRequest): Promise<$_model.GetTuneProposalByIdResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getTuneProposalByIdWithOptions(request, runtime);
  }

  /**
   * Retrieves the text content of an uploaded file.
   * 
   * @param request - GetUploadContentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadContentResponse
   */
  async getUploadContentWithOptions(request: $_model.GetUploadContentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadContentResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.uploadUrl)) {
      query["UploadUrl"] = request.uploadUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadContent",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadContentResponse>(await this.callApi(params, req, runtime), new $_model.GetUploadContentResponse({}));
  }

  /**
   * Retrieves the text content of an uploaded file.
   * 
   * @param request - GetUploadContentRequest
   * @returns GetUploadContentResponse
   */
  async getUploadContent(request: $_model.GetUploadContentRequest): Promise<$_model.GetUploadContentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadContentWithOptions(request, runtime);
  }

  /**
   * Retrieves the relevant information for file upload.
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
   * Retrieves the relevant information for file upload.
   * 
   * @param request - GetUploadInfoRequest
   * @returns GetUploadInfoResponse
   */
  async getUploadInfo(request: $_model.GetUploadInfoRequest): Promise<$_model.GetUploadInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves an upload URL.
   * 
   * @param request - GetUploadLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUploadLinkResponse
   */
  async getUploadLinkWithOptions(request: $_model.GetUploadLinkRequest, runtime: $dara.RuntimeOptions): Promise<$_model.GetUploadLinkResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.uploadUrl)) {
      query["UploadUrl"] = request.uploadUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUploadLink",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetUploadLinkResponse>(await this.callApi(params, req, runtime), new $_model.GetUploadLinkResponse({}));
  }

  /**
   * Retrieves an upload URL.
   * 
   * @param request - GetUploadLinkRequest
   * @returns GetUploadLinkResponse
   */
  async getUploadLink(request: $_model.GetUploadLinkRequest): Promise<$_model.GetUploadLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUploadLinkWithOptions(request, runtime);
  }

  /**
   * Retrieves the purchase status of a user.
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
   * Retrieves the purchase status of a user.
   * 
   * @param request - GetUserBuyStatusRequest
   * @returns GetUserBuyStatusResponse
   */
  async getUserBuyStatus(request: $_model.GetUserBuyStatusRequest): Promise<$_model.GetUserBuyStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getUserBuyStatusWithOptions(request, runtime);
  }

  /**
   * Queries the list of proxy answer libraries.
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
   * Queries the list of proxy answer libraries.
   * 
   * @param request - ListAnswerLibRequest
   * @returns ListAnswerLibResponse
   */
  async listAnswerLib(request: $_model.ListAnswerLibRequest): Promise<$_model.ListAnswerLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAnswerLibWithOptions(request, runtime);
  }

  /**
   * Retrieves the historical versions of an app.
   * 
   * @param request - ListAppConfigHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppConfigHistoryResponse
   */
  async listAppConfigHistoryWithOptions(request: $_model.ListAppConfigHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppConfigHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
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
      action: "ListAppConfigHistory",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppConfigHistoryResponse>(await this.callApi(params, req, runtime), new $_model.ListAppConfigHistoryResponse({}));
  }

  /**
   * Retrieves the historical versions of an app.
   * 
   * @param request - ListAppConfigHistoryRequest
   * @returns ListAppConfigHistoryResponse
   */
  async listAppConfigHistory(request: $_model.ListAppConfigHistoryRequest): Promise<$_model.ListAppConfigHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppConfigHistoryWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of app configurations.
   * 
   * @param request - ListAppConfigsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAppConfigsResponse
   */
  async listAppConfigsWithOptions(request: $_model.ListAppConfigsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ListAppConfigsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.classify)) {
      query["Classify"] = request.classify;
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
      action: "ListAppConfigs",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListAppConfigsResponse>(await this.callApi(params, req, runtime), new $_model.ListAppConfigsResponse({}));
  }

  /**
   * Retrieves the list of app configurations.
   * 
   * @param request - ListAppConfigsRequest
   * @returns ListAppConfigsResponse
   */
  async listAppConfigs(request: $_model.ListAppConfigsRequest): Promise<$_model.ListAppConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listAppConfigsWithOptions(request, runtime);
  }

  /**
   * Queries the list of message notifications.
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
   * Queries the list of message notifications.
   * 
   * @param request - ListCallbackRequest
   * @returns ListCallbackResponse
   */
  async listCallback(request: $_model.ListCallbackRequest): Promise<$_model.ListCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listCallbackWithOptions(request, runtime);
  }

  /**
   * Queries the list of image libraries.
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

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
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
   * Queries the list of image libraries.
   * 
   * @param request - ListImageLibRequest
   * @returns ListImageLibResponse
   */
  async listImageLib(request: $_model.ListImageLibRequest): Promise<$_model.ListImageLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImageLibWithOptions(request, runtime);
  }

  /**
   * Queries a paginated list of images.
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
   * Queries a paginated list of images.
   * 
   * @param request - ListImagesFromLibRequest
   * @returns ListImagesFromLibResponse
   */
  async listImagesFromLib(request: $_model.ListImagesFromLibRequest): Promise<$_model.ListImagesFromLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listImagesFromLibWithOptions(request, runtime);
  }

  /**
   * Queries the list of keyword libraries.
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

    if (!$dara.isNull(request.tenantCode)) {
      query["TenantCode"] = request.tenantCode;
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
   * Queries the list of keyword libraries.
   * 
   * @param request - ListKeywordLibsRequest
   * @returns ListKeywordLibsResponse
   */
  async listKeywordLibs(request: $_model.ListKeywordLibsRequest): Promise<$_model.ListKeywordLibsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKeywordLibsWithOptions(request, runtime);
  }

  /**
   * Queries a list of keywords.
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

    if (!$dara.isNull(request.tenantCode)) {
      query["TenantCode"] = request.tenantCode;
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
   * Queries a list of keywords.
   * 
   * @param request - ListKeywordsRequest
   * @returns ListKeywordsResponse
   */
  async listKeywords(request: $_model.ListKeywordsRequest): Promise<$_model.ListKeywordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listKeywordsWithOptions(request, runtime);
  }

  /**
   * Queries OSS scan results.
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
   * Queries OSS scan results.
   * 
   * @param request - ListOssCheckResultRequest
   * @returns ListOssCheckResultResponse
   */
  async listOssCheckResult(request: $_model.ListOssCheckResultRequest): Promise<$_model.ListOssCheckResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listOssCheckResultWithOptions(request, runtime);
  }

  /**
   * Retrieves the service list.
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

    if (!$dara.isNull(request.protectionType)) {
      query["ProtectionType"] = request.protectionType;
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
   * Retrieves the service list.
   * 
   * @param request - ListServiceConfigsRequest
   * @returns ListServiceConfigsResponse
   */
  async listServiceConfigs(request: $_model.ListServiceConfigsRequest): Promise<$_model.ListServiceConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listServiceConfigsWithOptions(request, runtime);
  }

  /**
   * Calls a large language model in streaming mode using the SSE interface.
   * 
   * @param request - LlmStreamChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LlmStreamChatResponse
   */
  async *llmStreamChatWithSSE(request: $_model.LlmStreamChatRequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.LlmStreamChatResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.messages)) {
      body["Messages"] = request.messages;
    }

    if (!$dara.isNull(request.temperature)) {
      body["Temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.topP)) {
      body["TopP"] = request.topP;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
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
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.LlmStreamChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.LlmStreamChatResponse({}));
      }

    }
  }

  /**
   * Calls a large language model in streaming mode using the SSE interface.
   * 
   * @param request - LlmStreamChatRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LlmStreamChatResponse
   */
  async llmStreamChatWithOptions(request: $_model.LlmStreamChatRequest, runtime: $dara.RuntimeOptions): Promise<$_model.LlmStreamChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.messages)) {
      body["Messages"] = request.messages;
    }

    if (!$dara.isNull(request.temperature)) {
      body["Temperature"] = request.temperature;
    }

    if (!$dara.isNull(request.topP)) {
      body["TopP"] = request.topP;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
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
   * Calls a large language model in streaming mode using the SSE interface.
   * 
   * @param request - LlmStreamChatRequest
   * @returns LlmStreamChatResponse
   */
  async llmStreamChat(request: $_model.LlmStreamChatRequest): Promise<$_model.LlmStreamChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.llmStreamChatWithOptions(request, runtime);
  }

  /**
   * oss结果反馈
   * 
   * @param request - MarkOssV2ResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MarkOssV2ResultResponse
   */
  async markOssV2ResultWithOptions(request: $_model.MarkOssV2ResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MarkOssV2ResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.freezeType)) {
      query["FreezeType"] = request.freezeType;
    }

    if (!$dara.isNull(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!$dara.isNull(request.requestIds)) {
      query["RequestIds"] = request.requestIds;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MarkOssV2Result",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MarkOssV2ResultResponse>(await this.callApi(params, req, runtime), new $_model.MarkOssV2ResultResponse({}));
  }

  /**
   * oss结果反馈
   * 
   * @param request - MarkOssV2ResultRequest
   * @returns MarkOssV2ResultResponse
   */
  async markOssV2Result(request: $_model.MarkOssV2ResultRequest): Promise<$_model.MarkOssV2ResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.markOssV2ResultWithOptions(request, runtime);
  }

  /**
   * Updates a proxy response library.
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
   * Updates a proxy response library.
   * 
   * @param request - ModifyAnswerLibRequest
   * @returns ModifyAnswerLibResponse
   */
  async modifyAnswerLib(request: $_model.ModifyAnswerLibRequest): Promise<$_model.ModifyAnswerLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAnswerLibWithOptions(request, runtime);
  }

  /**
   * Modifies the agent configuration.
   * 
   * @param request - ModifyAppAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppAgentResponse
   */
  async modifyAppAgentWithOptions(request: $_model.ModifyAppAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentName)) {
      body["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.enable)) {
      body["Enable"] = request.enable;
    }

    if (!$dara.isNull(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ModifyAppAgent",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppAgentResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppAgentResponse({}));
  }

  /**
   * Modifies the agent configuration.
   * 
   * @param request - ModifyAppAgentRequest
   * @returns ModifyAppAgentResponse
   */
  async modifyAppAgent(request: $_model.ModifyAppAgentRequest): Promise<$_model.ModifyAppAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppAgentWithOptions(request, runtime);
  }

  /**
   * Modifies app information.
   * 
   * @param request - ModifyAppInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyAppInfoResponse
   */
  async modifyAppInfoWithOptions(request: $_model.ModifyAppInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ModifyAppInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
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
      action: "ModifyAppInfo",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ModifyAppInfoResponse>(await this.callApi(params, req, runtime), new $_model.ModifyAppInfoResponse({}));
  }

  /**
   * Modifies app information.
   * 
   * @param request - ModifyAppInfoRequest
   * @returns ModifyAppInfoResponse
   */
  async modifyAppInfo(request: $_model.ModifyAppInfoRequest): Promise<$_model.ModifyAppInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyAppInfoWithOptions(request, runtime);
  }

  /**
   * Modifies a message notification.
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
   * Modifies a message notification.
   * 
   * @param request - ModifyCallbackRequest
   * @returns ModifyCallbackResponse
   */
  async modifyCallback(request: $_model.ModifyCallbackRequest): Promise<$_model.ModifyCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyCallbackWithOptions(request, runtime);
  }

  /**
   * Saves an attribute configuration.
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
   * Saves an attribute configuration.
   * 
   * @param request - ModifyFeatureConfigRequest
   * @returns ModifyFeatureConfigResponse
   */
  async modifyFeatureConfig(request: $_model.ModifyFeatureConfigRequest): Promise<$_model.ModifyFeatureConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyFeatureConfigWithOptions(request, runtime);
  }

  /**
   * Edits a service.
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
   * Edits a service.
   * 
   * @param request - ModifyServiceInfoRequest
   * @returns ModifyServiceInfoResponse
   */
  async modifyServiceInfo(request: $_model.ModifyServiceInfoRequest): Promise<$_model.ModifyServiceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyServiceInfoWithOptions(request, runtime);
  }

  /**
   * Retrieves the list of OSS detection results.
   * 
   * @param tmpReq - OssCheckResultListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OssCheckResultListResponse
   */
  async ossCheckResultListWithOptions(tmpReq: $_model.OssCheckResultListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OssCheckResultListResponse> {
    tmpReq.validate();
    let request = new $_model.OssCheckResultListShrinkRequest({ });
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
      action: "OssCheckResultList",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OssCheckResultListResponse>(await this.callApi(params, req, runtime), new $_model.OssCheckResultListResponse({}));
  }

  /**
   * Retrieves the list of OSS detection results.
   * 
   * @param request - OssCheckResultListRequest
   * @returns OssCheckResultListResponse
   */
  async ossCheckResultList(request: $_model.OssCheckResultListRequest): Promise<$_model.OssCheckResultListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.ossCheckResultListWithOptions(request, runtime);
  }

  /**
   * Saves and publishes app configurations.
   * 
   * @param request - PublishAppConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishAppConfigResponse
   */
  async publishAppConfigWithOptions(request: $_model.PublishAppConfigRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PublishAppConfigResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.agentId)) {
      query["AgentId"] = request.agentId;
    }

    if (!$dara.isNull(request.agentName)) {
      query["AgentName"] = request.agentName;
    }

    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.config)) {
      query["Config"] = request.config;
    }

    if (!$dara.isNull(request.enable)) {
      query["Enable"] = request.enable;
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
      action: "PublishAppConfig",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PublishAppConfigResponse>(await this.callApi(params, req, runtime), new $_model.PublishAppConfigResponse({}));
  }

  /**
   * Saves and publishes app configurations.
   * 
   * @param request - PublishAppConfigRequest
   * @returns PublishAppConfigResponse
   */
  async publishAppConfig(request: $_model.PublishAppConfigRequest): Promise<$_model.PublishAppConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.publishAppConfigWithOptions(request, runtime);
  }

  /**
   * Queries proxy answer samples by paging.
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
   * Queries proxy answer samples by paging.
   * 
   * @param request - QueryAnswerSampleByPageRequest
   * @returns QueryAnswerSampleByPageResponse
   */
  async queryAnswerSampleByPage(request: $_model.QueryAnswerSampleByPageRequest): Promise<$_model.QueryAnswerSampleByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAnswerSampleByPageWithOptions(request, runtime);
  }

  /**
   * Queries a single callback configuration.
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
   * Queries a single callback configuration.
   * 
   * @param request - QueryCallbackRequest
   * @returns QueryCallbackResponse
   */
  async queryCallback(request: $_model.QueryCallbackRequest): Promise<$_model.QueryCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCallbackWithOptions(request, runtime);
  }

  /**
   * Message notification.
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
   * Message notification.
   * 
   * @param request - QueryCallbackByPageRequest
   * @returns QueryCallbackByPageResponse
   */
  async queryCallbackByPage(request: $_model.QueryCallbackByPageRequest): Promise<$_model.QueryCallbackByPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryCallbackByPageWithOptions(request, runtime);
  }

  /**
   * Reverts an app to a historical version.
   * 
   * @param request - RecoverAppConfigHistoryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecoverAppConfigHistoryResponse
   */
  async recoverAppConfigHistoryWithOptions(request: $_model.RecoverAppConfigHistoryRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecoverAppConfigHistoryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appId)) {
      query["AppId"] = request.appId;
    }

    if (!$dara.isNull(request.appVersion)) {
      query["AppVersion"] = request.appVersion;
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
      action: "RecoverAppConfigHistory",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecoverAppConfigHistoryResponse>(await this.callApi(params, req, runtime), new $_model.RecoverAppConfigHistoryResponse({}));
  }

  /**
   * Reverts an app to a historical version.
   * 
   * @param request - RecoverAppConfigHistoryRequest
   * @returns RecoverAppConfigHistoryResponse
   */
  async recoverAppConfigHistory(request: $_model.RecoverAppConfigHistoryRequest): Promise<$_model.RecoverAppConfigHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recoverAppConfigHistoryWithOptions(request, runtime);
  }

  /**
   * Aborts an online detection task.
   * 
   * @param request - StopOnlineTestRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopOnlineTestResponse
   */
  async stopOnlineTestWithOptions(request: $_model.StopOnlineTestRequest, runtime: $dara.RuntimeOptions): Promise<$_model.StopOnlineTestResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopOnlineTest",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StopOnlineTestResponse>(await this.callApi(params, req, runtime), new $_model.StopOnlineTestResponse({}));
  }

  /**
   * Aborts an online detection task.
   * 
   * @param request - StopOnlineTestRequest
   * @returns StopOnlineTestResponse
   */
  async stopOnlineTest(request: $_model.StopOnlineTestRequest): Promise<$_model.StopOnlineTestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.stopOnlineTestWithOptions(request, runtime);
  }

  /**
   * Updates the evidence transfer configuration.
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
   * Updates the evidence transfer configuration.
   * 
   * @param request - UpdateBackupConfigRequest
   * @returns UpdateBackupConfigResponse
   */
  async updateBackupConfig(request: $_model.UpdateBackupConfigRequest): Promise<$_model.UpdateBackupConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateBackupConfigWithOptions(request, runtime);
  }

  /**
   * Edits an image library.
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
   * Edits an image library.
   * 
   * @param request - UpdateImageLibRequest
   * @returns UpdateImageLibResponse
   */
  async updateImageLib(request: $_model.UpdateImageLibRequest): Promise<$_model.UpdateImageLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageLibWithOptions(request, runtime);
  }

  /**
   * Edits the inspection-exempt configuration of an image library.
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

    if (!$dara.isNull(request.serviceCode)) {
      body["ServiceCode"] = request.serviceCode;
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
   * Edits the inspection-exempt configuration of an image library.
   * 
   * @param request - UpdateImageLibFreeInspectionRequest
   * @returns UpdateImageLibFreeInspectionResponse
   */
  async updateImageLibFreeInspection(request: $_model.UpdateImageLibFreeInspectionRequest): Promise<$_model.UpdateImageLibFreeInspectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateImageLibFreeInspectionWithOptions(request, runtime);
  }

  /**
   * Edits a keyword library.
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

    if (!$dara.isNull(request.tenantCode)) {
      query["TenantCode"] = request.tenantCode;
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
   * Edits a keyword library.
   * 
   * @param request - UpdateKeywordLibRequest
   * @returns UpdateKeywordLibResponse
   */
  async updateKeywordLib(request: $_model.UpdateKeywordLibRequest): Promise<$_model.UpdateKeywordLibResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateKeywordLibWithOptions(request, runtime);
  }

  /**
   * Updates OSS detection result feedback in batches.
   * 
   * @param request - UpdateOssCheckResultsBatchFeedbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOssCheckResultsBatchFeedbackResponse
   */
  async updateOssCheckResultsBatchFeedbackWithOptions(request: $_model.UpdateOssCheckResultsBatchFeedbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOssCheckResultsBatchFeedbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.feedback)) {
      query["Feedback"] = request.feedback;
    }

    if (!$dara.isNull(request.items)) {
      query["Items"] = request.items;
    }

    if (!$dara.isNull(request.parentTaskId)) {
      query["ParentTaskId"] = request.parentTaskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOssCheckResultsBatchFeedback",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOssCheckResultsBatchFeedbackResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOssCheckResultsBatchFeedbackResponse({}));
  }

  /**
   * Updates OSS detection result feedback in batches.
   * 
   * @param request - UpdateOssCheckResultsBatchFeedbackRequest
   * @returns UpdateOssCheckResultsBatchFeedbackResponse
   */
  async updateOssCheckResultsBatchFeedback(request: $_model.UpdateOssCheckResultsBatchFeedbackRequest): Promise<$_model.UpdateOssCheckResultsBatchFeedbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOssCheckResultsBatchFeedbackWithOptions(request, runtime);
  }

  /**
   * Updates the feedback for OSS detection results.
   * 
   * @param request - UpdateOssCheckResultsFeedBackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOssCheckResultsFeedBackResponse
   */
  async updateOssCheckResultsFeedBackWithOptions(request: $_model.UpdateOssCheckResultsFeedBackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOssCheckResultsFeedBackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.feedback)) {
      query["Feedback"] = request.feedback;
    }

    if (!$dara.isNull(request.queryRequestId)) {
      query["QueryRequestId"] = request.queryRequestId;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOssCheckResultsFeedBack",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOssCheckResultsFeedBackResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOssCheckResultsFeedBackResponse({}));
  }

  /**
   * Updates the feedback for OSS detection results.
   * 
   * @param request - UpdateOssCheckResultsFeedBackRequest
   * @returns UpdateOssCheckResultsFeedBackResponse
   */
  async updateOssCheckResultsFeedBack(request: $_model.UpdateOssCheckResultsFeedBackRequest): Promise<$_model.UpdateOssCheckResultsFeedBackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOssCheckResultsFeedBackWithOptions(request, runtime);
  }

  /**
   * Freezes OSS scan results in batches.
   * 
   * @param request - UpdateOssCheckResultsFreezeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOssCheckResultsFreezeResponse
   */
  async updateOssCheckResultsFreezeWithOptions(request: $_model.UpdateOssCheckResultsFreezeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOssCheckResultsFreezeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.freezeItems)) {
      query["FreezeItems"] = request.freezeItems;
    }

    if (!$dara.isNull(request.freezeRestorePath)) {
      query["FreezeRestorePath"] = request.freezeRestorePath;
    }

    if (!$dara.isNull(request.freezeType)) {
      query["FreezeType"] = request.freezeType;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOssCheckResultsFreeze",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOssCheckResultsFreezeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOssCheckResultsFreezeResponse({}));
  }

  /**
   * Freezes OSS scan results in batches.
   * 
   * @param request - UpdateOssCheckResultsFreezeRequest
   * @returns UpdateOssCheckResultsFreezeResponse
   */
  async updateOssCheckResultsFreeze(request: $_model.UpdateOssCheckResultsFreezeRequest): Promise<$_model.UpdateOssCheckResultsFreezeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOssCheckResultsFreezeWithOptions(request, runtime);
  }

  /**
   * Unfreezes OSS detection results in batches.
   * 
   * @param request - UpdateOssCheckResultsUnfreezeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOssCheckResultsUnfreezeResponse
   */
  async updateOssCheckResultsUnfreezeWithOptions(request: $_model.UpdateOssCheckResultsUnfreezeRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateOssCheckResultsUnfreezeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.freezeItems)) {
      query["FreezeItems"] = request.freezeItems;
    }

    if (!$dara.isNull(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOssCheckResultsUnfreeze",
      version: "2022-09-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateOssCheckResultsUnfreezeResponse>(await this.callApi(params, req, runtime), new $_model.UpdateOssCheckResultsUnfreezeResponse({}));
  }

  /**
   * Unfreezes OSS detection results in batches.
   * 
   * @param request - UpdateOssCheckResultsUnfreezeRequest
   * @returns UpdateOssCheckResultsUnfreezeResponse
   */
  async updateOssCheckResultsUnfreeze(request: $_model.UpdateOssCheckResultsUnfreezeRequest): Promise<$_model.UpdateOssCheckResultsUnfreezeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateOssCheckResultsUnfreezeWithOptions(request, runtime);
  }

  /**
   * Submits feedback on detection results.
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
   * Submits feedback on detection results.
   * 
   * @param request - UpdateScanResultFeedbackRequest
   * @returns UpdateScanResultFeedbackResponse
   */
  async updateScanResultFeedback(request: $_model.UpdateScanResultFeedbackRequest): Promise<$_model.UpdateScanResultFeedbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateScanResultFeedbackWithOptions(request, runtime);
  }

  /**
   * Updates a service.
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
   * Updates a service.
   * 
   * @param request - UpdateServiceConfigRequest
   * @returns UpdateServiceConfigResponse
   */
  async updateServiceConfig(request: $_model.UpdateServiceConfigRequest): Promise<$_model.UpdateServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updateServiceConfigWithOptions(request, runtime);
  }

}
