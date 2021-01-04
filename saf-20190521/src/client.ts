// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
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
  message?: string;
  requestId?: string;
  httpStatusCode?: string;
  data?: ExecuteExtendServiceResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      httpStatusCode: 'HttpStatusCode',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      httpStatusCode: 'string',
      data: ExecuteExtendServiceResponseBodyData,
      code: 'string',
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
  serviceParameters?: string;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      serviceParameters: 'ServiceParameters',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameters: 'string',
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRequestResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
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
  serviceParameters?: string;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      serviceParameters: 'ServiceParameters',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameters: 'string',
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRequestMLResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
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
  serviceParameters?: string;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      serviceParameters: 'ServiceParameters',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceParameters: 'string',
      service: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteRequestSGResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'number',
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
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteExtendServiceResponse>(await this.doRPCRequest("ExecuteExtendService", "2019-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteExtendServiceResponse({}));
  }

  async executeExtendService(request: ExecuteExtendServiceRequest): Promise<ExecuteExtendServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeExtendServiceWithOptions(request, runtime);
  }

  async executeRequestWithOptions(request: ExecuteRequestRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteRequestResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteRequestResponse>(await this.doRPCRequest("ExecuteRequest", "2019-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteRequestResponse({}));
  }

  async executeRequest(request: ExecuteRequestRequest): Promise<ExecuteRequestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeRequestWithOptions(request, runtime);
  }

  async executeRequestMLWithOptions(request: ExecuteRequestMLRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteRequestMLResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteRequestMLResponse>(await this.doRPCRequest("ExecuteRequestML", "2019-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteRequestMLResponse({}));
  }

  async executeRequestML(request: ExecuteRequestMLRequest): Promise<ExecuteRequestMLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeRequestMLWithOptions(request, runtime);
  }

  async executeRequestSGWithOptions(request: ExecuteRequestSGRequest, runtime: $Util.RuntimeOptions): Promise<ExecuteRequestSGResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ExecuteRequestSGResponse>(await this.doRPCRequest("ExecuteRequestSG", "2019-05-21", "HTTPS", "POST", "AK", "json", req, runtime), new ExecuteRequestSGResponse({}));
  }

  async executeRequestSG(request: ExecuteRequestSGRequest): Promise<ExecuteRequestSGResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.executeRequestSGWithOptions(request, runtime);
  }

}
