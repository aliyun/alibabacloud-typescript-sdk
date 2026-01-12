// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { JobElasticSpec } from "./JobElasticSpec";
import { JobReplicaStatus } from "./JobReplicaStatus";
import { JobSpec } from "./JobSpec";
import { PodItem } from "./PodItem";
import { JobSettings } from "./JobSettings";
import { StatusTransitionItem } from "./StatusTransitionItem";


/**
 */
export class JobItemCodeSource extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * code-20210111103721-85qz78ia96lu
   */
  codeSourceId?: string;
  /**
   * @example
   * 44da109b59f8596152987eaa8f3b2487bb72ea63
   */
  commit?: string;
  /**
   * @example
   * /mnt/data
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      codeSourceId: 'CodeSourceId',
      commit: 'Commit',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      codeSourceId: 'string',
      commit: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobItemDataSources extends $dara.Model {
  /**
   * @example
   * data-20210114104214-vf9lowjt3pso
   */
  dataSourceId?: string;
  /**
   * @example
   * /mnt/data
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobItemUserVpc extends $dara.Model {
  defaultRoute?: string;
  extendedCidrs?: string[];
  securityGroupId?: string;
  switchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCidrs: 'ExtendedCidrs',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCidrs: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extendedCidrs)) {
      $dara.Model.validateArray(this.extendedCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobItem extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  clusterId?: string;
  codeSource?: JobItemCodeSource;
  credentialConfig?: CredentialConfig;
  dataSources?: JobItemDataSources[];
  /**
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @example
   * 3602
   */
  duration?: number;
  elasticSpec?: JobElasticSpec;
  /**
   * @example
   * false
   */
  enablePreemptibleJob?: boolean;
  /**
   * @example
   * false
   */
  enabledDebugger?: boolean;
  envs?: { [key: string]: string };
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtFailedTime?: string;
  /**
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtFinishTime?: string;
  /**
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtRunningTime?: string;
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtStoppedTime?: string;
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtSubmittedTime?: string;
  /**
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtSuccessedTime?: string;
  /**
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @example
   * dlc-20210126170216-mtl37ge7gkvdz
   */
  jobId?: string;
  /**
   * @example
   * 1
   */
  jobMaxRunningTimeMinutes?: number;
  jobReplicaStatuses?: JobReplicaStatus[];
  jobSpecs?: JobSpec[];
  /**
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @example
   * 1
   */
  nodeCount?: string;
  nodeNames?: string[];
  pods?: PodItem[];
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * JobStoppedByUser
   */
  reasonCode?: string;
  /**
   * @example
   * Job is stopped by user.
   */
  reasonMessage?: string;
  /**
   * @example
   * 1
   */
  requestCPU?: number;
  /**
   * @example
   * 1
   */
  requestGPU?: string;
  /**
   * @example
   * 1Gi
   */
  requestMemory?: string;
  /**
   * @example
   * dlc-quota
   */
  resourceId?: string;
  /**
   * @example
   * L0
   */
  resourceLevel?: string;
  /**
   * @example
   * my_resource_group
   */
  resourceName?: string;
  /**
   * @example
   * test
   */
  resourceQuotaName?: string;
  /**
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @example
   * 1
   */
  restartTimes?: string;
  settings?: JobSettings;
  /**
   * @example
   * Stopped
   */
  status?: string;
  statusHistory?: StatusTransitionItem[];
  /**
   * @example
   * Restarting
   */
  subStatus?: string;
  systemEnvs?: { [key: string]: string };
  tenantId?: string;
  /**
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  thirdpartyLibs?: string[];
  /**
   * @example
   * false
   */
  useOversoldResource?: boolean;
  /**
   * @example
   * python /root/code/mnist.py
   */
  userCommand?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @example
   * ls
   */
  userScript?: string;
  /**
   * @example
   * vpc-1
   */
  userVpc?: JobItemUserVpc;
  /**
   * @example
   * pai-dlc-role
   */
  username?: string;
  /**
   * @example
   * /mnt/data
   */
  workingDir?: string;
  /**
   * @example
   * 268
   */
  workspaceId?: string;
  /**
   * @example
   * dlc-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      clusterId: 'ClusterId',
      codeSource: 'CodeSource',
      credentialConfig: 'CredentialConfig',
      dataSources: 'DataSources',
      displayName: 'DisplayName',
      duration: 'Duration',
      elasticSpec: 'ElasticSpec',
      enablePreemptibleJob: 'EnablePreemptibleJob',
      enabledDebugger: 'EnabledDebugger',
      envs: 'Envs',
      gmtCreateTime: 'GmtCreateTime',
      gmtFailedTime: 'GmtFailedTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtRunningTime: 'GmtRunningTime',
      gmtStoppedTime: 'GmtStoppedTime',
      gmtSubmittedTime: 'GmtSubmittedTime',
      gmtSuccessedTime: 'GmtSuccessedTime',
      isDeleted: 'IsDeleted',
      jobId: 'JobId',
      jobMaxRunningTimeMinutes: 'JobMaxRunningTimeMinutes',
      jobReplicaStatuses: 'JobReplicaStatuses',
      jobSpecs: 'JobSpecs',
      jobType: 'JobType',
      nodeCount: 'NodeCount',
      nodeNames: 'NodeNames',
      pods: 'Pods',
      priority: 'Priority',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      resourceId: 'ResourceId',
      resourceLevel: 'ResourceLevel',
      resourceName: 'ResourceName',
      resourceQuotaName: 'ResourceQuotaName',
      resourceType: 'ResourceType',
      restartTimes: 'RestartTimes',
      settings: 'Settings',
      status: 'Status',
      statusHistory: 'StatusHistory',
      subStatus: 'SubStatus',
      systemEnvs: 'SystemEnvs',
      tenantId: 'TenantId',
      thirdpartyLibDir: 'ThirdpartyLibDir',
      thirdpartyLibs: 'ThirdpartyLibs',
      useOversoldResource: 'UseOversoldResource',
      userCommand: 'UserCommand',
      userId: 'UserId',
      userScript: 'UserScript',
      userVpc: 'UserVpc',
      username: 'Username',
      workingDir: 'WorkingDir',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      clusterId: 'string',
      codeSource: JobItemCodeSource,
      credentialConfig: CredentialConfig,
      dataSources: { 'type': 'array', 'itemType': JobItemDataSources },
      displayName: 'string',
      duration: 'number',
      elasticSpec: JobElasticSpec,
      enablePreemptibleJob: 'boolean',
      enabledDebugger: 'boolean',
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtFailedTime: 'string',
      gmtFinishTime: 'string',
      gmtModifiedTime: 'string',
      gmtRunningTime: 'string',
      gmtStoppedTime: 'string',
      gmtSubmittedTime: 'string',
      gmtSuccessedTime: 'string',
      isDeleted: 'boolean',
      jobId: 'string',
      jobMaxRunningTimeMinutes: 'number',
      jobReplicaStatuses: { 'type': 'array', 'itemType': JobReplicaStatus },
      jobSpecs: { 'type': 'array', 'itemType': JobSpec },
      jobType: 'string',
      nodeCount: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      pods: { 'type': 'array', 'itemType': PodItem },
      priority: 'number',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestCPU: 'number',
      requestGPU: 'string',
      requestMemory: 'string',
      resourceId: 'string',
      resourceLevel: 'string',
      resourceName: 'string',
      resourceQuotaName: 'string',
      resourceType: 'string',
      restartTimes: 'string',
      settings: JobSettings,
      status: 'string',
      statusHistory: { 'type': 'array', 'itemType': StatusTransitionItem },
      subStatus: 'string',
      systemEnvs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tenantId: 'string',
      thirdpartyLibDir: 'string',
      thirdpartyLibs: { 'type': 'array', 'itemType': 'string' },
      useOversoldResource: 'boolean',
      userCommand: 'string',
      userId: 'string',
      userScript: 'string',
      userVpc: JobItemUserVpc,
      username: 'string',
      workingDir: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(this.codeSource && typeof (this.codeSource as any).validate === 'function') {
      (this.codeSource as any).validate();
    }
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(Array.isArray(this.dataSources)) {
      $dara.Model.validateArray(this.dataSources);
    }
    if(this.elasticSpec && typeof (this.elasticSpec as any).validate === 'function') {
      (this.elasticSpec as any).validate();
    }
    if(this.envs) {
      $dara.Model.validateMap(this.envs);
    }
    if(Array.isArray(this.jobReplicaStatuses)) {
      $dara.Model.validateArray(this.jobReplicaStatuses);
    }
    if(Array.isArray(this.jobSpecs)) {
      $dara.Model.validateArray(this.jobSpecs);
    }
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    if(Array.isArray(this.pods)) {
      $dara.Model.validateArray(this.pods);
    }
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    if(Array.isArray(this.statusHistory)) {
      $dara.Model.validateArray(this.statusHistory);
    }
    if(this.systemEnvs) {
      $dara.Model.validateMap(this.systemEnvs);
    }
    if(Array.isArray(this.thirdpartyLibs)) {
      $dara.Model.validateArray(this.thirdpartyLibs);
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

