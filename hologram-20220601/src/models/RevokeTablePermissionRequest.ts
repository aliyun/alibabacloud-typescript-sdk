// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeTablePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the operation takes effect on all tables. Valid values:
   * - true: Yes.
   * - false or null: No.
   * 
   * @example
   * false
   */
  allTable?: boolean;
  /**
   * @remarks
   * The list of column names for which permissions are to be revoked.
   */
  columnNames?: string[];
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * test_db
   */
  databaseName?: string;
  /**
   * @remarks
   * The list of permissions.
   */
  privileges?: string[];
  /**
   * @remarks
   * The schema name.
   * 
   * @example
   * my_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * my_table
   */
  tableName?: string;
  /**
   * @remarks
   * The user ID. For more information, see [Hologres account overview](https://help.aliyun.com/document_detail/130393.html).
   * 
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

