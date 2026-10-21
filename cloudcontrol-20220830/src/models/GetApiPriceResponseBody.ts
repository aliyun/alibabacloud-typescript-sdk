// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PriceComponentsValue } from "./PriceComponentsValue";


export class GetApiPriceResponseBodyPricePriceSummaryModules extends $dara.Model {
  /**
   * @remarks
   * The billing dimension of this module, which is always explicitly output. Valid values: \\"recurring\\" for time-based fees, which are included in moduleSum and totalAmount; \\"usage\\" for usage-based fees, where costAfterDiscount is the usage unit price (CNY/usageUnit) and is not included in moduleSum, and the unit price is also provided in usageCharges.
   */
  billingMode?: string;
  costAfterDiscount?: number;
  /**
   * @remarks
   * The discount amount for this module. The value is calculated as invoiceDiscount = originalCost - costAfterDiscount and is precisely provided by the upstream BSS. Manual subtraction in tax-inclusive scenarios may cause precision loss.
   */
  invoiceDiscount?: number;
  moduleCode?: string;
  originalCost?: number;
  /**
   * @remarks
   * The estimated usage used for pricing this module. This field has a value only when the caller passes a usage greater than 1 through PricingContext. In this case, costAfterDiscount is the total cost for this usage rather than the unit price. Refer to usageCharges[].pricePerUnit for the normalized unit price. This field is empty when no estimated usage is passed.
   */
  quantityUsedForQuote?: number;
  /**
   * @remarks
   * The unit price of this module per billing unit, such as CNY/hour, CNY/month, or CNY/unit. This is used to explain the composition of costAfterDiscount in multi-quantity or multi-period scenarios.
   */
  unitPrice?: number;
  /**
   * @remarks
   * The usage unit, such as GB or CU. This field has a value when billingMode is \\"usage\\" and indicates the dimension of costAfterDiscount.
   */
  usageUnit?: string;
  static names(): { [key: string]: string } {
    return {
      billingMode: 'billingMode',
      costAfterDiscount: 'costAfterDiscount',
      invoiceDiscount: 'invoiceDiscount',
      moduleCode: 'moduleCode',
      originalCost: 'originalCost',
      quantityUsedForQuote: 'quantityUsedForQuote',
      unitPrice: 'unitPrice',
      usageUnit: 'usageUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMode: 'string',
      costAfterDiscount: 'number',
      invoiceDiscount: 'number',
      moduleCode: 'string',
      originalCost: 'number',
      quantityUsedForQuote: 'number',
      unitPrice: 'number',
      usageUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiPriceResponseBodyPricePriceSummaryUsageCharges extends $dara.Model {
  /**
   * @remarks
   * The estimated usage passed by the caller through PricingContext. This field has a value only when it is greater than 1. In this case, this entry also provides the assumedQuantityCost calculated based on this assumed usage.
   */
  assumedQuantity?: number;
  /**
   * @remarks
   * The module cost calculated based on assumedQuantity, which equals pricePerUnit × assumedQuantity. This cost is not included in totalAmount because it is based on the assumed usage reported by the caller and is not a cost necessarily incurred by this call.
   */
  assumedQuantityCost?: number;
  /**
   * @remarks
   * The billing module code, such as TrafficOut or NatCu. This corresponds to the moduleCode in modules.
   */
  moduleCode?: string;
  /**
   * @remarks
   * The original unit price before discounts, in CNY/unit, which is also normalized. This field is empty when not provided by the upstream. The difference between this value and pricePerUnit is the unit price discount for this module.
   */
  originalPricePerUnit?: number;
  /**
   * @remarks
   * The discounted unit price, in CNY/unit. The actual cost equals pricePerUnit × actual usage. Because the usage is unknown during pricing, it is not included in totalAmount. If the caller passed an estimated usage, the total returned by the upstream is normalized back to the unit price based on that usage.
   */
  pricePerUnit?: number;
  /**
   * @remarks
   * The usage unit, such as GB, CU, or 10,000 requests. This comes from the module-level billing.unit annotation in the mapping. The dimension of pricePerUnit is CNY/unit.
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      assumedQuantity: 'assumedQuantity',
      assumedQuantityCost: 'assumedQuantityCost',
      moduleCode: 'moduleCode',
      originalPricePerUnit: 'originalPricePerUnit',
      pricePerUnit: 'pricePerUnit',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedQuantity: 'number',
      assumedQuantityCost: 'number',
      moduleCode: 'string',
      originalPricePerUnit: 'number',
      pricePerUnit: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiPriceResponseBodyPricePriceSummary extends $dara.Model {
  /**
   * @remarks
   * The billing composition. Valid values: recurring_only (all time-based fees), usage_only (all usage-based fees, where a totalAmount of 0 indicates no fixed fees rather than free of charge, and actual costs depend on the unit price and actual usage in usageCharges), or mixed (both, which should be displayed separately). This allows the caller to choose the display text without iterating through modules to determine the composition.
   */
  chargeComposition?: string;
  currency?: string;
  effectiveModuleSum?: number;
  moduleSum?: number;
  modules?: GetApiPriceResponseBodyPricePriceSummaryModules[];
  /**
   * @remarks
   * The total original price before discounts for this pricing inquiry. When originalPrice differs from tradePrice or moduleSum, it indicates that a discount was applied, such as a first-purchase discount or a promotional campaign.
   */
  originalPrice?: number;
  /**
   * @remarks
   * The billing cycle unit, such as \\"Hour\\", \\"1 Month\\", \\"12 Month\\", or \\"GB·Month\\", which indicates the time dimension of moduleSum. This field is not returned in the BSS response and must be explicitly declared by the mapping maintainer in pricingTarget.pricingUnit. It is optional for subscription scenarios because the CLI infers it from Period and PeriodUnit. However, it is required for pay-as-you-go scenarios in the mapping; otherwise, the amount has no dimension.
   */
  pricingUnit?: string;
  /**
   * @remarks
   * The pricing quantity from OpenAPI input parameters, such as Amount in ECS RunInstances. The moduleSum is the unit price per instance, and effectiveModuleSum = moduleSum × quantity is the total price. The caller should present the actual total price for N instances to the user based on this value to avoid mistaking the unit price for the total price.
   */
  quantity?: number;
  tradePrice?: number;
  /**
   * @remarks
   * The list of unit prices for pay-as-you-go, usage-based modules, such as CNY/GB or CNY/CU. The amounts for these modules are not included in moduleSum or effectiveModuleSum. This field is empty when there are no usage-based modules.
   */
  usageCharges?: GetApiPriceResponseBodyPricePriceSummaryUsageCharges[];
  static names(): { [key: string]: string } {
    return {
      chargeComposition: 'chargeComposition',
      currency: 'currency',
      effectiveModuleSum: 'effectiveModuleSum',
      moduleSum: 'moduleSum',
      modules: 'modules',
      originalPrice: 'originalPrice',
      pricingUnit: 'pricingUnit',
      quantity: 'quantity',
      tradePrice: 'tradePrice',
      usageCharges: 'usageCharges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeComposition: 'string',
      currency: 'string',
      effectiveModuleSum: 'number',
      moduleSum: 'number',
      modules: { 'type': 'array', 'itemType': GetApiPriceResponseBodyPricePriceSummaryModules },
      originalPrice: 'number',
      pricingUnit: 'string',
      quantity: 'number',
      tradePrice: 'number',
      usageCharges: { 'type': 'array', 'itemType': GetApiPriceResponseBodyPricePriceSummaryUsageCharges },
    };
  }

  validate() {
    if(Array.isArray(this.modules)) {
      $dara.Model.validateArray(this.modules);
    }
    if(Array.isArray(this.usageCharges)) {
      $dara.Model.validateArray(this.usageCharges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiPriceResponseBodyPriceUsageCharges extends $dara.Model {
  /**
   * @remarks
   * The estimated usage passed by the caller through PricingContext. This field has a value only when it is greater than 1. In this case, this entry also provides the assumedQuantityCost calculated based on this assumed usage.
   */
  assumedQuantity?: number;
  /**
   * @remarks
   * The module cost calculated based on assumedQuantity, which equals pricePerUnit × assumedQuantity. This cost is not included in totalAmount because it is based on the assumed usage reported by the caller and is not a cost necessarily incurred by this call.
   */
  assumedQuantityCost?: number;
  /**
   * @remarks
   * The billing module code, such as TrafficOut or NatCu. This corresponds to the moduleCode in modules.
   */
  moduleCode?: string;
  /**
   * @remarks
   * The original unit price before discounts, in CNY/unit, which is also normalized. This field is empty when not provided by the upstream. The difference between this value and pricePerUnit is the unit price discount for this module.
   */
  originalPricePerUnit?: number;
  /**
   * @remarks
   * The discounted unit price, in CNY/unit. The actual cost equals pricePerUnit × actual usage. Because the usage is unknown during pricing, it is not included in totalAmount. If the caller passed an estimated usage, the total returned by the upstream is normalized back to the unit price based on that usage.
   */
  pricePerUnit?: number;
  /**
   * @remarks
   * The usage unit, such as GB, CU, or 10,000 requests. This comes from the module-level billing.unit annotation in the mapping. The dimension of pricePerUnit is CNY/unit.
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      assumedQuantity: 'assumedQuantity',
      assumedQuantityCost: 'assumedQuantityCost',
      moduleCode: 'moduleCode',
      originalPricePerUnit: 'originalPricePerUnit',
      pricePerUnit: 'pricePerUnit',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedQuantity: 'number',
      assumedQuantityCost: 'number',
      moduleCode: 'string',
      originalPricePerUnit: 'number',
      pricePerUnit: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiPriceResponseBodyPrice extends $dara.Model {
  /**
   * @remarks
   * The common billing dimension for fixed fees, including totalAmount, originalAmount, and discountAmount. This is a canonical field, such as \\"Hour\\" or \\"1 Month\\", derived from the pricingUnit declared in the mapping. It is empty if not declared. This field describes only the dimension for fixed fees. The pay-as-you-go billing method components each have their own unit (see usageCharges[].unit).
   */
  billingUnit?: string;
  calculatedAmount?: number;
  /**
   * @remarks
   * The billing composition. This is a canonical field. Valid values: recurring_only (all time-based fees), usage_only (all usage-based fees, where a totalAmount of 0 indicates no fixed fees rather than free of charge, and actual costs depend on the unit price and actual usage in usageCharges), or mixed (both, which should be displayed separately as \\"X CNY/hour + Y CNY/GB\\"). This allows the caller to choose the display text without iterating through modules to determine the composition.
   */
  chargeComposition?: string;
  /**
   * @remarks
   * The details of each pricing call in composite or delta mode. The key is the priceCall ID, such as prepaid, postpaid, or a custom ID. This field is empty in single mode. The calculatedAmount is the aggregated result of each component based on the priceCalculation expression. The components field exposes the line items so that the caller can view the composition, such as instance fees versus storage fees.
   */
  components?: { [key: string]: PriceComponentsValue };
  currency?: string;
  /**
   * @remarks
   * The total discount amount for fixed fees. This is a canonical field calculated as originalAmount - totalAmount. It includes only discounts for fixed fees and excludes the pay-as-you-go billing method. The value is 0 when there is no discount and empty when the original price is missing.
   */
  discountAmount?: number;
  /**
   * @remarks
   * The error code when upstream pricing fails, such as InvalidParameter or COMMODITY.INVALID_COMPONENT. This field is empty when success is true.
   */
  errorCode?: string;
  /**
   * @remarks
   * The error description when upstream pricing fails. This facilitates self-troubleshooting of specific parameter issues by the caller. This field is empty when success is true.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The total original price before discounts for fixed fees. This is a canonical field with the same scope as totalAmount. It includes only fixed fees and excludes the pay-as-you-go billing method. Refer to usageCharges[].originalPricePerUnit for the pre-discount unit price of the pay-as-you-go billing method. The difference between this value and totalAmount is the total discount for this inquiry. This field is empty when the upstream does not provide original price information.
   */
  originalAmount?: number;
  priceSummary?: GetApiPriceResponseBodyPricePriceSummary;
  pricingMode?: string;
  success?: boolean;
  /**
   * @remarks
   * The periodic payable amount for fixed fees in this pricing inquiry (canonical field). For the unit of measurement, see billingUnit. **This field includes only fixed fees**. Usage-based charges (such as traffic in CNY/GB or CUs in CNY/CU) have different units of measurement and cannot be added to this field. For the unit prices of usage-based charges, see usageCharges. To check whether both types of charges exist, see chargeComposition. In single mode, this value is derived from priceSummary.effectiveModuleSum (falling back to tradePrice if missing). In composite or delta mode, this value is derived from calculatedAmount. This field always has a value when success is true.
   */
  totalAmount?: number;
  /**
   * @remarks
   * The request ID of the upstream pricing API (such as the RequestId of BSS GetSubscriptionPrice). This field is populated regardless of whether the request succeeds or fails, and is used for audit reconciliation and upstream log tracing.
   */
  upstreamRequestId?: string;
  /**
   * @remarks
   * The list of unit prices for usage-based billing modules (canonical field). Modules billed by actual usage, such as traffic and NAT CUs, have different units of measurement (such as CNY/GB or CNY/CU) from billingUnit and are not included in totalAmount. This field provides the unit price for each item. In single mode, the values are derived from priceSummary. In composite or delta mode, the values are concatenated from each component in the order of priceCall. This field is empty when the mapping contains no usage-based modules.
   */
  usageCharges?: GetApiPriceResponseBodyPriceUsageCharges[];
  static names(): { [key: string]: string } {
    return {
      billingUnit: 'billingUnit',
      calculatedAmount: 'calculatedAmount',
      chargeComposition: 'chargeComposition',
      components: 'components',
      currency: 'currency',
      discountAmount: 'discountAmount',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      originalAmount: 'originalAmount',
      priceSummary: 'priceSummary',
      pricingMode: 'pricingMode',
      success: 'success',
      totalAmount: 'totalAmount',
      upstreamRequestId: 'upstreamRequestId',
      usageCharges: 'usageCharges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingUnit: 'string',
      calculatedAmount: 'number',
      chargeComposition: 'string',
      components: { 'type': 'map', 'keyType': 'string', 'valueType': PriceComponentsValue },
      currency: 'string',
      discountAmount: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      originalAmount: 'number',
      priceSummary: GetApiPriceResponseBodyPricePriceSummary,
      pricingMode: 'string',
      success: 'boolean',
      totalAmount: 'number',
      upstreamRequestId: 'string',
      usageCharges: { 'type': 'array', 'itemType': GetApiPriceResponseBodyPriceUsageCharges },
    };
  }

  validate() {
    if(this.components) {
      $dara.Model.validateMap(this.components);
    }
    if(this.priceSummary && typeof (this.priceSummary as any).validate === 'function') {
      (this.priceSummary as any).validate();
    }
    if(Array.isArray(this.usageCharges)) {
      $dara.Model.validateArray(this.usageCharges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pricing result code. Valid values: Success, PricingNotRequired, PricingNotSupported, or an upstream pricing failure code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The server-side pricing result description. The language is specified by the language parameter in the request body and defaults to Chinese.
   * 
   * @example
   * Pricing succeeded
   */
  message?: string;
  /**
   * @remarks
   * The pricing data. This field is omitted for PricingNotRequired and PricingNotSupported results that do not include pricing.
   * 
   * **if can be null:**
   * true
   */
  price?: GetApiPriceResponseBodyPrice;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether a valid pricing result is obtained. The value is true for normal pricing and when no pricing inquiry is required, and false when pricing is not supported or the pricing inquiry fails.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      price: 'price',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      price: GetApiPriceResponseBodyPrice,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.price && typeof (this.price as any).validate === 'function') {
      (this.price as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

