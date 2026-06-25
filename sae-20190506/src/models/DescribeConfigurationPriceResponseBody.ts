// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigurationPriceResponseBodyDataBagUsage extends $dara.Model {
  /**
   * @remarks
   * The remaining CPU quota. Unit: core-hours.
   * 
   * @example
   * 497570.450009
   */
  cpu?: number;
  /**
   * @remarks
   * The remaining computing units (CUs) of the resource plan.
   * 
   * @example
   * 10000
   */
  cu?: number;
  /**
   * @remarks
   * The remaining memory quota. Unit: GiB-hours.
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
   * The discount amount of the order.
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
   * The rule ID.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The actual transaction price of the order.
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
   * The name of the rule.
   * 
   * @example
   * 20% discount on pay-as-you-go
   */
  name?: string;
  /**
   * @remarks
   * The rule ID.
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
   * The pricing information.
   */
  order?: DescribeConfigurationPriceResponseBodyDataCpuMemPriceOrder;
  /**
   * @remarks
   * The promotion rules.
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
   * The discount amount of the order.
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
   * The promotion ID.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The final price of the order.
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
   * The discount amount of the order.
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
   * The rule ID.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The actual transaction price of the order.
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
   * The name of the rule.
   * 
   * @example
   * 20% discount on pay-as-you-go
   */
  name?: string;
  /**
   * @remarks
   * The policy ID.
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
   * The pricing information.
   */
  order?: DescribeConfigurationPriceResponseBodyDataRequestPriceOrder;
  /**
   * @remarks
   * The promotion rules.
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
   * The name of the rule.
   * 
   * @example
   * 20% discount on pay-as-you-go
   */
  name?: string;
  /**
   * @remarks
   * The rule ID.
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
   * The discount amount of the order.
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
   * The promotion ID.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The actual transaction price of the order.
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
   * The name of the rule.
   * 
   * @example
   * 20% discount on pay-as-you-go
   */
  name?: string;
  /**
   * @remarks
   * The rule ID.
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
   * The pricing information.
   */
  order?: DescribeConfigurationPriceResponseBodyDataTrafficPriceOrder;
  /**
   * @remarks
   * The promotion rules.
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
   * The remaining quota of the resource plan.
   */
  bagUsage?: DescribeConfigurationPriceResponseBodyDataBagUsage;
  /**
   * @remarks
   * The price of CPU and memory.
   */
  cpuMemPrice?: DescribeConfigurationPriceResponseBodyDataCpuMemPrice;
  /**
   * @remarks
   * The pricing information.
   */
  order?: DescribeConfigurationPriceResponseBodyDataOrder;
  /**
   * @remarks
   * The price per request.
   */
  requestPrice?: DescribeConfigurationPriceResponseBodyDataRequestPrice;
  /**
   * @remarks
   * The promotion rules.
   */
  rules?: DescribeConfigurationPriceResponseBodyDataRules[];
  /**
   * @remarks
   * The price of traffic.
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
   * The HTTP status code or POP error code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: A request error occurred.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The pricing information.
   */
  data?: DescribeConfigurationPriceResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * - This parameter is not returned if the request is successful.
   * 
   * - This parameter is returned if the request fails. For more information, see the **Error codes** section of this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * - If the request is successful, **success** is returned.
   * 
   * - If the request fails, an error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADCEC067-86AD-19E2-BD43-E83F3841****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the price of the configuration was obtained.
   * 
   * - **true**: The price was obtained.
   * 
   * - **false**: The price failed to be obtained.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID.
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

