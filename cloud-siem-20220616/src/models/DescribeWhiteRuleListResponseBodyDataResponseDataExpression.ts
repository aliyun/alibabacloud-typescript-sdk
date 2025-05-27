// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions } from "./DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions";


export class DescribeWhiteRuleListResponseBodyDataResponseDataExpression extends $dara.Model {
  /**
   * @remarks
   * The rule conditions.
   */
  conditions?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions[];
  /**
   * @remarks
   * The logical relationships among the rule conditions.
   * 
   * @example
   * (1&2)|(3&4)
   */
  logic?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      logic: 'Logic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions },
      logic: 'string',
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

