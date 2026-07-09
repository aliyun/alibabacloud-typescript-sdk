// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrdersRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the order creation time range. If not specified, orders created within the most recent hour are queried. Format: YYYY-MM-ddTHH:mm:ssZ. Time zone: UTC.
   * 
   * @example
   * 2016-05-23T12:00:00Z
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The start of the order creation time range. If not specified, orders created within the most recent hour are queried. Format: YYYY-MM-ddTHH:mm:ssZ. Time zone: UTC.
   * 
   * @example
   * 2016-05-23T13:00:00Z
   */
  createTimeStart?: string;
  /**
   * @remarks
   * The UID of a member account in an enterprise with multiple member accounts. Leave this parameter empty if this scenario does not apply.
   * 
   * @example
   * 1779628988149763
   */
  memberUid?: number;
  /**
   * @remarks
   * The order type. Valid values:
   * - New: new purchase.
   * - Renew: renewal.
   * - Upgrade: upgrade.
   * - TempUpgrade: temporary upgrade.
   * - Downgrade: downgrade.
   * - Refund: refund.
   * - Convert: billing method conversion.
   * - ResizeDisk: cloud disk resizing.
   * - CompensatoryRenew: compensatory renewal.
   * - IncreaseUpgrade: bandwidth upgrade.
   * - Exchange: exchange.
   * - ChangeOperatingSystem: operating system change.
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
   * - Unpaid: unpaid.
   * - Paid: paid.
   * - Cancelled: canceled.
   * 
   * > For refund orders, set this parameter to NULL.
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
   * - Subscription: upfront.
   * - PayAsYouGo: pay-as-you-go.
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

