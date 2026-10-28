// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerOrdersRequest extends $dara.Model {
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
   * The account manager.
   * 
   * @example
   * myBd
   */
  customerManager?: string;
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
   * The end time. This parameter is used in combination with TimeType. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-08-23 00:00:00
   */
  endDate?: string;
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
   * The order source. Valid values:
   * - 0: Regular customer.
   * - 1: Enterprise customer.
   * - 2: Tier-2 distributor.
   * 
   * @example
   * 0
   */
  orderSource?: number;
  /**
   * @remarks
   * The order status. Valid values:
   * - 1: Unpaid.
   * - 2: Canceled.
   * - 3: Paid.
   * 
   * @example
   * 3
   */
  orderStatus?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * - BUY: New purchase.
   * - UPGRADE: Upgrade.
   * - DOWNGRADE: Downgrade.
   * - RENEW: Renewal.
   * - REFUND: Refund.
   * - OTHERS: Others.
   * 
   * @example
   * RENEW
   */
  orderType?: string;
  /**
   * @remarks
   * The current page number.
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
   * The product detail code.
   * 
   * @example
   * vm_intl
   */
  productType?: string;
  /**
   * @remarks
   * The start time. This parameter is used in combination with TimeType. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * This parameter is required.
   * 
   * @example
   * 2024-08-13 00:00:00
   */
  startDate?: string;
  /**
   * @remarks
   * The time type used as the basis for the query. This is not a date or time value. Valid values:
   * - 1: Payment time.
   * - 2: Order placement time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  timeType?: number;
  static names(): { [key: string]: string } {
    return {
      customerAccount: 'CustomerAccount',
      customerManager: 'CustomerManager',
      customerUid: 'CustomerUid',
      endDate: 'EndDate',
      orderId: 'OrderId',
      orderSource: 'OrderSource',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productType: 'ProductType',
      startDate: 'StartDate',
      timeType: 'TimeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerAccount: 'string',
      customerManager: 'string',
      customerUid: 'number',
      endDate: 'string',
      orderId: 'number',
      orderSource: 'number',
      orderStatus: 'number',
      orderType: 'string',
      pageNo: 'number',
      pageSize: 'number',
      productType: 'string',
      startDate: 'string',
      timeType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

