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
    this._endpoint = this.getEndpoint("iqs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 申请正式开通
   * 
   * @param request - ApplyFormalServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyFormalServiceResponse
   */
  async applyFormalServiceWithOptions(request: $_model.ApplyFormalServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyFormalServiceResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ApplyFormalService",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/console/v1/services/commands/applyFormalService`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyFormalServiceResponse>(await this.callApi(params, req, runtime), new $_model.ApplyFormalServiceResponse({}));
  }

  /**
   * 申请正式开通
   * 
   * @param request - ApplyFormalServiceRequest
   * @returns ApplyFormalServiceResponse
   */
  async applyFormalService(request: $_model.ApplyFormalServiceRequest): Promise<$_model.ApplyFormalServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyFormalServiceWithOptions(request, headers, runtime);
  }

  /**
   * 校验账号类型
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckAccountTypeResponse
   */
  async checkAccountTypeWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CheckAccountTypeResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckAccountType",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/openService/v1/account/commands/checkAccountType`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckAccountTypeResponse>(await this.callApi(params, req, runtime), new $_model.CheckAccountTypeResponse({}));
  }

  /**
   * 校验账号类型
   * @returns CheckAccountTypeResponse
   */
  async checkAccountType(): Promise<$_model.CheckAccountTypeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkAccountTypeWithOptions(headers, runtime);
  }

  /**
   * 下载接口计量日明细
   * 
   * @param request - DownloadApiCallDailyDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadApiCallDailyDetailResponse
   */
  async downloadApiCallDailyDetailWithOptions(request: $_model.DownloadApiCallDailyDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadApiCallDailyDetailResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadApiCallDailyDetail",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/console/v1/monitors/commands/downloadApiCallDailyDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadApiCallDailyDetailResponse>(await this.callApi(params, req, runtime), new $_model.DownloadApiCallDailyDetailResponse({}));
  }

  /**
   * 下载接口计量日明细
   * 
   * @param request - DownloadApiCallDailyDetailRequest
   * @returns DownloadApiCallDailyDetailResponse
   */
  async downloadApiCallDailyDetail(request: $_model.DownloadApiCallDailyDetailRequest): Promise<$_model.DownloadApiCallDailyDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.downloadApiCallDailyDetailWithOptions(request, headers, runtime);
  }

  /**
   * 下载接口计量日明细
   * 
   * @param request - DownloadMeteringDailyDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DownloadMeteringDailyDetailResponse
   */
  async downloadMeteringDailyDetailWithOptions(request: $_model.DownloadMeteringDailyDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.DownloadMeteringDailyDetailResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DownloadMeteringDailyDetail",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/console/v1/monitors/commands/downloadMeteringDailyDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.DownloadMeteringDailyDetailResponse>(await this.callApi(params, req, runtime), new $_model.DownloadMeteringDailyDetailResponse({}));
  }

  /**
   * 下载接口计量日明细
   * 
   * @param request - DownloadMeteringDailyDetailRequest
   * @returns DownloadMeteringDailyDetailResponse
   */
  async downloadMeteringDailyDetail(request: $_model.DownloadMeteringDailyDetailRequest): Promise<$_model.DownloadMeteringDailyDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.downloadMeteringDailyDetailWithOptions(request, headers, runtime);
  }

  /**
   * 延长测试时间
   * 
   * @param request - ExpandSearchExpiredTimeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExpandSearchExpiredTimeResponse
   */
  async expandSearchExpiredTimeWithOptions(request: $_model.ExpandSearchExpiredTimeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ExpandSearchExpiredTimeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ExpandSearchExpiredTime",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/openService/v1/account/commands/expendExpiredTime`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ExpandSearchExpiredTimeResponse>(await this.callApi(params, req, runtime), new $_model.ExpandSearchExpiredTimeResponse({}));
  }

  /**
   * 延长测试时间
   * 
   * @param request - ExpandSearchExpiredTimeRequest
   * @returns ExpandSearchExpiredTimeResponse
   */
  async expandSearchExpiredTime(request: $_model.ExpandSearchExpiredTimeRequest): Promise<$_model.ExpandSearchExpiredTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.expandSearchExpiredTimeWithOptions(request, headers, runtime);
  }

  /**
   * 获取账号配置信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountConfigInfoResponse
   */
  async getAccountConfigInfoWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountConfigInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountConfigInfo",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/openService/v1/account/command/accountConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountConfigInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountConfigInfoResponse({}));
  }

  /**
   * 获取账号配置信息
   * @returns GetAccountConfigInfoResponse
   */
  async getAccountConfigInfo(): Promise<$_model.GetAccountConfigInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAccountConfigInfoWithOptions(headers, runtime);
  }

  /**
   * 查询用户申请记录
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAccountReviewRecordResponse
   */
  async getAccountReviewRecordWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetAccountReviewRecordResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAccountReviewRecord",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/console/v1/services/commands/reviewRecord`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetAccountReviewRecordResponse>(await this.callApi(params, req, runtime), new $_model.GetAccountReviewRecordResponse({}));
  }

  /**
   * 查询用户申请记录
   * @returns GetAccountReviewRecordResponse
   */
  async getAccountReviewRecord(): Promise<$_model.GetAccountReviewRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAccountReviewRecordWithOptions(headers, runtime);
  }

  /**
   * 查询计量汇总信息
   * 
   * @param request - GetMeteringSummaryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMeteringSummaryResponse
   */
  async getMeteringSummaryWithOptions(request: $_model.GetMeteringSummaryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetMeteringSummaryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billPeriod)) {
      query["billPeriod"] = request.billPeriod;
    }

    if (!$dara.isNull(request.billingItem)) {
      query["billingItem"] = request.billingItem;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.subAccountId)) {
      query["subAccountId"] = request.subAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMeteringSummary",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/console/v1/monitors/commands/metering/summary`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetMeteringSummaryResponse>(await this.callApi(params, req, runtime), new $_model.GetMeteringSummaryResponse({}));
  }

  /**
   * 查询计量汇总信息
   * 
   * @param request - GetMeteringSummaryRequest
   * @returns GetMeteringSummaryResponse
   */
  async getMeteringSummary(request: $_model.GetMeteringSummaryRequest): Promise<$_model.GetMeteringSummaryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMeteringSummaryWithOptions(request, headers, runtime);
  }

  /**
   * 查询服务额度信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceConfigResponse
   */
  async getServiceConfigWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetServiceConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceConfig",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/console/v1/services/commands/serviceConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetServiceConfigResponse>(await this.callApi(params, req, runtime), new $_model.GetServiceConfigResponse({}));
  }

  /**
   * 查询服务额度信息
   * @returns GetServiceConfigResponse
   */
  async getServiceConfig(): Promise<$_model.GetServiceConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceConfigWithOptions(headers, runtime);
  }

  /**
   * 查询Api调用量（性能）日明细
   * 
   * @param request - ListApiCallDailyDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiCallDailyDetailResponse
   */
  async listApiCallDailyDetailWithOptions(request: $_model.ListApiCallDailyDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiCallDailyDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.apiName)) {
      query["apiName"] = request.apiName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.engineType)) {
      query["engineType"] = request.engineType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiCallDailyDetail",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/console/v1/monitors/commands/apiCall/dailyDetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiCallDailyDetailResponse>(await this.callApi(params, req, runtime), new $_model.ListApiCallDailyDetailResponse({}));
  }

  /**
   * 查询Api调用量（性能）日明细
   * 
   * @param request - ListApiCallDailyDetailRequest
   * @returns ListApiCallDailyDetailResponse
   */
  async listApiCallDailyDetail(request: $_model.ListApiCallDailyDetailRequest): Promise<$_model.ListApiCallDailyDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApiCallDailyDetailWithOptions(request, headers, runtime);
  }

  /**
   * Api名称列表
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListApiNamesResponse
   */
  async listApiNamesWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListApiNamesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListApiNames",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/console/v1/monitors/commands/apiNames`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListApiNamesResponse>(await this.callApi(params, req, runtime), new $_model.ListApiNamesResponse({}));
  }

  /**
   * Api名称列表
   * @returns ListApiNamesResponse
   */
  async listApiNames(): Promise<$_model.ListApiNamesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApiNamesWithOptions(headers, runtime);
  }

  /**
   * 查询计量日明细信息
   * 
   * @param request - ListMeteringDailyDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMeteringDailyDetailResponse
   */
  async listMeteringDailyDetailWithOptions(request: $_model.ListMeteringDailyDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListMeteringDailyDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.billPeriod)) {
      query["billPeriod"] = request.billPeriod;
    }

    if (!$dara.isNull(request.billingItem)) {
      query["billingItem"] = request.billingItem;
    }

    if (!$dara.isNull(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!$dara.isNull(request.subAccountId)) {
      query["subAccountId"] = request.subAccountId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMeteringDailyDetail",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/console/v1/monitors/commands/metering/dailyDetail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListMeteringDailyDetailResponse>(await this.callApi(params, req, runtime), new $_model.ListMeteringDailyDetailResponse({}));
  }

  /**
   * 查询计量日明细信息
   * 
   * @param request - ListMeteringDailyDetailRequest
   * @returns ListMeteringDailyDetailResponse
   */
  async listMeteringDailyDetail(request: $_model.ListMeteringDailyDetailRequest): Promise<$_model.ListMeteringDailyDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMeteringDailyDetailWithOptions(request, headers, runtime);
  }

  /**
   * 查询主账号的所有子账号信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSubAccountInfoResponse
   */
  async listSubAccountInfoWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSubAccountInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSubAccountInfo",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/console/v1/monitors/commands/subAccountInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSubAccountInfoResponse>(await this.callApi(params, req, runtime), new $_model.ListSubAccountInfoResponse({}));
  }

  /**
   * 查询主账号的所有子账号信息
   * @returns ListSubAccountInfoResponse
   */
  async listSubAccountInfo(): Promise<$_model.ListSubAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSubAccountInfoWithOptions(headers, runtime);
  }

  /**
   * 管理智搜用户
   * 
   * @param request - ManageSearchAccountInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ManageSearchAccountInfoResponse
   */
  async manageSearchAccountInfoWithOptions(request: $_model.ManageSearchAccountInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ManageSearchAccountInfoResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ManageSearchAccountInfo",
      version: "2024-11-21",
      protocol: "HTTPS",
      pathname: `/linked-retrieval/linked-retrieval-admin/openService/v1/account/commands/manage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ManageSearchAccountInfoResponse>(await this.callApi(params, req, runtime), new $_model.ManageSearchAccountInfoResponse({}));
  }

  /**
   * 管理智搜用户
   * 
   * @param request - ManageSearchAccountInfoRequest
   * @returns ManageSearchAccountInfoResponse
   */
  async manageSearchAccountInfo(request: $_model.ManageSearchAccountInfoRequest): Promise<$_model.ManageSearchAccountInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.manageSearchAccountInfoWithOptions(request, headers, runtime);
  }

}
