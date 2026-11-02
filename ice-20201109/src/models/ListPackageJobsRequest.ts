// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPackageJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for filtering by job creation time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-07-15T00:00:00Z
   */
  endOfCreateTime?: string;
  /**
   * @remarks
   * Filters by job ID.
   * 
   * @example
   * 7b38a5d86f1e47838927b6e7ccb1****
   */
  jobId?: string;
  /**
   * @remarks
   * The token for the next page in continuous paging query. This parameter is not required for the first page.
   * 
   * @example
   * ab4802364a2e49208c99efab82df****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The sort order. Only two values are supported:
   * - CreateTimeDesc: descending by creation time.
   * - CreateTimeAsc: ascending by creation time.
   * 
   * @example
   * CreateTimeDesc
   */
  orderBy?: string;
  /**
   * @remarks
   * The page size. Valid values: 0 to 100. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time for filtering by job creation time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-07-01T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - Init: Submitted.
   * - Success: Succeeded.
   * - Fail: Failed.
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

