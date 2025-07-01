// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLifecycleRetrieveJobsResponseBodyLifecycleRetrieveJobs } from "./ListLifecycleRetrieveJobsResponseBodyLifecycleRetrieveJobs";


export class ListLifecycleRetrieveJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the data retrieval tasks.
   */
  lifecycleRetrieveJobs?: ListLifecycleRetrieveJobsResponseBodyLifecycleRetrieveJobs[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BC7C825C-5F65-4B56-BEF6-98C56C7C****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data retrieval tasks.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lifecycleRetrieveJobs: 'LifecycleRetrieveJobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lifecycleRetrieveJobs: { 'type': 'array', 'itemType': ListLifecycleRetrieveJobsResponseBodyLifecycleRetrieveJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lifecycleRetrieveJobs)) {
      $dara.Model.validateArray(this.lifecycleRetrieveJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

