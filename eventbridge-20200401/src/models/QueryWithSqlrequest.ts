// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWithSQLRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of rows to return. Default value: 20. Maximum value: 50.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The query statement. Typically uses a three-part table name in the format of catalog.namespace.table.
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

