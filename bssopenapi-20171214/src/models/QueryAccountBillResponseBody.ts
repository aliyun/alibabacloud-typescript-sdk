// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAccountBillResponseBodyDataItemsItem extends $dara.Model {
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
   * The ID of the account to which the bill belongs.
   * 
   * @example
   * 1857xxxxx489
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
   * The billing date.
   * 
   * @example
   * 2021-03-01
   */
  billingDate?: string;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * trusteeship
   */
  bizType?: string;
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
   * The cost center.
   * 
   * @example
   * Not allocated
   */
  costUnit?: string;
  /**
   * @remarks
   * The type of the currency. Valid values:
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
   * The discount amount.
   * 
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The unsettled amount or the amount settled with credits.
   * 
   * @example
   * 0
   */
  outstandingAmount?: number;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 325434254
   */
  ownerID?: string;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * aligzncloudtest2
   */
  ownerName?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount that was deducted by using credit refunds is included.
   * 
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The code of the service. The service code is consistent with that displayed in User Center.
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
   * > A value is returned only if the **IsGroupByProduct** parameter is set to true.
   * 
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * > A value is returned only if the **IsGroupByProduct** parameter is set to true.
   * 
   * @example
   * rds
   */
  productName?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * > A value is returned only if the IsGroupByProduct parameter is set to true.
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billingDate: 'BillingDate',
      bizType: 'BizType',
      cashAmount: 'CashAmount',
      costUnit: 'CostUnit',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceDiscount: 'InvoiceDiscount',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      ownerName: 'OwnerName',
      paymentAmount: 'PaymentAmount',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productName: 'ProductName',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      billAccountID: 'string',
      billAccountName: 'string',
      billingDate: 'string',
      bizType: 'string',
      cashAmount: 'number',
      costUnit: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      invoiceDiscount: 'number',
      outstandingAmount: 'number',
      ownerID: 'string',
      ownerName: 'string',
      paymentAmount: 'number',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productName: 'string',
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

export class QueryAccountBillResponseBodyDataItems extends $dara.Model {
  item?: QueryAccountBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryAccountBillResponseBodyDataItemsItem },
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

export class QueryAccountBillResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of your Alibaba Cloud account.
   * 
   * @example
   * 1857xxxxx489
   */
  accountID?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account.
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
   * The details of the bills.
   */
  items?: QueryAccountBillResponseBodyDataItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 1
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
      items: QueryAccountBillResponseBodyDataItems,
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

export class QueryAccountBillResponseBody extends $dara.Model {
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
  data?: QueryAccountBillResponseBodyData;
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
   * 3BFC23FE-A182-4D96-A1E4-7521B30B8E43
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
      data: QueryAccountBillResponseBodyData,
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

