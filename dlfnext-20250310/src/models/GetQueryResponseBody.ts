// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StatementResult } from "./StatementResult";


export class GetQueryResponseBody extends $dara.Model {
  completedAt?: number;
  createdAt?: number;
  queryId?: string;
  results?: StatementResult[];
  sql?: string;
  status?: string;
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

