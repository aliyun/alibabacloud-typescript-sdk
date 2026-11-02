// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVodPackagingConfigurationsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the video-on-demand packaging group.
   * 
   * @example
   * vod_hls
   */
  groupName?: string;
  /**
   * @remarks
   * The search keyword. The system returns the video-on-demand packaging configurations whose names contain the specified keyword.
   * 
   * @example
   * hls
   */
  keyword?: string;
  /**
   * @remarks
   * The page number for paging. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries to return on each page for paging. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort order. Default value: desc. Valid values:
   * - desc: Sorts the list in descending order of creation time.
   * - asc: Sorts the list in ascending order of creation time.
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

