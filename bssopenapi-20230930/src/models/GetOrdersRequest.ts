// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range during which orders were created. By default, orders created within the last hour are queried. Specify the time in the YYYY-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-05-23T12:00:00Z
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The start of the time range during which orders were created. By default, orders created within the last hour are queried. Specify the time in the YYYY-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2016-05-23T13:00:00Z
   */
  createTimeStart?: string;
  /**
   * @remarks
   * The UID of the member accounts in the enterprise multi-account architecture. Leave this parameter empty if this scenario does not apply.
   * 
   * @example
   * 1779628988149763
   */
  memberUid?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * - New: new purchase
   * - Renew: renewal
   * - Upgrade: upgrade
   * - TempUpgrade: temporary upgrade
   * - Downgrade: downgrade
   * - Refund: refund
   * - Convert: billing method change
   * - ResizeDisk: disk resizing
   * - CompensatoryRenew: compensatory renewal
   * - IncreaseUpgrade: bandwidth upgrade
   * - Exchange: exchange
   * - ChangeOperatingSystem: operating system replacement
   * 
   * @example
   * New
   */
  orderType?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The payment status. For non-refund orders, valid values:
   * - Unpaid: unpaid
   * - Paid: paid
   * - Cancelled: cancelled
   * 
   * > For refund orders, this parameter can be NULL.
   * 
   * @example
   * Paid
   */
  paymentStatus?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The subscription type. Valid values:
   * - Subscription: subscription
   * - PayAsYouGo: pay-as-you-go
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      memberUid: 'MemberUid',
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
      memberUid: 'number',
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

