// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryBillOverviewResponseBodyDataItemsItem extends $dara.Model {
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
   * The amount paid after the tax is deducted.
   * 
   * @example
   * 0
   */
  afterTaxAmount?: number;
  /**
   * @remarks
   * The ID of the account to which the bill belongs.
   * 
   * @example
   * 185766xxxx
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
   * The code of the commodity. The commodity code is the same as that displayed in User Center.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
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
   * The type of the bill. Valid values:
   * 
   * *   SubscriptionOrder
   * *   PayAsYouGoBill
   * *   Refund
   * *   Adjustment
   * 
   * @example
   * PayAsYouGoBill
   */
  item?: string;
  /**
   * @remarks
   * The unsettled amount or the amount deducted by using credits. This may be an unsettled amount of a regular user or credits consumed by a credit user.
   * 
   * @example
   * 0
   */
  outstandingAmount?: number;
  /**
   * @remarks
   * The ID of the bill owner.
   * 
   * @example
   * 1222
   */
  ownerID?: string;
  /**
   * @remarks
   * The amount paid in cash. The amount that was deducted by using credit refunds is included.
   * 
   * @example
   * 100
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
   * 100
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
   * NAT Gateway (Pay-As-You-Go)
   */
  productDetail?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * NAT Gateway
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
   * The round down discount.
   * 
   * @example
   * 0
   */
  roundDownDiscount?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
   * @example
   * Subscription
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
      pipCode: 'PipCode',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productName: 'ProductName',
      productType: 'ProductType',
      roundDownDiscount: 'RoundDownDiscount',
      subscriptionType: 'SubscriptionType',
      tax: 'Tax',
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
      pipCode: 'string',
      pretaxAmount: 'number',
      pretaxAmountLocal: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productName: 'string',
      productType: 'string',
      roundDownDiscount: 'string',
      subscriptionType: 'string',
      tax: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryBillOverviewResponseBodyDataItems extends $dara.Model {
  item?: QueryBillOverviewResponseBodyDataItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': QueryBillOverviewResponseBodyDataItemsItem },
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

export class QueryBillOverviewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the account.
   * 
   * @example
   * 185766xxxx
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
  items?: QueryBillOverviewResponseBodyDataItems;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
      billingCycle: 'BillingCycle',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      accountName: 'string',
      billingCycle: 'string',
      items: QueryBillOverviewResponseBodyDataItems,
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

export class QueryBillOverviewResponseBody extends $dara.Model {
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
  data?: QueryBillOverviewResponseBodyData;
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
   * BCB1E1BC-05BF-4217-80EE-BF09A29407BA
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
      data: QueryBillOverviewResponseBodyData,
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

