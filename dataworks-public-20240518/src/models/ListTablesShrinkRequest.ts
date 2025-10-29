// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The comment. Supports fuzzy matching.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The name. Supports fuzzy matching.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The order in which the tables are sorted. Default value: Asc. Valid values:
   * 
   * *   Asc
   * *   Desc
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The parent metadata entity ID. You can refer to the responses of the ListDatabases or ListSchemas operation and [Description of concepts related to metadata entities.](https://help.aliyun.com/document_detail/2880092.html)
   * 
   * *   The parent metadata entity is a database: The format of `ParentMetaEntityId` is `${EntityType}:${Instance ID or encoded URL}:${Catalog Identifier}:${Database Name}`. Use an empty string (\\`""\\`) as a placeholder for any non-existent level.
   * *   The parent metadata entity is a database schema: The format of `ParentMetaEntityId` is `${EntityType}:${Instance ID or encoded URL}:${Catalog Identifier}:${Database Name}:${Schema Name}`. Use an empty string (\\`""\\`) as a placeholder for any non-existent level.
   * 
   * > 
   * 
   * *   The schema level in `ParentMetaEntityId` is supported only for database services, such as `MaxCompute (with schema enabled), Hologres, PostgreSQL, SQL Server, HybridDB for PostgreSQL, and Oracle`.
   * 
   * *   For the MaxCompute and DLF types, use an empty string as the placeholder for the instance ID. For MaxCompute, the database name is the same as the project name.
   * 
   * *   For StarRocks, the catalog identifier is the catalog name. For DLF, it is the catalog ID. Other types do not support the catalog level and you can use an empty string as a placeholder.
   * 
   * Examples of common ParentMetaEntityId formats
   * 
   * *   `maxcompute-project:::project_name`
   * *   `maxcompute-schema:::project_name:schema_name` (for MaxCompute projects with schema enabled)
   * *   `dlf-database::catalog_id:database_name`
   * *   `hms-database:instance_id::database_name`
   * *   `holo-schema:instance_id::database_name:schema_name`
   * *   `mysql-database:(instance_id|encoded_jdbc_url)::database_name`
   * 
   * > 
   * 
   * *   `instance_id`: The instance ID, which is required when the data source is registered in instance mode.
   * 
   * *   `encoded_jdbc_url`: The URLEncoded JDBC connection string, which is requiredwhen the data source is registered using a connection string.
   * 
   * *   `catalog_id`: The DLF catalog ID.
   * 
   * *   `project_name`: The MaxCompute project name.
   * 
   * *   `database_name`: The database name.
   * 
   * *   `schema_name`: The schema name.
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
   * @remarks
   * The sort field. Default value: CreateTime. Valid values:
   * 
   * *   CreateTime
   * *   ModifyTime
   * *   Name
   * *   TableType
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The list of table types to query. If it\\"s left empty, all types will be queried.
   */
  tableTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentMetaEntityId: 'ParentMetaEntityId',
      sortBy: 'SortBy',
      tableTypesShrink: 'TableTypes',
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
      tableTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

