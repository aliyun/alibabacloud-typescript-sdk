// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleSlsQueryJoinConditions extends $dara.Model {
  /**
   * @remarks
   * 条件的左操作参数，格式为$<query_idx>.<结果集字段名>
   */
  firstField?: string;
  /**
   * @remarks
   * <, >, ==, !=, <=, >=
   */
  oper?: string;
  /**
   * @remarks
   * 条件的右操作参数，格式为$<query_idx>.<结果集字段名>
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

