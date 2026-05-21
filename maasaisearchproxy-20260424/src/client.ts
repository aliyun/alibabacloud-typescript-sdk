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
    this._endpoint = this.getEndpoint("maasaisearchproxy", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 提交单条记录导入任务（通过AccessKey认证）
   * 
   * @param request - OpenDatasetImportDataRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenDatasetImportDataResponse
   */
  async openDatasetImportDataWithOptions(request: $_model.OpenDatasetImportDataRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OpenDatasetImportDataResponse> {
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
      action: "OpenDatasetImportData",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: `/api/v1/dataset/open/upsert`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenDatasetImportDataResponse>(await this.callApi(params, req, runtime), new $_model.OpenDatasetImportDataResponse({}));
  }

  /**
   * 提交单条记录导入任务（通过AccessKey认证）
   * 
   * @param request - OpenDatasetImportDataRequest
   * @returns OpenDatasetImportDataResponse
   */
  async openDatasetImportData(request: $_model.OpenDatasetImportDataRequest): Promise<$_model.OpenDatasetImportDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openDatasetImportDataWithOptions(request, headers, runtime);
  }

  /**
   * 获取数据集资源 OSS 访问地址（通过AccessKey认证）
   * 
   * @param request - OpenDatasetResourceUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenDatasetResourceUrlResponse
   */
  async openDatasetResourceUrlWithOptions(request: $_model.OpenDatasetResourceUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OpenDatasetResourceUrlResponse> {
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
      action: "OpenDatasetResourceUrl",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: `/api/v1/dataset/open/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenDatasetResourceUrlResponse>(await this.callApi(params, req, runtime), new $_model.OpenDatasetResourceUrlResponse({}));
  }

  /**
   * 获取数据集资源 OSS 访问地址（通过AccessKey认证）
   * 
   * @param request - OpenDatasetResourceUrlRequest
   * @returns OpenDatasetResourceUrlResponse
   */
  async openDatasetResourceUrl(request: $_model.OpenDatasetResourceUrlRequest): Promise<$_model.OpenDatasetResourceUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openDatasetResourceUrlWithOptions(request, headers, runtime);
  }

  /**
   * 联网搜API
   * 
   * @param request - WebSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns WebSearchResponse
   */
  async webSearchWithOptions(request: $_model.WebSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.WebSearchResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      body["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.excludeDomain)) {
      body["excludeDomain"] = request.excludeDomain;
    }

    if (!$dara.isNull(request.includeDomain)) {
      body["includeDomain"] = request.includeDomain;
    }

    if (!$dara.isNull(request.limit)) {
      body["limit"] = request.limit;
    }

    if (!$dara.isNull(request.query)) {
      body["query"] = request.query;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    if (!$dara.isNull(request.searchType)) {
      body["searchType"] = request.searchType;
    }

    if (!$dara.isNull(request.startTime)) {
      body["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "WebSearch",
      version: "2026-04-24",
      protocol: "HTTPS",
      pathname: `/api/web-search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.WebSearchResponse>(await this.callApi(params, req, runtime), new $_model.WebSearchResponse({}));
  }

  /**
   * 联网搜API
   * 
   * @param request - WebSearchRequest
   * @returns WebSearchResponse
   */
  async webSearch(request: $_model.WebSearchRequest): Promise<$_model.WebSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.webSearchWithOptions(request, headers, runtime);
  }

}
