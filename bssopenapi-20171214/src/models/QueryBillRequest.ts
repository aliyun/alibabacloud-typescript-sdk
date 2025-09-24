// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBillRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 123
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The billing cycle, in the YYYY-MM format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-07
   */
  billingCycle?: string;
  /**
   * @remarks
   * Specifies whether to display local currency information in bills. The parameter will be discontinued.
   * 
   * @example
   * false
   */
  isDisplayLocalCurrency?: boolean;
  /**
   * @remarks
   * Specifies whether to filter out a bill whose pretax gross amount is 0. By default, a bill whose pretax gross amount is 0 is not filtered out. Valid values:
   * 
   * *   true: filters out a bill whose pretax gross amount is 0.
   * *   false: does not filter out a bill whose pretax gross amount is 0.
   * 
   * @example
   * true
   */
  isHideZeroCharge?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * *   Subscription
   * *   PayAsYouGo
   * 
   * This parameter must be used together with the ProductCode parameter.
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The type of the bill. Valid values:
   * 
   * *   SubscriptionOrder
   * *   PayAsYouGoBill
   * *   Refund
   * *   Adjustment
   * 
   * @example
   * SubscriptionOrder
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      isDisplayLocalCurrency: 'IsDisplayLocalCurrency',
      isHideZeroCharge: 'IsHideZeroCharge',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      isDisplayLocalCurrency: 'boolean',
      isHideZeroCharge: 'boolean',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      productCode: 'string',
      productType: 'string',
      subscriptionType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

