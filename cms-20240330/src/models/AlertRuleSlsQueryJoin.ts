// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleSlsQueryJoinConditions extends $dara.Model {
  /**
   * @remarks
   * Left-hand operand of the condition, formatted as $<query_idx>.<result_set_field_name>.
   * 
   * @example
   * $0.__topic__
   */
  firstField?: string;
  /**
   * @remarks
   * Comparison operator; valid values: <, >, ==, !=, <=, >=.
   * 
   * @example
   * ==
   */
  oper?: string;
  /**
   * @remarks
   * Right-hand operand of the condition, formatted as $<query_idx>.<result_set_field_name>.
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
   * List of connection conditions.
   */
  conditions?: AlertRuleSlsQueryJoinConditions[];
  /**
   * @remarks
   * Set operation type.
   * CrossJoin: Cartesian product
   * FullJoin: Full outer join
   * InnerJoin: Inner join
   * LeftExclude: Left anti join
   * RightExclude: Right anti join
   * LeftJoin: Left outer join
   * RightJoin: Right outer join
   * NoJoin: No merge
   * Concat: Concatenation
   * 
   * See also: https://help.aliyun.com/zh/sls/user-guide/set-query-statistics-statement
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

