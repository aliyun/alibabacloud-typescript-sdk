// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricSetTriggerSimpleExpression } from "./MetricSetTriggerSimpleExpression";


export class MetricSetTriggerCompositeExpression extends $dara.Model {
  /**
   * @remarks
   * The list of sub-conditions, where each item is a simple comparison expression.
   * 
   * @example
   * [{"expressionType":"SIMPLE","queryName":"cpuQuery","operator":"GT","threshold":80}]
   */
  conditions?: MetricSetTriggerSimpleExpression[];
  /**
   * @remarks
   * The expression type, which is fixed to COMPOSITE.
   * 
   * @example
   * COMPOSITE
   */
  expressionType?: string;
  /**
   * @remarks
   * The logical operator. Valid values: AND (all conditions are met), OR (any condition is met), and UNLESS (the first condition is met and none of the others are met).
   * 
   * @example
   * AND
   */
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

