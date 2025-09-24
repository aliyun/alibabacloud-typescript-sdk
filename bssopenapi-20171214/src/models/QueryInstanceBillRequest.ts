// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstanceBillRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member. If you specify a value for this parameter, you can query the bills of the specified member. If you leave this parameter empty, the bills of the current account are queried by default.
   * 
   * @example
   * 122
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The billing cycle. Format: YYYY-MM.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. This parameter is required only if the **Granularity** parameter is set to DAILY. Format: YYYY-MM-DD.
   * 
   * @example
   * 2020-03-03
   */
  billingDate?: string;
  /**
   * @remarks
   * The granularity at which bills are queried. Valid values:
   * 
   * *   MONTHLY: queries bills by month. The data queried is consistent with the data that is displayed for the specified billing cycle on the Billing Details tab of the Bill Details page in User Center.
   * *   DAILY: queries bills by day. The data queried is consistent with the data that is displayed for the specified day on the Billing Details tab of the Bill Details page in User Center.
   * 
   * You must set the **BillingDate** parameter before you can set the Granularity parameter to DAILY.
   * 
   * @example
   * MONTHLY
   */
  granularity?: string;
  /**
   * @remarks
   * Specifies whether to query data by billable item. Valid values:
   * 
   * *   false: does not query data by billable item. The data queried is consistent with the data that is displayed for the specified instance on the Billing Details tab of the Bill Details page in User Center.
   * *   true: queries data by billable item. The data queried is consistent with the data that is displayed for the specified billable item on the Billing Details tab of the Bill Details page in User Center.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isBillingItem?: boolean;
  /**
   * @remarks
   * Specifies whether to filter out a bill whose pretax gross amount and pretax amount are 0. Default value: false.******** Valid values:
   * 
   * *   false: does not filter the bill.
   * *   true: filters the bill.
   * 
   * @example
   * false
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
   * The type of the service. This parameter is required if the ProductCode parameter is set to the service code of Alibaba Cloud Marketplace.
   * 
   * @example
   * rds
   */
  productType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * **
   * 
   * ****This parameter must be used together with the **ProductCode** parameter.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      isBillingItem: 'IsBillingItem',
      isHideZeroCharge: 'IsHideZeroCharge',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productType: 'ProductType',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      isBillingItem: 'boolean',
      isHideZeroCharge: 'boolean',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
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

