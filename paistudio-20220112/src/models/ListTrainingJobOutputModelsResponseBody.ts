// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrainingJobOutputModelsResponseBodyOutputModelsLabels extends $dara.Model {
  /**
   * @remarks
   * Tag name.
   * 
   * @example
   * RootModelName
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * qwen2-0.5
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobOutputModelsResponseBodyOutputModels extends $dara.Model {
  /**
   * @remarks
   * Model compression configuration.
   * 
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @remarks
   * Model evaluation configuration.
   * 
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @remarks
   * Model inference configuration.
   * 
   * @example
   * {}
   */
  inferenceSpec?: { [key: string]: any };
  /**
   * @remarks
   * List of tags.
   */
  labels?: ListTrainingJobOutputModelsResponseBodyOutputModelsLabels[];
  /**
   * @remarks
   * Training job metrics.
   * 
   * @example
   * {
   *         "Results": [
   *           {
   *             "Dataset": {
   *               "Train": "oss://somebucket.oss-cn-hangzhou.aliyuncs.com/datasets/Chinese-medical-dialogue-data/chinese_medical_train_sampled.json"
   *             },
   *             "Metrics": {
   *               "loss": 2.1276
   *             }
   *           }
   *         ]
   * }
   */
  metrics?: { [key: string]: any };
  /**
   * @remarks
   * Name of the training output data.
   * 
   * @example
   * model
   */
  outputChannelName?: string;
  /**
   * @remarks
   * Source ID (optional):
   * 
   * - If the source is Custom, there are no format requirements.
   * 
   * - If the source is PAIFlow, use the format: region=cn-shanghai,workspaceId=1345,kind=PipelineRun,id=run-sakdbaskjdf.
   * 
   * - If the source is TrainingService, use the format: region=cn-shanghai,workspaceId=1345,kind=TrainingJob,id=job-sakdbaskjdf.
   * 
   * @example
   * region=cn-shanghai,workspaceId=1345,kind=PipelineRun,id=run-sakdbaskjdf
   */
  sourceId?: string;
  /**
   * @remarks
   * Source (the type of job that produced the model). Default: Custom.
   * 
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @remarks
   * Model training configuration.
   * 
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
   * @remarks
   * Link to the training output data.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou.aliyuncs.com/path/to/output/channel/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      compressionSpec: 'CompressionSpec',
      evaluationSpec: 'EvaluationSpec',
      inferenceSpec: 'InferenceSpec',
      labels: 'Labels',
      metrics: 'Metrics',
      outputChannelName: 'OutputChannelName',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressionSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': ListTrainingJobOutputModelsResponseBodyOutputModelsLabels },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      outputChannelName: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      uri: 'string',
    };
  }

  validate() {
    if(this.compressionSpec) {
      $dara.Model.validateMap(this.compressionSpec);
    }
    if(this.evaluationSpec) {
      $dara.Model.validateMap(this.evaluationSpec);
    }
    if(this.inferenceSpec) {
      $dara.Model.validateMap(this.inferenceSpec);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.metrics) {
      $dara.Model.validateMap(this.metrics);
    }
    if(this.trainingSpec) {
      $dara.Model.validateMap(this.trainingSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobOutputModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of models produced by training.
   */
  outputModels?: ListTrainingJobOutputModelsResponseBodyOutputModels[];
  static names(): { [key: string]: string } {
    return {
      outputModels: 'OutputModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputModels: { 'type': 'array', 'itemType': ListTrainingJobOutputModelsResponseBodyOutputModels },
    };
  }

  validate() {
    if(Array.isArray(this.outputModels)) {
      $dara.Model.validateArray(this.outputModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

