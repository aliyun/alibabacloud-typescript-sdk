// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DistillationTemplateSummaryPipelineStages extends $dara.Model {
  /**
   * @remarks
   * The stage description, localized based on the language specified in the request.
   * 
   * @example
   * The teacher model generates reasoning-augmented responses for each question
   */
  description?: string;
  /**
   * @remarks
   * The stage identifier, which corresponds to the pipeline[].stage value in the algorithm configuration.
   * 
   * @example
   * cot_distill
   */
  key?: string;
  /**
   * @remarks
   * The stage display name, localized based on the language specified in the request.
   * 
   * @example
   * Generate Chain-of-Thought
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
  /**
   * @remarks
   * The available Model Gallery Task values for the student model.
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

export class DistillationTemplateSummary extends $dara.Model {
  /**
   * @remarks
   * The list of capability tags, used for scenario card display.
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
   * The template description, localized based on the language specified in the request. The description specifies applicable scenarios and outputs.
   * 
   * @example
   * Designed for scenarios that require multi-step reasoning, such as math, logic, and code. Produces an SFT dataset
   */
  description?: string;
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
   * The display order. A smaller value indicates a higher position.
   * 
   * @example
   * 10
   */
  orderNumber?: number;
  /**
   * @remarks
   * The list of pipeline stages. The order of the stages represents the execution order.
   */
  pipelineStages?: DistillationTemplateSummaryPipelineStages[];
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
   * The template display name, localized based on the language specified in the request.
   * 
   * @example
   * Chain-of-Thought Reasoning Distillation
   */
  templateName?: string;
  /**
   * @remarks
   * The capability declaration for the second stage, in which the distilled data is used to train the student model. An empty value indicates that the template supports only the distillation stage.
   */
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

