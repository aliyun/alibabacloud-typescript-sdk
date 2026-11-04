// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPictureSearchJobRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID of the image search application instance. You can call the [QueryPictureSearchApps](https://help.aliyun.com/document_detail/206608.html) operation to query instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fdc576d03c094faea9fa10fbf48c****
   */
  appInstanceId?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The job status. Valid values:
   * - 0: Initialized.
   * - 1: No data.
   * - 2: Running.
   * - 3: Succeeded.
   * - 4: Failed.
   * 
   * If you do not specify this parameter, jobs in all statuses are queried.
   * 
   * @example
   * 3
   */
  jobStatus?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Minimum value: 1. Maximum value: 50. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appInstanceId: 'AppInstanceId',
      currentPage: 'CurrentPage',
      jobStatus: 'JobStatus',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceId: 'string',
      currentPage: 'number',
      jobStatus: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

