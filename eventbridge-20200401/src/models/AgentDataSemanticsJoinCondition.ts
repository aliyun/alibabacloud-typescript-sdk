// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentDataSemanticsJoinCondition extends $dara.Model {
  /**
   * @remarks
   * The left table field name in form mode.
   * 
   * @example
   * customerID
   */
  leftColumn?: string;
  /**
   * @remarks
   * The conditional expression method.
   * 
   * This parameter is required.
   * 
   * @example
   * form
   */
  mode?: string;
  /**
   * @remarks
   * The right table field name in form mode.
   * 
   * @example
   * customerID
   */
  rightColumn?: string;
  /**
   * @remarks
   * The join SQL expression in SQL mode.
   * 
   * @example
   * sales_transactions.customerID = customers.customerID
   */
  SQLExpression?: string;
  static names(): { [key: string]: string } {
    return {
      leftColumn: 'LeftColumn',
      mode: 'Mode',
      rightColumn: 'RightColumn',
      SQLExpression: 'SQLExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      leftColumn: 'string',
      mode: 'string',
      rightColumn: 'string',
      SQLExpression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

