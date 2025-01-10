// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivateLicenseRequest extends $tea.Model {
  fingerprint?: string;
  id?: string;
  instanceId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      id: 'Id',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      id: 'string',
      instanceId: 'string',
      orderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateLicenseResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: ActivateLicenseResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: ActivateLicenseResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateLicenseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActivateLicenseResponseBody;
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
      body: ActivateLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseRequest extends $tea.Model {
  id?: number;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: GetLicenseResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetLicenseResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLicenseResponseBody;
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
      body: GetLicenseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLicensesRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  queryStr?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      queryStr: 'QueryStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      queryStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLicensesResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  currentPage?: number;
  httpStatusCode?: number;
  licenseList?: ListLicensesResponseBodyLicenseList[];
  message?: string;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  totalPage?: string;
  totalPageCount?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      currentPage: 'CurrentPage',
      httpStatusCode: 'HttpStatusCode',
      licenseList: 'LicenseList',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
      totalPageCount: 'TotalPageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      currentPage: 'number',
      httpStatusCode: 'number',
      licenseList: { 'type': 'array', 'itemType': ListLicensesResponseBodyLicenseList },
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'string',
      totalPageCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLicensesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLicensesResponseBody;
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
      body: ListLicensesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesRequest extends $tea.Model {
  commodityCode?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  code?: string;
  data?: ListUserResourcesResponseBodyData[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
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
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListUserResourcesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserResourcesResponseBody;
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
      body: ListUserResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLicenseDescriptionRequest extends $tea.Model {
  description?: string;
  /**
   * @example
   * brainindustrial_aicsruntime_public_cn-mdu3ps3kw04
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLicenseDescriptionResponseBody extends $tea.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 68738E75-43C1-5AE5-9F3A-AFEF576D7B5F
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLicenseDescriptionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLicenseDescriptionResponseBody;
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
      body: UpdateLicenseDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateLicenseResponseBodyDataActivateRecord extends $tea.Model {
  activateTime?: string;
  buyTime?: string;
  duration?: string;
  expireTime?: string;
  licenseCode?: string;
  orderId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      activateTime: 'ActivateTime',
      buyTime: 'BuyTime',
      duration: 'Duration',
      expireTime: 'ExpireTime',
      licenseCode: 'LicenseCode',
      orderId: 'OrderId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateTime: 'string',
      buyTime: 'string',
      duration: 'string',
      expireTime: 'string',
      licenseCode: 'string',
      orderId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateLicenseResponseBodyData extends $tea.Model {
  activateRecord?: ActivateLicenseResponseBodyDataActivateRecord[];
  activateTime?: string;
  allDuration?: string;
  applicableSpecs?: string;
  buyTime?: string;
  cpuLimit?: number;
  description?: string;
  duration?: string;
  effectTime?: string;
  expireTime?: string;
  fingerprint?: string;
  id?: string;
  instanceId?: string;
  licenseCode?: string;
  licenseSpecName?: string;
  memoryLimit?: number;
  status?: string;
  unActivateAllDuration?: string;
  static names(): { [key: string]: string } {
    return {
      activateRecord: 'ActivateRecord',
      activateTime: 'ActivateTime',
      allDuration: 'AllDuration',
      applicableSpecs: 'ApplicableSpecs',
      buyTime: 'BuyTime',
      cpuLimit: 'CpuLimit',
      description: 'Description',
      duration: 'Duration',
      effectTime: 'EffectTime',
      expireTime: 'ExpireTime',
      fingerprint: 'Fingerprint',
      id: 'Id',
      instanceId: 'InstanceId',
      licenseCode: 'LicenseCode',
      licenseSpecName: 'LicenseSpecName',
      memoryLimit: 'MemoryLimit',
      status: 'Status',
      unActivateAllDuration: 'UnActivateAllDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateRecord: { 'type': 'array', 'itemType': ActivateLicenseResponseBodyDataActivateRecord },
      activateTime: 'string',
      allDuration: 'string',
      applicableSpecs: 'string',
      buyTime: 'string',
      cpuLimit: 'number',
      description: 'string',
      duration: 'string',
      effectTime: 'string',
      expireTime: 'string',
      fingerprint: 'string',
      id: 'string',
      instanceId: 'string',
      licenseCode: 'string',
      licenseSpecName: 'string',
      memoryLimit: 'number',
      status: 'string',
      unActivateAllDuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseResponseBodyDataActivateRecord extends $tea.Model {
  activateTime?: string;
  buyTime?: string;
  duration?: string;
  expireTime?: string;
  licenseCode?: string;
  orderId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      activateTime: 'ActivateTime',
      buyTime: 'BuyTime',
      duration: 'Duration',
      expireTime: 'ExpireTime',
      licenseCode: 'LicenseCode',
      orderId: 'OrderId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateTime: 'string',
      buyTime: 'string',
      duration: 'string',
      expireTime: 'string',
      licenseCode: 'string',
      orderId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLicenseResponseBodyData extends $tea.Model {
  activateRecord?: GetLicenseResponseBodyDataActivateRecord[];
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   */
  activateTime?: string;
  adaptiveMachine?: string;
  allDuration?: string;
  applicableSpecs?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   */
  buyTime?: string;
  cpuLimit?: number;
  description?: string;
  duration?: string;
  effectTime?: string;
  expireTime?: string;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   */
  fingerprint?: string;
  id?: number;
  instanceId?: string;
  licenseCode?: string;
  licenseSpecCode?: string;
  /**
   * @remarks
   * 代表资源组的资源属性字段
   */
  licenseSpecName?: string;
  licenseSpecType?: string;
  memoryLimit?: number;
  proposal?: string;
  status?: string;
  unActivateAllDuration?: string;
  static names(): { [key: string]: string } {
    return {
      activateRecord: 'ActivateRecord',
      activateTime: 'ActivateTime',
      adaptiveMachine: 'AdaptiveMachine',
      allDuration: 'AllDuration',
      applicableSpecs: 'ApplicableSpecs',
      buyTime: 'BuyTime',
      cpuLimit: 'CpuLimit',
      description: 'Description',
      duration: 'Duration',
      effectTime: 'EffectTime',
      expireTime: 'ExpireTime',
      fingerprint: 'Fingerprint',
      id: 'Id',
      instanceId: 'InstanceId',
      licenseCode: 'LicenseCode',
      licenseSpecCode: 'LicenseSpecCode',
      licenseSpecName: 'LicenseSpecName',
      licenseSpecType: 'LicenseSpecType',
      memoryLimit: 'MemoryLimit',
      proposal: 'Proposal',
      status: 'Status',
      unActivateAllDuration: 'UnActivateAllDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateRecord: { 'type': 'array', 'itemType': GetLicenseResponseBodyDataActivateRecord },
      activateTime: 'string',
      adaptiveMachine: 'string',
      allDuration: 'string',
      applicableSpecs: 'string',
      buyTime: 'string',
      cpuLimit: 'number',
      description: 'string',
      duration: 'string',
      effectTime: 'string',
      expireTime: 'string',
      fingerprint: 'string',
      id: 'number',
      instanceId: 'string',
      licenseCode: 'string',
      licenseSpecCode: 'string',
      licenseSpecName: 'string',
      licenseSpecType: 'string',
      memoryLimit: 'number',
      proposal: 'string',
      status: 'string',
      unActivateAllDuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLicensesResponseBodyLicenseList extends $tea.Model {
  activateTime?: string;
  adaptiveMachine?: number;
  allDuration?: string;
  buyTime?: string;
  cpuLimit?: number;
  description?: string;
  duration?: string;
  effectTime?: string;
  expireTime?: string;
  id?: string;
  instanceId?: string;
  licenseSpecCode?: string;
  licenseSpecName?: string;
  licenseSpecType?: string;
  memoryLimit?: number;
  status?: string;
  unActivateAllDuration?: string;
  static names(): { [key: string]: string } {
    return {
      activateTime: 'ActivateTime',
      adaptiveMachine: 'AdaptiveMachine',
      allDuration: 'AllDuration',
      buyTime: 'BuyTime',
      cpuLimit: 'CpuLimit',
      description: 'Description',
      duration: 'Duration',
      effectTime: 'EffectTime',
      expireTime: 'ExpireTime',
      id: 'Id',
      instanceId: 'InstanceId',
      licenseSpecCode: 'LicenseSpecCode',
      licenseSpecName: 'LicenseSpecName',
      licenseSpecType: 'LicenseSpecType',
      memoryLimit: 'MemoryLimit',
      status: 'Status',
      unActivateAllDuration: 'UnActivateAllDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateTime: 'string',
      adaptiveMachine: 'number',
      allDuration: 'string',
      buyTime: 'string',
      cpuLimit: 'number',
      description: 'string',
      duration: 'string',
      effectTime: 'string',
      expireTime: 'string',
      id: 'string',
      instanceId: 'string',
      licenseSpecCode: 'string',
      licenseSpecName: 'string',
      licenseSpecType: 'string',
      memoryLimit: 'number',
      status: 'string',
      unActivateAllDuration: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserResourcesResponseBodyData extends $tea.Model {
  chargeType?: string;
  commodityCode?: string;
  endDate?: string;
  instanceId?: string;
  region?: string;
  startDate?: string;
  status?: string;
  statusMsg?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'chargeType',
      commodityCode: 'commodityCode',
      endDate: 'endDate',
      instanceId: 'instanceId',
      region: 'region',
      startDate: 'startDate',
      status: 'status',
      statusMsg: 'statusMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      endDate: 'string',
      instanceId: 'string',
      region: 'string',
      startDate: 'string',
      status: 'string',
      statusMsg: 'string',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("brain-industrial", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 激活License
   * 
   * @param request - ActivateLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateLicenseResponse
   */
  async activateLicenseWithOptions(request: ActivateLicenseRequest, runtime: $Util.RuntimeOptions): Promise<ActivateLicenseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fingerprint)) {
      body["Fingerprint"] = request.fingerprint;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.orderId)) {
      body["OrderId"] = request.orderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ActivateLicense",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ActivateLicenseResponse>(await this.callApi(params, req, runtime), new ActivateLicenseResponse({}));
  }

  /**
   * 激活License
   * 
   * @param request - ActivateLicenseRequest
   * @returns ActivateLicenseResponse
   */
  async activateLicense(request: ActivateLicenseRequest): Promise<ActivateLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.activateLicenseWithOptions(request, runtime);
  }

  /**
   * License详情
   * 
   * @param request - GetLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLicenseResponse
   */
  async getLicenseWithOptions(request: GetLicenseRequest, runtime: $Util.RuntimeOptions): Promise<GetLicenseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLicense",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLicenseResponse>(await this.callApi(params, req, runtime), new GetLicenseResponse({}));
  }

  /**
   * License详情
   * 
   * @param request - GetLicenseRequest
   * @returns GetLicenseResponse
   */
  async getLicense(request: GetLicenseRequest): Promise<GetLicenseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLicenseWithOptions(request, runtime);
  }

  /**
   * License列表
   * 
   * @param request - ListLicensesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLicensesResponse
   */
  async listLicensesWithOptions(request: ListLicensesRequest, runtime: $Util.RuntimeOptions): Promise<ListLicensesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryStr)) {
      body["QueryStr"] = request.queryStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListLicenses",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLicensesResponse>(await this.callApi(params, req, runtime), new ListLicensesResponse({}));
  }

  /**
   * License列表
   * 
   * @param request - ListLicensesRequest
   * @returns ListLicensesResponse
   */
  async listLicenses(request: ListLicensesRequest): Promise<ListLicensesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLicensesWithOptions(request, runtime);
  }

  /**
   * 获取用户资源列表
   * 
   * @param request - ListUserResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserResourcesResponse
   */
  async listUserResourcesWithOptions(request: ListUserResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.commodityCode)) {
      body["CommodityCode"] = request.commodityCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListUserResources",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserResourcesResponse>(await this.callApi(params, req, runtime), new ListUserResourcesResponse({}));
  }

  /**
   * 获取用户资源列表
   * 
   * @param request - ListUserResourcesRequest
   * @returns ListUserResourcesResponse
   */
  async listUserResources(request: ListUserResourcesRequest): Promise<ListUserResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserResourcesWithOptions(request, runtime);
  }

  /**
   * 更新license描述
   * 
   * @param request - UpdateLicenseDescriptionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLicenseDescriptionResponse
   */
  async updateLicenseDescriptionWithOptions(request: UpdateLicenseDescriptionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLicenseDescriptionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLicenseDescription",
      version: "2020-09-20",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLicenseDescriptionResponse>(await this.callApi(params, req, runtime), new UpdateLicenseDescriptionResponse({}));
  }

  /**
   * 更新license描述
   * 
   * @param request - UpdateLicenseDescriptionRequest
   * @returns UpdateLicenseDescriptionResponse
   */
  async updateLicenseDescription(request: UpdateLicenseDescriptionRequest): Promise<UpdateLicenseDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLicenseDescriptionWithOptions(request, runtime);
  }

}
