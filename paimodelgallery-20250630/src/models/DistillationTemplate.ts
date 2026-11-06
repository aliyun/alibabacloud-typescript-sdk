// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DistillationTemplateModelSlotsBackends extends $dara.Model {
  /**
   * @example
   * distillation
   */
  channel?: string;
  /**
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
  backends?: DistillationTemplateModelSlotsBackends[];
  /**
   * @example
   * 用于生成蒸馏数据的教师模型，建议选择推理能力强的模型。
   */
  description?: string;
  /**
   * @example
   * backend
   */
  key?: string;
  /**
   * @example
   * 教师模型
   */
  name?: string;
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
   * @example
   * 由教师模型对每个问题生成带推理过程的回答。
   */
  description?: string;
  /**
   * @example
   * cot_distill
   */
  key?: string;
  /**
   * @example
   * 生成思维链
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
   * @example
   * 任务类型
   */
  label?: string;
  /**
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
  modelTasks?: string[];
  trainingMethods?: string[];
  /**
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
   * @example
   * easydistill
   */
  algorithmName?: string;
  /**
   * @example
   * pai
   */
  algorithmProvider?: string;
  /**
   * @example
   * v2.0.0
   */
  algorithmVersion?: string;
  capabilityTags?: string[];
  /**
   * @example
   * reasoning
   */
  category?: string;
  /**
   * @example
   * job_type: advanced_cot_distill
   */
  defaultConfig?: string;
  /**
   * @example
   * 面向数学、逻辑、代码等需要多步推理的场景，产出 SFT 数据集。
   */
  description?: string;
  inputDatasetMustBeDirectory?: boolean;
  /**
   * @example
   * oss://pai-quickstart-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/public_datasets/distillation_examples/advanced_cot_distill/input.jsonl
   */
  inputExampleUri?: string;
  /**
   * @example
   * advanced_cot_distill
   */
  jobType?: string;
  modelSlots?: DistillationTemplateModelSlots[];
  /**
   * @example
   * 10
   */
  orderNumber?: number;
  pipelineStages?: DistillationTemplatePipelineStages[];
  presetConfig?: DistillationTemplatePresetConfig[];
  /**
   * @example
   * oss://pai-quickstart-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/public_datasets/distillation_examples/custom_distill/processor_example.py
   */
  processorExampleUri?: string;
  /**
   * @example
   * advanced_cot_distill
   */
  templateId?: string;
  /**
   * @example
   * scenario
   */
  templateKind?: string;
  /**
   * @example
   * 思维链推理蒸馏
   */
  templateName?: string;
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
      processorExampleUri: 'ProcessorExampleUri',
      templateId: 'TemplateId',
      templateKind: 'TemplateKind',
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
      processorExampleUri: 'string',
      templateId: 'string',
      templateKind: 'string',
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

