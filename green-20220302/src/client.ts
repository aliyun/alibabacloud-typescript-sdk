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
   * 文档审核结果
   * 
   * @param request - DescribeFileModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFileModerationResultResponse
   */
  async describeFileModerationResultWithOptions(request: $_model.DescribeFileModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeFileModerationResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFileModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeFileModerationResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeFileModerationResultResponse({}));
  }

  /**
   * 文档审核结果
   * 
   * @param request - DescribeFileModerationResultRequest
   * @returns DescribeFileModerationResultResponse
   */
  async describeFileModerationResult(request: $_model.DescribeFileModerationResultRequest): Promise<$_model.DescribeFileModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileModerationResultWithOptions(request, runtime);
  }

  /**
   * Obtains the moderation results of an Image Moderation 2.0 task.
   * 
   * @remarks
   *   Billing: This operation is free of charge.
   * *   QPS limit: You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeImageModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageModerationResultResponse
   */
  async describeImageModerationResultWithOptions(request: $_model.DescribeImageModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImageModerationResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImageModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImageModerationResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImageModerationResultResponse({}));
  }

  /**
   * Obtains the moderation results of an Image Moderation 2.0 task.
   * 
   * @remarks
   *   Billing: This operation is free of charge.
   * *   QPS limit: You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeImageModerationResultRequest
   * @returns DescribeImageModerationResultResponse
   */
  async describeImageModerationResult(request: $_model.DescribeImageModerationResultRequest): Promise<$_model.DescribeImageModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageModerationResultWithOptions(request, runtime);
  }

  /**
   * 查询检测结果辅助信息
   * 
   * @param request - DescribeImageResultExtRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageResultExtResponse
   */
  async describeImageResultExtWithOptions(request: $_model.DescribeImageResultExtRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeImageResultExtResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.infoType)) {
      body["InfoType"] = request.infoType;
    }

    if (!$dara.isNull(request.reqId)) {
      body["ReqId"] = request.reqId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImageResultExt",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeImageResultExtResponse>(await this.callApi(params, req, runtime), new $_model.DescribeImageResultExtResponse({}));
  }

  /**
   * 查询检测结果辅助信息
   * 
   * @param request - DescribeImageResultExtRequest
   * @returns DescribeImageResultExtResponse
   */
  async describeImageResultExt(request: $_model.DescribeImageResultExtRequest): Promise<$_model.DescribeImageResultExtResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageResultExtWithOptions(request, runtime);
  }

  /**
   * 查询异步多模态检测结果
   * 
   * @param request - DescribeMultimodalModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMultimodalModerationResultResponse
   */
  async describeMultimodalModerationResultWithOptions(request: $_model.DescribeMultimodalModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeMultimodalModerationResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.reqId)) {
      query["ReqId"] = request.reqId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMultimodalModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeMultimodalModerationResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeMultimodalModerationResultResponse({}));
  }

  /**
   * 查询异步多模态检测结果
   * 
   * @param request - DescribeMultimodalModerationResultRequest
   * @returns DescribeMultimodalModerationResultResponse
   */
  async describeMultimodalModerationResult(request: $_model.DescribeMultimodalModerationResultRequest): Promise<$_model.DescribeMultimodalModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMultimodalModerationResultWithOptions(request, runtime);
  }

  /**
   * 查询上传token
   * 
   * @param request - DescribeUploadTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUploadTokenResponse
   */
  async describeUploadTokenWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUploadTokenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUploadToken",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUploadTokenResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUploadTokenResponse({}));
  }

  /**
   * 查询上传token
   * @returns DescribeUploadTokenResponse
   */
  async describeUploadToken(): Promise<$_model.DescribeUploadTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUploadTokenWithOptions(runtime);
  }

  /**
   * Queries the moderation results based on the ReqId returned by asynchronous URL moderation.
   * 
   * @remarks
   *   Billing: This operation is free of charge.
   * *   Query timeout: We recommend that you query moderation results at least 480 seconds after you send an asynchronous moderation request. Content Moderation retains moderation results for up to 3 days. After 3 days, the results are deleted.
   * *   You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeUrlModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeUrlModerationResultResponse
   */
  async describeUrlModerationResultWithOptions(request: $_model.DescribeUrlModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeUrlModerationResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reqId)) {
      body["ReqId"] = request.reqId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeUrlModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeUrlModerationResultResponse>(await this.callApi(params, req, runtime), new $_model.DescribeUrlModerationResultResponse({}));
  }

  /**
   * Queries the moderation results based on the ReqId returned by asynchronous URL moderation.
   * 
   * @remarks
   *   Billing: This operation is free of charge.
   * *   Query timeout: We recommend that you query moderation results at least 480 seconds after you send an asynchronous moderation request. Content Moderation retains moderation results for up to 3 days. After 3 days, the results are deleted.
   * *   You can call this operation up to 100 times per second per account. If the number of the calls per second exceeds the limit, throttling is triggered. As a result, your business may be affected. We recommend that you take note of the limit when you call this operation.
   * 
   * @param request - DescribeUrlModerationResultRequest
   * @returns DescribeUrlModerationResultResponse
   */
  async describeUrlModerationResult(request: $_model.DescribeUrlModerationResultRequest): Promise<$_model.DescribeUrlModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUrlModerationResultWithOptions(request, runtime);
  }

  /**
   * 文档审核
   * 
   * @param request - FileModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileModerationResponse
   */
  async fileModerationWithOptions(request: $_model.FileModerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FileModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FileModerationResponse>(await this.callApi(params, req, runtime), new $_model.FileModerationResponse({}));
  }

  /**
   * 文档审核
   * 
   * @param request - FileModerationRequest
   * @returns FileModerationResponse
   */
  async fileModeration(request: $_model.FileModerationRequest): Promise<$_model.FileModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fileModerationWithOptions(request, runtime);
  }

  /**
   * 图片异步检测
   * 
   * @param request - ImageAsyncModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageAsyncModerationResponse
   */
  async imageAsyncModerationWithOptions(request: $_model.ImageAsyncModerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageAsyncModerationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageAsyncModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageAsyncModerationResponse>(await this.callApi(params, req, runtime), new $_model.ImageAsyncModerationResponse({}));
  }

  /**
   * 图片异步检测
   * 
   * @param request - ImageAsyncModerationRequest
   * @returns ImageAsyncModerationResponse
   */
  async imageAsyncModeration(request: $_model.ImageAsyncModerationRequest): Promise<$_model.ImageAsyncModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageAsyncModerationWithOptions(request, runtime);
  }

  /**
   * 图片批量调用
   * 
   * @param request - ImageBatchModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageBatchModerationResponse
   */
  async imageBatchModerationWithOptions(request: $_model.ImageBatchModerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageBatchModerationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageBatchModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageBatchModerationResponse>(await this.callApi(params, req, runtime), new $_model.ImageBatchModerationResponse({}));
  }

  /**
   * 图片批量调用
   * 
   * @param request - ImageBatchModerationRequest
   * @returns ImageBatchModerationResponse
   */
  async imageBatchModeration(request: $_model.ImageBatchModerationRequest): Promise<$_model.ImageBatchModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageBatchModerationWithOptions(request, runtime);
  }

  /**
   * Identifies whether an image contains content or elements that violate relevant regulations on network content dissemination, affect the content order of a specific platform, or affect user experience. Image Moderation 2.0 supports over 90 content risk labels and over 100 risk control items. Image Moderation 2.0 of Content Moderation allows you to develop further moderation or governance measures for specific image content based on business scenarios, platform-specific content governance rules, or rich risk labels and scores of confidence levels returned by API calls.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/467826.html)[](https://www.aliyun.com/price/product?#/lvwang/detail/cdibag) of Image Moderation 2.0.
   * 
   * @param request - ImageModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageModerationResponse
   */
  async imageModerationWithOptions(request: $_model.ImageModerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageModerationResponse>(await this.callApi(params, req, runtime), new $_model.ImageModerationResponse({}));
  }

  /**
   * Identifies whether an image contains content or elements that violate relevant regulations on network content dissemination, affect the content order of a specific platform, or affect user experience. Image Moderation 2.0 supports over 90 content risk labels and over 100 risk control items. Image Moderation 2.0 of Content Moderation allows you to develop further moderation or governance measures for specific image content based on business scenarios, platform-specific content governance rules, or rich risk labels and scores of confidence levels returned by API calls.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/467826.html)[](https://www.aliyun.com/price/product?#/lvwang/detail/cdibag) of Image Moderation 2.0.
   * 
   * @param request - ImageModerationRequest
   * @returns ImageModerationResponse
   */
  async imageModeration(request: $_model.ImageModerationRequest): Promise<$_model.ImageModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageModerationWithOptions(request, runtime);
  }

  /**
   * 图片审核
   * 
   * @param request - ImageQueueModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImageQueueModerationResponse
   */
  async imageQueueModerationWithOptions(request: $_model.ImageQueueModerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ImageQueueModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImageQueueModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImageQueueModerationResponse>(await this.callApi(params, req, runtime), new $_model.ImageQueueModerationResponse({}));
  }

  /**
   * 图片审核
   * 
   * @param request - ImageQueueModerationRequest
   * @returns ImageQueueModerationResponse
   */
  async imageQueueModeration(request: $_model.ImageQueueModerationRequest): Promise<$_model.ImageQueueModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageQueueModerationWithOptions(request, runtime);
  }

  /**
   * Content Security Manual Review Result Callback Interface
   * 
   * @param request - ManualCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManualCallbackResponse
   */
  async manualCallbackWithOptions(request: $_model.ManualCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ManualCallbackResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!$dara.isNull(request.checksum)) {
      body["Checksum"] = request.checksum;
    }

    if (!$dara.isNull(request.code)) {
      body["Code"] = request.code;
    }

    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.msg)) {
      body["Msg"] = request.msg;
    }

    if (!$dara.isNull(request.reqId)) {
      body["ReqId"] = request.reqId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManualCallback",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ManualCallbackResponse>(await this.callApi(params, req, runtime), new $_model.ManualCallbackResponse({}));
  }

  /**
   * Content Security Manual Review Result Callback Interface
   * 
   * @param request - ManualCallbackRequest
   * @returns ManualCallbackResponse
   */
  async manualCallback(request: $_model.ManualCallbackRequest): Promise<$_model.ManualCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualCallbackWithOptions(request, runtime);
  }

  /**
   * Content Security Manual Review Request Interface
   * 
   * @param request - ManualModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManualModerationResponse
   */
  async manualModerationWithOptions(request: $_model.ManualModerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ManualModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManualModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ManualModerationResponse>(await this.callApi(params, req, runtime), new $_model.ManualModerationResponse({}));
  }

  /**
   * Content Security Manual Review Request Interface
   * 
   * @param request - ManualModerationRequest
   * @returns ManualModerationResponse
   */
  async manualModeration(request: $_model.ManualModerationRequest): Promise<$_model.ManualModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualModerationWithOptions(request, runtime);
  }

  /**
   * Retrieve manual review results
   * 
   * @param request - ManualModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManualModerationResultResponse
   */
  async manualModerationResultWithOptions(request: $_model.ManualModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ManualModerationResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManualModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ManualModerationResultResponse>(await this.callApi(params, req, runtime), new $_model.ManualModerationResultResponse({}));
  }

  /**
   * Retrieve manual review results
   * 
   * @param request - ManualModerationResultRequest
   * @returns ManualModerationResultResponse
   */
  async manualModerationResult(request: $_model.ManualModerationResultRequest): Promise<$_model.ManualModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualModerationResultWithOptions(request, runtime);
  }

  /**
   * 多模态AgentAPI同步检测接口
   * 
   * @param request - MultiModalAgentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultiModalAgentResponse
   */
  async multiModalAgentWithOptions(request: $_model.MultiModalAgentRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MultiModalAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appID)) {
      body["AppID"] = request.appID;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MultiModalAgent",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MultiModalAgentResponse>(await this.callApi(params, req, runtime), new $_model.MultiModalAgentResponse({}));
  }

  /**
   * 多模态AgentAPI同步检测接口
   * 
   * @param request - MultiModalAgentRequest
   * @returns MultiModalAgentResponse
   */
  async multiModalAgent(request: $_model.MultiModalAgentRequest): Promise<$_model.MultiModalAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multiModalAgentWithOptions(request, runtime);
  }

  /**
   * 同步检测接口
   * 
   * @param request - MultiModalGuardRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultiModalGuardResponse
   */
  async multiModalGuardWithOptions(request: $_model.MultiModalGuardRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MultiModalGuardResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MultiModalGuard",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MultiModalGuardResponse>(await this.callApi(params, req, runtime), new $_model.MultiModalGuardResponse({}));
  }

  /**
   * 同步检测接口
   * 
   * @param request - MultiModalGuardRequest
   * @returns MultiModalGuardResponse
   */
  async multiModalGuard(request: $_model.MultiModalGuardRequest): Promise<$_model.MultiModalGuardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multiModalGuardWithOptions(request, runtime);
  }

  /**
   * 多模态同步检测接口，支持图片base64字符串
   * 
   * @param request - MultiModalGuardForBase64Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultiModalGuardForBase64Response
   */
  async multiModalGuardForBase64WithOptions(request: $_model.MultiModalGuardForBase64Request, runtime: $dara.RuntimeOptions): Promise<$_model.MultiModalGuardForBase64Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageBase64Str)) {
      body["ImageBase64Str"] = request.imageBase64Str;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MultiModalGuardForBase64",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MultiModalGuardForBase64Response>(await this.callApi(params, req, runtime), new $_model.MultiModalGuardForBase64Response({}));
  }

  /**
   * 多模态同步检测接口，支持图片base64字符串
   * 
   * @param request - MultiModalGuardForBase64Request
   * @returns MultiModalGuardForBase64Response
   */
  async multiModalGuardForBase64(request: $_model.MultiModalGuardForBase64Request): Promise<$_model.MultiModalGuardForBase64Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multiModalGuardForBase64WithOptions(request, runtime);
  }

  /**
   * 多模态-异步检测
   * 
   * @param request - MultimodalAsyncModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultimodalAsyncModerationResponse
   */
  async multimodalAsyncModerationWithOptions(request: $_model.MultimodalAsyncModerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MultimodalAsyncModerationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MultimodalAsyncModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MultimodalAsyncModerationResponse>(await this.callApi(params, req, runtime), new $_model.MultimodalAsyncModerationResponse({}));
  }

  /**
   * 多模态-异步检测
   * 
   * @param request - MultimodalAsyncModerationRequest
   * @returns MultimodalAsyncModerationResponse
   */
  async multimodalAsyncModeration(request: $_model.MultimodalAsyncModerationRequest): Promise<$_model.MultimodalAsyncModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multimodalAsyncModerationWithOptions(request, runtime);
  }

  /**
   * Provides moderation services for multiple business scenarios and identifies various violation risks.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/464388.html?#section-itm-m2s-ugq) of Text Moderation 2.0.
   * 
   * @param request - TextModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextModerationResponse
   */
  async textModerationWithOptions(request: $_model.TextModerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TextModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TextModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TextModerationResponse>(await this.callApi(params, req, runtime), new $_model.TextModerationResponse({}));
  }

  /**
   * Provides moderation services for multiple business scenarios and identifies various violation risks.
   * 
   * @remarks
   * Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/464388.html?#section-itm-m2s-ugq) of Text Moderation 2.0.
   * 
   * @param request - TextModerationRequest
   * @returns TextModerationResponse
   */
  async textModeration(request: $_model.TextModerationRequest): Promise<$_model.TextModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textModerationWithOptions(request, runtime);
  }

  /**
   * Moderates the input command and generated text of large language models (LLMs). Specific model input commands can be used to retrieve standard answers. The feature of enabling and disabling the moderation labels is also available.
   * 
   * @remarks
   * Before you call this operation, make sure that you have [activated the Content Moderation 2.0 service](https://common-buy.aliyun.com/?commodityCode=lvwang_cip_public_cn) and are familiar with the [billing](https://help.aliyun.com/document_detail/2671445.html?#section-6od-32j-99n) of the Text Moderation 2.0 Plus service.
   * 
   * @param request - TextModerationPlusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TextModerationPlusResponse
   */
  async textModerationPlusWithOptions(request: $_model.TextModerationPlusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.TextModerationPlusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TextModerationPlus",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TextModerationPlusResponse>(await this.callApi(params, req, runtime), new $_model.TextModerationPlusResponse({}));
  }

  /**
   * Moderates the input command and generated text of large language models (LLMs). Specific model input commands can be used to retrieve standard answers. The feature of enabling and disabling the moderation labels is also available.
   * 
   * @remarks
   * Before you call this operation, make sure that you have [activated the Content Moderation 2.0 service](https://common-buy.aliyun.com/?commodityCode=lvwang_cip_public_cn) and are familiar with the [billing](https://help.aliyun.com/document_detail/2671445.html?#section-6od-32j-99n) of the Text Moderation 2.0 Plus service.
   * 
   * @param request - TextModerationPlusRequest
   * @returns TextModerationPlusResponse
   */
  async textModerationPlus(request: $_model.TextModerationPlusRequest): Promise<$_model.TextModerationPlusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textModerationPlusWithOptions(request, runtime);
  }

  /**
   * url异步检测
   * 
   * @param request - UrlAsyncModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UrlAsyncModerationResponse
   */
  async urlAsyncModerationWithOptions(request: $_model.UrlAsyncModerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UrlAsyncModerationResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.service)) {
      query["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      query["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UrlAsyncModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UrlAsyncModerationResponse>(await this.callApi(params, req, runtime), new $_model.UrlAsyncModerationResponse({}));
  }

  /**
   * url异步检测
   * 
   * @param request - UrlAsyncModerationRequest
   * @returns UrlAsyncModerationResponse
   */
  async urlAsyncModeration(request: $_model.UrlAsyncModerationRequest): Promise<$_model.UrlAsyncModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.urlAsyncModerationWithOptions(request, runtime);
  }

  /**
   * 视频检测任务提交
   * 
   * @param request - VideoModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoModerationResponse
   */
  async videoModerationWithOptions(request: $_model.VideoModerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VideoModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VideoModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VideoModerationResponse>(await this.callApi(params, req, runtime), new $_model.VideoModerationResponse({}));
  }

  /**
   * 视频检测任务提交
   * 
   * @param request - VideoModerationRequest
   * @returns VideoModerationResponse
   */
  async videoModeration(request: $_model.VideoModerationRequest): Promise<$_model.VideoModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoModerationWithOptions(request, runtime);
  }

  /**
   * 取消视频直播流检测
   * 
   * @param request - VideoModerationCancelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoModerationCancelResponse
   */
  async videoModerationCancelWithOptions(request: $_model.VideoModerationCancelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VideoModerationCancelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VideoModerationCancel",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VideoModerationCancelResponse>(await this.callApi(params, req, runtime), new $_model.VideoModerationCancelResponse({}));
  }

  /**
   * 取消视频直播流检测
   * 
   * @param request - VideoModerationCancelRequest
   * @returns VideoModerationCancelResponse
   */
  async videoModerationCancel(request: $_model.VideoModerationCancelRequest): Promise<$_model.VideoModerationCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoModerationCancelWithOptions(request, runtime);
  }

  /**
   * Get Video Detection Results
   * 
   * @remarks
   * This operation is free of charge. We recommend that you query moderation results at least 30 seconds after you send an asynchronous moderation request. Content Moderation retains moderation results for at most 24 hours. After 24 hours, the results are deleted.
   * 
   * @param request - VideoModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VideoModerationResultResponse
   */
  async videoModerationResultWithOptions(request: $_model.VideoModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VideoModerationResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VideoModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VideoModerationResultResponse>(await this.callApi(params, req, runtime), new $_model.VideoModerationResultResponse({}));
  }

  /**
   * Get Video Detection Results
   * 
   * @remarks
   * This operation is free of charge. We recommend that you query moderation results at least 30 seconds after you send an asynchronous moderation request. Content Moderation retains moderation results for at most 24 hours. After 24 hours, the results are deleted.
   * 
   * @param request - VideoModerationResultRequest
   * @returns VideoModerationResultResponse
   */
  async videoModerationResult(request: $_model.VideoModerationResultRequest): Promise<$_model.VideoModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoModerationResultWithOptions(request, runtime);
  }

  /**
   * 语音审核
   * 
   * @param request - VoiceModerationRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceModerationResponse
   */
  async voiceModerationWithOptions(request: $_model.VoiceModerationRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VoiceModerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VoiceModeration",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VoiceModerationResponse>(await this.callApi(params, req, runtime), new $_model.VoiceModerationResponse({}));
  }

  /**
   * 语音审核
   * 
   * @param request - VoiceModerationRequest
   * @returns VoiceModerationResponse
   */
  async voiceModeration(request: $_model.VoiceModerationRequest): Promise<$_model.VoiceModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.voiceModerationWithOptions(request, runtime);
  }

  /**
   * 取消检测
   * 
   * @param request - VoiceModerationCancelRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceModerationCancelResponse
   */
  async voiceModerationCancelWithOptions(request: $_model.VoiceModerationCancelRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VoiceModerationCancelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VoiceModerationCancel",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VoiceModerationCancelResponse>(await this.callApi(params, req, runtime), new $_model.VoiceModerationCancelResponse({}));
  }

  /**
   * 取消检测
   * 
   * @param request - VoiceModerationCancelRequest
   * @returns VoiceModerationCancelResponse
   */
  async voiceModerationCancel(request: $_model.VoiceModerationCancelRequest): Promise<$_model.VoiceModerationCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.voiceModerationCancelWithOptions(request, runtime);
  }

  /**
   * Obtains the moderation results of a Voice Moderation 2.0 task.
   * 
   * @param request - VoiceModerationResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VoiceModerationResultResponse
   */
  async voiceModerationResultWithOptions(request: $_model.VoiceModerationResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VoiceModerationResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.service)) {
      body["Service"] = request.service;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "VoiceModerationResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VoiceModerationResultResponse>(await this.callApi(params, req, runtime), new $_model.VoiceModerationResultResponse({}));
  }

  /**
   * Obtains the moderation results of a Voice Moderation 2.0 task.
   * 
   * @param request - VoiceModerationResultRequest
   * @returns VoiceModerationResultResponse
   */
  async voiceModerationResult(request: $_model.VoiceModerationResultRequest): Promise<$_model.VoiceModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.voiceModerationResultWithOptions(request, runtime);
  }

}
