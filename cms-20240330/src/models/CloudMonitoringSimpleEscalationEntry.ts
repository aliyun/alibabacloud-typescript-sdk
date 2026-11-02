// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitoringSimpleEscalationEntry extends $dara.Model {
  /**
   * @remarks
   * The minimum dynamic baseline deviation or absolute deviation dead zone, which takes effect only when the baseline comparisonOperator is used. If the absolute difference between the current value and the boundary is less than the absDeviation value, no alert is triggered. The unit is the same as the metric. The value must be greater than or equal to 0. A value of 0 indicates no limit.
   * 
   * @example
   * 0.0
   */
  absDeviation?: number;
  /**
   * @remarks
   * The baseline period, which takes effect only when the baseline comparisonOperator is used. Valid values: AUTO for automatic identification, DAILY for daily, WEEKLY for weekly, and NONE for no period. For weekly periods, the backend automatically extends the historical training window to at least 14 days. Automatic identification cannot return specific identification results.
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
   * The precondition.
   * 
   * @example
   * 连续3次
   */
  preCondition?: string;
  /**
   * @remarks
   * The sensitivity of the dynamic baseline, which takes effect only when the baseline comparisonOperator is used. Valid values: HIGH for the narrowest and most sensitive band, MEDIUM for medium sensitivity, and LOW for the widest and least sensitive band.
   * 
   * @example
   * MEDIUM
   */
  sensitivity?: string;
  /**
   * @remarks
   * The severity level.
   * 
   * @example
   * CRITICAL
   */
  severity?: string;
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
  /**
   * @remarks
   * The number of consecutive triggers.
   * 
   * @example
   * 3
   */
  times?: number;
  static names(): { [key: string]: string } {
    return {
      absDeviation: 'absDeviation',
      baselinePeriod: 'baselinePeriod',
      comparisonOperator: 'comparisonOperator',
      preCondition: 'preCondition',
      sensitivity: 'sensitivity',
      severity: 'severity',
      statistics: 'statistics',
      threshold: 'threshold',
      times: 'times',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absDeviation: 'number',
      baselinePeriod: 'string',
      comparisonOperator: 'string',
      preCondition: 'string',
      sensitivity: 'string',
      severity: 'string',
      statistics: 'string',
      threshold: 'string',
      times: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

