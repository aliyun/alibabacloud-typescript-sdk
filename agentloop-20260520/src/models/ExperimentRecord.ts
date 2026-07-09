// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Evaluator } from "./Evaluator";
import { ExperimentConfig } from "./ExperimentConfig";


export class ExperimentRecord extends $dara.Model {
  completedAt?: number;
  completedTasks?: number;
  dataSourceType?: string;
  datasetId?: string;
  datasetProject?: string;
  errorMessage?: string;
  evaluationTaskId?: string;
  evaluators?: Evaluator[];
  executedAt?: number;
  experimentConfig?: ExperimentConfig[];
  experimentPlanId?: string;
  failedTasks?: number;
  input?: { [key: string]: any };
  modelNames?: string[];
  planName?: string;
  progress?: number;
  querySql?: string;
  recordId?: string;
  recordName?: string;
  selectedItemIds?: string[];
  status?: string;
  totalTasks?: number;
  static names(): { [key: string]: string } {
    return {
      completedAt: 'completedAt',
      completedTasks: 'completedTasks',
      dataSourceType: 'dataSourceType',
      datasetId: 'datasetId',
      datasetProject: 'datasetProject',
      errorMessage: 'errorMessage',
      evaluationTaskId: 'evaluationTaskId',
      evaluators: 'evaluators',
      executedAt: 'executedAt',
      experimentConfig: 'experimentConfig',
      experimentPlanId: 'experimentPlanId',
      failedTasks: 'failedTasks',
      input: 'input',
      modelNames: 'modelNames',
      planName: 'planName',
      progress: 'progress',
      querySql: 'querySql',
      recordId: 'recordId',
      recordName: 'recordName',
      selectedItemIds: 'selectedItemIds',
      status: 'status',
      totalTasks: 'totalTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedAt: 'number',
      completedTasks: 'number',
      dataSourceType: 'string',
      datasetId: 'string',
      datasetProject: 'string',
      errorMessage: 'string',
      evaluationTaskId: 'string',
      evaluators: { 'type': 'array', 'itemType': Evaluator },
      executedAt: 'number',
      experimentConfig: { 'type': 'array', 'itemType': ExperimentConfig },
      experimentPlanId: 'string',
      failedTasks: 'number',
      input: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      modelNames: { 'type': 'array', 'itemType': 'string' },
      planName: 'string',
      progress: 'number',
      querySql: 'string',
      recordId: 'string',
      recordName: 'string',
      selectedItemIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      totalTasks: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.evaluators)) {
      $dara.Model.validateArray(this.evaluators);
    }
    if(Array.isArray(this.experimentConfig)) {
      $dara.Model.validateArray(this.experimentConfig);
    }
    if(this.input) {
      $dara.Model.validateMap(this.input);
    }
    if(Array.isArray(this.modelNames)) {
      $dara.Model.validateArray(this.modelNames);
    }
    if(Array.isArray(this.selectedItemIds)) {
      $dara.Model.validateArray(this.selectedItemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

