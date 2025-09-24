// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the period during which the orders were created. By default, orders within the last hour are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-05-23T12:00:00Z
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The start time of the period during which the orders were created. By default, orders within the last hour are queried. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-05-23T13:00:00Z
   */
  createTimeStart?: string;
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
  ownerId?: number;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of payment. Valid values for a non-refund order:
   * 
   * *   Unpaid: The order is not paid.
   * *   Paid: The order is paid.
   * *   Cancelled: The order is canceled.
   * 
   * > : You can set this parameter to NULL for a refund order.
   * 
   * @example
   * Paid
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The type of the service.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: subscription
   * *   PayAsYouGo: pay-as-you-go
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      paymentStatus: 'PaymentStatus',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'string',
      createTimeStart: 'string',
      orderType: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      paymentStatus: 'string',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

