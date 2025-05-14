// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLivePackageChannelGroupsResponseBodyLivePackageChannelGroups } from "./ListLivePackageChannelGroupsResponseBodyLivePackageChannelGroups";


export class ListLivePackageChannelGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The channel groups returned.
   */
  livePackageChannelGroups?: ListLivePackageChannelGroupsResponseBodyLivePackageChannelGroups[];
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
   * The request ID.
   * 
   * @example
   * 5D87B753-0250-5D9D-B248-D40C3271F864
   */
  requestId?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      livePackageChannelGroups: 'LivePackageChannelGroups',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePackageChannelGroups: { 'type': 'array', 'itemType': ListLivePackageChannelGroupsResponseBodyLivePackageChannelGroups },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.livePackageChannelGroups)) {
      $dara.Model.validateArray(this.livePackageChannelGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

