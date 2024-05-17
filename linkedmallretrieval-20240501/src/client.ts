// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AISearchQuery extends $tea.Model {
  card?: string;
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
  event?: string;
  eventId?: string;
  requestId?: string;
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
  card?: string;
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

export class AISearchResponseBodyHeader extends $tea.Model {
  event?: string;
  eventId?: string;
  requestId?: string;
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
   * @summary AI搜索
   *
   * @param request AISearchRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return AISearchResponse
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
   * @summary AI搜索
   *
   * @param request AISearchRequest
   * @return AISearchResponse
   */
  async aISearch(request: AISearchRequest): Promise<AISearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.aISearchWithOptions(request, headers, runtime);
  }

}
