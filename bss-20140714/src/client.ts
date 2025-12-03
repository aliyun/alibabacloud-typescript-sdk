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
    this._endpoint = this.getEndpoint("bss", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建订单
   * 
   * @param request - CreateOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderResponse
   */
  async createOrderWithOptions(request: $_model.CreateOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.CreateOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramStr)) {
      query["paramStr"] = request.paramStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrder",
      version: "2014-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
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
    return await this.createOrderWithOptions(request, runtime);
  }

  /**
   * 获取现金明细
   * 
   * @param request - DescribeCashDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCashDetailResponse
   */
  async describeCashDetailWithOptions(runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCashDetailResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCashDetail",
      version: "2014-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCashDetailResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCashDetailResponse({}));
  }

  /**
   * 获取现金明细
   * @returns DescribeCashDetailResponse
   */
  async describeCashDetail(): Promise<$_model.DescribeCashDetailResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCashDetailWithOptions(runtime);
  }

  /**
   * 查询卡券列表
   * 
   * @param request - DescribeCouponListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCouponListResponse
   */
  async describeCouponListWithOptions(request: $_model.DescribeCouponListRequest, runtime: $dara.RuntimeOptions): Promise<$_model.DescribeCouponListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endDeliveryTime)) {
      query["EndDeliveryTime"] = request.endDeliveryTime;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startDeliveryTime)) {
      query["StartDeliveryTime"] = request.startDeliveryTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCouponList",
      version: "2014-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.DescribeCouponListResponse>(await this.callApi(params, req, runtime), new $_model.DescribeCouponListResponse({}));
  }

  /**
   * 查询卡券列表
   * 
   * @param request - DescribeCouponListRequest
   * @returns DescribeCouponListResponse
   */
  async describeCouponList(request: $_model.DescribeCouponListRequest): Promise<$_model.DescribeCouponListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCouponListWithOptions(request, runtime);
  }

  /**
   * 生产开通回调接口
   * 
   * @param request - OpenCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenCallbackResponse
   */
  async openCallbackWithOptions(request: $_model.OpenCallbackRequest, runtime: $dara.RuntimeOptions): Promise<$_model.OpenCallbackResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramStr)) {
      query["paramStr"] = request.paramStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "OpenCallback",
      version: "2014-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.OpenCallbackResponse>(await this.callApi(params, req, runtime), new $_model.OpenCallbackResponse({}));
  }

  /**
   * 生产开通回调接口
   * 
   * @param request - OpenCallbackRequest
   * @returns OpenCallbackResponse
   */
  async openCallback(request: $_model.OpenCallbackRequest): Promise<$_model.OpenCallbackResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.openCallbackWithOptions(request, runtime);
  }

  /**
   * 订单询价
   * 
   * @param request - QueryForCssOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryForCssOrderResponse
   */
  async queryForCssOrderWithOptions(request: $_model.QueryForCssOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.QueryForCssOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramStr)) {
      query["paramStr"] = request.paramStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryForCssOrder",
      version: "2014-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryForCssOrderResponse>(await this.callApi(params, req, runtime), new $_model.QueryForCssOrderResponse({}));
  }

  /**
   * 订单询价
   * 
   * @param request - QueryForCssOrderRequest
   * @returns QueryForCssOrderResponse
   */
  async queryForCssOrder(request: $_model.QueryForCssOrderRequest): Promise<$_model.QueryForCssOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.queryForCssOrderWithOptions(request, runtime);
  }

  /**
   * vnoBatchRefundOrder
   * 
   * @param request - VnoBatchRefundOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VnoBatchRefundOrderResponse
   */
  async vnoBatchRefundOrderWithOptions(request: $_model.VnoBatchRefundOrderRequest, runtime: $dara.RuntimeOptions): Promise<$_model.VnoBatchRefundOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramStr)) {
      query["paramStr"] = request.paramStr;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "vnoBatchRefundOrder",
      version: "2014-07-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<$_model.VnoBatchRefundOrderResponse>(await this.callApi(params, req, runtime), new $_model.VnoBatchRefundOrderResponse({}));
  }

  /**
   * vnoBatchRefundOrder
   * 
   * @param request - VnoBatchRefundOrderRequest
   * @returns VnoBatchRefundOrderResponse
   */
  async vnoBatchRefundOrder(request: $_model.VnoBatchRefundOrderRequest): Promise<$_model.VnoBatchRefundOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vnoBatchRefundOrderWithOptions(request, runtime);
  }

}
