// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlgorithmSpec } from "./AlgorithmSpec";
import { AssignNodeSpec } from "./AssignNodeSpec";
import { JobSettings } from "./JobSettings";


export class GetTrainingJobResponseBodyComputeResourceInstanceSpec extends $dara.Model {
  /**
   * @example
   * 8
   */
  CPU?: string;
  /**
   * @example
   * 1
   */
  GPU?: string;
  /**
   * @example
   * V100
   */
  GPUType?: string;
  /**
   * @example
   * 32
   */
  memory?: string;
  /**
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
   * @example
   * 0.9
   */
  spotDiscountLimit?: number;
  /**
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
   * @example
   * 1
   */
  ecsCount?: number;
  /**
   * @example
   * ecs.gn5-c8g1.2xlarge
   */
  ecsSpec?: string;
  /**
   * @example
   * 1
   */
  instanceCount?: number;
  instanceSpec?: GetTrainingJobResponseBodyComputeResourceInstanceSpec;
  /**
   * @example
   * quotam670lixikcl
   */
  resourceId?: string;
  resourceName?: string;
  spotSpec?: GetTrainingJobResponseBodyComputeResourceSpotSpec;
  /**
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
   * @example
   * exp-ds9aefia90v
   */
  experimentId?: string;
  /**
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
   * @example
   * learning_rate
   */
  name?: string;
  /**
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
   * @example
   * d-475megosidivjfgfq6
   */
  datasetId?: string;
  /**
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/to/input/model/
   */
  inputUri?: string;
  /**
   * @example
   * model
   */
  name?: string;
  options?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      inputUri: 'InputUri',
      name: 'Name',
      options: 'Options',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      inputUri: 'string',
      name: 'string',
      options: 'string',
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
   * @example
   * train1oug3yehan4-master-0
   */
  name?: string;
  /**
   * @example
   * master
   */
  role?: string;
  /**
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
   * @example
   * CreatedBy
   */
  key?: string;
  /**
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
   * @example
   * loss
   */
  name?: string;
  /**
   * @example
   * 2024-07-10T11:49:47Z
   */
  timestamp?: string;
  /**
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
   * @example
   * 2023-07-04T13:20:18Z
   */
  timestamp?: string;
  /**
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
   * @example
   * 2023-07-04T13:20:18Z
   */
  timestamp?: string;
  /**
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
  overallProgress?: GetTrainingJobResponseBodyLatestProgressOverallProgress;
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
   * @example
   * d-8o0hh35po15ejcdq2p
   */
  datasetId?: string;
  /**
   * @example
   * model
   */
  name?: string;
  /**
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/to/output/model/
   */
  outputUri?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      name: 'Name',
      outputUri: 'OutputUri',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      name: 'string',
      outputUri: 'string',
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
   * @example
   * model
   */
  outputChannelName?: string;
  /**
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
  maxRunningTimeInMinutes?: string;
  /**
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
   * @example
   * 2024-07-10T11:49:47Z
   */
  endTime?: string;
  /**
   * @example
   * TrainingJobSucceed
   */
  reasonCode?: string;
  /**
   * @example
   * KubeDL job runs successfully
   */
  reasonMessage?: string;
  /**
   * @example
   * 2024-07-10T11:49:47Z
   */
  startTime?: string;
  /**
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
  extendedCIDRs?: string[];
  /**
   * @example
   * sg-abcdef****
   */
  securityGroupId?: string;
  /**
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
   * @example
   * algo-xsldfvu1334
   */
  algorithmId?: string;
  /**
   * @example
   * llm_training
   */
  algorithmName?: string;
  /**
   * @example
   * pai
   */
  algorithmProvider?: string;
  algorithmSpec?: AlgorithmSpec;
  /**
   * @example
   * v0.0.1
   */
  algorithmVersion?: string;
  assignNodeSpec?: AssignNodeSpec;
  computeResource?: GetTrainingJobResponseBodyComputeResource;
  /**
   * @example
   * 7200
   */
  duration?: number;
  environments?: { [key: string]: string };
  experimentConfig?: GetTrainingJobResponseBodyExperimentConfig;
  /**
   * @example
   * 2024-07-10T11:49:47Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2024-07-10T11:49:47Z
   */
  gmtModifiedTime?: string;
  hyperParameters?: GetTrainingJobResponseBodyHyperParameters[];
  inputChannels?: GetTrainingJobResponseBodyInputChannels[];
  instances?: GetTrainingJobResponseBodyInstances[];
  /**
   * @example
   * true
   */
  isTempAlgo?: boolean;
  labels?: GetTrainingJobResponseBodyLabels[];
  latestMetrics?: GetTrainingJobResponseBodyLatestMetrics[];
  latestProgress?: GetTrainingJobResponseBodyLatestProgress;
  outputChannels?: GetTrainingJobResponseBodyOutputChannels[];
  outputModel?: GetTrainingJobResponseBodyOutputModel;
  priority?: number;
  pythonRequirements?: string[];
  /**
   * @example
   * TrainingJobSucceed
   */
  reasonCode?: string;
  /**
   * @example
   * None
   */
  reasonMessage?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * acs:ram::{accountID}:role/{roleName}
   */
  roleArn?: string;
  scheduler?: GetTrainingJobResponseBodyScheduler;
  settings?: JobSettings;
  /**
   * @example
   * Running
   */
  status?: string;
  statusTransitions?: GetTrainingJobResponseBodyStatusTransitions[];
  trainingJobDescription?: string;
  /**
   * @example
   * traini6hhxiq69eo
   */
  trainingJobId?: string;
  /**
   * @example
   * qwen_llm
   */
  trainingJobName?: string;
  /**
   * @example
   * https://pai.console.aliyun.com/?regionId=cn-hangzhou&workspaceId=1234#/training/jobs/train1ouyadsl8n4
   */
  trainingJobUrl?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  userVpc?: GetTrainingJobResponseBodyUserVpc;
  /**
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

