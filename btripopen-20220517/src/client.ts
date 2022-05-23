// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class TakeAccessTokenRequest extends $tea.Model {
  appKey?: string;
  appSecret?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'app_key',
      appSecret: 'app_secret',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      appSecret: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TakeAccessTokenResponseBody extends $tea.Model {
  code?: string;
  data?: TakeAccessTokenResponseBodyData;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: TakeAccessTokenResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TakeAccessTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TakeAccessTokenResponseBody;
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
      body: TakeAccessTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TakeAccessTokenResponseBodyData extends $tea.Model {
  accessToken?: string;
  expire?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'access_token',
      expire: 'expire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      expire: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("btripopen", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async takeAccessToken(request: TakeAccessTokenRequest): Promise<TakeAccessTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.takeAccessTokenWithOptions(request, headers, runtime);
  }

  async takeAccessTokenWithOptions(request: TakeAccessTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TakeAccessTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appKey)) {
      query["app_key"] = request.appKey;
    }

    if (!Util.isUnset(request.appSecret)) {
      query["app_secret"] = request.appSecret;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TakeAccessToken",
      version: "2022-05-17",
      protocol: "HTTPS",
      pathname: `/btrip/open/access-token/take`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TakeAccessTokenResponse>(await this.callApi(params, req, runtime), new TakeAccessTokenResponse({}));
  }

}
