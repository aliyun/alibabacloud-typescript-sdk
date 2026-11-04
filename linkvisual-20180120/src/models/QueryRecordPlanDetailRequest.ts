// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecordPlanDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the recording plan. You can call [QueryRecordPlans](https://help.aliyun.com/document_detail/107896.html) to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 5b60bf0dd55944c19d7817442bc9****
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

