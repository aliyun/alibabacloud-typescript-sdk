// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDeductAmortizedCostByAmortizationPeriodRequest extends $dara.Model {
  billOwnerIdList?: string[];
  billUserIdList?: string[];
  /**
   * @example
   * 2023-04
   */
  billingCycle?: string;
  /**
   * @example
   * 123#
   */
  costUnitCode?: string;
  instanceIdList?: string[];
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
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerIdList: 'BillOwnerIdList',
      billUserIdList: 'BillUserIdList',
      billingCycle: 'BillingCycle',
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
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

