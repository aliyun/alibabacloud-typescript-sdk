// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJobPlanRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. If the tag key already exists, the tag is updated. Otherwise, a new tag is added.
   * 
   * @example
   * foo
   */
  key?: string;
  /**
   * @remarks
   * The tag key. If the tag key already exists, the tag is updated. Otherwise, a new tag is added.
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

export class UpdateJobPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The current step of the task plan. Set this parameter to `DatasetSynthesisAndModelTrain` for the full process or `DatasetSynthesisModelTrain` for step-by-step execution.
   * 
   * @example
   * DatasetSynthesisAndModelTrain
   */
  jobPlanCurrentStep?: string;
  /**
   * @remarks
   * The list of tags.
   */
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

