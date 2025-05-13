// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";


export class CreateModelVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The approval status. Valid values:
   * 
   * *   Pending
   * *   Approved
   * *   Rejected
   * 
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @remarks
   * Compression Configuration
   * 
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @remarks
   * Evaluation Configuration
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
   * *   OfflineModel
   * *   SavedModel
   * *   Keras H5
   * *   Frozen Pb
   * *   Caffe Prototxt
   * *   TorchScript
   * *   XGBoost
   * *   PMML
   * *   AlinkModel
   * *   ONNX
   * 
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @remarks
   * The framework of the model. Valid values:
   * 
   * *   Pytorch 
   * *   XGBoost
   * *   Keras
   * *   Caffe
   * *   Alink
   * *   Xflow
   * *   TensorFlow
   * 
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @remarks
   * Describes how to apply to downstream inference services. For example, describes the processor and container of EAS. Example: `{ "processor": "tensorflow_gpu_1.12" }`
   * 
   * @example
   * {
   *     "processor": "tensorflow_gpu_1.12"
   * }
   */
  inferenceSpec?: { [key: string]: any };
  /**
   * @remarks
   * The tags.
   */
  labels?: Label[];
  /**
   * @remarks
   * The metrics for the model. The length after serialization is limited to 8,192.
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
   * The extended field. This is a JSON string.
   * 
   * @example
   * {}
   */
  options?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * *   If the source type is Custom, this field is not limited.
   * *   If the source is PAIFlow or TrainingService, the format is:
   * 
   * <!---->
   * 
   *     region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
   * 
   * Where,
   * 
   * *   region is the region ID.
   * *   workspaceId is the ID of the workspace.
   * *   kind is the type. Valid values: PipelineRun (PAIFlow) and ServiceJob (training service).
   * *   id: a unique identifier.
   * 
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the model source. Valid values:
   * 
   * *   Custom (default)
   * *   PAIFlow
   * *   TrainingService: PAI training service.
   * 
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @remarks
   * The training configurations. Used for fine-tuning and incremental training.
   * 
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
   * @remarks
   * The URI of the model version, which is the location where the model is stored. Valid values:
   * 
   * *   The HTTP(S) address of the model. Example: `https://myweb.com/mymodel.tar.gz`.
   * *   The OSS path of the model, in the format of `oss://<bucket>.<endpoint>/object`. For endpoint, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html). Example: `oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/`.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/
   */
  uri?: string;
  /**
   * @remarks
   * The version descriptions.
   */
  versionDescription?: string;
  /**
   * @remarks
   * The model version, which is unique for each model. If left empty, the first version is **0.1.0** by default. After that, the version number is increased by 1 in sequence. For example, the second version number is **0.2.0**. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). Among them: the major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
   * 
   * @example
   * 0.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      compressionSpec: 'CompressionSpec',
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

