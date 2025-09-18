// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStreamTagListRequest extends $dara.Model {
  /**
   * @example
   * 2017-12-22T08:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * ******b48fb04483915d4f2cd8******
   */
  mediaId?: string;
  /**
   * @example
   * name-1
   */
  namespace?: string;
  /**
   * @example
   * ****73f33c91-d59383e8280b****
   */
  nextToken?: string;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * Stream_xxx
   */
  searchLibName?: string;
  /**
   * @example
   * StartTime:Asc
   */
  sortBy?: string;
  /**
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

