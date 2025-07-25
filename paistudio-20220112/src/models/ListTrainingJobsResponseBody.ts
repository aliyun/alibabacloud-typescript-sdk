// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrainingJobsResponseBodyTrainingJobsComputeResourceInstanceSpec extends $dara.Model {
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

export class ListTrainingJobsResponseBodyTrainingJobsComputeResource extends $dara.Model {
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
  instanceSpec?: ListTrainingJobsResponseBodyTrainingJobsComputeResourceInstanceSpec;
  /**
   * @example
   * quotam670lixikcl
   */
  resourceId?: string;
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
   * @example
   * exp-ds9aefia90v
   */
  experimentId?: string;
  /**
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
   * @example
   * learning_rate
   */
  name?: string;
  /**
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
   * @example
   * d-475megosidivjfgfq6
   */
  datasetId?: string;
  /**
   * @example
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/to/input/channel/
   */
  inputUri?: string;
  /**
   * @example
   * model
   */
  name?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      inputUri: 'InputUri',
      name: 'Name',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      inputUri: 'string',
      name: 'string',
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

export class ListTrainingJobsResponseBodyTrainingJobsOutputChannels extends $dara.Model {
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
   * oss://test-bucket.oss-cn-hangzhou-internal.aliyuncs.com/path/to/output/channel/
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

export class ListTrainingJobsResponseBodyTrainingJobsScheduler extends $dara.Model {
  /**
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

export class ListTrainingJobsResponseBodyTrainingJobsUserVpc extends $dara.Model {
  /**
   * @example
   * eth1
   */
  defaultRoute?: string;
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
   * @example
   * llm_train
   */
  algorithmName?: string;
  /**
   * @example
   * pai
   */
  algorithmProvider?: string;
  /**
   * @example
   * v0.0.1
   */
  algorithmVersion?: string;
  computeResource?: ListTrainingJobsResponseBodyTrainingJobsComputeResource;
  dlcJobId?: string;
  environments?: { [key: string]: string };
  experimentConfig?: ListTrainingJobsResponseBodyTrainingJobsExperimentConfig;
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
  hyperParameters?: ListTrainingJobsResponseBodyTrainingJobsHyperParameters[];
  inputChannels?: ListTrainingJobsResponseBodyTrainingJobsInputChannels[];
  /**
   * @example
   * true
   */
  isTempAlgo?: boolean;
  labels?: ListTrainingJobsResponseBodyTrainingJobsLabels[];
  outputChannels?: ListTrainingJobsResponseBodyTrainingJobsOutputChannels[];
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
   * acs:ram::{accountID}:role/{roleName}
   */
  roleArn?: string;
  scheduler?: ListTrainingJobsResponseBodyTrainingJobsScheduler;
  /**
   * @example
   * Running
   */
  status?: string;
  statusTransitions?: ListTrainingJobsResponseBodyTrainingJobsStatusTransitions[];
  trainingJobDescription?: string;
  /**
   * @example
   * train1layo6js8ra
   */
  trainingJobId?: string;
  /**
   * @example
   * qwen2-7b
   */
  trainingJobName?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  userVpc?: ListTrainingJobsResponseBodyTrainingJobsUserVpc;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmVersion: 'AlgorithmVersion',
      computeResource: 'ComputeResource',
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
      computeResource: ListTrainingJobsResponseBodyTrainingJobsComputeResource,
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
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
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

