// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobPlanJobPlanSteps extends $dara.Model {
  jobPlanStepId?: string;
  jobPlanStepName?: string;
  jobPlanStepSpec?: { [key: string]: any };
  jobPlanStepType?: string;
  static names(): { [key: string]: string } {
    return {
      jobPlanStepId: 'JobPlanStepId',
      jobPlanStepName: 'JobPlanStepName',
      jobPlanStepSpec: 'JobPlanStepSpec',
      jobPlanStepType: 'JobPlanStepType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobPlanStepId: 'string',
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

export class JobPlanTags extends $dara.Model {
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

export class JobPlan extends $dara.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  jobPlanCurrentStep?: string;
  jobPlanId?: string;
  jobPlanName?: string;
  jobPlanSteps?: JobPlanJobPlanSteps[];
  jobPlanType?: string;
  ownerId?: string;
  tags?: JobPlanTags[];
  /**
   * @remarks
   * The distillation template ID used when creating the task plan. An empty value indicates that this is not a scenario-specific distillation task.
   * 
   * @example
   * advanced_cot_distill
   */
  templateId?: string;
  /**
   * @remarks
   * The display name of the distillation template used, localized based on the language specified in the request.
   * 
   * @example
   * Chain-of-Thought Reasoning Distillation
   */
  templateName?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      jobPlanCurrentStep: 'JobPlanCurrentStep',
      jobPlanId: 'JobPlanId',
      jobPlanName: 'JobPlanName',
      jobPlanSteps: 'JobPlanSteps',
      jobPlanType: 'JobPlanType',
      ownerId: 'OwnerId',
      tags: 'Tags',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      jobPlanCurrentStep: 'string',
      jobPlanId: 'string',
      jobPlanName: 'string',
      jobPlanSteps: { 'type': 'array', 'itemType': JobPlanJobPlanSteps },
      jobPlanType: 'string',
      ownerId: 'string',
      tags: { 'type': 'array', 'itemType': JobPlanTags },
      templateId: 'string',
      templateName: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobPlanSteps)) {
      $dara.Model.validateArray(this.jobPlanSteps);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

