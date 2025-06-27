// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequest extends $dara.Model {
  /**
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @example
   * abc
   */
  name?: string;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent metadata entity ID. You can refer to the responses of the ListDatabases or ListSchemas operation and [Description of concepts related to metadata entities.](https://help.aliyun.com/document_detail/2880092.html)
   * 
   * *   The parent metadata entity is a database: The format of `ParentMetaEntityId` is `${EntityType}:${Instance ID or encoded URL}:${Catalog Identifier}:${Database Name}`. Use an empty string (\\`""\\`) as a placeholder for any non-existent level.
   * *   The parent metadata entity is a database schema:. The format of `ParentMetaEntityId` is `${EntityType}:${Instance ID or encoded URL}:${Catalog Identifier}:${Database Name}:${Schema Name}`. Use an empty string (\\`""\\`) as a placeholder for any non-existent level.
   * 
   * >  The schema level in `ParentMetaEntityId` is supported only for database types that support schemas, such as MaxCompute (with schema enabled), Hologres, PostgreSQL, SQL Server, HybridDB for PostgreSQL, and Oracle.``
   * 
   * >  For MaxCompute and DLF types, use empty strings as the instance ID. For MaxCompute, the database name is the same as the project name.
   * 
   * >  For the StarRocks type, the catalog identifier is the catalog name. For the DLF type, it refers to the catalog ID. Other types do not support a catalog-level hierarchy and the catalog identifier must be replaced with an empty string as a placeholder.
   * 
   * Examples of common ParentMetaEntityId formats
   * 
   * `maxcompute-project:::project_name`
   * 
   * `maxcompute-schema:::project_name:schema_name` (for MaxCompute projects with schema enabled)
   * 
   * `dlf-database::catalog_id:database_name`
   * 
   * `hms-database:instance_id::database_name`
   * 
   * `holo-schema:instance_id::database_name:schema_name`
   * 
   * `mysql-database:(instance_id|encoded_jdbc_url)::database_name`
   * 
   * > \\
   * `instance_id`: The instance ID, required when the data source is registered in instance mode.\\
   * `encoded_jdbc_url`: The JDBC connection string that has been URL encoded, required for the data source registered via a connection string.\\
   * `catalog_id`: The DLF catalog ID.\\
   * `project_name`: The MaxCompute project name.\\
   * `database_name`: The database name.\\
   * `schema_name`: The schema name.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-schema:123456XXX::test_project_with_schema:default
   * maxcompute-project:123456XXX::test_project_without_schema
   * dlf-database:123456XXX:test_catalog:test_db
   * hms-database:c-abc123xxx::test_db
   * holo-schema:h-abc123xxx::test_db:test_schema
   * mysql-database:jdbc%3Amysql%3A%2F%2F127.0.0.1%3A3306%2Ftest_db::test_db
   */
  parentMetaEntityId?: string;
  /**
   * @example
   * CreateTime
   */
  sortBy?: string;
  tableTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentMetaEntityId: 'ParentMetaEntityId',
      sortBy: 'SortBy',
      tableTypes: 'TableTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentMetaEntityId: 'string',
      sortBy: 'string',
      tableTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableTypes)) {
      $dara.Model.validateArray(this.tableTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

