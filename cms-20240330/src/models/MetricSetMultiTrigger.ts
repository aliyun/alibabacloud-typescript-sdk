// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricSetTriggerSimpleExpression } from "./MetricSetTriggerSimpleExpression";


export class MetricSetMultiTrigger extends $dara.Model {
  conditions?: MetricSetTriggerSimpleExpression[];
  durationSecs?: number;
  expressionType?: string;
  logicOperator?: string;
  max?: number;
  min?: number;
  operator?: string;
  queryName?: string;
  severity?: string;
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

