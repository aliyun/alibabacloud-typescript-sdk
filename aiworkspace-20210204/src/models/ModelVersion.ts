// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelVersionLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the label.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The value of the label.
   * 
   * @example
   * v1
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

export class ModelVersion extends $dara.Model {
  /**
   * @remarks
   * The approval status. Valid values:
   * - Pending: pending.
   * - Approved: approved for going live.
   * - Rejected: not approved for going live.
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
   * The additional information.
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
   * The model format.
   * - OfflineModel
   * - SavedModel
   * - Keras H5
   * - Frozen Pb
   * - Caffe Prototxt
   * - TorchScript
   * - XGBoost
   * - PMML
   * - AlinkModel
   * - ONNX
   * 
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @remarks
   * The model framework.
   * - Pytorch
   * - XGBoost
   * - Keras
   * - Caffe
   * - Alink
   * - Xflow
   * - TensorFlow
   * 
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @remarks
   * The UTC time of model creation, in ISO 8601 format.
   * 
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The UTC time when the model was last updated, in ISO 8601 format.
   * 
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Describes how to apply the model to downstream inference applications, such as specifying the EAS processor or container. Example:
   * `{
   *     "processor": "tensorflow_gpu_1.12"
   * }`
   * 
   * @example
   * {
   * 	"processor": "tensorflow_gpu_1.12"
   * }
   */
  inferenceSpec?: { [key: string]: any };
  /**
   * @remarks
   * The label list.
   */
  labels?: ModelVersionLabels[];
  /**
   * @remarks
   * The model metrics.
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
   * The extended fields. JsonString type.
   * 
   * @example
   * {}
   */
  options?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 155770209******
   */
  ownerId?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * * If the source type is Custom, this field has no restrictions.
   * 
   * * If the source type is PAIFlow or TrainingService, the format is: 
   * ```
   * region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
   * ```
   * region is the Alibaba Cloud region ID. workspaceId is the workspace ID. kind specifies the type. Valid values: PipelineRun (PAI workflow) and ServiceJob (training service). id is the unique identifier.
   * 
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @remarks
   * The model source type. Default value: Custom.
   * 
   * - Custom: custom.
   * - PAIFlow: PAI workflow.
   * - TrainingService: PAI training service.
   * 
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @remarks
   * The training configuration. Used for fine-tuning and incremental training.
   * 
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
   * @remarks
   * The model version URI, which specifies the model storage location. This can be an HTTP(S) address of the model, such as `https://myweb.com/mymodel.tar.gz`. If the model is stored in OSS, the format is `oss://<bucket>.<endpoint>/object`. You can query the endpoint in the OSS console. Example: `oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/`.
   * 
   * @example
   * oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/
   */
  uri?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 155770209******
   */
  userId?: string;
  /**
   * @remarks
   * The model version description.
   * 
   * @example
   * Sentiment analysis
   */
  versionDescription?: string;
  /**
   * @remarks
   * The model version, unique within the model. If not specified, the first version defaults to `0.1.0`, and subsequent versions increment the minor version number by 1. For example, the second version defaults to `0.2.0`.
   * 
   * The version number consists of a major version number, a minor version number, and a stage version number, separated by `.`. The major and minor version numbers are numeric. The stage version number starts with a digit, followed by `_` and letters. Examples: 1.1.0 or 2.3.4_beta.
   * 
   * Regular expression reference: `"^\\d+\\.\\d+\\.\\d+(_\\w+)?$"`
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
      labels: { 'type': 'array', 'itemType': ModelVersionLabels },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      options: 'string',
      ownerId: 'string',
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

