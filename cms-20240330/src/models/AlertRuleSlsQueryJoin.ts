// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleSlsQueryJoinConditions extends $dara.Model {
  /**
   * @remarks
   * The left operand of the condition. The format is $\\<query_idx>.\\<field_name_in_result_set>.
   * 
   * @example
   * $0.__topic__
   */
  firstField?: string;
  /**
   * @remarks
   * The comparison operator. Valid values are <, >, ==, !=, <=, and >=.
   * 
   * @example
   * ==
   */
  oper?: string;
  /**
   * @remarks
   * The right operand of the condition. The format is $\\<query_idx>.\\<field_name_in_result_set>.
   * 
   * @example
   * $0.__topic__
   */
  secondField?: string;
  static names(): { [key: string]: string } {
    return {
      firstField: 'firstField',
      oper: 'oper',
      secondField: 'secondField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firstField: 'string',
      oper: 'string',
      secondField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlertRuleSlsQueryJoin extends $dara.Model {
  /**
   * @remarks
   * The list of join conditions.
   */
  conditions?: AlertRuleSlsQueryJoinConditions[];
  /**
   * @remarks
   * The type of the collection operation.
   * 
   * - CrossJoin: The Cartesian product.
   * 
   * - FullJoin: The full join.
   * 
   * - InnerJoin: The inner join.
   * 
   * - LeftExclude: The left exclusion.
   * 
   * - RightExclude: The right exclusion.
   * 
   * - LeftJoin: The left join.
   * 
   * - RightJoin: The right join.
   * 
   * - NoJoin: No merge operation is performed.
   * 
   * - Concat: Concatenation.
   * 
   * For more information, see https\\://www\\.alibabacloud.com/help/en/sls/user-guide/set-operations.
   * 
   * This parameter is required.
   * 
   * @example
   * CrossJoin
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': AlertRuleSlsQueryJoinConditions },
      type: 'string',
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

