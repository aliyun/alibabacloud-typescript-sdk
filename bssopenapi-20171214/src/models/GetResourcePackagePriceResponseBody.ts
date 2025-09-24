// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourcePackagePriceResponseBodyDataPromotionsPromotion extends $dara.Model {
  /**
   * @remarks
   * The ID of the promotion.
   * 
   * @example
   * 1000680914
   */
  id?: number;
  /**
   * @remarks
   * The description of the discount.
   * 
   * @example
   * A discount of 17% is offered if you purchase a resource plan for six months.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponseBodyDataPromotions extends $dara.Model {
  promotion?: GetResourcePackagePriceResponseBodyDataPromotionsPromotion[];
  static names(): { [key: string]: string } {
    return {
      promotion: 'Promotion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotion: { 'type': 'array', 'itemType': GetResourcePackagePriceResponseBodyDataPromotionsPromotion },
    };
  }

  validate() {
    if(Array.isArray(this.promotion)) {
      $dara.Model.validateArray(this.promotion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discounted amount. Unit: CNY.
   * 
   * @example
   * 215040
   */
  discountPrice?: number;
  /**
   * @remarks
   * The original price. Unit: CNY.
   * 
   * @example
   * 1290240
   */
  originalPrice?: number;
  /**
   * @remarks
   * The details of the discount.
   */
  promotions?: GetResourcePackagePriceResponseBodyDataPromotions;
  /**
   * @remarks
   * The price at which the transaction is made. Unit: CNY.
   * 
   * @example
   * 1075200
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalPrice: 'OriginalPrice',
      promotions: 'Promotions',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      originalPrice: 'number',
      promotions: GetResourcePackagePriceResponseBodyDataPromotions,
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.promotions && typeof (this.promotions as any).validate === 'function') {
      (this.promotions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcePackagePriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetResourcePackagePriceResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BBEF51A3-E933-4F40-A534-C673CBDB9C80
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
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
      data: GetResourcePackagePriceResponseBodyData,
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

