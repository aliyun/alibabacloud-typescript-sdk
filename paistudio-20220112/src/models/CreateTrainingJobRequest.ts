// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlgorithmSpec } from "./AlgorithmSpec";
import { AssignNodeSpec } from "./AssignNodeSpec";
import { Location } from "./Location";
import { JobSettings } from "./JobSettings";


export class CreateTrainingJobRequestComputeResourceInstanceSpec extends $dara.Model {
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

export class CreateTrainingJobRequestComputeResourceSpotSpec extends $dara.Model {
  /**
   * @example
   * 9
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

export class CreateTrainingJobRequestComputeResource extends $dara.Model {
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
  instanceSpec?: CreateTrainingJobRequestComputeResourceInstanceSpec;
  /**
   * @example
   * quotam670lixikcs
   */
  resourceId?: string;
  spotSpec?: CreateTrainingJobRequestComputeResourceSpotSpec;
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
      spotSpec: 'SpotSpec',
      useSpotInstance: 'UseSpotInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsCount: 'number',
      ecsSpec: 'string',
      instanceCount: 'number',
      instanceSpec: CreateTrainingJobRequestComputeResourceInstanceSpec,
      resourceId: 'string',
      spotSpec: CreateTrainingJobRequestComputeResourceSpotSpec,
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

export class CreateTrainingJobRequestExperimentConfig extends $dara.Model {
  /**
   * @example
   * exp-ds9aefia90v
   */
  experimentId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobRequestHyperParameters extends $dara.Model {
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

export class CreateTrainingJobRequestInputChannels extends $dara.Model {
  /**
   * @example
   * d-475megosidivjfgfq6
   */
  datasetId?: string;
  /**
   * @example
   * oss://pai-quickstart-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/modelscope/models/qwen2-0.5b/main/
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

export class CreateTrainingJobRequestLabels extends $dara.Model {
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

export class CreateTrainingJobRequestOutputChannels extends $dara.Model {
  /**
   * @example
   * d-475megosidivjfgfq6
   */
  datasetId?: string;
  /**
   * @example
   * model
   */
  name?: string;
  /**
   * @example
   * oss://pai-quickstart-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/modelscope/models/qwen2-0.5b/main/
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

export class CreateTrainingJobRequestScheduler extends $dara.Model {
  maxRunningTimeInMinutes?: number;
  /**
   * @example
   * 0
   */
  maxRunningTimeInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      maxRunningTimeInMinutes: 'MaxRunningTimeInMinutes',
      maxRunningTimeInSeconds: 'MaxRunningTimeInSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRunningTimeInMinutes: 'number',
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

export class CreateTrainingJobRequestUserVpc extends $dara.Model {
  /**
   * @example
   * eth0
   */
  defaultRoute?: string;
  extendedCIDRs?: string[];
  /**
   * @example
   * sg-qdfasd13sdasf
   */
  securityGroupId?: string;
  /**
   * @example
   * vs-icrc813vdsfol
   */
  switchId?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-dxiflssjx978sl
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

export class CreateTrainingJobRequest extends $dara.Model {
  /**
   * @example
   * ev_classification
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
   * v1.0.0
   */
  algorithmVersion?: string;
  assignNodeSpec?: AssignNodeSpec;
  codeDir?: Location;
  computeResource?: CreateTrainingJobRequestComputeResource;
  environments?: { [key: string]: string };
  experimentConfig?: CreateTrainingJobRequestExperimentConfig;
  hyperParameters?: CreateTrainingJobRequestHyperParameters[];
  inputChannels?: CreateTrainingJobRequestInputChannels[];
  labels?: CreateTrainingJobRequestLabels[];
  outputChannels?: CreateTrainingJobRequestOutputChannels[];
  priority?: number;
  pythonRequirements?: string[];
  /**
   * @example
   * acs:ram::1157703270994901:role/aliyunserviceroleforpaiworkspace
   */
  roleArn?: string;
  scheduler?: CreateTrainingJobRequestScheduler;
  settings?: JobSettings;
  /**
   * @example
   * qwen large language model training
   */
  trainingJobDescription?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qwen_llm
   */
  trainingJobName?: string;
  userVpc?: CreateTrainingJobRequestUserVpc;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmSpec: 'AlgorithmSpec',
      algorithmVersion: 'AlgorithmVersion',
      assignNodeSpec: 'AssignNodeSpec',
      codeDir: 'CodeDir',
      computeResource: 'ComputeResource',
      environments: 'Environments',
      experimentConfig: 'ExperimentConfig',
      hyperParameters: 'HyperParameters',
      inputChannels: 'InputChannels',
      labels: 'Labels',
      outputChannels: 'OutputChannels',
      priority: 'Priority',
      pythonRequirements: 'PythonRequirements',
      roleArn: 'RoleArn',
      scheduler: 'Scheduler',
      settings: 'Settings',
      trainingJobDescription: 'TrainingJobDescription',
      trainingJobName: 'TrainingJobName',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmSpec: AlgorithmSpec,
      algorithmVersion: 'string',
      assignNodeSpec: AssignNodeSpec,
      codeDir: Location,
      computeResource: CreateTrainingJobRequestComputeResource,
      environments: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      experimentConfig: CreateTrainingJobRequestExperimentConfig,
      hyperParameters: { 'type': 'array', 'itemType': CreateTrainingJobRequestHyperParameters },
      inputChannels: { 'type': 'array', 'itemType': CreateTrainingJobRequestInputChannels },
      labels: { 'type': 'array', 'itemType': CreateTrainingJobRequestLabels },
      outputChannels: { 'type': 'array', 'itemType': CreateTrainingJobRequestOutputChannels },
      priority: 'number',
      pythonRequirements: { 'type': 'array', 'itemType': 'string' },
      roleArn: 'string',
      scheduler: CreateTrainingJobRequestScheduler,
      settings: JobSettings,
      trainingJobDescription: 'string',
      trainingJobName: 'string',
      userVpc: CreateTrainingJobRequestUserVpc,
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
    if(this.codeDir && typeof (this.codeDir as any).validate === 'function') {
      (this.codeDir as any).validate();
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
    if(this.settings && typeof (this.settings as any).validate === 'function') {
      (this.settings as any).validate();
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

