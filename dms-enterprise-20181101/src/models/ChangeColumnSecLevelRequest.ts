// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeColumnSecLevelRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the field. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) operation to obtain the name of the field.
   * 
   * > You can also call the [ListColumns](https://help.aliyun.com/document_detail/141870.html) operation to obtain the name of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * test_column
   */
  columnName?: string;
  /**
   * @remarks
   * The ID of the database. You can call the [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the ID of the database.
   * 
   * > You can also call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to obtain the ID of a physical database and the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to obtain the ID of a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * 325
   */
  dbId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   true: The database is a physical database.
   * *   false: The database is a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  isLogic?: boolean;
  /**
   * @remarks
   * The new sensitivity level of the field that you want to specify. Valid values:
   * 
   * *   INNER: low sensitivity level
   * *   SENSITIVE: medium sensitivity level
   * *   CONFIDENTIAL: high sensitivity level
   * 
   * This parameter is required.
   * 
   * @example
   * SENSITIVE
   */
  newLevel?: string;
  /**
   * @remarks
   * The name of the database. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) operation to obtain the name of the database.
   * 
   * *   You can also call the [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the name of the database.
   * *   You can also call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to obtain the name of a physical database and the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to obtain the name of a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) operation to obtain the name of the table.
   * 
   * > You can also call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to obtain the name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 43253
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      dbId: 'DbId',
      isLogic: 'IsLogic',
      newLevel: 'NewLevel',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      dbId: 'number',
      isLogic: 'boolean',
      newLevel: 'string',
      schemaName: 'string',
      tableName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

