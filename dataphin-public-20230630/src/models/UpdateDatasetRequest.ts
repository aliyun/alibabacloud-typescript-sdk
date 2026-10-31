// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetRequestUpdateCommandApiInfoRequestParamList extends $dara.Model {
  /**
   * @remarks
   * The default value.
   * 
   * @example
   * 1
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  descr?: string;
  /**
   * @remarks
   * Specifies whether the parameter is a URL parameter.
   */
  isUrl?: boolean;
  /**
   * @remarks
   * Specifies whether the parameter is required.
   */
  must?: boolean;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * col01
   */
  paramName?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * int
   */
  paramType?: string;
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * 1
   */
  sample?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      descr: 'Descr',
      isUrl: 'IsUrl',
      must: 'Must',
      paramName: 'ParamName',
      paramType: 'ParamType',
      sample: 'Sample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      descr: 'string',
      isUrl: 'boolean',
      must: 'boolean',
      paramName: 'string',
      paramType: 'string',
      sample: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestUpdateCommandApiInfoResponseParamList extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  descr?: string;
  /**
   * @remarks
   * Specifies whether the parameter is a URL parameter.
   */
  isUrl?: boolean;
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * col01
   */
  paramName?: string;
  /**
   * @remarks
   * The type of the parameter.
   * 
   * @example
   * int
   */
  paramType?: string;
  /**
   * @remarks
   * The example value.
   * 
   * @example
   * 1
   */
  sample?: string;
  static names(): { [key: string]: string } {
    return {
      descr: 'Descr',
      isUrl: 'IsUrl',
      paramName: 'ParamName',
      paramType: 'ParamType',
      sample: 'Sample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      descr: 'string',
      isUrl: 'boolean',
      paramName: 'string',
      paramType: 'string',
      sample: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequestUpdateCommandApiInfo extends $dara.Model {
  /**
   * @remarks
   * The execution timeout period in seconds.
   * 
   * @example
   * 60
   */
  execTimeout?: number;
  /**
   * @remarks
   * The execution mode. Valid values: 1: synchronous, 2: asynchronous.
   * 
   * @example
   * 1
   */
  executeMode?: number;
  /**
   * @remarks
   * The data service API group.
   * 
   * @example
   * 1011
   */
  osApiGroup?: number;
  /**
   * @remarks
   * The data service project.
   * 
   * @example
   * 1012
   */
  osProject?: number;
  /**
   * @remarks
   * The protocol type. Valid values: 1: HTTPS, 2: HTTP, 3: HTTP and HTTPS.
   * 
   * @example
   * 1
   */
  protocol?: number;
  /**
   * @remarks
   * The request method. Valid values: 1: GET, 2: LIST.
   * 
   * @example
   * 1
   */
  requestMethod?: number;
  /**
   * @remarks
   * The list of request parameters.
   */
  requestParamList?: UpdateDatasetRequestUpdateCommandApiInfoRequestParamList[];
  /**
   * @remarks
   * The list of response parameters.
   */
  responseParamList?: UpdateDatasetRequestUpdateCommandApiInfoResponseParamList[];
  /**
   * @remarks
   * The timeout period in seconds.
   * 
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      execTimeout: 'ExecTimeout',
      executeMode: 'ExecuteMode',
      osApiGroup: 'OsApiGroup',
      osProject: 'OsProject',
      protocol: 'Protocol',
      requestMethod: 'RequestMethod',
      requestParamList: 'RequestParamList',
      responseParamList: 'ResponseParamList',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execTimeout: 'number',
      executeMode: 'number',
      osApiGroup: 'number',
      osProject: 'number',
      protocol: 'number',
      requestMethod: 'number',
      requestParamList: { 'type': 'array', 'itemType': UpdateDatasetRequestUpdateCommandApiInfoRequestParamList },
      responseParamList: { 'type': 'array', 'itemType': UpdateDatasetRequestUpdateCommandApiInfoResponseParamList },
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.requestParamList)) {
      $dara.Model.validateArray(this.requestParamList);
    }
    if(Array.isArray(this.responseParamList)) {
      $dara.Model.validateArray(this.responseParamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * Test data source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The development path. This parameter is not required for basic projects.
   * 
   * @example
   * HTML body extraction/test423/
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
   * HTML body extraction/test423/
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
   * The index building parameters. Specify different parameters based on the index type. For example, specify {M:30, efConstruction:360} for HNSW and {nlist:128} for IVF_FLAT.
   * 
   * @example
   * {M:30, efConstruction:360}
   */
  indexParams?: { [key: string]: any };
  /**
   * @remarks
   * The index type. PostgreSQL supports IVFFlat and HNSW. Milvus supports all index types.
   * 
   * This parameter is required.
   * 
   * @example
   * AUTOINDEX
   */
  indexType?: string;
  /**
   * @remarks
   * The similarity type. Valid values: COSINE, L2, and IP. Default value: COSINE.
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
   * The column description.
   * 
   * @example
   * primary key
   */
  comment?: string;
  /**
   * @remarks
   * **The subtype of the array element. This parameter is valid only when the column type is ARRAY.**
   * 
   * @example
   * INT64
   */
  elementType?: string;
  /**
   * @remarks
   * The maximum capacity of the array. This parameter is valid only when the column type is ARRAY. Default value: 4096.
   * 
   * @example
   * 250
   */
  maxCapacity?: number;
  /**
   * @remarks
   * **The column name.**
   * 
   * This parameter is required.
   * 
   * @example
   * id
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the column is a primary key.
   * 
   * @example
   * true
   */
  pk?: boolean;
  /**
   * @remarks
   * **The column type.**
   * 
   * This parameter is required.
   * 
   * @example
   * int8
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether the column is a URL.
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
   * The list of columns.
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
   * Test data source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * **The development database or schema.**
   * 
   * @example
   * HTML body extraction/test423/
   */
  devSchema?: string;
  /**
   * @remarks
   * Specifies whether to store the metadata in a new table or an existing table.
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
   * **The production database or schema.**
   * 
   * This parameter is required.
   * 
   * @example
   * HTML body extraction/test423/
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
   * The index building parameters. Specify different parameters based on the index type. For example, specify {M:30, efConstruction:360} for HNSW and {nlist:128} for IVF_FLAT.
   * 
   * @example
   * {M:30, efConstruction:360}
   */
  indexParams?: { [key: string]: any };
  /**
   * @remarks
   * The index type. PostgreSQL supports IVFFlat and HNSW. Milvus supports all index types.
   * 
   * This parameter is required.
   * 
   * @example
   * AUTOINDEX
   */
  indexType?: string;
  /**
   * @remarks
   * The similarity type. Valid values: COSINE, L2, and IP. Default value: COSINE.
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
   * The column description.
   * 
   * @example
   * happen time
   */
  comment?: string;
  /**
   * @remarks
   * **The subtype of the array element. This parameter is valid only when the column type is ARRAY.**
   * 
   * @example
   * INT64
   */
  elementType?: string;
  /**
   * @remarks
   * **The maximum capacity of the array. This parameter takes effect only when type is set to ARRAY. Default value: 4096.**
   * 
   * @example
   * 10
   */
  maxCapacity?: number;
  /**
   * @remarks
   * **The column name.**
   * 
   * This parameter is required.
   * 
   * @example
   * happen_time
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether the column is a primary key.
   * 
   * @example
   * false
   */
  pk?: boolean;
  /**
   * @remarks
   * **The column type.**
   * 
   * This parameter is required.
   * 
   * @example
   * date
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether the column is a URL.
   * 
   * @example
   * false
   */
  url?: boolean;
  /**
   * @remarks
   * The vector index configuration. Configure this parameter when the field type is FLOAT_VECTOR, FLOAT16_VECTOR, or BFLOAT16_VECTOR to specify the dimensions, index type, and similarity metric.
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
   * **The list of columns.**
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
   * The data source type of the metadata table. Only KAFKA is supported in the current version.
   * 
   * This parameter is required.
   * 
   * @example
   * KAFKA
   */
  datasourceType?: string;
  /**
   * @remarks
   * The name of the metadata table.
   * 
   * This parameter is required.
   * 
   * @example
   * Test metadata table
   */
  metaTableName?: string;
  /**
   * @remarks
   * The ID of the project to which the metadata table belongs. Cross-project access is supported.
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
   * The real-time metadata table configuration. This configuration takes effect only when the metadata storage type is STREAM_TABLE.
   */
  realtimeMetaTableConfig?: UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfig;
  /**
   * @remarks
   * **The version description.**
   * 
   * @example
   * Test dataset version
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
   * The API information for online datasets.
   */
  apiInfo?: UpdateDatasetRequestUpdateCommandApiInfo;
  /**
   * @remarks
   * The **content type**.
   * 
   * @example
   * GENERAL
   */
  contentType?: string;
  /**
   * @remarks
   * The subject domain ID.
   * 
   * @example
   * 78201
   */
  dataCellId?: string;
  /**
   * @remarks
   * The **description**.
   * 
   * @example
   * Test dataset
   */
  description?: string;
  /**
   * @remarks
   * The file ID, which is the file ID used during creation.
   * 
   * This parameter is required.
   * 
   * @example
   * 7261110566632832
   */
  fileId?: string;
  /**
   * @remarks
   * The dataset ID, which is the business primary key.
   * 
   * This parameter is required.
   * 
   * @example
   * 7280832407583104
   */
  id?: number;
  /**
   * @remarks
   * The **metastore type**.
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
   * The list of owner IDs. Separate multiple IDs with commas.
   * 
   * @example
   * 300001391
   */
  owner?: string;
  /**
   * @remarks
   * **Dataset Scenarios:** `OFFLINE` (offline, default) / `REALTIME` (real-time).
   * 
   * @example
   * OFFLINE
   */
  scenario?: string;
  /**
   * @remarks
   * The **storage type**.
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
      apiInfo: 'ApiInfo',
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
      apiInfo: UpdateDatasetRequestUpdateCommandApiInfo,
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
    if(this.apiInfo && typeof (this.apiInfo as any).validate === 'function') {
      (this.apiInfo as any).validate();
    }
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
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
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
   * The update struct.
   * 
   * This parameter is required.
   */
  updateCommand?: UpdateDatasetRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      projectId: 'ProjectId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
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

