// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class TriggerCondition extends $dara.Model {
  /**
   * @remarks
   * 比较符。取值范围：
   * - EQ:等于。
   * - NE:不等于。
   * - GT:大于。
   * - LT:小于。
   * - GE:大于等于。
   * - LE:小于等于。
   * 
   * This parameter is required.
   * 
   * @example
   * LT
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * 指标名称。指标名称需要在 ListAutoScalingMetrics 接口返回的指标名称列表中。
   * 
   * This parameter is required.
   * 
   * @example
   * yarn_resourcemanager_root_availablememoryusage
   */
  metricName?: string;
  /**
   * @remarks
   * 统计量名称。取值范围：
   * - MAX：最大值。
   * - MIN：最小值。
   * - AVG：平均值。
   * 
   * This parameter is required.
   * 
   * @example
   * AVG
   */
  statistics?: string;
  /**
   * @remarks
   * 指标Tag。
   */
  tags?: Tag[];
  /**
   * @remarks
   * 阈值。
   * 
   * This parameter is required.
   * 
   * @example
   * 12.5
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      statistics: 'Statistics',
      tags: 'Tags',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      statistics: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      threshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

