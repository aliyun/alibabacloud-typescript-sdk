// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeJobHistoryResponseBodyDataJobs } from "./DescribeJobHistoryResponseBodyDataJobs";


export class DescribeJobHistoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The jobs.
   */
  jobs?: DescribeJobHistoryResponseBodyDataJobs[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 0 to 10000.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of jobs.
   * 
   * @example
   * 20
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      jobs: 'Jobs',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      jobs: { 'type': 'array', 'itemType': DescribeJobHistoryResponseBodyDataJobs },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

