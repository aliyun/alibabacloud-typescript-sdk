// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ByLoadScalingRuleSpec extends $dara.Model {
  /**
   * @remarks
   * 比较符。
   * 
   * This parameter is required.
   * 
   * @example
   * LT
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * 统计次数。
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  evaluationCount?: number;
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
   * 统计量名称。
   * 
   * This parameter is required.
   * 
   * @example
   * AVG
   */
  statistics?: string;
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
  /**
   * @remarks
   * 统计窗口。单位为秒。
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  timeWindow?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      evaluationCount: 'EvaluationCount',
      metricName: 'MetricName',
      statistics: 'Statistics',
      threshold: 'Threshold',
      timeWindow: 'TimeWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      evaluationCount: 'number',
      metricName: 'string',
      statistics: 'string',
      threshold: 'number',
      timeWindow: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

