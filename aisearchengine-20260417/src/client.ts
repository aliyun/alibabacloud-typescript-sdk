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
    this._endpoint = this.getEndpoint("aisearchengine", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * AI搜索
   * 
   * @param request - EngineSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EngineSearchResponse
   */
  async engineSearchWithOptions(request: $_model.EngineSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.EngineSearchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.grey)) {
      body["grey"] = request.grey;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.recall)) {
      body["recall"] = request.recall;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.strategyId)) {
      body["strategyId"] = request.strategyId;
    }

    if (!$dara.isNull(request.user)) {
      body["user"] = request.user;
    }

    if (!$dara.isNull(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EngineSearch",
      version: "2026-04-17",
      protocol: "HTTPS",
      pathname: `/api/v1/platform/app/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.EngineSearchResponse>(await this.callApi(params, req, runtime), new $_model.EngineSearchResponse({}));
  }

  /**
   * AI搜索
   * 
   * @param request - EngineSearchRequest
   * @returns EngineSearchResponse
   */
  async engineSearch(request: $_model.EngineSearchRequest): Promise<$_model.EngineSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.engineSearchWithOptions(request, headers, runtime);
  }

  /**
   * 获取数据集资源 OSS 访问地址
   * 
   * @param request - GetDatasetResourceUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetResourceUrlResponse
   */
  async getDatasetResourceUrlWithOptions(request: $_model.GetDatasetResourceUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetDatasetResourceUrlResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetId)) {
      body["datasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.primaryKey)) {
      body["primaryKey"] = request.primaryKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasetResourceUrl",
      version: "2026-04-17",
      protocol: "HTTPS",
      pathname: `/api/v1/dataset/open/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetDatasetResourceUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetDatasetResourceUrlResponse({}));
  }

  /**
   * 获取数据集资源 OSS 访问地址
   * 
   * @param request - GetDatasetResourceUrlRequest
   * @returns GetDatasetResourceUrlResponse
   */
  async getDatasetResourceUrl(request: $_model.GetDatasetResourceUrlRequest): Promise<$_model.GetDatasetResourceUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetResourceUrlWithOptions(request, headers, runtime);
  }

  /**
   * 提交单条记录导入任务
   * 
   * @param request - ImportDatasetDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ImportDatasetDataResponse
   */
  async importDatasetDataWithOptions(request: $_model.ImportDatasetDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ImportDatasetDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetId)) {
      body["datasetId"] = request.datasetId;
    }

    if (!$dara.isNull(request.records)) {
      body["records"] = request.records;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ImportDatasetData",
      version: "2026-04-17",
      protocol: "HTTPS",
      pathname: `/api/v1/dataset/open/upsert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ImportDatasetDataResponse>(await this.callApi(params, req, runtime), new $_model.ImportDatasetDataResponse({}));
  }

  /**
   * 提交单条记录导入任务
   * 
   * @param request - ImportDatasetDataRequest
   * @returns ImportDatasetDataResponse
   */
  async importDatasetData(request: $_model.ImportDatasetDataRequest): Promise<$_model.ImportDatasetDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.importDatasetDataWithOptions(request, headers, runtime);
  }

  /**
   * AI问答对话
   * 
   * @param request - QaChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QaChatResponse
   */
  async *qaChatWithSSE(request: $_model.QaChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.QaChatResponse, any, unknown> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.message)) {
      body["message"] = request.message;
    }

    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QaChat",
      version: "2026-04-17",
      protocol: "HTTPS",
      pathname: `/api/v1/platform/app/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.QaChatResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.QaChatResponse({}));
      }

    }
  }

  /**
   * AI问答对话
   * 
   * @param request - QaChatRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QaChatResponse
   */
  async qaChatWithOptions(request: $_model.QaChatRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QaChatResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appId)) {
      body["appId"] = request.appId;
    }

    if (!$dara.isNull(request.message)) {
      body["message"] = request.message;
    }

    if (!$dara.isNull(request.options)) {
      body["options"] = request.options;
    }

    if (!$dara.isNull(request.sessionId)) {
      body["sessionId"] = request.sessionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QaChat",
      version: "2026-04-17",
      protocol: "HTTPS",
      pathname: `/api/v1/platform/app/chat`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QaChatResponse>(await this.callApi(params, req, runtime), new $_model.QaChatResponse({}));
  }

  /**
   * AI问答对话
   * 
   * @param request - QaChatRequest
   * @returns QaChatResponse
   */
  async qaChat(request: $_model.QaChatRequest): Promise<$_model.QaChatResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.qaChatWithOptions(request, headers, runtime);
  }

}
