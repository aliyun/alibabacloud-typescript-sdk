// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GridQueryRequest extends $tea.Model {
  element?: string;
  forecastTimestamp?: string;
  latitude?: number;
  longitude?: number;
  pageNo?: number;
  pageSize?: number;
  product?: string;
  reportTimestamp?: string;
  static names(): { [key: string]: string } {
    return {
      element: 'element',
      forecastTimestamp: 'forecastTimestamp',
      latitude: 'latitude',
      longitude: 'longitude',
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      product: 'product',
      reportTimestamp: 'reportTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      element: 'string',
      forecastTimestamp: 'string',
      latitude: 'number',
      longitude: 'number',
      pageNo: 'number',
      pageSize: 'number',
      product: 'string',
      reportTimestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GridQueryResponseBody extends $tea.Model {
  code?: number;
  message?: string;
  module?: GridQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      module: GridQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GridQueryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GridQueryResponseBody;
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
      body: GridQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GridQueryResponseBodyModuleList extends $tea.Model {
  dataType?: string;
  element?: string;
  elementUnit?: string;
  forecastTimestamp?: string;
  latitude?: number;
  longitude?: number;
  reportTimestamp?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      dataType: 'dataType',
      element: 'element',
      elementUnit: 'elementUnit',
      forecastTimestamp: 'forecastTimestamp',
      latitude: 'latitude',
      longitude: 'longitude',
      reportTimestamp: 'reportTimestamp',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      element: 'string',
      elementUnit: 'string',
      forecastTimestamp: 'string',
      latitude: 'number',
      longitude: 'number',
      reportTimestamp: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GridQueryResponseBodyModule extends $tea.Model {
  list?: GridQueryResponseBodyModuleList[];
  pageNo?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      pageNo: 'pageNo',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GridQueryResponseBodyModuleList },
      pageNo: 'number',
      pageSize: 'number',
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
    this._endpoint = this.getEndpoint("aiearth-meteorology", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async gridQueryWithOptions(dataType: string, request: GridQueryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GridQueryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.element)) {
      query["element"] = request.element;
    }

    if (!Util.isUnset(request.forecastTimestamp)) {
      query["forecastTimestamp"] = request.forecastTimestamp;
    }

    if (!Util.isUnset(request.latitude)) {
      query["latitude"] = request.latitude;
    }

    if (!Util.isUnset(request.longitude)) {
      query["longitude"] = request.longitude;
    }

    if (!Util.isUnset(request.pageNo)) {
      query["pageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.product)) {
      query["product"] = request.product;
    }

    if (!Util.isUnset(request.reportTimestamp)) {
      query["reportTimestamp"] = request.reportTimestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GridQuery",
      version: "2021-09-28",
      protocol: "HTTPS",
      pathname: `/grid/${OpenApiUtil.getEncodeParam(dataType)}/v1`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GridQueryResponse>(await this.callApi(params, req, runtime), new GridQueryResponse({}));
  }

  async gridQuery(dataType: string, request: GridQueryRequest): Promise<GridQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.gridQueryWithOptions(dataType, request, headers, runtime);
  }

}
