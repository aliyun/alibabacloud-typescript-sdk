// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompareList extends $dara.Model {
  /**
   * @remarks
   * The dynamic baseline minimum deviation or absolute deviation dead zone. This parameter takes effect only when a baseline operator is used. If |current value − boundary| < absDeviation, no alert is triggered. The unit is the same as the metric unit. The value must be greater than or equal to 0. A value of 0 indicates no restriction.
   * 
   * @example
   * 0.0
   */
  absDeviation?: number;
  /**
   * @remarks
   * The aggregation function.
   * 
   * This parameter is required.
   * 
   * @example
   * AVG
   */
  aggregate?: string;
  /**
   * @remarks
   * The baseline period. This parameter takes effect only when a baseline operator is used. Valid values:
   * - AUTO: Automatically identifies the period. The specific identification result cannot be displayed.
   * - DAILY: Daily period.
   * - WEEKLY: Weekly period. The backend automatically expands the historical training window to at least 14 days.
   * - NONE: No period.
   * 
   * @example
   * AUTO
   */
  baselinePeriod?: string;
  /**
   * @remarks
   * The comparison operator. Valid values:
   * - GTE: greater than or equal to.
   * - LTE: less than or equal to.
   * - YOY_UP: year-over-year increase. You must also specify yoyTimeUnit and yoyTimeValue.
   * - YOY_DOWN: year-over-year decrease. You must also specify yoyTimeUnit and yoyTimeValue.
   * - ABOVE_UPPER: dynamic baseline spike. You must specify sensitivity. When using a baseline operator, threshold is not used for evaluation. Set it to 0 as a placeholder.
   * - BELOW_LOWER: dynamic baseline drop. You must specify sensitivity. When using a baseline operator, threshold is not used for evaluation. Set it to 0 as a placeholder.
   * - OUT_OF_BAND: dynamic baseline bidirectional. You must specify sensitivity. When using a baseline operator, threshold is not used for evaluation. Set it to 0 as a placeholder.
   * 
   * This parameter is required.
   * 
   * @example
   * OUT_OF_BAND
   */
  operator?: string;
  /**
   * @remarks
   * The dynamic baseline sensitivity. This parameter takes effect only when a baseline operator is used. Valid values:
   * - HIGH: The narrowest band and the most sensitive.
   * - MEDIUM: Medium sensitivity.
   * - LOW: The widest band and the least sensitive.
   * 
   * @example
   * MEDIUM
   */
  sensitivity?: string;
  /**
   * @remarks
   * The threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  threshold?: number;
  /**
   * @remarks
   * The year-over-year time unit. This parameter takes effect only when operator is set to YOY_UP or YOY_DOWN.
   * 
   * @example
   * day
   */
  yoyTimeUnit?: string;
  /**
   * @remarks
   * The year-over-year time value. This parameter takes effect only when operator is set to YOY_UP or YOY_DOWN.
   * 
   * @example
   * 1
   */
  yoyTimeValue?: number;
  static names(): { [key: string]: string } {
    return {
      absDeviation: 'absDeviation',
      aggregate: 'aggregate',
      baselinePeriod: 'baselinePeriod',
      operator: 'operator',
      sensitivity: 'sensitivity',
      threshold: 'threshold',
      yoyTimeUnit: 'yoyTimeUnit',
      yoyTimeValue: 'yoyTimeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absDeviation: 'number',
      aggregate: 'string',
      baselinePeriod: 'string',
      operator: 'string',
      sensitivity: 'string',
      threshold: 'number',
      yoyTimeUnit: 'string',
      yoyTimeValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

