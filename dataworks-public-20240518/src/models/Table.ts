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
   * 
   * @example
   * 测试类目
   */
  name?: string;
  /**
   * @remarks
   * The parent category\\"s ID. This can be an empty string.
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
   * The environment type. Valid values:
   * 
   * - Prod: The production environment.
   * 
   * - Dev: The development environment.
   * 
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @remarks
   * The number of times the table was favorited.
   * 
   * @example
   * 0
   */
  favorCount?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 234
   */
  projectId?: number;
  /**
   * @remarks
   * The number of reads.
   * 
   * @example
   * 0
   */
  readCount?: number;
  /**
   * @remarks
   * The number of views.
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
   * The tag key. This value cannot be empty.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value. This can be an empty string.
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
   * The task ID.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * The task name.
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
   * The list of categories to which the table belongs.
   */
  categories?: TableBusinessMetadataCategories[][];
  /**
   * @remarks
   * A map of custom attribute identifiers to lists of their corresponding values.
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * Extended information. This parameter is supported only for the MaxCompute data type.
   */
  extension?: TableBusinessMetadataExtension;
  /**
   * @remarks
   * The instructions for use.
   * 
   * @example
   * ## 使用说明
   */
  readme?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: TableBusinessMetadataTags[];
  /**
   * @remarks
   * The list of upstream tasks.
   */
  upstreamTasks?: TableBusinessMetadataUpstreamTasks[];
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      customAttributes: 'CustomAttributes',
      extension: 'Extension',
      readme: 'Readme',
      tags: 'Tags',
      upstreamTasks: 'UpstreamTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': TableBusinessMetadataCategories } },
      customAttributes: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
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
    if(this.customAttributes) {
      $dara.Model.validateMap(this.customAttributes);
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
   * Indicates whether the table is compressed.
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
   * The storage location.
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
   * The parameter information.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The class used by the serializer/deserializer (SerDe).
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
   * The business metadata. This parameter is specific to DataWorks and includes instructions, tags, categories, upstream tasks, and extended information.
   */
  businessMetadata?: TableBusinessMetadata;
  /**
   * @remarks
   * The comment on the table.
   * 
   * @example
   * 测试表
   */
  comment?: string;
  /**
   * @remarks
   * The table creation time, provided as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1736852168000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the entity. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The format is `${EntityType}:${instance ID or escaped URL}:${data catalog identifier}:${database name}:${schema name}:${table name}`. Use an empty string as a placeholder for any non-existent level.
   * 
   * > For MaxCompute and DLF data types, use an empty string as a placeholder for the instance ID. For MaxCompute, the database name is the MaxCompute project name. You must provide a schema name for projects where the three-layer model is enabled. If the model is not enabled, use an empty string as a placeholder for the schema name.
   * 
   * > For StarRocks data types, the data catalog identifier is the catalog name. For DLF data types, the data catalog identifier is the catalog ID. Other data types do not support the catalog level. For these types, use an empty string as a placeholder.
   * 
   * The following are the ID formats for several common data types:
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
   * > Placeholder descriptions:<br>
   * > `instance_id`: The instance ID. This is required when the data source is registered in instance mode.<br>
   * > `encoded_jdbc_url`: The URL-encoded JDBC connection string. This is required when the data source is registered by using a connection string.<br>
   * > `catalog_id`: The DLF catalog ID.<br>
   * > `project_name`: The MaxCompute project name.<br>
   * > `database_name`: The database name.<br>
   * > `schema_name`: The schema name. For the MaxCompute data type, this is required only if the project has the three-layer model enabled. Otherwise, use an empty string as a placeholder.<br>
   * > `table_name`: The table name.<br><br><br><br><br><br><br>
   * 
   * @example
   * dlf-table::catalog_id:database_name::table_name
   */
  id?: string;
  /**
   * @remarks
   * The time the table was last modified, provided as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1736852168000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent metadata entity. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * - For data types that support schemas, such as `maxcompute/holo/postgresql/sqlserver/hybriddb_for_postgresql/oracle`, `ParentMetaEntityId` specifies the table\\"s database schema. For the MaxCompute data type, this applies only to MaxCompute projects with the three-layer model enabled. The format is `${EntityType}:${instance ID or escaped URL}:${data catalog identifier}:${database name}:${schema name}`. Use an empty string as a placeholder for any non-existent level.
   * 
   * - For other data types, `ParentMetaEntityId` specifies the table\\"s database. The format is `${EntityType}:${instance ID or escaped URL}:${data catalog identifier}:${database name}`. Use an empty string as a placeholder for any non-existent level.
   * 
   * > For MaxCompute and DLF data types, use an empty string as a placeholder for the instance ID. For the MaxCompute data type, the database name is the MaxCompute project name.
   * 
   * > For StarRocks data types, the data catalog identifier is the catalog name. For DLF data types, the data catalog identifier is the catalog ID. Other data types do not support the catalog level. For these types, use an empty string as a placeholder.
   * 
   * The following are the formats of `ParentMetaEntityId` for several common data types:
   * 
   * `maxcompute-project:::project_name`
   * 
   * `maxcompute-schema:::project_name:schema_name` (Only for projects with the three-layer model enabled)
   * 
   * `dlf-database::catalog_id:database_name`
   * 
   * `hms-database:instance_id::database_name`
   * 
   * `holo-schema:instance_id::database_name:schema_name`
   * 
   * `mysql-database:(instance_id|encoded_jdbc_url)::database_name`
   * 
   * > Placeholder descriptions:<br>
   * > `instance_id`: The instance ID. This is required when the data source is registered in instance mode.<br>
   * > `encoded_jdbc_url`: The URL-encoded JDBC connection string. This is required when the data source is registered by using a connection string.<br>
   * > `catalog_id`: The DLF catalog ID.<br>
   * > `project_name`: The MaxCompute project name.<br>
   * > `database_name`: The database name.<br>
   * > `schema_name`: The schema name.<br><br><br><br><br><br>
   * 
   * @example
   * dlf-database::catalog_id:database_name
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The list of partition keys. This parameter is empty for non-partitioned tables.
   */
  partitionKeys?: string[];
  /**
   * @remarks
   * The table type. The value depends on the type of metadata collector.
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

