// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecutionResult } from "./ExecutionResult";


export class QueryAttachment extends $dara.Model {
  /**
   * @remarks
   * The query statement.
   * 
   * @example
   * "SELECT city, COUNT(*) AS cnt FROM events GROUP BY city"
   */
  query?: string;
  /**
   * @remarks
   * The stable identifier for the actual SQL tool execution, used for result tracking and interpretation.
   * 
   * @example
   * sqlx-0-a1b2c3d4
   */
  queryId?: string;
  /**
   * @remarks
   * The query execution result.
   */
  result?: ExecutionResult;
  static names(): { [key: string]: string } {
    return {
      query: 'Query',
      queryId: 'QueryId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
      queryId: 'string',
      result: ExecutionResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

