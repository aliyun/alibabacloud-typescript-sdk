// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("modelservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 获取当月的使用量
   * 
   * @param request - GetMonthAmountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMonthAmountResponse
   */
  async getMonthAmountWithOptions(request: $_model.GetMonthAmountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMonthAmountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetMonthAmountResponse>(await this.callApi(params, req, runtime), new $_model.GetMonthAmountResponse({}));
  }

  /**
   * 获取当月的使用量
   * 
   * @param request - GetMonthAmountRequest
   * @returns GetMonthAmountResponse
   */
  async getMonthAmount(request: $_model.GetMonthAmountRequest): Promise<$_model.GetMonthAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMonthAmountWithOptions(request, headers, runtime);
  }

  /**
   * 获取user相关的appid, token等信息
   * 
   * @param request - GetUserRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserResponse
   */
  async getUserWithOptions(request: $_model.GetUserRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetUserResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.GetUserResponse>(await this.callApi(params, req, runtime), new $_model.GetUserResponse({}));
  }

  /**
   * 获取user相关的appid, token等信息
   * 
   * @param request - GetUserRequest
   * @returns GetUserResponse
   */
  async getUser(request: $_model.GetUserRequest): Promise<$_model.GetUserResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(request, headers, runtime);
  }

  /**
   * 每天的调用量列表
   * 
   * @param request - ListDayAmountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDayAmountResponse
   */
  async listDayAmountWithOptions(request: $_model.ListDayAmountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListDayAmountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListDayAmountResponse>(await this.callApi(params, req, runtime), new $_model.ListDayAmountResponse({}));
  }

  /**
   * 每天的调用量列表
   * 
   * @param request - ListDayAmountRequest
   * @returns ListDayAmountResponse
   */
  async listDayAmount(request: $_model.ListDayAmountRequest): Promise<$_model.ListDayAmountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDayAmountWithOptions(request, headers, runtime);
  }

  /**
   * 用户充值列表
   * 
   * @param request - ListRechargeBillsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRechargeBillsResponse
   */
  async listRechargeBillsWithOptions(request: $_model.ListRechargeBillsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListRechargeBillsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneType)) {
      query["SceneType"] = request.sceneType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<$_model.ListRechargeBillsResponse>(await this.callApi(params, req, runtime), new $_model.ListRechargeBillsResponse({}));
  }

  /**
   * 用户充值列表
   * 
   * @param request - ListRechargeBillsRequest
   * @returns ListRechargeBillsResponse
   */
  async listRechargeBills(request: $_model.ListRechargeBillsRequest): Promise<$_model.ListRechargeBillsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRechargeBillsWithOptions(request, headers, runtime);
  }

}
