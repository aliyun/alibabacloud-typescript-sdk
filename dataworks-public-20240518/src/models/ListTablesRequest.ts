// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTablesRequest extends $dara.Model {
  /**
   * @remarks
   * The comment. Fuzzy match is supported.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * Specifies whether to return extended properties. If this parameter is set to `true`, extended properties are returned. If this parameter is set to `false`, extended properties are not returned.
   * 
   * @example
   * true
   */
  includeExtendedProperties?: boolean;
  /**
   * @remarks
   * The name. Fuzzy match is supported.
   * 
   * @example
   * abc
   */
  name?: string;
  /**
   * @remarks
   * The sort order. Default value: Asc. Valid values:
   * - Asc: ascending order
   * - Desc: descending order
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
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent metadata entity. You can refer to the response of the ListDatabases or ListSchemas operation, or see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * - The parent entity can be the database to which the table belongs. The `ParentMetaEntityId` format is `${EntityType}:${Instance ID or URL-encoded JDBC URL}:${Data catalog identifier}:${Database name}`. Use an empty string as a placeholder for non-existent levels.
   * 
   * - The parent entity can also be the database schema to which the table belongs. The `ParentMetaEntityId` format is `${EntityType}:${Instance ID or URL-encoded JDBC URL}:${Data catalog identifier}:${Database name}:${Schema name}`. Use an empty string as a placeholder for non-existent levels.
   * 
   * > - The database schema can be used for `ParentMetaEntityId` only when the database type supports schemas (`maxcompute`, `holo`, `postgresql`, `sqlserver`, `hybriddb_for_postgresql`, or `oracle`). For MaxCompute, the three-level model must be enabled. Otherwise, only the database can be used.
   * > - For MaxCompute and DLF types, use an empty string as a placeholder for the instance ID. For MaxCompute, the database name is the MaxCompute project name.
   * > - For StarRocks, the data catalog identifier is the catalog name. For DLF, the data catalog identifier is the catalog ID. Other types do not support the catalog level, so use an empty string as a placeholder.
   * 
   * Examples of `ParentMetaEntityId` formats for common types:
   * 
   * - `maxcompute-project:::project_name`
   * 
   * - `maxcompute-schema:::project_name:schema_name` (only when the three-level model is enabled for the project)
   * 
   * - `dlf-database::catalog_id:database_name`
   * 
   * - `hms-database:instance_id::database_name`
   * 
   * - `holo-schema:instance_id::database_name:schema_name`
   * 
   * - `mysql-database:(instance_id|encoded_jdbc_url)::database_name`
   * 
   * > Where:  
   * > - `instance_id`: the instance ID, which is required when the data source is registered in instance mode.
   * > - `encoded_jdbc_url`: the URL-encoded JDBC connection string, which is required when the data source is registered by using a connection string.
   * > - `catalog_id`: the DLF catalog ID.
   * > - `project_name`: the MaxCompute project name.
   * > - `database_name`: the database name.
   * > - `schema_name`: the schema name.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-project:::project_name
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The field used for sorting. Default value: CreateTime. Valid values:
   * - CreateTime: creation time
   * - ModifyTime: modification time
   * - Name: name
   * - TableType: table type
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The list of table types to query. If this parameter is left empty, all table types are queried.
   */
  tableTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      includeExtendedProperties: 'IncludeExtendedProperties',
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
      includeExtendedProperties: 'boolean',
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

