// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubPartnerOrderListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The start timestamp of the order creation time range. The time range cannot exceed 6 months. The order creation time range and the order payment time range cannot both be empty.
   * 
   * @example
   * 1727789348000
   */
  orderCreateAfter?: number;
  /**
   * @remarks
   * The end timestamp of the order creation time range. The time range cannot exceed 6 months. The order creation time range and the order payment time range cannot both be empty.
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
   * 209335720330622
   */
  orderId?: number;
  /**
   * @remarks
   * The start timestamp of the order payment time range. The time range cannot exceed 6 months. The order creation time range and the order payment time range cannot both be empty.
   * 
   * @example
   * 1727789348000
   */
  orderPayAfter?: number;
  /**
   * @remarks
   * The end timestamp of the order payment time range. The time range cannot exceed 6 months. The order creation time range and the order payment time range cannot both be empty.
   * 
   * @example
   * 1741008566000
   */
  orderPayBefore?: number;
  /**
   * @remarks
   * The order status. Valid values:
   * - 1: unpaid
   * - 2: paid
   * - 3: voided.
   * 
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @remarks
   * The list of order types.
   * Valid values: BUY, UPGRADE, DOWNGRADE, RENEW, REFUND, and OTHERS.
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
   * 20
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
   * 100
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
   * 202501101023
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the secondary partner.
   * 
   * @example
   * XXX有限公司
   */
  subPartnerName?: string;
  /**
   * @remarks
   * The UID of the secondary partner.
   * 
   * @example
   * 123432311
   */
  subPartnerUid?: number;
  static names(): { [key: string]: string } {
    return {
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
      subPartnerName: 'SubPartnerName',
      subPartnerUid: 'SubPartnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

