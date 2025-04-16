// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AlgorithmSpecComputeResourcePolicy extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpecComputeResource extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  policy?: AlgorithmSpecComputeResourcePolicy;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: AlgorithmSpecComputeResourcePolicy,
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpecCustomization extends $dara.Model {
  codeDir?: boolean;
  static names(): { [key: string]: string } {
    return {
      codeDir: 'CodeDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDir: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpecProgressDefinitionsOverallProgress extends $dara.Model {
  description?: string;
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      regex: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpecProgressDefinitionsRemainingTime extends $dara.Model {
  description?: string;
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      regex: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpecProgressDefinitions extends $dara.Model {
  overallProgress?: AlgorithmSpecProgressDefinitionsOverallProgress;
  remainingTime?: AlgorithmSpecProgressDefinitionsRemainingTime;
  static names(): { [key: string]: string } {
    return {
      overallProgress: 'OverallProgress',
      remainingTime: 'RemainingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallProgress: AlgorithmSpecProgressDefinitionsOverallProgress,
      remainingTime: AlgorithmSpecProgressDefinitionsRemainingTime,
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

export class FeaturesQuota extends $dara.Model {
  /**
   * @example
   * true
   */
  isEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      isEnabled: 'IsEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeSnapshotWorkloads extends $dara.Model {
  name?: string;
  workloadId?: string;
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      workloadId: 'WorkloadId',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      workloadId: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaUserResources extends $dara.Model {
  submitted?: ResourceAmount;
  used?: ResourceAmount;
  static names(): { [key: string]: string } {
    return {
      submitted: 'Submitted',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submitted: ResourceAmount,
      used: ResourceAmount,
    };
  }

  validate() {
    if(this.submitted && typeof (this.submitted as any).validate === 'function') {
      (this.submitted as any).validate();
    }
    if(this.used && typeof (this.used as any).validate === 'function') {
      (this.used as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupRequestTag extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
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

export class GetResourceGroupRequestTag extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
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

export class GetResourceGroupResponseBodyTags extends $dara.Model {
  /**
   * @example
   * testKey
   */
  tagKey?: string;
  /**
   * @example
   * testValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupMachineGroupRequestTag extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @example
   * TestValue
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

export class GetResourceGroupMachineGroupResponseBodyTags extends $dara.Model {
  /**
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetTrainingJobErrorInfoResponseBodyErrorInfo extends $dara.Model {
  /**
   * @example
   * additional info
   */
  additionalInfo?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      additionalInfo: 'AdditionalInfo',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalInfo: 'string',
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobLatestMetricsResponseBodyMetrics extends $dara.Model {
  /**
   * @example
   * loss
   */
  name?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-04-18T22:20:55Z
   */
  timestamp?: string;
  /**
   * @example
   * 0.97
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

export class ListAlgorithmVersionsResponseBodyAlgorithmVersions extends $dara.Model {
  /**
   * @example
   * algo-sidjc8134hv
   */
  algorithmId?: string;
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
   * v0.1.0
   */
  algorithmVersion?: string;
  /**
   * @example
   * 2024-01-19T02:00:26Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2024-01-22T02:00:59Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 123456789
   */
  tenantId?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmVersion: 'AlgorithmVersion',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmVersion: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsResponseBodyAlgorithms extends $dara.Model {
  algorithmDescription?: string;
  /**
   * @example
   * algo-sidjc8134hv
   */
  algorithmId?: string;
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
   * LLM Train
   */
  displayName?: string;
  /**
   * @example
   * 2023-07-21T03:35:24Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-25T02:15:40Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDescription: 'AlgorithmDescription',
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDescription: 'string',
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobInstanceMetricsResponseBodyInstanceMetricsMetrics extends $dara.Model {
  time?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'string',
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

export class ListTrainingJobInstanceMetricsResponseBodyInstanceMetrics extends $dara.Model {
  instanceId?: string;
  metrics?: ListTrainingJobInstanceMetricsResponseBodyInstanceMetricsMetrics[];
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      metrics: 'Metrics',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      metrics: { 'type': 'array', 'itemType': ListTrainingJobInstanceMetricsResponseBodyInstanceMetricsMetrics },
      nodeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobMetricsResponseBodyMetrics extends $dara.Model {
  /**
   * @example
   * accuracy
   */
  name?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-04-18T22:20:55Z
   */
  timestamp?: string;
  /**
   * @example
   * 0.97
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

export class ListTrainingJobOutputModelsResponseBodyOutputModelsLabels extends $dara.Model {
  key?: string;
  /**
   * @example
   * StableDiffusion
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

export class ListTrainingJobOutputModelsResponseBodyOutputModels extends $dara.Model {
  compressionSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  inferenceSpec?: { [key: string]: any };
  labels?: ListTrainingJobOutputModelsResponseBodyOutputModelsLabels[];
  /**
   * @example
   * {
   *       "lr": 0.000001,
   *       "train_loss": 2.6345
   * }
   */
  metrics?: { [key: string]: any };
  /**
   * @example
   * model
   */
  outputChannelName?: string;
  /**
   * @example
   * region=cn-shanghai,workspaceId=1345,kind=PipelineRun,id=run-sakdbaskjdf
   */
  sourceId?: string;
  /**
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
   * @example
   * oss://test-bucket.oss-cn-hangzhou.aliyuncs.com/path/to/output/channel/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      compressionSpec: 'CompressionSpec',
      evaluationSpec: 'EvaluationSpec',
      inferenceSpec: 'InferenceSpec',
      labels: 'Labels',
      metrics: 'Metrics',
      outputChannelName: 'OutputChannelName',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressionSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': ListTrainingJobOutputModelsResponseBodyOutputModelsLabels },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      outputChannelName: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      uri: 'string',
    };
  }

  validate() {
    if(this.compressionSpec) {
      $dara.Model.validateMap(this.compressionSpec);
    }
    if(this.evaluationSpec) {
      $dara.Model.validateMap(this.evaluationSpec);
    }
    if(this.inferenceSpec) {
      $dara.Model.validateMap(this.inferenceSpec);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.metrics) {
      $dara.Model.validateMap(this.metrics);
    }
    if(this.trainingSpec) {
      $dara.Model.validateMap(this.trainingSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class UpdateTrainingJobLabelsRequestLabels extends $dara.Model {
  /**
   * @example
   * RootModelID
   */
  key?: string;
  /**
   * @example
   * model-ad8cv770kl
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

export class ACS extends $dara.Model {
  ACSQuotaId?: string;
  associatedProducts?: string[];
  static names(): { [key: string]: string } {
    return {
      ACSQuotaId: 'ACSQuotaId',
      associatedProducts: 'AssociatedProducts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACSQuotaId: 'string',
      associatedProducts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.associatedProducts)) {
      $dara.Model.validateArray(this.associatedProducts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Action extends $dara.Model {
  actionType?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmSpec extends $dara.Model {
  codeDir?: Location;
  /**
   * @remarks
   * This parameter is required.
   */
  command?: string[];
  computeResource?: AlgorithmSpecComputeResource;
  customization?: AlgorithmSpecCustomization;
  hyperParameters?: HyperParameterDefinition[];
  /**
   * @remarks
   * This parameter is required.
   */
  image?: string;
  inputChannels?: Channel[];
  /**
   * @remarks
   * This parameter is required.
   */
  jobType?: string;
  metricDefinitions?: MetricDefinition[];
  outputChannels?: Channel[];
  progressDefinitions?: AlgorithmSpecProgressDefinitions;
  resourceRequirements?: ConditionExpression[];
  supportedInstanceTypes?: string[];
  supportsDistributedTraining?: boolean;
  static names(): { [key: string]: string } {
    return {
      codeDir: 'CodeDir',
      command: 'Command',
      computeResource: 'ComputeResource',
      customization: 'Customization',
      hyperParameters: 'HyperParameters',
      image: 'Image',
      inputChannels: 'InputChannels',
      jobType: 'JobType',
      metricDefinitions: 'MetricDefinitions',
      outputChannels: 'OutputChannels',
      progressDefinitions: 'ProgressDefinitions',
      resourceRequirements: 'ResourceRequirements',
      supportedInstanceTypes: 'SupportedInstanceTypes',
      supportsDistributedTraining: 'SupportsDistributedTraining',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDir: Location,
      command: { 'type': 'array', 'itemType': 'string' },
      computeResource: AlgorithmSpecComputeResource,
      customization: AlgorithmSpecCustomization,
      hyperParameters: { 'type': 'array', 'itemType': HyperParameterDefinition },
      image: 'string',
      inputChannels: { 'type': 'array', 'itemType': Channel },
      jobType: 'string',
      metricDefinitions: { 'type': 'array', 'itemType': MetricDefinition },
      outputChannels: { 'type': 'array', 'itemType': Channel },
      progressDefinitions: AlgorithmSpecProgressDefinitions,
      resourceRequirements: { 'type': 'array', 'itemType': ConditionExpression },
      supportedInstanceTypes: { 'type': 'array', 'itemType': 'string' },
      supportsDistributedTraining: 'boolean',
    };
  }

  validate() {
    if(this.codeDir && typeof (this.codeDir as any).validate === 'function') {
      (this.codeDir as any).validate();
    }
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(this.computeResource && typeof (this.computeResource as any).validate === 'function') {
      (this.computeResource as any).validate();
    }
    if(this.customization && typeof (this.customization as any).validate === 'function') {
      (this.customization as any).validate();
    }
    if(Array.isArray(this.hyperParameters)) {
      $dara.Model.validateArray(this.hyperParameters);
    }
    if(Array.isArray(this.inputChannels)) {
      $dara.Model.validateArray(this.inputChannels);
    }
    if(Array.isArray(this.metricDefinitions)) {
      $dara.Model.validateArray(this.metricDefinitions);
    }
    if(Array.isArray(this.outputChannels)) {
      $dara.Model.validateArray(this.outputChannels);
    }
    if(this.progressDefinitions && typeof (this.progressDefinitions as any).validate === 'function') {
      (this.progressDefinitions as any).validate();
    }
    if(Array.isArray(this.resourceRequirements)) {
      $dara.Model.validateArray(this.resourceRequirements);
    }
    if(Array.isArray(this.supportedInstanceTypes)) {
      $dara.Model.validateArray(this.supportedInstanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AllocateStrategySpec extends $dara.Model {
  nodeSpecs?: NodeSpec[];
  static names(): { [key: string]: string } {
    return {
      nodeSpecs: 'NodeSpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeSpecs: { 'type': 'array', 'itemType': NodeSpec },
    };
  }

  validate() {
    if(Array.isArray(this.nodeSpecs)) {
      $dara.Model.validateArray(this.nodeSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindingPolicy extends $dara.Model {
  excludeNodes?: string[];
  includeNodes?: string[];
  /**
   * @example
   * 5
   */
  nodeSpecCount?: number;
  static names(): { [key: string]: string } {
    return {
      excludeNodes: 'ExcludeNodes',
      includeNodes: 'IncludeNodes',
      nodeSpecCount: 'NodeSpecCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeNodes: { 'type': 'array', 'itemType': 'string' },
      includeNodes: { 'type': 'array', 'itemType': 'string' },
      nodeSpecCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.excludeNodes)) {
      $dara.Model.validateArray(this.excludeNodes);
    }
    if(Array.isArray(this.includeNodes)) {
      $dara.Model.validateArray(this.includeNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Channel extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  properties?: { [key: string]: any };
  required?: boolean;
  supportedChannelTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      properties: 'Properties',
      required: 'Required',
      supportedChannelTypes: 'SupportedChannelTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      required: 'boolean',
      supportedChannelTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(Array.isArray(this.supportedChannelTypes)) {
      $dara.Model.validateArray(this.supportedChannelTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChannelProperty extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SKlearn
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Framework
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

export class ComponentSpec extends $dara.Model {
  codeDir?: Location;
  /**
   * @remarks
   * This parameter is required.
   */
  command?: string;
  hyperParameters?: HyperParameterDefinition[];
  /**
   * @remarks
   * This parameter is required.
   */
  image?: string;
  inputChannels?: Channel[];
  /**
   * @remarks
   * This parameter is required.
   */
  jobType?: string;
  metricDefinitions?: MetricDefinition[];
  outputChannels?: Channel[];
  resourceRequirements?: ConditionExpression[];
  static names(): { [key: string]: string } {
    return {
      codeDir: 'CodeDir',
      command: 'Command',
      hyperParameters: 'HyperParameters',
      image: 'Image',
      inputChannels: 'InputChannels',
      jobType: 'JobType',
      metricDefinitions: 'MetricDefinitions',
      outputChannels: 'OutputChannels',
      resourceRequirements: 'ResourceRequirements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDir: Location,
      command: 'string',
      hyperParameters: { 'type': 'array', 'itemType': HyperParameterDefinition },
      image: 'string',
      inputChannels: { 'type': 'array', 'itemType': Channel },
      jobType: 'string',
      metricDefinitions: { 'type': 'array', 'itemType': MetricDefinition },
      outputChannels: { 'type': 'array', 'itemType': Channel },
      resourceRequirements: { 'type': 'array', 'itemType': ConditionExpression },
    };
  }

  validate() {
    if(this.codeDir && typeof (this.codeDir as any).validate === 'function') {
      (this.codeDir as any).validate();
    }
    if(Array.isArray(this.hyperParameters)) {
      $dara.Model.validateArray(this.hyperParameters);
    }
    if(Array.isArray(this.inputChannels)) {
      $dara.Model.validateArray(this.inputChannels);
    }
    if(Array.isArray(this.metricDefinitions)) {
      $dara.Model.validateArray(this.metricDefinitions);
    }
    if(Array.isArray(this.outputChannels)) {
      $dara.Model.validateArray(this.outputChannels);
    }
    if(Array.isArray(this.resourceRequirements)) {
      $dara.Model.validateArray(this.resourceRequirements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConditionExpression extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SupportedMachineTypes
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * in
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Features extends $dara.Model {
  quota?: FeaturesQuota;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: FeaturesQuota,
    };
  }

  validate() {
    if(this.quota && typeof (this.quota as any).validate === 'function') {
      (this.quota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfo extends $dara.Model {
  eipAllocationId?: string;
  natGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      eipAllocationId: 'EipAllocationId',
      natGatewayId: 'NatGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipAllocationId: 'string',
      natGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GPUInfo extends $dara.Model {
  count?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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

export class GPUMetric extends $dara.Model {
  index?: number;
  model?: string;
  /**
   * @example
   * 0：异常；1：正常
   */
  status?: number;
  usageRate?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      model: 'Model',
      status: 'Status',
      usageRate: 'UsageRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      model: 'string',
      status: 'number',
      usageRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HyperParameterDefinition extends $dara.Model {
  defaultValue?: string;
  description?: string;
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  range?: HyperParameterRange;
  required?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      range: 'Range',
      required: 'Required',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      description: 'string',
      displayName: 'string',
      name: 'string',
      range: HyperParameterRange,
      required: 'boolean',
      type: 'string',
    };
  }

  validate() {
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HyperParameterRange extends $dara.Model {
  enum?: string[];
  exclusiveMaximum?: boolean;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  maximum?: string;
  minLength?: number;
  minimum?: string;
  pattern?: string;
  static names(): { [key: string]: string } {
    return {
      enum: 'Enum',
      exclusiveMaximum: 'ExclusiveMaximum',
      exclusiveMinimum: 'ExclusiveMinimum',
      maxLength: 'MaxLength',
      maximum: 'Maximum',
      minLength: 'MinLength',
      minimum: 'Minimum',
      pattern: 'Pattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enum: { 'type': 'array', 'itemType': 'string' },
      exclusiveMaximum: 'boolean',
      exclusiveMinimum: 'boolean',
      maxLength: 'number',
      maximum: 'string',
      minLength: 'number',
      minimum: 'string',
      pattern: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enum)) {
      $dara.Model.validateArray(this.enum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobSettings extends $dara.Model {
  advancedSettings?: { [key: string]: any };
  /**
   * @example
   * 166924
   */
  businessUserId?: string;
  /**
   * @example
   * SilkFlow
   */
  caller?: string;
  /**
   * @example
   * 535.54.03
   */
  driver?: string;
  /**
   * @example
   * false
   */
  enableErrorMonitoringInAIMaster?: boolean;
  /**
   * @example
   * true
   */
  enableOssAppend?: boolean;
  /**
   * @example
   * true
   */
  enableRDMA?: boolean;
  /**
   * @example
   * true
   */
  enableSanityCheck?: boolean;
  /**
   * @example
   * true
   */
  enableTideResource?: boolean;
  /**
   * @example
   * --enable-log-hang-detection true
   */
  errorMonitoringArgs?: string;
  /**
   * @example
   * 30
   */
  jobReservedMinutes?: number;
  /**
   * @example
   * Always
   */
  jobReservedPolicy?: string;
  /**
   * @example
   * AcceptQuotaOverSold
   */
  oversoldType?: string;
  /**
   * @example
   * pid-123456
   */
  pipelineId?: string;
  /**
   * @example
   * --sanity-check-timing=AfterJobFaultTolerant --sanity-check-timeout-ops=MarkJobFai
   */
  sanityCheckArgs?: string;
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      advancedSettings: 'AdvancedSettings',
      businessUserId: 'BusinessUserId',
      caller: 'Caller',
      driver: 'Driver',
      enableErrorMonitoringInAIMaster: 'EnableErrorMonitoringInAIMaster',
      enableOssAppend: 'EnableOssAppend',
      enableRDMA: 'EnableRDMA',
      enableSanityCheck: 'EnableSanityCheck',
      enableTideResource: 'EnableTideResource',
      errorMonitoringArgs: 'ErrorMonitoringArgs',
      jobReservedMinutes: 'JobReservedMinutes',
      jobReservedPolicy: 'JobReservedPolicy',
      oversoldType: 'OversoldType',
      pipelineId: 'PipelineId',
      sanityCheckArgs: 'SanityCheckArgs',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedSettings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      businessUserId: 'string',
      caller: 'string',
      driver: 'string',
      enableErrorMonitoringInAIMaster: 'boolean',
      enableOssAppend: 'boolean',
      enableRDMA: 'boolean',
      enableSanityCheck: 'boolean',
      enableTideResource: 'boolean',
      errorMonitoringArgs: 'string',
      jobReservedMinutes: 'number',
      jobReservedPolicy: 'string',
      oversoldType: 'string',
      pipelineId: 'string',
      sanityCheckArgs: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.advancedSettings) {
      $dara.Model.validateMap(this.advancedSettings);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobViewMetric extends $dara.Model {
  CPUUsageRate?: string;
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUUsageRate?: string;
  jobId?: string;
  jobType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  nodeNames?: string[];
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  /**
   * @example
   * rg17tmvwiokhzaxg
   */
  resourceGroupID?: string;
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      CPUUsageRate: 'CPUUsageRate',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUUsageRate: 'GPUUsageRate',
      jobId: 'JobId',
      jobType: 'JobType',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeNames: 'NodeNames',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      resourceGroupID: 'ResourceGroupID',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUUsageRate: 'string',
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUUsageRate: 'string',
      jobId: 'string',
      jobType: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      resourceGroupID: 'string',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Label extends $dara.Model {
  key?: string;
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

export class Location extends $dara.Model {
  locationType?: string;
  locationValue?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      locationType: 'LocationType',
      locationValue: 'LocationValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationType: 'string',
      locationValue: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.locationValue) {
      $dara.Model.validateMap(this.locationValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MachineGroup extends $dara.Model {
  creatorID?: string;
  /**
   * @example
   * 470.199.02
   */
  defaultDriver?: string;
  ecsCount?: number;
  ecsSpec?: string;
  gmtCreatedTime?: string;
  gmtExpiredTime?: string;
  gmtModifiedTime?: string;
  gmtStartedTime?: string;
  /**
   * @example
   * mg1
   */
  machineGroupID?: string;
  orderInstanceId?: string;
  paymentDuration?: string;
  paymentDurationUnit?: string;
  paymentType?: string;
  reasonCode?: string;
  reasonMessage?: string;
  resourceGroupID?: string;
  status?: string;
  supportedDrivers?: string[];
  static names(): { [key: string]: string } {
    return {
      creatorID: 'CreatorID',
      defaultDriver: 'DefaultDriver',
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartedTime: 'GmtStartedTime',
      machineGroupID: 'MachineGroupID',
      orderInstanceId: 'OrderInstanceId',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      resourceGroupID: 'ResourceGroupID',
      status: 'Status',
      supportedDrivers: 'SupportedDrivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorID: 'string',
      defaultDriver: 'string',
      ecsCount: 'number',
      ecsSpec: 'string',
      gmtCreatedTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartedTime: 'string',
      machineGroupID: 'string',
      orderInstanceId: 'string',
      paymentDuration: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      resourceGroupID: 'string',
      status: 'string',
      supportedDrivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedDrivers)) {
      $dara.Model.validateArray(this.supportedDrivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Metric extends $dara.Model {
  /**
   * @example
   * rg17tmvwiokhzaxg
   */
  time?: number;
  /**
   * @example
   * 23000
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
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

export class MetricDefinition extends $dara.Model {
  /**
   * @example
   * train dataset oob score
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * train:oob_score
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * .*train:oob_score=([-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?).*
   */
  regex?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regex: 'Regex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regex: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Node extends $dara.Model {
  acceleratorType?: string;
  boundQuotas?: QuotaIdName[];
  CPU?: string;
  creatorId?: string;
  GPU?: string;
  GPUMemory?: string;
  GPUType?: string;
  gmtCreateTime?: string;
  gmtExpiredTime?: string;
  gmtModifiedTime?: string;
  isBound?: boolean;
  limitCPU?: string;
  limitGPU?: string;
  limitMemory?: string;
  machineGroupId?: string;
  memory?: string;
  nodeName?: string;
  nodeStatus?: string;
  nodeType?: string;
  orderStatus?: string;
  podNum?: number;
  reasonCode?: string;
  reasonMessage?: string;
  requestCPU?: string;
  requestGPU?: string;
  requestMemory?: string;
  resourceGroupId?: string;
  resourceGroupName?: string;
  users?: UserInfo[];
  workloadNum?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      boundQuotas: 'BoundQuotas',
      CPU: 'CPU',
      creatorId: 'CreatorId',
      GPU: 'GPU',
      GPUMemory: 'GPUMemory',
      GPUType: 'GPUType',
      gmtCreateTime: 'GmtCreateTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isBound: 'IsBound',
      limitCPU: 'LimitCPU',
      limitGPU: 'LimitGPU',
      limitMemory: 'LimitMemory',
      machineGroupId: 'MachineGroupId',
      memory: 'Memory',
      nodeName: 'NodeName',
      nodeStatus: 'NodeStatus',
      nodeType: 'NodeType',
      orderStatus: 'OrderStatus',
      podNum: 'PodNum',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      resourceGroupId: 'ResourceGroupId',
      resourceGroupName: 'ResourceGroupName',
      users: 'Users',
      workloadNum: 'WorkloadNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      boundQuotas: { 'type': 'array', 'itemType': QuotaIdName },
      CPU: 'string',
      creatorId: 'string',
      GPU: 'string',
      GPUMemory: 'string',
      GPUType: 'string',
      gmtCreateTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      isBound: 'boolean',
      limitCPU: 'string',
      limitGPU: 'string',
      limitMemory: 'string',
      machineGroupId: 'string',
      memory: 'string',
      nodeName: 'string',
      nodeStatus: 'string',
      nodeType: 'string',
      orderStatus: 'string',
      podNum: 'number',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestCPU: 'string',
      requestGPU: 'string',
      requestMemory: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      users: { 'type': 'array', 'itemType': UserInfo },
      workloadNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.boundQuotas)) {
      $dara.Model.validateArray(this.boundQuotas);
    }
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeGPUMetric extends $dara.Model {
  acceleratorType?: string;
  GPUCount?: number;
  GPUMetrics?: GPUMetric[];
  GPUType?: string;
  memoryUtil?: number;
  nodeId?: string;
  nodeType?: string;
  totalMemory?: number;
  usedMemory?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      GPUCount: 'GPUCount',
      GPUMetrics: 'GPUMetrics',
      GPUType: 'GPUType',
      memoryUtil: 'MemoryUtil',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      totalMemory: 'TotalMemory',
      usedMemory: 'UsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      GPUCount: 'number',
      GPUMetrics: { 'type': 'array', 'itemType': GPUMetric },
      GPUType: 'string',
      memoryUtil: 'number',
      nodeId: 'string',
      nodeType: 'string',
      totalMemory: 'number',
      usedMemory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.GPUMetrics)) {
      $dara.Model.validateArray(this.GPUMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeMetric extends $dara.Model {
  GPUType?: string;
  /**
   * @example
   * 23000
   */
  metrics?: Metric[];
  /**
   * @example
   * -i121212node
   */
  nodeID?: string;
  static names(): { [key: string]: string } {
    return {
      GPUType: 'GPUType',
      metrics: 'Metrics',
      nodeID: 'NodeID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPUType: 'string',
      metrics: { 'type': 'array', 'itemType': Metric },
      nodeID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeOperationResult extends $dara.Model {
  message?: string;
  nodeName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      nodeName: 'NodeName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      nodeName: 'string',
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

export class NodePodInfo extends $dara.Model {
  /**
   * @example
   * Running
   */
  phase?: string;
  /**
   * @example
   * 192.168.2.2
   */
  podIP?: string;
  /**
   * @example
   * test
   */
  podName?: string;
  /**
   * @example
   * test
   */
  podNamespace?: string;
  resourceSpec?: ResourceAmount;
  /**
   * @example
   * dlc19de9s6vn3acr
   */
  workloadId?: string;
  /**
   * @example
   * dlc
   */
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      phase: 'Phase',
      podIP: 'PodIP',
      podName: 'PodName',
      podNamespace: 'PodNamespace',
      resourceSpec: 'ResourceSpec',
      workloadId: 'WorkloadId',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phase: 'string',
      podIP: 'string',
      podName: 'string',
      podNamespace: 'string',
      resourceSpec: ResourceAmount,
      workloadId: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeSnapshot extends $dara.Model {
  ancestorQuotaWorkloadNum?: number;
  descendantQuotaWorkloadNum?: number;
  nodeName?: string;
  requestCPU?: string;
  requestGPU?: string;
  requestMemory?: string;
  selfQuotaWorkloadNum?: number;
  workloadNum?: number;
  workloads?: NodeSnapshotWorkloads[];
  static names(): { [key: string]: string } {
    return {
      ancestorQuotaWorkloadNum: 'AncestorQuotaWorkloadNum',
      descendantQuotaWorkloadNum: 'DescendantQuotaWorkloadNum',
      nodeName: 'NodeName',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      selfQuotaWorkloadNum: 'SelfQuotaWorkloadNum',
      workloadNum: 'WorkloadNum',
      workloads: 'Workloads',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancestorQuotaWorkloadNum: 'number',
      descendantQuotaWorkloadNum: 'number',
      nodeName: 'string',
      requestCPU: 'string',
      requestGPU: 'string',
      requestMemory: 'string',
      selfQuotaWorkloadNum: 'number',
      workloadNum: 'number',
      workloads: { 'type': 'array', 'itemType': NodeSnapshotWorkloads },
    };
  }

  validate() {
    if(Array.isArray(this.workloads)) {
      $dara.Model.validateArray(this.workloads);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeSpec extends $dara.Model {
  bindingPolicy?: BindingPolicy;
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * ecs.g6.4xlarge
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindingPolicy: 'BindingPolicy',
      count: 'Count',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindingPolicy: BindingPolicy,
      count: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.bindingPolicy && typeof (this.bindingPolicy as any).validate === 'function') {
      (this.bindingPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeType extends $dara.Model {
  /**
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @example
   * 16
   */
  CPU?: string;
  /**
   * @example
   * 0
   */
  GPU?: string;
  /**
   * @example
   * 80G
   */
  GPUMemory?: string;
  GPUType?: string;
  /**
   * @example
   * 64Gi
   */
  memory?: string;
  /**
   * @example
   * ecs.g6.4xlarge
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      CPU: 'CPU',
      GPU: 'GPU',
      GPUMemory: 'GPUMemory',
      GPUType: 'GPUType',
      memory: 'Memory',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      CPU: 'string',
      GPU: 'string',
      GPUMemory: 'string',
      GPUType: 'string',
      memory: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeTypeStatistic extends $dara.Model {
  /**
   * @example
   * 4
   */
  canBeBoundCount?: number;
  /**
   * @example
   * ecs.g6.4xlarge
   */
  nodeType?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      canBeBoundCount: 'CanBeBoundCount',
      nodeType: 'NodeType',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBeBoundCount: 'number',
      nodeType: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeViewMetric extends $dara.Model {
  CPUUsageRate?: string;
  createdTime?: string;
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUType?: string;
  machineGroupID?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  /**
   * @example
   * -i121212node
   */
  nodeID?: string;
  nodeStatus?: string;
  nodeType?: string;
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  taskIdMap?: { [key: string]: any };
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  totalTasks?: number;
  userIDs?: string[];
  userNumber?: string;
  static names(): { [key: string]: string } {
    return {
      CPUUsageRate: 'CPUUsageRate',
      createdTime: 'CreatedTime',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUType: 'GPUType',
      machineGroupID: 'MachineGroupID',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeID: 'NodeID',
      nodeStatus: 'NodeStatus',
      nodeType: 'NodeType',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      taskIdMap: 'TaskIdMap',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      totalTasks: 'TotalTasks',
      userIDs: 'UserIDs',
      userNumber: 'UserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUUsageRate: 'string',
      createdTime: 'string',
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUType: 'string',
      machineGroupID: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeID: 'string',
      nodeStatus: 'string',
      nodeType: 'string',
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      taskIdMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      totalTasks: 'number',
      userIDs: { 'type': 'array', 'itemType': 'string' },
      userNumber: 'string',
    };
  }

  validate() {
    if(this.taskIdMap) {
      $dara.Model.validateMap(this.taskIdMap);
    }
    if(Array.isArray(this.userIDs)) {
      $dara.Model.validateArray(this.userIDs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Permission extends $dara.Model {
  isEnabled?: boolean;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      isEnabled: 'IsEnabled',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnabled: 'boolean',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueueInfo extends $dara.Model {
  /**
   * @example
   * roleMaximumResource
   */
  code?: string;
  /**
   * @example
   * ConfigRule
   */
  codeType?: string;
  gmtCreatedTime?: string;
  /**
   * @example
   * "2023-06-22T00:00:00Z"
   */
  gmtDequeuedTime?: string;
  /**
   * @example
   * “2023-06-22T00:00:00Z”
   */
  gmtEnqueuedTime?: string;
  /**
   * @example
   * "2023-06-22T00:00:00Z"
   */
  gmtPositionModifiedTime?: string;
  /**
   * @example
   * test-label-79f5498dd-9qrzs
   */
  name?: string;
  /**
   * @example
   * 10
   */
  position?: number;
  /**
   * @example
   * 2
   */
  priority?: number;
  /**
   * @example
   * PaiStrategyIntelligent
   */
  queueStrategy?: string;
  /**
   * @example
   * “quotamtl37ge7gkvdz”
   */
  quotaId?: string;
  /**
   * @example
   * Current GPU Limit is 5, limited by Role PAI.AlgoDeveloper
   */
  reason?: string;
  resource?: ResourceAmount;
  /**
   * @example
   * Enqueued
   */
  status?: string;
  userId?: string;
  userName?: string;
  /**
   * @example
   * dlcxxxx
   */
  workloadId?: string;
  workloadName?: string;
  /**
   * @example
   * PreAllocation
   */
  workloadStatus?: string;
  /**
   * @example
   * dlc
   */
  workloadType?: string;
  /**
   * @example
   * “432524”
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      codeType: 'CodeType',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtDequeuedTime: 'GmtDequeuedTime',
      gmtEnqueuedTime: 'GmtEnqueuedTime',
      gmtPositionModifiedTime: 'GmtPositionModifiedTime',
      name: 'Name',
      position: 'Position',
      priority: 'Priority',
      queueStrategy: 'QueueStrategy',
      quotaId: 'QuotaId',
      reason: 'Reason',
      resource: 'Resource',
      status: 'Status',
      userId: 'UserId',
      userName: 'UserName',
      workloadId: 'WorkloadId',
      workloadName: 'WorkloadName',
      workloadStatus: 'WorkloadStatus',
      workloadType: 'WorkloadType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeType: 'string',
      gmtCreatedTime: 'string',
      gmtDequeuedTime: 'string',
      gmtEnqueuedTime: 'string',
      gmtPositionModifiedTime: 'string',
      name: 'string',
      position: 'number',
      priority: 'number',
      queueStrategy: 'string',
      quotaId: 'string',
      reason: 'string',
      resource: ResourceAmount,
      status: 'string',
      userId: 'string',
      userName: 'string',
      workloadId: 'string',
      workloadName: 'string',
      workloadStatus: 'string',
      workloadType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Quota extends $dara.Model {
  allocateStrategy?: string;
  creatorId?: string;
  description?: string;
  gmtCreatedTime?: string;
  gmtModifiedTime?: string;
  labels?: Label[];
  latestOperationId?: string;
  min?: ResourceSpec;
  parentQuotaId?: string;
  queueStrategy?: string;
  quotaConfig?: QuotaConfig;
  quotaDetails?: QuotaDetails;
  /**
   * @example
   * quota12345
   */
  quotaId?: string;
  /**
   * @example
   * dlc-quota
   */
  quotaName?: string;
  reasonCode?: string;
  reasonMessage?: string;
  resourceGroupIds?: string[];
  resourceType?: string;
  status?: string;
  subQuotas?: QuotaIdName[];
  workspaces?: WorkspaceIdName[];
  static names(): { [key: string]: string } {
    return {
      allocateStrategy: 'AllocateStrategy',
      creatorId: 'CreatorId',
      description: 'Description',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestOperationId: 'LatestOperationId',
      min: 'Min',
      parentQuotaId: 'ParentQuotaId',
      queueStrategy: 'QueueStrategy',
      quotaConfig: 'QuotaConfig',
      quotaDetails: 'QuotaDetails',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      resourceGroupIds: 'ResourceGroupIds',
      resourceType: 'ResourceType',
      status: 'Status',
      subQuotas: 'SubQuotas',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateStrategy: 'string',
      creatorId: 'string',
      description: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestOperationId: 'string',
      min: ResourceSpec,
      parentQuotaId: 'string',
      queueStrategy: 'string',
      quotaConfig: QuotaConfig,
      quotaDetails: QuotaDetails,
      quotaId: 'string',
      quotaName: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      status: 'string',
      subQuotas: { 'type': 'array', 'itemType': QuotaIdName },
      workspaces: { 'type': 'array', 'itemType': WorkspaceIdName },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.min && typeof (this.min as any).validate === 'function') {
      (this.min as any).validate();
    }
    if(this.quotaConfig && typeof (this.quotaConfig as any).validate === 'function') {
      (this.quotaConfig as any).validate();
    }
    if(this.quotaDetails && typeof (this.quotaDetails as any).validate === 'function') {
      (this.quotaDetails as any).validate();
    }
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    if(Array.isArray(this.subQuotas)) {
      $dara.Model.validateArray(this.subQuotas);
    }
    if(Array.isArray(this.workspaces)) {
      $dara.Model.validateArray(this.workspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaConfig extends $dara.Model {
  ACS?: ACS;
  /**
   * @example
   * ceeb37xxxx
   */
  clusterId?: string;
  /**
   * @example
   * 470.199.02
   */
  defaultGPUDriver?: string;
  enablePreemptSubquotaWorkloads?: boolean;
  enableSubQuotaPreemption?: boolean;
  resourceSpecs?: WorkspaceSpecs[];
  subQuotaPreemptionConfig?: SubQuotaPreemptionConfig;
  supportGPUDrivers?: string[];
  /**
   * @example
   * false
   */
  supportRDMA?: boolean;
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      ACS: 'ACS',
      clusterId: 'ClusterId',
      defaultGPUDriver: 'DefaultGPUDriver',
      enablePreemptSubquotaWorkloads: 'EnablePreemptSubquotaWorkloads',
      enableSubQuotaPreemption: 'EnableSubQuotaPreemption',
      resourceSpecs: 'ResourceSpecs',
      subQuotaPreemptionConfig: 'SubQuotaPreemptionConfig',
      supportGPUDrivers: 'SupportGPUDrivers',
      supportRDMA: 'SupportRDMA',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ACS: ACS,
      clusterId: 'string',
      defaultGPUDriver: 'string',
      enablePreemptSubquotaWorkloads: 'boolean',
      enableSubQuotaPreemption: 'boolean',
      resourceSpecs: { 'type': 'array', 'itemType': WorkspaceSpecs },
      subQuotaPreemptionConfig: SubQuotaPreemptionConfig,
      supportGPUDrivers: { 'type': 'array', 'itemType': 'string' },
      supportRDMA: 'boolean',
      userVpc: UserVpc,
    };
  }

  validate() {
    if(this.ACS && typeof (this.ACS as any).validate === 'function') {
      (this.ACS as any).validate();
    }
    if(Array.isArray(this.resourceSpecs)) {
      $dara.Model.validateArray(this.resourceSpecs);
    }
    if(this.subQuotaPreemptionConfig && typeof (this.subQuotaPreemptionConfig as any).validate === 'function') {
      (this.subQuotaPreemptionConfig as any).validate();
    }
    if(Array.isArray(this.supportGPUDrivers)) {
      $dara.Model.validateArray(this.supportGPUDrivers);
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

export class QuotaDetails extends $dara.Model {
  actualMinQuota?: ResourceAmount;
  allocatedQuota?: ResourceAmount;
  ancestorsAllocatedQuota?: ResourceAmount;
  descendantsAllocatedQuota?: ResourceAmount;
  desiredMinQuota?: ResourceAmount;
  requestedQuota?: ResourceAmount;
  selfAllocatedQuota?: ResourceAmount;
  usedQuota?: ResourceAmount;
  static names(): { [key: string]: string } {
    return {
      actualMinQuota: 'ActualMinQuota',
      allocatedQuota: 'AllocatedQuota',
      ancestorsAllocatedQuota: 'AncestorsAllocatedQuota',
      descendantsAllocatedQuota: 'DescendantsAllocatedQuota',
      desiredMinQuota: 'DesiredMinQuota',
      requestedQuota: 'RequestedQuota',
      selfAllocatedQuota: 'SelfAllocatedQuota',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualMinQuota: ResourceAmount,
      allocatedQuota: ResourceAmount,
      ancestorsAllocatedQuota: ResourceAmount,
      descendantsAllocatedQuota: ResourceAmount,
      desiredMinQuota: ResourceAmount,
      requestedQuota: ResourceAmount,
      selfAllocatedQuota: ResourceAmount,
      usedQuota: ResourceAmount,
    };
  }

  validate() {
    if(this.actualMinQuota && typeof (this.actualMinQuota as any).validate === 'function') {
      (this.actualMinQuota as any).validate();
    }
    if(this.allocatedQuota && typeof (this.allocatedQuota as any).validate === 'function') {
      (this.allocatedQuota as any).validate();
    }
    if(this.ancestorsAllocatedQuota && typeof (this.ancestorsAllocatedQuota as any).validate === 'function') {
      (this.ancestorsAllocatedQuota as any).validate();
    }
    if(this.descendantsAllocatedQuota && typeof (this.descendantsAllocatedQuota as any).validate === 'function') {
      (this.descendantsAllocatedQuota as any).validate();
    }
    if(this.desiredMinQuota && typeof (this.desiredMinQuota as any).validate === 'function') {
      (this.desiredMinQuota as any).validate();
    }
    if(this.requestedQuota && typeof (this.requestedQuota as any).validate === 'function') {
      (this.requestedQuota as any).validate();
    }
    if(this.selfAllocatedQuota && typeof (this.selfAllocatedQuota as any).validate === 'function') {
      (this.selfAllocatedQuota as any).validate();
    }
    if(this.usedQuota && typeof (this.usedQuota as any).validate === 'function') {
      (this.usedQuota as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaIdName extends $dara.Model {
  /**
   * @example
   * quota12345
   */
  quotaId?: string;
  /**
   * @example
   * dlc-quota
   */
  quotaName?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      quotaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaJob extends $dara.Model {
  queuing?: number;
  running?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      queuing: 'Queuing',
      running: 'Running',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queuing: 'number',
      running: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaJobViewMetric extends $dara.Model {
  CPUUsageRate?: string;
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUUsageRate?: string;
  jobId?: string;
  jobType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  nodeNames?: string[];
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      CPUUsageRate: 'CPUUsageRate',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUUsageRate: 'GPUUsageRate',
      jobId: 'JobId',
      jobType: 'JobType',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeNames: 'NodeNames',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUUsageRate: 'string',
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUUsageRate: 'string',
      jobId: 'string',
      jobType: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaMetric extends $dara.Model {
  GPUType?: string;
  /**
   * @example
   * 23000
   */
  metrics?: Metric[];
  static names(): { [key: string]: string } {
    return {
      GPUType: 'GPUType',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPUType: 'string',
      metrics: { 'type': 'array', 'itemType': Metric },
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaNodeViewMetric extends $dara.Model {
  CPUUsageRate?: string;
  createdTime?: string;
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  /**
   * @example
   * -i121212node
   */
  nodeID?: string;
  nodeStatus?: string;
  nodeType?: string;
  quotaId?: string;
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  taskIdMap?: { [key: string]: any };
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  totalTasks?: number;
  userIDs?: string[];
  userNumber?: string;
  static names(): { [key: string]: string } {
    return {
      CPUUsageRate: 'CPUUsageRate',
      createdTime: 'CreatedTime',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUType: 'GPUType',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeID: 'NodeID',
      nodeStatus: 'NodeStatus',
      nodeType: 'NodeType',
      quotaId: 'QuotaId',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      taskIdMap: 'TaskIdMap',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      totalTasks: 'TotalTasks',
      userIDs: 'UserIDs',
      userNumber: 'UserNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUUsageRate: 'string',
      createdTime: 'string',
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUType: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeID: 'string',
      nodeStatus: 'string',
      nodeType: 'string',
      quotaId: 'string',
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      taskIdMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      totalTasks: 'number',
      userIDs: { 'type': 'array', 'itemType': 'string' },
      userNumber: 'string',
    };
  }

  validate() {
    if(this.taskIdMap) {
      $dara.Model.validateMap(this.taskIdMap);
    }
    if(Array.isArray(this.userIDs)) {
      $dara.Model.validateArray(this.userIDs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaTopo extends $dara.Model {
  depth?: string;
  parentQuotaId?: string;
  quotaDetails?: QuotaDetails;
  quotaId?: string;
  quotaName?: string;
  resourceType?: string;
  workloadDetails?: WorkloadDetails;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      parentQuotaId: 'ParentQuotaId',
      quotaDetails: 'QuotaDetails',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      resourceType: 'ResourceType',
      workloadDetails: 'WorkloadDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'string',
      parentQuotaId: 'string',
      quotaDetails: QuotaDetails,
      quotaId: 'string',
      quotaName: 'string',
      resourceType: 'string',
      workloadDetails: WorkloadDetails,
    };
  }

  validate() {
    if(this.quotaDetails && typeof (this.quotaDetails as any).validate === 'function') {
      (this.quotaDetails as any).validate();
    }
    if(this.workloadDetails && typeof (this.workloadDetails as any).validate === 'function') {
      (this.workloadDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaUser extends $dara.Model {
  resources?: QuotaUserResources;
  userId?: string;
  username?: string;
  workloadCount?: number;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      userId: 'UserId',
      username: 'Username',
      workloadCount: 'WorkloadCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: QuotaUserResources,
      userId: 'string',
      username: 'string',
      workloadCount: 'number',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaUserViewMetric extends $dara.Model {
  CPUNodeNumber?: number;
  CPUUsageRate?: string;
  cpuJobNames?: string[];
  cpuNodeNames?: string[];
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUNodeNumber?: number;
  GPUUsageRate?: string;
  gpuJobNames?: string[];
  gpuNodeNames?: string[];
  jobType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  nodeNames?: string[];
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      CPUNodeNumber: 'CPUNodeNumber',
      CPUUsageRate: 'CPUUsageRate',
      cpuJobNames: 'CpuJobNames',
      cpuNodeNames: 'CpuNodeNames',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUNodeNumber: 'GPUNodeNumber',
      GPUUsageRate: 'GPUUsageRate',
      gpuJobNames: 'GpuJobNames',
      gpuNodeNames: 'GpuNodeNames',
      jobType: 'JobType',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeNames: 'NodeNames',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUNodeNumber: 'number',
      CPUUsageRate: 'string',
      cpuJobNames: { 'type': 'array', 'itemType': 'string' },
      cpuNodeNames: { 'type': 'array', 'itemType': 'string' },
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUNodeNumber: 'number',
      GPUUsageRate: 'string',
      gpuJobNames: { 'type': 'array', 'itemType': 'string' },
      gpuNodeNames: { 'type': 'array', 'itemType': 'string' },
      jobType: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cpuJobNames)) {
      $dara.Model.validateArray(this.cpuJobNames);
    }
    if(Array.isArray(this.cpuNodeNames)) {
      $dara.Model.validateArray(this.cpuNodeNames);
    }
    if(Array.isArray(this.gpuJobNames)) {
      $dara.Model.validateArray(this.gpuJobNames);
    }
    if(Array.isArray(this.gpuNodeNames)) {
      $dara.Model.validateArray(this.gpuNodeNames);
    }
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceAmount extends $dara.Model {
  /**
   * @example
   * 100
   */
  CPU?: string;
  /**
   * @example
   * 16
   */
  GPU?: string;
  /**
   * @example
   * GPU
   */
  GPUType?: string;
  /**
   * @example
   * 100Gi
   */
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceDiagnosisDetail extends $dara.Model {
  exceedResources?: string[];
  limit?: ResourceAmount;
  status?: string;
  used?: ResourceAmount;
  workloadIds?: string[];
  static names(): { [key: string]: string } {
    return {
      exceedResources: 'ExceedResources',
      limit: 'Limit',
      status: 'Status',
      used: 'Used',
      workloadIds: 'WorkloadIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceedResources: { 'type': 'array', 'itemType': 'string' },
      limit: ResourceAmount,
      status: 'string',
      used: ResourceAmount,
      workloadIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.exceedResources)) {
      $dara.Model.validateArray(this.exceedResources);
    }
    if(this.limit && typeof (this.limit as any).validate === 'function') {
      (this.limit as any).validate();
    }
    if(this.used && typeof (this.used as any).validate === 'function') {
      (this.used as any).validate();
    }
    if(Array.isArray(this.workloadIds)) {
      $dara.Model.validateArray(this.workloadIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceGroup extends $dara.Model {
  creatorID?: string;
  gmtCreatedTime?: string;
  gmtModifiedTime?: string;
  /**
   * @example
   * RG1
   */
  name?: string;
  nodeCount?: number;
  /**
   * @example
   * rg17tmvwiokhzaxg
   */
  resourceGroupID?: string;
  userVpc?: UserVpc;
  /**
   * @example
   * 23000
   */
  workspaceID?: string;
  static names(): { [key: string]: string } {
    return {
      creatorID: 'CreatorID',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      nodeCount: 'NodeCount',
      resourceGroupID: 'ResourceGroupID',
      userVpc: 'UserVpc',
      workspaceID: 'WorkspaceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorID: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      nodeCount: 'number',
      resourceGroupID: 'string',
      userVpc: UserVpc,
      workspaceID: 'string',
    };
  }

  validate() {
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceGroupMetric extends $dara.Model {
  gpuType?: string;
  /**
   * @example
   * 23000
   */
  metrics?: Metric[];
  /**
   * @example
   * rg17tmvwiokhzaxg
   */
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      gpuType: 'GpuType',
      metrics: 'Metrics',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuType: 'string',
      metrics: { 'type': 'array', 'itemType': Metric },
      resourceGroupID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceLimitDetails extends $dara.Model {
  GCLevel?: string;
  resourceLimit?: { [key: string]: any };
  shouldIgnoreResourceCheck?: boolean;
  static names(): { [key: string]: string } {
    return {
      GCLevel: 'GCLevel',
      resourceLimit: 'ResourceLimit',
      shouldIgnoreResourceCheck: 'ShouldIgnoreResourceCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GCLevel: 'string',
      resourceLimit: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      shouldIgnoreResourceCheck: 'boolean',
    };
  }

  validate() {
    if(this.resourceLimit) {
      $dara.Model.validateMap(this.resourceLimit);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceOperation extends $dara.Model {
  creatorId?: string;
  gmtCreatedTime?: string;
  gmtEndTime?: string;
  gmtModifiedTime?: string;
  gmtStartTime?: string;
  objectId?: string;
  objectType?: string;
  operationDescription?: string;
  operationId?: string;
  operationSpecJson?: string;
  operationType?: string;
  reasonCode?: string;
  reasonMessage?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtEndTime: 'GmtEndTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartTime: 'GmtStartTime',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      operationDescription: 'OperationDescription',
      operationId: 'OperationId',
      operationSpecJson: 'OperationSpecJson',
      operationType: 'OperationType',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      gmtCreatedTime: 'string',
      gmtEndTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartTime: 'string',
      objectId: 'string',
      objectType: 'string',
      operationDescription: 'string',
      operationId: 'string',
      operationSpecJson: 'string',
      operationType: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
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

export class ResourceSpec extends $dara.Model {
  nodeSpecs?: NodeSpec[];
  static names(): { [key: string]: string } {
    return {
      nodeSpecs: 'NodeSpecs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeSpecs: { 'type': 'array', 'itemType': NodeSpec },
    };
  }

  validate() {
    if(Array.isArray(this.nodeSpecs)) {
      $dara.Model.validateArray(this.nodeSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Rules extends $dara.Model {
  scheduling?: SchedulingRule;
  static names(): { [key: string]: string } {
    return {
      scheduling: 'Scheduling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduling: SchedulingRule,
    };
  }

  validate() {
    if(this.scheduling && typeof (this.scheduling as any).validate === 'function') {
      (this.scheduling as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SchedulingRule extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  cronTab?: string;
  /**
   * **if can be null:**
   * true
   */
  endAt?: string;
  /**
   * **if can be null:**
   * true
   */
  executeOnce?: boolean;
  /**
   * **if can be null:**
   * true
   */
  startAt?: string;
  static names(): { [key: string]: string } {
    return {
      cronTab: 'CronTab',
      endAt: 'EndAt',
      executeOnce: 'ExecuteOnce',
      startAt: 'StartAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronTab: 'string',
      endAt: 'string',
      executeOnce: 'boolean',
      startAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpotPriceItem extends $dara.Model {
  /**
   * @example
   * ml.gu8xf.8xlarge-gu108
   */
  instanceType?: string;
  /**
   * @example
   * 0.1
   */
  spotDiscount?: number;
  /**
   * @example
   * 2024-01-17T06:00:00Z
   */
  timestamp?: string;
  /**
   * @example
   * cn-wulanchabu-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotDiscount: 'SpotDiscount',
      timestamp: 'Timestamp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotDiscount: 'number',
      timestamp: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SpotStockPreview extends $dara.Model {
  /**
   * @example
   * ml.gu8xf.8xlarge-gu108
   */
  instanceType?: string;
  /**
   * @example
   * 0.1
   */
  spotDiscount?: number;
  /**
   * @example
   * WithStock
   */
  stockStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotDiscount: 'SpotDiscount',
      stockStatus: 'StockStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotDiscount: 'number',
      stockStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubQuotaPreemptionConfig extends $dara.Model {
  /**
   * @example
   * 9
   */
  preemptedPriorityUpperBound?: number;
  preemptedProducts?: string[];
  static names(): { [key: string]: string } {
    return {
      preemptedPriorityUpperBound: 'PreemptedPriorityUpperBound',
      preemptedProducts: 'PreemptedProducts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preemptedPriorityUpperBound: 'number',
      preemptedProducts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.preemptedProducts)) {
      $dara.Model.validateArray(this.preemptedProducts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Task extends $dara.Model {
  actions?: Action[];
  description?: string;
  gmtActivatedTime?: string;
  gmtCreatedTime?: string;
  gmtModifiedTime?: string;
  gmtStoppedTime?: string;
  quotaId?: string;
  rules?: Rules;
  status?: string;
  taskId?: string;
  taskName?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      description: 'Description',
      gmtActivatedTime: 'GmtActivatedTime',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStoppedTime: 'GmtStoppedTime',
      quotaId: 'QuotaId',
      rules: 'Rules',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': Action },
      description: 'string',
      gmtActivatedTime: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      gmtStoppedTime: 'string',
      quotaId: 'string',
      rules: Rules,
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(this.rules && typeof (this.rules as any).validate === 'function') {
      (this.rules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskInstance extends $dara.Model {
  gmtCreatedTime?: string;
  gmtEndTime?: string;
  status?: string;
  taskId?: string;
  taskInstanceId?: string;
  tenantId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreatedTime: 'GmtCreatedTime',
      gmtEndTime: 'GmtEndTime',
      status: 'Status',
      taskId: 'TaskId',
      taskInstanceId: 'TaskInstanceId',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreatedTime: 'string',
      gmtEndTime: 'string',
      status: 'string',
      taskId: 'string',
      taskInstanceId: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskInstanceEvent extends $dara.Model {
  gmtEndTime?: string;
  gmtStartTime?: string;
  message?: string;
  podName?: string;
  status?: string;
  workloadType?: string;
  static names(): { [key: string]: string } {
    return {
      gmtEndTime: 'GmtEndTime',
      gmtStartTime: 'GmtStartTime',
      message: 'Message',
      podName: 'PodName',
      status: 'Status',
      workloadType: 'WorkloadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtEndTime: 'string',
      gmtStartTime: 'string',
      message: 'string',
      podName: 'string',
      status: 'string',
      workloadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TimeRangeFilter extends $dara.Model {
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnschedulableNodeDetail extends $dara.Model {
  nodes?: string[];
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': 'string' },
      reason: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserInfo extends $dara.Model {
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserQuotaPermission extends $dara.Model {
  permissions?: string[];
  quotaId?: string;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      quotaId: 'QuotaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': 'string' },
      quotaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserViewMetric extends $dara.Model {
  CPUNodeNumber?: number;
  CPUUsageRate?: string;
  cpuJobNames?: string[];
  cpuNodeNames?: string[];
  diskReadRate?: string;
  diskWriteRate?: string;
  GPUNodeNumber?: number;
  GPUUsageRate?: string;
  gpuJobNames?: string[];
  gpuNodeNames?: string[];
  jobType?: string;
  memoryUsageRate?: string;
  networkInputRate?: string;
  networkOutputRate?: string;
  nodeNames?: string[];
  requestCPU?: number;
  requestGPU?: number;
  requestMemory?: number;
  /**
   * @example
   * rg17tmvwiokhzaxg
   */
  resourceGroupId?: string;
  totalCPU?: number;
  totalGPU?: number;
  totalMemory?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      CPUNodeNumber: 'CPUNodeNumber',
      CPUUsageRate: 'CPUUsageRate',
      cpuJobNames: 'CpuJobNames',
      cpuNodeNames: 'CpuNodeNames',
      diskReadRate: 'DiskReadRate',
      diskWriteRate: 'DiskWriteRate',
      GPUNodeNumber: 'GPUNodeNumber',
      GPUUsageRate: 'GPUUsageRate',
      gpuJobNames: 'GpuJobNames',
      gpuNodeNames: 'GpuNodeNames',
      jobType: 'JobType',
      memoryUsageRate: 'MemoryUsageRate',
      networkInputRate: 'NetworkInputRate',
      networkOutputRate: 'NetworkOutputRate',
      nodeNames: 'NodeNames',
      requestCPU: 'RequestCPU',
      requestGPU: 'RequestGPU',
      requestMemory: 'RequestMemory',
      resourceGroupId: 'ResourceGroupId',
      totalCPU: 'TotalCPU',
      totalGPU: 'TotalGPU',
      totalMemory: 'TotalMemory',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPUNodeNumber: 'number',
      CPUUsageRate: 'string',
      cpuJobNames: { 'type': 'array', 'itemType': 'string' },
      cpuNodeNames: { 'type': 'array', 'itemType': 'string' },
      diskReadRate: 'string',
      diskWriteRate: 'string',
      GPUNodeNumber: 'number',
      GPUUsageRate: 'string',
      gpuJobNames: { 'type': 'array', 'itemType': 'string' },
      gpuNodeNames: { 'type': 'array', 'itemType': 'string' },
      jobType: 'string',
      memoryUsageRate: 'string',
      networkInputRate: 'string',
      networkOutputRate: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      requestCPU: 'number',
      requestGPU: 'number',
      requestMemory: 'number',
      resourceGroupId: 'string',
      totalCPU: 'number',
      totalGPU: 'number',
      totalMemory: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cpuJobNames)) {
      $dara.Model.validateArray(this.cpuJobNames);
    }
    if(Array.isArray(this.cpuNodeNames)) {
      $dara.Model.validateArray(this.cpuNodeNames);
    }
    if(Array.isArray(this.gpuJobNames)) {
      $dara.Model.validateArray(this.gpuJobNames);
    }
    if(Array.isArray(this.gpuNodeNames)) {
      $dara.Model.validateArray(this.gpuNodeNames);
    }
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserVpc extends $dara.Model {
  defaultForwardInfo?: ForwardInfo;
  defaultRoute?: string;
  extendedCIDRs?: string[];
  roleArn?: string;
  securityGroupId?: string;
  switchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultForwardInfo: 'DefaultForwardInfo',
      defaultRoute: 'DefaultRoute',
      extendedCIDRs: 'ExtendedCIDRs',
      roleArn: 'RoleArn',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultForwardInfo: ForwardInfo,
      defaultRoute: 'string',
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      roleArn: 'string',
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.defaultForwardInfo && typeof (this.defaultForwardInfo as any).validate === 'function') {
      (this.defaultForwardInfo as any).validate();
    }
    if(Array.isArray(this.extendedCIDRs)) {
      $dara.Model.validateArray(this.extendedCIDRs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WorkloadDetails extends $dara.Model {
  DLC?: QuotaJob;
  DSW?: QuotaJob;
  EAS?: QuotaJob;
  summary?: QuotaJob;
  static names(): { [key: string]: string } {
    return {
      DLC: 'DLC',
      DSW: 'DSW',
      EAS: 'EAS',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DLC: QuotaJob,
      DSW: QuotaJob,
      EAS: QuotaJob,
      summary: QuotaJob,
    };
  }

  validate() {
    if(this.DLC && typeof (this.DLC as any).validate === 'function') {
      (this.DLC as any).validate();
    }
    if(this.DSW && typeof (this.DSW as any).validate === 'function') {
      (this.DSW as any).validate();
    }
    if(this.EAS && typeof (this.EAS as any).validate === 'function') {
      (this.EAS as any).validate();
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WorkspaceIdName extends $dara.Model {
  /**
   * @example
   * ws123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WorkspaceSpec extends $dara.Model {
  code?: string;
  codeType?: string;
  isGuaranteedValid?: boolean;
  isOverSoldValid?: boolean;
  reason?: string;
  spec?: ResourceAmount;
  specName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      codeType: 'CodeType',
      isGuaranteedValid: 'IsGuaranteedValid',
      isOverSoldValid: 'IsOverSoldValid',
      reason: 'Reason',
      spec: 'Spec',
      specName: 'SpecName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      codeType: 'string',
      isGuaranteedValid: 'boolean',
      isOverSoldValid: 'boolean',
      reason: 'string',
      spec: ResourceAmount,
      specName: 'string',
    };
  }

  validate() {
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WorkspaceSpecs extends $dara.Model {
  product?: string;
  specs?: WorkspaceSpec[];
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      product: 'Product',
      specs: 'Specs',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      product: 'string',
      specs: { 'type': 'array', 'itemType': WorkspaceSpec },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.specs)) {
      $dara.Model.validateArray(this.specs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceWebTerminalRequest extends $dara.Model {
  /**
   * @example
   * wss://pai-dlc-proxy-cn-shanghai.aliyun.com/terminal/t1157703270994901/dlcmjzjt1dxbmx4h/dlcmjzjt1dxbmx4h-worker-0?Token=******
   */
  checkInfo?: string;
  static names(): { [key: string]: string } {
    return {
      checkInfo: 'CheckInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceWebTerminalResponseBody extends $dara.Model {
  /**
   * @example
   * F2D0392B-D749-5C48-A98A-3FAE5C9444A6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceWebTerminalResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CheckInstanceWebTerminalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CheckInstanceWebTerminalResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmRequest extends $dara.Model {
  algorithmDescription?: string;
  /**
   * @example
   * llm_training
   */
  algorithmName?: string;
  displayName?: string;
  /**
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDescription: 'AlgorithmDescription',
      algorithmName: 'AlgorithmName',
      displayName: 'DisplayName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDescription: 'string',
      algorithmName: 'string',
      displayName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmResponseBody extends $dara.Model {
  /**
   * @example
   * algo-xsldfvu1334
   */
  algorithmId?: string;
  /**
   * @example
   * E7C42CC7-2E85-508A-84F4-923B605FD10F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAlgorithmResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmVersionRequest extends $dara.Model {
  algorithmSpec?: AlgorithmSpec;
  static names(): { [key: string]: string } {
    return {
      algorithmSpec: 'AlgorithmSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmSpec: AlgorithmSpec,
    };
  }

  validate() {
    if(this.algorithmSpec && typeof (this.algorithmSpec as any).validate === 'function') {
      (this.algorithmSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmVersionShrinkRequest extends $dara.Model {
  algorithmSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmSpecShrink: 'AlgorithmSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmVersionResponseBody extends $dara.Model {
  /**
   * @example
   * algo-xsldfvu1334
   */
  algorithmId?: string;
  /**
   * @example
   * v0.0.1
   */
  algorithmVersion?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmVersion: 'AlgorithmVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAlgorithmVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAlgorithmVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAlgorithmVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceWebTerminalResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * wss://pai-dlc-proxy-cn-shanghai.aliyun.com/terminal/t1157703270994901/dlcmjzjt1dxbmx4h/dlcmjzjt1dxbmx4h-worker-0?Token=******
   */
  webTerminalId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webTerminalId: 'WebTerminalId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webTerminalId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceWebTerminalResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateInstanceWebTerminalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceWebTerminalResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaRequest extends $dara.Model {
  /**
   * @example
   * ByNodeSpecs
   */
  allocateStrategy?: string;
  /**
   * @example
   * this is a test quota
   */
  description?: string;
  labels?: Label[];
  min?: ResourceSpec;
  /**
   * @example
   * quota1ci8g793pgm
   */
  parentQuotaId?: string;
  /**
   * @example
   * PaiStrategyIntelligent
   * 
   * **if can be null:**
   * true
   */
  queueStrategy?: string;
  quotaConfig?: QuotaConfig;
  /**
   * @example
   * test-quota
   */
  quotaName?: string;
  resourceGroupIds?: string[];
  /**
   * @example
   * ECS
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      allocateStrategy: 'AllocateStrategy',
      description: 'Description',
      labels: 'Labels',
      min: 'Min',
      parentQuotaId: 'ParentQuotaId',
      queueStrategy: 'QueueStrategy',
      quotaConfig: 'QuotaConfig',
      quotaName: 'QuotaName',
      resourceGroupIds: 'ResourceGroupIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateStrategy: 'string',
      description: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      min: ResourceSpec,
      parentQuotaId: 'string',
      queueStrategy: 'string',
      quotaConfig: QuotaConfig,
      quotaName: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.min && typeof (this.min as any).validate === 'function') {
      (this.min as any).validate();
    }
    if(this.quotaConfig && typeof (this.quotaConfig as any).validate === 'function') {
      (this.quotaConfig as any).validate();
    }
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Quota Id
   * 
   * @example
   * quotad2kd8ljpsno
   */
  quotaId?: string;
  /**
   * @example
   * CBF05F13-B24C-5129-9048-4FA684DCD579
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupRequest extends $dara.Model {
  /**
   * @example
   * Ecs
   */
  computingResourceProvider?: string;
  /**
   * @example
   * test_api_report
   */
  description?: string;
  /**
   * @example
   * testResourceGroup
   */
  name?: string;
  /**
   * @example
   * Ecs
   */
  resourceType?: string;
  tag?: CreateResourceGroupRequestTag[];
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      computingResourceProvider: 'ComputingResourceProvider',
      description: 'Description',
      name: 'Name',
      resourceType: 'ResourceType',
      tag: 'Tag',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingResourceProvider: 'string',
      description: 'string',
      name: 'string',
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': CreateResourceGroupRequestTag },
      userVpc: UserVpc,
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
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

export class CreateResourceGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 18D5A1C6-14B8-545E-8408-0A7DDB4C6B5E
   */
  requestId?: string;
  /**
   * @remarks
   * ResourceGroup ID。
   * 
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
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

export class CreateTrainingJobResponseBody extends $dara.Model {
  /**
   * @example
   * E7C42CC7-2E85-508A-84F4-923B605FD10F
   */
  requestId?: string;
  /**
   * @example
   * traineyfz0m2hsfv
   */
  trainingJobId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trainingJobId: 'TrainingJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trainingJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTrainingJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgorithmResponseBody extends $dara.Model {
  /**
   * @example
   * FFB1D4B4-B253-540A-9B3B-AA711C48A1B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgorithmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAlgorithmResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgorithmVersionResponseBody extends $dara.Model {
  /**
   * @example
   * F082BD0D-21E1-5F9B-81A0-AB07485B03CD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgorithmVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAlgorithmVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAlgorithmVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMachineGroupResponseBody extends $dara.Model {
  machineGroupID?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineGroupID: 'MachineGroupID',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineGroupID: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMachineGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMachineGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteMachineGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Quota Id
   * 
   * @example
   * quotamtl37ge7gkvdz
   */
  quotaId?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponseBody extends $dara.Model {
  /**
   * @example
   * F082BD0D-21E1-5F9B-81A0-AB07485B03CD
   */
  requestId?: string;
  /**
   * @example
   * rgvl9d6utwcscukh
   */
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupMachineGroupResponseBody extends $dara.Model {
  machineGroupID?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      machineGroupID: 'MachineGroupID',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineGroupID: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceGroupMachineGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceGroupMachineGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceGroupMachineGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrainingJobResponseBody extends $dara.Model {
  /**
   * @example
   * 4cc83062-9bcb-4ab3-979e-2e571a35834f
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrainingJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTrainingJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrainingJobLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RootModelID
   */
  keys?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrainingJobLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrainingJobLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteTrainingJobLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTrainingJobLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmResponseBody extends $dara.Model {
  algorithmDescription?: string;
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
  /**
   * @example
   * llm_training
   */
  displayName?: string;
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
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 123456789
   */
  tenantId?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  /**
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDescription: 'AlgorithmDescription',
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      requestId: 'RequestId',
      tenantId: 'TenantId',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDescription: 'string',
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      requestId: 'string',
      tenantId: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAlgorithmResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmVersionResponseBody extends $dara.Model {
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
  /**
   * @example
   * 123456789
   */
  tenantId?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmSpec: 'AlgorithmSpec',
      algorithmVersion: 'AlgorithmVersion',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmSpec: AlgorithmSpec,
      algorithmVersion: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.algorithmSpec && typeof (this.algorithmSpec as any).validate === 'function') {
      (this.algorithmSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAlgorithmVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAlgorithmVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMachineGroupResponseBody extends $dara.Model {
  count?: number;
  defaultDriver?: string;
  duration?: string;
  ecsType?: string;
  gmtCreated?: string;
  gmtExpired?: string;
  gmtModified?: string;
  gmtStarted?: string;
  machineGroupID?: string;
  orderID?: string;
  orderInstanceId?: string;
  PAIResourceID?: string;
  payType?: string;
  pricingCycle?: string;
  regionID?: string;
  requestId?: string;
  status?: string;
  supportedDrivers?: string[];
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      defaultDriver: 'DefaultDriver',
      duration: 'Duration',
      ecsType: 'EcsType',
      gmtCreated: 'GmtCreated',
      gmtExpired: 'GmtExpired',
      gmtModified: 'GmtModified',
      gmtStarted: 'GmtStarted',
      machineGroupID: 'MachineGroupID',
      orderID: 'OrderID',
      orderInstanceId: 'OrderInstanceId',
      PAIResourceID: 'PAIResourceID',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionID: 'RegionID',
      requestId: 'RequestId',
      status: 'Status',
      supportedDrivers: 'SupportedDrivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      defaultDriver: 'string',
      duration: 'string',
      ecsType: 'string',
      gmtCreated: 'string',
      gmtExpired: 'string',
      gmtModified: 'string',
      gmtStarted: 'string',
      machineGroupID: 'string',
      orderID: 'string',
      orderInstanceId: 'string',
      PAIResourceID: 'string',
      payType: 'string',
      pricingCycle: 'string',
      regionID: 'string',
      requestId: 'string',
      status: 'string',
      supportedDrivers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedDrivers)) {
      $dara.Model.validateArray(this.supportedDrivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMachineGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMachineGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMachineGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeMetricsRequest extends $dara.Model {
  /**
   * @example
   * 2024-07-10T10:17:06
   */
  endTime?: string;
  /**
   * @example
   * V100
   */
  GPUType?: string;
  /**
   * @example
   * 2024-07-08T02:23:30.292Z
   */
  startTime?: string;
  /**
   * @example
   * 1h
   */
  timeStep?: string;
  /**
   * @example
   * true
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      GPUType: 'GPUType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      GPUType: 'string',
      startTime: 'string',
      timeStep: 'string',
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeMetricsResponseBody extends $dara.Model {
  /**
   * @example
   * DiskWriteRate
   */
  metricType?: string;
  nodesMetrics?: NodeMetric[];
  /**
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      metricType: 'MetricType',
      nodesMetrics: 'NodesMetrics',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricType: 'string',
      nodesMetrics: { 'type': 'array', 'itemType': NodeMetric },
      resourceGroupID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodesMetrics)) {
      $dara.Model.validateArray(this.nodesMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNodeMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNodeMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaRequest extends $dara.Model {
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBody extends $dara.Model {
  /**
   * @example
   * ByNodeSpec
   */
  allocateStrategy?: string;
  /**
   * @example
   * 18846926616
   */
  creatorId?: string;
  /**
   * @example
   * this is a test quota
   */
  description?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  labels?: Label[];
  /**
   * @example
   * operation1234
   */
  latestOperationId?: string;
  min?: ResourceSpec;
  /**
   * @example
   * quota1ci8g793pgm
   */
  parentQuotaId?: string;
  /**
   * @example
   * PaiStrategyIntelligent
   */
  queueStrategy?: string;
  quotaConfig?: QuotaConfig;
  quotaDetails?: QuotaDetails;
  /**
   * @remarks
   * Quota Id
   * 
   * @example
   * quotajradxh43rgb
   */
  quotaId?: string;
  /**
   * @example
   * test-quota
   */
  quotaName?: string;
  /**
   * @example
   * “”
   */
  reasonCode?: string;
  /**
   * @example
   * “”
   */
  reasonMessage?: string;
  /**
   * @example
   * 18D5A1C6-14B8-545E-8408-0A7DDB4C6B5E
   */
  requestId?: string;
  resourceGroupIds?: string[];
  /**
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @example
   * Ready
   */
  status?: string;
  subQuotas?: QuotaIdName[];
  workspaces?: WorkspaceIdName[];
  static names(): { [key: string]: string } {
    return {
      allocateStrategy: 'AllocateStrategy',
      creatorId: 'CreatorId',
      description: 'Description',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestOperationId: 'LatestOperationId',
      min: 'Min',
      parentQuotaId: 'ParentQuotaId',
      queueStrategy: 'QueueStrategy',
      quotaConfig: 'QuotaConfig',
      quotaDetails: 'QuotaDetails',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      resourceGroupIds: 'ResourceGroupIds',
      resourceType: 'ResourceType',
      status: 'Status',
      subQuotas: 'SubQuotas',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocateStrategy: 'string',
      creatorId: 'string',
      description: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestOperationId: 'string',
      min: ResourceSpec,
      parentQuotaId: 'string',
      queueStrategy: 'string',
      quotaConfig: QuotaConfig,
      quotaDetails: QuotaDetails,
      quotaId: 'string',
      quotaName: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      status: 'string',
      subQuotas: { 'type': 'array', 'itemType': QuotaIdName },
      workspaces: { 'type': 'array', 'itemType': WorkspaceIdName },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.min && typeof (this.min as any).validate === 'function') {
      (this.min as any).validate();
    }
    if(this.quotaConfig && typeof (this.quotaConfig as any).validate === 'function') {
      (this.quotaConfig as any).validate();
    }
    if(this.quotaDetails && typeof (this.quotaDetails as any).validate === 'function') {
      (this.quotaDetails as any).validate();
    }
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    if(Array.isArray(this.subQuotas)) {
      $dara.Model.validateArray(this.subQuotas);
    }
    if(Array.isArray(this.workspaces)) {
      $dara.Model.validateArray(this.workspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  isAIWorkspaceDataEnabled?: boolean;
  tag?: GetResourceGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      isAIWorkspaceDataEnabled: 'IsAIWorkspaceDataEnabled',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAIWorkspaceDataEnabled: 'boolean',
      tag: { 'type': 'array', 'itemType': GetResourceGroupRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupShrinkRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  isAIWorkspaceDataEnabled?: boolean;
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      isAIWorkspaceDataEnabled: 'IsAIWorkspaceDataEnabled',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAIWorkspaceDataEnabled: 'boolean',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupResponseBody extends $dara.Model {
  /**
   * @example
   * cb2c7bde30b774e46a329c
   */
  clusterID?: string;
  /**
   * @example
   * ECS
   */
  computingResourceProvider?: string;
  /**
   * @example
   * 1612285282502324
   */
  creatorID?: string;
  /**
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * TestResourceGroup
   */
  name?: string;
  /**
   * @example
   * 18D5A1C6-14B8-545E-8408-0A7DDB4C6B5E
   */
  requestId?: string;
  /**
   * @example
   * Ecs
   */
  resourceType?: string;
  /**
   * @example
   * Ready
   */
  status?: string;
  /**
   * @example
   * true
   */
  supportRDMA?: boolean;
  tags?: GetResourceGroupResponseBodyTags[];
  userVpc?: UserVpc;
  /**
   * @example
   * 35201
   */
  workspaceID?: string;
  static names(): { [key: string]: string } {
    return {
      clusterID: 'ClusterID',
      computingResourceProvider: 'ComputingResourceProvider',
      creatorID: 'CreatorID',
      description: 'Description',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      status: 'Status',
      supportRDMA: 'SupportRDMA',
      tags: 'Tags',
      userVpc: 'UserVpc',
      workspaceID: 'WorkspaceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterID: 'string',
      computingResourceProvider: 'string',
      creatorID: 'string',
      description: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      requestId: 'string',
      resourceType: 'string',
      status: 'string',
      supportRDMA: 'boolean',
      tags: { 'type': 'array', 'itemType': GetResourceGroupResponseBodyTags },
      userVpc: UserVpc,
      workspaceID: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

export class GetResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupMachineGroupRequest extends $dara.Model {
  tag?: GetResourceGroupMachineGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': GetResourceGroupMachineGroupRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupMachineGroupShrinkRequest extends $dara.Model {
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupMachineGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @example
   * 535
   */
  defaultDriver?: string;
  /**
   * @example
   * 1
   */
  ecsCount?: number;
  /**
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtExpiredTime?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtStartedTime?: string;
  /**
   * @example
   * 8
   */
  gpu?: string;
  /**
   * @example
   * A100
   */
  gpuType?: string;
  /**
   * @example
   * mgmioirqjgw6c5lg
   */
  machineGroupID?: string;
  /**
   * @example
   * 64
   */
  memory?: string;
  /**
   * @example
   * testMachineGroup
   */
  name?: string;
  /**
   * @example
   * 1
   */
  paymentDuration?: string;
  /**
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @example
   * 18D5A1C6-14B8-545E-8408-0A7DDB4C6B5E
   */
  requestId?: string;
  /**
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  /**
   * @example
   * Ready
   */
  status?: string;
  supportedDrivers?: string[];
  tags?: GetResourceGroupMachineGroupResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      defaultDriver: 'DefaultDriver',
      ecsCount: 'EcsCount',
      ecsSpec: 'EcsSpec',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtExpiredTime: 'GmtExpiredTime',
      gmtModifiedTime: 'GmtModifiedTime',
      gmtStartedTime: 'GmtStartedTime',
      gpu: 'Gpu',
      gpuType: 'GpuType',
      machineGroupID: 'MachineGroupID',
      memory: 'Memory',
      name: 'Name',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      requestId: 'RequestId',
      resourceGroupID: 'ResourceGroupID',
      status: 'Status',
      supportedDrivers: 'SupportedDrivers',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      defaultDriver: 'string',
      ecsCount: 'number',
      ecsSpec: 'string',
      gmtCreatedTime: 'string',
      gmtExpiredTime: 'string',
      gmtModifiedTime: 'string',
      gmtStartedTime: 'string',
      gpu: 'string',
      gpuType: 'string',
      machineGroupID: 'string',
      memory: 'string',
      name: 'string',
      paymentDuration: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      requestId: 'string',
      resourceGroupID: 'string',
      status: 'string',
      supportedDrivers: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': GetResourceGroupMachineGroupResponseBodyTags },
    };
  }

  validate() {
    if(Array.isArray(this.supportedDrivers)) {
      $dara.Model.validateArray(this.supportedDrivers);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupMachineGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceGroupMachineGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceGroupMachineGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequestRequest extends $dara.Model {
  /**
   * @example
   * Running
   * 
   * **if can be null:**
   * true
   */
  podStatus?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      podStatus: 'PodStatus',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      podStatus: 'string',
      resourceGroupID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequestResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  requestCPU?: number;
  /**
   * @example
   * 8
   */
  requestGPU?: number;
  requestGPUInfos?: GPUInfo[];
  /**
   * @example
   * 2
   */
  requestMemory?: number;
  static names(): { [key: string]: string } {
    return {
      requestCPU: 'requestCPU',
      requestGPU: 'requestGPU',
      requestGPUInfos: 'requestGPUInfos',
      requestMemory: 'requestMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestCPU: 'number',
      requestGPU: 'number',
      requestGPUInfos: { 'type': 'array', 'itemType': GPUInfo },
      requestMemory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.requestGPUInfos)) {
      $dara.Model.validateArray(this.requestGPUInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupRequestResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceGroupRequestResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceGroupRequestResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupTotalRequest extends $dara.Model {
  /**
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupTotalResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  totalCPU?: number;
  /**
   * @example
   * 24
   */
  totalGPU?: number;
  totalGPUInfos?: GPUInfo[];
  /**
   * @example
   * 300
   */
  totalMemory?: number;
  static names(): { [key: string]: string } {
    return {
      totalCPU: 'totalCPU',
      totalGPU: 'totalGPU',
      totalGPUInfos: 'totalGPUInfos',
      totalMemory: 'totalMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCPU: 'number',
      totalGPU: 'number',
      totalGPUInfos: { 'type': 'array', 'itemType': GPUInfo },
      totalMemory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.totalGPUInfos)) {
      $dara.Model.validateArray(this.totalGPUInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceGroupTotalResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceGroupTotalResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceGroupTotalResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpotPriceHistoryRequest extends $dara.Model {
  /**
   * @example
   * 2024-12-30T09:36:46Z
   */
  endTime?: string;
  /**
   * @example
   * asc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * GmtCreatedTime
   */
  sortBy?: string;
  /**
   * @example
   * 0
   */
  spotDuration?: number;
  /**
   * @example
   * 2024-12-26T09:36:46Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      spotDuration: 'SpotDuration',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      spotDuration: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpotPriceHistoryResponseBody extends $dara.Model {
  /**
   * @example
   * 8BDA4440-DD3C-5F4B-BBDD-94A9CE1E75C7
   */
  requestId?: string;
  spotPriceHistory?: SpotPriceItem[];
  /**
   * @example
   * 194
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spotPriceHistory: 'SpotPriceHistory',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spotPriceHistory: { 'type': 'array', 'itemType': SpotPriceItem },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.spotPriceHistory)) {
      $dara.Model.validateArray(this.spotPriceHistory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSpotPriceHistoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSpotPriceHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSpotPriceHistoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenRequest extends $dara.Model {
  /**
   * @example
   * 60
   */
  expireTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * traincclrt205dcs
   */
  trainingJobId?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      trainingJobId: 'TrainingJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      trainingJobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $dara.Model {
  /**
   * @example
   * F2D0392B-D749-5C48-A98A-3FAE5C9444A6
   */
  requestId?: string;
  /**
   * @example
   * ql4OU830nJaF17LP6KTry4a9DvnjIXHP
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
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

export class GetTrainingJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTrainingJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobErrorInfoResponseBody extends $dara.Model {
  errorInfo?: GetTrainingJobErrorInfoResponseBodyErrorInfo;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      errorInfo: 'ErrorInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorInfo: GetTrainingJobErrorInfoResponseBodyErrorInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.errorInfo && typeof (this.errorInfo as any).validate === 'function') {
      (this.errorInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobErrorInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTrainingJobErrorInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTrainingJobErrorInfoResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobLatestMetricsRequest extends $dara.Model {
  /**
   * @example
   * loss
   */
  names?: string;
  static names(): { [key: string]: string } {
    return {
      names: 'Names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      names: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobLatestMetricsResponseBody extends $dara.Model {
  metrics?: GetTrainingJobLatestMetricsResponseBodyMetrics[];
  /**
   * @example
   * 18D5A1C6-14B8-545E-8408-0A7DDB4C6B5E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': GetTrainingJobLatestMetricsResponseBodyMetrics },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobLatestMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTrainingJobLatestMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTrainingJobLatestMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserViewMetricsRequest extends $dara.Model {
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * GmtModified
   */
  sortBy?: string;
  /**
   * @example
   * 1h
   */
  timeStep?: string;
  /**
   * @example
   * 123456
   */
  userId?: string;
  /**
   * @example
   * 86995
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      timeStep: 'TimeStep',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: 'string',
      timeStep: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserViewMetricsResponseBody extends $dara.Model {
  /**
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupId?: string;
  summary?: UserViewMetric;
  /**
   * @example
   * 2
   */
  total?: number;
  userMetrics?: UserViewMetric[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      summary: 'Summary',
      total: 'Total',
      userMetrics: 'UserMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      summary: UserViewMetric,
      total: 'number',
      userMetrics: { 'type': 'array', 'itemType': UserViewMetric },
    };
  }

  validate() {
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    if(Array.isArray(this.userMetrics)) {
      $dara.Model.validateArray(this.userMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserViewMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserViewMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserViewMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmVersionsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmVersionsResponseBody extends $dara.Model {
  algorithmVersions?: ListAlgorithmVersionsResponseBodyAlgorithmVersions[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      algorithmVersions: 'AlgorithmVersions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmVersions: { 'type': 'array', 'itemType': ListAlgorithmVersionsResponseBodyAlgorithmVersions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.algorithmVersions)) {
      $dara.Model.validateArray(this.algorithmVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmVersionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAlgorithmVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAlgorithmVersionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsRequest extends $dara.Model {
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
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsResponseBody extends $dara.Model {
  algorithms?: ListAlgorithmsResponseBodyAlgorithms[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      algorithms: 'Algorithms',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithms: { 'type': 'array', 'itemType': ListAlgorithmsResponseBodyAlgorithms },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.algorithms)) {
      $dara.Model.validateArray(this.algorithms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAlgorithmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAlgorithmsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $dara.Model {
  /**
   * @example
   * CPU
   */
  acceleratorType?: string;
  /**
   * @example
   * quotamtl37ge7gkvdz
   */
  filterByQuotaId?: string;
  /**
   * @example
   * rg69rj0leslwdnbe
   */
  filterByResourceGroupIds?: string;
  /**
   * @example
   * T4
   */
  GPUType?: string;
  machineGroupIds?: string;
  /**
   * @example
   * lingjxxxx
   */
  nodeNames?: string;
  /**
   * @example
   * Ready
   */
  nodeStatuses?: string;
  /**
   * @example
   * ecs.c6.xlarge
   */
  nodeTypes?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * Ready
   */
  orderStatuses?: string;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * quotamtl37ge7gkvdz
   */
  quotaId?: string;
  reasonCodes?: string;
  /**
   * @example
   * rg69rj0leslwdnbe
   */
  resourceGroupIds?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * false
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      filterByQuotaId: 'FilterByQuotaId',
      filterByResourceGroupIds: 'FilterByResourceGroupIds',
      GPUType: 'GPUType',
      machineGroupIds: 'MachineGroupIds',
      nodeNames: 'NodeNames',
      nodeStatuses: 'NodeStatuses',
      nodeTypes: 'NodeTypes',
      order: 'Order',
      orderStatuses: 'OrderStatuses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      quotaId: 'QuotaId',
      reasonCodes: 'ReasonCodes',
      resourceGroupIds: 'ResourceGroupIds',
      sortBy: 'SortBy',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      filterByQuotaId: 'string',
      filterByResourceGroupIds: 'string',
      GPUType: 'string',
      machineGroupIds: 'string',
      nodeNames: 'string',
      nodeStatuses: 'string',
      nodeTypes: 'string',
      order: 'string',
      orderStatuses: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      quotaId: 'string',
      reasonCodes: 'string',
      resourceGroupIds: 'string',
      sortBy: 'string',
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $dara.Model {
  nodes?: Node[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': Node },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaWorkloadsRequest extends $dara.Model {
  /**
   * @example
   * dsw65443322
   */
  beforeWorkloadId?: string;
  gmtDequeuedTimeRange?: TimeRangeFilter;
  gmtEnqueuedTimeRange?: TimeRangeFilter;
  gmtPositionModifiedTimeRange?: TimeRangeFilter;
  /**
   * @example
   * lrn48278127617
   */
  nodeName?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  showOwn?: boolean;
  /**
   * @example
   * GmtCreatedTime
   */
  sortBy?: string;
  /**
   * @example
   * Enqueued
   */
  status?: string;
  /**
   * @example
   * quota12344666,quota64432233
   */
  subQuotaIds?: string;
  /**
   * @example
   * 29043893812,23829093093
   */
  userIds?: string;
  withHistoricalData?: boolean;
  workloadCreatedTimeRange?: TimeRangeFilter;
  /**
   * @example
   * dlc12344556
   */
  workloadIds?: string;
  /**
   * @example
   * Pending
   */
  workloadStatuses?: string;
  /**
   * @example
   * dlc
   */
  workloadType?: string;
  /**
   * @example
   * 186692
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      beforeWorkloadId: 'BeforeWorkloadId',
      gmtDequeuedTimeRange: 'GmtDequeuedTimeRange',
      gmtEnqueuedTimeRange: 'GmtEnqueuedTimeRange',
      gmtPositionModifiedTimeRange: 'GmtPositionModifiedTimeRange',
      nodeName: 'NodeName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      showOwn: 'ShowOwn',
      sortBy: 'SortBy',
      status: 'Status',
      subQuotaIds: 'SubQuotaIds',
      userIds: 'UserIds',
      withHistoricalData: 'WithHistoricalData',
      workloadCreatedTimeRange: 'WorkloadCreatedTimeRange',
      workloadIds: 'WorkloadIds',
      workloadStatuses: 'WorkloadStatuses',
      workloadType: 'WorkloadType',
      workspaceIds: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeWorkloadId: 'string',
      gmtDequeuedTimeRange: TimeRangeFilter,
      gmtEnqueuedTimeRange: TimeRangeFilter,
      gmtPositionModifiedTimeRange: TimeRangeFilter,
      nodeName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      showOwn: 'boolean',
      sortBy: 'string',
      status: 'string',
      subQuotaIds: 'string',
      userIds: 'string',
      withHistoricalData: 'boolean',
      workloadCreatedTimeRange: TimeRangeFilter,
      workloadIds: 'string',
      workloadStatuses: 'string',
      workloadType: 'string',
      workspaceIds: 'string',
    };
  }

  validate() {
    if(this.gmtDequeuedTimeRange && typeof (this.gmtDequeuedTimeRange as any).validate === 'function') {
      (this.gmtDequeuedTimeRange as any).validate();
    }
    if(this.gmtEnqueuedTimeRange && typeof (this.gmtEnqueuedTimeRange as any).validate === 'function') {
      (this.gmtEnqueuedTimeRange as any).validate();
    }
    if(this.gmtPositionModifiedTimeRange && typeof (this.gmtPositionModifiedTimeRange as any).validate === 'function') {
      (this.gmtPositionModifiedTimeRange as any).validate();
    }
    if(this.workloadCreatedTimeRange && typeof (this.workloadCreatedTimeRange as any).validate === 'function') {
      (this.workloadCreatedTimeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaWorkloadsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 42F23B58-3684-5443-848A-8DA81FF99712
   */
  requestId?: string;
  /**
   * @example
   * 23
   */
  totalCount?: number;
  workloads?: QueueInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workloads: 'Workloads',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      workloads: { 'type': 'array', 'itemType': QueueInfo },
    };
  }

  validate() {
    if(Array.isArray(this.workloads)) {
      $dara.Model.validateArray(this.workloads);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaWorkloadsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuotaWorkloadsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQuotaWorkloadsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasRequest extends $dara.Model {
  /**
   * @example
   * official=true,gpu=false
   */
  labels?: string;
  layoutMode?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * quotajradxh43rgb
   */
  parentQuotaId?: string;
  /**
   * @example
   * quota1ci8g793pgm,quotajradxh43rgb
   */
  quotaIds?: string;
  /**
   * @example
   * quotajradxh43rgb
   */
  quotaName?: string;
  /**
   * @example
   * ECS
   */
  resourceType?: string;
  /**
   * @example
   * status
   */
  sortBy?: string;
  /**
   * @example
   * Creating
   */
  statuses?: string;
  verbose?: boolean;
  /**
   * @example
   * 21345,38727
   */
  workspaceIds?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      layoutMode: 'LayoutMode',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentQuotaId: 'ParentQuotaId',
      quotaIds: 'QuotaIds',
      quotaName: 'QuotaName',
      resourceType: 'ResourceType',
      sortBy: 'SortBy',
      statuses: 'Statuses',
      verbose: 'Verbose',
      workspaceIds: 'WorkspaceIds',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      layoutMode: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentQuotaId: 'string',
      quotaIds: 'string',
      quotaName: 'string',
      resourceType: 'string',
      sortBy: 'string',
      statuses: 'string',
      verbose: 'boolean',
      workspaceIds: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBody extends $dara.Model {
  quotas?: Quota[];
  /**
   * @example
   * F082BD0D-21E1-5F9B-81A0-AB07485B03CD
   */
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      quotas: 'Quotas',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotas: { 'type': 'array', 'itemType': Quota },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuotasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQuotasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupMachineGroupsRequest extends $dara.Model {
  /**
   * @example
   * 1612285282502326
   */
  creatorID?: string;
  /**
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  machineGroupIDs?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 236553689400333
   */
  orderInstanceId?: string;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  paymentDuration?: string;
  /**
   * @example
   * Month
   */
  paymentDurationUnit?: string;
  /**
   * @example
   * PREPAY
   */
  paymentType?: string;
  /**
   * @example
   * GmtCreatedTime
   */
  sortBy?: string;
  /**
   * @example
   * Ready
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creatorID: 'CreatorID',
      ecsSpec: 'EcsSpec',
      machineGroupIDs: 'MachineGroupIDs',
      name: 'Name',
      order: 'Order',
      orderInstanceId: 'OrderInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorID: 'string',
      ecsSpec: 'string',
      machineGroupIDs: 'string',
      name: 'string',
      order: 'string',
      orderInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      paymentDuration: 'string',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      sortBy: 'string',
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

export class ListResourceGroupMachineGroupsResponseBody extends $dara.Model {
  machineGroups?: MachineGroup[];
  /**
   * @example
   * E7C42CC7-2E85-508A-84F4-923B605FD10F
   */
  requestId?: string;
  /**
   * @example
   * 4
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      machineGroups: 'MachineGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      machineGroups: { 'type': 'array', 'itemType': MachineGroup },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.machineGroups)) {
      $dara.Model.validateArray(this.machineGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupMachineGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceGroupMachineGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceGroupMachineGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsRequest extends $dara.Model {
  /**
   * @example
   * Ecs
   */
  computingResourceProvider?: string;
  /**
   * @example
   * rgf0zhfqn1d4ity2
   */
  name?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * Lingjun
   */
  resourceType?: string;
  /**
   * @example
   * false
   */
  showAll?: boolean;
  /**
   * @example
   * DisplayName
   */
  sortBy?: string;
  /**
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      computingResourceProvider: 'ComputingResourceProvider',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      showAll: 'ShowAll',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingResourceProvider: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
      showAll: 'boolean',
      sortBy: 'string',
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

export class ListResourceGroupsResponseBody extends $dara.Model {
  /**
   * @example
   * 9CFA2665-1FFE-5929-8468-C14C25890486
   */
  requestId?: string;
  /**
   * @example
   * RG1
   */
  resourceGroups?: ResourceGroup[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroups: 'ResourceGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroups: { 'type': 'array', 'itemType': ResourceGroup },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroups)) {
      $dara.Model.validateArray(this.resourceGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobEventsRequest extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobEventsResponseBody extends $dara.Model {
  events?: string[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 23
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobEventsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrainingJobEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrainingJobEventsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobInstanceEventsRequest extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobInstanceEventsResponseBody extends $dara.Model {
  events?: string[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobInstanceEventsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrainingJobInstanceEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrainingJobInstanceEventsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobInstanceMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * trains930928remn-master-0
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GpuCoreUsage
   */
  metricType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 10s
   */
  timeStep?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      metricType: 'MetricType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      metricType: 'string',
      startTime: 'string',
      timeStep: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobInstanceMetricsResponseBody extends $dara.Model {
  instanceMetrics?: ListTrainingJobInstanceMetricsResponseBodyInstanceMetrics[];
  /**
   * @example
   * F082BD0D-21E1-5F9B-81A0-AB07485B03CD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceMetrics: 'InstanceMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMetrics: { 'type': 'array', 'itemType': ListTrainingJobInstanceMetricsResponseBodyInstanceMetrics },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceMetrics)) {
      $dara.Model.validateArray(this.instanceMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobInstanceMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrainingJobInstanceMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrainingJobInstanceMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobLogsRequest extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * train129f212o89d-master-0
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * train129f212o89d-master-0
   */
  workerId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      workerId: 'WorkerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      workerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobLogsResponseBody extends $dara.Model {
  logs?: string[];
  /**
   * @example
   * CBF05F13-B24C-5129-9048-4FA684DCD579
   */
  requestId?: string;
  /**
   * @example
   * 23
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrainingJobLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrainingJobLogsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * accuracy
   */
  name?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2020-11-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobMetricsResponseBody extends $dara.Model {
  metrics?: ListTrainingJobMetricsResponseBodyMetrics[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': ListTrainingJobMetricsResponseBodyMetrics },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrainingJobMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrainingJobMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobOutputModelsResponseBody extends $dara.Model {
  outputModels?: ListTrainingJobOutputModelsResponseBodyOutputModels[];
  static names(): { [key: string]: string } {
    return {
      outputModels: 'OutputModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputModels: { 'type': 'array', 'itemType': ListTrainingJobOutputModelsResponseBodyOutputModels },
    };
  }

  validate() {
    if(Array.isArray(this.outputModels)) {
      $dara.Model.validateArray(this.outputModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobOutputModelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrainingJobOutputModelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrainingJobOutputModelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsRequest extends $dara.Model {
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
   * 2023-12-27T02:10:00Z
   */
  endTime?: string;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  isTempAlgo?: boolean;
  /**
   * @example
   * {"project": "sd-s3"}
   */
  labels?: { [key: string]: any };
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * GmtModifiedTime
   */
  sortBy?: string;
  /**
   * @example
   * 2024-06-22T01:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * trains930928remn
   */
  trainingJobId?: string;
  /**
   * @example
   * large_language_model_training
   */
  trainingJobName?: string;
  /**
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      endTime: 'EndTime',
      isTempAlgo: 'IsTempAlgo',
      labels: 'Labels',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      trainingJobId: 'TrainingJobId',
      trainingJobName: 'TrainingJobName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      endTime: 'string',
      isTempAlgo: 'boolean',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      trainingJobId: 'string',
      trainingJobName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsShrinkRequest extends $dara.Model {
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
   * 2023-12-27T02:10:00Z
   */
  endTime?: string;
  /**
   * @example
   * false
   * 
   * **if can be null:**
   * true
   */
  isTempAlgo?: boolean;
  /**
   * @example
   * {"project": "sd-s3"}
   */
  labelsShrink?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * GmtModifiedTime
   */
  sortBy?: string;
  /**
   * @example
   * 2024-06-22T01:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * trains930928remn
   */
  trainingJobId?: string;
  /**
   * @example
   * large_language_model_training
   */
  trainingJobName?: string;
  /**
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      endTime: 'EndTime',
      isTempAlgo: 'IsTempAlgo',
      labelsShrink: 'Labels',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      trainingJobId: 'TrainingJobId',
      trainingJobName: 'TrainingJobName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      endTime: 'string',
      isTempAlgo: 'boolean',
      labelsShrink: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      trainingJobId: 'string',
      trainingJobName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
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

export class ListTrainingJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTrainingJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTrainingJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleQuotaRequest extends $dara.Model {
  min?: ResourceSpec;
  resourceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      min: 'Min',
      resourceGroupIds: 'ResourceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      min: ResourceSpec,
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.min && typeof (this.min as any).validate === 'function') {
      (this.min as any).validate();
    }
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Quota Id
   * 
   * @example
   * quotamtl37ge7gkvdz
   */
  quotaId?: string;
  /**
   * @example
   * F2D0392B-D749-5C48-A98A-3FAE5C9444A6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScaleQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ScaleQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ScaleQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrainingJobResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTrainingJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopTrainingJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmRequest extends $dara.Model {
  algorithmDescription?: string;
  /**
   * @example
   * LLM Train
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDescription: 'AlgorithmDescription',
      displayName: 'DisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDescription: 'string',
      displayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmResponseBody extends $dara.Model {
  /**
   * @example
   * algo-sidjc8134hv
   */
  algorithmId?: string;
  /**
   * @example
   * E7C42CC7-2E85-508A-84F4-923B605FD10F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAlgorithmResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmVersionRequest extends $dara.Model {
  algorithmSpec?: AlgorithmSpec;
  static names(): { [key: string]: string } {
    return {
      algorithmSpec: 'AlgorithmSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmSpec: AlgorithmSpec,
    };
  }

  validate() {
    if(this.algorithmSpec && typeof (this.algorithmSpec as any).validate === 'function') {
      (this.algorithmSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmVersionShrinkRequest extends $dara.Model {
  algorithmSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmSpecShrink: 'AlgorithmSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmVersionResponseBody extends $dara.Model {
  /**
   * @example
   * algo-sidjc8134hv
   */
  algorithmId?: string;
  /**
   * @example
   * v0.1.0
   */
  algorithmVersion?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmVersion: 'AlgorithmVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlgorithmVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAlgorithmVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAlgorithmVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaRequest extends $dara.Model {
  /**
   * @example
   * this is a test quota
   */
  description?: string;
  labels?: Label[];
  queueStrategy?: string;
  /**
   * **if can be null:**
   * true
   */
  quotaConfig?: QuotaConfig;
  quotaName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      labels: 'Labels',
      queueStrategy: 'QueueStrategy',
      quotaConfig: 'QuotaConfig',
      quotaName: 'QuotaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      queueStrategy: 'string',
      quotaConfig: QuotaConfig,
      quotaName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.quotaConfig && typeof (this.quotaConfig as any).validate === 'function') {
      (this.quotaConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaResponseBody extends $dara.Model {
  /**
   * @remarks
   * Quota Id
   * 
   * @example
   * quota-20210126170216-mtl37ge7gkvdz
   */
  quotaId?: string;
  /**
   * @example
   * 96496E6E-00B4-5F55-80F6-1844FA9E92DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateQuotaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupRequest extends $dara.Model {
  /**
   * @example
   * test_new_havpn_tf
   */
  description?: string;
  /**
   * @example
   * prophet
   */
  name?: string;
  /**
   * @example
   * true
   */
  unbind?: boolean;
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unbind: 'Unbind',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unbind: 'boolean',
      userVpc: UserVpc,
    };
  }

  validate() {
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponseBody extends $dara.Model {
  /**
   * @example
   * rgf0zhfqn1d4ity2
   */
  resourceGroupID?: string;
  /**
   * @example
   * FFB1D4B4-B253-540A-9B3B-AA711C48A1B7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupID: 'ResourceGroupID',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupID: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrainingJobLabelsRequest extends $dara.Model {
  labels?: UpdateTrainingJobLabelsRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': UpdateTrainingJobLabelsRequestLabels },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrainingJobLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * F082BD0D-21E1-5F9B-81A0-AB07485B03CD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTrainingJobLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateTrainingJobLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTrainingJobLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-beijing': "pai.cn-beijing.aliyuncs.com",
      'cn-hangzhou': "pai.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "pai.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "pai.cn-shenzhen.aliyuncs.com",
      'cn-hongkong': "pai.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "pai.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "pai.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "pai.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "pai.ap-southeast-5.aliyuncs.com",
      'us-west-1': "pai.us-west-1.aliyuncs.com",
      'us-east-1': "pai.us-east-1.aliyuncs.com",
      'eu-central-1': "pai.eu-central-1.aliyuncs.com",
      'me-east-1': "pai.me-east-1.aliyuncs.com",
      'ap-south-1': "pai.ap-south-1.aliyuncs.com",
      'cn-qingdao': "pai.cn-qingdao.aliyuncs.com",
      'cn-zhangjiakou': "pai.cn-zhangjiakou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("paistudio", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 检查WebTerminal
   * 
   * @param request - CheckInstanceWebTerminalRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CheckInstanceWebTerminalResponse
   */
  async checkInstanceWebTerminalWithOptions(TrainingJobId: string, InstanceId: string, request: CheckInstanceWebTerminalRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CheckInstanceWebTerminalResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkInfo)) {
      body["CheckInfo"] = request.checkInfo;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CheckInstanceWebTerminal",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/instances/${$dara.URL.percentEncode(InstanceId)}/webterminals/action/check`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CheckInstanceWebTerminalResponse>(await this.callApi(params, req, runtime), new CheckInstanceWebTerminalResponse({}));
  }

  /**
   * 检查WebTerminal
   * 
   * @param request - CheckInstanceWebTerminalRequest
   * @returns CheckInstanceWebTerminalResponse
   */
  async checkInstanceWebTerminal(TrainingJobId: string, InstanceId: string, request: CheckInstanceWebTerminalRequest): Promise<CheckInstanceWebTerminalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.checkInstanceWebTerminalWithOptions(TrainingJobId, InstanceId, request, headers, runtime);
  }

  /**
   * 创建新的算法
   * 
   * @param request - CreateAlgorithmRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlgorithmResponse
   */
  async createAlgorithmWithOptions(request: CreateAlgorithmRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAlgorithmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmDescription)) {
      body["AlgorithmDescription"] = request.algorithmDescription;
    }

    if (!$dara.isNull(request.algorithmName)) {
      body["AlgorithmName"] = request.algorithmName;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateAlgorithmResponse>(await this.callApi(params, req, runtime), new CreateAlgorithmResponse({}));
  }

  /**
   * 创建新的算法
   * 
   * @param request - CreateAlgorithmRequest
   * @returns CreateAlgorithmResponse
   */
  async createAlgorithm(request: CreateAlgorithmRequest): Promise<CreateAlgorithmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAlgorithmWithOptions(request, headers, runtime);
  }

  /**
   * 创建一个新的算法版本
   * 
   * @param tmpReq - CreateAlgorithmVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAlgorithmVersionResponse
   */
  async createAlgorithmVersionWithOptions(AlgorithmId: string, AlgorithmVersion: string, tmpReq: CreateAlgorithmVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAlgorithmVersionResponse> {
    tmpReq.validate();
    let request = new CreateAlgorithmVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.algorithmSpec)) {
      request.algorithmSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.algorithmSpec, "AlgorithmSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmSpecShrink)) {
      body["AlgorithmSpec"] = request.algorithmSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlgorithmVersion",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}/versions/${$dara.URL.percentEncode(AlgorithmVersion)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<CreateAlgorithmVersionResponse>(await this.callApi(params, req, runtime), new CreateAlgorithmVersionResponse({}));
  }

  /**
   * 创建一个新的算法版本
   * 
   * @param request - CreateAlgorithmVersionRequest
   * @returns CreateAlgorithmVersionResponse
   */
  async createAlgorithmVersion(AlgorithmId: string, AlgorithmVersion: string, request: CreateAlgorithmVersionRequest): Promise<CreateAlgorithmVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAlgorithmVersionWithOptions(AlgorithmId, AlgorithmVersion, request, headers, runtime);
  }

  /**
   * 创建WebTerminal
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateInstanceWebTerminalResponse
   */
  async createInstanceWebTerminalWithOptions(TrainingJobId: string, InstanceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateInstanceWebTerminalResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateInstanceWebTerminal",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/instances/${$dara.URL.percentEncode(InstanceId)}/webterminals`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateInstanceWebTerminalResponse>(await this.callApi(params, req, runtime), new CreateInstanceWebTerminalResponse({}));
  }

  /**
   * 创建WebTerminal
   * @returns CreateInstanceWebTerminalResponse
   */
  async createInstanceWebTerminal(TrainingJobId: string, InstanceId: string): Promise<CreateInstanceWebTerminalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWebTerminalWithOptions(TrainingJobId, InstanceId, headers, runtime);
  }

  /**
   * 创建Quota
   * 
   * @param request - CreateQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQuotaResponse
   */
  async createQuotaWithOptions(request: CreateQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allocateStrategy)) {
      body["AllocateStrategy"] = request.allocateStrategy;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.min)) {
      body["Min"] = request.min;
    }

    if (!$dara.isNull(request.parentQuotaId)) {
      body["ParentQuotaId"] = request.parentQuotaId;
    }

    if (!$dara.isNull(request.queueStrategy)) {
      body["QueueStrategy"] = request.queueStrategy;
    }

    if (!$dara.isNull(request.quotaConfig)) {
      body["QuotaConfig"] = request.quotaConfig;
    }

    if (!$dara.isNull(request.quotaName)) {
      body["QuotaName"] = request.quotaName;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      body["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateQuotaResponse>(await this.callApi(params, req, runtime), new CreateQuotaResponse({}));
  }

  /**
   * 创建Quota
   * 
   * @param request - CreateQuotaRequest
   * @returns CreateQuotaResponse
   */
  async createQuota(request: CreateQuotaRequest): Promise<CreateQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQuotaWithOptions(request, headers, runtime);
  }

  /**
   * 创建资源组
   * 
   * @param request - CreateResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroupWithOptions(request: CreateResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.computingResourceProvider)) {
      body["ComputingResourceProvider"] = request.computingResourceProvider;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateResourceGroupResponse>(await this.callApi(params, req, runtime), new CreateResourceGroupResponse({}));
  }

  /**
   * 创建资源组
   * 
   * @param request - CreateResourceGroupRequest
   * @returns CreateResourceGroupResponse
   */
  async createResourceGroup(request: CreateResourceGroupRequest): Promise<CreateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 创建TrainingJob
   * 
   * @param request - CreateTrainingJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTrainingJobResponse
   */
  async createTrainingJobWithOptions(request: CreateTrainingJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTrainingJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmName)) {
      body["AlgorithmName"] = request.algorithmName;
    }

    if (!$dara.isNull(request.algorithmProvider)) {
      body["AlgorithmProvider"] = request.algorithmProvider;
    }

    if (!$dara.isNull(request.algorithmSpec)) {
      body["AlgorithmSpec"] = request.algorithmSpec;
    }

    if (!$dara.isNull(request.algorithmVersion)) {
      body["AlgorithmVersion"] = request.algorithmVersion;
    }

    if (!$dara.isNull(request.codeDir)) {
      body["CodeDir"] = request.codeDir;
    }

    if (!$dara.isNull(request.computeResource)) {
      body["ComputeResource"] = request.computeResource;
    }

    if (!$dara.isNull(request.environments)) {
      body["Environments"] = request.environments;
    }

    if (!$dara.isNull(request.experimentConfig)) {
      body["ExperimentConfig"] = request.experimentConfig;
    }

    if (!$dara.isNull(request.hyperParameters)) {
      body["HyperParameters"] = request.hyperParameters;
    }

    if (!$dara.isNull(request.inputChannels)) {
      body["InputChannels"] = request.inputChannels;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.outputChannels)) {
      body["OutputChannels"] = request.outputChannels;
    }

    if (!$dara.isNull(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!$dara.isNull(request.pythonRequirements)) {
      body["PythonRequirements"] = request.pythonRequirements;
    }

    if (!$dara.isNull(request.roleArn)) {
      body["RoleArn"] = request.roleArn;
    }

    if (!$dara.isNull(request.scheduler)) {
      body["Scheduler"] = request.scheduler;
    }

    if (!$dara.isNull(request.settings)) {
      body["Settings"] = request.settings;
    }

    if (!$dara.isNull(request.trainingJobDescription)) {
      body["TrainingJobDescription"] = request.trainingJobDescription;
    }

    if (!$dara.isNull(request.trainingJobName)) {
      body["TrainingJobName"] = request.trainingJobName;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateTrainingJobResponse>(await this.callApi(params, req, runtime), new CreateTrainingJobResponse({}));
  }

  /**
   * 创建TrainingJob
   * 
   * @param request - CreateTrainingJobRequest
   * @returns CreateTrainingJobResponse
   */
  async createTrainingJob(request: CreateTrainingJobRequest): Promise<CreateTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrainingJobWithOptions(request, headers, runtime);
  }

  /**
   * 删除算法
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlgorithmResponse
   */
  async deleteAlgorithmWithOptions(AlgorithmId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteAlgorithmResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteAlgorithmResponse>(await this.callApi(params, req, runtime), new DeleteAlgorithmResponse({}));
  }

  /**
   * 删除算法
   * @returns DeleteAlgorithmResponse
   */
  async deleteAlgorithm(AlgorithmId: string): Promise<DeleteAlgorithmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlgorithmWithOptions(AlgorithmId, headers, runtime);
  }

  /**
   * 删除算法版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAlgorithmVersionResponse
   */
  async deleteAlgorithmVersionWithOptions(AlgorithmId: string, AlgorithmVersion: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteAlgorithmVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlgorithmVersion",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}/versions/${$dara.URL.percentEncode(AlgorithmVersion)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteAlgorithmVersionResponse>(await this.callApi(params, req, runtime), new DeleteAlgorithmVersionResponse({}));
  }

  /**
   * 删除算法版本
   * @returns DeleteAlgorithmVersionResponse
   */
  async deleteAlgorithmVersion(AlgorithmId: string, AlgorithmVersion: string): Promise<DeleteAlgorithmVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlgorithmVersionWithOptions(AlgorithmId, AlgorithmVersion, headers, runtime);
  }

  /**
   * delete machine group
   * 
   * @deprecated OpenAPI DeleteMachineGroup is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMachineGroupResponse
   */
  // Deprecated
  async deleteMachineGroupWithOptions(MachineGroupID: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteMachineGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMachineGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/machinegroups/${$dara.URL.percentEncode(MachineGroupID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteMachineGroupResponse>(await this.callApi(params, req, runtime), new DeleteMachineGroupResponse({}));
  }

  /**
   * delete machine group
   * 
   * @deprecated OpenAPI DeleteMachineGroup is deprecated
   * @returns DeleteMachineGroupResponse
   */
  // Deprecated
  async deleteMachineGroup(MachineGroupID: string): Promise<DeleteMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMachineGroupWithOptions(MachineGroupID, headers, runtime);
  }

  /**
   * 删除Quota
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQuotaResponse
   */
  async deleteQuotaWithOptions(QuotaId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteQuotaResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(QuotaId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteQuotaResponse>(await this.callApi(params, req, runtime), new DeleteQuotaResponse({}));
  }

  /**
   * 删除Quota
   * @returns DeleteQuotaResponse
   */
  async deleteQuota(QuotaId: string): Promise<DeleteQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteQuotaWithOptions(QuotaId, headers, runtime);
  }

  /**
   * 删除资源组
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroupWithOptions(ResourceGroupID: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteResourceGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteResourceGroupResponse>(await this.callApi(params, req, runtime), new DeleteResourceGroupResponse({}));
  }

  /**
   * 删除资源组
   * @returns DeleteResourceGroupResponse
   */
  async deleteResourceGroup(ResourceGroupID: string): Promise<DeleteResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceGroupWithOptions(ResourceGroupID, headers, runtime);
  }

  /**
   * delete machine group
   * 
   * @deprecated OpenAPI DeleteResourceGroupMachineGroup is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceGroupMachineGroupResponse
   */
  // Deprecated
  async deleteResourceGroupMachineGroupWithOptions(MachineGroupID: string, ResourceGroupID: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteResourceGroupMachineGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceGroupMachineGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}/machinegroups/${$dara.URL.percentEncode(MachineGroupID)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteResourceGroupMachineGroupResponse>(await this.callApi(params, req, runtime), new DeleteResourceGroupMachineGroupResponse({}));
  }

  /**
   * delete machine group
   * 
   * @deprecated OpenAPI DeleteResourceGroupMachineGroup is deprecated
   * @returns DeleteResourceGroupMachineGroupResponse
   */
  // Deprecated
  async deleteResourceGroupMachineGroup(MachineGroupID: string, ResourceGroupID: string): Promise<DeleteResourceGroupMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceGroupMachineGroupWithOptions(MachineGroupID, ResourceGroupID, headers, runtime);
  }

  /**
   * 删除一个TrainingJob
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrainingJobResponse
   */
  async deleteTrainingJobWithOptions(TrainingJobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteTrainingJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteTrainingJobResponse>(await this.callApi(params, req, runtime), new DeleteTrainingJobResponse({}));
  }

  /**
   * 删除一个TrainingJob
   * @returns DeleteTrainingJobResponse
   */
  async deleteTrainingJob(TrainingJobId: string): Promise<DeleteTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTrainingJobWithOptions(TrainingJobId, headers, runtime);
  }

  /**
   * 删除TrainingJob的Labels
   * 
   * @param request - DeleteTrainingJobLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTrainingJobLabelsResponse
   */
  async deleteTrainingJobLabelsWithOptions(TrainingJobId: string, request: DeleteTrainingJobLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteTrainingJobLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keys)) {
      query["Keys"] = request.keys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrainingJobLabels",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteTrainingJobLabelsResponse>(await this.callApi(params, req, runtime), new DeleteTrainingJobLabelsResponse({}));
  }

  /**
   * 删除TrainingJob的Labels
   * 
   * @param request - DeleteTrainingJobLabelsRequest
   * @returns DeleteTrainingJobLabelsResponse
   */
  async deleteTrainingJobLabels(TrainingJobId: string, request: DeleteTrainingJobLabelsRequest): Promise<DeleteTrainingJobLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTrainingJobLabelsWithOptions(TrainingJobId, request, headers, runtime);
  }

  /**
   * 获取一个算法信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlgorithmResponse
   */
  async getAlgorithmWithOptions(AlgorithmId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAlgorithmResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetAlgorithmResponse>(await this.callApi(params, req, runtime), new GetAlgorithmResponse({}));
  }

  /**
   * 获取一个算法信息
   * @returns GetAlgorithmResponse
   */
  async getAlgorithm(AlgorithmId: string): Promise<GetAlgorithmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgorithmWithOptions(AlgorithmId, headers, runtime);
  }

  /**
   * 创建一个新的算法版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAlgorithmVersionResponse
   */
  async getAlgorithmVersionWithOptions(AlgorithmId: string, AlgorithmVersion: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAlgorithmVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlgorithmVersion",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}/versions/${$dara.URL.percentEncode(AlgorithmVersion)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetAlgorithmVersionResponse>(await this.callApi(params, req, runtime), new GetAlgorithmVersionResponse({}));
  }

  /**
   * 创建一个新的算法版本
   * @returns GetAlgorithmVersionResponse
   */
  async getAlgorithmVersion(AlgorithmId: string, AlgorithmVersion: string): Promise<GetAlgorithmVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgorithmVersionWithOptions(AlgorithmId, AlgorithmVersion, headers, runtime);
  }

  /**
   * get machine group
   * 
   * @deprecated OpenAPI GetMachineGroup is deprecated
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMachineGroupResponse
   */
  // Deprecated
  async getMachineGroupWithOptions(MachineGroupID: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMachineGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMachineGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/machinegroups/${$dara.URL.percentEncode(MachineGroupID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetMachineGroupResponse>(await this.callApi(params, req, runtime), new GetMachineGroupResponse({}));
  }

  /**
   * get machine group
   * 
   * @deprecated OpenAPI GetMachineGroup is deprecated
   * @returns GetMachineGroupResponse
   */
  // Deprecated
  async getMachineGroup(MachineGroupID: string): Promise<GetMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMachineGroupWithOptions(MachineGroupID, headers, runtime);
  }

  /**
   * get resource group node metrics
   * 
   * @deprecated OpenAPI GetNodeMetrics is deprecated
   * 
   * @param request - GetNodeMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeMetricsResponse
   */
  // Deprecated
  async getNodeMetricsWithOptions(ResourceGroupID: string, MetricType: string, request: GetNodeMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetNodeMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.GPUType)) {
      query["GPUType"] = request.GPUType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNodeMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}/nodemetrics/${$dara.URL.percentEncode(MetricType)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetNodeMetricsResponse>(await this.callApi(params, req, runtime), new GetNodeMetricsResponse({}));
  }

  /**
   * get resource group node metrics
   * 
   * @deprecated OpenAPI GetNodeMetrics is deprecated
   * 
   * @param request - GetNodeMetricsRequest
   * @returns GetNodeMetricsResponse
   */
  // Deprecated
  async getNodeMetrics(ResourceGroupID: string, MetricType: string, request: GetNodeMetricsRequest): Promise<GetNodeMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeMetricsWithOptions(ResourceGroupID, MetricType, request, headers, runtime);
  }

  /**
   * 获取Quota
   * 
   * @param request - GetQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQuotaResponse
   */
  async getQuotaWithOptions(QuotaId: string, request: GetQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetQuotaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(QuotaId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetQuotaResponse>(await this.callApi(params, req, runtime), new GetQuotaResponse({}));
  }

  /**
   * 获取Quota
   * 
   * @param request - GetQuotaRequest
   * @returns GetQuotaResponse
   */
  async getQuota(QuotaId: string, request: GetQuotaRequest): Promise<GetQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaWithOptions(QuotaId, request, headers, runtime);
  }

  /**
   * get resource group by group id
   * 
   * @param tmpReq - GetResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupResponse
   */
  async getResourceGroupWithOptions(ResourceGroupID: string, tmpReq: GetResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetResourceGroupResponse> {
    tmpReq.validate();
    let request = new GetResourceGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isAIWorkspaceDataEnabled)) {
      query["IsAIWorkspaceDataEnabled"] = request.isAIWorkspaceDataEnabled;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetResourceGroupResponse>(await this.callApi(params, req, runtime), new GetResourceGroupResponse({}));
  }

  /**
   * get resource group by group id
   * 
   * @param request - GetResourceGroupRequest
   * @returns GetResourceGroupResponse
   */
  async getResourceGroup(ResourceGroupID: string, request: GetResourceGroupRequest): Promise<GetResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupWithOptions(ResourceGroupID, request, headers, runtime);
  }

  /**
   * get machine group
   * 
   * @param tmpReq - GetResourceGroupMachineGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupMachineGroupResponse
   */
  async getResourceGroupMachineGroupWithOptions(MachineGroupID: string, ResourceGroupID: string, tmpReq: GetResourceGroupMachineGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetResourceGroupMachineGroupResponse> {
    tmpReq.validate();
    let request = new GetResourceGroupMachineGroupShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroupMachineGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}/machinegroups/${$dara.URL.percentEncode(MachineGroupID)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetResourceGroupMachineGroupResponse>(await this.callApi(params, req, runtime), new GetResourceGroupMachineGroupResponse({}));
  }

  /**
   * get machine group
   * 
   * @param request - GetResourceGroupMachineGroupRequest
   * @returns GetResourceGroupMachineGroupResponse
   */
  async getResourceGroupMachineGroup(MachineGroupID: string, ResourceGroupID: string, request: GetResourceGroupMachineGroupRequest): Promise<GetResourceGroupMachineGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupMachineGroupWithOptions(MachineGroupID, ResourceGroupID, request, headers, runtime);
  }

  /**
   * get resource group requested resource by resource group id
   * 
   * @deprecated OpenAPI GetResourceGroupRequest is deprecated
   * 
   * @param request - GetResourceGroupRequestRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupRequestResponse
   */
  // Deprecated
  async getResourceGroupRequestWithOptions(request: GetResourceGroupRequestRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetResourceGroupRequestResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.podStatus)) {
      query["PodStatus"] = request.podStatus;
    }

    if (!$dara.isNull(request.resourceGroupID)) {
      query["ResourceGroupID"] = request.resourceGroupID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroupRequest",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/data/request`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetResourceGroupRequestResponse>(await this.callApi(params, req, runtime), new GetResourceGroupRequestResponse({}));
  }

  /**
   * get resource group requested resource by resource group id
   * 
   * @deprecated OpenAPI GetResourceGroupRequest is deprecated
   * 
   * @param request - GetResourceGroupRequestRequest
   * @returns GetResourceGroupRequestResponse
   */
  // Deprecated
  async getResourceGroupRequest(request: GetResourceGroupRequestRequest): Promise<GetResourceGroupRequestResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupRequestWithOptions(request, headers, runtime);
  }

  /**
   * get resource group total resource by group id
   * 
   * @param request - GetResourceGroupTotalRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceGroupTotalResponse
   */
  async getResourceGroupTotalWithOptions(request: GetResourceGroupTotalRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetResourceGroupTotalResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceGroupID)) {
      query["ResourceGroupID"] = request.resourceGroupID;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResourceGroupTotal",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/data/total`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetResourceGroupTotalResponse>(await this.callApi(params, req, runtime), new GetResourceGroupTotalResponse({}));
  }

  /**
   * get resource group total resource by group id
   * 
   * @param request - GetResourceGroupTotalRequest
   * @returns GetResourceGroupTotalResponse
   */
  async getResourceGroupTotal(request: GetResourceGroupTotalRequest): Promise<GetResourceGroupTotalResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceGroupTotalWithOptions(request, headers, runtime);
  }

  /**
   * 获取抢占式实例历史价格
   * 
   * @param request - GetSpotPriceHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSpotPriceHistoryResponse
   */
  async getSpotPriceHistoryWithOptions(InstanceType: string, request: GetSpotPriceHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetSpotPriceHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.spotDuration)) {
      query["SpotDuration"] = request.spotDuration;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSpotPriceHistory",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/spots/${$dara.URL.percentEncode(InstanceType)}/pricehistory`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetSpotPriceHistoryResponse>(await this.callApi(params, req, runtime), new GetSpotPriceHistoryResponse({}));
  }

  /**
   * 获取抢占式实例历史价格
   * 
   * @param request - GetSpotPriceHistoryRequest
   * @returns GetSpotPriceHistoryResponse
   */
  async getSpotPriceHistory(InstanceType: string, request: GetSpotPriceHistoryRequest): Promise<GetSpotPriceHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSpotPriceHistoryWithOptions(InstanceType, request, headers, runtime);
  }

  /**
   * 调用GetToken获取临时鉴权信息
   * 
   * @param request - GetTokenRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTokenResponse
   */
  async getTokenWithOptions(request: GetTokenRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTokenResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!$dara.isNull(request.trainingJobId)) {
      query["TrainingJobId"] = request.trainingJobId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetToken",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/tokens`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTokenResponse>(await this.callApi(params, req, runtime), new GetTokenResponse({}));
  }

  /**
   * 调用GetToken获取临时鉴权信息
   * 
   * @param request - GetTokenRequest
   * @returns GetTokenResponse
   */
  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  /**
   * 获取TrainingJob的详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrainingJobResponse
   */
  async getTrainingJobWithOptions(TrainingJobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTrainingJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTrainingJobResponse>(await this.callApi(params, req, runtime), new GetTrainingJobResponse({}));
  }

  /**
   * 获取TrainingJob的详情
   * @returns GetTrainingJobResponse
   */
  async getTrainingJob(TrainingJobId: string): Promise<GetTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrainingJobWithOptions(TrainingJobId, headers, runtime);
  }

  /**
   * 获取Training Job的算法错误信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrainingJobErrorInfoResponse
   */
  async getTrainingJobErrorInfoWithOptions(TrainingJobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTrainingJobErrorInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrainingJobErrorInfo",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/errorinfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTrainingJobErrorInfoResponse>(await this.callApi(params, req, runtime), new GetTrainingJobErrorInfoResponse({}));
  }

  /**
   * 获取Training Job的算法错误信息
   * @returns GetTrainingJobErrorInfoResponse
   */
  async getTrainingJobErrorInfo(TrainingJobId: string): Promise<GetTrainingJobErrorInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrainingJobErrorInfoWithOptions(TrainingJobId, headers, runtime);
  }

  /**
   * 获取TrainingJob最近的Metrics
   * 
   * @param request - GetTrainingJobLatestMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTrainingJobLatestMetricsResponse
   */
  async getTrainingJobLatestMetricsWithOptions(TrainingJobId: string, request: GetTrainingJobLatestMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTrainingJobLatestMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.names)) {
      query["Names"] = request.names;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrainingJobLatestMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/latestmetrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetTrainingJobLatestMetricsResponse>(await this.callApi(params, req, runtime), new GetTrainingJobLatestMetricsResponse({}));
  }

  /**
   * 获取TrainingJob最近的Metrics
   * 
   * @param request - GetTrainingJobLatestMetricsRequest
   * @returns GetTrainingJobLatestMetricsResponse
   */
  async getTrainingJobLatestMetrics(TrainingJobId: string, request: GetTrainingJobLatestMetricsRequest): Promise<GetTrainingJobLatestMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrainingJobLatestMetricsWithOptions(TrainingJobId, request, headers, runtime);
  }

  /**
   * get user view  metrics
   * 
   * @deprecated OpenAPI GetUserViewMetrics is deprecated
   * 
   * @param request - GetUserViewMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetUserViewMetricsResponse
   */
  // Deprecated
  async getUserViewMetricsWithOptions(ResourceGroupID: string, request: GetUserViewMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetUserViewMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetUserViewMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}/usermetrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetUserViewMetricsResponse>(await this.callApi(params, req, runtime), new GetUserViewMetricsResponse({}));
  }

  /**
   * get user view  metrics
   * 
   * @deprecated OpenAPI GetUserViewMetrics is deprecated
   * 
   * @param request - GetUserViewMetricsRequest
   * @returns GetUserViewMetricsResponse
   */
  // Deprecated
  async getUserViewMetrics(ResourceGroupID: string, request: GetUserViewMetricsRequest): Promise<GetUserViewMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserViewMetricsWithOptions(ResourceGroupID, request, headers, runtime);
  }

  /**
   * 获取算法的所有版本信息
   * 
   * @param request - ListAlgorithmVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlgorithmVersionsResponse
   */
  async listAlgorithmVersionsWithOptions(AlgorithmId: string, request: ListAlgorithmVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAlgorithmVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlgorithmVersions",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListAlgorithmVersionsResponse>(await this.callApi(params, req, runtime), new ListAlgorithmVersionsResponse({}));
  }

  /**
   * 获取算法的所有版本信息
   * 
   * @param request - ListAlgorithmVersionsRequest
   * @returns ListAlgorithmVersionsResponse
   */
  async listAlgorithmVersions(AlgorithmId: string, request: ListAlgorithmVersionsRequest): Promise<ListAlgorithmVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlgorithmVersionsWithOptions(AlgorithmId, request, headers, runtime);
  }

  /**
   * 获取算法列表
   * 
   * @param request - ListAlgorithmsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAlgorithmsResponse
   */
  async listAlgorithmsWithOptions(request: ListAlgorithmsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAlgorithmsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmId)) {
      query["AlgorithmId"] = request.algorithmId;
    }

    if (!$dara.isNull(request.algorithmName)) {
      query["AlgorithmName"] = request.algorithmName;
    }

    if (!$dara.isNull(request.algorithmProvider)) {
      query["AlgorithmProvider"] = request.algorithmProvider;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAlgorithms",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListAlgorithmsResponse>(await this.callApi(params, req, runtime), new ListAlgorithmsResponse({}));
  }

  /**
   * 获取算法列表
   * 
   * @param request - ListAlgorithmsRequest
   * @returns ListAlgorithmsResponse
   */
  async listAlgorithms(request: ListAlgorithmsRequest): Promise<ListAlgorithmsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlgorithmsWithOptions(request, headers, runtime);
  }

  /**
   * 获取资源节点列表
   * 
   * @param request - ListNodesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(request: ListNodesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListNodesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!$dara.isNull(request.filterByQuotaId)) {
      query["FilterByQuotaId"] = request.filterByQuotaId;
    }

    if (!$dara.isNull(request.filterByResourceGroupIds)) {
      query["FilterByResourceGroupIds"] = request.filterByResourceGroupIds;
    }

    if (!$dara.isNull(request.GPUType)) {
      query["GPUType"] = request.GPUType;
    }

    if (!$dara.isNull(request.machineGroupIds)) {
      query["MachineGroupIds"] = request.machineGroupIds;
    }

    if (!$dara.isNull(request.nodeNames)) {
      query["NodeNames"] = request.nodeNames;
    }

    if (!$dara.isNull(request.nodeStatuses)) {
      query["NodeStatuses"] = request.nodeStatuses;
    }

    if (!$dara.isNull(request.nodeTypes)) {
      query["NodeTypes"] = request.nodeTypes;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderStatuses)) {
      query["OrderStatuses"] = request.orderStatuses;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!$dara.isNull(request.reasonCodes)) {
      query["ReasonCodes"] = request.reasonCodes;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      query["ResourceGroupIds"] = request.resourceGroupIds;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListNodes",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/nodes`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
  }

  /**
   * 获取资源节点列表
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNodesWithOptions(request, headers, runtime);
  }

  /**
   * 您可以通过此API获取Quota上的任务信息列表
   * 
   * @param request - ListQuotaWorkloadsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotaWorkloadsResponse
   */
  async listQuotaWorkloadsWithOptions(QuotaId: string, request: ListQuotaWorkloadsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListQuotaWorkloadsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beforeWorkloadId)) {
      query["BeforeWorkloadId"] = request.beforeWorkloadId;
    }

    if (!$dara.isNull(request.gmtDequeuedTimeRange)) {
      query["GmtDequeuedTimeRange"] = request.gmtDequeuedTimeRange;
    }

    if (!$dara.isNull(request.gmtEnqueuedTimeRange)) {
      query["GmtEnqueuedTimeRange"] = request.gmtEnqueuedTimeRange;
    }

    if (!$dara.isNull(request.gmtPositionModifiedTimeRange)) {
      query["GmtPositionModifiedTimeRange"] = request.gmtPositionModifiedTimeRange;
    }

    if (!$dara.isNull(request.nodeName)) {
      query["NodeName"] = request.nodeName;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.showOwn)) {
      query["ShowOwn"] = request.showOwn;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.subQuotaIds)) {
      query["SubQuotaIds"] = request.subQuotaIds;
    }

    if (!$dara.isNull(request.userIds)) {
      query["UserIds"] = request.userIds;
    }

    if (!$dara.isNull(request.withHistoricalData)) {
      query["WithHistoricalData"] = request.withHistoricalData;
    }

    if (!$dara.isNull(request.workloadCreatedTimeRange)) {
      query["WorkloadCreatedTimeRange"] = request.workloadCreatedTimeRange;
    }

    if (!$dara.isNull(request.workloadIds)) {
      query["WorkloadIds"] = request.workloadIds;
    }

    if (!$dara.isNull(request.workloadStatuses)) {
      query["WorkloadStatuses"] = request.workloadStatuses;
    }

    if (!$dara.isNull(request.workloadType)) {
      query["WorkloadType"] = request.workloadType;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotaWorkloads",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(QuotaId)}/workloads`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListQuotaWorkloadsResponse>(await this.callApi(params, req, runtime), new ListQuotaWorkloadsResponse({}));
  }

  /**
   * 您可以通过此API获取Quota上的任务信息列表
   * 
   * @param request - ListQuotaWorkloadsRequest
   * @returns ListQuotaWorkloadsResponse
   */
  async listQuotaWorkloads(QuotaId: string, request: ListQuotaWorkloadsRequest): Promise<ListQuotaWorkloadsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotaWorkloadsWithOptions(QuotaId, request, headers, runtime);
  }

  /**
   * 获取Quota列表
   * 
   * @param request - ListQuotasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotasResponse
   */
  async listQuotasWithOptions(request: ListQuotasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListQuotasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.layoutMode)) {
      query["LayoutMode"] = request.layoutMode;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentQuotaId)) {
      query["ParentQuotaId"] = request.parentQuotaId;
    }

    if (!$dara.isNull(request.quotaIds)) {
      query["QuotaIds"] = request.quotaIds;
    }

    if (!$dara.isNull(request.quotaName)) {
      query["QuotaName"] = request.quotaName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.statuses)) {
      query["Statuses"] = request.statuses;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotas",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListQuotasResponse>(await this.callApi(params, req, runtime), new ListQuotasResponse({}));
  }

  /**
   * 获取Quota列表
   * 
   * @param request - ListQuotasRequest
   * @returns ListQuotasResponse
   */
  async listQuotas(request: ListQuotasRequest): Promise<ListQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasWithOptions(request, headers, runtime);
  }

  /**
   * list machine groups
   * 
   * @param request - ListResourceGroupMachineGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupMachineGroupsResponse
   */
  async listResourceGroupMachineGroupsWithOptions(ResourceGroupID: string, request: ListResourceGroupMachineGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListResourceGroupMachineGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.creatorID)) {
      query["CreatorID"] = request.creatorID;
    }

    if (!$dara.isNull(request.ecsSpec)) {
      query["EcsSpec"] = request.ecsSpec;
    }

    if (!$dara.isNull(request.machineGroupIDs)) {
      query["MachineGroupIDs"] = request.machineGroupIDs;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderInstanceId)) {
      query["OrderInstanceId"] = request.orderInstanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.paymentDuration)) {
      query["PaymentDuration"] = request.paymentDuration;
    }

    if (!$dara.isNull(request.paymentDurationUnit)) {
      query["PaymentDurationUnit"] = request.paymentDurationUnit;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceGroupMachineGroups",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}/machinegroups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListResourceGroupMachineGroupsResponse>(await this.callApi(params, req, runtime), new ListResourceGroupMachineGroupsResponse({}));
  }

  /**
   * list machine groups
   * 
   * @param request - ListResourceGroupMachineGroupsRequest
   * @returns ListResourceGroupMachineGroupsResponse
   */
  async listResourceGroupMachineGroups(ResourceGroupID: string, request: ListResourceGroupMachineGroupsRequest): Promise<ListResourceGroupMachineGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceGroupMachineGroupsWithOptions(ResourceGroupID, request, headers, runtime);
  }

  /**
   * list resource group
   * 
   * @param request - ListResourceGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroupsWithOptions(request: ListResourceGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListResourceGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.computingResourceProvider)) {
      query["ComputingResourceProvider"] = request.computingResourceProvider;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.showAll)) {
      query["ShowAll"] = request.showAll;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceGroups",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListResourceGroupsResponse>(await this.callApi(params, req, runtime), new ListResourceGroupsResponse({}));
  }

  /**
   * list resource group
   * 
   * @param request - ListResourceGroupsRequest
   * @returns ListResourceGroupsResponse
   */
  async listResourceGroups(request: ListResourceGroupsRequest): Promise<ListResourceGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceGroupsWithOptions(request, headers, runtime);
  }

  /**
   * 获取指定TrainingJob的事件。
   * 
   * @param request - ListTrainingJobEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobEventsResponse
   */
  async listTrainingJobEventsWithOptions(TrainingJobId: string, request: ListTrainingJobEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTrainingJobEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobEvents",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTrainingJobEventsResponse>(await this.callApi(params, req, runtime), new ListTrainingJobEventsResponse({}));
  }

  /**
   * 获取指定TrainingJob的事件。
   * 
   * @param request - ListTrainingJobEventsRequest
   * @returns ListTrainingJobEventsResponse
   */
  async listTrainingJobEvents(TrainingJobId: string, request: ListTrainingJobEventsRequest): Promise<ListTrainingJobEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobEventsWithOptions(TrainingJobId, request, headers, runtime);
  }

  /**
   * 获取指定Instance（TrainingJob的运行单元）的日志。
   * 
   * @param request - ListTrainingJobInstanceEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobInstanceEventsResponse
   */
  async listTrainingJobInstanceEventsWithOptions(TrainingJobId: string, InstanceId: string, request: ListTrainingJobInstanceEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTrainingJobInstanceEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobInstanceEvents",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/instances/${$dara.URL.percentEncode(InstanceId)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTrainingJobInstanceEventsResponse>(await this.callApi(params, req, runtime), new ListTrainingJobInstanceEventsResponse({}));
  }

  /**
   * 获取指定Instance（TrainingJob的运行单元）的日志。
   * 
   * @param request - ListTrainingJobInstanceEventsRequest
   * @returns ListTrainingJobInstanceEventsResponse
   */
  async listTrainingJobInstanceEvents(TrainingJobId: string, InstanceId: string, request: ListTrainingJobInstanceEventsRequest): Promise<ListTrainingJobInstanceEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobInstanceEventsWithOptions(TrainingJobId, InstanceId, request, headers, runtime);
  }

  /**
   * 获取Training Job实例的Metrics
   * 
   * @param request - ListTrainingJobInstanceMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobInstanceMetricsResponse
   */
  async listTrainingJobInstanceMetricsWithOptions(TrainingJobId: string, request: ListTrainingJobInstanceMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTrainingJobInstanceMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobInstanceMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/instancemetrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTrainingJobInstanceMetricsResponse>(await this.callApi(params, req, runtime), new ListTrainingJobInstanceMetricsResponse({}));
  }

  /**
   * 获取Training Job实例的Metrics
   * 
   * @param request - ListTrainingJobInstanceMetricsRequest
   * @returns ListTrainingJobInstanceMetricsResponse
   */
  async listTrainingJobInstanceMetrics(TrainingJobId: string, request: ListTrainingJobInstanceMetricsRequest): Promise<ListTrainingJobInstanceMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobInstanceMetricsWithOptions(TrainingJobId, request, headers, runtime);
  }

  /**
   * 获取Training Job的日志
   * 
   * @param request - ListTrainingJobLogsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobLogsResponse
   */
  async listTrainingJobLogsWithOptions(TrainingJobId: string, request: ListTrainingJobLogsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTrainingJobLogsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.workerId)) {
      query["WorkerId"] = request.workerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobLogs",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTrainingJobLogsResponse>(await this.callApi(params, req, runtime), new ListTrainingJobLogsResponse({}));
  }

  /**
   * 获取Training Job的日志
   * 
   * @param request - ListTrainingJobLogsRequest
   * @returns ListTrainingJobLogsResponse
   */
  async listTrainingJobLogs(TrainingJobId: string, request: ListTrainingJobLogsRequest): Promise<ListTrainingJobLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobLogsWithOptions(TrainingJobId, request, headers, runtime);
  }

  /**
   * 获取Training Job的Metrics
   * 
   * @param request - ListTrainingJobMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobMetricsResponse
   */
  async listTrainingJobMetricsWithOptions(TrainingJobId: string, request: ListTrainingJobMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTrainingJobMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTrainingJobMetricsResponse>(await this.callApi(params, req, runtime), new ListTrainingJobMetricsResponse({}));
  }

  /**
   * 获取Training Job的Metrics
   * 
   * @param request - ListTrainingJobMetricsRequest
   * @returns ListTrainingJobMetricsResponse
   */
  async listTrainingJobMetrics(TrainingJobId: string, request: ListTrainingJobMetricsRequest): Promise<ListTrainingJobMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobMetricsWithOptions(TrainingJobId, request, headers, runtime);
  }

  /**
   * 获取Training Job 产出的所有模型信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobOutputModelsResponse
   */
  async listTrainingJobOutputModelsWithOptions(TrainingJobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTrainingJobOutputModelsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobOutputModels",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/outputmodels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTrainingJobOutputModelsResponse>(await this.callApi(params, req, runtime), new ListTrainingJobOutputModelsResponse({}));
  }

  /**
   * 获取Training Job 产出的所有模型信息
   * @returns ListTrainingJobOutputModelsResponse
   */
  async listTrainingJobOutputModels(TrainingJobId: string): Promise<ListTrainingJobOutputModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobOutputModelsWithOptions(TrainingJobId, headers, runtime);
  }

  /**
   * 获取TrainingJob的列表
   * 
   * @param tmpReq - ListTrainingJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTrainingJobsResponse
   */
  async listTrainingJobsWithOptions(tmpReq: ListTrainingJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTrainingJobsResponse> {
    tmpReq.validate();
    let request = new ListTrainingJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmName)) {
      query["AlgorithmName"] = request.algorithmName;
    }

    if (!$dara.isNull(request.algorithmProvider)) {
      query["AlgorithmProvider"] = request.algorithmProvider;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.isTempAlgo)) {
      query["IsTempAlgo"] = request.isTempAlgo;
    }

    if (!$dara.isNull(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.trainingJobId)) {
      query["TrainingJobId"] = request.trainingJobId;
    }

    if (!$dara.isNull(request.trainingJobName)) {
      query["TrainingJobName"] = request.trainingJobName;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTrainingJobs",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTrainingJobsResponse>(await this.callApi(params, req, runtime), new ListTrainingJobsResponse({}));
  }

  /**
   * 获取TrainingJob的列表
   * 
   * @param request - ListTrainingJobsRequest
   * @returns ListTrainingJobsResponse
   */
  async listTrainingJobs(request: ListTrainingJobsRequest): Promise<ListTrainingJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobsWithOptions(request, headers, runtime);
  }

  /**
   * 扩缩容Quota
   * 
   * @param request - ScaleQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ScaleQuotaResponse
   */
  async scaleQuotaWithOptions(QuotaId: string, request: ScaleQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ScaleQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.min)) {
      body["Min"] = request.min;
    }

    if (!$dara.isNull(request.resourceGroupIds)) {
      body["ResourceGroupIds"] = request.resourceGroupIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ScaleQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(QuotaId)}/action/scale`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ScaleQuotaResponse>(await this.callApi(params, req, runtime), new ScaleQuotaResponse({}));
  }

  /**
   * 扩缩容Quota
   * 
   * @param request - ScaleQuotaRequest
   * @returns ScaleQuotaResponse
   */
  async scaleQuota(QuotaId: string, request: ScaleQuotaRequest): Promise<ScaleQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.scaleQuotaWithOptions(QuotaId, request, headers, runtime);
  }

  /**
   * 停止一个TrainingJob
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopTrainingJobResponse
   */
  async stopTrainingJobWithOptions(TrainingJobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopTrainingJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<StopTrainingJobResponse>(await this.callApi(params, req, runtime), new StopTrainingJobResponse({}));
  }

  /**
   * 停止一个TrainingJob
   * @returns StopTrainingJobResponse
   */
  async stopTrainingJob(TrainingJobId: string): Promise<StopTrainingJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTrainingJobWithOptions(TrainingJobId, headers, runtime);
  }

  /**
   * 更新算法
   * 
   * @param request - UpdateAlgorithmRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlgorithmResponse
   */
  async updateAlgorithmWithOptions(AlgorithmId: string, request: UpdateAlgorithmRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateAlgorithmResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmDescription)) {
      body["AlgorithmDescription"] = request.algorithmDescription;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateAlgorithmResponse>(await this.callApi(params, req, runtime), new UpdateAlgorithmResponse({}));
  }

  /**
   * 更新算法
   * 
   * @param request - UpdateAlgorithmRequest
   * @returns UpdateAlgorithmResponse
   */
  async updateAlgorithm(AlgorithmId: string, request: UpdateAlgorithmRequest): Promise<UpdateAlgorithmResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlgorithmWithOptions(AlgorithmId, request, headers, runtime);
  }

  /**
   * 更新算法
   * 
   * @param tmpReq - UpdateAlgorithmVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlgorithmVersionResponse
   */
  async updateAlgorithmVersionWithOptions(AlgorithmId: string, AlgorithmVersion: string, tmpReq: UpdateAlgorithmVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateAlgorithmVersionResponse> {
    tmpReq.validate();
    let request = new UpdateAlgorithmVersionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.algorithmSpec)) {
      request.algorithmSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.algorithmSpec, "AlgorithmSpec", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.algorithmSpecShrink)) {
      body["AlgorithmSpec"] = request.algorithmSpecShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlgorithmVersion",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithms/${$dara.URL.percentEncode(AlgorithmId)}/versions/${$dara.URL.percentEncode(AlgorithmVersion)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<UpdateAlgorithmVersionResponse>(await this.callApi(params, req, runtime), new UpdateAlgorithmVersionResponse({}));
  }

  /**
   * 更新算法
   * 
   * @param request - UpdateAlgorithmVersionRequest
   * @returns UpdateAlgorithmVersionResponse
   */
  async updateAlgorithmVersion(AlgorithmId: string, AlgorithmVersion: string, request: UpdateAlgorithmVersionRequest): Promise<UpdateAlgorithmVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlgorithmVersionWithOptions(AlgorithmId, AlgorithmVersion, request, headers, runtime);
  }

  /**
   * 更新Quota
   * 
   * @param request - UpdateQuotaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQuotaResponse
   */
  async updateQuotaWithOptions(QuotaId: string, request: UpdateQuotaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateQuotaResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.queueStrategy)) {
      body["QueueStrategy"] = request.queueStrategy;
    }

    if (!$dara.isNull(request.quotaConfig)) {
      body["QuotaConfig"] = request.quotaConfig;
    }

    if (!$dara.isNull(request.quotaName)) {
      body["QuotaName"] = request.quotaName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateQuota",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas/${$dara.URL.percentEncode(QuotaId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateQuotaResponse>(await this.callApi(params, req, runtime), new UpdateQuotaResponse({}));
  }

  /**
   * 更新Quota
   * 
   * @param request - UpdateQuotaRequest
   * @returns UpdateQuotaResponse
   */
  async updateQuota(QuotaId: string, request: UpdateQuotaRequest): Promise<UpdateQuotaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaWithOptions(QuotaId, request, headers, runtime);
  }

  /**
   * 更新Resource Group
   * 
   * @param request - UpdateResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroupWithOptions(ResourceGroupID: string, request: UpdateResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.unbind)) {
      body["Unbind"] = request.unbind;
    }

    if (!$dara.isNull(request.userVpc)) {
      body["UserVpc"] = request.userVpc;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/resources/${$dara.URL.percentEncode(ResourceGroupID)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateResourceGroupResponse>(await this.callApi(params, req, runtime), new UpdateResourceGroupResponse({}));
  }

  /**
   * 更新Resource Group
   * 
   * @param request - UpdateResourceGroupRequest
   * @returns UpdateResourceGroupResponse
   */
  async updateResourceGroup(ResourceGroupID: string, request: UpdateResourceGroupRequest): Promise<UpdateResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceGroupWithOptions(ResourceGroupID, request, headers, runtime);
  }

  /**
   * 更新一个TrainingJob的Labels
   * 
   * @param request - UpdateTrainingJobLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTrainingJobLabelsResponse
   */
  async updateTrainingJobLabelsWithOptions(TrainingJobId: string, request: UpdateTrainingJobLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateTrainingJobLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrainingJobLabels",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v1/trainingjobs/${$dara.URL.percentEncode(TrainingJobId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateTrainingJobLabelsResponse>(await this.callApi(params, req, runtime), new UpdateTrainingJobLabelsResponse({}));
  }

  /**
   * 更新一个TrainingJob的Labels
   * 
   * @param request - UpdateTrainingJobLabelsRequest
   * @returns UpdateTrainingJobLabelsResponse
   */
  async updateTrainingJobLabels(TrainingJobId: string, request: UpdateTrainingJobLabelsRequest): Promise<UpdateTrainingJobLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTrainingJobLabelsWithOptions(TrainingJobId, request, headers, runtime);
  }

}
