// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class YxTestApiRequest extends $tea.Model {
  f0?: number;
  f1?: number;
  static names(): { [key: string]: string } {
    return {
      f0: 'f0',
      f1: 'f1',
    };
  }

  static types(): { [key: string]: any } {
    return {
      f0: 'number',
      f1: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class YxTestApiResponseBody extends $tea.Model {
  sum?: number;
  static names(): { [key: string]: string } {
    return {
      sum: 'sum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class YxTestApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: YxTestApiResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: YxTestApiResponseBody,
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
    this._endpoint = this.getEndpoint("lmztest", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async yxTestApiWithOptions(request: YxTestApiRequest, runtime: $Util.RuntimeOptions): Promise<YxTestApiResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<YxTestApiResponse>(await this.doRPCRequest("YxTestApi", "2021-05-29_22-57-43-357", "HTTPS", "POST", "AK", "json", req, runtime), new YxTestApiResponse({}));
  }

  async yxTestApi(request: YxTestApiRequest): Promise<YxTestApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.yxTestApiWithOptions(request, runtime);
  }

}
