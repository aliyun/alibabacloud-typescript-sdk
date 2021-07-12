// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ChenjingtestRequest extends $tea.Model {
  a?: number;
  static names(): { [key: string]: string } {
    return {
      a: 'a',
    };
  }

  static types(): { [key: string]: any } {
    return {
      a: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChenjingtestResponseBody extends $tea.Model {
  c?: number;
  static names(): { [key: string]: string } {
    return {
      c: 'c',
    };
  }

  static types(): { [key: string]: any } {
    return {
      c: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChenjingtestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ChenjingtestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ChenjingtestResponseBody,
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
    this._endpoint = this.getEndpoint("nbf", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async chenjingtestWithOptions(request: ChenjingtestRequest, runtime: $Util.RuntimeOptions): Promise<ChenjingtestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ChenjingtestResponse>(await this.doRPCRequest("Chenjingtest", "2021-07-09_16-31-52-377", "HTTPS", "POST", "AK", "json", req, runtime), new ChenjingtestResponse({}));
  }

  async chenjingtest(request: ChenjingtestRequest): Promise<ChenjingtestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.chenjingtestWithOptions(request, runtime);
  }

}
