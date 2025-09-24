// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySettleBillResponseBodyDataItemsItem extends $dara.Model {
  /**
   * @example
   * 0
   */
  adjustAmount?: number;
  /**
   * @example
   * 0
   */
  afterTaxAmount?: number;
  /**
   * @example
   * 185xxxxx489
   */
  billAccountID?: string;
  /**
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @example
   * 0
   */
  cashAmount?: number;
  /**
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 0
   */
  deductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  deductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  deductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @example
   * SubscriptionOrder
   */
  item?: string;
  /**
   * @example
   * 0
   */
  outstandingAmount?: number;
  /**
   * @example
   * 3532535235
   */
  ownerID?: string;
  /**
   * @example
   * 0
   */
  paymentAmount?: number;
  /**
   * @example
   * USD
   */
  paymentCurrency?: string;
  /**
   * @example
   * 2020-03-11 08:00:00
   */
  paymentTime?: string;
  /**
   * @example
   * 2O3AADJFEAF2PDKSFAMFCB11918
   */
  paymentTransactionID?: string;
  /**
   * @example
   * rds
   */
  pipCode?: string;
  /**
   * @example
   * 100
   */
  pretaxAmount?: number;
  /**
   * @example
   * 0
   */
  pretaxAmountLocal?: number;
  /**
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  /**
   * @example
   * rds
   */
  productCode?: string;
  productDetail?: string;
  productName?: string;
  /**
   * @example
   * rds
   */
  productType?: string;
  /**
   * @example
   * 2020xxxx5912
   */
  recordID?: string;
  /**
   * @example
   * 0
   */
  roundDownDiscount?: string;
  /**
   * @example
   * PayFinish
   */
  status?: string;
  /**
   * @example
   * 325345254353
   */
  subOrderId?: string;
  /**
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @example
   * 0
   */
  tax?: number;
  /**
   * @example
   * 2020-03-11 08:00:00
   */
  usageEndTime?: string;
  /**
   * @example
   * 2020-03-11 07:00:00
   */
  usageStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      adjustAmount: 'AdjustAmount',
      afterTaxAmount: 'AfterTaxAmount',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      bizType: 'BizType',
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
      billAccountID: 'string',
      billAccountName: 'string',
      bizType: 'string',
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

export class QuerySettleBillResponseBodyDataItems extends $dara.Model {
  item?: QuerySettleBillResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QuerySettleBillResponseBodyDataItemsItem },
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

export class QuerySettleBillResponseBodyData extends $dara.Model {
  /**
   * @example
   * 185xxxxx489
   */
  accountID?: string;
  /**
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  /**
   * @example
   * 2020-02
   */
  billingCycle?: string;
  items?: QuerySettleBillResponseBodyDataItems;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUQARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * 200
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
      items: QuerySettleBillResponseBodyDataItems,
      maxResults: 'number',
      nextToken: 'string',
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

export class QuerySettleBillResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: QuerySettleBillResponseBodyData;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * AE3F4057-DFC9-4B81-8858-F620651010C9
   */
  requestId?: string;
  /**
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
      data: QuerySettleBillResponseBodyData,
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

