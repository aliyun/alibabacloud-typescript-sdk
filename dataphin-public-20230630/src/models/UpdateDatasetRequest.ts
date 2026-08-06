// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetRequestUpdateCommandVersionConfigFileStorageConfig extends $dara.Model {
  /**
   * @remarks
   * **The data source ID.**
   * 
   * This parameter is required.
   * 
   * @example
   * 7445343860022804608
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * Test data source.
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The development path (not required for basic projects).
   * 
   * @example
   * HTML正文提取/test423/
   */
  devPath?: string;
  /**
   * @remarks
   * The mount path.
   * 
   * This parameter is required.
   * 
   * @example
   * /var/run/openresty/cache/corp
   */
  mountPath?: string;
  /**
   * @remarks
   * The production path.
   * 
   * This parameter is required.
   * 
   * @example
   * HTML正文提取/test423/
   */
  prodPath?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      devPath: 'DevPath',
      mountPath: 'MountPath',
      prodPath: 'ProdPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceName: 'string',
      devPath: 'string',
      mountPath: 'string',
      prodPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfigTableSchemaColumnsVectorIndexConfig extends $dara.Model {
  /**
   * @remarks
   * The embedding dimension.
   * 
   * This parameter is required.
   * 
   * @example
   * instance:mongodb
   */
  dimension?: number;
  /**
   * @remarks
   * The embedding model.
   * 
   * This parameter is required.
   * 
   * @example
   * MultiModal-Embedding
   */
  embeddingModel?: string;
  /**
   * @remarks
   * The index build parameters. Different parameters are required based on the indexType. For example, HNSW requires {M:30, efConstruction:360}, and IVF_FLAT requires {nlist:128}.
   * 
   * @example
   * {M:30, efConstruction:360}
   */
  indexParams?: { [key: string]: any };
  /**
   * @remarks
   * The index type. PostgreSQL supports IVFFlat and HNSW. Milvus supports all types.
   * 
   * This parameter is required.
   * 
   * @example
   * AUTOINDEX
   */
  indexType?: string;
  /**
   * @remarks
   * The similarity type. Default value: COSINE. Valid values: COSINE, L2, and IP.
   * 
   * This parameter is required.
   * 
   * @example
   * COSINE
   */
  similarityType?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      embeddingModel: 'EmbeddingModel',
      indexParams: 'IndexParams',
      indexType: 'IndexType',
      similarityType: 'SimilarityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'number',
      embeddingModel: 'string',
      indexParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      indexType: 'string',
      similarityType: 'string',
    };
  }

  validate() {
    if(this.indexParams) {
      $dara.Model.validateMap(this.indexParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfigTableSchemaColumns extends $dara.Model {
  /**
   * @remarks
   * The field description.
   * 
   * @example
   * primary key
   */
  comment?: string;
  /**
   * @remarks
   * **The array element subtype. Valid only when type is set to ARRAY.**
   * 
   * @example
   * INT64
   */
  elementType?: string;
  /**
   * @remarks
   * The maximum capacity of the array. Valid only when type is set to ARRAY. Default value: 4096.
   * 
   * @example
   * 250
   */
  maxCapacity?: number;
  /**
   * @remarks
   * **The field name.**
   * 
   * This parameter is required.
   * 
   * @example
   * id
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the field is a primary key.
   * 
   * @example
   * true
   */
  pk?: boolean;
  /**
   * @remarks
   * **The field type.**
   * 
   * This parameter is required.
   * 
   * @example
   * int8
   */
  type?: string;
  /**
   * @remarks
   * Indicates whether the field is a URL.
   * 
   * @example
   * false
   */
  url?: boolean;
  /**
   * @remarks
   * The vector index configuration.
   */
  vectorIndexConfig?: UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfigTableSchemaColumnsVectorIndexConfig;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      elementType: 'ElementType',
      maxCapacity: 'MaxCapacity',
      name: 'Name',
      pk: 'Pk',
      type: 'Type',
      url: 'Url',
      vectorIndexConfig: 'VectorIndexConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      elementType: 'string',
      maxCapacity: 'number',
      name: 'string',
      pk: 'boolean',
      type: 'string',
      url: 'boolean',
      vectorIndexConfig: UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfigTableSchemaColumnsVectorIndexConfig,
    };
  }

  validate() {
    if(this.vectorIndexConfig && typeof (this.vectorIndexConfig as any).validate === 'function') {
      (this.vectorIndexConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfigTableSchema extends $dara.Model {
  /**
   * @remarks
   * The field list.
   */
  columns?: UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfigTableSchemaColumns[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfigTableSchemaColumns },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfig extends $dara.Model {
  /**
   * @remarks
   * **The data source ID.**
   * 
   * This parameter is required.
   * 
   * @example
   * 7429133693081710272
   */
  dataSourceId?: string;
  /**
   * @remarks
   * **The data source name.**
   * 
   * @example
   * Test data source.
   */
  dataSourceName?: string;
  /**
   * @remarks
   * **The development database/schema.**
   * 
   * @example
   * HTML正文提取/test423/
   */
  devSchema?: string;
  /**
   * @remarks
   * Specifies whether to store metadata in a new table or an existing table.
   * 
   * This parameter is required.
   * 
   * @example
   * CREATE
   */
  metadataStorageMode?: string;
  /**
   * @remarks
   * **The metastore type.**
   * 
   * @example
   * MILVUS
   */
  metadataStorageType?: string;
  /**
   * @remarks
   * **The production database/schema.**
   * 
   * This parameter is required.
   * 
   * @example
   * HTML正文提取/test423/
   */
  prodSchema?: string;
  /**
   * @remarks
   * **The table name.**
   * 
   * This parameter is required.
   * 
   * @example
   * s_crm_all_plt_jala_shop
   */
  tableName?: string;
  /**
   * @remarks
   * The table schema.
   */
  tableSchema?: UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfigTableSchema;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      devSchema: 'DevSchema',
      metadataStorageMode: 'MetadataStorageMode',
      metadataStorageType: 'MetadataStorageType',
      prodSchema: 'ProdSchema',
      tableName: 'TableName',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceName: 'string',
      devSchema: 'string',
      metadataStorageMode: 'string',
      metadataStorageType: 'string',
      prodSchema: 'string',
      tableName: 'string',
      tableSchema: UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfigTableSchema,
    };
  }

  validate() {
    if(this.tableSchema && typeof (this.tableSchema as any).validate === 'function') {
      (this.tableSchema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfigTableSchemaColumnsVectorIndexConfig extends $dara.Model {
  /**
   * @remarks
   * The embedding dimension.
   * 
   * This parameter is required.
   * 
   * @example
   * instance
   */
  dimension?: number;
  /**
   * @remarks
   * The embedding model.
   * 
   * This parameter is required.
   * 
   * @example
   * multimodal-embedding-v1
   */
  embeddingModel?: string;
  /**
   * @remarks
   * The index build parameters. Different parameters are required based on the indexType. For example, HNSW requires {M:30, efConstruction:360}, and IVF_FLAT requires {nlist:128}.
   * 
   * @example
   * {M:30, efConstruction:360}
   */
  indexParams?: { [key: string]: any };
  /**
   * @remarks
   * The index type. PostgreSQL supports IVFFlat and HNSW. Milvus supports all types.
   * 
   * This parameter is required.
   * 
   * @example
   * AUTOINDEX
   */
  indexType?: string;
  /**
   * @remarks
   * The similarity type. Default value: COSINE. Valid values: COSINE, L2, and IP.
   * 
   * This parameter is required.
   * 
   * @example
   * COSINE
   */
  similarityType?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      embeddingModel: 'EmbeddingModel',
      indexParams: 'IndexParams',
      indexType: 'IndexType',
      similarityType: 'SimilarityType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'number',
      embeddingModel: 'string',
      indexParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      indexType: 'string',
      similarityType: 'string',
    };
  }

  validate() {
    if(this.indexParams) {
      $dara.Model.validateMap(this.indexParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfigTableSchemaColumns extends $dara.Model {
  /**
   * @remarks
   * The field description.
   * 
   * @example
   * happen time
   */
  comment?: string;
  /**
   * @remarks
   * **The array element subtype. Valid only when type is set to ARRAY.**
   * 
   * @example
   * INT64
   */
  elementType?: string;
  /**
   * @remarks
   * **The maximum capacity of the array. This parameter is valid only when type is set to ARRAY. Default value: 4096.**
   * 
   * @example
   * 10
   */
  maxCapacity?: number;
  /**
   * @remarks
   * **The field name.**
   * 
   * This parameter is required.
   * 
   * @example
   * happen_time
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the field is a primary key.
   * 
   * @example
   * false
   */
  pk?: boolean;
  /**
   * @remarks
   * **The field type.**
   * 
   * This parameter is required.
   * 
   * @example
   * date
   */
  type?: string;
  /**
   * @remarks
   * Indicates whether the field is a URL.
   * 
   * @example
   * false
   */
  url?: boolean;
  /**
   * @remarks
   * The vector index configuration. Configure this parameter when the field type is FLOAT_VECTOR, FLOAT16_VECTOR, or BFLOAT16_VECTOR. This parameter is used to specify the dimensions, index type, and similarity metric.
   */
  vectorIndexConfig?: UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfigTableSchemaColumnsVectorIndexConfig;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      elementType: 'ElementType',
      maxCapacity: 'MaxCapacity',
      name: 'Name',
      pk: 'Pk',
      type: 'Type',
      url: 'Url',
      vectorIndexConfig: 'VectorIndexConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      elementType: 'string',
      maxCapacity: 'number',
      name: 'string',
      pk: 'boolean',
      type: 'string',
      url: 'boolean',
      vectorIndexConfig: UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfigTableSchemaColumnsVectorIndexConfig,
    };
  }

  validate() {
    if(this.vectorIndexConfig && typeof (this.vectorIndexConfig as any).validate === 'function') {
      (this.vectorIndexConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfigTableSchema extends $dara.Model {
  /**
   * @remarks
   * **The field list.**
   */
  columns?: UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfigTableSchemaColumns[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfigTableSchemaColumns },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfig extends $dara.Model {
  /**
   * @remarks
   * The meta table data source type (only KAFKA is supported in the current release).
   * 
   * This parameter is required.
   * 
   * @example
   * KAFKA
   */
  datasourceType?: string;
  /**
   * @remarks
   * The meta table name.
   * 
   * This parameter is required.
   * 
   * @example
   * Test meta table.
   */
  metaTableName?: string;
  /**
   * @remarks
   * The project ID to which the meta table belongs (cross-project access is supported).
   * 
   * This parameter is required.
   * 
   * @example
   * 7255013756724992
   */
  projectId?: number;
  /**
   * @remarks
   * The table schema.
   */
  tableSchema?: UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfigTableSchema;
  static names(): { [key: string]: string } {
    return {
      datasourceType: 'DatasourceType',
      metaTableName: 'MetaTableName',
      projectId: 'ProjectId',
      tableSchema: 'TableSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceType: 'string',
      metaTableName: 'string',
      projectId: 'number',
      tableSchema: UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfigTableSchema,
    };
  }

  validate() {
    if(this.tableSchema && typeof (this.tableSchema as any).validate === 'function') {
      (this.tableSchema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestUpdateCommandVersionConfig extends $dara.Model {
  /**
   * @remarks
   * The file storage configuration.
   */
  fileStorageConfig?: UpdateDatasetRequestUpdateCommandVersionConfigFileStorageConfig;
  /**
   * @remarks
   * The metastore configuration.
   */
  metadataStorageConfig?: UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfig;
  /**
   * @remarks
   * The real-time meta table configuration. Takes effect when metadataStorageType is set to STREAM_TABLE.
   */
  realtimeMetaTableConfig?: UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfig;
  /**
   * @remarks
   * **Version description**
   * 
   * @example
   * Test dataset version.
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      fileStorageConfig: 'FileStorageConfig',
      metadataStorageConfig: 'MetadataStorageConfig',
      realtimeMetaTableConfig: 'RealtimeMetaTableConfig',
      versionDescription: 'VersionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileStorageConfig: UpdateDatasetRequestUpdateCommandVersionConfigFileStorageConfig,
      metadataStorageConfig: UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfig,
      realtimeMetaTableConfig: UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfig,
      versionDescription: 'string',
    };
  }

  validate() {
    if(this.fileStorageConfig && typeof (this.fileStorageConfig as any).validate === 'function') {
      (this.fileStorageConfig as any).validate();
    }
    if(this.metadataStorageConfig && typeof (this.metadataStorageConfig as any).validate === 'function') {
      (this.metadataStorageConfig as any).validate();
    }
    if(this.realtimeMetaTableConfig && typeof (this.realtimeMetaTableConfig as any).validate === 'function') {
      (this.realtimeMetaTableConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * **The content type.**
   * 
   * @example
   * GENERAL
   */
  contentType?: string;
  /**
   * @remarks
   * The subject area ID.
   * 
   * @example
   * 78201
   */
  dataCellId?: string;
  /**
   * @remarks
   * **The description.**
   * 
   * @example
   * Test dataset.
   */
  description?: string;
  /**
   * @remarks
   * The file ID (the file ID at creation time).
   * 
   * This parameter is required.
   * 
   * @example
   * 7261110566632832
   */
  fileId?: string;
  /**
   * @remarks
   * The dataset ID (business primary key).
   * 
   * This parameter is required.
   * 
   * @example
   * 7280832407583104
   */
  id?: number;
  /**
   * @remarks
   * **The metastore type.**
   * 
   * @example
   * POSTGRESQL
   */
  metadataStorageType?: string;
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * audio_dataset
   */
  name?: string;
  /**
   * @remarks
   * The list of owner IDs, separated by commas.
   * 
   * @example
   * 300001391
   */
  owner?: string;
  /**
   * @remarks
   * **Scenarios:** `OFFLINE` (offline, default) / `REALTIME` (real-time).
   * 
   * @example
   * OFFLINE
   */
  scenario?: string;
  /**
   * @remarks
   * **The storage type.**
   * 
   * @example
   * OSS
   */
  storageType?: string;
  /**
   * @remarks
   * The dataset type.
   * 
   * @example
   * HYBRID
   */
  type?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * V1
   */
  version?: string;
  /**
   * @remarks
   * The dataset version configuration.
   */
  versionConfig?: UpdateDatasetRequestUpdateCommandVersionConfig;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      dataCellId: 'DataCellId',
      description: 'Description',
      fileId: 'FileId',
      id: 'Id',
      metadataStorageType: 'MetadataStorageType',
      name: 'Name',
      owner: 'Owner',
      scenario: 'Scenario',
      storageType: 'StorageType',
      type: 'Type',
      version: 'Version',
      versionConfig: 'VersionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      dataCellId: 'string',
      description: 'string',
      fileId: 'string',
      id: 'number',
      metadataStorageType: 'string',
      name: 'string',
      owner: 'string',
      scenario: 'string',
      storageType: 'string',
      type: 'string',
      version: 'string',
      versionConfig: UpdateDatasetRequestUpdateCommandVersionConfig,
    };
  }

  validate() {
    if(this.versionConfig && typeof (this.versionConfig as any).validate === 'function') {
      (this.versionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 7273382541481536
   */
  projectId?: string;
  /**
   * @remarks
   * The update request struct.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateDatasetRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      projectId: 'string',
      updateCommand: UpdateDatasetRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

