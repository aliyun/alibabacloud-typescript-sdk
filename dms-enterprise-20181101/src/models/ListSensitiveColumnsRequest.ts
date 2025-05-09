// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the field. You can call the [ListColumns](https://help.aliyun.com/document_detail/141870.html) operation to query the name of the field.
   * 
   * @example
   * test_column
   */
  columnName?: string;
  /**
   * @remarks
   * The ID of the database. You can call the [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to query the ID of the database.
   * 
   * >  You can also call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to query the ID of the physical database and the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to query the ID of a logical database.
   * 
   * @example
   * 1860
   */
  dbId?: number;
  /**
   * @remarks
   * Specifies whether the database is a logical database. Valid values:
   * 
   * *   true: The database is a logical database.
   * *   false: The database is a physical database.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the database. You can call the [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to query the name of the database.
   * 
   * >  You can also call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to query the name of a physical database and the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to query the name of a logical database.
   * 
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The sensitivity level of the field. Valid values:
   * 
   * *   SENSITIVE: medium sensitivity level
   * *   CONFIDENTIAL: high sensitivity level
   * 
   * @example
   * SENSITIVE
   */
  securityLevel?: string;
  /**
   * @remarks
   * The name of the table. You can call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the ID of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, move the pointer over the profile picture in the upper-right corner of the Data Management (DMS) console. For more information, see the "View information about the current tenant" section of the [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html) topic.
   * 
   * @example
   * 3
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      dbId: 'DbId',
      logic: 'Logic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      schemaName: 'SchemaName',
      securityLevel: 'SecurityLevel',
      tableName: 'TableName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      dbId: 'number',
      logic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      schemaName: 'string',
      securityLevel: 'string',
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

