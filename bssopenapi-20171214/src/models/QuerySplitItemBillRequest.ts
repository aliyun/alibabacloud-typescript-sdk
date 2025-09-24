// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySplitItemBillRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the member. If you specify a value for this parameter, you can query the split bills of the specified member. If you leave this parameter empty, the split bills of the current account are queried by default.
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
   * 2020-03
   */
  billingCycle?: string;
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
   * The billing method. Valid values: Subscription: subscription PayAsYouGo: pay-as-you-go This parameter must be used together with the ProductCode parameter.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      billOwnerId: 'BillOwnerId',
      billingCycle: 'BillingCycle',
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

