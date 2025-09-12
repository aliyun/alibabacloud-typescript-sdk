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
    this._endpoint = this.getEndpoint("tingwu", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建听悟任务
   * 
   * @param request - CreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(request: $_model.CreateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.operation)) {
      query["operation"] = request.operation;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.input)) {
      body["Input"] = request.input;
    }

    if (!$dara.isNull(request.parameters)) {
      body["Parameters"] = request.parameters;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/tasks`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTaskResponse>(await this.callApi(params, req, runtime), new $_model.CreateTaskResponse({}));
  }

  /**
   * 创建听悟任务
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(request: $_model.CreateTaskRequest): Promise<$_model.CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(request, headers, runtime);
  }

  /**
   * 创建热词词表
   * 
   * @param request - CreateTranscriptionPhrasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTranscriptionPhrasesResponse
   */
  async createTranscriptionPhrasesWithOptions(request: $_model.CreateTranscriptionPhrasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateTranscriptionPhrasesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.wordWeights)) {
      body["WordWeights"] = request.wordWeights;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new $_model.CreateTranscriptionPhrasesResponse({}));
  }

  /**
   * 创建热词词表
   * 
   * @param request - CreateTranscriptionPhrasesRequest
   * @returns CreateTranscriptionPhrasesResponse
   */
  async createTranscriptionPhrases(request: $_model.CreateTranscriptionPhrasesRequest): Promise<$_model.CreateTranscriptionPhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTranscriptionPhrasesWithOptions(request, headers, runtime);
  }

  /**
   * 删除词表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTranscriptionPhrasesResponse
   */
  async deleteTranscriptionPhrasesWithOptions(PhraseId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DeleteTranscriptionPhrasesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases/${$dara.URL.percentEncode(PhraseId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DeleteTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new $_model.DeleteTranscriptionPhrasesResponse({}));
  }

  /**
   * 删除词表
   * @returns DeleteTranscriptionPhrasesResponse
   */
  async deleteTranscriptionPhrases(PhraseId: string): Promise<$_model.DeleteTranscriptionPhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTranscriptionPhrasesWithOptions(PhraseId, headers, runtime);
  }

  /**
   * 查询听悟任务信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskInfoResponse
   */
  async getTaskInfoWithOptions(TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTaskInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTaskInfo",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/tasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTaskInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetTaskInfoResponse({}));
  }

  /**
   * 查询听悟任务信息
   * @returns GetTaskInfoResponse
   */
  async getTaskInfo(TaskId: string): Promise<$_model.GetTaskInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskInfoWithOptions(TaskId, headers, runtime);
  }

  /**
   * 查询热词词表信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTranscriptionPhrasesResponse
   */
  async getTranscriptionPhrasesWithOptions(PhraseId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTranscriptionPhrasesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases/${$dara.URL.percentEncode(PhraseId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new $_model.GetTranscriptionPhrasesResponse({}));
  }

  /**
   * 查询热词词表信息
   * @returns GetTranscriptionPhrasesResponse
   */
  async getTranscriptionPhrases(PhraseId: string): Promise<$_model.GetTranscriptionPhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTranscriptionPhrasesWithOptions(PhraseId, headers, runtime);
  }

  /**
   * 列举用户所有热词词表信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTranscriptionPhrasesResponse
   */
  async listTranscriptionPhrasesWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListTranscriptionPhrasesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new $_model.ListTranscriptionPhrasesResponse({}));
  }

  /**
   * 列举用户所有热词词表信息
   * @returns ListTranscriptionPhrasesResponse
   */
  async listTranscriptionPhrases(): Promise<$_model.ListTranscriptionPhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTranscriptionPhrasesWithOptions(headers, runtime);
  }

  /**
   * 更新热词词表
   * 
   * @param request - UpdateTranscriptionPhrasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTranscriptionPhrasesResponse
   */
  async updateTranscriptionPhrasesWithOptions(PhraseId: string, request: $_model.UpdateTranscriptionPhrasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UpdateTranscriptionPhrasesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.wordWeights)) {
      body["WordWeights"] = request.wordWeights;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTranscriptionPhrases",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/openapi/tingwu/v2/resources/phrases/${$dara.URL.percentEncode(PhraseId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdateTranscriptionPhrasesResponse>(await this.callApi(params, req, runtime), new $_model.UpdateTranscriptionPhrasesResponse({}));
  }

  /**
   * 更新热词词表
   * 
   * @param request - UpdateTranscriptionPhrasesRequest
   * @returns UpdateTranscriptionPhrasesResponse
   */
  async updateTranscriptionPhrases(PhraseId: string, request: $_model.UpdateTranscriptionPhrasesRequest): Promise<$_model.UpdateTranscriptionPhrasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTranscriptionPhrasesWithOptions(PhraseId, request, headers, runtime);
  }

}
