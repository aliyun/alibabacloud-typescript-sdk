// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValuateTemplateResponseBodyDataResourceListPriceList extends $dara.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 82.99
   */
  discountAmount?: number;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * ServiceUnavailable : The request has failed due to a temporary failure of the server.\\r\\nRequestId : 4AA302DB-3286-5589-8637-FF6D8507B7A9.
   */
  error?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * eip
   */
  nodeType?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 83.0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The pricing unit.
   * 
   * @example
   * USD
   */
  priceUnit?: string;
  /**
   * @remarks
   * The discount information.
   * 
   * @example
   * The discount information.
   */
  promotionName?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 1687225092
   */
  resourceId?: string;
  /**
   * @remarks
   * The price at which the transaction is made.
   * 
   * @example
   * 0.01
   */
  tradePrice?: number;
  /**
   * @remarks
   * Indicates whether the instance is newly created. Valid values:\\
   * 1: The instance is newly created.\\
   * 2: The instance already exists.\\
   * 0: The price of the instance is not included.
   * 
   * @example
   * "1"
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      error: 'Error',
      nodeType: 'NodeType',
      originalPrice: 'OriginalPrice',
      priceUnit: 'PriceUnit',
      promotionName: 'PromotionName',
      resourceId: 'ResourceId',
      tradePrice: 'TradePrice',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      error: 'string',
      nodeType: 'string',
      originalPrice: 'number',
      priceUnit: 'string',
      promotionName: 'string',
      resourceId: 'string',
      tradePrice: 'number',
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

export class ValuateTemplateResponseBodyDataResourceList extends $dara.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 73
   */
  discountAmount?: number;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * InvalidSaleComponentFault : The request not refer to the correct order sale component.
   */
  error?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ecs
   */
  nodeType?: string;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 83.0
   */
  originalPrice?: number;
  /**
   * @remarks
   * The information about the price.
   */
  priceList?: ValuateTemplateResponseBodyDataResourceListPriceList[];
  /**
   * @remarks
   * The pricing unit.
   * 
   * @example
   * USD
   */
  priceUnit?: string;
  /**
   * @remarks
   * The discount information.
   * 
   * @example
   * The discount information.
   */
  promotionName?: string;
  /**
   * @remarks
   * The price at which the transaction is made.
   * 
   * @example
   * 10.0
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      error: 'Error',
      nodeType: 'NodeType',
      originalPrice: 'OriginalPrice',
      priceList: 'PriceList',
      priceUnit: 'PriceUnit',
      promotionName: 'PromotionName',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      error: 'string',
      nodeType: 'string',
      originalPrice: 'number',
      priceList: { 'type': 'array', 'itemType': ValuateTemplateResponseBodyDataResourceListPriceList },
      priceUnit: 'string',
      promotionName: 'string',
      tradePrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.priceList)) {
      $dara.Model.validateArray(this.priceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The result set of the inquiry.
   */
  resourceList?: ValuateTemplateResponseBodyDataResourceList[];
  static names(): { [key: string]: string } {
    return {
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceList: { 'type': 'array', 'itemType': ValuateTemplateResponseBodyDataResourceList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result of the inquiry.
   */
  data?: ValuateTemplateResponseBodyData;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 847C9D0A-BABD-589C-8A9C-6464409EDED9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ValuateTemplateResponseBodyData,
      message: 'string',
      requestId: 'string',
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

