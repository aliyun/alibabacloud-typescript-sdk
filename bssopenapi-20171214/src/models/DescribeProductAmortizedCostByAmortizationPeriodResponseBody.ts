// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductAmortizedCostByAmortizationPeriodResponseBodyDataItems extends $dara.Model {
  afterDiscountAmount?: number;
  /**
   * @remarks
   * The allocation month. Format: YYYYMM.
   * 
   * @example
   * 202210
   */
  amortizationPeriod?: string;
  /**
   * @remarks
   * The allocation status. Valid values:
   * 
   * *   amortized: allocated
   * *   unAmortized: not allocated
   * 
   * @example
   * amortized
   */
  amortizationStatus?: string;
  /**
   * @remarks
   * The ID of the account to which the bill belongs.
   * 
   * @example
   * 185xxxxx489
   */
  billAccountID?: number;
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
   * The ID of the account to which the resource belongs.
   * 
   * @example
   * 185xxxxx489
   */
  billOwnerID?: number;
  /**
   * @remarks
   * The name of the account to which the resource belongs.
   * 
   * @example
   * test@test.aliyunid.com
   */
  billOwnerName?: string;
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
   * The billing cycle. Format: YYYYMM.
   * 
   * @example
   * 202210
   */
  consumePeriod?: string;
  currentAmortizationAfterDiscountAmount?: number;
  /**
   * @remarks
   * The amount deducted by using vouchers and allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationDeductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons and allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationDeductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards and allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationDeductedByPrepaidCard?: number;
  /**
   * @remarks
   * The expenditure amount allocated to the current allocation month. Invoicing is supported.
   * 
   * @example
   * 0
   */
  currentAmortizationExpenditureAmount?: number;
  /**
   * @remarks
   * The discount amount allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationInvoiceDiscount?: number;
  /**
   * @remarks
   * The pretax amount allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationPretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationPretaxGrossAmount?: number;
  /**
   * @remarks
   * The round-off amount allocated to the current allocation month.
   * 
   * @example
   * 0
   */
  currentAmortizationRoundDownDiscount?: number;
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
   * The expenditure amount. Invoicing is supported.
   * 
   * @example
   * 0
   */
  expenditureAmount?: number;
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
  previouslyAmortizedAfterDiscountAmount?: number;
  /**
   * @remarks
   * The amount deducted by using vouchers and allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons and allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedDeductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards and allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedDeductedByPrepaidCard?: number;
  /**
   * @remarks
   * The expenditure amount allocated before the current allocation month. Invoicing is supported.
   * 
   * @example
   * 0
   */
  previouslyAmortizedExpenditureAmount?: number;
  /**
   * @remarks
   * The discount amount allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedInvoiceDiscount?: number;
  /**
   * @remarks
   * The pretax amount allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedPretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedPretaxGrossAmount?: number;
  /**
   * @remarks
   * The round-off amount allocated before the current allocation month.
   * 
   * @example
   * 0
   */
  previouslyAmortizedRoundDownDiscount?: number;
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
   * The specific service resource.
   * 
   * @example
   * ApsaraDB RDS
   */
  productDetail?: string;
  /**
   * @remarks
   * The code of the specific service resource.
   * 
   * @example
   * rds
   */
  productDetailCode?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ApsaraDB RDS
   */
  productName?: string;
  remainingAmortizationAfterDiscountAmount?: number;
  /**
   * @remarks
   * The amount deducted by using vouchers and to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationDeductedByCashCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using coupons and to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationDeductedByCoupons?: number;
  /**
   * @remarks
   * The amount deducted by using prepaid cards and to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationDeductedByPrepaidCard?: number;
  /**
   * @remarks
   * The expenditure amount to be allocated to one or more future allocation months. Invoicing is supported.
   * 
   * @example
   * 0
   */
  remainingAmortizationExpenditureAmount?: number;
  /**
   * @remarks
   * The discount amount to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationInvoiceDiscount?: number;
  /**
   * @remarks
   * The pretax amount to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationPretaxAmount?: number;
  /**
   * @remarks
   * The pretax gross amount to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationPretaxGrossAmount?: number;
  /**
   * @remarks
   * The round-off amount to be allocated to one or more future allocation months.
   * 
   * @example
   * 0
   */
  remainingAmortizationRoundDownDiscount?: number;
  /**
   * @remarks
   * The round-off amount.
   * 
   * @example
   * 0
   */
  roundDownDiscount?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   Subscription: the subscription billing method
   * *   PayAsYouGo: the pay-as-you-go billing method
   * 
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

export class DescribeProductAmortizedCostByAmortizationPeriodResponseBodyData extends $dara.Model {
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
   * The data entries returned.
   */
  items?: DescribeProductAmortizedCostByAmortizationPeriodResponseBodyDataItems[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The position from which the results started to return. The parameter must be left empty or set to the value of the NextToken parameter returned from the last call. Otherwise, an error is returned. If this parameter is left empty, data is queried from the beginning.
   * 
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
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
      items: { 'type': 'array', 'itemType': DescribeProductAmortizedCostByAmortizationPeriodResponseBodyDataItems },
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

export class DescribeProductAmortizedCostByAmortizationPeriodResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeProductAmortizedCostByAmortizationPeriodResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful！
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
      data: DescribeProductAmortizedCostByAmortizationPeriodResponseBodyData,
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

