// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricSetTriggerSimpleExpression } from "./MetricSetTriggerSimpleExpression";


export class MetricSetMultiTrigger extends $dara.Model {
  /**
   * @remarks
   * The minimum deviation or absolute deviation dead zone for the dynamic baseline. Takes effect only with baseline operators. The unit is the same as the metric. The value must be greater than or equal to 0. A value of 0 means no restriction.
   * 
   * @example
   * 0.0
   */
  absDeviation?: number;
  /**
   * @remarks
   * The baseline period. Takes effect only with baseline operators. Valid values: AUTO (automatic detection), DAILY (daily), WEEKLY (weekly), and NONE (no period). When set to WEEKLY, the backend automatically expands the historical training window to at least 14 days.
   * 
   * @example
   * AUTO
   */
  baselinePeriod?: string;
  /**
   * @remarks
   * The list of sub-conditions. Used when expressionType is COMPOSITE. Each item contains queryName, operator, and threshold.
   */
  conditions?: MetricSetTriggerSimpleExpression[];
  /**
   * @remarks
   * The duration in seconds that data must continuously meet the condition before an alert is triggered. If not specified, the value is inherited from conditionConfig.durationSecs.
   * 
   * @example
   * 1
   */
  durationSecs?: number;
  /**
   * @remarks
   * The expression type. Valid values: SIMPLE (single-metric threshold) and COMPOSITE (multi-metric AND/OR/UNLESS combination).
   * 
   * @example
   * SIMPLE
   */
  expressionType?: string;
  /**
   * @remarks
   * The logical operator. Used when expressionType is COMPOSITE. Valid values: AND (all conditions met), OR (any condition met), and UNLESS (first condition met and all others not met).
   * 
   * @example
   * AND
   */
  logicOperator?: string;
  /**
   * @remarks
   * The upper bound of the range. Required when expressionType is SIMPLE and operator is IN_RANGE or OUT_OF_RANGE. The value must be greater than or equal to min.
   * 
   * @example
   * 1.0
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the range. Required when expressionType is SIMPLE and operator is IN_RANGE or OUT_OF_RANGE.
   * 
   * @example
   * 1.0
   */
  min?: number;
  /**
   * @remarks
   * The comparison operator (used when expressionType is SIMPLE). Valid values: GT (greater than), GE (greater than or equal to), LT (less than), LE (less than or equal to), EQ (equal to), NE (not equal to), IN_RANGE (within range, requires min/max), OUT_OF_RANGE (outside range, requires min/max), PRESENT (field exists, no threshold/min/max required), NOT_PRESENT (field does not exist, no threshold/min/max required), ABOVE_UPPER/BELOW_LOWER/OUT_OF_BAND (dynamic baseline spike/drop/bidirectional, requires sensitivity, no threshold/min/max).
   * 
   * @example
   * OUT_OF_BAND
   */
  operator?: string;
  /**
   * @remarks
   * The referenced query name (used when expressionType is SIMPLE), corresponding to QueryConfigUnified.queries[].name.
   * 
   * @example
   * SampleName
   */
  queryName?: string;
  /**
   * @remarks
   * The dynamic baseline sensitivity. Takes effect when expressionType is SIMPLE and a baseline operator is used. Valid values: HIGH (narrowest and most sensitive band), MEDIUM, and LOW (widest and least sensitive band).
   * 
   * @example
   * MEDIUM
   */
  sensitivity?: string;
  /**
   * @remarks
   * The alert severity level: CRITICAL > ERROR > WARN / WARNING > INFO. Multiple triggers are sorted by this priority, and the first match fires.
   * 
   * @example
   * INFO
   */
  severity?: string;
  /**
   * @remarks
   * The comparison threshold. Used when expressionType is SIMPLE and operator is GT/GE/LT/LE/EQ/NE. For IN_RANGE/OUT_OF_RANGE, use min/max instead. Not required for PRESENT/NOT_PRESENT.
   * 
   * @example
   * 1.0
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      absDeviation: 'absDeviation',
      baselinePeriod: 'baselinePeriod',
      conditions: 'conditions',
      durationSecs: 'durationSecs',
      expressionType: 'expressionType',
      logicOperator: 'logicOperator',
      max: 'max',
      min: 'min',
      operator: 'operator',
      queryName: 'queryName',
      sensitivity: 'sensitivity',
      severity: 'severity',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      absDeviation: 'number',
      baselinePeriod: 'string',
      conditions: { 'type': 'array', 'itemType': MetricSetTriggerSimpleExpression },
      durationSecs: 'number',
      expressionType: 'string',
      logicOperator: 'string',
      max: 'number',
      min: 'number',
      operator: 'string',
      queryName: 'string',
      sensitivity: 'string',
      severity: 'string',
      threshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

