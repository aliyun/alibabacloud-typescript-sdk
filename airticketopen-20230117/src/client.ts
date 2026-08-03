// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
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
   * Queries the account fund flow list.
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
   * Queries the account fund flow list.
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
   * Recommends ancillary products.
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
   * Recommends ancillary products.
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
   * Creates a booking order.
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
   * Creates a booking order.
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
   * Cancels an unpaid order.
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
   * Cancels an unpaid order.
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
   * Submits a change application.
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
   * Submits a change application.
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
   * Cancel the change order.
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
   * Cancel the change order.
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
   * Confirms a flight change order.
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
   * Confirms a flight change order.
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
   * Retrieves the details of a flight change order.
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
   * Retrieves the details of a flight change order.
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
   * Queries a paging list of change order summaries by buyer account.
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
   * Queries a paging list of change order summaries by buyer account.
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
   * Queries the list of change orders by the original order number.
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
   * Queries the list of change orders by the original order number.
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
   * Collects lowest-price flight information.
   * 
   * @remarks
   * Collects lowest-price flight information.
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
   * Collects lowest-price flight information.
   * 
   * @remarks
   * Collects lowest-price flight information.
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
   * Find richer quote information for the itinerary, including free baggage allowance, refund and change rules, and baggage through-check rules.
   * 
   * @remarks
   * In the input parameters, choose either solution_id or journey_param_list. solution_id must be obtained from the Search API.
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
   * Find richer quote information for the itinerary, including free baggage allowance, refund and change rules, and baggage through-check rules.
   * 
   * @remarks
   * In the input parameters, choose either solution_id or journey_param_list. solution_id must be obtained from the Search API.
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
   * Uploads a file as an attachment image. The file size is limited to 300 KB or less.
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
   * Uploads a file as an attachment image. The file size is limited to 300 KB or less.
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
   * Queries flight change information by order number.
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
   * Queries flight change information by order number.
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
   * Obtains a token for API calls. The token is valid for 2 hours.
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
   * Obtains a token for API calls. The token is valid for 2 hours.
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
   * Queries luggage through-check information for an itinerary.
   * 
   * @remarks
   * Queries luggage through-check information for an itinerary. Provide itinerary information as input, and the API returns whether luggage through-check is supported for the itinerary. Luggage through-check applies to transfer and stopover scenarios.
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
   * Queries luggage through-check information for an itinerary.
   * 
   * @remarks
   * Queries luggage through-check information for an itinerary. Provide itinerary information as input, and the API returns whether luggage through-check is supported for the itinerary. Luggage through-check applies to transfer and stopover scenarios.
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
   * Queries order details.
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
   * Queries order details.
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
   * Queries the order list.
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
   * Queries the order list.
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
   * Verifies seat availability and pricing. If the price has changed, the developer can proceed with Book at the updated price. If the price has not changed, the order is placed at the original price.
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
   * Verifies seat availability and pricing. If the price has changed, the developer can proceed with Book at the updated price. If the price has not changed, the order is placed at the original price.
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
   * Submits a refund application for an air ticket.
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
   * Submits a refund application for an air ticket.
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
   * Retrieves the details of a refund order.
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
   * Retrieves the details of a refund order.
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
   * Queries the details of refund orders.
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
   * Queries the details of refund orders.
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
   * Searches for flight quotes and returns the lowest price across multiple flights. Note that the response of this operation does not include refund and change rules, free baggage allowance, or baggage through-check rules.
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
   * Searches for flight quotes and returns the lowest price across multiple flights. Note that the response of this operation does not include refund and change rules, free baggage allowance, or baggage through-check rules.
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
   * Search and quote prices, currently providing the lowest price across multiple flights. Note that this API response includes refund/change rules, free baggage allowance, and baggage through-check rules.
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
   * Search and quote prices, currently providing the lowest price across multiple flights. Note that this API response includes refund/change rules, free baggage allowance, and baggage through-check rules.
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
   * Pays for and issues a ticket.
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
   * Pays for and issues a ticket.
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
   * Performs a pre-ticketing check. This operation is optional.
   * 
   * @remarks
   * Performs a pre-ticketing check. This operation is optional.
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
   * Performs a pre-ticketing check. This operation is optional.
   * 
   * @remarks
   * Performs a pre-ticketing check. This operation is optional.
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
   * Queries transit visa requirements for a flight itinerary. You provide flight information, and the API returns whether a transit visa is required for the itinerary. Only transfer or stopover segments are valid input parameters (transfers or stopovers passing through a third country). The supported passenger type defaults to Chinese mainland travelers.
   * 
   * @remarks
   * Queries transit visa requirements for a flight itinerary. You provide flight information, and the API returns whether a transit visa is required for the itinerary. Only transfer or stopover segments are valid input parameters (transfers or stopovers passing through a third country). The supported passenger type defaults to Chinese mainland travelers.
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
   * Queries transit visa requirements for a flight itinerary. You provide flight information, and the API returns whether a transit visa is required for the itinerary. Only transfer or stopover segments are valid input parameters (transfers or stopovers passing through a third country). The supported passenger type defaults to Chinese mainland travelers.
   * 
   * @remarks
   * Queries transit visa requirements for a flight itinerary. You provide flight information, and the API returns whether a transit visa is required for the itinerary. Only transfer or stopover segments are valid input parameters (transfers or stopovers passing through a third country). The supported passenger type defaults to Chinese mainland travelers.
   * 
   * @param request - TransitVisaRequest
   * @returns TransitVisaResponse
   */
  async transitVisa(request: $_model.TransitVisaRequest): Promise<$_model.TransitVisaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers = new $_model.TransitVisaHeaders({ });
    return await this.transitVisaWithOptions(request, headers, runtime);
  }

  /**
   * 申请退款
   * 
   * @param request - ApplyRefundRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ApplyRefundResponse
   */
  async applyRefundWithOptions(request: $_model.ApplyRefundRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ApplyRefundResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.orderNo)) {
      body["OrderNo"] = request.orderNo;
    }

    if (!$dara.isNull(request.refundReason)) {
      body["RefundReason"] = request.refundReason;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "applyRefund",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/applyRefund`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ApplyRefundResponse>(await this.callApi(params, req, runtime), new $_model.ApplyRefundResponse({}));
  }

  /**
   * 申请退款
   * 
   * @param request - ApplyRefundRequest
   * @returns ApplyRefundResponse
   */
  async applyRefund(request: $_model.ApplyRefundRequest): Promise<$_model.ApplyRefundResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.applyRefundWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询酒店详情
   * 
   * @param tmpReq - BatchGetHotelDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BatchGetHotelDetailResponse
   */
  async batchGetHotelDetailWithOptions(tmpReq: $_model.BatchGetHotelDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.BatchGetHotelDetailResponse> {
    tmpReq.validate();
    let request = new $_model.BatchGetHotelDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.standardHotelIds)) {
      request.standardHotelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.standardHotelIds, "StandardHotelIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.standardHotelIdsShrink)) {
      body["StandardHotelIds"] = request.standardHotelIdsShrink;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "batchGetHotelDetail",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/batchGetHotelDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BatchGetHotelDetailResponse>(await this.callApi(params, req, runtime), new $_model.BatchGetHotelDetailResponse({}));
  }

  /**
   * 批量查询酒店详情
   * 
   * @param request - BatchGetHotelDetailRequest
   * @returns BatchGetHotelDetailResponse
   */
  async batchGetHotelDetail(request: $_model.BatchGetHotelDetailRequest): Promise<$_model.BatchGetHotelDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGetHotelDetailWithOptions(request, headers, runtime);
  }

  /**
   * 取消或退款
   * 
   * @param request - CancelOrRefundRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelOrRefundResponse
   */
  async cancelOrRefundWithOptions(request: $_model.CancelOrRefundRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelOrRefundResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.orderNo)) {
      body["OrderNo"] = request.orderNo;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "cancelOrRefund",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/cancelOrRefund`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelOrRefundResponse>(await this.callApi(params, req, runtime), new $_model.CancelOrRefundResponse({}));
  }

  /**
   * 取消或退款
   * 
   * @param request - CancelOrRefundRequest
   * @returns CancelOrRefundResponse
   */
  async cancelOrRefund(request: $_model.CancelOrRefundRequest): Promise<$_model.CancelOrRefundResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelOrRefundWithOptions(request, headers, runtime);
  }

  /**
   * 取消订单
   * 
   * @param request - CancelOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelOrderResponse
   */
  async cancelOrderWithOptions(request: $_model.CancelOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelOrderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.orderNo)) {
      body["OrderNo"] = request.orderNo;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "cancelOrder",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/cancelOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelOrderResponse>(await this.callApi(params, req, runtime), new $_model.CancelOrderResponse({}));
  }

  /**
   * 取消订单
   * 
   * @param request - CancelOrderRequest
   * @returns CancelOrderResponse
   */
  async cancelOrder(request: $_model.CancelOrderRequest): Promise<$_model.CancelOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelOrderWithOptions(request, headers, runtime);
  }

  /**
   * 创单并支付
   * 
   * @param tmpReq - CreateAndPayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAndPayResponse
   */
  async createAndPayWithOptions(tmpReq: $_model.CreateAndPayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateAndPayResponse> {
    tmpReq.validate();
    let request = new $_model.CreateAndPayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contact)) {
      request.contactShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contact, "Contact", "json");
    }

    if (!$dara.isNull(tmpReq.guests)) {
      request.guestsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.guests, "Guests", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.contactShrink)) {
      body["Contact"] = request.contactShrink;
    }

    if (!$dara.isNull(request.externalOrderNo)) {
      body["ExternalOrderNo"] = request.externalOrderNo;
    }

    if (!$dara.isNull(request.guestsShrink)) {
      body["Guests"] = request.guestsShrink;
    }

    if (!$dara.isNull(request.itemOfferId)) {
      body["ItemOfferId"] = request.itemOfferId;
    }

    if (!$dara.isNull(request.roomCount)) {
      body["RoomCount"] = request.roomCount;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "createAndPay",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/createAndPay`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateAndPayResponse>(await this.callApi(params, req, runtime), new $_model.CreateAndPayResponse({}));
  }

  /**
   * 创单并支付
   * 
   * @param request - CreateAndPayRequest
   * @returns CreateAndPayResponse
   */
  async createAndPay(request: $_model.CreateAndPayRequest): Promise<$_model.CreateAndPayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAndPayWithOptions(request, headers, runtime);
  }

  /**
   * 创建订单
   * 
   * @param tmpReq - CreateOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderResponse
   */
  async createOrderWithOptions(tmpReq: $_model.CreateOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrderResponse> {
    tmpReq.validate();
    let request = new $_model.CreateOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contact)) {
      request.contactShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contact, "Contact", "json");
    }

    if (!$dara.isNull(tmpReq.guests)) {
      request.guestsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.guests, "Guests", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.contactShrink)) {
      body["Contact"] = request.contactShrink;
    }

    if (!$dara.isNull(request.externalOrderNo)) {
      body["ExternalOrderNo"] = request.externalOrderNo;
    }

    if (!$dara.isNull(request.guestsShrink)) {
      body["Guests"] = request.guestsShrink;
    }

    if (!$dara.isNull(request.itemOfferId)) {
      body["ItemOfferId"] = request.itemOfferId;
    }

    if (!$dara.isNull(request.roomCount)) {
      body["RoomCount"] = request.roomCount;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "createOrder",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/createOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateOrderResponse({}));
  }

  /**
   * 创建订单
   * 
   * @param request - CreateOrderRequest
   * @returns CreateOrderResponse
   */
  async createOrder(request: $_model.CreateOrderRequest): Promise<$_model.CreateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOrderWithOptions(request, headers, runtime);
  }

  /**
   * 申请退款
   * 
   * @param request - GlobalHotelApplyRefundRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelApplyRefundResponse
   */
  async globalHotelApplyRefundWithOptions(request: $_model.GlobalHotelApplyRefundRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelApplyRefundResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.orderNo)) {
      body["OrderNo"] = request.orderNo;
    }

    if (!$dara.isNull(request.refundReason)) {
      body["RefundReason"] = request.refundReason;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelApplyRefund",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelApplyRefund`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelApplyRefundResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelApplyRefundResponse({}));
  }

  /**
   * 申请退款
   * 
   * @param request - GlobalHotelApplyRefundRequest
   * @returns GlobalHotelApplyRefundResponse
   */
  async globalHotelApplyRefund(request: $_model.GlobalHotelApplyRefundRequest): Promise<$_model.GlobalHotelApplyRefundResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelApplyRefundWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询酒店详情
   * 
   * @param tmpReq - GlobalHotelBatchGetHotelDetailRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelBatchGetHotelDetailResponse
   */
  async globalHotelBatchGetHotelDetailWithOptions(tmpReq: $_model.GlobalHotelBatchGetHotelDetailRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelBatchGetHotelDetailResponse> {
    tmpReq.validate();
    let request = new $_model.GlobalHotelBatchGetHotelDetailShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.standardHotelIds)) {
      request.standardHotelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.standardHotelIds, "StandardHotelIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.language)) {
      body["Language"] = request.language;
    }

    if (!$dara.isNull(request.standardHotelIdsShrink)) {
      body["StandardHotelIds"] = request.standardHotelIdsShrink;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelBatchGetHotelDetail",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelBatchGetHotelDetail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelBatchGetHotelDetailResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelBatchGetHotelDetailResponse({}));
  }

  /**
   * 批量查询酒店详情
   * 
   * @param request - GlobalHotelBatchGetHotelDetailRequest
   * @returns GlobalHotelBatchGetHotelDetailResponse
   */
  async globalHotelBatchGetHotelDetail(request: $_model.GlobalHotelBatchGetHotelDetailRequest): Promise<$_model.GlobalHotelBatchGetHotelDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelBatchGetHotelDetailWithOptions(request, headers, runtime);
  }

  /**
   * 取消或退款
   * 
   * @param request - GlobalHotelCancelOrRefundRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelCancelOrRefundResponse
   */
  async globalHotelCancelOrRefundWithOptions(request: $_model.GlobalHotelCancelOrRefundRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelCancelOrRefundResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.orderNo)) {
      body["OrderNo"] = request.orderNo;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelCancelOrRefund",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelCancelOrRefund`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelCancelOrRefundResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelCancelOrRefundResponse({}));
  }

  /**
   * 取消或退款
   * 
   * @param request - GlobalHotelCancelOrRefundRequest
   * @returns GlobalHotelCancelOrRefundResponse
   */
  async globalHotelCancelOrRefund(request: $_model.GlobalHotelCancelOrRefundRequest): Promise<$_model.GlobalHotelCancelOrRefundResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelCancelOrRefundWithOptions(request, headers, runtime);
  }

  /**
   * 取消订单
   * 
   * @param request - GlobalHotelCancelOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelCancelOrderResponse
   */
  async globalHotelCancelOrderWithOptions(request: $_model.GlobalHotelCancelOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelCancelOrderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.orderNo)) {
      body["OrderNo"] = request.orderNo;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelCancelOrder",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelCancelOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelCancelOrderResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelCancelOrderResponse({}));
  }

  /**
   * 取消订单
   * 
   * @param request - GlobalHotelCancelOrderRequest
   * @returns GlobalHotelCancelOrderResponse
   */
  async globalHotelCancelOrder(request: $_model.GlobalHotelCancelOrderRequest): Promise<$_model.GlobalHotelCancelOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelCancelOrderWithOptions(request, headers, runtime);
  }

  /**
   * 创单并支付
   * 
   * @param tmpReq - GlobalHotelCreateAndPayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelCreateAndPayResponse
   */
  async globalHotelCreateAndPayWithOptions(tmpReq: $_model.GlobalHotelCreateAndPayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelCreateAndPayResponse> {
    tmpReq.validate();
    let request = new $_model.GlobalHotelCreateAndPayShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contact)) {
      request.contactShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contact, "Contact", "json");
    }

    if (!$dara.isNull(tmpReq.guests)) {
      request.guestsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.guests, "Guests", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.contactShrink)) {
      body["Contact"] = request.contactShrink;
    }

    if (!$dara.isNull(request.externalOrderNo)) {
      body["ExternalOrderNo"] = request.externalOrderNo;
    }

    if (!$dara.isNull(request.guestsShrink)) {
      body["Guests"] = request.guestsShrink;
    }

    if (!$dara.isNull(request.itemOfferId)) {
      body["ItemOfferId"] = request.itemOfferId;
    }

    if (!$dara.isNull(request.roomCount)) {
      body["RoomCount"] = request.roomCount;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelCreateAndPay",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelCreateAndPay`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelCreateAndPayResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelCreateAndPayResponse({}));
  }

  /**
   * 创单并支付
   * 
   * @param request - GlobalHotelCreateAndPayRequest
   * @returns GlobalHotelCreateAndPayResponse
   */
  async globalHotelCreateAndPay(request: $_model.GlobalHotelCreateAndPayRequest): Promise<$_model.GlobalHotelCreateAndPayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelCreateAndPayWithOptions(request, headers, runtime);
  }

  /**
   * 创建订单
   * 
   * @param tmpReq - GlobalHotelCreateOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelCreateOrderResponse
   */
  async globalHotelCreateOrderWithOptions(tmpReq: $_model.GlobalHotelCreateOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelCreateOrderResponse> {
    tmpReq.validate();
    let request = new $_model.GlobalHotelCreateOrderShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.contact)) {
      request.contactShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.contact, "Contact", "json");
    }

    if (!$dara.isNull(tmpReq.guests)) {
      request.guestsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.guests, "Guests", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.contactShrink)) {
      body["Contact"] = request.contactShrink;
    }

    if (!$dara.isNull(request.externalOrderNo)) {
      body["ExternalOrderNo"] = request.externalOrderNo;
    }

    if (!$dara.isNull(request.guestsShrink)) {
      body["Guests"] = request.guestsShrink;
    }

    if (!$dara.isNull(request.itemOfferId)) {
      body["ItemOfferId"] = request.itemOfferId;
    }

    if (!$dara.isNull(request.roomCount)) {
      body["RoomCount"] = request.roomCount;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelCreateOrder",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelCreateOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelCreateOrderResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelCreateOrderResponse({}));
  }

  /**
   * 创建订单
   * 
   * @param request - GlobalHotelCreateOrderRequest
   * @returns GlobalHotelCreateOrderResponse
   */
  async globalHotelCreateOrder(request: $_model.GlobalHotelCreateOrderRequest): Promise<$_model.GlobalHotelCreateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelCreateOrderWithOptions(request, headers, runtime);
  }

  /**
   * 分销支付
   * 
   * @param request - GlobalHotelPayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelPayResponse
   */
  async globalHotelPayWithOptions(request: $_model.GlobalHotelPayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelPayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.orderNo)) {
      body["OrderNo"] = request.orderNo;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelPay",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelPay`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelPayResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelPayResponse({}));
  }

  /**
   * 分销支付
   * 
   * @param request - GlobalHotelPayRequest
   * @returns GlobalHotelPayResponse
   */
  async globalHotelPay(request: $_model.GlobalHotelPayRequest): Promise<$_model.GlobalHotelPayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelPayWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店报价可用性
   * 
   * @param tmpReq - GlobalHotelQueryAvailabilityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelQueryAvailabilityResponse
   */
  async globalHotelQueryAvailabilityWithOptions(tmpReq: $_model.GlobalHotelQueryAvailabilityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelQueryAvailabilityResponse> {
    tmpReq.validate();
    let request = new $_model.GlobalHotelQueryAvailabilityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.childrenAges)) {
      request.childrenAgesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.childrenAges, "ChildrenAges", "json");
    }

    if (!$dara.isNull(tmpReq.standardHotelIds)) {
      request.standardHotelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.standardHotelIds, "StandardHotelIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.adultCount)) {
      body["AdultCount"] = request.adultCount;
    }

    if (!$dara.isNull(request.checkInDate)) {
      body["CheckInDate"] = request.checkInDate;
    }

    if (!$dara.isNull(request.checkOutDate)) {
      body["CheckOutDate"] = request.checkOutDate;
    }

    if (!$dara.isNull(request.childCount)) {
      body["ChildCount"] = request.childCount;
    }

    if (!$dara.isNull(request.childrenAgesShrink)) {
      body["ChildrenAges"] = request.childrenAgesShrink;
    }

    if (!$dara.isNull(request.roomCount)) {
      body["RoomCount"] = request.roomCount;
    }

    if (!$dara.isNull(request.standardHotelIdsShrink)) {
      body["StandardHotelIds"] = request.standardHotelIdsShrink;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelQueryAvailability",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelQueryAvailability`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelQueryAvailabilityResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelQueryAvailabilityResponse({}));
  }

  /**
   * 查询酒店报价可用性
   * 
   * @param request - GlobalHotelQueryAvailabilityRequest
   * @returns GlobalHotelQueryAvailabilityResponse
   */
  async globalHotelQueryAvailability(request: $_model.GlobalHotelQueryAvailabilityRequest): Promise<$_model.GlobalHotelQueryAvailabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelQueryAvailabilityWithOptions(request, headers, runtime);
  }

  /**
   * 批量日历报价查询
   * 
   * @param tmpReq - GlobalHotelQueryCalendarAvailabilityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelQueryCalendarAvailabilityResponse
   */
  async globalHotelQueryCalendarAvailabilityWithOptions(tmpReq: $_model.GlobalHotelQueryCalendarAvailabilityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelQueryCalendarAvailabilityResponse> {
    tmpReq.validate();
    let request = new $_model.GlobalHotelQueryCalendarAvailabilityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.childrenAges)) {
      request.childrenAgesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.childrenAges, "ChildrenAges", "json");
    }

    if (!$dara.isNull(tmpReq.standardHotelIds)) {
      request.standardHotelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.standardHotelIds, "StandardHotelIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.adultCount)) {
      body["AdultCount"] = request.adultCount;
    }

    if (!$dara.isNull(request.checkInDateEnd)) {
      body["CheckInDateEnd"] = request.checkInDateEnd;
    }

    if (!$dara.isNull(request.checkInDateStart)) {
      body["CheckInDateStart"] = request.checkInDateStart;
    }

    if (!$dara.isNull(request.childCount)) {
      body["ChildCount"] = request.childCount;
    }

    if (!$dara.isNull(request.childrenAgesShrink)) {
      body["ChildrenAges"] = request.childrenAgesShrink;
    }

    if (!$dara.isNull(request.roomCount)) {
      body["RoomCount"] = request.roomCount;
    }

    if (!$dara.isNull(request.standardHotelIdsShrink)) {
      body["StandardHotelIds"] = request.standardHotelIdsShrink;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelQueryCalendarAvailability",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelQueryCalendarAvailability`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelQueryCalendarAvailabilityResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelQueryCalendarAvailabilityResponse({}));
  }

  /**
   * 批量日历报价查询
   * 
   * @param request - GlobalHotelQueryCalendarAvailabilityRequest
   * @returns GlobalHotelQueryCalendarAvailabilityResponse
   */
  async globalHotelQueryCalendarAvailability(request: $_model.GlobalHotelQueryCalendarAvailabilityRequest): Promise<$_model.GlobalHotelQueryCalendarAvailabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelQueryCalendarAvailabilityWithOptions(request, headers, runtime);
  }

  /**
   * 查询订单
   * 
   * @param request - GlobalHotelQueryOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelQueryOrderResponse
   */
  async globalHotelQueryOrderWithOptions(request: $_model.GlobalHotelQueryOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelQueryOrderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.externalOrderNo)) {
      body["ExternalOrderNo"] = request.externalOrderNo;
    }

    if (!$dara.isNull(request.orderNo)) {
      body["OrderNo"] = request.orderNo;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelQueryOrder",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelQueryOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelQueryOrderResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelQueryOrderResponse({}));
  }

  /**
   * 查询订单
   * 
   * @param request - GlobalHotelQueryOrderRequest
   * @returns GlobalHotelQueryOrderResponse
   */
  async globalHotelQueryOrder(request: $_model.GlobalHotelQueryOrderRequest): Promise<$_model.GlobalHotelQueryOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelQueryOrderWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询城市行政区划（中英文）
   * 
   * @param request - GlobalHotelSearchCityPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelSearchCityPageResponse
   */
  async globalHotelSearchCityPageWithOptions(request: $_model.GlobalHotelSearchCityPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelSearchCityPageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.count)) {
      body["Count"] = request.count;
    }

    if (!$dara.isNull(request.countryCode)) {
      body["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.start)) {
      body["Start"] = request.start;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelSearchCityPage",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelSearchCityPage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelSearchCityPageResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelSearchCityPageResponse({}));
  }

  /**
   * 分页查询城市行政区划（中英文）
   * 
   * @param request - GlobalHotelSearchCityPageRequest
   * @returns GlobalHotelSearchCityPageResponse
   */
  async globalHotelSearchCityPage(request: $_model.GlobalHotelSearchCityPageRequest): Promise<$_model.GlobalHotelSearchCityPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelSearchCityPageWithOptions(request, headers, runtime);
  }

  /**
   * 按城市分页查询酒店列表
   * 
   * @param request - GlobalHotelSearchHotelListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelSearchHotelListResponse
   */
  async globalHotelSearchHotelListWithOptions(request: $_model.GlobalHotelSearchHotelListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelSearchHotelListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.cityCode)) {
      body["CityCode"] = request.cityCode;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelSearchHotelList",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelSearchHotelList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelSearchHotelListResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelSearchHotelListResponse({}));
  }

  /**
   * 按城市分页查询酒店列表
   * 
   * @param request - GlobalHotelSearchHotelListRequest
   * @returns GlobalHotelSearchHotelListResponse
   */
  async globalHotelSearchHotelList(request: $_model.GlobalHotelSearchHotelListRequest): Promise<$_model.GlobalHotelSearchHotelListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelSearchHotelListWithOptions(request, headers, runtime);
  }

  /**
   * 验价
   * 
   * @param tmpReq - GlobalHotelValidatePriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GlobalHotelValidatePriceResponse
   */
  async globalHotelValidatePriceWithOptions(tmpReq: $_model.GlobalHotelValidatePriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GlobalHotelValidatePriceResponse> {
    tmpReq.validate();
    let request = new $_model.GlobalHotelValidatePriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.childrenAges)) {
      request.childrenAgesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.childrenAges, "ChildrenAges", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.adults)) {
      body["Adults"] = request.adults;
    }

    if (!$dara.isNull(request.children)) {
      body["Children"] = request.children;
    }

    if (!$dara.isNull(request.childrenAgesShrink)) {
      body["ChildrenAges"] = request.childrenAgesShrink;
    }

    if (!$dara.isNull(request.itemOfferKey)) {
      body["ItemOfferKey"] = request.itemOfferKey;
    }

    if (!$dara.isNull(request.roomCount)) {
      body["RoomCount"] = request.roomCount;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "globalHotelValidatePrice",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotelValidatePrice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GlobalHotelValidatePriceResponse>(await this.callApi(params, req, runtime), new $_model.GlobalHotelValidatePriceResponse({}));
  }

  /**
   * 验价
   * 
   * @param request - GlobalHotelValidatePriceRequest
   * @returns GlobalHotelValidatePriceResponse
   */
  async globalHotelValidatePrice(request: $_model.GlobalHotelValidatePriceRequest): Promise<$_model.GlobalHotelValidatePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.globalHotelValidatePriceWithOptions(request, headers, runtime);
  }

  /**
   * 分销支付
   * 
   * @param request - PayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PayResponse
   */
  async payWithOptions(request: $_model.PayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.PayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.orderNo)) {
      body["OrderNo"] = request.orderNo;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "pay",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/pay`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PayResponse>(await this.callApi(params, req, runtime), new $_model.PayResponse({}));
  }

  /**
   * 分销支付
   * 
   * @param request - PayRequest
   * @returns PayResponse
   */
  async pay(request: $_model.PayRequest): Promise<$_model.PayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.payWithOptions(request, headers, runtime);
  }

  /**
   * 查询酒店报价可用性
   * 
   * @param tmpReq - QueryAvailabilityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAvailabilityResponse
   */
  async queryAvailabilityWithOptions(tmpReq: $_model.QueryAvailabilityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAvailabilityResponse> {
    tmpReq.validate();
    let request = new $_model.QueryAvailabilityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.childrenAges)) {
      request.childrenAgesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.childrenAges, "ChildrenAges", "json");
    }

    if (!$dara.isNull(tmpReq.standardHotelIds)) {
      request.standardHotelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.standardHotelIds, "StandardHotelIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.adultCount)) {
      body["AdultCount"] = request.adultCount;
    }

    if (!$dara.isNull(request.checkInDate)) {
      body["CheckInDate"] = request.checkInDate;
    }

    if (!$dara.isNull(request.checkOutDate)) {
      body["CheckOutDate"] = request.checkOutDate;
    }

    if (!$dara.isNull(request.childCount)) {
      body["ChildCount"] = request.childCount;
    }

    if (!$dara.isNull(request.childrenAgesShrink)) {
      body["ChildrenAges"] = request.childrenAgesShrink;
    }

    if (!$dara.isNull(request.roomCount)) {
      body["RoomCount"] = request.roomCount;
    }

    if (!$dara.isNull(request.standardHotelIdsShrink)) {
      body["StandardHotelIds"] = request.standardHotelIdsShrink;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "queryAvailability",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/queryAvailability`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAvailabilityResponse>(await this.callApi(params, req, runtime), new $_model.QueryAvailabilityResponse({}));
  }

  /**
   * 查询酒店报价可用性
   * 
   * @param request - QueryAvailabilityRequest
   * @returns QueryAvailabilityResponse
   */
  async queryAvailability(request: $_model.QueryAvailabilityRequest): Promise<$_model.QueryAvailabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryAvailabilityWithOptions(request, headers, runtime);
  }

  /**
   * 批量日历报价查询
   * 
   * @param tmpReq - QueryCalendarAvailabilityRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryCalendarAvailabilityResponse
   */
  async queryCalendarAvailabilityWithOptions(tmpReq: $_model.QueryCalendarAvailabilityRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryCalendarAvailabilityResponse> {
    tmpReq.validate();
    let request = new $_model.QueryCalendarAvailabilityShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.childrenAges)) {
      request.childrenAgesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.childrenAges, "ChildrenAges", "json");
    }

    if (!$dara.isNull(tmpReq.standardHotelIds)) {
      request.standardHotelIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.standardHotelIds, "StandardHotelIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.adultCount)) {
      body["AdultCount"] = request.adultCount;
    }

    if (!$dara.isNull(request.checkInDateEnd)) {
      body["CheckInDateEnd"] = request.checkInDateEnd;
    }

    if (!$dara.isNull(request.checkInDateStart)) {
      body["CheckInDateStart"] = request.checkInDateStart;
    }

    if (!$dara.isNull(request.childCount)) {
      body["ChildCount"] = request.childCount;
    }

    if (!$dara.isNull(request.childrenAgesShrink)) {
      body["ChildrenAges"] = request.childrenAgesShrink;
    }

    if (!$dara.isNull(request.roomCount)) {
      body["RoomCount"] = request.roomCount;
    }

    if (!$dara.isNull(request.standardHotelIdsShrink)) {
      body["StandardHotelIds"] = request.standardHotelIdsShrink;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "queryCalendarAvailability",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/queryCalendarAvailability`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryCalendarAvailabilityResponse>(await this.callApi(params, req, runtime), new $_model.QueryCalendarAvailabilityResponse({}));
  }

  /**
   * 批量日历报价查询
   * 
   * @param request - QueryCalendarAvailabilityRequest
   * @returns QueryCalendarAvailabilityResponse
   */
  async queryCalendarAvailability(request: $_model.QueryCalendarAvailabilityRequest): Promise<$_model.QueryCalendarAvailabilityResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryCalendarAvailabilityWithOptions(request, headers, runtime);
  }

  /**
   * 查询订单
   * 
   * @param request - QueryOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrderResponse
   */
  async queryOrderWithOptions(request: $_model.QueryOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOrderResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.externalOrderNo)) {
      body["ExternalOrderNo"] = request.externalOrderNo;
    }

    if (!$dara.isNull(request.orderNo)) {
      body["OrderNo"] = request.orderNo;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "queryOrder",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/queryOrder`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOrderResponse>(await this.callApi(params, req, runtime), new $_model.QueryOrderResponse({}));
  }

  /**
   * 查询订单
   * 
   * @param request - QueryOrderRequest
   * @returns QueryOrderResponse
   */
  async queryOrder(request: $_model.QueryOrderRequest): Promise<$_model.QueryOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryOrderWithOptions(request, headers, runtime);
  }

  /**
   * 分页查询城市行政区划（中英文）
   * 
   * @param request - SearchCityPageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchCityPageResponse
   */
  async searchCityPageWithOptions(request: $_model.SearchCityPageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchCityPageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.count)) {
      body["Count"] = request.count;
    }

    if (!$dara.isNull(request.countryCode)) {
      body["CountryCode"] = request.countryCode;
    }

    if (!$dara.isNull(request.start)) {
      body["Start"] = request.start;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "searchCityPage",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/searchCityPage`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchCityPageResponse>(await this.callApi(params, req, runtime), new $_model.SearchCityPageResponse({}));
  }

  /**
   * 分页查询城市行政区划（中英文）
   * 
   * @param request - SearchCityPageRequest
   * @returns SearchCityPageResponse
   */
  async searchCityPage(request: $_model.SearchCityPageRequest): Promise<$_model.SearchCityPageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchCityPageWithOptions(request, headers, runtime);
  }

  /**
   * 按城市分页查询酒店列表
   * 
   * @param request - SearchHotelListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchHotelListResponse
   */
  async searchHotelListWithOptions(request: $_model.SearchHotelListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchHotelListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.cityCode)) {
      body["CityCode"] = request.cityCode;
    }

    if (!$dara.isNull(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "searchHotelList",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/globalHotel/searchHotelList`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchHotelListResponse>(await this.callApi(params, req, runtime), new $_model.SearchHotelListResponse({}));
  }

  /**
   * 按城市分页查询酒店列表
   * 
   * @param request - SearchHotelListRequest
   * @returns SearchHotelListResponse
   */
  async searchHotelList(request: $_model.SearchHotelListRequest): Promise<$_model.SearchHotelListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchHotelListWithOptions(request, headers, runtime);
  }

  /**
   * 验价
   * 
   * @param tmpReq - ValidatePriceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ValidatePriceResponse
   */
  async validatePriceWithOptions(tmpReq: $_model.ValidatePriceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ValidatePriceResponse> {
    tmpReq.validate();
    let request = new $_model.ValidatePriceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.childrenAges)) {
      request.childrenAgesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.childrenAges, "ChildrenAges", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accountNo)) {
      body["AccountNo"] = request.accountNo;
    }

    if (!$dara.isNull(request.adults)) {
      body["Adults"] = request.adults;
    }

    if (!$dara.isNull(request.children)) {
      body["Children"] = request.children;
    }

    if (!$dara.isNull(request.childrenAgesShrink)) {
      body["ChildrenAges"] = request.childrenAgesShrink;
    }

    if (!$dara.isNull(request.itemOfferKey)) {
      body["ItemOfferKey"] = request.itemOfferKey;
    }

    if (!$dara.isNull(request.roomCount)) {
      body["RoomCount"] = request.roomCount;
    }

    if (!$dara.isNull(request.tracerId)) {
      body["TracerId"] = request.tracerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "validatePrice",
      version: "2023-01-17",
      protocol: "HTTPS",
      pathname: `/validatePrice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ValidatePriceResponse>(await this.callApi(params, req, runtime), new $_model.ValidatePriceResponse({}));
  }

  /**
   * 验价
   * 
   * @param request - ValidatePriceRequest
   * @returns ValidatePriceResponse
   */
  async validatePrice(request: $_model.ValidatePriceRequest): Promise<$_model.ValidatePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validatePriceWithOptions(request, headers, runtime);
  }

}
