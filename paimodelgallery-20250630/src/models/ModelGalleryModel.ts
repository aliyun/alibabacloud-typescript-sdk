// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelGalleryModelTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class ModelGalleryModel extends $dara.Model {
  /**
   * @remarks
   * The collection to which the model belongs.
   * 
   * @example
   * QuickStart
   */
  collection?: string;
  /**
   * @remarks
   * Indicates whether compression is supported.
   * 
   * @example
   * true
   */
  compressible?: boolean;
  /**
   * @remarks
   * Indicates whether deep thinking is supported.
   * 
   * @example
   * true
   */
  deepThink?: boolean;
  /**
   * @remarks
   * Indicates whether online experience is supported.
   * 
   * @example
   * true
   */
  demonstrable?: boolean;
  /**
   * @remarks
   * Indicates whether deployment is supported.
   * 
   * @example
   * true
   */
  deployable?: boolean;
  /**
   * @remarks
   * Indicates whether distillation is supported.
   * 
   * @example
   * true
   */
  distillable?: boolean;
  /**
   * @remarks
   * The domain. For example, aigc (generative AI), nlp (natural language processing), or cv (computer vision).
   * 
   * @example
   * aigc
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether evaluation is supported.
   * 
   * @example
   * true
   */
  evaluable?: boolean;
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * {}
   */
  extraInfo?: { [key: string]: any };
  /**
   * @remarks
   * Indicates whether FunctionCall is supported.
   * 
   * @example
   * true
   */
  functionCall?: boolean;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-12-03T07:21:28.000Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time of the latest model version.
   * 
   * @example
   * 2025-12-03T07:21:28.000Z
   */
  gmtLatestVersionModified?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-12-03T07:21:28.000Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The latest model version.
   * 
   * @example
   * 1.0.0
   */
  latestVersionName?: string;
  /**
   * @remarks
   * The model description.
   * 
   * @example
   * Large language model
   */
  modelDescription?: string;
  /**
   * @remarks
   * The model documentation.
   * 
   * @example
   * http://
   */
  modelDoc?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * model-8npjorqxl8gmdo72nj
   */
  modelId?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Qwen3-235B-A22B-Thinking-2507
   */
  modelName?: string;
  /**
   * @remarks
   * The model series.
   * 
   * @example
   * Qwen
   */
  modelSeries?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * LoRA
   */
  modelType?: string;
  /**
   * @remarks
   * The ordinal number.
   * 
   * @example
   * 1
   */
  orderNumber?: number;
  /**
   * @remarks
   * The model source, used to filter the list of models that belong to a specific community or organization. For example, ModelScope, PAI, or NIM.
   * 
   * @example
   * PAI
   */
  origin?: string;
  /**
   * @remarks
   * The number of parameters, in millions (M).
   * 
   * @example
   * 1024
   */
  parameterSize?: number;
  /**
   * @remarks
   * The search keywords.
   * 
   * @example
   * llm
   */
  searchWords?: string;
  /**
   * @remarks
   * The supported compression methods.
   * 
   * @example
   * {
   *   "Methods": [{
   *     "Method": "Quantization",
   *     "SubMethod": "MinMax-8Bit",
   *     "Resource": "GPU"
   *   }]
   * }
   */
  supportedCompressionMethods?: { [key: string]: any };
  /**
   * @remarks
   * The resources supported for compression.
   * 
   * @example
   * GPU,GP7V
   */
  supportedCompressionResources?: string;
  /**
   * @remarks
   * The supported distillation methods.
   * 
   * @example
   * {
   *   "Methods": [{
   *     "Method": "EasyDistill",
   *     "SubMethod": "DataSynthesis",
   *     "Resource": "GPU"
   *   }]
   * }
   */
  supportedDistillationMethods?: { [key: string]: any };
  /**
   * @remarks
   * The resources supported for distillation.
   * 
   * @example
   * GPU,GP7V
   */
  supportedDistillationResources?: string;
  /**
   * @remarks
   * The supported evaluation methods.
   * 
   * @example
   * {
   *   "Methods": [{
   *     "Method": "Single-Node-Standard",
   *     "Resource": "GPU"
   *   }]
   * }
   */
  supportedEvaluationMethods?: { [key: string]: any };
  /**
   * @remarks
   * The resources supported for evaluation.
   * 
   * @example
   * GPU,GP7V
   */
  supportedEvaluationResources?: string;
  /**
   * @remarks
   * The supported deployment methods.
   * 
   * @example
   * {
   *   "Methods": [{
   *     "framework": "blade",
   *     "scenario": "nvidia-standard",
   *     "Resource": "GPU"
   *   }]
   * }
   */
  supportedInferenceMethods?: { [key: string]: any };
  /**
   * @remarks
   * The resources supported for deployment.
   * 
   * @example
   * GPU,GP7V
   */
  supportedInferenceResources?: string;
  /**
   * @remarks
   * The supported training methods.
   * 
   * @example
   * {
   *   "Methods": [{
   *     "Method": "SFT",
   *     "SubMethod": "LoRA_LLM",
   *     "Resource": "GPU"
   *   }]
   * }
   */
  supportedTrainingMethods?: { [key: string]: any };
  /**
   * @remarks
   * The resources supported for training.
   * 
   * @example
   * GPU,GP7V
   */
  supportedTrainingResources?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ModelGalleryModelTags;
  /**
   * @remarks
   * The task. For example, large-language-model (large language model), image-classification (image classification), or embedding.
   * 
   * @example
   * large-language-model
   */
  task?: string;
  /**
   * @remarks
   * Indicates whether training is supported.
   * 
   * @example
   * true
   */
  trainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      compressible: 'Compressible',
      deepThink: 'DeepThink',
      demonstrable: 'Demonstrable',
      deployable: 'Deployable',
      distillable: 'Distillable',
      domain: 'Domain',
      evaluable: 'Evaluable',
      extraInfo: 'ExtraInfo',
      functionCall: 'FunctionCall',
      gmtCreateTime: 'GmtCreateTime',
      gmtLatestVersionModified: 'GmtLatestVersionModified',
      gmtModifiedTime: 'GmtModifiedTime',
      latestVersionName: 'LatestVersionName',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelSeries: 'ModelSeries',
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      parameterSize: 'ParameterSize',
      searchWords: 'SearchWords',
      supportedCompressionMethods: 'SupportedCompressionMethods',
      supportedCompressionResources: 'SupportedCompressionResources',
      supportedDistillationMethods: 'SupportedDistillationMethods',
      supportedDistillationResources: 'SupportedDistillationResources',
      supportedEvaluationMethods: 'SupportedEvaluationMethods',
      supportedEvaluationResources: 'SupportedEvaluationResources',
      supportedInferenceMethods: 'SupportedInferenceMethods',
      supportedInferenceResources: 'SupportedInferenceResources',
      supportedTrainingMethods: 'SupportedTrainingMethods',
      supportedTrainingResources: 'SupportedTrainingResources',
      tags: 'Tags',
      task: 'Task',
      trainable: 'Trainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      compressible: 'boolean',
      deepThink: 'boolean',
      demonstrable: 'boolean',
      deployable: 'boolean',
      distillable: 'boolean',
      domain: 'string',
      evaluable: 'boolean',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      functionCall: 'boolean',
      gmtCreateTime: 'string',
      gmtLatestVersionModified: 'string',
      gmtModifiedTime: 'string',
      latestVersionName: 'string',
      modelDescription: 'string',
      modelDoc: 'string',
      modelId: 'string',
      modelName: 'string',
      modelSeries: 'string',
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      parameterSize: 'number',
      searchWords: 'string',
      supportedCompressionMethods: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      supportedCompressionResources: 'string',
      supportedDistillationMethods: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      supportedDistillationResources: 'string',
      supportedEvaluationMethods: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      supportedEvaluationResources: 'string',
      supportedInferenceMethods: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      supportedInferenceResources: 'string',
      supportedTrainingMethods: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      supportedTrainingResources: 'string',
      tags: ModelGalleryModelTags,
      task: 'string',
      trainable: 'boolean',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(this.supportedCompressionMethods) {
      $dara.Model.validateMap(this.supportedCompressionMethods);
    }
    if(this.supportedDistillationMethods) {
      $dara.Model.validateMap(this.supportedDistillationMethods);
    }
    if(this.supportedEvaluationMethods) {
      $dara.Model.validateMap(this.supportedEvaluationMethods);
    }
    if(this.supportedInferenceMethods) {
      $dara.Model.validateMap(this.supportedInferenceMethods);
    }
    if(this.supportedTrainingMethods) {
      $dara.Model.validateMap(this.supportedTrainingMethods);
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

