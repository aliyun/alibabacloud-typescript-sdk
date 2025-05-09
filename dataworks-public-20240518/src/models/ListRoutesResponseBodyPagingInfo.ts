// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRoutesResponseBodyPagingInfoRouteList } from "./ListRoutesResponseBodyPagingInfoRouteList";


export class ListRoutesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
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
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of network resource routing information obtained.
   */
  routeList?: ListRoutesResponseBodyPagingInfoRouteList[];
  /**
   * @remarks
   * All data entries
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      routeList: 'RouteList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      routeList: { 'type': 'array', 'itemType': ListRoutesResponseBodyPagingInfoRouteList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routeList)) {
      $dara.Model.validateArray(this.routeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

