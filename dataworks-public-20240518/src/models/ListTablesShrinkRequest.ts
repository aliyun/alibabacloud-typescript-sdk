// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The comment on the table. Fuzzy matching is supported.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The name of the table. Fuzzy matching is supported.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Default value: `Asc`. Valid values:
   * 
   * - `Asc`: ascending
   * 
   * - `Desc`: descending
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
   * The page size. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent metadata entity. You can obtain this ID from the response of the ListDatabases or ListSchemas operation. For details, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * - The value can be the database to which the table belongs. The format is `${EntityType}:${instance ID or URL-encoded connection string}:${data catalog identifier}:${database name}`. Use an empty string as a placeholder for a hierarchy level that does not exist.
   * 
   * - The value can also be the schema to which the table belongs. The format is `${EntityType}:${instance ID or URL-encoded connection string}:${data catalog identifier}:${database name}:${schema name}`. Use an empty string as a placeholder for a hierarchy level that does not exist.
   * 
   * > * You can specify a schema in `ParentMetaEntityId` only if the database type supports schemas, such as `maxcompute/holo/postgresql/sqlserver/hybriddb_for_postgresql/oracle`. For the maxcompute type, the three-layer model must be enabled. Otherwise, you can only specify a database.
   * >
   * > * For `maxcompute` and `dlf` data types, use an empty string as a placeholder for the instance ID. For the maxcompute data type, the database name is the MaxCompute project name.
   * >
   * > * For the `starrocks` type, the data catalog identifier is the catalog name. For the `dlf` type, the data catalog identifier is the catalog ID. Other types do not support the catalog level, so you can use an empty string as a placeholder.
   * 
   * The following list shows the `ParentMetaEntityId` format for several common data source types:
   * 
   * - `maxcompute-project:::project_name`
   * 
   * - `maxcompute-schema:::project_name:schema_name` (Only when the three-layer model is enabled for the project)
   * 
   * - `dlf-database::catalog_id:database_name`
   * 
   * - `hms-database:instance_id::database_name`
   * 
   * - `holo-schema:instance_id::database_name:schema_name`
   * 
   * - `mysql-database:(instance_id|encoded_jdbc_url)::database_name`
   * 
   * > In these formats:
   * >
   * > - `instance_id`: The instance ID. This parameter is required if the data source is registered in instance mode.
   * >
   * > - `encoded_jdbc_url`: The URL-encoded JDBC connection string. This parameter is required if the data source is registered by using a connection string.
   * >
   * > - `catalog_id`: The ID of the DLF data catalog.
   * >
   * > - `project_name`: The name of the MaxCompute project.
   * >
   * > - `database_name`: The name of the database.
   * >
   * > - `schema_name`: The name of the schema.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-project:::project_name
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The sort field. Default value: `CreateTime`. Valid values:
   * 
   * - `CreateTime`: creation time
   * 
   * - `ModifyTime`: modification time
   * 
   * - `Name`: name
   * 
   * - `TableType`: table type
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * A list of table types to query. If you omit this parameter, tables of all types are returned.
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

