// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetPhoneNumberIdentificationResultRequest extends $tea.Model {
  authCode?: string;
  outId?: string;
  ownerId?: number;
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sessionId?: string;
  sessionPayload?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sessionId: 'SessionId',
      sessionPayload: 'SessionPayload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sessionId: 'string',
      sessionPayload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationResultResponseBody extends $tea.Model {
  code?: string;
  data?: GetPhoneNumberIdentificationResultResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPhoneNumberIdentificationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhoneNumberIdentificationResultResponseBody;
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
      body: GetPhoneNumberIdentificationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationUrlRequest extends $tea.Model {
  authCode?: string;
  ip?: string;
  outId?: string;
  ownerId?: number;
  phoneNumber?: string;
  rememberPhoneNumber?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      ip: 'Ip',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      rememberPhoneNumber: 'RememberPhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      ip: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      rememberPhoneNumber: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationUrlResponseBody extends $tea.Model {
  code?: string;
  data?: GetPhoneNumberIdentificationUrlResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPhoneNumberIdentificationUrlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationUrlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPhoneNumberIdentificationUrlResponseBody;
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
      body: GetPhoneNumberIdentificationUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationResultResponseBodyData extends $tea.Model {
  isIdentified?: string;
  static names(): { [key: string]: string } {
    return {
      isIdentified: 'IsIdentified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isIdentified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPhoneNumberIdentificationUrlResponseBodyData extends $tea.Model {
  identificationUrl?: string;
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      identificationUrl: 'IdentificationUrl',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identificationUrl: 'string',
      sessionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dytnsapi", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getPhoneNumberIdentificationResultWithOptions(request: GetPhoneNumberIdentificationResultRequest, runtime: $Util.RuntimeOptions): Promise<GetPhoneNumberIdentificationResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    if (!Util.isUnset(request.sessionId)) {
      query["SessionId"] = request.sessionId;
    }

    if (!Util.isUnset(request.sessionPayload)) {
      query["SessionPayload"] = request.sessionPayload;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhoneNumberIdentificationResult",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhoneNumberIdentificationResultResponse>(await this.callApi(params, req, runtime), new GetPhoneNumberIdentificationResultResponse({}));
  }

  async getPhoneNumberIdentificationResult(request: GetPhoneNumberIdentificationResultRequest): Promise<GetPhoneNumberIdentificationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhoneNumberIdentificationResultWithOptions(request, runtime);
  }

  async getPhoneNumberIdentificationUrlWithOptions(request: GetPhoneNumberIdentificationUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetPhoneNumberIdentificationUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.authCode)) {
      query["AuthCode"] = request.authCode;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.outId)) {
      query["OutId"] = request.outId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.rememberPhoneNumber)) {
      query["RememberPhoneNumber"] = request.rememberPhoneNumber;
    }

    if (!Util.isUnset(request.resourceOwnerAccount)) {
      query["ResourceOwnerAccount"] = request.resourceOwnerAccount;
    }

    if (!Util.isUnset(request.resourceOwnerId)) {
      query["ResourceOwnerId"] = request.resourceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPhoneNumberIdentificationUrl",
      version: "2023-01-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPhoneNumberIdentificationUrlResponse>(await this.callApi(params, req, runtime), new GetPhoneNumberIdentificationUrlResponse({}));
  }

  async getPhoneNumberIdentificationUrl(request: GetPhoneNumberIdentificationUrlRequest): Promise<GetPhoneNumberIdentificationUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPhoneNumberIdentificationUrlWithOptions(request, runtime);
  }

}
