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
    this._endpoint = this.getEndpoint("airticketopen", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 账号资金流水
   * 
   * @param request - AccountFlowListRequest
   * @param headers - AccountFlowListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AccountFlowListResponse
   */
  async accountFlowListWithOptions(request: $_model.AccountFlowListRequest, headers: $_model.AccountFlowListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AccountFlowListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dayNum)) {
      query["day_num"] = request.dayNum;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["page_index"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.utcBeginTime)) {
      query["utc_begin_time"] = request.utcBeginTime;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AccountFlowList",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/account/flow-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.AccountFlowListResponse>(await this.callApi(params, req, runtime), new $_model.AccountFlowListResponse({}));
  }

  /**
   * 账号资金流水
   * 
   * @param request - AccountFlowListRequest
   * @returns AccountFlowListResponse
   */
  async accountFlowList(request: $_model.AccountFlowListRequest): Promise<$_model.AccountFlowListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AccountFlowListHeaders({ });
    return await this.accountFlowListWithOptions(request, headers, runtime);
  }

  /**
   * Ancillary - Suggestion
   * 
   * @remarks
   * search ancillary for selected solution, you should enter the solution_id returned by enrich.
   * 
   * @param request - AncillarySuggestRequest
   * @param headers - AncillarySuggestHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AncillarySuggestResponse
   */
  async ancillarySuggestWithOptions(request: $_model.AncillarySuggestRequest, headers: $_model.AncillarySuggestHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.AncillarySuggestResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.solutionId)) {
      body["solution_id"] = request.solutionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AncillarySuggest",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/ancillary/action-suggest`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AncillarySuggestResponse>(await this.callApi(params, req, runtime), new $_model.AncillarySuggestResponse({}));
  }

  /**
   * Ancillary - Suggestion
   * 
   * @remarks
   * search ancillary for selected solution, you should enter the solution_id returned by enrich.
   * 
   * @param request - AncillarySuggestRequest
   * @returns AncillarySuggestResponse
   */
  async ancillarySuggest(request: $_model.AncillarySuggestRequest): Promise<$_model.AncillarySuggestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.AncillarySuggestHeaders({ });
    return await this.ancillarySuggestWithOptions(request, headers, runtime);
  }

  /**
   * Transaction-Reservation
   * 
   * @remarks
   * Enter solution_id returned by enrich, ancillary_id returned by ancillarySuggest(optional), passengers information and contact information, the book interface will create an order wait for pay.
   * There are two issues should be noticed:
   * 1. the solution_id must be processed by pricing.
   * 2. the order created by book interface should be pay within 30 minutes, otherwise the order will be closed.
   * 
   * @param tmpReq - BookRequest
   * @param headers - BookHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BookResponse
   */
  async bookWithOptions(tmpReq: $_model.BookRequest, headers: $_model.BookHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.BookResponse> {
    tmpReq.validate();
    let request = new $_model.BookShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contact)) {
      request.contactShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contact, "contact", "json");
    }

    if (!$dara.isNull(tmpReq.passengerAncillaryPurchaseMapList)) {
      request.passengerAncillaryPurchaseMapListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerAncillaryPurchaseMapList, "passenger_ancillary_purchase_map_list", "json");
    }

    if (!$dara.isNull(tmpReq.passengerList)) {
      request.passengerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.passengerList, "passenger_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.contactShrink)) {
      body["contact"] = request.contactShrink;
    }

    if (!$dara.isNull(request.outOrderNum)) {
      body["out_order_num"] = request.outOrderNum;
    }

    if (!$dara.isNull(request.passengerAncillaryPurchaseMapListShrink)) {
      body["passenger_ancillary_purchase_map_list"] = request.passengerAncillaryPurchaseMapListShrink;
    }

    if (!$dara.isNull(request.passengerListShrink)) {
      body["passenger_list"] = request.passengerListShrink;
    }

    if (!$dara.isNull(request.solutionId)) {
      body["solution_id"] = request.solutionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Book",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-book`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BookResponse>(await this.callApi(params, req, runtime), new $_model.BookResponse({}));
  }

  /**
   * Transaction-Reservation
   * 
   * @remarks
   * Enter solution_id returned by enrich, ancillary_id returned by ancillarySuggest(optional), passengers information and contact information, the book interface will create an order wait for pay.
   * There are two issues should be noticed:
   * 1. the solution_id must be processed by pricing.
   * 2. the order created by book interface should be pay within 30 minutes, otherwise the order will be closed.
   * 
   * @param request - BookRequest
   * @returns BookResponse
   */
  async book(request: $_model.BookRequest): Promise<$_model.BookResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.BookHeaders({ });
    return await this.bookWithOptions(request, headers, runtime);
  }

  /**
   * Transaction - Unpaid Cancellation
   * 
   * @remarks
   * close an unpaid order
   * 
   * @param request - CancelRequest
   * @param headers - CancelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelResponse
   */
  async cancelWithOptions(request: $_model.CancelRequest, headers: $_model.CancelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CancelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderNum)) {
      body["order_num"] = request.orderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Cancel",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelResponse>(await this.callApi(params, req, runtime), new $_model.CancelResponse({}));
  }

  /**
   * Transaction - Unpaid Cancellation
   * 
   * @remarks
   * close an unpaid order
   * 
   * @param request - CancelRequest
   * @returns CancelResponse
   */
  async cancel(request: $_model.CancelRequest): Promise<$_model.CancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CancelHeaders({ });
    return await this.cancelWithOptions(request, headers, runtime);
  }

  /**
   * 改签-Apply
   * 
   * @param tmpReq - ChangeApplyRequest
   * @param headers - ChangeApplyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeApplyResponse
   */
  async changeApplyWithOptions(tmpReq: $_model.ChangeApplyRequest, headers: $_model.ChangeApplyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeApplyResponse> {
    tmpReq.validate();
    let request = new $_model.ChangeApplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.changePassengerList)) {
      request.changePassengerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.changePassengerList, "change_passenger_list", "json");
    }

    if (!$dara.isNull(tmpReq.changedJourneys)) {
      request.changedJourneysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.changedJourneys, "changed_journeys", "json");
    }

    if (!$dara.isNull(tmpReq.contact)) {
      request.contactShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contact, "contact", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changePassengerListShrink)) {
      body["change_passenger_list"] = request.changePassengerListShrink;
    }

    if (!$dara.isNull(request.changedJourneysShrink)) {
      body["changed_journeys"] = request.changedJourneysShrink;
    }

    if (!$dara.isNull(request.contactShrink)) {
      body["contact"] = request.contactShrink;
    }

    if (!$dara.isNull(request.orderNum)) {
      body["order_num"] = request.orderNum;
    }

    if (!$dara.isNull(request.remark)) {
      body["remark"] = request.remark;
    }

    if (!$dara.isNull(request.type)) {
      body["type"] = request.type;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeApply",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/change/action-apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeApplyResponse>(await this.callApi(params, req, runtime), new $_model.ChangeApplyResponse({}));
  }

  /**
   * 改签-Apply
   * 
   * @param request - ChangeApplyRequest
   * @returns ChangeApplyResponse
   */
  async changeApply(request: $_model.ChangeApplyRequest): Promise<$_model.ChangeApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ChangeApplyHeaders({ });
    return await this.changeApplyWithOptions(request, headers, runtime);
  }

  /**
   * 改签-取消
   * 
   * @param request - ChangeCancelRequest
   * @param headers - ChangeCancelHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeCancelResponse
   */
  async changeCancelWithOptions(request: $_model.ChangeCancelRequest, headers: $_model.ChangeCancelHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeCancelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeOrderNum)) {
      body["change_order_num"] = request.changeOrderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeCancel",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/change/action-cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeCancelResponse>(await this.callApi(params, req, runtime), new $_model.ChangeCancelResponse({}));
  }

  /**
   * 改签-取消
   * 
   * @param request - ChangeCancelRequest
   * @returns ChangeCancelResponse
   */
  async changeCancel(request: $_model.ChangeCancelRequest): Promise<$_model.ChangeCancelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ChangeCancelHeaders({ });
    return await this.changeCancelWithOptions(request, headers, runtime);
  }

  /**
   * 改签-确认
   * 
   * @param request - ChangeConfirmRequest
   * @param headers - ChangeConfirmHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeConfirmResponse
   */
  async changeConfirmWithOptions(request: $_model.ChangeConfirmRequest, headers: $_model.ChangeConfirmHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeConfirmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeOrderNum)) {
      body["change_order_num"] = request.changeOrderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeConfirm",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/change/action-confirm`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeConfirmResponse>(await this.callApi(params, req, runtime), new $_model.ChangeConfirmResponse({}));
  }

  /**
   * 改签-确认
   * 
   * @param request - ChangeConfirmRequest
   * @returns ChangeConfirmResponse
   */
  async changeConfirm(request: $_model.ChangeConfirmRequest): Promise<$_model.ChangeConfirmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ChangeConfirmHeaders({ });
    return await this.changeConfirmWithOptions(request, headers, runtime);
  }

  /**
   * Change-Detail
   * 
   * @param request - ChangeDetailRequest
   * @param headers - ChangeDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeDetailResponse
   */
  async changeDetailWithOptions(request: $_model.ChangeDetailRequest, headers: $_model.ChangeDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.changeOrderNum)) {
      query["change_order_num"] = request.changeOrderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeDetail",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/change/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeDetailResponse>(await this.callApi(params, req, runtime), new $_model.ChangeDetailResponse({}));
  }

  /**
   * Change-Detail
   * 
   * @param request - ChangeDetailRequest
   * @returns ChangeDetailResponse
   */
  async changeDetail(request: $_model.ChangeDetailRequest): Promise<$_model.ChangeDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ChangeDetailHeaders({ });
    return await this.changeDetailWithOptions(request, headers, runtime);
  }

  /**
   * 改签单列表-关于买家账号
   * 
   * @param request - ChangeDetailListOfBuyerRequest
   * @param headers - ChangeDetailListOfBuyerHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeDetailListOfBuyerResponse
   */
  async changeDetailListOfBuyerWithOptions(request: $_model.ChangeDetailListOfBuyerRequest, headers: $_model.ChangeDetailListOfBuyerHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeDetailListOfBuyerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageIndex)) {
      query["page_index"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.utcCreateBegin)) {
      query["utc_create_begin"] = request.utcCreateBegin;
    }

    if (!$dara.isNull(request.utcCreateEnd)) {
      query["utc_create_end"] = request.utcCreateEnd;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeDetailListOfBuyer",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/change/buyer/detail-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeDetailListOfBuyerResponse>(await this.callApi(params, req, runtime), new $_model.ChangeDetailListOfBuyerResponse({}));
  }

  /**
   * 改签单列表-关于买家账号
   * 
   * @param request - ChangeDetailListOfBuyerRequest
   * @returns ChangeDetailListOfBuyerResponse
   */
  async changeDetailListOfBuyer(request: $_model.ChangeDetailListOfBuyerRequest): Promise<$_model.ChangeDetailListOfBuyerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ChangeDetailListOfBuyerHeaders({ });
    return await this.changeDetailListOfBuyerWithOptions(request, headers, runtime);
  }

  /**
   * 改签单列表-关于正向订单
   * 
   * @param request - ChangeDetailListOfOrderNumRequest
   * @param headers - ChangeDetailListOfOrderNumHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeDetailListOfOrderNumResponse
   */
  async changeDetailListOfOrderNumWithOptions(request: $_model.ChangeDetailListOfOrderNumRequest, headers: $_model.ChangeDetailListOfOrderNumHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeDetailListOfOrderNumResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderNum)) {
      query["order_num"] = request.orderNum;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["page_index"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeDetailListOfOrderNum",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/change/order-num/detail-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeDetailListOfOrderNumResponse>(await this.callApi(params, req, runtime), new $_model.ChangeDetailListOfOrderNumResponse({}));
  }

  /**
   * 改签单列表-关于正向订单
   * 
   * @param request - ChangeDetailListOfOrderNumRequest
   * @returns ChangeDetailListOfOrderNumResponse
   */
  async changeDetailListOfOrderNum(request: $_model.ChangeDetailListOfOrderNumRequest): Promise<$_model.ChangeDetailListOfOrderNumResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.ChangeDetailListOfOrderNumHeaders({ });
    return await this.changeDetailListOfOrderNumWithOptions(request, headers, runtime);
  }

  /**
   * 数据收集-低价航班信息
   * 
   * @param tmpReq - CollectFlightLowestPriceRequest
   * @param headers - CollectFlightLowestPriceHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CollectFlightLowestPriceResponse
   */
  async collectFlightLowestPriceWithOptions(tmpReq: $_model.CollectFlightLowestPriceRequest, headers: $_model.CollectFlightLowestPriceHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.CollectFlightLowestPriceResponse> {
    tmpReq.validate();
    let request = new $_model.CollectFlightLowestPriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.lowestPriceFlightInfoList)) {
      request.lowestPriceFlightInfoListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.lowestPriceFlightInfoList, "lowest_price_flight_info_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lowestPriceFlightInfoListShrink)) {
      body["lowest_price_flight_info_list"] = request.lowestPriceFlightInfoListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CollectFlightLowestPrice",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/data-collect/flight-lowest-price`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CollectFlightLowestPriceResponse>(await this.callApi(params, req, runtime), new $_model.CollectFlightLowestPriceResponse({}));
  }

  /**
   * 数据收集-低价航班信息
   * 
   * @param request - CollectFlightLowestPriceRequest
   * @returns CollectFlightLowestPriceResponse
   */
  async collectFlightLowestPrice(request: $_model.CollectFlightLowestPriceRequest): Promise<$_model.CollectFlightLowestPriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.CollectFlightLowestPriceHeaders({ });
    return await this.collectFlightLowestPriceWithOptions(request, headers, runtime);
  }

  /**
   * Search-Enrich
   * 
   * @remarks
   * Choose either `solution_id` or `journey_param_list` in the parameters, and `solution_id` needs to be obtained from the Search interface.
   * 
   * @param tmpReq - EnrichRequest
   * @param headers - EnrichHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnrichResponse
   */
  async enrichWithOptions(tmpReq: $_model.EnrichRequest, headers: $_model.EnrichHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.EnrichResponse> {
    tmpReq.validate();
    let request = new $_model.EnrichShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.journeyParamList)) {
      request.journeyParamListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.journeyParamList, "journey_param_list", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adults)) {
      body["adults"] = request.adults;
    }

    if (!$dara.isNull(request.cabinClass)) {
      body["cabin_class"] = request.cabinClass;
    }

    if (!$dara.isNull(request.children)) {
      body["children"] = request.children;
    }

    if (!$dara.isNull(request.infants)) {
      body["infants"] = request.infants;
    }

    if (!$dara.isNull(request.journeyParamListShrink)) {
      body["journey_param_list"] = request.journeyParamListShrink;
    }

    if (!$dara.isNull(request.solutionId)) {
      body["solution_id"] = request.solutionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Enrich",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-enrich`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.EnrichResponse>(await this.callApi(params, req, runtime), new $_model.EnrichResponse({}));
  }

  /**
   * Search-Enrich
   * 
   * @remarks
   * Choose either `solution_id` or `journey_param_list` in the parameters, and `solution_id` needs to be obtained from the Search interface.
   * 
   * @param request - EnrichRequest
   * @returns EnrichResponse
   */
  async enrich(request: $_model.EnrichRequest): Promise<$_model.EnrichResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.EnrichHeaders({ });
    return await this.enrichWithOptions(request, headers, runtime);
  }

  /**
   * 附件上传
   * 
   * @param request - FileUploadRequest
   * @param headers - FileUploadHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FileUploadResponse
   */
  async fileUploadWithOptions(request: $_model.FileUploadRequest, headers: $_model.FileUploadHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FileUploadResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fileContent)) {
      body["file_content"] = request.fileContent;
    }

    if (!$dara.isNull(request.orderNum)) {
      body["order_num"] = request.orderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "FileUpload",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/attachment/action-upload`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FileUploadResponse>(await this.callApi(params, req, runtime), new $_model.FileUploadResponse({}));
  }

  /**
   * 附件上传
   * 
   * @param request - FileUploadRequest
   * @returns FileUploadResponse
   */
  async fileUpload(request: $_model.FileUploadRequest): Promise<$_model.FileUploadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FileUploadHeaders({ });
    return await this.fileUploadWithOptions(request, headers, runtime);
  }

  /**
   * 航变信息-关于订单
   * 
   * @param request - FlightChangeOfOrderRequest
   * @param headers - FlightChangeOfOrderHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FlightChangeOfOrderResponse
   */
  async flightChangeOfOrderWithOptions(request: $_model.FlightChangeOfOrderRequest, headers: $_model.FlightChangeOfOrderHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.FlightChangeOfOrderResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderNum)) {
      query["order_num"] = request.orderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FlightChangeOfOrder",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/flightchange/of-order`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.FlightChangeOfOrderResponse>(await this.callApi(params, req, runtime), new $_model.FlightChangeOfOrderResponse({}));
  }

  /**
   * 航变信息-关于订单
   * 
   * @param request - FlightChangeOfOrderRequest
   * @returns FlightChangeOfOrderResponse
   */
  async flightChangeOfOrder(request: $_model.FlightChangeOfOrderRequest): Promise<$_model.FlightChangeOfOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.FlightChangeOfOrderHeaders({ });
    return await this.flightChangeOfOrderWithOptions(request, headers, runtime);
  }

  /**
   * Get Token
   * 
   * @param request - GetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: $_model.GetTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      query["app_key"] = request.appKey;
    }

    if (!$dara.isNull(request.appSecret)) {
      query["app_secret"] = request.appSecret;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToken",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/token`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetTokenResponse>(await this.callApi(params, req, runtime), new $_model.GetTokenResponse({}));
  }

  /**
   * Get Token
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: $_model.GetTokenRequest): Promise<$_model.GetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  /**
   * 航程行李直挂
   * 
   * @param tmpReq - LuggageDirectRequest
   * @param headers - LuggageDirectHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LuggageDirectResponse
   */
  async luggageDirectWithOptions(tmpReq: $_model.LuggageDirectRequest, headers: $_model.LuggageDirectHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.LuggageDirectResponse> {
    tmpReq.validate();
    let request = new $_model.LuggageDirectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.flightSegmentParamList)) {
      request.flightSegmentParamListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.flightSegmentParamList, "flight_segment_param_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.flightSegmentParamListShrink)) {
      query["flight_segment_param_list"] = request.flightSegmentParamListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "LuggageDirect",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/flight-data/luggage-direct`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.LuggageDirectResponse>(await this.callApi(params, req, runtime), new $_model.LuggageDirectResponse({}));
  }

  /**
   * 航程行李直挂
   * 
   * @param request - LuggageDirectRequest
   * @returns LuggageDirectResponse
   */
  async luggageDirect(request: $_model.LuggageDirectRequest): Promise<$_model.LuggageDirectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.LuggageDirectHeaders({ });
    return await this.luggageDirectWithOptions(request, headers, runtime);
  }

  /**
   * Trade-Order Details
   * 
   * @remarks
   * query order detail
   * 
   * @param request - OrderDetailRequest
   * @param headers - OrderDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OrderDetailResponse
   */
  async orderDetailWithOptions(request: $_model.OrderDetailRequest, headers: $_model.OrderDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.OrderDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderNum)) {
      query["order_num"] = request.orderNum;
    }

    if (!$dara.isNull(request.outOrderNum)) {
      query["out_order_num"] = request.outOrderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OrderDetail",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/order-detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OrderDetailResponse>(await this.callApi(params, req, runtime), new $_model.OrderDetailResponse({}));
  }

  /**
   * Trade-Order Details
   * 
   * @remarks
   * query order detail
   * 
   * @param request - OrderDetailRequest
   * @returns OrderDetailResponse
   */
  async orderDetail(request: $_model.OrderDetailRequest): Promise<$_model.OrderDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.OrderDetailHeaders({ });
    return await this.orderDetailWithOptions(request, headers, runtime);
  }

  /**
   * Trade - Order List
   * 
   * @remarks
   * query order list
   * 
   * @param request - OrderListRequest
   * @param headers - OrderListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OrderListResponse
   */
  async orderListWithOptions(request: $_model.OrderListRequest, headers: $_model.OrderListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.OrderListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bookTimeEnd)) {
      query["book_time_end"] = request.bookTimeEnd;
    }

    if (!$dara.isNull(request.bookTimeStart)) {
      query["book_time_start"] = request.bookTimeStart;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["page_index"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OrderList",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/order-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.OrderListResponse>(await this.callApi(params, req, runtime), new $_model.OrderListResponse({}));
  }

  /**
   * Trade - Order List
   * 
   * @remarks
   * query order list
   * 
   * @param request - OrderListRequest
   * @returns OrderListResponse
   */
  async orderList(request: $_model.OrderListRequest): Promise<$_model.OrderListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.OrderListHeaders({ });
    return await this.orderListWithOptions(request, headers, runtime);
  }

  /**
   * Transaction - Seat and Price Verification
   * 
   * @remarks
   * Check is price and remaining seats of solution you selected has changed. You should enter the solution_id returned by enrich.
   * 
   * @param request - PricingRequest
   * @param headers - PricingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PricingResponse
   */
  async pricingWithOptions(request: $_model.PricingRequest, headers: $_model.PricingHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.PricingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.solutionId)) {
      body["solution_id"] = request.solutionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Pricing",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-pricing`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PricingResponse>(await this.callApi(params, req, runtime), new $_model.PricingResponse({}));
  }

  /**
   * Transaction - Seat and Price Verification
   * 
   * @remarks
   * Check is price and remaining seats of solution you selected has changed. You should enter the solution_id returned by enrich.
   * 
   * @param request - PricingRequest
   * @returns PricingResponse
   */
  async pricing(request: $_model.PricingRequest): Promise<$_model.PricingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.PricingHeaders({ });
    return await this.pricingWithOptions(request, headers, runtime);
  }

  /**
   * Ticket Refund - Application
   * 
   * @param tmpReq - RefundApplyRequest
   * @param headers - RefundApplyHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundApplyResponse
   */
  async refundApplyWithOptions(tmpReq: $_model.RefundApplyRequest, headers: $_model.RefundApplyHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RefundApplyResponse> {
    tmpReq.validate();
    let request = new $_model.RefundApplyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.refundJourneys)) {
      request.refundJourneysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.refundJourneys, "refund_journeys", "json");
    }

    if (!$dara.isNull(tmpReq.refundPassengerList)) {
      request.refundPassengerListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.refundPassengerList, "refund_passenger_list", "json");
    }

    if (!$dara.isNull(tmpReq.refundType)) {
      request.refundTypeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.refundType, "refund_type", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderNum)) {
      body["order_num"] = request.orderNum;
    }

    if (!$dara.isNull(request.refundJourneysShrink)) {
      body["refund_journeys"] = request.refundJourneysShrink;
    }

    if (!$dara.isNull(request.refundPassengerListShrink)) {
      body["refund_passenger_list"] = request.refundPassengerListShrink;
    }

    if (!$dara.isNull(request.refundTypeShrink)) {
      body["refund_type"] = request.refundTypeShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefundApply",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/refund/action-apply`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefundApplyResponse>(await this.callApi(params, req, runtime), new $_model.RefundApplyResponse({}));
  }

  /**
   * Ticket Refund - Application
   * 
   * @param request - RefundApplyRequest
   * @returns RefundApplyResponse
   */
  async refundApply(request: $_model.RefundApplyRequest): Promise<$_model.RefundApplyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RefundApplyHeaders({ });
    return await this.refundApplyWithOptions(request, headers, runtime);
  }

  /**
   * Refund - Detail
   * 
   * @param request - RefundDetailRequest
   * @param headers - RefundDetailHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundDetailResponse
   */
  async refundDetailWithOptions(request: $_model.RefundDetailRequest, headers: $_model.RefundDetailHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RefundDetailResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.refundOrderNum)) {
      query["refund_order_num"] = request.refundOrderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefundDetail",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/refund/detail`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefundDetailResponse>(await this.callApi(params, req, runtime), new $_model.RefundDetailResponse({}));
  }

  /**
   * Refund - Detail
   * 
   * @param request - RefundDetailRequest
   * @returns RefundDetailResponse
   */
  async refundDetail(request: $_model.RefundDetailRequest): Promise<$_model.RefundDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RefundDetailHeaders({ });
    return await this.refundDetailWithOptions(request, headers, runtime);
  }

  /**
   * Refund - Detail List
   * 
   * @param request - RefundDetailListRequest
   * @param headers - RefundDetailListHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefundDetailListResponse
   */
  async refundDetailListWithOptions(request: $_model.RefundDetailListRequest, headers: $_model.RefundDetailListHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.RefundDetailListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderNum)) {
      query["order_num"] = request.orderNum;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["page_index"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["page_size"] = request.pageSize;
    }

    if (!$dara.isNull(request.refundCreateBeginTime)) {
      query["refund_create_begin_time"] = request.refundCreateBeginTime;
    }

    if (!$dara.isNull(request.refundCreateEndTime)) {
      query["refund_create_end_time"] = request.refundCreateEndTime;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefundDetailList",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/refund/detail-list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefundDetailListResponse>(await this.callApi(params, req, runtime), new $_model.RefundDetailListResponse({}));
  }

  /**
   * Refund - Detail List
   * 
   * @param request - RefundDetailListRequest
   * @returns RefundDetailListResponse
   */
  async refundDetailList(request: $_model.RefundDetailListRequest): Promise<$_model.RefundDetailListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.RefundDetailListHeaders({ });
    return await this.refundDetailListWithOptions(request, headers, runtime);
  }

  /**
   * Search
   * 
   * @remarks
   * Enter the information of departure, arrival, departure date, passenger number and cabin, return the lowest price for each flight.
   * 
   * @param tmpReq - SearchRequest
   * @param headers - SearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchResponse
   */
  async searchWithOptions(tmpReq: $_model.SearchRequest, headers: $_model.SearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.SearchResponse> {
    tmpReq.validate();
    let request = new $_model.SearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.airLegs)) {
      request.airLegsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.airLegs, "air_legs", "json");
    }

    if (!$dara.isNull(tmpReq.searchControlOptions)) {
      request.searchControlOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchControlOptions, "search_control_options", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adults)) {
      body["adults"] = request.adults;
    }

    if (!$dara.isNull(request.airLegsShrink)) {
      body["air_legs"] = request.airLegsShrink;
    }

    if (!$dara.isNull(request.cabinClass)) {
      body["cabin_class"] = request.cabinClass;
    }

    if (!$dara.isNull(request.children)) {
      body["children"] = request.children;
    }

    if (!$dara.isNull(request.infants)) {
      body["infants"] = request.infants;
    }

    if (!$dara.isNull(request.searchControlOptionsShrink)) {
      body["search_control_options"] = request.searchControlOptionsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Search",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-search`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchResponse>(await this.callApi(params, req, runtime), new $_model.SearchResponse({}));
  }

  /**
   * Search
   * 
   * @remarks
   * Enter the information of departure, arrival, departure date, passenger number and cabin, return the lowest price for each flight.
   * 
   * @param request - SearchRequest
   * @returns SearchResponse
   */
  async search(request: $_model.SearchRequest): Promise<$_model.SearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.SearchHeaders({ });
    return await this.searchWithOptions(request, headers, runtime);
  }

  /**
   * 标准搜索
   * 
   * @param tmpReq - StandardSearchRequest
   * @param headers - StandardSearchHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StandardSearchResponse
   */
  async standardSearchWithOptions(tmpReq: $_model.StandardSearchRequest, headers: $_model.StandardSearchHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.StandardSearchResponse> {
    tmpReq.validate();
    let request = new $_model.StandardSearchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.airLegs)) {
      request.airLegsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.airLegs, "air_legs", "json");
    }

    if (!$dara.isNull(tmpReq.searchControlOptions)) {
      request.searchControlOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.searchControlOptions, "search_control_options", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.adults)) {
      body["adults"] = request.adults;
    }

    if (!$dara.isNull(request.airLegsShrink)) {
      body["air_legs"] = request.airLegsShrink;
    }

    if (!$dara.isNull(request.cabinClass)) {
      body["cabin_class"] = request.cabinClass;
    }

    if (!$dara.isNull(request.children)) {
      body["children"] = request.children;
    }

    if (!$dara.isNull(request.infants)) {
      body["infants"] = request.infants;
    }

    if (!$dara.isNull(request.searchControlOptionsShrink)) {
      body["search_control_options"] = request.searchControlOptionsShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StandardSearch",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-standardsearch`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.StandardSearchResponse>(await this.callApi(params, req, runtime), new $_model.StandardSearchResponse({}));
  }

  /**
   * 标准搜索
   * 
   * @param request - StandardSearchRequest
   * @returns StandardSearchResponse
   */
  async standardSearch(request: $_model.StandardSearchRequest): Promise<$_model.StandardSearchResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.StandardSearchHeaders({ });
    return await this.standardSearchWithOptions(request, headers, runtime);
  }

  /**
   * Transaction - Payment and Ticket Issuance
   * 
   * @param request - TicketingRequest
   * @param headers - TicketingHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TicketingResponse
   */
  async ticketingWithOptions(request: $_model.TicketingRequest, headers: $_model.TicketingHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TicketingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderNum)) {
      body["order_num"] = request.orderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Ticketing",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-ticketing`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TicketingResponse>(await this.callApi(params, req, runtime), new $_model.TicketingResponse({}));
  }

  /**
   * Transaction - Payment and Ticket Issuance
   * 
   * @param request - TicketingRequest
   * @returns TicketingResponse
   */
  async ticketing(request: $_model.TicketingRequest): Promise<$_model.TicketingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TicketingHeaders({ });
    return await this.ticketingWithOptions(request, headers, runtime);
  }

  /**
   * Transaction - Pre-payment verification
   * 
   * @remarks
   * Pre-check for Ticketing, this interface is optional to use.
   * 
   * @param request - TicketingCheckRequest
   * @param headers - TicketingCheckHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TicketingCheckResponse
   */
  async ticketingCheckWithOptions(request: $_model.TicketingCheckRequest, headers: $_model.TicketingCheckHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TicketingCheckResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.orderNum)) {
      body["order_num"] = request.orderNum;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "TicketingCheck",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/trade/action-ticketing-check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.TicketingCheckResponse>(await this.callApi(params, req, runtime), new $_model.TicketingCheckResponse({}));
  }

  /**
   * Transaction - Pre-payment verification
   * 
   * @remarks
   * Pre-check for Ticketing, this interface is optional to use.
   * 
   * @param request - TicketingCheckRequest
   * @returns TicketingCheckResponse
   */
  async ticketingCheck(request: $_model.TicketingCheckRequest): Promise<$_model.TicketingCheckResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TicketingCheckHeaders({ });
    return await this.ticketingCheckWithOptions(request, headers, runtime);
  }

  /**
   * 航程过境签
   * 
   * @param tmpReq - TransitVisaRequest
   * @param headers - TransitVisaHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TransitVisaResponse
   */
  async transitVisaWithOptions(tmpReq: $_model.TransitVisaRequest, headers: $_model.TransitVisaHeaders, runtime: $dara.RuntimeOptions): Promise<$_model.TransitVisaResponse> {
    tmpReq.validate();
    let request = new $_model.TransitVisaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.flightSegmentParamList)) {
      request.flightSegmentParamListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.flightSegmentParamList, "flight_segment_param_list", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.flightSegmentParamListShrink)) {
      query["flight_segment_param_list"] = request.flightSegmentParamListShrink;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xAcsAirticketAccessToken)) {
      realHeaders["x-acs-airticket-access-token"] = String(headers.xAcsAirticketAccessToken);
    }

    if (!$dara.isNull(headers.xAcsAirticketLanguage)) {
      realHeaders["x-acs-airticket-language"] = String(headers.xAcsAirticketLanguage);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "TransitVisa",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/airticket/v1/flight-data/transit-visa`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.TransitVisaResponse>(await this.callApi(params, req, runtime), new $_model.TransitVisaResponse({}));
  }

  /**
   * 航程过境签
   * 
   * @param request - TransitVisaRequest
   * @returns TransitVisaResponse
   */
  async transitVisa(request: $_model.TransitVisaRequest): Promise<$_model.TransitVisaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TransitVisaHeaders({ });
    return await this.transitVisaWithOptions(request, headers, runtime);
  }

}
