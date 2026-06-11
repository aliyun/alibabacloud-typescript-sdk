// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubPartnerOrderListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp of the start time for order creation. The time range must not exceed six months.  
   * The time range for order creation and the time range for order payment cannot both be empty.
   * 
   * @example
   * 1727789348000
   */
  orderCreateAfter?: number;
  /**
   * @remarks
   * The UNIX timestamp of the end time for order creation. The time range must not exceed six months.  
   * The time range for order creation and the time range for order payment cannot both be empty.
   * 
   * @example
   * 1741008566000
   */
  orderCreateBefore?: number;
  /**
   * @remarks
   * Order ID
   * 
   * @example
   * 209335720330622
   */
  orderId?: number;
  /**
   * @remarks
   * The UNIX timestamp of the start time for order payment. The time range must not exceed six months.  
   * The time range for order creation and the time range for order payment cannot both be empty.
   * 
   * @example
   * 1727789348000
   */
  orderPayAfter?: number;
  /**
   * @remarks
   * UNIX timestamp of the order payment deadline. The time range cannot exceed six months.
   * The time range for order creation and the time range for order payment cannot both be empty.
   * 
   * @example
   * 1741008566000
   */
  orderPayBefore?: number;
  /**
   * @remarks
   * Order status. Valid values:
   * 1: Unpaid
   * 2: Paid
   * 3: Canceled
   * 
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @remarks
   * List of order types.
   * Valid order types include: BUY, UPGRADE, DOWNGRADE, RENEW, REFUND, OTHERS
   */
  orderTypeListShrink?: string;
  /**
   * @remarks
   * Page number
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Page size
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Minimum paid amount
   * 
   * @example
   * 1
   */
  payAmountAfter?: number;
  /**
   * @remarks
   * Maximum paid amount
   * 
   * @example
   * 100
   */
  payAmountBefore?: number;
  /**
   * @remarks
   * Payment Type:  
   * 1: Non-agent payment  
   * 2: Agent payment
   * 
   * @example
   * 1
   */
  payType?: number;
  /**
   * @remarks
   * Product code
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * Product Name
   * 
   * @example
   * 弹性计算
   */
  productName?: string;
  /**
   * @remarks
   * Opportunity ID
   * 
   * @example
   * 202501101023
   */
  projectId?: number;
  /**
   * @remarks
   * Sub-partner name
   * 
   * @example
   * XXX有限公司
   */
  subPartnerName?: string;
  /**
   * @remarks
   * Sub-partner UID
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

