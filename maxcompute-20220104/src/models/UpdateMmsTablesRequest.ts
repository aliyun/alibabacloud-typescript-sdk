// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmsTablesRequest extends $dara.Model {
  /**
   * @example
   * default
   */
  dbName?: string;
  /**
   * @example
   * pj
   */
  dstProjectName?: string;
  /**
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @example
   * INIT
   */
  status?: string;
  tableNames?: string[];
  /**
   * @remarks
   * Deprecated
   */
  tables?: number[];
  static names(): { [key: string]: string } {
    return {
      dbName: 'dbName',
      dstProjectName: 'dstProjectName',
      dstSchemaName: 'dstSchemaName',
      status: 'status',
      tableNames: 'tableNames',
      tables: 'tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      dstProjectName: 'string',
      dstSchemaName: 'string',
      status: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
      tables: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

