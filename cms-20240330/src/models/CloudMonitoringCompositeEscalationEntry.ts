// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitoringCompositeEscalationEntry extends $dara.Model {
  /**
   * @remarks
   * The minimum deviation or absolute deviation dead zone for the dynamic baseline. This parameter takes effect only when the comparisonOperator is set to a baseline operator. If the absolute difference between the current value and the boundary is less than the absDeviation value, no alert is triggered. The unit is the same as the metric unit. The value must be greater than or equal to 0. A value of 0 indicates no limit.
   * 
   * @example
   * 0.0
   */
  absDeviation?: number;
  /**
   * @remarks
   * The baseline period. This parameter takes effect only when the comparisonOperator is set to a baseline operator. Valid values: AUTO (automatic identification), DAILY (daily), WEEKLY (weekly), and NONE (no period). If you set this parameter to WEEKLY, the backend automatically extends the historical training window to at least 14 days. Specific identification results are not returned for automatic identification.
   * 
   * @example
   * AUTO
   */
  baselinePeriod?: string;
  /**
   * @remarks
   * The comparison operator.
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
   * The sensitivity of the dynamic baseline. This parameter takes effect only when the comparisonOperator is set to a baseline operator. Valid values: HIGH (narrowest band and most sensitive), MEDIUM (medium), and LOW (widest band and least sensitive).
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

