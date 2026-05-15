// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteStatementRequest extends $dara.Model {
  dbName?: string;
  maxBytes?: number;
  maxRows?: number;
  parameters?: any[];
  queryTimeout?: number;
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'dbName',
      maxBytes: 'maxBytes',
      maxRows: 'maxRows',
      parameters: 'parameters',
      queryTimeout: 'queryTimeout',
      sql: 'sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      maxBytes: 'number',
      maxRows: 'number',
      parameters: { 'type': 'array', 'itemType': 'any' },
      queryTimeout: 'number',
      sql: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

