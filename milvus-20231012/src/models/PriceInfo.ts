// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PromotionInfo } from "./PromotionInfo";


export class PriceInfoPriceModules extends $dara.Model {
  /**
   * @remarks
   * The original amount of the price module.
   */
  originalAmount?: string;
  /**
   * @remarks
   * The type of the price module.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      originalAmount: 'originalAmount',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originalAmount: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceInfoRules extends $dara.Model {
  /**
   * @remarks
   * The amount associated with the pricing rule.
   */
  amount?: string;
  /**
   * @remarks
   * The name of the pricing rule.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the pricing rule.
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      name: 'name',
      ruleId: 'ruleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      name: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PriceInfo extends $dara.Model {
  /**
   * @remarks
   * The currency of the price.
   */
  currency?: string;
  /**
   * @remarks
   * The discount amount.
   */
  discountAmount?: string;
  /**
   * @remarks
   * The optional promotions.
   */
  optionalPromotions?: PromotionInfo[];
  /**
   * @remarks
   * The original price.
   */
  originalAmount?: string;
  /**
   * @remarks
   * The price modules.
   */
  priceModules?: PriceInfoPriceModules[];
  /**
   * @remarks
   * The pricing rules.
   */
  rules?: PriceInfoRules[];
  /**
   * @remarks
   * The tax amount.
   */
  taxAmount?: string;
  /**
   * @remarks
   * The actual trade price.
   */
  tradeAmount?: string;
  static names(): { [key: string]: string } {
    return {
      currency: 'currency',
      discountAmount: 'discountAmount',
      optionalPromotions: 'optionalPromotions',
      originalAmount: 'originalAmount',
      priceModules: 'priceModules',
      rules: 'rules',
      taxAmount: 'taxAmount',
      tradeAmount: 'tradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountAmount: 'string',
      optionalPromotions: { 'type': 'array', 'itemType': PromotionInfo },
      originalAmount: 'string',
      priceModules: { 'type': 'array', 'itemType': PriceInfoPriceModules },
      rules: { 'type': 'array', 'itemType': PriceInfoRules },
      taxAmount: 'string',
      tradeAmount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.optionalPromotions)) {
      $dara.Model.validateArray(this.optionalPromotions);
    }
    if(Array.isArray(this.priceModules)) {
      $dara.Model.validateArray(this.priceModules);
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

