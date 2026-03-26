// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableBusinessMetadataCategories extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * CATEGORY.456
   */
  id?: string;
  /**
   * @remarks
   * The category name.
   */
  name?: string;
  /**
   * @remarks
   * The parent category ID. You can leave this parameter empty.
   * 
   * @example
   * CATEGORY.123
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableBusinessMetadataExtension extends $dara.Model {
  /**
   * @remarks
   * The type of the environment. Valid values:
   * 
   * *   Prod
   * *   Dev
   * 
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @remarks
   * The number of times the table is added to favorites.
   * 
   * @example
   * 0
   */
  favorCount?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 234
   */
  projectId?: number;
  /**
   * @remarks
   * The number of times the table is read.
   * 
   * @example
   * 0
   */
  readCount?: number;
  /**
   * @remarks
   * The number of times the table is viewed.
   * 
   * @example
   * 0
   */
  viewCount?: number;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      favorCount: 'FavorCount',
      projectId: 'ProjectId',
      readCount: 'ReadCount',
      viewCount: 'ViewCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envType: 'string',
      favorCount: 'number',
      projectId: 'number',
      readCount: 'number',
      viewCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableBusinessMetadataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. You cannot leave this parameter empty.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can leave this parameter empty.
   * 
   * @example
   * tag_value
   * 
   * **if can be null:**
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableBusinessMetadataUpstreamTasks extends $dara.Model {
  /**
   * @remarks
   * The ancestor task ID.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * The ancestor task name.
   * 
   * @example
   * test_task
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableBusinessMetadata extends $dara.Model {
  /**
   * @remarks
   * The categories.
   */
  categories?: TableBusinessMetadataCategories[][];
  /**
   * @remarks
   * The extended information. Only MaxCompute tables supports this parameter.
   */
  extension?: TableBusinessMetadataExtension;
  /**
   * @remarks
   * The usage notes.
   */
  readme?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: TableBusinessMetadataTags[];
  /**
   * @remarks
   * The ancestor tasks.
   */
  upstreamTasks?: TableBusinessMetadataUpstreamTasks[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      extension: 'Extension',
      readme: 'Readme',
      tags: 'Tags',
      upstreamTasks: 'UpstreamTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': TableBusinessMetadataCategories } },
      extension: TableBusinessMetadataExtension,
      readme: 'string',
      tags: { 'type': 'array', 'itemType': TableBusinessMetadataTags },
      upstreamTasks: { 'type': 'array', 'itemType': TableBusinessMetadataUpstreamTasks },
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    if(this.extension && typeof (this.extension as any).validate === 'function') {
      (this.extension as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.upstreamTasks)) {
      $dara.Model.validateArray(this.upstreamTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TableTechnicalMetadata extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the table is a compressed table. Valid values: true and false.
   * 
   * @example
   * false
   */
  compressed?: boolean;
  /**
   * @remarks
   * The input format.
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat
   */
  inputFormat?: string;
  /**
   * @remarks
   * The storage location of the table.
   * 
   * @example
   * oss://test-bucket/test_tbl
   */
  location?: string;
  /**
   * @remarks
   * The output format.
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat
   */
  outputFormat?: string;
  /**
   * @remarks
   * The table owner.
   * 
   * @example
   * test_user
   */
  owner?: string;
  /**
   * @remarks
   * The information about parameters.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The implementation class of SerDe.
   * 
   * @example
   * org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe
   */
  serializationLibrary?: string;
  static names(): { [key: string]: string } {
    return {
      compressed: 'Compressed',
      inputFormat: 'InputFormat',
      location: 'Location',
      outputFormat: 'OutputFormat',
      owner: 'Owner',
      parameters: 'Parameters',
      serializationLibrary: 'SerializationLibrary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressed: 'boolean',
      inputFormat: 'string',
      location: 'string',
      outputFormat: 'string',
      owner: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serializationLibrary: 'string',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Table extends $dara.Model {
  /**
   * @remarks
   * The information about the business metadata that is related to DataWorks, including the usage notes, tags, categories, ancestor tasks, and extended information.
   */
  businessMetadata?: TableBusinessMetadata;
  /**
   * @remarks
   * The comments.
   */
  comment?: string;
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1736852168000
   */
  createTime?: number;
  /**
   * @remarks
   * The table ID. For more information, see [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The common format of this parameter is `${Entity type}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}:${Schema name}:${Table name}`. If a level does not exist, specify an empty string as a placeholder.
   * 
   * >  For MaxCompute and DLF tables, specify an empty string at the Instance ID level as a placeholder. For MaxCompute tables, specify a MaxCompute project name at the Database name level. If the three-layer model is enabled for your MaxCompute project, you must specify a schema name at the Schema name level. Otherwise, you can specify an empty string at the Schema name level as a placeholder.
   * 
   * >  For StarRocks tables, specify a catalog name at the Catalog identifier level. For DLF tables, specify a catalog ID at the Catalog identifier level. Other types of tables do not support the Catalog identifier level, and you can specify an empty string as a placeholder.
   * 
   * You can configure this parameter in one of the following formats based on your table type:
   * 
   * `maxcompute-table:::project_name:[schema_name]:table_name`
   * 
   * `dlf-table::catalog_id:database_name::table_name`
   * 
   * `hms-table:instance_id::database_name::table_name`
   * 
   * `holo-table:instance_id::database_name:schema_name:table_name`
   * 
   * `mysql-table:(instance_id|encoded_jdbc_url)::database_name::table_name`
   * 
   * > \\
   * `instance_id`: the ID of an instance. If the related data source is added to DataWorks in Alibaba Cloud instance mode, you must configure this parameter.\\
   * `encoded_jdbc_url`: the JDBC connection string that is URL-encoded. If the related data source is added to DataWorks in connection string mode, you must configure this parameter.\\
   * `catalog_id`: the ID of a DLF catalog.\\
   * `project_name`: the name of a MaxCompute project.\\
   * `database_name`: the name of a database.\\
   * `schema_name`: the name of a schema. For a MaxCompute table, this parameter is required only if the three-layer model is enabled for the MaxCompute project to which the table belongs. If the schema feature is not enabled for the MaxCompute project, specify an empty string for this parameter as a placeholder.\\
   * `table_name`: the name of a table.
   * 
   * @example
   * maxcompute-table:123456XXX::test_project::test_tbl
   * dlf-table:123456XXX:test_catalog:test_db::test_tbl
   * hms-table:c-abc123xxx::test_db::test_tbl
   * holo-table:h-abc123xxx::test_db:test_schema:test_tbl
   */
  id?: string;
  /**
   * @remarks
   * The modification time. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1736852168000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test_tbl
   */
  name?: string;
  /**
   * @remarks
   * The ID of a parent metadata entity. For more information, see [Concepts related to metadata entities](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * *   For data source types that support schemas, such as `MaxCompute, Hologres, PostgreSQL, SQL Server, HybridDB for PostgreSQL, and Oracle`, the `ParentMetaEntityId` parameter specifies the schema of the database to which the table belongs. In this case, the common format of this parameter is `${Entity type}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}:${Schema name}`. If a level does not exist, leave the level empty. For a MaxCompute data table, you must make sure that the three-layer model is enabled for the MaxCompute project to which the table belongs.
   * *   For other data source types that do not support schemas, the `ParentMetaEntityId` parameter specifies the database to which the table belongs. In this case, the common format of this parameter is `${Entity type}:${Instance ID or escaped URL}:${Catalog identifier}:${Database name}`. If a level does not exist, leave the level empty.
   * 
   * >  For MaxCompute and DLF tables, specify an empty string at the Instance ID level as a placeholder. For MaxCompute tables, specify a MaxCompute project name at the Database name level.
   * 
   * >  For StarRocks tables, specify a catalog name at the Catalog identifier level. For DLF tables, specify a catalog ID at the Catalog identifier level. Other types of tables do not support the Catalog identifier level, and you can specify an empty string as a placeholder.
   * 
   * You can configure this parameter in one of the following formats based on your table type:
   * 
   * `maxcompute-project:::project_name`
   * 
   * `maxcompute-schema:::project_name:schema_name` (Three-layer model enabled for the MaxCompute project)
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
   * `instance_id`: the ID of an instance. If the related data source is added to DataWorks in Alibaba Cloud instance mode, you must configure this parameter.\\
   * `encoded_jdbc_url`: the JDBC connection string that is URL-encoded. If the related data source is added to DataWorks in connection string mode, you must configure this parameter.\\
   * `catalog_id`: the ID of a DLF catalog.\\
   * `project_name`: the name of a MaxCompute project.\\
   * `database_name`: the name of a database.\\
   * `schema_name`: the name of a schema.
   * 
   * @example
   * maxcompute-schema:123456XXX::test_project_with_schema:default
   * maxcompute-project:123456XXX::test_project_without_schema
   * dlf-database:123456XXX:test_catalog:test_db
   * hms-database:c-abc123xxx::test_db
   * holo-schema:h-abc123xxx::test_db:test_schema
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The partition keys. If the table is a non-partitioned table, leave this parameter empty.
   */
  partitionKeys?: string[];
  /**
   * @remarks
   * The table type. The value of this parameter is related to the type of metadata crawler.
   * 
   * @example
   * TABLE
   */
  tableType?: string;
  /**
   * @remarks
   * The technical metadata.
   */
  technicalMetadata?: TableTechnicalMetadata;
  static names(): { [key: string]: string } {
    return {
      businessMetadata: 'BusinessMetadata',
      comment: 'Comment',
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      parentMetaEntityId: 'ParentMetaEntityId',
      partitionKeys: 'PartitionKeys',
      tableType: 'TableType',
      technicalMetadata: 'TechnicalMetadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessMetadata: TableBusinessMetadata,
      comment: 'string',
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      parentMetaEntityId: 'string',
      partitionKeys: { 'type': 'array', 'itemType': 'string' },
      tableType: 'string',
      technicalMetadata: TableTechnicalMetadata,
    };
  }

  validate() {
    if(this.businessMetadata && typeof (this.businessMetadata as any).validate === 'function') {
      (this.businessMetadata as any).validate();
    }
    if(Array.isArray(this.partitionKeys)) {
      $dara.Model.validateArray(this.partitionKeys);
    }
    if(this.technicalMetadata && typeof (this.technicalMetadata as any).validate === 'function') {
      (this.technicalMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

