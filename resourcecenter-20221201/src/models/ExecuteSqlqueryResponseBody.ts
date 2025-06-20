// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecuteSQLQueryResponseBodyColumns } from "./ExecuteSqlqueryResponseBodyColumns";


export class ExecuteSQLQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The columns.
   */
  columns?: ExecuteSQLQueryResponseBodyColumns[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D696E6EF-3A6D-5770-801E-4982081FE4D0
   */
  requestId?: string;
  /**
   * @remarks
   * An array of search results.
   */
  rows?: any[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      rows: 'Rows',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': ExecuteSQLQueryResponseBodyColumns },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      rows: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.rows)) {
      $dara.Model.validateArray(this.rows);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

