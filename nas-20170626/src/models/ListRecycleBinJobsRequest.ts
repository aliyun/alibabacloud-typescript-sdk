// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecycleBinJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * rb-15****ed-r-1625****2441
   */
  jobId?: string;
  /**
   * @remarks
   * The current page number for paging.
   * 
   * Start value (default value): 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The task status. Valid values:
   * 
   * - Running: The task is running.
   * - Defragmenting: Data is being defragmented.
   * - PartialSuccess: The task partially succeeded.
   * - Success: The task succeeded.
   * - Fail: The task failed.
   * - Cancelled: The task is canceled.
   * - All (default): All statuses.
   * 
   * @example
   * All
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

