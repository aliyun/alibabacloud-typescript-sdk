// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


export class GetKnowledgeBaseResponseBodyAutoUpdateConfigEcsSpecs extends $dara.Model {
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
   * 
   * @example
   * ecs.c6.large
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
   * 
   * @example
   * Worker
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

export class GetKnowledgeBaseResponseBodyAutoUpdateConfigEmbeddingConfig extends $dara.Model {
  /**
   * @remarks
   * Embedding分批大小
   * 
   * @example
   * 8
   */
  batchSize?: number;
  /**
   * @remarks
   * Embedding并发数
   * 
   * @example
   * 1
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

export class GetKnowledgeBaseResponseBodyAutoUpdateConfig extends $dara.Model {
  /**
   * @remarks
   * 运行资源配置
   */
  ecsSpecs?: GetKnowledgeBaseResponseBodyAutoUpdateConfigEcsSpecs[];
  /**
   * @remarks
   * Embedding配置
   */
  embeddingConfig?: GetKnowledgeBaseResponseBodyAutoUpdateConfigEmbeddingConfig;
  /**
   * @remarks
   * 任务最大运行时间
   * 
   * @example
   * 86400
   */
  maxRunningTimeInSeconds?: number;
  /**
   * @remarks
   * 资源组ID
   * 
   * @example
   * public-cluster
   */
  resourceId?: string;
  /**
   * @remarks
   * 知识库自动更新状态
   * 
   * @example
   * Enable
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
      ecsSpecs: { 'type': 'array', 'itemType': GetKnowledgeBaseResponseBodyAutoUpdateConfigEcsSpecs },
      embeddingConfig: GetKnowledgeBaseResponseBodyAutoUpdateConfigEmbeddingConfig,
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

export class GetKnowledgeBaseResponseBodyChunkConfig extends $dara.Model {
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

export class GetKnowledgeBaseResponseBodyDataSources extends $dara.Model {
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

export class GetKnowledgeBaseResponseBodyEmbeddingConfig extends $dara.Model {
  /**
   * @remarks
   * Embedding连接ID
   * 
   * @example
   * conn-r3o7******38bh
   */
  connectionId?: string;
  /**
   * @remarks
   * Embedding连接名称
   * 
   * @example
   * myEmbeddingConn
   */
  connectionName?: string;
  /**
   * @remarks
   * 模型
   * 
   * @example
   * text-embedding-v4
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

export class GetKnowledgeBaseResponseBodyIndexColumnConfigColumnDefinitions extends $dara.Model {
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

export class GetKnowledgeBaseResponseBodyIndexColumnConfigContentColumns extends $dara.Model {
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

export class GetKnowledgeBaseResponseBodyIndexColumnConfigEmbeddingColumns extends $dara.Model {
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

export class GetKnowledgeBaseResponseBodyIndexColumnConfig extends $dara.Model {
  /**
   * @remarks
   * 所有列名
   */
  columnDefinitions?: GetKnowledgeBaseResponseBodyIndexColumnConfigColumnDefinitions[];
  /**
   * @remarks
   * 内容检索列
   */
  contentColumns?: GetKnowledgeBaseResponseBodyIndexColumnConfigContentColumns[];
  /**
   * @remarks
   * Embedding列
   */
  embeddingColumns?: GetKnowledgeBaseResponseBodyIndexColumnConfigEmbeddingColumns[];
  static names(): { [key: string]: string } {
    return {
      columnDefinitions: 'ColumnDefinitions',
      contentColumns: 'ContentColumns',
      embeddingColumns: 'EmbeddingColumns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnDefinitions: { 'type': 'array', 'itemType': GetKnowledgeBaseResponseBodyIndexColumnConfigColumnDefinitions },
      contentColumns: { 'type': 'array', 'itemType': GetKnowledgeBaseResponseBodyIndexColumnConfigContentColumns },
      embeddingColumns: { 'type': 'array', 'itemType': GetKnowledgeBaseResponseBodyIndexColumnConfigEmbeddingColumns },
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

export class GetKnowledgeBaseResponseBodyMetaDataConfigCustomMetaData extends $dara.Model {
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

export class GetKnowledgeBaseResponseBodyMetaDataConfig extends $dara.Model {
  /**
   * @remarks
   * 自定义元数据
   */
  customMetaData?: GetKnowledgeBaseResponseBodyMetaDataConfigCustomMetaData[];
  static names(): { [key: string]: string } {
    return {
      customMetaData: 'CustomMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customMetaData: { 'type': 'array', 'itemType': GetKnowledgeBaseResponseBodyMetaDataConfigCustomMetaData },
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

export class GetKnowledgeBaseResponseBodyVectorDBConfig extends $dara.Model {
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
   * VectorDB连接名称
   * 
   * @example
   * myVectorConn
   */
  connectionName?: string;
  /**
   * @remarks
   * VectorDB类型
   * 
   * @example
   * Milvus
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

export class GetKnowledgeBaseResponseBody extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  autoUpdateConfig?: GetKnowledgeBaseResponseBodyAutoUpdateConfig;
  chunkConfig?: GetKnowledgeBaseResponseBodyChunkConfig;
  /**
   * @example
   * 2485765****023475
   */
  creator?: string;
  dataSources?: GetKnowledgeBaseResponseBodyDataSources[];
  /**
   * @example
   * d-cupbwkk5us9xpjz870
   */
  datasetId?: string;
  /**
   * @example
   * This is a description of the knowledge base.
   */
  description?: string;
  embeddingConfig?: GetKnowledgeBaseResponseBodyEmbeddingConfig;
  /**
   * @example
   * 2024-12-15T14:46:23Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2025-12-18T19:32:58Z
   */
  gmtModifiedTime?: string;
  indexColumnConfig?: GetKnowledgeBaseResponseBodyIndexColumnConfig;
  /**
   * @example
   * d-ksicx823d
   */
  knowledgeBaseId?: string;
  /**
   * @example
   * TEXT
   */
  knowledgeBaseType?: string;
  metaDataConfig?: GetKnowledgeBaseResponseBodyMetaDataConfig;
  /**
   * @example
   * myName
   */
  name?: string;
  /**
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/langstudio/output/
   */
  outputDir?: string;
  /**
   * @example
   * 963BD7F9-0C02-5594-9550-BCC6DD43E3C0
   */
  requestId?: string;
  /**
   * @example
   * rtime-apje******beaz
   */
  runtimeId?: string;
  vectorDBConfig?: GetKnowledgeBaseResponseBodyVectorDBConfig;
  versionName?: string;
  /**
   * @example
   * 478**
   */
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
      requestId: 'RequestId',
      runtimeId: 'RuntimeId',
      vectorDBConfig: 'VectorDBConfig',
      versionName: 'VersionName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      autoUpdateConfig: GetKnowledgeBaseResponseBodyAutoUpdateConfig,
      chunkConfig: GetKnowledgeBaseResponseBodyChunkConfig,
      creator: 'string',
      dataSources: { 'type': 'array', 'itemType': GetKnowledgeBaseResponseBodyDataSources },
      datasetId: 'string',
      description: 'string',
      embeddingConfig: GetKnowledgeBaseResponseBodyEmbeddingConfig,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      indexColumnConfig: GetKnowledgeBaseResponseBodyIndexColumnConfig,
      knowledgeBaseId: 'string',
      knowledgeBaseType: 'string',
      metaDataConfig: GetKnowledgeBaseResponseBodyMetaDataConfig,
      name: 'string',
      outputDir: 'string',
      requestId: 'string',
      runtimeId: 'string',
      vectorDBConfig: GetKnowledgeBaseResponseBodyVectorDBConfig,
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

