// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryAnalysisResponseBodyResult extends $dara.Model {
  intent?: string;
  queries?: string[];
  query?: string;
  sql?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      intent: 'intent',
      queries: 'queries',
      query: 'query',
      sql: 'sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intent: 'string',
      queries: { 'type': 'array', 'itemType': 'string' },
      query: 'string',
      sql: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.queries)) {
      $dara.Model.validateArray(this.queries);
    }
    if(this.sql) {
      $dara.Model.validateMap(this.sql);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

