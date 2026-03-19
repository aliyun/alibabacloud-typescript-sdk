// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetaCategoryTableEntity extends $dara.Model {
  /**
   * @remarks
   * For PostgreSQL-compatible databases, specify the database name.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * FC-1D123DF554A45AAB
   */
  categoryId?: number;
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * xxx@yyy.zzz
   */
  databaseSearchName?: string;
  /**
   * @remarks
   * The database ID. You can call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to query the ID of a physical database and the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to query the ID of a logical database.
   * 
   * > The value of DatabaseId is that of DbId.
   * 
   * @example
   * 123***
   */
  dbId?: number;
  /**
   * @remarks
   * The type of the database. Valid values include but are not limited to:
   * 
   * *   **MySQL**
   * *   **SQLServer**
   * *   **PostgreSQL**
   * *   **Oracle**
   * *   **DRDS**
   * *   **OceanBase**
   * *   **Mongo**
   * *   **Redis**
   * 
   * @example
   * MySQL
   */
  dbType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * ga_platform_alb
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance. You can call the [ListInstances](https://help.aliyun.com/document_detail/141936.html) or [GetInstance](https://help.aliyun.com/document_detail/141567.html) operation to query the instance ID.
   * 
   * @example
   * 174****
   */
  instanceId?: number;
  /**
   * @remarks
   * Database name (for PostgreSQL-compatible databases, specify the schema name). You can call the [SearchDatabase](https://help.aliyun.com/document_detail/141876.html) operation to query the name of the database.
   * 
   * > You can also call the [ListDatabases](https://help.aliyun.com/document_detail/141873.html) operation to query the SchemaName of a physical database or call the [ListLogicDatabases](https://help.aliyun.com/document_detail/141874.html) operation to query the SchemaName of a logical database.
   * 
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
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
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      categoryId: 'CategoryId',
      databaseSearchName: 'DatabaseSearchName',
      dbId: 'DbId',
      dbType: 'DbType',
      description: 'Description',
      instanceId: 'InstanceId',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tableSchemaName: 'TableSchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      categoryId: 'number',
      databaseSearchName: 'string',
      dbId: 'number',
      dbType: 'string',
      description: 'string',
      instanceId: 'number',
      schemaName: 'string',
      tableName: 'string',
      tableSchemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

