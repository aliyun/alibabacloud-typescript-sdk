// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIAlarmRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID. This is the task ID associated with the alert rule.
   * 
   * You can obtain this value from DIJobPaging.DIJobs[].DIJobId in the ListDIJobs response.
   * 
   * This parameter is required.
   * 
   * @example
   * 11260
   */
  DIJobId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

