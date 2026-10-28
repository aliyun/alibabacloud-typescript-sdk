// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Location } from "./Location";
import { HyperParameterDefinition } from "./HyperParameterDefinition";
import { Channel } from "./Channel";
import { MetricDefinition } from "./MetricDefinition";
import { ConditionExpression } from "./ConditionExpression";


export class ComponentSpec extends $dara.Model {
  /**
   * @remarks
   * The code directory configuration.
   */
  codeDir?: Location;
  /**
   * @remarks
   * The command used for submit the job.
   * 
   * This parameter is required.
   */
  command?: string;
  /**
   * @remarks
   * The hype parameter used by the algorithm.
   */
  hyperParameters?: HyperParameterDefinition[];
  /**
   * @remarks
   * The docker image used by the job of this algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * registry.cn-shanghai.aliyuncs.com/pai-training/kmeans:v1.0.0
   */
  image?: string;
  /**
   * @remarks
   * The input for the algorithm.
   */
  inputChannels?: Channel[];
  /**
   * @remarks
   * Job type of the training job while running the algorithm.
   * 
   * This parameter is required.
   * 
   * @example
   * TFJob
   */
  jobType?: string;
  /**
   * @remarks
   * The output metrics of the algorithm.
   */
  metricDefinitions?: MetricDefinition[];
  /**
   * @remarks
   * The outputs of the algorithm.
   */
  outputChannels?: Channel[];
  /**
   * @remarks
   * Resource requirements.
   */
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

