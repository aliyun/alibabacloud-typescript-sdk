// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlgorithmSpec } from "./AlgorithmSpec";
import { AssignNodeSpec } from "./AssignNodeSpec";
import { Location } from "./Location";
import { CredentialConfig } from "./CredentialConfig";
import { JobSettings } from "./JobSettings";


export class CreateTrainingJobRequestComputeResourceInstanceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores for the instance.
   * 
   * @example
   * 8
   */
  CPU?: string;
  /**
   * @remarks
   * The number of GPUs for the instance.
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
   * The shared memory size of the instance, in GB.
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

export class CreateTrainingJobRequestComputeResourceSpotSpec extends $dara.Model {
  /**
   * @remarks
   * Sets the maximum hourly price discount for the instance. This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 9
   */
  spotDiscountLimit?: number;
  /**
   * @remarks
   * The preemption policy for the instance. Valid values:
   * - SpotWithPriceLimit: Sets a maximum price for the spot instance.
   * - SpotAsPriceGo: The system automatically bids and follows the actual market price.
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

export class CreateTrainingJobRequestComputeResource extends $dara.Model {
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
   * The number of instances used in the resource quota.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The instance configuration for the resource quota.
   */
  instanceSpec?: CreateTrainingJobRequestComputeResourceInstanceSpec;
  /**
   * @remarks
   * The ID of the resource quota.
   * 
   * @example
   * quotam670lixikcs
   */
  resourceId?: string;
  /**
   * @remarks
   * The spot instance configuration.
   */
  spotSpec?: CreateTrainingJobRequestComputeResourceSpotSpec;
  /**
   * @remarks
   * Specifies whether to use spot instances.
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
   * @remarks
   * The ID of the experiment associated with the training job.
   * 
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
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * learning_rate
   */
  name?: string;
  /**
   * @remarks
   * The value of the parameter.
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

export class CreateTrainingJobRequestInputChannels extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset.
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
   * oss://pai-quickstart-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/modelscope/models/qwen2-0.5b/main/
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
   * The parameter settings for the input data.
   * 
   * @example
   * {"appendable": true}
   */
  options?: string;
  /**
   * @remarks
   * The ARN of the RAM role.
   * 
   * @example
   * acs:ram::1157703270994901:role/aliyunserviceroleforpaiworkspace
   */
  roleArn?: string;
  /**
   * @remarks
   * The name of the data version.
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

export class CreateTrainingJobRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the label.
   * 
   * @example
   * CreatedBy
   */
  key?: string;
  /**
   * @remarks
   * The value of the label.
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

export class CreateTrainingJobRequestOutputChannels extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * @example
   * d-475megosidivjfgfq6
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
   * The output data configuration.
   * 
   * @example
   * oss://pai-quickstart-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/modelscope/models/qwen2-0.5b/main/
   */
  outputUri?: string;
  /**
   * @remarks
   * The ARN of the RAM role.
   * 
   * @example
   * acs:ram::1157703270994901:role/aliyunserviceroleforpaiworkspace
   */
  roleArn?: string;
  /**
   * @remarks
   * The name of the data version.
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

export class CreateTrainingJobRequestScheduler extends $dara.Model {
  /**
   * @remarks
   * The maximum training duration, in minutes. A value of 0 indicates that the maximum duration is not limited.
   * 
   * @example
   * 0
   */
  maxRunningTimeInMinutes?: number;
  /**
   * @remarks
   * The maximum training duration, in seconds. A value of 0 indicates that the maximum duration is not limited.
   * 
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
   * @remarks
   * The default route interface. A value of eth0 indicates that the default route uses the PAI VPC. A value of eth1 indicates that the default route uses the user VPC. Default value: eth0.
   * 
   * @example
   * eth0
   */
  defaultRoute?: string;
  /**
   * @remarks
   * The extended CIDR block configuration.
   */
  extendedCIDRs?: string[];
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-qdfasd13sdasf
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vs-icrc813vdsfol
   */
  switchId?: string;
  /**
   * @remarks
   * The VPC ID.
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
   * @remarks
   * The name of the algorithm.
   * 
   * @example
   * ev_classification
   */
  algorithmName?: string;
  /**
   * @remarks
   * The provider of the algorithm.
   * 
   * @example
   * pai
   */
  algorithmProvider?: string;
  /**
   * @remarks
   * The algorithm configuration for the training job.
   */
  algorithmSpec?: AlgorithmSpec;
  /**
   * @remarks
   * The version of the algorithm.
   * 
   * @example
   * v1.0.0
   */
  algorithmVersion?: string;
  /**
   * @remarks
   * The specified node configuration.
   */
  assignNodeSpec?: AssignNodeSpec;
  /**
   * @remarks
   * The code configuration for the training job.
   */
  codeDir?: Location;
  /**
   * @remarks
   * The compute resource configuration.
   */
  computeResource?: CreateTrainingJobRequestComputeResource;
  /**
   * @remarks
   * The credential configuration.
   */
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The environment variables for the training job.
   */
  environments?: { [key: string]: string };
  /**
   * @remarks
   * The associated experiment configuration for the training job.
   */
  experimentConfig?: CreateTrainingJobRequestExperimentConfig;
  /**
   * @remarks
   * The training hyperparameter settings.
   */
  hyperParameters?: CreateTrainingJobRequestHyperParameters[];
  /**
   * @remarks
   * The input data configuration for training.
   */
  inputChannels?: CreateTrainingJobRequestInputChannels[];
  /**
   * @remarks
   * The labels of the training job.
   */
  labels?: CreateTrainingJobRequestLabels[];
  /**
   * @remarks
   * The output data configuration for training.
   */
  outputChannels?: CreateTrainingJobRequestOutputChannels[];
  /**
   * @remarks
   * The priority of the training job.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The Python package configuration for the training job.
   */
  pythonRequirements?: string[];
  /**
   * @remarks
   * The ARN of the specified role. Format: acs:ram::$accountID:role/$roleName.
   * 
   * @example
   * acs:ram::1157703270994901:role/aliyunserviceroleforpaiworkspace
   */
  roleArn?: string;
  /**
   * @remarks
   * The scheduling configuration for the training job.
   */
  scheduler?: CreateTrainingJobRequestScheduler;
  /**
   * @remarks
   * The additional parameter settings for the training node.
   */
  settings?: JobSettings;
  /**
   * @remarks
   * The description of the training job.
   * 
   * @example
   * qwen large language model training
   */
  trainingJobDescription?: string;
  /**
   * @remarks
   * The name of the training job.
   * 
   * This parameter is required.
   * 
   * @example
   * qwen_llm
   */
  trainingJobName?: string;
  /**
   * @remarks
   * The VPC configuration.
   */
  userVpc?: CreateTrainingJobRequestUserVpc;
  /**
   * @remarks
   * The ID of the workspace.
   * 
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
      credentialConfig: 'CredentialConfig',
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
      credentialConfig: CredentialConfig,
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

