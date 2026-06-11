// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerOrderListRequest extends $dara.Model {
  /**
   * @remarks
   * Customer Account
   * 
   * @example
   * test_123
   */
  customerAccount?: string;
  /**
   * @remarks
   * Customer UID
   * 
   * @example
   * 123456
   */
  customerUid?: number;
  /**
   * @remarks
   * The UNIX timestamp indicating the start time of order creation. The time range must not exceed six months.  
   * The time range for order creation and the time range for order payment cannot both be empty.
   * 
   * @example
   * 1727789348000
   */
  orderCreateAfter?: number;
  /**
   * @remarks
   * The UNIX timestamp indicating the end time of order creation. The time range must not exceed six months.  
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
   * 13595216
   */
  orderId?: number;
  /**
   * @remarks
   * Order payment start UNIX timestamp. The time range must not exceed six months.
   * The order creation time range and the order payment time range cannot both be empty.
   * 
   * @example
   * 1727789348000
   */
  orderPayAfter?: number;
  /**
   * @remarks
   * Order payment end UNIX timestamp. The time range must not exceed six months.
   * The order creation time range and the order payment time range cannot both be empty.
   * 
   * @example
   * 1741008566000
   */
  orderPayBefore?: number;
  /**
   * @remarks
   * Order status:
   * - 1 Unpaid
   * - 2 Discarded
   * - 3 Paid
   * 
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @remarks
   * Order type List
   */
  orderTypeList?: string[];
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
   * 10
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
   * Actual payment amount up to this point
   * 
   * @example
   * 1000
   */
  payAmountBefore?: number;
  /**
   * @remarks
   * Payment Type:
   * 1: Non-agent payment;
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
   * 202502002231
   */
  projectId?: number;
  /**
   * @remarks
   * Customer follow-up staff
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
      orderTypeList: 'OrderTypeList',
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
      orderTypeList: { 'type': 'array', 'itemType': 'string' },
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
    if(Array.isArray(this.orderTypeList)) {
      $dara.Model.validateArray(this.orderTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

