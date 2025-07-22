// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrdersRequest extends $dara.Model {
  /**
   * @example
   * 2016-05-23T12:00:00Z
   */
  createTimeEnd?: string;
  /**
   * @example
   * 2016-05-23T13:00:00Z
   */
  createTimeStart?: string;
  /**
   * @example
   * 1779628988149763
   */
  memberUid?: number;
  /**
   * @example
   * New
   */
  orderType?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * Paid
   */
  paymentStatus?: string;
  /**
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productType?: string;
  /**
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

