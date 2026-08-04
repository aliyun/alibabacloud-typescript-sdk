// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Location } from "./Location";
import { HyperParameterDefinition } from "./HyperParameterDefinition";
import { Channel } from "./Channel";
import { MetricDefinition } from "./MetricDefinition";
import { ConditionExpression } from "./ConditionExpression";


/**
 */
export class AlgorithmSpecComputeResourcePolicy extends $dara.Model {
  /**
   * @remarks
   * Policy content, serialized from a JSON array.
   * 
   * This parameter is required.
   * 
   * @example
   * [{\\"MinTotalCount\\":1,\\"MaxTotalCount\\":4,\\"RolePolicies\\":{\\"chief\\":{\\"Count\\":1},\\"ps\\":{\\"Count\\":1},\\"worker\\":{\\"Percentage\\":100}}},{\\"MinTotalCount\\":5,\\"MaxTotalCount\\":10,\\"RolePolicies\\":{\\"chief\\":{\\"Count\\":1},\\"ps\\":{\\"Percentage\\":20},\\"worker\\":{\\"Percentage\\":80}}},{\\"MinTotalCount\\":11,\\"RolePolicies\\":{\\"chief\\":{\\"Count\\":1},\\"ps\\":{\\"Percentage\\":40},\\"worker\\":{\\"Percentage\\":60}}}]
   */
  value?: string;
  /**
   * @remarks
   * Policy version.
   * 
   * This parameter is required.
   * 
   * @example
   * V1
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
   * Computing resource configuration policy for the algorithm.
   * 
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
  /**
   * @remarks
   * Indicates whether custom-mounted code is used.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The description of the monitoring definition.
   * 
   * @example
   * training progress
   */
  description?: string;
  /**
   * @remarks
   * The regular expression for monitoring.
   * 
   * @example
   * ^[0-9]+([.][0-9]+){0,1}$
   */
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
  /**
   * @remarks
   * The description of the monitoring definition.
   * 
   * @example
   * training remaining time
   */
  description?: string;
  /**
   * @remarks
   * The regular expression for monitoring.
   * 
   * @example
   * ^[0-9]+([.][0-9]+){0,1}$
   */
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
  /**
   * @remarks
   * Monitors training progress.
   */
  overallProgress?: AlgorithmSpecProgressDefinitionsOverallProgress;
  /**
   * @remarks
   * The definition for monitoring the remaining training time.
   */
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

export class AlgorithmSpec extends $dara.Model {
  /**
   * @remarks
   * The custom code configuration.
   */
  codeDir?: Location;
  /**
   * @remarks
   * The list of commands to run the training task.
   * 
   * This parameter is required.
   */
  command?: string[];
  /**
   * @remarks
   * The compute resource definition.
   */
  computeResource?: AlgorithmSpecComputeResource;
  /**
   * @remarks
   * The custom configuration.
   */
  customization?: AlgorithmSpecCustomization;
  /**
   * @remarks
   * The list of hyperparameter definitions.
   */
  hyperParameters?: HyperParameterDefinition[];
  /**
   * @remarks
   * The training runtime image.
   * 
   * This parameter is required.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai-training/kmeans:v1.0.0
   */
  image?: string;
  /**
   * @remarks
   * The list of input channels for the algorithm.
   */
  inputChannels?: Channel[];
  /**
   * @remarks
   * The job type.
   * 
   * This parameter is required.
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * The list of metric definitions for the training task.
   */
  metricDefinitions?: MetricDefinition[];
  /**
   * @remarks
   * The list of output channels for the algorithm.
   */
  outputChannels?: Channel[];
  /**
   * @remarks
   * You can use this feature to monitor the training progress.
   */
  progressDefinitions?: AlgorithmSpecProgressDefinitions;
  /**
   * @remarks
   * The resource requirements.
   */
  resourceRequirements?: ConditionExpression[];
  /**
   * @remarks
   * The list of supported elastic computing instance types for training.
   */
  supportedInstanceTypes?: string[];
  /**
   * @remarks
   * Indicates whether distributed training is supported.
   * 
   * @example
   * true
   */
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

