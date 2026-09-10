// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricSetTriggerSimpleExpression } from "./MetricSetTriggerSimpleExpression";


export class MetricSetTriggerCompositeExpression extends $dara.Model {
  /**
   * @remarks
   * The list of sub-conditions. Each item is a simple comparison expression.
   */
  conditions?: MetricSetTriggerSimpleExpression[];
  /**
   * @remarks
   * The expression type, fixed as COMPOSITE.
   * 
   * @example
   * COMPOSITE
   */
  expressionType?: string;
  /**
   * @remarks
   * The logical operator. Valid values:
   * - AND: All conditions are met.
   * - OR: Any condition is met.
   * - UNLESS: The first condition is met and none of the remaining conditions are met.
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

