// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJobResourceUsageShrinkRequest extends $dara.Model {
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
  jobOwnerListShrink?: string;
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
  quotaNicknameListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      jobOwnerListShrink: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameListShrink: 'quotaNicknameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      jobOwnerListShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

