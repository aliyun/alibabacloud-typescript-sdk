// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitoringCompositeEscalationEntry extends $dara.Model {
  /**
   * @remarks
   * The minimum deviation or absolute deviation dead zone for dynamic baselines. This parameter takes effect only when the comparisonOperator is set to a baseline operator. If the absolute difference between the current value and the boundary is less than the absDeviation value, no alert is triggered. The unit is the same as the metric unit. The value must be greater than or equal to 0. A value of 0 indicates no limit.
   * 
   * @example
   * 0.0
   */
  absDeviation?: number;
  /**
   * @remarks
   * The baseline period. This parameter takes effect only when the comparisonOperator is set to a baseline operator. Valid values: AUTO for automatic identification, DAILY for daily, WEEKLY for weekly, and NONE for no period. When set to WEEKLY, the backend automatically extends the historical training window to 14 days or more. Automatic identification cannot return the specific identification result.
   * 
   * @example
   * AUTO
   */
  baselinePeriod?: string;
  /**
   * @remarks
   * The comparison operator. Valid values include GreaterThanThreshold and LessThanThreshold for static thresholds, and ABOVE_UPPER, BELOW_LOWER, and OUT_OF_BAND for dynamic baseline spikes, drops, and bidirectional changes. For dynamic baseline operators, you must specify the sensitivity parameter. The threshold parameter is not used for evaluation and can be left empty.
   * 
   * @example
   * GT
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * cpuUsage
   */
  metricName?: string;
  /**
   * @remarks
   * The collection period in seconds.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The precondition.
   * 
   * @example
   * 连续3次
   */
  preCondition?: string;
  /**
   * @remarks
   * The dynamic baseline sensitivity. This parameter takes effect only when the comparisonOperator is set to a baseline operator. Valid values: HIGH for the narrowest and most sensitive band, MEDIUM for a medium band, and LOW for the widest and least sensitive band.
   * 
   * @example
   * MEDIUM
   */
  sensitivity?: string;
  /**
   * @remarks
   * The statistical method.
   * 
   * @example
   * Average
   */
  statistics?: string;
  /**
   * @remarks
   * The threshold.
   * 
   * @example
   * 80
   */
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      absDeviation: 'absDeviation',
      baselinePeriod: 'baselinePeriod',
      comparisonOperator: 'comparisonOperator',
      metricName: 'metricName',
      period: 'period',
      preCondition: 'preCondition',
      sensitivity: 'sensitivity',
      statistics: 'statistics',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absDeviation: 'number',
      baselinePeriod: 'string',
      comparisonOperator: 'string',
      metricName: 'string',
      period: 'number',
      preCondition: 'string',
      sensitivity: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

