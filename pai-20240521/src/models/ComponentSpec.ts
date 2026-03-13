// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Location } from "./Location";
import { HyperParameterDefinition } from "./HyperParameterDefinition";
import { Channel } from "./Channel";
import { MetricDefinition } from "./MetricDefinition";
import { ConditionExpression } from "./ConditionExpression";


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

