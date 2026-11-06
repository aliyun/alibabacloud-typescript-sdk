// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobPlanResponseBodyJobPlanSteps extends $dara.Model {
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

export class GetJobPlanResponseBodyTags extends $dara.Model {
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

export class GetJobPlanResponseBody extends $dara.Model {
  /**
   * @example
   * 2026-09-18 10:00:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2026-09-18 10:30:00
   */
  gmtModifiedTime?: string;
  jobPlanCurrentStep?: string;
  jobPlanId?: string;
  jobPlanName?: string;
  jobPlanSteps?: GetJobPlanResponseBodyJobPlanSteps[];
  jobPlanType?: string;
  /**
   * @example
   * 1234567890123456
   */
  ownerId?: string;
  requestId?: string;
  tags?: GetJobPlanResponseBodyTags[];
  /**
   * @example
   * advanced_cot_distill
   */
  templateId?: string;
  /**
   * @example
   * 思维链推理蒸馏
   */
  templateName?: string;
  /**
   * @example
   * 1234567890123456
   */
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

