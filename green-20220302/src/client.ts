// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';
import { WebSocketUtils }from '@alicloud/openapi-core';


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
   * Queries the document content moderation result.
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
   * Queries the document content moderation result.
   * 
   * @param request - DescribeFileModerationResultRequest
   * @returns DescribeFileModerationResultResponse
   */
  async describeFileModerationResult(request: $_model.DescribeFileModerationResultRequest): Promise<$_model.DescribeFileModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFileModerationResultWithOptions(request, runtime);
  }

  /**
   * Retrieves the results of an Image Moderation Pro task.
   * 
   * @remarks
   * - Billing information: This operation is not billed.
   * - QPS limit: This operation is limited to 100 queries per second (QPS) for each user. If you exceed this limit, your API calls are throttled, which may affect your business. We recommend that you call this operation at a reasonable rate.
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
   * Retrieves the results of an Image Moderation Pro task.
   * 
   * @remarks
   * - Billing information: This operation is not billed.
   * - QPS limit: This operation is limited to 100 queries per second (QPS) for each user. If you exceed this limit, your API calls are throttled, which may affect your business. We recommend that you call this operation at a reasonable rate.
   * 
   * @param request - DescribeImageModerationResultRequest
   * @returns DescribeImageModerationResultResponse
   */
  async describeImageModerationResult(request: $_model.DescribeImageModerationResultRequest): Promise<$_model.DescribeImageModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageModerationResultWithOptions(request, runtime);
  }

  /**
   * The enhanced image moderation auxiliary information API operation retrieves additional auxiliary information detected by the enhanced image moderation API operation, including OCR results and custom image library hit information.
   * 
   * @remarks
   * This API operation must be used with the enhanced image moderation API. After you call the enhanced image moderation API operation, you can call this API operation to obtain additional detection information. This API operation is free of charge.
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
   * The enhanced image moderation auxiliary information API operation retrieves additional auxiliary information detected by the enhanced image moderation API operation, including OCR results and custom image library hit information.
   * 
   * @remarks
   * This API operation must be used with the enhanced image moderation API. After you call the enhanced image moderation API operation, you can call this API operation to obtain additional detection information. This API operation is free of charge.
   * 
   * @param request - DescribeImageResultExtRequest
   * @returns DescribeImageResultExtResponse
   */
  async describeImageResultExt(request: $_model.DescribeImageResultExtRequest): Promise<$_model.DescribeImageResultExtResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageResultExtWithOptions(request, runtime);
  }

  /**
   * Query the results of an asynchronous multimodal moderation task.
   * 
   * @remarks
   * - Billing information: This API call is free.
   * - Query timeout: Wait 30 seconds after you submit an asynchronous moderation task before querying the result. Do not wait longer than 24 hours, or the result will be automatically deleted.
   * - This API has a per-user rate limiting limit of 10 requests per second. Exceeding this limit triggers rate limiting, which may affect your service. Call the API responsibly.
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
   * Query the results of an asynchronous multimodal moderation task.
   * 
   * @remarks
   * - Billing information: This API call is free.
   * - Query timeout: Wait 30 seconds after you submit an asynchronous moderation task before querying the result. Do not wait longer than 24 hours, or the result will be automatically deleted.
   * - This API has a per-user rate limiting limit of 10 requests per second. Exceeding this limit triggers rate limiting, which may affect your service. Call the API responsibly.
   * 
   * @param request - DescribeMultimodalModerationResultRequest
   * @returns DescribeMultimodalModerationResultResponse
   */
  async describeMultimodalModerationResult(request: $_model.DescribeMultimodalModerationResultRequest): Promise<$_model.DescribeMultimodalModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeMultimodalModerationResultWithOptions(request, runtime);
  }

  /**
   * Retrieves an upload token.
   * 
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
   * Retrieves an upload token.
   * @returns DescribeUploadTokenResponse
   */
  async describeUploadToken(): Promise<$_model.DescribeUploadTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUploadTokenWithOptions(runtime);
  }

  /**
   * Queries moderation results based on the ReqId returned by asynchronous URL moderation.
   * 
   * @remarks
   * - Billing information: This operation is free of charge.
   * - Query timeout: We recommend that you set the query interval to 480 seconds (query the results 480 seconds after you submit the asynchronous moderation task). The maximum timeout period is 3 days. After this period, the results are automatically deleted.
   * - The QPS limit for this operation is 100 queries per second (QPS) per user. If the limit is exceeded, your API calls will be throttled, which may affect your business. Make sure you call the operation at a reasonable rate.
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
   * Queries moderation results based on the ReqId returned by asynchronous URL moderation.
   * 
   * @remarks
   * - Billing information: This operation is free of charge.
   * - Query timeout: We recommend that you set the query interval to 480 seconds (query the results 480 seconds after you submit the asynchronous moderation task). The maximum timeout period is 3 days. After this period, the results are automatically deleted.
   * - The QPS limit for this operation is 100 queries per second (QPS) per user. If the limit is exceeded, your API calls will be throttled, which may affect your business. Make sure you call the operation at a reasonable rate.
   * 
   * @param request - DescribeUrlModerationResultRequest
   * @returns DescribeUrlModerationResultResponse
   */
  async describeUrlModerationResult(request: $_model.DescribeUrlModerationResultRequest): Promise<$_model.DescribeUrlModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeUrlModerationResultWithOptions(request, runtime);
  }

  /**
   * Moderates document content.
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
   * Moderates document content.
   * 
   * @param request - FileModerationRequest
   * @returns FileModerationResponse
   */
  async fileModeration(request: $_model.FileModerationRequest): Promise<$_model.FileModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.fileModerationWithOptions(request, runtime);
  }

  /**
   * This API is used for asynchronous image moderation. Asynchronous moderation tasks do not return detection results in real time. You can obtain the detection results using a callback or by polling. The detection results are retained for up to three days.
   * 
   * @remarks
   * - The following image formats are supported: PNG, JPG, JPEG, BMP, WEBP, TIFF, ICO, HEIC, and SVG.
   * - The image size cannot exceed 10 MB. The recommended image resolution is greater than 200 × 200 pixels. A low resolution may compromise the accuracy of the Content Moderation algorithm.
   * - The timeout period for image downloads is 3 seconds. If an image download exceeds this duration, a download timeout error is returned.
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
   * This API is used for asynchronous image moderation. Asynchronous moderation tasks do not return detection results in real time. You can obtain the detection results using a callback or by polling. The detection results are retained for up to three days.
   * 
   * @remarks
   * - The following image formats are supported: PNG, JPG, JPEG, BMP, WEBP, TIFF, ICO, HEIC, and SVG.
   * - The image size cannot exceed 10 MB. The recommended image resolution is greater than 200 × 200 pixels. A low resolution may compromise the accuracy of the Content Moderation algorithm.
   * - The timeout period for image downloads is 3 seconds. If an image download exceeds this duration, a download timeout error is returned.
   * 
   * @param request - ImageAsyncModerationRequest
   * @returns ImageAsyncModerationResponse
   */
  async imageAsyncModeration(request: $_model.ImageAsyncModerationRequest): Promise<$_model.ImageAsyncModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageAsyncModerationWithOptions(request, runtime);
  }

  /**
   * Batch Invocation of Images
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
   * Batch Invocation of Images
   * 
   * @param request - ImageBatchModerationRequest
   * @returns ImageBatchModerationResponse
   */
  async imageBatchModeration(request: $_model.ImageBatchModerationRequest): Promise<$_model.ImageBatchModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.imageBatchModerationWithOptions(request, runtime);
  }

  /**
   * Image moderation
   * 
   * @remarks
   * Before you call this operation, complete the following steps:
   * 1. [Activate AI Guardrails-Enhanced Edition](https://common-buy.aliyun.com/?commodityCode=lvwang_cip_public_cn).
   * 2. Understand the [billing methods and pricing](https://help.aliyun.com/document_detail/467826.html?#section-h06-qz6-1pt) of the enhanced image moderation feature.
   * 3. For more information about API usage and parameters, see the [API reference](https://help.aliyun.com/document_detail/467829.html).
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
   * Image moderation
   * 
   * @remarks
   * Before you call this operation, complete the following steps:
   * 1. [Activate AI Guardrails-Enhanced Edition](https://common-buy.aliyun.com/?commodityCode=lvwang_cip_public_cn).
   * 2. Understand the [billing methods and pricing](https://help.aliyun.com/document_detail/467826.html?#section-h06-qz6-1pt) of the enhanced image moderation feature.
   * 3. For more information about API usage and parameters, see the [API reference](https://help.aliyun.com/document_detail/467829.html).
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
   * The channel callback API for manual review results in Content Moderation.
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
   * The channel callback API for manual review results in Content Moderation.
   * 
   * @param request - ManualCallbackRequest
   * @returns ManualCallbackResponse
   */
  async manualCallback(request: $_model.ManualCallbackRequest): Promise<$_model.ManualCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualCallbackWithOptions(request, runtime);
  }

  /**
   * Interface for submitting Content Moderation manual review requests
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
   * Interface for submitting Content Moderation manual review requests
   * 
   * @param request - ManualModerationRequest
   * @returns ManualModerationResponse
   */
  async manualModeration(request: $_model.ManualModerationRequest): Promise<$_model.ManualModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualModerationWithOptions(request, runtime);
  }

  /**
   * Retrieves the manual review result.
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
   * Retrieves the manual review result.
   * 
   * @param request - ManualModerationResultRequest
   * @returns ManualModerationResultResponse
   */
  async manualModerationResult(request: $_model.ManualModerationResultRequest): Promise<$_model.ManualModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.manualModerationResultWithOptions(request, runtime);
  }

  /**
   * This is the synchronous detection API for the multi-modal agent.
   * 
   * @remarks
   * This is the AI Guardrails agent.
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
   * This is the synchronous detection API for the multi-modal agent.
   * 
   * @remarks
   * This is the AI Guardrails agent.
   * 
   * @param request - MultiModalAgentRequest
   * @returns MultiModalAgentResponse
   */
  async multiModalAgent(request: $_model.MultiModalAgentRequest): Promise<$_model.MultiModalAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multiModalAgentWithOptions(request, runtime);
  }

  /**
   * Synchronously detects multimodal content by using the Agent API.
   * 
   * @remarks
   * The content moderation Agent.
   * 
   * @param request - MultiModalAgentSSERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultiModalAgentSSEResponse
   */
  async *multiModalAgentSSEWithSSE(request: $_model.MultiModalAgentSSERequest, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.MultiModalAgentSSEResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appID)) {
      body["AppID"] = request.appID;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MultiModalAgentSSE",
      version: "2022-03-02",
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
        yield $dara.cast<$_model.MultiModalAgentSSEResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.MultiModalAgentSSEResponse({}));
      }

    }
  }

  /**
   * Synchronously detects multimodal content by using the Agent API.
   * 
   * @remarks
   * The content moderation Agent.
   * 
   * @param request - MultiModalAgentSSERequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultiModalAgentSSEResponse
   */
  async multiModalAgentSSEWithOptions(request: $_model.MultiModalAgentSSERequest, runtime: $dara.RuntimeOptions): Promise<$_model.MultiModalAgentSSEResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appID)) {
      body["AppID"] = request.appID;
    }

    if (!$dara.isNull(request.serviceParameters)) {
      body["ServiceParameters"] = request.serviceParameters;
    }

    if (!$dara.isNull(request.stream)) {
      body["Stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MultiModalAgentSSE",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MultiModalAgentSSEResponse>(await this.callApi(params, req, runtime), new $_model.MultiModalAgentSSEResponse({}));
  }

  /**
   * Synchronously detects multimodal content by using the Agent API.
   * 
   * @remarks
   * The content moderation Agent.
   * 
   * @param request - MultiModalAgentSSERequest
   * @returns MultiModalAgentSSEResponse
   */
  async multiModalAgentSSE(request: $_model.MultiModalAgentSSERequest): Promise<$_model.MultiModalAgentSSEResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multiModalAgentSSEWithOptions(request, runtime);
  }

  /**
   * API for synchronous detection
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
   * API for synchronous detection
   * 
   * @param request - MultiModalGuardRequest
   * @returns MultiModalGuardResponse
   */
  async multiModalGuard(request: $_model.MultiModalGuardRequest): Promise<$_model.MultiModalGuardResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multiModalGuardWithOptions(request, runtime);
  }

  /**
   * An asynchronous multimodal AI safety guardrail API for audio and video. It provides comprehensive detection of non-compliant content, sensitive content, prompt injection attacks, malicious files, and malicious URLs.
   * 
   * @remarks
   * If an API is subject to billing, add the following sentence in bold: "Before using this API, ensure that you fully understand the billing methods and pricing of the XXX product." The word "pricing" must be a hyperlink to https\\://www\\.aliyun.com/price/product#/ecs/detail.
   * 
   * @param request - MultiModalGuardAsyncRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultiModalGuardAsyncResponse
   */
  async multiModalGuardAsyncWithOptions(request: $_model.MultiModalGuardAsyncRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MultiModalGuardAsyncResponse> {
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
      action: "MultiModalGuardAsync",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MultiModalGuardAsyncResponse>(await this.callApi(params, req, runtime), new $_model.MultiModalGuardAsyncResponse({}));
  }

  /**
   * An asynchronous multimodal AI safety guardrail API for audio and video. It provides comprehensive detection of non-compliant content, sensitive content, prompt injection attacks, malicious files, and malicious URLs.
   * 
   * @remarks
   * If an API is subject to billing, add the following sentence in bold: "Before using this API, ensure that you fully understand the billing methods and pricing of the XXX product." The word "pricing" must be a hyperlink to https\\://www\\.aliyun.com/price/product#/ecs/detail.
   * 
   * @param request - MultiModalGuardAsyncRequest
   * @returns MultiModalGuardAsyncResponse
   */
  async multiModalGuardAsync(request: $_model.MultiModalGuardAsyncRequest): Promise<$_model.MultiModalGuardAsyncResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multiModalGuardAsyncWithOptions(request, runtime);
  }

  /**
   * Queries the asynchronous results of AI safety guardrail multimodal content moderation, supporting audio and video modalities.
   * 
   * @remarks
   * If the API incurs fees, add the following bold statement as the first sentence: **Before using this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of XXX.**
   * 
   * @param request - MultiModalGuardAsyncResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultiModalGuardAsyncResultResponse
   */
  async multiModalGuardAsyncResultWithOptions(request: $_model.MultiModalGuardAsyncResultRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MultiModalGuardAsyncResultResponse> {
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
      action: "MultiModalGuardAsyncResult",
      version: "2022-03-02",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.MultiModalGuardAsyncResultResponse>(await this.callApi(params, req, runtime), new $_model.MultiModalGuardAsyncResultResponse({}));
  }

  /**
   * Queries the asynchronous results of AI safety guardrail multimodal content moderation, supporting audio and video modalities.
   * 
   * @remarks
   * If the API incurs fees, add the following bold statement as the first sentence: **Before using this operation, make sure that you fully understand the billing methods and [pricing](https://www.aliyun.com/price/product#/ecs/detail) of XXX.**
   * 
   * @param request - MultiModalGuardAsyncResultRequest
   * @returns MultiModalGuardAsyncResultResponse
   */
  async multiModalGuardAsyncResult(request: $_model.MultiModalGuardAsyncResultRequest): Promise<$_model.MultiModalGuardAsyncResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multiModalGuardAsyncResultWithOptions(request, runtime);
  }

  /**
   * Performs synchronous multimodal content moderation. Supports image base64 strings.
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
    if (!$dara.isNull(request.fileBase64Str)) {
      body["FileBase64Str"] = request.fileBase64Str;
    }

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
   * Performs synchronous multimodal content moderation. Supports image base64 strings.
   * 
   * @param request - MultiModalGuardForBase64Request
   * @returns MultiModalGuardForBase64Response
   */
  async multiModalGuardForBase64(request: $_model.MultiModalGuardForBase64Request): Promise<$_model.MultiModalGuardForBase64Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multiModalGuardForBase64WithOptions(request, runtime);
  }

  /**
   * Provides a WebSocket-based multimodal detection API for AI safety guardrails. This API supports content compliance detection, sensitive content detection, prompt attack detection, malicious file detection, malicious URL detection, and other comprehensive detection capabilities.
   * 
   * @param request - MultiModalGuardWsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultiModalGuardWsResponse
   */
  async multiModalGuardWsWithOptions(request: $_model.MultiModalGuardWsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.MultiModalGuardWsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "MultiModalGuardWs",
      version: "2022-03-02",
      protocol: "wss",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
      websocketSubProtocol: "awap",
    });
    let res = new $_model.MultiModalGuardWsResponse({ });
    let tmp = await this.callApi(params, req, runtime);
    if (!$dara.isNull(tmp["webSocketClient"])) {
      res.webSocketClient = WebSocketUtils.createWebSocketClient(tmp["webSocketClient"]);
    }

    return res;
  }

  /**
   * Provides a WebSocket-based multimodal detection API for AI safety guardrails. This API supports content compliance detection, sensitive content detection, prompt attack detection, malicious file detection, malicious URL detection, and other comprehensive detection capabilities.
   * 
   * @param request - MultiModalGuardWsRequest
   * @returns MultiModalGuardWsResponse
   */
  async multiModalGuardWs(request: $_model.MultiModalGuardWsRequest): Promise<$_model.MultiModalGuardWsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multiModalGuardWsWithOptions(request, runtime);
  }

  /**
   * Multimodal-Asynchronous Detection
   * 
   * @remarks
   * The asynchronous URL moderation service supports two billing methods: pay-as-you-go and resource plan usage.
   * - After you activate the enhanced text moderation service, the default billing method is pay-as-you-go. You are billed daily based on actual usage. No charges apply if you do not invoke the service.
   * - If your moderation volume is large or your moderation needs are relatively stable, purchase a resource plan in advance. Larger resource plans offer greater discounts. You can stack multiple resource plans.
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
   * Multimodal-Asynchronous Detection
   * 
   * @remarks
   * The asynchronous URL moderation service supports two billing methods: pay-as-you-go and resource plan usage.
   * - After you activate the enhanced text moderation service, the default billing method is pay-as-you-go. You are billed daily based on actual usage. No charges apply if you do not invoke the service.
   * - If your moderation volume is large or your moderation needs are relatively stable, purchase a resource plan in advance. Larger resource plans offer greater discounts. You can stack multiple resource plans.
   * 
   * @param request - MultimodalAsyncModerationRequest
   * @returns MultimodalAsyncModerationResponse
   */
  async multimodalAsyncModeration(request: $_model.MultimodalAsyncModerationRequest): Promise<$_model.MultimodalAsyncModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.multimodalAsyncModerationWithOptions(request, runtime);
  }

  /**
   * This service uses dynamic policies and models to defend against adversarial content. It provides moderation services for various business scenarios and detects different types of violations.
   * 
   * @remarks
   * Before you use this operation, review the [billing methods and pricing](https://help.aliyun.com/document_detail/464388.html?#section-itm-m2s-ugq) for Text Moderation Plus.
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
   * This service uses dynamic policies and models to defend against adversarial content. It provides moderation services for various business scenarios and detects different types of violations.
   * 
   * @remarks
   * Before you use this operation, review the [billing methods and pricing](https://help.aliyun.com/document_detail/464388.html?#section-itm-m2s-ugq) for Text Moderation Plus.
   * 
   * @param request - TextModerationRequest
   * @returns TextModerationResponse
   */
  async textModeration(request: $_model.TextModerationRequest): Promise<$_model.TextModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textModerationWithOptions(request, runtime);
  }

  /**
   * Text Moderation Plus is an upgraded service that moderates the input instructions and generated text of large language models (LLMs). This service can retrieve standard answers for specific input instructions and lets you enable or disable moderation labels.
   * 
   * @remarks
   * Before you use this API, [activate AI Guardrails Pro](https://common-buy.aliyun.com/?commodityCode=lvwang_cip_public_cn) and make sure that you understand the [billing methods and pricing](https://help.aliyun.com/document_detail/2671445.html?#section-6od-32j-99n) for Text Moderation Plus.
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
   * Text Moderation Plus is an upgraded service that moderates the input instructions and generated text of large language models (LLMs). This service can retrieve standard answers for specific input instructions and lets you enable or disable moderation labels.
   * 
   * @remarks
   * Before you use this API, [activate AI Guardrails Pro](https://common-buy.aliyun.com/?commodityCode=lvwang_cip_public_cn) and make sure that you understand the [billing methods and pricing](https://help.aliyun.com/document_detail/2671445.html?#section-6od-32j-99n) for Text Moderation Plus.
   * 
   * @param request - TextModerationPlusRequest
   * @returns TextModerationPlusResponse
   */
  async textModerationPlus(request: $_model.TextModerationPlusRequest): Promise<$_model.TextModerationPlusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.textModerationPlusWithOptions(request, runtime);
  }

  /**
   * The URL asynchronous moderation service detects threats such as fraud, pornography, and gambling in URLs to protect the content ecosystem of your platform.
   * 
   * @remarks
   * The URL asynchronous moderation service supports the pay-as-you-go and resource plan billing methods.
   * - After you activate the enhanced edition of Text Moderation, the default billing method is pay-as-you-go. You are charged CNY 30 per 10,000 calls based on your daily usage. No fees are incurred if you do not call the service.
   * - If you have many moderation requests or relatively fixed moderation requirements, we recommend that you purchase resource plans in advance. The larger the resource plan you purchase, the greater the discount you receive. You can purchase and use multiple resource plans.
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
   * The URL asynchronous moderation service detects threats such as fraud, pornography, and gambling in URLs to protect the content ecosystem of your platform.
   * 
   * @remarks
   * The URL asynchronous moderation service supports the pay-as-you-go and resource plan billing methods.
   * - After you activate the enhanced edition of Text Moderation, the default billing method is pay-as-you-go. You are charged CNY 30 per 10,000 calls based on your daily usage. No fees are incurred if you do not call the service.
   * - If you have many moderation requests or relatively fixed moderation requirements, we recommend that you purchase resource plans in advance. The larger the resource plan you purchase, the greater the discount you receive. You can purchase and use multiple resource plans.
   * 
   * @param request - UrlAsyncModerationRequest
   * @returns UrlAsyncModerationResponse
   */
  async urlAsyncModeration(request: $_model.UrlAsyncModerationRequest): Promise<$_model.UrlAsyncModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.urlAsyncModerationWithOptions(request, runtime);
  }

  /**
   * The enhanced video moderation feature of Content Moderation detects threats and non-compliant content in video files. Use this operation to submit a moderation task.
   * 
   * @remarks
   * Before you call this operation, make sure that you have activated the [enhanced Content Moderation](https://common-buy.aliyun.com/?commodityCode=lvwang_cip_public_cn) service and understand the [billing methods](https://help.aliyun.com/document_detail/2505807.html) and [pricing](https://www.aliyun.com/price/product?#/lvwang/detail/cdibag) of the enhanced video moderation feature.
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
   * The enhanced video moderation feature of Content Moderation detects threats and non-compliant content in video files. Use this operation to submit a moderation task.
   * 
   * @remarks
   * Before you call this operation, make sure that you have activated the [enhanced Content Moderation](https://common-buy.aliyun.com/?commodityCode=lvwang_cip_public_cn) service and understand the [billing methods](https://help.aliyun.com/document_detail/2505807.html) and [pricing](https://www.aliyun.com/price/product?#/lvwang/detail/cdibag) of the enhanced video moderation feature.
   * 
   * @param request - VideoModerationRequest
   * @returns VideoModerationResponse
   */
  async videoModeration(request: $_model.VideoModerationRequest): Promise<$_model.VideoModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoModerationWithOptions(request, runtime);
  }

  /**
   * Cancels an ApsaraVideo Live moderation task.
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
   * Cancels an ApsaraVideo Live moderation task.
   * 
   * @param request - VideoModerationCancelRequest
   * @returns VideoModerationCancelResponse
   */
  async videoModerationCancel(request: $_model.VideoModerationCancelRequest): Promise<$_model.VideoModerationCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoModerationCancelWithOptions(request, runtime);
  }

  /**
   * Retrieves the task result of an enhanced video content moderation node.
   * 
   * @remarks
   * This operation is not billed. Set the polling interval to 30 seconds (query results 30 seconds after submitting the asynchronous moderation task). The maximum query window is 24 hours. After that, results are automatically deleted.
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
   * Retrieves the task result of an enhanced video content moderation node.
   * 
   * @remarks
   * This operation is not billed. Set the polling interval to 30 seconds (query results 30 seconds after submitting the asynchronous moderation task). The maximum query window is 24 hours. After that, results are automatically deleted.
   * 
   * @param request - VideoModerationResultRequest
   * @returns VideoModerationResultResponse
   */
  async videoModerationResult(request: $_model.VideoModerationResultRequest): Promise<$_model.VideoModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.videoModerationResultWithOptions(request, runtime);
  }

  /**
   * Submits a task for enhanced voice moderation.
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
   * Submits a task for enhanced voice moderation.
   * 
   * @param request - VoiceModerationRequest
   * @returns VoiceModerationResponse
   */
  async voiceModeration(request: $_model.VoiceModerationRequest): Promise<$_model.VoiceModerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.voiceModerationWithOptions(request, runtime);
  }

  /**
   * This operation cancels an enhanced voice moderation task.
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
   * This operation cancels an enhanced voice moderation task.
   * 
   * @param request - VoiceModerationCancelRequest
   * @returns VoiceModerationCancelResponse
   */
  async voiceModerationCancel(request: $_model.VoiceModerationCancelRequest): Promise<$_model.VoiceModerationCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.voiceModerationCancelWithOptions(request, runtime);
  }

  /**
   * Retrieve the detection results for enhanced voice moderation.
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
   * Retrieve the detection results for enhanced voice moderation.
   * 
   * @param request - VoiceModerationResultRequest
   * @returns VoiceModerationResultResponse
   */
  async voiceModerationResult(request: $_model.VoiceModerationResultRequest): Promise<$_model.VoiceModerationResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.voiceModerationResultWithOptions(request, runtime);
  }

}
