// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerOrderListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The customer account.
   * 
   * @example
   * test_123
   */
  customerAccount?: string;
  /**
   * @remarks
   * The customer UID.
   * 
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @remarks
   * The start timestamp for order creation. The time range cannot exceed 6 months. The order creation time range and the order payment time range cannot both be empty.
   * 
   * @example
   * 1727789348000
   */
  orderCreateAfter?: number;
  /**
   * @remarks
   * The end timestamp for order creation. The time range cannot exceed 6 months. The order creation time range and the order payment time range cannot both be empty.
   * 
   * @example
   * 1741008566000
   */
  orderCreateBefore?: number;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 13595216
   */
  orderId?: number;
  /**
   * @remarks
   * The start timestamp for order payment. The time range cannot exceed 6 months. The order creation time range and the order payment time range cannot both be empty.
   * 
   * @example
   * 1727789348000
   */
  orderPayAfter?: number;
  /**
   * @remarks
   * The end timestamp for order payment. The time range cannot exceed 6 months. The order creation time range and the order payment time range cannot both be empty.
   * 
   * @example
   * 1741008566000
   */
  orderPayBefore?: number;
  /**
   * @remarks
   * The order status. Valid values:
   * - 1: unpaid
   * - 2: canceled
   * - 3: paid.
   * 
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @remarks
   * The list of order types.
   */
  orderTypeListShrink?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The minimum actual payment amount.
   * 
   * @example
   * 1
   */
  payAmountAfter?: number;
  /**
   * @remarks
   * The maximum actual payment amount.
   * 
   * @example
   * 1000
   */
  payAmountBefore?: number;
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
   * 202502002231
   */
  projectId?: number;
  /**
   * @remarks
   * The employee who follows up with the customer.
   * 
   * @example
   * 1234532
   */
  ramAccountForCustomerManager?: string;
  static names(): { [key: string]: string } {
    return {
      customerAccount: 'CustomerAccount',
      customerUid: 'CustomerUid',
      orderCreateAfter: 'OrderCreateAfter',
      orderCreateBefore: 'OrderCreateBefore',
      orderId: 'OrderId',
      orderPayAfter: 'OrderPayAfter',
      orderPayBefore: 'OrderPayBefore',
      orderStatus: 'OrderStatus',
      orderTypeListShrink: 'OrderTypeList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      payAmountAfter: 'PayAmountAfter',
      payAmountBefore: 'PayAmountBefore',
      payType: 'PayType',
      productCode: 'ProductCode',
      productName: 'ProductName',
      projectId: 'ProjectId',
      ramAccountForCustomerManager: 'RamAccountForCustomerManager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerAccount: 'string',
      customerUid: 'number',
      orderCreateAfter: 'number',
      orderCreateBefore: 'number',
      orderId: 'number',
      orderPayAfter: 'number',
      orderPayBefore: 'number',
      orderStatus: 'number',
      orderTypeListShrink: 'string',
      pageNo: 'number',
      pageSize: 'number',
      payAmountAfter: 'number',
      payAmountBefore: 'number',
      payType: 'number',
      productCode: 'string',
      productName: 'string',
      projectId: 'number',
      ramAccountForCustomerManager: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

