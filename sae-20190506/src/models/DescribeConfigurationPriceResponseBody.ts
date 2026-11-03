// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigurationPriceResponseBodyDataBagUsage extends $dara.Model {
  /**
   * @remarks
   * The remaining CPU quota, in core-hours.
   * 
   * @example
   * 497570.450009
   */
  cpu?: number;
  /**
   * @remarks
   * The remaining CU quota of the resource plan.
   * 
   * @example
   * 10000
   */
  cu?: number;
  /**
   * @remarks
   * The remaining memory quota, in GiB-hours.
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
   * The rule name.
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
   * The campaign rules.
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
   * The campaign ID.
   */
  ruleIds?: string[];
  /**
   * @remarks
   * The transaction amount of the order.
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
   * The rule name.
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
   * The campaign rules.
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
   * The rule name.
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
   * The campaign ID.
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
   * The rule name.
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
   * The campaign rules.
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
   * The CPU and memory pricing.
   */
  cpuMemPrice?: DescribeConfigurationPriceResponseBodyDataCpuMemPrice;
  /**
   * @remarks
   * The pricing information.
   */
  order?: DescribeConfigurationPriceResponseBodyDataOrder;
  /**
   * @remarks
   * The pricing based on the number of requests.
   */
  requestPrice?: DescribeConfigurationPriceResponseBodyDataRequestPrice;
  /**
   * @remarks
   * The campaign rules.
   */
  rules?: DescribeConfigurationPriceResponseBodyDataRules[];
  /**
   * @remarks
   * The traffic pricing.
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
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirection.
   * - **4xx**: Request error.
   * - **5xx**: Server error.
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
   * The error code. The value is described as follows:
   * 
   * - If the request is successful, the **ErrorCode** field is not returned.
   * - If the request fails, the **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidParameter.Obviously
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. The value is described as follows:
   * 
   * - If the request is successful, **success** is returned.
   * - If the request fails, a specific error code is returned.
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
   * Indicates whether the configuration pricing information is successfully retrieved. Valid values:
   * 
   * - **true**: The pricing information is successfully retrieved.
   * - **false**: The pricing information fails to be retrieved.
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

