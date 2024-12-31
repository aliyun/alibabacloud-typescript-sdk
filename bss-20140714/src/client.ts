// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  paramStr?: string;
  static names(): { [key: string]: string } {
    return {
      paramStr: 'paramStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOrderResponseBody;
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
      body: CreateOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCashDetailResponseBody extends $tea.Model {
  amountOwed?: string;
  availableCredit?: string;
  balanceAmount?: string;
  creditCardAmount?: string;
  creditLimit?: string;
  enableThresholdAlert?: string;
  frozenAmount?: string;
  miniAlertThreshold?: number;
  remmitanceAmount?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      amountOwed: 'AmountOwed',
      availableCredit: 'AvailableCredit',
      balanceAmount: 'BalanceAmount',
      creditCardAmount: 'CreditCardAmount',
      creditLimit: 'CreditLimit',
      enableThresholdAlert: 'EnableThresholdAlert',
      frozenAmount: 'FrozenAmount',
      miniAlertThreshold: 'MiniAlertThreshold',
      remmitanceAmount: 'RemmitanceAmount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountOwed: 'string',
      availableCredit: 'string',
      balanceAmount: 'string',
      creditCardAmount: 'string',
      creditLimit: 'string',
      enableThresholdAlert: 'string',
      frozenAmount: 'string',
      miniAlertThreshold: 'number',
      remmitanceAmount: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCashDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCashDetailResponseBody;
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
      body: DescribeCashDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponListRequest extends $tea.Model {
  endDeliveryTime?: string;
  pageNum?: number;
  pageSize?: number;
  startDeliveryTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endDeliveryTime: 'EndDeliveryTime',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startDeliveryTime: 'StartDeliveryTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDeliveryTime: 'string',
      pageNum: 'number',
      pageSize: 'number',
      startDeliveryTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponListResponseBody extends $tea.Model {
  coupons?: DescribeCouponListResponseBodyCoupons;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coupons: 'Coupons',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupons: DescribeCouponListResponseBodyCoupons,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponListResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCouponListResponseBody;
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
      body: DescribeCouponListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCallbackRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  paramStr?: string;
  static names(): { [key: string]: string } {
    return {
      paramStr: 'paramStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCallbackResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenCallbackResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OpenCallbackResponseBody;
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
      body: OpenCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryForCssOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  paramStr?: string;
  static names(): { [key: string]: string } {
    return {
      paramStr: 'paramStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryForCssOrderResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryForCssOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryForCssOrderResponseBody;
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
      body: QueryForCssOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VnoBatchRefundOrderRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  paramStr?: string;
  static names(): { [key: string]: string } {
    return {
      paramStr: 'paramStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramStr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VnoBatchRefundOrderResponseBody extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VnoBatchRefundOrderResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VnoBatchRefundOrderResponseBody;
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
      body: VnoBatchRefundOrderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponListResponseBodyCouponsCouponProductCodes extends $tea.Model {
  productCode?: string[];
  static names(): { [key: string]: string } {
    return {
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponListResponseBodyCouponsCouponTradeTypes extends $tea.Model {
  tradeType?: string[];
  static names(): { [key: string]: string } {
    return {
      tradeType: 'TradeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tradeType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponListResponseBodyCouponsCoupon extends $tea.Model {
  application?: string;
  balanceAmount?: string;
  couponNumber?: string;
  couponTemplateId?: number;
  creationTime?: string;
  deliveryTime?: string;
  description?: string;
  expiredAmount?: string;
  expiredTime?: string;
  frozenAmount?: string;
  modificationTime?: string;
  priceLimit?: string;
  productCodes?: DescribeCouponListResponseBodyCouponsCouponProductCodes;
  status?: string;
  totalAmount?: string;
  tradeTypes?: DescribeCouponListResponseBodyCouponsCouponTradeTypes;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      balanceAmount: 'BalanceAmount',
      couponNumber: 'CouponNumber',
      couponTemplateId: 'CouponTemplateId',
      creationTime: 'CreationTime',
      deliveryTime: 'DeliveryTime',
      description: 'Description',
      expiredAmount: 'ExpiredAmount',
      expiredTime: 'ExpiredTime',
      frozenAmount: 'FrozenAmount',
      modificationTime: 'ModificationTime',
      priceLimit: 'PriceLimit',
      productCodes: 'ProductCodes',
      status: 'Status',
      totalAmount: 'TotalAmount',
      tradeTypes: 'TradeTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      balanceAmount: 'string',
      couponNumber: 'string',
      couponTemplateId: 'number',
      creationTime: 'string',
      deliveryTime: 'string',
      description: 'string',
      expiredAmount: 'string',
      expiredTime: 'string',
      frozenAmount: 'string',
      modificationTime: 'string',
      priceLimit: 'string',
      productCodes: DescribeCouponListResponseBodyCouponsCouponProductCodes,
      status: 'string',
      totalAmount: 'string',
      tradeTypes: DescribeCouponListResponseBodyCouponsCouponTradeTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCouponListResponseBodyCoupons extends $tea.Model {
  coupon?: DescribeCouponListResponseBodyCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribeCouponListResponseBodyCouponsCoupon },
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
    this._endpoint = this.getEndpoint("bss", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * @param request - CreateOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderResponse
   */
  async createOrderWithOptions(request: CreateOrderRequest, runtime: $Util.RuntimeOptions): Promise<CreateOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.paramStr)) {
      query["paramStr"] = request.paramStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<CreateOrderResponse>(await this.callApi(params, req, runtime), new CreateOrderResponse({}));
  }

  /**
   * @param request - CreateOrderRequest
   * @returns CreateOrderResponse
   */
  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  /**
   * 获取现金明细
   * 
   * @param request - DescribeCashDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCashDetailResponse
   */
  async describeCashDetailWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeCashDetailResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeCashDetailResponse>(await this.callApi(params, req, runtime), new DescribeCashDetailResponse({}));
  }

  /**
   * 获取现金明细
   * @returns DescribeCashDetailResponse
   */
  async describeCashDetail(): Promise<DescribeCashDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCashDetailWithOptions(runtime);
  }

  /**
   * @param request - DescribeCouponListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCouponListResponse
   */
  async describeCouponListWithOptions(request: DescribeCouponListRequest, runtime: $Util.RuntimeOptions): Promise<DescribeCouponListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endDeliveryTime)) {
      query["EndDeliveryTime"] = request.endDeliveryTime;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startDeliveryTime)) {
      query["StartDeliveryTime"] = request.startDeliveryTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<DescribeCouponListResponse>(await this.callApi(params, req, runtime), new DescribeCouponListResponse({}));
  }

  /**
   * @param request - DescribeCouponListRequest
   * @returns DescribeCouponListResponse
   */
  async describeCouponList(request: DescribeCouponListRequest): Promise<DescribeCouponListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeCouponListWithOptions(request, runtime);
  }

  /**
   * OpenCallback
   * 
   * @param request - OpenCallbackRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns OpenCallbackResponse
   */
  async openCallbackWithOptions(request: OpenCallbackRequest, runtime: $Util.RuntimeOptions): Promise<OpenCallbackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.paramStr)) {
      query["paramStr"] = request.paramStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<OpenCallbackResponse>(await this.callApi(params, req, runtime), new OpenCallbackResponse({}));
  }

  /**
   * OpenCallback
   * 
   * @param request - OpenCallbackRequest
   * @returns OpenCallbackResponse
   */
  async openCallback(request: OpenCallbackRequest): Promise<OpenCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openCallbackWithOptions(request, runtime);
  }

  /**
   * @param request - QueryForCssOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns QueryForCssOrderResponse
   */
  async queryForCssOrderWithOptions(request: QueryForCssOrderRequest, runtime: $Util.RuntimeOptions): Promise<QueryForCssOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.paramStr)) {
      query["paramStr"] = request.paramStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<QueryForCssOrderResponse>(await this.callApi(params, req, runtime), new QueryForCssOrderResponse({}));
  }

  /**
   * @param request - QueryForCssOrderRequest
   * @returns QueryForCssOrderResponse
   */
  async queryForCssOrder(request: QueryForCssOrderRequest): Promise<QueryForCssOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryForCssOrderWithOptions(request, runtime);
  }

  /**
   * @param request - VnoBatchRefundOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VnoBatchRefundOrderResponse
   */
  async vnoBatchRefundOrderWithOptions(request: VnoBatchRefundOrderRequest, runtime: $Util.RuntimeOptions): Promise<VnoBatchRefundOrderResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.paramStr)) {
      query["paramStr"] = request.paramStr;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<VnoBatchRefundOrderResponse>(await this.callApi(params, req, runtime), new VnoBatchRefundOrderResponse({}));
  }

  /**
   * @param request - VnoBatchRefundOrderRequest
   * @returns VnoBatchRefundOrderResponse
   */
  async vnoBatchRefundOrder(request: VnoBatchRefundOrderRequest): Promise<VnoBatchRefundOrderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.vnoBatchRefundOrderWithOptions(request, runtime);
  }

}
