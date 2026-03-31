// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRunningJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the query starts. This parameter specifies the time when a job is submitted.
   * 
   * *   The time range that is specified by the **from** and **to** request parameters is a closed interval. The start time and end time are included in the range. If the value of **from** is the same as the value of **to**, the time range is invalid, and a null value is returned.
   * *   The value is a UNIX timestamp that represents the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1683785928
   */
  from?: number;
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
   * The number of entries per page. Default value: 10. Maximum value: 20.
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
  /**
   * @remarks
   * The time when the query ends. This parameter specifies the time when a job is submitted.
   * 
   * *   The time interval that is specified by the **from** and **to** request parameters is a closed interval. The start time and end time are included in the interval. If the value of **from** is the same as the value of **to**, the interval is invalid, and a null value is returned.
   * *   The value is a UNIX timestamp that represents the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 1683612946
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'from',
      jobOwnerList: 'jobOwnerList',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      quotaNicknameList: 'quotaNicknameList',
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      jobOwnerList: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      quotaNicknameList: { 'type': 'array', 'itemType': 'string' },
      to: 'number',
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

