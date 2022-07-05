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
  methods?: string[];
  static names(): { [key: string]: string } {
    return {
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      methods: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryByIdRequest extends $tea.Model {
  one?: string;
  static names(): { [key: string]: string } {
    return {
      one: 'One',
    };
  }

  static types(): { [key: string]: any } {
    return {
      one: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryByIdResponseBody extends $tea.Model {
  address?: string;
  color?: string;
  name?: string;
  requestId?: string;
  size?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      color: 'Color',
      name: 'Name',
      requestId: 'RequestId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      color: 'string',
      name: 'string',
      requestId: 'string',
      size: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryByIdResponseBody;
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
      body: QueryByIdResponseBody,
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
    this._endpoint = this.getEndpoint("amp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async queryByIdWithOptions(request: QueryByIdRequest, runtime: $Util.RuntimeOptions): Promise<QueryByIdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryById",
      version: "2022-02-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryByIdResponse>(await this.callApi(params, req, runtime), new QueryByIdResponse({}));
  }

  async queryById(request: QueryByIdRequest): Promise<QueryByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryByIdWithOptions(request, runtime);
  }

}
