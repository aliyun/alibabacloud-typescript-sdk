// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("domain", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - AcceptDemandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptDemandResponse
   */
  async acceptDemandWithOptions(request: $_model.AcceptDemandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.AcceptDemandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcceptDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.AcceptDemandResponse>(await this.callApi(params, req, runtime), new $_model.AcceptDemandResponse({}));
  }

  /**
   * @param request - AcceptDemandRequest
   * @returns AcceptDemandResponse
   */
  async acceptDemand(request: $_model.AcceptDemandRequest): Promise<$_model.AcceptDemandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.acceptDemandWithOptions(request, runtime);
  }

  /**
   * @param request - BidDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BidDomainResponse
   */
  async bidDomainWithOptions(request: $_model.BidDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.BidDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.auctionId)) {
      body["AuctionId"] = request.auctionId;
    }

    if (!$dara.isNull(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.maxBid)) {
      body["MaxBid"] = request.maxBid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "BidDomain",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.BidDomainResponse>(await this.callApi(params, req, runtime), new $_model.BidDomainResponse({}));
  }

  /**
   * @param request - BidDomainRequest
   * @returns BidDomainResponse
   */
  async bidDomain(request: $_model.BidDomainRequest): Promise<$_model.BidDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bidDomainWithOptions(request, runtime);
  }

  /**
   * @param request - ChangeAuctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeAuctionResponse
   */
  async changeAuctionWithOptions(request: $_model.ChangeAuctionRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ChangeAuctionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.auctionList)) {
      body["AuctionList"] = request.auctionList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeAuction",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ChangeAuctionResponse>(await this.callApi(params, req, runtime), new $_model.ChangeAuctionResponse({}));
  }

  /**
   * @param request - ChangeAuctionRequest
   * @returns ChangeAuctionResponse
   */
  async changeAuction(request: $_model.ChangeAuctionRequest): Promise<$_model.ChangeAuctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.changeAuctionWithOptions(request, runtime);
  }

  /**
   * 校验域名在售状态
   * 
   * @param request - CheckDomainStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckDomainStatusResponse
   */
  async checkDomainStatusWithOptions(request: $_model.CheckDomainStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckDomainStatusResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckDomainStatus",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckDomainStatusResponse>(await this.callApi(params, req, runtime), new $_model.CheckDomainStatusResponse({}));
  }

  /**
   * 校验域名在售状态
   * 
   * @param request - CheckDomainStatusRequest
   * @returns CheckDomainStatusResponse
   */
  async checkDomainStatus(request: $_model.CheckDomainStatusRequest): Promise<$_model.CheckDomainStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkDomainStatusWithOptions(request, runtime);
  }

  /**
   * 一口价严选询价接口
   * 
   * @param request - CheckSelectedDomainStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckSelectedDomainStatusResponse
   */
  async checkSelectedDomainStatusWithOptions(request: $_model.CheckSelectedDomainStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CheckSelectedDomainStatusResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckSelectedDomainStatus",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CheckSelectedDomainStatusResponse>(await this.callApi(params, req, runtime), new $_model.CheckSelectedDomainStatusResponse({}));
  }

  /**
   * 一口价严选询价接口
   * 
   * @param request - CheckSelectedDomainStatusRequest
   * @returns CheckSelectedDomainStatusResponse
   */
  async checkSelectedDomainStatus(request: $_model.CheckSelectedDomainStatusRequest): Promise<$_model.CheckSelectedDomainStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.checkSelectedDomainStatusWithOptions(request, runtime);
  }

  /**
   * 创建一口价需求单
   * 
   * @param request - CreateFixedPriceDemandOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFixedPriceDemandOrderResponse
   */
  async createFixedPriceDemandOrderWithOptions(request: $_model.CreateFixedPriceDemandOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFixedPriceDemandOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFixedPriceDemandOrder",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFixedPriceDemandOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateFixedPriceDemandOrderResponse({}));
  }

  /**
   * 创建一口价需求单
   * 
   * @param request - CreateFixedPriceDemandOrderRequest
   * @returns CreateFixedPriceDemandOrderResponse
   */
  async createFixedPriceDemandOrder(request: $_model.CreateFixedPriceDemandOrderRequest): Promise<$_model.CreateFixedPriceDemandOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFixedPriceDemandOrderWithOptions(request, runtime);
  }

  /**
   * 一口价严选下单购买接口，阿里云账户余额直接扣费
   * 
   * @param request - CreateFixedPriceSelectedOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFixedPriceSelectedOrderResponse
   */
  async createFixedPriceSelectedOrderWithOptions(request: $_model.CreateFixedPriceSelectedOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateFixedPriceSelectedOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.contactId)) {
      query["ContactId"] = request.contactId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.expectedPrice)) {
      query["ExpectedPrice"] = request.expectedPrice;
    }

    if (!$dara.isNull(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateFixedPriceSelectedOrder",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateFixedPriceSelectedOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateFixedPriceSelectedOrderResponse({}));
  }

  /**
   * 一口价严选下单购买接口，阿里云账户余额直接扣费
   * 
   * @param request - CreateFixedPriceSelectedOrderRequest
   * @returns CreateFixedPriceSelectedOrderResponse
   */
  async createFixedPriceSelectedOrder(request: $_model.CreateFixedPriceSelectedOrderRequest): Promise<$_model.CreateFixedPriceSelectedOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createFixedPriceSelectedOrderWithOptions(request, runtime);
  }

  /**
   * @param request - FailDemandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FailDemandResponse
   */
  async failDemandWithOptions(request: $_model.FailDemandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FailDemandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FailDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FailDemandResponse>(await this.callApi(params, req, runtime), new $_model.FailDemandResponse({}));
  }

  /**
   * @param request - FailDemandRequest
   * @returns FailDemandResponse
   */
  async failDemand(request: $_model.FailDemandRequest): Promise<$_model.FailDemandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.failDemandWithOptions(request, runtime);
  }

  /**
   * @param request - FinishDemandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FinishDemandResponse
   */
  async finishDemandWithOptions(request: $_model.FinishDemandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.FinishDemandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FinishDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.FinishDemandResponse>(await this.callApi(params, req, runtime), new $_model.FinishDemandResponse({}));
  }

  /**
   * @param request - FinishDemandRequest
   * @returns FinishDemandResponse
   */
  async finishDemand(request: $_model.FinishDemandRequest): Promise<$_model.FinishDemandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.finishDemandWithOptions(request, runtime);
  }

  /**
   * @param request - GetIntlDomainDownloadUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIntlDomainDownloadUrlResponse
   */
  async getIntlDomainDownloadUrlWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetIntlDomainDownloadUrlResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetIntlDomainDownloadUrl",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetIntlDomainDownloadUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetIntlDomainDownloadUrlResponse({}));
  }

  /**
   * @returns GetIntlDomainDownloadUrlResponse
   */
  async getIntlDomainDownloadUrl(): Promise<$_model.GetIntlDomainDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIntlDomainDownloadUrlWithOptions(runtime);
  }

  /**
   * @param request - GetReserveDomainUrlRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetReserveDomainUrlResponse
   */
  async getReserveDomainUrlWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.GetReserveDomainUrlResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "GetReserveDomainUrl",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetReserveDomainUrlResponse>(await this.callApi(params, req, runtime), new $_model.GetReserveDomainUrlResponse({}));
  }

  /**
   * @returns GetReserveDomainUrlResponse
   */
  async getReserveDomainUrl(): Promise<$_model.GetReserveDomainUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getReserveDomainUrlWithOptions(runtime);
  }

  /**
   * 购买国际站预释放域名
   * 
   * @param request - PurchaseIntlDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PurchaseIntlDomainResponse
   */
  async purchaseIntlDomainWithOptions(request: $_model.PurchaseIntlDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.PurchaseIntlDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.auctionId)) {
      body["AuctionId"] = request.auctionId;
    }

    if (!$dara.isNull(request.currency)) {
      body["Currency"] = request.currency;
    }

    if (!$dara.isNull(request.price)) {
      body["Price"] = request.price;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PurchaseIntlDomain",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.PurchaseIntlDomainResponse>(await this.callApi(params, req, runtime), new $_model.PurchaseIntlDomainResponse({}));
  }

  /**
   * 购买国际站预释放域名
   * 
   * @param request - PurchaseIntlDomainRequest
   * @returns PurchaseIntlDomainResponse
   */
  async purchaseIntlDomain(request: $_model.PurchaseIntlDomainRequest): Promise<$_model.PurchaseIntlDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.purchaseIntlDomainWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAuctionDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAuctionDetailResponse
   */
  async queryAuctionDetailWithOptions(request: $_model.QueryAuctionDetailRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAuctionDetailResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.auctionId)) {
      body["AuctionId"] = request.auctionId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAuctionDetail",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAuctionDetailResponse>(await this.callApi(params, req, runtime), new $_model.QueryAuctionDetailResponse({}));
  }

  /**
   * @param request - QueryAuctionDetailRequest
   * @returns QueryAuctionDetailResponse
   */
  async queryAuctionDetail(request: $_model.QueryAuctionDetailRequest): Promise<$_model.QueryAuctionDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAuctionDetailWithOptions(request, runtime);
  }

  /**
   * @param request - QueryAuctionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryAuctionsResponse
   */
  async queryAuctionsWithOptions(request: $_model.QueryAuctionsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryAuctionsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.auctionEndTimeOrder)) {
      body["AuctionEndTimeOrder"] = request.auctionEndTimeOrder;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    if (!$dara.isNull(request.statuses)) {
      body["Statuses"] = request.statuses;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryAuctions",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryAuctionsResponse>(await this.callApi(params, req, runtime), new $_model.QueryAuctionsResponse({}));
  }

  /**
   * @param request - QueryAuctionsRequest
   * @returns QueryAuctionsResponse
   */
  async queryAuctions(request: $_model.QueryAuctionsRequest): Promise<$_model.QueryAuctionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryAuctionsWithOptions(request, runtime);
  }

  /**
   * @param request - QueryBidRecordsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBidRecordsResponse
   */
  async queryBidRecordsWithOptions(request: $_model.QueryBidRecordsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBidRecordsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.auctionId)) {
      body["AuctionId"] = request.auctionId;
    }

    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBidRecords",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBidRecordsResponse>(await this.callApi(params, req, runtime), new $_model.QueryBidRecordsResponse({}));
  }

  /**
   * @param request - QueryBidRecordsRequest
   * @returns QueryBidRecordsResponse
   */
  async queryBidRecords(request: $_model.QueryBidRecordsRequest): Promise<$_model.QueryBidRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBidRecordsWithOptions(request, runtime);
  }

  /**
   * @param request - QueryBookingDomainInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBookingDomainInfoResponse
   */
  async queryBookingDomainInfoWithOptions(request: $_model.QueryBookingDomainInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBookingDomainInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBookingDomainInfo",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBookingDomainInfoResponse>(await this.callApi(params, req, runtime), new $_model.QueryBookingDomainInfoResponse({}));
  }

  /**
   * @param request - QueryBookingDomainInfoRequest
   * @returns QueryBookingDomainInfoResponse
   */
  async queryBookingDomainInfo(request: $_model.QueryBookingDomainInfoRequest): Promise<$_model.QueryBookingDomainInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBookingDomainInfoWithOptions(request, runtime);
  }

  /**
   * 查询回购订单列表
   * 
   * @param request - QueryBrokerDemandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBrokerDemandResponse
   */
  async queryBrokerDemandWithOptions(request: $_model.QueryBrokerDemandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBrokerDemandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBrokerDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBrokerDemandResponse>(await this.callApi(params, req, runtime), new $_model.QueryBrokerDemandResponse({}));
  }

  /**
   * 查询回购订单列表
   * 
   * @param request - QueryBrokerDemandRequest
   * @returns QueryBrokerDemandResponse
   */
  async queryBrokerDemand(request: $_model.QueryBrokerDemandRequest): Promise<$_model.QueryBrokerDemandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBrokerDemandWithOptions(request, runtime);
  }

  /**
   * @param request - QueryBrokerDemandRecordRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryBrokerDemandRecordResponse
   */
  async queryBrokerDemandRecordWithOptions(request: $_model.QueryBrokerDemandRecordRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryBrokerDemandRecordResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryBrokerDemandRecord",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryBrokerDemandRecordResponse>(await this.callApi(params, req, runtime), new $_model.QueryBrokerDemandRecordResponse({}));
  }

  /**
   * @param request - QueryBrokerDemandRecordRequest
   * @returns QueryBrokerDemandRecordResponse
   */
  async queryBrokerDemandRecord(request: $_model.QueryBrokerDemandRecordRequest): Promise<$_model.QueryBrokerDemandRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryBrokerDemandRecordWithOptions(request, runtime);
  }

  /**
   * @param request - QueryDomainTransferStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryDomainTransferStatusResponse
   */
  async queryDomainTransferStatusWithOptions(request: $_model.QueryDomainTransferStatusRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryDomainTransferStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryDomainTransferStatus",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryDomainTransferStatusResponse>(await this.callApi(params, req, runtime), new $_model.QueryDomainTransferStatusResponse({}));
  }

  /**
   * @param request - QueryDomainTransferStatusRequest
   * @returns QueryDomainTransferStatusResponse
   */
  async queryDomainTransferStatus(request: $_model.QueryDomainTransferStatusRequest): Promise<$_model.QueryDomainTransferStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryDomainTransferStatusWithOptions(request, runtime);
  }

  /**
   * 查询汇率
   * 
   * @param request - QueryExchangeRateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryExchangeRateResponse
   */
  async queryExchangeRateWithOptions(request: $_model.QueryExchangeRateRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryExchangeRateResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.fromCurrency)) {
      query["FromCurrency"] = request.fromCurrency;
    }

    if (!$dara.isNull(request.toCurrency)) {
      query["ToCurrency"] = request.toCurrency;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryExchangeRate",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryExchangeRateResponse>(await this.callApi(params, req, runtime), new $_model.QueryExchangeRateResponse({}));
  }

  /**
   * 查询汇率
   * 
   * @param request - QueryExchangeRateRequest
   * @returns QueryExchangeRateResponse
   */
  async queryExchangeRate(request: $_model.QueryExchangeRateRequest): Promise<$_model.QueryExchangeRateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryExchangeRateWithOptions(request, runtime);
  }

  /**
   * 查询导出的抢注域名
   * 
   * @param request - QueryExportDomainExpireSnatchsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryExportDomainExpireSnatchsResponse
   */
  async queryExportDomainExpireSnatchsWithOptions(request: $_model.QueryExportDomainExpireSnatchsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryExportDomainExpireSnatchsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentId)) {
      query["CurrentId"] = request.currentId;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryExportDomainExpireSnatchs",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryExportDomainExpireSnatchsResponse>(await this.callApi(params, req, runtime), new $_model.QueryExportDomainExpireSnatchsResponse({}));
  }

  /**
   * 查询导出的抢注域名
   * 
   * @param request - QueryExportDomainExpireSnatchsRequest
   * @returns QueryExportDomainExpireSnatchsResponse
   */
  async queryExportDomainExpireSnatchs(request: $_model.QueryExportDomainExpireSnatchsRequest): Promise<$_model.QueryExportDomainExpireSnatchsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryExportDomainExpireSnatchsWithOptions(request, runtime);
  }

  /**
   * @param request - QueryPurchasedDomainsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryPurchasedDomainsResponse
   */
  async queryPurchasedDomainsWithOptions(request: $_model.QueryPurchasedDomainsRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryPurchasedDomainsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.currentPage)) {
      body["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.endOperationTime)) {
      body["EndOperationTime"] = request.endOperationTime;
    }

    if (!$dara.isNull(request.opTimeOrder)) {
      body["OpTimeOrder"] = request.opTimeOrder;
    }

    if (!$dara.isNull(request.operationStatus)) {
      body["OperationStatus"] = request.operationStatus;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.startOperationTime)) {
      body["StartOperationTime"] = request.startOperationTime;
    }

    if (!$dara.isNull(request.updateTimeOrder)) {
      body["UpdateTimeOrder"] = request.updateTimeOrder;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryPurchasedDomains",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryPurchasedDomainsResponse>(await this.callApi(params, req, runtime), new $_model.QueryPurchasedDomainsResponse({}));
  }

  /**
   * @param request - QueryPurchasedDomainsRequest
   * @returns QueryPurchasedDomainsResponse
   */
  async queryPurchasedDomains(request: $_model.QueryPurchasedDomainsRequest): Promise<$_model.QueryPurchasedDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryPurchasedDomainsWithOptions(request, runtime);
  }

  /**
   * @param request - RecordDemandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RecordDemandResponse
   */
  async recordDemandWithOptions(request: $_model.RecordDemandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RecordDemandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RecordDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RecordDemandResponse>(await this.callApi(params, req, runtime), new $_model.RecordDemandResponse({}));
  }

  /**
   * @param request - RecordDemandRequest
   * @returns RecordDemandResponse
   */
  async recordDemand(request: $_model.RecordDemandRequest): Promise<$_model.RecordDemandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.recordDemandWithOptions(request, runtime);
  }

  /**
   * @param request - RefuseDemandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RefuseDemandResponse
   */
  async refuseDemandWithOptions(request: $_model.RefuseDemandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RefuseDemandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RefuseDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RefuseDemandResponse>(await this.callApi(params, req, runtime), new $_model.RefuseDemandResponse({}));
  }

  /**
   * @param request - RefuseDemandRequest
   * @returns RefuseDemandResponse
   */
  async refuseDemand(request: $_model.RefuseDemandRequest): Promise<$_model.RefuseDemandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.refuseDemandWithOptions(request, runtime);
  }

  /**
   * @param request - RequestPayDemandRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RequestPayDemandResponse
   */
  async requestPayDemandWithOptions(request: $_model.RequestPayDemandRequest, runtime: $dara.RuntimeOptions): Promise<$_model.RequestPayDemandResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.domainName)) {
      query["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.message)) {
      query["Message"] = request.message;
    }

    if (!$dara.isNull(request.price)) {
      query["Price"] = request.price;
    }

    if (!$dara.isNull(request.produceType)) {
      query["ProduceType"] = request.produceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RequestPayDemand",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.RequestPayDemandResponse>(await this.callApi(params, req, runtime), new $_model.RequestPayDemandResponse({}));
  }

  /**
   * @param request - RequestPayDemandRequest
   * @returns RequestPayDemandResponse
   */
  async requestPayDemand(request: $_model.RequestPayDemandRequest): Promise<$_model.RequestPayDemandResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.requestPayDemandWithOptions(request, runtime);
  }

  /**
   * @param request - ReserveDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReserveDomainResponse
   */
  async reserveDomainWithOptions(request: $_model.ReserveDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReserveDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channels)) {
      body["Channels"] = request.channels;
    }

    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReserveDomain",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReserveDomainResponse>(await this.callApi(params, req, runtime), new $_model.ReserveDomainResponse({}));
  }

  /**
   * @param request - ReserveDomainRequest
   * @returns ReserveDomainResponse
   */
  async reserveDomain(request: $_model.ReserveDomainRequest): Promise<$_model.ReserveDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reserveDomainWithOptions(request, runtime);
  }

  /**
   * @param request - ReserveIntlDomainRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReserveIntlDomainResponse
   */
  async reserveIntlDomainWithOptions(request: $_model.ReserveIntlDomainRequest, runtime: $dara.RuntimeOptions): Promise<$_model.ReserveIntlDomainResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReserveIntlDomain",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.ReserveIntlDomainResponse>(await this.callApi(params, req, runtime), new $_model.ReserveIntlDomainResponse({}));
  }

  /**
   * @param request - ReserveIntlDomainRequest
   * @returns ReserveIntlDomainResponse
   */
  async reserveIntlDomain(request: $_model.ReserveIntlDomainRequest): Promise<$_model.ReserveIntlDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.reserveIntlDomainWithOptions(request, runtime);
  }

  /**
   * 严选列表导出，明日凌晨2点前生成文件，导出凌晨1点前所有在售严选域名
   * 
   * @param request - SelectedDomainListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectedDomainListResponse
   */
  async selectedDomainListWithOptions(request: $_model.SelectedDomainListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SelectedDomainListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.listDate)) {
      query["ListDate"] = request.listDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectedDomainList",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SelectedDomainListResponse>(await this.callApi(params, req, runtime), new $_model.SelectedDomainListResponse({}));
  }

  /**
   * 严选列表导出，明日凌晨2点前生成文件，导出凌晨1点前所有在售严选域名
   * 
   * @param request - SelectedDomainListRequest
   * @returns SelectedDomainListResponse
   */
  async selectedDomainList(request: $_model.SelectedDomainListRequest): Promise<$_model.SelectedDomainListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.selectedDomainListWithOptions(request, runtime);
  }

  /**
   * 提交采购信息
   * 
   * @param request - SubmitPurchaseInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitPurchaseInfoResponse
   */
  async submitPurchaseInfoWithOptions(request: $_model.SubmitPurchaseInfoRequest, runtime: $dara.RuntimeOptions): Promise<$_model.SubmitPurchaseInfoResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizId)) {
      body["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.purchaseCurrency)) {
      body["PurchaseCurrency"] = request.purchaseCurrency;
    }

    if (!$dara.isNull(request.purchasePrice)) {
      body["PurchasePrice"] = request.purchasePrice;
    }

    if (!$dara.isNull(request.purchaseProofs)) {
      body["PurchaseProofs"] = request.purchaseProofs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SubmitPurchaseInfo",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.SubmitPurchaseInfoResponse>(await this.callApi(params, req, runtime), new $_model.SubmitPurchaseInfoResponse({}));
  }

  /**
   * 提交采购信息
   * 
   * @param request - SubmitPurchaseInfoRequest
   * @returns SubmitPurchaseInfoResponse
   */
  async submitPurchaseInfo(request: $_model.SubmitPurchaseInfoRequest): Promise<$_model.SubmitPurchaseInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitPurchaseInfoWithOptions(request, runtime);
  }

  /**
   * 合作方同步报价
   * 
   * @param request - UpdatePartnerReservePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdatePartnerReservePriceResponse
   */
  async updatePartnerReservePriceWithOptions(request: $_model.UpdatePartnerReservePriceRequest, runtime: $dara.RuntimeOptions): Promise<$_model.UpdatePartnerReservePriceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.biddingId)) {
      body["BiddingId"] = request.biddingId;
    }

    if (!$dara.isNull(request.domainName)) {
      body["DomainName"] = request.domainName;
    }

    if (!$dara.isNull(request.partnerType)) {
      body["PartnerType"] = request.partnerType;
    }

    if (!$dara.isNull(request.reservePrice)) {
      body["ReservePrice"] = request.reservePrice;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdatePartnerReservePrice",
      version: "2018-02-08",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.UpdatePartnerReservePriceResponse>(await this.callApi(params, req, runtime), new $_model.UpdatePartnerReservePriceResponse({}));
  }

  /**
   * 合作方同步报价
   * 
   * @param request - UpdatePartnerReservePriceRequest
   * @returns UpdatePartnerReservePriceResponse
   */
  async updatePartnerReservePrice(request: $_model.UpdatePartnerReservePriceRequest): Promise<$_model.UpdatePartnerReservePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.updatePartnerReservePriceWithOptions(request, runtime);
  }

}
