// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelGalleryModelsShrinkRequest extends $dara.Model {
  collections?: string;
  compressible?: boolean;
  conditionsShrink?: string;
  deepThink?: boolean;
  demonstrable?: boolean;
  deployable?: boolean;
  distillable?: boolean;
  /**
   * @example
   * Distillation
   */
  domain?: string;
  evaluable?: boolean;
  functionCall?: boolean;
  modelName?: string;
  modelSeries?: string;
  modelType?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
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
  query?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  supportedCompressionResource?: string;
  supportedDistillationResource?: string;
  supportedEvaluationResource?: string;
  supportedInferenceResource?: string;
  supportedTrainingResource?: string;
  tagShrink?: string;
  task?: string;
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

