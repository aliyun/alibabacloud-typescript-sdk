// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTableFromCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30000235594
   */
  categoryId?: number;
  /**
   * @remarks
   * The database ID. You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to query the ID of a physical database and the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to query the ID of a logical database.
   * 
   * >  The value of DatabaseId is that of DbId.
   * 
   * This parameter is required.
   * 
   * @example
   * 43153
   */
  dbId?: number;
  /**
   * @remarks
   * The table name.
   * 
   * > You can also call the [ListTables](https://help.aliyun.com/document_detail/141878.html) operation to query the table name.
   * 
   * This parameter is required.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The schema name of the table, which is required only for SQL Server instances.
   * 
   * @example
   * dbo
   */
  tableSchemaName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * >  To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3****
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      dbId: 'DbId',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      dbId: 'number',
      tableName: 'string',
      tableSchemaName: 'string',
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

