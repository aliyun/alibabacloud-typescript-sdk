// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetPriceResponseBodyPriceModuleDetails extends $dara.Model {
  /**
   * @remarks
   * The discount price.
   * 
   * @example
   * 0.02
   */
  costAfterDiscount?: number;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0.0
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The code of the pricing module.
   * 
   * @example
   * InstanceRent
   */
  moduleCode?: string;
  /**
   * @remarks
   * The name of the pricing module.
   * 
   * @example
   * InstanceRent
   */
  moduleName?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 1000.0
   */
  originalCost?: number;
  /**
   * @remarks
   * The price type.
   * 
   * @example
   * 1.0
   */
  priceType?: string;
  static names(): { [key: string]: string } {
    return {
      costAfterDiscount: 'costAfterDiscount',
      invoiceDiscount: 'invoiceDiscount',
      moduleCode: 'moduleCode',
      moduleName: 'moduleName',
      originalCost: 'originalCost',
      priceType: 'priceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costAfterDiscount: 'number',
      invoiceDiscount: 'number',
      moduleCode: 'string',
      moduleName: 'string',
      originalCost: 'number',
      priceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceResponseBodyPricePromotionDetails extends $dara.Model {
  /**
   * @remarks
   * The description of the promotion.
   * 
   * @example
   * 37284
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The ID of the promotion.
   */
  promotionId?: number;
  /**
   * @remarks
   * The name of the promotion.
   */
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'promotionDesc',
      promotionId: 'promotionId',
      promotionName: 'promotionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDesc: 'string',
      promotionId: 'number',
      promotionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceResponseBodyPrice extends $dara.Model {
  /**
   * @remarks
   * The currency type. Valid values: CNY: Chinese Yuan. USD: US dollar. JPY: Japanese Yen.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 0.0
   */
  discountPrice?: number;
  /**
   * @remarks
   * The order details of the pricing module.
   */
  moduleDetails?: GetPriceResponseBodyPriceModuleDetails[];
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 760.0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The details of the promotion.
   */
  promotionDetails?: GetPriceResponseBodyPricePromotionDetails[];
  /**
   * @remarks
   * The discount price.
   * 
   * @example
   * 0.0
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'currency',
      discountPrice: 'discountPrice',
      moduleDetails: 'moduleDetails',
      originalPrice: 'originalPrice',
      promotionDetails: 'promotionDetails',
      tradePrice: 'tradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      moduleDetails: { 'type': 'array', 'itemType': GetPriceResponseBodyPriceModuleDetails },
      originalPrice: 'number',
      promotionDetails: { 'type': 'array', 'itemType': GetPriceResponseBodyPricePromotionDetails },
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.moduleDetails)) {
      $dara.Model.validateArray(this.moduleDetails);
    }
    if(Array.isArray(this.promotionDetails)) {
      $dara.Model.validateArray(this.promotionDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The price.
   */
  price?: GetPriceResponseBodyPrice;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
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
      price: GetPriceResponseBodyPrice,
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

