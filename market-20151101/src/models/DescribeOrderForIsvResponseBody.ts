// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrderForIsvResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of accounts.
   * 
   * @example
   * 0
   */
  accountQuantity?: number;
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud user (aliyunPK).
   * 
   * @example
   * 190311111111****
   */
  aliUid?: number;
  /**
   * @remarks
   * The order module information. The metric description for the parameters in the example is as follows:
   * - package_quantity: the number of usage times (a module specific to API products)
   * - package_version: the version
   * - ord_time: the duration
   * - order_num: the quantity
   * - code: the module code
   * - globarKey: the module key
   * - name: the module name
   * - value: the module value.
   * 
   * @example
   * {"package_version":{"code":"package_version","globarKey":"cmgj0******8_package_version_package_version_yuncode4176*****1","name":"0.01","value":"yuncode4176*****1"},"ord_time":{"code":"ord_time","globarKey":"cmgj0******8_ord_time_ord_time_1:Month","name":"1个月","value":"1:Month"},"order_num":{"code":"order_num","globarKey":"cmgj0******8_order_num_order_num_1","name":"1","value":"1"}}
   */
  components?: any;
  /**
   * @remarks
   * The amount of vouchers used, in CNY.
   * 
   * @example
   * 0.0
   */
  couponPrice?: number;
  /**
   * @remarks
   * The time when the order was placed.
   * 
   * @example
   * 1531191564000
   */
  createdOn?: number;
  /**
   * @remarks
   * List
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 202211111111111
   */
  orderId?: number;
  /**
   * @remarks
   * The order status. Valid values:
   * - NORMAL: Normal.
   * - REFUND: Refunded.
   * - DELETE: Voided.
   * 
   * @example
   * NORMAL
   */
  orderStatus?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * - NEW: New purchase order.
   * - RENEW: Renewal order.
   * - TRIAL: Trial order.
   * - UPGRADE: Upgrade order.
   * - DOWNGRADE: Downgrade order.
   * - PURCHASE: Conversion order.
   * 
   * @example
   * NEW
   */
  orderType?: string;
  /**
   * @remarks
   * The original price of the order, in CNY.
   * 
   * @example
   * 10.0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The payment time.
   * 
   * @example
   * 1531191675000
   */
  paidOn?: number;
  /**
   * @remarks
   * The payment status. Valid values:
   * - PAID: Paid.
   * - UNPAID: Unpaid.
   * 
   * @example
   * PAID
   */
  payStatus?: string;
  /**
   * @remarks
   * The actual payment amount, in CNY.
   * 
   * @example
   * 0.0
   */
  paymentPrice?: number;
  /**
   * @remarks
   * The time unit for prepaid orders. Valid values:
   * - MONTH: one month
   * - SEASON: one quarter
   * - HALFYEAR: half a year
   * - YEAR: one year
   * - TWOYEARS: two years
   * - ONCE: one-time.
   * 
   * @example
   * MONTH
   */
  periodType?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * cmgj02****
   */
  productCode?: string;
  /**
   * @remarks
   * The name of the subscribed product.
   * 
   * @example
   * saas服务产品
   */
  productName?: string;
  /**
   * @remarks
   * The SKU code of the subscribed product.
   * 
   * @example
   * cmgj02****-prepay
   */
  productSkuCode?: string;
  /**
   * @remarks
   * The quantity of the order.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The request ID. This ID is used for troubleshooting when an error occurs.
   * 
   * @example
   * 6EF60BEC-****-****-****-270359FB54A7
   */
  requestId?: string;
  /**
   * @remarks
   * The total receivable amount of the order, in CNY.
   * 
   * @example
   * 0.0
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      accountQuantity: 'AccountQuantity',
      aliUid: 'AliUid',
      components: 'Components',
      couponPrice: 'CouponPrice',
      createdOn: 'CreatedOn',
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      originalPrice: 'OriginalPrice',
      paidOn: 'PaidOn',
      payStatus: 'PayStatus',
      paymentPrice: 'PaymentPrice',
      periodType: 'PeriodType',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      quantity: 'Quantity',
      requestId: 'RequestId',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountQuantity: 'number',
      aliUid: 'number',
      components: 'any',
      couponPrice: 'number',
      createdOn: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'number',
      orderStatus: 'string',
      orderType: 'string',
      originalPrice: 'number',
      paidOn: 'number',
      payStatus: 'string',
      paymentPrice: 'number',
      periodType: 'string',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      quantity: 'number',
      requestId: 'string',
      totalPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

