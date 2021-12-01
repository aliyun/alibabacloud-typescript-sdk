// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ExecuteExtendServiceRequest extends $tea.Model {
  region?: string;
  service?: string;
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteExtendServiceResponseBody extends $tea.Model {
  code?: string;
  data?: ExecuteExtendServiceResponseBodyData;
  httpStatusCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ExecuteExtendServiceResponseBodyData,
      httpStatusCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteExtendServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteExtendServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteExtendServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRequestRequest extends $tea.Model {
  service?: string;
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRequestResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
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
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRequestResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteRequestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRequestMLRequest extends $tea.Model {
  lang?: string;
  service?: string;
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRequestMLResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
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
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRequestMLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteRequestMLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteRequestMLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRequestSGRequest extends $tea.Model {
  lang?: string;
  service?: string;
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      service: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRequestSGResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
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
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRequestSGResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ExecuteRequestSGResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ExecuteRequestSGResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestDecisionRequest extends $tea.Model {
  eventCode?: string;
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      serviceParameters: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestDecisionResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
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
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestDecisionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RequestDecisionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RequestDecisionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteExtendServiceResponseBodyData extends $tea.Model {
  invokeResult?: string;
  static names(): { [key: string]: string } {
    return {
      invokeResult: 'InvokeResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "saf.cn-shanghai.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("saf", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async executeExtendServiceWithOptions(request: ExecuteExtendServiceRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteExtendServiceResponse> {
    Util.validateModel(request);
    let query = { };
    query["Region"] = request.region;
    query["Service"] = request.service;
    query["ServiceParameters"] = request.serviceParameters;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteExtendService",
      version: "2019-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteExtendServiceResponse>(await this.callApi(params, req, runtime), new ExecuteExtendServiceResponse({}));
  }

  async executeExtendService(request: ExecuteExtendServiceRequest): Promise<ExecuteExtendServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeExtendServiceWithOptions(request, runtime);
  }

  async executeRequestWithOptions(request: ExecuteRequestRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteRequestResponse> {
    Util.validateModel(request);
    let query = { };
    query["Service"] = request.service;
    query["ServiceParameters"] = request.serviceParameters;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteRequest",
      version: "2019-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteRequestResponse>(await this.callApi(params, req, runtime), new ExecuteRequestResponse({}));
  }

  async executeRequest(request: ExecuteRequestRequest): Promise<ExecuteRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeRequestWithOptions(request, runtime);
  }

  async executeRequestMLWithOptions(request: ExecuteRequestMLRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteRequestMLResponse> {
    Util.validateModel(request);
    let query = { };
    query["Lang"] = request.lang;
    query["Service"] = request.service;
    query["ServiceParameters"] = request.serviceParameters;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteRequestML",
      version: "2019-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteRequestMLResponse>(await this.callApi(params, req, runtime), new ExecuteRequestMLResponse({}));
  }

  async executeRequestML(request: ExecuteRequestMLRequest): Promise<ExecuteRequestMLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeRequestMLWithOptions(request, runtime);
  }

  async executeRequestSGWithOptions(request: ExecuteRequestSGRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteRequestSGResponse> {
    Util.validateModel(request);
    let query = { };
    query["Lang"] = request.lang;
    query["Service"] = request.service;
    query["ServiceParameters"] = request.serviceParameters;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteRequestSG",
      version: "2019-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteRequestSGResponse>(await this.callApi(params, req, runtime), new ExecuteRequestSGResponse({}));
  }

  async executeRequestSG(request: ExecuteRequestSGRequest): Promise<ExecuteRequestSGResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeRequestSGWithOptions(request, runtime);
  }

  async requestDecisionWithOptions(request: RequestDecisionRequest, runtime: $Util.RuntimeOptions): Promise<RequestDecisionResponse> {
    Util.validateModel(request);
    let query = { };
    query["EventCode"] = request.eventCode;
    query["ServiceParameters"] = request.serviceParameters;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RequestDecision",
      version: "2019-05-21",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RequestDecisionResponse>(await this.callApi(params, req, runtime), new RequestDecisionResponse({}));
  }

  async requestDecision(request: RequestDecisionRequest): Promise<RequestDecisionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.requestDecisionWithOptions(request, runtime);
  }

}
