// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLivePackageOriginEndpointsResponseBodyLivePackageOriginEndpoints } from "./ListLivePackageOriginEndpointsResponseBodyLivePackageOriginEndpoints";


export class ListLivePackageOriginEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The origin endpoints returned.
   */
  livePackageOriginEndpoints?: ListLivePackageOriginEndpointsResponseBodyLivePackageOriginEndpoints[];
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
   * b9f90a7ac8904db28dc18e0c2a72c75d
   */
  requestId?: string;
  /**
   * @remarks
   * The sort order. Valid values: `asc` and `desc` (default).
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
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      livePackageOriginEndpoints: 'LivePackageOriginEndpoints',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sortBy: 'SortBy',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePackageOriginEndpoints: { 'type': 'array', 'itemType': ListLivePackageOriginEndpointsResponseBodyLivePackageOriginEndpoints },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      sortBy: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.livePackageOriginEndpoints)) {
      $dara.Model.validateArray(this.livePackageOriginEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

