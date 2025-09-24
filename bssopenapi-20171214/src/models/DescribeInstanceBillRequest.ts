// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceBillRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member. If you specify this parameter, the bills of the member are queried. If you do not specify this parameter, the bills of the current account are queried by default.
   * 
   * @example
   * 122
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The billing cycle. Specify the parameter in the YYYY-MM format.
   * Only the latest 18 month billing cycle is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. This parameter is required only when the Granularity parameter is set to DAILY. Format: YYYY-MM-DD.
   * 
   * @example
   * 2020-03-02
   */
  billingDate?: string;
  /**
   * @remarks
   * The granularity at which bills are queried. Valid values:
   * 
   * *   MONTHLY: queries bills on a monthly basis. The data that you query is the same as the data searched by instances on the Billing Details tab of the Bill Details page in the User Center console.
   * *   DAILY: queries bills on a daily basis. The data that you query is the same as the data searched by days on the Billing Details tab of the Bill Details page in the User Center console.
   * 
   * The BillingDate parameter is required if you set the Granularity parameter to DAILY.
   * 
   * @example
   * MONTHLY
   */
  granularity?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * abc
   */
  instanceID?: string;
  /**
   * @remarks
   * Specifies whether to query data by billable items. Valid values:
   * 
   * *   false: The data that you query is the same as the data searched by instances on the Billing Details tab of the Bill Details page in the User Center console.
   * *   true: The data that you query is the same as the data searched by billable items on the Billing Details tab of the Bill Details page in the User Center console.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  isBillingItem?: boolean;
  /**
   * @remarks
   * Specifies whether to filter bills if both the pretax gross amount and pretax amount are 0. Valid values:
   * 
   * *   false: does not filter bills.
   * *   true: filters bills.
   * 
   * @example
   * false
   */
  isHideZeroCharge?: boolean;
  /**
   * @remarks
   * The maximum number of entries to return. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to indicate the position where the results for the current call start. The parameter must be left empty or set to the value of the NextToken parameter that is returned from the last call. Otherwise, an error is returned. If the parameter is left empty, data is queried from the first item.
   * 
   * @example
   * CAESEgoQCg4KCm
   */
  nextToken?: string;
  ownerId?: number;
  /**
   * @remarks
   * The code of the service. The code is the same as that in Cost Center.
   * 
   * @example
   * rds
   */
  pipCode?: string;
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
   * *   Subscription: the subscription billing method.
   * *   PayAsYouGo: the pay-as-you-go billing method.
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
      instanceID: 'InstanceID',
      isBillingItem: 'IsBillingItem',
      isHideZeroCharge: 'IsHideZeroCharge',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      pipCode: 'PipCode',
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
      instanceID: 'string',
      isBillingItem: 'boolean',
      isHideZeroCharge: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerId: 'number',
      pipCode: 'string',
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

