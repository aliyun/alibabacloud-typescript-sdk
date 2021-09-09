// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetCdtServiceStatusRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdtServiceStatusResponseBody extends $tea.Model {
  requestId?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdtServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCdtServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCdtServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdtServiceRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdtServiceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdtServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenCdtServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenCdtServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdtCbServiceStatusRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdtCbServiceStatusResponseBody extends $tea.Model {
  requestId?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      enabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCdtCbServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCdtCbServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCdtCbServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdtCbServiceRequest extends $tea.Model {
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdtCbServiceResponseBody extends $tea.Model {
  requestId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCdtCbServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenCdtCbServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenCdtCbServiceResponseBody,
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
    this._endpoint = this.getEndpoint("cdt", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getCdtServiceStatusWithOptions(request: GetCdtServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetCdtServiceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCdtServiceStatusResponse>(await this.doRPCRequest("GetCdtServiceStatus", "2021-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new GetCdtServiceStatusResponse({}));
  }

  async getCdtServiceStatus(request: GetCdtServiceStatusRequest): Promise<GetCdtServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCdtServiceStatusWithOptions(request, runtime);
  }

  async openCdtServiceWithOptions(request: OpenCdtServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenCdtServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenCdtServiceResponse>(await this.doRPCRequest("OpenCdtService", "2021-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new OpenCdtServiceResponse({}));
  }

  async openCdtService(request: OpenCdtServiceRequest): Promise<OpenCdtServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCdtServiceWithOptions(request, runtime);
  }

  async getCdtCbServiceStatusWithOptions(request: GetCdtCbServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetCdtCbServiceStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetCdtCbServiceStatusResponse>(await this.doRPCRequest("GetCdtCbServiceStatus", "2021-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new GetCdtCbServiceStatusResponse({}));
  }

  async getCdtCbServiceStatus(request: GetCdtCbServiceStatusRequest): Promise<GetCdtCbServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCdtCbServiceStatusWithOptions(request, runtime);
  }

  async openCdtCbServiceWithOptions(request: OpenCdtCbServiceRequest, runtime: $Util.RuntimeOptions): Promise<OpenCdtCbServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<OpenCdtCbServiceResponse>(await this.doRPCRequest("OpenCdtCbService", "2021-08-13", "HTTPS", "POST", "AK", "json", req, runtime), new OpenCdtCbServiceResponse({}));
  }

  async openCdtCbService(request: OpenCdtCbServiceRequest): Promise<OpenCdtCbServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCdtCbServiceWithOptions(request, runtime);
  }

}
