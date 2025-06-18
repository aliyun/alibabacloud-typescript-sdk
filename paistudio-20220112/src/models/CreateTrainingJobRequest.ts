// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlgorithmSpec } from "./AlgorithmSpec";
import { Location } from "./Location";
import { CreateTrainingJobRequestComputeResource } from "./CreateTrainingJobRequestComputeResource";
import { CreateTrainingJobRequestExperimentConfig } from "./CreateTrainingJobRequestExperimentConfig";
import { CreateTrainingJobRequestHyperParameters } from "./CreateTrainingJobRequestHyperParameters";
import { CreateTrainingJobRequestInputChannels } from "./CreateTrainingJobRequestInputChannels";
import { CreateTrainingJobRequestLabels } from "./CreateTrainingJobRequestLabels";
import { CreateTrainingJobRequestOutputChannels } from "./CreateTrainingJobRequestOutputChannels";
import { CreateTrainingJobRequestScheduler } from "./CreateTrainingJobRequestScheduler";
import { JobSettings } from "./JobSettings";
import { CreateTrainingJobRequestUserVpc } from "./CreateTrainingJobRequestUserVpc";


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

