// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


/**
 */
export class AutoUpdateConfigEcsSpecs extends $dara.Model {
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

export class AutoUpdateConfigEmbeddingConfig extends $dara.Model {
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

export class AutoUpdateConfig extends $dara.Model {
  /**
   * @remarks
   * 运行资源配置
   */
  ecsSpecs?: AutoUpdateConfigEcsSpecs[];
  /**
   * @remarks
   * Embedding配置
   */
  embeddingConfig?: AutoUpdateConfigEmbeddingConfig;
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
      ecsSpecs: { 'type': 'array', 'itemType': AutoUpdateConfigEcsSpecs },
      embeddingConfig: AutoUpdateConfigEmbeddingConfig,
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

