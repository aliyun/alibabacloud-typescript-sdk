// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrdersResponseBodyDataOrderListOrder extends $dara.Model {
  /**
   * @example
   * 66
   */
  afterTaxAmount?: string;
  /**
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @example
   * 2017-06-08T09:41:30Z
   */
  createTime?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 237258627070169
   */
  orderId?: string;
  /**
   * @example
   * New
   */
  orderType?: string;
  /**
   * @example
   * CNY
   */
  paymentCurrency?: string;
  /**
   * @example
   * Paid
   */
  paymentStatus?: string;
  /**
   * @example
   * 2017-06-08T09:41:30Z
   */
  paymentTime?: string;
  /**
   * @example
   * 0
   */
  pretaxAmount?: string;
  /**
   * @example
   * 0
   */
  pretaxAmountLocal?: string;
  /**
   * @example
   * 0
   */
  pretaxGrossAmount?: string;
  /**
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productType?: string;
  /**
   * @example
   * 234535345345342
   */
  relatedOrderId?: string;
  /**
   * @example
   * Subscription
   */
  subscriptionType?: string;
  /**
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

export class GetOrdersResponseBodyDataOrderList extends $dara.Model {
  order?: GetOrdersResponseBodyDataOrderListOrder[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: { 'type': 'array', 'itemType': GetOrdersResponseBodyDataOrderListOrder },
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

export class GetOrdersResponseBodyData extends $dara.Model {
  /**
   * @example
   * test
   */
  hostName?: string;
  orderList?: GetOrdersResponseBodyDataOrderList;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
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
      orderList: GetOrdersResponseBodyDataOrderList,
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

export class GetOrdersResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetOrdersResponseBodyData;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
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
      data: GetOrdersResponseBodyData,
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

