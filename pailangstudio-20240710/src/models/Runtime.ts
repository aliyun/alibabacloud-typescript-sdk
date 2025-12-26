// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RuntimeCredentialConfigCredentialConfigItemsRoles extends $dara.Model {
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

export class RuntimeCredentialConfigCredentialConfigItems extends $dara.Model {
  /**
   * @remarks
   * Key
   */
  key?: string;
  /**
   * @remarks
   * 角色列表
   */
  roles?: RuntimeCredentialConfigCredentialConfigItemsRoles[];
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
      roles: { 'type': 'array', 'itemType': RuntimeCredentialConfigCredentialConfigItemsRoles },
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

export class RuntimeCredentialConfig extends $dara.Model {
  /**
   * @remarks
   * AliyunEnvRoleKey
   */
  aliyunEnvRoleKey?: string;
  /**
   * @remarks
   * Credential配置项列表
   */
  credentialConfigItems?: RuntimeCredentialConfigCredentialConfigItems[];
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
      credentialConfigItems: { 'type': 'array', 'itemType': RuntimeCredentialConfigCredentialConfigItems },
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

export class RuntimeDataSources extends $dara.Model {
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

export class RuntimeEcsSpec extends $dara.Model {
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

export class RuntimeEnvs extends $dara.Model {
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

export class RuntimeFlows extends $dara.Model {
  /**
   * @remarks
   * 应用流ID
   */
  flowId?: string;
  /**
   * @remarks
   * 应用流名称
   */
  flowName?: string;
  static names(): { [key: string]: string } {
    return {
      flowId: 'FlowId',
      flowName: 'FlowName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowId: 'string',
      flowName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RuntimeLabels extends $dara.Model {
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

export class RuntimeUserVpc extends $dara.Model {
  /**
   * @remarks
   * 默认路由
   */
  defaultRoute?: string;
  /**
   * @remarks
   * 扩展网段
   */
  extendedCIDRs?: string[];
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
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendedCIDRs)) {
      $dara.Model.validateArray(this.extendedCIDRs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Runtime extends $dara.Model {
  accessibility?: string;
  creator?: string;
  credentialConfig?: RuntimeCredentialConfig;
  dataSources?: RuntimeDataSources[];
  ecsSpec?: RuntimeEcsSpec;
  envs?: RuntimeEnvs[];
  flowId?: string;
  flows?: RuntimeFlows[];
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  idleTimeout?: number;
  labels?: RuntimeLabels[];
  latestVersion?: string;
  MCPConfig?: string;
  resourceId?: string;
  runTimeout?: number;
  runtimeId?: string;
  runtimeLog?: string;
  runtimeName?: string;
  runtimeStatus?: string;
  runtimeType?: string;
  supportSSEStream?: boolean;
  userVpc?: RuntimeUserVpc;
  version?: string;
  workDir?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      creator: 'Creator',
      credentialConfig: 'CredentialConfig',
      dataSources: 'DataSources',
      ecsSpec: 'EcsSpec',
      envs: 'Envs',
      flowId: 'FlowId',
      flows: 'Flows',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      idleTimeout: 'IdleTimeout',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      MCPConfig: 'MCPConfig',
      resourceId: 'ResourceId',
      runTimeout: 'RunTimeout',
      runtimeId: 'RuntimeId',
      runtimeLog: 'RuntimeLog',
      runtimeName: 'RuntimeName',
      runtimeStatus: 'RuntimeStatus',
      runtimeType: 'RuntimeType',
      supportSSEStream: 'SupportSSEStream',
      userVpc: 'UserVpc',
      version: 'Version',
      workDir: 'WorkDir',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      creator: 'string',
      credentialConfig: RuntimeCredentialConfig,
      dataSources: { 'type': 'array', 'itemType': RuntimeDataSources },
      ecsSpec: RuntimeEcsSpec,
      envs: { 'type': 'array', 'itemType': RuntimeEnvs },
      flowId: 'string',
      flows: { 'type': 'array', 'itemType': RuntimeFlows },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      idleTimeout: 'number',
      labels: { 'type': 'array', 'itemType': RuntimeLabels },
      latestVersion: 'string',
      MCPConfig: 'string',
      resourceId: 'string',
      runTimeout: 'number',
      runtimeId: 'string',
      runtimeLog: 'string',
      runtimeName: 'string',
      runtimeStatus: 'string',
      runtimeType: 'string',
      supportSSEStream: 'boolean',
      userVpc: RuntimeUserVpc,
      version: 'string',
      workDir: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
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
    if(Array.isArray(this.flows)) {
      $dara.Model.validateArray(this.flows);
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

