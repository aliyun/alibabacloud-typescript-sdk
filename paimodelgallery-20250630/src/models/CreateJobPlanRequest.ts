// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobPlanRequestJobPlanSteps extends $dara.Model {
  /**
   * @remarks
   * The name of the job plan step.
   * 
   * @example
   * DatasetSynthesis
   */
  jobPlanStepName?: string;
  /**
   * @remarks
   * The detailed configuration of the job plan step.
   */
  jobPlanStepSpec?: { [key: string]: any };
  /**
   * @remarks
   * The type of the job plan step.
   * 
   * @example
   * PAIFlow
   */
  jobPlanStepType?: string;
  static names(): { [key: string]: string } {
    return {
      jobPlanStepName: 'JobPlanStepName',
      jobPlanStepSpec: 'JobPlanStepSpec',
      jobPlanStepType: 'JobPlanStepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobPlanStepName: 'string',
      jobPlanStepSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      jobPlanStepType: 'string',
    };
  }

  validate() {
    if(this.jobPlanStepSpec) {
      $dara.Model.validateMap(this.jobPlanStepSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobPlanRequestTag extends $dara.Model {
  /**
   * @remarks
   * **Key**
   * 
   * @example
   * foo
   */
  key?: string;
  /**
   * @remarks
   * **Value**
   * 
   * @example
   * bar
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

export class CreateJobPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the job plan.
   * 
   * @example
   * ModelGalleryxxx
   */
  jobPlanName?: string;
  /**
   * @remarks
   * The steps of the job plan.
   */
  jobPlanSteps?: CreateJobPlanRequestJobPlanSteps[];
  /**
   * @remarks
   * The type of the job plan.
   * 
   * @example
   * Distillation
   */
  jobPlanType?: string;
  /**
   * @remarks
   * Note: According to the Alibaba Cloud tag system specification, this parameter name is in singular form.
   */
  tag?: CreateJobPlanRequestTag[];
  /**
   * @remarks
   * The ID of the scenario-specific distillation template, obtained from ListDistillationTemplates. If this parameter is not specified, a general-purpose job plan is created.
   * 
   * @example
   * advanced_cot_distill
   */
  templateId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 62469
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      jobPlanName: 'JobPlanName',
      jobPlanSteps: 'JobPlanSteps',
      jobPlanType: 'JobPlanType',
      tag: 'Tag',
      templateId: 'TemplateId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobPlanName: 'string',
      jobPlanSteps: { 'type': 'array', 'itemType': CreateJobPlanRequestJobPlanSteps },
      jobPlanType: 'string',
      tag: { 'type': 'array', 'itemType': CreateJobPlanRequestTag },
      templateId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobPlanSteps)) {
      $dara.Model.validateArray(this.jobPlanSteps);
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

