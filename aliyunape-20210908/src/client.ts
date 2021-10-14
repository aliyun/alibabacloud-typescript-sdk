// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ExecuteRequest extends $tea.Model {
  appName?: string;
  channel?: string;
  extendParam?: { [key: string]: string };
  orderId?: string;
  requestId?: string;
  serviceParam?: { [key: string]: string };
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      channel: 'Channel',
      extendParam: 'ExtendParam',
      orderId: 'OrderId',
      requestId: 'RequestId',
      serviceParam: 'ServiceParam',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      channel: 'string',
      extendParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      orderId: 'string',
      requestId: 'string',
      serviceParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteShrinkRequest extends $tea.Model {
  appName?: string;
  channel?: string;
  extendParamShrink?: string;
  orderId?: string;
  requestId?: string;
  serviceParamShrink?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      channel: 'Channel',
      extendParamShrink: 'ExtendParam',
      orderId: 'OrderId',
      requestId: 'RequestId',
      serviceParamShrink: 'ServiceParam',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      channel: 'string',
      extendParamShrink: 'string',
      orderId: 'string',
      requestId: 'string',
      serviceParamShrink: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  rt?: number;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      rt: 'Rt',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      rt: 'number',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteResponseBody,
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
    this._endpoint = this.getEndpoint("aliyunape", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async executeWithOptions(tmpReq: ExecuteRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteResponse> {
    Util.validateModel(tmpReq);
    let request = new ExecuteShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.extendParam)) {
      request.extendParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.extendParam, "ExtendParam", "json");
    }

    if (!Util.isUnset(tmpReq.serviceParam)) {
      request.serviceParamShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.serviceParam, "ServiceParam", "json");
    }

    let query = { };
    query["AppName"] = request.appName;
    query["Channel"] = request.channel;
    query["ExtendParam"] = request.extendParamShrink;
    query["OrderId"] = request.orderId;
    query["RequestId"] = request.requestId;
    query["ServiceParam"] = request.serviceParamShrink;
    query["UserId"] = request.userId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "Execute",
      version: "2021-09-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteResponse>(await this.callApi(params, req, runtime), new ExecuteResponse({}));
  }

  async execute(request: ExecuteRequest): Promise<ExecuteResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeWithOptions(request, runtime);
  }

}
