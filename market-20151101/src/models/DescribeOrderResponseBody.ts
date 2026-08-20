// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOrderResponseBodyInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderResponseBodySupplierTelephones extends $dara.Model {
  telephone?: string[];
  static names(): { [key: string]: string } {
    return {
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      telephone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.telephone)) {
      $dara.Model.validateArray(this.telephone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderResponseBody extends $dara.Model {
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
   * The order component information. The metric description for the parameters in the example is as follows:
   * 
   * - package_quantity: the number of usage times (a component specific to API products)
   * - package_version: the version
   * - ord_time: the duration
   * - order_num: the quantity
   * - code: the component code
   * - globarKey: the component key
   * - name: the component name
   * - value: the component value.
   * 
   * @example
   * { "package_quantity": { "code": "package_quantity", "globarKey": "cmapi014302_package_quantity_package_quantity_10000", "name": "10000次", "value": "10000" }, "package_version": { "code": "package_version", "globarKey": "cmapi014302_package_version_package_version_yuncode830200000", "name": "0元／10000次", "value": "yuncode830200000" }, "ord_time": { "code": "ord_time", "globarKey": "cmapi014302_ord_time_ord_time_6:Month", "name": "6个月", "value": "6:Month" }, "order_num": { "code": "order_num", "globarKey": "cmapi014302_order_num_order_num_1", "name": "1", "value": "1" } }
   */
  components?: { [key: string]: any };
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
  instanceIds?: DescribeOrderResponseBodyInstanceIds;
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
   * 
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
   * 
   * - NEW: New purchase order.
   * - RENEW: Renewal order.
   * - TRIAL: Trial order.
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
   * 
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
   * 
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
   * The specification code of the subscribed product.
   * 
   * @example
   * cmgj02****-prepay
   */
  productSkuCode?: string;
  /**
   * @remarks
   * The quantity of the subscribed product.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  /**
   * @remarks
   * The company name of the seller.
   * 
   * @example
   * **科技股份有限公司
   */
  supplierCompanyName?: string;
  supplierTelephones?: DescribeOrderResponseBodySupplierTelephones;
  /**
   * @remarks
   * The total payable amount of the order, in CNY.
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
      supplierCompanyName: 'SupplierCompanyName',
      supplierTelephones: 'SupplierTelephones',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountQuantity: 'number',
      aliUid: 'number',
      components: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      couponPrice: 'number',
      createdOn: 'number',
      instanceIds: DescribeOrderResponseBodyInstanceIds,
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
      supplierCompanyName: 'string',
      supplierTelephones: DescribeOrderResponseBodySupplierTelephones,
      totalPrice: 'number',
    };
  }

  validate() {
    if(this.components) {
      $dara.Model.validateMap(this.components);
    }
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    if(this.supplierTelephones && typeof (this.supplierTelephones as any).validate === 'function') {
      (this.supplierTelephones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

