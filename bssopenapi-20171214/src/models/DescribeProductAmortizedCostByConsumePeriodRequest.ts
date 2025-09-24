// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductAmortizedCostByConsumePeriodRequest extends $dara.Model {
  amortizationPeriodFilter?: string[];
  billOwnerIdList?: string[];
  billUserIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-10
   */
  billingCycle?: string;
  /**
   * @example
   * 123#
   */
  costUnitCode?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productDetail?: string;
  /**
   * @example
   * Subscription
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriodFilter: 'AmortizationPeriodFilter',
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
      costUnitCode: 'CostUnitCode',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriodFilter: { 'type': 'array', 'itemType': 'string' },
      billOwnerIdList: { 'type': 'array', 'itemType': 'string' },
      billUserIdList: { 'type': 'array', 'itemType': 'string' },
      billingCycle: 'string',
      costUnitCode: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      productDetail: 'string',
      subscriptionType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.amortizationPeriodFilter)) {
      $dara.Model.validateArray(this.amortizationPeriodFilter);
    }
    if(Array.isArray(this.billOwnerIdList)) {
      $dara.Model.validateArray(this.billOwnerIdList);
    }
    if(Array.isArray(this.billUserIdList)) {
      $dara.Model.validateArray(this.billUserIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

