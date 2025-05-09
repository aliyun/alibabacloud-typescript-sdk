// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveColumnsDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the field. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) operation to obtain the name of the field.
   * 
   * >  You can also call the [ListColumns](https://help.aliyun.com/document_detail/141870.html) operation to obtain the name of the field.
   * 
   * This parameter is required.
   * 
   * @example
   * ColumnName_test
   */
  columnName?: string;
  /**
   * @remarks
   * The ID of the database. The database can be a physical database or a logical database.
   * 
   * *   To obtain the ID of a physical database, call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * *   To obtain the ID of a logical database, call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation.
   * 
   * @example
   * 1860****
   */
  dbId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   **true**: The database is a logical database.
   * *   **false**: The database is a physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The name of the database. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) operation to obtain the name of the database.
   * 
   * > * You can also call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the name of a physical database.
   * > * You can also call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) or [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to obtain the name of a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * SchemaName_test
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table. You can call the [ListSensitiveColumns](https://help.aliyun.com/document_detail/188103.html) operation to obtain the name of the table.
   * 
   * >  You can also call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to obtain the name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) or [ListUserTenants](https://help.aliyun.com/document_detail/198074.html) operation to obtain the tenant ID.
   * 
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      dbId: 'DbId',
      logic: 'Logic',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      dbId: 'number',
      logic: 'boolean',
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

