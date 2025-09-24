// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionPriceResponseBodyDataModuleDetailsModuleDetail extends $dara.Model {
  /**
   * @remarks
   * The discount price.
   * 
   * @example
   * 0
   */
  costAfterDiscount?: number;
  /**
   * @remarks
   * The discount that was applied.
   * 
   * @example
   * 100
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The identifier of the pricing module.
   * 
   * @example
   * PackageCode
   */
  moduleCode?: string;
  /**
   * @remarks
   * The original price of the service.
   * 
   * @example
   * 200
   */
  originalCost?: number;
  /**
   * @remarks
   * The unit price.
   * 
   * @example
   * 0
   */
  unitPrice?: number;
  static names(): { [key: string]: string } {
    return {
      costAfterDiscount: 'CostAfterDiscount',
      invoiceDiscount: 'InvoiceDiscount',
      moduleCode: 'ModuleCode',
      originalCost: 'OriginalCost',
      unitPrice: 'UnitPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costAfterDiscount: 'number',
      invoiceDiscount: 'number',
      moduleCode: 'string',
      originalCost: 'number',
      unitPrice: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyDataModuleDetails extends $dara.Model {
  moduleDetail?: GetSubscriptionPriceResponseBodyDataModuleDetailsModuleDetail[];
  static names(): { [key: string]: string } {
    return {
      moduleDetail: 'ModuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleDetail: { 'type': 'array', 'itemType': GetSubscriptionPriceResponseBodyDataModuleDetailsModuleDetail },
    };
  }

  validate() {
    if(Array.isArray(this.moduleDetail)) {
      $dara.Model.validateArray(this.moduleDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyDataPromotionDetailsPromotionDetail extends $dara.Model {
  /**
   * @remarks
   * The description of the discount.
   * 
   * @example
   * test
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The ID of the discount.
   * 
   * @example
   * 1021199213
   */
  promotionId?: number;
  /**
   * @remarks
   * The name of the discount.
   * 
   * @example
   * test
   */
  promotionName?: string;
  static names(): { [key: string]: string } {
    return {
      promotionDesc: 'PromotionDesc',
      promotionId: 'PromotionId',
      promotionName: 'PromotionName',
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

export class GetSubscriptionPriceResponseBodyDataPromotionDetails extends $dara.Model {
  promotionDetail?: GetSubscriptionPriceResponseBodyDataPromotionDetailsPromotionDetail[];
  static names(): { [key: string]: string } {
    return {
      promotionDetail: 'PromotionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDetail: { 'type': 'array', 'itemType': GetSubscriptionPriceResponseBodyDataPromotionDetailsPromotionDetail },
    };
  }

  validate() {
    if(Array.isArray(this.promotionDetail)) {
      $dara.Model.validateArray(this.promotionDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of currency. Valid values:
   * 
   * *   CNY: Chinese Yuan
   * *   USD: US dollar
   * *   JPY: Japanese Yen
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The discount that was applied.
   * 
   * @example
   * 100
   */
  discountPrice?: number;
  /**
   * @remarks
   * The price details of the pricing module.
   */
  moduleDetails?: GetSubscriptionPriceResponseBodyDataModuleDetails;
  /**
   * @remarks
   * The original price of the service.
   * 
   * @example
   * 900
   */
  originalPrice?: number;
  /**
   * @remarks
   * The details of the discount.
   */
  promotionDetails?: GetSubscriptionPriceResponseBodyDataPromotionDetails;
  /**
   * @remarks
   * The quantity.
   * 
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @remarks
   * The discount price.
   * 
   * @example
   * 0
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      moduleDetails: 'ModuleDetails',
      originalPrice: 'OriginalPrice',
      promotionDetails: 'PromotionDetails',
      quantity: 'Quantity',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      discountPrice: 'number',
      moduleDetails: GetSubscriptionPriceResponseBodyDataModuleDetails,
      originalPrice: 'number',
      promotionDetails: GetSubscriptionPriceResponseBodyDataPromotionDetails,
      quantity: 'number',
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.moduleDetails && typeof (this.moduleDetails as any).validate === 'function') {
      (this.moduleDetails as any).validate();
    }
    if(this.promotionDetails && typeof (this.promotionDetails as any).validate === 'function') {
      (this.promotionDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * InvalidConfigCod
   */
  code?: string;
  /**
   * @remarks
   * The information about the service price.
   */
  data?: GetSubscriptionPriceResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 30E7066E-AE6F-4E59-AFE6-11386CE3AFA7
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
      data: GetSubscriptionPriceResponseBodyData,
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

