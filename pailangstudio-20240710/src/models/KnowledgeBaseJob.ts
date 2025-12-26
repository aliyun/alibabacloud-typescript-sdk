// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeBaseJobEcsSpecs extends $dara.Model {
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

export class KnowledgeBaseJobEmbeddingConfig extends $dara.Model {
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

export class KnowledgeBaseJobKnowledgeBaseJobResult extends $dara.Model {
  /**
   * @remarks
   * 增加Chunk数量
   */
  addChunkCount?: number;
  /**
   * @remarks
   * 删除Chunk数量
   */
  deleteChunkCount?: number;
  /**
   * @remarks
   * 总处理文件数
   */
  totalFileCount?: number;
  static names(): { [key: string]: string } {
    return {
      addChunkCount: 'AddChunkCount',
      deleteChunkCount: 'DeleteChunkCount',
      totalFileCount: 'TotalFileCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addChunkCount: 'number',
      deleteChunkCount: 'number',
      totalFileCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseJobPipelineRunInfo extends $dara.Model {
  /**
   * @remarks
   * PaiFlow工作流运行ID
   */
  pipelineRunId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineRunId: 'PipelineRunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineRunId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KnowledgeBaseJobUserVpc extends $dara.Model {
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
   * VPC ID
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

export class KnowledgeBaseJob extends $dara.Model {
  accessibility?: string;
  creator?: string;
  description?: string;
  ecsSpecs?: KnowledgeBaseJobEcsSpecs[];
  embeddingConfig?: KnowledgeBaseJobEmbeddingConfig;
  errorMessage?: string;
  gmtCreateTime?: string;
  gmtFinishTime?: string;
  gmtModifiedTime?: string;
  jobAction?: string;
  knowledgeBaseId?: string;
  knowledgeBaseJobId?: string;
  knowledgeBaseJobResult?: KnowledgeBaseJobKnowledgeBaseJobResult;
  maxRunningTimeInSeconds?: number;
  pipelineRunInfo?: KnowledgeBaseJobPipelineRunInfo;
  resourceId?: string;
  status?: string;
  userVpc?: KnowledgeBaseJobUserVpc;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      creator: 'Creator',
      description: 'Description',
      ecsSpecs: 'EcsSpecs',
      embeddingConfig: 'EmbeddingConfig',
      errorMessage: 'ErrorMessage',
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtModifiedTime: 'GmtModifiedTime',
      jobAction: 'JobAction',
      knowledgeBaseId: 'KnowledgeBaseId',
      knowledgeBaseJobId: 'KnowledgeBaseJobId',
      knowledgeBaseJobResult: 'KnowledgeBaseJobResult',
      maxRunningTimeInSeconds: 'MaxRunningTimeInSeconds',
      pipelineRunInfo: 'PipelineRunInfo',
      resourceId: 'ResourceId',
      status: 'Status',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      creator: 'string',
      description: 'string',
      ecsSpecs: { 'type': 'array', 'itemType': KnowledgeBaseJobEcsSpecs },
      embeddingConfig: KnowledgeBaseJobEmbeddingConfig,
      errorMessage: 'string',
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtModifiedTime: 'string',
      jobAction: 'string',
      knowledgeBaseId: 'string',
      knowledgeBaseJobId: 'string',
      knowledgeBaseJobResult: KnowledgeBaseJobKnowledgeBaseJobResult,
      maxRunningTimeInSeconds: 'number',
      pipelineRunInfo: KnowledgeBaseJobPipelineRunInfo,
      resourceId: 'string',
      status: 'string',
      userVpc: KnowledgeBaseJobUserVpc,
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
    if(this.knowledgeBaseJobResult && typeof (this.knowledgeBaseJobResult as any).validate === 'function') {
      (this.knowledgeBaseJobResult as any).validate();
    }
    if(this.pipelineRunInfo && typeof (this.pipelineRunInfo as any).validate === 'function') {
      (this.pipelineRunInfo as any).validate();
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

