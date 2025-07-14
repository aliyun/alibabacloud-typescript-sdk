// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigurationPriceResponseBodyDataBagUsage extends $dara.Model {
  /**
   * @remarks
   * The available CPU capacity. Unit: cores \\*.
   * 
   * @example
   * 497570.450009
   */
  cpu?: number;
  cu?: number;
  /**
   * @remarks
   * The available memory size. Unit: GiB ×.
   * 
   * @example
   * 989802.563546
   */
  mem?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      cu: 'Cu',
      mem: 'Mem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      cu: 'number',
      mem: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataCpuMemPriceOrder extends $dara.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0.0009259
   */
  discountAmount?: number;
  /**
   * @remarks
   * The original price.
   * 
   * @example
   * 0.0046296
   */
  originalAmount?: number;
  /**
   * @remarks
   * The ID of the discount rule.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The final price of the order.
   * 
   * @example
   * 0.0037037
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tradeAmount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataCpuMemPriceRules extends $dara.Model {
  /**
   * @remarks
   * The name of discount rule.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the discount rule.
   * 
   * @example
   * 2000010******
   */
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataCpuMemPrice extends $dara.Model {
  /**
   * @remarks
   * The information about pricing.
   */
  order?: DescribeConfigurationPriceResponseBodyDataCpuMemPriceOrder;
  /**
   * @remarks
   * The discount rules.
   */
  rules?: DescribeConfigurationPriceResponseBodyDataCpuMemPriceRules[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribeConfigurationPriceResponseBodyDataCpuMemPriceOrder,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataCpuMemPriceRules },
    };
  }

  validate() {
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
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

export class DescribeConfigurationPriceResponseBodyDataOrder extends $dara.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0.0018518
   */
  discountAmount?: number;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 0.0092592
   */
  originalAmount?: number;
  /**
   * @remarks
   * The ID of the promotion rule.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The transaction price.
   * 
   * @example
   * 0.0074074
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tradeAmount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataRequestPriceOrder extends $dara.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0.0009259
   */
  discountAmount?: number;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 0.0046296
   */
  originalAmount?: number;
  /**
   * @remarks
   * The ID of the discount rule.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The actual price of the order.
   * 
   * @example
   * 0.0037037
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tradeAmount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataRequestPriceRules extends $dara.Model {
  /**
   * @remarks
   * The name of the discount rule.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the discount policy.
   * 
   * @example
   * 2000010******
   */
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataRequestPrice extends $dara.Model {
  /**
   * @remarks
   * The information about pricing.
   */
  order?: DescribeConfigurationPriceResponseBodyDataRequestPriceOrder;
  /**
   * @remarks
   * The discount rule.
   */
  rules?: DescribeConfigurationPriceResponseBodyDataRequestPriceRules[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribeConfigurationPriceResponseBodyDataRequestPriceOrder,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataRequestPriceRules },
    };
  }

  validate() {
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
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

export class DescribeConfigurationPriceResponseBodyDataRules extends $dara.Model {
  /**
   * @remarks
   * The name of the promotion rule.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the promotion rule.
   * 
   * @example
   * 2000010******
   */
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataTrafficPriceOrder extends $dara.Model {
  /**
   * @remarks
   * The discount amount.
   * 
   * @example
   * 0.0009259
   */
  discountAmount?: number;
  /**
   * @remarks
   * The original price of the order.
   * 
   * @example
   * 0.0046296
   */
  originalAmount?: number;
  /**
   * @remarks
   * The ID of the discount rule.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The final price of the order.
   * 
   * @example
   * 0.0037037
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      ruleIds: 'RuleIds',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      ruleIds: { 'type': 'array', 'itemType': 'string' },
      tradeAmount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleIds)) {
      $dara.Model.validateArray(this.ruleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataTrafficPriceRules extends $dara.Model {
  /**
   * @remarks
   * The name of the discount rule.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the discount rule.
   * 
   * @example
   * 2000010******
   */
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBodyDataTrafficPrice extends $dara.Model {
  /**
   * @remarks
   * The information about pricing.
   */
  order?: DescribeConfigurationPriceResponseBodyDataTrafficPriceOrder;
  /**
   * @remarks
   * The discount rule.
   */
  rules?: DescribeConfigurationPriceResponseBodyDataTrafficPriceRules[];
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: DescribeConfigurationPriceResponseBodyDataTrafficPriceOrder,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataTrafficPriceRules },
    };
  }

  validate() {
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
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

export class DescribeConfigurationPriceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The remaining capacity of the resource plan.
   */
  bagUsage?: DescribeConfigurationPriceResponseBodyDataBagUsage;
  /**
   * @remarks
   * The price of CPU and memory.
   */
  cpuMemPrice?: DescribeConfigurationPriceResponseBodyDataCpuMemPrice;
  /**
   * @remarks
   * The information about pricing.
   */
  order?: DescribeConfigurationPriceResponseBodyDataOrder;
  /**
   * @remarks
   * The price based on the number of requests.
   */
  requestPrice?: DescribeConfigurationPriceResponseBodyDataRequestPrice;
  /**
   * @remarks
   * The promotion rules.
   */
  rules?: DescribeConfigurationPriceResponseBodyDataRules[];
  /**
   * @remarks
   * The traffic price.
   */
  trafficPrice?: DescribeConfigurationPriceResponseBodyDataTrafficPrice;
  static names(): { [key: string]: string } {
    return {
      bagUsage: 'BagUsage',
      cpuMemPrice: 'CpuMemPrice',
      order: 'Order',
      requestPrice: 'RequestPrice',
      rules: 'Rules',
      trafficPrice: 'TrafficPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bagUsage: DescribeConfigurationPriceResponseBodyDataBagUsage,
      cpuMemPrice: DescribeConfigurationPriceResponseBodyDataCpuMemPrice,
      order: DescribeConfigurationPriceResponseBodyDataOrder,
      requestPrice: DescribeConfigurationPriceResponseBodyDataRequestPrice,
      rules: { 'type': 'array', 'itemType': DescribeConfigurationPriceResponseBodyDataRules },
      trafficPrice: DescribeConfigurationPriceResponseBodyDataTrafficPrice,
    };
  }

  validate() {
    if(this.bagUsage && typeof (this.bagUsage as any).validate === 'function') {
      (this.bagUsage as any).validate();
    }
    if(this.cpuMemPrice && typeof (this.cpuMemPrice as any).validate === 'function') {
      (this.cpuMemPrice as any).validate();
    }
    if(this.order && typeof (this.order as any).validate === 'function') {
      (this.order as any).validate();
    }
    if(this.requestPrice && typeof (this.requestPrice as any).validate === 'function') {
      (this.requestPrice as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(this.trafficPrice && typeof (this.trafficPrice as any).validate === 'function') {
      (this.trafficPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConfigurationPriceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The request was successful.
   * *   **3xx**: The request was redirected.
   * *   **4xx**: The request failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The price.
   */
  data?: DescribeConfigurationPriceResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   If the request was successful, **ErrorCode** is not returned.
   * *   If the request failed, **ErrorCode** is returned. For more information, see **Error codes** in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned. Valid values:
   * 
   * *   If the request was successful, **success** is returned.
   * *   If the request failed, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ADCEC067-86AD-19E2-BD43-E83F3841****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the configuration price was obtained.
   * 
   * *   **true**: The price was obtained.
   * *   **false**: The price failed to be queried.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the trace.
   * 
   * @example
   * 1a0dcc771722848598056771******
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeConfigurationPriceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

