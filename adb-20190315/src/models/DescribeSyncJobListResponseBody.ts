// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSyncJobListResponseBodySyncJobs } from "./DescribeSyncJobListResponseBodySyncJobs";


export class DescribeSyncJobListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-j6c22lubl8d9l3989
   */
  DBClusterId?: number;
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 482B8BAE-6EC0-5C0E-B2AF-FD42A3FC5B67
   */
  requestId?: string;
  /**
   * @remarks
   * The queried synchronization jobs.
   */
  syncJobs?: DescribeSyncJobListResponseBodySyncJobs[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      syncJobs: 'SyncJobs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      syncJobs: { 'type': 'array', 'itemType': DescribeSyncJobListResponseBodySyncJobs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.syncJobs)) {
      $dara.Model.validateArray(this.syncJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

