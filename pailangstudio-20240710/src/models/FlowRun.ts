// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowRunChildRunsFlowSource extends $dara.Model {
  /**
   * @remarks
   * ID
   */
  id?: string;
  /**
   * @remarks
   * 名称
   */
  name?: string;
  /**
   * @remarks
   * 类型
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
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

export class FlowRunChildRunsJobInfo extends $dara.Model {
  /**
   * @remarks
   * 任务ID
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlowRunChildRuns extends $dara.Model {
  /**
   * @remarks
   * 运行时长
   */
  duration?: number;
  /**
   * @remarks
   * 应用流运行ID
   */
  flowRunId?: string;
  /**
   * @remarks
   * 应用流来源
   */
  flowSource?: FlowRunChildRunsFlowSource;
  /**
   * @remarks
   * 创建时间
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * 结束时间
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * 修改时间
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * 开始时间
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * 任务信息
   */
  jobInfo?: FlowRunChildRunsJobInfo;
  /**
   * @remarks
   * 运行模式
   */
  runMode?: string;
  /**
   * @remarks
   * 运行名称
   */
  runName?: string;
  /**
   * @remarks
   * 运行结果
   */
  runResult?: string;
  /**
   * @remarks
   * 运行状态
   */
  runStatus?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      flowRunId: 'FlowRunId',
      flowSource: 'FlowSource',
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartTime: 'GmtStartTime',
      jobInfo: 'JobInfo',
      runMode: 'RunMode',
      runName: 'RunName',
      runResult: 'RunResult',
      runStatus: 'RunStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      flowRunId: 'string',
      flowSource: FlowRunChildRunsFlowSource,
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartTime: 'string',
      jobInfo: FlowRunChildRunsJobInfo,
      runMode: 'string',
      runName: 'string',
      runResult: 'string',
      runStatus: 'string',
    };
  }

  validate() {
    if(this.flowSource && typeof (this.flowSource as any).validate === 'function') {
      (this.flowSource as any).validate();
    }
    if(this.jobInfo && typeof (this.jobInfo as any).validate === 'function') {
      (this.jobInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlowRunCredentialConfigCredentialConfigItemsRoles extends $dara.Model {
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

export class FlowRunCredentialConfigCredentialConfigItems extends $dara.Model {
  /**
   * @remarks
   * Key
   */
  key?: string;
  /**
   * @remarks
   * 角色列表
   */
  roles?: FlowRunCredentialConfigCredentialConfigItemsRoles[];
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
      roles: { 'type': 'array', 'itemType': FlowRunCredentialConfigCredentialConfigItemsRoles },
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

export class FlowRunCredentialConfig extends $dara.Model {
  /**
   * @remarks
   * AliyunEnvRoleKey
   */
  aliyunEnvRoleKey?: string;
  /**
   * @remarks
   * Credential配置项列表
   */
  credentialConfigItems?: FlowRunCredentialConfigCredentialConfigItems[];
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
      credentialConfigItems: { 'type': 'array', 'itemType': FlowRunCredentialConfigCredentialConfigItems },
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

export class FlowRunDataSources extends $dara.Model {
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

export class FlowRunEcsSpec extends $dara.Model {
  /**
   * @remarks
   * CPU信息
   */
  CPU?: number;
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
   * 共享内存
   */
  sharedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
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
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'number',
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
      sharedMemory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlowRunEnvs extends $dara.Model {
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

export class FlowRunEvaluationConfigsFlowSource extends $dara.Model {
  /**
   * @remarks
   * ID
   */
  id?: string;
  /**
   * @remarks
   * 名称
   */
  name?: string;
  /**
   * @remarks
   * 类型
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
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

export class FlowRunEvaluationConfigs extends $dara.Model {
  /**
   * @remarks
   * 映射配置
   */
  dataColumnMapping?: { [key: string]: string };
  /**
   * @remarks
   * 应用流来源
   */
  flowSource?: FlowRunEvaluationConfigsFlowSource;
  /**
   * @remarks
   * 输入配置
   */
  inputsOverrideConfig?: string;
  static names(): { [key: string]: string } {
    return {
      dataColumnMapping: 'DataColumnMapping',
      flowSource: 'FlowSource',
      inputsOverrideConfig: 'InputsOverrideConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataColumnMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      flowSource: FlowRunEvaluationConfigsFlowSource,
      inputsOverrideConfig: 'string',
    };
  }

  validate() {
    if(this.dataColumnMapping) {
      $dara.Model.validateMap(this.dataColumnMapping);
    }
    if(this.flowSource && typeof (this.flowSource as any).validate === 'function') {
      (this.flowSource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlowRunLabels extends $dara.Model {
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

export class FlowRunNodeRunInfos extends $dara.Model {
  /**
   * @remarks
   * 耗时
   */
  duration?: string;
  /**
   * @remarks
   * 错误信息
   */
  errorMessage?: string;
  /**
   * @remarks
   * 输入
   */
  inputs?: string;
  /**
   * @remarks
   * 节点名称
   */
  nodeName?: string;
  /**
   * @remarks
   * 输出
   */
  output?: string;
  /**
   * @remarks
   * 节点状态
   */
  status?: string;
  /**
   * @remarks
   * 日志信息
   */
  stdout?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      errorMessage: 'ErrorMessage',
      inputs: 'Inputs',
      nodeName: 'NodeName',
      output: 'Output',
      status: 'Status',
      stdout: 'Stdout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      errorMessage: 'string',
      inputs: 'string',
      nodeName: 'string',
      output: 'string',
      status: 'string',
      stdout: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FlowRunUserVpc extends $dara.Model {
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

export class FlowRun extends $dara.Model {
  accessibility?: string;
  childRuns?: FlowRunChildRuns[];
  creator?: string;
  credentialConfig?: FlowRunCredentialConfig;
  dataColumnMapping?: { [key: string]: string };
  dataSources?: FlowRunDataSources[];
  duration?: number;
  ecsSpec?: FlowRunEcsSpec;
  envs?: FlowRunEnvs[];
  evaluationConfigs?: FlowRunEvaluationConfigs[];
  evaluationWorkerCount?: number;
  exception?: string;
  flowId?: string;
  flowName?: string;
  flowRunId?: string;
  gmtCreateTime?: string;
  gmtFinishTime?: string;
  gmtModifiedTime?: string;
  gmtStartTime?: string;
  labels?: FlowRunLabels[];
  nodeName?: string;
  nodeRunInfos?: FlowRunNodeRunInfos[];
  resourceId?: string;
  runMode?: string;
  runName?: string;
  runResult?: string;
  runStatus?: string;
  runTimeout?: number;
  userVpc?: FlowRunUserVpc;
  variant?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      childRuns: 'ChildRuns',
      creator: 'Creator',
      credentialConfig: 'CredentialConfig',
      dataColumnMapping: 'DataColumnMapping',
      dataSources: 'DataSources',
      duration: 'Duration',
      ecsSpec: 'EcsSpec',
      envs: 'Envs',
      evaluationConfigs: 'EvaluationConfigs',
      evaluationWorkerCount: 'EvaluationWorkerCount',
      exception: 'Exception',
      flowId: 'FlowId',
      flowName: 'FlowName',
      flowRunId: 'FlowRunId',
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartTime: 'GmtStartTime',
      labels: 'Labels',
      nodeName: 'NodeName',
      nodeRunInfos: 'NodeRunInfos',
      resourceId: 'ResourceId',
      runMode: 'RunMode',
      runName: 'RunName',
      runResult: 'RunResult',
      runStatus: 'RunStatus',
      runTimeout: 'RunTimeout',
      userVpc: 'UserVpc',
      variant: 'Variant',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      childRuns: { 'type': 'array', 'itemType': FlowRunChildRuns },
      creator: 'string',
      credentialConfig: FlowRunCredentialConfig,
      dataColumnMapping: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      dataSources: { 'type': 'array', 'itemType': FlowRunDataSources },
      duration: 'number',
      ecsSpec: FlowRunEcsSpec,
      envs: { 'type': 'array', 'itemType': FlowRunEnvs },
      evaluationConfigs: { 'type': 'array', 'itemType': FlowRunEvaluationConfigs },
      evaluationWorkerCount: 'number',
      exception: 'string',
      flowId: 'string',
      flowName: 'string',
      flowRunId: 'string',
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartTime: 'string',
      labels: { 'type': 'array', 'itemType': FlowRunLabels },
      nodeName: 'string',
      nodeRunInfos: { 'type': 'array', 'itemType': FlowRunNodeRunInfos },
      resourceId: 'string',
      runMode: 'string',
      runName: 'string',
      runResult: 'string',
      runStatus: 'string',
      runTimeout: 'number',
      userVpc: FlowRunUserVpc,
      variant: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childRuns)) {
      $dara.Model.validateArray(this.childRuns);
    }
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(this.dataColumnMapping) {
      $dara.Model.validateMap(this.dataColumnMapping);
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(this.ecsSpec && typeof (this.ecsSpec as any).validate === 'function') {
      (this.ecsSpec as any).validate();
    }
    if(Array.isArray(this.envs)) {
      $dara.Model.validateArray(this.envs);
    }
    if(Array.isArray(this.evaluationConfigs)) {
      $dara.Model.validateArray(this.evaluationConfigs);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.nodeRunInfos)) {
      $dara.Model.validateArray(this.nodeRunInfos);
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

