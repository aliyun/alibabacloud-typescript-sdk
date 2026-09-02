// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentDataSemanticsJoinCondition } from "./AgentDataSemanticsJoinCondition";


export class AgentDataSemanticsJoin extends $dara.Model {
  /**
   * @remarks
   * The join condition.
   * 
   * This parameter is required.
   */
  condition?: AgentDataSemanticsJoinCondition;
  /**
   * @remarks
   * The join usage description.
   * 
   * @example
   * Use this join when analyzing customer attributes associated with sales transactions
   */
  description?: string;
  /**
   * @remarks
   * The full name of the left table.
   * 
   * This parameter is required.
   * 
   * @example
   * samples.bakehouse.sales_transactions
   */
  leftTable?: string;
  /**
   * @remarks
   * The table relationship type.
   * 
   * @example
   * many_to_one
   */
  relationshipType?: string;
  /**
   * @remarks
   * The full name of the right table.
   * 
   * This parameter is required.
   * 
   * @example
   * samples.bakehouse.customers
   */
  rightTable?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      description: 'Description',
      leftTable: 'LeftTable',
      relationshipType: 'RelationshipType',
      rightTable: 'RightTable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: AgentDataSemanticsJoinCondition,
      description: 'string',
      leftTable: 'string',
      relationshipType: 'string',
      rightTable: 'string',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

