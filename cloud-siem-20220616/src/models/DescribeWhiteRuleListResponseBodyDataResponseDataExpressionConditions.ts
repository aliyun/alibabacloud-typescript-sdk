// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft } from "./DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft";
import { DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsRight } from "./DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsRight";


export class DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the result is inverted. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  isNot?: boolean;
  /**
   * @remarks
   * The ID of the rule condition.
   * 
   * @example
   * 1
   */
  itemId?: number;
  /**
   * @remarks
   * The left operand of the rule condition.
   */
  left?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft;
  /**
   * @remarks
   * The logical operator of the rule condition. Valid values:
   * 
   * *   `=`: equals to.
   * *   `<>`: does not equal to.
   * *   `in`: contains.
   * *   `not in`: does not contain.
   * *   `REGEXP`: matches a regular expression.
   * *   `NOT REGEXP`: does not match a regular expression.
   * 
   * @example
   * REGEXP
   */
  operator?: string;
  /**
   * @remarks
   * The right operand of the rule condition.
   */
  right?: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsRight;
  static names(): { [key: string]: string } {
    return {
      isNot: 'IsNot',
      itemId: 'ItemId',
      left: 'Left',
      operator: 'Operator',
      right: 'Right',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isNot: 'boolean',
      itemId: 'number',
      left: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsLeft,
      operator: 'string',
      right: DescribeWhiteRuleListResponseBodyDataResponseDataExpressionConditionsRight,
    };
  }

  validate() {
    if(this.left && typeof (this.left as any).validate === 'function') {
      (this.left as any).validate();
    }
    if(this.right && typeof (this.right as any).validate === 'function') {
      (this.right as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

