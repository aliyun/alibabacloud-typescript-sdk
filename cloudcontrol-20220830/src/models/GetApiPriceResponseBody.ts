// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PriceComponentsValue } from "./PriceComponentsValue";


export class GetApiPriceResponseBodyPricePriceSummaryModules extends $dara.Model {
  billingMode?: string;
  costAfterDiscount?: number;
  invoiceDiscount?: number;
  moduleCode?: string;
  originalCost?: number;
  quantityUsedForQuote?: number;
  unitPrice?: number;
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
  assumedQuantity?: number;
  assumedQuantityCost?: number;
  moduleCode?: string;
  originalPricePerUnit?: number;
  pricePerUnit?: number;
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
  chargeComposition?: string;
  currency?: string;
  effectiveModuleSum?: number;
  moduleSum?: number;
  modules?: GetApiPriceResponseBodyPricePriceSummaryModules[];
  originalPrice?: number;
  pricingUnit?: string;
  quantity?: number;
  tradePrice?: number;
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
  assumedQuantity?: number;
  assumedQuantityCost?: number;
  moduleCode?: string;
  originalPricePerUnit?: number;
  pricePerUnit?: number;
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
  billingUnit?: string;
  calculatedAmount?: number;
  chargeComposition?: string;
  components?: { [key: string]: PriceComponentsValue };
  currency?: string;
  discountAmount?: number;
  errorCode?: string;
  errorMessage?: string;
  originalAmount?: number;
  priceSummary?: GetApiPriceResponseBodyPricePriceSummary;
  pricingMode?: string;
  success?: boolean;
  totalAmount?: number;
  upstreamRequestId?: string;
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
  price?: GetApiPriceResponseBodyPrice;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      price: 'price',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      price: GetApiPriceResponseBodyPrice,
      requestId: 'string',
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

