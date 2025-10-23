// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { JobElasticSpec } from "./JobElasticSpec";
import { JobReplicaStatus } from "./JobReplicaStatus";
import { JobSpec } from "./JobSpec";
import { JobSettings } from "./JobSettings";
import { StatusTransitionItem } from "./StatusTransitionItem";


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
   * The code commit ID
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
   * The local mount path. This parameter is optional. The default value is empty, which specifies that the mount path in the data source is used.
   * 
   * @example
   * /mnt/data/
   */
  mountPath?: string;
  /**
   * @remarks
   * The data source URL.
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
   * The time when the node was created (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The end time of the node (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The start time of the node (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 10.0.1.3
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * Worker
   */
  podId?: string;
  /**
   * @remarks
   * The UID of the node.
   * 
   * @example
   * fe846462-af2c-4521-bd6f-96787a57591d
   */
  podUid?: string;
  /**
   * @remarks
   * The resource type of the node.
   * 
   * @example
   * Normal
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the node.
   * 
   * @example
   * Failed
   */
  status?: string;
  /**
   * @remarks
   * The sub-status of the node, such as its preemption status. Valid values:
   * 
   * *   Normal
   * *   Evicted
   * 
   * @example
   * Normal
   */
  subStatus?: string;
  /**
   * @remarks
   * The type of the node.
   * 
   * @example
   * Worker
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtStartTime: 'GmtStartTime',
      ip: 'Ip',
      podId: 'PodId',
      podUid: 'PodUid',
      resourceType: 'ResourceType',
      status: 'Status',
      subStatus: 'SubStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtStartTime: 'string',
      ip: 'string',
      podId: 'string',
      podUid: 'string',
      resourceType: 'string',
      status: 'string',
      subStatus: 'string',
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

export class GetJobResponseBodyPods extends $dara.Model {
  /**
   * @remarks
   * The time when the node was created (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The end time of the node (UTC).
   * 
   * @example
   * 2021-01-12T15:36:05Z
   */
  gmtFinishTime?: string;
  /**
   * @remarks
   * The start time of the node (UTC).
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtStartTime?: string;
  /**
   * @remarks
   * The historical nodes.
   */
  historyPods?: GetJobResponseBodyPodsHistoryPods[];
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * 10.0.1.2
   */
  ip?: string;
  /**
   * @remarks
   * The node ID. It can be used in the GetPodLogs and GetPodEvents operations to obtain the detailed logs and events of the node.
   * 
   * @example
   * Worker
   */
  podId?: string;
  /**
   * @remarks
   * The UID of the node.
   * 
   * @example
   * fe846462-af2c-4521-bd6f-96787a57591d
   */
  podUid?: string;
  /**
   * @remarks
   * The resource type of the node.
   * 
   * @example
   * Normal
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   Pending
   * *   Running
   * *   Succeeded
   * *   Failed
   * *   Unknown
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The sub-status of the node, such as its preemption status. Valid values:
   * 
   * *   Normal
   * *   Evicted
   * 
   * @example
   * Normal
   */
  subStatus?: string;
  /**
   * @remarks
   * The node type, which corresponds to a specific JobSpec in JobSpecs of the CreateJob operation.
   * 
   * @example
   * Worker
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtStartTime: 'GmtStartTime',
      historyPods: 'HistoryPods',
      ip: 'Ip',
      podId: 'PodId',
      podUid: 'PodUid',
      resourceType: 'ResourceType',
      status: 'Status',
      subStatus: 'SubStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtStartTime: 'string',
      historyPods: { 'type': 'array', 'itemType': GetJobResponseBodyPodsHistoryPods },
      ip: 'string',
      podId: 'string',
      podUid: 'string',
      resourceType: 'string',
      status: 'string',
      subStatus: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyPods)) {
      $dara.Model.validateArray(this.historyPods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyRestartRecordDetailErrorInfoList extends $dara.Model {
  addJobLevelBlacklist?: boolean;
  addNodeToBlacklist?: boolean;
  detailErrorMsg?: string;
  errorCode?: string;
  errorMsg?: string;
  errorSource?: string;
  node?: string;
  pod?: string;
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
  detailErrorInfoList?: GetJobResponseBodyRestartRecordDetailErrorInfoList[];
  jobRestartCount?: number;
  occurPhase?: string;
  occurTime?: string;
  reason?: string;
  restartDurationInSec?: number;
  restartFailReason?: string;
  restartStatus?: string;
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
   * The default router. This parameter is valid only for general-purpose computing resources. Valid values:
   * 
   * eth0: The default network interface is used to access the Internet through the public gateway. eth1: The user\\"s Elastic Network Interface is used to access the Internet through the private gateway.
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR block. Example: 192.168.0.1/24.
   */
  extendedCidrs?: string[];
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-abcdef****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vs-abcdef****
   */
  switchId?: string;
  /**
   * @remarks
   * The VPC ID.
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
   * The visibility of the job. Valid values:
   * 
   * *   PUBLIC: The code is public in the workspace.
   * *   PRIVATE: The workspace is visible only to you and the administrator of the workspace. This is the default value.
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
   * The access credential configurations.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The data sources.
   */
  dataSources?: GetJobResponseBodyDataSources[];
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
   * The duration of the job (seconds).
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
   * Specifies whether to enable the debugger job.
   * 
   * @example
   * false
   */
  enabledDebugger?: boolean;
  /**
   * @remarks
   * The configurations of environment variables.
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
   * The time of the job failed (UTC).
   * 
   * @example
   * 2021-01-12T15:36:08Z
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
   * The start time of the job (UTC).
   * 
   * @example
   * 2021-01-12T14:36:21Z
   */
  gmtRunningTime?: string;
  /**
   * @remarks
   * The time when the job stopped (UTC).
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
   * The time when the job succeeded (UTC).
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
  jobReplicaStatuses?: JobReplicaStatus[];
  /**
   * @remarks
   * The node configuration of the job, which is **JobSpecs** in the CreateJob operation.
   */
  jobSpecs?: JobSpec[];
  /**
   * @remarks
   * The job type. Specified by the JobType parameter of the [CreateJob](https://help.aliyun.com/document_detail/459672.html) operation.
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * All running nodes of the job.
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
   * The status detail code, which is a sub-status under the current status.
   * 
   * @example
   * JobStoppedByUser
   */
  reasonCode?: string;
  /**
   * @remarks
   * The description of the status detail code.
   * 
   * @example
   * Job is stopped by user.
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The request ID, which can be used for troubleshooting.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-xxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the job belongs.
   * 
   * @example
   * r******
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource level that the job uses.
   * 
   * @example
   * L0
   */
  resourceLevel?: string;
  /**
   * @remarks
   * The resource type. Valid values: ECS, Lingjun, and ACS.
   * 
   * @example
   * ECS
   */
  resourceType?: string;
  restartRecord?: GetJobResponseBodyRestartRecord[];
  /**
   * @remarks
   * The number of retries and the maximum number of retries used by the job.
   * 
   * @example
   * 0/10
   */
  restartTimes?: string;
  /**
   * @remarks
   * The additional parameter configurations of the job.
   */
  settings?: JobSettings;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   Creating
   * *   Queuing
   * *   Bidding (Only for Lingjun preemptible jobs)
   * *   EnvPreparing
   * *   SanityChecking
   * *   Running
   * *   Restarting
   * *   Stopping
   * *   SucceededReserving
   * *   FailedReserving
   * *   Succeeded
   * *   Failed
   * *   Stopped
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
   * The sub-status of the job, such as its preemption status.
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
   * The directory that contains requirements.txt.
   * 
   * @example
   * /root/code/
   */
  thirdpartyLibDir?: string;
  /**
   * @remarks
   * The third-party Python libraries to be installed.
   */
  thirdpartyLibs?: string[];
  /**
   * @remarks
   * The command that is run to start each node.
   * 
   * @example
   * python /root/code/mnist.py
   */
  userCommand?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account who submitted the job.
   * 
   * @example
   * 12*********
   */
  userId?: string;
  /**
   * @remarks
   * The VPC of the user.
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      clusterId: 'string',
      codeSource: GetJobResponseBodyCodeSource,
      credentialConfig: CredentialConfig,
      dataSources: { 'type': 'array', 'itemType': GetJobResponseBodyDataSources },
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
    if(Array.isArray(this.pods)) {
      $dara.Model.validateArray(this.pods);
    }
    if(Array.isArray(this.restartRecord)) {
      $dara.Model.validateArray(this.restartRecord);
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

