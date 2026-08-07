// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelGalleryModelsShrinkRequest extends $dara.Model {
  /**
   * @example
   * QuickStart
   */
  collections?: string;
  /**
   * @example
   * true
   */
  compressible?: boolean;
  conditionsShrink?: string;
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
   * true
   */
  functionCall?: boolean;
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
   * DESC
   */
  order?: string;
  /**
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * Qwen
   */
  query?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * GP7V
   */
  supportedCompressionResource?: string;
  /**
   * @example
   * GP7V
   */
  supportedDistillationResource?: string;
  /**
   * @example
   * GP7V
   */
  supportedEvaluationResource?: string;
  /**
   * @example
   * GP7V
   */
  supportedInferenceResource?: string;
  /**
   * @example
   * GP7V
   */
  supportedTrainingResource?: string;
  tagShrink?: string;
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
      collections: 'Collections',
      compressible: 'Compressible',
      conditionsShrink: 'Conditions',
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
      tagShrink: 'Tag',
      task: 'Task',
      trainable: 'Trainable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collections: 'string',
      compressible: 'boolean',
      conditionsShrink: 'string',
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
      tagShrink: 'string',
      task: 'string',
      trainable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

