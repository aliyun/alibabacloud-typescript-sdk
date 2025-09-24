// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySettleBillRequest extends $dara.Model {
  /**
   * @example
   * 123
   */
  billOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2018-07
   */
  billingCycle?: string;
  /**
   * @example
   * false
   */
  isDisplayLocalCurrency?: boolean;
  /**
   * @example
   * true
   */
  isHideZeroCharge?: boolean;
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
  ownerId?: number;
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
   * 12233
   */
  recordID?: string;
  /**
   * @example
   * Subscription
   */
  subscriptionType?: string;
  /**
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerId: 'OwnerId',
      productCode: 'ProductCode',
      productType: 'ProductType',
      recordID: 'RecordID',
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
      maxResults: 'number',
      nextToken: 'string',
      ownerId: 'number',
      productCode: 'string',
      productType: 'string',
      recordID: 'string',
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

