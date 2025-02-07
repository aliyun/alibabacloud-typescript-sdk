// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class GetOrderInfoResponseBodyData extends $dara.Model {
  bizType?: string;
  currentConcurrency?: number;
  currentDays?: number;
  instanceId?: string;
  isReleased?: boolean;
  licenseKey?: string;
  remark?: string;
  totalDays?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'bizType',
      currentConcurrency: 'currentConcurrency',
      currentDays: 'currentDays',
      instanceId: 'instanceId',
      isReleased: 'isReleased',
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
      isReleased: 'boolean',
      licenseKey: 'string',
      remark: 'string',
      totalDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * {"gmtModified":"2021-07-27T04:00:00.000+00:00","mpStatus":1,"id":11,"pk":"1084126944995576","gmtCreate":"2021-07-27T04:00:00.000+00:00","parentPk":"1084126944995576"}
   */
  data?: { [key: string]: any };
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EB-FCAC-1B78-BBB8-500ED951E9EB
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenStatusResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderInfoRequest extends $dara.Model {
  listReleased?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MP
   */
  relService?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  /**
   * @example
   * {"licenseKey":"eems7ri3b1u5nui*****","currentConcurrency":2,"instanceId":"opt_mplicense_public_cn-****","totalDays":124,"currentDays":103}
   */
  data?: GetOrderInfoResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5D6653C5-CA2B-14EC-9CF0-50AA0FF49C31
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderInfoResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderUsageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  licenseKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MP
   */
  relService?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  resourceType?: number;
  /**
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderUsageResponseBody extends $dara.Model {
  data?: { [key: string]: any }[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5D6653C5-CA2B-14EC-9CF0-50AA0FF49C31
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderUsageResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("opt", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * @param request - GetOpenStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOpenStatusResponse
   */
  async getOpenStatusWithOptions(runtime: $dara.RuntimeOptions): Promise<GetOpenStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetOpenStatusResponse>(await this.callApi(params, req, runtime), new GetOpenStatusResponse({}));
    } else {
      return $dara.cast<GetOpenStatusResponse>(await this.execute(params, req, runtime), new GetOpenStatusResponse({}));
    }

  }

  /**
   * @returns GetOpenStatusResponse
   */
  async getOpenStatus(): Promise<GetOpenStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOpenStatusWithOptions(runtime);
  }

  /**
   * 获取在线license列表
   * 
   * @param request - GetOrderInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrderInfoResponse
   */
  async getOrderInfoWithOptions(request: GetOrderInfoRequest, runtime: $dara.RuntimeOptions): Promise<GetOrderInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listReleased)) {
      query["ListReleased"] = request.listReleased;
    }

    if (!$dara.isNull(request.relService)) {
      query["RelService"] = request.relService;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetOrderInfoResponse>(await this.callApi(params, req, runtime), new GetOrderInfoResponse({}));
    } else {
      return $dara.cast<GetOrderInfoResponse>(await this.execute(params, req, runtime), new GetOrderInfoResponse({}));
    }

  }

  /**
   * 获取在线license列表
   * 
   * @param request - GetOrderInfoRequest
   * @returns GetOrderInfoResponse
   */
  async getOrderInfo(request: GetOrderInfoRequest): Promise<GetOrderInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOrderInfoWithOptions(request, runtime);
  }

  /**
   * @param request - GetOrderUsageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrderUsageResponse
   */
  async getOrderUsageWithOptions(request: GetOrderUsageRequest, runtime: $dara.RuntimeOptions): Promise<GetOrderUsageResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.licenseKey)) {
      query["LicenseKey"] = request.licenseKey;
    }

    if (!$dara.isNull(request.relService)) {
      query["RelService"] = request.relService;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.timeRange)) {
      query["TimeRange"] = request.timeRange;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetOrderUsageResponse>(await this.callApi(params, req, runtime), new GetOrderUsageResponse({}));
    } else {
      return $dara.cast<GetOrderUsageResponse>(await this.execute(params, req, runtime), new GetOrderUsageResponse({}));
    }

  }

  /**
   * @param request - GetOrderUsageRequest
   * @returns GetOrderUsageResponse
   */
  async getOrderUsage(request: GetOrderUsageRequest): Promise<GetOrderUsageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getOrderUsageWithOptions(request, runtime);
  }

}
