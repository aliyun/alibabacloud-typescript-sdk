// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelGalleryModelsRequestConditions extends $dara.Model {
  column?: string;
  operator?: string;
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
  key?: string;
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
  collections?: string;
  compressible?: boolean;
  conditions?: ListModelGalleryModelsRequestConditions[];
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
  tag?: ListModelGalleryModelsRequestTag[];
  task?: string;
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

