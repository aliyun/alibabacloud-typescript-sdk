// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class NoticeInstanceUserResponseBodyAccessDeniedDetail extends $dara.Model {
  authAction?: string;
  authPrincipalDisplayName?: string;
  authPrincipalOwnerId?: string;
  authPrincipalType?: string;
  encodedDiagnosticMessage?: string;
  noPermissionType?: string;
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataRequestMeteringData extends $dara.Model {
  /**
   * @example
   * 1666854480406
   */
  endTime?: number;
  /**
   * @example
   * gtm-cn-20p314k5h05
   */
  instanceId?: string;
  /**
   * @example
   * test001
   */
  meteringAssist?: string;
  /**
   * @example
   * {"VirtualCpu":10}
   */
  meteringEntity?: string;
  /**
   * @example
   * 1662284820000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      meteringAssist: 'MeteringAssist',
      meteringEntity: 'MeteringEntity',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      meteringAssist: 'string',
      meteringEntity: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NoticeInstanceUserRequest extends $dara.Model {
  /**
   * @example
   * 5000000264872
   */
  instanceId?: number;
  noticeParam?: string;
  /**
   * @example
   * 1
   */
  noticeType?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      noticeParam: 'NoticeParam',
      noticeType: 'NoticeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'number',
      noticeParam: 'string',
      noticeType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NoticeInstanceUserResponseBody extends $dara.Model {
  accessDeniedDetail?: NoticeInstanceUserResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Instance 5723f7ee-952d-411f-94f4-b942a550d9b8 does not exist.
   */
  message?: string;
  /**
   * @example
   * A6A33748-D573-593C-A3BC-593E33D68311
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  result?: boolean;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: NoticeInstanceUserResponseBodyAccessDeniedDetail,
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NoticeInstanceUserResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: NoticeInstanceUserResponseBody;
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
      body: NoticeInstanceUserResponseBody,
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

export class PushMeteringDataRequest extends $dara.Model {
  /**
   * @example
   * 2023-01-11 10:31:00
   */
  gmtCreate?: string;
  meteringData?: PushMeteringDataRequestMeteringData[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      meteringData: 'MeteringData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      meteringData: { 'type': 'array', 'itemType': PushMeteringDataRequestMeteringData },
    };
  }

  validate() {
    if(Array.isArray(this.meteringData)) {
      $dara.Model.validateArray(this.meteringData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * parameter \\"service\\" can not be blank.
   */
  dynamicMessage?: string;
  /**
   * @example
   * false
   */
  forceFatal?: boolean;
  /**
   * @example
   * Instance 5723f7ee-952d-411f-94f4-b942a550d9b8 does not exist.
   */
  message?: string;
  /**
   * @example
   * A6A33748-D573-593C-A3BC-593E33D68311
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  result?: boolean;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      forceFatal: 'ForceFatal',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
      forceFatal: 'boolean',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushMeteringDataResponseBody;
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
      body: PushMeteringDataResponseBody,
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
    this._endpoint = this.getEndpoint("marketplaceintl", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * isv推送实例消息给用户
   * 
   * @param request - NoticeInstanceUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns NoticeInstanceUserResponse
   */
  async noticeInstanceUserWithOptions(request: NoticeInstanceUserRequest, runtime: $dara.RuntimeOptions): Promise<NoticeInstanceUserResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.noticeParam)) {
      body["NoticeParam"] = request.noticeParam;
    }

    if (!$dara.isNull(request.noticeType)) {
      body["NoticeType"] = request.noticeType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "NoticeInstanceUser",
      version: "2022-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<NoticeInstanceUserResponse>(await this.callApi(params, req, runtime), new NoticeInstanceUserResponse({}));
    } else {
      return $dara.cast<NoticeInstanceUserResponse>(await this.execute(params, req, runtime), new NoticeInstanceUserResponse({}));
    }

  }

  /**
   * isv推送实例消息给用户
   * 
   * @param request - NoticeInstanceUserRequest
   * @returns NoticeInstanceUserResponse
   */
  async noticeInstanceUser(request: NoticeInstanceUserRequest): Promise<NoticeInstanceUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.noticeInstanceUserWithOptions(request, runtime);
  }

  /**
   * 国际云市场推送计量数据
   * 
   * @param request - PushMeteringDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMeteringDataResponse
   */
  async pushMeteringDataWithOptions(request: PushMeteringDataRequest, runtime: $dara.RuntimeOptions): Promise<PushMeteringDataResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gmtCreate)) {
      body["GmtCreate"] = request.gmtCreate;
    }

    if (!$dara.isNull(request.meteringData)) {
      body["MeteringData"] = request.meteringData;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushMeteringData",
      version: "2022-12-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushMeteringDataResponse>(await this.callApi(params, req, runtime), new PushMeteringDataResponse({}));
    } else {
      return $dara.cast<PushMeteringDataResponse>(await this.execute(params, req, runtime), new PushMeteringDataResponse({}));
    }

  }

  /**
   * 国际云市场推送计量数据
   * 
   * @param request - PushMeteringDataRequest
   * @returns PushMeteringDataResponse
   */
  async pushMeteringData(request: PushMeteringDataRequest): Promise<PushMeteringDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushMeteringDataWithOptions(request, runtime);
  }

}
