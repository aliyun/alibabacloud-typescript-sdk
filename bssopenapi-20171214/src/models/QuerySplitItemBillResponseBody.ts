// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySplitItemBillResponseBodyDataItemsItem extends $dara.Model {
  /**
   * @remarks
   * The amount deducted by using credit refunds.
   * 
   * @example
   * 0
   */
  adjustAmount?: number;
  /**
   * @remarks
   * The billing date, in the YYYY-MM-DD format.
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
   * Other
   */
  billingItem?: string;
  /**
   * @remarks
   * The billing type.
   * 
   * @example
   * Other
   */
  billingType?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount that was deducted by using credit refunds is not included.
   * 
   * @example
   * 0
   */
  cashAmount?: number;
  /**
   * @remarks
   * The code of the commodity. The commodity code is the same as that displayed in User Center.
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
   * The type of the currency. Valid values: CNY, USD, and JPY.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The amount deducted by using vouchers.
   * 
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons.
   * 
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards.
   * 
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @remarks
   * The amount deducted by using resource plans.
   * 
   * @example
   * NULL
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
   * The instance type of the instance.
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
   * The type of the bill. Valid values: SubscriptionOrder: subscription order PayAsYouGoBill: pay-as-you-go bill Refund: refund Adjustment: reconciliation
   * 
   * @example
   * PayAsYouGoBill
   */
  item?: string;
  /**
   * @remarks
   * The unit price. This parameter is returned only if the isBillingItem parameter is set to true.
   * 
   * @example
   * 100
   */
  listPrice?: string;
  /**
   * @remarks
   * The unit of the unit price. This parameter is returned only if the isBillingItem parameter is set to true.
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
   * The unsettled amount of the bill.
   * 
   * @example
   * 0
   */
  outstandingAmount?: number;
  /**
   * @remarks
   * The ID of the member. This parameter is returned in a multi-account payment scenario.
   * 
   * @example
   * 169***013
   */
  ownerID?: string;
  /**
   * @remarks
   * The amount paid in cash.
   * 
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The code of the service. The service code is the same as that displayed in User Center.
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
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The resource group.
   * 
   * @example
   * Default resource group
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The validity period.
   * 
   * @example
   * 10
   */
  servicePeriod?: string;
  /**
   * @remarks
   * The unit of the validity period.
   * 
   * @example
   * Seconds
   */
  servicePeriodUnit?: string;
  /**
   * @remarks
   * The ID of the account to which the split bill belongs.
   * 
   * @example
   * 122
   */
  splitAccountID?: string;
  /**
   * @remarks
   * The name of the account to which the split item belongs.
   * 
   * @example
   * 12@test.com
   */
  splitAccountName?: string;
  /**
   * @remarks
   * The month in which the split item is used.
   * 
   * @example
   * 2020-06
   */
  splitBillingCycle?: string;
  /**
   * @remarks
   * The commodity code of the split item.
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
   * The name of the service to which the split item belongs.
   * 
   * @example
   * rds
   */
  splitProductDetail?: string;
  /**
   * @remarks
   * The billing method. Valid values: Subscription: subscription PayAsYouGo: pay-as-you-go This parameter is returned together with the ProductCode parameter.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * tag
   */
  tag?: string;
  /**
   * @remarks
   * The usage of the split item. This parameter is returned only if the isBillingItem parameter is set to true.
   * 
   * @example
   * 100
   */
  usage?: string;
  /**
   * @remarks
   * The unit of usage. This parameter is returned only if the isBillingItem parameter is set to true.
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
   * cn-hangzhou-h
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      billingDate: 'BillingDate',
      billingItem: 'BillingItem',
      billingType: 'BillingType',
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
      billingDate: 'string',
      billingItem: 'string',
      billingType: 'string',
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

export class QuerySplitItemBillResponseBodyDataItems extends $dara.Model {
  item?: QuerySplitItemBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QuerySplitItemBillResponseBodyDataItemsItem },
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

export class QuerySplitItemBillResponseBodyData extends $dara.Model {
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
   * The name of the account.
   * 
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @remarks
   * The billing cycle, in the YYYY-MM format.
   * 
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @remarks
   * The details of the bills.
   */
  items?: QuerySplitItemBillResponseBodyDataItems;
  /**
   * @remarks
   * The page number of the returned page. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned on each page. Default value: 20. Maximum value: 300.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QuerySplitItemBillResponseBodyDataItems,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySplitItemBillResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QuerySplitItemBillResponseBodyData;
  /**
   * @remarks
   * The message returned.
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
   * Indicates whether the request is successful.
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
      data: QuerySplitItemBillResponseBodyData,
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

