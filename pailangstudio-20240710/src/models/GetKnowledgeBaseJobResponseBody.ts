// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeBaseJobResponseBodyEcsSpecs extends $dara.Model {
  /**
   * @remarks
   * CPU核数
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

export class GetKnowledgeBaseJobResponseBodyEmbeddingConfig extends $dara.Model {
  /**
   * @remarks
   * Embedding分批大小
   * 
   * @example
   * 10
   */
  batchSize?: number;
  /**
   * @remarks
   * Embedding并发数
   * 
   * @example
   * 2
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

export class GetKnowledgeBaseJobResponseBodyKnowledgeBaseJobResult extends $dara.Model {
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

export class GetKnowledgeBaseJobResponseBodyPipelineRunInfo extends $dara.Model {
  /**
   * @remarks
   * PaiFlow工作流运行ID
   * 
   * @example
   * flow-fi8z******g4gy
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

export class GetKnowledgeBaseJobResponseBodyUserVpc extends $dara.Model {
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

export class GetKnowledgeBaseJobResponseBody extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  creator?: string;
  /**
   * @example
   * project name pass the check
   */
  description?: string;
  ecsSpecs?: GetKnowledgeBaseJobResponseBodyEcsSpecs[];
  embeddingConfig?: GetKnowledgeBaseJobResponseBodyEmbeddingConfig;
  errorMessage?: string;
  /**
   * @example
   * 2025-09-24T07:33:53Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2025-02-08T15:45:12Z
   */
  gmtFinishTime?: string;
  /**
   * @example
   * 2025-06-11T08:58:35.438Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * UpdateScheduleConfig
   */
  jobAction?: string;
  /**
   * @example
   * d-nacr******sxd2
   */
  knowledgeBaseId?: string;
  /**
   * @example
   * kbjob-9m******54
   */
  knowledgeBaseJobId?: string;
  knowledgeBaseJobResult?: GetKnowledgeBaseJobResponseBodyKnowledgeBaseJobResult;
  /**
   * @example
   * 86400
   */
  maxRunningTimeInSeconds?: number;
  pipelineRunInfo?: GetKnowledgeBaseJobResponseBodyPipelineRunInfo;
  /**
   * @example
   * C25324E3-18E6-50D8-9026-16D74AAEEB26
   */
  requestId?: string;
  resourceId?: string;
  /**
   * @example
   * discovering
   */
  status?: string;
  userVpc?: GetKnowledgeBaseJobResponseBodyUserVpc;
  /**
   * @example
   * 478***
   */
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
      requestId: 'RequestId',
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
      ecsSpecs: { 'type': 'array', 'itemType': GetKnowledgeBaseJobResponseBodyEcsSpecs },
      embeddingConfig: GetKnowledgeBaseJobResponseBodyEmbeddingConfig,
      errorMessage: 'string',
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtModifiedTime: 'string',
      jobAction: 'string',
      knowledgeBaseId: 'string',
      knowledgeBaseJobId: 'string',
      knowledgeBaseJobResult: GetKnowledgeBaseJobResponseBodyKnowledgeBaseJobResult,
      maxRunningTimeInSeconds: 'number',
      pipelineRunInfo: GetKnowledgeBaseJobResponseBodyPipelineRunInfo,
      requestId: 'string',
      resourceId: 'string',
      status: 'string',
      userVpc: GetKnowledgeBaseJobResponseBodyUserVpc,
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

