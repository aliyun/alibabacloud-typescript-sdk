// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEventHouseRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of rows to return. If a LIMIT clause is already specified in the SQL statement, the SQL\\"s own LIMIT takes precedence.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The query statement. Typically uses a three-part table name in the format catalog.namespace.table.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * FROM "test-es"."default"."product_info"
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

