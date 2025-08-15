// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSqlStatementContentsResponseBodySqlStatementContents extends $dara.Model {
  /**
   * @example
   * [{\\"values\\":[\\"wj*****\\",\\"test\\",\\"2025-04-15\\"]}]
   */
  contents?: string;
  /**
   * @example
   * 2000
   */
  maxResults?: number;
  /**
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @example
   * 40000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      contents: 'contents',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: 'string',
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSqlStatementContentsResponseBody extends $dara.Model {
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  sqlStatementContents?: ListSqlStatementContentsResponseBodySqlStatementContents;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      sqlStatementContents: 'sqlStatementContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sqlStatementContents: ListSqlStatementContentsResponseBodySqlStatementContents,
    };
  }

  validate() {
    if(this.sqlStatementContents && typeof (this.sqlStatementContents as any).validate === 'function') {
      (this.sqlStatementContents as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

