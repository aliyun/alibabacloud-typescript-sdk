// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDIJobsResponseBodyPagingInfoDIJobs } from "./ListDijobsResponseBodyPagingInfoDijobs";


export class ListDIJobsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The synchronization tasks returned.
   */
  DIJobs?: ListDIJobsResponseBodyPagingInfoDIJobs[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobs: 'DIJobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobs: { 'type': 'array', 'itemType': ListDIJobsResponseBodyPagingInfoDIJobs },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DIJobs)) {
      $dara.Model.validateArray(this.DIJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

