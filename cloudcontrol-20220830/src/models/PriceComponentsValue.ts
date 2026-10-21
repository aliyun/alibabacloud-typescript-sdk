// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class PriceComponentsValueModules extends $dara.Model {
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

export class PriceComponentsValueUsageCharges extends $dara.Model {
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

export class PriceComponentsValue extends $dara.Model {
  /**
   * @remarks
   * The billing composition. Valid values: recurring_only (all time-based fees), usage_only (all usage-based fees, where a totalAmount of 0 indicates no fixed fees rather than free of charge, and actual costs depend on the unit price and actual usage in usageCharges), or mixed (both, which should be displayed separately). This allows the caller to choose the display text without iterating through modules to determine the composition.
   */
  chargeComposition?: string;
  currency?: string;
  effectiveModuleSum?: number;
  moduleSum?: number;
  modules?: PriceComponentsValueModules[];
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
  usageCharges?: PriceComponentsValueUsageCharges[];
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
      modules: { 'type': 'array', 'itemType': PriceComponentsValueModules },
      originalPrice: 'number',
      pricingUnit: 'string',
      quantity: 'number',
      tradePrice: 'number',
      usageCharges: { 'type': 'array', 'itemType': PriceComponentsValueUsageCharges },
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

