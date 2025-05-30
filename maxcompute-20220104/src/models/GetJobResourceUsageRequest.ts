// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResourceUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The date that is accurate to the day part for the query. The date must be in the yyyy-MM-dd format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-05-15
   */
  date?: string;
  /**
   * @remarks
   * The list of job executors.
   */
  jobOwnerList?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of nicknames of quotas that are used by jobs.
   */
  quotaNicknameList?: string[];
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      jobOwnerList: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameList: 'quotaNicknameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      jobOwnerList: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.jobOwnerList)) {
      $dara.Model.validateArray(this.jobOwnerList);
    }
    if(Array.isArray(this.quotaNicknameList)) {
      $dara.Model.validateArray(this.quotaNicknameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

