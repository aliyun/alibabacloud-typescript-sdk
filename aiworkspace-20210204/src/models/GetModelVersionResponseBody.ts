// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class GetModelVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The approval status. Valid values:
   * 
   * - Pending: The model is pending approval.
   * 
   * - Approved: The model is approved for publishing.
   * 
   * - Rejected: The model is rejected for publishing.
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
   * The model format. Valid values:
   * 
   * - OfflineModel
   * 
   * - SavedModel
   * 
   * - Keras H5
   * 
   * - Frozen Pb
   * 
   * - Caffe Prototxt
   * 
   * - TorchScript
   * 
   * - XGBoost
   * 
   * - PMML
   * 
   * - AlinkModel
   * 
   * - ONNX
   * 
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @remarks
   * The model framework. Valid values:
   * 
   * - Pytorch
   *   -XGBoost
   * 
   * - Keras
   * 
   * - Caffe
   * 
   * - Alink
   * 
   * - Xflow
   * 
   * - TensorFlow
   * 
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @remarks
   * The UTC time when the model was created. The time is in the ISO 8601 format.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The UTC time when the model was last updated. The time is in the ISO 8601 format.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Describes how to apply the model to a downstream inference service. For example, this can describe the processor and container for Elastic Algorithm Service (EAS).
   * 
   * @example
   * {
   *     "Processor": "tensorflow_gpu_1.12"
   * }
   */
  inferenceSpec?: { [key: string]: any };
  /**
   * @remarks
   * The list of labels for the model version.
   */
  labels?: Label[];
  /**
   * @remarks
   * The metrics.
   * 
   * @example
   * {}
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
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1234567890******
   */
  ownerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * - If the source type is Custom, this field has no limits.
   * 
   * - If the source is PAIFlow or TrainingService, the format is:
   * 
   * ```
   * region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
   * ```
   * 
   * The parameters are:
   * 
   * - region: The ID of the Alibaba Cloud region.
   * 
   * - workspaceId: The workspace ID.
   * 
   * - kind: The type. Valid values: PipelineRun (PAI pipeline) and ServiceJob (training service).
   * 
   * - id: The unique identifier.
   * 
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type of the model. Valid values:
   * 
   * - Custom: The model is a custom model.
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
   * The training configuration. This is the configuration for fine-tuning and incremental training.
   * 
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
   * @remarks
   * The URI of the model version. This is the storage location of the model. Valid values:
   * 
   * - The HTTP or HTTPS URL of the model. Example: `https://myweb.com/mymodel.tar.gz`.
   * 
   * - If the model is stored in Object Storage Service (OSS), the format is `oss://<bucket>.<endpoint>/object`. For more information about how to configure the endpoint, see [Endpoints](https://help.aliyun.com/document_detail/31837.html). Example: `oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/`.
   */
  uri?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1234567890******
   */
  userId?: string;
  /**
   * @remarks
   * The description of the model version.
   * 
   * @example
   * General sentiment analysis.
   */
  versionDescription?: string;
  /**
   * @remarks
   * The model version.
   * 
   * @example
   * 0.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      compressionSpec: 'CompressionSpec',
      distillationSpec: 'DistillationSpec',
      evaluationSpec: 'EvaluationSpec',
      extraInfo: 'ExtraInfo',
      formatType: 'FormatType',
      frameworkType: 'FrameworkType',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      inferenceSpec: 'InferenceSpec',
      labels: 'Labels',
      metrics: 'Metrics',
      options: 'Options',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      uri: 'Uri',
      userId: 'UserId',
      versionDescription: 'VersionDescription',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      compressionSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      distillationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formatType: 'string',
      frameworkType: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': Label },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      options: 'string',
      ownerId: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      uri: 'string',
      userId: 'string',
      versionDescription: 'string',
      versionName: 'string',
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

