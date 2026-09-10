// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricSetTriggerSimpleExpression extends $dara.Model {
  /**
   * @remarks
   * The minimum deviation or absolute deviation dead zone for the dynamic baseline. Takes effect only for baseline operators. The unit is the same as the metric. The value must be greater than or equal to 0. A value of 0 indicates no restriction.
   * 
   * @example
   * 0.0
   */
  absDeviation?: number;
  /**
   * @remarks
   * The baseline period. Takes effect only for baseline operators. Valid values:
   * - AUTO: Automatically identifies the period.
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
   * The expression type. Fixed value: SIMPLE.
   * 
   * @example
   * SIMPLE
   */
  expressionType?: string;
  /**
   * @remarks
   * The upper bound of the range. Required when operator is set to IN_RANGE or OUT_OF_RANGE. The value must be greater than or equal to min.
   * 
   * @example
   * 100
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the range. Required when operator is set to IN_RANGE or OUT_OF_RANGE.
   * 
   * @example
   * 0
   */
  min?: number;
  /**
   * @remarks
   * The comparison operator. Valid values:
   * - GT: Greater than.
   * - GE: Greater than or equal to.
   * - LT: Less than.
   * - LE: Less than or equal to.
   * - EQ: Equal to.
   * - NE: Not equal to.
   * - IN_RANGE: Within the range. Both min and max must be specified.
   * - OUT_OF_RANGE: Outside the range. Both min and max must be specified.
   * - PRESENT: The field exists. The threshold, min, and max parameters are not required.
   * - NOT_PRESENT: The field does not exist. The threshold, min, and max parameters are not required.
   * - ABOVE_UPPER: Dynamic baseline spike. The sensitivity parameter is required. The threshold, min, and max parameters are not required.
   * - BELOW_LOWER: Dynamic baseline drop. The sensitivity parameter is required. The threshold, min, and max parameters are not required.
   * - OUT_OF_BAND: Dynamic baseline bidirectional deviation. The sensitivity parameter is required. The threshold, min, and max parameters are not required.
   * 
   * @example
   * OUT_OF_BAND
   */
  operator?: string;
  /**
   * @remarks
   * The referenced query name, corresponding to QueryConfigUnified.queries[].name.
   * 
   * @example
   * cpuQuery
   */
  queryName?: string;
  /**
   * @remarks
   * The dynamic baseline sensitivity. Takes effect only for baseline operators. Valid values:
   * - HIGH: The narrowest band and highest sensitivity.
   * - MEDIUM: Medium sensitivity.
   * - LOW: The widest band and lowest sensitivity.
   * 
   * @example
   * MEDIUM
   */
  sensitivity?: string;
  /**
   * @remarks
   * The comparison threshold. Used when operator is set to GT, GE, LT, LE, EQ, or NE. For IN_RANGE or OUT_OF_RANGE, use min and max instead. Not required for PRESENT or NOT_PRESENT.
   * 
   * @example
   * 80
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      absDeviation: 'absDeviation',
      baselinePeriod: 'baselinePeriod',
      expressionType: 'expressionType',
      max: 'max',
      min: 'min',
      operator: 'operator',
      queryName: 'queryName',
      sensitivity: 'sensitivity',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absDeviation: 'number',
      baselinePeriod: 'string',
      expressionType: 'string',
      max: 'number',
      min: 'number',
      operator: 'string',
      queryName: 'string',
      sensitivity: 'string',
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

