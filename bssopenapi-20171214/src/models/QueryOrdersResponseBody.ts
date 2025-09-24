// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrdersResponseBodyDataOrderListOrder extends $dara.Model {
  /**
   * @remarks
   * The aftertax amount of the order.
   * 
   * @example
   * 66
   */
  afterTaxAmount?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  /**
   * @remarks
   * The time when the order was created.
   * 
   * @example
   * 2017-06-08T09:41:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * @example
   * 34532532
   */
  orderId?: string;
  /**
   * @remarks
   * The type of the order. Valid values:
   * 
   * *   New: purchases an instance.
   * *   Renew: renews an instance.
   * *   Upgrade: upgrades the configurations of an instance.
   * *   Refund: applies for a refund.
   * 
   * @example
   * New
   */
  orderType?: string;
  /**
   * @remarks
   * The currency of payment.
   * 
   * @example
   * CNY
   */
  paymentCurrency?: string;
  /**
   * @remarks
   * The status of payment. Valid values for a non-refund order:
   * 
   * *   Unpaid: The order is not paid.
   * *   Paid: The order is paid.
   * *   Cancelled: The order is canceled.
   * 
   * > : The value is NULL for a refund order.
   * 
   * @example
   * Paid
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The time of payment.
   * 
   * @example
   * 2017-06-08T09:41:30Z
   */
  paymentTime?: string;
  /**
   * @remarks
   * The pretax amount of the order.
   * 
   * @example
   * 0
   */
  pretaxAmount?: string;
  /**
   * @remarks
   * The pretax amount of the order in local currency.
   * 
   * @example
   * 0
   */
  pretaxAmountLocal?: string;
  /**
   * @remarks
   * The pretax gross amount of the order.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: string;
  /**
   * @remarks
   * The code of the main service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the main service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The ID of the associated order.
   * 
   * @example
   * 234535345345342
   */
  relatedOrderId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tax of the order.
   * 
   * @example
   * 1
   */
  tax?: string;
  static names(): { [key: string]: string } {
    return {
      afterTaxAmount: 'AfterTaxAmount',
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      currency: 'Currency',
      orderId: 'OrderId',
      orderType: 'OrderType',
      paymentCurrency: 'PaymentCurrency',
      paymentStatus: 'PaymentStatus',
      paymentTime: 'PaymentTime',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productType: 'ProductType',
      relatedOrderId: 'RelatedOrderId',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterTaxAmount: 'string',
      commodityCode: 'string',
      createTime: 'string',
      currency: 'string',
      orderId: 'string',
      orderType: 'string',
      paymentCurrency: 'string',
      paymentStatus: 'string',
      paymentTime: 'string',
      pretaxAmount: 'string',
      pretaxAmountLocal: 'string',
      pretaxGrossAmount: 'string',
      productCode: 'string',
      productType: 'string',
      relatedOrderId: 'string',
      subscriptionType: 'string',
      tax: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBodyDataOrderList extends $dara.Model {
  order?: QueryOrdersResponseBodyDataOrderListOrder[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: { 'type': 'array', 'itemType': QueryOrdersResponseBodyDataOrderListOrder },
    };
  }

  validate() {
    if(Array.isArray(this.order)) {
      $dara.Model.validateArray(this.order);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * test
   */
  hostName?: string;
  /**
   * @remarks
   * The orders returned.
   */
  orderList?: QueryOrdersResponseBodyDataOrderList;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      orderList: 'OrderList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      orderList: QueryOrdersResponseBodyDataOrderList,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.orderList && typeof (this.orderList as any).validate === 'function') {
      (this.orderList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrdersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The message returned.
   */
  data?: QueryOrdersResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 61293E7A-3406-4447-8620-EC88B0AA66AD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
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
      data: QueryOrdersResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

