// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVodPackagingAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the packaging group.
   * 
   * @example
   * vod_hls
   */
  groupName?: string;
  /**
   * @remarks
   * The search keyword. The names of the returned assets are prefixed with this keyword.
   * 
   * @example
   * movie
   */
  keyword?: string;
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
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sorting order of the assets based on the time when they were ingested. Valid values:
   * 
   * *   desc (default): descending order.
   * *   asc: ascending order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      keyword: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

