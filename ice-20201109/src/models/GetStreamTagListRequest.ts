// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStreamTagListRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the query time range, based on the tagging timestamp. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * ******b48fb04483915d4f2cd8******
   */
  mediaId?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * name-1
   */
  namespace?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * ****73f33c91-d59383e8280b****
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the search library.
   * 
   * @example
   * Stream_xxx
   */
  searchLibName?: string;
  /**
   * @remarks
   * The sorting order for the results. Valid values:
   * 
   * *   StartTime:Desc (default): Sort by creation time in descending order.
   * *   StartTime:Asc: Sort by creation time in ascending order.
   * 
   * @example
   * StartTime:Asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start of the query time range, based on the tagging timestamp. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2025-04-23T02:26:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      mediaId: 'MediaId',
      namespace: 'Namespace',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      searchLibName: 'SearchLibName',
      sortBy: 'SortBy',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      mediaId: 'string',
      namespace: 'string',
      nextToken: 'string',
      pageNo: 'number',
      pageSize: 'number',
      searchLibName: 'string',
      sortBy: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

