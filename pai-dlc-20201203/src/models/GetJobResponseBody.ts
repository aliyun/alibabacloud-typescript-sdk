// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobResponseBodyCodeSource } from "./GetJobResponseBodyCodeSource";
import { CredentialConfig } from "./CredentialConfig";
import { GetJobResponseBodyDataSources } from "./GetJobResponseBodyDataSources";
import { JobElasticSpec } from "./JobElasticSpec";
import { JobSpec } from "./JobSpec";
import { GetJobResponseBodyPods } from "./GetJobResponseBodyPods";
import { JobSettings } from "./JobSettings";
import { StatusTransitionItem } from "./StatusTransitionItem";
import { GetJobResponseBodyUserVpc } from "./GetJobResponseBodyUserVpc";


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
  /**
   * @remarks
   * The node configurations of the job, which is **JobSpecs** in the CreateJob operation.
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
   * The settings of the additional parameters of the job.
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
    if(Array.isArray(this.jobSpecs)) {
      $dara.Model.validateArray(this.jobSpecs);
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

