// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The approval status. Valid values:
   * 
   * - Pending: The model is pending approval.
   * 
   * - Approved: The model is approved to be published.
   * 
   * - Rejected: The model is not approved to be published.
   * 
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The compression configuration.
   * 
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @remarks
   * The distillation configuration.
   * 
   * @example
   * {}
   */
  distillationSpec?: { [key: string]: any };
  /**
   * @remarks
   * The evaluation configuration.
   * 
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @remarks
   * Other information.
   * 
   * @example
   * {
   * 	"CoverUris": ["https://e***u.oss-cn-hangzhou.aliyuncs.com/st****017.preview.png"],
   * 	"TrainedWords": ["albedo_overlord"]
   * }
   */
  extraInfo?: { [key: string]: any };
  /**
   * @remarks
   * Describes how to apply the model to downstream inference applications. For example, describe the processor and container for Elastic Algorithm Service (EAS). Example:
   * `{ "processor": "tensorflow_gpu_1.12" }`.
   * 
   * @example
   * {
   * 	"processor": "tensorflow_gpu_1.12"
   * }
   */
  inferenceSpec?: { [key: string]: any };
  /**
   * @remarks
   * The model metrics.
   * The length cannot exceed 8,192 characters after serialization.
   * 
   * @example
   * {
   *   "Results": [{
   *     "Dataset": {
   *       "DatasetId": "d-sdkjanksaklerhfd"
   *     },
   *     "Metrics": {
   *       "cer": 0.175
   *     }
   *   }, {
   *     "Dataset": {
   *       "Uri": "oss://xxxx/"
   *     },
   *     "Metrics": {
   *       "cer": 0.172
   *     }
   *   }]
   * }
   */
  metrics?: { [key: string]: any };
  /**
   * @remarks
   * The extended field. This field is a JSON string.
   * 
   * @example
   * {}
   */
  options?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * - If the source type is Custom, this field has no restrictions.
   * 
   * - If the source is PAIFlow or TrainingService, the format is as follows:
   * 
   * ```
   * region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
   * ```
   * 
   * The parameters are described as follows:
   * 
   * - region: the Alibaba Cloud region ID.
   * 
   * - workspaceId: the workspace ID.
   * 
   * - kind: the type. Valid values: PipelineRun (PAI pipeline) or ServiceJob (training service).
   * 
   * - id: the unique identifier.
   * 
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type of the model. Valid values:
   * 
   * - Custom (default): The model is a custom model.
   * 
   * - PAIFlow: The model is from a PAI pipeline.
   * 
   * - TrainingService: The model is from a PAI training service.
   * 
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @remarks
   * The training configuration. This is used for fine-tuning and incremental training.
   * 
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
   * @remarks
   * The description of the model version.
   * 
   * @example
   * General sentiment analysis.
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      compressionSpec: 'CompressionSpec',
      distillationSpec: 'DistillationSpec',
      evaluationSpec: 'EvaluationSpec',
      extraInfo: 'ExtraInfo',
      inferenceSpec: 'InferenceSpec',
      metrics: 'Metrics',
      options: 'Options',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      versionDescription: 'VersionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      compressionSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      distillationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      options: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      versionDescription: 'string',
    };
  }

  validate() {
    if(this.compressionSpec) {
      $dara.Model.validateMap(this.compressionSpec);
    }
    if(this.distillationSpec) {
      $dara.Model.validateMap(this.distillationSpec);
    }
    if(this.evaluationSpec) {
      $dara.Model.validateMap(this.evaluationSpec);
    }
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(this.inferenceSpec) {
      $dara.Model.validateMap(this.inferenceSpec);
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

