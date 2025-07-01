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
   * The job ID.
   * 
   * @example
   * rb-15****ed-r-1625****2441
   */
  jobId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * The job status. Valid values:
   * 
   * *   Running: The job is running.
   * *   Defragmenting: The job is defragmenting data.
   * *   PartialSuccess: The job is partially completed.
   * *   Success: The job is completed.
   * *   Fail: The job failed.
   * *   Cancelled: The job is canceled.
   * *   all (default)
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

