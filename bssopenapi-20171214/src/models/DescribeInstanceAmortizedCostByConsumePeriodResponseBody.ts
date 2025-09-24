// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceAmortizedCostByConsumePeriodResponseBodyDataItems extends $dara.Model {
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
  costUnit?: string;
  /**
   * @example
   * 1234
   */
  costUnitCode?: string;
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
   * i-kjhdskjgshfdlkjfdh
   */
  instanceID?: string;
  /**
   * @example
   * 34.xx.x.x
   */
  internetIP?: string;
  /**
   * @example
   * 192.xx.xx.xx
   */
  intranetIP?: string;
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
  region?: string;
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
  resourceGroup?: string;
  /**
   * @example
   * 0
   */
  roundDownDiscount?: number;
  /**
   * @example
   * test**1122
   */
  splitAccountName?: string;
  /**
   * @example
   * i-28bycvyb4
   */
  splitItemID?: string;
  /**
   * @example
   * iZ28bycvyb4Z
   */
  splitItemName?: string;
  /**
   * @example
   * rds
   */
  splitProductDetail?: string;
  /**
   * @example
   * PayAsYouGo
   */
  subscriptionType?: string;
  /**
   * @example
   * tag
   */
  tag?: string;
  zone?: string;
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
      costUnit: 'CostUnit',
      costUnitCode: 'CostUnitCode',
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
      instanceID: 'InstanceID',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
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
      region: 'Region',
      remainingAmortizationAfterDiscountAmount: 'RemainingAmortizationAfterDiscountAmount',
      remainingAmortizationDeductedByCashCoupons: 'RemainingAmortizationDeductedByCashCoupons',
      remainingAmortizationDeductedByCoupons: 'RemainingAmortizationDeductedByCoupons',
      remainingAmortizationDeductedByPrepaidCard: 'RemainingAmortizationDeductedByPrepaidCard',
      remainingAmortizationExpenditureAmount: 'RemainingAmortizationExpenditureAmount',
      remainingAmortizationInvoiceDiscount: 'RemainingAmortizationInvoiceDiscount',
      remainingAmortizationPretaxAmount: 'RemainingAmortizationPretaxAmount',
      remainingAmortizationPretaxGrossAmount: 'RemainingAmortizationPretaxGrossAmount',
      remainingAmortizationRoundDownDiscount: 'RemainingAmortizationRoundDownDiscount',
      resourceGroup: 'ResourceGroup',
      roundDownDiscount: 'RoundDownDiscount',
      splitAccountName: 'SplitAccountName',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      zone: 'Zone',
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
      costUnit: 'string',
      costUnitCode: 'string',
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
      instanceID: 'string',
      internetIP: 'string',
      intranetIP: 'string',
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
      region: 'string',
      remainingAmortizationAfterDiscountAmount: 'number',
      remainingAmortizationDeductedByCashCoupons: 'number',
      remainingAmortizationDeductedByCoupons: 'number',
      remainingAmortizationDeductedByPrepaidCard: 'number',
      remainingAmortizationExpenditureAmount: 'number',
      remainingAmortizationInvoiceDiscount: 'number',
      remainingAmortizationPretaxAmount: 'number',
      remainingAmortizationPretaxGrossAmount: 'number',
      remainingAmortizationRoundDownDiscount: 'number',
      resourceGroup: 'string',
      roundDownDiscount: 'number',
      splitAccountName: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
      subscriptionType: 'string',
      tag: 'string',
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

export class DescribeInstanceAmortizedCostByConsumePeriodResponseBodyData extends $dara.Model {
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
  items?: DescribeInstanceAmortizedCostByConsumePeriodResponseBodyDataItems[];
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
      items: { 'type': 'array', 'itemType': DescribeInstanceAmortizedCostByConsumePeriodResponseBodyDataItems },
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

export class DescribeInstanceAmortizedCostByConsumePeriodResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeInstanceAmortizedCostByConsumePeriodResponseBodyData;
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
      data: DescribeInstanceAmortizedCostByConsumePeriodResponseBodyData,
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

