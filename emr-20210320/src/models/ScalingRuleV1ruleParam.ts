// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingRuleV1RuleParam extends $dara.Model {
  /**
   * @remarks
   * [负载触发参数] 比较符。
   * 
   * @example
   * >
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * [负载触发参数] 统计次数。
   * 
   * @example
   * 1
   */
  evaluationCount?: number;
  /**
   * @remarks
   * [时间调度参数] 周期类型周期过期时间。
   * 
   * @example
   * 0
   */
  launchExpirationTime?: number;
  /**
   * @remarks
   * [时间调度参数] 周期类型周期开始时间。
   * 
   * @example
   * 2021-09-15T04:02Z
   */
  launchTime?: string;
  /**
   * @remarks
   * [负载触发参数] 度量名称。
   * 
   * @example
   * YarnRootAvailableVCores
   */
  metricName?: string;
  /**
   * @remarks
   * [负载触发参数] 统计时长,单位分钟。
   * 
   * @example
   * 5
   */
  period?: number;
  /**
   * @remarks
   * [时间调度参数] 周期类型周期结束时间。
   * 
   * @example
   * 2021-09-16T05:02Z
   */
  recurrenceEndTime?: string;
  /**
   * @remarks
   * [时间调度参数] 周期类型。
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * [时间调度参数] 周期类型周期值。
   * 
   * @example
   * 1
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * [负载触发参数] 统计方式。
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * [负载触发参数] 阈值。
   * 
   * @example
   * 1
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      evaluationCount: 'EvaluationCount',
      launchExpirationTime: 'LaunchExpirationTime',
      launchTime: 'LaunchTime',
      metricName: 'MetricName',
      period: 'Period',
      recurrenceEndTime: 'RecurrenceEndTime',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      evaluationCount: 'number',
      launchExpirationTime: 'number',
      launchTime: 'string',
      metricName: 'string',
      period: 'number',
      recurrenceEndTime: 'string',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      statistics: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

