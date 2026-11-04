// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRecordPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the recording plan. You can call the [QueryRecordPlans](https://help.aliyun.com/document_detail/107896.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6c5a397bc17c4b48ace86f0f0c30****
   */
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

