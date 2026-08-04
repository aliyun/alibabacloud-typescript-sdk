// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlgorithmSpec } from "./AlgorithmSpec";
import { AssignNodeSpec } from "./AssignNodeSpec";
import { CredentialConfig } from "./CredentialConfig";
import { JobSettings } from "./JobSettings";


export class GetTrainingJobResponseBodyComputeResourceInstanceSpec extends $dara.Model {
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
   * The memory size of the instance, in GiB.
   * 
   * @example
   * 32
   */
  memory?: string;
  /**
   * @remarks
   * The shared memory size of the instance, in GiB.
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

export class GetTrainingJobResponseBodyComputeResourceSpotSpec extends $dara.Model {
  /**
   * @remarks
   * The maximum hourly price discount for the instance. This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.9
   */
  spotDiscountLimit?: number;
  /**
   * @remarks
   * SpotStrategy: The bidding policy of the instance. Valid values:
   * 
   * @example
   * SpotWithPriceLimit
   */
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      spotDiscountLimit: 'SpotDiscountLimit',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spotDiscountLimit: 'number',
      spotStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyComputeResource extends $dara.Model {
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
   * The number of instances used by the resource quota.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The instance specification of the resource quota.
   */
  instanceSpec?: GetTrainingJobResponseBodyComputeResourceInstanceSpec;
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
  /**
   * @remarks
   * The spot instance configuration.
   */
  spotSpec?: GetTrainingJobResponseBodyComputeResourceSpotSpec;
  /**
   * @remarks
   * Indicates whether spot instances are used.
   * 
   * @example
   * true
   */
  useSpotInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      instanceCount: 'InstanceCount',
      instanceSpec: 'InstanceSpec',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      spotSpec: 'SpotSpec',
      useSpotInstance: 'UseSpotInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsCount: 'number',
      ecsSpec: 'string',
      instanceCount: 'number',
      instanceSpec: GetTrainingJobResponseBodyComputeResourceInstanceSpec,
      resourceId: 'string',
      resourceName: 'string',
      spotSpec: GetTrainingJobResponseBodyComputeResourceSpotSpec,
      useSpotInstance: 'boolean',
    };
  }

  validate() {
    if(this.instanceSpec && typeof (this.instanceSpec as any).validate === 'function') {
      (this.instanceSpec as any).validate();
    }
    if(this.spotSpec && typeof (this.spotSpec as any).validate === 'function') {
      (this.spotSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyExperimentConfig extends $dara.Model {
  /**
   * @remarks
   * The experiment ID associated with the training job.
   * 
   * @example
   * exp-ds9aefia90v
   */
  experimentId?: string;
  /**
   * @remarks
   * The experiment name associated with the training job.
   * 
   * @example
   * large_language_model_train
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

export class GetTrainingJobResponseBodyHyperParameters extends $dara.Model {
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
   * 0.0001
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

export class GetTrainingJobResponseBodyInputChannels extends $dara.Model {
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
   * The URI of the input data.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/to/input/model/
   */
  inputUri?: string;
  /**
   * @remarks
   * The name of the input data.
   * 
   * @example
   * model
   */
  name?: string;
  /**
   * @remarks
   * The file system parameters of the input data.
   * 
   * @example
   * ossAppendable=true
   */
  options?: string;
  roleArn?: string;
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      inputUri: 'InputUri',
      name: 'Name',
      options: 'Options',
      roleArn: 'RoleArn',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      inputUri: 'string',
      name: 'string',
      options: 'string',
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

export class GetTrainingJobResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * train1oug3yehan4-master-0
   */
  name?: string;
  /**
   * @remarks
   * The instance role.
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      role: 'string',
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

export class GetTrainingJobResponseBodyLabels extends $dara.Model {
  /**
   * @remarks
   * The label name.
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

export class GetTrainingJobResponseBodyLatestMetrics extends $dara.Model {
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * loss
   */
  name?: string;
  /**
   * @remarks
   * The time when the metric was collected.
   * 
   * @example
   * 2024-07-10T11:49:47Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The metric value.
   * 
   * @example
   * 0.11
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      timestamp: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyLatestProgressOverallProgress extends $dara.Model {
  /**
   * @remarks
   * The progress timestamp.
   * 
   * @example
   * 2023-07-04T13:20:18Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The progress value.
   * 
   * @example
   * 0.75
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyLatestProgressRemainingTime extends $dara.Model {
  /**
   * @remarks
   * The progress timestamp.
   * 
   * @example
   * 2023-07-04T13:20:18Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The remaining time, in seconds.
   * 
   * @example
   * 3600
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyLatestProgress extends $dara.Model {
  /**
   * @remarks
   * The overall progress of the training job execution.
   */
  overallProgress?: GetTrainingJobResponseBodyLatestProgressOverallProgress;
  /**
   * @remarks
   * The estimated remaining time for the training job execution, in seconds.
   */
  remainingTime?: GetTrainingJobResponseBodyLatestProgressRemainingTime;
  static names(): { [key: string]: string } {
    return {
      overallProgress: 'OverallProgress',
      remainingTime: 'RemainingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallProgress: GetTrainingJobResponseBodyLatestProgressOverallProgress,
      remainingTime: GetTrainingJobResponseBodyLatestProgressRemainingTime,
    };
  }

  validate() {
    if(this.overallProgress && typeof (this.overallProgress as any).validate === 'function') {
      (this.overallProgress as any).validate();
    }
    if(this.remainingTime && typeof (this.remainingTime as any).validate === 'function') {
      (this.remainingTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyOutputChannels extends $dara.Model {
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
   * The name of the output data.
   * 
   * @example
   * model
   */
  name?: string;
  /**
   * @remarks
   * The URI of the output data.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/to/output/model/
   */
  outputUri?: string;
  roleArn?: string;
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
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

export class GetTrainingJobResponseBodyOutputModel extends $dara.Model {
  /**
   * @remarks
   * The OutputChannel name corresponding to the model.
   * 
   * @example
   * model
   */
  outputChannelName?: string;
  /**
   * @remarks
   * The model URI.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/to/model/output/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      outputChannelName: 'OutputChannelName',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputChannelName: 'string',
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

export class GetTrainingJobResponseBodyScheduler extends $dara.Model {
  /**
   * @remarks
   * The maximum runtime in minutes.
   * 
   * @example
   * 100
   */
  maxRunningTimeInMinutes?: string;
  /**
   * @remarks
   * The maximum training runtime in seconds. A value of 0 indicates no limit on the maximum runtime.
   * 
   * @example
   * 0
   */
  maxRunningTimeInSeconds?: string;
  static names(): { [key: string]: string } {
    return {
      maxRunningTimeInMinutes: 'MaxRunningTimeInMinutes',
      maxRunningTimeInSeconds: 'MaxRunningTimeInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRunningTimeInMinutes: 'string',
      maxRunningTimeInSeconds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyStatusTransitions extends $dara.Model {
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
   * The training job status.
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

export class GetTrainingJobResponseBodyUserVpc extends $dara.Model {
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
      extendedCIDRs: 'ExtendedCIDRs',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetTrainingJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The training algorithm ID.
   * 
   * @example
   * algo-xsldfvu1334
   */
  algorithmId?: string;
  /**
   * @remarks
   * The algorithm name.
   * 
   * @example
   * llm_training
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
   * The temporary algorithm definition.
   */
  algorithmSpec?: AlgorithmSpec;
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
  computeResource?: GetTrainingJobResponseBodyComputeResource;
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The running duration of the training job. Unit: seconds.
   * 
   * @example
   * 7200
   */
  duration?: number;
  /**
   * @remarks
   * The environment variables of the training job.
   */
  environments?: { [key: string]: string };
  /**
   * @remarks
   * The experiment configuration associated with the training job.
   */
  experimentConfig?: GetTrainingJobResponseBodyExperimentConfig;
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
   * The training hyperparameter settings.
   */
  hyperParameters?: GetTrainingJobResponseBodyHyperParameters[];
  /**
   * @remarks
   * The training input data configurations.
   */
  inputChannels?: GetTrainingJobResponseBodyInputChannels[];
  /**
   * @remarks
   * The list of training job instances.
   */
  instances?: GetTrainingJobResponseBodyInstances[];
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
   * The list of training job labels.
   */
  labels?: GetTrainingJobResponseBodyLabels[];
  /**
   * @remarks
   * The list of training job metrics.
   */
  latestMetrics?: GetTrainingJobResponseBodyLatestMetrics[];
  /**
   * @remarks
   * The latest progress of the training job.
   */
  latestProgress?: GetTrainingJobResponseBodyLatestProgress;
  /**
   * @remarks
   * The training output data configurations.
   */
  outputChannels?: GetTrainingJobResponseBodyOutputChannels[];
  /**
   * @remarks
   * The model produced by the training job.
   */
  outputModel?: GetTrainingJobResponseBodyOutputModel;
  /**
   * @remarks
   * The job priority.
   * 
   * @example
   * 0
   */
  priority?: number;
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
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ARN of the RAM role used for proxy authorization.
   * 
   * @example
   * acs:ram::{accountID}:role/{roleName}
   */
  roleArn?: string;
  /**
   * @remarks
   * The scheduling configuration of the training job.
   */
  scheduler?: GetTrainingJobResponseBodyScheduler;
  /**
   * @remarks
   * The additional parameter settings for the training node.
   */
  settings?: JobSettings;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The list of training job status transitions.
   */
  statusTransitions?: GetTrainingJobResponseBodyStatusTransitions[];
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
   * traini6hhxiq69eo
   */
  trainingJobId?: string;
  /**
   * @remarks
   * The name of the training job.
   * 
   * @example
   * qwen_llm
   */
  trainingJobName?: string;
  /**
   * @remarks
   * The URL of the training job details page.
   * 
   * @example
   * https://pai.console.aliyun.com/?regionId=cn-hangzhou&workspaceId=1234#/training/jobs/train1ouyadsl8n4
   */
  trainingJobUrl?: string;
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
  userVpc?: GetTrainingJobResponseBodyUserVpc;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 86995
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmSpec: 'AlgorithmSpec',
      algorithmVersion: 'AlgorithmVersion',
      assignNodeSpec: 'AssignNodeSpec',
      computeResource: 'ComputeResource',
      credentialConfig: 'CredentialConfig',
      duration: 'Duration',
      environments: 'Environments',
      experimentConfig: 'ExperimentConfig',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      hyperParameters: 'HyperParameters',
      inputChannels: 'InputChannels',
      instances: 'Instances',
      isTempAlgo: 'IsTempAlgo',
      labels: 'Labels',
      latestMetrics: 'LatestMetrics',
      latestProgress: 'LatestProgress',
      outputChannels: 'OutputChannels',
      outputModel: 'OutputModel',
      priority: 'Priority',
      pythonRequirements: 'PythonRequirements',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      roleArn: 'RoleArn',
      scheduler: 'Scheduler',
      settings: 'Settings',
      status: 'Status',
      statusTransitions: 'StatusTransitions',
      trainingJobDescription: 'TrainingJobDescription',
      trainingJobId: 'TrainingJobId',
      trainingJobName: 'TrainingJobName',
      trainingJobUrl: 'TrainingJobUrl',
      userId: 'UserId',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmSpec: AlgorithmSpec,
      algorithmVersion: 'string',
      assignNodeSpec: AssignNodeSpec,
      computeResource: GetTrainingJobResponseBodyComputeResource,
      credentialConfig: CredentialConfig,
      duration: 'number',
      environments: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      experimentConfig: GetTrainingJobResponseBodyExperimentConfig,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      hyperParameters: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyHyperParameters },
      inputChannels: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyInputChannels },
      instances: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyInstances },
      isTempAlgo: 'boolean',
      labels: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyLabels },
      latestMetrics: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyLatestMetrics },
      latestProgress: GetTrainingJobResponseBodyLatestProgress,
      outputChannels: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyOutputChannels },
      outputModel: GetTrainingJobResponseBodyOutputModel,
      priority: 'number',
      pythonRequirements: { 'type': 'array', 'itemType': 'string' },
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      roleArn: 'string',
      scheduler: GetTrainingJobResponseBodyScheduler,
      settings: JobSettings,
      status: 'string',
      statusTransitions: { 'type': 'array', 'itemType': GetTrainingJobResponseBodyStatusTransitions },
      trainingJobDescription: 'string',
      trainingJobId: 'string',
      trainingJobName: 'string',
      trainingJobUrl: 'string',
      userId: 'string',
      userVpc: GetTrainingJobResponseBodyUserVpc,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.algorithmSpec && typeof (this.algorithmSpec as any).validate === 'function') {
      (this.algorithmSpec as any).validate();
    }
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
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.latestMetrics)) {
      $dara.Model.validateArray(this.latestMetrics);
    }
    if(this.latestProgress && typeof (this.latestProgress as any).validate === 'function') {
      (this.latestProgress as any).validate();
    }
    if(Array.isArray(this.outputChannels)) {
      $dara.Model.validateArray(this.outputChannels);
    }
    if(this.outputModel && typeof (this.outputModel as any).validate === 'function') {
      (this.outputModel as any).validate();
    }
    if(Array.isArray(this.pythonRequirements)) {
      $dara.Model.validateArray(this.pythonRequirements);
    }
    if(this.scheduler && typeof (this.scheduler as any).validate === 'function') {
      (this.scheduler as any).validate();
    }
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
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

