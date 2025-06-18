// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlgorithmSpec } from "./AlgorithmSpec";
import { GetTrainingJobResponseBodyComputeResource } from "./GetTrainingJobResponseBodyComputeResource";
import { GetTrainingJobResponseBodyExperimentConfig } from "./GetTrainingJobResponseBodyExperimentConfig";
import { GetTrainingJobResponseBodyHyperParameters } from "./GetTrainingJobResponseBodyHyperParameters";
import { GetTrainingJobResponseBodyInputChannels } from "./GetTrainingJobResponseBodyInputChannels";
import { GetTrainingJobResponseBodyInstances } from "./GetTrainingJobResponseBodyInstances";
import { GetTrainingJobResponseBodyLabels } from "./GetTrainingJobResponseBodyLabels";
import { GetTrainingJobResponseBodyLatestMetrics } from "./GetTrainingJobResponseBodyLatestMetrics";
import { GetTrainingJobResponseBodyLatestProgress } from "./GetTrainingJobResponseBodyLatestProgress";
import { GetTrainingJobResponseBodyOutputChannels } from "./GetTrainingJobResponseBodyOutputChannels";
import { GetTrainingJobResponseBodyOutputModel } from "./GetTrainingJobResponseBodyOutputModel";
import { GetTrainingJobResponseBodyScheduler } from "./GetTrainingJobResponseBodyScheduler";
import { JobSettings } from "./JobSettings";
import { GetTrainingJobResponseBodyStatusTransitions } from "./GetTrainingJobResponseBodyStatusTransitions";
import { GetTrainingJobResponseBodyUserVpc } from "./GetTrainingJobResponseBodyUserVpc";


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

