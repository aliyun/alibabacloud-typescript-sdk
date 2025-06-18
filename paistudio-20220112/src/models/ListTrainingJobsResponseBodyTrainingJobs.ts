// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrainingJobsResponseBodyTrainingJobsComputeResource } from "./ListTrainingJobsResponseBodyTrainingJobsComputeResource";
import { ListTrainingJobsResponseBodyTrainingJobsExperimentConfig } from "./ListTrainingJobsResponseBodyTrainingJobsExperimentConfig";
import { ListTrainingJobsResponseBodyTrainingJobsHyperParameters } from "./ListTrainingJobsResponseBodyTrainingJobsHyperParameters";
import { ListTrainingJobsResponseBodyTrainingJobsInputChannels } from "./ListTrainingJobsResponseBodyTrainingJobsInputChannels";
import { ListTrainingJobsResponseBodyTrainingJobsLabels } from "./ListTrainingJobsResponseBodyTrainingJobsLabels";
import { ListTrainingJobsResponseBodyTrainingJobsOutputChannels } from "./ListTrainingJobsResponseBodyTrainingJobsOutputChannels";
import { ListTrainingJobsResponseBodyTrainingJobsScheduler } from "./ListTrainingJobsResponseBodyTrainingJobsScheduler";
import { ListTrainingJobsResponseBodyTrainingJobsStatusTransitions } from "./ListTrainingJobsResponseBodyTrainingJobsStatusTransitions";
import { ListTrainingJobsResponseBodyTrainingJobsUserVpc } from "./ListTrainingJobsResponseBodyTrainingJobsUserVpc";


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

