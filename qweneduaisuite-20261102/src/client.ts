// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "QwenEduAiSuite";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("qweneduaisuite", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 开通千问教育API权限
   * 
   * @remarks
   * 开通千问教育API权限
   * 
   * @param request - ActivateQwenEduApiRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateQwenEduApiResponse
   */
  async activateQwenEduApiWithOptions(request: $_model.ActivateQwenEduApiRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ActivateQwenEduApiResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateQwenEduApi",
      version: "2026-11-02",
      protocol: "HTTPS",
      pathname: `/v1/service/activate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ActivateQwenEduApiResponse>(await this.callApi(params, req, runtime), new $_model.ActivateQwenEduApiResponse({}));
  }

  /**
   * 开通千问教育API权限
   * 
   * @remarks
   * 开通千问教育API权限
   * 
   * @param request - ActivateQwenEduApiRequest
   * @returns ActivateQwenEduApiResponse
   */
  async activateQwenEduApi(request: $_model.ActivateQwenEduApiRequest): Promise<$_model.ActivateQwenEduApiResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.activateQwenEduApiWithOptions(request, headers, runtime);
  }

  /**
   * 提交单页作业图片，返回任务ID及初步检测结果。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于提交单页作业图片进行批改，支持通过图片URL或Base64编码的图片数据。
   * - 提交后会立即返回任务ID、矫正图及题目检测结果，但不包含具体的批改结论。
   * - 需要通过查询接口轮询获取最终的批改结果。
   * - 支持对图片进行透视矫正，默认开启。
   * - 图片要求：支持多种格式（JPEG, PNG, GIF等），推荐体积不超过1MB，最大支持15MB（Base64编码后）。
   * - 每次请求仅处理一张图片，多张图片需分别提交。
   * - `request_id`字段建议由调用方生成并传递，以便于问题排查和对账。
   * 
   * @param request - CreateEduHomeworkCorrectSubmitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEduHomeworkCorrectSubmitResponse
   */
  async createEduHomeworkCorrectSubmitWithOptions(request: $_model.CreateEduHomeworkCorrectSubmitRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEduHomeworkCorrectSubmitResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dewarp)) {
      body["dewarp"] = request.dewarp;
    }

    if (!$dara.isNull(request.imageBase64)) {
      body["imageBase64"] = request.imageBase64;
    }

    if (!$dara.isNull(request.imageUrl)) {
      body["imageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEduHomeworkCorrectSubmit",
      version: "2026-11-02",
      protocol: "HTTPS",
      pathname: `/v1/homework/correct/submit`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEduHomeworkCorrectSubmitResponse>(await this.callApi(params, req, runtime), new $_model.CreateEduHomeworkCorrectSubmitResponse({}));
  }

  /**
   * 提交单页作业图片，返回任务ID及初步检测结果。
   * 
   * @remarks
   * ## 请求说明
   * - 该接口用于提交单页作业图片进行批改，支持通过图片URL或Base64编码的图片数据。
   * - 提交后会立即返回任务ID、矫正图及题目检测结果，但不包含具体的批改结论。
   * - 需要通过查询接口轮询获取最终的批改结果。
   * - 支持对图片进行透视矫正，默认开启。
   * - 图片要求：支持多种格式（JPEG, PNG, GIF等），推荐体积不超过1MB，最大支持15MB（Base64编码后）。
   * - 每次请求仅处理一张图片，多张图片需分别提交。
   * - `request_id`字段建议由调用方生成并传递，以便于问题排查和对账。
   * 
   * @param request - CreateEduHomeworkCorrectSubmitRequest
   * @returns CreateEduHomeworkCorrectSubmitResponse
   */
  async createEduHomeworkCorrectSubmit(request: $_model.CreateEduHomeworkCorrectSubmitRequest): Promise<$_model.CreateEduHomeworkCorrectSubmitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEduHomeworkCorrectSubmitWithOptions(request, headers, runtime);
  }

  /**
   * 通过图片URL或Base64编码接收题目，返回解题过程和结果。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口支持通过单张题目图片的URL或Base64编码进行解题请求。
   * - 支持处理JPEG、JPG、PNG格式的图片，且图片大小不超过10MB，像素总数不超过260万。
   * - 请求必须携带`request_id`字段，用于链路关联和对账；建议使用UUID以保证唯一性。
   * - `Authorization`头部需包含有效的`appKey`，采用`Bearer <appKey>`格式。
   * - 接口响应为SSE流式数据，客户端应逐事件读取并解析，不得等待连接关闭后整体读取。
   * - 成功响应包括`message`（过程态全量解题快照）和`complete`（最终完整结果）两种事件类型。
   * - 错误处理分为建流前与建流后两个阶段，根据错误码及`retryable`字段决定是否重试。
   * - 客户端超时设置建议不低于3分钟，并确保代理层不会缓存SSE响应或提前关闭长连接。
   * 
   * @param tmpReq - CreateEduProblemSolveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEduProblemSolveResponse
   */
  async *createEduProblemSolveWithSSE(tmpReq: $_model.CreateEduProblemSolveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.CreateEduProblemSolveResponse, any, unknown> {
    tmpReq.validate();
    let request = new $_model.CreateEduProblemSolveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "query", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.queryShrink)) {
      body["query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEduProblemSolve",
      version: "2026-11-02",
      protocol: "HTTPS",
      pathname: `/v1/problem/solve/stream`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.CreateEduProblemSolveResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.CreateEduProblemSolveResponse({}));
      }

    }
  }

  /**
   * 通过图片URL或Base64编码接收题目，返回解题过程和结果。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口支持通过单张题目图片的URL或Base64编码进行解题请求。
   * - 支持处理JPEG、JPG、PNG格式的图片，且图片大小不超过10MB，像素总数不超过260万。
   * - 请求必须携带`request_id`字段，用于链路关联和对账；建议使用UUID以保证唯一性。
   * - `Authorization`头部需包含有效的`appKey`，采用`Bearer <appKey>`格式。
   * - 接口响应为SSE流式数据，客户端应逐事件读取并解析，不得等待连接关闭后整体读取。
   * - 成功响应包括`message`（过程态全量解题快照）和`complete`（最终完整结果）两种事件类型。
   * - 错误处理分为建流前与建流后两个阶段，根据错误码及`retryable`字段决定是否重试。
   * - 客户端超时设置建议不低于3分钟，并确保代理层不会缓存SSE响应或提前关闭长连接。
   * 
   * @param tmpReq - CreateEduProblemSolveRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEduProblemSolveResponse
   */
  async createEduProblemSolveWithOptions(tmpReq: $_model.CreateEduProblemSolveRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateEduProblemSolveResponse> {
    tmpReq.validate();
    let request = new $_model.CreateEduProblemSolveShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "query", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.queryShrink)) {
      body["query"] = request.queryShrink;
    }

    if (!$dara.isNull(request.requestId)) {
      body["requestId"] = request.requestId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEduProblemSolve",
      version: "2026-11-02",
      protocol: "HTTPS",
      pathname: `/v1/problem/solve/stream`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateEduProblemSolveResponse>(await this.callApi(params, req, runtime), new $_model.CreateEduProblemSolveResponse({}));
  }

  /**
   * 通过图片URL或Base64编码接收题目，返回解题过程和结果。
   * 
   * @remarks
   * ## 请求说明
   * - 本接口支持通过单张题目图片的URL或Base64编码进行解题请求。
   * - 支持处理JPEG、JPG、PNG格式的图片，且图片大小不超过10MB，像素总数不超过260万。
   * - 请求必须携带`request_id`字段，用于链路关联和对账；建议使用UUID以保证唯一性。
   * - `Authorization`头部需包含有效的`appKey`，采用`Bearer <appKey>`格式。
   * - 接口响应为SSE流式数据，客户端应逐事件读取并解析，不得等待连接关闭后整体读取。
   * - 成功响应包括`message`（过程态全量解题快照）和`complete`（最终完整结果）两种事件类型。
   * - 错误处理分为建流前与建流后两个阶段，根据错误码及`retryable`字段决定是否重试。
   * - 客户端超时设置建议不低于3分钟，并确保代理层不会缓存SSE响应或提前关闭长连接。
   * 
   * @param request - CreateEduProblemSolveRequest
   * @returns CreateEduProblemSolveResponse
   */
  async createEduProblemSolve(request: $_model.CreateEduProblemSolveRequest): Promise<$_model.CreateEduProblemSolveResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEduProblemSolveWithOptions(request, headers, runtime);
  }

  /**
   * 查询批改进度、增量结果、终态结果及 Token 用量
   * 
   * @param request - GetEduHomeworkCorrectionResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEduHomeworkCorrectionResultResponse
   */
  async getEduHomeworkCorrectionResultWithOptions(request: $_model.GetEduHomeworkCorrectionResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEduHomeworkCorrectionResultResponse> {
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
      action: "GetEduHomeworkCorrectionResult",
      version: "2026-11-02",
      protocol: "HTTPS",
      pathname: `/v1/homework/correct/result`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEduHomeworkCorrectionResultResponse>(await this.callApi(params, req, runtime), new $_model.GetEduHomeworkCorrectionResultResponse({}));
  }

  /**
   * 查询批改进度、增量结果、终态结果及 Token 用量
   * 
   * @param request - GetEduHomeworkCorrectionResultRequest
   * @returns GetEduHomeworkCorrectionResultResponse
   */
  async getEduHomeworkCorrectionResult(request: $_model.GetEduHomeworkCorrectionResultRequest): Promise<$_model.GetEduHomeworkCorrectionResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEduHomeworkCorrectionResultWithOptions(request, headers, runtime);
  }

  /**
   * 千问教育API开通状态查询
   * 
   * @param request - GetQwenEduApiActivationStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQwenEduApiActivationStatusResponse
   */
  async getQwenEduApiActivationStatusWithOptions(request: $_model.GetQwenEduApiActivationStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetQwenEduApiActivationStatusResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQwenEduApiActivationStatus",
      version: "2026-11-02",
      protocol: "HTTPS",
      pathname: `/v1/service/activation/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQwenEduApiActivationStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetQwenEduApiActivationStatusResponse({}));
  }

  /**
   * 千问教育API开通状态查询
   * 
   * @param request - GetQwenEduApiActivationStatusRequest
   * @returns GetQwenEduApiActivationStatusResponse
   */
  async getQwenEduApiActivationStatus(request: $_model.GetQwenEduApiActivationStatusRequest): Promise<$_model.GetQwenEduApiActivationStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQwenEduApiActivationStatusWithOptions(request, headers, runtime);
  }

}
