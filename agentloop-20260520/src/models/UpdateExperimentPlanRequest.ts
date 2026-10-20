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
   * The list of evaluators. If this parameter is omitted, the list remains unchanged. If an empty array is passed, the list is cleared.
   * 
   * @example
   * [{"evaluatorRef": "Builtin.agent_task_completion"}]
   */
  evaluators?: Evaluator[];
  /**
   * @remarks
   * The experiment type. Valid values: OFFLINE (offline experiment) and ONLINE (online experiment).
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
   * {"question": "How do I get a refund?"}
   */
  input?: { [key: string]: any };
  /**
   * @remarks
   * The name of the associated data processing pipeline. This parameter is optional. If it is not passed, the association is not updated. If an empty character string is passed, the pipeline is dissociated. After the association is configured, when an experiment under this plan executes and completes writing the experiment results to the Logstore, the system filters the results by the traceId of the current experiment trace and invokes PreviewPipeline to write the results processed by the pipeline.
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
   * The list of selected data item IDs in partial dataset mode. If an empty array is passed, the list is cleared.
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

