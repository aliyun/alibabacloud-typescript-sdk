// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


export class UpdateKnowledgeBaseRequestAutoUpdateConfigEcsSpecs extends $dara.Model {
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

export class UpdateKnowledgeBaseRequestAutoUpdateConfigEmbeddingConfig extends $dara.Model {
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

export class UpdateKnowledgeBaseRequestAutoUpdateConfig extends $dara.Model {
  /**
   * @remarks
   * 运行资源配置
   */
  ecsSpecs?: UpdateKnowledgeBaseRequestAutoUpdateConfigEcsSpecs[];
  /**
   * @remarks
   * Embedding配置
   */
  embeddingConfig?: UpdateKnowledgeBaseRequestAutoUpdateConfigEmbeddingConfig;
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
      ecsSpecs: { 'type': 'array', 'itemType': UpdateKnowledgeBaseRequestAutoUpdateConfigEcsSpecs },
      embeddingConfig: UpdateKnowledgeBaseRequestAutoUpdateConfigEmbeddingConfig,
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

export class UpdateKnowledgeBaseRequestMetaDataConfigCustomMetaData extends $dara.Model {
  /**
   * @remarks
   * 元数据Key
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

export class UpdateKnowledgeBaseRequestMetaDataConfig extends $dara.Model {
  /**
   * @remarks
   * 自定义元数据
   */
  customMetaData?: UpdateKnowledgeBaseRequestMetaDataConfigCustomMetaData[];
  static names(): { [key: string]: string } {
    return {
      customMetaData: 'CustomMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customMetaData: { 'type': 'array', 'itemType': UpdateKnowledgeBaseRequestMetaDataConfigCustomMetaData },
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

export class UpdateKnowledgeBaseRequest extends $dara.Model {
  autoUpdateConfig?: UpdateKnowledgeBaseRequestAutoUpdateConfig;
  bindRuntime?: boolean;
  description?: string;
  metaDataConfig?: UpdateKnowledgeBaseRequestMetaDataConfig;
  runtimeId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoUpdateConfig: 'AutoUpdateConfig',
      bindRuntime: 'BindRuntime',
      description: 'Description',
      metaDataConfig: 'MetaDataConfig',
      runtimeId: 'RuntimeId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpdateConfig: UpdateKnowledgeBaseRequestAutoUpdateConfig,
      bindRuntime: 'boolean',
      description: 'string',
      metaDataConfig: UpdateKnowledgeBaseRequestMetaDataConfig,
      runtimeId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.autoUpdateConfig && typeof (this.autoUpdateConfig as any).validate === 'function') {
      (this.autoUpdateConfig as any).validate();
    }
    if(this.metaDataConfig && typeof (this.metaDataConfig as any).validate === 'function') {
      (this.metaDataConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

