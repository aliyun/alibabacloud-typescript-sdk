// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgentDataSemanticsMetric extends $dara.Model {
  /**
   * @remarks
   * The usage description.
   * 
   * @example
   * Use totalPrice to calculate total sales for sales performance comparison
   */
  description?: string;
  /**
   * @remarks
   * The name of the SQL expression.
   * 
   * This parameter is required.
   * 
   * @example
   * TotalSales
   */
  name?: string;
  /**
   * @remarks
   * The SQL expression.
   * 
   * This parameter is required.
   * 
   * @example
   * SUM(sales_transactions.totalPrice)
   */
  SQLExpression?: string;
  /**
   * @remarks
   * The list of synonyms. A maximum of 10 items are supported. Each item can contain up to 64 characters.
   * 
   * @example
   * ["Sales","Revenue","GMV"]
   */
  synonyms?: string[];
  /**
   * @remarks
   * The type of the SQL expression.
   * 
   * This parameter is required.
   * 
   * @example
   * measure
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      SQLExpression: 'SQLExpression',
      synonyms: 'Synonyms',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      SQLExpression: 'string',
      synonyms: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.synonyms)) {
      $dara.Model.validateArray(this.synonyms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

