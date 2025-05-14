// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLivePackageChannelsResponseBodyLivePackageChannels } from "./ListLivePackageChannelsResponseBodyLivePackageChannels";


export class ListLivePackageChannelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The live package channels.
   */
  livePackageChannels?: ListLivePackageChannelsResponseBodyLivePackageChannels[];
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
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   */
  requestId?: string;
  /**
   * @remarks
   * The sort order. Valid values: asc and desc (default).
   * 
   * @example
   * asc/desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      livePackageChannels: 'LivePackageChannels',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePackageChannels: { 'type': 'array', 'itemType': ListLivePackageChannelsResponseBodyLivePackageChannels },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.livePackageChannels)) {
      $dara.Model.validateArray(this.livePackageChannels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

