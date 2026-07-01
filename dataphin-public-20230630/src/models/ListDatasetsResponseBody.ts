// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsResponseBodyPageResultResultDataOwnerList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 300001391
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * 张三
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigFileStorageConfig extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
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
   * 测试数据源
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

export class ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigMetadataStorageConfigTableSchemaColumnsVectorIndexConfig extends $dara.Model {
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
   * The index build parameters.
   */
  indexParams?: { [key: string]: any };
  /**
   * @remarks
   * The index type. PG supports IVFFlat and HNSW. Milvus supports all index types.
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

export class ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigMetadataStorageConfigTableSchemaColumns extends $dara.Model {
  /**
   * @remarks
   * The field description.
   * 
   * @example
   * 主键
   */
  comment?: string;
  /**
   * @remarks
   * The array element subtype. This parameter takes effect only when type is set to ARRAY.
   * 
   * @example
   * INT64
   */
  elementType?: string;
  /**
   * @remarks
   * The maximum array capacity. This parameter takes effect only when type is set to ARRAY. Default value: 4096.
   * 
   * @example
   * 20
   */
  maxCapacity?: number;
  /**
   * @remarks
   * The field name.
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
   * This parameter is required.
   * 
   * @example
   * true
   */
  pk?: boolean;
  /**
   * @remarks
   * The field type.
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
  vectorIndexConfig?: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigMetadataStorageConfigTableSchemaColumnsVectorIndexConfig;
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
      vectorIndexConfig: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigMetadataStorageConfigTableSchemaColumnsVectorIndexConfig,
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

export class ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigMetadataStorageConfigTableSchema extends $dara.Model {
  /**
   * @remarks
   * The field list.
   */
  columns?: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigMetadataStorageConfigTableSchemaColumns[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigMetadataStorageConfigTableSchemaColumns },
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

export class ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigMetadataStorageConfig extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
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
   * 测试数据源
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The development database/schema.
   * 
   * @example
   * HTML正文提取/test423/
   */
  devSchema?: string;
  /**
   * @remarks
   * The storage destination (new table or existing table).
   * 
   * This parameter is required.
   * 
   * @example
   * CREATE
   */
  metadataStorageMode?: string;
  /**
   * @remarks
   * The metastore type.
   * 
   * @example
   * MILVUS
   */
  metadataStorageType?: string;
  /**
   * @remarks
   * The production database/schema.
   * 
   * This parameter is required.
   * 
   * @example
   * HTML正文提取/test423/
   */
  prodSchema?: string;
  /**
   * @remarks
   * The table name.
   * 
   * This parameter is required.
   * 
   * @example
   * s_crm_all_plt_jala_shop
   */
  tableName?: string;
  /**
   * @remarks
   * The table schema configuration.
   */
  tableSchema?: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigMetadataStorageConfigTableSchema;
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
      tableSchema: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigMetadataStorageConfigTableSchema,
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

export class ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigRealtimeMetaTableConfigTableSchemaColumnsVectorIndexConfig extends $dara.Model {
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
   * The index build parameters.
   */
  indexParams?: { [key: string]: any };
  /**
   * @remarks
   * The index type. PG supports IVFFlat and HNSW. Milvus supports all index types.
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

export class ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigRealtimeMetaTableConfigTableSchemaColumns extends $dara.Model {
  /**
   * @remarks
   * **The field description.**
   * 
   * @example
   * 录入时间
   */
  comment?: string;
  /**
   * @remarks
   * **The array element subtype. This parameter takes effect only when type is set to ARRAY.**
   * 
   * @example
   * INT64
   */
  elementType?: string;
  /**
   * @remarks
   * **The maximum array capacity. This parameter takes effect only when type is set to ARRAY. Default value: 4096.**
   * 
   * @example
   * 35
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
   * This parameter is required.
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
   * The vector index configuration.
   */
  vectorIndexConfig?: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigRealtimeMetaTableConfigTableSchemaColumnsVectorIndexConfig;
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
      vectorIndexConfig: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigRealtimeMetaTableConfigTableSchemaColumnsVectorIndexConfig,
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

export class ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigRealtimeMetaTableConfigTableSchema extends $dara.Model {
  /**
   * @remarks
   * The field list.
   */
  columns?: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigRealtimeMetaTableConfigTableSchemaColumns[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigRealtimeMetaTableConfigTableSchemaColumns },
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

export class ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigRealtimeMetaTableConfig extends $dara.Model {
  /**
   * @remarks
   * The meta table data source type (only KAFKA is available in this release).
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
   * 测试元表
   */
  metaTableName?: string;
  /**
   * @remarks
   * The project ID of the meta table (cross-project access is supported).
   * 
   * This parameter is required.
   * 
   * @example
   * 7128268454335680
   */
  projectId?: number;
  /**
   * @remarks
   * The table schema configuration (reuses `MetadataStorageConfigDTO.TableSchemaDTO`).
   */
  tableSchema?: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigRealtimeMetaTableConfigTableSchema;
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
      tableSchema: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigRealtimeMetaTableConfigTableSchema,
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

export class ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfig extends $dara.Model {
  /**
   * @remarks
   * The file storage configuration.
   */
  fileStorageConfig?: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigFileStorageConfig;
  /**
   * @remarks
   * The metastore configuration.
   */
  metadataStorageConfig?: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigMetadataStorageConfig;
  /**
   * @remarks
   * The real-time meta table configuration (takes effect only when `metadataStorageType=REALTIME_META_TABLE`).
   */
  realtimeMetaTableConfig?: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigRealtimeMetaTableConfig;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * 测试数据集版本
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
      fileStorageConfig: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigFileStorageConfig,
      metadataStorageConfig: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigMetadataStorageConfig,
      realtimeMetaTableConfig: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfigRealtimeMetaTableConfig,
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

export class ListDatasetsResponseBodyPageResultResultDataVersionList extends $dara.Model {
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 300001391
   */
  creator?: string;
  /**
   * @remarks
   * The dataset version configuration.
   */
  dataVersionConfig?: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfig;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * 7280832407583104
   */
  datasetId?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-04-28 10:03:49
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1749450490000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The version ID.
   * 
   * @example
   * 7280840713415040
   */
  id?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * V4
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      dataVersionConfig: 'DataVersionConfig',
      datasetId: 'DatasetId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      dataVersionConfig: ListDatasetsResponseBodyPageResultResultDataVersionListDataVersionConfig,
      datasetId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      version: 'string',
    };
  }

