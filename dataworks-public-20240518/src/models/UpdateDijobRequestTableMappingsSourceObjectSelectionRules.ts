// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIJobRequestTableMappingsSourceObjectSelectionRules extends $dara.Model {
  /**
   * @remarks
   * The operation that is performed to select objects. Valid values: Include and Exclude.
   * 
   * @example
   * Include
   */
  action?: string;
  /**
   * @remarks
   * The expression.
   * 
   * @example
   * mysql_table_1
   */
  expression?: string;
  /**
   * @remarks
   * The expression type. Valid values: Exact and Regex.
   * 
   * @example
   * Exact
   */
  expressionType?: string;
  /**
   * @remarks
   * The object type. Valid values:
   * 
   * *   Table
   * *   Schema
   * *   Database
   * 
   * @example
   * Table
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      expression: 'Expression',
      expressionType: 'ExpressionType',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      expression: 'string',
      expressionType: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

