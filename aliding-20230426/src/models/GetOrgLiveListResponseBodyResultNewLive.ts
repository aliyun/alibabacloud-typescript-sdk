// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetOrgLiveListResponseBodyResultNewLiveLiveList } from "./GetOrgLiveListResponseBodyResultNewLiveLiveList";


export class GetOrgLiveListResponseBodyResultNewLive extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  /**
   * @example
   * []
   */
  liveList?: GetOrgLiveListResponseBodyResultNewLiveLiveList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'HasMore',
      liveList: 'LiveList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      liveList: { 'type': 'array', 'itemType': GetOrgLiveListResponseBodyResultNewLiveLiveList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.liveList)) {
      $dara.Model.validateArray(this.liveList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

