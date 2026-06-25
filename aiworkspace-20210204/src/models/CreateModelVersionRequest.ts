// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class CreateModelVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The approval status. Valid values:
   * 
   * - Pending: The version is pending approval.
   * 
   * - Approved: The version is approved for deployment.
   * 
   * - Rejected: The version is rejected for deployment.
   * 
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The compression configurations.
   * 
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @remarks
   * The distillation configurations.
   * 
   * @example
   * {}
   */
  distillationSpec?: { [key: string]: any };
  /**
   * @remarks
   * The evaluation configurations.
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
   * The format of the model. Valid values:
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
   * The framework of the model. Valid values:
   * 
   * - Pytorch
   * 
   * - XGBoost
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
   * The configurations for downstream inference services, such as the processor and container for Elastic Algorithm Service (EAS). Example:
   * `{ "processor": "tensorflow_gpu_1.12" }`
   * 
   * @example
   * {
   *     "processor": "tensorflow_gpu_1.12"
   * }
   */
  inferenceSpec?: { [key: string]: any };
  /**
   * @remarks
   * The list of labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The model metrics.
   * The serialized data cannot exceed 8,192 bytes in length.
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
   * The extended fields. This parameter is a JSON string.
   * 
   * @example
   * {}
   */
  options?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * - If SourceType is set to Custom, this parameter has no format restrictions.
   * 
   * - If SourceType is PAIFlow or TrainingService, the value must be in the following format:
   * 
   * ```
   * region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
   * ```
   * 
   * The fields are described as follows:
   * 
   * - region: The ID of the Alibaba Cloud region.
   * 
   * - workspaceId: The ID of the workspace.
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
   * - Custom (default): The model is custom.
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
   * The training configurations. These configurations are used for fine-tuning and incremental training.
   * 
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
   * @remarks
   * The URI of the model version, which is the storage location of the model. The following types of model URIs are supported:
   * 
   * - An HTTP or HTTPS URL of the model. Example: `https://myweb.com/mymodel.tar.gz`.
   * 
   * - If the model is stored in Object Storage Service (OSS), the URI must be in the `oss://<bucket>.<endpoint>/object` format. For more information about endpoints, see [Endpoints](https://help.aliyun.com/document_detail/31837.html). Example: `oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/`.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/
   */
  uri?: string;
  /**
   * @remarks
   * The description of the model version.
   * 
   * @example
   * Sentiment analysis.
   */
  versionDescription?: string;
  /**
   * @remarks
   * The model version. The version must be unique within the model. If you do not specify this parameter, the first version defaults to **0.1.0**. The minor version number is then incremented by 1 for each subsequent version. For example, the second version defaults to **0.2.0**.
   * A version number consists of a major version, a minor version, and a patch version, separated by periods (.). The major and minor versions are numbers. The patch version can start with a number and contain underscores (_) and letters. Examples: 1.1.0 and 2.3.4_beta.
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
      inferenceSpec: 'InferenceSpec',
      labels: 'Labels',
      metrics: 'Metrics',
      options: 'Options',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      uri: 'Uri',
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
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': Label },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      options: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      uri: 'string',
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

