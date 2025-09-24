// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPayAsYouGoPriceResponseBodyDataModuleDetailsModuleDetail extends $dara.Model {
  /**
   * @remarks
   * The discount price.
   * 
   * @example
   * 100
   */
  costAfterDiscount?: number;
  /**
   * @remarks
   * The discount that was applied.
   * 
   * @example
   * 20
   */
  invoiceDiscount?: number;
  /**
   * @remarks
   * The code of the pricing module.
   * 
   * @example
   * InstanceType
   */
  moduleCode?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 1.77
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

export class GetPayAsYouGoPriceResponseBodyDataModuleDetails extends $dara.Model {
  moduleDetail?: GetPayAsYouGoPriceResponseBodyDataModuleDetailsModuleDetail[];
  static names(): { [key: string]: string } {
    return {
      moduleDetail: 'ModuleDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleDetail: { 'type': 'array', 'itemType': GetPayAsYouGoPriceResponseBodyDataModuleDetailsModuleDetail },
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

export class GetPayAsYouGoPriceResponseBodyDataPromotionDetailsPromotionDetail extends $dara.Model {
  /**
   * @remarks
   * The description of the discount.
   * 
   * @example
   * This discount allows you to use a service at the minimum price and is provided for testing purposes only.
   */
  promotionDesc?: string;
  /**
   * @remarks
   * The ID of the discount.
   * 
   * @example
   * 10200210
   */
  promotionId?: number;
  /**
   * @remarks
   * The name of the discount.
   * 
   * @example
   * This discount allows you to use a service at the minimum price and is provided for testing purposes only.
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

export class GetPayAsYouGoPriceResponseBodyDataPromotionDetails extends $dara.Model {
  promotionDetail?: GetPayAsYouGoPriceResponseBodyDataPromotionDetailsPromotionDetail[];
  static names(): { [key: string]: string } {
    return {
      promotionDetail: 'PromotionDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionDetail: { 'type': 'array', 'itemType': GetPayAsYouGoPriceResponseBodyDataPromotionDetailsPromotionDetail },
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

export class GetPayAsYouGoPriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The type of the currency. Valid values:
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
   * The price details of the pricing module.
   */
  moduleDetails?: GetPayAsYouGoPriceResponseBodyDataModuleDetails;
  /**
   * @remarks
   * The details of the discount.
   */
  promotionDetails?: GetPayAsYouGoPriceResponseBodyDataPromotionDetails;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      moduleDetails: 'ModuleDetails',
      promotionDetails: 'PromotionDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      moduleDetails: GetPayAsYouGoPriceResponseBodyDataModuleDetails,
      promotionDetails: GetPayAsYouGoPriceResponseBodyDataPromotionDetails,
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

export class GetPayAsYouGoPriceResponseBody extends $dara.Model {
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
  data?: GetPayAsYouGoPriceResponseBodyData;
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
   * 1537A007-72D7-4165-8A26-8694A38E219A
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
      data: GetPayAsYouGoPriceResponseBodyData,
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

