// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApikeyAttributeResponseBodyItemsConsumer extends $dara.Model {
  /**
   * @example
   * ***
   */
  apiKey?: string;
  /**
   * @example
   * cg-bq6rcdjp02vt
   */
  consumerGroupId?: string;
  /**
   * @example
   * c-71qh3pscbd3i
   */
  consumerId?: string;
  /**
   * @example
   * test
   */
  consumerTag?: string;
  /**
   * @example
   * 2021-07-18T07:32:30Z
   */
  createTime?: string;
  /**
   * @example
   * pg-2ze5n62ef4s165***
   */
  gwClusterId?: string;
  /**
   * @example
   * 2026-04-10T01:48:25Z
   */
  modifyTime?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
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
   * @example
   * c-xxxxxx
   */
  dimensionRefId?: string;
  /**
   * @example
   * Consumer
   */
  dimensionType?: string;
  /**
   * @example
   * pg-bp1ln7w98yrhzz7i2
   */
  gwClusterId?: string;
  /**
   * @example
   * 10
   */
  monthlyCacheToken?: string;
  /**
   * @example
   * 10
   */
  monthlyCostPoints?: string;
  /**
   * @example
   * 10
   */
  monthlyInputToken?: string;
  /**
   * @example
   * 10
   */
  monthlyOutputToken?: string;
  /**
   * @example
   * 10
   */
  monthlyToken?: string;
  /**
   * @example
   * 10
   */
  totalCacheToken?: string;
  /**
   * @example
   * 10
   */
  totalCostPoints?: string;
  /**
   * @example
   * 10
   */
  totalInputToken?: string;
  /**
   * @example
   * 10
   */
  totalOutputToken?: string;
  /**
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
  consumer?: DescribeApikeyAttributeResponseBodyItemsConsumer;
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
  items?: DescribeApikeyAttributeResponseBodyItems[];
  /**
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

