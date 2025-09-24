// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBillResponseBodyDataItemsItem extends $dara.Model {
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
   * The amount paid after tax is deducted.
   * 
   * @example
   * 0
   */
  afterTaxAmount?: number;
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
   * The code of the commodity.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The type of the currency.
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
   * The type of the bill.
   * 
   * *   SubscriptionOrder
   * *   PayAsYouGoBill
   * *   Refund
   * *   Adjustment
   * 
   * @example
   * SubscriptionOrder
   */
  item?: string;
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
   * 3532535235
   */
  ownerID?: string;
  /**
   * @remarks
   * The amount paid with cash.
   * 
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @remarks
   * The currency used for payment.
   * 
   * @example
   * USD
   */
  paymentCurrency?: string;
  /**
   * @remarks
   * The time when the order was paid.
   * 
   * @example
   * 2020-03-11 08:00:00
   */
  paymentTime?: string;
  /**
   * @remarks
   * The ID of the transaction.
   * 
   * @example
   * 2O3AADJFEAF2PDKSFAMFCB11918
   */
  paymentTransactionID?: string;
  /**
   * @remarks
   * The code of the service.
   * 
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @remarks
   * The pretax amount
   * 
   * @example
   * 100
   */
  pretaxAmount?: number;
  /**
   * @remarks
   * The pretax amount paid in local currency.
   * 
   * @example
   * 0
   */
  pretaxAmountLocal?: number;
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
   * ApsaraDB RDS (subscription)
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
   * The ID of the order or bill.
   * 
   * @example
   * 2020xxxx5912
   */
  recordID?: string;
  /**
   * @remarks
   * The round down discount.
   * 
   * @example
   * 0
   */
  roundDownDiscount?: string;
  /**
   * @remarks
   * The payment status of the bill. Valid values:
   * 
   * *   PayFinish: The bill is paid.
   * *   PayUnclear: The bill is not cleared.
   * *   PayUnsettle: The bill is not settled.
   * *   NoSettle: The bill is free of settlement.
   * 
   * @example
   * PayFinish
   */
  status?: string;
  /**
   * @remarks
   * The ID of the order corresponding to the bill.
   * 
   * @example
   * 325345254353
   */
  subOrderId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription
   * *   PayAsYouGo
   * 
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The tax.
   * 
   * @example
   * 0
   */
  tax?: number;
  /**
   * @remarks
   * The time when the bill ends.
   * 
   * @example
   * 2020-03-11 08:00:00
   */
  usageEndTime?: string;
  /**
   * @remarks
   * The time when the bill starts.
   * 
   * @example
   * 2020-03-11 07:00:00
   */
  usageStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      afterTaxAmount: 'AfterTaxAmount',
      cashAmount: 'CashAmount',
      commodityCode: 'CommodityCode',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      invoiceDiscount: 'InvoiceDiscount',
      item: 'Item',
      outstandingAmount: 'OutstandingAmount',
      ownerID: 'OwnerID',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      paymentTime: 'PaymentTime',
      paymentTransactionID: 'PaymentTransactionID',
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      recordID: 'RecordID',
      roundDownDiscount: 'RoundDownDiscount',
      status: 'Status',
      subOrderId: 'SubOrderId',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
      usageEndTime: 'UsageEndTime',
      usageStartTime: 'UsageStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adjustAmount: 'number',
      afterTaxAmount: 'number',
      cashAmount: 'number',
      commodityCode: 'string',
      currency: 'string',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      invoiceDiscount: 'number',
      item: 'string',
      outstandingAmount: 'number',
      ownerID: 'string',
      paymentAmount: 'number',
      paymentCurrency: 'string',
      paymentTime: 'string',
      paymentTransactionID: 'string',
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxAmountLocal: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      recordID: 'string',
      roundDownDiscount: 'string',
      status: 'string',
      subOrderId: 'string',
      subscriptionType: 'string',
      tax: 'number',
      usageEndTime: 'string',
      usageStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillResponseBodyDataItems extends $dara.Model {
  item?: QueryBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryBillResponseBodyDataItemsItem },
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

export class QueryBillResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 185xxxxx489
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
   * 2020-02
   */
  billingCycle?: string;
  /**
   * @remarks
   * The details of the bills.
   */
  items?: QueryBillResponseBodyDataItems;
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
   * 1
   */
  pageSize?: number;
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
      items: QueryBillResponseBodyDataItems,
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

export class QueryBillResponseBody extends $dara.Model {
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
   * The returned data.
   */
  data?: QueryBillResponseBodyData;
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
   * AE3F4057-DFC9-4B81-8858-F620651010C9
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
      data: QueryBillResponseBodyData,
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

