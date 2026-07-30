// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { JobElasticSpec } from "./JobElasticSpec";
import { JobReplicaStatus } from "./JobReplicaStatus";
import { JobSpec } from "./JobSpec";
import { JobSettings } from "./JobSettings";
import { StatusTransitionItem } from "./StatusTransitionItem";
import { PodNetworkInterface } from "./PodNetworkInterface";


export class GetJobResponseBodyCodeSource extends $dara.Model {
  /**
   * @remarks
   * The code branch.
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
   * code******
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The code commit ID.
   * 
   * @example
   * 44da109b59f8596152987eaa8f3b2487xxxxxx
   */
  commit?: string;
  /**
   * @remarks
   * The local mount path.
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

export class GetJobResponseBodyCustomEnvs extends $dara.Model {
  key?: string;
  value?: string;
  visible?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
      visible: 'Visible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
      visible: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyDataSources extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * d*******
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The local mount path. This is an optional parameter. The default value is empty, which indicates that the mount path in the data source is used.
   * 
   * @example
   * /mnt/data/
   */
  mountPath?: string;
  /**
   * @remarks
   * The data source path.
   * 
   * @example
   * oss://bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      mountPath: 'MountPath',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
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

export class GetJobResponseBodyPodsHistoryPods extends $dara.Model {
  /**
   * @remarks
   * The pod duration.
   */
  duration?: number;
  /**
   * @remarks
   * The pod creation time (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The pod finish time (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The pod start time (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * Pod IP。
   * 
   * @example
   * 10.0.1.3
   */
  ip?: string;
  /**
   * @remarks
   * The node name.
   */
  nodeName?: string;
  /**
   * @remarks
   * Pod ID。
   * 
   * @example
   * Worker
   */
  podId?: string;
  /**
   * @remarks
   * The pod IP addresses.
   */
  podIps?: PodNetworkInterface[];
  /**
   * @remarks
   * Pod UID。
   * 
   * @example
   * fe846462-af2c-4521-bd6f-96787a57591d
   */
  podUid?: string;
  /**
   * @remarks
   * The pod resource usage type.
   * 
   * @example
   * Normal
   */
  resourceType?: string;
  /**
   * @remarks
   * The pod status.
   * 
   * @example
   * Failed
   */
  status?: string;
  /**
   * @remarks
   * The pod substatus, such as preemption status. Valid values:
   * 
   * @example
   * Normal
   */
  subStatus?: string;
  /**
   * @remarks
   * The pod type.
   * 
   * @example
   * Worker
   */
  type?: string;
  /**
   * @example
   * sysom
   */
  supportedProfilingTypes?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtStartTime: 'GmtStartTime',
      ip: 'Ip',
      nodeName: 'NodeName',
      podId: 'PodId',
      podIps: 'PodIps',
      podUid: 'PodUid',
      resourceType: 'ResourceType',
      status: 'Status',
      subStatus: 'SubStatus',
      type: 'Type',
      supportedProfilingTypes: 'supportedProfilingTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtStartTime: 'string',
      ip: 'string',
      nodeName: 'string',
      podId: 'string',
      podIps: { 'type': 'array', 'itemType': PodNetworkInterface },
      podUid: 'string',
      resourceType: 'string',
      status: 'string',
      subStatus: 'string',
      type: 'string',
      supportedProfilingTypes: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.podIps)) {
      $dara.Model.validateArray(this.podIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyPods extends $dara.Model {
  /**
   * @remarks
   * The pod duration.
   */
  duration?: number;
  /**
   * @remarks
   * The pod creation time (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The pod finish time (UTC).
   * 
   * @example
   * 2021-01-12T15:36:05Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The pod start time (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * The history pods.
   */
  historyPods?: GetJobResponseBodyPodsHistoryPods[];
  /**
   * @remarks
   * The network IP address of the pod.
   * 
   * @example
   * 10.0.1.2
   */
  ip?: string;
  /**
   * @remarks
   * The node name.
   */
  nodeName?: string;
  /**
   * @remarks
   * The pod ID. You can use this ID with the GetPodLogs and GetPodEvents APIs to retrieve detailed logs and events for the pod.
   * 
   * @example
   * Worker
   */
  podId?: string;
  /**
   * @remarks
   * The pod IP addresses.
   */
  podIps?: PodNetworkInterface[];
  /**
   * @remarks
   * Pod UID。
   * 
   * @example
   * fe846462-af2c-4521-bd6f-96787a57591d
   */
  podUid?: string;
  /**
   * @remarks
   * The pod resource usage type.
   * 
   * @example
   * Normal
   */
  resourceType?: string;
  /**
   * @remarks
   * The pod status. Valid values:
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The pod substatus, such as preemption status. Valid values:
   * 
   * @example
   * Normal
   */
  subStatus?: string;
  /**
   * @remarks
   * The pod type, which corresponds to a JobSpec in JobSpecs of CreateJob.
   * 
   * @example
   * Worker
   */
  type?: string;
  /**
   * @example
   * sysom
   */
  supportedProfilingTypes?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtStartTime: 'GmtStartTime',
      historyPods: 'HistoryPods',
      ip: 'Ip',
      nodeName: 'NodeName',
      podId: 'PodId',
      podIps: 'PodIps',
      podUid: 'PodUid',
      resourceType: 'ResourceType',
      status: 'Status',
      subStatus: 'SubStatus',
      type: 'Type',
      supportedProfilingTypes: 'supportedProfilingTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtStartTime: 'string',
      historyPods: { 'type': 'array', 'itemType': GetJobResponseBodyPodsHistoryPods },
      ip: 'string',
      nodeName: 'string',
      podId: 'string',
      podIps: { 'type': 'array', 'itemType': PodNetworkInterface },
      podUid: 'string',
      resourceType: 'string',
      status: 'string',
      subStatus: 'string',
      type: 'string',
      supportedProfilingTypes: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyPods)) {
      $dara.Model.validateArray(this.historyPods);
    }
    if(Array.isArray(this.podIps)) {
      $dara.Model.validateArray(this.podIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyRestartRecordDetailErrorInfoList extends $dara.Model {
  /**
   * @remarks
   * The job blacklist.
   */
  addJobLevelBlacklist?: boolean;
  /**
   * @remarks
   * The node blacklist.
   */
  addNodeToBlacklist?: boolean;
  /**
   * @remarks
   * The detailed error message.
   */
  detailErrorMsg?: string;
  /**
   * @remarks
   * The error code.
   */
  errorCode?: string;
  /**
   * @remarks
   * The fault error message.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The error source.
   */
  errorSource?: string;
  /**
   * @remarks
   * The node.
   */
  node?: string;
  /**
   * @remarks
   * The pod.
   */
  pod?: string;
  /**
   * @remarks
   * Indicates whether a restart is triggered.
   */
  triggerRestart?: boolean;
  static names(): { [key: string]: string } {
    return {
      addJobLevelBlacklist: 'AddJobLevelBlacklist',
      addNodeToBlacklist: 'AddNodeToBlacklist',
      detailErrorMsg: 'DetailErrorMsg',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      errorSource: 'ErrorSource',
      node: 'Node',
      pod: 'Pod',
      triggerRestart: 'TriggerRestart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addJobLevelBlacklist: 'boolean',
      addNodeToBlacklist: 'boolean',
      detailErrorMsg: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      errorSource: 'string',
      node: 'string',
      pod: 'string',
      triggerRestart: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyRestartRecord extends $dara.Model {
  /**
   * @remarks
   * The list of fault error messages.
   */
  detailErrorInfoList?: GetJobResponseBodyRestartRecordDetailErrorInfoList[];
  /**
   * @remarks
   * The number of job restarts.
   */
  jobRestartCount?: number;
  /**
   * @remarks
   * The phase in which the event occurred.
   */
  occurPhase?: string;
  /**
   * @remarks
   * The time when the event occurred.
   */
  occurTime?: string;
  /**
   * @remarks
   * The reason for the restart.
   */
  reason?: string;
  /**
   * @remarks
   * The restart duration, in seconds.
   */
  restartDurationInSec?: number;
  /**
   * @remarks
   * The reason for the restart failure.
   */
  restartFailReason?: string;
  restartLevelType?: string;
  /**
   * @remarks
   * The restart status.
   */
  restartStatus?: string;
  /**
   * @remarks
   * TriggerID
   */
  triggerID?: string;
  static names(): { [key: string]: string } {
    return {
      detailErrorInfoList: 'DetailErrorInfoList',
      jobRestartCount: 'JobRestartCount',
      occurPhase: 'OccurPhase',
      occurTime: 'OccurTime',
      reason: 'Reason',
      restartDurationInSec: 'RestartDurationInSec',
      restartFailReason: 'RestartFailReason',
      restartLevelType: 'RestartLevelType',
      restartStatus: 'RestartStatus',
      triggerID: 'TriggerID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailErrorInfoList: { 'type': 'array', 'itemType': GetJobResponseBodyRestartRecordDetailErrorInfoList },
      jobRestartCount: 'number',
      occurPhase: 'string',
      occurTime: 'string',
      reason: 'string',
      restartDurationInSec: 'number',
      restartFailReason: 'string',
      restartLevelType: 'string',
      restartStatus: 'string',
      triggerID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detailErrorInfoList)) {
      $dara.Model.validateArray(this.detailErrorInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyUserVpc extends $dara.Model {
  /**
   * @remarks
   * The default routing. This parameter is valid only for general computing resources. Valid values:
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR blocks. Example: 192.168.0.1/24.
   */
  extendedCidrs?: string[];
  /**
   * @remarks
   * The ID of the user security group.
   * 
   * @example
   * sg-abcdef****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the user vSwitch.
   * 
   * @example
   * vs-abcdef****
   */
  switchId?: string;
  /**
   * @remarks
   * The ID of the user VPC.
   * 
   * @example
   * vpc-abcdef****
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

export class GetJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The visibility of the task. Valid values:
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * a*****
   */
  clusterId?: string;
  /**
   * @remarks
   * The code source.
   */
  codeSource?: GetJobResponseBodyCodeSource;
  /**
   * @remarks
   * The access credential configuration.
   */
  credentialConfig?: CredentialConfig;
  customEnvs?: GetJobResponseBodyCustomEnvs[];
  /**
   * @remarks
   * The list of data sources.
   */
  dataSources?: GetJobResponseBodyDataSources[];
  description?: string;
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
   * The job duration, in seconds.
   * 
   * @example
   * 3602
   */
  duration?: number;
  /**
   * @remarks
   * The elastic job parameters.
   */
  elasticSpec?: JobElasticSpec;
  /**
   * @remarks
   * Specifies whether the debugger task is enabled.
   * 
   * @example
   * false
   */
  enabledDebugger?: boolean;
  /**
   * @remarks
   * The environment variable configuration.
   */
  envs?: { [key: string]: string };
  /**
   * @remarks
   * The job creation time (UTC).
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
   * 2021-01-12T15:36:08Z
   */
  gmtFailedTime?: string;
  /**
   * @remarks
   * The time when the task finished (UTC).
   * 
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The time when the job started running (UTC).
   * 
   * @example
   * 2021-01-12T14:36:21Z
   */
  gmtRunningTime?: string;
  /**
   * @remarks
   * The time when the job was stopped (UTC).
   * 
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtStoppedTime?: string;
  /**
   * @remarks
   * The time when the job was submitted to the cluster (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtSubmittedTime?: string;
  /**
   * @remarks
   * The time when the job completed successfully (UTC).
   * 
   * @example
   * 2021-01-12T15:36:08Z
   */
  gmtSuccessedTime?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * dlc*******
   */
  jobId?: string;
  /**
   * @remarks
   * The job replica statuses.
   */
  jobReplicaStatuses?: JobReplicaStatus[];
  /**
   * @remarks
   * The node configurations in the job. Refer to **JobSpecs** in the CreateJob API.
   */
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * The job type. Specified by the JobType parameter in the [CreateJob](https://help.aliyun.com/document_detail/459672.html) API.
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * All pods running in the job.
   */
  pods?: GetJobResponseBodyPods[];
  /**
   * @remarks
   * The priority of the job. Valid values: 1 to 9.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The status detail code, which is a classification of the sub-status under the current status (Status).
   * 
   * @example
   * JobStoppedByUser
   */
  reasonCode?: string;
  /**
   * @remarks
   * The detailed description of the status detail.
   * 
   * @example
   * Job is stopped by user.
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The request ID, used for diagnostics and troubleshooting.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group in which the job runs.
   * 
   * @example
   * r******
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource level used when the job runs.
   * 
   * @example
   * L0
   */
  resourceLevel?: string;
  /**
   * @remarks
   * The resource type. Valid values: ECS, Lingjun, ACS.
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @remarks
   * The job restart records.
   */
  restartRecord?: GetJobResponseBodyRestartRecord[];
  /**
   * @remarks
   * The used retry count and maximum retry count for the job.
   * 
   * @example
   * 0/10
   */
  restartTimes?: string;
  roleSystemEnvs?: { [key: string]: {[key: string]: any} };
  /**
   * @example
   * Auto
   */
  schedulingStrategy?: string;
  /**
   * @remarks
   * The additional parameter settings for the job.
   */
  settings?: JobSettings;
  /**
   * @remarks
   * The job running status. Valid values:
   * 
   * @example
   * Stopped
   */
  status?: string;
  /**
   * @remarks
   * The status history.
   */
  statusHistory?: StatusTransitionItem[];
  /**
   * @remarks
   * The job substatus, such as preemption retry status.
   * 
   * @example
   * Restarting
   */
  subStatus?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * GAR***W134
   */
  tenantId?: string;
  /**
   * @remarks
   * The folder where the third-party library (requirements.txt) file is located.
   * 
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  /**
   * @remarks
   * The list of third-party Python libraries to install.
   */
  thirdpartyLibs?: string[];
  /**
   * @remarks
   * The startup command for each node.
   * 
   * @example
   * python /root/code/mnist.py
   */
  userCommand?: string;
  /**
   * @remarks
   * The Alibaba Cloud UID of the job submitter.
   * 
   * @example
   * 12*********
   */
  userId?: string;
  /**
   * @remarks
   * The user VPC.
   */
  userVpc?: GetJobResponseBodyUserVpc;
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
      customEnvs: 'CustomEnvs',
      dataSources: 'DataSources',
      description: 'Description',
      displayName: 'DisplayName',
      duration: 'Duration',
      elasticSpec: 'ElasticSpec',
      enabledDebugger: 'EnabledDebugger',
      envs: 'Envs',
      gmtCreateTime: 'GmtCreateTime',
      gmtFailedTime: 'GmtFailedTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtRunningTime: 'GmtRunningTime',
      gmtStoppedTime: 'GmtStoppedTime',
      gmtSubmittedTime: 'GmtSubmittedTime',
      gmtSuccessedTime: 'GmtSuccessedTime',
      jobId: 'JobId',
      jobReplicaStatuses: 'JobReplicaStatuses',
      jobSpecs: 'JobSpecs',
      jobType: 'JobType',
      pods: 'Pods',
      priority: 'Priority',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceLevel: 'ResourceLevel',
      resourceType: 'ResourceType',
      restartRecord: 'RestartRecord',
      restartTimes: 'RestartTimes',
      roleSystemEnvs: 'RoleSystemEnvs',
      schedulingStrategy: 'SchedulingStrategy',
      settings: 'Settings',
      status: 'Status',
      statusHistory: 'StatusHistory',
      subStatus: 'SubStatus',
      tenantId: 'TenantId',
      thirdpartyLibDir: 'ThirdpartyLibDir',
      thirdpartyLibs: 'ThirdpartyLibs',
      userCommand: 'UserCommand',
      userId: 'UserId',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
      supportedProfilingTypes: 'supportedProfilingTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      clusterId: 'string',
      codeSource: GetJobResponseBodyCodeSource,
      credentialConfig: CredentialConfig,
      customEnvs: { 'type': 'array', 'itemType': GetJobResponseBodyCustomEnvs },
      dataSources: { 'type': 'array', 'itemType': GetJobResponseBodyDataSources },
      description: 'string',
      displayName: 'string',
      duration: 'number',
      elasticSpec: JobElasticSpec,
      enabledDebugger: 'boolean',
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtFailedTime: 'string',
      gmtFinishTime: 'string',
      gmtRunningTime: 'string',
      gmtStoppedTime: 'string',
      gmtSubmittedTime: 'string',
      gmtSuccessedTime: 'string',
      jobId: 'string',
      jobReplicaStatuses: { 'type': 'array', 'itemType': JobReplicaStatus },
      jobSpecs: { 'type': 'array', 'itemType': JobSpec },
      jobType: 'string',
      pods: { 'type': 'array', 'itemType': GetJobResponseBodyPods },
      priority: 'number',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      resourceId: 'string',
      resourceLevel: 'string',
      resourceType: 'string',
      restartRecord: { 'type': 'array', 'itemType': GetJobResponseBodyRestartRecord },
      restartTimes: 'string',
      roleSystemEnvs: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      schedulingStrategy: 'string',
      settings: JobSettings,
      status: 'string',
      statusHistory: { 'type': 'array', 'itemType': StatusTransitionItem },
      subStatus: 'string',
      tenantId: 'string',
      thirdpartyLibDir: 'string',
      thirdpartyLibs: { 'type': 'array', 'itemType': 'string' },
      userCommand: 'string',
      userId: 'string',
      userVpc: GetJobResponseBodyUserVpc,
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
    if(Array.isArray(this.customEnvs)) {
      $dara.Model.validateArray(this.customEnvs);
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
    if(Array.isArray(this.pods)) {
      $dara.Model.validateArray(this.pods);
    }
    if(Array.isArray(this.restartRecord)) {
      $dara.Model.validateArray(this.restartRecord);
    }
    if(this.roleSystemEnvs) {
      $dara.Model.validateMap(this.roleSystemEnvs);
    }
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
    }
    if(Array.isArray(this.statusHistory)) {
      $dara.Model.validateArray(this.statusHistory);
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

