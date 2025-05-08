// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsRouteEntryListResponseBodyRouteEntrys } from "./DescribeEnsRouteEntryListResponseBodyRouteEntrys";


export class DescribeEnsRouteEntryListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the routes.
   */
  routeEntrys?: DescribeEnsRouteEntryListResponseBodyRouteEntrys[];
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      routeEntrys: 'RouteEntrys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      routeEntrys: { 'type': 'array', 'itemType': DescribeEnsRouteEntryListResponseBodyRouteEntrys },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routeEntrys)) {
      $dara.Model.validateArray(this.routeEntrys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

