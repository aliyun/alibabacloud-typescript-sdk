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
   * Cancels a refund order.
   * 
   * @remarks
   * Cancel a refund order.
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
   * Cancels a refund order.
   * 
   * @remarks
   * Cancel a refund order.
   * @returns CancelRefundOrderResponse
   */
  async cancelRefundOrder(disputeId: string): Promise<$_model.CancelRefundOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelRefundOrderWithOptions(disputeId, headers, runtime);
  }

  /**
   * Confirms the receipt of goods.
   * 
   * @remarks
   * Confirms the receipt of goods.
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
   * Confirms the receipt of goods.
   * 
   * @remarks
   * Confirms the receipt of goods.
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
   * Backfill shipping notice information.
   * 
   * @remarks
   * Backfill shipping notice information.
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
   * Backfill shipping notice information.
   * 
   * @remarks
   * Backfill shipping notice information.
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
   * Creates a purchase order and returns the purchase order ID. The specific result of order creation is communicated through messages. After the order is created, you can query the order details associated with the purchase order using the order API.
   * 
   * @remarks
   * Creates a purchase order and returns the purchase order ID. Messages communicate the specific result of order creation. After the order is created, you can query the order details associated with the purchase order using the order API.
   * >Warning: Note: Purchase order creation is an asynchronous task. If a distributor calls this API and receives an abnormal status (such as error code 503), do not immediately process customer refunds. Distributors must wait for and consume the PurchaseOrderCreate message (the purchase order creation result message) to determine the order status—for example, by consuming the order status synchronization message—before proceeding with business logic. This prevents financial losses.
   * >Notice: Note: If you do not receive the PurchaseOrderCreate message (the purchase order creation result message) after calling the purchase order creation API, submit a ticket to the technical support team to inquire about the cause.
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
   * Creates a purchase order and returns the purchase order ID. The specific result of order creation is communicated through messages. After the order is created, you can query the order details associated with the purchase order using the order API.
   * 
   * @remarks
   * Creates a purchase order and returns the purchase order ID. Messages communicate the specific result of order creation. After the order is created, you can query the order details associated with the purchase order using the order API.
   * >Warning: Note: Purchase order creation is an asynchronous task. If a distributor calls this API and receives an abnormal status (such as error code 503), do not immediately process customer refunds. Distributors must wait for and consume the PurchaseOrderCreate message (the purchase order creation result message) to determine the order status—for example, by consuming the order status synchronization message—before proceeding with business logic. This prevents financial losses.
   * >Notice: Note: If you do not receive the PurchaseOrderCreate message (the purchase order creation result message) after calling the purchase order creation API, submit a ticket to the technical support team to inquire about the cause.
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
   * Create a support ticket.
   * 
   * @remarks
   * Creates a refund order.
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
   * Create a support ticket.
   * 
   * @remarks
   * Creates a refund order.
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
   * Queries the details of an order.
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
   * Queries the details of an order.
   * @returns GetOrderResponse
   */
  async getOrder(orderId: string): Promise<$_model.GetOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOrderWithOptions(orderId, headers, runtime);
  }

  /**
   * Retrieve the purchase order status.
   * 
   * @remarks
   * Retrieve the transaction order status.
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
   * Retrieve the purchase order status.
   * 
   * @remarks
   * Retrieve the transaction order status.
   * @returns GetPurchaseOrderStatusResponse
   */
  async getPurchaseOrderStatus(purchaseOrderId: string): Promise<$_model.GetPurchaseOrderStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPurchaseOrderStatusWithOptions(purchaseOrderId, headers, runtime);
  }

  /**
   * Retrieves the purchaser\\"s shop.
   * 
   * @remarks
   * Retrieves the purchaser\\"s shop.
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
   * Retrieves the purchaser\\"s shop.
   * 
   * @remarks
   * Retrieves the purchaser\\"s shop.
   * @returns GetPurchaserShopResponse
   */
  async getPurchaserShop(purchaserId: string): Promise<$_model.GetPurchaserShopResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPurchaserShopWithOptions(purchaserId, headers, runtime);
  }

  /**
   * Retrieve details of an after-sales order.
   * 
   * @remarks
   * Retrieve after-sales order details
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
   * Retrieve details of an after-sales order.
   * 
   * @remarks
   * Retrieve after-sales order details
   * @returns GetRefundOrderResponse
   */
  async getRefundOrder(disputeId: string): Promise<$_model.GetRefundOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRefundOrderWithOptions(disputeId, headers, runtime);
  }

  /**
   * Query the details of a product in the selection pool.
   * 
   * @remarks
   * Retrieve product details from the selection pool using the product ID. You can also specify a region code to check regional inventory.
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
   * Query the details of a product in the selection pool.
   * 
   * @remarks
   * Retrieve product details from the selection pool using the product ID. You can also specify a region code to check regional inventory.
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
   * Queries sales information for products in the selection pool.
   * 
   * @remarks
   * Queries sales information for products in the selection pool. Distributors can call this operation to check product sales details, such as product status. Use the divisionCode input parameter to check whether a product is available for sale in a specific region. We recommend using a five-level administrative division code (township or subdistrict level).
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
   * Queries sales information for products in the selection pool.
   * 
   * @remarks
   * Queries sales information for products in the selection pool. Distributors can call this operation to check product sales details, such as product status. Use the divisionCode input parameter to check whether a product is available for sale in a specific region. We recommend using a five-level administrative division code (township or subdistrict level).
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
   * Lists categories.
   * 
   * @remarks
   * Retrieves all subcategories for a parent category ID, or the details for a specific category ID.
   * If the parent category ID (parentCategoryId) is 0, the API returns the top-level categories under the root category.
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
   * Lists categories.
   * 
   * @remarks
   * Retrieves all subcategories for a parent category ID, or the details for a specific category ID.
   * If the parent category ID (parentCategoryId) is 0, the API returns the top-level categories under the root category.
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
   * Query logistics information for an order.
   * 
   * @remarks
   * Retrieves logistics information for an order.
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
   * Query logistics information for an order.
   * 
   * @remarks
   * Retrieves logistics information for an order.
   * @returns ListLogisticsOrdersResponse
   */
  async listLogisticsOrders(orderId: string): Promise<$_model.ListLogisticsOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogisticsOrdersWithOptions(orderId, headers, runtime);
  }

  /**
   * Lists purchaser shops.
   * 
   * @remarks
   * Lists purchaser shops.
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
   * Lists purchaser shops.
   * 
   * @remarks
   * Lists purchaser shops.
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
   * Query product sales information for the selection pool in batches.
   * 
   * @remarks
   * You can query product sales information for the selection pool in batches. Distributors can call this operation to retrieve product sales details, such as product status. Use the divisionCode input parameter to check whether products are available for sale in a specific region. We recommend that you pass a five-level address code (town or street level).
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
   * Query product sales information for the selection pool in batches.
   * 
   * @remarks
   * You can query product sales information for the selection pool in batches. Distributors can call this operation to retrieve product sales details, such as product status. Use the divisionCode input parameter to check whether products are available for sale in a specific region. We recommend that you pass a five-level address code (town or street level).
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
   * Retrieves a list of products from a product selection pool.
   * 
   * @param request - ListSelectionProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSelectionProductsResponse
   */
  async listSelectionProductsWithOptions(request: $_model.ListSelectionProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<$_model.ListSelectionProductsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
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
   * Retrieves a list of products from a product selection pool.
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
   * Query SKU sales information for items in the selection pool in batch.
   * 
   * @remarks
   * Query SKU sales information for items in the selection pool in batch. Distributors can call this API to retrieve batch details about SKU sales status and other attributes. To determine whether SKUs are sellable in a specific region, use the divisionCode parameter—preferably a five-level administrative division code for townships or subdistricts.
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
   * Query SKU sales information for items in the selection pool in batch.
   * 
   * @remarks
   * Query SKU sales information for items in the selection pool in batch. Distributors can call this API to retrieve batch details about SKU sales status and other attributes. To determine whether SKUs are sellable in a specific region, use the divisionCode parameter—preferably a five-level administrative division code for townships or subdistricts.
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
   * Queries child division codes.
   * 
   * @remarks
   * Queries child division codes.
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
   * Queries child division codes.
   * 
   * @remarks
   * Queries child division codes.
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
   * Queries a list of orders.
   * 
   * @remarks
   * Queries a list of orders.
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
   * Queries a list of orders.
   * 
   * @remarks
   * Queries a list of orders.
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
   * Reverse Single Rendering
   * 
   * @remarks
   * Renders a refund order.
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
   * Reverse Single Rendering
   * 
   * @remarks
   * Renders a refund order.
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
   * The product search API is a paginated interface for searching products based on various criteria.
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
   * The product search API is a paginated interface for searching products based on various criteria.
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
   * The distributor takes delivery of goods.
   * 
   * @remarks
   * Distributors use this API to add products to their selection group.
   * > We recommend that distributors who onboard on or after January 1, 2025 use this API. For more information about adding products and the related impact, see the [product best practices](https://help.aliyun.com/zh/linkedmall/user-guide/product-interface-best-practices?spm=a2c4g.11186623.help-menu-88587.d_2_2_0_8_0.58122056oN3crP\\&scm=20140722.H_2869668._.OR_help-T_cn~zh-V_1#lFENl).
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
   * The distributor takes delivery of goods.
   * 
   * @remarks
   * Distributors use this API to add products to their selection group.
   * > We recommend that distributors who onboard on or after January 1, 2025 use this API. For more information about adding products and the related impact, see the [product best practices](https://help.aliyun.com/zh/linkedmall/user-guide/product-interface-best-practices?spm=a2c4g.11186623.help-menu-88587.d_2_2_0_8_0.58122056oN3crP\\&scm=20140722.H_2869668._.OR_help-T_cn~zh-V_1#lFENl).
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
   * Removes products from a distributor\\"s stock.
   * 
   * @remarks
   * Distributors use this API to remove products from their stock.
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
   * Removes products from a distributor\\"s stock.
   * 
   * @remarks
   * Distributors use this API to remove products from their stock.
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
