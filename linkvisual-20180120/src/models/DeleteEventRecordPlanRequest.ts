// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventRecordPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the intelligent alert event recording plan. You can call the [QueryEventRecordPlans](https://help.aliyun.com/document_detail/107907.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2e34a1989aa54debac22358aca7f****
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

