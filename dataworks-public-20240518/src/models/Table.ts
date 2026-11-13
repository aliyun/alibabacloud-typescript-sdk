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
   * Test category
   */
  name?: string;
  /**
   * @remarks
   * The parent category ID, which can be empty.
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
   * - Prod: production environment.
   * - Dev: development environment.
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
   * The list of categories.
   */
  categories?: TableBusinessMetadataCategories[][];
  /**
   * @remarks
   * The custom attribute values. The key is the custom attribute identifier, and the value is the list of attribute values.
   * 
   * @example
   * {"owner_name":["Zhang San"]}
   */
  customAttributes?: { [key: string]: string[] };
  /**
   * @remarks
   * The extension information. Currently, only the MaxCompute type is supported.
   */
  extension?: TableBusinessMetadataExtension;
  /**
   * @remarks
   * The instructions.
   * 
   * @example
   * ## Instructions
   */
  readme?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: TableBusinessMetadataTags[];
  /**
   * @remarks
   * The list of upstream tasks that produce the table.
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
   * Specifies whether the table is compressed.
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
   * 
   * @example
   * {"key1":"value"}
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The SerDe class.
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
   * The business metadata related to DataWorks, including the instructions, tags, categories, upstream tasks that produce the table, and extension information.
   */
  businessMetadata?: TableBusinessMetadata;
  /**
   * @remarks
   * The comment.
   * 
   * @example
   * Test table
   */
  comment?: string;
  /**
   * @remarks
   * The creation time (millisecond timestamp).
   * 
   * @example
   * 1736852168000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * The format is `${EntityType}:${Instance ID or URL-encoded JDBC URL}:${Data catalog identifier}:${Database name}:${Schema name}:${Table name}`. Use an empty string as a placeholder for non-existent levels.
   * 
   * > For MaxCompute and DLF types, use an empty string as a placeholder for the instance ID. For the MaxCompute type, the database name is the MaxCompute project name. If the three-tier model is enabled for the project, the schema name must be provided. Otherwise, use an empty string as a placeholder for the schema name.
   * 
   * > For the StarRocks type, the data catalog identifier is the catalog name. For the DLF type, the data catalog identifier is the catalog ID. Other types do not support the catalog level, so you can use an empty string as a placeholder. 
   * 
   * The ID formats for several common types are as follows: 
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
   * > Where:  
   * `instance_id`: the instance ID, which is required when the data source is registered in instance mode.  
   * `encoded_jdbc_url`: the URL-encoded JDBC connection string, which is required when the data source is registered in connection string mode.  
   * `catalog_id`: the DLF catalog ID.  
   * `project_name`: the MaxCompute project name.   
   * `database_name`: the database name.   
   * `schema_name`: the schema name. For the MaxCompute type, this is required only when the three-tier model is enabled for the project. Otherwise, use an empty string as a placeholder.   
   * `table_name`: the table name.
   * 
   * @example
   * dlf-table::catalog_id:database_name::table_name
   */
  id?: string;
  /**
   * @remarks
   * The modification time (millisecond timestamp).
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
   * The ID of the parent metadata entity. For more information, see [Metadata entity concepts](https://help.aliyun.com/document_detail/2880092.html).
   * 
   * - For types that support schemas (`maxcompute/holo/postgresql/sqlserver/hybriddb_for_postgresql/oracle`, where the MaxCompute type requires the three-tier model to be enabled for the project), `ParentMetaEntityId` is the database schema to which the table belongs. The format is `${EntityType}:${Instance ID or URL-encoded JDBC URL}:${Data catalog identifier}:${Database name}:${Schema name}`. Use an empty string as a placeholder for non-existent levels.
   * 
   * - For other types, `ParentMetaEntityId` is the database to which the table belongs. The format is `${EntityType}:${Instance ID or URL-encoded JDBC URL}:${Data catalog identifier}:${Database name}`. Use an empty string as a placeholder for non-existent levels.
   * 
   * > For MaxCompute and DLF types, use an empty string as a placeholder for the instance ID. For the MaxCompute type, the database name is the MaxCompute project name.
   * 
   * > For the StarRocks type, the data catalog identifier is the catalog name. For the DLF type, the data catalog identifier is the catalog ID. Other types do not support the catalog level, so you can use an empty string as a placeholder.
   * 
   * The `ParentMetaEntityId` formats for several common types are as follows:
   * 	
   * `maxcompute-project:::project_name`
   * 
   * `maxcompute-schema:::project_name:schema_name` (only when the three-tier model is enabled for the project)
   * 
   * `dlf-database::catalog_id:database_name`
   * 
   * `hms-database:instance_id::database_name`
   * 
   * `holo-schema:instance_id::database_name:schema_name`
   * 
   * `mysql-database:(instance_id|encoded_jdbc_url)::database_name`
   * 
   * > Where:  
   * `instance_id`: the instance ID, which is required when the data source is registered in instance mode.   
   * `encoded_jdbc_url`: the URL-encoded JDBC connection string, which is required when the data source is registered in connection string mode.   
   * `catalog_id`: the DLF catalog ID.   
   * `project_name`: the MaxCompute project name.   
   * `database_name`: the database name.   
   * `schema_name`: the schema name.
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
   * The statistical metrics of the table. The key is the metric name, and the value is the statistical value in string format. Currently, the metrics include the number of production runs in the last 30 days (prodRunCount30d), the number of ad hoc queries in the last 30 days (adhocQueryCount30d), the number of downstream tasks that depended on the table in the last 30 days (downstreamTaskCount30d), and the number of downstream tables that depended on it in the last 30 days (downstreamTableCount30d). Metrics without statistical values are not returned.
   * 
   * @example
   * {"prodRunCount30d": "128"}
   */
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

