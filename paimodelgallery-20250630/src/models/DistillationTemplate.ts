// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DistillationTemplateModelSlotsBackends extends $dara.Model {
  /**
   * @remarks
   * The channel name of the PAI-Token gateway. The frontend uses this value to retrieve the list of available models for the channel. This value must be passed back as-is upon submission. This parameter is returned only when Type is pai_token.
   * 
   * @example
   * distillation
   */
  channel?: string;
  /**
   * @remarks
   * The model access method. pai_token indicates the PAI-Token gateway, where the user selects from the list of available models for the channel. pai_eas indicates the user\\"s own PAI-EAS service instance, which requires the service address and token.
   * 
   * @example
   * pai_token
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistillationTemplateModelSlots extends $dara.Model {
  /**
   * @remarks
   * The list of model access methods supported by this slot.
   */
  backends?: DistillationTemplateModelSlotsBackends[];
  /**
   * @remarks
   * The slot description, localized based on the requested language.
   * 
   * @example
   * The teacher model used to generate distillation data. We recommend selecting a model with strong reasoning capabilities
   */
  description?: string;
  /**
   * @remarks
   * The slot identifier, which corresponds to the backend section name in the submitted configuration.
   * 
   * @example
   * backend
   */
  key?: string;
  /**
   * @remarks
   * The slot display name, localized based on the requested language.
   * 
   * @example
   * Teacher model
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether this slot is required. If this parameter is set to false, the user can skip the selection, and the algorithm falls back to other slots.
   */
  required?: boolean;
  static names(): { [key: string]: string } {
    return {
      backends: 'Backends',
      description: 'Description',
      key: 'Key',
      name: 'Name',
      required: 'Required',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backends: { 'type': 'array', 'itemType': DistillationTemplateModelSlotsBackends },
      description: 'string',
      key: 'string',
      name: 'string',
      required: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.backends)) {
      $dara.Model.validateArray(this.backends);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistillationTemplatePipelineStages extends $dara.Model {
  /**
   * @remarks
   * The stage description, localized based on the requested language.
   * 
   * @example
   * The teacher model generates responses with reasoning processes for each question
   */
  description?: string;
  /**
   * @remarks
   * The stage identifier, which corresponds to the value of pipeline[].stage in the algorithm configuration.
   * 
   * @example
   * cot_distill
   */
  key?: string;
  /**
   * @remarks
   * The stage display name, localized based on the requested language.
   * 
   * @example
   * Generate chain of thought
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      key: 'Key',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      key: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistillationTemplatePresetConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration item name, localized based on the requested language. Names are matched by position across languages, so the same row can have different names in different languages.
   * 
   * @example
   * Task type
   */
  label?: string;
  /**
   * @remarks
   * The configuration item value, localized based on the requested language.
   * 
   * @example
   * advanced_cot_distill
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
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

export class DistillationTemplateTrainingOptions extends $dara.Model {
  /**
   * @remarks
   * The range of Model Gallery tasks available for the student model.
   */
  modelTasks?: string[];
  /**
   * @remarks
   * The list of supported training method families.
   */
  trainingMethods?: string[];
  /**
   * @remarks
   * The training type. The frontend uses this value to select the training workflow and display text.
   * 
   * @example
   * sft
   */
  trainingType?: string;
  static names(): { [key: string]: string } {
    return {
      modelTasks: 'ModelTasks',
      trainingMethods: 'TrainingMethods',
      trainingType: 'TrainingType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelTasks: { 'type': 'array', 'itemType': 'string' },
      trainingMethods: { 'type': 'array', 'itemType': 'string' },
      trainingType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelTasks)) {
      $dara.Model.validateArray(this.modelTasks);
    }
    if(Array.isArray(this.trainingMethods)) {
      $dara.Model.validateArray(this.trainingMethods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DistillationTemplate extends $dara.Model {
  /**
   * @remarks
   * The algorithm name.
   * 
   * @example
   * easydistill
   */
  algorithmName?: string;
  /**
   * @remarks
   * The algorithm provider.
   * 
   * @example
   * pai
   */
  algorithmProvider?: string;
  /**
   * @remarks
   * The algorithm version.
   * 
   * @example
   * v2.0.0
   */
  algorithmVersion?: string;
  /**
   * @remarks
   * The list of capability tags used for displaying scenario cards.
   */
  capabilityTags?: string[];
  /**
   * @remarks
   * The template category. The frontend uses this value to filter scenario cards.
   * 
   * @example
   * reasoning
   */
  category?: string;
  /**
   * @remarks
   * The raw YAML content of the EasyDistill default configurations. The frontend uses this content for rendering the configuration form and supports recovering to default configurations. The model and credential fields are intentionally left empty and are populated by the user in the form upon commit.
   * 
   * @example
   * job_type: advanced_cot_distill
   */
  defaultConfig?: string;
  /**
   * @remarks
   * The template description, localized based on the requested language. The description specifies the applicable scenarios and outputs.
   * 
   * @example
   * Designed for scenarios that require multi-step reasoning such as math, logic, and code. Produces an SFT dataset
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether the input data must be an entire directory. If this parameter is set to true, only a directory can be selected on the form, not a single file. If this parameter is absent or set to false, either a file or a directory can be selected. This value is true when seed files reference other files in the same directory by relative path.
   */
  inputDatasetMustBeDirectory?: boolean;
  /**
   * @remarks
   * The OSS address of the sample input data, rendered based on the region. Users can download the sample and prepare their own data in the same format. An empty value indicates that the template does not provide a sample.
   * 
   * @example
   * oss://pai-quickstart-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/public_datasets/distillation_examples/advanced_cot_distill/input.jsonl
   */
  inputExampleUri?: string;
  /**
   * @remarks
   * The algorithm job type. The value is the same as TemplateId.
   * 
   * @example
   * advanced_cot_distill
   */
  jobType?: string;
  /**
   * @remarks
   * The list of model slots that require user selection. The frontend uses this list to render the model selection form.
   */
  modelSlots?: DistillationTemplateModelSlots[];
  /**
   * @remarks
   * The display order. A smaller value indicates a higher priority.
   * 
   * @example
   * 10
   */
  orderNumber?: number;
  /**
   * @remarks
   * The list of pipeline stages. The order of the stages represents the execution order.
   */
  pipelineStages?: DistillationTemplatePipelineStages[];
  /**
   * @remarks
   * The content of the preset configuration card, displayed in order to show the key default configurations of the template.
   */
  presetConfig?: DistillationTemplatePresetConfig[];
  /**
   * @remarks
   * The distillation template ID, which is the same as the algorithm job_type. Pass this value as TemplateId when creating a task plan.
   * 
   * @example
   * advanced_cot_distill
   */
  templateId?: string;
  /**
   * @remarks
   * The template display name, localized based on the requested language.
   * 
   * @example
   * Chain-of-thought reasoning distillation
   */
  templateName?: string;
  /**
   * @remarks
   * The capability declaration for the second stage (training the student model with the distilled data). An empty value indicates that the template supports only the distillation stage.
   */
  trainingOptions?: DistillationTemplateTrainingOptions[];
  static names(): { [key: string]: string } {
    return {
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmVersion: 'AlgorithmVersion',
      capabilityTags: 'CapabilityTags',
      category: 'Category',
      defaultConfig: 'DefaultConfig',
      description: 'Description',
      inputDatasetMustBeDirectory: 'InputDatasetMustBeDirectory',
      inputExampleUri: 'InputExampleUri',
      jobType: 'JobType',
      modelSlots: 'ModelSlots',
      orderNumber: 'OrderNumber',
      pipelineStages: 'PipelineStages',
      presetConfig: 'PresetConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      trainingOptions: 'TrainingOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmVersion: 'string',
      capabilityTags: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      defaultConfig: 'string',
      description: 'string',
      inputDatasetMustBeDirectory: 'boolean',
      inputExampleUri: 'string',
      jobType: 'string',
      modelSlots: { 'type': 'array', 'itemType': DistillationTemplateModelSlots },
      orderNumber: 'number',
      pipelineStages: { 'type': 'array', 'itemType': DistillationTemplatePipelineStages },
      presetConfig: { 'type': 'array', 'itemType': DistillationTemplatePresetConfig },
      templateId: 'string',
      templateName: 'string',
      trainingOptions: { 'type': 'array', 'itemType': DistillationTemplateTrainingOptions },
    };
  }

  validate() {
    if(Array.isArray(this.capabilityTags)) {
      $dara.Model.validateArray(this.capabilityTags);
    }
    if(Array.isArray(this.modelSlots)) {
      $dara.Model.validateArray(this.modelSlots);
    }
    if(Array.isArray(this.pipelineStages)) {
      $dara.Model.validateArray(this.pipelineStages);
    }
    if(Array.isArray(this.presetConfig)) {
      $dara.Model.validateArray(this.presetConfig);
    }
    if(Array.isArray(this.trainingOptions)) {
      $dara.Model.validateArray(this.trainingOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

