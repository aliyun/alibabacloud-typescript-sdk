// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstanceBillResponseBodyItem extends $dara.Model {
  /**
   * @remarks
   * The billing cycle. Format: YYYY-MM.
   * 
   * @example
   * 2024-12
   */
  billingCycle?: string;
  /**
   * @remarks
   * The billing date. This parameter is required only if the **Granularity** parameter is set to DAILY. Format: YYYY-MM-DD.
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
   * The currency unit.
   * 
   * *   China site: **CNY**.
   * *   International site: **USD**.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount deducted with resource plans.
   * 
   * @example
   * 0
   */
  deductedByResourcePackage?: string;
  /**
   * @remarks
   * The ID of the instance.
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
   * The unit price.
   * 
   * @example
   * 0.12
   */
  listPrice?: string;
  /**
   * @remarks
   * The unit of the unit price.
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
   * The code of the service.
   * 
   * @example
   * oss
   */
  productCode?: string;
  /**
   * @remarks
   * The details of the service.
   * 
   * @example
   * sls
   */
  productDetail?: string;
  /**
   * @remarks
   * The name of the cloud service or the name of the service-linked role with which the cloud service is associated.
   * 
   * @example
   * oss
   */
  productName?: string;
  /**
   * @remarks
   * Service instance ID.
   * 
   * @example
   * si-bc5d6ac7022647d3a3bd
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The billing cycle in which the bill is split.
   * 
   * @example
   * 2021-06
   */
  splitBillingCycle?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method.
   * *   PayAsYouGo: the pay-as-you-go billing method.
   * 
   * @example
   * Subscription
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The amount of resource usage.
   * 
   * @example
   * 1
   */
  usage?: string;
  /**
   * @remarks
   * The unit of usage.
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
   * The billing information of the backup schedule.
   */
  item?: ListServiceInstanceBillResponseBodyItem[];
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
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

