// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class TestStruct extends $tea.Model {
  testString?: TestStructTestString;
  static names(): { [key: string]: string } {
    return {
      testString: 'testString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      testString: TestStructTestString,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiMetaRequest extends $tea.Model {
  apiName?: string;
  productName?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'apiName',
      productName: 'productName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      productName: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiMetaResponseBody extends $tea.Model {
  api?: string;
  description?: string;
  errorCodes?: string;
  extraInfo?: string;
  method?: string;
  params?: string;
  path?: string;
  protocol?: string;
  request?: string;
  response?: string;
  responseDoc?: string;
  summary?: string;
  timeout?: number;
  title?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'api',
      description: 'description',
      errorCodes: 'error_codes',
      extraInfo: 'extraInfo',
      method: 'method',
      params: 'params',
      path: 'path',
      protocol: 'protocol',
      request: 'request',
      response: 'response',
      responseDoc: 'responseDoc',
      summary: 'summary',
      timeout: 'timeout',
      title: 'title',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      description: 'string',
      errorCodes: 'string',
      extraInfo: 'string',
      method: 'string',
      params: 'string',
      path: 'string',
      protocol: 'string',
      request: 'string',
      response: 'string',
      responseDoc: 'string',
      summary: 'string',
      timeout: 'number',
      title: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetApiMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetApiMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCodeRequest extends $tea.Model {
  apiName?: string;
  apiStyle?: string;
  apiVersion?: string;
  endpoint?: string;
  meta?: string;
  params?: string;
  product?: string;
  sdkType?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'apiName',
      apiStyle: 'apiStyle',
      apiVersion: 'apiVersion',
      endpoint: 'endpoint',
      meta: 'meta',
      params: 'params',
      product: 'product',
      sdkType: 'sdkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiStyle: 'string',
      apiVersion: 'string',
      endpoint: 'string',
      meta: 'string',
      params: 'string',
      product: 'string',
      sdkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCodeResponseBody extends $tea.Model {
  requestId?: string;
  sdkDemos?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sdkDemos: 'sdkDemos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sdkDemos: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MakeCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MakeCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MakeCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProductRequest extends $tea.Model {
  bizType?: string;
  page?: number;
  pageSize?: number;
  query?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      page: 'Page',
      pageSize: 'PageSize',
      query: 'Query',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      page: 'number',
      pageSize: 'number',
      query: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProductResponseBody extends $tea.Model {
  code?: number;
  data?: SearchProductResponseBodyData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: SearchProductResponseBodyData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProductResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchProductResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchProductResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestOpenApiRequestRequest extends $tea.Model {
  apiName?: string;
  apiVersion?: string;
  meta?: string;
  params?: { [key: string]: any };
  product?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'apiName',
      apiVersion: 'apiVersion',
      meta: 'meta',
      params: 'params',
      product: 'product',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiVersion: 'string',
      meta: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      product: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestOpenApiRequestResponseBody extends $tea.Model {
  requestId?: string;
  headers?: { [key: string]: string };
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'headers',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestOpenApiRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TestOpenApiRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TestOpenApiRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TestStructTestString extends $tea.Model {
  abc?: Buffer;
  static names(): { [key: string]: string } {
    return {
      abc: 'abc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abc: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProductResponseBodyDataList extends $tea.Model {
  belongGroup?: string;
  defaultVersion?: string;
  description?: string;
  id?: string;
  locationCode?: string;
  name?: string;
  searchSummary?: string;
  shortName?: string;
  showNameCn?: string;
  showNameEn?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      belongGroup: 'belong_group',
      defaultVersion: 'default_version',
      description: 'description',
      id: 'id',
      locationCode: 'location_code',
      name: 'name',
      searchSummary: 'search_summary',
      shortName: 'short_name',
      showNameCn: 'show_name_cn',
      showNameEn: 'show_name_en',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongGroup: 'string',
      defaultVersion: 'string',
      description: 'string',
      id: 'string',
      locationCode: 'string',
      name: 'string',
      searchSummary: 'string',
      shortName: 'string',
      showNameCn: 'string',
      showNameEn: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchProductResponseBodyData extends $tea.Model {
  list?: SearchProductResponseBodyDataList[];
  page?: number;
  pages?: number;
  perPage?: number;
  realTotal?: number;
  requestId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      page: 'page',
      pages: 'pages',
      perPage: 'perPage',
      realTotal: 'real_total',
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': SearchProductResponseBodyDataList },
      page: 'number',
      pages: 'number',
      perPage: 'number',
      realTotal: 'number',
      requestId: 'string',
      total: 'number',
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
    this._endpoint = this.getEndpoint("api-workbench", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getApiMeta(request: GetApiMetaRequest): Promise<GetApiMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getApiMetaWithOptions(request, headers, runtime);
  }

  async getApiMetaWithOptions(request: GetApiMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetApiMetaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiName)) {
      query["apiName"] = request.apiName;
    }

    if (!Util.isUnset(request.productName)) {
      query["productName"] = request.productName;
    }

    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetApiMeta",
      version: "2020-11-20",
      protocol: "HTTPS",
      pathname: `/openapi/product/apiInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetApiMetaResponse>(await this.callApi(params, req, runtime), new GetApiMetaResponse({}));
  }

  async makeCode(request: MakeCodeRequest): Promise<MakeCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.makeCodeWithOptions(request, headers, runtime);
  }

  async makeCodeWithOptions(request: MakeCodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<MakeCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiName)) {
      body["apiName"] = request.apiName;
    }

    if (!Util.isUnset(request.apiStyle)) {
      body["apiStyle"] = request.apiStyle;
    }

    if (!Util.isUnset(request.apiVersion)) {
      body["apiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.endpoint)) {
      body["endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.meta)) {
      body["meta"] = request.meta;
    }

    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
    }

    if (!Util.isUnset(request.product)) {
      body["product"] = request.product;
    }

    if (!Util.isUnset(request.sdkType)) {
      body["sdkType"] = request.sdkType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MakeCode",
      version: "2020-11-20",
      protocol: "HTTPS",
      pathname: `/openapi/product/makeCode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<MakeCodeResponse>(await this.callApi(params, req, runtime), new MakeCodeResponse({}));
  }

  async searchProduct(request: SearchProductRequest): Promise<SearchProductResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchProductWithOptions(request, headers, runtime);
  }

  async searchProductWithOptions(request: SearchProductRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchProductResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchProduct",
      version: "2020-11-20",
      protocol: "HTTPS",
      pathname: `/openapi/product/search`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchProductResponse>(await this.callApi(params, req, runtime), new SearchProductResponse({}));
  }

  async testOpenApiRequest(request: TestOpenApiRequestRequest): Promise<TestOpenApiRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.testOpenApiRequestWithOptions(request, headers, runtime);
  }

  async testOpenApiRequestWithOptions(request: TestOpenApiRequestRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TestOpenApiRequestResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiName)) {
      body["apiName"] = request.apiName;
    }

    if (!Util.isUnset(request.apiVersion)) {
      body["apiVersion"] = request.apiVersion;
    }

    if (!Util.isUnset(request.meta)) {
      body["meta"] = request.meta;
    }

    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
    }

    if (!Util.isUnset(request.product)) {
      body["product"] = request.product;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TestOpenApiRequest",
      version: "2020-11-20",
      protocol: "HTTPS",
      pathname: `/openapi/product/openApiRequest`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TestOpenApiRequestResponse>(await this.callApi(params, req, runtime), new TestOpenApiRequestResponse({}));
  }

}
