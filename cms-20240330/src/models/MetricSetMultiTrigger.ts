// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricSetTriggerSimpleExpression } from "./MetricSetTriggerSimpleExpression";


export class MetricSetMultiTrigger extends $dara.Model {
  /**
   * @remarks
   * The list of sub-conditions (used when expressionType=COMPOSITE). Each item contains queryName, operator, and threshold.
   */
  conditions?: MetricSetTriggerSimpleExpression[];
  /**
   * @remarks
   * The duration in seconds that data must continuously meet the condition to trigger an alert. If not specified, the value is inherited from conditionConfig.durationSecs.
   */
  durationSecs?: number;
  /**
   * @remarks
   * The expression type. Valid values: SIMPLE (single-metric threshold) or COMPOSITE (multi-metric AND/OR/UNLESS combination).
   */
  expressionType?: string;
  /**
   * @remarks
   * The logic operator (used when expressionType=COMPOSITE). Valid values: AND (all conditions met), OR (any condition met), UNLESS (first condition met and all others not met).
   */
  logicOperator?: string;
  /**
   * @remarks
   * The upper bound of the range. Required when expressionType=SIMPLE and operator is IN_RANGE or OUT_OF_RANGE. The value must be greater than or equal to min.
   */
  max?: number;
  /**
   * @remarks
   * The lower bound of the range. Required when expressionType=SIMPLE and operator is IN_RANGE or OUT_OF_RANGE.
   */
  min?: number;
  /**
   * @remarks
   * The comparison operator (used when expressionType=SIMPLE). Valid values: GT (greater than), GE (greater than or equal to), LT (less than), LE (less than or equal to), EQ (equal to), NE (not equal to), IN_RANGE (within range, requires min/max), OUT_OF_RANGE (outside range, requires min/max), PRESENT (field exists, no threshold/min/max needed), NOT_PRESENT (field does not exist, no threshold/min/max needed).
   */
  operator?: string;
  /**
   * @remarks
   * The referenced query name (used when expressionType=SIMPLE), corresponding to QueryConfigUnified.queries[].name.
   */
  queryName?: string;
  /**
   * @remarks
   * The alert severity level: CRITICAL > ERROR > WARN / WARNING > INFO. Multiple triggers are sorted by this priority, and the first match fires.
   */
  severity?: string;
  /**
   * @remarks
   * The comparison threshold. Used when expressionType=SIMPLE and operator is GT/GE/LT/LE/EQ/NE. For IN_RANGE/OUT_OF_RANGE, use min/max instead. For PRESENT/NOT_PRESENT, leave this field empty.
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      durationSecs: 'durationSecs',
      expressionType: 'expressionType',
      logicOperator: 'logicOperator',
      max: 'max',
      min: 'min',
      operator: 'operator',
      queryName: 'queryName',
      severity: 'severity',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': MetricSetTriggerSimpleExpression },
      durationSecs: 'number',
      expressionType: 'string',
      logicOperator: 'string',
      max: 'number',
      min: 'number',
      operator: 'string',
      queryName: 'string',
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

