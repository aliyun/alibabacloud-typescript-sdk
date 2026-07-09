// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricSetTriggerSimpleExpression } from "./MetricSetTriggerSimpleExpression";


export class MetricSetTriggerCompositeExpression extends $dara.Model {
  conditions?: MetricSetTriggerSimpleExpression[];
  expressionType?: string;
  logicOperator?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      expressionType: 'expressionType',
      logicOperator: 'logicOperator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': MetricSetTriggerSimpleExpression },
      expressionType: 'string',
      logicOperator: 'string',
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

