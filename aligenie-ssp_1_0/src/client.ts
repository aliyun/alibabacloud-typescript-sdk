// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetDeviceIdByIdentityHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xAcsAligenieAccessToken?: string;
  authorization?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xAcsAligenieAccessToken: 'x-acs-aligenie-access-token',
      authorization: 'Authorization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xAcsAligenieAccessToken: 'string',
      authorization: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdByIdentityRequest extends $tea.Model {
  identityType?: string;
  encodeType?: string;
  identityId?: string;
  productKey?: string;
  encodeKey?: string;
  static names(): { [key: string]: string } {
    return {
      identityType: 'IdentityType',
      encodeType: 'EncodeType',
      identityId: 'IdentityId',
      productKey: 'ProductKey',
      encodeKey: 'EncodeKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityType: 'string',
      encodeType: 'string',
      identityId: 'string',
      productKey: 'string',
      encodeKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdByIdentityResponseBody extends $tea.Model {
  message?: string;
  code?: number;
  result?: GetDeviceIdByIdentityResponseBodyResult;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      code: 'Code',
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      code: 'number',
      result: GetDeviceIdByIdentityResponseBodyResult,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdByIdentityResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDeviceIdByIdentityResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDeviceIdByIdentityResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdByIdentityResponseBodyResultDeviceUnionIds extends $tea.Model {
  organizationId?: string;
  deviceUnionId?: string;
  static names(): { [key: string]: string } {
    return {
      organizationId: 'OrganizationId',
      deviceUnionId: 'DeviceUnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      organizationId: 'string',
      deviceUnionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceIdByIdentityResponseBodyResult extends $tea.Model {
  deviceOpenId?: string;
  deviceUnionIds?: GetDeviceIdByIdentityResponseBodyResultDeviceUnionIds[];
  static names(): { [key: string]: string } {
    return {
      deviceOpenId: 'DeviceOpenId',
      deviceUnionIds: 'DeviceUnionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceOpenId: 'string',
      deviceUnionIds: { 'type': 'array', 'itemType': GetDeviceIdByIdentityResponseBodyResultDeviceUnionIds },
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
    this._endpoint = this.getEndpoint("aligenie", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getDeviceIdByIdentity(request: GetDeviceIdByIdentityRequest): Promise<GetDeviceIdByIdentityResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetDeviceIdByIdentityHeaders({ });
    return await this.getDeviceIdByIdentityWithOptions(request, headers, runtime);
  }

  async getDeviceIdByIdentityWithOptions(request: GetDeviceIdByIdentityRequest, headers: GetDeviceIdByIdentityHeaders, runtime: $Util.RuntimeOptions): Promise<GetDeviceIdByIdentityResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!Util.isUnset(request.encodeType)) {
      query["EncodeType"] = request.encodeType;
    }

    if (!Util.isUnset(request.identityId)) {
      query["IdentityId"] = request.identityId;
    }

    if (!Util.isUnset(request.productKey)) {
      query["ProductKey"] = request.productKey;
    }

    if (!Util.isUnset(request.encodeKey)) {
      query["EncodeKey"] = request.encodeKey;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xAcsAligenieAccessToken)) {
      realHeaders["x-acs-aligenie-access-token"] = headers.xAcsAligenieAccessToken;
    }

    if (!Util.isUnset(headers.authorization)) {
      realHeaders["Authorization"] = headers.authorization;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeviceIdByIdentity",
      version: "ssp_1.0",
      protocol: "HTTPS",
      pathname: `/v1.0/ssp/getDeviceIdByIdentity`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDeviceIdByIdentityResponse>(await this.callApi(params, req, runtime), new GetDeviceIdByIdentityResponse({}));
  }

}
