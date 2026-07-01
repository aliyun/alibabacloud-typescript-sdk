// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDatasetRequestUpdateCommandVersionConfigFileStorageConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7445343860022804608
   */
  dataSourceId?: string;
  /**
   * @example
   * 测试数据源
   */
  dataSourceName?: string;
  /**
   * @example
   * HTML正文提取/test423/
   */
  devPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /var/run/openresty/cache/corp
   */
  mountPath?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * instance:mongodb
   */
  dimension?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MultiModal-Embedding
   */
  embeddingModel?: string;
  /**
   * @example
   * {M:30, efConstruction:360}
   */
  indexParams?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AUTOINDEX
   */
  indexType?: string;
  /**
   * @remarks
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
   * @example
   * primary key
   */
  comment?: string;
  /**
   * @example
   * INT64
   */
  elementType?: string;
  /**
   * @example
   * 250
   */
  maxCapacity?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * id
   */
  name?: string;
  /**
   * @example
   * true
   */
  pk?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * int8
   */
  type?: string;
  /**
   * @example
   * false
   */
  url?: boolean;
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
   * This parameter is required.
   * 
   * @example
   * 7429133693081710272
   */
  dataSourceId?: string;
  /**
   * @example
   * 测试数据源
   */
  dataSourceName?: string;
  /**
   * @example
   * HTML正文提取/test423/
   */
  devSchema?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CREATE
   */
  metadataStorageMode?: string;
  /**
   * @example
   * MILVUS
   */
  metadataStorageType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HTML正文提取/test423/
   */
  prodSchema?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * s_crm_all_plt_jala_shop
   */
  tableName?: string;
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
   * This parameter is required.
   * 
   * @example
   * instance
   */
  dimension?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * multimodal-embedding-v1
   */
  embeddingModel?: string;
  /**
   * @example
   * {M:30, efConstruction:360}
   */
  indexParams?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AUTOINDEX
   */
  indexType?: string;
  /**
   * @remarks
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
   * @example
   * happen time
   */
  comment?: string;
  /**
   * @example
   * INT64
   */
  elementType?: string;
  /**
   * @example
   * 10
   */
  maxCapacity?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * happen_time
   */
  name?: string;
  /**
   * @example
   * false
   */
  pk?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * date
   */
  type?: string;
  /**
   * @example
   * false
   */
  url?: boolean;
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
   * This parameter is required.
   * 
   * @example
   * KAFKA
   */
  datasourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 测试元表
   */
  metaTableName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7255013756724992
   */
  projectId?: number;
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
  fileStorageConfig?: UpdateDatasetRequestUpdateCommandVersionConfigFileStorageConfig;
  metadataStorageConfig?: UpdateDatasetRequestUpdateCommandVersionConfigMetadataStorageConfig;
  realtimeMetaTableConfig?: UpdateDatasetRequestUpdateCommandVersionConfigRealtimeMetaTableConfig;
  /**
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
   * @example
   * GENERAL
   */
  contentType?: string;
  /**
   * @example
   * 78201
   */
  dataCellId?: string;
  /**
   * @example
   * 测试数据集
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7261110566632832
   */
  fileId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7280832407583104
   */
  id?: number;
  /**
   * @example
   * POSTGRESQL
   */
  metadataStorageType?: string;
  /**
   * @example
   * audio_dataset
   */
  name?: string;
  /**
   * @example
   * 300001391
   */
  owner?: string;
  /**
   * @example
   * OFFLINE
   */
  scenario?: string;
  /**
   * @example
   * OSS
   */
  storageType?: string;
  /**
   * @example
   * HYBRID
   */
  type?: string;
  /**
   * @example
   * V1
   */
  version?: string;
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7273382541481536
   */
  projectId?: string;
  /**
   * @remarks
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

