// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class QueryDatabotRequest extends $tea.Model {
  accessId?: string;
  query?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      query: 'Query',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      query: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatabotResponseBody extends $tea.Model {
  costTime?: number;
  requestId?: string;
  data?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      requestId: 'RequestId',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'number',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDatabotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryDatabotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryDatabotResponseBody,
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
    this._endpoint = this.getEndpoint("databot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async queryDatabotWithOptions(request: QueryDatabotRequest, runtime: $Util.RuntimeOptions): Promise<QueryDatabotResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<QueryDatabotResponse>(await this.doRPCRequest("QueryDatabot", "2020-03-30", "HTTPS", "POST", "AK", "json", req, runtime), new QueryDatabotResponse({}));
  }

  async queryDatabot(request: QueryDatabotRequest): Promise<QueryDatabotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryDatabotWithOptions(request, runtime);
  }

}
