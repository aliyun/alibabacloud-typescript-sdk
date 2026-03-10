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
  evaluators?: Evaluator[];
  executedAt?: number;
  experimentConfig?: ExperimentConfig;
  experimentName?: string;
  failedTasks?: number;
  input?: { [key: string]: any };
  modelName?: string;
  planId?: string;
  planName?: string;
  progress?: number;
  recordId?: string;
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
      evaluators: 'evaluators',
      executedAt: 'executedAt',
      experimentConfig: 'experimentConfig',
      experimentName: 'experimentName',
      failedTasks: 'failedTasks',
      input: 'input',
      modelName: 'modelName',
      planId: 'planId',
      planName: 'planName',
      progress: 'progress',
      recordId: 'recordId',
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
      evaluators: { 'type': 'array', 'itemType': Evaluator },
      executedAt: 'number',
      experimentConfig: ExperimentConfig,
      experimentName: 'string',
      failedTasks: 'number',
      input: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      modelName: 'string',
      planId: 'string',
      planName: 'string',
      progress: 'number',
      recordId: 'string',
      selectedItemIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      totalTasks: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.evaluators)) {
      $dara.Model.validateArray(this.evaluators);
    }
    if(this.experimentConfig && typeof (this.experimentConfig as any).validate === 'function') {
      (this.experimentConfig as any).validate();
    }
    if(this.input) {
      $dara.Model.validateMap(this.input);
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

