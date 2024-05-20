// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetOpenStatusResponseBody extends $tea.Model {
  code?: number;
  data?: { [key: string]: any };
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOpenStatusResponseBody;
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
      body: GetOpenStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderInfoRequest extends $tea.Model {
  listReleased?: boolean;
  relService?: string;
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      listReleased: 'ListReleased',
      relService: 'RelService',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listReleased: 'boolean',
      relService: 'string',
      resourceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderInfoResponseBody extends $tea.Model {
  code?: string;
  data?: GetOrderInfoResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOrderInfoResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderInfoResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOrderInfoResponseBody;
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
      body: GetOrderInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderUsageRequest extends $tea.Model {
  licenseKey?: string;
  relService?: string;
  resourceType?: number;
  timeRange?: number;
  static names(): { [key: string]: string } {
    return {
      licenseKey: 'LicenseKey',
      relService: 'RelService',
      resourceType: 'ResourceType',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseKey: 'string',
      relService: 'string',
      resourceType: 'number',
      timeRange: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderUsageResponseBody extends $tea.Model {
  data?: { [key: string]: any }[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderUsageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOrderUsageResponseBody;
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
      body: GetOrderUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderInfoResponseBodyData extends $tea.Model {
  bizType?: string;
  currentConcurrency?: number;
  currentDays?: number;
  instanceId?: string;
  licenseKey?: string;
  remark?: string;
  totalDays?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      currentConcurrency: 'currentConcurrency',
      currentDays: 'currentDays',
      instanceId: 'instanceId',
      licenseKey: 'licenseKey',
      remark: 'remark',
      totalDays: 'totalDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      currentConcurrency: 'number',
      currentDays: 'number',
      instanceId: 'string',
      licenseKey: 'string',
      remark: 'string',
      totalDays: 'number',
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
    this._endpoint = this.getEndpoint("opt", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * @param request GetOpenStatusRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetOpenStatusResponse
   */
  async getOpenStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<GetOpenStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetOpenStatus",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOpenStatusResponse>(await this.callApi(params, req, runtime), new GetOpenStatusResponse({}));
  }

  /**
   * @return GetOpenStatusResponse
   */
  async getOpenStatus(): Promise<GetOpenStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOpenStatusWithOptions(runtime);
  }

  /**
   * @param request GetOrderInfoRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetOrderInfoResponse
   */
  async getOrderInfoWithOptions(request: GetOrderInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetOrderInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listReleased)) {
      query["ListReleased"] = request.listReleased;
    }

    if (!Util.isUnset(request.relService)) {
      query["RelService"] = request.relService;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOrderInfo",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOrderInfoResponse>(await this.callApi(params, req, runtime), new GetOrderInfoResponse({}));
  }

  /**
   * @param request GetOrderInfoRequest
   * @return GetOrderInfoResponse
   */
  async getOrderInfo(request: GetOrderInfoRequest): Promise<GetOrderInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOrderInfoWithOptions(request, runtime);
  }

  /**
   * @param request GetOrderUsageRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetOrderUsageResponse
   */
  async getOrderUsageWithOptions(request: GetOrderUsageRequest, runtime: $Util.RuntimeOptions): Promise<GetOrderUsageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.licenseKey)) {
      query["LicenseKey"] = request.licenseKey;
    }

    if (!Util.isUnset(request.relService)) {
      query["RelService"] = request.relService;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOrderUsage",
      version: "2021-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOrderUsageResponse>(await this.callApi(params, req, runtime), new GetOrderUsageResponse({}));
  }

  /**
   * @param request GetOrderUsageRequest
   * @return GetOrderUsageResponse
   */
  async getOrderUsage(request: GetOrderUsageRequest): Promise<GetOrderUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOrderUsageWithOptions(request, runtime);
  }

}
