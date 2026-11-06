// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DistillationTemplateSummaryPipelineStages extends $dara.Model {
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

export class DistillationTemplateSummaryTrainingOptions extends $dara.Model {
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

export class DistillationTemplateSummary extends $dara.Model {
  capabilityTags?: string[];
  /**
   * @example
   * reasoning
   */
  category?: string;
  /**
   * @example
   * 面向数学、逻辑、代码等需要多步推理的场景，产出 SFT 数据集。
   */
  description?: string;
  /**
   * @example
   * advanced_cot_distill
   */
  jobType?: string;
  /**
   * @example
   * 10
   */
  orderNumber?: number;
  pipelineStages?: DistillationTemplateSummaryPipelineStages[];
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
  trainingOptions?: DistillationTemplateSummaryTrainingOptions[];
  static names(): { [key: string]: string } {
    return {
      capabilityTags: 'CapabilityTags',
      category: 'Category',
      description: 'Description',
      jobType: 'JobType',
      orderNumber: 'OrderNumber',
      pipelineStages: 'PipelineStages',
      templateId: 'TemplateId',
      templateKind: 'TemplateKind',
      templateName: 'TemplateName',
      trainingOptions: 'TrainingOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capabilityTags: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      description: 'string',
      jobType: 'string',
      orderNumber: 'number',
      pipelineStages: { 'type': 'array', 'itemType': DistillationTemplateSummaryPipelineStages },
      templateId: 'string',
      templateKind: 'string',
      templateName: 'string',
      trainingOptions: { 'type': 'array', 'itemType': DistillationTemplateSummaryTrainingOptions },
    };
  }

  validate() {
    if(Array.isArray(this.capabilityTags)) {
      $dara.Model.validateArray(this.capabilityTags);
    }
    if(Array.isArray(this.pipelineStages)) {
      $dara.Model.validateArray(this.pipelineStages);
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

