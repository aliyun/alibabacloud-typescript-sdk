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
   * The code source configuration ID.
   * 
   * @example
   * code-20210111103721-********
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The commit ID of the code repository used by this job.
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
   * The datasource config ID.
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
   * The default routing. Valid values:
   * - eth0: Uses the default network interface controller (NIC) to access external networks through the public gateway.
   * - eth1: Uses the user elastic network interfaces (ENIs) to access external networks through the private gateway.
   * 
   * @example
   * eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR blocks to connect.
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
   * The visibility.
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
   * The code source configuration used by this job.
   */
  codeSource?: JobItemCodeSource;
  /**
   * @remarks
   * The access credential configuration associated with the job.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The list of all datasource configs used by this job.
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
   * The job duration in seconds.
   * 
   * @example
   * 243
   */
  duration?: number;
  /**
   * @remarks
   * The elastic job parameters.
   */
  elasticSpec?: JobElasticSpec;
  /**
   * @remarks
   * Specifies whether the preemptible job is enabled.
   * 
   * @example
   * false
   */
  enablePreemptibleJob?: boolean;
  /**
   * @remarks
   * Specifies whether debugger analysis is enabled.
   * 
   * @example
   * false
   */
  enabledDebugger?: boolean;
  /**
   * @remarks
   * The environment variables injected during job execution.
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * The job creation time in UTC format.
   * 
   * @example
   * 2025-04-16T07:25:34Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The job failure time in UTC.
   * 
   * @example
   * null
   */
  gmtFailedTime?: string;
  /**
   * @remarks
   * The job end time in UTC.
   * 
   * @example
   * 2025-04-16T07:28:20Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The job modification time in UTC.
   * 
   * @example
   * 2025-04-16T07:28:22Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The job start time in UTC.
   * 
   * @example
   * 2025-04-16T07:26:41Z
   */
  gmtRunningTime?: string;
  /**
   * @remarks
   * The job stop time in UTC.
   * 
   * @example
   * null
   */
  gmtStoppedTime?: string;
  /**
   * @remarks
   * The job submission time in UTC.
   * 
   * @example
   * 2025-04-16T07:26:14Z
   */
  gmtSubmittedTime?: string;
  /**
   * @remarks
   * The job success time in UTC.
   * 
   * @example
   * 2025-04-16T07:28:20Z
   */
  gmtSuccessedTime?: string;
  /**
   * @remarks
   * Specifies whether the job is deleted.
   * 
   * @example
   * false
   */
  isDeleted?: boolean;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc-20210126170216-********
   */
  jobId?: string;
  /**
   * @remarks
   * The maximum job running time.
   * 
   * @example
   * 0
   */
  jobMaxRunningTimeMinutes?: number;
  /**
   * @remarks
   * The list of replica running statuses for each task role.
   */
  jobReplicaStatuses?: JobReplicaStatus[];
  /**
   * @remarks
   * The node configuration during job execution.
   */
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * The job type. Valid values:
   * - TFJob
   * - PyTorchJob
   * - MPIJob
   * - XGBoostJob
   * - OneFlowJob
   * - ElasticBatchJob
   * - RayJob
   * - SlurmJob
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
   * The job priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The reason code for the current job status. Valid values:
   * - InvalidParameter
   * - JobSucceeded
   * - JobStoppedByUser
   * 
   * @example
   * JobStoppedByUser
   */
  reasonCode?: string;
  /**
   * @remarks
   * The detailed description of the reason for the current job status.
   * 
   * @example
   * Job is stopped by user.
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The requested CPU resources.
   * 
   * @example
   * 1
   */
  requestCPU?: number;
  /**
   * @remarks
   * The requested GPU resources.
   * 
   * @example
   * 1
   */
  requestGPU?: string;
  /**
   * @remarks
   * The requested memory resources.
   * 
   * @example
   * 1Gi
   */
  requestMemory?: string;
  /**
   * @remarks
   * The ID of the resource group where the job runs.
   * 
   * @example
   * dlc-quota
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource level when the job runs.
   * 
   * @example
   * L0
   */
  resourceLevel?: string;
  /**
   * @remarks
   * The name of the resource where the job runs.
   * 
   * @example
   * my_resource_group
   */
  resourceName?: string;
  /**
   * @remarks
   * The name of the resource.
   * 
   * @example
   * test
   */
  resourceQuotaName?: string;
  /**
   * @remarks
   * The resource type, such as ECS, Lingjun, or ACS.
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The number of times the job is restarted.
   * 
   * @example
   * 1
   */
  restartTimes?: string;
  /**
   * @remarks
   * The number of retries configured for the node.
   * 
   * @example
   * 0
   */
  retryCount?: number;
  /**
   * @remarks
   * The scheduling strategy of the node.
   * 
   * @example
   * Auto
   */
  schedulingStrategy?: string;
  /**
   * @remarks
   * The additional parameters of the job.
   */
  settings?: JobSettings;
  /**
   * @remarks
   * The job status. Valid values:
   * - Succeeded
   * - Failed
   * 
   * @example
   * Stopped
   */
  status?: string;
  /**
   * @remarks
   * The status transition information of the job.
   */
  statusHistory?: StatusTransitionItem[];
  /**
   * @remarks
   * The substatus of the job, such as the preemptible retry status.
   * 
   * @example
   * Restarting
   */
  subStatus?: string;
  /**
   * @remarks
   * The system environment variable configuration.
   */
  systemEnvs?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the node template used to create the node.
   * 
   * @example
   * tplmceolmf2****
   */
  templateId?: string;
  /**
   * @remarks
   * The name of the node template used to create the node.
   * 
   * @example
   * job-template-example-1778047****
   */
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
   * The directory where the third-party library file requirements.txt is located.
   * 
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  /**
   * @remarks
   * The list of third-party Python libraries installed before the job runs.
   */
  thirdpartyLibs?: string[];
  /**
   * @remarks
   * Specifies whether the job uses idle resources.
   * 
   * @example
   * false
   */
  useOversoldResource?: boolean;
  /**
   * @remarks
   * The startup command run by each node of the job.
   * 
   * @example
   * python /root/code/mnist.py
   */
  userCommand?: string;
  /**
   * @remarks
   * The UID of the user to whom the job belongs.
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
   * The username of the job submitter.
   * 
   * @example
   * pai-dlc-role
   */
  username?: string;
  /**
   * @remarks
   * The working directory.
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
  /**
   * @remarks
   * The list of supported profiling types, separated by commas, such as sysom. An empty string indicates that profiling is not supported.
   * 
   * @example
   * sysom
   */
  supportedProfilingTypes?: string;
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
      retryCount: 'RetryCount',
      schedulingStrategy: 'SchedulingStrategy',
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
      supportedProfilingTypes: 'supportedProfilingTypes',
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
      retryCount: 'number',
      schedulingStrategy: 'string',
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
      supportedProfilingTypes: 'string',
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

