// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrainingJobOutputModelsResponseBodyOutputModelsLabels } from "./ListTrainingJobOutputModelsResponseBodyOutputModelsLabels";


export class ListTrainingJobOutputModelsResponseBodyOutputModels extends $dara.Model {
  compressionSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  inferenceSpec?: { [key: string]: any };
  labels?: ListTrainingJobOutputModelsResponseBodyOutputModelsLabels[];
  /**
   * @example
   * {
   *       "lr": 0.000001,
   *       "train_loss": 2.6345
   * }
   */
  metrics?: { [key: string]: any };
  /**
   * @example
   * model
   */
  outputChannelName?: string;
  /**
   * @example
   * region=cn-shanghai,workspaceId=1345,kind=PipelineRun,id=run-sakdbaskjdf
   */
  sourceId?: string;
  /**
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
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