  validate() {
    if(this.dataVersionConfig && typeof (this.dataVersionConfig as any).validate === 'function') {
      (this.dataVersionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBodyPageResultResultData extends $dara.Model {
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * GENERAL
   */
  contentType?: string;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 300001391
   */
  creator?: string;
  /**
   * @remarks
   * The creator name.
   * 
   * @example
   * 张三
   */
  creatorName?: string;
  /**
   * @remarks
   * The data domain ID.
   * 
   * @example
   * 74280
   */
  dataCellId?: string;
  /**
   * @remarks
   * **The data domain name.**
   * 
   * @example
   * 离线数据主题域
   */
  dataCellName?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 测试数据集
   */
  description?: string;
  /**
   * @remarks
   * The directory (retrieved from the file service by fileId).
   * 
   * @example
   * /
   */
  directory?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 7285340579984832
   */
  fileId?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-05-18 17:07:54.237771
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-05-18 17:07:54.237771
   */
  gmtModified?: string;
  /**
   * @remarks
   * The dataset ID (business primary key).
   * 
   * @example
   * 7128268454335680
   */
  id?: number;
  /**
   * @remarks
   * The development owner ID.
   * 
   * @example
   * 300001391
   */
  lockOwner?: string;
  /**
   * @remarks
   * The name of the development owner (interface Displayed Fields).
   * 
   * @example
   * 张三
   */
  lockOwnerName?: string;
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
   * The owner list.
   */
  ownerList?: ListDatasetsResponseBodyPageResultResultDataOwnerList[];
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 7290731813137728
   */
  projectId?: number;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * ds_tm
   */
  projectName?: string;
  /**
   * @remarks
   * The dataset scenarios. Valid values:
   * - OFFLINE: offline (default).
   * - REALTIME: real-time.
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
   * The tenant ID.
   * 
   * @example
   * 300001413
   */
  tenantId?: number;
  /**
   * @remarks
   * **The dataset type.**
   * 
   * @example
   * HYBRID
   */
  type?: string;
  /**
   * @remarks
   * The version list.
   */
  versionList?: ListDatasetsResponseBodyPageResultResultDataVersionList[];
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      creator: 'Creator',
      creatorName: 'CreatorName',
      dataCellId: 'DataCellId',
      dataCellName: 'DataCellName',
      description: 'Description',
      directory: 'Directory',
      fileId: 'FileId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lockOwner: 'LockOwner',
      lockOwnerName: 'LockOwnerName',
      metadataStorageType: 'MetadataStorageType',
      name: 'Name',
      ownerList: 'OwnerList',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      scenario: 'Scenario',
      storageType: 'StorageType',
      tenantId: 'TenantId',
      type: 'Type',
      versionList: 'VersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      creator: 'string',
      creatorName: 'string',
      dataCellId: 'string',
      dataCellName: 'string',
      description: 'string',
      directory: 'string',
      fileId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lockOwner: 'string',
      lockOwnerName: 'string',
      metadataStorageType: 'string',
      name: 'string',
      ownerList: { 'type': 'array', 'itemType': ListDatasetsResponseBodyPageResultResultDataOwnerList },
      projectId: 'number',
      projectName: 'string',
      scenario: 'string',
      storageType: 'string',
      tenantId: 'number',
      type: 'string',
      versionList: { 'type': 'array', 'itemType': ListDatasetsResponseBodyPageResultResultDataVersionList },
    };
  }

  validate() {
    if(Array.isArray(this.ownerList)) {
      $dara.Model.validateArray(this.ownerList);
    }
    if(Array.isArray(this.versionList)) {
      $dara.Model.validateArray(this.versionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 12
   */
  count?: number;
  /**
   * @remarks
   * The object.
   */
  resultData?: ListDatasetsResponseBodyPageResultResultData[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      resultData: 'ResultData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      resultData: { 'type': 'array', 'itemType': ListDatasetsResponseBodyPageResultResultData },
    };
  }

  validate() {
    if(Array.isArray(this.resultData)) {
      $dara.Model.validateArray(this.resultData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paged result.
   */
  pageResult?: ListDatasetsResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListDatasetsResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

