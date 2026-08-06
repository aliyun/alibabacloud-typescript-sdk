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
   * The creation time of the task.
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * The query ID, used for subsequent polling of results.
   * 
   * @example
   * d7b21d1ec4f441e79d5ba917c3283200
   */
  queryId?: string;
  /**
   * @remarks
   * The result list.
   */
  results?: StatementResult[];
  /**
   * @remarks
   * The SQL text. Multiple statements separated by semicolons are supported and executed sequentially within the same session.
   * 
   * @example
   * select * from table_name;
   */
  sql?: string;
  /**
   * @remarks
   * The task running status.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The execution specifications. Default value: standard.
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

