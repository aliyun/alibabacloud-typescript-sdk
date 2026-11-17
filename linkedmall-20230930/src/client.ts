// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import GatewayClient from '@alicloud/gateway-pop';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil }from '@alicloud/openapi-core';


import * as $_model from './models/model';
export * from './models/model';

export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._productId = "linkedmall";
    let gatewayClient = new GatewayClient();
    this._spi = gatewayClient;
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "linkedmall.aliyuncs.com",
      'cn-shanghai': "linkedmall.aliyuncs.com",
      'ap-northeast-1': "linkedmall.aliyuncs.com",
      'ap-northeast-2-pop': "linkedmall.aliyuncs.com",
      'ap-south-1': "linkedmall.aliyuncs.com",
      'ap-southeast-1': "linkedmall.aliyuncs.com",
      'ap-southeast-2': "linkedmall.aliyuncs.com",
      'ap-southeast-3': "linkedmall.aliyuncs.com",
      'ap-southeast-5': "linkedmall.aliyuncs.com",
      'cn-beijing': "linkedmall.aliyuncs.com",
      'cn-beijing-finance-1': "linkedmall.aliyuncs.com",
      'cn-beijing-finance-pop': "linkedmall.aliyuncs.com",
      'cn-beijing-gov-1': "linkedmall.aliyuncs.com",
      'cn-beijing-nu16-b01': "linkedmall.aliyuncs.com",
      'cn-chengdu': "linkedmall.aliyuncs.com",
      'cn-edge-1': "linkedmall.aliyuncs.com",
      'cn-fujian': "linkedmall.aliyuncs.com",
      'cn-haidian-cm12-c01': "linkedmall.aliyuncs.com",
      'cn-hangzhou-bj-b01': "linkedmall.aliyuncs.com",
      'cn-hangzhou-finance': "linkedmall.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "linkedmall.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "linkedmall.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "linkedmall.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "linkedmall.aliyuncs.com",
      'cn-hangzhou-test-306': "linkedmall.aliyuncs.com",
      'cn-hongkong': "linkedmall.aliyuncs.com",
      'cn-hongkong-finance-pop': "linkedmall.aliyuncs.com",
      'cn-huhehaote': "linkedmall.aliyuncs.com",
      'cn-north-2-gov-1': "linkedmall.aliyuncs.com",
      'cn-qingdao': "linkedmall.aliyuncs.com",
      'cn-qingdao-nebula': "linkedmall.aliyuncs.com",
      'cn-shanghai-et15-b01': "linkedmall.aliyuncs.com",
      'cn-shanghai-et2-b01': "linkedmall.aliyuncs.com",
      'cn-shanghai-finance-1': "linkedmall.aliyuncs.com",
      'cn-shanghai-inner': "linkedmall.aliyuncs.com",
      'cn-shanghai-internal-test-1': "linkedmall.aliyuncs.com",
      'cn-shenzhen': "linkedmall.aliyuncs.com",
      'cn-shenzhen-finance-1': "linkedmall.aliyuncs.com",
      'cn-shenzhen-inner': "linkedmall.aliyuncs.com",
      'cn-shenzhen-st4-d01': "linkedmall.aliyuncs.com",
      'cn-shenzhen-su18-b01': "linkedmall.aliyuncs.com",
      'cn-wuhan': "linkedmall.aliyuncs.com",
      'cn-yushanfang': "linkedmall.aliyuncs.com",
      'cn-zhangbei-na61-b01': "linkedmall.aliyuncs.com",
      'cn-zhangjiakou': "linkedmall.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "linkedmall.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "linkedmall.aliyuncs.com",
      'eu-central-1': "linkedmall.aliyuncs.com",
      'eu-west-1': "linkedmall.aliyuncs.com",
      'eu-west-1-oxs': "linkedmall.aliyuncs.com",
      'me-east-1': "linkedmall.aliyuncs.com",
      'rus-west-1-pop': "linkedmall.aliyuncs.com",
      'us-east-1': "linkedmall.aliyuncs.com",
      'us-west-1': "linkedmall.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("linkedmall", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * Cancels an after-sales ticket.
   * 
   * @remarks
   * Cancels an after-sales ticket.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelRefundOrderResponse
   */
  async cancelRefundOrderWithOptions(disputeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CancelRefundOrderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelRefundOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/refunds/${$dara.URL.percentEncode(disputeId)}/commands/cancel`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CancelRefundOrderResponse>(await this.callApi(params, req, runtime), new $_model.CancelRefundOrderResponse({}));
  }

  /**
   * Cancels an after-sales ticket.
   * 
   * @remarks
   * Cancels an after-sales ticket.
   * @returns CancelRefundOrderResponse
   */
  async cancelRefundOrder(disputeId: string): Promise<$_model.CancelRefundOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelRefundOrderWithOptions(disputeId, headers, runtime);
  }

  /**
   * Confirms receipt.
   * 
   * @remarks
   * Confirms receipt.
   * 
   * @param request - ConfirmDisburseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ConfirmDisburseResponse
   */
  async confirmDisburseWithOptions(request: $_model.ConfirmDisburseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ConfirmDisburseResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ConfirmDisburse",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/orders/commands/confirmDisburse`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ConfirmDisburseResponse>(await this.callApi(params, req, runtime), new $_model.ConfirmDisburseResponse({}));
  }

  /**
   * Confirms receipt.
   * 
   * @remarks
   * Confirms receipt.
   * 
   * @param request - ConfirmDisburseRequest
   * @returns ConfirmDisburseResponse
   */
  async confirmDisburse(request: $_model.ConfirmDisburseRequest): Promise<$_model.ConfirmDisburseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.confirmDisburseWithOptions(request, headers, runtime);
  }

  /**
   * Backfills the waybill information.
   * 
   * @remarks
   * Backfills the waybill information.
   * 
   * @param request - CreateGoodsShippingNoticeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGoodsShippingNoticeResponse
   */
  async createGoodsShippingNoticeWithOptions(request: $_model.CreateGoodsShippingNoticeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateGoodsShippingNoticeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGoodsShippingNotice",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/refunds/command/createGoodsShippingNotice`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateGoodsShippingNoticeResponse>(await this.callApi(params, req, runtime), new $_model.CreateGoodsShippingNoticeResponse({}));
  }

  /**
   * Backfills the waybill information.
   * 
   * @remarks
   * Backfills the waybill information.
   * 
   * @param request - CreateGoodsShippingNoticeRequest
   * @returns CreateGoodsShippingNoticeResponse
   */
  async createGoodsShippingNotice(request: $_model.CreateGoodsShippingNoticeRequest): Promise<$_model.CreateGoodsShippingNoticeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGoodsShippingNoticeWithOptions(request, headers, runtime);
  }

  /**
   * Creates a purchase order and returns the purchase order ID. The order creation result is notified through messages. After the order is created, you can query the orders associated with the purchase order by calling the order API.
   * 
   * @remarks
   * Creates a purchase order and returns the purchase order ID. The order creation result is notified through messages. After the order is created, you can query the orders associated with the purchase order by calling the order API.
   * >Warning: Because purchase order creation is an asynchronous task, if an error (such as a 503 error code) is returned when a distributor calls this API, do not immediately process consumer refunds on the business side. Wait for and consume the PurchaseOrderCreate message (the purchase order creation result message) to check the order status (for example, consume the order status synchronization message to check the order status) before you process business logic to prevent financial losses.
   * >Notice: If you do not receive the PurchaseOrderCreate message (the purchase order creation result message) after you call the purchase order creation API, submit a ticket in the technical integration group to check the cause.
   * 
   * @param request - CreatePurchaseOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePurchaseOrderResponse
   */
  async createPurchaseOrderWithOptions(request: $_model.CreatePurchaseOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreatePurchaseOrderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePurchaseOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaseOrders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreatePurchaseOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreatePurchaseOrderResponse({}));
  }

  /**
   * Creates a purchase order and returns the purchase order ID. The order creation result is notified through messages. After the order is created, you can query the orders associated with the purchase order by calling the order API.
   * 
   * @remarks
   * Creates a purchase order and returns the purchase order ID. The order creation result is notified through messages. After the order is created, you can query the orders associated with the purchase order by calling the order API.
   * >Warning: Because purchase order creation is an asynchronous task, if an error (such as a 503 error code) is returned when a distributor calls this API, do not immediately process consumer refunds on the business side. Wait for and consume the PurchaseOrderCreate message (the purchase order creation result message) to check the order status (for example, consume the order status synchronization message to check the order status) before you process business logic to prevent financial losses.
   * >Notice: If you do not receive the PurchaseOrderCreate message (the purchase order creation result message) after you call the purchase order creation API, submit a ticket in the technical integration group to check the cause.
   * 
   * @param request - CreatePurchaseOrderRequest
   * @returns CreatePurchaseOrderResponse
   */
  async createPurchaseOrder(request: $_model.CreatePurchaseOrderRequest): Promise<$_model.CreatePurchaseOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPurchaseOrderWithOptions(request, headers, runtime);
  }

  /**
   * Creates an after-sales ticket.
   * 
   * @remarks
   * Creates an after-sales ticket.
   * 
   * @param request - CreateRefundOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRefundOrderResponse
   */
  async createRefundOrderWithOptions(request: $_model.CreateRefundOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.CreateRefundOrderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRefundOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/refunds`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.CreateRefundOrderResponse>(await this.callApi(params, req, runtime), new $_model.CreateRefundOrderResponse({}));
  }

  /**
   * Creates an after-sales ticket.
   * 
   * @remarks
   * Creates an after-sales ticket.
   * 
   * @param request - CreateRefundOrderRequest
   * @returns CreateRefundOrderResponse
   */
  async createRefundOrder(request: $_model.CreateRefundOrderRequest): Promise<$_model.CreateRefundOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRefundOrderWithOptions(request, headers, runtime);
  }

  /**
   * Queries the details of the main order.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOrderResponse
   */
  async getOrderWithOptions(orderId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetOrderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/orders/${$dara.URL.percentEncode(orderId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetOrderResponse>(await this.callApi(params, req, runtime), new $_model.GetOrderResponse({}));
  }

  /**
   * Queries the details of the main order.
   * @returns GetOrderResponse
   */
  async getOrder(orderId: string): Promise<$_model.GetOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrderWithOptions(orderId, headers, runtime);
  }

  /**
   * Retrieves the status of a purchase order.
   * 
   * @remarks
   * Retrieves the status of a transaction order.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPurchaseOrderStatusResponse
   */
  async getPurchaseOrderStatusWithOptions(purchaseOrderId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPurchaseOrderStatusResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPurchaseOrderStatus",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaseOrders/${$dara.URL.percentEncode(purchaseOrderId)}/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPurchaseOrderStatusResponse>(await this.callApi(params, req, runtime), new $_model.GetPurchaseOrderStatusResponse({}));
  }

  /**
   * Retrieves the status of a purchase order.
   * 
   * @remarks
   * Retrieves the status of a transaction order.
   * @returns GetPurchaseOrderStatusResponse
   */
  async getPurchaseOrderStatus(purchaseOrderId: string): Promise<$_model.GetPurchaseOrderStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPurchaseOrderStatusWithOptions(purchaseOrderId, headers, runtime);
  }

  /**
   * Retrieves the purchaser store.
   * 
   * @remarks
   * Retrieves the purchaser store.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPurchaserShopResponse
   */
  async getPurchaserShopWithOptions(purchaserId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetPurchaserShopResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPurchaserShop",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaserShops/${$dara.URL.percentEncode(purchaserId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetPurchaserShopResponse>(await this.callApi(params, req, runtime), new $_model.GetPurchaserShopResponse({}));
  }

  /**
   * Retrieves the purchaser store.
   * 
   * @remarks
   * Retrieves the purchaser store.
   * @returns GetPurchaserShopResponse
   */
  async getPurchaserShop(purchaserId: string): Promise<$_model.GetPurchaserShopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPurchaserShopWithOptions(purchaserId, headers, runtime);
  }

  /**
   * Retrieves the details of an after-sales ticket.
   * 
   * @remarks
   * Retrieves the details of an after-sales ticket.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRefundOrderResponse
   */
  async getRefundOrderWithOptions(disputeId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetRefundOrderResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRefundOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/refunds/${$dara.URL.percentEncode(disputeId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetRefundOrderResponse>(await this.callApi(params, req, runtime), new $_model.GetRefundOrderResponse({}));
  }

  /**
   * Retrieves the details of an after-sales ticket.
   * 
   * @remarks
   * Retrieves the details of an after-sales ticket.
   * @returns GetRefundOrderResponse
   */
  async getRefundOrder(disputeId: string): Promise<$_model.GetRefundOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRefundOrderWithOptions(disputeId, headers, runtime);
  }

  /**
   * Queries the details of products in the selection pool.
   * 
   * @remarks
   * Queries the details of products in the selection pool by product ID. You can specify a division code to query the regional inventory of the product.
   * 
   * @param request - GetSelectionProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSelectionProductResponse
   */
  async getSelectionProductWithOptions(productId: string, request: $_model.GetSelectionProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSelectionProductResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.divisionCode)) {
      query["divisionCode"] = request.divisionCode;
    }

    if (!$dara.isNull(request.purchaserId)) {
      query["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSelectionProduct",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/products/${$dara.URL.percentEncode(productId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSelectionProductResponse>(await this.callApi(params, req, runtime), new $_model.GetSelectionProductResponse({}));
  }

  /**
   * Queries the details of products in the selection pool.
   * 
   * @remarks
   * Queries the details of products in the selection pool by product ID. You can specify a division code to query the regional inventory of the product.
   * 
   * @param request - GetSelectionProductRequest
   * @returns GetSelectionProductResponse
   */
  async getSelectionProduct(productId: string, request: $_model.GetSelectionProductRequest): Promise<$_model.GetSelectionProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSelectionProductWithOptions(productId, request, headers, runtime);
  }

  /**
   * Queries the sales information of products in the selection pool.
   * 
   * @remarks
   * Queries the sales information of products in the selection pool. Distributors can call this operation to query product sales information, such as product status. Pass the divisionCode parameter (a level-5 address code for a town or sub-district is recommended) to check whether the product is available for sale in the specified region.
   * 
   * @param request - GetSelectionProductSaleInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSelectionProductSaleInfoResponse
   */
  async getSelectionProductSaleInfoWithOptions(productId: string, request: $_model.GetSelectionProductSaleInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.GetSelectionProductSaleInfoResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.divisionCode)) {
      query["divisionCode"] = request.divisionCode;
    }

    if (!$dara.isNull(request.purchaserId)) {
      query["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSelectionProductSaleInfo",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/products/${$dara.URL.percentEncode(productId)}/saleInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.GetSelectionProductSaleInfoResponse>(await this.callApi(params, req, runtime), new $_model.GetSelectionProductSaleInfoResponse({}));
  }

  /**
   * Queries the sales information of products in the selection pool.
   * 
   * @remarks
   * Queries the sales information of products in the selection pool. Distributors can call this operation to query product sales information, such as product status. Pass the divisionCode parameter (a level-5 address code for a town or sub-district is recommended) to check whether the product is available for sale in the specified region.
   * 
   * @param request - GetSelectionProductSaleInfoRequest
   * @returns GetSelectionProductSaleInfoResponse
   */
  async getSelectionProductSaleInfo(productId: string, request: $_model.GetSelectionProductSaleInfoRequest): Promise<$_model.GetSelectionProductSaleInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSelectionProductSaleInfoWithOptions(productId, request, headers, runtime);
  }

  /**
   * Queries a list of categories.
   * 
   * @remarks
   * Queries all subcategories based on a parent category ID, or queries category details based on a category ID. If the parent category ID (parentCategoryId) is set to 0, the first-level categories under the root category are returned.
   * 
   * @param request - ListCategoriesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCategoriesResponse
   */
  async listCategoriesWithOptions(request: $_model.ListCategoriesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListCategoriesResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCategories",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/categories/commands/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListCategoriesResponse>(await this.callApi(params, req, runtime), new $_model.ListCategoriesResponse({}));
  }

  /**
   * Queries a list of categories.
   * 
   * @remarks
   * Queries all subcategories based on a parent category ID, or queries category details based on a category ID. If the parent category ID (parentCategoryId) is set to 0, the first-level categories under the root category are returned.
   * 
   * @param request - ListCategoriesRequest
   * @returns ListCategoriesResponse
   */
  async listCategories(request: $_model.ListCategoriesRequest): Promise<$_model.ListCategoriesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCategoriesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the logistics information of an order.
   * 
   * @remarks
   * Queries the logistics information of an order.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLogisticsOrdersResponse
   */
  async listLogisticsOrdersWithOptions(orderId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListLogisticsOrdersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLogisticsOrders",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/orders/${$dara.URL.percentEncode(orderId)}/logisticsOrders`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListLogisticsOrdersResponse>(await this.callApi(params, req, runtime), new $_model.ListLogisticsOrdersResponse({}));
  }

  /**
   * Queries the logistics information of an order.
   * 
   * @remarks
   * Queries the logistics information of an order.
   * @returns ListLogisticsOrdersResponse
   */
  async listLogisticsOrders(orderId: string): Promise<$_model.ListLogisticsOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogisticsOrdersWithOptions(orderId, headers, runtime);
  }

  /**
   * Retrieves a list of purchaser shops.
   * 
   * @remarks
   * Retrieves a list of purchaser shops.
   * 
   * @param request - ListPurchaserShopsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPurchaserShopsResponse
   */
  async listPurchaserShopsWithOptions(request: $_model.ListPurchaserShopsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListPurchaserShopsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPurchaserShops",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaserShops`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListPurchaserShopsResponse>(await this.callApi(params, req, runtime), new $_model.ListPurchaserShopsResponse({}));
  }

  /**
   * Retrieves a list of purchaser shops.
   * 
   * @remarks
   * Retrieves a list of purchaser shops.
   * 
   * @param request - ListPurchaserShopsRequest
   * @returns ListPurchaserShopsResponse
   */
  async listPurchaserShops(request: $_model.ListPurchaserShopsRequest): Promise<$_model.ListPurchaserShopsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPurchaserShopsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the sales information of products in the selection pool in batches.
   * 
   * @remarks
   * Queries the sales information of products in the selection pool in batches. Distributors can call this operation to batch query product sales information, such as product status. You can use the divisionCode parameter (we recommend passing a level-5 address code for a town or sub-district) to batch query whether a product is available for sale in a specific region.
   * 
   * @param request - ListSelectionProductSaleInfosRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSelectionProductSaleInfosResponse
   */
  async listSelectionProductSaleInfosWithOptions(request: $_model.ListSelectionProductSaleInfosRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSelectionProductSaleInfosResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSelectionProductSaleInfos",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/products/saleInfo/commands/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSelectionProductSaleInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListSelectionProductSaleInfosResponse({}));
  }

  /**
   * Queries the sales information of products in the selection pool in batches.
   * 
   * @remarks
   * Queries the sales information of products in the selection pool in batches. Distributors can call this operation to batch query product sales information, such as product status. You can use the divisionCode parameter (we recommend passing a level-5 address code for a town or sub-district) to batch query whether a product is available for sale in a specific region.
   * 
   * @param request - ListSelectionProductSaleInfosRequest
   * @returns ListSelectionProductSaleInfosResponse
   */
  async listSelectionProductSaleInfos(request: $_model.ListSelectionProductSaleInfosRequest): Promise<$_model.ListSelectionProductSaleInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSelectionProductSaleInfosWithOptions(request, headers, runtime);
  }

  /**
   * Queries the list of products in the product selection pool.
   * 
   * @param request - ListSelectionProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSelectionProductsResponse
   */
  async listSelectionProductsWithOptions(request: $_model.ListSelectionProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSelectionProductsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cursor)) {
      query["cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.purchaserId)) {
      query["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSelectionProducts",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/products`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSelectionProductsResponse>(await this.callApi(params, req, runtime), new $_model.ListSelectionProductsResponse({}));
  }

  /**
   * Queries the list of products in the product selection pool.
   * 
   * @param request - ListSelectionProductsRequest
   * @returns ListSelectionProductsResponse
   */
  async listSelectionProducts(request: $_model.ListSelectionProductsRequest): Promise<$_model.ListSelectionProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSelectionProductsWithOptions(request, headers, runtime);
  }

  /**
   * Queries the sales information of SKUs in a selection pool in batches.
   * 
   * @remarks
   * Batch query of SKU sales information in a selection pool: Distributors can call this operation to query SKU sales information in batches, such as SKU status. You can use the divisionCode parameter to query whether SKUs are available for sale in a specific region in batches. We recommend that you specify a level-5 division code, such as a town or sub-district code.
   * 
   * @param request - ListSelectionSkuSaleInfosRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSelectionSkuSaleInfosResponse
   */
  async listSelectionSkuSaleInfosWithOptions(request: $_model.ListSelectionSkuSaleInfosRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSelectionSkuSaleInfosResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListSelectionSkuSaleInfos",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/skus/saleInfo/commands/list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.ListSelectionSkuSaleInfosResponse>(await this.callApi(params, req, runtime), new $_model.ListSelectionSkuSaleInfosResponse({}));
  }

  /**
   * Queries the sales information of SKUs in a selection pool in batches.
   * 
   * @remarks
   * Batch query of SKU sales information in a selection pool: Distributors can call this operation to query SKU sales information in batches, such as SKU status. You can use the divisionCode parameter to query whether SKUs are available for sale in a specific region in batches. We recommend that you specify a level-5 division code, such as a town or sub-district code.
   * 
   * @param request - ListSelectionSkuSaleInfosRequest
   * @returns ListSelectionSkuSaleInfosResponse
   */
  async listSelectionSkuSaleInfos(request: $_model.ListSelectionSkuSaleInfosRequest): Promise<$_model.ListSelectionSkuSaleInfosResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSelectionSkuSaleInfosWithOptions(request, headers, runtime);
  }

  /**
   * Queries the sub-region codes.
   * 
   * @remarks
   * Queries the sub-region codes.
   * 
   * @param request - QueryChildDivisionCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryChildDivisionCodeResponse
   */
  async queryChildDivisionCodeWithOptions(request: $_model.QueryChildDivisionCodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryChildDivisionCodeResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryChildDivisionCode",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/division/commands/queryChildDivisionCode`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryChildDivisionCodeResponse>(await this.callApi(params, req, runtime), new $_model.QueryChildDivisionCodeResponse({}));
  }

  /**
   * Queries the sub-region codes.
   * 
   * @remarks
   * Queries the sub-region codes.
   * 
   * @param request - QueryChildDivisionCodeRequest
   * @returns QueryChildDivisionCodeResponse
   */
  async queryChildDivisionCode(request: $_model.QueryChildDivisionCodeRequest): Promise<$_model.QueryChildDivisionCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryChildDivisionCodeWithOptions(request, headers, runtime);
  }

  /**
   * Lists orders.
   * 
   * @remarks
   * Lists orders.
   * 
   * @param request - QueryOrdersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryOrdersResponse
   */
  async queryOrdersWithOptions(request: $_model.QueryOrdersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.QueryOrdersResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "QueryOrders",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/orders/commands/query`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.QueryOrdersResponse>(await this.callApi(params, req, runtime), new $_model.QueryOrdersResponse({}));
  }

  /**
   * Lists orders.
   * 
   * @remarks
   * Lists orders.
   * 
   * @param request - QueryOrdersRequest
   * @returns QueryOrdersResponse
   */
  async queryOrders(request: $_model.QueryOrdersRequest): Promise<$_model.QueryOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryOrdersWithOptions(request, headers, runtime);
  }

  /**
   * Renders a purchase order and returns both sellable and unsellable products. Customers can then select the sellable products to place their orders.
   * 
   * @remarks
   * >Warning: 
   * This API will be offline soon. For purchase order rendering, use the SplitPurchaseOrder API, which supports both purchase order rendering and splitting.
   * 
   * @param request - RenderPurchaseOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenderPurchaseOrderResponse
   */
  async renderPurchaseOrderWithOptions(request: $_model.RenderPurchaseOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenderPurchaseOrderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenderPurchaseOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaseOrders/commands/render`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenderPurchaseOrderResponse>(await this.callApi(params, req, runtime), new $_model.RenderPurchaseOrderResponse({}));
  }

  /**
   * Renders a purchase order and returns both sellable and unsellable products. Customers can then select the sellable products to place their orders.
   * 
   * @remarks
   * >Warning: 
   * This API will be offline soon. For purchase order rendering, use the SplitPurchaseOrder API, which supports both purchase order rendering and splitting.
   * 
   * @param request - RenderPurchaseOrderRequest
   * @returns RenderPurchaseOrderResponse
   */
  async renderPurchaseOrder(request: $_model.RenderPurchaseOrderRequest): Promise<$_model.RenderPurchaseOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renderPurchaseOrderWithOptions(request, headers, runtime);
  }

  /**
   * Renders a reverse order.
   * 
   * @remarks
   * Renders an after-sales order.
   * 
   * @param request - RenderRefundOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenderRefundOrderResponse
   */
  async renderRefundOrderWithOptions(request: $_model.RenderRefundOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.RenderRefundOrderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenderRefundOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/refunds/commands/render`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.RenderRefundOrderResponse>(await this.callApi(params, req, runtime), new $_model.RenderRefundOrderResponse({}));
  }

  /**
   * Renders a reverse order.
   * 
   * @remarks
   * Renders an after-sales order.
   * 
   * @param request - RenderRefundOrderRequest
   * @returns RenderRefundOrderResponse
   */
  async renderRefundOrder(request: $_model.RenderRefundOrderRequest): Promise<$_model.RenderRefundOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renderRefundOrderWithOptions(request, headers, runtime);
  }

  /**
   * Queries products based on various conditions and returns paginated results.
   * 
   * @remarks
   * Performs a paged query on the product list based on the page number and paging size.
   * 
   * @param request - SearchProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SearchProductsResponse
   */
  async searchProductsWithOptions(request: $_model.SearchProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SearchProductsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.brandName)) {
      body["brandName"] = request.brandName;
    }

    if (!$dara.isNull(request.categoryIds)) {
      body["categoryIds"] = request.categoryIds;
    }

    if (!$dara.isNull(request.createEndTime)) {
      body["createEndTime"] = request.createEndTime;
    }

    if (!$dara.isNull(request.createStartTime)) {
      body["createStartTime"] = request.createStartTime;
    }

    if (!$dara.isNull(request.cursor)) {
      body["cursor"] = request.cursor;
    }

    if (!$dara.isNull(request.distributionHighPrice)) {
      body["distributionHighPrice"] = request.distributionHighPrice;
    }

    if (!$dara.isNull(request.distributionHighPriceRatio)) {
      body["distributionHighPriceRatio"] = request.distributionHighPriceRatio;
    }

    if (!$dara.isNull(request.distributionLowPrice)) {
      body["distributionLowPrice"] = request.distributionLowPrice;
    }

    if (!$dara.isNull(request.distributionLowPriceRatio)) {
      body["distributionLowPriceRatio"] = request.distributionLowPriceRatio;
    }

    if (!$dara.isNull(request.highMarkPrice)) {
      body["highMarkPrice"] = request.highMarkPrice;
    }

    if (!$dara.isNull(request.highPrice)) {
      body["highPrice"] = request.highPrice;
    }

    if (!$dara.isNull(request.inGroup)) {
      body["inGroup"] = request.inGroup;
    }

    if (!$dara.isNull(request.inGroupEndTime)) {
      body["inGroupEndTime"] = request.inGroupEndTime;
    }

    if (!$dara.isNull(request.inGroupStartTime)) {
      body["inGroupStartTime"] = request.inGroupStartTime;
    }

    if (!$dara.isNull(request.inventoryRiskLevel)) {
      body["inventoryRiskLevel"] = request.inventoryRiskLevel;
    }

    if (!$dara.isNull(request.lmItemId)) {
      body["lmItemId"] = request.lmItemId;
    }

    if (!$dara.isNull(request.lowMarkPrice)) {
      body["lowMarkPrice"] = request.lowMarkPrice;
    }

    if (!$dara.isNull(request.lowPrice)) {
      body["lowPrice"] = request.lowPrice;
    }

    if (!$dara.isNull(request.modifyEndTime)) {
      body["modifyEndTime"] = request.modifyEndTime;
    }

    if (!$dara.isNull(request.modifyStartTime)) {
      body["modifyStartTime"] = request.modifyStartTime;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["orderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderDirection)) {
      body["orderDirection"] = request.orderDirection;
    }

    if (!$dara.isNull(request.pageNumber)) {
      body["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.platform)) {
      body["platform"] = request.platform;
    }

    if (!$dara.isNull(request.productId)) {
      body["productId"] = request.productId;
    }

    if (!$dara.isNull(request.productName)) {
      body["productName"] = request.productName;
    }

    if (!$dara.isNull(request.productStatus)) {
      body["productStatus"] = request.productStatus;
    }

    if (!$dara.isNull(request.purchaserId)) {
      body["purchaserId"] = request.purchaserId;
    }

    if (!$dara.isNull(request.taxRate)) {
      body["taxRate"] = request.taxRate;
    }

    if (!$dara.isNull(request.tradeModeAndCredit)) {
      body["tradeModeAndCredit"] = request.tradeModeAndCredit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SearchProducts",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/selection-group/product/command/searchProduct`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SearchProductsResponse>(await this.callApi(params, req, runtime), new $_model.SearchProductsResponse({}));
  }

  /**
   * Queries products based on various conditions and returns paginated results.
   * 
   * @remarks
   * Performs a paged query on the product list based on the page number and paging size.
   * 
   * @param request - SearchProductsRequest
   * @returns SearchProductsResponse
   */
  async searchProducts(request: $_model.SearchProductsRequest): Promise<$_model.SearchProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchProductsWithOptions(request, headers, runtime);
  }

  /**
   * Adds products to the selection pool for a distributor.
   * 
   * @remarks
   * Distributors can use this API operation to add products to the selection pool.
   * > Integrate this API operation if you are a distributor customer who registered on or after January 1, 2025. For details about the import operations and their impacts, refer to [Product best practices](https://www.alibabacloud.com/help/en/linkedmall/user-guide/product-interface-best-practices#lFENl).
   * 
   * @param request - SelectionGroupAddProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectionGroupAddProductResponse
   */
  async selectionGroupAddProductWithOptions(request: $_model.SelectionGroupAddProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SelectionGroupAddProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productIds)) {
      body["productIds"] = request.productIds;
    }

    if (!$dara.isNull(request.purchaserId)) {
      body["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectionGroupAddProduct",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/selection-group/product/command/addProduct`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SelectionGroupAddProductResponse>(await this.callApi(params, req, runtime), new $_model.SelectionGroupAddProductResponse({}));
  }

  /**
   * Adds products to the selection pool for a distributor.
   * 
   * @remarks
   * Distributors can use this API operation to add products to the selection pool.
   * > Integrate this API operation if you are a distributor customer who registered on or after January 1, 2025. For details about the import operations and their impacts, refer to [Product best practices](https://www.alibabacloud.com/help/en/linkedmall/user-guide/product-interface-best-practices#lFENl).
   * 
   * @param request - SelectionGroupAddProductRequest
   * @returns SelectionGroupAddProductResponse
   */
  async selectionGroupAddProduct(request: $_model.SelectionGroupAddProductRequest): Promise<$_model.SelectionGroupAddProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectionGroupAddProductWithOptions(request, headers, runtime);
  }

  /**
   * Dispatches products for a distributor.
   * 
   * @remarks
   * Allows a distributor to dispatch products.
   * 
   * @param request - SelectionGroupRemoveProductRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SelectionGroupRemoveProductResponse
   */
  async selectionGroupRemoveProductWithOptions(request: $_model.SelectionGroupRemoveProductRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SelectionGroupRemoveProductResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productIds)) {
      body["productIds"] = request.productIds;
    }

    if (!$dara.isNull(request.purchaserId)) {
      body["purchaserId"] = request.purchaserId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SelectionGroupRemoveProduct",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/selectionPool/selection-group/product/command/removeProduct`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SelectionGroupRemoveProductResponse>(await this.callApi(params, req, runtime), new $_model.SelectionGroupRemoveProductResponse({}));
  }

  /**
   * Dispatches products for a distributor.
   * 
   * @remarks
   * Allows a distributor to dispatch products.
   * 
   * @param request - SelectionGroupRemoveProductRequest
   * @returns SelectionGroupRemoveProductResponse
   */
  async selectionGroupRemoveProduct(request: $_model.SelectionGroupRemoveProductRequest): Promise<$_model.SelectionGroupRemoveProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.selectionGroupRemoveProductWithOptions(request, headers, runtime);
  }

  /**
   * Splits a purchase order and renders the resulting parent-child order structure. This API returns a list of items based on the final parent-child order structure. Distributors can use this response to render the final parent-child order layout, which simplifies receiving the purchase order creation success message and backfilling parent-child order information later.
   * 
   * @remarks
   * Call this API before creating a purchase order. It returns two lists: one for sellable items and one for unsellable items. The sellable items list follows the final parent-child order split structure.
   * 
   * @param request - SplitPurchaseOrderRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SplitPurchaseOrderResponse
   */
  async splitPurchaseOrderWithOptions(request: $_model.SplitPurchaseOrderRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.SplitPurchaseOrderResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SplitPurchaseOrder",
      version: "2023-09-30",
      protocol: "HTTPS",
      pathname: `/opensaas-s2b/opensaas-s2b-biz-trade/v2/purchaseOrders/commands/split`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<$_model.SplitPurchaseOrderResponse>(await this.callApi(params, req, runtime), new $_model.SplitPurchaseOrderResponse({}));
  }

  /**
   * Splits a purchase order and renders the resulting parent-child order structure. This API returns a list of items based on the final parent-child order structure. Distributors can use this response to render the final parent-child order layout, which simplifies receiving the purchase order creation success message and backfilling parent-child order information later.
   * 
   * @remarks
   * Call this API before creating a purchase order. It returns two lists: one for sellable items and one for unsellable items. The sellable items list follows the final parent-child order split structure.
   * 
   * @param request - SplitPurchaseOrderRequest
   * @returns SplitPurchaseOrderResponse
   */
  async splitPurchaseOrder(request: $_model.SplitPurchaseOrderRequest): Promise<$_model.SplitPurchaseOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.splitPurchaseOrderWithOptions(request, headers, runtime);
  }

}
