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
   * The name.
   * 
   * @example
   * 测试类目
   */
  name?: string;
  /**
   * @remarks
   * The parent category ID. This parameter can be empty.
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
   * - Prod: Production environment.
   * - Dev: Development environment.
   * 
   * @example
   * Dev
   */
  envType?: string;
  /**
   * @remarks
   * The favorite count.
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
   * The read count.
   * 
   * @example
   * 0
   */
  readCount?: number;
  /**
   * @remarks
   * The view count.
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
   * The tag key. This parameter cannot be empty.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value. This parameter can be empty.
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
   * The node ID.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * The node name.
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
   * The list of categories.
   */
  categories?: TableBusinessMetadataCategories[][];
  /**
   * @remarks
   * The custom attribute values, where key is the custom attribute identifier and value is the list of attribute values.
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * The extension information. Currently only supported for MaxCompute type.
   */
  extension?: TableBusinessMetadataExtension;
  /**
   * @remarks
   * The usage instructions.
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
   * The list of upstream nodes.
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
   * The owner.
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
   * The class used by SerDe.
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
   * The business metadata related to DataWorks, including usage instructions, tags, categories, upstream production nodes, and extended information.
   */
  businessMetadata?: TableBusinessMetadata;
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * 测试表
   */
  comment?: string;
  /**
   * @remarks
   * The creation time, in millisecond-level timestamp.
   * 
   * @example
   * 1736852168000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The format is `${EntityType}:${instance ID or encoded URL}:${DataFolderIdentity}:${DatabaseName}:${PatternName}:${TableName}`. Use an empty character as a placeholder for levels that do not exist.
   * 
   * > For maxcompute and dlf types, use an empty string as a placeholder for the instance ID. For the maxcompute type, the database name is the MaxCompute project name. Projects with the three-layer model enabled require a schema name. For projects without the three-layer model enabled, use an empty string as a placeholder for the schema name.
   * 
   * > For the starrocks type, the data catalog identifier is the catalog name. For the dlf type, the data catalog identifier is the catalog ID. Other types do not support the catalog level. Use an empty string as a placeholder.
   * 
   * The following examples show the ID formats for common types:
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
   * > Where  
   * `instance_id`: The instance ID. This is required when the data source is registered in instance mode.  
   * `encoded_jdbc_url`: The URL-encoded JDBC connection string. This is required when the data source is registered by using a connection string.  
   * `catalog_id`: The DLF catalog ID.  
   * `project_name`: The MaxCompute project name.   
   * `database_name`: The database name.   
   * `schema_name`: The schema name. For the maxcompute type, this is required only when the three-layer model is enabled for the project. If the three-layer model is not enabled, use an empty string as a placeholder.   
   * `table_name`: The table name.
   * 
   * @example
   * dlf-table::catalog_id:database_name::table_name
   */
  id?: string;
  /**
   * @remarks
   * The modification time, in millisecond-level timestamp.
   * 
   * @example
   * 1736852168000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * table_name
   */
  name?: string;
  /**
   * @remarks
   * The parent-level metadata entity ID. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * - For types that support schemas (`maxcompute/holo/postgresql/sqlserver/hybriddb_for_postgresql/oracle, where the maxcompute type requires the Layer 3 model to be enabled for the project`), ParentMetaEntityId is the database pattern to which the table belongs. The format is `${EntityType}:${instance ID or encoded URL}:${DataFolderIdentity}:${DatabaseName}:${PatternName}`. Use an empty character as a placeholder for levels that do not exist.
   * 
   * - For other types, ParentMetaEntityId is the database to which the table belongs. The format is `${EntityType}:${instance ID or encoded URL}:${DataFolderIdentity}:${DatabaseName}`. Use an empty character as a placeholder for levels that do not exist.
   * 
   * > For maxcompute and dlf types, use an empty string as a placeholder for the instance ID. For the maxcompute type, the database name is the MaxCompute project name.
   * 
   * > For the starrocks type, the data catalog identifier is the catalog name. For the dlf type, the data catalog identifier is the catalog ID. Other types do not support the catalog level. Use an empty string as a placeholder.
   * 
   * The following examples show the ParentMetaEntityId formats for common types:
   * 	
   * `maxcompute-project:::project_name`
   * 
   * `maxcompute-schema:::project_name:schema_name` (only when the three-layer model is enabled for the project)
   * 
   * `dlf-database::catalog_id:database_name`
   * 
   * `hms-database:instance_id::database_name`
   * 
   * `holo-schema:instance_id::database_name:schema_name`
   * 
   * `mysql-database:(instance_id|encoded_jdbc_url)::database_name`
   * 
   * > Where  
   * `instance_id`: The instance ID. This is required when the data source is registered in instance mode.   
   * `encoded_jdbc_url`: The URL-encoded JDBC connection string. This is required when the data source is registered by using a connection string.   
   * `catalog_id`: The DLF catalog ID.   
   * `project_name`: The MaxCompute project name.   
   * `database_name`: The database name.   
   * `schema_name`: The schema name.
   * 
   * @example
   * dlf-database::catalog_id:database_name
   */
  parentMetaEntityId?: string;
  /**
   * @remarks
   * The list of partition keys. This is empty for non-partitioned tables.
   */
  partitionKeys?: string[];
  statisticsInfos?: { [key: string]: string };
  /**
   * @remarks
   * The table type. The valid values depend on the metadata collector type.
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
      statisticsInfos: 'StatisticsInfos',
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
      statisticsInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
    if(this.statisticsInfos) {
      $dara.Model.validateMap(this.statisticsInfos);
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

