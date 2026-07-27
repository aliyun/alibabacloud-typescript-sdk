// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PrometheusSimpleExpression } from "./PrometheusSimpleExpression";


export class PrometheusMultiTrigger extends $dara.Model {
  conditions?: PrometheusSimpleExpression[];
  durationSecs?: number;
  expressionType?: string;
  logicOperator?: string;
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

