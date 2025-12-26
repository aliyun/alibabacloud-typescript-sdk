// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseRequestChunkConfig extends $dara.Model {
  /**
   * @remarks
   * 分块时长
   * 
   * @example
   * 30
   */
  chunkDuration?: number;
  /**
   * @remarks
   * 分块重叠大小
   * 
   * @example
   * 200
   */
  chunkOverlap?: number;
  /**
   * @remarks
   * 分块大小
   * 
   * @example
   * 1024
   */
  chunkSize?: number;
  /**
   * @remarks
   * 分块策略
   * 
   * @example
   * Default
   */
  chunkStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      chunkDuration: 'ChunkDuration',
      chunkOverlap: 'ChunkOverlap',
      chunkSize: 'ChunkSize',
      chunkStrategy: 'ChunkStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkDuration: 'number',
      chunkOverlap: 'number',
      chunkSize: 'number',
      chunkStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseRequestDataSources extends $dara.Model {
  /**
   * @remarks
   * 统一资源识别码
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/langstudio/source/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseRequestEmbeddingConfig extends $dara.Model {
  /**
   * @remarks
   * Embedding连接ID
   * 
   * This parameter is required.
   * 
   * @example
   * conn-r3o7******38bh
   */
  connectionId?: string;
  /**
   * @remarks
   * 模型
   * 
   * This parameter is required.
   * 
   * @example
   * text-embedding-v4
   */
  model?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'string',
      model: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseRequestIndexColumnConfigColumnDefinitions extends $dara.Model {
  /**
   * @remarks
   * 列Key
   * 
   * @example
   * column1
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseRequestIndexColumnConfigContentColumns extends $dara.Model {
  /**
   * @remarks
   * 列Key
   * 
   * @example
   * column1
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseRequestIndexColumnConfigEmbeddingColumns extends $dara.Model {
  /**
   * @remarks
   * 列Key
   * 
   * @example
   * column1
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseRequestIndexColumnConfig extends $dara.Model {
  /**
   * @remarks
   * 所有列名
   */
  columnDefinitions?: CreateKnowledgeBaseRequestIndexColumnConfigColumnDefinitions[];
  /**
   * @remarks
   * 内容检索列
   */
  contentColumns?: CreateKnowledgeBaseRequestIndexColumnConfigContentColumns[];
  /**
   * @remarks
   * Embedding列
   */
  embeddingColumns?: CreateKnowledgeBaseRequestIndexColumnConfigEmbeddingColumns[];
  static names(): { [key: string]: string } {
    return {
      columnDefinitions: 'ColumnDefinitions',
      contentColumns: 'ContentColumns',
      embeddingColumns: 'EmbeddingColumns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnDefinitions: { 'type': 'array', 'itemType': CreateKnowledgeBaseRequestIndexColumnConfigColumnDefinitions },
      contentColumns: { 'type': 'array', 'itemType': CreateKnowledgeBaseRequestIndexColumnConfigContentColumns },
      embeddingColumns: { 'type': 'array', 'itemType': CreateKnowledgeBaseRequestIndexColumnConfigEmbeddingColumns },
    };
  }

  validate() {
    if(Array.isArray(this.columnDefinitions)) {
      $dara.Model.validateArray(this.columnDefinitions);
    }
    if(Array.isArray(this.contentColumns)) {
      $dara.Model.validateArray(this.contentColumns);
    }
    if(Array.isArray(this.embeddingColumns)) {
      $dara.Model.validateArray(this.embeddingColumns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseRequestMetaDataConfigCustomMetaData extends $dara.Model {
  /**
   * @remarks
   * 元数据Key
   * 
   * @example
   * author
   */
  key?: string;
  /**
   * @remarks
   * 元数据Value类型
   * 
   * @example
   * String
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      valueType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseRequestMetaDataConfig extends $dara.Model {
  /**
   * @remarks
   * 自定义元数据
   */
  customMetaData?: CreateKnowledgeBaseRequestMetaDataConfigCustomMetaData[];
  static names(): { [key: string]: string } {
    return {
      customMetaData: 'CustomMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customMetaData: { 'type': 'array', 'itemType': CreateKnowledgeBaseRequestMetaDataConfigCustomMetaData },
    };
  }

  validate() {
    if(Array.isArray(this.customMetaData)) {
      $dara.Model.validateArray(this.customMetaData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseRequestVectorDBConfig extends $dara.Model {
  /**
   * @remarks
   * Collectioin名称
   * 
   * @example
   * my_collection
   */
  collectionName?: string;
  /**
   * @remarks
   * Embedding连接ID
   * 
   * @example
   * conn-7y5y******jja7
   */
  connectionId?: string;
  /**
   * @remarks
   * VectorDB类型
   * 
   * This parameter is required.
   * 
   * @example
   * Milvus
   */
  vectorDBType?: string;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      connectionId: 'ConnectionId',
      vectorDBType: 'VectorDBType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      connectionId: 'string',
      vectorDBType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseRequest extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  chunkConfig?: CreateKnowledgeBaseRequestChunkConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  dataSources?: CreateKnowledgeBaseRequestDataSources[];
  /**
   * @example
   * This is a description of the knowledge base.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  embeddingConfig?: CreateKnowledgeBaseRequestEmbeddingConfig;
  indexColumnConfig?: CreateKnowledgeBaseRequestIndexColumnConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TEXT
   */
  knowledgeBaseType?: string;
  metaDataConfig?: CreateKnowledgeBaseRequestMetaDataConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/langstudio/output/
   */
  outputDir?: string;
  /**
   * @example
   * rtime-apje******beaz
   */
  runtimeId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vectorDBConfig?: CreateKnowledgeBaseRequestVectorDBConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      chunkConfig: 'ChunkConfig',
      dataSources: 'DataSources',
      description: 'Description',
      embeddingConfig: 'EmbeddingConfig',
      indexColumnConfig: 'IndexColumnConfig',
      knowledgeBaseType: 'KnowledgeBaseType',
      metaDataConfig: 'MetaDataConfig',
      name: 'Name',
      outputDir: 'OutputDir',
      runtimeId: 'RuntimeId',
      vectorDBConfig: 'VectorDBConfig',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      chunkConfig: CreateKnowledgeBaseRequestChunkConfig,
      dataSources: { 'type': 'array', 'itemType': CreateKnowledgeBaseRequestDataSources },
      description: 'string',
      embeddingConfig: CreateKnowledgeBaseRequestEmbeddingConfig,
      indexColumnConfig: CreateKnowledgeBaseRequestIndexColumnConfig,
      knowledgeBaseType: 'string',
      metaDataConfig: CreateKnowledgeBaseRequestMetaDataConfig,
      name: 'string',
      outputDir: 'string',
      runtimeId: 'string',
      vectorDBConfig: CreateKnowledgeBaseRequestVectorDBConfig,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.chunkConfig && typeof (this.chunkConfig as any).validate === 'function') {
      (this.chunkConfig as any).validate();
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(this.embeddingConfig && typeof (this.embeddingConfig as any).validate === 'function') {
      (this.embeddingConfig as any).validate();
    }
    if(this.indexColumnConfig && typeof (this.indexColumnConfig as any).validate === 'function') {
      (this.indexColumnConfig as any).validate();
    }
    if(this.metaDataConfig && typeof (this.metaDataConfig as any).validate === 'function') {
      (this.metaDataConfig as any).validate();
    }
    if(this.vectorDBConfig && typeof (this.vectorDBConfig as any).validate === 'function') {
      (this.vectorDBConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

