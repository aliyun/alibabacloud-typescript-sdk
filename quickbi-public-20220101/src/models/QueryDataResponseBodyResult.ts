// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDataResponseBodyResultHeaders } from "./QueryDataResponseBodyResultHeaders";


export class QueryDataResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Column headers.
   */
  headers?: QueryDataResponseBodyResultHeaders[];
  /**
   * @remarks
   * The SQL query that was executed.
   * > The filter conditions in the returned SQL statement include not only the parameters passed through this interface but also the row and column permission configurations.
   * 
   * @example
   * test
   */
  sql?: string;
  /**
   * @remarks
   * The results of the query.
   */
  values?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      sql: 'Sql',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': QueryDataResponseBodyResultHeaders },
      sql: 'string',
      values: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

