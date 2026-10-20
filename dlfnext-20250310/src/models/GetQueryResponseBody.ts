// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StatementResult } from "./StatementResult";


export class GetQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The completion time of the task.
   * 
   * @example
   * 1744970111419
   */
  completedAt?: number;
  /**
   * @remarks
   * The creation time of the task, which is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * The query ID used to poll for subsequent results.
   * 
   * @example
   * d7b21d1ec4f441e79d5ba917c3283200
   */
  queryId?: string;
  /**
   * @remarks
   * The list of results.
   */
  results?: StatementResult[];
  /**
   * @remarks
   * The SQL text, which supports multiple statements separated by semicolons that are executed sequentially within the same session.
   * 
   * @example
   * select * from table_name;
   */
  sql?: string;
  /**
   * @remarks
   * The running status of the task.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The execution tier. Default value: standard.
   * 
   * @example
   * standard
   */
  tier?: string;
  static names(): { [key: string]: string } {
    return {
      completedAt: 'completedAt',
      createdAt: 'createdAt',
      queryId: 'queryId',
      results: 'results',
      sql: 'sql',
      status: 'status',
      tier: 'tier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedAt: 'number',
      createdAt: 'number',
      queryId: 'string',
      results: { 'type': 'array', 'itemType': StatementResult },
      sql: 'string',
      status: 'string',
      tier: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

