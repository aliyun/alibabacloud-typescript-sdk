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

