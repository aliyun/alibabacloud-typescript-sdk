// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLivePackageOriginEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The channel name.
   * 
   * This parameter is required.
   * 
   * @example
   * channel-1
   */
  channelName?: string;
  /**
   * @remarks
   * The channel group name.
   * 
   * This parameter is required.
   * 
   * @example
   * channel-group-1
   */
  groupName?: string;
  /**
   * @remarks
   * The endpoint name or description. Fuzzy match is supported.
   * 
   * @example
   * endpoint-
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort order by creation time. Valid values: asc and desc (default).
   * 
   * @example
   * desc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      groupName: 'GroupName',
      keyword: 'Keyword',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
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

