// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesDetailInfos extends $dara.Model {
  /**
   * @remarks
   * Discount amount.
   * 
   * @example
   * 100
   */
  discountAmount?: number;
  /**
   * @remarks
   * Original price.
   * 
   * @example
   * 900
   */
  originalAmount?: number;
  /**
   * @remarks
   * Pricing module identifier.
   * 
   * @example
   * instance
   */
  resource?: string;
  /**
   * @remarks
   * Discounted price.
   * 
   * @example
   * 500
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      resource: 'Resource',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discountAmount: 'number',
      originalAmount: 'number',
      resource: 'string',
      tradeAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesRules extends $dara.Model {
  /**
   * @remarks
   * Promotion description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * Promotion name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Promotion ID.
   * 
   * @example
   * 1021199213
   */
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePrices extends $dara.Model {
  /**
   * @remarks
   * Currency. Valid values:
   * - CNY: Chinese Yuan.
   * - USD: US Dollar.
   * - JPY: Japanese Yen.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The price details of the pricing module.
   */
  detailInfos?: GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesDetailInfos[];
  /**
   * @remarks
   * Discount.
   * 
   * @example
   * 100
   */
  discountAmount?: number;
  /**
   * @remarks
   * Original price.
   * 
   * @example
   * 900
   */
  originalAmount?: number;
  /**
   * @remarks
   * Renewal duration. The unit is specified by PeriodUnit.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit for the renewal duration, which is the unit of the Period parameter. Valid values: Month, Year. Default value: Month.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * Resource ARN (Aliyun Resource Name).
   * 
   * @example
   * acs:ecs:cn-hongkong:1488317743351199:instance/i-j6c6f3lbky38o8rpeqw2
   */
  resourceArn?: string;
  /**
   * @remarks
   * Promotion details.
   */
  rules?: GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesRules[];
  /**
   * @remarks
   * Discounted price.
   * 
   * @example
   * 500
   */
  tradeAmount?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      detailInfos: 'DetailInfos',
      discountAmount: 'DiscountAmount',
      originalAmount: 'OriginalAmount',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      resourceArn: 'ResourceArn',
      rules: 'Rules',
      tradeAmount: 'TradeAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      detailInfos: { 'type': 'array', 'itemType': GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesDetailInfos },
      discountAmount: 'number',
      originalAmount: 'number',
      period: 'number',
      periodUnit: 'string',
      resourceArn: 'string',
      rules: { 'type': 'array', 'itemType': GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePricesRules },
      tradeAmount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.detailInfos)) {
      $dara.Model.validateArray(this.detailInfos);
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

export class GetServiceInstanceSubscriptionEstimateCostResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 464C8CB6-A548-5206-B83C-D32A8E43EC21
   */
  requestId?: string;
  /**
   * @remarks
   * List of resource price information.
   */
  resourcePrices?: GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePrices[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePrices: 'ResourcePrices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePrices: { 'type': 'array', 'itemType': GetServiceInstanceSubscriptionEstimateCostResponseBodyResourcePrices },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePrices)) {
      $dara.Model.validateArray(this.resourcePrices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

