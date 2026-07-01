// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTranscodeJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to filter jobs by their creation time. The time must be in UTC and formatted as `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2022-07-15T00:00:00Z
   */
  endOfCreateTime?: string;
  /**
   * @remarks
   * The token for the next page of results. Not required for the first page.
   * 
   * @example
   * ab4802364a2e49208c99efab82df****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - `CreateTimeDesc`: Sorts by creation time in descending order.
   * 
   * - `CreateTimeAsc`: Sorts by creation time in ascending order.
   * 
   * @example
   * CreateTimeDesc
   */
  orderBy?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1-100. Default: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters by job ID.
   * 
   * @example
   * 7b38a5d86f1e47838927b6e7ccb1****
   */
  parentJobId?: string;
  /**
   * @remarks
   * The start of the time range to filter jobs by their creation time. The time must be in UTC and formatted as `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2022-07-01T00:00:00Z
   */
  startOfCreateTime?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * 
   * - `Init`: Submitted.
   * 
   * - `Success`: Succeeded.
   * 
   * - `Fail`: Failed.
   * 
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endOfCreateTime: 'EndOfCreateTime',
      nextPageToken: 'NextPageToken',
      orderBy: 'OrderBy',
      pageSize: 'PageSize',
      parentJobId: 'ParentJobId',
      startOfCreateTime: 'StartOfCreateTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endOfCreateTime: 'string',
      nextPageToken: 'string',
      orderBy: 'string',
      pageSize: 'number',
      parentJobId: 'string',
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

