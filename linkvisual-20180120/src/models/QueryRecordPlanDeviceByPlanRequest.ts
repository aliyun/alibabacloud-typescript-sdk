// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecordPlanDeviceByPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The page number to return. Pages start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page. Minimum value: 1. Maximum value: 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
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

