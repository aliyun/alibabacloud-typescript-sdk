// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Evaluator } from "./Evaluator";
import { ExperimentConfig } from "./ExperimentConfig";


export class UpdateExperimentPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated dataset.
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
   * rca_benchmark_eval_experiment offline experiment
   */
  description?: string;
  /**
   * @remarks
   * The list of evaluators. If omitted, the list is not modified. If an empty array is passed, the list is cleared. When configured, evaluation is automatically triggered upon experiment completion.
   * 
   * @example
   * [{"evaluatorRef": "Builtin.agent_task_completion"}]
   */
  evaluators?: Evaluator[];
  /**
   * @remarks
   * The type of the experiment. Valid values: OFFLINE (offline experiment) and ONLINE (online experiment).
   * 
   * @example
   * OFFLINE
   */
  experimentType?: string;
  /**
   * @remarks
   * The list of experiment configurations. When passed, the entire list is replaced. The number of items must be between 1 and 5.
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
   * {"question": "How do I request a refund?"}
   */
  input?: { [key: string]: any };
  /**
   * @remarks
   * The name of the associated data processing pipeline. This parameter is optional. If you do not specify this parameter, the association is not updated. If you specify an empty string, the association is removed. After the association is established, when an experiment under this plan completes and writes experiment results to a Logstore, the system filters the data by the traceId of the current experiment trace and calls PreviewPipeline to write the pipeline-processed trace results together with the experiment results.
   */
  pipelineName?: string;
  /**
   * @remarks
   * The name of the experiment plan.
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

