// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelGalleryModelsRequestConditions extends $dara.Model {
  /**
   * @remarks
   * The parameter name. ParameterSize is supported. Unit: M.
   * 
   * @example
   * ParameterSize
   */
  column?: string;
  /**
   * @remarks
   * The operator. For example, LessThan.
   * 
   * @example
   * LessThan
   */
  operator?: string;
  /**
   * @remarks
   * The value. If Column is set to ParameterSize, the value is an integer. Unit: M.
   * 
   * @example
   * 1024
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      operator: 'string',
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

export class ListModelGalleryModelsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The label key.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The label value.
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

export class ListModelGalleryModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The collection to which the model belongs. The collection for ModelGallery models is QuickStart.
   * 
   * @example
   * QuickStart
   */
  collections?: string;
  /**
   * @remarks
   * Specifies whether model compression is supported.
   */
  compressible?: boolean;
  /**
   * @remarks
   * The list of conditions.
   */
  conditions?: ListModelGalleryModelsRequestConditions[];
  /**
   * @remarks
   * Specifies whether deep thinking is supported.
   */
  deepThink?: boolean;
  /**
   * @remarks
   * Specifies whether online experience is supported.
   */
  demonstrable?: boolean;
  /**
   * @remarks
   * Specifies whether deployment is supported.
   */
  deployable?: boolean;
  /**
   * @remarks
   * Specifies whether distillation is supported.
   */
  distillable?: boolean;
  /**
   * @remarks
   * The domain used to filter the model list. For example, aigc (generative AI), nlp (natural language processing), or cv (computer vision).
   * 
   * @example
   * aigc
   */
  domain?: string;
  /**
   * @remarks
   * Specifies whether evaluation is supported.
   */
  evaluable?: boolean;
  /**
   * @remarks
   * Specifies whether FunctionCall is supported.
   */
  functionCall?: boolean;
  /**
   * @remarks
   * The model name. By default, fuzzy match is used to filter the model list. Enclose the name in double quotation marks for exact match. For example, "DeepSeek-V3.2" exactly matches the model DeepSeek-V3.2.
   * 
   * @example
   * Qwen3-235B-A22B-Thinking-2507
   */
  modelName?: string;
  /**
   * @remarks
   * The model series. For example, PAI Optimized Model, Qwen, Wan-AI, GLM, Baichuan, DeepSeek, Kimi, MiniMax, Yi, InternLM, InternVL, OpenAI, NVIDIA, Gemma, Phi, dots_vlm, Llama, Mistral, Stable Diffusion, FLUX, Byte Dance, StepFun AI, ERNIE Bot, Tencent Hunyuan, or YOLO.
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
   * Endpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The sort order for the specified sort field in a paged query. Default value: ASC.
   * 
   * Valid values:
   * - ASC: ascending order.
   * - DESC: descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The model source used to filter models that belong to a specific community or organization. For example, ModelScope, PAI, or NIM.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @remarks
   * The page number of the model list. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of models to display on each page in a paged query. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query condition. Fuzzy match is performed across multiple fields such as ModelName, Domain, and Task.
   * 
   * @example
   * Qwen
   */
  query?: string;
  /**
   * @remarks
   * The sort field for a paged query. Currently, the GmtCreateTime field is used for sorting. Valid values:
   * 
   * - GmtCreateTime: the model creation time.
   * 
   * - GmtLatestVersionModified: the time when the latest model version was updated.
   * 
   * - OrderNumber: the ordinal number.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The supported compression resources, such as CPU, GPU, or GP7V. For example, if you specify GP7V, only models that support compression on GP7V resources are returned.
   * 
   * @example
   * GP7V
   */
  supportedCompressionResource?: string;
  /**
   * @remarks
   * The supported distillation resources, such as CPU, GPU, or GP7V. For example, if you specify GP7V, only models that support distillation on GP7V resources are returned.
   * 
   * @example
   * GP7V
   */
  supportedDistillationResource?: string;
  /**
   * @remarks
   * The supported evaluation resources, such as CPU, GPU, or GP7V. For example, if you specify GP7V, only models that support evaluation on GP7V resources are returned.
   * 
   * @example
   * GP7V
   */
  supportedEvaluationResource?: string;
  /**
   * @remarks
   * The supported deployment resources, such as CPU, GPU, or GP7V. For example, if you specify GP7V, only models that support deployment on GP7V resources are returned.
   * 
   * @example
   * GP7V
   */
  supportedInferenceResource?: string;
  /**
   * @remarks
   * The supported training resources, such as CPU, GPU, or GP7V. For example, if you specify GP7V, only models that support training on GP7V resources are returned.
   * 
   * @example
   * GP7V
   */
  supportedTrainingResource?: string;
  /**
   * @remarks
   * The list of labels.
   */
  tag?: ListModelGalleryModelsRequestTag[];
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
   * Specifies whether training is supported.
   */
  trainable?: boolean;
  static names(): { [key: string]: string } {
    return {
      collections: 'Collections',
      compressible: 'Compressible',
      conditions: 'Conditions',
      deepThink: 'DeepThink',
      demonstrable: 'Demonstrable',
      deployable: 'Deployable',
      distillable: 'Distillable',
      domain: 'Domain',
      evaluable: 'Evaluable',
      functionCall: 'FunctionCall',
      modelName: 'ModelName',
      modelSeries: 'ModelSeries',
      modelType: 'ModelType',
      order: 'Order',
      origin: 'Origin',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      sortBy: 'SortBy',
      supportedCompressionResource: 'SupportedCompressionResource',
      supportedDistillationResource: 'SupportedDistillationResource',
      supportedEvaluationResource: 'SupportedEvaluationResource',
      supportedInferenceResource: 'SupportedInferenceResource',
      supportedTrainingResource: 'SupportedTrainingResource',
      tag: 'Tag',
      task: 'Task',
      trainable: 'Trainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collections: 'string',
      compressible: 'boolean',
      conditions: { 'type': 'array', 'itemType': ListModelGalleryModelsRequestConditions },
      deepThink: 'boolean',
      demonstrable: 'boolean',
      deployable: 'boolean',
      distillable: 'boolean',
      domain: 'string',
      evaluable: 'boolean',
      functionCall: 'boolean',
      modelName: 'string',
      modelSeries: 'string',
      modelType: 'string',
      order: 'string',
      origin: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      sortBy: 'string',
      supportedCompressionResource: 'string',
      supportedDistillationResource: 'string',
      supportedEvaluationResource: 'string',
      supportedInferenceResource: 'string',
      supportedTrainingResource: 'string',
      tag: { 'type': 'array', 'itemType': ListModelGalleryModelsRequestTag },
      task: 'string',
      trainable: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

