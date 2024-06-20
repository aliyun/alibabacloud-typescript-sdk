// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class GetMonthAmountRequest extends $tea.Model {
  sceneType?: string;
  static names(): { [key: string]: string } {
    return {
      sceneType: 'SceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonthAmountResponseBody extends $tea.Model {
  backgroundAmount?: number;
  postpayAmount?: number;
  prepayAmount?: number;
  requestId?: string;
  totalAmount?: number;
  static names(): { [key: string]: string } {
    return {
      backgroundAmount: 'BackgroundAmount',
      postpayAmount: 'PostpayAmount',
      prepayAmount: 'PrepayAmount',
      requestId: 'RequestId',
      totalAmount: 'TotalAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backgroundAmount: 'number',
      postpayAmount: 'number',
      prepayAmount: 'number',
      requestId: 'string',
      totalAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMonthAmountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMonthAmountResponseBody;
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
      body: GetMonthAmountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserRequest extends $tea.Model {
  sceneType?: string;
  static names(): { [key: string]: string } {
    return {
      sceneType: 'SceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  appId?: string;
  code?: string;
  host?: string;
  message?: string;
  requestId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      host: 'Host',
      message: 'Message',
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      code: 'string',
      host: 'string',
      message: 'string',
      requestId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserResponseBody;
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
      body: GetUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDayAmountRequest extends $tea.Model {
  endTime?: string;
  sceneType?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      sceneType: 'SceneType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      sceneType: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDayAmountResponseBody extends $tea.Model {
  dayAmounts?: ListDayAmountResponseBodyDayAmounts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dayAmounts: 'DayAmounts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dayAmounts: { 'type': 'array', 'itemType': ListDayAmountResponseBodyDayAmounts },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDayAmountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDayAmountResponseBody;
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
      body: ListDayAmountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRechargeBillsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  sceneType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sceneType: 'SceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sceneType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRechargeBillsResponseBody extends $tea.Model {
  instanseInfos?: ListRechargeBillsResponseBodyInstanseInfos[];
  requestId?: string;
  residueAmount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanseInfos: 'InstanseInfos',
      requestId: 'RequestId',
      residueAmount: 'ResidueAmount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanseInfos: { 'type': 'array', 'itemType': ListRechargeBillsResponseBodyInstanseInfos },
      requestId: 'string',
      residueAmount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRechargeBillsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRechargeBillsResponseBody;
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
      body: ListRechargeBillsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDayAmountResponseBodyDayAmounts extends $tea.Model {
  amount?: number;
  date?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      date: 'Date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      date: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRechargeBillsResponseBodyInstanseInfos extends $tea.Model {
  currTimes?: number;
  gmtEndTime?: string;
  initTimes?: number;
  instanceId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      currTimes: 'CurrTimes',
      gmtEndTime: 'GmtEndTime',
      initTimes: 'InitTimes',
      instanceId: 'InstanceId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currTimes: 'number',
      gmtEndTime: 'string',
      initTimes: 'number',
      instanceId: 'string',
      source: 'string',
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
    this._endpoint = this.getEndpoint("modelservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @summary 获取当月的使用量
   *
   * @param request GetMonthAmountRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetMonthAmountResponse
   */
  async getMonthAmountWithOptions(request: GetMonthAmountRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMonthAmountResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMonthAmount",
      version: "2022-06-14",
      protocol: "HTTPS",
      pathname: `/api/v1/statistics/month/amount`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMonthAmountResponse>(await this.callApi(params, req, runtime), new GetMonthAmountResponse({}));
  }

  /**
   * @summary 获取当月的使用量
   *
   * @param request GetMonthAmountRequest
   * @return GetMonthAmountResponse
   */
  async getMonthAmount(request: GetMonthAmountRequest): Promise<GetMonthAmountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMonthAmountWithOptions(request, headers, runtime);
  }

  /**
   * @summary 获取user相关的appid, token等信息
   *
   * @param request GetUserRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUserResponse
   */
  async getUserWithOptions(request: GetUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2022-06-14",
      protocol: "HTTPS",
      pathname: `/api/v1/user/info`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  /**
   * @summary 获取user相关的appid, token等信息
   *
   * @param request GetUserRequest
   * @return GetUserResponse
   */
  async getUser(request: GetUserRequest): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(request, headers, runtime);
  }

  /**
   * @summary 每天的调用量列表
   *
   * @param request ListDayAmountRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDayAmountResponse
   */
  async listDayAmountWithOptions(request: ListDayAmountRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDayAmountResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDayAmount",
      version: "2022-06-14",
      protocol: "HTTPS",
      pathname: `/api/v1/statistics/day/amount`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDayAmountResponse>(await this.callApi(params, req, runtime), new ListDayAmountResponse({}));
  }

  /**
   * @summary 每天的调用量列表
   *
   * @param request ListDayAmountRequest
   * @return ListDayAmountResponse
   */
  async listDayAmount(request: ListDayAmountRequest): Promise<ListDayAmountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDayAmountWithOptions(request, headers, runtime);
  }

  /**
   * @summary 用户充值列表
   *
   * @param request ListRechargeBillsRequest
   * @param headers map
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListRechargeBillsResponse
   */
  async listRechargeBillsWithOptions(request: ListRechargeBillsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRechargeBillsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRechargeBills",
      version: "2022-06-14",
      protocol: "HTTPS",
      pathname: `/api/v1/statistics/rechargebills`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRechargeBillsResponse>(await this.callApi(params, req, runtime), new ListRechargeBillsResponse({}));
  }

  /**
   * @summary 用户充值列表
   *
   * @param request ListRechargeBillsRequest
   * @return ListRechargeBillsResponse
   */
  async listRechargeBills(request: ListRechargeBillsRequest): Promise<ListRechargeBillsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRechargeBillsWithOptions(request, headers, runtime);
  }

}
