// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmsTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database that contains the source tables to be updated.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * The destination MaxCompute project.
   * 
   * @example
   * pj
   */
  dstProjectName?: string;
  /**
   * @remarks
   * The destination MaxCompute schema.
   * 
   * @example
   * default
   */
  dstSchemaName?: string;
  /**
   * @remarks
   * The migration status.
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * The list of source tables to be updated.
   */
  tableNames?: string[];
  /**
   * @remarks
   * This parameter is deprecated.
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

