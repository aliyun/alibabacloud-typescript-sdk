// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Evaluator } from "./Evaluator";
import { ExperimentConfig } from "./ExperimentConfig";


export class GetExperimentPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time, in millisecond Unix timestamp.
   * 
   * @example
   * 1782816000000
   */
  createdAt?: number;
  /**
   * @remarks
   * The associated dataset ID.
   * 
   * @example
   * arms_customer_agent_level1
   */
  datasetId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * 对比 checkout Agent 基线与优化版本
   */
  description?: string;
  /**
   * @remarks
   * The list of evaluators.
   * 
   * @example
   * [{"evaluatorRef": "Builtin.agent_task_completion"}]
   */
  evaluators?: Evaluator[];
  /**
   * @remarks
   * The experiment type.
   * 
   * @example
   * online
   */
  experimentType?: string;
  /**
   * @remarks
   * The list of experiment configurations.
   * 
   * @example
   * [{"label": "A", "name": "baseline", "modelName": "qwen-max"}]
   */
  experiments?: ExperimentConfig[];
  /**
   * @remarks
   * Optional.
   * 
   * @example
   * {"question": "如何退款？"}
   */
  input?: { [key: string]: any };
  /**
   * @remarks
   * The experiment plan ID.
   * 
   * @example
   * exp-plan-0242d983f5d340fd8479cf2c19eb279e
   */
  planId?: string;
  /**
   * @remarks
   * The experiment plan name.
   * 
   * @example
   * arms_agent_experiment
   */
  planName?: string;
  /**
   * @remarks
   * The custom query SQL clause in partial dataset mode.
   * 
   * @example
   * status=\\"OK\\"
   */
  querySql?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FE4CD1E-FF41-56BE-B590-7A021D9C1524
   */
  requestId?: string;
  /**
   * @remarks
   * The list of selected data item IDs in partial dataset mode.
   * 
   * @example
   * ["019ef4d5-a0f0-7114-832d-5542d771cd8c"]
   */
  selectedItemIds?: string[];
  /**
   * @remarks
   * The plan status.
   * 
   * @example
   * stopped
   */
  status?: string;
  /**
   * @remarks
   * The update time, in millisecond Unix timestamp.
   * 
   * @example
   * 1782816600000
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      datasetId: 'datasetId',
      description: 'description',
      evaluators: 'evaluators',
      experimentType: 'experimentType',
      experiments: 'experiments',
      input: 'input',
      planId: 'planId',
      planName: 'planName',
      querySql: 'querySql',
      requestId: 'requestId',
      selectedItemIds: 'selectedItemIds',
      status: 'status',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      datasetId: 'string',
      description: 'string',
      evaluators: { 'type': 'array', 'itemType': Evaluator },
      experimentType: 'string',
      experiments: { 'type': 'array', 'itemType': ExperimentConfig },
      input: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      planId: 'string',
      planName: 'string',
      querySql: 'string',
      requestId: 'string',
      selectedItemIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.evaluators)) {
      $dara.Model.validateArray(this.evaluators);
    }
    if(Array.isArray(this.experiments)) {
      $dara.Model.validateArray(this.experiments);
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

