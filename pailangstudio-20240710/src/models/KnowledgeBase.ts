// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


export class KnowledgeBaseAutoUpdateConfigEcsSpecs extends $dara.Model {
  /**
   * @remarks
   * CPU核数
   */
  CPU?: number;
  /**
   * @remarks
   * 驱动版本
   */
  driver?: string;
  /**
   * @remarks
   * GPU卡数
   */
  GPU?: number;
  /**
   * @remarks
   * GPU类型
   */
  GPUType?: string;
  /**
   * @remarks
   * 机型名称
   */
  instanceType?: string;
  /**
   * @remarks
   * 内存大小
   */
  memory?: number;
  /**
   * @remarks
   * 副本数量
   */
  podCount?: number;
  /**
   * @remarks
   * 共享内存容量
   */
  sharedMemory?: number;
  /**
   * @remarks
   * 节点类型
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      driver: 'Driver',
      GPU: 'GPU',
      GPUType: 'GPUType',
      instanceType: 'InstanceType',
      memory: 'Memory',
      podCount: 'PodCount',
      sharedMemory: 'SharedMemory',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'number',
      driver: 'string',
      GPU: 'number',
      GPUType: 'string',
      instanceType: 'string',
      memory: 'number',
      podCount: 'number',
      sharedMemory: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseAutoUpdateConfigEmbeddingConfig extends $dara.Model {
  /**
   * @remarks
   * Embedding分批大小
   */
  batchSize?: number;
  /**
   * @remarks
   * Embedding并发数
   */
  concurrency?: number;
  static names(): { [key: string]: string } {
    return {
      batchSize: 'BatchSize',
      concurrency: 'Concurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchSize: 'number',
      concurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseAutoUpdateConfig extends $dara.Model {
  /**
   * @remarks
   * 运行资源配置
   */
  ecsSpecs?: KnowledgeBaseAutoUpdateConfigEcsSpecs[];
  /**
   * @remarks
   * Embedding配置
   */
  embeddingConfig?: KnowledgeBaseAutoUpdateConfigEmbeddingConfig;
  /**
   * @remarks
   * 任务最大运行时间
   */
  maxRunningTimeInSeconds?: number;
  /**
   * @remarks
   * 资源组ID
   */
  resourceId?: string;
  /**
   * @remarks
   * 知识库自动更新状态
   */
  status?: string;
  /**
   * @remarks
   * 用户VPC配置
   */
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      ecsSpecs: 'EcsSpecs',
      embeddingConfig: 'EmbeddingConfig',
      maxRunningTimeInSeconds: 'MaxRunningTimeInSeconds',
      resourceId: 'ResourceId',
      status: 'Status',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsSpecs: { 'type': 'array', 'itemType': KnowledgeBaseAutoUpdateConfigEcsSpecs },
      embeddingConfig: KnowledgeBaseAutoUpdateConfigEmbeddingConfig,
      maxRunningTimeInSeconds: 'number',
      resourceId: 'string',
      status: 'string',
      userVpc: UserVpc,
    };
  }

  validate() {
    if(Array.isArray(this.ecsSpecs)) {
      $dara.Model.validateArray(this.ecsSpecs);
    }
    if(this.embeddingConfig && typeof (this.embeddingConfig as any).validate === 'function') {
      (this.embeddingConfig as any).validate();
    }
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseChunkConfig extends $dara.Model {
  /**
   * @remarks
   * 分块时长
   */
  chunkDuration?: number;
  /**
   * @remarks
   * 分块重叠大小
   */
  chunkOverlap?: number;
  /**
   * @remarks
   * 分块大小
   */
  chunkSize?: number;
  /**
   * @remarks
   * 分块策略
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

export class KnowledgeBaseDataSources extends $dara.Model {
  /**
   * @remarks
   * 统一资源识别码
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

export class KnowledgeBaseEmbeddingConfig extends $dara.Model {
  /**
   * @remarks
   * Embedding连接ID
   */
  connectionId?: string;
  /**
   * @remarks
   * Embedding连接名称
   */
  connectionName?: string;
  /**
   * @remarks
   * 模型
   */
  model?: string;
  static names(): { [key: string]: string } {
    return {
      connectionId: 'ConnectionId',
      connectionName: 'ConnectionName',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionId: 'string',
      connectionName: 'string',
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

export class KnowledgeBaseIndexColumnConfigColumnDefinitions extends $dara.Model {
  /**
   * @remarks
   * 列Key
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

export class KnowledgeBaseIndexColumnConfigContentColumns extends $dara.Model {
  /**
   * @remarks
   * 列Key
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

export class KnowledgeBaseIndexColumnConfigEmbeddingColumns extends $dara.Model {
  /**
   * @remarks
   * 列Key
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

export class KnowledgeBaseIndexColumnConfig extends $dara.Model {
  /**
   * @remarks
   * 所有列名
   */
  columnDefinitions?: KnowledgeBaseIndexColumnConfigColumnDefinitions[];
  /**
   * @remarks
   * 内容检索列
   */
  contentColumns?: KnowledgeBaseIndexColumnConfigContentColumns[];
  /**
   * @remarks
   * Embedding列
   */
  embeddingColumns?: KnowledgeBaseIndexColumnConfigEmbeddingColumns[];
  static names(): { [key: string]: string } {
    return {
      columnDefinitions: 'ColumnDefinitions',
      contentColumns: 'ContentColumns',
      embeddingColumns: 'EmbeddingColumns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnDefinitions: { 'type': 'array', 'itemType': KnowledgeBaseIndexColumnConfigColumnDefinitions },
      contentColumns: { 'type': 'array', 'itemType': KnowledgeBaseIndexColumnConfigContentColumns },
      embeddingColumns: { 'type': 'array', 'itemType': KnowledgeBaseIndexColumnConfigEmbeddingColumns },
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

export class KnowledgeBaseMetaDataConfigCustomMetaData extends $dara.Model {
  /**
   * @remarks
   * 元数据Key
   */
  key?: string;
  /**
   * @remarks
   * 引用次数
   */
  referenceCount?: number;
  /**
   * @remarks
   * 值的个数
   */
  valueCount?: number;
  /**
   * @remarks
   * 元数据Value类型
   */
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      referenceCount: 'ReferenceCount',
      valueCount: 'ValueCount',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      referenceCount: 'number',
      valueCount: 'number',
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

export class KnowledgeBaseMetaDataConfig extends $dara.Model {
  /**
   * @remarks
   * 自定义元数据
   */
  customMetaData?: KnowledgeBaseMetaDataConfigCustomMetaData[];
  static names(): { [key: string]: string } {
    return {
      customMetaData: 'CustomMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customMetaData: { 'type': 'array', 'itemType': KnowledgeBaseMetaDataConfigCustomMetaData },
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

export class KnowledgeBaseVectorDBConfig extends $dara.Model {
  /**
   * @remarks
   * Collectioin名称
   */
  collectionName?: string;
  /**
   * @remarks
   * Embedding连接ID
   */
  connectionId?: string;
  /**
   * @remarks
   * VectorDB连接名称
   */
  connectionName?: string;
  /**
   * @remarks
   * VectorDB类型
   */
  vectorDBType?: string;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      connectionId: 'ConnectionId',
      connectionName: 'ConnectionName',
      vectorDBType: 'VectorDBType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      connectionId: 'string',
      connectionName: 'string',
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

export class KnowledgeBase extends $dara.Model {
  accessibility?: string;
  autoUpdateConfig?: KnowledgeBaseAutoUpdateConfig;
  chunkConfig?: KnowledgeBaseChunkConfig;
  creator?: string;
  dataSources?: KnowledgeBaseDataSources[];
  datasetId?: string;
  description?: string;
  embeddingConfig?: KnowledgeBaseEmbeddingConfig;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  indexColumnConfig?: KnowledgeBaseIndexColumnConfig;
  knowledgeBaseId?: string;
  knowledgeBaseType?: string;
  metaDataConfig?: KnowledgeBaseMetaDataConfig;
  name?: string;
  outputDir?: string;
  runtimeId?: string;
  vectorDBConfig?: KnowledgeBaseVectorDBConfig;
  versionName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      autoUpdateConfig: 'AutoUpdateConfig',
      chunkConfig: 'ChunkConfig',
      creator: 'Creator',
      dataSources: 'DataSources',
      datasetId: 'DatasetId',
      description: 'Description',
      embeddingConfig: 'EmbeddingConfig',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      indexColumnConfig: 'IndexColumnConfig',
      knowledgeBaseId: 'KnowledgeBaseId',
      knowledgeBaseType: 'KnowledgeBaseType',
      metaDataConfig: 'MetaDataConfig',
      name: 'Name',
      outputDir: 'OutputDir',
      runtimeId: 'RuntimeId',
      vectorDBConfig: 'VectorDBConfig',
      versionName: 'VersionName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      autoUpdateConfig: KnowledgeBaseAutoUpdateConfig,
      chunkConfig: KnowledgeBaseChunkConfig,
      creator: 'string',
      dataSources: { 'type': 'array', 'itemType': KnowledgeBaseDataSources },
      datasetId: 'string',
      description: 'string',
      embeddingConfig: KnowledgeBaseEmbeddingConfig,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      indexColumnConfig: KnowledgeBaseIndexColumnConfig,
      knowledgeBaseId: 'string',
      knowledgeBaseType: 'string',
      metaDataConfig: KnowledgeBaseMetaDataConfig,
      name: 'string',
      outputDir: 'string',
      runtimeId: 'string',
      vectorDBConfig: KnowledgeBaseVectorDBConfig,
      versionName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.autoUpdateConfig && typeof (this.autoUpdateConfig as any).validate === 'function') {
      (this.autoUpdateConfig as any).validate();
    }
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

