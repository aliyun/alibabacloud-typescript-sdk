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
    this._productId = "Searchplat";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "";
  }


  /**
   * 创建语音转录异步任务
   * 
   * @param request - CreateAudioAsrTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAudioAsrTaskResponse
   */
  async createAudioAsrTaskWithOptions(workspaceName: string, serviceId: string, request: $_model.CreateAudioAsrTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAudioAsrTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.input)) {
      body["input"] = request.input;
    }

    if (!$dara.isNull(request.output)) {
      body["output"] = request.output;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAudioAsrTask",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/audio-asr/${serviceId}/async`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAudioAsrTaskResponse>(await this.execute(params, req, runtime), new $_model.CreateAudioAsrTaskResponse({}));
  }

  /**
   * 创建语音转录异步任务
   * 
   * @param request - CreateAudioAsrTaskRequest
   * @returns CreateAudioAsrTaskResponse
   */
  async createAudioAsrTask(workspaceName: string, serviceId: string, request: $_model.CreateAudioAsrTaskRequest): Promise<$_model.CreateAudioAsrTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAudioAsrTaskWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 创建文档解析异步提取任务
   * 
   * @param request - CreateDocumentAnalyzeTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDocumentAnalyzeTaskResponse
   */
  async createDocumentAnalyzeTaskWithOptions(workspaceName: string, serviceId: string, request: $_model.CreateDocumentAnalyzeTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateDocumentAnalyzeTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.document)) {
      body["document"] = request.document;
    }

    if (!$dara.isNull(request.output)) {
      body["output"] = request.output;
    }

    if (!$dara.isNull(request.strategy)) {
      body["strategy"] = request.strategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDocumentAnalyzeTask",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/document-analyze/${serviceId}/async`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateDocumentAnalyzeTaskResponse>(await this.execute(params, req, runtime), new $_model.CreateDocumentAnalyzeTaskResponse({}));
  }

  /**
   * 创建文档解析异步提取任务
   * 
   * @param request - CreateDocumentAnalyzeTaskRequest
   * @returns CreateDocumentAnalyzeTaskResponse
   */
  async createDocumentAnalyzeTask(workspaceName: string, serviceId: string, request: $_model.CreateDocumentAnalyzeTaskRequest): Promise<$_model.CreateDocumentAnalyzeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDocumentAnalyzeTaskWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 创建图片解析异步提取任务
   * 
   * @param request - CreateImageAnalyzeTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateImageAnalyzeTaskResponse
   */
  async createImageAnalyzeTaskWithOptions(workspaceName: string, serviceId: string, request: $_model.CreateImageAnalyzeTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateImageAnalyzeTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.document)) {
      body["document"] = request.document;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateImageAnalyzeTask",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/image-analyze/${serviceId}/async`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateImageAnalyzeTaskResponse>(await this.execute(params, req, runtime), new $_model.CreateImageAnalyzeTaskResponse({}));
  }

  /**
   * 创建图片解析异步提取任务
   * 
   * @param request - CreateImageAnalyzeTaskRequest
   * @returns CreateImageAnalyzeTaskResponse
   */
  async createImageAnalyzeTask(workspaceName: string, serviceId: string, request: $_model.CreateImageAnalyzeTaskRequest): Promise<$_model.CreateImageAnalyzeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createImageAnalyzeTaskWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 创建语音转录异步任务
   * 
   * @param request - CreateVideoSnapshotTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVideoSnapshotTaskResponse
   */
  async createVideoSnapshotTaskWithOptions(workspaceName: string, serviceId: string, request: $_model.CreateVideoSnapshotTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateVideoSnapshotTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.input)) {
      body["input"] = request.input;
    }

    if (!$dara.isNull(request.output)) {
      body["output"] = request.output;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVideoSnapshotTask",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/video-snapshot/${serviceId}/async`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateVideoSnapshotTaskResponse>(await this.execute(params, req, runtime), new $_model.CreateVideoSnapshotTaskResponse({}));
  }

  /**
   * 创建语音转录异步任务
   * 
   * @param request - CreateVideoSnapshotTaskRequest
   * @returns CreateVideoSnapshotTaskResponse
   */
  async createVideoSnapshotTask(workspaceName: string, serviceId: string, request: $_model.CreateVideoSnapshotTaskRequest): Promise<$_model.CreateVideoSnapshotTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVideoSnapshotTaskWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 获取视频截帧异步提取任务状态
   * 
   * @param request - GetAudioAsrTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAudioAsrTaskStatusResponse
   */
  async getAudioAsrTaskStatusWithOptions(workspaceName: string, serviceId: string, request: $_model.GetAudioAsrTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAudioAsrTaskStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAudioAsrTaskStatus",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/audio-asr/${serviceId}/async/task-status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAudioAsrTaskStatusResponse>(await this.execute(params, req, runtime), new $_model.GetAudioAsrTaskStatusResponse({}));
  }

  /**
   * 获取视频截帧异步提取任务状态
   * 
   * @param request - GetAudioAsrTaskStatusRequest
   * @returns GetAudioAsrTaskStatusResponse
   */
  async getAudioAsrTaskStatus(workspaceName: string, serviceId: string, request: $_model.GetAudioAsrTaskStatusRequest): Promise<$_model.GetAudioAsrTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAudioAsrTaskStatusWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 获取文档解析异步提取任务状态
   * 
   * @param request - GetDocumentAnalyzeTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentAnalyzeTaskStatusResponse
   */
  async getDocumentAnalyzeTaskStatusWithOptions(workspaceName: string, serviceId: string, request: $_model.GetDocumentAnalyzeTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentAnalyzeTaskStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentAnalyzeTaskStatus",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/document-analyze/${serviceId}/async/task-status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentAnalyzeTaskStatusResponse>(await this.execute(params, req, runtime), new $_model.GetDocumentAnalyzeTaskStatusResponse({}));
  }

  /**
   * 获取文档解析异步提取任务状态
   * 
   * @param request - GetDocumentAnalyzeTaskStatusRequest
   * @returns GetDocumentAnalyzeTaskStatusResponse
   */
  async getDocumentAnalyzeTaskStatus(workspaceName: string, serviceId: string, request: $_model.GetDocumentAnalyzeTaskStatusRequest): Promise<$_model.GetDocumentAnalyzeTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentAnalyzeTaskStatusWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 文档相关性打分
   * 
   * @param request - GetDocumentRankRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentRankResponse
   */
  async getDocumentRankWithOptions(workspaceName: string, serviceId: string, request: $_model.GetDocumentRankRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentRankResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docs)) {
      body["docs"] = request.docs;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentRank",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/ranker/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentRankResponse>(await this.execute(params, req, runtime), new $_model.GetDocumentRankResponse({}));
  }

  /**
   * 文档相关性打分
   * 
   * @param request - GetDocumentRankRequest
   * @returns GetDocumentRankResponse
   */
  async getDocumentRank(workspaceName: string, serviceId: string, request: $_model.GetDocumentRankRequest): Promise<$_model.GetDocumentRankResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentRankWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 文档切片
   * 
   * @param request - GetDocumentSplitRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDocumentSplitResponse
   */
  async getDocumentSplitWithOptions(workspaceName: string, serviceId: string, request: $_model.GetDocumentSplitRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDocumentSplitResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.document)) {
      body["document"] = request.document;
    }

    if (!$dara.isNull(request.strategy)) {
      body["strategy"] = request.strategy;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDocumentSplit",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/document-split/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDocumentSplitResponse>(await this.execute(params, req, runtime), new $_model.GetDocumentSplitResponse({}));
  }

  /**
   * 文档切片
   * 
   * @param request - GetDocumentSplitRequest
   * @returns GetDocumentSplitResponse
   */
  async getDocumentSplit(workspaceName: string, serviceId: string, request: $_model.GetDocumentSplitRequest): Promise<$_model.GetDocumentSplitResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDocumentSplitWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 向量微调
   * 
   * @param request - GetEmbeddingTuningRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEmbeddingTuningResponse
   */
  async getEmbeddingTuningWithOptions(workspaceName: string, serviceId: string, request: $_model.GetEmbeddingTuningRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetEmbeddingTuningResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.input)) {
      body["input"] = request.input;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEmbeddingTuning",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/embedding-tuning/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetEmbeddingTuningResponse>(await this.execute(params, req, runtime), new $_model.GetEmbeddingTuningResponse({}));
  }

  /**
   * 向量微调
   * 
   * @param request - GetEmbeddingTuningRequest
   * @returns GetEmbeddingTuningResponse
   */
  async getEmbeddingTuning(workspaceName: string, serviceId: string, request: $_model.GetEmbeddingTuningRequest): Promise<$_model.GetEmbeddingTuningResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmbeddingTuningWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 获取图片解析异步提取任务状态
   * 
   * @param request - GetImageAnalyzeTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageAnalyzeTaskStatusResponse
   */
  async getImageAnalyzeTaskStatusWithOptions(workspaceName: string, serviceId: string, request: $_model.GetImageAnalyzeTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageAnalyzeTaskStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageAnalyzeTaskStatus",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/image-analyze/${serviceId}/async/task-status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageAnalyzeTaskStatusResponse>(await this.execute(params, req, runtime), new $_model.GetImageAnalyzeTaskStatusResponse({}));
  }

  /**
   * 获取图片解析异步提取任务状态
   * 
   * @param request - GetImageAnalyzeTaskStatusRequest
   * @returns GetImageAnalyzeTaskStatusResponse
   */
  async getImageAnalyzeTaskStatus(workspaceName: string, serviceId: string, request: $_model.GetImageAnalyzeTaskStatusRequest): Promise<$_model.GetImageAnalyzeTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageAnalyzeTaskStatusWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 图片主体检测
   * 
   * @param request - GetImageObjectDetectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageObjectDetectionResponse
   */
  async getImageObjectDetectionWithOptions(workspaceName: string, serviceId: string, request: $_model.GetImageObjectDetectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetImageObjectDetectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.image)) {
      body["image"] = request.image;
    }

    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImageObjectDetection",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/image-object-detection/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetImageObjectDetectionResponse>(await this.execute(params, req, runtime), new $_model.GetImageObjectDetectionResponse({}));
  }

  /**
   * 图片主体检测
   * 
   * @param request - GetImageObjectDetectionRequest
   * @returns GetImageObjectDetectionResponse
   */
  async getImageObjectDetection(workspaceName: string, serviceId: string, request: $_model.GetImageObjectDetectionRequest): Promise<$_model.GetImageObjectDetectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageObjectDetectionWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 多模态向量化
   * 
   * @param request - GetMultiModalEmbeddingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiModalEmbeddingResponse
   */
  async getMultiModalEmbeddingWithOptions(workspaceName: string, serviceId: string, request: $_model.GetMultiModalEmbeddingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultiModalEmbeddingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.input)) {
      body["input"] = request.input;
    }

    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultiModalEmbedding",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/multi-modal-embedding/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultiModalEmbeddingResponse>(await this.execute(params, req, runtime), new $_model.GetMultiModalEmbeddingResponse({}));
  }

  /**
   * 多模态向量化
   * 
   * @param request - GetMultiModalEmbeddingRequest
   * @returns GetMultiModalEmbeddingResponse
   */
  async getMultiModalEmbedding(workspaceName: string, serviceId: string, request: $_model.GetMultiModalEmbeddingRequest): Promise<$_model.GetMultiModalEmbeddingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMultiModalEmbeddingWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 多模态 Reranker
   * 
   * @param request - GetMultiModalRerankerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMultiModalRerankerResponse
   */
  async getMultiModalRerankerWithOptions(workspaceName: string, serviceId: string, request: $_model.GetMultiModalRerankerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMultiModalRerankerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.docs)) {
      body["docs"] = request.docs;
    }

    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMultiModalReranker",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/multi-modal-reranker/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMultiModalRerankerResponse>(await this.execute(params, req, runtime), new $_model.GetMultiModalRerankerResponse({}));
  }

  /**
   * 多模态 Reranker
   * 
   * @param request - GetMultiModalRerankerRequest
   * @returns GetMultiModalRerankerResponse
   */
  async getMultiModalReranker(workspaceName: string, serviceId: string, request: $_model.GetMultiModalRerankerRequest): Promise<$_model.GetMultiModalRerankerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMultiModalRerankerWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 获取推理结果
   * 
   * @param request - GetPredictionRequest
   * @param headers - GetPredictionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPredictionResponse
   */
  async getPredictionWithOptions(deploymentId: string, request: $_model.GetPredictionRequest, headers: $_model.GetPredictionHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.GetPredictionResponse> {
    request.validate();
    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.token)) {
      realHeaders["Token"] = String(headers.token);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPrediction",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/deployments/${deploymentId}/predict`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.GetPredictionResponse>(await this.execute(params, req, runtime), new $_model.GetPredictionResponse({}));
  }

  /**
   * 获取推理结果
   * 
   * @param request - GetPredictionRequest
   * @returns GetPredictionResponse
   */
  async getPrediction(deploymentId: string, request: $_model.GetPredictionRequest): Promise<$_model.GetPredictionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.GetPredictionHeaders({ });
    return await this.getPredictionWithOptions(deploymentId, request, headers, runtime);
  }

  /**
   * 获取query分析结果
   * 
   * @param request - GetQueryAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueryAnalysisResponse
   */
  async getQueryAnalysisWithOptions(workspaceName: string, serviceId: string, request: $_model.GetQueryAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetQueryAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functions)) {
      body["functions"] = request.functions;
    }

    if (!$dara.isNull(request.history)) {
      body["history"] = request.history;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQueryAnalysis",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/query-analyze/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetQueryAnalysisResponse>(await this.execute(params, req, runtime), new $_model.GetQueryAnalysisResponse({}));
  }

  /**
   * 获取query分析结果
   * 
   * @param request - GetQueryAnalysisRequest
   * @returns GetQueryAnalysisResponse
   */
  async getQueryAnalysis(workspaceName: string, serviceId: string, request: $_model.GetQueryAnalysisRequest): Promise<$_model.GetQueryAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQueryAnalysisWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 文本向量化
   * 
   * @param request - GetTextEmbeddingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextEmbeddingResponse
   */
  async getTextEmbeddingWithOptions(workspaceName: string, serviceId: string, request: $_model.GetTextEmbeddingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTextEmbeddingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.input)) {
      body["input"] = request.input;
    }

    if (!$dara.isNull(request.inputType)) {
      body["input_type"] = request.inputType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextEmbedding",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/text-embedding/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTextEmbeddingResponse>(await this.execute(params, req, runtime), new $_model.GetTextEmbeddingResponse({}));
  }

  /**
   * 文本向量化
   * 
   * @param request - GetTextEmbeddingRequest
   * @returns GetTextEmbeddingResponse
   */
  async getTextEmbedding(workspaceName: string, serviceId: string, request: $_model.GetTextEmbeddingRequest): Promise<$_model.GetTextEmbeddingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextEmbeddingWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 大模型问答
   * 
   * @param request - GetTextGenerationRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextGenerationResponse
   */
  async getTextGenerationWithOptions(workspaceName: string, serviceId: string, request: $_model.GetTextGenerationRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTextGenerationResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.csiLevel)) {
      body["csi_level"] = request.csiLevel;
    }

    if (!$dara.isNull(request.enableSearch)) {
      body["enable_search"] = request.enableSearch;
    }

    if (!$dara.isNull(request.messages)) {
      body["messages"] = request.messages;
    }

    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.stream)) {
      body["stream"] = request.stream;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextGeneration",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/text-generation/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTextGenerationResponse>(await this.execute(params, req, runtime), new $_model.GetTextGenerationResponse({}));
  }

  /**
   * 大模型问答
   * 
   * @param request - GetTextGenerationRequest
   * @returns GetTextGenerationResponse
   */
  async getTextGeneration(workspaceName: string, serviceId: string, request: $_model.GetTextGenerationRequest): Promise<$_model.GetTextGenerationResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextGenerationWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 文本稀疏向量化
   * 
   * @param request - GetTextSparseEmbeddingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTextSparseEmbeddingResponse
   */
  async getTextSparseEmbeddingWithOptions(workspaceName: string, serviceId: string, request: $_model.GetTextSparseEmbeddingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTextSparseEmbeddingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.input)) {
      body["input"] = request.input;
    }

    if (!$dara.isNull(request.inputType)) {
      body["input_type"] = request.inputType;
    }

    if (!$dara.isNull(request.returnToken)) {
      body["return_token"] = request.returnToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTextSparseEmbedding",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/text-sparse-embedding/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTextSparseEmbeddingResponse>(await this.execute(params, req, runtime), new $_model.GetTextSparseEmbeddingResponse({}));
  }

  /**
   * 文本稀疏向量化
   * 
   * @param request - GetTextSparseEmbeddingRequest
   * @returns GetTextSparseEmbeddingResponse
   */
  async getTextSparseEmbedding(workspaceName: string, serviceId: string, request: $_model.GetTextSparseEmbeddingRequest): Promise<$_model.GetTextSparseEmbeddingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTextSparseEmbeddingWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 获取视频截帧异步提取任务状态
   * 
   * @param request - GetVideoSnapshotTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetVideoSnapshotTaskStatusResponse
   */
  async getVideoSnapshotTaskStatusWithOptions(workspaceName: string, serviceId: string, request: $_model.GetVideoSnapshotTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetVideoSnapshotTaskStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetVideoSnapshotTaskStatus",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/video-snapshot/${serviceId}/async/task-status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetVideoSnapshotTaskStatusResponse>(await this.execute(params, req, runtime), new $_model.GetVideoSnapshotTaskStatusResponse({}));
  }

  /**
   * 获取视频截帧异步提取任务状态
   * 
   * @param request - GetVideoSnapshotTaskStatusRequest
   * @returns GetVideoSnapshotTaskStatusResponse
   */
  async getVideoSnapshotTaskStatus(workspaceName: string, serviceId: string, request: $_model.GetVideoSnapshotTaskStatusRequest): Promise<$_model.GetVideoSnapshotTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVideoSnapshotTaskStatusWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

  /**
   * 联网搜索
   * 
   * @param request - GetWebSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWebSearchResponse
   */
  async getWebSearchWithOptions(workspaceName: string, serviceId: string, request: $_model.GetWebSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetWebSearchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contentType)) {
      body["content_type"] = request.contentType;
    }

    if (!$dara.isNull(request.history)) {
      body["history"] = request.history;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.queryRewrite)) {
      body["query_rewrite"] = request.queryRewrite;
    }

    if (!$dara.isNull(request.topK)) {
      body["top_k"] = request.topK;
    }

    if (!$dara.isNull(request.way)) {
      body["way"] = request.way;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWebSearch",
      version: "2024-05-29",
      protocol: "HTTPS",
      pathname: `/v3/openapi/workspaces/${workspaceName}/web-search/${serviceId}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetWebSearchResponse>(await this.execute(params, req, runtime), new $_model.GetWebSearchResponse({}));
  }

  /**
   * 联网搜索
   * 
   * @param request - GetWebSearchRequest
   * @returns GetWebSearchResponse
   */
  async getWebSearch(workspaceName: string, serviceId: string, request: $_model.GetWebSearchRequest): Promise<$_model.GetWebSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWebSearchWithOptions(workspaceName, serviceId, request, headers, runtime);
  }

}
