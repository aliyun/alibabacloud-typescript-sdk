// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ModelGalleryModelTags extends $dara.Model {
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

export class ModelGalleryModel extends $dara.Model {
  collection?: string;
  compressible?: boolean;
  deepThink?: boolean;
  demonstrable?: boolean;
  deployable?: boolean;
  distillable?: boolean;
  domain?: string;
  evaluable?: boolean;
  extraInfo?: { [key: string]: any };
  functionCall?: boolean;
  gmtCreateTime?: string;
  gmtLatestVersionModified?: string;
  gmtModifiedTime?: string;
  latestVersionName?: string;
  modelDescription?: string;
  modelDoc?: string;
  modelId?: string;
  modelName?: string;
  modelSeries?: string;
  modelType?: string;
  orderNumber?: number;
  origin?: string;
  parameterSize?: number;
  searchWords?: string;
  supportedCompressionMethods?: { [key: string]: any };
  supportedCompressionResources?: string;
  supportedDistillationMethods?: { [key: string]: any };
  supportedDistillationResources?: string;
  supportedEvaluationMethods?: { [key: string]: any };
  supportedEvaluationResources?: string;
  supportedInferenceMethods?: { [key: string]: any };
  supportedInferenceResources?: string;
  supportedTrainingMethods?: { [key: string]: any };
  supportedTrainingResources?: string;
  tags?: ModelGalleryModelTags;
  task?: string;
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

