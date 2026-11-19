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
    this._productId = "IQS";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
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
   * Describes how to invoke the multi-stage streaming API V3 for general search by using the Alibaba Cloud OpenAPI SDK and provides parameter descriptions.
   * 
   * @remarks
   * Provides streaming results in two stages, common_search and post_retrieval, for customers to use on demand. General search results (common_search): the original search results. Covers key fields such as web page title, dynamic summary, body text, source website, and publish time. Post-retrieval processing (post_retrieval): reranks and filters the common_search results from the previous stage by using a rerank model. The mean average precision (mAP) metric for context relevancy of search results is improved by about 5%, and the latency is increased by about 110 ms.
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
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = JSON.parse(resp.event.data);
        yield $dara.cast<$_model.AiSearchResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.AiSearchResponse({}));
      }

    }
  }

  /**
   * Describes how to invoke the multi-stage streaming API V3 for general search by using the Alibaba Cloud OpenAPI SDK and provides parameter descriptions.
   * 
   * @remarks
   * Provides streaming results in two stages, common_search and post_retrieval, for customers to use on demand. General search results (common_search): the original search results. Covers key fields such as web page title, dynamic summary, body text, source website, and publish time. Post-retrieval processing (post_retrieval): reranks and filters the common_search results from the previous stage by using a rerank model. The mean average precision (mAP) metric for context relevancy of search results is improved by about 5%, and the latency is increased by about 110 ms.
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
   * Describes how to invoke the multi-stage streaming API V3 for general search by using the Alibaba Cloud OpenAPI SDK and provides parameter descriptions.
   * 
   * @remarks
   * Provides streaming results in two stages, common_search and post_retrieval, for customers to use on demand. General search results (common_search): the original search results. Covers key fields such as web page title, dynamic summary, body text, source website, and publish time. Post-retrieval processing (post_retrieval): reranks and filters the common_search results from the previous stage by using a rerank model. The mean average precision (mAP) metric for context relevancy of search results is improved by about 5%, and the latency is increased by about 110 ms.
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
   * Performs general natural language queries.
   * 
   * @remarks
   * The general API for natural language search.
   * 
   * @param request - CommonQueryBySceneRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommonQueryBySceneResponse
   */
  async commonQueryBySceneWithOptions(request: $_model.CommonQueryBySceneRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CommonQueryBySceneResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CommonQueryByScene",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/amap-function-call-agent/iqs-agent-service/v2/nl/common`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CommonQueryBySceneResponse>(await this.callApi(params, req, runtime), new $_model.CommonQueryBySceneResponse({}));
  }

  /**
   * Performs general natural language queries.
   * 
   * @remarks
   * The general API for natural language search.
   * 
   * @param request - CommonQueryBySceneRequest
   * @returns CommonQueryBySceneResponse
   */
  async commonQueryByScene(request: $_model.CommonQueryBySceneRequest): Promise<$_model.CommonQueryBySceneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.commonQueryBySceneWithOptions(request, headers, runtime);
  }

  /**
   * This topic describes how to call the GenericAdvancedSearch operation by using Alibaba Cloud OpenAPI SDKs and provides parameter descriptions. Compared with GenericSearch, GenericAdvancedSearch provides better recall from authoritative websites and returns up to 40 results, delivering more authoritative and diverse data. The response parameters and format of the enhanced operation are the same as those of GenericAdvancedSearch.
   * 
   * @remarks
   * GenericAdvancedSearch is currently in the testing phase. New specifications will be available for purchase in the future.
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
   * This topic describes how to call the GenericAdvancedSearch operation by using Alibaba Cloud OpenAPI SDKs and provides parameter descriptions. Compared with GenericSearch, GenericAdvancedSearch provides better recall from authoritative websites and returns up to 40 results, delivering more authoritative and diverse data. The response parameters and format of the enhanced operation are the same as those of GenericAdvancedSearch.
   * 
   * @remarks
   * GenericAdvancedSearch is currently in the testing phase. New specifications will be available for purchase in the future.
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
   * Performs a general search.
   * 
   * @param tmpReq - GenericSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenericSearchResponse
   */
  async genericSearchWithOptions(tmpReq: $_model.GenericSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GenericSearchResponse> {
    tmpReq.validate();
    let request = new $_model.GenericSearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.advancedParams)) {
      request.advancedParamsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.advancedParams, "advancedParams", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.advancedParamsShrink)) {
      query["advancedParams"] = request.advancedParamsShrink;
    }

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

    if (!$dara.isNull(request.returnRichMainBody)) {
      query["returnRichMainBody"] = request.returnRichMainBody;
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
   * Performs a general search.
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
   * Queries the daily usage of the information query service API.
   * 
   * @param request - GetIqsUsageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIqsUsageResponse
   */
  async getIqsUsageWithOptions(request: $_model.GetIqsUsageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetIqsUsageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.callerId)) {
      query["callerId"] = request.callerId;
    }

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
   * Queries the daily usage of the information query service API.
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
   * Searches for global information by using the Global Edition search.
   * 
   * @remarks
   * This topic describes how to use the Global Edition search (GlobalSearch) and provides parameter descriptions.
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
   * Searches for global information by using the Global Edition search.
   * 
   * @remarks
   * This topic describes how to use the Global Edition search (GlobalSearch) and provides parameter descriptions.
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
   * Provides medical Q&A.
   * 
   * @param request - MedicalAnswerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MedicalAnswerResponse
   */
  async medicalAnswerWithOptions(request: $_model.MedicalAnswerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MedicalAnswerResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MedicalAnswer",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v1/iqs/domain/medical/answer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MedicalAnswerResponse>(await this.callApi(params, req, runtime), new $_model.MedicalAnswerResponse({}));
  }

  /**
   * Provides medical Q&A.
   * 
   * @param request - MedicalAnswerRequest
   * @returns MedicalAnswerResponse
   */
  async medicalAnswer(request: $_model.MedicalAnswerRequest): Promise<$_model.MedicalAnswerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.medicalAnswerWithOptions(request, headers, runtime);
  }

  /**
   * Queries the health graph.
   * 
   * @param request - MedicalKnowledgeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MedicalKnowledgeResponse
   */
  async medicalKnowledgeWithOptions(request: $_model.MedicalKnowledgeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MedicalKnowledgeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MedicalKnowledge",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v1/iqs/domain/medical/know`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MedicalKnowledgeResponse>(await this.callApi(params, req, runtime), new $_model.MedicalKnowledgeResponse({}));
  }

  /**
   * Queries the health graph.
   * 
   * @param request - MedicalKnowledgeRequest
   * @returns MedicalKnowledgeResponse
   */
  async medicalKnowledge(request: $_model.MedicalKnowledgeRequest): Promise<$_model.MedicalKnowledgeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.medicalKnowledgeWithOptions(request, headers, runtime);
  }

  /**
   * Performs a multimodal search.
   * 
   * @param request - MultimodalSearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MultimodalSearchResponse
   */
  async multimodalSearchWithOptions(request: $_model.MultimodalSearchRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.MultimodalSearchResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "MultimodalSearch",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v1/iqs/multimodal/unified`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.MultimodalSearchResponse>(await this.callApi(params, req, runtime), new $_model.MultimodalSearchResponse({}));
  }

  /**
   * Performs a multimodal search.
   * 
   * @param request - MultimodalSearchRequest
   * @returns MultimodalSearchResponse
   */
  async multimodalSearch(request: $_model.MultimodalSearchRequest): Promise<$_model.MultimodalSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.multimodalSearchWithOptions(request, headers, runtime);
  }

  /**
   * This topic describes the SearchStream streaming API for intelligent search and AI chat. Based on retrieval augmented generation (RAG) and large language models, this API accepts natural language questions from users and can automatically execute intent recognition, query rewrite, and content generation, and retrieve data from multiple sources. The API uses the Server-Sent Events (SSE) streaming protocol to return data, supporting real-time output of the infer status, reference sources, and token-by-token generated answers. This API is suitable for AI chat and search scenarios that require low latency and high interpretability.
   * 
   * @param request - OmniAnswerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OmniAnswerResponse
   */
  async *omniAnswerWithSSE(request: $_model.OmniAnswerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): AsyncGenerator<$_model.OmniAnswerResponse, any, unknown> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OmniAnswer",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v1/iqs/answer/omni/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    let sseResp = await this.callSSEApi(params, req, runtime);

    for await (let resp of sseResp) {
      if (!$dara.isNull(resp.event) && !$dara.isNull(resp.event.data)) {
        let data = resp.event.data;
        yield $dara.cast<$_model.OmniAnswerResponse>({
          statusCode: resp.statusCode,
          headers: resp.headers,
          id: resp.event.id,
          event: resp.event.event,
          body: data,
        }, new $_model.OmniAnswerResponse({}));
      }

    }
  }

  /**
   * This topic describes the SearchStream streaming API for intelligent search and AI chat. Based on retrieval augmented generation (RAG) and large language models, this API accepts natural language questions from users and can automatically execute intent recognition, query rewrite, and content generation, and retrieve data from multiple sources. The API uses the Server-Sent Events (SSE) streaming protocol to return data, supporting real-time output of the infer status, reference sources, and token-by-token generated answers. This API is suitable for AI chat and search scenarios that require low latency and high interpretability.
   * 
   * @param request - OmniAnswerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OmniAnswerResponse
   */
  async omniAnswerWithOptions(request: $_model.OmniAnswerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.OmniAnswerResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "OmniAnswer",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v1/iqs/answer/omni/search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "string",
    });
    return $dara.cast<$_model.OmniAnswerResponse>(await this.callApi(params, req, runtime), new $_model.OmniAnswerResponse({}));
  }

  /**
   * This topic describes the SearchStream streaming API for intelligent search and AI chat. Based on retrieval augmented generation (RAG) and large language models, this API accepts natural language questions from users and can automatically execute intent recognition, query rewrite, and content generation, and retrieve data from multiple sources. The API uses the Server-Sent Events (SSE) streaming protocol to return data, supporting real-time output of the infer status, reference sources, and token-by-token generated answers. This API is suitable for AI chat and search scenarios that require low latency and high interpretability.
   * 
   * @param request - OmniAnswerRequest
   * @returns OmniAnswerResponse
   */
  async omniAnswer(request: $_model.OmniAnswerRequest): Promise<$_model.OmniAnswerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.omniAnswerWithOptions(request, headers, runtime);
  }

  /**
   * Retrieves HTML and parses static web page content.
   * 
   * @remarks
   * 1. A request is counted as valid when the HTTP response code of the destination URL is less than 500.
   * 2. If the content type in the response header of the destination URL is application/pdf, the system automatically triggers PDF parsing (the maximum PDF size is 20 MB). This operation is counted as an additional valid request.
   * 3. Trial instructions: During the trial period, the API rate limit is 5 QPS, and the trial quota is 1,000 requests per 30 days.
   * 
   * @param request - ReadPageBasicRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadPageBasicResponse
   */
  async readPageBasicWithOptions(request: $_model.ReadPageBasicRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReadPageBasicResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadPageBasic",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v1/iqs/readpage/basic`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadPageBasicResponse>(await this.callApi(params, req, runtime), new $_model.ReadPageBasicResponse({}));
  }

  /**
   * Retrieves HTML and parses static web page content.
   * 
   * @remarks
   * 1. A request is counted as valid when the HTTP response code of the destination URL is less than 500.
   * 2. If the content type in the response header of the destination URL is application/pdf, the system automatically triggers PDF parsing (the maximum PDF size is 20 MB). This operation is counted as an additional valid request.
   * 3. Trial instructions: During the trial period, the API rate limit is 5 QPS, and the trial quota is 1,000 requests per 30 days.
   * 
   * @param request - ReadPageBasicRequest
   * @returns ReadPageBasicResponse
   */
  async readPageBasic(request: $_model.ReadPageBasicRequest): Promise<$_model.ReadPageBasicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.readPageBasicWithOptions(request, headers, runtime);
  }

  /**
   * Reads HTML and parses web page content in a browser sandbox environment. The operation starts parsing after the resources on the target page are fully loaded. You can adjust the maximum wait time by using the pageTimeout parameter. The overall execution duration is significantly affected by the resource loading status of the target site.
   * 
   * @remarks
   * 1. A request is counted as a valid request when the HTTP status code of the target URL is less than 500.
   * 2. If the Content-Type in the response header of the target URL is application/pdf, the system automatically triggers PDF parsing (the maximum size of a PDF file that can be processed is 20 MB). This operation is counted as an additional valid request.
   * 3. Trial description: During the trial period, the API operation is limited to 5 QPS. The trial quota is 1,000 requests per 30 days.
   * 
   * @param request - ReadPageScrapeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReadPageScrapeResponse
   */
  async readPageScrapeWithOptions(request: $_model.ReadPageScrapeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ReadPageScrapeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReadPageScrape",
      version: "2024-11-11",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v1/iqs/readpage/scrape`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReadPageScrapeResponse>(await this.callApi(params, req, runtime), new $_model.ReadPageScrapeResponse({}));
  }

  /**
   * Reads HTML and parses web page content in a browser sandbox environment. The operation starts parsing after the resources on the target page are fully loaded. You can adjust the maximum wait time by using the pageTimeout parameter. The overall execution duration is significantly affected by the resource loading status of the target site.
   * 
   * @remarks
   * 1. A request is counted as a valid request when the HTTP status code of the target URL is less than 500.
   * 2. If the Content-Type in the response header of the target URL is application/pdf, the system automatically triggers PDF parsing (the maximum size of a PDF file that can be processed is 20 MB). This operation is counted as an additional valid request.
   * 3. Trial description: During the trial period, the API operation is limited to 5 QPS. The trial quota is 1,000 requests per 30 days.
   * 
   * @param request - ReadPageScrapeRequest
   * @returns ReadPageScrapeResponse
   */
  async readPageScrape(request: $_model.ReadPageScrapeRequest): Promise<$_model.ReadPageScrapeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.readPageScrapeWithOptions(request, headers, runtime);
  }

  /**
   * Provides the Tongxiao unified search API to quickly and easily integrate web-wide general search capabilities.
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
   * Provides the Tongxiao unified search API to quickly and easily integrate web-wide general search capabilities.
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
