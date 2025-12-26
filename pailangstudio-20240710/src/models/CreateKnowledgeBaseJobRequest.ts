// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseJobRequestEcsSpecs extends $dara.Model {
  /**
   * @remarks
   * CPU核数
   * 
   * @example
   * 2
   */
  CPU?: number;
  /**
   * @remarks
   * 驱动版本
   * 
   * @example
   * 535.161.08
   */
  driver?: string;
  /**
   * @remarks
   * GPU卡数
   * 
   * @example
   * 1
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
   * 
   * @example
   * 8
   */
  memory?: number;
  /**
   * @remarks
   * 副本数量
   * 
   * @example
   * 1
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

export class CreateKnowledgeBaseJobRequestEmbeddingConfig extends $dara.Model {
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

export class CreateKnowledgeBaseJobRequestUserVpc extends $dara.Model {
  /**
   * @remarks
   * 安全组ID
   */
  securityGroupId?: string;
  /**
   * @remarks
   * 交换机ID
   */
  vSwitchId?: string;
  /**
   * @remarks
   * VPC ID。
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKnowledgeBaseJobRequest extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * This is a description of the knowledge base job.
   */
  description?: string;
  ecsSpecs?: CreateKnowledgeBaseJobRequestEcsSpecs[];
  embeddingConfig?: CreateKnowledgeBaseJobRequestEmbeddingConfig;
  jobAction?: string;
  /**
   * @example
   * 86400
   */
  maxRunningTimeInSeconds?: number;
  /**
   * @example
   * public-cluster
   */
  resourceId?: string;
  userVpc?: CreateKnowledgeBaseJobRequestUserVpc;
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
      description: 'Description',
      ecsSpecs: 'EcsSpecs',
      embeddingConfig: 'EmbeddingConfig',
      jobAction: 'JobAction',
      maxRunningTimeInSeconds: 'MaxRunningTimeInSeconds',
      resourceId: 'ResourceId',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      ecsSpecs: { 'type': 'array', 'itemType': CreateKnowledgeBaseJobRequestEcsSpecs },
      embeddingConfig: CreateKnowledgeBaseJobRequestEmbeddingConfig,
      jobAction: 'string',
      maxRunningTimeInSeconds: 'number',
      resourceId: 'string',
      userVpc: CreateKnowledgeBaseJobRequestUserVpc,
      workspaceId: 'string',
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

