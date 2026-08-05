// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaInfoJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end time for filtering by task creation time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-07-15T00:00:00Z
   */
  endOfCreateTime?: string;
  /**
   * @remarks
   * Filters by jobId.
   * 
   * @example
   * 7b38a5d86f1e47838927b6e7ccb1****
   */
  jobId?: string;
  /**
   * @remarks
   * The token for the next page in consecutive paging query requests. This parameter is not required for the first page.
   * 
   * @example
   * ab4802364a2e49208c99efab82df****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * - CreateTimeDesc: sorts by creation time in descending order.
   * - CreateTimeAsc: sorts by creation time in ascending order.
   * 
   * @example
   * CreateTimeDesc
   */
  orderBy?: string;
  /**
   * @remarks
   * The page size. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time for filtering by task creation time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-07-01T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @remarks
   * The task status.
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

