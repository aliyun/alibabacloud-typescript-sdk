// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeTablePermissionRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  allTable?: boolean;
  columnNames?: string[];
  /**
   * @example
   * test_db
   */
  databaseName?: string;
  privileges?: string[];
  /**
   * @example
   * my_schema
   */
  schemaName?: string;
  /**
   * @example
   * my_table
   */
  tableName?: string;
  /**
   * @example
   * p4_1234xxxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      allTable: 'allTable',
      columnNames: 'columnNames',
      databaseName: 'databaseName',
      privileges: 'privileges',
      schemaName: 'schemaName',
      tableName: 'tableName',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allTable: 'boolean',
      columnNames: { 'type': 'array', 'itemType': 'string' },
      databaseName: 'string',
      privileges: { 'type': 'array', 'itemType': 'string' },
      schemaName: 'string',
      tableName: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.columnNames)) {
      $dara.Model.validateArray(this.columnNames);
    }
    if(Array.isArray(this.privileges)) {
      $dara.Model.validateArray(this.privileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

