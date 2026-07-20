// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StatementResultSchema extends $dara.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
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

export class StatementResult extends $dara.Model {
  downloadUrl?: string;
  error?: string;
  errorCode?: string;
  executionTime?: number;
  index?: number;
  rowCount?: number;
  schema?: StatementResultSchema[];
  sql?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      error: 'error',
      errorCode: 'errorCode',
      executionTime: 'executionTime',
      index: 'index',
      rowCount: 'rowCount',
      schema: 'schema',
      sql: 'sql',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      error: 'string',
      errorCode: 'string',
      executionTime: 'number',
      index: 'number',
      rowCount: 'number',
      schema: { 'type': 'array', 'itemType': StatementResultSchema },
      sql: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.schema)) {
      $dara.Model.validateArray(this.schema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

