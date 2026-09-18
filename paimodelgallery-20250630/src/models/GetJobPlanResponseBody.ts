// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobPlanResponseBodyJobPlanSteps extends $dara.Model {
  /**
   * @remarks
   * The generated PAIFlow PipelineRunId.
   * 
   * @example
   * pipeline-xxxxx
   */
  jobPlanStepId?: string;
  /**
   * @remarks
   * The job plan step name.
   * 
   * @example
   * DistillationDatasetSynthesis
   */
  jobPlanStepName?: string;
  /**
   * @remarks
   * The job plan step configuration.
   */
  jobPlanStepSpec?: { [key: string]: any };
  /**
   * @remarks
   * The job plan step type.
   * 
   * @example
   * PAIFlow
   */
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

export class GetJobPlanResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * foo
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class GetJobPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time of the job plan.
   * 
   * @example
   * 2026-09-18 10:00:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modified time of the job plan.
   * 
   * @example
   * 2026-09-18 10:30:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The current step.
   * 
   * @example
   * DatasetSynthesis
   */
  jobPlanCurrentStep?: string;
  /**
   * @remarks
   * The job plan ID.
   * 
   * @example
   * jp-xxxxxx
   */
  jobPlanId?: string;
  /**
   * @remarks
   * The job plan name, which is unique within the workspace.
   * 
   * @example
   * ModelGalleryxxx
   */
  jobPlanName?: string;
  /**
   * @remarks
   * The job plan steps.
   */
  jobPlanSteps?: GetJobPlanResponseBodyJobPlanSteps[];
  /**
   * @remarks
   * The job plan type.
   * 
   * @example
   * Distillation
   */
  jobPlanType?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID that owns the job plan.
   * 
   * @example
   * 1234567890123456
   */
  ownerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82-9624-EC2B1779848E
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetJobPlanResponseBodyTags[];
  /**
   * @remarks
   * The distillation template ID used to create the job plan. An empty value indicates that this is not a scenario-based distillation task.
   * 
   * @example
   * advanced_cot_distill
   */
  templateId?: string;
  /**
   * @remarks
   * The display name of the distillation template, localized based on the requested language.
   * 
   * @example
   * 思维链推理蒸馏
   */
  templateName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID that created the job plan.
   * 
   * @example
   * 1234567890123456
   */
  userId?: string;
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
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      jobPlanCurrentStep: 'JobPlanCurrentStep',
      jobPlanId: 'JobPlanId',
      jobPlanName: 'JobPlanName',
      jobPlanSteps: 'JobPlanSteps',
      jobPlanType: 'JobPlanType',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
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
      jobPlanSteps: { 'type': 'array', 'itemType': GetJobPlanResponseBodyJobPlanSteps },
      jobPlanType: 'string',
      ownerId: 'string',
      requestId: 'string',
      tags: { 'type': 'array', 'itemType': GetJobPlanResponseBodyTags },
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

