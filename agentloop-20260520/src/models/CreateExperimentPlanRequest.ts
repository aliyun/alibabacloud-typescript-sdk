// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Evaluator } from "./Evaluator";
import { ExperimentConfig } from "./ExperimentConfig";


export class CreateExperimentPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated dataset. If this parameter is not specified, the execution phase processes in simple mode.
   * 
   * @example
   * rca_benckmark_eval
   */
  datasetId?: string;
  /**
   * @remarks
   * The description of the experiment plan.
   * 
   * @example
   * rca_benchmark_eval_experiment offline experiment
   */
  description?: string;
  /**
   * @remarks
   * The list of evaluators. When configured, evaluation can be automatically triggered upon experiment completion.
   * 
   * @example
   * [{"evaluatorRef": "Builtin.agent_correctness", "name": "Builtin.agent_correctness", "type": "AGENT", "resultName": "Builtin.agent_correctness", "resultType": "score", "variableMapping": {"input": "experiment_input", "output": "experiment_output", "expected_output": "dataset.ground_truth_json"}, "filters": {"query": "", "sample": "100"}, "config": {"variables": [], "prompt": ""}}, {"evaluatorRef": "rca-toxicity-safety-accuracy", "name": "rca-toxicity-safety-accuracy", "type": "AGENT", "resultName": "rca-toxicity-safety-accuracy", "resultType": "score", "variableMapping": {"input": "experiment_input", "output": "experiment_output", "question": "dataset.question", "expected_output": "dataset.ground_truth_json", "payload_json": "dataset.payload_json"}, "filters": {"query": "", "sample": "100"}, "config": {"variables": [], "prompt": ""}}]
   */
  evaluators?: Evaluator[];
  /**
   * @remarks
   * The experiment type. Set this parameter to `OFFLINE` or `ONLINE`.
   * 
   * This parameter is required.
   * 
   * @example
   * OFFLINE
   */
  experimentType?: string;
  /**
   * @remarks
   * The list of experiment configurations. A maximum of five configurations are supported. For offline experiments, this parameter can be omitted or set to an empty array. For online experiments, at least one configuration is required.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"label": "A", "name": "experimentA", "modelName": "qwen3.7-plus", "modelProvider": "dashscope", "modelParameters": {"temperature": 0.7, "topP": 0.8, "presencePenalty": 0.0, "frequencyPenalty": 0.0}, "promptTemplate": [{"role": "system", "content": "You are an Alibaba Cloud ARMS product Q&A bot"}, {"role": "user", "content": "{{input}}"}]}, {"label": "B", "name": "experimentB", "modelName": "qwen3.7-max", "modelProvider": "dashscope", "modelParameters": {"temperature": 0.7, "topP": 0.8, "presencePenalty": 0.0, "frequencyPenalty": 0.0}, "promptTemplate": [{"role": "system", "content": "You are an Alibaba Cloud ARMS product Q&A bot"}, {"role": "user", "content": "{{input}}"}]}]
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
   * The name of the associated data processing pipeline (optional). After association, when the experiment execution under this plan writes results to the experiment result Logstore, the system filters by the traceId of the experiment trace, calls PreviewPipeline, and writes the pipeline-processed results together.
   */
  pipelineName?: string;
  /**
   * @remarks
   * The experiment plan name. The name must be unique within the same AgentSpace under the same account.
   * 
   * This parameter is required.
   * 
   * @example
   * rca_benchmark_eval_experiment
   */
  planName?: string;
  /**
   * @remarks
   * The custom query SQL clause in partial dataset mode. This parameter can be used when `selectedItemIds` is empty.
   * 
   * @example
   * status=\\"OK\\"
   */
  querySql?: string;
  /**
   * @remarks
   * The list of selected data item IDs in partial dataset mode. Use this parameter together with `datasetId`.
   * 
   * @example
   * ["019ef4d5-a0f0-7114-832d-5542d771cd8c", "019f1729-be9b-7769-a006-8e98023ad7ad"]
   */
  selectedItemIds?: string[];
  static names(): { [key: string]: string } {
    return {
      datasetId: 'datasetId',
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

