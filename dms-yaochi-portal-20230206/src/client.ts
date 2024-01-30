// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CheckUserAuthResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckUserAuthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckUserAuthResponseBody;
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
      body: CheckUserAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByTagRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  tagKeys?: string[];
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tagKeys: 'TagKeys',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByTagResponseBody extends $tea.Model {
  data?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalNumber?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNumber: 'TotalNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesByTagResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesByTagResponseBody;
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
      body: ListResourcesByTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsAllResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsAllResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagsAllResponseBody;
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
      body: ListTagsAllResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsByResourceRequest extends $tea.Model {
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsByResourceResponseBody extends $tea.Model {
  data?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsByResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagsByResourceResponseBody;
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
      body: ListTagsByResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaDatabaseSearchRequest extends $tea.Model {
  limit?: number;
  searchKey?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      searchKey: 'SearchKey',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      searchKey: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaDatabaseSearchResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaDatabaseSearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MetaDatabaseSearchResponseBody;
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
      body: MetaDatabaseSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaSearchRequest extends $tea.Model {
  limit?: number;
  searchKey?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      searchKey: 'SearchKey',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      searchKey: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaSearchResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaSearchResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MetaSearchResponseBody;
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
      body: MetaSearchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserAuthRequest extends $tea.Model {
  grantState?: number;
  static names(): { [key: string]: string } {
    return {
      grantState: 'GrantState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantState: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserAuthResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserAuthResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserAuthResponseBody;
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
      body: UpdateUserAuthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class YaochiSuggestRequest extends $tea.Model {
  suggestText?: string;
  static names(): { [key: string]: string } {
    return {
      suggestText: 'SuggestText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suggestText: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class YaochiSuggestResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class YaochiSuggestResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: YaochiSuggestResponseBody;
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
      body: YaochiSuggestResponseBody,
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
    this._endpoint = this.getEndpoint("dms-yaochi-portal", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async checkUserAuthWithOptions(runtime: $Util.RuntimeOptions): Promise<CheckUserAuthResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "CheckUserAuth",
      version: "2023-02-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CheckUserAuthResponse>(await this.callApi(params, req, runtime), new CheckUserAuthResponse({}));
  }

  async checkUserAuth(): Promise<CheckUserAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.checkUserAuthWithOptions(runtime);
  }

  async listResourcesByTagWithOptions(request: ListResourcesByTagRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcesByTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    if (!Util.isUnset(request.tagValues)) {
      query["TagValues"] = request.tagValues;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourcesByTag",
      version: "2023-02-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourcesByTagResponse>(await this.callApi(params, req, runtime), new ListResourcesByTagResponse({}));
  }

  async listResourcesByTag(request: ListResourcesByTagRequest): Promise<ListResourcesByTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcesByTagWithOptions(request, runtime);
  }

  async listTagsAllWithOptions(runtime: $Util.RuntimeOptions): Promise<ListTagsAllResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListTagsAll",
      version: "2023-02-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagsAllResponse>(await this.callApi(params, req, runtime), new ListTagsAllResponse({}));
  }

  async listTagsAll(): Promise<ListTagsAllResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsAllWithOptions(runtime);
  }

  async listTagsByResourceWithOptions(request: ListTagsByResourceRequest, runtime: $Util.RuntimeOptions): Promise<ListTagsByResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagsByResource",
      version: "2023-02-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagsByResourceResponse>(await this.callApi(params, req, runtime), new ListTagsByResourceResponse({}));
  }

  async listTagsByResource(request: ListTagsByResourceRequest): Promise<ListTagsByResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsByResourceWithOptions(request, runtime);
  }

  async metaDatabaseSearchWithOptions(request: MetaDatabaseSearchRequest, runtime: $Util.RuntimeOptions): Promise<MetaDatabaseSearchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MetaDatabaseSearch",
      version: "2023-02-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MetaDatabaseSearchResponse>(await this.callApi(params, req, runtime), new MetaDatabaseSearchResponse({}));
  }

  async metaDatabaseSearch(request: MetaDatabaseSearchRequest): Promise<MetaDatabaseSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.metaDatabaseSearchWithOptions(request, runtime);
  }

  async metaSearchWithOptions(request: MetaSearchRequest, runtime: $Util.RuntimeOptions): Promise<MetaSearchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.searchKey)) {
      query["SearchKey"] = request.searchKey;
    }

    if (!Util.isUnset(request.start)) {
      query["Start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MetaSearch",
      version: "2023-02-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MetaSearchResponse>(await this.callApi(params, req, runtime), new MetaSearchResponse({}));
  }

  async metaSearch(request: MetaSearchRequest): Promise<MetaSearchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.metaSearchWithOptions(request, runtime);
  }

  async updateUserAuthWithOptions(request: UpdateUserAuthRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserAuthResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.grantState)) {
      query["GrantState"] = request.grantState;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUserAuth",
      version: "2023-02-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserAuthResponse>(await this.callApi(params, req, runtime), new UpdateUserAuthResponse({}));
  }

  async updateUserAuth(request: UpdateUserAuthRequest): Promise<UpdateUserAuthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserAuthWithOptions(request, runtime);
  }

  async yaochiSuggestWithOptions(request: YaochiSuggestRequest, runtime: $Util.RuntimeOptions): Promise<YaochiSuggestResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.suggestText)) {
      query["SuggestText"] = request.suggestText;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "YaochiSuggest",
      version: "2023-02-06",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<YaochiSuggestResponse>(await this.callApi(params, req, runtime), new YaochiSuggestResponse({}));
  }

  async yaochiSuggest(request: YaochiSuggestRequest): Promise<YaochiSuggestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.yaochiSuggestWithOptions(request, runtime);
  }

}
