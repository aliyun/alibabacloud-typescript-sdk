// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobPlanRequestTag extends $dara.Model {
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

export class UpdateJobPlanRequest extends $dara.Model {
  jobPlanCurrentStep?: string;
  tag?: UpdateJobPlanRequestTag[];
  static names(): { [key: string]: string } {
    return {
      jobPlanCurrentStep: 'JobPlanCurrentStep',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobPlanCurrentStep: 'string',
      tag: { 'type': 'array', 'itemType': UpdateJobPlanRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

