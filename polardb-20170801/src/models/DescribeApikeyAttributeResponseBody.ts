// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApikeyAttributeResponseBodyItemsConsumer extends $dara.Model {
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * ***
   */
  apiKey?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * cg-bq6rcdjp02vt
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * c-71qh3pscbd3i
   */
  consumerId?: string;
  /**
   * @remarks
   * The consumer tag.
   * 
   * @example
   * test
   */
  consumerTag?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-07-18T07:32:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * pg-2ze5n62ef4s165***
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2026-04-10T01:48:25Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The consumer status.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      consumerGroupId: 'ConsumerGroupId',
      consumerId: 'ConsumerId',
      consumerTag: 'ConsumerTag',
      createTime: 'CreateTime',
      gwClusterId: 'GwClusterId',
      modifyTime: 'ModifyTime',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      consumerGroupId: 'string',
      consumerId: 'string',
      consumerTag: 'string',
      createTime: 'string',
      gwClusterId: 'string',
      modifyTime: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApikeyAttributeResponseBodyItemsUsageStatistics extends $dara.Model {
  /**
   * @remarks
   * The dimension reference ID, which is the ConsumerId.
   * 
   * @example
   * c-xxxxxx
   */
  dimensionRefId?: string;
  /**
   * @remarks
   * The statistics dimension. The value is typically Consumer.
   * 
   * @example
   * Consumer
   */
  dimensionType?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * pg-bp1ln7w98yrhzz7i2
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The number of cache tokens for the current month.
   * 
   * @example
   * 10
   */
  monthlyCacheToken?: string;
  /**
   * @remarks
   * The cost points consumed for the current month.
   * 
   * @example
   * 10
   */
  monthlyCostPoints?: string;
  /**
   * @remarks
   * The number of input tokens for the current month.
   * 
   * @example
   * 10
   */
  monthlyInputToken?: string;
  /**
   * @remarks
   * The number of output tokens for the current month.
   * 
   * @example
   * 10
   */
  monthlyOutputToken?: string;
  /**
   * @remarks
   * The number of tokens for the current month.
   * 
   * @example
   * 10
   */
  monthlyToken?: string;
  /**
   * @remarks
   * The cumulative number of cache tokens.
   * 
   * @example
   * 10
   */
  totalCacheToken?: string;
  /**
   * @remarks
   * The cumulative cost points consumed.
   * 
   * @example
   * 10
   */
  totalCostPoints?: string;
  /**
   * @remarks
   * The cumulative number of input tokens.
   * 
   * @example
   * 10
   */
  totalInputToken?: string;
  /**
   * @remarks
   * The cumulative number of output tokens.
   * 
   * @example
   * 10
   */
  totalOutputToken?: string;
  /**
   * @remarks
   * The cumulative number of tokens.
   * 
   * @example
   * 10
   */
  totalToken?: string;
  static names(): { [key: string]: string } {
    return {
      dimensionRefId: 'DimensionRefId',
      dimensionType: 'DimensionType',
      gwClusterId: 'GwClusterId',
      monthlyCacheToken: 'MonthlyCacheToken',
      monthlyCostPoints: 'MonthlyCostPoints',
      monthlyInputToken: 'MonthlyInputToken',
      monthlyOutputToken: 'MonthlyOutputToken',
      monthlyToken: 'MonthlyToken',
      totalCacheToken: 'TotalCacheToken',
      totalCostPoints: 'TotalCostPoints',
      totalInputToken: 'TotalInputToken',
      totalOutputToken: 'TotalOutputToken',
      totalToken: 'TotalToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensionRefId: 'string',
      dimensionType: 'string',
      gwClusterId: 'string',
      monthlyCacheToken: 'string',
      monthlyCostPoints: 'string',
      monthlyInputToken: 'string',
      monthlyOutputToken: 'string',
      monthlyToken: 'string',
      totalCacheToken: 'string',
      totalCostPoints: 'string',
      totalInputToken: 'string',
      totalOutputToken: 'string',
      totalToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApikeyAttributeResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The consumer information.
   */
  consumer?: DescribeApikeyAttributeResponseBodyItemsConsumer;
  /**
   * @remarks
   * The usage statistics for the consumer.
   */
  usageStatistics?: DescribeApikeyAttributeResponseBodyItemsUsageStatistics[];
  static names(): { [key: string]: string } {
    return {
      consumer: 'Consumer',
      usageStatistics: 'UsageStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumer: DescribeApikeyAttributeResponseBodyItemsConsumer,
      usageStatistics: { 'type': 'array', 'itemType': DescribeApikeyAttributeResponseBodyItemsUsageStatistics },
    };
  }

  validate() {
    if(this.consumer && typeof (this.consumer as any).validate === 'function') {
      (this.consumer as any).validate();
    }
    if(Array.isArray(this.usageStatistics)) {
      $dara.Model.validateArray(this.usageStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApikeyAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of consumer objects.
   */
  items?: DescribeApikeyAttributeResponseBodyItems[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F3322AFE-083E-4D77-A074-421301******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeApikeyAttributeResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

