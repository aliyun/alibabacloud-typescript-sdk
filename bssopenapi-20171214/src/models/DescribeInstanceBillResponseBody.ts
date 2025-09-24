// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceBillResponseBodyDataItems extends $dara.Model {
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
   * 122
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
   * The billing date. This parameter is returned only if the Granularity parameter is set to DAILY. Format: YYYY-MM-DD.
   * 
   * @example
   * 2020-03-20
   */
  billingDate?: string;
  /**
   * @remarks
   * The billable item. A value is returned only if the IsBillingItem parameter is set to true.
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
   * The type of business.
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
   * The code of the commodity. The code is the same as that in Cost Center.
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
   * The type of currency. Valid values:
   * 
   * *   CNY
   * *   USD
   * *   JPY
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
   * 0.1
   */
  deductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted with coupons.
   * 
   * @example
   * 0.1
   */
  deductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted with prepaid cards.
   * 
   * @example
   * 0.1
   */
  deductedByPrepaidCard?: number;
  /**
   * @remarks
   * The amount deducted with resource plans. This parameter is valid only when the isBillingItem parameter is set to true.
   * 
   * @example
   * 0.1
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
   * i-dadada
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
   * 0.1
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The type of the bill.
   * 
   * *   SubscriptionOrder: the subscription bill.
   * *   PayAsYouGoBill: the pay-as-you-go bill,
   * *   Refund: the refund.
   * *   Adjustment: the adjustment bill.
   * 
   * @example
   * PayAsYouGoBill
   */
  item?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * iZ28bycvyb4Z
   */
  itemName?: string;
  /**
   * @remarks
   * The unit price of the service. This parameter is valid only when the isBillingItem parameter is set to true.
   * 
   * @example
   * 100
   */
  listPrice?: string;
  /**
   * @remarks
   * The unit of the unit price. This parameter is valid only when the isBillingItem parameter is set to true.
   * 
   * @example
   * CNY
   */
  listPriceUnit?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test
   */
  nickName?: string;
  /**
   * @remarks
   * The unsettled amount.
   * 
   * @example
   * 0.1
   */
  outstandingAmount?: number;
  /**
   * @remarks
   * The ID of the account that owns the resource. This parameter is returned in multi-account payment scenario.
   * 
   * @example
   * 123
   */
  ownerID?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount deducted with credit refund is not included.
   * 
   * @example
   * 0.1
   */
  paymentAmount?: number;
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
   * The pretax amount.
   * 
   * @example
   * 0.1
   */
  pretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount.
   * 
   * @example
   * 0.1
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
   * The service duration.
   * 
   * @example
   * 3600
   */
  servicePeriod?: string;
  /**
   * @remarks
   * The unit of the service duration.
   * 
   * @example
   * Second
   */
  servicePeriodUnit?: string;
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
  /**
   * @remarks
   * The tag of the resource.
   * 
   * @example
   * key:testKey value:testValue; key:testKey1 value:testValues1
   */
  tag?: string;
  /**
   * @remarks
   * The usage of the service. This parameter is valid only when the isBillingItem parameter is set to true. The usage is the total usage in all bills in the billing cycle, not the amount that you purchase. For example, if 1 GB of storage is used and bills are generated every hour, the usage is 1 GB per hour. In this case, the usage is 24 GB per day.
   * 
   * @example
   * 100
   */
  usage?: string;
  /**
   * @remarks
   * The unit of usage. This parameter is valid only when the isBillingItem parameter is set to true.
   * 
   * @example
   * GB
   */
  usageUnit?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * Hangzhou Zone B
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

export class DescribeInstanceBillResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 122
   */
  accountID?: string;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The billing cycle in the YYYY-MM format.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The details of the bill.
   */
  items?: DescribeInstanceBillResponseBodyDataItems[];
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
   * The position where the query stopped. If this parameter is left empty, all the results are returned. If you perform another call, you must set the NextToken parameter to the value of this parameter.
   * 
   * @example
   * CAESEgoQCg4KCm
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of returned entries.
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
      items: { 'type': 'array', 'itemType': DescribeInstanceBillResponseBodyDataItems },
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

export class DescribeInstanceBillResponseBody extends $dara.Model {
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
  data?: DescribeInstanceBillResponseBodyData;
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
      data: DescribeInstanceBillResponseBodyData,
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

