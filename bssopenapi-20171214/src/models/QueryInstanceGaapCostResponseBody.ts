// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstanceGaapCostResponseBodyDataModulesModule extends $dara.Model {
  accountingUnit?: string;
  /**
   * @example
   * SubscriptionOrder
   */
  billType?: string;
  /**
   * @example
   * 2020-03
   */
  billingCycle?: string;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 0
   */
  deductedByCashCoupons?: string;
  /**
   * @example
   * 0
   */
  deductedByCoupons?: string;
  /**
   * @example
   * 0
   */
  deductedByPrepaidCard?: string;
  /**
   * @example
   * 0
   */
  gaapDeductedByCashCoupons?: string;
  /**
   * @example
   * 0
   */
  gaapDeductedByCoupons?: string;
  /**
   * @example
   * 0
   */
  gaapDeductedByPrepaidCard?: string;
  /**
   * @example
   * 0
   */
  gaapPaymentAmount?: string;
  /**
   * @example
   * 0
   */
  gaapPretaxAmount?: string;
  /**
   * @example
   * 0
   */
  gaapPretaxAmountLocal?: string;
  /**
   * @example
   * 0
   */
  gaapPretaxGrossAmount?: string;
  /**
   * @example
   * 0
   */
  gaapPricingDiscount?: string;
  /**
   * @example
   * OSSBAG-cn-0xl0xxxxxx
   */
  instanceID?: string;
  /**
   * @example
   * 0.75
   */
  monthGaapDeductedByCashCoupons?: string;
  /**
   * @example
   * 0
   */
  monthGaapDeductedByCoupons?: string;
  /**
   * @example
   * 0
   */
  monthGaapDeductedByPrepaidCard?: string;
  /**
   * @example
   * 0
   */
  monthGaapPaymentAmount?: string;
  /**
   * @example
   * 0
   */
  monthGaapPretaxAmount?: string;
  /**
   * @example
   * 0.99
   */
  monthGaapPretaxAmountLocal?: string;
  /**
   * @example
   * 0.99
   */
  monthGaapPretaxGrossAmount?: string;
  /**
   * @example
   * 0,.25
   */
  monthGaapPricingDiscount?: string;
  /**
   * @example
   * 213123213123
   */
  orderId?: string;
  /**
   * @example
   * New
   */
  orderType?: string;
  /**
   * @example
   * 123213123123
   */
  ownerID?: string;
  /**
   * @example
   * 2018-06-15 15:59:57
   */
  payTime?: string;
  /**
   * @example
   * 23534534
   */
  payerAccount?: string;
  /**
   * @example
   * 0
   */
  paymentAmount?: string;
  /**
   * @example
   * CNY
   */
  paymentCurrency?: string;
  /**
   * @example
   * 0
   */
  pretaxAmount?: string;
  /**
   * @example
   * 0
   */
  pretaxAmountLocal?: string;
  /**
   * @example
   * 123
   */
  pretaxGrossAmount?: string;
  /**
   * @example
   * 1
   */
  pricingDiscount?: string;
  /**
   * @example
   * rds
   */
  productCode?: string;
  /**
   * @example
   * rds
   */
  productType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  resourceGroup?: string;
  /**
   * @example
   * 12434345
   */
  subOrderId?: string;
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
  /**
   * @example
   * 0
   */
  unallocatedDeductedByCashCoupons?: string;
  /**
   * @example
   * 0
   */
  unallocatedDeductedByCoupons?: string;
  /**
   * @example
   * 0
   */
  unallocatedDeductedByPrepaidCard?: string;
  /**
   * @example
   * 0
   */
  unallocatedPaymentAmount?: string;
  /**
   * @example
   * 0
   */
  unallocatedPretaxAmount?: string;
  /**
   * @example
   * 0
   */
  unallocatedPretaxAmountLocal?: string;
  /**
   * @example
   * 0
   */
  unallocatedPretaxGrossAmount?: string;
  /**
   * @example
   * 0
   */
  unallocatedPricingDiscount?: string;
  /**
   * @example
   * 2019-05-01 00:00:00
   */
  usageEndDate?: string;
  /**
   * @example
   * 2019-04-01 00:00:00
   */
  usageStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      accountingUnit: 'AccountingUnit',
      billType: 'BillType',
      billingCycle: 'BillingCycle',
      currency: 'Currency',
      deductedByCashCoupons: 'DeductedByCashCoupons',
      deductedByCoupons: 'DeductedByCoupons',
      deductedByPrepaidCard: 'DeductedByPrepaidCard',
      gaapDeductedByCashCoupons: 'GaapDeductedByCashCoupons',
      gaapDeductedByCoupons: 'GaapDeductedByCoupons',
      gaapDeductedByPrepaidCard: 'GaapDeductedByPrepaidCard',
      gaapPaymentAmount: 'GaapPaymentAmount',
      gaapPretaxAmount: 'GaapPretaxAmount',
      gaapPretaxAmountLocal: 'GaapPretaxAmountLocal',
      gaapPretaxGrossAmount: 'GaapPretaxGrossAmount',
      gaapPricingDiscount: 'GaapPricingDiscount',
      instanceID: 'InstanceID',
      monthGaapDeductedByCashCoupons: 'MonthGaapDeductedByCashCoupons',
      monthGaapDeductedByCoupons: 'MonthGaapDeductedByCoupons',
      monthGaapDeductedByPrepaidCard: 'MonthGaapDeductedByPrepaidCard',
      monthGaapPaymentAmount: 'MonthGaapPaymentAmount',
      monthGaapPretaxAmount: 'MonthGaapPretaxAmount',
      monthGaapPretaxAmountLocal: 'MonthGaapPretaxAmountLocal',
      monthGaapPretaxGrossAmount: 'MonthGaapPretaxGrossAmount',
      monthGaapPricingDiscount: 'MonthGaapPricingDiscount',
      orderId: 'OrderId',
      orderType: 'OrderType',
      ownerID: 'OwnerID',
      payTime: 'PayTime',
      payerAccount: 'PayerAccount',
      paymentAmount: 'PaymentAmount',
      paymentCurrency: 'PaymentCurrency',
      pretaxAmount: 'PretaxAmount',
      pretaxAmountLocal: 'PretaxAmountLocal',
      pretaxGrossAmount: 'PretaxGrossAmount',
      pricingDiscount: 'PricingDiscount',
      productCode: 'ProductCode',
      productType: 'ProductType',
      region: 'Region',
      resourceGroup: 'ResourceGroup',
      subOrderId: 'SubOrderId',
      subscriptionType: 'SubscriptionType',
      tag: 'Tag',
      unallocatedDeductedByCashCoupons: 'UnallocatedDeductedByCashCoupons',
      unallocatedDeductedByCoupons: 'UnallocatedDeductedByCoupons',
      unallocatedDeductedByPrepaidCard: 'UnallocatedDeductedByPrepaidCard',
      unallocatedPaymentAmount: 'UnallocatedPaymentAmount',
      unallocatedPretaxAmount: 'UnallocatedPretaxAmount',
      unallocatedPretaxAmountLocal: 'UnallocatedPretaxAmountLocal',
      unallocatedPretaxGrossAmount: 'UnallocatedPretaxGrossAmount',
      unallocatedPricingDiscount: 'UnallocatedPricingDiscount',
      usageEndDate: 'UsageEndDate',
      usageStartDate: 'UsageStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountingUnit: 'string',
      billType: 'string',
      billingCycle: 'string',
      currency: 'string',
      deductedByCashCoupons: 'string',
      deductedByCoupons: 'string',
      deductedByPrepaidCard: 'string',
      gaapDeductedByCashCoupons: 'string',
      gaapDeductedByCoupons: 'string',
      gaapDeductedByPrepaidCard: 'string',
      gaapPaymentAmount: 'string',
      gaapPretaxAmount: 'string',
      gaapPretaxAmountLocal: 'string',
      gaapPretaxGrossAmount: 'string',
      gaapPricingDiscount: 'string',
      instanceID: 'string',
      monthGaapDeductedByCashCoupons: 'string',
      monthGaapDeductedByCoupons: 'string',
      monthGaapDeductedByPrepaidCard: 'string',
      monthGaapPaymentAmount: 'string',
      monthGaapPretaxAmount: 'string',
      monthGaapPretaxAmountLocal: 'string',
      monthGaapPretaxGrossAmount: 'string',
      monthGaapPricingDiscount: 'string',
      orderId: 'string',
      orderType: 'string',
      ownerID: 'string',
      payTime: 'string',
      payerAccount: 'string',
      paymentAmount: 'string',
      paymentCurrency: 'string',
      pretaxAmount: 'string',
      pretaxAmountLocal: 'string',
      pretaxGrossAmount: 'string',
      pricingDiscount: 'string',
      productCode: 'string',
      productType: 'string',
      region: 'string',
      resourceGroup: 'string',
      subOrderId: 'string',
      subscriptionType: 'string',
      tag: 'string',
      unallocatedDeductedByCashCoupons: 'string',
      unallocatedDeductedByCoupons: 'string',
      unallocatedDeductedByPrepaidCard: 'string',
      unallocatedPaymentAmount: 'string',
      unallocatedPretaxAmount: 'string',
      unallocatedPretaxAmountLocal: 'string',
      unallocatedPretaxGrossAmount: 'string',
      unallocatedPricingDiscount: 'string',
      usageEndDate: 'string',
      usageStartDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponseBodyDataModules extends $dara.Model {
  module?: QueryInstanceGaapCostResponseBodyDataModulesModule[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: { 'type': 'array', 'itemType': QueryInstanceGaapCostResponseBodyDataModulesModule },
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1.1.1.1
   */
  hostId?: string;
  modules?: QueryInstanceGaapCostResponseBodyDataModules;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      modules: 'Modules',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      modules: QueryInstanceGaapCostResponseBodyDataModules,
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.modules && typeof (this.modules as any).validate === 'function') {
      (this.modules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryInstanceGaapCostResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: QueryInstanceGaapCostResponseBodyData;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * CCBB1BB9-22F1-4177-867B-7A75D665B488
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
      data: QueryInstanceGaapCostResponseBodyData,
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

