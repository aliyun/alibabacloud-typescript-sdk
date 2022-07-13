// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetLjxAccountInfoRequest extends $tea.Model {
  ljxAccountInfoId?: string;
  static names(): { [key: string]: string } {
    return {
      ljxAccountInfoId: 'LjxAccountInfoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ljxAccountInfoId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLjxAccountInfoResponseBody extends $tea.Model {
  apple?: string;
  ljxAccountInfoId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apple: 'Apple',
      ljxAccountInfoId: 'LjxAccountInfoId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apple: 'string',
      ljxAccountInfoId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLjxAccountInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLjxAccountInfoResponseBody;
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
      body: GetLjxAccountInfoResponseBody,
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
    this._endpoint = this.getEndpoint("wfts", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getLjxAccountInfo(request: GetLjxAccountInfoRequest): Promise<GetLjxAccountInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLjxAccountInfoWithOptions(request, headers, runtime);
  }

  async getLjxAccountInfoWithOptions(request: GetLjxAccountInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLjxAccountInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ljxAccountInfoId)) {
      query["LjxAccountInfoId"] = request.ljxAccountInfoId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLjxAccountInfo",
      version: "2022-02-12",
      protocol: "HTTPS",
      pathname: `/get/ljx/acc`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLjxAccountInfoResponse>(await this.callApi(params, req, runtime), new GetLjxAccountInfoResponse({}));
  }

}
