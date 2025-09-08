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
    this._endpoint = this.getEndpoint("iqs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * AI搜索流式接口
   * 
   * @param request - AiSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AiSearchResponse
   */
  async *aiSearchWithSSE(request: $_model.AiSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.AiSearchResponse, any, unknown> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["timeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AiSearch",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v3/linkedRetrieval/commands/aiSearch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      let data = JSON.parse(resp.event.data);
      yield $dara.cast<$_model.AiSearchResponse>({
        statusCode: resp.statusCode,
        headers: resp.headers,
        body: {
          ...data,
          RequestId: resp.event.id,
          Message: resp.event.event,
        },
      }, new $_model.AiSearchResponse({}));
    }
  }

  /**
   * AI搜索流式接口
   * 
   * @param request - AiSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AiSearchResponse
   */
  async aiSearchWithOptions(request: $_model.AiSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.AiSearchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["timeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AiSearch",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v3/linkedRetrieval/commands/aiSearch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AiSearchResponse>(await this.callApi(params, req, runtime), new $_model.AiSearchResponse({}));
  }

  /**
   * AI搜索流式接口
   * 
   * @param request - AiSearchRequest
   * @returns AiSearchResponse
   */
  async aiSearch(request: $_model.AiSearchRequest): Promise<$_model.AiSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aiSearchWithOptions(request, headers, runtime);
  }

  /**
   * 增强版通用搜索
   * 
   * @param request - GenericAdvancedSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenericAdvancedSearchResponse
   */
  async genericAdvancedSearchWithOptions(request: $_model.GenericAdvancedSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenericAdvancedSearchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["timeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenericAdvancedSearch",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v2/linkedRetrieval/commands/genericAdvancedSearch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenericAdvancedSearchResponse>(await this.callApi(params, req, runtime), new $_model.GenericAdvancedSearchResponse({}));
  }

  /**
   * 增强版通用搜索
   * 
   * @param request - GenericAdvancedSearchRequest
   * @returns GenericAdvancedSearchResponse
   */
  async genericAdvancedSearch(request: $_model.GenericAdvancedSearchRequest): Promise<$_model.GenericAdvancedSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.genericAdvancedSearchWithOptions(request, headers, runtime);
  }

  /**
   * 通用搜索
   * 
   * @param request - GenericSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenericSearchResponse
   */
  async genericSearchWithOptions(request: $_model.GenericSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenericSearchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableRerank)) {
      query["enableRerank"] = request.enableRerank;
    }

    if (!$dara.isNull(request.industry)) {
      query["industry"] = request.industry;
    }

    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.returnMainText)) {
      query["returnMainText"] = request.returnMainText;
    }

    if (!$dara.isNull(request.returnMarkdownText)) {
      query["returnMarkdownText"] = request.returnMarkdownText;
    }

    if (!$dara.isNull(request.returnSummary)) {
      query["returnSummary"] = request.returnSummary;
    }

    if (!$dara.isNull(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["timeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenericSearch",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v2/linkedRetrieval/commands/genericSearch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GenericSearchResponse>(await this.callApi(params, req, runtime), new $_model.GenericSearchResponse({}));
  }

  /**
   * 通用搜索
   * 
   * @param request - GenericSearchRequest
   * @returns GenericSearchResponse
   */
  async genericSearch(request: $_model.GenericSearchRequest): Promise<$_model.GenericSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.genericSearchWithOptions(request, headers, runtime);
  }

  /**
   * 信息查询服务接口日维度使用量查询
   * 
   * @param request - GetIqsUsageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIqsUsageResponse
   */
  async getIqsUsageWithOptions(request: $_model.GetIqsUsageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIqsUsageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIqsUsage",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/v1/iqs/usage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIqsUsageResponse>(await this.callApi(params, req, runtime), new $_model.GetIqsUsageResponse({}));
  }

  /**
   * 信息查询服务接口日维度使用量查询
   * 
   * @param request - GetIqsUsageRequest
   * @returns GetIqsUsageResponse
   */
  async getIqsUsage(request: $_model.GetIqsUsageRequest): Promise<$_model.GetIqsUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getIqsUsageWithOptions(request, headers, runtime);
  }

  /**
   * 通晓搜索-出海版(全球信息搜索)
   * 
   * @param request - GlobalSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalSearchResponse
   */
  async globalSearchWithOptions(request: $_model.GlobalSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalSearchResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.page)) {
      query["page"] = request.page;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["query"] = request.query;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["timeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GlobalSearch",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v1/iqs/search/global`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalSearchResponse>(await this.callApi(params, req, runtime), new $_model.GlobalSearchResponse({}));
  }

  /**
   * 通晓搜索-出海版(全球信息搜索)
   * 
   * @param request - GlobalSearchRequest
   * @returns GlobalSearchResponse
   */
  async globalSearch(request: $_model.GlobalSearchRequest): Promise<$_model.GlobalSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalSearchWithOptions(request, headers, runtime);
  }

  /**
   * 通晓统一搜索API
   * 
   * @param request - UnifiedSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnifiedSearchResponse
   */
  async unifiedSearchWithOptions(request: $_model.UnifiedSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.UnifiedSearchResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UnifiedSearch",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v1/iqs/search/unified`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.UnifiedSearchResponse>(await this.callApi(params, req, runtime), new $_model.UnifiedSearchResponse({}));
  }

  /**
   * 通晓统一搜索API
   * 
   * @param request - UnifiedSearchRequest
   * @returns UnifiedSearchResponse
   */
  async unifiedSearch(request: $_model.UnifiedSearchRequest): Promise<$_model.UnifiedSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.unifiedSearchWithOptions(request, headers, runtime);
  }

}
