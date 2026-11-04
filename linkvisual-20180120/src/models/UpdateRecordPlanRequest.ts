// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecordPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the recording plan.
   * 
   * The name must be less than 48 characters in length and can contain letters, digits, and the following special characters: hyphens (-), underscores (_), at signs (@), periods (.), and colons (:).
   * 
   * This parameter is required.
   * 
   * @example
   * test1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the recording plan. You can call [QueryRecordPlans](https://help.aliyun.com/document_detail/107896.html) to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6c5a397bc17c4b48ace86f0f0c30****
   */
  planId?: string;
  /**
   * @remarks
   * The ID of the time template to be associated with the recording plan. You can call [QueryTimeTemplate](https://help.aliyun.com/document_detail/107890.html) to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 36f06322442e4e3f85a5ae8862c9****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      planId: 'PlanId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      planId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

