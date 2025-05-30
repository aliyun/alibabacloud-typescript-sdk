// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRunningJobsResponseBodyDataRunningJobInfoList } from "./GetRunningJobsResponseBodyDataRunningJobInfoList";


export class GetRunningJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of jobs in the running state.
   */
  runningJobInfoList?: GetRunningJobsResponseBodyDataRunningJobInfoList[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 64
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      runningJobInfoList: 'runningJobInfoList',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      runningJobInfoList: { 'type': 'array', 'itemType': GetRunningJobsResponseBodyDataRunningJobInfoList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.runningJobInfoList)) {
      $dara.Model.validateArray(this.runningJobInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

