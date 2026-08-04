// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssignNodeSpec } from "./AssignNodeSpec";
import { CredentialConfig } from "./CredentialConfig";


export class ListTrainingJobsResponseBodyTrainingJobsComputeResourceInstanceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores of the instance.
   * 
   * @example
   * 8
   */
  CPU?: string;
  /**
   * @remarks
   * The number of GPUs of the instance.
   * 
   * @example
   * 1
   */
  GPU?: string;
  /**
   * @remarks
   * The GPU type of the instance.
   * 
   * @example
   * V100
   */
  GPUType?: string;
  /**
   * @remarks
   * The memory size of the instance. Unit: GiB.
   * 
   * @example
   * 32
   */
  memory?: string;
  /**
   * @remarks
   * The shared memory size of the instance. Unit: GiB.
   * 
   * @example
   * 32
   */
  sharedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      sharedMemory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsComputeResource extends $dara.Model {
  /**
   * @remarks
   * The number of ECS instances.
   * 
   * @example
   * 1
   */
  ecsCount?: number;
  /**
   * @remarks
   * The ECS instance type.
   * 
   * @example
   * ecs.gn5-c8g1.2xlarge
   */
  ecsSpec?: string;
  /**
   * @remarks
   * The number of resource quota instances.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The resource quota instance specification.
   */
  instanceSpec?: ListTrainingJobsResponseBodyTrainingJobsComputeResourceInstanceSpec;
  /**
   * @remarks
   * The resource quota ID.
   * 
   * @example
   * quotam670lixikcl
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource quota name.
   * 
   * @example
   * quota
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      instanceCount: 'InstanceCount',
      instanceSpec: 'InstanceSpec',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsCount: 'number',
      ecsSpec: 'string',
      instanceCount: 'number',
      instanceSpec: ListTrainingJobsResponseBodyTrainingJobsComputeResourceInstanceSpec,
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  validate() {
    if(this.instanceSpec && typeof (this.instanceSpec as any).validate === 'function') {
      (this.instanceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsExperimentConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the experiment associated with the training job.
   * 
   * @example
   * exp-ds9aefia90v
   */
  experimentId?: string;
  /**
   * @remarks
   * The name of the experiment associated with the training job.
   * 
   * @example
   * large_language_model
   */
  experimentName?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      experimentName: 'ExperimentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      experimentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsHyperParameters extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * learning_rate
   */
  name?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * 0.001
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class ListTrainingJobsResponseBodyTrainingJobsInputChannels extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-475megosidivjfgfq6
   */
  datasetId?: string;
  /**
   * @remarks
   * The input data URI.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/to/input/channel/
   */
  inputUri?: string;
  /**
   * @remarks
   * The input data name.
   * 
   * @example
   * model
   */
  name?: string;
  roleArn?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      inputUri: 'InputUri',
      name: 'Name',
      roleArn: 'RoleArn',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      inputUri: 'string',
      name: 'string',
      roleArn: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsLabels extends $dara.Model {
  /**
   * @remarks
   * The label key.
   * 
   * @example
   * CreatedBy
   */
  key?: string;
  /**
   * @remarks
   * The label value.
   * 
   * @example
   * QuickStart
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

export class ListTrainingJobsResponseBodyTrainingJobsOutputChannels extends $dara.Model {
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-8o0hh35po15ejcdq2p
   */
  datasetId?: string;
  /**
   * @remarks
   * The output data name.
   * 
   * @example
   * model
   */
  name?: string;
  /**
   * @remarks
   * The output data URI.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/to/output/channel/
   */
  outputUri?: string;
  roleArn?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      name: 'Name',
      outputUri: 'OutputUri',
      roleArn: 'RoleArn',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      name: 'string',
      outputUri: 'string',
      roleArn: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsScheduler extends $dara.Model {
  /**
   * @remarks
   * The maximum training runtime in seconds. A value of 0 indicates no limit on the maximum runtime.
   * 
   * @example
   * 0
   */
  maxRunningTimeInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      maxRunningTimeInSeconds: 'MaxRunningTimeInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRunningTimeInSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsStatusTransitions extends $dara.Model {
  /**
   * @remarks
   * The end time of the status.
   * 
   * @example
   * 2024-07-10T11:49:47Z
   */
  endTime?: string;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * TrainingJobSucceed
   */
  reasonCode?: string;
  /**
   * @remarks
   * The status update message.
   * 
   * @example
   * KubeDL job runs successfully
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The start time of the status.
   * 
   * @example
   * 2024-07-10T11:49:47Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the training job.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyTrainingJobsUserVpc extends $dara.Model {
  /**
   * @remarks
   * The default route.
   * 
   * @example
   * eth1
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR block configuration.
   */
  extendedCIDRs?: string[];
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
   * VPC ID。
   * 
   * @example
   * vpc-abcdef****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      switchId: 'string',
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

export class ListTrainingJobsResponseBodyTrainingJobs extends $dara.Model {
  /**
   * @remarks
   * The algorithm name.
   * 
   * @example
   * llm_train
   */
  algorithmName?: string;
  /**
   * @remarks
   * The algorithm provider.
   * 
   * @example
   * pai
   */
  algorithmProvider?: string;
  /**
   * @remarks
   * The algorithm version.
   * 
   * @example
   * v0.0.1
   */
  algorithmVersion?: string;
  assignNodeSpec?: AssignNodeSpec;
  /**
   * @remarks
   * The compute resource configuration.
   */
  computeResource?: ListTrainingJobsResponseBodyTrainingJobsComputeResource;
  credentialConfig?: CredentialConfig;
  dlcJobId?: string;
  /**
   * @remarks
   * The list of environment variables.
   */
  environments?: { [key: string]: string };
  /**
   * @remarks
   * The experiment configuration associated with the training job.
   */
  experimentConfig?: ListTrainingJobsResponseBodyTrainingJobsExperimentConfig;
  /**
   * @remarks
   * The time when the training job was created.
   * 
   * @example
   * 2024-07-10T11:49:47Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the training job status was last updated.
   * 
   * @example
   * 2024-07-10T11:49:47Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The hyperparameter settings for training.
   */
  hyperParameters?: ListTrainingJobsResponseBodyTrainingJobsHyperParameters[];
  /**
   * @remarks
   * The input data configuration for training.
   */
  inputChannels?: ListTrainingJobsResponseBodyTrainingJobsInputChannels[];
  /**
   * @remarks
   * Indicates whether a temporary algorithm is used.
   * 
   * @example
   * true
   */
  isTempAlgo?: boolean;
  /**
   * @remarks
   * The labels of the training job.
   */
  labels?: ListTrainingJobsResponseBodyTrainingJobsLabels[];
  /**
   * @remarks
   * The output data configuration for training.
   */
  outputChannels?: ListTrainingJobsResponseBodyTrainingJobsOutputChannels[];
  /**
   * @remarks
   * The Python package configuration for the training job.
   */
  pythonRequirements?: string[];
  /**
   * @remarks
   * The status code of the training job.
   * 
   * @example
   * TrainingJobSucceed
   */
  reasonCode?: string;
  /**
   * @remarks
   * The error message of the training job.
   * 
   * @example
   * None
   */
  reasonMessage?: string;
  /**
   * @remarks
   * The role ARN used for delegated authorization.
   * 
   * @example
   * acs:ram::{accountID}:role/{roleName}
   */
  roleArn?: string;
  /**
   * @remarks
   * The scheduling configuration of the training job.
   */
  scheduler?: ListTrainingJobsResponseBodyTrainingJobsScheduler;
  /**
   * @remarks
   * The job status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The list of training job status transitions.
   */
  statusTransitions?: ListTrainingJobsResponseBodyTrainingJobsStatusTransitions[];
  /**
   * @remarks
   * The description of the training job.
   * 
   * @example
   * Qwen2 large language model training.
   */
  trainingJobDescription?: string;
  /**
   * @remarks
   * The training job ID.
   * 
   * @example
   * train1layo6js8ra
   */
  trainingJobId?: string;
  /**
   * @remarks
   * The name of the training job.
   * 
   * @example
   * qwen2-7b
   */
  trainingJobName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @remarks
   * The user VPC configuration.
   */
  userVpc?: ListTrainingJobsResponseBodyTrainingJobsUserVpc;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmVersion: 'AlgorithmVersion',
      assignNodeSpec: 'AssignNodeSpec',
      computeResource: 'ComputeResource',
      credentialConfig: 'CredentialConfig',
      dlcJobId: 'DlcJobId',
      environments: 'Environments',
      experimentConfig: 'ExperimentConfig',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      hyperParameters: 'HyperParameters',
      inputChannels: 'InputChannels',
      isTempAlgo: 'IsTempAlgo',
      labels: 'Labels',
      outputChannels: 'OutputChannels',
      pythonRequirements: 'PythonRequirements',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      roleArn: 'RoleArn',
      scheduler: 'Scheduler',
      status: 'Status',
      statusTransitions: 'StatusTransitions',
      trainingJobDescription: 'TrainingJobDescription',
      trainingJobId: 'TrainingJobId',
      trainingJobName: 'TrainingJobName',
      userId: 'UserId',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmVersion: 'string',
      assignNodeSpec: AssignNodeSpec,
      computeResource: ListTrainingJobsResponseBodyTrainingJobsComputeResource,
      credentialConfig: CredentialConfig,
      dlcJobId: 'string',
      environments: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      experimentConfig: ListTrainingJobsResponseBodyTrainingJobsExperimentConfig,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      hyperParameters: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyTrainingJobsHyperParameters },
      inputChannels: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyTrainingJobsInputChannels },
      isTempAlgo: 'boolean',
      labels: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyTrainingJobsLabels },
      outputChannels: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyTrainingJobsOutputChannels },
      pythonRequirements: { 'type': 'array', 'itemType': 'string' },
      reasonCode: 'string',
      reasonMessage: 'string',
      roleArn: 'string',
      scheduler: ListTrainingJobsResponseBodyTrainingJobsScheduler,
      status: 'string',
      statusTransitions: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyTrainingJobsStatusTransitions },
      trainingJobDescription: 'string',
      trainingJobId: 'string',
      trainingJobName: 'string',
      userId: 'string',
      userVpc: ListTrainingJobsResponseBodyTrainingJobsUserVpc,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.assignNodeSpec && typeof (this.assignNodeSpec as any).validate === 'function') {
      (this.assignNodeSpec as any).validate();
    }
    if(this.computeResource && typeof (this.computeResource as any).validate === 'function') {
      (this.computeResource as any).validate();
    }
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(this.environments) {
      $dara.Model.validateMap(this.environments);
    }
    if(this.experimentConfig && typeof (this.experimentConfig as any).validate === 'function') {
      (this.experimentConfig as any).validate();
    }
    if(Array.isArray(this.hyperParameters)) {
      $dara.Model.validateArray(this.hyperParameters);
    }
    if(Array.isArray(this.inputChannels)) {
      $dara.Model.validateArray(this.inputChannels);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.outputChannels)) {
      $dara.Model.validateArray(this.outputChannels);
    }
    if(Array.isArray(this.pythonRequirements)) {
      $dara.Model.validateArray(this.pythonRequirements);
    }
    if(this.scheduler && typeof (this.scheduler as any).validate === 'function') {
      (this.scheduler as any).validate();
    }
    if(Array.isArray(this.statusTransitions)) {
      $dara.Model.validateArray(this.statusTransitions);
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

export class ListTrainingJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of training jobs.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of training job details.
   */
  trainingJobs?: ListTrainingJobsResponseBodyTrainingJobs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trainingJobs: 'TrainingJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      trainingJobs: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyTrainingJobs },
    };
  }

  validate() {
    if(Array.isArray(this.trainingJobs)) {
      $dara.Model.validateArray(this.trainingJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

