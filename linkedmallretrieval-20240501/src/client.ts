// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AISearchQuery extends $tea.Model {
  /**
   * @example
   * active
   */
  card?: string;
  /**
   * @example
   * 今年五一假期放假时间表
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      card: 'card',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      card: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AISearchResult extends $tea.Model {
  header?: EventHeader;
  payload?: string;
  /**
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: EventHeader,
      payload: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventHeader extends $tea.Model {
  /**
   * @example
   * on_common_search_stream
   */
  event?: string;
  /**
   * @example
   * ff3de49-cedc-47ea-ba3c-8456acd345d8
   */
  eventId?: string;
  /**
   * @example
   * 55c2349-cedc-47ea-ba3c-8456acd6c7d8
   */
  requestId?: string;
  /**
   * @example
   * 1403
   */
  responseTime?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'event',
      eventId: 'eventId',
      requestId: 'requestId',
      responseTime: 'responseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventId: 'string',
      requestId: 'string',
      responseTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AISearchRequest extends $tea.Model {
  /**
   * @example
   * active
   */
  card?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 今年五一假期放假时间表
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      card: 'card',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      card: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AISearchResponseBody extends $tea.Model {
  header?: AISearchResponseBodyHeader;
  payload?: string;
  /**
   * @example
   * D016A23D-738A-5209-A91A-6145845C5A23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: AISearchResponseBodyHeader,
      payload: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AISearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AISearchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AISearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AISearchV2Request extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  query?: string;
  /**
   * @example
   * 14199B5E-5906-52BD-800D-900268AEC9F6
   */
  sessionId?: string;
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
      sessionId: 'sessionId',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      sessionId: 'string',
      timeRange: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AISearchV2ResponseBody extends $tea.Model {
  header?: AISearchV2ResponseBodyHeader;
  payload?: string;
  /**
   * @example
   * D016A23D-738A-5209-A91A-6145845C5A23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: AISearchV2ResponseBodyHeader,
      payload: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AISearchV2Response extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AISearchV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AISearchV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AISearchResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * on_common_search_stream
   */
  event?: string;
  /**
   * @example
   * ff3de49-cedc-47ea-ba3c-8456acd345d8
   */
  eventId?: string;
  /**
   * @example
   * D4F6D088-EDE9-5823-9E66-22603937A40B
   */
  requestId?: string;
  /**
   * @example
   * 1403
   */
  responseTime?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'event',
      eventId: 'eventId',
      requestId: 'requestId',
      responseTime: 'responseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventId: 'string',
      requestId: 'string',
      responseTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AISearchV2ResponseBodyHeader extends $tea.Model {
  /**
   * @example
   * on_common_search_stream
   */
  event?: string;
  /**
   * @example
   * ff3de49-cedc-47ea-ba3c-8456acd345d8
   */
  eventId?: string;
  /**
   * @example
   * 1403
   */
  responseTime?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'event',
      eventId: 'eventId',
      responseTime: 'responseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventId: 'string',
      responseTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("linkedmallretrieval", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * AI搜索
   * 
   * @param request - AISearchRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AISearchResponse
   */
  async aISearchWithOptions(request: AISearchRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AISearchResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.card)) {
      query["card"] = request.card;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AISearch",
      version: "2024-05-01",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v1/linkedRetrieval/commands/aiSearch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AISearchResponse>(await this.callApi(params, req, runtime), new AISearchResponse({}));
  }

  /**
   * AI搜索
   * 
   * @param request - AISearchRequest
   * @returns AISearchResponse
   */
  async aISearch(request: AISearchRequest): Promise<AISearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aISearchWithOptions(request, headers, runtime);
  }

  /**
   * 提供通用检索与检索后处理的多阶段优化结果，为开放域QA提供信源
   * 
   * @param request - AISearchV2Request
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AISearchV2Response
   */
  async aISearchV2WithOptions(request: AISearchV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AISearchV2Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["sessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.timeRange)) {
      query["timeRange"] = request.timeRange;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AISearchV2",
      version: "2024-05-01",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-entry/v2/linkedRetrieval/commands/aiSearch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AISearchV2Response>(await this.callApi(params, req, runtime), new AISearchV2Response({}));
  }

  /**
   * 提供通用检索与检索后处理的多阶段优化结果，为开放域QA提供信源
   * 
   * @param request - AISearchV2Request
   * @returns AISearchV2Response
   */
  async aISearchV2(request: AISearchV2Request): Promise<AISearchV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aISearchV2WithOptions(request, headers, runtime);
  }

}
