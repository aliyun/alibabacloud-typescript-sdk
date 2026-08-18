// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Evaluator } from "./Evaluator";
import { ExperimentConfig } from "./ExperimentConfig";


export class UpdateExperimentPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The associated dataset ID.
   * 
   * @example
   * rca_benckmark_eval
   */
  datasetId?: string;
  /**
   * @remarks
   * Optional.
   * 
   * @example
   * agentspace-project
   */
  datasetProject?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * rca_benchmark_eval_experiment offline experiment.
   */
  description?: string;
  /**
   * @remarks
   * The evaluator list. Omitting this field indicates no modification. Passing an empty array clears the list.
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
   * OFFLINE
   */
  experimentType?: string;
  /**
   * @remarks
   * The experiment configuration list. When specified, the entire list is replaced. The number of items must be 1 to 5.
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
   * {"question": "How do I get a refund?"}
   */
  input?: { [key: string]: any };
  pipelineName?: string;
  /**
   * @remarks
   * The experiment plan name.
   * 
   * @example
   * rca_benchmark_eval_experiment
   */
  planName?: string;
  /**
   * @remarks
   * The custom query SQL clause in partial dataset mode.
   * 
   * @example
   * level > 2
   */
  querySql?: string;
  /**
   * @remarks
   * The list of selected data item IDs in partial dataset mode. Passing an empty array clears the list.
   * 
   * @example
   * []
   */
  selectedItemIds?: string[];
  static names(): { [key: string]: string } {
    return {
      datasetId: 'datasetId',
      datasetProject: 'datasetProject',
      description: 'description',
      evaluators: 'evaluators',
      experimentType: 'experimentType',
      experiments: 'experiments',
      input: 'input',
      pipelineName: 'pipelineName',
      planName: 'planName',
      querySql: 'querySql',
      selectedItemIds: 'selectedItemIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetProject: 'string',
      description: 'string',
      evaluators: { 'type': 'array', 'itemType': Evaluator },
      experimentType: 'string',
      experiments: { 'type': 'array', 'itemType': ExperimentConfig },
      input: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      pipelineName: 'string',
      planName: 'string',
      querySql: 'string',
      selectedItemIds: { 'type': 'array', 'itemType': 'string' },
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

