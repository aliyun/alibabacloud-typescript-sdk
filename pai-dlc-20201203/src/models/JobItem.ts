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
   * @remarks
   * The code repository branch.
   * 
   * @example
   * master
   */
  branch?: string;
  /**
   * @remarks
   * The code source ID.
   * 
   * @example
   * code-20210111103721-********
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The CommitID of the code repository used by the job.
   * 
   * @example
   * 44da109b59f8596152987eaa8f3b2487bb******
   */
  commit?: string;
  /**
   * @remarks
   * The local mount path of the code.
   * 
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
   * @remarks
   * The data source ID.
   * 
   * @example
   * data-20210114104214-********
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The local mount path of the data source.
   * 
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
  /**
   * @remarks
   * The default route. Default value: false. Valid values:
   * 
   * *   eth0: The default network interface is used to access the Internet through the public gateway.
   * *   eth1: The user\\"s Elastic Network Interface is used to access the Internet through the private gateway.
   * 
   * @example
   * eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR blocks that need to be connected.
   */
  extendedCidrs?: string[];
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-2zeef***
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2ze6***
   */
  switchId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-2zed***
   */
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
   * @remarks
   * The visibility of the job.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ****1316721349****
   */
  clusterId?: string;
  /**
   * @remarks
   * The code source used by the job.
   */
  codeSource?: JobItemCodeSource;
  /**
   * @remarks
   * The credential configurations associated with the job.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * A list of all data sources used by the job.
   */
  dataSources?: JobItemDataSources[];
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * tf-mnist-test
   */
  displayName?: string;
  /**
   * @remarks
   * The duration of the job. Unit: seconds.
   * 
   * @example
   * 3602
   */
  duration?: number;
  /**
   * @remarks
   * The elastic parameters of the job.
   */
  elasticSpec?: JobElasticSpec;
  /**
   * @remarks
   * Indicates whether PreemptibleJob is enabled.
   * 
   * @example
   * false
   */
  enablePreemptibleJob?: boolean;
  /**
   * @remarks
   * Indicates whether DeBugger is enabled.
   * 
   * @example
   * false
   */
  enabledDebugger?: boolean;
  /**
   * @remarks
   * The environment variables that are injected into the job run time.
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * The time when the job was created (UTC).
   * 
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the job failed (UTC).
   * 
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtFailedTime?: string;
  /**
   * @remarks
   * The time when the job ended (UTC).
   * 
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The time when the job was modified (UTC).
   * 
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The time when the job started (UTC).
   * 
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtRunningTime?: string;
  /**
   * @remarks
   * The time when the job stopped (UTC).
   * 
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtStoppedTime?: string;
  /**
   * @remarks
   * The time when the job was submitted (UTC).
   * 
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtSubmittedTime?: string;
  /**
   * @remarks
   * The time when the job succeeded (UTC).
   * 
   * @example
   * 2021-01-12T14:35:01Z
   */
  gmtSuccessedTime?: string;
  /**
   * @remarks
   * Indicates whether the job is deleted.
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * dlc-20210126170216-********
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum running duration of the job.
   * 
   * @example
   * 1
   */
  jobMaxRunningTimeMinutes?: number;
  jobReplicaStatuses?: JobReplicaStatus[];
  /**
   * @remarks
   * The node configurations of the job run time.
   */
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * The job type. Valid values:
   * 
   * *   TFJob
   * *   PyTorchJob
   * *   MPIJob
   * *   XGBoostJob
   * *   OneFlowJob
   * *   ElasticBatchJob
   * *   RayJob
   * *   SlurmJob
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  nodeCount?: string;
  /**
   * @remarks
   * The node names.
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The pods.
   */
  pods?: PodItem[];
  /**
   * @remarks
   * The priority of the job.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The reason code for the job to enter the current status. Valid values:
   * 
   * *   InvalidParameter
   * *   JobSucceeded
   * *   JobStoppedByUser
   * 
   * @example
   * JobStoppedByUser
   */
  reasonCode?: string;
  /**
   * @remarks
   * The detailed reason for the job to enter the current status.
   * 
   * @example
   * Job is stopped by user.
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The requested CPU cores.
   * 
   * @example
   * 1
   */
  requestCPU?: number;
  /**
   * @remarks
   * The requested GPU cores.
   * 
   * @example
   * 1
   */
  requestGPU?: string;
  /**
   * @remarks
   * The requested memory.
   * 
   * @example
   * 1Gi
   */
  requestMemory?: string;
  /**
   * @remarks
   * The ID of the resource group to which the resource belongs.
   * 
   * @example
   * dlc-quota
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource level of the job run time.
   * 
   * @example
   * L0
   */
  resourceLevel?: string;
  /**
   * @remarks
   * The name of the resource on which the job runs.
   * 
   * @example
   * my_resource_group
   */
  resourceName?: string;
  /**
   * @remarks
   * The name of the resource quota.
   * 
   * @example
   * test
   */
  resourceQuotaName?: string;
  /**
   * @remarks
   * The resource type. Valid values: ECS, Lingjun, and ACS.
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of job restarts.
   * 
   * @example
   * 1
   */
  restartTimes?: string;
  /**
   * @remarks
   * The extra parameters of the job.
   */
  settings?: JobSettings;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * *   Succeeded
   * *   Failed
   * 
   * @example
   * Stopped
   */
  status?: string;
  /**
   * @remarks
   * The status history of the job.
   */
  statusHistory?: StatusTransitionItem[];
  /**
   * @remarks
   * The sub-status of the job, such as the preemption and retry status.
   * 
   * @example
   * Restarting
   */
  subStatus?: string;
  /**
   * @remarks
   * The system environment variables configured.
   */
  systemEnvs?: { [key: string]: string };
  templateId?: string;
  templateName?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * ****93955616****
   */
  tenantId?: string;
  /**
   * @remarks
   * The name of the folder in which the requirements.txt file resides.
   * 
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  /**
   * @remarks
   * The third-party Python libraries required for the job.
   */
  thirdpartyLibs?: string[];
  /**
   * @remarks
   * Indicates whether the job uses idle resources.
   * 
   * @example
   * false
   */
  useOversoldResource?: boolean;
  /**
   * @remarks
   * The start command for each node of the job.
   * 
   * @example
   * python /root/code/mnist.py
   */
  userCommand?: string;
  /**
   * @remarks
   * The UID of the user to which the job belongs.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The user script.
   * 
   * @example
   * ls
   */
  userScript?: string;
  /**
   * @remarks
   * The user VPC.
   * 
   * @example
   * vpc-1
   */
  userVpc?: JobItemUserVpc;
  /**
   * @remarks
   * The username that is used to submit the job.
   * 
   * @example
   * pai-dlc-role
   */
  username?: string;
  /**
   * @remarks
   * The working path.
   * 
   * @example
   * /mnt/data
   */
  workingDir?: string;
  /**
   * @remarks
   * The ID of the workspace to which the job belongs.
   * 
   * @example
   * 268
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace to which the job belongs.
   * 
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
      templateId: 'TemplateId',
      templateName: 'TemplateName',
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
      templateId: 'string',
      templateName: 'string',
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

