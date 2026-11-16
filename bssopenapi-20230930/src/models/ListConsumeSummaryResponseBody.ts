// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumeSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The amount after coupon deduction, which is the result of deducting coupons from the amount after discount. When all related fields are available, it equals AmountAfterPromotionDeduction - CouponAmount.
   * 
   * @example
   * 65
   */
  amountAfterCouponDeduction?: string;
  /**
   * @remarks
   * The amount after discount, which represents the amount after applying discounts such as website promotions and contract discounts. Coupons are not deducted at this point. When all related fields are available, it equals AmountAfterSavingPlanDeduction - PromotionAmount.
   * 
   * @example
   * 70
   */
  amountAfterPromotionDeduction?: string;
  /**
   * @remarks
   * The amount after savings plan deduction, which is the remaining amount after deducting the list price portion covered by the savings plan. When all related fields are available, it equals ListPrice - SavingPlanDeductListPrice.
   * 
   * @example
   * 80
   */
  amountAfterSavingPlanDeduction?: string;
  /**
   * @remarks
   * The billing date, which is the consumption date of the cloud product, in the format of yyyy-MM-dd. It has a value only when summarized by day.
   * 
   * @example
   * 2026-10-01
   */
  billingDate?: string;
  /**
   * @remarks
   * The billing formula, which describes how the total list price is calculated. It should be understood in conjunction with the list price on the Alibaba Cloud website, usage, duration, and other billing factors.
   * 
   * @example
   * List price × Usage × Duration
   */
  billingFormula?: string;
  /**
   * @remarks
   * The billing item code, which identifies the billing item to which the fee belongs.
   * 
   * @example
   * example_billing_item
   */
  billingItemCode?: string;
  /**
   * @remarks
   * The billing item name, which is the display name of the billing item to which the fee belongs.
   * 
   * @example
   * Sample billing item
   */
  billingItemName?: string;
  /**
   * @remarks
   * The billing month, which represents the billing month to which the fee belongs, in the format of yyyy-MM.
   * 
   * @example
   * 2026-10
   */
  billingMonth?: string;
  /**
   * @remarks
   * The usage that is ultimately used for fee calculation. If usage deduction is applied, this value is the usage before deduction minus the usage deducted by resource plans, free quotas, and other deductions.
   * 
   * @example
   * 100
   */
  billingQuantity?: string;
  /**
   * @remarks
   * The usage unit, used in conjunction with BillingQuantity.
   * 
   * @example
   * GB
   */
  billingQuantityUnit?: string;
  /**
   * @remarks
   * The duration, which represents the purchase or usage duration involved in billing. It has a value only when the billing formula involves time. If duration deduction is applied, this value is the duration before deduction minus the deducted duration.
   * 
   * @example
   * 1
   */
  chargeDuration?: string;
  /**
   * @remarks
   * The duration unit, used in conjunction with ChargeDuration.
   * 
   * @example
   * Hour
   */
  chargeDurationUnit?: string;
  /**
   * @remarks
   * The billing method. The display name such as prepaid or pay-as-you-go is returned.
   * 
   * @example
   * Pay-as-you-go
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code, used to uniquely identify a specific commodity under a cloud product.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity name, which is the display name of a specific commodity under a cloud product.
   * 
   * @example
   * Sample commodity
   */
  commodityName?: string;
  /**
   * @remarks
   * The transaction type, which describes the transaction behavior that generated the bill, such as new purchase, renewal, upgrade, downgrade, unsubscription, pay-as-you-go, or adjustment. The display name is returned.
   * 
   * @example
   * Pay-as-you-go
   */
  consumeType?: string;
  /**
   * @remarks
   * The coupon deduction amount, which is the fee covered by coupons. This amount cannot be used for invoicing.
   * 
   * @example
   * 5
   */
  couponAmount?: string;
  /**
   * @remarks
   * The currency, which represents the currency used for the list price and amounts in this record. For example, CNY indicates Chinese Yuan.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The summary record identifier, used as an opaque string. It can be empty.
   * 
   * @example
   * example-summary-key
   */
  hashKey?: string;
  /**
   * @remarks
   * The instance ID at the billing granularity, which represents the instance identity used to aggregate fees when a cloud product generates a bill. The billing granularity may differ from the resource management granularity, so it may be different from ResourceId.
   * 
   * @example
   * i-example001
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource name, which is the name set by the user for the cloud resource. Whether it is returned depends on whether the product supports querying and whether the resource information is available.
   * 
   * @example
   * example-resource
   */
  instanceName?: string;
  /**
   * @remarks
   * The specification, used to describe the specification information corresponding to the billing item.
   * 
   * @example
   * example.spec
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The line item type, which describes the nature of the fee, such as subscription prepaid fee, subscription postpaid fee, subscription unsubscription fee, pay-as-you-go fee for cloud resources, adjustment fee, or rounding fee. The display name is returned.
   * 
   * @example
   * Pay-as-you-go
   */
  lineItemType?: string;
  /**
   * @remarks
   * The total list price, which represents the total amount calculated based on the list price for the purchased cloud resource configuration. Savings plan deductions, discounts, and coupons are not deducted yet. Note that ListPrice in this API is the total amount. For the list unit price, see ListUnitPrice.
   * 
   * @example
   * 100
   */
  listPrice?: string;
  /**
   * @remarks
   * The price unit, which is the unit corresponding to the list unit price ListUnitPrice, such as CNY/GB.
   * 
   * @example
   * CNY/GB/Hour
   */
  listPriceUnit?: string;
  /**
   * @remarks
   * The list price on the Alibaba Cloud website, which is the list unit price of the commodity. It differs in meaning from the total list price ListPrice. In scenarios such as tiered pricing, you cannot recalculate the fee by simply multiplying a single unit price by the total usage.
   * 
   * @example
   * 1
   */
  listUnitPrice?: string;
  /**
   * @remarks
   * The product code, used to uniquely identify a specific cloud product.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The product name, which is the display name of the cloud product.
   * 
   * @example
   * Elastic Compute Service
   */
  productName?: string;
  /**
   * @remarks
   * The discount amount, which represents the total discounts such as website promotions and contract discounts. Coupon deductions are separately recorded in CouponAmount.
   * 
   * @example
   * 10
   */
  promotionAmount?: string;
  /**
   * @remarks
   * The configuration, used to describe the configuration options corresponding to the billing item.
   * 
   * @example
   * Sample configuration
   */
  purchaseConfiguration?: string;
  /**
   * @remarks
   * The region code, which represents the code of the logical region where the cloud resource is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  /**
   * @remarks
   * The region, which represents the display name of the region where the cloud resource is located. For products sold by region, it usually corresponds to the region selected when placing the order.
   * 
   * @example
   * China (Hangzhou)
   */
  regionName?: string;
  /**
   * @remarks
   * The payable amount, which is the fee to be paid after savings plan deductions, discounts, and coupon deductions. In the new version of bills, this corresponds to the payable amount (tax-inclusive) definition. For fee verification, refer to the actual return value of this field.
   * 
   * @example
   * 65
   */
  requireAmount?: string;
  /**
   * @remarks
   * The resource ID, used to uniquely identify a cloud resource in the corresponding cloud product or service.
   * 
   * @example
   * i-example001
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource ownership account ID, which is the ID of the account that actually uses the cloud resource instance. It may be different from the purchasing account.
   * 
   * @example
   * 1234567890123456
   */
  resourceOwnerAccountId?: string;
  /**
   * @remarks
   * The resource ownership account, which is the name of the account that actually uses the cloud resource instance. It may be different from the purchasing account.
   * 
   * @example
   * owner@example.com
   */
  resourceOwnerAccountName?: string;
  /**
   * @remarks
   * The ID of the resource purchasing account, which is the ID of the account that placed the order to purchase the cloud resource instance.
   * 
   * @example
   * 1234567890123456
   */
  resourcePurchaseAccountId?: string;
  /**
   * @remarks
   * The resource purchasing account, which is the name of the account that placed the order to purchase the cloud resource instance.
   * 
   * @example
   * buyer@example.com
   */
  resourcePurchaseAccountName?: string;
  /**
   * @remarks
   * The savings plan deduction amount, which is the committed spend of the savings plan consumed to complete this deduction. It is not the list price amount of the deducted resource and cannot replace SavingPlanDeductListPrice for deduction from the total list price.
   * 
   * @example
   * 8
   */
  savingPlanDeductAmount?: string;
  /**
   * @remarks
   * The savings plan deduction list price, which is the amount calculated based on the list price for the pay-as-you-go resource fees deducted by the savings plan.
   * 
   * @example
   * 20
   */
  savingPlanDeductListPrice?: string;
  /**
   * @remarks
   * The service entity, which is the name of the company that actually provides the product or service. Different products may correspond to different companies.
   * 
   * @example
   * Sample service entity
   */
  serviceEntity?: string;
  static names(): { [key: string]: string } {
    return {
      amountAfterCouponDeduction: 'AmountAfterCouponDeduction',
      amountAfterPromotionDeduction: 'AmountAfterPromotionDeduction',
      amountAfterSavingPlanDeduction: 'AmountAfterSavingPlanDeduction',
      billingDate: 'BillingDate',
      billingFormula: 'BillingFormula',
      billingItemCode: 'BillingItemCode',
      billingItemName: 'BillingItemName',
      billingMonth: 'BillingMonth',
      billingQuantity: 'BillingQuantity',
      billingQuantityUnit: 'BillingQuantityUnit',
      chargeDuration: 'ChargeDuration',
      chargeDurationUnit: 'ChargeDurationUnit',
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
      consumeType: 'ConsumeType',
      couponAmount: 'CouponAmount',
      currency: 'Currency',
      hashKey: 'HashKey',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceSpec: 'InstanceSpec',
      lineItemType: 'LineItemType',
      listPrice: 'ListPrice',
      listPriceUnit: 'ListPriceUnit',
      listUnitPrice: 'ListUnitPrice',
      productCode: 'ProductCode',
      productName: 'ProductName',
      promotionAmount: 'PromotionAmount',
      purchaseConfiguration: 'PurchaseConfiguration',
      regionCode: 'RegionCode',
      regionName: 'RegionName',
      requireAmount: 'RequireAmount',
      resourceId: 'ResourceId',
      resourceOwnerAccountId: 'ResourceOwnerAccountId',
      resourceOwnerAccountName: 'ResourceOwnerAccountName',
      resourcePurchaseAccountId: 'ResourcePurchaseAccountId',
      resourcePurchaseAccountName: 'ResourcePurchaseAccountName',
      savingPlanDeductAmount: 'SavingPlanDeductAmount',
      savingPlanDeductListPrice: 'SavingPlanDeductListPrice',
      serviceEntity: 'ServiceEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountAfterCouponDeduction: 'string',
      amountAfterPromotionDeduction: 'string',
      amountAfterSavingPlanDeduction: 'string',
      billingDate: 'string',
      billingFormula: 'string',
      billingItemCode: 'string',
      billingItemName: 'string',
      billingMonth: 'string',
      billingQuantity: 'string',
      billingQuantityUnit: 'string',
      chargeDuration: 'string',
      chargeDurationUnit: 'string',
      chargeType: 'string',
      commodityCode: 'string',
      commodityName: 'string',
      consumeType: 'string',
      couponAmount: 'string',
      currency: 'string',
      hashKey: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceSpec: 'string',
      lineItemType: 'string',
      listPrice: 'string',
      listPriceUnit: 'string',
      listUnitPrice: 'string',
      productCode: 'string',
      productName: 'string',
      promotionAmount: 'string',
      purchaseConfiguration: 'string',
      regionCode: 'string',
      regionName: 'string',
      requireAmount: 'string',
      resourceId: 'string',
      resourceOwnerAccountId: 'string',
      resourceOwnerAccountName: 'string',
      resourcePurchaseAccountId: 'string',
      resourcePurchaseAccountName: 'string',
      savingPlanDeductAmount: 'string',
      savingPlanDeductListPrice: 'string',
      serviceEntity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumeSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The consumption summary records returned in this request. An empty array is returned if no matching records are found.
   * 
   * @example
   * []
   */
  data?: ListConsumeSummaryResponseBodyData[];
  /**
   * @remarks
   * The maximum number of records per page used in this query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token for the next page. If a non-empty value is returned, pass it as is to the next request and keep other query conditions unchanged. If it is not returned or is empty, pagination ends.
   * 
   * @example
   * example-next-token
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the request, used for troubleshooting.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListConsumeSummaryResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

