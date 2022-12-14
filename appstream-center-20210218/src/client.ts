// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetAuthCodeRequest extends $tea.Model {
  endUserId?: string;
  externalUserId?: string;
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      externalUserId: 'ExternalUserId',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      externalUserId: 'string',
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthCodeResponseBody extends $tea.Model {
  authModel?: GetAuthCodeResponseBodyAuthModel;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authModel: 'AuthModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authModel: GetAuthCodeResponseBodyAuthModel,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAuthCodeResponseBody;
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
      body: GetAuthCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthCodeResponseBodyAuthModel extends $tea.Model {
  authCode?: string;
  endUserId?: string;
  expireTime?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      endUserId: 'EndUserId',
      expireTime: 'ExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      endUserId: 'string',
      expireTime: 'string',
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
    this._endpoint = this.getEndpoint("appstream-center", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getAuthCodeWithOptions(request: GetAuthCodeRequest, runtime: $Util.RuntimeOptions): Promise<GetAuthCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endUserId)) {
      body["EndUserId"] = request.endUserId;
    }

    if (!Util.isUnset(request.externalUserId)) {
      body["ExternalUserId"] = request.externalUserId;
    }

    if (!Util.isUnset(request.policy)) {
      body["Policy"] = request.policy;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetAuthCode",
      version: "2021-02-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAuthCodeResponse>(await this.callApi(params, req, runtime), new GetAuthCodeResponse({}));
  }

  async getAuthCode(request: GetAuthCodeRequest): Promise<GetAuthCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAuthCodeWithOptions(request, runtime);
  }

}
