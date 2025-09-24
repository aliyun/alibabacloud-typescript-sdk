// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSplitItemBillRequestTagFilter extends $dara.Model {
  /**
   * @remarks
   * The TagFilter.N parameter is used to query bills that match a specified tag. The value of the TagFilter.N parameter must be a key-value pair. The tag key must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * *   If only the TagFilter.N.TagKey parameter is specified, all bills associated with the tag key are queried.
   * *   If you specify multiple tag key-value pairs at the same time, bills that meet any one of the tag key-value pairs are queried.
   * *   If the tags added to resources change, you can query only the bills that are generated within the period in which the tags and resources are associated.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * You can specify the TagValues.N parameter to query bills that match the specified tag value. The value of the TagValues.N parameter must be a string. The tag value must be 1 to 128 characters in length. Valid values of N: 1 to 20.
   * 
   * *   If you specify the TagValues.N parameter, the TagFilter.N.TagKey parameter is required. Otherwise, the error message InvalidParameter.TagValues is returned.
   * *   If you specify multiple tag values, split bills that match one of the tag values are queried.
   * 
   * @example
   * TestValue
   */
  tagValues?: string[];
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValues: 'TagValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member. If you specify this parameter, the bills of the member are queried. If you do not specify this parameter, the bills of the current account are queried by default.
   * 
   * @example
   * 123
   */
  billOwnerId?: number;
  /**
   * @remarks
   * The billing cycle. Specify the parameter in the YYYY-MM format.
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
   * *   MONTHLY: queries bills on a monthly basis. The data that you query is the same as the data that is queried by billing cycles in the Split Bill module of the User Center console.
   * *   DAILY: queries bills on a daily basis. The data that you query is the same as the data that is queried by days in the Split Bill module of the User Center console.
   * 
   * If you specify DAILY for this parameter, the BillingDate parameter is required.
   * 
   * @example
   * Monthly
   */
  granularity?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-kjhdskjgshfdlkjfdh
   */
  instanceID?: string;
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
   * The maximum number of entries to query. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. The parameter must be left empty or set to the value of the NextToken parameter returned in the last call. Otherwise, an error is returned. If the parameter is left empty, the data is queried from the first entry.
   * 
   * @example
   * CAESEgoQCg4KCmd
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
   * The ID of the split item.
   * 
   * @example
   * i-kjhdskjgshfdlkjfdh
   */
  splitItemID?: string;
  /**
   * @remarks
   * The billing method. Valid values: Subscription: the subscription billing method. PayAsYouGo: the pay-as-you-go billing method. This parameter must be used with the ProductCode parameter.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tags that are used to filter split bills. You can specify multiple tag values. If you specify multiple tag values, split bills that match one of the tag values are queried.
   */
  tagFilter?: DescribeSplitItemBillRequestTagFilter[];
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      granularity: 'Granularity',
      instanceID: 'InstanceID',
      isHideZeroCharge: 'IsHideZeroCharge',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      pipCode: 'PipCode',
      productCode: 'ProductCode',
      productType: 'ProductType',
      splitItemID: 'SplitItemID',
      subscriptionType: 'SubscriptionType',
      tagFilter: 'TagFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerId: 'number',
      billingCycle: 'string',
      billingDate: 'string',
      granularity: 'string',
      instanceID: 'string',
      isHideZeroCharge: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      ownerId: 'number',
      pipCode: 'string',
      productCode: 'string',
      productType: 'string',
      splitItemID: 'string',
      subscriptionType: 'string',
      tagFilter: { 'type': 'array', 'itemType': DescribeSplitItemBillRequestTagFilter },
    };
  }

  validate() {
    if(Array.isArray(this.tagFilter)) {
      $dara.Model.validateArray(this.tagFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

