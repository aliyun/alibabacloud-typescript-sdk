// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PrometheusSimpleExpression } from "./PrometheusSimpleExpression";


export class PrometheusMultiTrigger extends $dara.Model {
  /**
   * @remarks
   * The list of sub-conditions. This parameter is used when expressionType is set to COMPOSITE. Each item contains queryName, operator, and threshold.
   */
  conditions?: PrometheusSimpleExpression[];
  /**
   * @remarks
   * The duration, in seconds, for which the data must continuously meet the condition before the alert is triggered. If this parameter is not specified, the value of conditionConfig.durationSecs is inherited.
   * 
   * @example
   * 1
   */
  durationSecs?: number;
  /**
   * @remarks
   * The expression type. Valid values:
   * - SIMPLE: single-query threshold.
   * - COMPOSITE: multi-query AND/OR/UNLESS combination.
   * 
   * @example
   * SIMPLE
   */
  expressionType?: string;
  /**
   * @remarks
   * The logical operator. This parameter is used when expressionType is set to COMPOSITE. Valid values: AND, OR, and UNLESS.
   * 
   * @example
   * AND
   */
  logicOperator?: string;
  /**
   * @remarks
   * The comparison operator. This parameter is used when expressionType is set to SIMPLE. Valid values: GT, GE, LT, LE, EQ, and NE.
   * 
   * @example
   * GT
   */
  operator?: string;
  /**
   * @remarks
   * The referenced query name. This parameter is used when expressionType is set to SIMPLE. The value corresponds to QueryConfigUnified.queries[].name.
   * 
   * @example
   * SampleName
   */
  queryName?: string;
  /**
   * @remarks
   * The alert severity level. Severity levels in descending priority: CRITICAL > ERROR > WARN / WARNING > INFO. When multiple triggers are configured, they are sorted by this priority, and the first match fires the alert.
   * 
   * @example
   * INFO
   */
  severity?: string;
  /**
   * @remarks
   * The comparison threshold. This parameter is used when expressionType is set to SIMPLE.
   * 
   * @example
   * 1.0
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      durationSecs: 'durationSecs',
      expressionType: 'expressionType',
      logicOperator: 'logicOperator',
      operator: 'operator',
      queryName: 'queryName',
      severity: 'severity',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': PrometheusSimpleExpression },
      durationSecs: 'number',
      expressionType: 'string',
      logicOperator: 'string',
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

