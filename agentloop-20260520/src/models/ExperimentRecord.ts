// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Evaluator } from "./Evaluator";
import { ExperimentConfig } from "./ExperimentConfig";


export class ExperimentRecord extends $dara.Model {
  /**
   * @remarks
   * The completion timestamp in milliseconds.
   * 
   * @example
   * 1767229200000
   */
  completedAt?: number;
  /**
   * @remarks
   * The number of completed tasks.
   * 
   * @example
   * 5
   */
  completedTasks?: number;
  /**
   * @remarks
   * The data source type. Valid values: simple, dataset-full, and dataset-partial.
   * 
   * @example
   * dataset-full
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * dataset-123456
   */
  datasetId?: string;
  /**
   * @remarks
   * The Simple Log Service (SLS) project where the dataset is located.
   * 
   * @example
   * agentspace-project
   */
  datasetProject?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Model invocation timeout
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the associated evaluation task.
   * 
   * @example
   * eval-task-6bec93bfa03740dd86ce2bf1496e65fb
   */
  evaluationTaskId?: string;
  /**
   * @remarks
   * The list of evaluators.
   * 
   * @example
   * [{"name":"Builtin.agent_correctness"}]
   */
  evaluators?: Evaluator[];
  /**
   * @remarks
   * The execution timestamp in milliseconds.
   * 
   * @example
   * 1767225600000
   */
  executedAt?: number;
  /**
   * @remarks
   * The list of experiment configurations.
   * 
   * @example
   * [{"label":"A","name":"baseline","modelName":"qwen-max"}]
   */
  experimentConfig?: ExperimentConfig[];
  /**
   * @remarks
   * The ID of the associated experiment plan.
   * 
   * @example
   * exp-plan-0242d983f5d340fd8479cf2c19eb279e
   */
  experimentPlanId?: string;
  /**
   * @remarks
   * The number of failed tasks.
   * 
   * @example
   * 1
   */
  failedTasks?: number;
  /**
   * @remarks
   * The single-line input in SIMPLE mode.
   * 
   * @example
   * {"test":"test","test2":1}
   */
  input?: { [key: string]: any };
  /**
   * @remarks
   * The list of model names used.
   * 
   * @example
   * ["qwen-max"]
   */
  modelNames?: string[];
  /**
   * @remarks
   * The name of the associated experiment plan.
   * 
   * @example
   * customer-service-eval
   */
  planName?: string;
  /**
   * @remarks
   * The execution progress, ranging from 0 to 1.
   * 
   * @example
   * 0.5
   */
  progress?: number;
  /**
   * @remarks
   * The custom query SQL clause in dataset-partial mode.
   * 
   * @example
   * level > 2
   */
  querySql?: string;
  /**
   * @remarks
   * The experiment record ID.
   * 
   * @example
   * exp-run-f6d419b0ed3d43a7b585948a55efc07b
   */
  recordId?: string;
  /**
   * @remarks
   * The experiment record name.
   * 
   * @example
   * baseline-run
   */
  recordName?: string;
  /**
   * @remarks
   * The list of selected data item IDs in dataset-partial mode.
   * 
   * @example
   * ["item-123456"]
   */
  selectedItemIds?: string[];
  /**
   * @remarks
   * The status. Valid values: pending, running, completed, and failed.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 10
   */
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

