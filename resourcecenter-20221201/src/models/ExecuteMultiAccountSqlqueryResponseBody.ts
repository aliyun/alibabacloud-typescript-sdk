// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteMultiAccountSQLQueryResponseBodyColumns extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * resource_id
   */
  name?: string;
  /**
   * @remarks
   * The type of the column.
   * 
   * @example
   * varchar
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteMultiAccountSQLQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The columns.
   */
  columns?: ExecuteMultiAccountSQLQueryResponseBodyColumns[];
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
   * 44C8A952-D6B0-5BC8-82D5-93BA02E26F2E
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
      columns: { 'type': 'array', 'itemType': ExecuteMultiAccountSQLQueryResponseBodyColumns },
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

