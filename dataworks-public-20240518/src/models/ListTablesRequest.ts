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
   * The page size. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the parent-level metadata entity. You can obtain this value from the response of the ListDatabases or ListSchemas operation. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * - The value can be the database to which the table belongs. The ParentMetaEntityId format is `${EntityType}:${InstanceID or encoded URL}:${DataCatalogIdentifier}:${DatabaseName}`. Use an empty string as a placeholder for levels that do not exist.
   * 
   * - The value can also be the database schema to which the table belongs. The ParentMetaEntityId format is `${EntityType}:${InstanceID or encoded URL}:${DataCatalogIdentifier}:${DatabaseName}:${SchemaName}`. Use an empty string as a placeholder for levels that do not exist.
   * 
   * > - You can set ParentMetaEntityId to a database schema only when the database type supports schemas (`maxcompute/holo/postgresql/sqlserver/hybriddb_for_postgresql/oracle`, and the three-level model must be enabled for the maxcompute type). Otherwise, you can set this parameter only to a database.
   * > - For the maxcompute and dlf types, use an empty string as a placeholder for the instance ID. For the maxcompute type, the database name is the MaxCompute project name.
   * > - For the starrocks type, the data catalog identifier is the catalog name. For the dlf type, the data catalog identifier is the catalog ID. Other types do not support the catalog level. Use an empty string as a placeholder.
   * 
   * The following examples show the ParentMetaEntityId formats for common types:
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
   * > - `instance_id`: The instance ID. This value is required when the data source is registered in instance mode.
   * > - `encoded_jdbc_url`: The URL-encoded JDBC connection string. This value is required when the data source is registered by using a connection string.
   * > - `catalog_id`: The DLF catalog ID.
   * > - `project_name`: The MaxCompute project name.
   * > - `database_name`: The database name.
   * > - `schema_name`: The schema name.
   * 
   * This parameter is required.
   * 
   * @example
   * maxcompute-project:::project_name
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The field by which to sort the results. Default value: CreateTime. Valid values:
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
   * The list of table types to query. If this parameter is left empty, all types are queried.
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

