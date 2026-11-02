// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaConvertJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the creation time filter. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-07-15T00:00:00Z
   */
  endOfCreateTime?: string;
  /**
   * @remarks
   * Filters the results by job ID.
   * 
   * @example
   * 88c6ca184c0e47098a5b665e2****
   */
  jobId?: string;
  /**
   * @remarks
   * The paging token for the next page in a continuous paged query (not present for the first page).
   * 
   * @example
   * ab4802364a2e49208c99efab82dfa8e8
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - CreateTimeDesc: Descending order by creation time.
   * - CreateTimeAsc: Ascending order by creation time.
   * 
   * @example
   * CreateTimeDesc
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 0 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the creation time filter. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-07-01T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @remarks
   * The job status. Valid values: 
   * - Inited: Submitted. 
   * - Running: Running.
   * - Complete: Completed. 
   * - Error: Error.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endOfCreateTime: 'EndOfCreateTime',
      jobId: 'JobId',
      nextPageToken: 'NextPageToken',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      startOfCreateTime: 'StartOfCreateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfCreateTime: 'string',
      jobId: 'string',
      nextPageToken: 'string',
      orderBy: 'string',
      pageSize: 'number',
      startOfCreateTime: 'string',
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

