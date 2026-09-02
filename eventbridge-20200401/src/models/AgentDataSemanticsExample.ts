// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgentDataSemanticsExampleParameter } from "./AgentDataSemanticsExampleParameter";


export class AgentDataSemanticsExample extends $dara.Model {
  /**
   * @remarks
   * The example usage description.
   * 
   * @example
   * Use this example when a user asks about high-value customers based on weekly statistics
   */
  description?: string;
  /**
   * @remarks
   * The example name.
   * 
   * This parameter is required.
   * 
   * @example
   * High-value customers with weekly sales exceeding 150
   */
  name?: string;
  /**
   * @remarks
   * The SQL example parameter list. A maximum of 20 items are supported.
   */
  parameters?: AgentDataSemanticsExampleParameter[];
  /**
   * @remarks
   * The standard SQL example.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT customerID FROM sales_transactions
   */
  SQLExpression?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      parameters: 'Parameters',
      SQLExpression: 'SQLExpression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parameters: { 'type': 'array', 'itemType': AgentDataSemanticsExampleParameter },
      SQLExpression: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

