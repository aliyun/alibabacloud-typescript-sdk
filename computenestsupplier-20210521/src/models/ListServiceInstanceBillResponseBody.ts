// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceBillResponseBodyItem extends $dara.Model {
  /**
   * @remarks
   * The billing cycle. The format is YYYY-MM.
   * 
   * @example
   * 2024-12
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. The format is YYYY-MM-DD.
   * 
   * @example
   * 2024-12-05
   */
  billingDate?: string;
  /**
   * @remarks
   * The billable item.
   * 
   * @example
   * Bandwidth
   */
  billingItem?: string;
  /**
   * @remarks
   * The code of the billable item.
   * 
   * @example
   * disk
   */
  billingItemCode?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The deduction by a resource plan.
   * 
   * @example
   * 0
   */
  deductedByResourcePackage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-wz9k051l23j3o3xa9
   */
  instanceID?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0
   */
  invoiceDiscount?: string;
  /**
   * @remarks
   * The list price.
   * 
   * @example
   * 0.12
   */
  listPrice?: string;
  /**
   * @remarks
   * The unit of the list price.
   * 
   * @example
   * CNY/GB
   */
  listPriceUnit?: string;
  /**
   * @remarks
   * The pretax amount.
   * 
   * @example
   * 0
   */
  pretaxAmount?: string;
  /**
   * @remarks
   * The pretax gross amount.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * oss
   */
  productCode?: string;
  /**
   * @remarks
   * The product details.
   * 
   * @example
   * sls
   */
  productDetail?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * oss
   */
  productName?: string;
  /**
   * @remarks
   * The ID of the service instance.
   * 
   * @example
   * si-bc5d6ac7022647d3a3bd
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The month of the split bill.
   * 
   * @example
   * 2021-06
   */
  splitBillingCycle?: string;
  /**
   * @remarks
   * The billing method:
   * 
   * - Subscription: subscription.
   * 
   * - PayAsYouGo: pay-as-you-go.
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The resource usage.
   * 
   * @example
   * 1
   */
  usage?: string;
  /**
   * @remarks
   * The unit of the usage.
   * 
   * @example
   * GB
   */
  usageUnit?: string;
  static names(): { [key: string]: string } {
    return {
      billingCycle: 'BillingCycle',
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingItemCode: 'BillingItemCode',
      currency: 'Currency',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      instanceID: 'InstanceID',
      invoiceDiscount: 'InvoiceDiscount',
      listPrice: 'ListPrice',
      listPriceUnit: 'ListPriceUnit',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      serviceInstanceId: 'ServiceInstanceId',
      splitBillingCycle: 'SplitBillingCycle',
      subscriptionType: 'SubscriptionType',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingCycle: 'string',
      billingDate: 'string',
      billingItem: 'string',
      billingItemCode: 'string',
      currency: 'string',
      deductedByResourcePackage: 'string',
      instanceID: 'string',
      invoiceDiscount: 'string',
      listPrice: 'string',
      listPriceUnit: 'string',
      pretaxAmount: 'string',
      pretaxGrossAmount: 'string',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      serviceInstanceId: 'string',
      splitBillingCycle: 'string',
      subscriptionType: 'string',
      usage: 'string',
      usageUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstanceBillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the item.
   */
  item?: ListServiceInstanceBillResponseBodyItem[];
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to start the next query.
   * 
   * @example
   * AAAAAfu+XtuBE55iRLHEYYuojI4=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B68C6D1-0C22-53F7-997C-F95D109C31AA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 65
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': ListServiceInstanceBillResponseBodyItem },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

