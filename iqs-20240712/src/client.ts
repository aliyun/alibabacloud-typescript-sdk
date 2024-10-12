// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AgentBaseQuery extends $tea.Model {
  query?: string;
  static names(): { [key: string]: string } {
    return {
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResult extends $tea.Model {
  data?: QueryResultData[];
  errorCode?: string;
  errorMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryResultData },
      errorCode: 'string',
      errorMessage: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAttractionsRequest extends $tea.Model {
  body?: AgentBaseQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AgentBaseQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAttractionsResponseBody extends $tea.Model {
  queryResult?: QueryResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ECB2144C-E277-5434-80E6-12D26678D364
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResult: 'queryResult',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: QueryResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryAttractionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryAttractionsResponseBody;
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
      body: QueryAttractionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelsRequest extends $tea.Model {
  body?: AgentBaseQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AgentBaseQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelsResponseBody extends $tea.Model {
  queryResult?: QueryResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 78032F8B-0157-53F9-B1A8-3BD86ADE38D0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResult: 'queryResult',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: QueryResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryHotelsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryHotelsResponseBody;
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
      body: QueryHotelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRestaurantsRequest extends $tea.Model {
  body?: AgentBaseQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: AgentBaseQuery,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRestaurantsResponseBody extends $tea.Model {
  queryResult?: QueryResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D78E16C0-4D44-5065-BFF7-127F7859F687
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queryResult: 'queryResult',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: QueryResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRestaurantsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryRestaurantsResponseBody;
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
      body: QueryRestaurantsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResultDataImages extends $tea.Model {
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      title: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResultDataMetadata extends $tea.Model {
  businessArea?: string;
  dailyOpeningHours?: string;
  mainTag?: string;
  phone?: string;
  score?: string;
  weeklyOpeningDays?: string;
  static names(): { [key: string]: string } {
    return {
      businessArea: 'businessArea',
      dailyOpeningHours: 'dailyOpeningHours',
      mainTag: 'mainTag',
      phone: 'phone',
      score: 'score',
      weeklyOpeningDays: 'weeklyOpeningDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessArea: 'string',
      dailyOpeningHours: 'string',
      mainTag: 'string',
      phone: 'string',
      score: 'string',
      weeklyOpeningDays: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResultData extends $tea.Model {
  address?: string;
  cityCode?: string;
  cityName?: string;
  districtCode?: string;
  districtName?: string;
  id?: string;
  images?: QueryResultDataImages[];
  latitude?: string;
  longitude?: string;
  metadata?: QueryResultDataMetadata;
  name?: string;
  provinceCode?: string;
  provinceName?: string;
  typeCode?: string;
  types?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      cityCode: 'cityCode',
      cityName: 'cityName',
      districtCode: 'districtCode',
      districtName: 'districtName',
      id: 'id',
      images: 'images',
      latitude: 'latitude',
      longitude: 'longitude',
      metadata: 'metadata',
      name: 'name',
      provinceCode: 'provinceCode',
      provinceName: 'provinceName',
      typeCode: 'typeCode',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      cityCode: 'string',
      cityName: 'string',
      districtCode: 'string',
      districtName: 'string',
      id: 'string',
      images: { 'type': 'array', 'itemType': QueryResultDataImages },
      latitude: 'string',
      longitude: 'string',
      metadata: QueryResultDataMetadata,
      name: 'string',
      provinceCode: 'string',
      provinceName: 'string',
      typeCode: 'string',
      types: 'string',
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
    this._endpoint = this.getEndpoint("iqs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 景点查询
   * 
   * @param request - QueryAttractionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAttractionsResponse
   */
  async queryAttractionsWithOptions(request: QueryAttractionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryAttractionsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "QueryAttractions",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/amap-function-call-agent/iqs-agent-service/v1/nl/attractions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryAttractionsResponse>(await this.callApi(params, req, runtime), new QueryAttractionsResponse({}));
  }

  /**
   * 景点查询
   * 
   * @param request - QueryAttractionsRequest
   * @returns QueryAttractionsResponse
   */
  async queryAttractions(request: QueryAttractionsRequest): Promise<QueryAttractionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAttractionsWithOptions(request, headers, runtime);
  }

  /**
   * 餐厅查询
   * 
   * @param request - QueryHotelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryHotelsResponse
   */
  async queryHotelsWithOptions(request: QueryHotelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryHotelsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "QueryHotels",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/amap-function-call-agent/iqs-agent-service/v1/nl/hotels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryHotelsResponse>(await this.callApi(params, req, runtime), new QueryHotelsResponse({}));
  }

  /**
   * 餐厅查询
   * 
   * @param request - QueryHotelsRequest
   * @returns QueryHotelsResponse
   */
  async queryHotels(request: QueryHotelsRequest): Promise<QueryHotelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryHotelsWithOptions(request, headers, runtime);
  }

  /**
   * 餐厅查询
   * 
   * @param request - QueryRestaurantsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryRestaurantsResponse
   */
  async queryRestaurantsWithOptions(request: QueryRestaurantsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryRestaurantsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "QueryRestaurants",
      version: "2024-07-12",
      protocol: "HTTPS",
      pathname: `/amap-function-call-agent/iqs-agent-service/v1/nl/restaurants`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryRestaurantsResponse>(await this.callApi(params, req, runtime), new QueryRestaurantsResponse({}));
  }

  /**
   * 餐厅查询
   * 
   * @param request - QueryRestaurantsRequest
   * @returns QueryRestaurantsResponse
   */
  async queryRestaurants(request: QueryRestaurantsRequest): Promise<QueryRestaurantsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryRestaurantsWithOptions(request, headers, runtime);
  }

}
