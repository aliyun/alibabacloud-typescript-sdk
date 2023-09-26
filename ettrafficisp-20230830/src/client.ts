// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AkDisableRequest extends $tea.Model {
  accessKeyId?: string;
  accessKeyName?: string;
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeyName: 'accessKeyName',
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeyName: 'string',
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkDisableResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkDisableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AkDisableResponseBody;
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
      body: AkDisableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkEnableRequest extends $tea.Model {
  accessKeyId?: string;
  accessKeyName?: string;
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeyName: 'accessKeyName',
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeyName: 'string',
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkEnableResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkEnableResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AkEnableResponseBody;
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
      body: AkEnableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkGenerateRequest extends $tea.Model {
  accessKeyName?: string;
  permissions?: string[];
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      accessKeyName: 'accessKeyName',
      permissions: 'permissions',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyName: 'string',
      permissions: { 'type': 'array', 'itemType': 'string' },
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkGenerateResponseBody extends $tea.Model {
  code?: string;
  data?: AkGenerateResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AkGenerateResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkGenerateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AkGenerateResponseBody;
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
      body: AkGenerateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkListPageRequest extends $tea.Model {
  page?: number;
  size?: number;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkListPageResponseBody extends $tea.Model {
  code?: string;
  data?: AkListPageResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AkListPageResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkListPageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AkListPageResponseBody;
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
      body: AkListPageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkUpdateRequest extends $tea.Model {
  accessKeyId?: string;
  accessKeyName?: string;
  permissions?: string[];
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeyName: 'accessKeyName',
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeyName: 'string',
      permissions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkUpdateResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkUpdateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AkUpdateResponseBody;
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
      body: AkUpdateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DimGroupResponseBody extends $tea.Model {
  code?: string;
  data?: any;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DimGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DimGroupResponseBody;
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
      body: DimGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkGenerateResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  accessKeyName?: string;
  accessKeySecret?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeyName: 'accessKeyName',
      accessKeySecret: 'accessKeySecret',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeyName: 'string',
      accessKeySecret: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkListPageResponseBodyDataDataListPermissions extends $tea.Model {
  authTime?: string;
  description?: string;
  group?: string;
  permissionCode?: string;
  permissionName?: string;
  static names(): { [key: string]: string } {
    return {
      authTime: 'authTime',
      description: 'description',
      group: 'group',
      permissionCode: 'permissionCode',
      permissionName: 'permissionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTime: 'string',
      description: 'string',
      group: 'string',
      permissionCode: 'string',
      permissionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkListPageResponseBodyDataDataList extends $tea.Model {
  accessKeyId?: string;
  accessKeyName?: string;
  accessKeySecret?: string;
  active?: number;
  gmtCreate?: string;
  gmtModify?: string;
  lastCallTime?: string;
  permissions?: AkListPageResponseBodyDataDataListPermissions[];
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeyName: 'accessKeyName',
      accessKeySecret: 'accessKeySecret',
      active: 'active',
      gmtCreate: 'gmtCreate',
      gmtModify: 'gmtModify',
      lastCallTime: 'lastCallTime',
      permissions: 'permissions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeyName: 'string',
      accessKeySecret: 'string',
      active: 'number',
      gmtCreate: 'string',
      gmtModify: 'string',
      lastCallTime: 'string',
      permissions: { 'type': 'array', 'itemType': AkListPageResponseBodyDataDataListPermissions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AkListPageResponseBodyData extends $tea.Model {
  count?: number;
  currentPage?: number;
  dataList?: AkListPageResponseBodyDataDataList[];
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      currentPage: 'currentPage',
      dataList: 'dataList',
      totalPage: 'totalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      dataList: { 'type': 'array', 'itemType': AkListPageResponseBodyDataDataList },
      totalPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._signatureAlgorithm = "v2";
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ettrafficisp", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async akDisableWithOptions(request: AkDisableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AkDisableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKeyId)) {
      body["accessKeyId"] = request.accessKeyId;
    }

    if (!Util.isUnset(request.accessKeyName)) {
      body["accessKeyName"] = request.accessKeyName;
    }

    if (!Util.isUnset(request.permissions)) {
      body["permissions"] = request.permissions;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AkDisable",
      version: "2023-08-30",
      protocol: "HTTPS",
      pathname: `/console/ak/disable`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AkDisableResponse>(await this.callApi(params, req, runtime), new AkDisableResponse({}));
  }

  async akDisable(request: AkDisableRequest): Promise<AkDisableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.akDisableWithOptions(request, headers, runtime);
  }

  async akEnableWithOptions(request: AkEnableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AkEnableResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKeyId)) {
      body["accessKeyId"] = request.accessKeyId;
    }

    if (!Util.isUnset(request.accessKeyName)) {
      body["accessKeyName"] = request.accessKeyName;
    }

    if (!Util.isUnset(request.permissions)) {
      body["permissions"] = request.permissions;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AkEnable",
      version: "2023-08-30",
      protocol: "HTTPS",
      pathname: `/console/ak/enable`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AkEnableResponse>(await this.callApi(params, req, runtime), new AkEnableResponse({}));
  }

  async akEnable(request: AkEnableRequest): Promise<AkEnableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.akEnableWithOptions(request, headers, runtime);
  }

  async akGenerateWithOptions(request: AkGenerateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AkGenerateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKeyName)) {
      body["accessKeyName"] = request.accessKeyName;
    }

    if (!Util.isUnset(request.permissions)) {
      body["permissions"] = request.permissions;
    }

    if (!Util.isUnset(request.userId)) {
      body["userId"] = request.userId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AkGenerate",
      version: "2023-08-30",
      protocol: "HTTPS",
      pathname: `/console/ak/generate`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AkGenerateResponse>(await this.callApi(params, req, runtime), new AkGenerateResponse({}));
  }

  async akGenerate(request: AkGenerateRequest): Promise<AkGenerateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.akGenerateWithOptions(request, headers, runtime);
  }

  async akListPageWithOptions(request: AkListPageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AkListPageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AkListPage",
      version: "2023-08-30",
      protocol: "HTTPS",
      pathname: `/console/ak/listPage`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AkListPageResponse>(await this.callApi(params, req, runtime), new AkListPageResponse({}));
  }

  async akListPage(request: AkListPageRequest): Promise<AkListPageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.akListPageWithOptions(request, headers, runtime);
  }

  async akUpdateWithOptions(request: AkUpdateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AkUpdateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessKeyId)) {
      body["accessKeyId"] = request.accessKeyId;
    }

    if (!Util.isUnset(request.accessKeyName)) {
      body["accessKeyName"] = request.accessKeyName;
    }

    if (!Util.isUnset(request.permissions)) {
      body["permissions"] = request.permissions;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AkUpdate",
      version: "2023-08-30",
      protocol: "HTTPS",
      pathname: `/console/ak/update`,
      method: "POST",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AkUpdateResponse>(await this.callApi(params, req, runtime), new AkUpdateResponse({}));
  }

  async akUpdate(request: AkUpdateRequest): Promise<AkUpdateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.akUpdateWithOptions(request, headers, runtime);
  }

  async dimGroupWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DimGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DimGroup",
      version: "2023-08-30",
      protocol: "HTTPS",
      pathname: `/console/dim/group`,
      method: "GET",
      authType: "Anonymous",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DimGroupResponse>(await this.callApi(params, req, runtime), new DimGroupResponse({}));
  }

  async dimGroup(): Promise<DimGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dimGroupWithOptions(headers, runtime);
  }

}
