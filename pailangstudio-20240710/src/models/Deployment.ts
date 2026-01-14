// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeploymentChatHistoryConfig extends $dara.Model {
  /**
   * @remarks
   * 连接名称
   */
  connectionName?: string;
  /**
   * @remarks
   * 存储类型
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      connectionName: 'ConnectionName',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionName: 'string',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentContentModerationConfig extends $dara.Model {
  /**
   * @remarks
   * 启用输入内容审查
   */
  enableInputModeration?: boolean;
  /**
   * @remarks
   * 启用输出内容审查
   */
  enableOutputModeration?: boolean;
  /**
   * @remarks
   * 流式输出内容送审缓存大小
   */
  streamingModerationThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      enableInputModeration: 'EnableInputModeration',
      enableOutputModeration: 'EnableOutputModeration',
      streamingModerationThreshold: 'StreamingModerationThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInputModeration: 'boolean',
      enableOutputModeration: 'boolean',
      streamingModerationThreshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentCredentialConfigCredentialConfigItemsRoles extends $dara.Model {
  /**
   * @remarks
   * AssumeRoleFor
   */
  assumeRoleFor?: string;
  /**
   * @remarks
   * 角色名称
   */
  roleArn?: string;
  /**
   * @remarks
   * 角色类型
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      roleArn: 'RoleArn',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      roleArn: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentCredentialConfigCredentialConfigItems extends $dara.Model {
  /**
   * @remarks
   * Key
   */
  key?: string;
  /**
   * @remarks
   * 角色列表
   */
  roles?: DeploymentCredentialConfigCredentialConfigItemsRoles[];
  /**
   * @remarks
   * Type
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      roles: 'Roles',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      roles: { 'type': 'array', 'itemType': DeploymentCredentialConfigCredentialConfigItemsRoles },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentCredentialConfig extends $dara.Model {
  /**
   * @remarks
   * AliyunEnvRoleKey
   */
  aliyunEnvRoleKey?: string;
  /**
   * @remarks
   * Credential配置项列表
   */
  credentialConfigItems?: DeploymentCredentialConfigCredentialConfigItems[];
  /**
   * @remarks
   * 是否启用Credential注入
   */
  enableCredentialInject?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliyunEnvRoleKey: 'AliyunEnvRoleKey',
      credentialConfigItems: 'CredentialConfigItems',
      enableCredentialInject: 'EnableCredentialInject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunEnvRoleKey: 'string',
      credentialConfigItems: { 'type': 'array', 'itemType': DeploymentCredentialConfigCredentialConfigItems },
      enableCredentialInject: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.credentialConfigItems)) {
      $dara.Model.validateArray(this.credentialConfigItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentDataSources extends $dara.Model {
  /**
   * @remarks
   * 数据集ID
   */
  datasetId?: string;
  /**
   * @remarks
   * 挂载路径
   */
  mountPath?: string;
  /**
   * @remarks
   * 统一资源识别码
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
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

export class DeploymentDeploymentStages extends $dara.Model {
  /**
   * @remarks
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * 结束时间
   */
  gmtEndTime?: string;
  /**
   * @remarks
   * 开始时间
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * 阶段
   */
  stage?: number;
  /**
   * @remarks
   * 阶段信息
   */
  stageInfo?: string;
  /**
   * @remarks
   * 阶段名称
   */
  stageName?: string;
  /**
   * @remarks
   * 阶段状态
   */
  stageStatus?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      errorMessage: 'ErrorMessage',
      gmtEndTime: 'GmtEndTime',
      gmtStartTime: 'GmtStartTime',
      stage: 'Stage',
      stageInfo: 'StageInfo',
      stageName: 'StageName',
      stageStatus: 'StageStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      errorMessage: 'string',
      gmtEndTime: 'string',
      gmtStartTime: 'string',
      stage: 'number',
      stageInfo: 'string',
      stageName: 'string',
      stageStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentEcsSpecComputingInstanceConfigComputingInstances extends $dara.Model {
  /**
   * @remarks
   * 竞价出价
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * 机型
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      spotPriceLimit: 'SpotPriceLimit',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotPriceLimit: 'number',
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

export class DeploymentEcsSpecComputingInstanceConfig extends $dara.Model {
  /**
   * @remarks
   * 机器资源配置
   */
  computingInstances?: DeploymentEcsSpecComputingInstanceConfigComputingInstances[];
  /**
   * @remarks
   * 是否启用竞价保留时长
   */
  disableSpotProtectionPeriod?: boolean;
  static names(): { [key: string]: string } {
    return {
      computingInstances: 'ComputingInstances',
      disableSpotProtectionPeriod: 'DisableSpotProtectionPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingInstances: { 'type': 'array', 'itemType': DeploymentEcsSpecComputingInstanceConfigComputingInstances },
      disableSpotProtectionPeriod: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.computingInstances)) {
      $dara.Model.validateArray(this.computingInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentEcsSpec extends $dara.Model {
  /**
   * @remarks
   * CPU信息
   */
  CPU?: number;
  /**
   * @remarks
   * 竞价资源配置
   */
  computingInstanceConfig?: DeploymentEcsSpecComputingInstanceConfig;
  /**
   * @remarks
   * 额外系统盘
   */
  extraEphemeralStorage?: number;
  /**
   * @remarks
   * GPU信息
   */
  GPU?: number;
  /**
   * @remarks
   * GPU算力占比
   */
  GPUCorePercentage?: number;
  /**
   * @remarks
   * GPU显存
   */
  GPUMemory?: number;
  /**
   * @remarks
   * GPU类型
   */
  GPUType?: string;
  /**
   * @remarks
   * 实例类型
   */
  instanceType?: string;
  /**
   * @remarks
   * 内存信息
   */
  memory?: number;
  /**
   * @remarks
   * Pod数量
   */
  podCount?: number;
  /**
   * @remarks
   * 资源配额ID
   */
  quotaId?: string;
  /**
   * @remarks
   * 资源配额类型
   */
  quotaType?: string;
  /**
   * @remarks
   * 是否启用弹性资源池
   */
  resourceBurstable?: boolean;
  /**
   * @remarks
   * 资源组ID
   */
  resourceId?: string;
  /**
   * @remarks
   * 共享内存
   */
  sharedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      computingInstanceConfig: 'ComputingInstanceConfig',
      extraEphemeralStorage: 'ExtraEphemeralStorage',
      GPU: 'GPU',
      GPUCorePercentage: 'GPUCorePercentage',
      GPUMemory: 'GPUMemory',
      GPUType: 'GPUType',
      instanceType: 'InstanceType',
      memory: 'Memory',
      podCount: 'PodCount',
      quotaId: 'QuotaId',
      quotaType: 'QuotaType',
      resourceBurstable: 'ResourceBurstable',
      resourceId: 'ResourceId',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'number',
      computingInstanceConfig: DeploymentEcsSpecComputingInstanceConfig,
      extraEphemeralStorage: 'number',
      GPU: 'number',
      GPUCorePercentage: 'number',
      GPUMemory: 'number',
      GPUType: 'string',
      instanceType: 'string',
      memory: 'number',
      podCount: 'number',
      quotaId: 'string',
      quotaType: 'string',
      resourceBurstable: 'boolean',
      resourceId: 'string',
      sharedMemory: 'number',
    };
  }

  validate() {
    if(this.computingInstanceConfig && typeof (this.computingInstanceConfig as any).validate === 'function') {
      (this.computingInstanceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentEnvs extends $dara.Model {
  /**
   * @remarks
   * 环境键
   */
  key?: string;
  /**
   * @remarks
   * 环境值
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentLabels extends $dara.Model {
  /**
   * @remarks
   * 标签键
   */
  key?: string;
  /**
   * @remarks
   * 标签值
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeploymentUserVpc extends $dara.Model {
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

export class Deployment extends $dara.Model {
  accessibility?: string;
  autoApproval?: boolean;
  chatHistoryConfig?: DeploymentChatHistoryConfig;
  contentModerationConfig?: DeploymentContentModerationConfig;
  creator?: string;
  credentialConfig?: DeploymentCredentialConfig;
  dataSources?: DeploymentDataSources[];
  deploymentConfig?: string;
  deploymentId?: string;
  deploymentStages?: DeploymentDeploymentStages[];
  deploymentStatus?: string;
  description?: string;
  ecsSpec?: DeploymentEcsSpec;
  enableTrace?: boolean;
  envs?: DeploymentEnvs[];
  errorMessage?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labels?: DeploymentLabels[];
  operationType?: string;
  resourceId?: string;
  resourceSnapshotId?: string;
  resourceType?: string;
  serviceGroup?: string;
  serviceName?: string;
  userVpc?: DeploymentUserVpc;
  workDir?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      autoApproval: 'AutoApproval',
      chatHistoryConfig: 'ChatHistoryConfig',
      contentModerationConfig: 'ContentModerationConfig',
      creator: 'Creator',
      credentialConfig: 'CredentialConfig',
      dataSources: 'DataSources',
      deploymentConfig: 'DeploymentConfig',
      deploymentId: 'DeploymentId',
      deploymentStages: 'DeploymentStages',
      deploymentStatus: 'DeploymentStatus',
      description: 'Description',
      ecsSpec: 'EcsSpec',
      enableTrace: 'EnableTrace',
      envs: 'Envs',
      errorMessage: 'ErrorMessage',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      operationType: 'OperationType',
      resourceId: 'ResourceId',
      resourceSnapshotId: 'ResourceSnapshotId',
      resourceType: 'ResourceType',
      serviceGroup: 'ServiceGroup',
      serviceName: 'ServiceName',
      userVpc: 'UserVpc',
      workDir: 'WorkDir',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      autoApproval: 'boolean',
      chatHistoryConfig: DeploymentChatHistoryConfig,
      contentModerationConfig: DeploymentContentModerationConfig,
      creator: 'string',
      credentialConfig: DeploymentCredentialConfig,
      dataSources: { 'type': 'array', 'itemType': DeploymentDataSources },
      deploymentConfig: 'string',
      deploymentId: 'string',
      deploymentStages: { 'type': 'array', 'itemType': DeploymentDeploymentStages },
      deploymentStatus: 'string',
      description: 'string',
      ecsSpec: DeploymentEcsSpec,
      enableTrace: 'boolean',
      envs: { 'type': 'array', 'itemType': DeploymentEnvs },
      errorMessage: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': DeploymentLabels },
      operationType: 'string',
      resourceId: 'string',
      resourceSnapshotId: 'string',
      resourceType: 'string',
      serviceGroup: 'string',
      serviceName: 'string',
      userVpc: DeploymentUserVpc,
      workDir: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.chatHistoryConfig && typeof (this.chatHistoryConfig as any).validate === 'function') {
      (this.chatHistoryConfig as any).validate();
    }
    if(this.contentModerationConfig && typeof (this.contentModerationConfig as any).validate === 'function') {
      (this.contentModerationConfig as any).validate();
    }
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(Array.isArray(this.deploymentStages)) {
      $dara.Model.validateArray(this.deploymentStages);
    }
    if(this.ecsSpec && typeof (this.ecsSpec as any).validate === 'function') {
      (this.ecsSpec as any).validate();
    }
    if(Array.isArray(this.envs)) {
      $dara.Model.validateArray(this.envs);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
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

