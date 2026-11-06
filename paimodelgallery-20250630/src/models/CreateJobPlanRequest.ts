// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobPlanRequestJobPlanSteps extends $dara.Model {
  jobPlanStepName?: string;
  jobPlanStepSpec?: { [key: string]: any };
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

export class CreateJobPlanRequest extends $dara.Model {
  jobPlanName?: string;
  jobPlanSteps?: CreateJobPlanRequestJobPlanSteps[];
  jobPlanType?: string;
  tag?: CreateJobPlanRequestTag[];
  /**
   * @example
   * advanced_cot_distill
   */
  templateId?: string;
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

