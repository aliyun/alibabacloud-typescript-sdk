// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAmortizedCostByAmortizationPeriodRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member to which the bill belongs. The member ID is used to filter bills. If you specify a value for this parameter, you can query the bills of the specified member. If you leave this parameter empty, the bills of the current account and all members of the current account are queried. You can specify a maximum of 10 IDs.
   */
  billOwnerIdList?: string[];
  /**
   * @remarks
   * The ID of the member that needs to settle the bill. The member ID is used to filter bills. If you specify a value for this parameter, you can query the bills of the specified member account. If you leave this parameter empty, the bills of the current account and all members of the current account are queried by default. You can specify a maximum of 10 IDs.
   */
  billUserIdList?: string[];
  /**
   * @remarks
   * The allocation month. Format: YYYY-MM.
   * 
   * This parameter is required.
   * 
   * @example
   * 2022-10
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing cycle that is used to filter bills. You can specify a maximum of 10 billing cycles.
   */
  consumePeriodFilter?: string[];
  /**
   * @remarks
   * The code of the cost center.
   * 
   * @example
   * 123#
   */
  costUnitCode?: string;
  /**
   * @remarks
   * The instance ID that is used to filter bills. You can specify multiple instance IDs to query bills of multiple instances. If you leave this parameter empty, the bills of all instances are queried by default. You can specify a maximum of 10 instance IDs.
   */
  instanceIdList?: string[];
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
   * The position from which the query starts. The parameter must be left empty or set to the value of the NextToken parameter returned from the last call. Otherwise, an error is returned. If this parameter is left empty, data is queried from the beginning.
   * 
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @remarks
   * The code of the service. You can obtain the value of this parameter by calling the QueryProductList operation or the DescribeResourcePackageProduct operation.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The specific service resource.
   * 
   * @example
   * rds
   */
  productDetail?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      consumePeriodFilter: 'ConsumePeriodFilter',
      costUnitCode: 'CostUnitCode',
      instanceIdList: 'InstanceIdList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      consumePeriodFilter: { 'type': 'array', 'itemType': 'string' },
      costUnitCode: 'string',
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.billOwnerIdList)) {
      $dara.Model.validateArray(this.billOwnerIdList);
    }
    if(Array.isArray(this.billUserIdList)) {
      $dara.Model.validateArray(this.billUserIdList);
    }
    if(Array.isArray(this.consumePeriodFilter)) {
      $dara.Model.validateArray(this.consumePeriodFilter);
    }
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

