// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleSlsQueryJoinConditions extends $dara.Model {
  /**
   * @remarks
   * The left operand of the condition, in the format of $<query_idx>.<result set field name>.
   * 
   * @example
   * $0.__topic__
   */
  firstField?: string;
  /**
   * @remarks
   * The comparison operator. Valid values: <, >, ==, !=, <=, and >=.
   * 
   * @example
   * ==
   */
  oper?: string;
  /**
   * @remarks
   * The right operand of the condition, in the format of $<query_idx>.<result set field name>.
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
   * The set operation type. Valid values:
   * - CrossJoin: Cartesian product
   * - FullJoin: full join
   * - InnerJoin: inner join
   * - LeftExclude: left exclude
   * - RightExclude: right exclude
   * - LeftJoin: left join
   * - RightJoin: right join
   * - NoJoin: no join
   * - Concat: concatenation
   * 
   * For more information, see https://www.alibabacloud.com/help/en/sls/user-guide/set-query-statistics-statement.
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

