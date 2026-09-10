// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class PriceComponentsValueModules extends $dara.Model {
  moduleCode?: string;
  costAfterDiscount?: number;
  originalCost?: number;
  invoiceDiscount?: number;
  unitPrice?: number;
  billingMode?: string;
  usageUnit?: string;
  quantityUsedForQuote?: number;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'moduleCode',
      costAfterDiscount: 'costAfterDiscount',
      originalCost: 'originalCost',
      invoiceDiscount: 'invoiceDiscount',
      unitPrice: 'unitPrice',
      billingMode: 'billingMode',
      usageUnit: 'usageUnit',
      quantityUsedForQuote: 'quantityUsedForQuote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      costAfterDiscount: 'number',
      originalCost: 'number',
      invoiceDiscount: 'number',
      unitPrice: 'number',
      billingMode: 'string',
      usageUnit: 'string',
      quantityUsedForQuote: 'number',
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
  moduleCode?: string;
  unit?: string;
  pricePerUnit?: number;
  originalPricePerUnit?: number;
  assumedQuantity?: number;
  assumedQuantityCost?: number;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'moduleCode',
      unit: 'unit',
      pricePerUnit: 'pricePerUnit',
      originalPricePerUnit: 'originalPricePerUnit',
      assumedQuantity: 'assumedQuantity',
      assumedQuantityCost: 'assumedQuantityCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      unit: 'string',
      pricePerUnit: 'number',
      originalPricePerUnit: 'number',
      assumedQuantity: 'number',
      assumedQuantityCost: 'number',
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
  currency?: string;
  tradePrice?: number;
  originalPrice?: number;
  moduleSum?: number;
  effectiveModuleSum?: number;
  quantity?: number;
  pricingUnit?: string;
  modules?: PriceComponentsValueModules[];
  usageCharges?: PriceComponentsValueUsageCharges[];
  chargeComposition?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'currency',
      tradePrice: 'tradePrice',
      originalPrice: 'originalPrice',
      moduleSum: 'moduleSum',
      effectiveModuleSum: 'effectiveModuleSum',
      quantity: 'quantity',
      pricingUnit: 'pricingUnit',
      modules: 'modules',
      usageCharges: 'usageCharges',
      chargeComposition: 'chargeComposition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      tradePrice: 'number',
      originalPrice: 'number',
      moduleSum: 'number',
      effectiveModuleSum: 'number',
      quantity: 'number',
      pricingUnit: 'string',
      modules: { 'type': 'array', 'itemType': PriceComponentsValueModules },
      usageCharges: { 'type': 'array', 'itemType': PriceComponentsValueUsageCharges },
      chargeComposition: 'string',
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

