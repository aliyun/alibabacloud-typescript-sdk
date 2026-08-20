// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ModelGalleryModelTags extends $dara.Model {
  /**
   * @example
   * k1
   */
  key?: string;
  /**
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
   * @example
   * QuickStart
   */
  collection?: string;
  /**
   * @example
   * true
   */
  compressible?: boolean;
  /**
   * @example
   * true
   */
  deepThink?: boolean;
  /**
   * @example
   * true
   */
  demonstrable?: boolean;
  /**
   * @example
   * true
   */
  deployable?: boolean;
  /**
   * @example
   * true
   */
  distillable?: boolean;
  /**
   * @example
   * aigc
   */
  domain?: string;
  /**
   * @example
   * true
   */
  evaluable?: boolean;
  /**
   * @example
   * {}
   */
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * true
   */
  functionCall?: boolean;
  /**
   * @example
   * 2026-04-03T05:54:02.000Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2025-12-03T07:21:28.000Z
   */
  gmtLatestVersionModified?: string;
  /**
   * @example
   * 2026-04-03T05:54:02.000Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 1.0.0
   */
  latestVersionName?: string;
  /**
   * @example
   * 大语言模型。
   */
  modelDescription?: string;
  /**
   * @example
   * http://pai-quickstart-test.com
   */
  modelDoc?: string;
  /**
   * @example
   * model-gj5mifpeol92kx619y
   */
  modelId?: string;
  /**
   * @example
   * Qwen3-235B-A22B-Thinking-2507
   */
  modelName?: string;
  /**
   * @example
   * Qwen
   */
  modelSeries?: string;
  /**
   * @example
   * LoRA
   */
  modelType?: string;
  /**
   * @example
   * 1
   */
  orderNumber?: number;
  /**
   * @example
   * PAI
   */
  origin?: string;
  /**
   * @example
   * 1024
   */
  parameterSize?: number;
  /**
   * @example
   * llm
   */
  searchWords?: string;
  /**
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
   * @example
   * GPU,GP7V
   */
  supportedCompressionResources?: string;
  /**
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
   * @example
   * GPU,GP7V
   */
  supportedDistillationResources?: string;
  /**
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
   * @example
   * GPU,GP7V
   */
  supportedEvaluationResources?: string;
  /**
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
   * @example
   * GPU,GP7V
   */
  supportedInferenceResources?: string;
  /**
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
   * @example
   * GPU,GP7V
   */
  supportedTrainingResources?: string;
  tags?: ModelGalleryModelTags;
  /**
   * @example
   * large-language-model
   */
  task?: string;
  /**
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

