// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSplitSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The amount after coupon deduction, which equals AmountAfterPromotionDeduction minus CouponAmount.
   * 
   * @example
   * 85
   */
  amountAfterCouponDeduction?: string;
  /**
   * @remarks
   * The amount after discount, which is the amount after official website discounts and contract discounts are applied, but before coupon deductions. When the savings plan deduction data is complete, this equals ListPrice minus SavingPlanDeductListPrice minus PromotionAmount. When the savings plan deduction list price is unavailable, this is calculated as ListPrice minus PromotionAmount.
   * 
   * @example
   * 90
   */
  amountAfterPromotionDeduction?: string;
  /**
   * @remarks
   * The amount after savings plan deduction, which equals ListPrice minus SavingPlanDeductListPrice. This may be empty when there is no savings plan deduction data.
   * 
   * @example
   * 100
   */
  amountAfterSavingPlanDeduction?: string;
  /**
   * @remarks
   * The billing date, which is the date when the user consumed the cloud service. The format is yyyy-MM-dd. This has a value only when the data is summarized by day.
   * 
   * @example
   * 2026-09-01
   */
  billingDate?: string;
  /**
   * @remarks
   * The billing item code, which is the billing item to which the cloud resource expense belongs. Whether this field has a value depends on the split bill records and summary data.
   * 
   * @example
   * example_billing_item
   */
  billingItemCode?: string;
  /**
   * @remarks
   * The billing item name.
   * 
   * @example
   * Sample billing item
   */
  billingItemName?: string;
  /**
   * @remarks
   * The billing month, which is the month to which the expense belongs. The format is yyyy-MM.
   * 
   * @example
   * 2026-09
   */
  billingMonth?: string;
  /**
   * @remarks
   * The usage, which is the total usage that is ultimately billed. This must be understood in combination with the product, billing item, and unit. Do not directly add up the values if the units or billing rules are different.
   * 
   * @example
   * 100
   */
  billingQuantity?: string;
  /**
   * @remarks
   * The unit of usage, used in conjunction with BillingQuantity.
   * 
   * @example
   * GB
   */
  billingQuantityUnit?: string;
  /**
   * @remarks
   * The total duration of purchasing or using cloud products. This field is used when the corresponding billing method includes a duration.
   * 
   * @example
   * 24
   */
  chargeDuration?: string;
  /**
   * @remarks
   * The unit of duration, used in conjunction with ChargeDuration.
   * 
   * @example
   * Hour
   */
  chargeDurationUnit?: string;
  /**
   * @remarks
   * The display name of the billing method, returned based on the request language, such as Subscription or Pay-as-you-go. Use Subscription or PayAsYouGo for filtering.
   * 
   * @example
   * Pay-as-you-go
   */
  chargeType?: string;
  /**
   * @remarks
   * The commodity code, which is the unique identifier of a specific commodity under a cloud service.
   * 
   * @example
   * oss
   */
  commodityCode?: string;
  /**
   * @remarks
   * The commodity name.
   * 
   * @example
   * Sample commodity
   */
  commodityName?: string;
  /**
   * @remarks
   * The display name of the transaction type, which identifies the transaction corresponding to the bill, such as new purchase, renewal, upgrade, downgrade, unsubscription, pay-as-you-go, and adjustment. Do not use the display name as the ConsumeType filter code.
   * 
   * @example
   * Pay-as-you-go
   */
  consumeType?: string;
  /**
   * @remarks
   * The cost category, which indicates the cost category and category value to which the record belongs. It is returned as a string. The specific content is subject to the bill record and can be empty.
   * 
   * @example
   * {"business":"commerce"}
   */
  costCategories?: string;
  /**
   * @remarks
   * The coupon deduction amount. This amount cannot be used for invoicing.
   * 
   * @example
   * 5
   */
  couponAmount?: string;
  /**
   * @remarks
   * The currency corresponding to the amounts and prices.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The name of the financial unit. A financial unit is a unit used to group or classify expenses and must be maintained by the user.
   * 
   * @example
   * engineering
   */
  financeUnitName?: string;
  /**
   * @remarks
   * The identifier of the summary record, used as an opaque string. This can be empty. The identifier may change when summary dimensions such as resource groups and tags change.
   * 
   * @example
   * example-split-summary-key
   */
  hashKey?: string;
  /**
   * @remarks
   * The instance ID at the billing granularity, which is the dimension for expense statistics and summary when a cloud service generates a bill. This may be different from the resource ID.
   * 
   * @example
   * oss-cn-hangzhou-example
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource name, which is the custom name given to the cloud resource by the user. Whether this field has a value depends on whether the product and resource information can be obtained.
   * 
   * @example
   * example-resource
   */
  instanceName?: string;
  /**
   * @remarks
   * The specification, which describes the specification of the resource or billing item associated with this record.
   * 
   * @example
   * example.spec
   */
  instanceSpec?: string;
  /**
   * @remarks
   * The public IP address. This is returned only when the product supports it and the relevant resource information can be obtained.
   * 
   * @example
   * 192.0.2.10
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address. This is returned only when the product supports it and the relevant resource information can be obtained.
   * 
   * @example
   * 10.0.0.10
   */
  intranetIp?: string;
  /**
   * @remarks
   * The display name of the expense type, which identifies the nature of the expense generated by the bill, such as subscription prepaid expense, subscription unsubscription expense, pay-as-you-go expense for cloud resources, adjustment expense, and round-down expense. Do not use the display name as the LineItemType filter code.
   * 
   * @example
   * Pay-as-you-go expense for cloud resources
   */
  lineItemType?: string;
  /**
   * @remarks
   * The total list price, which is the total list price of the selected configuration.
   * 
   * @example
   * 100
   */
  listPrice?: string;
  /**
   * @remarks
   * The price unit, used in conjunction with ListUnitPrice.
   * 
   * @example
   * CNY/GB
   */
  listPriceUnit?: string;
  /**
   * @remarks
   * The list price on the official website, which is the list unit price of the commodity. Whether this field has a value depends on the split bill and summary data. Do not multiply the total usage by a unit price to recalculate all bills.
   * 
   * @example
   * 1
   */
  listUnitPrice?: string;
  /**
   * @remarks
   * The product code, which is the unique identifier of a specific cloud service on Alibaba Cloud.
   * 
   * @example
   * oss
   */
  productCode?: string;
  /**
   * @remarks
   * The product name.
   * 
   * @example
   * Object Storage Service (OSS)
   */
  productName?: string;
  /**
   * @remarks
   * The discount amount, which is the total discount amount on the bill, including official website discounts and contract discounts.
   * 
   * @example
   * 10
   */
  promotionAmount?: string;
  /**
   * @remarks
   * The purchase configuration of the billing item, which describes the configurations related to the billing item.
   * 
   * @example
   * Sample configuration
   */
  purchaseConfiguration?: string;
  /**
   * @remarks
   * The region code, which is the logical region code where the cloud resource is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  /**
   * @remarks
   * The region name, which indicates the region selected when the order was placed.
   * 
   * @example
   * China (Hangzhou)
   */
  regionName?: string;
  /**
   * @remarks
   * The payable amount (tax-inclusive), which is the actual amount the user needs to pay after various discounts, savings plan deductions, and coupon deductions are applied. When all amount fields are complete, this equals ListPrice minus SavingPlanDeductListPrice minus PromotionAmount minus CouponAmount. Use this field for expense verification. If other amount fields are missing, do not treat empty values as zero to calculate the payable amount.
   * 
   * @example
   * 85
   */
  requireAmount?: string;
  /**
   * @remarks
   * The resource group, which is the group where cloud resources are located as configured by the user in the Resource Management console.
   * 
   * @example
   * production
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The resource ID, which is the identifier used to uniquely identify a resource in a cloud service.
   * 
   * @example
   * example-bucket
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the resource ownership account, which is the ID of the account that actually uses the resource and may differ from the purchasing account.
   * 
   * @example
   * 1234567890123456
   */
  resourceOwnerAccountId?: string;
  /**
   * @remarks
   * The name of the resource ownership account.
   * 
   * @example
   * owner@example.com
   */
  resourceOwnerAccountName?: string;
  /**
   * @remarks
   * The ID of the resource purchaser account, which is the ID of the account that purchases the resource.
   * 
   * @example
   * 1234567890123456
   */
  resourcePurchaseAccountId?: string;
  /**
   * @remarks
   * The name of the resource purchaser account.
   * 
   * @example
   * buyer@example.com
   */
  resourcePurchaseAccountName?: string;
  /**
   * @remarks
   * The resource tag, which is the custom tag added by the user to Alibaba Cloud resources. It is returned as a string and can be empty.
   * 
   * @example
   * env prod
   */
  resourceTag?: string;
  /**
   * @remarks
   * The savings plan deduction amount, which is the committed amount consumed by the savings plan itself. This has a different meaning from SavingPlanDeductListPrice, cannot be used interchangeably, and should not be deducted from the payable amount again.
   * 
   * @example
   * 0
   */
  savingPlanDeductAmount?: string;
  /**
   * @remarks
   * The total list price deducted by the savings plan, which is the total list price of the pay-as-you-go cloud resources deducted when a savings plan is applied.
   * 
   * @example
   * 0
   */
  savingPlanDeductListPrice?: string;
  /**
   * @remarks
   * The service entity, which is the name of the company that provides the product or service. Alibaba Cloud sells a wide range of products, and some products may be provided by different companies.
   * 
   * @example
   * Sample service entity
   */
  serviceEntity?: string;
  /**
   * @remarks
   * The split item ID, which is the code corresponding to the specific split granularity of the bill. For example, when OSS is split by bucket, this is the bucket code. This field may be empty for records that are not split.
   * 
   * @example
   * example-bucket
   */
  splitItemId?: string;
  /**
   * @remarks
   * The split item name, which is the name corresponding to the specific split granularity of the bill.
   * 
   * @example
   * example-bucket
   */
  splitItemName?: string;
  /**
   * @remarks
   * The zone. The display name may be returned.
   * 
   * @example
   * China (Hangzhou) Zone I
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      amountAfterCouponDeduction: 'AmountAfterCouponDeduction',
      amountAfterPromotionDeduction: 'AmountAfterPromotionDeduction',
      amountAfterSavingPlanDeduction: 'AmountAfterSavingPlanDeduction',
      billingDate: 'BillingDate',
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
      costCategories: 'CostCategories',
      couponAmount: 'CouponAmount',
      currency: 'Currency',
      financeUnitName: 'FinanceUnitName',
      hashKey: 'HashKey',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceSpec: 'InstanceSpec',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
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
      resourceGroup: 'ResourceGroup',
      resourceId: 'ResourceId',
      resourceOwnerAccountId: 'ResourceOwnerAccountId',
      resourceOwnerAccountName: 'ResourceOwnerAccountName',
      resourcePurchaseAccountId: 'ResourcePurchaseAccountId',
      resourcePurchaseAccountName: 'ResourcePurchaseAccountName',
      resourceTag: 'ResourceTag',
      savingPlanDeductAmount: 'SavingPlanDeductAmount',
      savingPlanDeductListPrice: 'SavingPlanDeductListPrice',
      serviceEntity: 'ServiceEntity',
      splitItemId: 'SplitItemId',
      splitItemName: 'SplitItemName',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountAfterCouponDeduction: 'string',
      amountAfterPromotionDeduction: 'string',
      amountAfterSavingPlanDeduction: 'string',
      billingDate: 'string',
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
      costCategories: 'string',
      couponAmount: 'string',
      currency: 'string',
      financeUnitName: 'string',
      hashKey: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceSpec: 'string',
      internetIp: 'string',
      intranetIp: 'string',
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
      resourceGroup: 'string',
      resourceId: 'string',
      resourceOwnerAccountId: 'string',
      resourceOwnerAccountName: 'string',
      resourcePurchaseAccountId: 'string',
      resourcePurchaseAccountName: 'string',
      resourceTag: 'string',
      savingPlanDeductAmount: 'string',
      savingPlanDeductListPrice: 'string',
      serviceEntity: 'string',
      splitItemId: 'string',
      splitItemName: 'string',
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

export class ListSplitSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of split bill summary records returned in this request. This array may be empty if no matching records are found.
   * 
   * @example
   * []
   */
  data?: ListSplitSummaryResponseBodyData[];
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
   * The token for querying the next page. If it is not empty, use it as the NextToken for the next request. If it is empty or not returned, the pagination ends. Even if the number of returned records is less than MaxResults or the current page is empty, you must continue to query as long as the token is not empty.
   * 
   * @example
   * opaque-token-example
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the request, which is used to locate the request.
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
      data: { 'type': 'array', 'itemType': ListSplitSummaryResponseBodyData },
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

