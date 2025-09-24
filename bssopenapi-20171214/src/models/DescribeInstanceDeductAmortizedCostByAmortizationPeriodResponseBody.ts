// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBodyDataItems extends $dara.Model {
  /**
   * @example
   * 2022-10
   */
  amortizationPeriod?: string;
  /**
   * @example
   * 2022-10-10
   */
  amortizationPeriodDay?: string;
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
   * 2022-10
   */
  consumePeriod?: string;
  costUnit?: string;
  /**
   * @example
   * 1234
   */
  costUnitCode?: string;
  /**
   * @example
   * 0
   */
  currentAmortizationDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  currentAmortizationInvoiceDiscount?: number;
  /**
   * @example
   * 10
   */
  currentAmortizationPretaxAmount?: number;
  /**
   * @example
   * 10
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
  deductedByCoupons?: number;
  /**
   * @example
   * CPU:12
   */
  instanceConfig?: string;
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
   * 100
   */
  pretaxAmount?: number;
  /**
   * @example
   * 100
   */
  pretaxGrossAmount?: number;
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
  /**
   * @example
   * spn-001
   */
  referFrInstanceID?: string;
  /**
   * @example
   * 185xxxxx489
   */
  referFrOwnerID?: string;
  /**
   * @example
   * savingplan_common_public_cn
   */
  referFrProductDetailCode?: string;
  region?: string;
  resourceGroup?: string;
  /**
   * @example
   * 0
   */
  roundDownDiscount?: number;
  /**
   * @example
   * 12@test.com
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
   * key:testKey value:testValue; key:testKey1 value:testValues1
   */
  tag?: string;
  /**
   * @example
   * 0
   */
  unusedAmortizationDeductedByCoupons?: number;
  /**
   * @example
   * 0
   */
  unusedAmortizationInvoiceDiscount?: number;
  /**
   * @example
   * 0
   */
  unusedAmortizationPretaxAmount?: number;
  /**
   * @example
   * 0
   */
  unusedAmortizationPretaxGrossAmount?: number;
  /**
   * @example
   * 0
   */
  unusedAmortizationRoundDownDiscount?: number;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      amortizationPeriod: 'AmortizationPeriod',
      amortizationPeriodDay: 'AmortizationPeriodDay',
      amortizationStatus: 'AmortizationStatus',
      billAccountID: 'BillAccountID',
      billAccountName: 'BillAccountName',
      billOwnerID: 'BillOwnerID',
      billOwnerName: 'BillOwnerName',
      bizType: 'BizType',
      consumePeriod: 'ConsumePeriod',
      costUnit: 'CostUnit',
      costUnitCode: 'CostUnitCode',
      currentAmortizationDeductedByCoupons: 'CurrentAmortizationDeductedByCoupons',
      currentAmortizationInvoiceDiscount: 'CurrentAmortizationInvoiceDiscount',
      currentAmortizationPretaxAmount: 'CurrentAmortizationPretaxAmount',
      currentAmortizationPretaxGrossAmount: 'CurrentAmortizationPretaxGrossAmount',
      currentAmortizationRoundDownDiscount: 'CurrentAmortizationRoundDownDiscount',
      deductedByCoupons: 'DeductedByCoupons',
      instanceConfig: 'InstanceConfig',
      instanceID: 'InstanceID',
      internetIP: 'InternetIP',
      intranetIP: 'IntranetIP',
      invoiceDiscount: 'InvoiceDiscount',
      pretaxAmount: 'PretaxAmount',
      pretaxGrossAmount: 'PretaxGrossAmount',
      productCode: 'ProductCode',
      productDetail: 'ProductDetail',
      productDetailCode: 'ProductDetailCode',
      productName: 'ProductName',
      referFrInstanceID: 'ReferFrInstanceID',
      referFrOwnerID: 'ReferFrOwnerID',
      referFrProductDetailCode: 'ReferFrProductDetailCode',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      roundDownDiscount: 'RoundDownDiscount',
      splitAccountName: 'SplitAccountName',
      splitItemID: 'SplitItemID',
      splitItemName: 'SplitItemName',
      splitProductDetail: 'SplitProductDetail',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      unusedAmortizationDeductedByCoupons: 'UnusedAmortizationDeductedByCoupons',
      unusedAmortizationInvoiceDiscount: 'UnusedAmortizationInvoiceDiscount',
      unusedAmortizationPretaxAmount: 'UnusedAmortizationPretaxAmount',
      unusedAmortizationPretaxGrossAmount: 'UnusedAmortizationPretaxGrossAmount',
      unusedAmortizationRoundDownDiscount: 'UnusedAmortizationRoundDownDiscount',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amortizationPeriod: 'string',
      amortizationPeriodDay: 'string',
      amortizationStatus: 'string',
      billAccountID: 'number',
      billAccountName: 'string',
      billOwnerID: 'number',
      billOwnerName: 'string',
      bizType: 'string',
      consumePeriod: 'string',
      costUnit: 'string',
      costUnitCode: 'string',
      currentAmortizationDeductedByCoupons: 'number',
      currentAmortizationInvoiceDiscount: 'number',
      currentAmortizationPretaxAmount: 'number',
      currentAmortizationPretaxGrossAmount: 'number',
      currentAmortizationRoundDownDiscount: 'number',
      deductedByCoupons: 'number',
      instanceConfig: 'string',
      instanceID: 'string',
      internetIP: 'string',
      intranetIP: 'string',
      invoiceDiscount: 'number',
      pretaxAmount: 'number',
      pretaxGrossAmount: 'number',
      productCode: 'string',
      productDetail: 'string',
      productDetailCode: 'string',
      productName: 'string',
      referFrInstanceID: 'string',
      referFrOwnerID: 'string',
      referFrProductDetailCode: 'string',
      region: 'string',
      resourceGroup: 'string',
      roundDownDiscount: 'number',
      splitAccountName: 'string',
      splitItemID: 'string',
      splitItemName: 'string',
      splitProductDetail: 'string',
      subscriptionType: 'string',
      tag: 'string',
      unusedAmortizationDeductedByCoupons: 'number',
      unusedAmortizationInvoiceDiscount: 'number',
      unusedAmortizationPretaxAmount: 'number',
      unusedAmortizationPretaxGrossAmount: 'number',
      unusedAmortizationRoundDownDiscount: 'number',
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

export class DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBodyData extends $dara.Model {
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
  items?: DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBodyDataItems[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * CAESEgoQCg4KCmdtdF9jcmVhdGUEARgBIkgKCQBwhGmPcAEAAAo7AzYAAAAxTDgwMDcxMjg3ZDJhNmM3ZDguTDgwMDAwMDAwMDAwMzE1MTIuTDgwMDcyZDMyZTJkYzg3N2U
   */
  nextToken?: string;
  /**
   * @example
   * 400
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
      items: { 'type': 'array', 'itemType': DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBodyDataItems },
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

export class DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBodyData;
  /**
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @example
   * EAE08A27-386C-579E-966D-8853EC3C5D0E
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
      data: DescribeInstanceDeductAmortizedCostByAmortizationPeriodResponseBodyData,
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

