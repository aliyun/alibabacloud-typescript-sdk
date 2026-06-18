// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubPartnerOrderListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The order discount.
   * 
   * @example
   * 0.9
   */
  amountDiscount?: number;
  /**
   * @remarks
   * The actual payment amount.
   * 
   * @example
   * 3750
   */
  amountDue?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-07-07 07:52:22
   */
  createdAt?: string;
  /**
   * @remarks
   * The customer classification.
   * 
   * @example
   * C类
   */
  customerClassification?: string;
  /**
   * @remarks
   * The coupon amount.
   * 
   * @example
   * 0
   */
  deductedAmountByCoupons?: number;
  /**
   * @remarks
   * The discounted price.
   * 
   * @example
   * 3750
   */
  discountedPrice?: number;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 236414227150922
   */
  orderId?: number;
  /**
   * @remarks
   * The order status. Valid values:
   * - 1: unpaid
   * - 2: deprecated
   * - 3: paid.
   * 
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * - BUY: new purchase
   * - UPGRADE: upgrade
   * - DOWNGRADE: downgrade
   * - RENEW: renewal
   * - REFUND: refund
   * - OTHERS: other.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The payment time.
   * 
   * @example
   * 2024-07-07 07:52:22
   */
  paidAt?: string;
  /**
   * @remarks
   * The payment type. Valid values:
   * - 1: non-delegated payment
   * - 2: delegated payment.
   * 
   * @example
   * 1
   */
  payType?: number;
  /**
   * @remarks
   * The original price or list price.
   * 
   * @example
   * 3750
   */
  price?: number;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * 弹性计算
   */
  productName?: string;
  /**
   * @remarks
   * The opportunity ID.
   * 
   * @example
   * 202502233443
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the secondary partner.
   * 
   * @example
   * xxx有限公司
   */
  subPartnerName?: string;
  /**
   * @remarks
   * The UID of the secondary partner.
   * 
   * @example
   * 1123132
   */
  subPartnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      amountDiscount: 'AmountDiscount',
      amountDue: 'AmountDue',
      createdAt: 'CreatedAt',
      customerClassification: 'CustomerClassification',
      deductedAmountByCoupons: 'DeductedAmountByCoupons',
      discountedPrice: 'DiscountedPrice',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      paidAt: 'PaidAt',
      payType: 'PayType',
      price: 'Price',
      productCode: 'ProductCode',
      productName: 'ProductName',
      projectId: 'ProjectId',
      subPartnerName: 'SubPartnerName',
      subPartnerUid: 'SubPartnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountDiscount: 'number',
      amountDue: 'number',
      createdAt: 'string',
      customerClassification: 'string',
      deductedAmountByCoupons: 'number',
      discountedPrice: 'number',
      orderId: 'number',
      orderStatus: 'number',
      orderType: 'string',
      paidAt: 'string',
      payType: 'number',
      price: 'number',
      productCode: 'string',
      productName: 'string',
      projectId: 'number',
      subPartnerName: 'string',
      subPartnerUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubPartnerOrderListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSubPartnerOrderListResponseBodyData[];
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries that meet the query conditions. This is an optional parameter and is not returned by default.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetSubPartnerOrderListResponseBodyData },
      message: 'string',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

