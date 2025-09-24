// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSplitItemBillResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The amount deducted with credit refund.
   * 
   * @example
   * 0
   */
  adjustAmount?: number;
  afterDiscountAmount?: number;
  /**
   * @remarks
   * The ID of the account to which the bill belongs.
   * 
   * @example
   * 185xxxx3489
   */
  billAccountID?: string;
  /**
   * @remarks
   * The name of the account to which the bill belongs.
   * 
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @remarks
   * The billing date. Format: YYYY-MM-DD. This parameter is not supported.
   * 
   * @example
   * 2020-01-20
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
   * The billing method.
   * 
   * @example
   * Other
   */
  billingType?: string;
  /**
   * @remarks
   * The type of the business.
   * 
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount deducted with credit refund is not included.
   * 
   * @example
   * 0
   */
  cashAmount?: number;
  /**
   * @remarks
   * The code of the commodity. The code is the same as that displayed in the Split Bill module of the User Center console.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The cost center.
   * 
   * @example
   * Not allocated
   */
  costUnit?: string;
  /**
   * @remarks
   * The type of currency. Valid values: CNY, USD, and JPY.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount deducted with vouchers.
   * 
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted with coupons.
   * 
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted with prepaid cards.
   * 
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
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
   * The configurations of the instance.
   * 
   * @example
   * CPU:12
   */
  instanceConfig?: string;
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
   * The type of the instance.
   * 
   * @example
   * ecs.sn1ne.3xlarge
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 34.xx.x.x
   */
  internetIP?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.xx.xx.xx
   */
  intranetIP?: string;
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The type of the bill. Valid values: SubscriptionOrder: the subscription bill. PayAsYouGoBill: the pay-as-you-go bill. Refund: the refund. Adjustment: the adjustment bill.
   * 
   * @example
   * PayAsYouGoBill
   */
  item?: string;
  /**
   * @remarks
   * The name of the split item.
   * 
   * @example
   * iZ28bycvyb4Z
   */
  itemName?: string;
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
   * The name of the instance.
   * 
   * @example
   * nick
   */
  nickName?: string;
  /**
   * @remarks
   * The amount that is unsettled.
   * 
   * @example
   * 0.1
   */
  outstandingAmount?: number;
  /**
   * @remarks
   * The ID of the account that owns the resource. This parameter is returned in multi-account scenario.
   * 
   * @example
   * 169***013
   */
  ownerID?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount deducted with credit refund is included.
   * 
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The code of the service. The code is the same as that displayed in the Split Bill module of the User Center console.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The pretax amount.
   * 
   * @example
   * 0
   */
  pretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount.
   * 
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
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
   * The details of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productDetail?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productName?: string;
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
   * The ID of the region.
   * 
   * @example
   * China (Hangzhou)
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * Default resource group
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The duration of the service.
   * 
   * @example
   * 20
   */
  servicePeriod?: string;
  /**
   * @remarks
   * The unit of the service duration.
   * 
   * @example
   * Hour
   */
  servicePeriodUnit?: string;
  /**
   * @remarks
   * The ID of the account to which the split bill belongs.
   * 
   * @example
   * 12**122
   */
  splitAccountID?: string;
  /**
   * @remarks
   * The name of the account to which the split item belongs.
   * 
   * @example
   * test**1122
   */
  splitAccountName?: string;
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
   * The day on which the bill is split.
   * 
   * @example
   * 2021-06-01
   */
  splitBillingDate?: string;
  /**
   * @remarks
   * The code of the split item.
   * 
   * @example
   * rds
   */
  splitCommodityCode?: string;
  /**
   * @remarks
   * The ID of the split item.
   * 
   * @example
   * i-28bycvyb4
   */
  splitItemID?: string;
  /**
   * @remarks
   * The name of the split item.
   * 
   * @example
   * iZ28bycvyb4Z
   */
  splitItemName?: string;
  /**
   * @remarks
   * The details of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  splitProductDetail?: string;
  /**
   * @remarks
   * The billing method. Valid values: Subscription: the subscription billing method. PayAsYouGo: the pay-as-you-go billing method.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tag of the resource. If tags added to resources change, the bills generated during the period in which resources and tags are associated are returned.
   * 
   * @example
   * key:testKey value:testValue; key:testKey1 value:testValues1
   */
  tag?: string;
  /**
   * @remarks
   * The amount of resource usage.
   * 
   * @example
   * 100
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
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * Qingdao Zone B
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      afterDiscountAmount: 'AfterDiscountAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingItemCode: 'BillingItemCode',
      billingType: 'BillingType',
      bizType: 'BizType',
      cashAmount: 'CashAmount',
      commodityCode: 'CommodityCode',
      costUnit: 'CostUnit',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      deductedByResourcePackage: 'DeductedByResourcePackage',
      instanceConfig: 'InstanceConfig',
      instanceID: 'InstanceID',
      instanceSpec: 'InstanceSpec',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      itemName: 'ItemName',
      listPrice: 'ListPrice',
      listPriceUnit: 'ListPriceUnit',
      nickName: 'NickName',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      servicePeriod: 'ServicePeriod',
      servicePeriodUnit: 'ServicePeriodUnit',
      splitAccountID: 'SplitAccountID',
      splitAccountName: 'SplitAccountName',
      splitBillingCycle: 'SplitBillingCycle',
      splitBillingDate: 'SplitBillingDate',
      splitCommodityCode: 'SplitCommodityCode',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      usage: 'Usage',
      usageUnit: 'UsageUnit',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      afterDiscountAmount: 'number',
      billAccountID: 'string',
      billAccountName: 'string',
      billingDate: 'string',
      billingItem: 'string',
      billingItemCode: 'string',
      billingType: 'string',
      bizType: 'string',
      cashAmount: 'number',
      commodityCode: 'string',
      costUnit: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      deductedByResourcePackage: 'string',
      instanceConfig: 'string',
      instanceID: 'string',
      instanceSpec: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      item: 'string',
      itemName: 'string',
      listPrice: 'string',
      listPriceUnit: 'string',
      nickName: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      region: 'string',
      resourceGroup: 'string',
      servicePeriod: 'string',
      servicePeriodUnit: 'string',
      splitAccountID: 'string',
      splitAccountName: 'string',
      splitBillingCycle: 'string',
      splitBillingDate: 'string',
      splitCommodityCode: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
      subscriptionType: 'string',
      tag: 'string',
      usage: 'string',
      usageUnit: 'string',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 185xxxx3489
   */
  accountID?: string;
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The billing cycle. Format: YYYY-MM.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The details of the bill.
   */
  items?: DescribeSplitItemBillResponseBodyDataItems[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used for the next query. If this parameter is empty, all the results are returned. When you perform the next query, you must set the NextToken parameter to this value.
   * 
   * @example
   * CAESEgoQCg4K
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: { 'type': 'array', 'itemType': DescribeSplitItemBillResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSplitItemBillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeSplitItemBillResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeSplitItemBillResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

