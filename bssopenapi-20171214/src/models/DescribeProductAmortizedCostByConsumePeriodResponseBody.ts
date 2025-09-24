// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductAmortizedCostByConsumePeriodResponseBodyDataItems extends $dara.Model {
  afterDiscountAmount?: number;
  /**
   * @example
   * 202210
   */
  amortizationPeriod?: string;
  /**
   * @example
   * amortized
   */
  amortizationStatus?: string;
  /**
   * @example
   * 185xxxxx489
   */
  billAccountID?: number;
  /**
   * @example
   * test@test.aliyunid.com
   */
  billAccountName?: string;
  /**
   * @example
   * 185xxxxx489
   */
  billOwnerID?: number;
  /**
   * @example
   * test@test.aliyunid.com
   */
  billOwnerName?: string;
  /**
   * @example
   * trusteeship
   */
  bizType?: string;
  /**
   * @example
   * 202210
   */
  consumePeriod?: string;
  currentAmortizationAfterDiscountAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationExpenditureAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationRoundDownDiscount?: number;
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
  expenditureAmount?: number;
  /**
   * @example
   * 0
   */
  invoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  pretaxAmount?: number;
  /**
   * @example
   * 0
   */
  pretaxGrossAmount?: number;
  previouslyAmortizedAfterDiscountAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedDeductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedExpenditureAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  previouslyAmortizedRoundDownDiscount?: number;
  /**
   * @example
   * rds
   */
  productCode?: string;
  productDetail?: string;
  /**
   * @example
   * rds
   */
  productDetailCode?: string;
  productName?: string;
  remainingAmortizationAfterDiscountAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationDeductedByCashCoupons?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationDeductedByPrepaidCard?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationExpenditureAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  remainingAmortizationRoundDownDiscount?: number;
  /**
   * @example
   * 0
   */
  roundDownDiscount?: number;
  /**
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  static names(): { [key: string]: string } {
    return {
      afterDiscountAmount: 'AfterDiscountAmount',
      amortizationPeriod: 'AmortizationPeriod',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      currentAmortizationAfterDiscountAmount: 'CurrentAmortizationAfterDiscountAmount',
      currentAmortizationDeductedByCashCoupons: 'CurrentAmortizationDeductedByCashCoupons',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationDeductedByPrepaidCard: 'CurrentAmortizationDeductedByPrepaidCard',
      currentAmortizationExpenditureAmount: 'CurrentAmortizationExpenditureAmount',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      expenditureAmount: 'ExpenditureAmount',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      previouslyAmortizedAfterDiscountAmount: 'PreviouslyAmortizedAfterDiscountAmount',
      previouslyAmortizedDeductedByCashCoupons: 'PreviouslyAmortizedDeductedByCashCoupons',
      previouslyAmortizedDeductedByCoupons: 'PreviouslyAmortizedDeductedByCoupons',
      previouslyAmortizedDeductedByPrepaidCard: 'PreviouslyAmortizedDeductedByPrepaidCard',
      previouslyAmortizedExpenditureAmount: 'PreviouslyAmortizedExpenditureAmount',
      previouslyAmortizedInvoiceDiscount: 'PreviouslyAmortizedInvoiceDiscount',
      previouslyAmortizedPretaxAmount: 'PreviouslyAmortizedPretaxAmount',
      previouslyAmortizedPretaxGrossAmount: 'PreviouslyAmortizedPretaxGrossAmount',
      previouslyAmortizedRoundDownDiscount: 'PreviouslyAmortizedRoundDownDiscount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      remainingAmortizationAfterDiscountAmount: 'RemainingAmortizationAfterDiscountAmount',
      remainingAmortizationDeductedByCashCoupons: 'RemainingAmortizationDeductedByCashCoupons',
      remainingAmortizationDeductedByCoupons: 'RemainingAmortizationDeductedByCoupons',
      remainingAmortizationDeductedByPrepaidCard: 'RemainingAmortizationDeductedByPrepaidCard',
      remainingAmortizationExpenditureAmount: 'RemainingAmortizationExpenditureAmount',
      remainingAmortizationInvoiceDiscount: 'RemainingAmortizationInvoiceDiscount',
      remainingAmortizationPretaxAmount: 'RemainingAmortizationPretaxAmount',
      remainingAmortizationPretaxGrossAmount: 'RemainingAmortizationPretaxGrossAmount',
      remainingAmortizationRoundDownDiscount: 'RemainingAmortizationRoundDownDiscount',
      roundDownDiscount: 'RoundDownDiscount',
      subscriptionType: 'SubscriptionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterDiscountAmount: 'number',
      amortizationPeriod: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      currentAmortizationAfterDiscountAmount: 'number',
      currentAmortizationDeductedByCashCoupons: 'number',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationDeductedByPrepaidCard: 'number',
      currentAmortizationExpenditureAmount: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCashCoupons: 'number',
      deductedByCoupons: 'number',
      deductedByPrepaidCard: 'number',
      expenditureAmount: 'number',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      previouslyAmortizedAfterDiscountAmount: 'number',
      previouslyAmortizedDeductedByCashCoupons: 'number',
      previouslyAmortizedDeductedByCoupons: 'number',
      previouslyAmortizedDeductedByPrepaidCard: 'number',
      previouslyAmortizedExpenditureAmount: 'number',
      previouslyAmortizedInvoiceDiscount: 'number',
      previouslyAmortizedPretaxAmount: 'number',
      previouslyAmortizedPretaxGrossAmount: 'number',
      previouslyAmortizedRoundDownDiscount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      remainingAmortizationAfterDiscountAmount: 'number',
      remainingAmortizationDeductedByCashCoupons: 'number',
      remainingAmortizationDeductedByCoupons: 'number',
      remainingAmortizationDeductedByPrepaidCard: 'number',
      remainingAmortizationExpenditureAmount: 'number',
      remainingAmortizationInvoiceDiscount: 'number',
      remainingAmortizationPretaxAmount: 'number',
      remainingAmortizationPretaxGrossAmount: 'number',
      remainingAmortizationRoundDownDiscount: 'number',
      roundDownDiscount: 'number',
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

export class DescribeProductAmortizedCostByConsumePeriodResponseBodyData extends $dara.Model {
  /**
   * @example
   * 185766xxxx
   */
  accountID?: string;
  /**
   * @example
   * test@test.aliyunid.com
   */
  accountName?: string;
  items?: DescribeProductAmortizedCostByConsumePeriodResponseBodyDataItems[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountID: 'AccountID',
      accountName: 'AccountName',
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
      items: { 'type': 'array', 'itemType': DescribeProductAmortizedCostByConsumePeriodResponseBodyDataItems },
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

export class DescribeProductAmortizedCostByConsumePeriodResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeProductAmortizedCostByConsumePeriodResponseBodyData;
  /**
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @example
   * 79EE7556-0CFD-44EB-9CD6-B3B526E3A85F
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
      data: DescribeProductAmortizedCostByConsumePeriodResponseBodyData,
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

