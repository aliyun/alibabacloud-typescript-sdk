// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ExecutionResult } from "./ExecutionResult";


export class QueryAttachment extends $dara.Model {
  /**
   * @example
   * "SELECT city, COUNT(*) AS cnt FROM events GROUP BY city"
   */
  query?: string;
  result?: ExecutionResult;
  static names(): { [key: string]: string } {
    return {
      query: 'Query',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      query: 'string',
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

