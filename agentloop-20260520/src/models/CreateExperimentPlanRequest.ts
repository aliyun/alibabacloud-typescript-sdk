// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Evaluator } from "./Evaluator";
import { ExperimentConfig } from "./ExperimentConfig";


export class CreateExperimentPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated dataset. If you do not specify this parameter, the execution phase is processed in simple mode.
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
   * The list of evaluators. After you configure this parameter, an evaluation is automatically triggered when the experiment is completed.
   * 
   * @example
   * [{"evaluatorRef": "Builtin.agent_correctness", "name": "Builtin.agent_correctness", "type": "AGENT", "resultName": "Builtin.agent_correctness", "resultType": "score", "variableMapping": {"input": "experiment_input", "output": "experiment_output", "expected_output": "dataset.ground_truth_json"}, "filters": {"query": "", "sample": "100"}, "config": {"variables": [], "prompt": ""}}, {"evaluatorRef": "rca-toxicity-safety-accuracy", "name": "rca-toxicity-safety-accuracy", "type": "AGENT", "resultName": "rca-toxicity-safety-accuracy", "resultType": "score", "variableMapping": {"input": "experiment_input", "output": "experiment_output", "question": "dataset.question", "expected_output": "dataset.ground_truth_json", "payload_json": "dataset.payload_json"}, "filters": {"query": "", "sample": "100"}, "config": {"variables": [], "prompt": ""}}]
   */
  evaluators?: Evaluator[];
  /**
   * @remarks
   * The type of the experiment. Valid values: OFFLINE and ONLINE.
   * 
   * This parameter is required.
   * 
   * @example
   * OFFLINE
   */
  experimentType?: string;
  /**
   * @remarks
   * The list of experiment configurations. You can specify up to 5 configurations. This parameter is optional or can be left empty for offline experiments. For online experiments, you must specify at least one configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"label": "A", "name": "experimentA", "modelName": "qwen3.7-plus", "modelProvider": "dashscope", "modelParameters": {"temperature": 0.7, "topP": 0.8, "presencePenalty": 0.0, "frequencyPenalty": 0.0}, "promptTemplate": [{"role": "system", "content": "You are the Alibaba Cloud ARMS product Q&A bot."}, {"role": "user", "content": "{{input}}"}]}, {"label": "B", "name": "experimentB", "modelName": "qwen3.7-max", "modelProvider": "dashscope", "modelParameters": {"temperature": 0.7, "topP": 0.8, "presencePenalty": 0.0, "frequencyPenalty": 0.0}, "promptTemplate": [{"role": "system", "content": "You are the Alibaba Cloud ARMS product Q&A bot."}, {"role": "user", "content": "{{input}}"}]}]
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
   * The name of the associated data processing pipeline. This parameter is optional. After you associate a pipeline, when the experiment execution under this plan is completed and the experiment results are written to the Logstore, the system filters the data by the traceId of the current experiment trace and calls PreviewPipeline to write the results processed by the pipeline.
   */
  pipelineName?: string;
  /**
   * @remarks
   * The name of the experiment plan. The name must be unique within the same account in an AgentSpace.
   * 
   * This parameter is required.
   * 
   * @example
   * rca_benchmark_eval_experiment
   */
  planName?: string;
  /**
   * @remarks
   * The custom query SQL clause in partial dataset mode. You can use this parameter when selectedItemIds is empty.
   * 
   * @example
   * status=\\"OK\\"
   */
  querySql?: string;
  /**
   * @remarks
   * The list of selected data item IDs in partial dataset mode. This parameter must be used together with the datasetId parameter.
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

